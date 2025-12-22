import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/public/logoWhite.png";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <Image
                src={logo}
                alt="Banner"
                width={100}
                height={600}
                priority
              />
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Đối tác tin cậy trong hành trình tìm kiếm không gian sống hoàn hảo
              của bạn.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Về Chúng Tôi</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Đội Ngũ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tin Tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tuyển Dụng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mua Bán
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cho Thuê
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Định Giá
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tư Vấn Pháp Lý
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Số 123 Đường ABC, Quận 1</li>
              <li>TP. Hồ Chí Minh, Việt Nam</li>
              <li className="pt-2">
                <a
                  href="tel:1900xxxx"
                  className="hover:text-primary transition-colors"
                >
                  Hotline: 1900 xxxx
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@estate.vn"
                  className="hover:text-primary transition-colors"
                >
                  Email: contact@estate.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm opacity-80">
          <p>&copy; 2025 Estate. Bản quyền thuộc về Estate Property Limited.</p>
        </div>
      </div>
    </footer>
  );
}
