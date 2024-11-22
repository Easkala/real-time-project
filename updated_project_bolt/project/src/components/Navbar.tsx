import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Settings, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Settings className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Srinivasa Hardware</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  className="w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search products, orders, customers..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button className="ml-6 p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-500" />
            </button>

            <button className="ml-3 p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-500" />
            </button>

            <button className="ml-3 md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}