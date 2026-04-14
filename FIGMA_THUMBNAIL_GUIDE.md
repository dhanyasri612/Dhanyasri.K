# How to Add Figma Design Thumbnails

## Quick Steps to Export from Figma:

### Option 1: Direct PNG Export (Recommended)
1. Open your Figma design file in browser
2. Right-click on the main frame/board you want to show
3. Select **"Copy as" → "Export as PNG"**
4. Save the image to `/src/assets/` folder with a descriptive name
5. Update the Projects component to use the PNG path

### Option 2: Use Figma File ID URL
If your Figma file is public, you can use Figma's export API:

**Format:**
```
https://api.figma.com/v1/images/{fileId}?ids={nodeId}&format=png
```

**Examples for your projects:**
- Mobile App UI/UX: `Tx7t7zTyuLzx1rPkblrlm8`
- UI/UX Design System: `8xSEoDaDE8lWOaV9sGpgbD`

### Option 3: Screenshot from Figma
1. Open your Figma design
2. Click "File" → "Share" → Copy public link
3. Take a screenshot (cmd+shift+4 on Mac)
4. Save as PNG in `/src/assets/`

## Steps to Replace Thumbnails in Code:

1. **Save your exported PNG** to `/src/assets/` folder:
   - `/src/assets/mobile-app-design.png`
   - `/src/assets/design-system.png`

2. **Update Projects.tsx:**
```tsx
import mobileAppImage from "@/assets/mobile-app-design.png";
import designSystemImage from "@/assets/design-system.png";
```

3. **Update the project objects:**
```tsx
{
  title: "Mobile App UI/UX",
  // ... other props
  thumbnail: mobileAppImage,
}
```

4. **Test the changes:**
```bash
npm run build
```

## Current Setup:
- Mobile App UI/UX: Uses mockup SVG (can replace with real design export)
- UI/UX Design System: Uses mockup SVG (can replace with real design export)
- Other projects: Using custom SVG thumbnails

All thumbnails auto-scale with hover effects and responsive design!
