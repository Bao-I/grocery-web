import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useParams, Link, useSearchParams } from "react-router-dom";
=======
import { useParams, Link } from "react-router-dom";
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
import {
  ChevronRight,
  Filter,
  ChevronDown,
  ShoppingBag,
  RefreshCcw,
} from "lucide-react";
import { useCart } from "../context/CartContext";

<<<<<<< HEAD
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { addToCart } = useCart();
  const [isCatOpen, setIsCatOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5175";

  const [filters, setFilters] = useState({
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "newest",
  });

  // Sync local filters with URL when URL changes
  useEffect(() => {
    setFilters({
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      sort: searchParams.get("sort") || "newest",
    });
  }, [searchParams]);

  const getSlug = (name) => {
    return (name || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/([^a-z0-9\s-]|(?<=\s)\s)/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/category`);
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const found = categories.find((cat) => getSlug(cat.name) === slug);
      setCurrentCategory(found);
    }
  }, [slug, categories]);

  const fetchData = async () => {
    if (!currentCategory) return;
    setLoading(true);
    try {
      const params = new URLSearchParams(searchParams);
      params.append("categoryId", currentCategory._id);

      const response = await fetch(
        `${API_URL}/api/products/search?${params.toString()}`,
      );
=======
const sidebarItems = [
  { name: "Giải pháp quà tặng", slug: "giai-phap-qua-tang" },
  { name: "Ô mai (xí muội)", slug: "o-mai" },
  { name: "Mứt Tết", slug: "mut-tet" },
  { name: "Bánh - Kẹo", slug: "banh-keo" },
  { name: "Chè, Trà đặc sản", slug: "che-tra" },
  { name: "Sản phẩm khác", slug: "san-pham-khac" },
  { name: "Thức uống", slug: "thuc-uong" },
];

const CategoryPage = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [isCatOpen, setIsCatOpen] = useState(true);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5175/api/products");
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    fetchData();
    window.scrollTo(0, 0);
  }, [currentCategory, searchParams]); // Trigger on category change or URL change

  const handleFilterChange = (name, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(name, value);
    else newParams.delete(name);
    setSearchParams(newParams);
  };

  const catName = currentCategory ? currentCategory.name : "Sản phẩm";

  return (
    <div className="bg-[url('https://honglam.vn/_next/static/media/bg-body.9bfd1cb8.png')] min-h-screen text-[#3e2714]">
      {/* 1. BREADCRUMB */}
      <div className="py-3 ">
        <div className="mx-auto max-w-300 px-4 flex items-center gap-2 text-xs font-bold text-[#88694f] tracking-wider">
          <Link to="/" className="hover:text-primary">
=======
    fetchProducts();
    window.scrollTo(0, 0);
  }, [slug]);

  const getCatName = (s) => {
    const item = sidebarItems.find((i) => i.slug === s);
    return item ? item.name : "Sản phẩm";
  };

  const filteredProducts = products.filter((p) => p.category === slug);

  return (
    <div className="bg-[#f7f4ef] min-h-screen font-sans text-[#3e2714]">
      {/* 1. BREADCRUMB */}
      <div className="bg-[#ede4d4] py-3 border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 flex items-center gap-2 text-[12px] font-bold text-[#88694f] uppercase tracking-wider">
          <Link to="/" className="hover:text-[#9d0b0f]">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <span>Sản phẩm</span>
          <ChevronRight size={14} />
<<<<<<< HEAD
          <span className="text-primary">{catName}</span>
=======
          <span className="text-[#9d0b0f]">{getCatName(slug)}</span>
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
<<<<<<< HEAD
      <div className="flex flex-col gap-6 px-4 py-8 mx-auto max-w-300 md:flex-row">
        <aside className="w-full md:w-65 shrink-0">
          <div className="sticky overflow-hidden bg-white border border-gray-200 rounded shadow-sm top-24">
            <div className="flex items-center gap-2 p-3 text-white bg-primary">
              <Filter size={18} />
              <h3 className="text-sm font-bold tracking-widest uppercase">
=======
      <div className="mx-auto max-w-[1200px] px-4 py-8 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-[260px] shrink-0">
          <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden sticky top-24">
            <div className="bg-[#9d0b0f] p-3 flex items-center gap-2 text-white">
              <Filter size={18} />
              <h3 className="text-sm font-bold uppercase tracking-widest">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                Bộ lọc
              </h3>
            </div>

<<<<<<< HEAD
            {/* Category Filter */}
            <div className="p-0 border-b border-gray-100">
              <button
                onClick={() => setIsCatOpen(!isCatOpen)}
                className="flex items-center justify-between w-full p-4 font-bold text-[13px] uppercase hover:bg-gray-50 transition-all cursor-pointer text-[#3e2714]"
=======
            <div className="p-0 border-b border-gray-100">
              <button
                onClick={() => setIsCatOpen(!isCatOpen)}
                className="flex items-center justify-between w-full p-4 font-bold text-[13px] uppercase hover:bg-gray-50 transition-all text-[#3e2714]"
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              >
                Danh mục sản phẩm
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isCatOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
<<<<<<< HEAD
                className={`overflow-hidden transition-all duration-300 ${isCatOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="px-4 pb-4 space-y-2 overflow-y-auto max-h-60 custom-scrollbar">
                  {categories.map((item) => {
                    const itemSlug = getSlug(item.name);
                    return (
                      <li key={item._id}>
                        <Link
                          to={`/category/${itemSlug}`}
                          className={`text-[13px] block py-1.5 hover:text-primary transition-colors ${slug === itemSlug ? "text-primary font-bold border-l-2 border-primary pl-2" : "text-gray-600 pl-2"}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Price Filter */}
            <div className="p-0 border-b border-gray-100">
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex items-center justify-between w-full p-4 font-bold text-[13px] uppercase hover:bg-gray-50 transition-all cursor-pointer text-[#3e2714]"
              >
                Khoảng giá (VNĐ)
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isPriceOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${isPriceOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-4 pb-6 space-y-3">
                  <input
                    type="number"
                    placeholder="Từ"
                    value={filters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                  <input
                    type="number"
                    placeholder="Đến"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="p-4">
              <button
                onClick={() => {
                  setFilters({ minPrice: "", maxPrice: "", sort: "newest" });
                  setSearchParams({});
                }}
                className="w-full py-2 text-[11px] font-bold text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-all uppercase"
              >
                Thiết lập lại
              </button>
            </div>
=======
                className={`overflow-hidden transition-all duration-300 ${isCatOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="px-4 pb-4 space-y-2 overflow-y-auto max-h-[400px] custom-scrollbar">
                  {sidebarItems.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/category/${item.slug}`}
                        className={`text-[13px] block py-1.5 hover:text-[#9d0b0f] transition-colors ${slug === item.slug ? "text-[#9d0b0f] font-bold border-l-2 border-[#9d0b0f] pl-2" : "text-gray-600 pl-2"}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
          </div>
        </aside>

        <main className="flex-1">
<<<<<<< HEAD
          <div className="flex flex-col items-start justify-between gap-3 pb-3 mb-6 border-b sm:flex-row sm:items-center border-primary">
            <h2 className="text-2xl font-bold tracking-tighter uppercase text-primary">
              {catName}
              <span className="ml-2 text-sm font-normal text-gray-400 lowercase">
                ({products.length} sản phẩm)
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-500 uppercase">
                Sắp xếp:
              </span>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange("sort", e.target.value)}
                className="bg-white border border-gray-200 rounded px-3 py-1.5 text-xs outline-none focus:border-primary font-bold"
              >
                <option value="newest">Mới nhất</option>
                <option value="price_asc">Giá tăng dần</option>
                <option value="price_desc">Giá giảm dần</option>
              </select>
              <button
                onClick={fetchData}
                className={`text-gray-300 hover:text-primary transition-colors ${loading ? "animate-spin" : ""}`}
              >
                <RefreshCcw size={16} />
=======
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 border-b border-[#9d0b0f] pb-3 gap-3">
            <h2 className="text-2xl font-bold text-[#9d0b0f] uppercase tracking-tighter">
              {getCatName(slug)}
              <span className="text-gray-400 text-sm font-normal lowercase ml-2">
                ({filteredProducts.length} sản phẩm)
              </span>
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchProducts}
                className={`text-gray-400 hover:text-[#9d0b0f] ${loading ? "animate-spin" : ""}`}
              >
                <RefreshCcw size={18} />
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center py-20">
<<<<<<< HEAD
              <div className="w-10 h-10 border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => {
                const displayPrice = p.price || 0;
                const displayImage = p.images?.[0] || p.image || "";
=======
              <div className="w-10 h-10 border-4 border-[#9d0b0f] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((p) => {
                // LOGIC SỬA LỖI: Lấy giá từ biến thể đầu tiên và ảnh từ mảng ảnh
                const displayPrice =
                  p.variants && p.variants.length > 0 ? p.variants[0].price : 0;
                const displayImage =
                  p.images && p.images.length > 0 ? p.images[0] : "";
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde

                return (
                  <div
                    key={p._id}
                    className="bg-white p-2 border border-transparent hover:border-[#faa51980] hover:shadow-md transition-all flex flex-col group h-full"
                  >
                    <Link
                      to={`/product/${p._id}`}
<<<<<<< HEAD
                      className="relative block overflow-hidden"
                    >
                      <img
                        src={displayImage}
                        className="object-contain w-full transition-transform duration-500 aspect-square group-hover:scale-105"
                        alt={p.productName || p.name}
                      />
                    </Link>
                    <div className="flex flex-col flex-1 p-2 text-center">
                      <Link
                        to={`/product/${p._id}`}
                        className="font-bold text-sm text-[#3e2714] line-clamp-1 hover:text-primary transition-colors mb-1"
                      >
                        {p.productName || p.name}
=======
                      className="block overflow-hidden relative"
                    >
                      <img
                        src={displayImage}
                        className="w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105"
                        alt={p.name}
                      />
                    </Link>
                    <div className="p-2 text-center flex-1 flex flex-col">
                      <Link
                        to={`/product/${p._id}`}
                        className="font-bold text-sm text-[#3e2714] line-clamp-1 hover:text-[#9d0b0f] transition-colors mb-1"
                      >
                        {p.name}
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                      </Link>
                      <p className="text-[11px] text-gray-400 italic mb-3 line-clamp-1">
                        {p.slogan || "Tinh hoa quà Việt"}
                      </p>

<<<<<<< HEAD
                      <p className="mt-auto mb-4 text-base font-black text-primary">
=======
                      {/* SỬA LỖI TẠI ĐÂY */}
                      <p className="text-[#9d0b0f] font-black text-base mb-4 mt-auto">
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                        Chỉ từ {displayPrice.toLocaleString()}đ
                      </p>

                      <button
                        onClick={() => {
<<<<<<< HEAD
=======
                          // Thêm vào giỏ hàng lấy biến thể đầu tiên làm mặc định
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                          addToCart({
                            ...p,
                            id: `${p._id}-default`,
                            price: displayPrice,
                            image: displayImage,
<<<<<<< HEAD
                            name: p.productName || p.name,
                          });
                          toast.success(
                            `Đã thêm ${p.productName || p.name} vào giỏ!`,
                          );
                        }}
                        className="w-full border border-primary text-primary text-[11px] font-bold uppercase py-2 rounded-full hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm"
=======
                          });
                          alert(`Đã thêm ${p.name} vào giỏ!`);
                        }}
                        className="w-full border border-[#9d0b0f] text-[#9d0b0f] text-[11px] font-bold uppercase py-2 rounded-full hover:bg-[#9d0b0f] hover:text-white transition-all active:scale-95 shadow-sm"
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
                      >
                        Mua nhanh
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
<<<<<<< HEAD
            <div className="py-32 text-center text-gray-400 bg-white border border-dashed rounded-lg border-gray-200">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-10" />
              <p className="text-sm">
                Hiện chưa có sản phẩm nào phù hợp với bộ lọc.
              </p>
              <button
                onClick={() => {
                  setFilters({ minPrice: "", maxPrice: "", sort: "newest" });
                  setSearchParams({});
                }}
                className="mt-4 text-xs font-bold text-primary underline underline-offset-4"
              >
                Xem tất cả sản phẩm
              </button>
=======
            <div className="text-center py-32 bg-white rounded-lg border border-dashed text-gray-400">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
              <p>Hiện chưa có sản phẩm nào trong danh mục này.</p>
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
