# Fox Wisdom book website

A static landing page for Fox Wisdom’s eBook, ready for GitHub Pages or Cloudflare Pages. No build tools or dependencies are needed.

## Upload to GitHub

Upload the **contents** of this `fox2` folder to the repository root, keeping `index.html` at the root and the `assets` folder beside it. Do not upload only the outer folder as a nested directory.

## Deploy with Cloudflare Pages

1. In Cloudflare, go to **Workers & Pages → Create application → Pages → Connect to Git** and choose your GitHub repository and production branch.
2. Choose **None** for the framework preset.
3. Leave the build command blank and use `.` as the build output directory. Keep the root directory blank.
4. Deploy. Future pushes to the selected branch will publish automatically.

The Creem checkout URL is already connected to every purchase button in `index.html`. The site sends buyers to Creem’s hosted checkout for payment. Confirm in Creem that the product’s Delivery section contains the original PDF and run a test purchase/delivery before sharing the store publicly.

## Files

- `index.html`: site, styles and interactions
- `assets/book-cover.png`: book cover image
- `assets/sample-1.png` to `assets/sample-4.png`: book preview pages
- `assets/fox-wisdom.webp`: author avatar
