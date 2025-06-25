# External Storage Overview

Skymage supports external storage providers, allowing you to serve and transform images directly from your cloud storage without uploading them to Skymage's servers. This feature enables you to maintain control over your images while leveraging Skymage's powerful transformation capabilities.

## Supported Storage Providers

Skymage currently supports the following external storage providers:

- **[Bunny Storage](/bunny-storage.md)** - High-performance edge storage with global distribution
- **[Amazon S3](/s3-storage.md)** - Industry-standard object storage with worldwide availability
- **S3-Compatible Services** - Including DigitalOcean Spaces, MinIO, and other S3-compatible providers

## How External Storage Works

When you configure external storage with Skymage:

1. **Direct Access**: Skymage fetches images directly from your storage provider
2. **On-the-Fly Processing**: Images are transformed in real-time as requested
3. **CDN Distribution**: Processed images are cached and distributed globally
4. **Cost Efficiency**: You only pay for bandwidth and storage with your provider

## URL Structure

External storage images use a special URL pattern:

```
https://[your-handle].skymage.net/v1/ex/[storage-handle]/[image-path]?[transformations]
```

Where:
- `[your-handle]` is your Skymage pull zone handle
- `[storage-handle]` is your configured external storage identifier
- `[image-path]` is the path to your image in the storage
- `[transformations]` are the image transformation parameters

### Example

```
https://demo.skymage.net/v1/ex/my-s3-bucket/photos/vacation.jpg?w=800&h=600&fit=cover
```

This URL will:
1. Fetch `photos/vacation.jpg` from your configured S3 bucket
2. Resize it to 800×600 pixels using cover fit
3. Serve the transformed image through Skymage's CDN

## Getting Started

1. **Log in to Skymage Dashboard**: Access your Skymage account dashboard
2. **Navigate to External Storage**: Go to the External Storage section
3. **Add New Storage**: Click "Add External Storage" and choose your provider
4. **Configure Credentials**: Enter your storage provider credentials and settings
5. **Test Connection**: Verify the connection works correctly
6. **Get Storage Handle**: Note your storage handle for use in URLs

## Performance & Optimization

### Global Performance

Skymage automatically optimizes external storage performance through:

- **Edge Caching**: Transformed images cached at global edge locations
- **Smart Routing**: Requests routed to nearest available cache
- **Origin Optimization**: Efficient fetching from your storage provider
- **Bandwidth Optimization**: Compressed delivery without quality loss

### Best Practices

1. **Choose Nearby Regions**: Select storage regions close to your primary users
2. **Optimize File Organization**: Use logical folder structures for better management
3. **Upload High Quality**: Store original high-quality images; Skymage optimizes delivery
4. **Use Descriptive Names**: Clear file naming for easier content management
5. **Monitor Usage**: Track bandwidth and transformation usage patterns

### Caching Strategy

- **Aggressive Caching**: Frequently accessed images cached longer
- **Smart Invalidation**: Cache automatically updated when source images change
- **Global Distribution**: Cached content served from nearest edge location
- **Bandwidth Efficiency**: Reduced origin requests through intelligent caching

## Pricing & Billing

External storage with Skymage is billed based on:

- **Bandwidth Usage**: Data transfer for serving transformed images
- **Storage Costs**: Charged directly by your storage provider (not Skymage)

### Cost Optimization Tips

- **Choose Efficient Regions**: Select regions with lower storage provider costs
- **Optimize Image Sizes**: Use appropriate dimensions to reduce bandwidth
- **Leverage Caching**: Benefit from Skymage's global caching to reduce origin requests
- **Monitor Usage**: Track bandwidth patterns to optimize costs

For detailed pricing information, visit our [pricing page](https://skymage.dev/pricing).

## Common Issues Quick Reference

| Issue | Likely Cause | Quick Fix |
|-------|--------------|-----------|
| Connection Failed | Wrong credentials/region | Verify credentials and region |
| File Not Found (404) | Incorrect path/missing file | Check file path and existence |
| Access Denied (403) | Permission issues | Review IAM policies/permissions |
| Region Mismatch (301) | Wrong region configured | Update region to match bucket |

## Next Steps

Ready to get started with external storage? Choose your provider:

### **[Bunny Storage →](/bunny-storage.md)**
High-performance edge storage with 9 global regions. Perfect for:
- Global content delivery
- High-traffic websites
- Cost-effective storage with global edge network

### **[Amazon S3 Storage →](/s3-storage.md)**
Industry-standard object storage with enterprise features. Ideal for:
- Enterprise applications
- Existing AWS infrastructure
- Advanced security requirements

### **S3-Compatible Services**
Alternative providers with S3-compatible APIs:
- **DigitalOcean Spaces**: Developer-friendly with predictable pricing
- **MinIO**: Self-hosted solution for full control
- **Wasabi**: Hot cloud storage with simple pricing

## Getting Help

For technical support:
- **Email**: support@skymage.dev
- **Documentation**: Provider-specific setup guides
- **Status Page**: Real-time service status updates
- **Dashboard Logs**: Detailed error logs in your Skymage dashboard

### Quick Start Links

- **[Examples & Use Cases](/examples.md)**: See real-world implementation examples
- **[Image Transformations](/resizing.md)**: Learn about transformation options
- **[Advanced Features](/filters.md)**: Explore filters and effects
