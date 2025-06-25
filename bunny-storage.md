# Bunny Storage

Bunny Storage provides high-performance, globally distributed storage with excellent performance characteristics and competitive pricing.

## Why Choose Bunny Storage?

- **Global Edge Network**: 9 strategically located regions worldwide
- **High Performance**: Optimized for fast content delivery
- **Cost Effective**: Competitive pricing with no hidden fees
- **Easy Integration**: Simple API and straightforward setup
- **Reliable**: 99.9% uptime SLA with redundant infrastructure

## Setup Requirements

Before configuring Bunny Storage, ensure you have:

1. **Bunny Account**: Active account with billing configured
2. **Storage Zone**: Created storage zone in your preferred region
3. **Storage Password**: Your storage zone password (acts as API key)
4. **Content Uploaded**: Images uploaded to your storage zone

## Configuration Steps

### 1. Create Storage Zone

1. Log in to your Bunny dashboard
2. Navigate to "Storage" → "Storage Zones"
3. Click "Add Storage Zone"
4. Choose your preferred region
5. Note your storage zone name and password

### 2. Configure in Skymage

1. **Storage Zone Name**: Your Bunny storage zone name
2. **API Key**: Your storage zone password
3. **Region**: Select the region where you created your storage zone

### 3. Test Connection

1. Click "Test Connection" to verify setup
2. Upload a test image to verify functionality

## Available Regions

Choose the region closest to your users for optimal performance:

| Region Code | Location | Best For |
|-------------|----------|----------|
| `de` | Frankfurt, Germany | Europe, Middle East, Africa |
| `uk` | London, United Kingdom | United Kingdom, Ireland |
| `ny` | New York, United States | Eastern North America |
| `la` | Los Angeles, United States | Western North America |
| `sg` | Singapore | Asia-Pacific, Southeast Asia |
| `se` | Stockholm, Sweden | Nordic countries, Northern Europe |
| `br` | São Paulo, Brazil | South America |
| `jh` | Johannesburg, South Africa | Africa |
| `syd` | Sydney, Australia | Australia, New Zealand, Oceania |

## Configuration Example

```json
{
  "storage_zone": "my-images-storage",
  "api_key": "your-storage-zone-password",
  "region": "de"
}
```

## URL Examples

```bash
# Product thumbnail
https://demo.skymage.net/v1/ex/bunny-storage/products/item-001.jpg?w=300&h=300&fit=contain&bg=white

# Blog featured image
https://demo.skymage.net/v1/ex/bunny-storage/blog/article.jpg?w=1200&h=630&fit=cover

# User avatar
https://demo.skymage.net/v1/ex/bunny-storage/avatars/user-123.jpg?w=64&h=64&fit=crop&p=face

# Gallery image with filter
https://demo.skymage.net/v1/ex/bunny-storage/gallery/photo.jpg?w=800&h=600&fit=cover&filt=vintage

# Responsive product image
https://demo.skymage.net/v1/ex/bunny-storage/catalog/item.jpg?w=400&h=400&fit=contain&q=85
```

## Best Practices

### File Organization

- **Use Logical Folders**: Organize with structures like `/products/`, `/blog/`, `/avatars/`
- **Descriptive Names**: Use clear, descriptive file names for easier management
- **Consistent Naming**: Establish naming conventions for your team

### Performance Optimization

- **Choose Nearby Region**: Select the region closest to your primary audience
- **Upload High Quality**: Store original high-quality images; Skymage optimizes delivery
- **Monitor Usage**: Track bandwidth and storage usage patterns
- **Leverage Edge Network**: Take advantage of Bunny's global edge network

### Security

- **Secure Passwords**: Use strong storage zone passwords
- **Access Control**: Configure appropriate access permissions
- **Regular Rotation**: Periodically rotate storage zone passwords

## Real-World Use Cases

### E-commerce Platform

```html
<!-- Product listing -->
<img src="https://demo.skymage.net/v1/ex/bunny-store/products/item-123.jpg?w=300&h=300&fit=contain&bg=white"
     alt="Product thumbnail">

<!-- Product detail -->
<img src="https://demo.skymage.net/v1/ex/bunny-store/products/item-123.jpg?w=800&h=600&fit=cover"
     alt="Product detail">
```

### Content Management System

```html
<!-- Blog featured image -->
<img src="https://demo.skymage.net/v1/ex/bunny-cms/blog/article-456.jpg?w=1200&h=630&fit=cover&p=top"
     alt="Article featured image">

<!-- Author avatar -->
<img src="https://demo.skymage.net/v1/ex/bunny-cms/avatars/author-789.jpg?w=64&h=64&fit=crop&p=face"
     alt="Author avatar">
```

### Social Media Application

```javascript
// Generate different sizes for social sharing
const generateSocialImages = (imagePath) => {
  const baseUrl = `https://demo.skymage.net/v1/ex/bunny-social/${imagePath}`;

  return {
    facebook: `${baseUrl}?w=1200&h=630&fit=cover`,
    twitter: `${baseUrl}?w=1200&h=600&fit=cover`,
    instagram: `${baseUrl}?w=1080&h=1080&fit=crop&p=center`,
    linkedin: `${baseUrl}?w=1200&h=627&fit=cover`
  };
};
```

## Troubleshooting

### Connection Failed

**Symptoms**: Cannot connect to BunnyCDN storage

**Solutions**:
- Verify storage zone name is correct
- Check storage zone password
- Ensure storage zone is active and not suspended
- Verify region matches your storage zone

### File Not Found (404)

**Symptoms**: Image returns 404 error

**Solutions**:
- Verify file exists in your storage zone
- Check file path and folder structure
- Ensure file permissions allow public access
- Verify storage handle in URL matches configuration

### Slow Performance

**Symptoms**: Images load slowly

**Solutions**:
- Choose region closer to your users
- Optimize image file sizes before upload
- Use appropriate transformation parameters
- Check Bunny status page for service issues

### Access Denied (403)

**Symptoms**: Permission denied errors

**Solutions**:
- Verify storage zone password is correct
- Check storage zone access permissions
- Ensure storage zone allows public read access
- Review Bunny account status

## Getting Help

### Bunny Resources

- **Bunny Documentation**: [bunny.net/docs](https://bunny.net/docs)
- **Bunny Support**: Available through their dashboard
- **Status Page**: Check service status and incidents

### Skymage Support

- **Email**: support@skymage.dev
- **Dashboard Logs**: Check error logs in your Skymage dashboard
- **Documentation**: This guide and related resources

## Next Steps

1. **[Set up your Bunny storage zone](https://panel.bunny.net/storage)**
2. **[Configure in Skymage dashboard](https://skymage.dev/dashboard)**
3. **[Test with example transformations](/examples.md)**
4. **[Explore image transformation options](/resizing.md)**
5. **[Optimize for your use case](#best-practices)**

### Related Documentation

- **[External Storage Overview](/external-storage-overview.md)**: Compare storage providers
- **[Amazon S3 Storage](/s3-storage.md)**: Alternative storage option
- **[Image Transformations](/resizing.md)**: Learn about transformation parameters
- **[Examples & Use Cases](/examples.md)**: See real-world implementations
