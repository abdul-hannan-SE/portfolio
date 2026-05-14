# Global Logistics Shipment Inventory

Admin portal and APIs for managing vehicle shipments from yards through vessels to ports. Built for high-volume logistics operations with role-based admin tools, bulk workflows, and analytics.

**Live demo:** [global-logistics-shipment-inventory.vercel.app](https://global-logistics-shipment-inventory.vercel.app)

> **Using this README on GitHub:** copy this file to your repository root as `README.md`. For screenshots, create a `docs/screenshots/` folder and add the same PNG names as in your portfolio (`assets/global-logistics/`), or update the image paths below.

---

## Features

- **Shipments** — Filter by date type, job number, chassis, vessel, POD, customer, yard, and status; add single or multiple records; export data; per-row view / edit / delete; photo counts linked to media storage.
- **Bulk actions** — Multi-select rows for assign vessel, gate out / status updates, or batch delete.
- **Vessels** — Create vessels (name, job number, ETD, shipping line, POD) and assign them to many shipments at once.
- **Customers** — Customer directory with search, credentials management, and edit flows.
- **Analytics** — Overview dashboard (totals, shipments added today, status breakdown) and **Gate analytics** (gate in/out, in yard, net flow, monthly charts).
- **Migration** — Data migration utilities (as exposed in the admin navigation).
- **AWS integration** — Object storage for shipment photos and scalable file handling.

---

## Tech stack

| Layer        | Technologies                          |
| ------------ | ------------------------------------- |
| Runtime      | Node.js                               |
| API          | Express.js, REST                      |
| Database     | MongoDB                               |
| Media        | AWS (e.g. S3)                         |
| Admin UI     | React (or your stack — adjust here)   |
| Deploy       | Vercel (example)                      |

---

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

Create a `.env` (or `.env.local`) with your real values, for example:

```env
MONGODB_URI=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET=
# JWT / session secrets, etc.
```

```bash
npm run dev
```

Adjust scripts (`dev`, `build`, `start`) to match your project.

---

## Project structure

Document your own layout here. For example:

- `src/` or `server/` — Express routes, services, validators  
- `client/` or `admin/` — Admin SPA  
- `models/` — Mongoose (or equivalent) schemas  

---

## Screenshots

Place files under `docs/screenshots/` with these names (see portfolio `assets/global-logistics/` for reference exports):

| File | Description |
| ---- | ----------- |
| `01-shipments.png` | Shipments grid, filters, export |
| `02-shipments-bulk.png` | Bulk select and bulk action bar |
| `03-assign-vessel-modal.png` | Assign / create vessel modal |
| `04-customers.png` | Customers admin |
| `05-vessels.png` | Vessel list |
| `06-analytics-overview.png` | Analytics overview KPIs |
| `07-gate-analytics.png` | Gate movement analytics |

Preview (renders after you add the files above):

![Shipments](docs/screenshots/01-shipments.png)
![Bulk actions](docs/screenshots/02-shipments-bulk.png)
![Assign vessel](docs/screenshots/03-assign-vessel-modal.png)
![Customers](docs/screenshots/04-customers.png)
![Vessels](docs/screenshots/05-vessels.png)
![Analytics overview](docs/screenshots/06-analytics-overview.png)
![Gate analytics](docs/screenshots/07-gate-analytics.png)

---

## API overview

Summarize main route groups (replace with your real paths):

- `GET/POST /api/shipments` — list, create, filters  
- `PATCH /api/shipments/bulk` — bulk gate out, assign vessel, etc.  
- `GET/POST /api/vessels`, `/api/customers`  
- `GET /api/analytics/overview`, `/api/analytics/gates`  

---

## License

Proprietary / MIT / other — **you choose** and update this section.

---

## Author

**Abdul Hannan** — Backend & full-stack development.  
Portfolio: [link your portfolio when ready]
