
resource "aws_iam_role" "quizzler_github_actions" {
	name = "quizzler_github_actions"
	description = "IAM role for pushing and deleting objects from S3 bucket"
	assume_role_policy = jsonencode({
		"Version": "2012-10-17",
		"Statement": [{
			"Action": "sts:AssumeRole",
			"Principal": {
				"Service": "ec2.amazonaws.com"
			},
			"Effect": "Allow",
			"Sid": ""
		}]
	})
}

resource "aws_iam_policy" "push_s3_bucket" {
	name = "push_s3_bucket"
	description = "Policy attached to IAM role for pushing and deleting objects from S3 bucket"
	policy = jsonencode({
		"Version": "2012-10-17",
		"Statement": [{
			"Effect": "Allow",
			"Action": ["s3:PutObject", "s3:DeleteObject"],
			"Resource": var.s3_bucket_arn
		}]
	})
}

resource "aws_iam_role_policy_attachment" "quizzler_github_actions_policy_attachment" {
	role = aws_iam_role.quizzler_github_actions.name
	policy_arn = aws_iam_policy.push_s3_bucket.arn
}