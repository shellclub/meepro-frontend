"use client";
import { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Link from "next/link";
import debounce from "lodash.debounce";

interface SearchAutocompleteProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  SearchIcon?: React.ComponentType<{ className?: string }>;
}

export default function SearchAutocomplete({
  value,
  onChange,
  onSubmit,
  placeholder = "Search for products...",
  className = "",
  buttonClassName = "",
  SearchIcon,
}: SearchAutocompleteProps) {
  const [debouncedQuery, setDebouncedQuery] = useState(value);

  const debounceSetQuery = useCallback(
    debounce((val: string) => {
      setDebouncedQuery(val);
    }, 300),
    []
  );

  useEffect(() => {
    debounceSetQuery(value);
  }, [value, debounceSetQuery]);

  const { data, isLoading } = useSWR(
    debouncedQuery ? ["/api/shopitem", { searchTerm: debouncedQuery }] : null,
    ([url, postData]) => fetcher(url, postData)
  );

  return (
    <div className="gi-header-search flex flex-row items-center gap-2 flex-1 w-full mx-2 md:mx-4 md:gap-0 md:max-w-2xl lg:mx-8 lg:max-w-4xl lg:min-w-72">
      {/* Search Input Container */}
      <div className="position-relative flex-grow">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />

        {/* Search Dropdown */}
        {debouncedQuery && (
          <div className="search-dropdown position-absolute bg-white border mt-2 w-100 z-10 shadow">
            {isLoading ? (
              <div className="p-3 text-muted">Loading...</div>
            ) : data?.data.length > 0 ? (
              data.data.slice(0, 5).map((item: any) => (
                <Link
                  href={`/product/${item.slug || item.id}`}
                  key={item.id}
                  className="d-flex align-items-center p-2 text-decoration-none text-dark border-bottom"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: 4,
                        marginRight: 10,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#ddd",
                        borderRadius: 4,
                        marginRight: 10,
                      }}
                    />
                  )}
                  <span>{item.title}</span>
                </Link>
              ))
            ) : (
              <div className="p-3 text-muted">ไม่พบสินค้าที่ค้นหา...</div>
            )}
          </div>
        )}
      </div>

      {/* Search Button */}
      <form onSubmit={onSubmit} className="m-0">
        <button
          className={`search_submit btn flex items-center justify-center p-2 h-10 min-w-10 md:p-2.5 md:h-11 md:min-w-11 lg:px-5 lg:py-3 lg:h-12 lg:min-w-12 ${buttonClassName}`}
          type="submit"
          aria-label="Search"
        >
          {SearchIcon && <SearchIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />}
        </button>
      </form>
    </div>
  );
}