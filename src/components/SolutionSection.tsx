export const SolutionSection = () => {
  const solutions = [
    {
      title: "Phương pháp đã kiểm chứng",
      description: "Được áp dụng thành công bởi hàng nghìn doanh nghiệp trên toàn cầu",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80"
    },
    {
      title: "Dễ dàng áp dụng",
      description: "Phương pháp có cấu trúc rõ ràng, dễ học và áp dụng ngay",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80"
    },
    {
      title: "Kết hợp AI",
      description: "Tích hợp công nghệ AI để tối ưu hóa quá trình sáng tạo",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 animate-slideUp">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">
            Giải pháp SIT - Systematic Inventive Thinking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Phương pháp sáng tạo có hệ thống giúp bạn và doanh nghiệp tạo ra những đột phá mới
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${solution.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>

              {/* Footer Section */}
              <div className="px-6 pb-6">
                <button className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300 flex items-center gap-2">
                  Tìm hiểu thêm
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-blue-50 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Sẵn sàng để bắt đầu hành trình sáng tạo của bạn?
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Bắt đầu ngay hôm nay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const SolutionSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 animate-slideUp">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
//           Giải pháp SIT - Systematic Inventive Thinking
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Phương pháp đã kiểm chứng</h3>
//             <p className="text-gray-600">
//               Được áp dụng thành công bởi hàng nghìn doanh nghiệp trên toàn cầu
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Dễ dàng áp dụng</h3>
//             <p className="text-gray-600">
//               Phương pháp có cấu trúc rõ ràng, dễ học và áp dụng ngay
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Kết hợp AI</h3>
//             <p className="text-gray-600">
//               Tích hợp công nghệ AI để tối ưu hóa quá trình sáng tạo
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };