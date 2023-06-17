
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "iam_user" {
	source = "./modules/iam_user"
	name = "quizzler_github_actions"
	description = "GitHub Actions identity"
}

module "iam_role" {
	source = "./modules/iam_role"
	name = "update_s3_bucket"
	description = "Update S3 bucket"
	assumeBy = module.iam_user.arn
	action = ["s3:PutObject", "s3:DeleteObject"]
	resource = [module.s3_bucket.arn]
}

module "s3_bucket" {
	source = "./modules/s3_bucket"
	bucket_prefix = "quizzler-react-app-"
}
