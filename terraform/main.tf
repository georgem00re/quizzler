
provider "aws" {
	region = "eu-west-2"
	access_key = "my_access_key"
	secret_key = "my_secret_key"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-tf-test-bucket"

  index_document {
    suffix = "index.html"
  }

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}