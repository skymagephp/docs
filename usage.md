# Usage

Using the skymage api to resize images is simple. Just append the query parameters to the image url.

When you create a skymage account, you'll received a unique handle, which is used to identify your images. You can use this handle to access your images via the skymage api.

## Example

- Your account handle is `demo`.
- The current api version of skymage is `v1`.
- Your image url is: `https://daudau.cc/images/crab.png`

To resize the image to a width of 322 pixels, you can use the following syntax:

```https://{handle}.skymage.net/v1/{your-image-without-protocol}?{query-parameters}```

So your transformed image url will be:

`https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=322`

![image](https://demo.skymage.net/v1/daudau.cc/images/crab.png?w=300)