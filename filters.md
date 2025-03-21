# Image Filters

Skymage provides a set of image filters that allow you to apply creative effects to your images. These filters can dramatically change the look and feel of images with a simple URL parameter.

## Basic Usage

To apply a filter to an image, add the `filt` parameter to your image URL:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=grayscale
```
![Grayscale filter example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=grayscale)

## Available Filters

Skymage currently supports three filter types:

### Grayscale

Converts the image to black and white (grayscale).

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=grayscale
```
![Grayscale filter example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=grayscale)

### Sepia

Applies a warm brown tone to create a vintage or antique look.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=sepia
```
![Sepia filter example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=sepia)

### Negative

Inverts all colors in the image, creating a negative/inverted effect.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=negate
```
![Negative filter example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?filt=negate)

### Brightness

Adjusts the brightness of an image using the `bri` parameter. This can make images lighter or darker.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=69
```
![Increased brightness example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=69)

The `bri` parameter accepts values from -100 (completely darkened) to 100 (maximum brightness):

- Negative values (-100 to -1): Decrease brightness (darken the image)
- Zero (0): No change (original brightness)
- Positive values (1 to 100): Increase brightness (lighten the image)

**Examples:**

**Darkened Image (bri=-50):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=-50
```
![Decreased brightness example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=-50)

**Brightened Image (bri=50):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=50
```
![Increased brightness example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=50)

### Contrast

Adjusts the contrast of an image using the `con` parameter. This affects the difference between dark and light areas.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=50
```
![Increased contrast example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=50)

The `con` parameter accepts values from -100 (minimum contrast) to 100 (maximum contrast):

- Negative values (-100 to -1): Decrease contrast (flatten the image)
- Zero (0): No change (original contrast)
- Positive values (1 to 100): Increase contrast (enhance differences between dark and light)

**Examples:**

**Reduced Contrast (con=-50):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=-50
```
![Decreased contrast example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=-50)

**Enhanced Contrast (con=50):**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=50
```
![Increased contrast example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?con=50)

### Combining Brightness and Contrast

For more control over image appearance, you can combine brightness and contrast adjustments:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=20&con=30
```
![Combined brightness and contrast](https://demo.skymage.net/v1/daudau.cc/images/crab.png?bri=20&con=30)

## Technical Implementation

All filters preserve transparency (alpha channel) if present in the original image. The implementation:

1. Detects if the image has an alpha channel
2. If an alpha channel exists, it's extracted before applying the filter
3. The filter is applied to the color channels only
4. The alpha channel is rejoined to preserve transparency

## Common Use Cases

### Grayscale

- **Professional Photography**: Create timeless, classic images
- **Print Materials**: Prepare images for black and white printing
- **Reducing Visual Noise**: Remove color distractions for UI elements
- **Accessibility**: Improve readability for color-blind users

### Sepia

- **Vintage Effect**: Create nostalgic, old-time photos
- **Warming Cold Images**: Add warmth to sterile or cold-colored photos
- **Thematic Consistency**: Create a consistent historical theme across different images
- **Brand Styling**: Apply consistent warm tones for brand identity

### Negative

- **Artistic Effects**: Create surreal or abstract visuals
- **Analysis**: Highlight certain details that may be difficult to see in normal images
- **Visual Interest**: Create striking, unusual versions of common images
- **Dark Mode Inversion**: Generate inverted versions of icons or graphics

### Brightness Adjustment

- **Correct Underexposed Images**: Brighten photos taken in low light conditions
- **Create High-Key Images**: Create bright, airy aesthetics for fashion or product photography
- **Visual Hierarchy**: Make key elements stand out by increasing their brightness
- **Dark Mode Adaptations**: Create lighter versions of images for dark mode interfaces

### Contrast Adjustment

- **Enhance Flat Images**: Improve impact by adding contrast to hazy or flat images
- **Text Legibility**: Increase contrast to make text stand out against backgrounds
- **Artistic Effects**: Create dramatic high-contrast images for visual impact
- **Weather Conditions**: Correct for fog or mist that reduces natural contrast

## Best Practices

- Consider the purpose of your image when choosing a filter
- Use filters consistently across related images for cohesive design
- Consider combining filters with other effects like blur or sharpening for more complex visual styles
- Test filtered images across different devices to ensure the effect works as expected
- Filters are applied on-demand and may slightly increase processing time for very large images
- When adjusting brightness, check for detail loss in highlights and shadows
- Apply contrast adjustments after brightness changes for more control
- For printable images, slightly higher contrast often produces better results
- Consider the viewing environment — higher contrast for bright environments, lower for dim settings
