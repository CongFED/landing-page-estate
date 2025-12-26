"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  Button as MuiButton,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Box,
  Container,
} from "@mui/material";

import { Menu, X } from "lucide-react";
import logo from "@/public/PHUOCONG.png";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Tự đóng menu mobile khi đổi route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Về Chúng Tôi" },
    { href: "/projects", label: "Dự Án" },
    { href: "/news", label: "Tin tức" },
    { href: "/contact", label: "Liên Hệ" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 1 : 0}
      sx={{
        bgcolor: isScrolled ? "rgba(250,250,249,0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={logo}
              alt="Phuoc Ong"
              width={100}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-foreground)",
                    borderBottom: isActive
                      ? "2px solid var(--color-primary)"
                      : "2px solid transparent",
                    paddingBottom: 4,
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Box>

          {/* Desktop CTA */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MuiButton
              component={Link}
              href="/contact"
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Đăng Ký Tư Vấn
            </MuiButton>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
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
        <Box sx={{ width: 260, pt: 2 }}>
          <List>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <ListItemButton
                  key={link.href}
                  component={Link}
                  href={link.href}
                  selected={isActive}
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </ListItemButton>
              );
            })}
          </List>

          <Box sx={{ px: 2, pt: 2 }}>
            <MuiButton
              component={Link}
              href="/contact"
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
