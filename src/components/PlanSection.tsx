import { Button } from "@/components/ui/button";

export const PlanSection = () => {
  const steps = [
    {
      number: "1",
      title: "Đăng ký khóa học",
      description: "Chọn khóa học phù hợp với nhu cầu của bạn",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Tham gia học tập",
      description: "Học các công cụ tư duy sáng tạo SIT",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Ứng dụng thực tế",
      description: "Áp dụng ngay vào công việc của bạn",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 animate-slideUp">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">
            3 bước đơn giản để bắt đầu
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hành trình của bạn bắt đầu với những bước đơn giản nhưng hiệu quả
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${step.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
          >
            Tham gia ngay!
          </Button>
        </div>
      </div>
    </section>
  );
};
// import { Button } from "@/components/ui/button";

// export const PlanSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-900 text-white">
//       <div className="max-w-4xl mx-auto px-4 animate-slideUp">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-inter">
//           3 bước đơn giản để bắt đầu
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
//               1
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Đăng ký khóa học</h3>
//             <p className="opacity-90">
//               Chọn khóa học phù hợp với nhu cầu của bạn
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
//               2
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Tham gia học tập</h3>
//             <p className="opacity-90">
//               Học các công cụ tư duy sáng tạo SIT
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 text-2xl font-bold">
//               3
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Ứng dụng thực tế</h3>
//             <p className="opacity-90">
//               Áp dụng ngay vào công việc của bạn
//             </p>
//           </div>
//         </div>
//         <div className="text-center mt-12">
//           <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
//             Tham gia ngay!
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };