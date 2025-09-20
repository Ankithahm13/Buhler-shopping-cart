# Buhler Shopping Cart

A modern, responsive shopping cart application built with Vue.js, designed to showcase product listings and provide a seamless shopping experience.

## Features

- **Product Catalog**: Browse through a variety of products with images, descriptions, and pricing
- **Shopping Cart**: Add/remove items and adjust quantities in your cart
- **State Management**: Utilizes Pinia for efficient state management

## Technologies Used

- Vue.js 3 (Composition API)
- Pinia for state management
- Vue Router for navigation
- Vite as the build tool

## Project Setup

Node js Version - v24.8.0
# Install dependencies
npm install

# Compile and hot-reload for development
npm run dev

`

## Project Structure

`
buhler-shopping-cart/
├── public/              # Static files
├── src/
│   ├── assets/          # Images.
│   ├── components/      # Reusable Vue components
│   ├── common/          # Common Components
│   ├── router/          # Vue Router configuration
│   ├── store/           # Pinia store modules
│   ├── styles/          # Global styles and variables
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
