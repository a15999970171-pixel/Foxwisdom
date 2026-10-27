# Fox Wisdom — Build a Life You Actually Want

A lightweight, mobile-first static site prepared for Cloudflare Pages or a simple web server.

## Before launch

1. Create the support mailbox `support@foxwisdom.top`.
2. In `script.js`, replace `PASTE_YOUR_CREEM_CHECKOUT_URL_HERE` with the live Creem checkout URL for the ebook.
3. Review the Privacy Policy, Terms of Service, and refund wording with your actual business details.

## Cloudflare Pages — easiest

Cloudflare Pages currently supports Direct Upload for a folder or zip of prebuilt static assets. In Cloudflare Dashboard go to Workers & Pages → Create application → Get started → Drag and drop your files. Deploy the whole `fox-wisdom-site` folder or a zip made from it.

After deployment, add `foxwisdom.top` under the Pages project’s Custom domains. For an apex domain, Cloudflare requires the domain to be a zone using Cloudflare nameservers.

## Existing VPS

You can also serve these static files from Nginx or another web server on your VPS. Upload the folder to your web root and point `foxwisdom.top` to the site’s server.


## Book cover
The site now uses the supplied/generated book cover at `assets/book-cover.png`. Replace this file with the final high-resolution cover when ready.
