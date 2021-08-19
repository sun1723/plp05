import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
	render() {
		const products=[
			{title:'1',color:'black'},
			{title:'2',color:'yellow'}
		]
		return (
			<div>
				{
					products.map((product,i) =>{
						return (
							<Product product={product} key={i} />

						)
					})
				}
			</div>
		)
	}
}
