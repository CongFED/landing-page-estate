"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import logo from "@/public/logoWhite.png";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="relative">
      <Box
        sx={{
          backgroundImage: "url(/luxury-real-estate-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            maxWidth: "1550px",
          }}
          sx={{ position: "relative", zIndex: 2, py: 8 }}
        >
          {/* Top Section */}
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            {/* Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: 3 }}>
                <Image
                  src={logo}
                  alt="Banner"
                  width={100}
                  height={600}
                  priority
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: "0.95rem",
                  }}
                >
                  Đối tác tin cậy trong hành trình tìm kiếm không gian sống hoàn
                  hảo của bạn.
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  {[
                    {
                      Icon: Facebook,
                      href: "https://www.facebook.com/fedNPC2704",
                    },
                    {
                      Icon: Instagram,
                      href: "https://www.instagram.com/dc_fed.npc/",
                    },
                    {
                      Icon: Youtube,
                      href: "https://www.youtube.com/@nguyencong8745",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/c%C3%B4ng-nguy%E1%BB%85n-ph%C6%B0%E1%BB%9Bc-a926ab259?fbclid=IwY2xjawO3gQRleHRuA2FlbQIxMABicmlkETFkQlpjaUZEa1dBRWdDWTBIc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtkrYqRWxF0wTPzBNrtiVLJuhUm3tibScTuCZ4Pfr4dczjrL0gF65k-iizpm_aem_LKs-oYNrjWpnoWg2XTl1hg",
                    },
                  ].map((item, idx) => (
                    <MuiLink
                      key={idx}
                      href={item.href}
                      sx={{
                        width: 42,
                        height: 42,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212, 113, 61, 0.2)",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(212, 113, 61, 0.5)",
                        "&:hover": {
                          backgroundColor: "#D4713D",
                          borderColor: "#D4713D",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <item.Icon size={20} />
                    </MuiLink>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "#fff" }}
              >
                Liên Kết
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Giới Thiệu", "Dịch Vụ", "Tin Tức", "Tuyển Dụng"].map(
                  (item, idx) => (
                    <MuiLink
                      key={idx}
                      href="#"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#D4713D",
                        },
                      }}
                    >
                      {item}
                    </MuiLink>
                  )
                )}
              </Box>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "#fff" }}
              >
                Dịch Vụ
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Mua Bán", "Cho Thuê", "Định Giá", "Tư Vấn"].map(
                  (item, idx) => (
                    <MuiLink
                      key={idx}
                      href="#"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#D4713D",
                        },
                      }}
                    >
                      {item}
                    </MuiLink>
                  )
                )}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "#fff" }}
              >
                Liên Hệ
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <MuiLink
                  href="tel:0869154692"
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#D4713D",
                    },
                  }}
                >
                  <Phone size={18} style={{ color: "#D4713D" }} />
                  <span>0869 154 692</span>
                </MuiLink>
                <MuiLink
                  href="mailto:npc.it.dev@gmail.com"
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#D4713D",
                    },
                  }}
                >
                  <Mail size={18} style={{ color: "#D4713D" }} />
                  <span>npc.it.dev@gmail.com</span>
                </MuiLink>
              </Box>
            </Grid>
          </div>

          {/* Divider */}
          <Divider sx={{ backgroundColor: "rgba(212, 113, 61, 0.3)", mb: 3 }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9rem" }}
            >
              &copy; 2026 PHUOCONG Estate Property Limited. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {["Chính Sách Bảo Mật", "Điều Khoản Sử Dụng", "Liên Hệ"].map(
                (item, idx) => (
                  <MuiLink
                    key={idx}
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#D4713D",
                      },
                    }}
                  >
                    {item}
                  </MuiLink>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
