# Pastor's Birthday Surprise Website

_A digital celebration of faith, love & legacy_

---

## 📌 Version Info

- **Version:** 2.0 — Final
- **Date:** April 2026
- **Status:** Approved — Ready to Build
- **Prepared by:** Birthday Planning Team
- **Stack:** Next.js + Supabase + Vercel

---

## ⚠️ Confidential

For internal planning use only.

---

# 1. Project Overview

## 1.1 Purpose

This document defines the finalized product requirements for a surprise birthday website dedicated to celebrating a church pastor and mentor.

The site serves as a digital tribute, bringing together:

- Photos
- Tribute videos
- Personal letters

All in one warm and elegant online experience.

---

## 1.2 Project Goals

- Create a warm, celebratory online space
- Allow visitors to submit birthday letters
- Present a curated photo gallery
- Embed protected tribute videos
- Deliver a polished, mobile-friendly site in 2 weeks

---

## 1.3 Key Decisions

### ✅ No Authentication

- No login or account creation
- Fully open experience

### ✅ No Admin Panel

- Moderation handled via Supabase dashboard

### ✅ Video Hosting

- Vimeo or Cloudinary only
- YouTube excluded (download issues)

---

## 1.4 Target Audience

- Church members
- Family & friends
- Former mentees

---

## 1.5 Success Metrics

| Metric            | Target           |
| ----------------- | ---------------- |
| Letters submitted | 20+              |
| Mobile usability  | Fully responsive |
| Page load         | < 3 seconds      |
| Video protection  | Enabled          |
| Image protection  | Enabled          |
| Uptime            | 100%             |

---

# 2. Scope

## 2.1 In Scope

- Home page (hero + gallery preview + video preview + CTA)
- Gallery page
- Videos page
- Letters page (form + feed)
- Responsive navbar
- Supabase letter storage
- Image protection
- Video protection
- Vercel deployment

---

## 2.2 Out of Scope

- Authentication
- Admin dashboard
- Payments
- CMS
- Comments/reactions

---

# 3. Site Architecture

## 3.1 Page Map

| Page    | Route      | Description    |
| ------- | ---------- | -------------- |
| Home    | `/`        | Landing page   |
| Gallery | `/gallery` | Photo grid     |
| Videos  | `/videos`  | Video embeds   |
| Letters | `/letters` | Form + letters |

---

## 3.2 Project Structure

```bash
app/
  page.tsx
  gallery/page.tsx
  videos/page.tsx
  letters/page.tsx
  api/letters/route.ts

components/
  Navbar.tsx
  Hero.tsx
  PhotoGrid.tsx
  VideoCard.tsx
  LetterCard.tsx
  LetterForm.tsx

lib/
  supabase.ts

public/
  images/
```
