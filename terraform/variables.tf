variable "aws_region" {
	description = "The AWS region within which resources will be provisioned"
	default = "eu-west-2"
}

variable "bucket_prefix" {
	type = string
	description = "Create a unique bucket name beginning with the specified prefix"
	default = "quizzler-react-app"
}

variable "aws_profile" {
	type = string
	description = "The AWS profile with which resources will be provisioned"
	default = "default"
}

variable "domain_name" {
	type = string
	description = "The domain name of the Quizzler React application"
	default = "quizzler.io"
}

variable "time_to_live" {
	type = number
	description = "The amount of time, in seconds, that you want DNS recursive resolvers to cache information about this record"
	default = 300
}
