
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "iam_user" {
	source = "./modules/aws_iam_user"
	name = "quizzler_github_actions"
	depends_on = []
}

module "iam_role" {
	source = "./modules/aws_iam_role"
	name = "update_s3_bucket"
	description = "IAM role for pushing to and deleting from S3 bucket"
	assume_by = module.iam_user.arn
	depends_on = [module.iam_user]
}

module "s3_bucket" {
	source = "./modules/aws_s3_bucket"
	name = "quizzler-react-app"
    can_put_and_delete = module.iam_role.arn
    depends_on = [module.iam_role]
}

output "s3_bucket_arn" {
    value = aws_s3_bucket.s3_bucket.arn
}
