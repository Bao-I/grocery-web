import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  Phone,
  ChevronDown,
  Menu,
  Package,
  User,
  Heart,
  LogOut,
<<<<<<< HEAD
  Trophy,
} from "lucide-react";
import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";
import AuthForm from "./AuthForm";
import SearchBar from "./SearchBar";
import { CategoryDropdown } from "../pages/Home/CategoryDropdown";

const Header = () => {
  const { totalItems } = useCart();
  const [categories, setCategories] = useState([]);
=======
} from "lucide-react";
import { useCart } from "../context/CartContext";
import AuthForm from "./AuthForm";

const Header = () => {
  const { totalItems } = useCart();
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

<<<<<<< HEAD
  const mainDropdownRef = useRef(null);
  const stickyDropdownRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5175";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/category`);
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
=======
  // QUAN TRỌNG: Tạo 2 Ref riêng biệt cho 2 Header
  const mainDropdownRef = useRef(null);
  const stickyDropdownRef = useRef(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
=======
  // Sửa lỗi Click Outside: Kiểm tra cả 2 Ref
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideMain =
        mainDropdownRef.current &&
        mainDropdownRef.current.contains(event.target);
      const isClickInsideSticky =
        stickyDropdownRef.current &&
        stickyDropdownRef.current.contains(event.target);

      if (!isClickInsideMain && !isClickInsideSticky) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
<<<<<<< HEAD
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          resolve();
        }, 1000);
      }),
      {
        loading: "Đang đăng xuất...",
        success: "Đã đăng xuất thành công!",
        error: "Có lỗi xảy ra!",
      },
    );
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
=======
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsUserDropdownOpen(false);
    window.location.href = "/";
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
  };

  return (
    <>
      {/* --- HEADER CHÍNH (Ở TRÊN ĐẦU) --- */}
<<<<<<< HEAD
      <header className="z-50 flex flex-col w-full px-5 bg-transparent ">
        <div className="mx-auto max-w-300 w-full flex gap-2.5">
          <div className="relative flex justify-center p-4 md:w-60 shrink-0">
            {/* Logo Section */}
            <div className="relative w-34 md:w-40 h-22.5 shrink-0 overflow-visible">
              <Link
                to="/"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center"
=======
      <header className="hidden md:flex bg-[#f7f4ef] z-50 w-full flex-col border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] w-full flex gap-2.5">
          <div className="relative flex w-[250px] justify-center p-4 shrink-0">
            {/* Logo Section */}
            <div className="relative w-[260px] h-[90px] shrink-0 overflow-visible">
              <Link
                to="/"
                className="absolute inset-0 flex items-center justify-center z-10"
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              >
                <img
                  src="/logo.png"
                  alt="Logo"
<<<<<<< HEAD
                  className="object-cover h-full w-50"
                />
                <p className="absolute text-sm font-bold text-transparent md:text-base whitespace-nowrap bottom-2 bg-linear-to-r from-primary to-secondary bg-clip-text">
                  Trao niềm tin, nhận tài lộc
                </p>
=======
                  className="h-[210px] w-auto object-contain"
                />
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              </Link>
            </div>
            <img
              alt="Logo banner"
<<<<<<< HEAD
              className="absolute top-0 object-cover w-auto -translate-x-1/2 pointer-events-none left-1/2 h-45 max-w-max z-1"
=======
              className="pointer-events-none absolute top-0 left-1/2 h-[180px] w-auto max-w-max -translate-x-1/2 object-cover z-[1]"
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              src="https://honglam.vn/_next/static/media/bg-logo.953e94d2.png"
            />
          </div>

<<<<<<< HEAD
          <div className="flex flex-col justify-start flex-1 pt-2">
            <div className="flex items-center justify-end gap-6 py-4">
              <div className="flex items-center gap-1 font-bold text-primary">
                <Phone size={14} className="text-white fill-primary" />
=======
          <div className="flex-1 flex flex-col justify-start pt-2">
            <div className="flex items-center justify-end gap-6 py-4">
              <div className="text-[#9d0b0f] flex items-center gap-1 font-bold">
                <Phone size={14} className="fill-[#9d0b0f] text-white" />
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                <span className="text-sm">Giao hàng tận nơi: 19008122</span>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex items-center w-full gap-4">
=======
            <div className="flex w-full items-center gap-4">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              <SearchBar />
              <AuthAndCart
                totalItems={totalItems}
                user={user}
                onAuthClick={() => setIsAuthOpen(true)}
                isDropdownOpen={isUserDropdownOpen}
                setIsDropdownOpen={setIsUserDropdownOpen}
<<<<<<< HEAD
                dropdownRef={mainDropdownRef}
=======
                dropdownRef={mainDropdownRef} // Ref cho header chính
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                onLogout={handleLogout}
              />
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-100 transition-all duration-500 transform bg-[url('https://honglam.vn/_next/static/media/bg-body.9bfd1cb8.png')] ${isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center gap-6 px-4 py-2 mx-auto max-w-300">
          <div className="flex-1 w-full">
            <CategoryDropdown display categories={categories} />
          </div>
          <div className="hidden flex-2 lg:block">
            <SearchBar />
=======
      {/* --- STICKY HEADER (KHI CUỘN XUỐNG) --- */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-[100] transition-all duration-500 transform ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-2 flex items-center gap-6">
          <div className="bg-[#9d0b0f] text-white flex h-11 items-center gap-2 px-4 cursor-pointer">
            <Menu size={20} />
            <span className="font-bold uppercase text-xs">Danh mục</span>
          </div>
          <div className="flex-1">
            <SearchBar sticky />
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </div>
          <AuthAndCart
            totalItems={totalItems}
            user={user}
            onAuthClick={() => setIsAuthOpen(true)}
            isDropdownOpen={isUserDropdownOpen}
            setIsDropdownOpen={setIsUserDropdownOpen}
<<<<<<< HEAD
            dropdownRef={stickyDropdownRef}
=======
            dropdownRef={stickyDropdownRef} // Ref cho header sticky
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
            onLogout={handleLogout}
          />
        </div>
      </div>

      <AuthForm isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

<<<<<<< HEAD
=======
// --- Sub-components ---

const SearchBar = ({ sticky }) => (
  <form
    className={`${sticky ? "flex" : "hidden lg:flex"} flex-1 relative group`}
  >
    <div className="search border-[#faa519] flex flex-1 border px-[1px] py-[1px] bg-white rounded-sm overflow-hidden">
      <input
        type="text"
        placeholder="Từ khóa tìm kiếm..."
        className="flex-1 h-9 px-4 text-sm outline-none"
      />
      <button className="bg-[#faa519] text-[#9d0b0f] px-5 py-2 text-xs font-bold flex items-center gap-2">
        <Search size={14} strokeWidth={3} /> TÌM KIẾM
      </button>
    </div>
  </form>
);
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

const AuthAndCart = ({
  totalItems,
  user,
  onAuthClick,
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
  onLogout,
}) => (
<<<<<<< HEAD
  <div className="flex items-center justify-end gap-4 ml-auto">
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={user ? () => setIsDropdownOpen(!isDropdownOpen) : onAuthClick}
        className="flex items-center gap-2 cursor-pointer group text-primary"
      >
        <div className="border-secondary rounded-full border-2 p-1.5 group-hover:bg-secondary transition-all">
          <UserRound size={20} className="group-hover:text-white" />
        </div>
        <div className="hidden leading-tight md:block">
          {user ? (
            <>
              <span className="block text-sm font-bold">
                {user.full_name || user.fullName || "Tài khoản"}
              </span>
              <p className="flex items-center text-[11px] font-medium text-[#795e2f]">
=======
  <div className="flex items-center gap-4 shrink-0">
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={user ? () => setIsDropdownOpen(!isDropdownOpen) : onAuthClick}
        className="flex items-center gap-2 group text-[#9d0b0f] cursor-pointer"
      >
        <div className="border-[#faa519] rounded-full border-2 p-1.5 group-hover:bg-[#faa519] transition-all">
          <UserRound size={20} className="group-hover:text-white" />
        </div>
        <div className="leading-tight hidden lg:block">
          {user ? (
            <>
              <span className="text-[11px] font-bold block">
                {user.full_name || user.fullName || "Tài khoản"}
              </span>
              <p className="flex items-center text-[10px] font-medium text-[#795e2f]">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                Tài khoản{" "}
                <ChevronDown
                  size={10}
                  className={`ml-1 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </p>
            </>
          ) : (
            <>
<<<<<<< HEAD
              <span className="block text-sm font-bold">
                Đăng kí & Đăng nhập
              </span>
              <p className="flex items-center text-[11px] font-medium text-[#795e2f]">
=======
              <span className="text-[11px] font-bold block">
                Đăng kí & Đăng nhập
              </span>
              <p className="flex items-center text-[10px] font-medium text-[#795e2f]">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                Tài khoản <ChevronDown size={10} />
              </p>
            </>
          )}
        </div>
      </div>

      {/* DROPDOWN MENU */}
      {user && isDropdownOpen && (
<<<<<<< HEAD
        <div className="absolute right-0 w-56 py-2 mt-2 bg-[url('https://honglam.vn/_next/static/media/bg-body.9bfd1cb8.png')] border border-gray-100 rounded-lg shadow-xl z-110">
          <Link
            to="/account?tab=info"
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:text-[#ce450a] group"
          >
            <User
              size={18}
              className="text-primary group-hover:text-[#ce450a]"
            />{" "}
            Thông tin tài khoản
=======
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[110]">
          {/* QUAN TRỌNG: Thêm onClick={() => setIsDropdownOpen(false)} vào các Link */}
          <Link
            to="/account?tab=info"
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:bg-[#f7f4ef]"
          >
            <User size={18} className="text-[#9d0b0f]" /> Thông tin tài khoản
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </Link>
          <Link
            to="/account?tab=orders"
            onClick={() => setIsDropdownOpen(false)}
<<<<<<< HEAD
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:text-[#ce450a]  group"
          >
            <Package
              size={18}
              className="text-primary group-hover:text-[#ce450a]"
            />{" "}
            Quản lý đơn hàng
          </Link>
          <Link
            to="/lucky-wheel"
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#ce450a] animate-pulse group"
          >
            <Trophy
              size={18}
              className="text-[#faa519]"
            />{" "}
            Vòng quay may mắn
=======
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:bg-[#f7f4ef]"
          >
            <Package size={18} className="text-[#9d0b0f]" /> Quản lý đơn hàng
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </Link>
          <Link
            to="/account?tab=favorites"
            onClick={() => setIsDropdownOpen(false)}
<<<<<<< HEAD
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:text-[#ce450a] group"
          >
            <Heart
              size={18}
              className="text-primary group-hover:text-[#ce450a]"
            />{" "}
            Sản phẩm yêu thích
=======
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#5c4033] hover:bg-[#f7f4ef]"
          >
            <Heart size={18} className="text-[#9d0b0f]" /> Sản phẩm yêu thích
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </Link>
          <hr className="my-1 border-gray-100" />
          <button
            onClick={onLogout}
<<<<<<< HEAD
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-primary group hover:text-[#ce450a] font-semibold cursor-pointer"
          >
            <LogOut size={18} className="group-hover:text-[#ce450a]" /> Đăng
            xuất
=======
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#9d0b0f] hover:bg-[#f7f4ef] font-semibold"
          >
            <LogOut size={18} /> Đăng xuất
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </button>
        </div>
      )}
    </div>

<<<<<<< HEAD
    <Link to="/cart" className="relative group text-primary">
      <div className="border-secondary rounded-full border-2 p-1.5 group-hover:bg-secondary transition-all">
=======
    <Link to="/cart" className="relative group text-[#9d0b0f]">
      <div className="border-[#faa519] rounded-full border-2 p-1.5 group-hover:bg-[#faa519] transition-all">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
        <ShoppingCart size={20} className="group-hover:text-white" />
      </div>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
          {totalItems}
        </span>
      )}
    </Link>
  </div>
);

export default Header;
