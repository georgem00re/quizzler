
resource "aws_ecs_service" "this" {
	name = var.name
	cluster = var.cluster_id
	task_definition = var.task_definition_arn
	desired_count = var.desired_count
	launch_type = "FARGATE"

	network_configuration {
		subnets = ["${aws_default_subnet.eu-west-2a.id}", "${aws_default_subnet.eu-west-2b.id}", "${aws_default_subnet.eu-west-2c.id}"]
		assign_public_ip = true
	}
}

resource "aws_default_subnet" "eu-west-2a" {
  availability_zone = "eu-west-2a"
}

resource "aws_default_subnet" "eu-west-2b" {
  availability_zone = "eu-west-2b"
}

resource "aws_default_subnet" "eu-west-2c" {
  availability_zone = "eu-west-2c"
}