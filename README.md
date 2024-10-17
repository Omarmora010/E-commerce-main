# E-commerce

DEPI final Project

Typical file system for eCommerce web aplication

## Root structure

```
/ecommerce-app
│
├── /backend # Backend (Node.js, Express.js, MongoDB)
│ ├── /config # Configuration files (e.g., database, environment variables)
│ ├── /controllers# Business logic for the app (CRUD operations)
│ ├── /models # Mongoose models for MongoDB
│ ├── /routes # Express routes (API endpoints)
│ ├── /middleware # Middleware (auth, error handling, etc.)
│ ├── /utils # Utility functions (email sending, token generation, etc.)
│ ├── /data # (Optional) Seeding data for the database
│ ├── /validators # Request validation (using libraries like Joi)
│ ├── server.js # Main backend entry point for Express app
│ └── package.json# Backend dependencies and scripts
│
├── /frontend # Frontend (React.js)
│ ├── /src
│ │ ├── /components # Reusable React components (e.g., product card, navbar, etc.)
│ │ ├── /pages # React pages (e.g., Home, ProductDetails, Cart, Checkout)
│ │ ├── /context # Context API files (e.g., global state management)
│ │ ├── /hooks # Custom React hooks
│ │ ├── /services # Frontend API services (e.g., productService.js)
│ │ ├── /assets # Static assets like images, fonts, icons, etc.
│ │ ├── /styles # Global styles (CSS or SCSS)
│ │ ├── /reducers # Redux reducers (if using Redux for state management)
│ │ ├── /actions # Redux actions
│ │ ├── /App.js # Main React App component
│ │ └── index.js # Entry point for React app
│ └── package.json # Frontend dependencies and scripts
│
├── .gitignore # Ignored files for Git
├── README.md # Project documentation
└── /node_modules # Installed dependencies
```

## Backend Structure (Node.js, Express, MongoDB)

```
/backend
│
├── /config
│ └── db.js # MongoDB connection configuration
│ └── env.js # Environment variables configuration (port, secret keys)
│
├── /controllers
│ └── productController.js # Product-related logic (CRUD)
│ └── userController.js # User-related logic (authentication, profile)
│ └── orderController.js # Order-related logic (cart, checkout)
│
├── /models
│ └── productModel.js # Mongoose schema for Product
│ └── userModel.js # Mongoose schema for User
│ └── orderModel.js # Mongoose schema for Orders
│
├── /routes
│ └── productRoutes.js # Routes for product API (GET, POST, PUT, DELETE)
│ └── userRoutes.js # Routes for user-related API (login, register, profile)
│ └── orderRoutes.js # Routes for order-related API (create, payment)
│
├── /middleware
│ └── authMiddleware.js # Middleware to check JWT token
│ └── errorMiddleware.js # Global error handling
│
├── /utils
│ └── token.js # Token generation utility
│ └── email.js # Email sending utility
│
├── /data # Optional seeding data for development
│ └── products.js
│
├── /validators # Optional - validation using libraries like Joi
│ └── productValidator.js # Validation logic for product input
│
├── server.js # Main entry point for Express app
└── package.json # Backend dependencies (e.g., express, mongoose, bcrypt, etc.)
```

## Frontend Structure (React.js)

```
/frontend
├── /src
│ ├── /components
│ │ └── Navbar.js # Navbar component
│ │ └── ProductCard.js # Product card component
│ │ └── Cart.js # Shopping cart component
│ │ └── Footer.js # Footer component
│
│ ├── /pages
│ │ └── Home.js # Homepage component
│ │ └── ProductDetails.js # Single product detail page
│ │ └── CartPage.js # Cart page component
│ │ └── CheckoutPage.js # Checkout page component
│ │ └── OrderHistory.js # User order history page
│
│ ├── /context # Global state management using Context API
│ │ └── CartContext.js # Context for cart
│ │ └── AuthContext.js # Context for user authentication
│
│ ├── /hooks
│ │ └── useCart.js # Custom hook to manage cart state
│ │ └── useAuth.js # Custom hook for authentication
│
│ ├── /services
│ │ └── productService.js # API calls related to products
│ │ └── userService.js # API calls related to users
│ │ └── orderService.js # API calls related to orders
│
│ ├── /assets # Static files (images, fonts, icons)
│ │ └── logo.png # Logo image
│
│ ├── /styles # Global stylesheets (CSS or SCSS)
│ │ └── global.css # Global styles
│ │ └── product.css # Styles for product component
│
│ ├── /reducers # If using Redux
│ │ └── cartReducer.js # Reducer logic for cart
│ │ └── authReducer.js # Reducer logic for authentication
│
│ ├── /actions # Redux actions
│ │ └── cartActions.js # Actions related to cart
│ │ └── authActions.js # Actions related to authentication
│
│ ├── App.js # Main App component
│ └── index.js # Entry point (renders the React app)
│
└── package.json # Frontend dependencies (React, Axios, Redux, etc.)
```
