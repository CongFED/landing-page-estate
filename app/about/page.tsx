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

export default function AboutPage() {
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
            Về PC ESTATE
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: 300,
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Đồng hành cùng bạn tìm ngôi nhà mơ ước
          </Typography>
        </Box>
      </Box>

      {/* Company Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dn8ovj988/image/upload/v1766769516/modern-luxury-apartment-building-exterior_wdlwdv.jpg"
                alt="Company Story"
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                  animation: "fadeInLeft 0.8s ease-out",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                Câu Chuyện Của Chúng Tôi
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                PC ESTATE được thành lập vào năm 2008 với mục tiêu mang lại
                những giải pháp bất động sản toàn diện cho khách hàng. Từ những
                ngày đầu khiêm tốn, chúng tôi đã phát triển thành một trong
                những công ty hàng đầu trong lĩnh vực tư vấn và môi giới bất
                động sản tại Việt Nam.
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                Với đội ngũ chuyên gia giàu kinh nghiệm và tâm huyết, PC ESTATE
                cam kết cung cấp dịch vụ chất lượng cao nhất, giúp khách hàng
                tìm được bất động sản phù hợp với nhu cầu và ngân sách của mình.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "text.primary",
              }}
            >
              Khám Phá Thế Giới Bất Động Sản
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "text.secondary",
                mb: 4,
              }}
            >
              Những dự án tiêu biểu của PC ESTATE
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #d97757 0%, #d97757 100%)",
                mx: "auto",
              }}
            />
          </Box>

          {/* Large image - 2x2 grid */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px",
                  height: { xs: 300, md: 450 },
                  cursor: "pointer",
                  group: "hover",
                  "&:hover .image-overlay": {
                    opacity: 1,
                  },
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dn8ovj988/image/upload/v1766768934/50b8cb5f-84b6-464e-bfb4-0723f3a008e4_z6qypy.png"
                  alt="Luxury Apartment Complex"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />
                <Box
                  className="image-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(217, 119, 87, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    padding: "2rem",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "white", fontWeight: 700, mb: 1 }}
                    >
                      Phức Hợp Cao Cấp
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                    >
                      Khu đô thị hiện đại
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Two medium images on right */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[
                  {
                    title: "Biệt Thự Sang Trọng",
                    subtitle: "Thiết kế hiện đại",
                    image:
                      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=300&fit=crop",
                  },
                  {
                    title: "Penthouse Tiêu Chuẩn",
                    subtitle: "View tuyệt vời",
                    image:
                      "https://res.cloudinary.com/dn8ovj988/image/upload/v1766769129/ChatGPT_Image_00_10_58_27_thg_12_2025_vn6u2o.png",
                  },
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "12px",
                        height: 210,
                        cursor: "pointer",
                        "&:hover .image-overlay": {
                          opacity: 1,
                        },
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                      />
                      <Box
                        className="image-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(135deg, rgba(217, 119, 87, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "flex-start",
                          padding: "1.5rem",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ color: "white", fontWeight: 700 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* Bottom row - 3 equal images */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {[
              {
                title: "Căn Hộ Sang Trọng",
                image:
                  "https://res.cloudinary.com/dn8ovj988/image/upload/v1766769542/modern-luxury-penthouse-interior-with-city-view_vah3l4.jpg",
              },
              {
                title: "Shophouse Kinh Doanh",
                image:
                  "https://res.cloudinary.com/dn8ovj988/image/upload/v1766769159/ChatGPT_Image_00_10_54_27_thg_12_2025_utdlox.png",
              },
              {
                title: "Dự Án Mới Hoàn Thành",
                image:
                  "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=300&fit=crop",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    height: 280,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                    "&:hover .image-overlay": {
                      opacity: 1,
                    },
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <Box
                    className="image-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(217, 119, 87, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      padding: "1.5rem",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      {/* <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "var(--color-primary)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Hãy Bắt Đầu Hành Trình Của Bạn
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: "1.1rem",
              opacity: 0.95,
            }}
          >
            Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí từ các
            chuyên gia của PC ESTATE
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "var(--color-primary)",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Liên Hệ Ngay
          </Button>
        </Container>
      </Box> */}

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
