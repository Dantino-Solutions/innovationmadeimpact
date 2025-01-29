export const SuccessSection = () => {
  const successItems = [
    {
      title: "Đối với cá nhân",
      benefits: [
        {
          text: "Tự tin tạo ra các ý tưởng sáng tạo",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80"
        },
        {
          text: "Nâng cao kỹ năng tư duy sáng tạo",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80"
        },
        {
          text: "Giải quyết vấn đề hiệu quả",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80"
        }
      ]
    },
    {
      title: "Đối với doanh nghiệp",
      benefits: [
        {
          text: "Tăng cường khả năng đổi mới sản phẩm",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80"
        },
        {
          text: "Xây dựng chiến lược marketing hiệu quả",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"
        },
        {
          text: "Tích hợp AI vào quy trình sáng tạo",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 animate-slideUp">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">
            Kết quả bạn sẽ đạt được
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Phương pháp SIT giúp bạn và doanh nghiệp đạt được những kết quả đột phá
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {successItems.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                {category.title}
              </h3>
              
              {category.benefits.map((benefit, benefitIdx) => (
                <div 
                  key={benefitIdx}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-1/3 h-32 relative overflow-hidden">
                      <div
                        className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500"
                        style={{
                          backgroundImage: `url('${benefit.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="w-2/3 p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <p className="text-gray-700 font-medium">{benefit.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Bắt đầu hành trình của bạn
          </button>
        </div>
      </div>
    </section>
  );
};

// export const SuccessSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 animate-slideUp">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
//           Kết quả bạn sẽ đạt được
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Đối với cá nhân</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Tự tin tạo ra các ý tưởng sáng tạo
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Nâng cao kỹ năng tư duy sáng tạo
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Giải quyết vấn đề hiệu quả
//               </li>
//             </ul>
//           </div>
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Đối với doanh nghiệp</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Tăng cường khả năng đổi mới sản phẩm
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Xây dựng chiến lược marketing hiệu quả
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-green-500">✓</span>
//                 Tích hợp AI vào quy trình sáng tạo
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };