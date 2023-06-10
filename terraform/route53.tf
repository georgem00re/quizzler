
resource "aws_route53_zone" "route53_zone" {
	name = var.domain_name
}

resource "aws_acm_certificate" "acm_certificate" {
	domain_name = var.domain_name
	subject_alternative_names = ["*.{var.domain_name}"]
	validation_method = "DNS"
	tags = {
		Name : var.domain_name
	}
	lifecycle {
		create_before_destroy = true
	}
}

resource "aws_route53_record" "route53_record" {
	zone_id = aws_route53_zone.route53_zone.zone_id
	name = aws_acm_certificate.acm_certificate.domain_validation_options.0.resource_record_name
	type = aws_acm_certificate.acm_certificate.domain_validation_options.0.resource_record_type
	records = [aws_acm_certificate.acm_certificate.domain_validation_options.0.resource_record_value]
	ttl = var.time_to_live
}

resource "aws_acm_certificate_validation" "acm_certificate_validation" {
	certificate_arn = aws_acm_certificate.acm_certificate.arn
	validation_record_fqdns = [aws_route53_record.route53_record.fqdn]
}