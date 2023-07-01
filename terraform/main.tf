
provider "aws" {
	region = "eu-west-2"
	profile = "root"
}

module "iam_user" {
	source = "./modules/aws_iam_user"
	name = "quizzler_github_actions"
	depends_on = []
}

module "update_s3_bucket_iam_role" {
	source = "./modules/aws_iam_role"
	name = "update_s3_bucket"
	description = "IAM role for pushing to S3 bucket"
	assume_by = module.iam_user.arn
	depends_on = [module.iam_user]
}

module "update_ecr_repository_iam_role" {
	source = "./modules/aws_iam_role"
	name = "update_ecr_repository"
	description = "IAM role for pushing to ECR repository"
	assume_by = module.iam_user.arn
	depends_on = [module.iam_user]
}

module "s3_bucket" {
	source = "./modules/aws_s3_bucket"
	name = "quizzler-react-app"
    can_put_and_delete = module.update_s3_bucket_iam_role.arn
    depends_on = [module.update_s3_bucket_iam_role]
}

module "ecr_repository" {
	source = "./modules/aws_ecr_repository"
	name = "quizzler"
	can_push = module.update_ecr_repository_iam_role.arn
	depends_on = [module.update_ecr_repository_iam_role]
}

module "ecs_cluster" {
	source = "./modules/aws_ecs_cluster"
	cluster_name = "quizzler_backend"
	depends_on = []
}
