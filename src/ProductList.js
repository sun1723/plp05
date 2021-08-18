import React, { Component } from 'react'

export default class ProductList extends Component {
	render() {
		const products=[
			{name:'1',color:'black'},
			{name:'2',color:'yellow'}
		]
		return (
			<div>
				{
					products.map((product,i) =>{
						return (
							<div key={i}>
								{product.name}:{product.color}
							</div>

						)
					})
				}
			</div>
		)
	}
}
