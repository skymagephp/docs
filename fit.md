# Fit

When resizing images with both width and height parameters, the `fit` parameter becomes essential for controlling how the image adapts to the new dimensions.

## clip

Default behavior. Resize to fill dimensions while maintaining aspect ratio and clip excess.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=clip
```
![Clip example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=clip)

## cover

Resize to completely cover the dimensions while maintaining aspect ratio.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=cover
```
![Cover example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=cover)

## contain

Resize to fit entirely within the dimensions while maintaining aspect ratio.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=contain
```
![Contain example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=contain)

## fill

Stretch to exactly fill the dimensions, may distort the image.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=fill
```
![Fill example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=fill)

## scale-down

Like `contain`, but only if the image is larger than the dimensions.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=scale-down
```
![Scale-down example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=scale-down)

## crop

Resize to cover the dimensions and crop any excess.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop
```
![Crop example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop)

When using `fit=crop`, you can control which part of the image is preserved with the `pos` parameter.

[📏 Learn more about Image Cropping and Positioning](./crop.md)

## Best Practices

- Use `clip` (default) when you want to maintain aspect ratio and don't mind clipping
- Use `cover` when you need the image to fill the entire dimensions without distortion
- Use `contain` when you need to show the whole image within the dimensions
- Use `fill` only when image distortion is acceptable
- Use `scale-down` to avoid enlarging small images beyond their original dimensions
- Use `crop` when you need precise control over which parts of the image are shown
