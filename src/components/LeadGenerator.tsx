import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import Image from "next/image";

export const LeadGenerator = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cảm ơn bạn đã đăng ký!",
      description: "Ebook sẽ được gửi đến email của bạn trong vài phút.",
    });
    setEmail("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80"
                alt="Ebook Preview"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Miễn phí
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">
              Tải ngay Ebook miễn phí: Bí quyết đổi mới sáng tạo với phương pháp SIT
            </h2>
            <p className="text-gray-600">
              Khám phá cách áp dụng phương pháp SIT để tạo ra sự khác biệt, gia tăng doanh thu, và thúc đẩy đổi mới sáng tạo cho sản phẩm và doanh nghiệp của bạn.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                5 công cụ tư duy sáng tạo của SIT
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Các ví dụ thực tế giúp bạn áp dụng ngay vào công việc
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Hướng dẫn từng bước để tạo ra ý tưởng đột phá
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80"
                alt="Ebook Icon"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Nhận ngay Ebook miễn phí!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Nhập email của bạn tại đây"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300"
              >
                Tải Ebook Miễn Phí
              </Button>
              <div className="flex items-center gap-2 justify-center mt-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm text-gray-500">
                  Chúng tôi cam kết bảo mật thông tin của bạn
                </p>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Hãy bắt đầu hành trình đổi mới sáng tạo ngay hôm nay!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};