import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header 
					headerText='Header'
				/>
				<Card />
			</View>
		);
	}
}

export default App;
