import React from "react";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/banners/MainBanner.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class MainBanner extends React.Component {


	headerHeight = 82;


	componentDidMount() {
		window.addEventListener('wheel', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onScroll);
	}


	onScroll = (e)=> {
		if(window.scrollY === 0 && e.deltaY > 0) {
			window.scrollTo({ top: window.innerHeight - this.headerHeight, behavior: "smooth" });
		}
	};



	render() {
		return (
			<div className="banner flex justify-between items-center">

				<div className="left-side bg-yellow" />
				<div className="right-side bg-green_light" />

				<div className="layout-container">
					<div className="info">
						<div className="text-xl font-gotham_black uppercase
						">Спасай еду</div>
						<div className="text-xl font-gotham_black uppercase">Береги природу</div>
						<div className="text-xl font-gotham_black uppercase">Экономь с YoFood</div>

						<div className="text-base text-black">
							Сделай доброе дело и помоги планете избавиться
							<br/>
							от пищевых отходов! Просто закажи еду из
							<br/>
							ресторана своего города со скидкой до - 80%.
						</div>

						<button className="button">Заказать</button>
					</div>
				</div>

				<div className="plate-wrapper flex justify-center items-center">
					<div className="plate">
						<Img src={`${process.env.PUBLIC_URL}/png/plate2.png`} width={ '100%' } />
					</div>
				</div>
			</div>
		);
	}
}

export default MainBanner;
