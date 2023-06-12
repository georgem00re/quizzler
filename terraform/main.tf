
provider "aws" {
	region = "eu-west-2"
	profile = "default"
}

module "s3_bucket" {
	source = "./modules/s3_bucket"
	bucket_prefix = "quizzler_react_app_"
}