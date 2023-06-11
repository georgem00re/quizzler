
resource "aws_iam_role" "quizzler_developer" {
	name = "quizzler_developer"
}

resource "aws_iam_policy" "quizzler_developer_policy" {
	name = "quizzler_developer_policy"
	description = "Push to S3 bucket"
	policy = jsonencode({
		"Version": "",
		"Statement": [{
			"Effect": "",
			"Action": ["s3:PutObject", "s3:DeleteObject"],
			"Resource": "${aws_s3_bucket.s3_bucket.arn}"
		}]
	})
}

resource "aws_iam_role" "quizzler_administrator_policy" {
	name = "quizzler_administrator_policy"
	description = "Manage S3 bucket"
	policy = jsonencode({
		"Version": "",
		"Statement": [{
			"Effect": "",
			"Action": [
				"s3:PutObject",
				"s3:GetObject",
				"s3:DeleteObject"
			],
			"Resource": "${aws_s3_bucket.s3_bucket.arn}"
		}]
	})
}