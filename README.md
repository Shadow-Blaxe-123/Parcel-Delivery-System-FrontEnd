# **📌 Minimum Functional Requirements**

## **3️⃣ Sender Dashboard**

- Create parcel delivery requests
- Cancel parcel (if not dispatched)
- View all created parcels and their status logs

## **4️⃣ Receiver Dashboard**

- View incoming parcels
- Confirm parcel delivery
- View delivery history

## **5️⃣ Admin Dashboard**

- View and manage all parcels (block/unblock, update delivery status)
  
## **6️⃣ Parcel Tracking**

- Each parcel has a **unique tracking ID**
- Public or authenticated users can search parcels by tracking ID
- Parcel details include **status logs** (status, timestamp, updatedBy, note)

## **7️⃣ General Features**

- **Loading indicators** and **global error handling**
- **Form validations** (required fields, numeric checks, positive amounts)  and adnvanced filtering.
- **Pagination** for long lists
- Guided Tour (at least 5 steps for new users)
- **Toast Notifications**
  
  - Show success/error messages with any toast package/library
  
- **Dashboard & Data Visualization**
  - **Charts:** Bar/pie charts showing parcel trends, delivery status distribution, and monthly shipments.  
  - **Parcel Table:** Paginated, searchable, and filterable table with actions (View, Cancel, Confirm).  
  - **Status Timeline:** Visual history of parcel updates with timestamps and notes.  
  - **Role-Specific Views:** Sender sees their parcels, Receiver sees received parcels, Admin sees all.  
  - **Responsive Design:** Fully responsive with consistent margins, spacing, typography, and color contrast.

## **Submission Guidelines**

1. **Codebase**
    - Submit a clean, modular, and documented codebase
    - Follow best practices for reusable components
    - Include a **README** with:
        - Project overview
        - Setup instructions
        - Technology stack
        - Live URL (if deployed)
        - Any other relevant notes

2. **Live Deployment**
    - Provide live deployment URLs for both frontend and backend
  
3. **Credentials**
    - Provide admin/sender/receiver login details (email & password) for testing
