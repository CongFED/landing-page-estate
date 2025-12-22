"use client"

import type React from "react"

import { TextField, Button as MuiButton, Box, Typography, Paper, Grid } from "@mui/material"
import { Phone, Mail } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" fontWeight={700} gutterBottom className="leading-tight text-balance">
              Đăng Ký Nhận Tư Vấn
              <br />
              Miễn Phí Ngay Hôm Nay
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }} className="leading-relaxed text-pretty">
              Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ trong vòng 24h để tư vấn miễn phí về bất động sản
              phù hợp với nhu cầu của bạn.
            </Typography>
          </div>

          <Paper
            elevation={0}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              p: 4,
              mb: 4,
              borderRadius: 2,
            }}
          >
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={handleChange("name")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                      "& fieldset": {
                        borderColor: "divider",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                      "& fieldset": {
                        borderColor: "divider",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Email của bạn"
                value={formData.email}
                onChange={handleChange("email")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.paper",
                    "& fieldset": {
                      borderColor: "divider",
                    },
                  },
                }}
              />
              <MuiButton
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  color: "text.primary",
                  px: 4,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    bgcolor: "background.default",
                  },
                }}
              >
                Đăng Ký Ngay
              </MuiButton>
            </Box>
          </Paper>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 3,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={24} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                    Hotline
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    1900 xxxx
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 3,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={24} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                    Email
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    contact@estate.vn
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}
