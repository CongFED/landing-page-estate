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

export function CTAContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, style } = useScrollAnimation();

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      await emailjs.send(
        "service_9gwugqa",
        "template_50meekj",
        {
          ...formData,
          time: new Date().toLocaleString("vi-VN"),
        },
        "zjRByL0fWqBu1pstG"
      );
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert("Gửi thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <Container maxWidth="lg">
        <Box ref={ref} style={style}>
          {/* Heading */}
          <Box textAlign="center" mb={10}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Liên hệ với chúng tôi
            </Typography>
            <Typography color="text.secondary" maxWidth={630} mx="auto">
              Đội ngũ chuyên gia bất động sản sẽ liên hệ trong vòng 24 giờ để hỗ
              trợ bạn tốt nhất.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* FORM */}
            <Grid item xs={12} lg={8}>
              <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 3 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Họ và tên"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={handleChange("name")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Số điện thoại"
                        fullWidth
                        type="number"
                        required
                        value={formData.phone}
                        onChange={handleChange("phone")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={handleChange("email")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Lời nhắn (tùy chọn)"
                        fullWidth
                        multiline
                        rows={3}
                        value={formData.message}
                        onChange={handleChange("message")}
                      />
                    </Grid>
                  </Grid>

                  {submitted && (
                    <Box
                      mt={3}
                      p={2}
                      borderRadius={2}
                      bgcolor="rgba(76,175,80,0.1)"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <CheckCircle2 size={20} color="#4CAF50" />
                      <Typography color="#4CAF50">
                        Gửi thành công! Chúng tôi sẽ liên hệ sớm.
                      </Typography>
                    </Box>
                  )}

                  <MuiButton
                    fullWidth
                    type="submit"
                    size="large"
                    disabled={loading}
                    sx={{
                      mt: 4,
                      py: 1.5,
                      fontWeight: 700,
                      borderRadius: 2,
                      textTransform: "none",
                      color: "white",
                      background:
                        "linear-gradient(135deg, #C86432 0%, #B85428 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #B85428 0%, #A84320 100%)",
                      },
                    }}
                  >
                    {loading ? "Đang gửi..." : "Gửi Yêu Cầu Tư Vấn"}
                  </MuiButton>
                </form>
              </Paper>
            </Grid>

            {/* INFO */}
            <Grid item xs={12} lg={4}>
              {[
                { icon: Phone, title: "Hotline", value: "0869 154 692" },
                { icon: Mail, title: "Email", value: "npc.it.dev@gmail.com" },
                {
                  icon: MapPin,
                  title: "Địa chỉ",
                  value: "61 Trần Văn Dư, P.14, Q. Tân Bình, TP. HCM",
                },
              ].map((item, i) => (
                <Paper
                  key={i}
                  sx={{
                    mb: 3,
                    p: 3,
                    display: "flex",
                    gap: 2,
                    borderRadius: 2,
                  }}
                >
                  <item.icon size={24} color="#C86432" />
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.value}</Typography>
                  </Box>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
