# External Storage

Skymage supports external storage providers, allowing you to serve and transform images directly from your cloud storage without uploading them to Skymage's servers. This feature enables you to maintain control over your images while leveraging Skymage's powerful transformation capabilities.

## Supported Storage Providers

Skymage currently supports the following external storage providers:

- **BunnyCDN Edge Storage** - High-performance edge storage with global distribution
- **Amazon S3** - Industry-standard object storage with worldwide availability
- **S3-Compatible Services** - Including DigitalOcean Spaces, MinIO, and other S3-compatible providers

## How External Storage Works

When you configure external storage with Skymage:

1. **Direct Access**: Skymage fetches images directly from your storage provider
2. **On-the-Fly Processing**: Images are transformed in real-time as requested
3. **CDN Distribution**: Processed images are cached and distributed globally
4. **Cost Efficiency**: You only pay for storage with your provider and transformations with Skymage

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

## Setting Up External Storage

### Prerequisites

Before setting up external storage, you'll need:

1. **Skymage Account**: An active Skymage account with a configured pull zone
2. **Storage Provider Account**: An account with your chosen storage provider
3. **API Credentials**: Access keys or API tokens for your storage provider
4. **Storage Bucket/Zone**: A configured storage bucket or zone with your images

### Configuration Steps

1. **Log in to Skymage Dashboard**: Access your Skymage account dashboard
2. **Navigate to External Storage**: Go to the External Storage section
3. **Add New Storage**: Click "Add External Storage" and choose your provider
4. **Configure Credentials**: Enter your storage provider credentials and settings
5. **Test Connection**: Verify the connection works correctly
6. **Get Storage Handle**: Note your storage handle for use in URLs

## BunnyCDN Edge Storage

BunnyCDN Edge Storage provides high-performance, globally distributed storage with excellent performance characteristics.

### Configuration

To configure BunnyCDN Edge Storage:

1. **Storage Zone Name**: Your BunnyCDN storage zone name
2. **API Key**: Your storage zone password (acts as API key)
3. **Region**: Choose from available regions (Frankfurt, London, New York, etc.)

### Supported Regions

| Region Code | Location | Performance |
|-------------|----------|-------------|
| `de` | Frankfurt, Germany | Excellent for Europe |
| `uk` | London, United Kingdom | Great for UK/Europe |
| `ny` | New York, United States | Optimal for East Coast US |
| `la` | Los Angeles, United States | Best for West Coast US |
| `sg` | Singapore | Ideal for Asia-Pacific |
| `se` | Stockholm, Sweden | Good for Nordic countries |
| `br` | São Paulo, Brazil | Perfect for South America |
| `jh` | Johannesburg, South Africa | Optimal for Africa |
| `syd` | Sydney, Australia | Best for Australia/Oceania |

### Example Configuration

```json
{
  "storage_zone": "my-storage-zone",
  "api_key": "your-bunny-storage-password",
  "region": "de"
}
```

### URL Example

```
https://demo.skymage.net/v1/ex/bunny-storage/images/product.jpg?w=400&h=400&fit=contain
```

## Amazon S3

Amazon S3 is the most widely used object storage service, offering industry-leading scalability, data availability, security, and performance.

### Configuration

To configure Amazon S3:

1. **Access Key ID**: Your AWS IAM access key ID
2. **Secret Access Key**: Your AWS IAM secret access key
3. **Bucket Name**: The name of your S3 bucket
4. **Region**: The AWS region where your bucket is located
5. **Custom Endpoint** (optional): For S3-compatible services

### AWS Regions

Skymage supports all AWS regions. Common regions include:

| Region Code | Location | Description |
|-------------|----------|-------------|
| `us-east-1` | N. Virginia | US East (default) |
| `us-west-2` | Oregon | US West |
| `eu-west-1` | Ireland | Europe |
| `ap-southeast-1` | Singapore | Asia Pacific |
| `ap-northeast-1` | Tokyo | Asia Pacific |

### Example Configuration

```json
{
  "access_key_id": "AKIAIOSFODNN7EXAMPLE",
  "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "bucket": "my-image-bucket",
  "region": "us-east-1"
}
```

### URL Example

```
https://demo.skymage.net/v1/ex/s3-images/gallery/photo.jpg?w=1200&h=800&fit=cover&q=85
```

## S3-Compatible Services

Skymage works with any S3-compatible storage service, including DigitalOcean Spaces, MinIO, Wasabi, and others.

### DigitalOcean Spaces

DigitalOcean Spaces is a simple, scalable object storage service with S3-compatible API.

#### Configuration

```json
{
  "access_key_id": "your-spaces-access-key",
  "secret_access_key": "your-spaces-secret-key",
  "bucket": "my-space-name",
  "region": "nyc3",
  "endpoint": "https://nyc3.digitaloceanspaces.com"
}
```

#### Available Regions

- `nyc3` - New York 3
- `ams3` - Amsterdam 3
- `sgp1` - Singapore 1
- `fra1` - Frankfurt 1
- `sfo3` - San Francisco 3

### MinIO

MinIO is a high-performance, S3-compatible object storage system.

#### Configuration

```json
{
  "access_key_id": "minioadmin",
  "secret_access_key": "minioadmin",
  "bucket": "my-bucket",
  "region": "us-east-1",
  "endpoint": "https://minio.example.com"
}
```

## Security Considerations

### Access Control

- **Bucket Permissions**: Ensure your storage bucket allows read access for Skymage
- **IAM Policies**: Use minimal required permissions for S3 access
- **API Keys**: Store API keys securely and rotate them regularly

### Recommended S3 IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

## Performance Optimization

### Best Practices

1. **Choose Nearby Regions**: Select storage regions close to your users
2. **Optimize File Structure**: Organize files in logical folder structures
3. **Use Appropriate Formats**: Store images in efficient formats (JPEG, PNG, WebP)
4. **Enable Compression**: Use Skymage's quality parameters to optimize file sizes

### Caching

Skymage automatically caches transformed images to improve performance:

- **Edge Caching**: Images are cached at edge locations worldwide
- **Origin Caching**: Frequently accessed images are cached longer
- **Smart Invalidation**: Cache is automatically updated when source images change

## Troubleshooting

### Common Issues

#### Connection Failed

**Problem**: Cannot connect to storage provider

**Solutions**:
- Verify credentials are correct
- Check bucket/storage zone exists
- Ensure proper permissions are set
- Verify region is correct

#### File Not Found (404)

**Problem**: Image returns 404 error

**Solutions**:
- Verify file path is correct
- Check file exists in storage
- Ensure proper read permissions
- Verify storage handle in URL

#### Access Denied (403)

**Problem**: Permission denied errors

**Solutions**:
- Check IAM policies for S3
- Verify API key permissions for BunnyCDN
- Ensure bucket is not private
- Review storage provider access controls

### Getting Help

If you encounter issues with external storage:

1. **Check Status Page**: Visit our status page for service updates
2. **Review Logs**: Check your Skymage dashboard for error logs
3. **Contact Support**: Reach out to our support team with specific error details
4. **Documentation**: Review provider-specific documentation for additional help

## Pricing

External storage usage is billed based on:

- **Bandwidth**: Data transfer for serving images
- **Storage**: Charged by your storage provider (not Skymage)

For detailed pricing information, visit our [pricing page](https://skymage.dev/pricing).

## Next Steps

- [Set up your first external storage](/external-storage.md#setting-up-external-storage)
- [Learn about image transformations](/resizing.md)
- [Explore advanced features](/filters.md)
- [Check out examples](/examples.md)
