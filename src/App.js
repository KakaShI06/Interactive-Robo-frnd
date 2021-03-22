import React from 'react'
import CardList from './CardList.js';
 import robots from './robots.js';
 import SearchBox from './SearchBox.js';


class App extends React.Component{
	constructor(){
		super()
		this.state= {
			robot: robots,
			Searchfield: ' '   
		}
		this.onSearchChange= this.onSearchChange.bind(this)
	}

	onSearchChange(event){
		this.setState({Searchfield: event.target.value})
	}

	render(){
		const filteredRobot= this.state.robot.filter( robot => {
			return (robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase()) );
		})

		return(<div>
			<h1 className= 'tc'>RoboFriend</h1>
			<SearchBox searchChange= {this.onSearchChange}/>
			<CardList robots={filteredRobot}/>
		</div>);
	}
}

export default App; 