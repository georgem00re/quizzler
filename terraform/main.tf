
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

# module "iam_user" {
# 	source = "./modules/aws_iam_user"
# 	name = "quizzler_github_actions"
# }

# module "iam_role" {
# 	source = "./modules/aws_iam_role"
# 	name = "update_s3_bucket"
# 	description = "Update S3 bucket"
# 	assumeBy = module.iam_user.arn
# 	action = ["s3:PutObject", "s3:DeleteObject"]
# 	resource = [module.s3_bucket.arn]
# }

module "s3_bucket" {
	source = "./modules/aws_s3_bucket"
	bucket_prefix = "quizzler-react-app-"
}
