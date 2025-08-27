# Parcel Delivery Frontend

## Project Overview

This is the frontend application for a Parcel Delivery System, built with React.js, Redux Toolkit, and RTK Query. The platform allows Senders, Receivers, and Admins to perform parcel operations, manage records, and track deliveries seamlessly.

It consumes a backend Parcel Delivery API to enable real-time interactions and ensures a secure, role-based, and user-friendly experience.

## 📌 Technology Stack

### Frontend

React.js + React Router

Redux Toolkit & RTK Query

TypeScript

Tailwind CSS

### Backend (for reference)

Node.js + Express.js (REST API)

MongoDB + Mongoose

JWT & bcrypt (authentication)

### 1️⃣ Public Landing Section

Home Page – Overview of parcel delivery service

About Page – Service description, mission, and team info

Contact Page – Inquiry form (simulated submission)

Tracking Page - track parcels

### 2️⃣ Authentication

JWT-based login and registration

Role selection: Sender or Receiver

Role-based redirection after login

Persisted authentication state

Logout functionality

### 3️⃣ Sender Dashboard

Create parcel delivery requests

Cancel parcels (if not dispatched)

View all created parcels with status logs

### 4️⃣ Receiver Dashboard

View parcels

Confirm parcel delivery

### 5️⃣ Admin Dashboard

View/manage all users (block/unblock)

View/manage all parcels (block/unblock, update delivery status)

## 6️⃣ Parcel Tracking

Search parcels via unique tracking ID

Public or authenticated users can track parcels

Display parcel status logs: status, timestamp, updatedBy, notes

## 7️⃣ General Features

Role-based navigation menus

Loading indicators & global error handling

Form validations and advanced filtering

Pagination for long lists

Toast notifications for feedback

## ⚙️ Setup Instructions

Clone the repository:

```bash
git clone <frontend-repo-url>
cd parcel-delivery-frontend


Install dependencies:

npm install


Run the app:

npm start
```

Environment variables:

Add .env file with: VITE_BACKEND_URL

## 🌐 Live Deployment

Frontend: Frontend Live URL
Backend: Backend Live URL

## 🧑‍💻 Credentials

Admin: ADMIN@EMAIL.COM
 / password: ADMIN@12345

Sender: sender@email.com
 / password: 123456789@S

Receiver: receiver@email.com
 / password: 123456789@R

```bash
📂 Repository Structure
parcel-delivery-frontend/
├─ src/
│  ├─ assets/
│  ├─ components/
|  ├─     ├─layout/
|  ├─     ├─module/
│  ├─ config/
│  ├─ constants/
│  ├─ hooks/
│  ├─ lib/
│  ├─ pages/
│  ├─ store/
│  ├─ types/
│  └─ utils/
├─ public/
├─ package.json
└─ README.md
```
