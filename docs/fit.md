# Image Fit Options

When resizing images with both width and height parameters, the `fit` parameter controls how Skymage adapts the image to the new dimensions. Choosing the right fit mode is essential for achieving the desired visual result while maintaining image quality.

## Quick Reference

| Fit Option | Description | Best For |
|------------|-------------|----------|
| `clip` | Maintains aspect ratio, clips excess | General purpose, when clipping is acceptable |
| `cover` | Fills entire area, may crop edges | Featured images, backgrounds |
| `contain` | Shows entire image with possible whitespace | Product images, logos |
| `fill` | Stretches to fit exactly | UI elements where distortion is acceptable |
| `scale-down` | Like `contain` but won't enlarge | Small icons or thumbnails |
| `crop` | Fills area and crops with position control | Profile photos, featured content |

## Fit Options in Detail

### clip (default)

Resizes the image to fill dimensions while maintaining aspect ratio, clipping any excess portions that don't fit.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=clip
```
![Clip example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=clip)

**When to use `clip`:**
- You need consistent dimensions
- Some image clipping is acceptable
- You want to maintain the original aspect ratio
- You're creating image grids or galleries

### cover

Resizes the image to completely cover the requested dimensions while maintaining aspect ratio. This ensures the area is completely filled, potentially cropping some content at the edges.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=cover
```
![Cover example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=cover)

**When to use `cover`:**
- Creating hero images or banners
- Background images for cards or sections
- Feature images where filling the entire space is critical
- When you want to eliminate any potential whitespace

### contain

Resizes the image to fit entirely within the specified dimensions while preserving aspect ratio. This may result in "letterboxing" with whitespace added to sides or top/bottom.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=contain
```
![Contain example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=contain)

**When to use `contain`:**
- Product photography where showing the entire item is essential
- Logos and icons that must be entirely visible
- Educational or instructional images where all details matter
- When maintaining the complete visual context is important

### fill

Stretches or compresses the image to exactly match the specified dimensions, potentially distorting the image's aspect ratio.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=fill
```
![Fill example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=fill)

**When to use `fill`:**
- Abstract textures or patterns
- UI elements where precise dimensions are required
- When the original aspect ratio isn't important
- Special effects where distortion is intentional

### scale-down

Behaves like `contain`, but only if the original image is larger than the specified dimensions. If the original is already smaller, it won't be enlarged.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=scale-down
```
![Scale-down example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=scale-down)

**When to use `scale-down`:**
- User-uploaded content of varying sizes
- When you want to avoid enlarging small images (which would reduce quality)
- Icons or thumbnails that should retain their original dimensions if small
- Image galleries with mixed content sizes

### crop

Resizes the image to cover the dimensions and crops any excess. Unlike `cover`, this option allows you to control exactly which part of the image is preserved using the `p` parameter.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop
```
![Crop example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop)

With position control:
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&p=top
```
![Crop-top example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&p=top)

**When to use `crop`:**
- Profile pictures where centering on a face is important
- Product thumbnails where a specific part of the image is most relevant
- Banner images where you need precise control over the focal point
- Any scenario where controlling which part of the image remains visible is crucial

For advanced cropping and positioning options, see the [📏 Image Cropping and Positioning](./crop.md) documentation.

## Visual Comparison

Here's how different fit options appear when applied to the same image with the same dimensions:

| Fit Option | Result | Description |
|------------|--------|-------------|
| `clip` | ![Clip](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=200&h=100&fit=clip) | Maintains aspect ratio, clips excess |
| `cover` | ![Cover](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=200&h=100&fit=cover) | Fills dimensions, may crop edges |
| `contain` | ![Contain](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=200&h=100&fit=contain) | Shows whole image, may add whitespace |
| `fill` | ![Fill](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=200&h=100&fit=fill) | Stretches to exactly fit dimensions |

## Best Practices

### Choosing the Right Fit Option

- **Consider your content type:** Product images typically benefit from `contain`, while hero banners work better with `cover`
- **Think about aspect ratios:** If your source images have widely varying aspect ratios, `contain`, `cover`, or `crop` will give more consistent results than `fill`
- **Consider device contexts:** For responsive designs, different fit modes might work better at different screen sizes
- **Image subject matters:** For portraits or subjects with clear focal points, `crop` with positioning gives the most control

### Performance Considerations

- `scale-down` can help reduce bandwidth by preventing unnecessary enlargement
- Pre-determine your image dimensions to avoid client-side layout shifts
- Consider generating multiple versions for different contexts using different fit parameters
- Cache transformed images for improved loading times

### Common Pitfalls to Avoid

- Using `fill` for photographs or faces (causes unnatural distortion)
- Using `clip` when important content might get cut off
- Using `contain` when consistent visual filling is needed (whitespace may be inconsistent)
- Forgetting to specify the `p` parameter with `crop` when the default center position isn't ideal

## Example Use Cases

### E-commerce Product Gallery

```
https://demo.skymage.net/v1/daudau.cc/images/product.jpg?w=500&h=500&fit=contain
```

### Social Media Profile Picture

```
https://demo.skymage.net/v1/daudau.cc/images/profile.jpg?w=200&h=200&fit=crop&p=face
```

### Website Hero Banner

```
https://demo.skymage.net/v1/daudau.cc/images/banner.jpg?w=1600&h=600&fit=cover
```

### Thumbnail Grid

```
https://demo.skymage.net/v1/daudau.cc/images/thumbnail.jpg?w=120&h=120&fit=clip
```

For additional control over image presentation, combine fit options with other transformations like [blur](./blur-and-sharpen.md), [filters](./filters.md), or [watermarks](./watermark.md).
