# Image Orientation

Skymage allows you to control image orientation using the `flip` parameter. This powerful feature lets you mirror images horizontally, vertically, or both, making it easy to create reflected versions of your original images.

## Basic Usage

To flip an image, add the `flip` parameter to your image URL:

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h
```
![Horizontally flipped image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h)

## Flip Options

The `flip` parameter accepts the following values:

| Value | Description |
|-------|-------------|
| `h` | Horizontal flip (mirror across vertical axis) |
| `v` | Vertical flip (mirror across horizontal axis) |
| `hv` or `vh` | Both horizontal and vertical flip (180° rotation) |

### Horizontal Flip (`h`)

Mirrors the image from left to right. This is like seeing the image in a mirror placed to the side.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h
```
![Horizontal flip example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h)

### Vertical Flip (`v`)

Mirrors the image from top to bottom. This is like seeing the image in a mirror placed above or below.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=v
```
![Vertical flip example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=v)

### Both Horizontal and Vertical Flip (`hv` or `vh`)

Mirrors the image both horizontally and vertically. This is equivalent to rotating the image 180 degrees.

```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=hv
```
![Both horizontal and vertical flip example](https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=hv)

## Combining with Other Parameters

The flip parameter can be combined with other transformations for more complex effects:

**Flip with Resize:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&flip=h
```
![Flip with resize](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&flip=h)

**Flip with Crop:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&flip=v
```
![Flip with crop](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300&h=200&fit=crop&flip=v)

**Flip with Effects:**
```
https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h&blur=3
```
![Flip with blur](https://demo.skymage.net/v1/daudau.cc/images/crab.png?flip=h&blur=3)

## Common Use Cases

- **Mirror images** for creative or artistic effect
- **Correct improperly oriented images** uploaded by users
- **Create reflection effects** for product showcases
- **Standardize image orientation** across a collection
- **Generate symmetrical patterns** from asymmetrical source images

## Implementation Details

The flip transformation preserves all image qualities including transparency, color profile, and metadata (except for the orientation tag which is removed to avoid conflicts).
