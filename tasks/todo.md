# Wishlist Feature - "A Empregada" Theme

## Feature
Add a birthday wishlist feature where girlfriend submits presents she wants,
and boyfriend views them via a secret URL.

## Stack
- Storage: Vercel KV (Redis)
- Protection: Secret URL
- Theme: "A Empregada" Brazilian telenovela

## Pages
- `/lista` — public page for girlfriend to submit wishes
- `/ver-pedidos-secretos-m4r14` — secret URL for boyfriend to view all wishes

## Tasks
- [x] Write plan
- [ ] Set up git branch
- [ ] Install @vercel/kv
- [ ] Create API route `app/api/desejos/route.ts` (GET + POST)
- [ ] Create `/lista` page with themed form
- [ ] Create secret view page
- [ ] Commit and push

## Secret URL
`/ver-pedidos-secretos-m4r14`
