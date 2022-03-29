import React, { useState, useEffect } from "react";
import Time from "./time.jsx";

//create your first component
const Home = () => {
	let side = {
		marginRight: "20px",
	};
	return (
		<div className="card bg-dark text-light">
			<div className="card-body">
				<span>
					<h1>
						<i
							style={side}
							className="fa fa-clock"
							aria-hidden="true"></i>
						<Time count={1000} />
						<Time count={100} />
						<Time count={10} />
						<Time count={1} />
					</h1>
				</span>
			</div>
		</div>
	);
};

export default Home;
