
output "s3_bucket_id" {
	value = aws_s3_bucket.my-s3-bucket.id
}

output "s3_bucket_region" {
	value = aws_s3_bucket.my-s3-bucket.region
}

output "s3_bucket_arn" {
	value = aws_s3_bucket.my-s3-bucket.arn
}