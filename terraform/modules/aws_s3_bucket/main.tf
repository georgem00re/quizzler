
resource "aws_s3_bucket" "aws_s3_bucket" {
    bucket_prefix = var.bucket_prefix
}

resource "aws_s3_bucket_ownership_controls" "aws_s3_bucket_ownership_controls" {
    bucket = aws_s3_bucket.aws_s3_bucket.id
    rule {
        object_ownership = "ObjectWriter"
    }
}

resource "aws_s3_bucket_acl" "aws_s3_bucket_acl" {
    bucket = aws_s3_bucket.aws_s3_bucket.id
    acl = "public-read"
}

resource "aws_s3_bucket_website_configuration" "aws_s3_bucket_website_configuration" {
    bucket = aws_s3_bucket.aws_s3_bucket.id

    index_document {
        suffix = "index.html"
    }
}

resource "aws_s3_bucket_public_access_block" "aws_s3_bucket_public_access_block" {
    bucket = aws_s3_bucket.aws_s3_bucket.id
    block_public_acls = false
    block_public_policy = false
    ignore_public_acls = false
    restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "aws_s3_bucket_policy" {
    bucket = aws_s3_bucket.aws_s3_bucket.id
    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "${aws_s3_bucket.aws_s3_bucket.arn}/*"
        }]
    })
}