
provider "aws" {
	region = var.aws_region
	profile = var.aws_profile
}

resource "aws_s3_bucket" "my-s3-bucket" {
  bucket_prefix = var.bucket_prefix
  acl = var.access_control_list
}