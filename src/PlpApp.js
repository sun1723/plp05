import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'

class PlpApp extends Component {
	render() {
		return (
			<div>
				<ProductInput />
				<ProductList />
			</div>
		)
	}
}

export default PlpApp
