# Amazon S3 Storage

Amazon S3 is the most widely used object storage service, offering industry-leading scalability, data availability, security, and performance. It's the gold standard for cloud storage with robust features and global availability.

## Why Choose Amazon S3?

- **Industry Standard**: Most widely adopted cloud storage solution
- **Global Infrastructure**: Available in 30+ regions worldwide
- **Enterprise Security**: Advanced security features and compliance certifications
- **Scalability**: Virtually unlimited storage capacity
- **Reliability**: 99.999999999% (11 9's) durability
- **Cost Effective**: Pay only for what you use with multiple storage classes

## Setup Requirements

Before configuring Amazon S3, ensure you have:

1. **AWS Account**: Active AWS account with billing configured
2. **S3 Bucket**: Created S3 bucket in your preferred region
3. **IAM User**: IAM user with appropriate S3 permissions
4. **Access Keys**: Access Key ID and Secret Access Key
5. **Content Uploaded**: Images uploaded to your S3 bucket

## Configuration Steps

### 1. Create S3 Bucket

1. Log in to AWS Console
2. Navigate to S3 service
3. Click "Create bucket"
4. Choose a unique bucket name
5. Select your preferred region
6. Configure public access settings (allow public read)

### 2. Create IAM User

1. Navigate to IAM service
2. Create new user with programmatic access
3. Attach S3 read permissions policy
4. Save Access Key ID and Secret Access Key

### 3. Configure in Skymage

1. **Access Key ID**: Your AWS IAM access key ID
2. **Secret Access Key**: Your AWS IAM secret access key
3. **Bucket Name**: The name of your S3 bucket
4. **Region**: The AWS region where your bucket is located

### 4. Test Connection

1. Click "Test Connection" to verify setup
2. Upload a test image to verify functionality

## Available AWS Regions

Choose the region closest to your users for optimal performance:

| Region Code | Location | Best For |
|-------------|----------|----------|
| `us-east-1` | N. Virginia | Eastern US, Global (default) |
| `us-east-2` | Ohio | Central US |
| `us-west-1` | N. California | Western US |
| `us-west-2` | Oregon | Western US, Pacific |
| `ca-central-1` | Canada Central | Canada |
| `eu-west-1` | Ireland | Europe, UK |
| `eu-west-2` | London | United Kingdom |
| `eu-west-3` | Paris | France |
| `eu-central-1` | Frankfurt | Germany, Central Europe |
| `eu-north-1` | Stockholm | Nordic countries |
| `eu-south-1` | Milan | Southern Europe |
| `ap-northeast-1` | Tokyo | Japan |
| `ap-northeast-2` | Seoul | South Korea |
| `ap-northeast-3` | Osaka | Japan (additional) |
| `ap-southeast-1` | Singapore | Southeast Asia |
| `ap-southeast-2` | Sydney | Australia, New Zealand |
| `ap-south-1` | Mumbai | India |
| `ap-east-1` | Hong Kong | Hong Kong |
| `sa-east-1` | São Paulo | South America |
| `me-south-1` | Bahrain | Middle East |
| `af-south-1` | Cape Town | Africa |

## Configuration Example

```json
{
  "access_key_id": "AKIAIOSFODNN7EXAMPLE",
  "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "bucket": "my-image-bucket",
  "region": "us-east-1"
}
```

## URL Examples

```bash
# High-resolution gallery image
https://demo.skymage.net/v1/ex/s3-images/gallery/photo.jpg?w=1200&h=800&fit=cover&q=85

# Product catalog thumbnail
https://demo.skymage.net/v1/ex/s3-products/catalog/item-123.jpg?w=300&h=300&fit=contain&bg=white

# Blog featured image with filter
https://demo.skymage.net/v1/ex/s3-blog/articles/featured.jpg?w=800&h=450&fit=cover&filt=vintage

# User profile picture
https://demo.skymage.net/v1/ex/s3-users/avatars/user-456.jpg?w=128&h=128&fit=crop&p=face

# Responsive hero image
https://demo.skymage.net/v1/ex/s3-assets/hero/banner.jpg?w=1920&h=1080&fit=cover&q=90
```

## Security Configuration

### Recommended IAM Policy

Create an IAM policy with minimal required permissions:

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

### Bucket Policy for Public Read

Configure your bucket for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## S3-Compatible Services

Skymage also works with S3-compatible storage services:

### DigitalOcean Spaces

```json
{
  "access_key_id": "your-spaces-access-key",
  "secret_access_key": "your-spaces-secret-key",
  "bucket": "my-space-name",
  "region": "nyc3",
  "endpoint": "https://nyc3.digitaloceanspaces.com"
}
```

**Available Regions**: `nyc3`, `ams3`, `sgp1`, `fra1`, `sfo3`

### MinIO

```json
{
  "access_key_id": "minioadmin",
  "secret_access_key": "minioadmin",
  "bucket": "my-bucket",
  "region": "us-east-1",
  "endpoint": "https://minio.example.com"
}
```

### Other S3-Compatible Providers

- **Wasabi**: `https://s3.wasabisys.com`
- **Backblaze B2**: `https://s3.us-west-002.backblazeb2.com`
- **Linode**: `https://us-east-1.linodeobjects.com`

## Best Practices

### Security

- **Use IAM Roles**: When possible, use IAM roles instead of access keys
- **Least Privilege**: Grant only the minimum required permissions
- **Rotate Keys**: Regularly rotate access keys for security
- **Monitor Access**: Use AWS CloudTrail to monitor bucket access

### Performance

- **Choose Nearby Regions**: Select regions close to your users
- **Optimize File Organization**: Use logical folder structures
- **Monitor Costs**: Use AWS Cost Explorer to track S3 usage
- **Use Storage Classes**: Optimize costs with appropriate storage classes

### Cost Optimization

- **Lifecycle Policies**: Automatically transition old files to cheaper storage classes
- **Intelligent Tiering**: Let AWS automatically optimize storage costs
- **Monitor Usage**: Track bandwidth and storage usage patterns
- **Delete Unused Files**: Regularly clean up unnecessary files

## Real-World Use Cases

### Enterprise Application

```html
<!-- Document management system -->
<img src="https://demo.skymage.net/v1/ex/enterprise-s3/documents/report-cover.jpg?w=800&h=600&fit=cover" 
     alt="Report cover">

<!-- User profile system -->
<img src="https://demo.skymage.net/v1/ex/enterprise-s3/profiles/employee-123.jpg?w=200&h=200&fit=crop&p=face" 
     alt="Employee photo">
```

### Media Platform

```javascript
// Generate multiple sizes for different devices
const generateResponsiveImages = (imagePath) => {
  const baseUrl = `https://demo.skymage.net/v1/ex/media-s3/${imagePath}`;
  
  return {
    mobile: `${baseUrl}?w=400&h=300&fit=cover&q=80`,
    tablet: `${baseUrl}?w=800&h=600&fit=cover&q=85`,
    desktop: `${baseUrl}?w=1200&h=900&fit=cover&q=90`,
    retina: `${baseUrl}?w=2400&h=1800&fit=cover&q=85`
  };
};
```

## Troubleshooting

### Connection Failed (400 Error)

**Most Common Cause**: Region mismatch

**Solutions**:
- Verify region matches your bucket's actual region
- Check bucket properties in AWS Console
- Update region configuration in Skymage

### Access Denied (403 Error)

**Symptoms**: Permission denied errors

**Solutions**:
- Check IAM policy permissions
- Verify bucket policy allows public read
- Ensure bucket is not blocked by account-level settings
- Confirm access keys are correct

### File Not Found (404 Error)

**Symptoms**: Image returns 404 error

**Solutions**:
- Verify file exists in the bucket
- Check file path and folder structure
- Ensure file is not in a different region
- Confirm bucket name is correct

### Region Mismatch (301 Error)

**Symptoms**: Redirect responses from S3

**Solutions**:
- Check bucket's actual region in AWS Console
- Update region configuration to match
- Verify bucket exists and is accessible

## Getting Help

### AWS Resources

- **AWS Documentation**: [docs.aws.amazon.com/s3](https://docs.aws.amazon.com/s3/)
- **AWS Support**: Available through AWS Console
- **AWS Status**: [status.aws.amazon.com](https://status.aws.amazon.com/)

### Skymage Support

- **Email**: support@skymage.dev
- **Dashboard Logs**: Check error logs in your Skymage dashboard
- **Documentation**: This guide and related resources

## Next Steps

1. **[Create your S3 bucket](https://console.aws.amazon.com/s3/)**
2. **[Set up IAM permissions](https://console.aws.amazon.com/iam/)**
3. **[Configure in Skymage dashboard](https://skymage.dev/dashboard)**
4. **[Test with example transformations](/examples.md)**
5. **[Optimize for your use case](#best-practices)**

### Related Documentation

- **[External Storage Overview](/external-storage-overview.md)**: Compare storage providers
- **[BunnyCDN Storage](/bunny-storage.md)**: Alternative storage option
- **[Image Transformations](/resizing.md)**: Learn about transformation parameters
- **[Examples & Use Cases](/examples.md)**: See real-world implementations
