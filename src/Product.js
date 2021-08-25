import React, { Component } from 'react'

export default class Product extends Component {
	render() {
		return (
			<div className="product">
				<div className='product-img'>
					<img src={this.props.product.goodsImage}/>
				</div>
				<div className='product-title'>
					<span>{this.props.product.goodsTitle}</span>
				</div>
				<div className='product-price'>
					<span>$ {this.props.product.displayPrice}</span>
				</div>
			</div>
		)
	}
}
