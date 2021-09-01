import React, { Component } from 'react'
import Top from './Top'

export default class TopSearch extends Component {
	static defaultProps = {
		topSearches:[]
	}
	render() {
		return (
			<div className="topSearch">
				<h1>Top Search: </h1>
				{this.props.topsearches.map(topic => <Top topic={topic}/> )}
			</div>
		)
	}
}
