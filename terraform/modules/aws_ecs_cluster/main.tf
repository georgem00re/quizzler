
resource "aws_ecs_cluster" "this" {
	name = var.cluster_name
}

resource "aws_ecs_task_definition" "this" {
	family = var.task_name
	container_definitions = jsonencode([{
		name = "first"
		image = var.aws_ecr_repository_url
		essential = true
		portMappings = [{
			containerPort = 5000
			hostPort = 5000
		}]
		memory = 512
		cpu = 256
	}])
}