import './Tooltip.css';
import { label } from '../App.js';



export const Tooltip = (props) => {

	return (

		<div>
			<div className="tooltip-on-hover">Hover here</div>
			<div className="tooltip">{props.label}</div>
		</div>
	);
};