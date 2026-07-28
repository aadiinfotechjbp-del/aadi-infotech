import { FiMenu, FiPhone } from 'react-icons/fi';
import { AiFillHome, AiOutlineSolution, AiOutlineShop, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo placeholder */}
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                A/i
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-10 hidden md:flex">
              <nav className="space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Features</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Sizes</a>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Contact</a>
              </nav>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Phone number visible in header on desktop */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 md:hidden">
              <FiPhone className="h-4 w-4" />
              <span>0761-4046744</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <FiPhone className="h-4 w-4" />
              <span>0761-4046744</span>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <FiMenu className="h-5 w-5 text-gray-600 hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
