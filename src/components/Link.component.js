import React from "react";
import { Link } from "@reach/router";


const NavLink = props => (
	<Link {...props}
		getProps={(params) => {
			return {
				style: {
					// textDecoration: isCurrent ? "underline" : "none",
					fontWeight: params.isCurrent ? 600 : 400,
				}
			};
		}}
	/>
);

export default NavLink;
