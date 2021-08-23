import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
	static defaultProps = {
		products: []
	}

	constructor(){
		
	}
	render() {
		return (
			<div>
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
