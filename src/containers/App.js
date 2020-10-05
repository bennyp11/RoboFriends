import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//state are the elements that can change in your app
class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}

}

componentDidMount(){
	fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({ robots: users}));
}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (!robots.length) {
			return <h1 className='tc'>LOADING</h1>
		} else {		
			return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
						<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);}

	}
}

export default App;