# Global Logistics — Shipment Inventory Platform

**Track vehicles from storage yard to vessel to port — with photos, customers, and analytics in one admin platform.**

Built for **high-volume vehicle forwarding and logistics** (e.g. Japanese export operations) where teams need reliable shipment records, bulk updates, and customer visibility — not another overloaded spreadsheet.

**Live project:** [github.com/abdul-hannan-SE/global_logistics_inventory](https://github.com/abdul-hannan-SE/global_logistics_inventory)

### Copy for LinkedIn (short post)

> **Global Logistics Shipment Inventory** — a platform I built for high-volume vehicle forwarding: track shipments yard → vessel → port, bulk updates, cloud photos, analytics, and a customer portal so clients see their own cargo without endless emails. Overview + screenshots on GitHub: https://github.com/abdul-hannan-SE/global_logistics_inventory  
> #Backend #Logistics #SaaS #NodeJS #Portfolio

*Attach key screenshots (shipments, customer dashboard, analytics) or link to the repo.*

---

## At a glance

| | |
| --- | --- |
| **What it is** | An operations platform for staff (and customers) to see, update, and report on vehicle shipments end to end. |
| **Who it helps** | Logistics admins, operations teams, customer service, and clients who need their own shipment view. |
| **Why it exists** | Thousands of shipments, photos, and status changes are hard to manage safely in Excel — this system is built for that scale. |

---

## The problem it solves

Forwarding and yard operations typically struggle with:

- Shipment lists that are hard to filter and export when volume spikes  
- Photos scattered across drives, emails, and ad-hoc folders  
- Vessel and customer data living in different tools  
- Customers calling for updates because they have no self-service view  
- Bulk changes (assign vessel, gate out, download photos) done row by row  

This platform **centralizes shipments**, supports **batch actions**, stores **photos in the cloud**, and offers **analytics** plus a **customer portal** so everyone works from the same live data.

---

## What you can do (no coding required)

### Shipments hub  
Search and filter by date, job number, chassis, vessel, port, customer, yard, status, and more. Add records, export data, and act on individual rows — including photo counts per shipment.

### Bulk operations  
Select many shipments at once: assign vessels, update gate/status, download photos in bulk, and other batch workflows that save hours on busy days.

### Vessels  
Maintain vessel schedules and details — job numbers, lines, sailing dates, ports — in one place.

### Customers (admin)  
Manage customer accounts and access so the right clients see the right shipments.

### Analytics  
Dashboards for operational overview and deeper reporting (including gate-style movement insights where enabled).

### Customer portal  
Customers sign in to **their own dashboard**: search, filter, and export **their** shipments without calling operations for every update.

### Photo management  
Attach and manage shipment photos with cloud storage — structured galleries instead of lost attachments.

### Secure access  
Separate login experiences for **admin staff** and **customers**, so internal tools stay internal.

---

## See it in action

Screenshots below show real screens from the platform.  
(Full gallery: [sreenshots folder on GitHub](https://github.com/abdul-hannan-SE/global_logistics_inventory/tree/main/sreenshots) — folder name is `sreenshots` in the repo today.)

### Shipments — main operations list  
The core grid: find any shipment quickly and work from one screen.

![Shipments](./sreenshots/shipments.png)

### Bulk selection & photo download  
Handle many shipments together — including photo-related bulk work.

![Bulk shipments & photos](./sreenshots/02-shipments-bulk-download-photos.png)

### Vessels (sample / export view)  
Vessel-related listing and export-style UI.

![Vessels sample](./sreenshots/05-vessels.png)

### Vessels management  
Maintain the vessel catalog operations rely on.

![Vessels](./sreenshots/vessels.png)

### Customers (admin)  
Internal customer directory and administration.

![Customers](./sreenshots/customer.png)

### Customer dashboard  
What clients see when they log in — their shipments, their filters, their exports.

![Customer dashboard](./sreenshots/customer%20dashboard.png)

### Analytics overview  
High-level operational metrics.

![Analytics](./sreenshots/analytics.png)

### Analytics (detail)  
Additional charts and reporting views.

![Analytics detail](./sreenshots/analytics-1.png)

### Photos & cloud storage  
Shipment media managed with cloud-backed storage.

![Photos](./sreenshots/photos%20aws.png)

### Sign in  
Secure entry for staff and customer roles.

![Login](./sreenshots/login.png)

---

## Outcomes for the business

- **Fewer status errors** when updating many shipments at once  
- **Faster customer service** with a self-service portal  
- **Audit-friendly photo history** tied to each shipment  
- **Operational visibility** through analytics instead of manual reports  
- **Scale** for high-volume yard-to-port workflows  

---

## Built by

**Abdul Hannan** — Backend & full-stack developer  
Portfolio: *[add your portfolio URL]*  
LinkedIn: *[add your LinkedIn URL]*  

Building logistics, inventory, or operations tools? Connect on LinkedIn or via my portfolio.

---

<details>
<summary><strong>For developers</strong> (technical details)</summary>

### Tech stack

| Area | Tools |
| --- | --- |
| API | Node.js, Express.js, REST |
| Data | MongoDB |
| Media | AWS (e.g. S3) |
| Admin UI | React |
| Deploy | Vercel or your host |

### Repository setup

```bash
git clone https://github.com/abdul-hannan-SE/global_logistics_inventory.git
cd global_logistics_inventory
npm install
npm run dev
```

Set `.env` values for database, AWS credentials, and auth/session secrets before production deploy.

### Screenshot folder

Images live under `./sreenshots/` on the default branch. If you rename the folder to `screenshots`, update paths in this README.

> **GitHub:** Copy this file to the repository root as `README.md`.

</details>
