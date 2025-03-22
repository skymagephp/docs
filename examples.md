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
