import React from "react";
import animateScrollTo from 'animated-scroll-to';
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/banners/MainBanner.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class MainBanner extends React.Component {

	lastScrollTop = undefined;
	headerHeight = 82;
	isScrolling = false;


	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}


	onScroll = async (e)=> {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const isBottom = this.lastScrollTop === undefined ? true : scrollTop > this.lastScrollTop;
		this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
		if(!isBottom) return;
		if(scrollTop > 20) return;
		if(this.isScrolling) return;
		//this.scrollBot();

		this.isScrolling = true;
		this.scrollTo();
	};


	scrollTo() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		if(wHeight <= scrollTop) console.log('STOP! ->>>');
		if(wHeight <= scrollTop) return this.isScrolling = false;

		console.log('START ->>>', window.pageYOffset || document.documentElement.scrollTop);

		animateScrollTo(wHeight - this.headerHeight).then(hasScrolledToPosition => {
			if (hasScrolledToPosition) {
				console.log('END');
				this.isScrolling = false;
			} else {
				console.log('END ERROR');
				this.scrollTo();
			}
		});
	}


	scrollBot = ()=> {
		const wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		window.scrollTo({
			top: wHeight - this.headerHeight,
			behavior: "smooth"
		});
	};


	render() {
		return (
			<div className="banner flex justify-between items-center">

				<div className="left-side bg-yellow" />
				<div className="right-side bg-green_light" />

				<div className="layout-container">
					<div className="info">
						<div className="text-xl font-gotham_black uppercase">Спасай еду</div>
						<div className="text-xl font-gotham_black uppercase">Береги природу</div>
						<div className="text-xl font-gotham_black uppercase">Экономь с YoFood</div>

						<div className="text-base text-black">
							Сделай доброе дело и помоги планете избавиться
							<br/>
							от пищевых отходов! Просто закажи еду из
							<br/>
							ресторана своего города со скидкой до - 80%.
						</div>

						<button className="button" onClick={ this.scrollBot }>Заказать</button>
					</div>
				</div>

				<div className="plate-wrapper flex justify-center items-center">
					<div className="plate">
						<Img src={`${process.env.PUBLIC_URL}/png/plate.png`} width={ '100%' } />
					</div>
				</div>
			</div>
		);
	}
}

export default MainBanner;
