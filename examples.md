# Examples

This page demonstrates various examples of using Skymage for image transformations.

## Feature Highlights

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <FeatureCard
    title="Lightning Fast"
    description="Skymage is optimized for speed, processing images in milliseconds."
    icon="⚡"
    link="/index.md" />

  <FeatureCard
    title="Simple API"
    description="Transform images with simple URL parameters. No complex configurations needed."
    icon="🔧"
    link="/index.md" />

  <FeatureCard
    title="Advanced Filters"
    description="Apply professional-grade filters to create stunning visual effects."
    icon="🎨"
    link="/filters.md" />

  <FeatureCard
    title="Responsive Images"
    description="Generate perfectly sized images for any device or display."
    icon="📱"
    link="/resizing.md" />
</div>

## Before & After Comparison

See the difference our image transformations can make:

<ImageCompare
  beforeImage="https://demo.skymage.net/v1/daudau.cc/images/crab.png"
  afterImage="https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=sepia&con=20"
  beforeLabel="Original Image"
  afterLabel="With Sepia Filter"
  initialPosition="50" />

<!-- Add more examples to showcase different transformations -->

<div style="margin-top: 2rem;">
  <h3>Blur Effect Comparison</h3>
  <ImageCompare
    beforeImage="https://demo.skymage.net/v1/daudau.cc/images/crab.png"
    afterImage="https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=10"
    beforeLabel="Original Image"
    afterLabel="With Blur Effect"
    initialPosition="50" />
</div>

## Code Examples

<CodeGroup>
```php
// Install Skymage
composer require daudau/skymage

// Initialize the client
$skymage = new \Daudau\Skymage\Client('your-api-key');

// Generate a transformed image URL
$url = $skymage->image('your-image.jpg')
    ->resize(800, 600)
    ->filter('sepia')
    ->blur(5)
    ->getUrl();
```

```javascript
// Install Skymage JS client
npm install skymage

// Initialize the client
const skymage = new Skymage('your-api-key');

// Generate a transformed image URL
const url = skymage.image('your-image.jpg')
    ->resize(800, 600)
    ->filter('sepia')
    ->blur(5)
    ->getUrl();
```
</CodeGroup>

## Common Transformation Recipes

### Social Media Cover Image

```
https://demo.skymage.net/v1/daudau.cc/images/landscape.jpg?w=1200&h=630&fit=cover&p=top
```

### E-commerce Product Thumbnail

```
https://demo.skymage.net/v1/daudau.cc/images/product.jpg?w=300&h=300&fit=contain&bg=white
```

### Blog Featured Image with Filter

```
https://demo.skymage.net/v1/daudau.cc/images/blog.jpg?w=800&h=450&fit=cover&filt=grayscale
```

### Profile Picture with Face Detection

```
https://demo.skymage.net/v1/daudau.cc/images/person.jpg?w=200&h=200&fit=crop&p=face
```

## External Storage Examples

### Amazon S3 Gallery Image

Transform images directly from your S3 bucket:

```
https://demo.skymage.net/v1/ex/my-s3-bucket/gallery/photo.jpg?w=1200&h=800&fit=cover&q=85
```

### BunnyCDN Product Catalog

Resize product images from BunnyCDN storage:

```
https://demo.skymage.net/v1/ex/bunny-storage/products/item-001.jpg?w=400&h=400&fit=contain&bg=white
```

### DigitalOcean Spaces Blog Images

Apply filters to blog images stored in DigitalOcean Spaces:

```
https://demo.skymage.net/v1/ex/do-spaces/blog/featured.jpg?w=800&h=450&fit=cover&filt=vintage
```

### MinIO Private Cloud Storage

Transform images from your private MinIO instance:

```
https://demo.skymage.net/v1/ex/minio-storage/uploads/user-content.jpg?w=600&h=400&fit=crop&p=center
```

## Real-World Use Cases

### E-commerce Platform

```html
<!-- Product listing page -->
<img src="https://demo.skymage.net/v1/ex/s3-products/catalog/item-123.jpg?w=300&h=300&fit=contain&bg=white"
     alt="Product thumbnail">

<!-- Product detail page -->
<img src="https://demo.skymage.net/v1/ex/s3-products/catalog/item-123.jpg?w=800&h=600&fit=cover"
     alt="Product detail">

<!-- Mobile responsive -->
<picture>
  <source media="(max-width: 768px)"
          srcset="https://demo.skymage.net/v1/ex/s3-products/catalog/item-123.jpg?w=400&h=300&fit=cover">
  <img src="https://demo.skymage.net/v1/ex/s3-products/catalog/item-123.jpg?w=800&h=600&fit=cover"
       alt="Product image">
</picture>
```

### Content Management System

```html
<!-- Blog featured image -->
<img src="https://demo.skymage.net/v1/ex/cms-storage/blog/article-456.jpg?w=1200&h=630&fit=cover&p=top"
     alt="Article featured image">

<!-- Author avatar -->
<img src="https://demo.skymage.net/v1/ex/cms-storage/avatars/author-789.jpg?w=64&h=64&fit=crop&p=face"
     alt="Author avatar" class="rounded-full">

<!-- Gallery thumbnails -->
<div class="gallery-grid">
  <img src="https://demo.skymage.net/v1/ex/cms-storage/gallery/img-001.jpg?w=200&h=200&fit=crop">
  <img src="https://demo.skymage.net/v1/ex/cms-storage/gallery/img-002.jpg?w=200&h=200&fit=crop">
  <img src="https://demo.skymage.net/v1/ex/cms-storage/gallery/img-003.jpg?w=200&h=200&fit=crop">
</div>
```

### Social Media Application

```javascript
// Generate different sizes for social sharing
const generateSocialImages = (imagePath) => {
  const baseUrl = `https://demo.skymage.net/v1/ex/social-storage/${imagePath}`;

  return {
    facebook: `${baseUrl}?w=1200&h=630&fit=cover`,
    twitter: `${baseUrl}?w=1200&h=600&fit=cover`,
    instagram: `${baseUrl}?w=1080&h=1080&fit=crop&p=center`,
    linkedin: `${baseUrl}?w=1200&h=627&fit=cover`
  };
};

// Usage
const socialImages = generateSocialImages('posts/user-post-123.jpg');
```
