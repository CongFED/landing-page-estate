"use client"

import { Card, CardContent, Avatar, Rating, Box, Typography, Container, Grid } from "@mui/material"
import { Star, TrendingUp, Shield, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Nguyễn Văn Anh",
    role: "Doanh nhân",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "Tôi đã tìm được căn penthouse mơ ước chỉ sau 2 tuần với sự hỗ trợ tận tình từ đội ngũ tư vấn. Quy trình mua bán minh bạch và nhanh chóng.",
    property: "Penthouse Vinhomes Central Park",
  },
  {
    name: "Trần Thị Bình",
    role: "Giám đốc Marketing",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "Dịch vụ chuyên nghiệp, hồ sơ pháp lý rõ ràng. Đội ngũ luật sư kiểm tra kỹ lưỡng mọi giấy tờ, tôi hoàn toàn yên tâm khi đầu tư.",
    property: "Biệt thự Sala Đại Quang Minh",
  },
  {
    name: "Lê Minh Cường",
    role: "Kỹ sư IT",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "Giá cả hợp lý, nhiều lựa chọn đa dạng. Đặc biệt là hỗ trợ vay ngân hàng rất tốt, lãi suất ưu đãi giúp tôi tiết kiệm được nhiều chi phí.",
    property: "Căn hộ The Sun Avenue",
  },
]

const trustIndicators = [
  { icon: Users, value: "15,000+", label: "Khách hàng hài lòng" },
  { icon: TrendingUp, value: "98%", label: "Tỷ lệ thành công" },
  { icon: Shield, value: "100%", label: "Bảo đảm pháp lý" },
  { icon: Star, value: "4.9/5", label: "Đánh giá trung bình" },
]

export function SocialProofSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const indicatorsAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-20 bg-neutral-50">
      <Container maxWidth="lg">
        <div
          ref={titleAnimation.ref as any}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Typography variant="overline" className="text-primary font-semibold tracking-wider mb-2">
            NIỀM TIN TỪ KHÁCH HÀNG
          </Typography>
          <Typography variant="h3" className="font-bold mb-4">
            Hơn 15,000 Khách Hàng <span className="text-primary">Tin Tưởng</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="max-w-2xl mx-auto">
            Những phản hồi chân thực từ khách hàng đã tìm thấy ngôi nhà mơ ước cùng chúng tôi
          </Typography>
        </div>

        <Grid container spacing={4} className="mb-16" ref={testimonialsAnimation.ref as any}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className={`h-full hover:shadow-xl transition-all duration-700 ${
                  testimonialsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: testimonialsAnimation.isVisible ? `${index * 150}ms` : "0ms",
                }}
                sx={{ borderRadius: 3 }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 60, height: 60 }} />
                    <div>
                      <Typography variant="h6" className="font-semibold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </div>
                  </div>
                  <Rating value={testimonial.rating} readOnly className="mb-3" />
                  <Typography variant="body2" className="mb-4 text-neutral-600 leading-relaxed">
                    "{testimonial.content}"
                  </Typography>
                  <Box className="pt-4 border-t border-neutral-200">
                    <Typography variant="caption" className="text-primary font-semibold">
                      Đã mua: {testimonial.property}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} ref={indicatorsAnimation.ref as any}>
          {trustIndicators.map((indicator, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                className={`text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-700 ${
                  indicatorsAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{
                  transitionDelay: indicatorsAnimation.isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <indicator.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <Typography variant="h4" className="font-bold text-primary mb-1">
                  {indicator.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {indicator.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
