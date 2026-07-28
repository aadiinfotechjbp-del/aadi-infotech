export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Aadi Infotech</h3>
            <p className="text-gray-400">Steel Rack Trusted Brand</p>
            <div className="mt-4 flex items-center space-x-3">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                IN
              </div>
              <span className="text-sm">Make in India</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400 hover:text-white transition-colors">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Sizes</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="flex items-start space-x-2">
                  <span className="flex-shrink-0">📍</span>
                  <span>213, Mohit Chamber, Chanchalabai College, 1514, Wright Town, Jabalpur - 482001 (M.P.)</span>
                </span>
              </li>
              <li>
                <span className="flex items-start space-x-2">
                  <span className="flex-shrink-0">📞</span>
                  <span>0761-4046744</span>
                </span>
              </li>
              <li>
                <span className="flex items-start space-x-2">
                  <span className="flex-shrink-0">📱</span>
                  <span>+91 94254 68444</span>
                </span>
              </li>
              <li>
                <span className="flex items-start space-x-2">
                  <span className="flex-shrink-0">✉️</span>
                  <span>aadiinfotechjbp@gmail.com</span>
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white opacity-70 transition-opacity">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="hover:text-white opacity-70 transition-opacity">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="hover:text-white opacity-70 transition-opacity">
                <span className="text-xl">📸</span>
              </a>
              <a href="#" className="hover:text-white opacity-70 transition-opacity">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Aadi Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
