
resource "aws_ecs_task_definition" "this" {
	family = var.name
	requires_compatibilities = ["FARGATE"]
	network_mode = "awsvpc"
	memory = var.memory
	cpu = var.cpu
	execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
	container_definitions = jsonencode([{
		name = "first"
		image = var.image_url
		essential = true
		portMappings = [{
			containerPort = var.container_port
			hostPort = var.host_port
		}]
	}])
}

resource "aws_iam_role" "ecs_task_execution_role" {
	name = "ecs_task_execution_role"
	assume_role_policy = jsonencode({
		"Version": "2012-10-17"
		"Statement": [{
			"Effect": "Allow",
			"Principal": {
				"Service": "ecs-tasks.amazonaws.com"
			},
			"Action": "sts:AssumeRole"
		}]
	})
}

resource "aws_iam_role_policy_attachment" "this" {
	role = aws_iam_role.ecs_task_execution_role.name
	policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}