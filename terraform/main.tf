
provider "aws" {
	region = var.aws_region
	profile = var.aws_profile
}

resource "aws_s3_bucket" "s3_bucket" {
    bucket_prefix = var.bucket_prefix
}

resource "aws_s3_bucket_acl" "s3_bucket_acl" {
    bucket = aws_s3_bucket.s3_bucket.id
    acl = "public-read"
}

resource "aws_s3_bucket_website_configuration" "s3_bucket_website_configuration" {
    bucket = aws_s3_bucket.s3_bucket.id

    index_document {
        suffix = "index.html"
    }
}

resource "aws_s3_bucket_policy" "s3_bucket_policy" {
    bucket = aws_s3_bucket.s3_bucket.id
    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "${aws_s3_bucket.s3_bucket.arn}/*"
        }]
    })
}