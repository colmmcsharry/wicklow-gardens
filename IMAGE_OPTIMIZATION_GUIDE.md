# Image Optimization Guide

This guide will help you automatically optimize all your images using the `codestitch-sharp-image-automation` tool.

## How It Works

1. **The automation tool** scans your website pages and measures images at different viewport sizes (mobile, tablet, desktop)
2. **Generates optimized markup** with responsive `<picture>` elements and proper dimensions
3. **The Sharp Images plugin** (already installed) compresses and resizes images during build
4. **Result**: Smaller file sizes, faster loading, better performance

## Step-by-Step Instructions

### Step 1: Start Your Development Server

**IMPORTANT**: The automation tool needs your site to be running to analyze images.

Open a terminal and run:
```bash
npm start
```

Wait until you see the server is running (usually at `http://localhost:8080`).

### Step 2: Run the Image Automation Tool

**Open a NEW terminal window** (keep the dev server running in the first one) and run:

```bash
npx run-sharp-automation
```

This will:
- Scan all your pages
- Measure images at different viewport sizes
- Generate optimized markup
- Save results to `./image-optimizations/` folder

### Step 3: Review the Generated Markup

After the tool finishes, check the `./image-optimizations/` folder. You'll find HTML files with optimized markup for each page.

### Step 4: Replace Your Image Markup

1. Open the generated file (e.g., `image-optimizations/index.html`)
2. Copy the optimized `<picture>` elements
3. Replace the corresponding images in your source files (e.g., `src/index.html`)

### Step 5: Build and Test

Run a production build to see the optimized images:
```bash
npm run build
```

The Sharp Images plugin will automatically:
- Compress images (reduce file size)
- Generate multiple formats (AVIF, WebP, JPEG)
- Create responsive sizes for each breakpoint

## Advanced Options

### Optimize Only Specific Pages

If you have many pages and want to optimize one at a time:
```bash
npx run-sharp-automation --target home
npx run-sharp-automation --target about
npx run-sharp-automation --target services/tile-installation
```

### Use "Skinny" Mode (Smaller Markup)

Generate markup with only one format (AVIF or WebP) instead of three:
```bash
# 67% smaller markup, only AVIF format
npx run-sharp-automation --skinny avif

# Or only WebP format
npx run-sharp-automation --skinny webp
```

### Custom Output Directory

Save results to a different folder:
```bash
npx run-sharp-automation --output-dir ./my-optimizations
```

## Important Notes

⚠️ **The tool requires your dev server to be running** - it connects to `http://localhost:8080` to analyze images

⚠️ **Work on your source files** (`src/` folder), not the built files (`public/` folder)

⚠️ **The tool generates markup** - the actual image compression happens during `npm run build` via the Sharp Images plugin

## Troubleshooting

**Tool can't connect to server:**
- Make sure `npm start` is running
- Check the URL (default is `http://localhost:8080`)
- Use `--base-url` to specify a different URL

**No images found:**
- Make sure images are in `<img>` or `<picture>` tags (not CSS backgrounds)
- Check that your pages are accessible at the dev server URL

**Generated markup looks wrong:**
- The tool measures actual rendered sizes - check your CSS
- Review the generated markup and adjust if needed

## What Gets Optimized

✅ Images in `<img>` tags  
✅ Images in `<picture>` elements  
✅ Responsive breakpoints (mobile, tablet, desktop)  
✅ Multiple formats (AVIF, WebP, JPEG)  
✅ Proper loading attributes (lazy/eager)  
✅ Above-the-fold preloading  

## Expected Results

After optimization, you should see:
- **Smaller file sizes** (images compressed by Sharp plugin)
- **Faster page loads** (responsive images, modern formats)
- **Better performance scores** (Lighthouse, PageSpeed)
- **Reduced bandwidth usage** (users download only what they need)

