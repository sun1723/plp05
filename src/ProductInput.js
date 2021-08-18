import React, { Component } from 'react'

export default class ProductInput extends Component {
	render() {
		return (
			<div className='product-input'>
				<div className='search-field'>
					<span className='search-field-name'>Search: </span>
					<div className='search-field-name-input'>
						<input />
						<button>Search</button>
					</div>
				</div>
				<div className='sort-field'>
					<span className='sort-field-name'>Sort By:</span>
					<div className='sort-field-input'>
						<select ></select>
					</div>
				</div>
			</div>
		)
	}
}
