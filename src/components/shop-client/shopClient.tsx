'use client'; 

import React from 'react';
import { useSearchParams } from 'next/navigation';
import FullWidth from '@/components/full-width/FullWidth';
import Category from '@/components/category/Category';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

const ShopClient = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') ?? '';

  return (
    <>
      <Breadcrumb title={"Shop Page"} />
      <Category />
      <FullWidth xl={3} lg={12} searchTerm={searchTerm} />
    </>
  );
};

export default ShopClient;
