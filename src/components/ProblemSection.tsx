export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
          Bạn đang gặp những khó khăn này?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 md:mb-0">
            <div 
              className="w-full h-[400px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              
              {/* Floating Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold">
                  "Đổi mới sáng tạo không phải là một lựa chọn, mà là một yêu cầu bắt buộc trong thời đại ngày nay"
                </p>
              </div>
            </div>
          </div>

          {/* Problems Container */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Khó khăn trong công việc</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Khó khăn trong việc tạo ra ý tưởng mới</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Bế tắc trong việc đổi mới sản phẩm</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Phương pháp sáng tạo hiện tại không hiệu quả</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Thách thức cá nhân</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Lo lắng không đủ sáng tạo</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Áp lực khi phải đổi mới</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Không biết bắt đầu từ đâu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const ProblemSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 animate-slideUp">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
//           Bạn đang gặp những khó khăn này?
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <ul className="space-y-3">
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Khó khăn trong việc tạo ra ý tưởng mới
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Bế tắc trong việc đổi mới sản phẩm
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Phương pháp sáng tạo hiện tại không hiệu quả
//               </li>
//             </ul>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <ul className="space-y-3">
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Lo lắng không đủ sáng tạo
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Áp lực khi phải đổi mới
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">•</span>
//                 Không biết bắt đầu từ đâu
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

