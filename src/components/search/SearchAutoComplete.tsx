"use client";
import { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Link from "next/link";
import debounce from "lodash.debounce";

interface SearchAutocompleteProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SearchAutocomplete({
  value,
  onChange,
  placeholder = "Search for products...",
  className = "",
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
    <div className="position-relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />

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
  );
}
