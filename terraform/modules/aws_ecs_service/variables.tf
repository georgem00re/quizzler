
variable "name" {
	type = string
}

variable "cluster_id" {
	type = string
}

variable "task_definition_arn" {
	type = string
}

variable "desired_count" {
	type = number
}

variable "launch_type" {
	type = string
}