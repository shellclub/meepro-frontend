import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "@/store/reducers/filterReducer";
import Link from "next/link";

const BlogCategories = ({
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  selectedCategory,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(true);

  const { data, error } = useSWR(`/api/blogcategory`, fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    setShowButton(pathname !== "/blog-left-sidebar/");
  }, [pathname]);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  const categoryData = getData();

  const handleFilterBtn = () => {
    router.push("/blog-left-sidebar/");
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  return (
    <>
      {/* <!-- Sidebar Category Block --> */}
      <div className="gi-sidebar-block">
        <div className="gi-sb-title">
          <h3 className="gi-sidebar-title">Categories</h3>
        </div>
        <div className="gi-blog-block-content gi-sidebar-dropdown">
          <ul>
            {categoryData.map((data: any, index: number) => (
              <li key={index}>
                <div className="gi-sidebar-block-item">
                  <input
                    checked={selectedCategory?.includes(data.category)}
                    onChange={() => handleCategoryChange(data.category)}
                    type="checkbox"
                  />{" "}
                  <Link href="/">
                    {data.category}
                    <span title="Products">- {data.count}</span>
                  </Link>
                  <span className="checked"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- Sidebar Category Block --> */}

      {showButton && (
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button onClick={handleFilterBtn} className="gi-btn-2">
            Filter
          </button>
        </div>
      )}
    </>
  );
};

export default BlogCategories;
