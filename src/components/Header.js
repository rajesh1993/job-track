import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Header extends Component {
	render() {
		const { 
			headerBarStyle, 
			headerTextStyle, 
			headerTextViewStyle,
			hamburgerViewStyle } = styles;
		return (
			<View style={headerBarStyle}>
				<View style={hamburgerViewStyle}>
					<Image
						style={{ flex: 1 }}
						source={require('../images/hamburger.png')} 
					/>
				</View>
				<View style={headerTextViewStyle}>
					<Text style={headerTextStyle}>{this.props.headerText}</Text>
				</View>
			</View>
		);
	}
} 

const styles = {
	headerBarStyle: {
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderColor: 'grey'
	},

	headerTextStyle: {
		color: 'black',
		fontSize: 20
	},

	headerTextViewStyle: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'

	},

	hamburgerViewStyle: {
		width: 20, 
		height: 20, 
		paddingLeft: 20
	}
};

export default Header;
