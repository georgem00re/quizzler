
provider "aws" {
	region = var.aws_region
	access_key = "my_access_key"
	secret_key = "my_secret_key"
}

resource "aws_s3_bucket" "my-s3-bucket" {
  bucket_prefix = var.bucket_prefix
  acl = var.access_control_list
}