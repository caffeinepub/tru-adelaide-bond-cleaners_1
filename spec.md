# Tru Adelaide Bond Cleaners

## Current State
The site has 4 pages: Home, Services, About, Contact. No suburb-specific pages exist. The homepage has no suburb landing page links.

## Requested Changes (Diff)

### Add
- 10 suburb landing pages: Norwood, Glenelg, Unley, Prospect, Mitcham, Burnside, Marion, Tea Tree Gully, Mawson Lakes, Salisbury
- Each suburb page: ~400 words simple content, SEO meta title/description, hero image with alt text, CTA section
- Suburb hub section on homepage with links to all 10 suburb pages (for SEO interlinking)
- Routes for each suburb: /bond-cleaning-norwood, /bond-cleaning-glenelg, etc.
- 2 suburb-themed generated images to share across pages

### Modify
- routeTree.tsx: register 10 new suburb routes
- HomePage.tsx: add "Areas We Serve" section with links to all suburb pages

### Remove
- Nothing removed

## Implementation Plan
1. Generate 2 suburb cleaning hero images
2. Create a reusable SuburbPage component with props for suburb name, content, meta tags
3. Create 10 individual suburb page files importing SuburbPage
4. Register all suburb routes in routeTree.tsx
5. Add "Areas We Serve" grid section to HomePage.tsx with suburb links
