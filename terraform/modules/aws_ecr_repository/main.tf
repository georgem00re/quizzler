
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

resource "aws_iam_policy" "this" {
    name = "enable-ecr-get-authorization-token"
    policy = jsonencode({
        "Version": "2012-10-17"
        Statement = [{
            "Action": ["ecr:GetAuthorizationToken"],
            "Effect": "Allow",
            "Resource": "*"
        }]
    })
}

locals {
    role_name = split("/", var.can_push)[1]
}

resource "aws_iam_role_policy_attachment" "this" {
  policy_arn = aws_iam_policy.this.arn
  role = local.role_name
}