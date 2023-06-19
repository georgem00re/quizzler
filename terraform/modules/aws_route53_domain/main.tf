
resource "aws_route53_zone" "this" {
	name = var.domain_name # example.com
}

resource "aws_route53_record" "this" {
	allow_overwrite = true
	name = var.domain_name
	ttl = var.time_to_live
	type = "NS"
	zone_id = aws_route53_zone.this.zone_id
	records = aws_route53_zone.this.name_servers
}
