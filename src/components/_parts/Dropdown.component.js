import React from "react";
import PropTypes from "prop-types";
// MobX
import { observer } from "mobx-react";
import { observable } from "mobx";
// Styles
import "src/styles/scoped/Dropdown.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class Dropdown extends React.Component {

	static propTypes = {
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
		items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])).isRequired,
		renderItem: PropTypes.func
	};

	static defaultProps = {
		renderItem: ()=> {}
	};


	@observable dropdown = {
		isOpen: false
	};


	onClick = ()=> {
		this.dropdown.isOpen = !this.dropdown.isOpen;
	};


	render() {
		return (
			<div className="dropdown">
				<button className="clickable uppercase text-nato_sans flex items-center"
						onClick={ this.onClick }>

					{ this.props.title }

					<Img src={`${process.env.PUBLIC_URL}/svg/arrow-down.svg`}
						 className={ this.dropdown.isOpen ? `transform rotate-180 transition-transform` : 'transform rotate-0 transition-transform' }
						 width={24}
						 height={24} />
				</button>

				{ this.dropdown.isOpen ?
					<div className={ `dropdown-items bg-white` }>
						{ this.props.items.map(item => this.props.renderItem(item)) }
					</div>
					: null }
			</div>
		);
	}
}

export default Dropdown;
