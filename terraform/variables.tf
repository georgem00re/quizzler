variable "aws_region" {
	description = "The AWS region within which resources will be provisioned"
	default = "eu-west-2"
}

variable "bucket_prefix" {
	type = string
	description = "Create a unique bucket name beginning with the specified prefix"
	default = "my-s3bucket-"
}

variable "access_control_list" {
	type = string
	description = "Manages access to the bucket"
	default = "private"
}