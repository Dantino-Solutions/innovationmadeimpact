export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
          Bạn đang gặp những khó khăn này?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vấn đề bên ngoài</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Khó khăn trong việc tạo ra ý tưởng mới
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Bế tắc trong việc đổi mới sản phẩm
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Phương pháp sáng tạo hiện tại không hiệu quả
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vấn đề bên trong</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Lo lắng không đủ sáng tạo
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Áp lực khi phải đổi mới
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Không biết bắt đầu từ đâu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};