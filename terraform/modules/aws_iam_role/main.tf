
resource "aws_iam_role" "aws_iam_role" {
	name = var.name
	description = var.description
	assume_role_policy = jsonencode({
		"Version": "2012-10-17",
		"Statement": [{
			"Action": "sts:AssumeRole",
			"Principal": {
				"AWS": var.assumeBy
			},
			"Effect": "Allow",
		}]
	})
}

resource "aws_iam_policy" "aws_iam_policy" {
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

resource "aws_iam_role_policy_attachment" "aws_iam_role_policy_attachment" {
	role = aws_iam_role.aws_iam_role.name
	policy_arn = aws_iam_policy.aws_iam_policy.arn
}