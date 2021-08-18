import React, { Component } from 'react'

export default class ProductInput extends Component {
	constructor( ){
		super()
		this.state={
			keyword:'',
			sort:''
		}
	}

	handleKeywordSearch(event) {
		this.setState({
			keyword:event.target.value,
		})
	}
	handleSortingChange(event) {
		this.setState({
			sort:event.target.value,
		})
	}
	render() {
		return (
			<div className='product-input'>
				<div className='search-field'>
					<span className='search-field-name'>Search: </span>
					<div className='search-field-name-input'>
						<input value={this.state.keyword} onChange={this.handleKeywordSearch.bind(this)} />
						<button>Search</button>
					</div>
				</div>
				<div className='sort-field'>
					<label className='sort-field-name'for='dropdown'>Sort By:</label>
					<div className='sort-field-input'>
						<select id="dropdown" value={this.state.sort} onChange={this.handleSortingChange.bind(this)} >
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}
