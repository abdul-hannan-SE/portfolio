# NS Forwarding — Operations & Shipment Management Platform

**Run forwarding operations from one place: master shipments, house bills of lading, client accounts, invoices, and upcoming shipment reports.**

Built for **NS Forwarding** (Japan — remote delivery from Pakistan) to replace fragmented spreadsheets and manual handoffs with a single operations platform for staff who manage international vehicle forwarding day to day.

**Project overview:** [github.com/abdul-hannan-SE/nsforwarding](https://github.com/abdul-hannan-SE/nsforwarding)

### Copy for LinkedIn (short post)

> I built the **NS Forwarding** operations platform while working remotely with a Japanese forwarding company — master shipments, house BLs, client statements, invoicing, and automated upcoming shipment reports in one system. Screenshots and plain-English overview on GitHub (no code required): https://github.com/abdul-hannan-SE/nsforwarding  
> #Backend #Logistics #Forwarding #NodeJS #RemoteWork #Portfolio

*Attach 3–5 screenshots (dashboard, master shipments, clients, invoice, reports) or link to the repo.*

### Demo video (optional)

**Yes — a short walkthrough video helps a lot** on LinkedIn and GitHub. Aim for **60–90 seconds**, no code on screen unless you zoom a UI only.

| Platform | What to upload |
| --- | --- |
| **LinkedIn** | Native video post (≤10 min; keep under **200 MB** and ~**3–5 MB** is ideal for feed). Or upload to YouTube and link in post. |
| **GitHub** | Put `demo.mp4` in repo (`screenshots/` or `docs/`) and link in README — see [Demo video](#demo-video) below. GitHub plays files in-browser; stay under **25–50 MB** if possible. |
| **Portfolio** | Save as `assets/nsforwarding/demo.mp4`, then set `demoVideo: "assets/nsforwarding/demo.mp4"` in `js/portfolio-data.js`. |

**Keep file size small (screen recordings are huge by default):**

1. **Before recording:** Set display to **1920×1080** or **1280×720**, close extra monitors, use **browser zoom 100%**, hide bookmarks bar.  
2. **While recording:** Use **OBS Studio** (free) or **Windows Snipping Tool → Screen recording** — record only the **browser window**, not full 4K desktop.  
3. **After recording — compress (pick one):**  
   - **HandBrake** (free): preset *Web / Gmail Large 3 Minutes 720p30*, target **~5–15 MB**.  
   - **FFmpeg** (command line):  
     ```bash
     ffmpeg -i raw.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k demo.mp4
     ```  
     Lower **crf** = better quality, bigger file (`23` = nicer, `28` = smaller).  
   - **Clipchamp** (Windows, free): export **720p**, **MP4**, quality **Medium**.  
4. **Trim** dead time in CapCut, Clipchamp, or DaVinci Resolve (free).  
5. **No audio?** Export without audio (`-an` in FFmpeg) to save ~30% size.

**Simple script (60 s):** Dashboard → create/open master shipment → house BL → clients & statement → invoice → send upcoming report → close.

---

## At a glance

| | |
| --- | --- |
| **What it is** | A web-based operations hub for forwarding teams: shipments, documentation (BLs), clients, money, and customer-facing reports. |
| **Who it helps** | Operations staff, finance, and management at a forwarding company — plus clients who receive statements and shipment updates. |
| **Why it exists** | Forwarding involves many linked records (master vs house shipments, BLs, payments, notices). One system reduces errors and speeds up reporting to clients. |

---

## The problem it solves

International forwarding teams often deal with:

- **Master shipments** and **house shipments** tracked in different files  
- **Vessel schedules and ETAs** updated manually and shared late with clients  
- **Bills of lading (BL)** details scattered across emails and folders  
- **Client balances** and **payment history** that don’t match shipment status  
- **Invoices** created manually from operational data  
- **Upcoming shipment reports** sent by hand to many clients  
- **Regulatory / notice workflows** (e.g. ANF-style notices) without a clear audit trail  

This platform connects those workflows so operations, finance, and client communication use **the same live data**.

---

## What you can do (no coding required)

### Dashboard with statistics  
See operational KPIs and activity at a glance — a home base for managers and daily staff.

### Master shipments  
Browse and manage **master-level** shipment records that anchor house-level detail.

### Create master shipment  
Add new master shipments through a guided flow so data is captured consistently from the start.

### Vessel list  
View and manage **vessels** tied to forwarding operations — schedules, lines, and ports in one list.

### Update vessel ETA  
Update **estimated time of arrival (ETA)** and related vessel details so operations and clients stay aligned.

### House shipments & BLs  
Work with **house shipments** and related **bill of lading** information in one area (house BL / master BL views).

### Clients  
Directory of forwarding clients with search and access to each account.

### Client details  
Deep view on a single client — shipments, financial context, and operational history in one place.

### Client statements  
Generate and review **client statements** for billing and reconciliation.

### Client payment history  
Track **payments received** against client accounts over time.

### Invoicing  
Create and manage **invoices** tied to forwarding operations.

### Upcoming shipment report  
Prepare **upcoming shipment** reports clients expect on a regular schedule.

### Send upcoming shipment reports  
Distribute reports to clients from the platform instead of manual email batches.

### ANF notice  
Handle **ANF notice** workflows as part of compliant forwarding operations (wording aligned to your business process).

---

## Demo video

After you record and compress a walkthrough, add it to the repo as `demo.mp4` (root or `docs/`) and link it here, or embed a YouTube URL:

```markdown
[![Watch the demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
```

---

## See it in action

Screenshots live on GitHub: [abdul-hannan-SE/nsforwarding/screenshots](https://github.com/abdul-hannan-SE/nsforwarding/tree/main/screenshots)  
Portfolio gallery uses the same **16** files under `assets/nsforwarding/` locally.

### Dashboard with statistics  
Operational overview and key stats for the forwarding business.

![Dashboard](./screenshots/dashboard%20with%20stats.png)

### Master shipments  
List and management of master shipment records.

![Master shipments](./screenshots/master_shipments.png)

### Create master shipment  
Flow to register a new master shipment.

![Create master shipment](./screenshots/create_master_shipment.png)

### Vessel list  
Vessel catalog used across shipments and reporting.

![Vessel list](./screenshots/vessel_list.png)

### Update vessel ETA  
Edit vessel ETA and related sailing details.

![Update vessel ETA](./screenshots/update_ETA_Vessel.png)

### House shipments or BLs  
House-level shipments and BL-related records.

![House shipments](./screenshots/house_shipments_or_bls.png)

### House BL  
House bill of lading detail view.

![House BL](./screenshots/house_bl.png)

### Master BL  
Master bill of lading detail view.

![Master BL](./screenshots/master_bl.png)

### Clients  
Client listing for the forwarding business.

![Clients](./screenshots/clients.png)

### Client details  
Single-client operational and account view.

![Client details](./screenshots/client_details.png)

### Client statement  
Statement view for client billing and balances.

![Client statement](./screenshots/clients_statement.png)

### Client payment history  
Payment history against client accounts.

![Payment history](./screenshots/clients_payment_hiustory.png)

### Invoice  
Invoicing screen tied to operations.

![Invoice](./screenshots/invoice.png)

### Upcoming shipment report  
Report preparation for upcoming movements.

![Upcoming shipment report](./screenshots/upcomming_shipment_report.png)

### Send upcoming shipment reports  
Bulk or scheduled distribution of reports to clients.

![Send reports](./screenshots/send_upcoming_shipment_reports.png)

### ANF notice  
Notice workflow screen for forwarding compliance.

![ANF notice](./screenshots/ANF_NOTICE.png)

---

## Outcomes for the business

- **One platform** for shipments, BLs, clients, and billing  
- **Faster client reporting** with upcoming shipment reports built from live data  
- **Clearer finance handoff** via statements, payment history, and invoices  
- **Less duplicate data entry** between operations and accounts  
- **Remote-friendly** delivery for an international forwarding team (Japan ↔ Pakistan collaboration)  

---

## How this relates to my other logistics work

| Project | Focus |
| --- | --- |
| **NS Forwarding** (this) | Master/house shipments, BLs, clients, invoices, client reports — core forwarding operations. |
| **Global Logistics Shipment Inventory** | High-volume vehicle shipment grid, yard-to-port tracking, photos, customer portal, analytics. |

Both support real logistics businesses; this README describes the **NS Forwarding operations platform** specifically.

---

## Built by

**Abdul Hannan** — Backend & full-stack developer  
Developed while **Software Developer (Remote)** at NS Forwarding, Japan (March 2025 – February 2026).  
Portfolio: *[add your portfolio URL]*  
LinkedIn: [linkedin.com/in/abdul-hannan-choudhary-866a493bb](https://linkedin.com/in/abdul-hannan-choudhary-866a493bb)

---

<details>
<summary><strong>For developers</strong> (technical details)</summary>

### Tech stack (typical for this build)

| Area | Tools |
| --- | --- |
| API | Node.js, Express.js, REST |
| Data | MongoDB |
| Integrations | Third-party APIs (per business needs) |
| Infrastructure | AWS, cPanel, Zoho (production hosting) |
| UI | Web admin (e.g. React — adjust to match your repo) |

### Repository setup

```bash
git clone https://github.com/abdul-hannan-SE/nsforwarding.git
cd nsforwarding
npm install
npm run dev
```

Configure `.env` for database, auth, email/report delivery, and any external APIs before production.

### Screenshot filenames (`screenshots/`)

`dashboard with stats.png` · `master_shipments.png` · `create_master_shipment.png` · `vessel_list.png` · `update_ETA_Vessel.png` · `house_shipments_or_bls.png` · `house_bl.png` · `master_bl.png` · `clients.png` · `client_details.png` · `clients_statement.png` · `clients_payment_hiustory.png` · `invoice.png` · `upcomming_shipment_report.png` · `send_upcoming_shipment_reports.png` · `ANF_NOTICE.png`

> **GitHub:** Copy this file to the repository root as `README.md`. Screenshots are already in `screenshots/` — you can delete `screenshots/test.md` if it was only a placeholder.

</details>
