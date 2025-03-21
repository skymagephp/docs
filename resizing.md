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

## Performance Tips

- Specify only the dimensions you need to save bandwidth
- Use WebP format (`f=webp`) together with resizing for optimal performance
