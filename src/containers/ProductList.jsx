import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=1';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map( product => {
						return <ProductItem product={product}  key={product.id} />;
					})
				}
			</div>
		</section>
	);
}

export default ProductList;
