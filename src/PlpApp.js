import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'

class PlpApp extends Component {
	handleSubmitSearch(content){
		console.log(content)
	}
	handleSort(sort){
		console.log(sort);
	}
	render() {
		return (
			<div className='wrapper'>
				<ProductInput onSubmit={this.handleSubmitSearch.bind(this)} onSubmitSort={this.handleSort.bind(this)}/>
				<ProductList />
			</div>
		)
	}
}

export default PlpApp
