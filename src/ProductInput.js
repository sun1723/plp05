import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ProductInput extends Component {
	static propTypes = {
		onSubmit: PropTypes.func
	}
	constructor( ){
		super()
		this.state={
			keyword:'',
			sort:''
		}
	}
	componentWillMount(){

	}
	_loadkeyword(){
		const keyword = localStorage.getItem('keyword')
		if(keyword){
			this.setState({
				
			})
		}
	}
	componentDidMount () {
		this.input.focus()
	}
	_saveKeyword(keyword){
		localStorage.setItem('keyword',keyword)
	}
	handleSearchBlur(event){
		this._saveKeyword(event.target.value)
	}
	handleKeyword(event) {
		this.setState({
			keyword:event.target.value,
		})
	}
	handleSortingChange(event) {
		// console.log(event.target.value);
		// this.setState({
		// 	sort:event.target.value,
		// })
		// console.log(this.state.sort);
		if(this.props.onSubmitSort)
		{
			const sort = event.target.value
			this.props.onSubmitSort(sort)
		}
		this.setState({
			sort:event.target.value,
		})
	}
	handleSubmitSearch(){
		if(this.props.onSubmit){
			const keyword = this.state.keyword
			this.props.onSubmit(keyword)
		}
		this.setState({keyword:''})
	}
	
	render() {
		return (
			<div className='product-input'>
				<div className='search-field'>
					<span className='search-field-name'>Search: </span>
					<div className='search-field-name-input'>
						<input ref={(input)=>this.input = input} value={this.state.keyword} onBlur={this.handleSearchBlur.bind(this)} onChange={this.handleKeyword.bind(this)} />
						<button onClick={this.handleSubmitSearch.bind(this)}>Search</button>
					</div>
				</div>
				<div className='sort-field'>
					<label className='sort-field-name' htmlFor='dropdown'>Sort By:</label>
					<div className='sort-field-input'>
						<select id="dropdown" value={this.state.sort} onChange={this.handleSortingChange.bind(this)} >
							<option value="PriceLowtoHigh">Price Low to High</option>
							<option value="PriceHightoLow">Price High to Low</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}
