import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//create your first component
const Time = (props) => {
	const [tens, setTens] = useState(0);
	setTimeout(() => {
		setTens((tens) => tens + 1);
	}, 1000);

	let one = Math.floor(tens / props.count);
	return <span>{one % 10}</span>;
};

Time.propTypes = {
	count: PropTypes.number,
};

export default Time;
