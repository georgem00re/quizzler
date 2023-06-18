
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "s3_bucket" {
	source = "./modules/aws_s3_bucket"
	name = "quizzler-react-app"
    can_put_and_delete = module.iam_role.arn
}

module "iam_user" {
	source = "./modules/aws_iam_user"
	name = "quizzler_github_actions"
}

module "iam_role" {
	source = "./modules/aws_iam_role"
	name = "update_s3_bucket"
	description = "Update S3 bucket"
	assume_by = module.iam_user.arn
}
