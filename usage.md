# Using Skymage

This guide explains how to use Skymage to transform your images on the fly. Skymage provides a simple URL-based API that you can use to modify images without having to process them locally.

## Basic Usage

The basic pattern for a Skymage URL is:

```
https://[your-domain]/v1/[tenant]/images/[image-path]?[transformations]
```

Where:
- `[your-domain]` is your Skymage instance domain
- `[tenant]` is your tenant identifier
- `[image-path]` is the path to your image
- `[transformations]` are the transformations you want to apply

For example:

```
https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=300&h=200&fit=cover
```

This URL will fetch the image at `sample.jpg`, resize it to 300×200 pixels using the "cover" fit mode.

## URL Structure

### Base URL

The base URL format is:

```
https://[your-domain]/v1/[tenant]/images/
```

### Image Path

After the base URL, specify the path to your image:

```
https://demo.skymage.net/v1/daudau.cc/images/folder/sample.jpg
```

### Transformation Parameters

Add a question mark `?` after the image path, followed by your transformation parameters:

```
https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=500&h=300
```

Multiple parameters are separated by ampersands (`&`):

```
https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=500&h=300&fit=cover&blur=5
```

## Using with HTML

Here's how to use Skymage URLs in your HTML:

```html
<img src="https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=300&h=200" alt="My Image">
```

### Responsive Images

For responsive websites, you can use the `srcset` attribute:

```html
<img
  src="https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=800"
  srcset="
    https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=320 320w,
    https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=480 480w,
    https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=800 800w
  "
  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
  alt="Responsive Image"
>
```

## Using with CSS

You can also use Skymage URLs in your CSS:

```css
.hero-section {
  background-image: url('https://demo.skymage.net/v1/daudau.cc/images/background.jpg?w=1600&fit=cover&q=80');
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .hero-section {
    background-image: url('https://demo.skymage.net/v1/daudau.cc/images/background.jpg?w=800&fit=cover&q=80');
  }
}
```

## Using with JavaScript

### Basic JavaScript

```javascript
const imgElement = document.createElement('img');
imgElement.src = 'https://demo.skymage.net/v1/daudau.cc/images/product.jpg?w=300&h=300&fit=contain';
document.body.appendChild(imgElement);
```

### Dynamic Parameters

You can build URLs dynamically based on user actions or screen size:

```javascript
function generateImageUrl(width, height, filter) {
  const baseUrl = 'https://demo.skymage.net/v1/daudau.cc/images/sample.jpg';
  return `${baseUrl}?w=${width}&h=${height}&filt=${filter}`;
}

// Generate different versions based on needs
const thumbnailUrl = generateImageUrl(100, 100, 'none');
const featuredUrl = generateImageUrl(800, 600, 'sharpen');
const profileUrl = generateImageUrl(200, 200, 'sepia');
```

## Client Libraries

### PHP Library

Install the library:

```bash
composer require daudau/skymage
```

Basic usage:

```php
<?php

require 'vendor/autoload.php';

$skymage = new \Daudau\Skymage\Client('your-api-key');

// Build an image URL with transformations
$url = $skymage->image('sample.jpg')
    ->resize(800, 600)
    ->filter('sepia')
    ->blur(5)
    ->quality(80)
    ->getUrl();

echo $url;
// Outputs: https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=800&h=600&filt=sepia&blur=5&q=80
```

Advanced usage with more transformations:

```php
$url = $skymage->image('profile.jpg')
    ->resize(400, 400)
    ->crop('face')
    ->filter('sharpen')
    ->watermark('logo.png', [
        'position' => 'bottom-right',
        'opacity' => 50
    ])
    ->getUrl();
```

### JavaScript Library

Install the library:

```bash
npm install skymage
```

Basic usage:

```javascript
import Skymage from 'skymage';

const skymage = new Skymage('your-api-key');

// Build an image URL with transformations
const url = skymage.image('sample.jpg')
    .resize(800, 600)
    .filter('sepia')
    .blur(5)
    .quality(80)
    .getUrl();

console.log(url);
// Outputs: https://demo.skymage.net/v1/daudau.cc/images/sample.jpg?w=800&h=600&filt=sepia&blur=5&q=80
```

Vue.js component example:

```javascript
<template>
  <div>
    <img :src="imageUrl" alt="Transformed image">
  </div>
</template>

<script>
import Skymage from 'skymage';

export default {
  data() {
    return {
      skymage: new Skymage('your-api-key'),
      width: 400,
      height: 300
    }
  },
  computed: {
    imageUrl() {
      return this.skymage.image('product.jpg')
        .resize(this.width, this.height)
        .fit('contain')
        .getUrl();
    }
  }
}
</script>
```

## URL Parameters Reference

Here's a quick reference of the most common parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `w` | Width in pixels | `w=300` |
| `h` | Height in pixels | `h=200` |
| `fit` | Fit mode (clip, cover, contain, fill, scale-down) | `fit=cover` |
| `q` | Quality (1-100) | `q=80` |
| `blur` | Blur amount | `blur=10` |
| `sharpen` | Sharpen amount | `sharpen=10` |
| `filt` | Filter to apply | `filt=sepia` |
| `flip` | Flip direction (h, v, hv) | `flip=h` |
| `p` | Position for crop | `p=face` or `p=top` |

For a complete list of all available parameters and options, please refer to our [Transformations Documentation](./index.md).

## Common Recipes

### E-commerce Product Image

```
https://demo.skymage.net/v1/daudau.cc/images/product.jpg?w=600&h=600&fit=contain&bg=white
```

### Social Media Profile Picture

```
https://demo.skymage.net/v1/daudau.cc/images/profile.jpg?w=200&h=200&fit=crop&p=face
```

### Hero Banner

```
https://demo.skymage.net/v1/daudau.cc/images/banner.jpg?w=1600&h=600&fit=cover&q=85
```

### Thumbnail with Effect

```
https://demo.skymage.net/v1/daudau.cc/images/thumbnail.jpg?w=150&h=150&fit=crop&filt=grayscale
```

## Best Practices

1. **Use appropriate dimensions**: Don't load larger images than necessary
2. **Set quality parameters**: Use `q=80` or similar for most web images to save bandwidth
3. **Use responsive images**: Serve different sizes for different devices
4. **Choose appropriate fit modes**: Different content looks better with different fit modes
5. **Cache your images**: Set appropriate caching headers or use a CDN
6. **Use descriptive ALT text**: Always include meaningful alt text for accessibility

## Next Steps

Now that you understand the basics of using Skymage, explore specific transformations:

- [Resizing Images](./resizing.md)
- [Image Fit Options](./fit.md)
- [Cropping Images](./crop.md)
- [Applying Filters](./filters.md)
- [Adding Watermarks](./watermark.md)