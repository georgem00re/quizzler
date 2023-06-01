
provider "aws" {
	region = var.aws_region
	profile = var.aws_profile
}

resource "aws_s3_bucket" "my-s3-bucket" {
	bucket = var.bucket_name
  bucket_prefix = var.bucket_prefix
  acl = var.access_control_list
  policy = <<EOF
  {
  	"Id": "bucket_policy_site",
  	"Version": "2012-10-17",
  	"Statement": [
  		{
  			"Sid": "bucket_policy_site_main",
  			"Action": [
  				"s3:getObject"
  			],
  			"Effect": "Allow",
  			"Resource": "arn:aws:s3:::${var.bucket_name}/*",
  			"Principal": "*"
  		}
  	]
  }
  EOF

  website {
  	index_document = "index.html"
  	error_document = "index.html"
  }
}

output "website_domain" {
	value = "${aws_s3_bucket.react_bucket.website_domain}"
}

output "website_endpoint" {
	value = "${aws_s3_bucket.react_bucket.website_endpoint}"
}