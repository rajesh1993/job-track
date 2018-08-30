import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

class Card extends Component {
	render() {
		const { cardViewStyle, cardTextStyle } = styles;
		return (
			<View style={cardViewStyle}>
				<Text style={cardTextStyle}> This is a card </Text>
			</View>
		);
	}
}

const styles = {
	cardViewStyle: {
		backgroundColor: 'black',
		marginRight: 10,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
		borderBottom: 10,
		borderColor: 'white',
		justifyContent: 'center',
		height: 56
	},
	cardTextStyle: {
		color: 'white'
	}
};

export default Card;
