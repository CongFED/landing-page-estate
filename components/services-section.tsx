"use client";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography,
  Box,
} from "@mui/material";
import {
  Search,
  FileCheck,
  Key,
  TrendingUp,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Search,
    title: "Tìm Kiếm BĐS",
    description:
      "Hệ thống tìm kiếm thông minh với hàng ngàn bất động sản chất lượng.",
  },
  {
    icon: FileCheck,
    title: "Thẩm Định Pháp Lý",
    description: "Kiểm tra và thẩm định toàn bộ hồ sơ pháp lý miễn phí.",
  },
  {
    icon: Key,
    title: "Môi Giới Chuyên Nghiệp",
    description: "Đội ngũ môi giới giàu kinh nghiệm, tận tâm với khách hàng.",
  },
  {
    icon: TrendingUp,
    title: "Tư Vấn Đầu Tư",
    description: "Phân tích thị trường và tư vấn chiến lược đầu tư hiệu quả.",
  },
  {
    icon: Shield,
    title: "Bảo Mật Thông Tin",
    description: "Cam kết bảo mật tuyệt đối thông tin cá nhân và giao dịch.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ Trợ 24/7",
    description: "Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <MuiCard
      ref={ref}
      className={`group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      sx={{
        transition: "all 0.5s",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 3,
        },
      }}
    >
      <MuiCardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 1.5,
            bgcolor: "primary.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            transition: "all 0.3s",
            ".group:hover &": {
              bgcolor: "primary.main",
              transform: "scale(1.1)",
            },
          }}
        >
          <Icon
            className="transition-colors group-hover:text-white"
            size={28}
            style={{ color: "white" }}
          />
        </Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {service.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="leading-relaxed"
        >
          {service.description}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            className="leading-tight"
          >
            Dịch Vụ <span className="text-primary">Toàn Diện</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="leading-relaxed"
          >
            Chúng tôi cung cấp giải pháp bất động sản trọn gói, đảm bảo trải
            nghiệm liền mạch từ tìm kiếm đến hoàn tất giao dịch.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
