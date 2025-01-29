import { Button } from "@/components/ui/button";

export const PlanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
          3 bước đơn giản để bắt đầu
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Đăng ký khóa học</h3>
            <p className="opacity-90">
              Chọn khóa học phù hợp với nhu cầu của bạn
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Tham gia học tập</h3>
            <p className="opacity-90">
              Học các công cụ tư duy sáng tạo SIT
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Ứng dụng thực tế</h3>
            <p className="opacity-90">
              Áp dụng ngay vào công việc của bạn
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
            Tham gia ngay!
          </Button>
        </div>
      </div>
    </section>
  );
};