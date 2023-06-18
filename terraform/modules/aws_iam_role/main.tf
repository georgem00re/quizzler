
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
				"AWS": var.assumeBy
			},
			"Effect": "Allow",
		}]
	})
}

resource "aws_iam_policy" "this" {
	name = "${var.name}_policy"
	policy = jsonencode({
		"Version": "2012-10-17",
		"Statement": [{
			"Effect": "Allow",
			"Action": var.action,
			"Resource": var.resource
		}]
	})
}

resource "aws_iam_role_policy_attachment" "this" {
	role = aws_iam_role.this.name
	policy_arn = aws_iam_policy.this.arn
}