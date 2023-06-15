
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "s3_bucket" {
	source = "./modules/s3_bucket"
	bucket_prefix = "quizzler-react-app-"
}

module "iam_role" {
	source = "./modules/iam_role"
	s3_bucket_arn = module.s3_bucket.arn
}