import React from "react";
// MobX
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Styles
import "src/styles/scoped/banners/MainBanner.scoped.scss";
// Utils
import { disableScroll, enableScroll } from "src/utils/scroll.utils";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class MainBanner extends React.Component {

	lastScrollTop = undefined;
	headerHeight = 82;


	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}


	onScroll = async (e)=> {
		const wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const isBottom = this.lastScrollTop === undefined ? false : scrollTop > this.lastScrollTop;

		this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

		if(window._scrollDisabled) return;

		console.log('START', isBottom);

		if(scrollTop <= wHeight - this.headerHeight) {

			console.log(scrollTop, this.lastScrollTop, 'top?');

			disableScroll();
			window.scrollTo({
				top: isBottom ? wHeight - this.headerHeight : 0,
				behavior: "smooth"
			});

			await store.sleep(700);
			enableScroll();
			console.log('END');
		}
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

						<button className="button" onClick={}>Заказать</button>
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
