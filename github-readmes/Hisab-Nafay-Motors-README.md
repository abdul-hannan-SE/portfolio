# Hisab Nafay Motors

**Hisab** (حساب — *accounting / ledger*) — multi-branch dealership management for vehicle stock, sales, expenses, and financial reporting. Replaces fragmented spreadsheets with one operational system.

> **Using this README on GitHub:** copy this file to your repository root as `README.md`. Add screenshots under `docs/screenshots/` (same filenames as below) or change paths to match your repo.

---

## Features

- **Multi-branch inventory** — Stock levels and vehicle units synced across branches.
- **Sales** — Sales flows, reporting, and revenue visibility.
- **Expenses** — Operational expense tracking.
- **Accounts & ledger** — Financial records and ledger-style views.
- **Terminal** — Operational terminal / quick-entry style workflows (adjust wording to match your app).
- **Currency** — Multi-currency or conversion support where configured.
- **Dashboard** — Unified home view for KPIs and daily operations.

---

## Tech stack

| Layer     | Technologies                    |
| --------- | ------------------------------- |
| Framework | Next.js                         |
| UI        | React, Tailwind CSS             |
| Database  | MongoDB                         |
| Auth      | *(document your auth approach)* |
| Deploy    | Vercel or your host             |

---

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

Environment (example — replace with your real variables):

```env
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
# Add others your app requires
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or your configured port).

---

## Screenshots

Suggested filenames (align with your portfolio `assets/hisab/` gallery):

| File | Area |
| ---- | ---- |
| `01-dashboard-home.png` | Dashboard home |
| `02-terminal.png` | Terminal |
| `03-stock.png` | Stock |
| `04-sales.png` | Sales |
| `05-expenses.png` | Expenses |
| `06-accounts-ledger.png` | Accounts ledger |
| `07-vehicle-unit.png` | Vehicle unit |

Preview (renders after you add the files above):

![Dashboard](docs/screenshots/01-dashboard-home.png)
![Terminal](docs/screenshots/02-terminal.png)
![Stock](docs/screenshots/03-stock.png)
![Sales](docs/screenshots/04-sales.png)
![Expenses](docs/screenshots/05-expenses.png)
![Accounts ledger](docs/screenshots/06-accounts-ledger.png)
![Vehicle unit](docs/screenshots/07-vehicle-unit.png)

---

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Development server |
| `npm run build`| Production build   |
| `npm run start`| Production server  |
| `npm run lint` | Lint (if configured)|

---

## Deployment

Typical flow for Vercel:

1. Connect the GitHub repository to Vercel.  
2. Set production environment variables to match `.env`.  
3. Deploy; verify MongoDB IP allowlist / Atlas network access.

---

## License

Proprietary / MIT / other — **you choose** and update this section.

---

## Author

**Abdul Hannan** — Backend & full-stack development.  
Portfolio: [link your portfolio when ready]
