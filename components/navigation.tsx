"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button as MuiButton,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import logo from "@/public/PHUOCONG.png";
import Image from "next/image";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#properties", label: "Dự Án" },
    { href: "#services", label: "Dịch Vụ" },
    { href: "#about", label: "Về Chúng Tôi" },
    { href: "#contact", label: "Liên Hệ" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 1 : 0}
      sx={{
        bgcolor: isScrolled ? "rgba(250, 250, 249, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "all 0.3s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            sx={{ fontSize: "1.5rem", fontWeight: 700, color: "text.primary" }}
          >
            <Image src={logo} alt="Banner" width={100} height={600} priority />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-foreground)")
                }
              >
                {link.label}
              </a>
            ))}
          </Box>

          {/* Desktop Buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* <MuiButton
              variant="text"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Đăng Nhập
            </MuiButton> */}
            <MuiButton
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              <a href="#contact">Đăng Ký Tư Vấn</a>
            </MuiButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-foreground)",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  {link.label}
                </a>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              px: 2,
              pt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* <MuiButton variant="text" fullWidth sx={{ textTransform: "none" }}>
              Đăng Nhập
            </MuiButton> */}
            <MuiButton
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Đăng Ký Tư Vấn
            </MuiButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
