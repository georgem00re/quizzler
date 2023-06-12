variable "aws_region" {
	description = "The AWS region within which resources will be provisioned"
	default = "eu-west-2"
}

variable "aws_profile" {
	type = string
	description = "The AWS profile with which resources will be provisioned"
	default = "default"
}
