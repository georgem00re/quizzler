
resource "aws_ecr_repository" "this" {
	name = var.name
}

resource "aws_ecr_repository_policy" "this" {
    repository = aws_ecr_repository.this.name
    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Principal": {
            	"AWS": var.can_push
            },
            "Action": ["ecr:PutImage"],
            "Resource": "${aws_ecr_repository.this.arn}/*"
        }]
    })
}