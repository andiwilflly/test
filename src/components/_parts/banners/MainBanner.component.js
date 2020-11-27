import React from "react";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/banners/MainBanner.scoped.scss";


@observer
class MainBanner extends React.Component {


	render() {
		return (
			<div className="banner">
				<div className="left-side bg-yellow">

				</div>
				<div className="right-side bg-green_light">

				</div>
			</div>
		);
	}
}

export default MainBanner;
