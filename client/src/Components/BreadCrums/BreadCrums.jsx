import React from 'react';
import breadcrum from '../Assets/breadcrum_arrow.png';

const BreadCrumbs = ({ product }) => {
  return (
    <section className="p-4 bg-gray-100">
      <div className="">
        <nav className="flex items-center text-[0.55rem] sm:text-sm  lg:text-md text-gray-700">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <img src={breadcrum} alt="breadcrumb" className="mx-2" />
          <a href="/" className="hover:text-indigo-600">Shop</a>
          <img src={breadcrum} alt="breadcrumb" className="mx-2" />
          <a href={`/${product.category}s`} className="hover:text-indigo-600">{product.category}</a>
          <img src={breadcrum} alt="breadcrumb" className="mx-2" />
          <span>{product.name}</span>
        </nav>
      </div>
    </section>
  );
}

export default BreadCrumbs;
