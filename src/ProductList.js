import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
	static defaultProps = {
		products: []
	}

	render() {
		return (
			<div className="productlist">
				{
					this.props.products.map((product,i) =>{
						return (
							<Product product={product} key={i} />

						)
					})
				}
			</div>
		)
	}
}
