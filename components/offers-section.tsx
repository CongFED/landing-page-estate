"use client"

import { Card, CardContent, Box, Chip } from "@mui/material"
import { Check, Shield, Award, TrendingUp, HeadphonesIcon, FileCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const offers = [
  {
    icon: Shield,
    title: "Bảo đảm pháp lý",
    description: "100% hồ sơ pháp lý minh bạch, cam kết sổ đỏ trao tay",
    color: "bg-emerald-500",
  },
  {
    icon: Award,
    title: "Giá tốt nhất thị trường",
    description: "Cam kết giá niêm yết chính xác, không phát sinh chi phí ẩn",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Tăng giá cam kết",
    description: "Đầu tư sinh lời lên đến 15-20%/năm với các dự án tiềm năng",
    color: "bg-amber-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ mọi lúc",
    color: "bg-purple-500",
  },
  {
    icon: FileCheck,
    title: "Hỗ trợ vay ngân hàng",
    description: "Hỗ trợ thủ tục vay lên đến 80% giá trị bất động sản",
    color: "bg-rose-500",
  },
  {
    icon: Check,
    title: "Bàn giao ngay",
    description: "Sẵn sàng bàn giao trong vòng 7-14 ngày làm việc",
    color: "bg-teal-500",
  },
]

export function OffersSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 })
  const specialAnimation = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref as any}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Chip
            label="ƯU ĐÃI ĐẶC BIỆT"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cam Kết & Ưu Đãi Của Chúng Tôi</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mang đến trải nghiệm mua bán bất động sản an toàn, minh bạch và hiệu quả nhất
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          ref={cardsAnimation.ref as any}
        >
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  transition: "all 0.7s ease-out",
                  opacity: cardsAnimation.isVisible ? 1 : 0,
                  transform: cardsAnimation.isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                  transitionDelay: cardsAnimation.isVisible ? `${index * 100}ms` : "0ms",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box className="flex flex-col items-start gap-4">
                    <div className={`${offer.color} p-4 rounded-xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Box
          ref={specialAnimation.ref as any}
          className={`mt-16 text-center transition-all duration-1000 ${
            specialAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg font-semibold text-primary mb-2">🎁 Ưu đãi đặc biệt trong tháng này</p>
            <p className="text-muted-foreground">
              Giảm ngay <span className="text-primary font-bold text-xl">2%</span> phí môi giới cho khách hàng đầu tiên
              + Tặng gói tư vấn thiết kế nội thất trị giá <span className="text-primary font-bold">50 triệu đồng</span>
            </p>
          </div>
        </Box>
      </div>
    </section>
  )
}
