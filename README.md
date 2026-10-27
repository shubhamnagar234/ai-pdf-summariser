# 📄 AI PDF Summariser

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![LangChain](https://img.shields.io/badge/LangChain-Document%20Processing-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)](https://www.langchain.com/)
[![UploadThing](https://img.shields.io/badge/UploadThing-Cloud%20Storage-FF4B4B?style=for-the-badge)](https://uploadthing.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/Neon-PostgreSQL-00E599?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An enterprise-ready AI Document Intelligence SaaS platform that allows users to upload complex PDF documents, research papers, financial reports, and technical manuals, instantly generating structured executive summaries, deep insights, and exportable reports.

Engineered with **Next.js 15**, **TypeScript**, **LangChain**, **UploadThing**, **Google Gemini & OpenAI**, **Drizzle ORM**, **Neon Serverless PostgreSQL**, and a responsive dark aesthetic powered by **Tailwind CSS** and **Framer Motion**.

---

## 📌 Table of Contents

- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Database Schema (Drizzle ORM)](#-database-schema-drizzle-orm)
- [Getting Started Locally](#-getting-started-locally)
- [Environment Configuration](#-environment-configuration)
- [Key Engineering Highlights](#-key-engineering-highlights)
- [Contributing & License](#-contributing--license)

---

## ✨ Key Features

- **☁️ Seamless Cloud File Ingestion**: Secure drag-and-drop document upload pipeline powered by **UploadThing**, handling direct-to-cloud uploads with real-time upload progress.
- **📑 Document Parsing & Smart Chunking with LangChain**: Ingests dense PDFs using `pdf-parse` and **LangChain** text splitters, breaking multi-page documents into semantically coherent chunks to bypass LLM token limitations.
- **🧠 Advanced Multi-Stage Summarization**: Summarizes technical manuals, financial statements, and academic research papers using **Google Gemini** and **OpenAI**, delivering:
  - Executive TL;DR and core thesis.
  - Section-by-section breakdown & insights.
  - Action items, recommendations, and methodologies.
- **🔐 Secure Authentication & Session State**: Stateless JWT session authentication (`jose`, `bcrypt`) with encrypted cookies and robust route protection middleware.
- **📊 Interactive Document Dashboard**: Manage, view, search, and delete processed documents and summaries with optimistic UI feedback.
- **📥 Client-Side PDF & Report Export**: One-click download of generated summaries as beautifully styled PDF documents or shareable images via `jspdf` and `html2canvas`.
- **🎨 Modern Dark UI / UX**: Polished glassmorphism interface with **Tailwind CSS**, accessible **Radix UI** primitives, and smooth animations using **Framer Motion**.

---

## 🏛 System Architecture

```
                                  ┌──────────────────────────────────────────────┐
                                  │           Client (Next.js 15 + React 19)     │
                                  │    - Drag-and-Drop PDF UploadZone            │
                                  │    - Interactive Summary Viewer              │
                                  │    - One-Click PDF / Image Export            │
                                  └──────────────────────┬───────────────────────┘
                                                         │
                                                         │ Stream / Server Actions
                                                         ▼
                                  ┌──────────────────────────────────────────────┐
                                  │           Next.js Server Actions Layer       │
                                  │  - Auth Validation (jose JWT / bcrypt)       │
                                  │  - UploadThing Cloud Upload Handler          │
                                  │  - LangChain Document Processing             │
                                  └──────────┬────────────────────────┬──────────┘
                                             │                        │
                    ┌────────────────────────┴────────┐      ┌────────┴────────────────────────┐
                    ▼                                 ▼      ▼                                 ▼
      ┌──────────────────────────┐                             ┌──────────────────────────┐
      │  LangChain & AI Engine   │                             │   Data Persistence Layer │
      │  - pdf-parse Text Parser │                             │  - Drizzle ORM           │
      │  - Semantic Text Chunker │                             │  - Neon Serverless       │
      │  - Gemini 1.5 / OpenAI   │                             │    PostgreSQL Pooler     │
      └──────────────────────────┘                             └──────────────────────────┘
```

---

## 🛠 Tech Stack

| Domain                    | Technology / Tool                                                                                                    | Purpose                                                |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **Framework**             | [Next.js 15](https://nextjs.org/)                                                                                    | App Router, Server Components & Server Actions         |
| **Language**              | [TypeScript](https://www.typescriptlang.org/)                                                                        | Complete type safety                                   |
| **Cloud File Storage**    | [UploadThing](https://uploadthing.com/)                                                                              | Secure cloud document uploads & URL generation         |
| **Document Processing**   | [LangChain](https://www.langchain.com/), [pdf-parse](https://www.npmjs.com/package/pdf-parse)                        | Multi-page text extraction and chunking pipeline       |
| **AI / LLMs**             | [Google Gemini](https://ai.google.dev/), [OpenAI](https://openai.com/)                                               | Multi-stage context summarization & insight extraction |
| **Database**              | [Neon PostgreSQL](https://neon.tech/)                                                                                | Serverless Postgres database with connection pooling   |
| **ORM**                   | [Drizzle ORM](https://orm.drizzle.team/)                                                                             | Type-safe SQL schema definitions & migrations          |
| **Authentication**        | [Jose](https://github.com/panva/jose), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)                          | Stateless JWT cookie sessions & password encryption    |
| **Styling & Components**  | [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/) | Accessible, modern dark design system                  |
| **Animations & Feedback** | [Framer Motion](https://motion.dev/), [Sonner](https://sonner.emilkowal.ski/)                                        | Fluid transitions and rich toast alerts                |
| **Export Engine**         | [jsPDF](https://github.com/parallax/jsPDF), [html2canvas](https://html2canvas.hertzen.com/)                          | Client-side summary document rendering                 |

---

## 🗄 Database Schema (Drizzle ORM)

The relational schema is configured in `src/db/schema.ts` with Drizzle ORM:

```typescript
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  fullName: varchar("full_name", { length: 255 }),
  passwordHash: varchar("password_hash", { length: 255 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const pdfSummaries = pgTable("pdf_summaries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull(),
  originalFileUrl: text("original_file_url").notNull(),
  summaryText: text("summary_text").notNull(),
  title: text("title"),
  fileName: text("file_name"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites

- **Node.js** (v18.17+ or v20+)
- **npm**, **pnpm**, or **yarn**
- An **UploadThing** account and token
- A **Neon PostgreSQL** database account
- API keys from **Google AI Studio (Gemini)** and/or **OpenAI**

### 2. Clone the Repository

```bash
git clone https://github.com/shubhamnagar234/ai-pdf-summariser.git
cd ai-pdf-summariser
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Copy the example environment file and configure your keys:

```bash
cp .env.example .env
```

Edit `.env`:

```ini
JWT_SECRET="your-generated-jwt-secret"
UPLOADTHING_TOKEN="your-uploadthing-token"
GEMINI_API_KEY="your-gemini-api-key"
OPENAI_API_KEY="your-openai-api-key"
DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"
```

### 5. Push Database Schema to Neon

```bash
npx drizzle-kit push
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Key Engineering Highlights

1. **Large Document Chunking via LangChain**: Solves context-overflow errors on massive multi-page documents by partitioning PDF text into overlapping chunks, applying map-reduce summarization strategies.
2. **Secure Direct-to-Cloud Uploads**: UploadThing handles streaming file uploads outside the Next.js server runtime, eliminating server file size memory bottlenecks.
3. **Optimistic State & Seamless Revalidation**: Real-time dashboard updates with Next.js Server Actions and cached route revalidation.
4. **Client-Side Export**: High-resolution, multi-page PDF generation rendered directly in-browser using `jspdf` and `html2canvas`.

---

## 🤝 Contributing & License

Contributions, feedback, and pull requests are warmly welcomed!

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Crafted with ❤️ by <b>Shubham Nagar</b>
</p>
