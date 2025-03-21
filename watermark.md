# Watermark

Skymage allows you to add text watermarks to your images using the `watermark` parameter. This feature is useful for branding, copyright protection, or adding credits to your images.

## Basic Usage

To add a text watermark to an image, use the `watermark` parameter with your desired text:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?watermark=Copyright
```
![Image with watermark](https://demo.skymage.net/v1/daudau.cc/images/crab.png?watermark=Copyright)

## Watermark Behavior

When applying a watermark to your image:

- The watermark is placed in the bottom-right corner of the image
- The text size automatically scales relative to the image height (approximately 1/35 of the image height)
- A small margin is maintained from the edges (approximately 1/50 of the image height)
- The watermark maintains legibility across different image sizes

## Advanced Usage

### Multi-word Watermarks

You can include spaces and multiple words in your watermark:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?watermark=© Skymage 2023
```
![Image with multi-word watermark](https://demo.skymage.net/v1/daudau.cc/images/crab.png?watermark=©%20Skymage%202023)

Remember to properly URL-encode spaces and special characters:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?watermark=%C2%A9%20Skymage%202023
```

### Combining with Other Transformations

Watermarks can be combined with any other image transformation:

**Watermark with Resizing:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&watermark=Resized
```
![Watermark with resize](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=400&watermark=Resized)

**Watermark with Cropping:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=500&h=300&fit=crop&watermark=Cropped
```
![Watermark with crop](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=500&h=300&fit=crop&watermark=Cropped)

**Watermark with Effects:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=3&watermark=Blurred
```
![Watermark with blur](https://demo.skymage.net/v1/daudau.cc/images/crab.png?blur=3&watermark=Blurred)

## Automatic Domain Watermarking

Skymage offers an automatic domain watermarking feature that can be enabled through the Dashboard settings. When activated, this feature will automatically add the domain of the original image as a watermark.

### Enabling Domain Watermarking

1. Log in to your Skymage Dashboard
2. Navigate to the Settings section
3. Find the "Domain Watermark" option and enable it

Once enabled, all images served through your Skymage account will automatically include the source domain as a watermark in the bottom-right corner.

### Example

Original image URL: `https://example.com/images/photo.jpg`

When accessing through Skymage with domain watermarking enabled:
```
https://demo.skymage.net/v1/example.com/images/photo.jpg?w=400
```

The image will be served with "example.com" automatically watermarked in the corner.

### Benefits of Domain Watermarking

- **Attribution**: Automatically credits the source of images
- **Tracking**: Easily identify the original source of an image
- **Branding**: Reinforce domain recognition across shared images
- **Consistency**: Apply uniform watermarking across all images without manual parameter setting

### Combining Manual and Automatic Watermarks

When domain watermarking is enabled in the Dashboard, any manual `watermark` parameter in the URL will take precedence and replace the automatic domain watermark.

## Technical Details

- The watermark text is rendered as a PNG image with transparency
- Text size is proportional to the image dimensions, with minimum and maximum size constraints
- Minimum text height: 10 pixels
- Maximum text height: 100 pixels
- Watermark images are cached for better performance
- Special characters and spaces are supported but should be URL-encoded

## Common Use Cases

- **Copyright Protection**: Add copyright notices to prevent unauthorized use
- **Branding**: Include your company or website name on images
- **Photography Credits**: Add photographer name or credits
- **Social Media Attribution**: Ensure your content is credited when shared
- **Version Marking**: Identify different versions or uses of the same image

## Best Practices

- Keep watermark text concise for better readability
- Consider image content when adding watermarks - avoid covering important areas
- For better performance, reuse the same watermark text when processing multiple images
- Use URL encoding for special characters and spaces in watermark text
- Remember that watermarks are permanently applied to the delivered image
