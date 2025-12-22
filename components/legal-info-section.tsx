"use client"

import { Card, CardContent, Typography, Container, Grid, Chip, Box } from "@mui/material"
import { FileCheck, Shield, Building2, Award, CheckCircle, Scale } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const legalFeatures = [
  {
    icon: FileCheck,
    title: "Giấy Phép Kinh Doanh",
    content: "Giấy phép kinh doanh bất động sản số 01/GP-BĐS do Sở Xây dựng TP.HCM cấp ngày 15/01/2020.",
    badges: ["Hợp pháp", "Minh bạch"],
  },
  {
    icon: Shield,
    title: "Bảo Hiểm Trách Nhiệm",
    content: "Bảo hiểm trách nhiệm nghề nghiệp với hạn mức 50 tỷ VNĐ, bảo vệ quyền lợi khách hàng tối đa.",
    badges: ["Bảo vệ 100%", "An toàn"],
  },
  {
    icon: Building2,
    title: "Chủ Đầu Tư Uy Tín",
    content: "Độc quyền phân phối các dự án từ Vinhomes, Novaland, Masterise Homes, Đất Xanh Group.",
    badges: ["Top Developer", "Chính thức"],
  },
  {
    icon: Award,
    title: "Chứng Nhận & Giải Thưởng",
    content: "Top 10 Sàn Giao Dịch BĐS Uy Tín Năm 2023, 2024 do Vietnam Property Awards bình chọn.",
    badges: ["Award Winner", "Uy tín"],
  },
  {
    icon: Scale,
    title: "Đội Ngũ Luật Sư",
    content: "Đội ngũ 15+ luật sư chuyên ngành BĐS, kiểm tra 100% hồ sơ pháp lý trước khi giao dịch.",
    badges: ["Chuyên nghiệp", "Kiểm định"],
  },
  {
    icon: CheckCircle,
    title: "Cam Kết Hoàn Tiền",
    content: "Hoàn 100% tiền đặt cọc nếu phát hiện sai phạm về pháp lý hoặc không đúng cam kết.",
    badges: ["Cam kết", "Đảm bảo"],
  },
]

const certifications = [
  "Giấy chứng nhận ISO 9001:2015",
  "Thành viên Hiệp hội BĐS TP.HCM",
  "Đối tác chiến lược của 50+ ngân hàng",
  "Chứng nhận doanh nghiệp xanh",
]

export function LegalInfoSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 })
  const certAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <div
          ref={titleAnimation.ref as any}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Typography variant="overline" className="text-primary font-semibold tracking-wider mb-2">
            PHÁP LÝ MINH BẠCH
          </Typography>
          <Typography variant="h3" className="font-bold mb-4">
            Đảm Bảo <span className="text-primary">100% Pháp Lý</span> Rõ Ràng
          </Typography>
          <Typography variant="body1" className="text-neutral-300 max-w-2xl mx-auto">
            Mọi giao dịch đều được kiểm định chặt chẽ bởi đội ngũ chuyên gia pháp lý và luật sư hàng đầu
          </Typography>
        </div>

        <Grid container spacing={4} className="mb-12" ref={cardsAnimation.ref as any}>
          {legalFeatures.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className={`h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-700 ${
                  cardsAnimation.isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 -rotate-3"
                }`}
                style={{
                  transitionDelay: cardsAnimation.isVisible ? `${index * 120}ms` : "0ms",
                }}
                sx={{ borderRadius: 3 }}
              >
                <CardContent className="p-6">
                  <Box className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </Box>
                  <Typography variant="h6" className="font-semibold mb-2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-neutral-300 mb-4 leading-relaxed">
                    {feature.content}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge, idx) => (
                      <Chip
                        key={idx}
                        label={badge}
                        size="small"
                        className="bg-primary/20 text-primary border-primary/30"
                        variant="outlined"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card
          ref={certAnimation.ref as any}
          className={`bg-primary/10 border border-primary/30 backdrop-blur-sm transition-all duration-1000 ${
            certAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          sx={{ borderRadius: 3 }}
        >
          <CardContent className="p-8">
            <Typography variant="h5" className="font-semibold mb-6 text-center">
              Chứng Nhận & Thành Viên
            </Typography>
            <Grid container spacing={3}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    className={`flex items-center gap-3 p-4 bg-white/5 rounded-xl transition-all duration-700 ${
                      certAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{
                      transitionDelay: certAnimation.isVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <Typography variant="body2" className="text-neutral-200">
                      {cert}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}
