# NestHub CRM

A responsive SaaS CRM landing page with a Product Inquiry System built using the MERN Stack. The project showcases a modern landing page along with a backend API to collect and manage customer inquiries.

## Features

### Landing Page
- Responsive Hero Section
- Features Section
- Pricing Plans
- Customer Testimonials
- FAQ Section
- Contact Sales Form
- Modern UI with Tailwind CSS

### Admin Dashboard
- View all customer inquiries
- Responsive inquiry management interface

---

##  Tech Stack

### Frontend
- React.js (Vite)
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

##  Project Structure

```
crm/
|
|── frontend/
|   |── public/
|   |── src/
|   |   |── Components/
|   |   |── assets/
|   |   |── App.jsx
|   |   |── main.jsx
|   |── package.json
|   |── vite.config.js
|
|── backend/
|   |── Config/
|   |── Controllers/
|   ├── Models/
|   | Routes/
|   |── server.js
|   |── package.json

|── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd crm
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5001
MONGODB_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

Backend:

```
http://localhost:5001
```

---

## API Endpoint

### Submit Inquiry

**POST**

```
/api/v1/inquiry
```

Example Request

```json
{
  "name": "John Doe",
  "company": "ABC Pvt Ltd",
  "email": "john@example.com",
  "country": "India",
  "industry": "Software",
  "companysize": "50-100"
}
```


### Fetch All Inquiries

**GET**

```
/api/v1/fetch-inquiries
```






---

## Future Improvements

- Authentication for Admin Panel
- Search and Filter Inquiries
- Pagination
- Export inquiries to CSV/PDF
- Email notifications
- Analytics Dashboard

---

## Author

**Piyush Arora**
