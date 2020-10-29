import './Button.css';
import { buttons } from '../App.js';



export const ButtonsContainer = (props) => {

	const buttonsList = props.buttons.map( (element, index) => {

		return (
			<button key = {index} className = {`button ${element.style}`}>{element.title}</button>

		);
	});

	return (

		<div>
			{buttonsList}
		</div>
	);
};
