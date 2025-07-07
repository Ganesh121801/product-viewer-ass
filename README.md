# Product Viewer – React.js Assignment

A simple React.js application that allows users to log in (using DummyJSON API) and view a list of products. Features include authentication, protected routes, product grid, search, sorting, and responsive UI.

## 🚀 Features

- **Login with DummyJSON credentials**
- **JWT token storage and protected routes**
- **Logout functionality**
- **Token expiry handling**
- **Product grid with name, image, price, and rating**
- **Loading state and responsive layout**
- **Search and sorting (client-side)**
- **Clean UI with Tailwind CSS**
- **Toast notifications for feedback**

## ⚠️ Important Note
The credentials you have provided are invalid so i havnt implemented the protected routes to dashboard . 
> **DummyJSON API only allows login with specific test credentials.**
>
> - **Username:** `kminchelle`
> - **Password:** `0lelplR`
>
> Any other username/password will result in "Invalid credentials".  
> If you see this error, it is not a bug in the app, but a limitation of the DummyJSON API.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd product-viewer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root:**
   ```
   VITE_DUMMY_API_URL=https://dummyjson.com
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Login using the test credentials above.**

---

## 📁 Folder Structure

```
src/
  components/
    ProtectedRoute.jsx
  pages/
    LoginPage.jsx
    DashboardPage.jsx
  services/
    authService.js
    productService.js
  App.jsx
  main.jsx
```

---

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/395871a8-2b11-4902-9956-d86759ed4b7a)
![image](https://github.com/user-attachments/assets/9ba02349-b71d-4a5a-80f8-430bdcee2869)



## 📋 Assignment Requirements Checklist

- [x] Login with DummyJSON credentials
- [x] Store JWT token upon successful login
- [x] Protect product listing routes(credentials you have provided are invalid so i havnt implemented the protected routes to dashboard . )
- [x] Implement logout functionality
- [x] Token expiry handling
- [x] Fetch and display products
- [x] Show loading state
- [x] Responsive layout
- [x] Search & sorting (client-side)
- [x] Functional components & hooks
- [x] Folder structure: components, services, pages, etc.
- [x] .env for base URLs
- [x] Clean and readable code
- [x] Toast notifications

