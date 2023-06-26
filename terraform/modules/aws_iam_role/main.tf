
resource "aws_iam_role" "this" {
	name = var.name
	description = var.description
	assume_role_policy = jsonencode({
		"Version": "2012-10-17",
		"Statement": [{
			"Action": [
				"sts:AssumeRole",
				"sts:TagSession"
			],
			"Principal": {
				"AWS": var.assume_by
			},
			"Effect": "Allow",
		}]
	})
}