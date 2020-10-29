//import logo from './logo.svg';
import './App.css';
import { ButtonsContainer } from './Components/Button.js';
import { SectionsContainer } from './Components/Section.js';
import { Tooltip } from './Components/Tooltip.js';


function App() {

  return (

    <div className="App">
    	<div className = "buttonContainer">
    		<ButtonsContainer buttons = {buttons}/>
    	</div>
    	<div className = "sectionsContainer">
    		<SectionsContainer sections = {sections}/>
    	</div>
    	<div className = "tooltipContainer">
    		<Tooltip label={label}/>
    	</div>
    </div>
  )

 
}
 

export default App;

const buttons = [
	{
		title: 'default',
		style: 'default',
	},
	{
		title: 'error',
		style: 'error'
	},
	{
		title: 'success',
		style: 'success'
	}

];

const sections = [
	{
		headerTitle: 'Default',
		headerStyle: 'sectionDefault',
		contentStyle: 'sectionDefault',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		headerTitle: 'Error',
		headerStyle: 'sectionError',
		contentStyle: 'sectionError',
		content: 'Vivamus finibus sodales dui sed ultrices. Morbi fermentum ultricies condimentum. Etiam imperdiet nulla mi, sit amet placerat urna suscipit non. Sed fringilla ullamcorper interdum. Nam varius purus ut tristique placerat.'},
	{
		headerTitle: 'Success',
		headerStyle: 'sectionSuccess',
		contentStyle: 'sectionSuccess',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at molestie ante, sed malesuada orci. Vivamus finibus sodales dui sed ultrices. Morbi fermentum ultricies condimentum. Etiam imperdiet nulla mi, sit amet placerat urna suscipit non. Sed fringilla ullamcorper interdum. Nam varius purus ut tristique placerat.'},

];

const label = 'Tooltip description';




      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Hello world!</h1>
      </header>*/