# Logo Assets Directory

## Purpose
This directory contains the logo images for the "Trusted in verticals that are serious about social commerce" section on the homepage.

## Source
Logos should be downloaded from: https://www.conversioniq.ai/comment-responder
Look for the section under the heading: "Trusted in verticals that are serious about social commerce"

## File Naming Convention
- Use lowercase with hyphens: `logo_walmart.svg`, `logo_target.svg`, etc.
- Preferred format: SVG (scalable, crisp at any size)
- Alternative: PNG (use 2x resolution for retina displays)

## Expected Logo Files
Based on common social commerce verticals, you may need:
- `logo_walmart.svg`
- `logo_target.svg`
- `logo_amazon.svg`
- `logo_shopify.svg`
- `logo_etsy.svg`
- `logo_wayfair.svg`
- `logo_overstock.svg`
- `logo_home-depot.svg`

**Note:** Replace the placeholder brand names above with the actual brands shown on the source page.

## Optimization Guidelines
1. **SVG**: Optimize with SVGO or similar tools
2. **PNG**: Use 2x resolution (e.g., 200px height = 400px @2x)
3. **File Size**: Keep individual logos under 50KB when possible
4. **Dimensions**: Logos will be displayed at ~48px height (h-12), so ensure they scale well

## Usage
Logos are referenced in `/components/TrustedByCarousel.tsx`
Update the `logos` array in that file to match your actual logo files.


