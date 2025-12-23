"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const text = "PHUOCONG ESTATE";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadeOut 0.8s ease-out forwards",
        animationDelay: "2s",
        "@keyframes fadeOut": {
          from: {
            opacity: 1,
            visibility: "visible",
          },
          to: {
            opacity: 0,
            visibility: "hidden",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Left text section */}
        <Box sx={{ display: "flex", gap: "4px" }}>
          {text
            .slice(0, 9)
            .split("")
            .map((char, index) => (
              <Box
                key={`left-${index}`}
                sx={{
                  fontSize: "72px",
                  fontWeight: 300,
                  color: "#ffffff",
                  letterSpacing: "4px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  animation:
                    "slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                  animationDelay: `${index * 0.12}s`,
                  "@keyframes slideInLeft": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(-30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                {char}
              </Box>
            ))}
        </Box>

        {/* Animated white rectangle */}

        {/* Right text section */}
        <Box sx={{ display: "flex", gap: "4px" }}>
          {text
            .slice(10)
            .split("")
            .map((char, index) => (
              <Box
                key={`right-${index}`}
                sx={{
                  fontSize: "72px",
                  fontWeight: 300,
                  color: "#ffffff",
                  letterSpacing: "4px",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  animation:
                    "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                  animationDelay: `${0.36 + index * 0.12}s`,
                  "@keyframes slideInRight": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                {char}
              </Box>
            ))}
        </Box>
      </Box>

      {/* Loading indicator line */}
      <Box
        sx={{
          position: "absolute",
          bottom: "60px",
          width: "200px",
          height: "2px",
          background: "#ffffff",
          opacity: 0.3,
          borderRadius: "1px",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "#ffffff",
            animation: "loadingLine 1.5s ease-in-out infinite",
            "@keyframes loadingLine": {
              "0%": {
                left: "-100%",
              },
              "50%": {
                left: "100%",
              },
              "100%": {
                left: "100%",
              },
            },
          },
        }}
      />
    </Box>
  );
}
