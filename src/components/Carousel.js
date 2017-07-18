// import React, { Component } from 'react'
// import { connect } from 'react-redux';

// const styles = {
// 	img: {
// 		maxHeight: 500,
// 	},
// }


// class Carousel extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.renderButtons = this.renderButtons.bind(this);
// 		this.renderPhotos = this.renderPhotos.bind(this);
// 	}
// 	renderButtons() {
// 		if (!this.props.photos) {return <div />;}
// 		return Object.keys(this.props.photos).map((key, i) => {
// 			return <li data-target="#carousel-test" data-slide-to={i}></li>
// 		});
// 	}

// 	renderPhotos() {
// 		if (!this.props.photos) {return <div />;}
// 		return Object.keys(this.props.photos).map((key, i) => {
// 			return (
// 				<div className={i === 0 ? 'item active' : 'item'} key={key}>
// 					<img
// 						alt={this.props.photos[key]}
// 						src={`/portfolio-gifs/${this.props.photos[key]}`}
// 					/>
// 				</div>
// 			);
// 		});
// 	}

// 	render() {
// 		return (
// 			<div
// 				id="carousel-project"
// 				className="carousel slide"
// 				data-ride="carousel"
// 			>
// 				<ol className="carousel-indicators">
// 					{this.renderButtons()}
// 				</ol>

// 				<div className="carousel-inner" role="listbox">
// 					{this.renderPhotos()}
// 				</div>

// 				<a
// 					className="left carousel-control"
// 					href="#carousel-project"
// 					role="button"
// 					data-slide="prev"
// 				>
// 					<span className="fa fa-chevron-left"></span>
// 				</a>
// 				<a
// 					className="right carousel-control"
// 					href="#carousel-project"
// 					role="button"
// 					data-slide="next"
// 				>
// 					<span className="fa fa-chevron-right"></span>
// 				</a>

// 			</div>
// 		);
// 	}
// }

// function mapStateToProps({photos}) {
// 	return {photos: photos.photos};
// }

// export default connect(mapStateToProps)(Carousel);

