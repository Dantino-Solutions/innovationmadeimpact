export const SuccessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
          Kết quả bạn sẽ đạt được
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Đối với cá nhân</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Tự tin tạo ra các ý tưởng sáng tạo
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Nâng cao kỹ năng tư duy sáng tạo
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Giải quyết vấn đề hiệu quả
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Đối với doanh nghiệp</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Tăng cường khả năng đổi mới sản phẩm
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Xây dựng chiến lược marketing hiệu quả
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Tích hợp AI vào quy trình sáng tạo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};