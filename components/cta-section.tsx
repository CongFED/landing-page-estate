"use client";
import emailjs from "@emailjs/browser";

import type React from "react";
import {
  TextField,
  Button as MuiButton,
  Box,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { ref, style } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "Không có lời nhắn",
          time: new Date().toLocaleString("vi-VN"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Send email error:", error);
      alert("Gửi thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-600 rounded-full blur-3xl" />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <div ref={ref} style={style} className="mb-16">
          <div className="text-center mb-12">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                px: 3,
                py: 1,
                borderRadius: 100,
                bgcolor: "rgba(200, 100, 50, 0.1)",
                border: "1px solid rgba(200, 100, 50, 0.3)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#C86432",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#C86432", fontWeight: 600 }}
              >
                Tư vấn miễn phí
              </Typography>
            </Box>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                color: "white",
                mb: 2,
                fontSize: { xs: "2rem", md: "3.5rem" },
                textAlign: "center",
              }}
              className="leading-tight text-balance"
            >
              Tìm Bất Động Sản
              <br />
              <span style={{ color: "#C86432" }}>Phù Hợp Với Bạn</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                mx: "auto",
              }}
              className="leading-relaxed text-pretty"
            >
              Để lại thông tin liên hệ, đội ngũ chuyên gia bất động sản của
              chúng tôi sẽ liên hệ bạn trong 24 giờ để cung cấp giải pháp tốt
              nhất.
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  p: { xs: 4, md: 6 },
                  borderRadius: 3,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    sx={{
                      mb: 3,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 3,
                    }}
                  >
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                        }}
                      >
                        Họ và tên *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Nhập họ tên của bạn"
                        value={formData.name}
                        onChange={handleChange("name")}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#C86432",
                            },
                          },
                          "& .MuiOutlinedInput-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)",
                            opacity: 1,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                        }}
                      >
                        Số điện thoại *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="0869 154 692"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#C86432",
                            },
                          },
                          "& .MuiOutlinedInput-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)",
                            opacity: 1,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 500,
                      }}
                    >
                      Email *
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="npc.it.dev@gmail.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#C86432",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "rgba(255, 255, 255, 0.5)",
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 500,
                      }}
                    >
                      Lời nhắn (tùy chọn)
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      placeholder="Mô tả nhu cầu của bạn..."
                      value={formData.message}
                      onChange={handleChange("message")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#C86432",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "rgba(255, 255, 255, 0.5)",
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  {submitted && (
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        borderRadius: 1,
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        border: "1px solid rgba(76, 175, 80, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <CheckCircle2 size={20} color="#4CAF50" />
                      <Typography
                        sx={{ color: "#4CAF50", fontSize: "0.875rem" }}
                      >
                        Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm nhất.
                      </Typography>
                    </Box>
                  )}

                  <MuiButton
                    fullWidth
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      background: loading
                        ? "linear-gradient(135deg, #999 0%, #777 100%)"
                        : "linear-gradient(135deg, #C86432 0%, #B85428 100%)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1rem",
                      py: 1.75,
                      borderRadius: 2,
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      cursor: loading ? "not-allowed" : "pointer",
                      "&:hover": loading
                        ? {}
                        : {
                            background:
                              "linear-gradient(135deg, #B85428 0%, #A84320 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 12px 24px rgba(200, 100, 50, 0.3)",
                          },
                    }}
                  >
                    {loading ? "Đang gửi..." : "Gửi Yêu Cầu Tư Vấn"}
                  </MuiButton>
                </form>
              </Paper>
            </div>

            <div className="flex flex-col gap-4">
              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(200, 100, 50, 0.2) 0%, rgba(200, 100, 50, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(200, 100, 50, 0.3)",
                  p: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "rgba(200, 100, 50, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={24} color="#C86432" />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.7, mb: 0.5 }}
                      color="#C86432"
                    >
                      Hotline
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      0869 154 692
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(200, 100, 50, 0.2) 0%, rgba(200, 100, 50, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(200, 100, 50, 0.3)",
                  p: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "rgba(200, 100, 50, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={24} color="#C86432" />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.7, mb: 0.5 }}
                      color="#C86432"
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      npc.it.dev@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(200, 100, 50, 0.2) 0%, rgba(200, 100, 50, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(200, 100, 50, 0.3)",
                  p: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "rgba(200, 100, 50, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={24} color="#C86432" />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.7, mb: 0.5 }}
                      color="#C86432"
                    >
                      Địa chỉ
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      61 Trần Văn Dư, phường 14, quận Tân Bình, TP. Hồ Chí Minh
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
