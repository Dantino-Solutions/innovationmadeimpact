export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p>Email: contact@sit.com</p>
            <p>Phone: (84) 123-456-789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">YouTube</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Địa chỉ</h3>
            <p>123 Innovation Street</p>
            <p>Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>&copy; 2024 SIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};