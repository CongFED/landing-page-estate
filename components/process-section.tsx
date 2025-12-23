"use client";

import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { Search, FileText, Home, Key, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Tìm Kiếm & Khảo Sát",
    description:
      "Tìm kiếm BĐS phù hợp theo nhu cầu. Đội ngũ tư vấn sẽ đưa ra các lựa chọn tốt nhất và đồng hành khảo sát thực địa.",
    duration: "1-3 ngày",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    step: "02",
    title: "Thẩm Định Pháp Lý",
    description:
      "Luật sư kiểm tra toàn bộ hồ sơ pháp lý, nguồn gốc, quyền sở hữu. Đảm bảo 100% minh bạch trước khi giao dịch.",
    duration: "2-5 ngày",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    step: "03",
    title: "Đàm Phán & Ký Kết",
    description:
      "Hỗ trợ đàm phán giá tốt nhất, soạn thảo hợp đồng chuẩn pháp lý, ký kết an toàn với sự chứng kiến của luật sư.",
    duration: "1-2 ngày",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Key,
    step: "04",
    title: "Bàn Giao & Hỗ Trợ",
    description:
      "Hoàn tất thủ tục, hỗ trợ vay ngân hàng, bàn giao nhà và giấy tờ. Chăm sóc sau bán hàng lâu dài.",
    duration: "7-14 ngày",
    color: "from-green-500 to-teal-500",
  },
];

export function ProcessSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const timelineAnimation = useScrollAnimation({ threshold: 0.1 });
  const summaryAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 bg-neutral-50">
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          ref={titleAnimation.ref as any}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Typography
            variant="overline"
            className="text-primary font-semibold tracking-wider mb-2"
          >
            QUY TRÌNH MUA BÁN
          </Typography>
          <Typography variant="h3" className="font-bold mb-4">
            Quy Trình <span className="text-primary">4 Bước</span> Đơn Giản
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="max-w-2xl mx-auto"
          >
            Chúng tôi đồng hành cùng bạn từ tìm kiếm đến bàn giao, đảm bảo mọi
            thủ tục diễn ra nhanh chóng và an toàn
          </Typography>
        </div>

        <div className="relative" ref={timelineAnimation.ref as any}>
          {/* Connection Line */}
          <div
            className={`hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 transition-all duration-1500 ${
              timelineAnimation.isVisible
                ? "opacity-20 scale-x-100"
                : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                  timelineAnimation.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: timelineAnimation.isVisible
                    ? `${index * 150}ms`
                    : "0ms",
                }}
                sx={{ borderRadius: 3 }}
              >
                <CardContent className="p-6 text-center">
                  <Box
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                      step.color
                    } flex items-center justify-center shadow-lg transition-all duration-700 ${
                      timelineAnimation.isVisible
                        ? "scale-100 rotate-0"
                        : "scale-0 -rotate-180"
                    }`}
                    style={{
                      transitionDelay: timelineAnimation.isVisible
                        ? `${index * 150 + 200}ms`
                        : "0ms",
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </Box>

                  <Typography
                    variant="h6"
                    className="absolute top-4 right-4 font-bold text-neutral-200"
                    style={{ fontSize: "2rem" }}
                  >
                    {step.step}
                  </Typography>

                  <Typography variant="h6" className="font-semibold mb-2">
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mb-4 leading-relaxed"
                  >
                    {step.description}
                  </Typography>

                  <Box className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    <span>⏱</span>
                    {step.duration}
                  </Box>
                </CardContent>

                {index < processSteps.length - 1 && (
                  <ArrowRight
                    className={`hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 text-neutral-300 transition-all duration-700 ${
                      timelineAnimation.isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: timelineAnimation.isVisible
                        ? `${index * 150 + 400}ms`
                        : "0ms",
                    }}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* <Box
          ref={summaryAnimation.ref as any}
          className={`text-center mt-12 transition-all duration-1000 ${
            summaryAnimation.isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <Card
            className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white"
            sx={{ borderRadius: 3 }}
          >
            <CardContent className="p-8">
              <Typography variant="h5" className="font-bold mb-2">
                Tổng Thời Gian: Chỉ 2-4 Tuần
              </Typography>
              <Typography variant="body1" className="mb-4 opacity-90">
                Nhanh hơn 50% so với quy trình truyền thống
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold"
                endIcon={<ArrowRight />}
              >
                Bắt Đầu Ngay
              </Button>
            </CardContent>
          </Card>
        </Box> */}
      </Container>
    </section>
  );
}
