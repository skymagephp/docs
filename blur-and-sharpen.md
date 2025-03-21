# Image Enhancement Effects

Skymage offers two powerful image enhancement effects: Blur and Sharpen. These effects can be applied through simple parameters to create various visual styles and improve image quality.

## Blur

The blur effect softens your images, creating a more diffuse, dreamy aesthetic.

### Basic Blur Usage

To apply a blur effect, add the `blur` parameter to your image URL:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=5
```
![Blurred image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=5)

### Blur Intensity

The `blur` parameter accepts values between 0.3 and 1000, representing the blur radius:

- Lower values (0.3-3): Subtle blur effect
- Medium values (3-10): Moderate blur
- Higher values (10+): Strong blur effect

#### Blur Examples

**Subtle Blur (blur=1):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=1
```
![Subtle blur](https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=1)

**Moderate Blur (blur=5):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=5
```
![Moderate blur](https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=5)

**Strong Blur (blur=20):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=20
```
![Strong blur](https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=20)

### Blur Implementation Details

When you specify a value between 0.3 and 1000, Skymage applies a Gaussian blur with the specified sigma value. For values outside this range or non-numeric values, a fast, mild blur is applied using a 3×3 averaging filter.

### Common Blur Use Cases

- **Background Blur**: Blur images used as backgrounds to make foreground content more readable
- **Privacy**: Blur portions of an image to hide sensitive information
- **Focus Effect**: Blur the background to emphasize the main subject
- **Thumbnail Previews**: Use blur for low-quality image placeholders while full images load

## Sharpen

The sharpen effect enhances image details and increases perceived clarity. This is particularly useful for images that appear slightly blurry or lack definition.

### Basic Sharpen Usage

To sharpen an image, add the `sharp` parameter to your image URL:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=5
```
![Sharpened image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=5)

### Sharpening Intensity

The `sharp` parameter accepts values between 0 and 10, where:

- Lower values (1-3): Subtle sharpening
- Medium values (4-6): Moderate sharpening
- Higher values (7-10): Strong sharpening

#### Sharpen Examples

**Subtle Sharpening (sharp=2):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=2
```
![Subtle sharpening](https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=2)

**Moderate Sharpening (sharp=5):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=5
```
![Moderate sharpening](https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=5)

**Strong Sharpening (sharp=9):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=9
```
![Strong sharpening](https://demo.skymage.net/v1/daudau.cc/images/crab.png?sharp=9)

### Sharpen Implementation Details

Skymage's sharpening algorithm intelligently adapts to different areas of the image:

- **Flat Areas**: Applies gentler sharpening to avoid introducing noise
- **Jagged Areas**: Applies stronger sharpening to enhance details

The sharpening process works in LAB color space to minimize color distortion while maximizing detail enhancement.

### Common Sharpen Use Cases

- **Enhance Product Photos**: Make product details more visible
- **Improve Text Legibility**: Sharpen images containing text
- **Rescue Slightly Blurry Images**: Add clarity to images that aren't perfectly focused
- **Enhance Architectural Details**: Bring out textures and patterns in buildings
- **Improve After Resizing**: Restore detail lost during downsizing

## Combining with Other Parameters

Both effects work well in combination with other transformations:

**Blur with Resize:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&blur=3
```
![Blur with resize](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&blur=3)

**Sharpen with Resize:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&sharp=4
```
![Sharpen with resize](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&sharp=4)

**Format Conversion:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=5&f=webp
```

## Performance Best Practices

- Higher blur values and stronger sharpening require more processing time
- Apply these effects after resizing for better performance
- Subtle effects often provide the best balance between visual improvement and processing efficiency
- For time-sensitive applications, use modest enhancement values
- Consider the content: portraits typically need less sharpening than landscapes or product photos
