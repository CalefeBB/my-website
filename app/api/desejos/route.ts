import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export interface Desejo {
  id: string;
  texto: string;
  link?: string;
  criadoEm: string;
}

// GET — retrieve all wishes
export async function GET() {
  try {
    const desejos: Desejo[] = (await kv.get('desejos')) ?? [];
    return NextResponse.json(desejos);
  } catch {
    return NextResponse.json({ error: 'Erro ao buscar desejos.' }, { status: 500 });
  }
}

// POST — add a new wish
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { texto, link } = body;

    if (!texto || typeof texto !== 'string' || texto.trim().length === 0) {
      return NextResponse.json({ error: 'O desejo não pode estar vazio.' }, { status: 400 });
    }

    const desejos: Desejo[] = (await kv.get('desejos')) ?? [];

    const novo: Desejo = {
      id: Date.now().toString(),
      texto: texto.trim().slice(0, 200),
      link: link && typeof link === 'string' ? link.trim().slice(0, 500) : undefined,
      criadoEm: new Date().toISOString(),
    };

    desejos.push(novo);
    await kv.set('desejos', desejos);

    return NextResponse.json(novo, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erro ao salvar desejo.' }, { status: 500 });
  }
}
