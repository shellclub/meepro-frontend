"use client";
import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Collapse from 'react-bootstrap/Collapse';

const SidebarCategory = ({
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  MinPrice,
  MaxPrice,
  selectedBrands,
  selectedCategory,
  selectedTags,
  handlePriceChange,
  handleTagsChange,
  handleCategoryChange,
  handleBrandChange,
}) => {
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
      categories: ["Sports", "party wear", "Casual", "Baby shoes"],
    },
    {
      groupname: "accessories",
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
      categories: ["snacks", ""],
    },
    {
      groupname: "spice",
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

  const { data: tagData, error: tagError } = useSWR(
    `/api/fashion-tags`,
    fetcher,
    {
      onSuccess,
      onError,
    }
  );

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  if (clothesError || footwearError || accessoriesError || brandError)
    return <div>Failed to load products</div>;
  if (!clothesData || !footwearData || !accessoriesData || tagError)
    return <div></div>;

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

  if (!tagData) return <div></div>;

  const getTagData = () => {
    if (hasPaginate) return tagData.data;
    else return tagData;
  };

  const BrandData = getBrandData();
  const TagData = getTagData();

  const handleFilterBtn = () => {
    router.push("/fashion-shop-left-sidebar-col-3");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="gi-shop-sidebar-overlay"></div>
      <div className="gi-shop-sidebar-2">
        <div className="gi-close-btn">
          <h3>List</h3>
          <a onClick={handleSubmit} href="" className="gi-cat-close">
            <i className="fi-rr-cross-small"></i>
          </a>
        </div>
        <div id="shop_sidebar">
          <div style={{ backgroundColor: "#fff" }} className="gi-sidebar-wrap">
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
              <Collapse
                in={isOpen.category}
                
              >
                <div
                  style={{ display: isOpen.category ? "block" : "none" }}
                  className="gi-sb-block-content gi-sidebar-dropdown height-transition-1s-ease"
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
                          <i className={`fi-rr-${categoryGroup.groupname}`}></i>
                          {categoryGroup.groupname.charAt(0).toUpperCase() +
                            categoryGroup.groupname.slice(1)}
                        </h6>
                        <ul>
                          {filteredItems.map((data, index) => (
                            <div
                              key={index}
                              className="gi-sidebar-block-item gi-sidebar-fashion-item"
                            >
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
                                <span className="p-30">{data.category}</span>
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
              </Collapse>
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
              <Collapse
                in={isOpen.brand}
                
              >
                <div
                  style={{ display: isOpen.brand ? "block" : "none" }}
                  className="gi-sb-block-content height-transition-1s-ease"
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
              </Collapse>
            </div>

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
              <Collapse
                in={isOpen.price}
                
              >
                <div
                  style={{ display: isOpen.price ? "block" : "none" }}
                  className="gi-sb-block-content height-transition-1s-ease"
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
              </Collapse>
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
              <Collapse in={isOpen.tags} >
                <div
                  style={{ display: isOpen.tags ? "block" : "none" }}
                  className="gi-tag-block gi-sb-block-content height-transition-1s-ease"
                >
                  {TagData.map((data, index) => (
                    <a
                      onClick={() => handleTagsChange(data.tags)}
                      key={index}
                      className="gi-btn-2"
                      style={{
                        marginRight: "5px",
                        backgroundColor: selectedTags.includes(data.tags)
                          ? "#343a40"
                          : "#516ebf",
                      }}
                    >
                      {data.tags}
                    </a>
                  ))}
                </div>
              </Collapse>

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
    </>
  );
};

export default SidebarCategory;
