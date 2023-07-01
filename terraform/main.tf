
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
	name = "quizzler_developer"
	description = "IAM role for managing Quizzler infrastructure"
	assume_by = module.iam_user.arn
	depends_on = [module.iam_user]
}

module "s3_bucket" {
	source = "./modules/aws_s3_bucket"
	name = "quizzler-react-app"
    can_put_and_delete = module.iam_role.arn
    depends_on = [module.iam_role]
}

module "ecr_repository" {
	source = "./modules/aws_ecr_repository"
	name = "quizzler"
	can_push = module.iam_role.arn
	depends_on = [module.iam_role]
}
