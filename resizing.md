# Image Resizing

Skymage offers powerful resizing capabilities that allow you to dynamically adjust image dimensions while preserving quality.

## Basic Resizing Parameters

### Width `w`

Set the width of the image in pixels. The height will adjust automatically to maintain the aspect ratio.

**Example:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300
```

![Width example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300)

### Height `h`

Set the height of the image in pixels. The width will adjust automatically to maintain the aspect ratio.

**Example:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?h=200
```

![Height example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?h=200)

### Width and Height `w` & `h`

When specifying both dimensions, you should always include a `fit` parameter to control how the image should be resized. Without a `fit` parameter, the default behavior is `fit=clip`.

**Example:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200
```

![Width and height example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200)

For detailed information about fit modes and positioning, see the [Fit and Positioning Guide](./fit.md).

## Device Pixel Ratio `dpr`

The `dpr` parameter allows you to account for high-density displays (like Retina displays) by automatically adjusting the image size to match the device's pixel ratio.

**Example:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&dpr=2
```

![DPR example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&dpr=2)

This will generate an image with an actual width of 600 pixels (300 × 2), but it will be displayed at 300 CSS pixels, resulting in a sharper image on high-density displays.

### Common DPR Values

| Device Type | Typical DPR Value |
|-------------|------------------|
| Standard displays | 1 (default) |
| Retina displays | 2 |
| High-end mobile devices | 2 or 3 |
| Latest iPhone Pro models | 3 |

## Responsive Images

For responsive web design, you can create multiple sizes of the same image:

```html
<img
  src="https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400"
  srcset="
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300 300w,
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=600 600w,
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=900 900w
  "
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive crab image"
/>
```

### Combining DPR with Responsive Images

For the best results, you can combine the `dpr` parameter with responsive images:

```html
<img
  src="https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&dpr=1"
  srcset="
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&dpr=1 1x,
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&dpr=2 2x,
    https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&dpr=3 3x
  "
  alt="Responsive crab image with DPR support"
/>
```

## Performance Tips

- Specify only the dimensions you need to save bandwidth
- Use WebP format (`f=webp`) together with resizing for optimal performance
- Specify an appropriate `dpr` value to provide the optimal resolution for each device
