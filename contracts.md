# Shamam's Macarons - Backend Integration Contracts

## Overview
This document outlines the integration plan between frontend (React) and backend (FastAPI + MongoDB) for the Shamam's Macarons website.

---

## Current Mock Data Status

### Frontend Mock Data Location
**File:** `/app/frontend/src/mockData.js`

### Mocked Data Categories:

1. **Menu Items** (`menuItems` object)
   - `macarons` - 6 items
   - `croissants` - 4 items  
   - `baklava` - 3 items
   - `coffee` - 5 items
   - Each item contains: id, name, description, price, image

2. **Special Offer** (`specialOffer` object)
   - Daily special deal data
   - Contains: name, description, image, originalPrice, specialPrice

3. **Testimonials** (`testimonials` array)
   - 4 customer reviews
   - Each contains: id, name, text, rating

4. **Gallery Images** (`galleryImages` array)
   - 11 images with captions
   - Contains: id, url, caption

5. **Contact Information** (`contactInfo` object)
   - Address, phone, email
   - Working hours (weekdays, weekend)
   - Social media links (Instagram, Facebook)

---

## Backend Implementation Plan

### 1. Database Models (MongoDB Collections)

#### **Collection: `products`**
```python
{
  "_id": ObjectId,
  "name": str,  # Armenian text
  "description": str,  # Armenian text
  "price": str,  # "500" format
  "category": str,  # "macarons" | "croissants" | "baklava" | "coffee"
  "image": str,  # URL
  "is_featured": bool,  # For carousel display
  "is_special": bool,  # For special offer
  "special_price": str,  # Optional
  "created_at": datetime,
  "updated_at": datetime
}
```

#### **Collection: `testimonials`**
```python
{
  "_id": ObjectId,
  "name": str,  # Armenian text
  "text": str,  # Armenian text
  "rating": int,  # 1-5
  "created_at": datetime,
  "is_approved": bool
}
```

#### **Collection: `gallery`**
```python
{
  "_id": ObjectId,
  "url": str,
  "caption": str,  # Armenian text
  "category": str,  # "product" | "interior" | "customer"
  "display_order": int,
  "created_at": datetime
}
```

#### **Collection: `contact_messages`**
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "phone": str,  # Optional
  "message": str,
  "status": str,  # "new" | "read" | "replied"
  "created_at": datetime
}
```

#### **Collection: `settings`**
```python
{
  "_id": ObjectId,
  "key": str,  # "contact_info" | "hours" | "social_media" | "special_offer"
  "value": dict,
  "updated_at": datetime
}
```

---

### 2. API Endpoints

#### **Products API**

**GET `/api/products`**
- Query params: `?category=macarons` (optional)
- Returns: List of all products or filtered by category
- Frontend usage: Menu page, Home carousel

**GET `/api/products/featured`**
- Returns: Featured products for carousel
- Frontend usage: Home page carousel

**GET `/api/products/special`**
- Returns: Current special offer
- Frontend usage: Menu page special offer section

#### **Testimonials API**

**GET `/api/testimonials`**
- Returns: Approved testimonials
- Frontend usage: Home page testimonials section

**POST `/api/testimonials`**
- Body: `{name, text, rating}`
- Returns: Created testimonial (pending approval)
- Frontend usage: Future testimonial submission feature

#### **Gallery API**

**GET `/api/gallery`**
- Returns: All gallery images
- Frontend usage: Gallery page

#### **Contact API**

**POST `/api/contact`**
- Body: `{name, email, phone, message}`
- Returns: Success confirmation
- Frontend usage: Contact page form

**GET `/api/contact/info`**
- Returns: Contact information, hours, social media
- Frontend usage: Footer, Contact page, Visit page

---

### 3. Frontend Integration Steps

#### **Step 1: Create API Service**
Create `/app/frontend/src/services/api.js`:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const api = {
  // Products
  getProducts: (category) => axios.get(`${API}/products`, { params: { category } }),
  getFeaturedProducts: () => axios.get(`${API}/products/featured`),
  getSpecialOffer: () => axios.get(`${API}/products/special`),
  
  // Testimonials
  getTestimonials: () => axios.get(`${API}/testimonials`),
  
  // Gallery
  getGalleryImages: () => axios.get(`${API}/gallery`),
  
  // Contact
  submitContactForm: (data) => axios.post(`${API}/contact`, data),
  getContactInfo: () => axios.get(`${API}/contact/info`)
};
```

#### **Step 2: Replace Mock Data**
In each component:
- Import API service instead of mockData
- Use `useEffect` to fetch data
- Add loading states
- Add error handling

Example for Home.jsx:
```javascript
// Before (Mock):
import { menuItems } from '../mockData';

// After (API):
import { api } from '../services/api';
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await api.getFeaturedProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);
```

#### **Step 3: Update Components**
Files to update:
- `/app/frontend/src/pages/Home.jsx` - Featured products, testimonials
- `/app/frontend/src/pages/Menu.jsx` - All products, special offer
- `/app/frontend/src/pages/Gallery.jsx` - Gallery images
- `/app/frontend/src/pages/Contact.jsx` - Contact form submission
- `/app/frontend/src/components/Footer.jsx` - Contact info

---

### 4. Backend Implementation Checklist

- [ ] Create database models in `/app/backend/models/`
- [ ] Seed database with mock data
- [ ] Create API endpoints in `/app/backend/routes/`
- [ ] Add CORS configuration for frontend
- [ ] Test all endpoints with curl/Postman
- [ ] Update `/app/backend/server.py` with new routes

---

### 5. Testing Protocol

#### Backend Testing
1. Test each endpoint individually
2. Verify data format matches frontend expectations
3. Test error cases (404, 500)
4. Verify Armenian text encoding

#### Frontend Integration Testing
1. Test each page with real API
2. Verify loading states
3. Test error handling
4. Verify images load correctly
5. Test form submission

---

## Notes

- All text content is in Armenian language
- Image URLs are currently external (Unsplash, customer assets)
- Contact form currently shows toast notification (mock)
- Maps integration is ready (Google Maps embed)
- No authentication required for current MVP

---

## Priority for Backend Development

1. **High Priority:**
   - Products API (menu display)
   - Contact form API (customer communication)
   - Contact info API (footer/contact page)

2. **Medium Priority:**
   - Testimonials API (social proof)
   - Gallery API (visual showcase)

3. **Future Enhancements:**
   - Admin panel for content management
   - Online ordering system
   - Instagram feed integration (real API)
   - Image upload system
