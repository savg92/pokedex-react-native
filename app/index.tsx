import { Link, useNavigation } from 'expo-router';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
	Home: string;
	Pokemons: string;
};

export default function Page() {
	const navigate = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>This is the first page of your app.</Text>

				<View style={styles.links}>
					<Link
						href='/home'
						asChild
					>
						{/* <Button title='Go to home' /> */}
            <Pressable style={styles.button} >
              <Text style={styles.buttonText}>Go to home</Text>
            </Pressable>
					</Link>
					<Link
						href='/pokemons'
						asChild
					>
						{/* <Button title='Go to pokemons' /> */}
            <Pressable style={styles.button} >
              <Text style={styles.buttonText}>Go to pokemons</Text>
            </Pressable>
					</Link>

				</View>
			</View>
			<View style={styles.footer}>
				<Text>Footer</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		maxWidth: 960,
		marginHorizontal: 'auto',
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 36,
		color: '#38434D',
	},
	footer: {
		padding: 24,
		borderTopWidth: 1,
		borderTopColor: '#38434D',
		width: '100%',
	},
	links: {
		width: '50%',
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
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
