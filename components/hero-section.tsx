"use client";

import {
  TextField,
  MenuItem,
  Button as MuiButton,
  InputAdornment,
  Chip,
  Box,
  Typography,
  Paper,
  Fade,
  Slide,
} from "@mui/material";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [propertyType, setPropertyType] = useState("apartment");
  const [location, setLocation] = useState("hanoi");
  const [priceRange, setPriceRange] = useState("2-5");

  const images = [
    "/luxury-modern-residential-architecture-with-sunset.jpg",
    "/modern-luxury-apartment-building-exterior.jpg",
    "/luxury-villa-with-swimming-pool.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <Fade in={isVisible} timeout={1000}>
            <div>
              <Chip
                icon={<MapPin size={16} />}
                label="Bất Động Sản Cao Cấp"
                color="primary"
                variant="outlined"
                sx={{ mb: 3, fontWeight: 600 }}
              />

              <Typography
                variant="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-balance"
              >
                Tìm Ngôi Nhà{" "}
                <span className="text-primary relative">
                  Mơ Ước
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 2, 150 2, 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Của Bạn
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                className="mb-2.5 leading-relaxed text-pretty max-w-xl mt-5"
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                Khám phá hơn 10,000+ bất động sản cao cấp tại các vị trí đắc địa
                nhất Việt Nam. Chúng tôi đồng hành cùng bạn tìm kiếm không gian
                sống hoàn hảo.
              </Typography>

              <Paper elevation={8} sx={{ p: 3, borderRadius: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <Search className="text-primary" size={20} />
                  <Typography variant="h6" fontWeight={600}>
                    Tìm Kiếm Bất Động Sản
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                >
                  {/* Property Type */}
                  <TextField
                    select
                    label="Loại hình"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home size={18} className="text-muted-foreground" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="apartment">Căn hộ chung cư</MenuItem>
                    <MenuItem value="villa">Biệt thự</MenuItem>
                    <MenuItem value="townhouse">Nhà phố liền kề</MenuItem>
                    <MenuItem value="land">Đất nền</MenuItem>
                  </TextField>

                  {/* Location */}
                  <TextField
                    select
                    label="Khu vực"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MapPin size={18} className="text-muted-foreground" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="hanoi">Hà Nội</MenuItem>
                    <MenuItem value="hcm">TP. Hồ Chí Minh</MenuItem>
                    <MenuItem value="danang">Đà Nẵng</MenuItem>
                    <MenuItem value="haiphong">Hải Phòng</MenuItem>
                    <MenuItem value="cantho">Cần Thơ</MenuItem>
                    <MenuItem value="nhatrang">Nha Trang</MenuItem>
                  </TextField>

                  {/* Price Range */}
                  <TextField
                    select
                    label="Mức giá"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DollarSign
                            size={18}
                            className="text-muted-foreground"
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="under-2">Dưới 2 tỷ</MenuItem>
                    <MenuItem value="2-5">2 - 5 tỷ</MenuItem>
                    <MenuItem value="5-10">5 - 10 tỷ</MenuItem>
                    <MenuItem value="10-20">10 - 20 tỷ</MenuItem>
                    <MenuItem value="over-20">Trên 20 tỷ</MenuItem>
                  </TextField>

                  <MuiButton
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<Search size={20} />}
                    sx={{ py: 1.5, fontSize: "1rem", fontWeight: 600 }}
                  >
                    Tìm Kiếm Ngay
                  </MuiButton>
                </Box>
              </Paper>

              {/* Quick Stats */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 2,
                  mt: 4,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight={700} color="primary">
                    10K+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Bất động sản
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    borderLeft: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h5" fontWeight={700} color="primary">
                    5K+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Khách hàng
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight={700} color="primary">
                    50+
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Khu vực
                  </Typography>
                </Box>
              </Box>
            </div>
          </Fade>

          {/* Right Side - Image Carousel */}
          <Slide direction="left" in={isVisible} timeout={1000}>
            <div className="relative h-[600px] lg:h-[700px] pb-4 lg:pb-0">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Real Estate ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-primary"
                          : "w-1.5 bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Card with MUI */}
                <Paper
                  elevation={4}
                  sx={{
                    position: "absolute",
                    bottom: 40,
                    left: 32,
                    p: 2,
                    maxWidth: 280,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "primary.light",
                        borderRadius: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Home className="text-white" size={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        gutterBottom
                      >
                        Villa Luxury Ocean View
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        gutterBottom
                      >
                        Đà Nẵng, Việt Nam
                      </Typography>
                      <Typography variant="h6" color="primary" fontWeight={700}>
                        35 tỷ VNĐ
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
