# Crop

When using `fit=crop` or `fit=cover` for your images, you can precisely control which part of the image is preserved during the cropping process using the `pos` parameter.

## Crop Positioning with `pos`

The `pos` parameter determines which part of the image should be kept when cropping is applied. This is especially useful when you want to ensure that the most important elements of your image remain visible.

### Available Positions

| Position | Description |
|----------|-------------|
| `center` | Center the image (default) |
| `top` | Align to the top |
| `bottom` | Align to the bottom |
| `left` | Align to the left |
| `right` | Align to the right |
| `top-left` | Align to the top-left corner |
| `top-right` | Align to the top-right corner |
| `bottom-left` | Align to the bottom-left corner |
| `bottom-right` | Align to the bottom-right corner |

## Position Examples

**Original Image:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png
```
![Original image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400)

**Center (Default):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=center
```
![Center position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=center)

**Top:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=top
```
![Top position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=top)

**Bottom-right:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=bottom-right
```
![Bottom-right position example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&pos=bottom-right)

## Use Cases for Different Positions

- **Center**: Best for general-purpose cropping when the main subject is centered
- **Top**: Ideal for portraits or images where the upper portion contains the main subject
- **Bottom**: Useful for images where the bottom contains important information
- **Left/Right**: Helpful for directional contexts or when subjects are positioned on one side
- **Corner positions**: Perfect for maintaining specific corner elements in the frame

## Practical Example: Portrait Cropping

When cropping portrait photos for different aspect ratios, the position can drastically affect the result:

**Square crop from portrait (centered):**
```
https://demo.skymage.net/v1/daudau.cc/images/portrait.jpg?w=300&h=300&fit=crop&pos=center
```

**Square crop from portrait (focused on face):**
```
https://demo.skymage.net/v1/daudau.cc/images/portrait.jpg?w=300&h=300&fit=crop&pos=top
```

## Tips for Effective Cropping

- Consider the subject placement in your original image when choosing a position
- Use `pos=center` as a safe default for most images
- For portraits or people-focused images, `pos=top` or `pos=face` often works best
- For landscapes with important horizons, try `pos=top` or `pos=bottom` depending on composition
- Test different positions to find the most effective framing for your specific image
