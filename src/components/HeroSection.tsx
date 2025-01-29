import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-900 text-white p-4">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
          Khám phá bí quyết đổi mới sáng tạo đột phá với phương pháp SIT!
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Bạn là một cá nhân, nhà lãnh đạo, hay doanh nghiệp đang tìm kiếm cách tạo ra những ý tưởng sáng tạo, khác biệt và hiệu quả?
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
          Đăng ký ngay hôm nay!
        </Button>
      </div>
    </section>
  );
};