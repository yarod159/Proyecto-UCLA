import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from 'react-native-elements';

const Header = ({ headerText, headerIcon,headerIcon2, onPress }) => { 
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon name={headerIcon2} type="font-awesome" size={24} />
            </TouchableOpacity>
			<Text style={styles.header}>
				{headerText}
			</Text>
			<TouchableOpacity onPress={onPress}>
                <Icon name={headerIcon} type="font-awesome" size={24} />
            </TouchableOpacity>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row" ,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},

	header: {
		flex: 1,
		fontSize: 22,
		fontWeight: "700",
		textAlign: 'center',
	}
});
