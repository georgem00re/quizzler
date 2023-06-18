
output "arn" {
	value = aws_iam_user.this.arn
}

output "secret_access_key" {
	value = aws_iam_access_key.this.secret
}

output "access_key_id" {
	value = aws_iam_access_key.this.id
}