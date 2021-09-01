import React, { Component } from 'react'

export default class Top extends Component {
	componentDidMount(){
		console.log(this.props.topic);
	}
	render() {
		return (
			<div className="topic">
				<a href={this.props.topic.link} ><span className="keyword">{this.props.topic.keyword}</span></a>
				
			</div>
		)
	}
}
