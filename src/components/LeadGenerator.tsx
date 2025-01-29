import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

export const LeadGenerator = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Nhận ngay Ebook miễn phí!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Nhập email của bạn tại đây"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Tải Ebook Miễn Phí
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Chúng tôi cam kết bảo mật thông tin của bạn. Hãy bắt đầu hành trình đổi mới sáng tạo ngay hôm nay!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};