# Skymage Documentation

Skymage is a powerful image transformation service that allows you to resize, crop, optimize, and apply effects to your images on-the-fly using simple URL parameters.

## Getting Started

Skymage provides a straightforward way to transform images through URL parameters. This approach eliminates the need for server-side image processing code, making your applications lighter and more efficient.

### Basic Concept

The basic pattern for a Skymage URL is:

```
https://[your-handle].skymage.net/v1/[your-domain]/images/[image-path]?[transformations]
```

For example:

```
https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=300&h=200&fit=cover
```

This URL will fetch the image at `sample.jpg`, resize it to 300×200 pixels using the "cover" fit mode.

### External Storage

Skymage also supports external storage providers, allowing you to transform images directly from your own storage:

```
https://[your-handle].skymage.net/v1/ex/[storage-handle]/[image-path]?[transformations]
```

For example, with S3 storage:

```
https://demo.skymage.net/v1/ex/my-s3-bucket/photos/vacation.jpg?w=800&h=600&fit=cover
```

[Learn more about external storage →](/external-storage.md)

### Key Features

- **On-the-fly transformations**: No pre-processing needed
- **Simple URL API**: Control image transformations with URL parameters
- **External storage support**: Connect your own S3, BunnyCDN, or other storage providers
- **Highly optimized**: Delivers optimized images for faster loading times
- **Multiple formats**: Support for JPEG, PNG, WebP, AVIF and more
- **CDN integration**: Works seamlessly with CDNs for global distribution
- **Secure**: Protect your images with signed URLs

## Core Transformation Options

Skymage offers various transformation options to modify your images:

### Dimensions and Sizing

- **Width & Height**: Specify dimensions with `w` and `h` parameters
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=400&h=300
  ```

- **Fit Modes**: Control how images fit within dimensions with `fit` parameter
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=400&h=300&fit=contain
  ```

- **Cropping**: Focus on specific areas with `crop` and `p` parameters
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=400&h=300&fit=crop&p=face
  ```

### Visual Effects

- **Filters**: Apply predefined filters with `filt` parameter
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?filt=grayscale
  ```

- **Blur**: Add blur effect with `blur` parameter
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?blur=10
  ```

- **Sharpen**: Enhance image details with `sharpen` parameter
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?sharpen=10
  ```

### Quality

- **Quality**: Control compression with `q` parameter
  ```
  https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?q=80
  ```

## Integration Examples

Skymage can be integrated into various web platforms:

### HTML Integration

```html
<img src="https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=400" alt="Sample Image">
```

### CSS Background

```css
.hero {
  background-image: url('https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=1200&h=600&fit=cover');
}
```

### JavaScript Dynamic Sizing

```javascript
const width = window.innerWidth > 800 ? 1200 : 600;
const imageUrl = `https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=${width}`;
document.getElementById('hero-img').src = imageUrl;
```
