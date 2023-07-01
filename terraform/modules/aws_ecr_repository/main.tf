
resource "aws_ecr_repository" "this" {
	name = var.name
    image_tag_mutability = "IMMUTABLE"
    force_delete = true
}

resource "aws_ecr_repository_policy" "this" {
    repository = aws_ecr_repository.this.name
    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [{
            "Sid": "ECRRepositoryPolicy",
            "Effect": "Allow",
            "Principal": {
            	"AWS": var.can_push
            },
            "Action": ["ecr:PutImage"]
        }]
    })
}
