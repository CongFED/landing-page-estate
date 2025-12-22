"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <div ref={ref}>{count.toLocaleString()}</div>
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-up">
            <div className="flex justify-center mb-4">
              <Building2 size={40} className="opacity-90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUpAnimation end={500} />+
            </div>
            <p className="text-sm md:text-base opacity-90">Dự Án Thành Công</p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-center mb-4">
              <Users size={40} className="opacity-90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUpAnimation end={2000} />+
            </div>
            <p className="text-sm md:text-base opacity-90">Khách Hàng Tin Tưởng</p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center mb-4">
              <Award size={40} className="opacity-90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUpAnimation end={15} />+
            </div>
            <p className="text-sm md:text-base opacity-90">Giải Thưởng Uy Tín</p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center mb-4">
              <TrendingUp size={40} className="opacity-90" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUpAnimation end={98} />%
            </div>
            <p className="text-sm md:text-base opacity-90">Tỷ Lệ Hài Lòng</p>
          </div>
        </div>
      </div>
    </section>
  )
}
