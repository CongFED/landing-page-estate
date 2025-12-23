"use client";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia,
  IconButton,
  Chip as MuiChip,
  Typography,
  Box,
} from "@mui/material";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const properties = [
  {
    id: 1,
    title: "Penthouse Cao Cấp Vista Verde",
    location: "Quận 2, TP. HCM",
    price: "12.5 tỷ",
    beds: 3,
    baths: 2,
    area: "145m²",
    image: "/modern-luxury-penthouse-interior-with-city-view.jpg",
    tag: "Mới",
  },
  {
    id: 2,
    title: "Biệt Thự Vinhomes Riverside",
    location: "Long Biên, Hà Nội",
    price: "28.8 tỷ",
    beds: 5,
    baths: 4,
    area: "350m²",
    image: "/luxury-villa-pool-garden.png",
    tag: "Hot",
  },
  {
    id: 3,
    title: "Căn Hộ Sunshine City",
    location: "Tây Hồ, Hà Nội",
    price: "6.2 tỷ",
    beds: 2,
    baths: 2,
    area: "95m²",
    image: "/modern-apartment-with-large-windows.jpg",
  },
  {
    id: 4,
    title: "Shophouse Phú Mỹ Hưng",
    location: "Quận 7, TP. HCM",
    price: "15.5 tỷ",
    beds: 4,
    baths: 3,
    area: "200m²",
    image: "/modern-commercial-shophouse-facade.jpg",
    tag: "Mới",
  },
];
const ALL_PROPERTIES = [
  ...properties,
  {
    id: 5,
    title: "Căn Hộ Masteri Thảo Điền",
    location: "Quận 2, TP. HCM",
    price: "7.8 tỷ",
    beds: 2,
    baths: 2,
    area: "90m²",
    image: "/TD.jpg",
    tag: "Hot",
  },
  {
    id: 6,
    title: "Biệt Thự Sala Đại Quang Minh",
    location: "Thủ Thiêm, TP. HCM",
    price: "45 tỷ",
    beds: 6,
    baths: 5,
    area: "420m²",
    image: "/bg-stats.png",
  },
  // có thể thêm nữa
];

function PropertyCard({
  property,
  index,
}: {
  property: (typeof properties)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const propertiesAnimation = useScrollAnimation({ threshold: 0.1 });
  const buttonAnimation = useScrollAnimation({ threshold: 0.3 });

  const INITIAL_COUNT = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isAllVisible = visibleCount >= ALL_PROPERTIES.length;

  const visibleProperties = ALL_PROPERTIES.slice(0, visibleCount);
  return (
    <MuiCard
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        overflow: "hidden",
        transition: "all 0.5s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="240"
          image={property.image || "/placeholder.svg"}
          alt={property.title}
          sx={{
            aspectRatio: "4/3",
            transition: "transform 0.7s",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {property.tag && (
          <MuiChip
            label={property.tag}
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              fontWeight: 600,
            }}
          />
        )}

        <IconButton
          onClick={() => setIsFavorite(!isFavorite)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "rgba(255, 255, 255, 0.8)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
            transform: isHovered ? "translateY(0)" : "translateY(16px)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.3s",
          }}
        >
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 "
            style={{ cursor: "pointer" }}
          >
            Xem Chi Tiết
          </Button>
        </Box>
      </Box>

      <MuiCardContent sx={{ p: 2.5 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          gutterBottom
          className="leading-snug"
        >
          {property.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 2 }}>
          <MapPin size={16} className="text-muted-foreground" />
          <Typography variant="body2" color="text.secondary">
            {property.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            pb: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Bed size={18} className="text-muted-foreground" />
              <Typography variant="body2" color="text.secondary">
                {property.beds}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Bath size={18} className="text-muted-foreground" />
              <Typography variant="body2" color="text.secondary">
                {property.baths}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Maximize size={18} className="text-muted-foreground" />
              <Typography variant="body2" color="text.secondary">
                {property.area}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Giá bán
            </Typography>
            <Typography variant="h5" color="primary" fontWeight={700}>
              {property.price}
            </Typography>
          </Box>
        </Box>
      </MuiCardContent>
    </MuiCard>
  );
}

export function FeaturedProperties() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const propertiesAnimation = useScrollAnimation({ threshold: 0.1 });
  const buttonAnimation = useScrollAnimation({ threshold: 0.3 });

  const INITIAL_COUNT = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isAllVisible = visibleCount >= ALL_PROPERTIES.length;

  const visibleProperties = ALL_PROPERTIES.slice(0, visibleCount);
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref as any}
          className={`max-w-2xl mb-12 transition-all duration-1000 ${
            titleAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            className="leading-tight"
          >
            Dự Án <span className="text-primary">Nổi Bật</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="leading-relaxed"
          >
            Khám phá những bất động sản cao cấp được lựa chọn kỹ lưỡng, đáp ứng
            mọi tiêu chuẩn khắt khe nhất về vị trí, thiết kế và tiện ích.
          </Typography>
        </div>

        <div
          ref={propertiesAnimation.ref as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {visibleProperties.map((property, index) => (
            <div
              key={property.id}
              className={`transition-all duration-700 ${
                propertiesAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: propertiesAnimation.isVisible
                  ? `${index * 120}ms`
                  : "0ms",
              }}
            >
              <PropertyCard property={property} index={index} />
            </div>
          ))}
        </div>

        <div
          ref={buttonAnimation.ref as any}
          className={`text-center transition-all duration-1000 ${
            buttonAnimation.isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-95"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (isAllVisible) {
                setVisibleCount(INITIAL_COUNT);
                document
                  .getElementById("properties")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                setVisibleCount((prev) => prev + 4);
              }
            }}
          >
            {isAllVisible ? "Ẩn Bớt Dự Án" : "Xem Thêm Dự Án"}
          </Button>
        </div>
      </div>
    </section>
  );
}
