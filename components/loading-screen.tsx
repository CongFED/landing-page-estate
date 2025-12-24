"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const leftText = "PHUOCONG";
  const rightText = "ESTATE";

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsVisible(true);
      sessionStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        height: "100vh",
        inset: 0,
        bgcolor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeOut 0.8s ease-out forwards",
        animationDelay: "2s",
        "@keyframes fadeOut": {
          from: { opacity: 1 },
          to: { opacity: 0, visibility: "hidden" },
        },
      }}
    >
      {/* TEXT CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // 🔥 split mobile
          alignItems: "center",
          gap: { xs: 0.5, sm: 2 },
          textAlign: "center",
        }}
      >
        {/* LEFT TEXT */}
        <Box sx={{ display: "flex" }}>
          {leftText.split("").map((char, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                fontSize: {
                  xs: "clamp(32px, 8vw, 40px)",
                  sm: "clamp(48px, 6vw, 64px)",
                  md: "72px",
                },
                fontWeight: 300,
                color: "#fff",
                letterSpacing: { xs: "2px", sm: "4px" },
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                opacity: 0,
                animation:
                  "slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
                animationDelay: `${index * 0.1}s`,
                "@keyframes slideUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {char}
            </Box>
          ))}
        </Box>

        {/* RIGHT TEXT */}
        <Box sx={{ display: "flex" }}>
          {rightText.split("").map((char, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                fontSize: {
                  xs: "clamp(32px, 8vw, 40px)",
                  sm: "clamp(48px, 6vw, 64px)",
                  md: "72px",
                },
                fontWeight: 300,
                color: "#fff",
                letterSpacing: { xs: "2px", sm: "4px" },
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                opacity: 0,
                animation:
                  "slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
                animationDelay: `${0.6 + index * 0.1}s`,
              }}
            >
              {char}
            </Box>
          ))}
        </Box>
      </Box>

      {/* LOADING LINE */}
      {/* <Box
        sx={{
          mt: { xs: 4, sm: 6 },
          width: { xs: 140, sm: 200 },
          height: "2px",
          bgcolor: "rgba(255,255,255,0.3)",
          borderRadius: "1px",
          overflow: "hidden",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            transform: "translateX(-100%)",
            bgcolor: "#fff",
            animation: "loadingLine 1.4s ease-in-out infinite",
            "@keyframes loadingLine": {
              "0%": { transform: "translateX(-100%)" },
              "50%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(100%)" },
            },
          },
        }}
      /> */}
    </Box>
  );
}
