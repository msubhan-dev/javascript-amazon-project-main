# JavaScript Amazon Project

A front-end clone of the Amazon shopping experience, built with **vanilla JavaScript, HTML, and CSS**. This project recreates core e-commerce features — product listing, cart management, and checkout — without relying on any frameworks or libraries.

🔗 **Repo:** [javascript-amazon-project-main](https://github.com/msubhan-dev/javascript-amazon-project-main)

## Features

- 🛍️ **Product Listing** — Browse products with images, names, prices, and star ratings.
- 🛒 **Shopping Cart** — Add products to the cart, update quantities, and remove items.
- 💾 **Persistent Cart** — Cart data is saved to `localStorage` so it survives page refreshes.
- 📦 **Checkout Page** — Review cart items, choose a delivery option and date, and see an order summary with subtotal, shipping, and tax.
- 🔍 **Search** — Search products by keyword.
- 📱 **Responsive Design** — Works across desktop, tablet, and mobile screen sizes.

## Tech Stack

- **HTML5** — Page structure and markup
- **CSS3** — Styling and responsive layout
- **JavaScript (ES6+)** — DOM manipulation, cart logic, and dynamic rendering

No external frameworks or build tools are required — this is a pure client-side project.

## Project Structure

```
javascript-amazon-project-main/
├── data/               # Product, cart, and order data
├── scripts/            # JavaScript logic
│   ├── amazon.js       # Home page rendering logic
│   ├── checkout.js      # Checkout page logic
│   └── utils/           # Helper functions (e.g. money formatting)
├── styles/             # CSS files
│   ├── shared/          # Styles shared across pages
│   └── pages/            # Page-specific styles
├── images/             # Product and UI images
├── amazon.html         # Home page (product listing)
├── checkout.html       # Checkout page
├── orders.html         # Order history page
├── tracking.html       # Order tracking page
└── README.md
```

> ⚠️ Update this section if your actual folder/file names differ from the above.

## Getting Started

No installation or build step is required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/msubhan-dev/javascript-amazon-project-main.git
   cd javascript-amazon-project-main
   ```

2. **Open the project**
   - Simply open `amazon.html` in your browser, **or**
   - Serve it locally for the best experience (recommended, avoids CORS/file-path issues):
     ```bash
     npx serve .
     ```
     or, using the VS Code **Live Server** extension, right-click `amazon.html` → "Open with Live Server".

3. **Start shopping!** Add items to your cart, adjust quantities, and proceed to checkout.

## Usage

- Click **Add to Cart** on any product to add it to your cart.
- Visit the cart icon in the header to review items and quantities.
- Go to **Checkout** to select a delivery date and view your order summary.
- Place an order to see it appear on the **Orders** page.

## Roadmap / Possible Improvements

- [ ] Backend integration for real order persistence
- [ ] User authentication
- [ ] Product reviews and ratings submission
- [ ] Payment gateway integration
- [ ] Unit tests for cart and checkout logic

## Acknowledgements

This project is inspired by the Amazon UI and built as part of learning core JavaScript, HTML, and CSS concepts through hands-on e-commerce app development.

## License

This project is open source and available under the [MIT License](LICENSE).
