# woodpecker-demo

Minimal Vite frontend used to exercise a local Woodpecker CI instance.

- `npm run dev` – dev server
- `npm test` – unit tests (Vitest)
- `npm run build` – production build into `dist/`
- `docker build -t woodpecker-demo .` – nginx image serving `dist/`

CI: `.woodpecker.yml` runs install → test → build → image build (Kaniko, no push).
