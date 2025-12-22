"use client"

import type React from "react"

import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from "@mui/material"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "Tôi cần chuẩn bị những giấy tờ gì khi mua bất động sản?",
    answer:
      "Bạn cần chuẩn bị: CMND/CCCD, Giấy đăng ký kết hôn (nếu có), Hợp đồng lao động hoặc giấy xác nhận thu nhập (nếu vay ngân hàng), Sổ hộ khẩu. Đội ngũ của chúng tôi sẽ hướng dẫn chi tiết và hỗ trợ chuẩn bị đầy đủ hồ sơ.",
  },
  {
    question: "Làm thế nào để biết BĐS có pháp lý rõ ràng?",
    answer:
      "Chúng tôi có đội ngũ 15+ luật sư chuyên ngành BĐS sẽ kiểm tra: Sổ hồng/Giấy chứng nhận quyền sử dụng đất, Giấy phép xây dựng, Hợp đồng mua bán gốc, Giấy tờ chủ quyền. Mọi thông tin được xác minh từ Sở Tài nguyên và Môi trường trước khi giao dịch.",
  },
  {
    question: "Tôi có thể vay ngân hàng bao nhiêu phần trăm?",
    answer:
      "Tùy theo loại BĐS và hồ sơ tài chính: Nhà ở thương mại: vay đến 70-80%, Nhà ở xã hội: vay đến 85%, Căn hộ condotel/officetel: vay đến 50%. Chúng tôi hợp tác với 50+ ngân hàng để tìm gói vay với lãi suất ưu đãi nhất cho bạn.",
  },
  {
    question: "Chi phí phát sinh khi mua BĐS là bao nhiêu?",
    answer:
      "Các chi phí phát sinh thường bao gồm: Phí sang tên sổ: 0.5% giá trị BĐS, Phí công chứng: 0.3-0.5%, Thuế trước bạ: 2%, Phí dịch vụ môi giới: 1-2% (người bán trả). Chúng tôi sẽ báo giá chi tiết và minh bạch 100% trước khi giao dịch.",
  },
  {
    question: "Thời gian hoàn tất thủ tục mua BĐS mất bao lâu?",
    answer:
      "Quy trình tiêu chuẩn của chúng tôi: Thẩm định pháp lý: 2-5 ngày, Ký hợp đồng mua bán: 1-2 ngày, Nộp hồ sơ sang tên: 7-15 ngày (tùy địa phương). Trung bình tổng thời gian là 2-4 tuần, nhanh hơn 50% so với quy trình thông thường.",
  },
  {
    question: "Tôi có thể hủy giao dịch và nhận lại tiền cọc không?",
    answer:
      "Theo hợp đồng đặt cọc: Nếu phát hiện sai phạm pháp lý: Hoàn 100% tiền cọc, Nếu người bán vi phạm hợp đồng: Nhận lại tiền cọc + phạt vi phạm, Nếu người mua đơn phương hủy: Mất tiền cọc theo thỏa thuận. Chúng tôi cam kết bảo vệ quyền lợi người mua tối đa.",
  },
  {
    question: "Có dịch vụ hỗ trợ sau khi mua không?",
    answer:
      "Có! Chúng tôi cung cấp: Tư vấn thiết kế nội thất, Giới thiệu đội thi công uy tín, Hỗ trợ cho thuê/quản lý BĐS, Tư vấn đầu tư BĐS lâu dài, Chăm sóc khách hàng 24/7. Bạn sẽ có chuyên viên riêng để hỗ trợ mọi vấn đề phát sinh.",
  },
  {
    question: "Làm sao để đầu tư BĐS sinh lời tốt nhất?",
    answer:
      "Chúng tôi tư vấn dựa trên: Phân tích thị trường và xu hướng giá, Đánh giá tiềm năng tăng giá khu vực, Tính toán lợi nhuận cho thuê, Đề xuất thời điểm mua/bán tối ưu. Đội ngũ phân tích của chúng tôi có hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư BĐS.",
  },
]

export function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>("panel0")

  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqsAnimation = useScrollAnimation({ threshold: 0.05 })
  const contactAnimation = useScrollAnimation({ threshold: 0.3 })

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <section className="py-20 bg-white">
      <Container maxWidth="lg">
        <div
          ref={titleAnimation.ref as any}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Box className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </Box>
          <Typography variant="overline" className="text-primary font-semibold tracking-wider mb-2 block">
            CÂU HỎI THƯỜNG GẶP
          </Typography>
          <Typography variant="h3" className="font-bold mb-4">
            Giải Đáp <span className="text-primary">Mọi Thắc Mắc</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="max-w-2xl mx-auto">
            Tổng hợp các câu hỏi phổ biến nhất về quy trình mua bán và đầu tư bất động sản
          </Typography>
        </div>

        <Box className="max-w-4xl mx-auto" ref={faqsAnimation.ref as any}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className={`mb-4 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 ${
                faqsAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{
                transitionDelay: faqsAnimation.isVisible ? `${index * 80}ms` : "0ms",
              }}
              elevation={0}
              sx={{
                "&:before": { display: "none" },
                borderRadius: "16px !important",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </Box>
                }
                className="px-6 py-4"
                sx={{
                  "& .MuiAccordionSummary-content": {
                    margin: "12px 0",
                  },
                }}
              >
                <Typography variant="h6" className="font-semibold text-neutral-800">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="px-6 pb-6 pt-0">
                <Typography variant="body1" color="text.secondary" className="leading-relaxed">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box
          ref={contactAnimation.ref as any}
          className={`text-center mt-12 transition-all duration-1000 ${
            contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Typography variant="body1" color="text.secondary" className="mb-4">
            Vẫn còn thắc mắc? Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn
          </Typography>
          <Box className="flex flex-wrap gap-4 justify-center">
            <a href="tel:1900123456" className="no-underline">
              <Box className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                <span className="text-xl">📞</span>
                <Typography variant="body1" className="font-semibold">
                  Hotline: 1900 123 456
                </Typography>
              </Box>
            </a>
            <a href="mailto:support@realestate.vn" className="no-underline">
              <Box className="flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-800 rounded-xl hover:bg-neutral-200 transition-colors">
                <span className="text-xl">✉️</span>
                <Typography variant="body1" className="font-semibold">
                  Email: support@realestate.vn
                </Typography>
              </Box>
            </a>
          </Box>
        </Box>
      </Container>
    </section>
  )
}
