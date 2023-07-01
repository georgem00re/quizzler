
resource "aws_ecs_task_definition" "this" {
	family = var.name
	container_definitions = jsonencode([{
		name = "first"
		image = var.image_url
		essential = true
		portMappings = [{
			containerPort = var.container_port
			hostPort = var.host_port
		}]
		memory = var.memory
		cpu = var.cpu
	}])
}
