
provider "aws" {
	region = var.aws_region
	profile = var.aws_profile
}

module "s3_bucket" {
	source = "./modules/s3_bucket"
	bucket_prefix = "quizzler"
}