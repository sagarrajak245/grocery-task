// sagar dash board created here
import { Bell, ChevronDown, Heart, Home, Menu, MessageCircle, Search, Settings, ShoppingBag, Star } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GroceryDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 bg-white p-6 shadow-md lg:block">
        <nav className="space-y-8">
          <SidebarLink href="#" icon={<Home />} text="Dashboard" active />
          <SidebarLink href="#" icon={<Star />} text="Categories" />
          <SidebarLink href="#" icon={<Heart />} text="Favourite" />
          <SidebarLink href="#" icon={<ShoppingBag />} text="Orders" />
          <SidebarLink href="#" icon={<MessageCircle />} text="Messages" />
          <SidebarLink href="#" icon={<Star />} text="Top Deals" />
          <SidebarLink href="#" icon={<Settings />} text="Settings" />
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
            <h1 className="text-xl font-semibold">Grocery Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <form className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring">
              <Bell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </button>
            <div className="relative">
              <button onClick={toggleProfileDropdown} className="flex items-center space-x-2 focus:outline-none focus:ring">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <span>sagar rajak</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main content area */} 
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Welcome back, sagar!</h2>
            <p className="text-gray-600">Here&apos;s what&apos;s fresh in our store today.</p>
          </div>

          {/* Categories */}
          <section className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
              {["Fruits", "Bread", "Vegetable", "Fish", "Meat", "Drinks", "Sea Food", "Ice cream"].map((category, index) => (
                <div key={`${category}-${index}`} className="rounded-lg bg-white p-4 text-center shadow">
                  <img
                    src={`/placeholder.svg?height=50&width=50`}
                    alt={category}
                    className="mx-auto mb-2 h-[50px] w-[50px]"   
                  />
                  <p className="text-sm">{category}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Products */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Popular Products</h3>
              <Link href="#" className="text-green-600 hover:underline">View More</Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {["Strawberry", "Cabbage", "Broccoli", "Orange", "Fresh Apple"].map((product) => (
                <div key={product} className="rounded-lg bg-white shadow">
                  <img
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={product}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold">{product}</h4>
                    <p className="mb-2 text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                    <p className="mb-4 font-semibold text-green-600">$15.10 /kg</p>
                    <button className="w-full rounded-md bg-green-600 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discount Shop */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Discount Shop</h3>
              <Link href="#" className="text-green-600 hover:underline">View More</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[35, 20, 20, 10].map((discount) => (
                <div key={discount} className="rounded-lg bg-green-600 p-6 text-white">
                  <p className="mb-2 text-2xl font-bold">{discount}% Discount</p>
                  <p className="mb-4">Order any food from app and get the discount</p>
                  <button className="w-full rounded-md bg-white py-2 text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600">
                    Shop Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Last Order Sidebar */}
      <aside className="hidden w-64 bg-white p-6 shadow-md xl:block">
        <h2 className="mb-6 text-xl font-semibold">Last Order</h2>
        <div className="space-y-4">
          {["Red Saffron", "Fresh Apple", "Big Fish"].map((item) => (
            <div key={item} className="flex items-center space-x-4">
              <img
                src={`/placeholder.svg?height=50&width=50`}
                alt={item}
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-gray-500">Weight: 500 gm</p>
              </div>
              <p className="ml-auto font-semibold text-green-600">$150</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 lg:hidden" onClick={toggleMobileMenu}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-6 shadow-md">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-8">
              <SidebarLink href="#" icon={<Home />} text="Dashboard" active />
              <SidebarLink href="#" icon={<Star />} text="Categories" />
              <SidebarLink href="#" icon={<Heart />} text="Favourite" />
              <SidebarLink href="#" icon={<ShoppingBag />} text="Orders" />
              <SidebarLink href="#" icon={<MessageCircle />} text="Messages" />
              <SidebarLink href="#" icon={<Star />} text="Top Deals" />
              <SidebarLink href="#" icon={<Settings />} text="Settings" />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

const SidebarLink = ({ href, icon, text, active = false }) => (
  <Link href={href} className={`flex items-center space-x-3 rounded-lg px-3 py-2 ${active ? 'bg-green-100 text-green-900' : 'text-gray-600 hover:bg-green-100 hover:text-green-900'}`}>
    {icon}
    <span>{text}</span>
  </Link>
);

SidebarLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SidebarLink.defaultProps = {
  active: false,
};
export default GroceryDashboard;
