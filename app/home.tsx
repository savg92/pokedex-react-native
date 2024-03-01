import { Link } from 'expo-router';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Link
				href='/'
				asChild
			>
				{/* <Button title='Go to home' /> */}
        <Pressable style={styles.button} >
          <Text style={styles.buttonText}>Go to home</Text>
        </Pressable>
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		marginTop: 20,
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#183aa0',
		color: '#fff',
	},
	buttonText: {
		color: '#fff',
	},
});

export default Home;