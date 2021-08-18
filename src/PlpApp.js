import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'

class PlpApp extends Component {
	handleSubmitSearch(content){
		console.log(content)
	}
	render() {
		return (
			<div className='wrapper'>
				<ProductInput onSubmit={this.handleSubmitSearch.bind(this)}/>
				<ProductList />
			</div>
		)
	}
}

export default PlpApp
