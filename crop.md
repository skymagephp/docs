# Crop

When using `fit=crop` or `fit=cover` for your images, you can precisely control which part of the image is preserved during the cropping process using the `p` parameter.

The `p` parameter determines which part of the image should be kept when cropping is applied. This is especially useful when you want to ensure that the most important elements of your image remain visible.

**Original Image:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png
```
![Original image](https://demo.skymage.net/v1/daudau.cc/images/crab.png)

## Standard Positions

### center

Default positioning. Centers the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=center
```
![Center position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=center)

### top

Aligns to the top edge of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top
```
![Top position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top)

### bottom

Aligns to the bottom edge of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom
```
![Bottom position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom)

### left

Aligns to the left edge of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=left
```
![Left position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=left)

### right

Aligns to the right edge of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=right
```
![Right position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=right)

## Corner Positions

### top-left

Aligns to the top-left corner of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top-left
```
![Top-left position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top-left)

### top-right

Aligns to the top-right corner of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top-right
```
![Top-right position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=top-right)

### bottom-left

Aligns to the bottom-left corner of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom-left
```
![Bottom-left position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom-left)

### bottom-right

Aligns to the bottom-right corner of the image during cropping.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom-right
```
![Bottom-right position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=bottom-right)

## Custom Crop Coordinates

For precise control over cropping, you can use the `crop` parameter to specify exact pixel coordinates. This allows you to crop any rectangular region from your image.

The `crop` parameter takes four comma-separated values in the format:
```
crop=width,height,x,y
```

Where:
- `width`: Width of the cropped area in pixels
- `height`: Height of the cropped area in pixels
- `x`: X coordinate (horizontal position) of the top-left corner
- `y`: Y coordinate (vertical position) of the top-left corner

### Example

To crop a 500x200 pixel region, starting at coordinates (0, 200):

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?crop=500,200,0,200
```
![Custom crop example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?crop=500,200,0,200
)

### Usage Notes

- Coordinates are zero-based, with (0,0) being the top-left corner of the image
- Coordinates must be within the boundaries of the original image
- The width and height must be positive values
- If the specified region extends beyond the image boundaries, it will be adjusted to fit within the image

## Advanced Position Control

### Focal Point Positioning

In addition to the standard position values (`center`, `top`, etc.), you can specify a precise focal point using percentages with the `p` parameter:

```
p=crop-x-y
```

Where `x` and `y` are percentage values (0-100) representing the focal point coordinates.

**Examples:**

Center focal point (50% from left, 50% from top):
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-50-50
```
![Center focal point](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-50-50)

Top-right focal point (75% from left, 25% from top):
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-75-25
```
![Top-right focal point](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-75-25)

Bottom-left focal point (25% from left, 75% from top):
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-25-75
```
![Bottom-left focal point](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=crop-25-75)

### Smart Cropping

Skymage also supports smart cropping that automatically determines the most interesting or important part of the image:

**Entropy-based smart cropping:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=entropy
```
![Entropy-based cropping](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=entropy)

**Attention-based smart cropping:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=attention
```
![Attention-based cropping](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=700&h=500&fit=crop&p=attention)

## Practical Examples

### Square Crop from Portrait

When cropping portrait photos for different aspect ratios, the position can drastically affect the result:

**Square crop from portrait (centered):**
```
https://demo.skymage.net/v1/daudau.cc/images/portrait.jpg?w=300&h=300&fit=crop&p=center
```

**Square crop from portrait (focused on face):**
```
https://demo.skymage.net/v1/daudau.cc/images/portrait.jpg?w=300&h=300&fit=crop&p=top
```

## Best Practices

- Consider the subject placement in your original image when choosing a position
- Use `p=center` as a safe default for most images
- For portraits or people-focused images, `p=top` often works best
- For landscapes with important horizons, try `p=top` or `p=bottom` depending on composition
- Test different positions to find the most effective framing for your specific image
