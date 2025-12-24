"use client";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip as MuiChip,
  Button as MuiButton,
  Divider,
  Tab,
  Tabs,
} from "@mui/material";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Share2,
  ChevronLeft,
  Phone,
  Mail,
  MapPinIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function PropertyDetail() {
  const params = useParams();
  const id = Number.parseInt(params.id as string);
  const property = properties.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="h4">Không tìm thấy dự án</Typography>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Header with back button - Minimalist style */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/#properties">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <ChevronLeft size={20} /> Quay lại
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Gallery Section - Full Width */}
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Main Image */}
          <Box
            component="img"
            src={property.images[selectedImage]}
            alt={property.title}
            sx={{
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "600px" },
              objectFit: "cover",
              borderRadius: 1,
              marginBottom: 3,
            }}
          />

          {/* Thumbnail Gallery */}
          <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 2 }}>
            {property.images.map((image, idx) => (
              <Box
                key={idx}
                component="img"
                src={image}
                alt={`Property ${idx}`}
                onClick={() => setSelectedImage(idx)}
                sx={{
                  width: { xs: "100px", sm: "120px", md: "150px" },
                  height: { xs: "80px", sm: "100px", md: "120px" },
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 1,
                  border:
                    selectedImage === idx
                      ? "2px solid #D4843B"
                      : "2px solid transparent",
                  transition: "all 0.3s ease",
                  opacity: selectedImage === idx ? 1 : 0.6,
                  "&:hover": { opacity: 1 },
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </div>
      </section>

      {/* Property Info Header */}
      <section className="container mx-auto px-4 py-8 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
          <div className="flex-1">
            <Typography variant="h3" fontWeight={700} className="mb-3">
              {property.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
              <MapPin size={20} className="text-primary" />
              <Typography variant="body1" color="text.secondary">
                {property.location}
              </Typography>
            </Box>
            {property.tag && (
              <MuiChip
                label={property.tag}
                color="primary"
                variant="outlined"
              />
            )}
          </div>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <MuiButton
              variant={isFavorite ? "contained" : "outlined"}
              startIcon={
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
              }
              onClick={() => setIsFavorite(!isFavorite)}
              sx={{
                borderColor: "#D4843B",
                color: isFavorite ? "white" : "#D4843B",
                "&:hover": { borderColor: "#D4843B" },
              }}
            >
              {isFavorite ? "Đã lưu" : "Lưu"}
            </MuiButton>
            <MuiButton
              variant="outlined"
              startIcon={<Share2 size={20} />}
              sx={{ borderColor: "#D4843B", color: "#D4843B" }}
            >
              Chia sẻ
            </MuiButton>
          </Box>
        </div>

        {/* Price and Key Stats */}
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
                fontWeight={600}
              >
                GIÁ BÁN
              </Typography>
              <Typography variant="h5" color="primary" fontWeight={700}>
                {property.price}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
                fontWeight={600}
              >
                PHÒNG NGỦ
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Bed size={20} className="text-primary" />
                <Typography variant="h5" fontWeight={700}>
                  {property.beds}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
                fontWeight={600}
              >
                PHÒNG TẮM
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Bath size={20} className="text-primary" />
                <Typography variant="h5" fontWeight={700}>
                  {property.baths}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={1}
                fontWeight={600}
              >
                DIỆN TÍCH
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Maximize size={20} className="text-primary" />
                <Typography variant="h5" fontWeight={700}>
                  {property.area}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>

      {/* Tabs Section - Description, Features, Amenities, Legal */}
      <section className="container mx-auto px-4 py-8">
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            sx={{
              "& .MuiTab-root": { textTransform: "none", fontSize: "1rem" },
            }}
          >
            <Tab label="Mô tả" />
            <Tab label="Đặc điểm" />
            <Tab label="Tiện ích" />
            <Tab label="Pháp lý" />
          </Tabs>
        </Box>

        {/* Tab 1: Description */}
        {tabValue === 0 && (
          <Box>
            <Typography
              variant="body1"
              color="text.secondary"
              className="leading-relaxed text-lg"
              paragraph
            >
              {property.description}
            </Typography>
          </Box>
        )}

        {/* Tab 2: Features */}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            {property.features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  sx={{
                    p: 3,
                    borderLeft: "4px solid #D4843B",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    {feature}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Tab 3: Amenities */}
        {tabValue === 2 && (
          <Grid container spacing={3}>
            {property.amenities.map((amenity, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 1,
                    transition: "all 0.3s",
                    "&:hover": { boxShadow: 3, transform: "translateY(-4px)" },
                  }}
                >
                  <Typography variant="h4" mb={1}>
                    {amenity.icon}
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    {amenity.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Tab 4: Legal Info */}
        {tabValue === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Paper sx={{ p: 4, borderRadius: 1, bgcolor: "#fafafa" }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={2}
                  fontWeight={600}
                >
                  CHỦ ĐẦU TƯ
                </Typography>
                <Typography variant="h6" fontWeight={700} mb={2}>
                  {property.legalInfo.developer}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={2}
                  fontWeight={600}
                >
                  GIẤY PHÉP SỐ
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {property.legalInfo.certificateNo}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper sx={{ p: 4, borderRadius: 1, bgcolor: "#fafafa" }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={2}
                  fontWeight={600}
                >
                  NĂM HOÀN THÀNH
                </Typography>
                <Typography variant="h6" fontWeight={700} mb={2}>
                  {property.legalInfo.year}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={2}
                  fontWeight={600}
                >
                  TRẠNG THÁI
                </Typography>
                <MuiChip
                  label={property.legalInfo.status}
                  color="primary"
                  size="small"
                />
              </Paper>
            </Grid>
          </Grid>
        )}
      </section>

      {/* Contact Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
