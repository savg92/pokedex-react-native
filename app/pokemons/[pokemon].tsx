import { Link, useGlobalSearchParams, useNavigation } from 'expo-router';
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../../services/pokeApi';
import { useQuery } from '@tanstack/react-query';

const Pokemon = () => {
	const { pokemon } = useGlobalSearchParams();
	const {
		data,
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: ['pokemon', pokemon],
		queryFn: () => getPokemon(pokemon?.toString()),
	});
	const navigate = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pokemon</Text>
			<View style={styles.main}>
				{loading && <Text>Loading...</Text>}
				{error && <Text>Error: {error.message}</Text>}
				{data && (
					<View>
						<View>
							<Text>{data.name[0].toUpperCase() + data.name.slice(1)}</Text>
							<Text>Id: {data.id}</Text>
						</View>
						<Image
							source={{ uri: data.img }}
							style={{ width: 150, height: 150 }}
						/>
						<View>
							<Text>Type:</Text>
							{data.type.map((type: any, index: number) => (
								<Text key={index}>{type.type.name}</Text>
							))}
						</View>
						<View>
							<Text>Abilities:</Text>
							{data.avilities.map((avility: any, index: number) => (
								<Text key={index}>{avility.ability.name}</Text>
							))}
						</View>
						<Text>Weight: {data.weight} pounds</Text>
						<Text>Height: {data.height} feet</Text>
					</View>
				)}
			</View>

			<Link
				href='/pokemons'
				asChild
			>
				<Pressable style={styles.button} >
					<Text style={styles.buttonText}>Go to pokemons</Text>
				</Pressable>
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
	},
	main: {
		marginTop: 20,
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
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

export default Pokemon;
