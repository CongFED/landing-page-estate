"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Users, Target, Handshake, Lightbulb, Heart } from "lucide-react";
import { StatsSection } from "@/components/stats-section";

export default function NewsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const coreValues = [
    {
      icon: Target,
      title: "Uy Tín",
      description:
        "Xây dựng mối quan hệ dài hạn dựa trên sự tin tưởng và minh bạch",
    },
    {
      icon: Users,
      title: "Chuyên Nghiệp",
      description:
        "Đội ngũ chuyên gia với kinh nghiệm hơn 15 năm trong lĩnh vực BĐS",
    },
    {
      icon: Handshake,
      title: "Khách Hàng Trung Tâm",
      description: "Luôn đặt nhu cầu và lợi ích khách hàng lên hàng đầu",
    },
    {
      icon: Lightbulb,
      title: "Đổi Mới",
      description: "Ứng dụng công nghệ mới nhất trong quản lý và tư vấn BĐS",
    },
    {
      icon: Heart,
      title: "Cộng Đồng",
      description: "Đóng góp tích cực cho sự phát triển bền vững của cộng đồng",
    },
  ];

  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      position: "Giám Đốc Điều Hành",
      experience: "20 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Trần Thị B",
      position: "Phó Giám Đốc Bán Hàng",
      experience: "15 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Lê Văn C",
      position: "Chuyên Gia Tư Vấn",
      experience: "12 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1500648767791-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Phạm Thị D",
      position: "Chuyên Gia Pháp Lý",
      experience: "10 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          py: { xs: 12, md: 16 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              mb: 2,
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            TIN TỨC
          </Typography>
        </Box>
      </Box>

      {/* Company Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background" }}></Box>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
