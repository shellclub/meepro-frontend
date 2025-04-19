import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import tags from "@/utility/data/tags";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Link from "next/link";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedBrands,
  setSelectedCategory,
} from "@/store/reducers/filterReducer";

const FashionSidebar = ({
  isSidebarOpen,
  closeSidebar,
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  MinPrice,
  MaxPrice,
  selectedBrands,
  selectedCategory,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState({
    category: true,
    brand: true,
    material: true,
    price: true,
    tags: true,
  });
  const [showButton, setShowButton] = useState(true);
  const priceRanges = [
    { name: "Under $50", min: 0, max: 50 },
    { name: "$50 to $100", min: 50, max: 100 },
    { name: "$100 to $200", min: 100, max: 200 },
    { name: "Above $200", min: 200, max: Infinity },
  ];

  const groupCategory: any = [
    {
      groupname: "clothes",
      iconName: "shop",
      categories: [
        "Baby Wear",
        "Winter Wear",
        "men's wear",
        "women's wear",
        "unisex",
      ],
    },
    {
      groupname: "footwear",
      iconName: "cupcake",
      categories: ["Sports", "party wear", "Casual", "Baby shoes"],
    },
    {
      groupname: "accessories",
      iconName: "drink-alt",
      categories: [
        "Belt",
        "wallet",
        "perfume",
        "shampoo",
        "Body Lotion",
        "jewellery",
        "Lipstick",
        "makeup kit",
      ],
    },
    {
      groupname: "snacks",
      iconName: "popcorn",
      categories: ["snacks", ""],
    },
    {
      groupname: "spice",
      iconName: "cupcake",
      categories: ["", ""],
    },
    {
      groupname: "juice",
      categories: ["", ""],
    },
    {
      groupname: "drinks",
      categories: ["", ""],
    },
    {
      groupname: "fruits",
      categories: ["", ""],
    },
    {
      groupname: "vegetable",
      categories: ["", ""],
    },
  ];

  const { data: clothesData, error: clothesError } = useSWR(
    `/api/fashion-clothes`,
    fetcher,
    {
      onSuccess,
      onError,
    }
  );

  const { data: brandData, error: brandError } = useSWR(
    `/api/fashion-brand`,
    fetcher,
    {
      onSuccess,
      onError,
    }
  );

  useEffect(() => {
    setShowButton(pathname !== "/fashion-shop-left-sidebar-col-3/");
  }, [pathname]);

  const { data: footwearData, error: footwearError } = useSWR(
    `/api/fashion-footwear`,
    fetcher,
    {
      onSuccess,
      onError,
    }
  );

  const { data: accessoriesData, error: accessoriesError } = useSWR(
    `/api/fashion-accessories`,
    fetcher,
    {
      onSuccess,
      onError,
    }
  );

  if (clothesError || footwearError || accessoriesError || brandError)
    return <div>Failed to load products</div>;
  if (!clothesData || !footwearData || !accessoriesData) return <div></div>;

  if (!brandData) return <div></div>;

  const getPaginatedData = (data: any) => (hasPaginate ? data.data : data);

  const allItems = [
    ...getPaginatedData(clothesData),
    ...getPaginatedData(footwearData),
    ...getPaginatedData(accessoriesData),
  ];

  const getBrandData = () => {
    if (hasPaginate) return brandData.data;
    else return brandData;
  };

  const BrandData = getBrandData();

  const handlePriceChange = (min: any, max: any) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    dispatch(setSelectedBrands(updatedBrands));
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  const handleFilterBtn = () => {
    router.push("/fashion-shop-left-sidebar-col-3");
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="col-lg-3 sidebar-dis-991 h-sidebar">
      <div
        style={{ display: isSidebarOpen ? "block" : "none" }}
        className="filter-sidebar-overlay"
        onClick={closeSidebar}
      ></div>
      {isSidebarOpen && (
        <div className={`gi-shop-sidebar-2 ${isSidebarOpen ? "gi-open" : ""}`}>
          <div className="gi-close-btn">
            <h3>List</h3>
            <a
              onClick={closeSidebar}
              className="gi-cat-close gi-header-close-buttons"
            >
              <i className="fi-rr-cross-small"></i>
            </a>
          </div>
          <div id="shop_sidebar">
            <div
              style={{ backgroundColor: "#fff" }}
              className="gi-sidebar-wrap"
            >
              {/* <!-- Sidebar Category Block --> */}
              <div className="gi-sidebar-block">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  className="gi-sb-title"
                >
                  <h3 className="gi-sidebar-title">Category</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("category")}
                  >
                    <GoChevronDown />
                  </div>
                </div>

                <div
                  style={{ display: isOpen.category ? "block" : "none" }}
                  className="gi-sb-block-content gi-sidebar-dropdown"
                >
                  {groupCategory.map((categoryGroup: any, index: number) => {
                    const filteredItems = allItems.filter((item) =>
                      categoryGroup.categories.includes(item.category)
                    );

                    if (filteredItems.length === 0) {
                      return null;
                    }

                    return (
                      <div key={index} className="cat-drop">
                        <h6>
                          <i
                            style={{ marginRight: "5px" }}
                            className={`fi-rr-${categoryGroup.iconName}`}
                          ></i>
                          {categoryGroup.groupname.charAt(0).toUpperCase() +
                            categoryGroup.groupname.slice(1)}
                        </h6>
                        <ul>
                          {filteredItems.map((data, index) => (
                            <div key={index} className="gi-sidebar-block-item">
                              <input
                                onChange={() =>
                                  handleCategoryChange(data.category)
                                }
                                checked={selectedCategory?.includes(
                                  data.category
                                )}
                                type="checkbox"
                                value=""
                              />
                              <Link onClick={handleSubmit} href="/">
                                <span className="p-25">{data.category}</span>
                                <span className="avil">({data.count})</span>
                              </Link>
                              <span className="checked"></span>
                            </div>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!-- Sidebar Size Block --> */}
              <div className="gi-sidebar-block">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  className="gi-sb-title"
                >
                  <h3 className="gi-sidebar-title">Brand</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("brand")}
                  >
                    <GoChevronDown />
                  </div>
                </div>
                <div
                  style={{ display: isOpen.brand ? "block" : "none" }}
                  className="gi-sb-block-content"
                >
                  <ul>
                    {BrandData.map((data: any, index: number) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            onChange={() => handleBrandChange(data.brand)}
                            checked={selectedBrands?.includes(data.brand)}
                            type="checkbox"
                            value=""
                          />
                          <Link onClick={handleSubmit} href="/">
                            {data.brand}
                          </Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <!-- Sidebar Material Block --> */}

              <div className="gi-sidebar-block">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  className="gi-sb-title"
                >
                  <h3 className="gi-sidebar-title">Price</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("price")}
                  >
                    <GoChevronDown />
                  </div>
                </div>
                <div
                  style={{ display: isOpen.price ? "block" : "none" }}
                  className="gi-sb-block-content"
                >
                  <ul>
                    {priceRanges.map((data, index) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            onChange={() =>
                              handlePriceChange(data.min, data.max)
                            }
                            checked={
                              MinPrice === data.min && MaxPrice === data.max
                            }
                            type="checkbox"
                            value=""
                          />
                          <Link onClick={handleSubmit} href="/">
                            {data.name}
                          </Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <!-- Sidebar tags --> */}
              <div className="gi-sidebar-block">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  className="gi-sb-title"
                >
                  <h3 className="gi-sidebar-title">Tags</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("tags")}
                  >
                    <GoChevronDown />
                  </div>
                </div>
                <div
                  style={{ display: isOpen.tags ? "block" : "none" }}
                  className="gi-tag-block gi-sb-block-content"
                >
                  {tags.map((data, index) => (
                    <a
                      onClick={handleSubmit}
                      key={index}
                      href="/shop-left-sidebar-col-3"
                      className="gi-btn-2"
                    >
                      {data.name}
                    </a>
                  ))}
                </div>
                {showButton && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      paddingTop: "20px",
                    }}
                  >
                    <button onClick={handleFilterBtn} className="gi-btn-2">
                      Filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="gi-banner-side">
            <div className="gi-banner-block-side gi-banner-block-side-2 gi-banner-block-1">
              <div className="banner-block-side banner-block">
                <div className="banner-content">
                  <div className="banner-text">
                    <span className="gi-banner-title">
                      Our top most products check it now
                    </span>
                  </div>
                  <a
                    onClick={handleSubmit}
                    href="/shop-left-sidebar-col-3"
                    className="gi-btn-2"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionSidebar;
