import './Section.css';
import { sections } from '../App.js';



export const SectionsContainer = (props) => {

	const sections = props.sections.map( (element, index) => {

		return (
			<div key = {index+10} className = "section">
				<div key = {index} className = {`header ${element.headerStyle}`}>{element.headerTitle}</div>
				<div key = {index+100} className = {`content ${element.contentStyle}`}>{element.content}</div>
			</div>	

		);
	});

	return (

		<div>
			{sections}
		</div>
	);
};