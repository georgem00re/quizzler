
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "s3_bucket" {
	source = "./modules/s3_bucket"
	bucket_prefix = "quizzler-react-app-"
}