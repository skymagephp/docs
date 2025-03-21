# Usage

## Image Transformation Made Easy

Using the Skymage API to transform images is straightforward. Simply append query parameters to your image URL using our standard syntax.

When you create a Skymage account, you'll receive a unique handle that identifies your account and is used to access the transformation service.

## Basic Syntax

```
https://{your-handle}.skymage.net/v1/{your-image-url-without-protocol}?{transformation-parameters}
```

## Quick Example

Let's say you have:

- **Account handle**: `demo`
- **API Version**: `v1` (current version)
- **Original image URL**: `https://daudau.cc/images/crab.png`

To resize this image to a width of 300 pixels:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300
```

## Result

Original image → Transformed image (w=300)

![Example of a transformed image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300)

## Common Transformations

| Parameter | Description | Example |
|-----------|-------------|---------|
| `w` | Width in pixels | `?w=300` |
| `h` | Height in pixels | `?h=200` |
| `q` | Quality (0-100) | `?q=80` |
| `f` | Format (webp, jpeg, png) | `?f=webp` |

Multiple parameters can be combined with the ampersand symbol: `?w=300&h=200&f=webp`