<<<<<<< HEAD
import React, { useState, useMemo, useEffect } from "react";
import {
  Minus,
  Plus,
  X,
  ShoppingBasket,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowUpDown,
} from "lucide-react";
=======
import React from "react";
import { Minus, Plus, X, ShoppingBasket } from "lucide-react";
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

<<<<<<< HEAD
  // --- STATES CHO TÌM KIẾM, LỌC & PHÂN TRANG ---
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default"); // default, price-asc, price-desc
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Số sản phẩm mỗi trang

  // --- LOGIC LỌC & SẮP XẾP ---
  const filteredItems = useMemo(() => {
    let result = cartItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [cartItems, searchTerm, sortOrder]);

  // --- LOGIC PHÂN TRANG ---
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage]);

  // Reset về trang 1 khi tìm kiếm hoặc sắp xếp
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder]);

  // Nếu giỏ hàng gốc trống
  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-20 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <ShoppingBasket size={100} className="text-[#9d0b0f] opacity-20" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-[#3e2714]">
          Giỏ hàng của bạn đang trống
        </h2>
        <p className="mb-8 text-[#88694f] italic">
=======
  // Nếu giỏ hàng trống
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <ShoppingBasket size={100} className="text-gray-200" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Giỏ hàng của bạn đang trống
        </h2>
        <p className="text-gray-500 mb-8">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          Hãy chọn thêm những thực phẩm tươi ngon cho gia đình nhé!
        </p>
        <Link
          to="/"
<<<<<<< HEAD
          className="bg-[#f39200] text-white text-[15px] px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg inline-block"
        >
          Mua sắm ngay
=======
          className="bg-[#f39200] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
        >
          Đi mua sắm ngay
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
        </Link>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="px-4 pt-4 pb-20 mx-auto max-w-[1200px] animate-fadeIn">
      <h1 className="mb-8 text-3xl font-black text-[#3e2714] uppercase tracking-tighter border-b-2 border-[#9d0b0f] pb-4">
        Giỏ hàng <span className="text-[#9d0b0f]">({cartItems.length})</span>
      </h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* CỘT TRÁI: DANH SÁCH & BỘ LỌC */}
        <div className="flex-[2] space-y-6">
          {/* THANH CÔNG CỤ (TÌM KIẾM & LỌC) */}
          <div className="flex flex-col md:flex-row gap-4 bg-[#f7f4ef] p-4 rounded-[24px] border border-stone-200 shadow-sm">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#88694f]"
                size={18}
              />
              <input
                type="text"
                placeholder="Tìm sản phẩm trong giỏ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-white rounded-xl outline-none focus:ring-2 focus:ring-[#f39200] font-bold text-sm"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <ArrowUpDown
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#88694f]"
                  size={16}
                />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-white rounded-xl border-none outline-none font-bold text-xs appearance-none cursor-pointer"
                >
                  <option value="default">Sắp xếp: Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                </select>
              </div>
            </div>
          </div>

          {/* DANH SÁCH SẢN PHẨM */}
          <div className="space-y-4">
            {currentItems.length > 0 ? (
              currentItems.map((item) => {
                const cartImage =
                  item.image || (item.images && item.images[0]) || "";
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-gray-100 shadow-sm rounded-3xl transition-all hover:shadow-md animate-fadeIn"
                  >
                    <img
                      src={cartImage}
                      alt={item.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl border bg-[#f7f4ef] p-2"
                    />

                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-[#3e2714] line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-[11px] md:text-xs text-[#88694f] font-medium italic">
                        {item.label || "Phân loại mặc định"}
                      </p>
                      <p className="mt-1 font-black text-[#9d0b0f]">
                        {item.price.toLocaleString()}đ
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center bg-[#f7f4ef] rounded-xl overflow-hidden border border-stone-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 px-3 text-[#88694f] hover:bg-stone-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 font-black text-center text-[#3e2714]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 px-3 text-[#88694f] hover:bg-stone-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-base md:text-lg font-black text-[#3e2714]">
                        {(item.price * item.quantity).toLocaleString()}đ
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-[10px] font-black text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest"
                      >
                        <X size={14} /> Xóa
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-10 text-center bg-white rounded-3xl border-2 border-dashed border-stone-200">
                <p className="text-[#88694f] italic font-medium">
                  Không tìm thấy sản phẩm nào phù hợp.
                </p>
              </div>
            )}
          </div>

          {/* PHÂN TRANG */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="p-3 rounded-2xl bg-white border border-stone-200 text-[#9d0b0f] disabled:opacity-20 hover:bg-[#f7f4ef] transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-sm font-black text-[#3e2714]">
                Trang {currentPage} / {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="p-3 rounded-2xl bg-white border border-stone-200 text-[#9d0b0f] disabled:opacity-20 hover:bg-[#f7f4ef] transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* CỘT PHẢI: TỔNG KẾT ĐƠN HÀNG (Giữ nguyên giao diện đẹp) */}
        <div className="flex-1">
          <div className="sticky p-8 bg-white border-2 border-[#9d0b0f]/5 shadow-2xl rounded-[40px] top-24">
            <h3 className="text-xl font-black mb-6 text-[#9d0b0f] uppercase tracking-tighter flex items-center gap-2">
              <ShoppingBasket size={24} /> Tổng kết đơn hàng
            </h3>

            <div className="pb-6 space-y-4 text-sm border-b border-dashed border-stone-200">
              <div className="flex justify-between text-[#88694f] font-bold">
                <span>Tạm tính ({cartItems.length} món):</span>
                <span className="text-[#3e2714]">
                  {totalPrice.toLocaleString()}đ
                </span>
              </div>
              <div className="flex justify-between text-[#88694f] font-bold">
                <span>Phí giao hàng:</span>
                <span className="text-green-600 uppercase text-[10px] font-black bg-green-50 px-2 py-1 rounded-md">
=======
    <div className="mx-auto max-w-[1200px] px-4 pt-4 pb-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Giỏ hàng ({cartItems.length})
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Danh sách sản phẩm */}
        <div className="flex-[2] space-y-4">
          {cartItems.map((item) => {
            // LOGIC SỬA LỖI ẢNH: Kiểm tra item.image hoặc lấy ảnh đầu tiên trong mảng images
            const cartImage =
              item.image || (item.images && item.images[0]) || "";

            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 animate-fadeIn"
              >
                {/* HIỂN THỊ ẢNH ĐÃ FIX */}
                <img
                  src={cartImage}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-lg border bg-[#f7f4ef]"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#88694f] italic">
                    {item.label || "Phân loại mặc định"}
                  </p>
                  <p className="text-[#9d0b0f] font-bold mt-1">
                    {item.price.toLocaleString()}đ
                  </p>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 px-3 text-gray-400 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 px-3 text-gray-400 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-black text-[#9d0b0f] text-lg">
                    {(item.price * item.quantity).toLocaleString()}đ
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-xs flex items-center gap-1 hover:text-red-600 transition-colors font-bold"
                  >
                    <X size={14} /> Xóa
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tổng kết đơn hàng */}
        <div className="flex-1">
          <div className="bg-white p-8 rounded-[32px] shadow-lg border border-[#faa519]/20 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-[#3e2714] uppercase tracking-tighter">
              Tổng kết đơn hàng
            </h3>
            <div className="space-y-4 text-sm pb-6 border-b border-dashed">
              <div className="flex justify-between text-gray-500">
                <span>Tạm tính:</span>
                <span className="font-bold text-gray-800">
                  {totalPrice.toLocaleString()}đ
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Phí giao hàng:</span>
                <span className="text-green-600 font-bold uppercase text-[10px]">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                  Miễn phí
                </span>
              </div>
            </div>
<<<<<<< HEAD

            <div className="flex justify-between py-6">
              <span className="font-black text-lg text-[#3e2714] uppercase">
                Tổng cộng:
              </span>
              <span className="text-3xl font-black text-[#9d0b0f] tracking-tighter">
                {totalPrice.toLocaleString()}đ
              </span>
            </div>

            <Link
              to="/checkout"
              className="block py-4 mb-4 text-lg font-black text-center text-white transition-all shadow-lg bg-[#9d0b0f] rounded-2xl hover:bg-black active:scale-95 uppercase tracking-widest"
            >
              Tiến hành thanh toán
            </Link>

            <Link
              to="/"
              className="block text-center text-[#88694f] font-bold text-sm hover:text-[#9d0b0f] transition-colors"
=======
            <div className="flex justify-between py-6">
              <span className="font-bold text-lg text-[#3e2714]">
                TỔNG CỘNG:
              </span>
              <span className="font-black text-2xl text-[#9d0b0f]">
                {totalPrice.toLocaleString()}đ
              </span>
            </div>
            <Link
              to="/checkout"
              className="block text-center bg-[#9d0b0f] text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-800 mb-4 transition-all active:scale-95 shadow-lg"
            >
              TIẾN HÀNH THANH TOÁN
            </Link>
            <Link
              to="/"
              className="block text-center text-[#88694f] font-bold text-sm hover:underline"
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
            >
              ← Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
