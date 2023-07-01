
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

module "ecs_task_definition" {
	source = "./modules/aws_ecs_task_definition"
	name = "quizzler_task_definition"
	host_port = 3000
	container_port = 3000
	memory = 512
	cpu = 10
	image_url = "864705064109.dkr.ecr.eu-west-2.amazonaws.com/quizzler:latest"
}

module "ecs_service" {
	source = "./modules/aws_ecs_service"
	name = "quizzler_service"
	cluster_id = module.ecs_cluster.id
	task_definition_arn = module.ecs_task_definition.arn
	desired_count = 1
	depends_on = [module.ecs_cluster, module.ecs_task_definition]
}
