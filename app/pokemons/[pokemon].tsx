import { Link, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
							<Text>{data.id}</Text>
						</View>
						<Image
							source={{ uri: data.img }}
							style={{ width: 150, height: 150 }}
						/>
						<Text>{data.type}</Text>
						<Text>{data.height}</Text>
						<Text>{data.weight}</Text>
					</View>
				)}
			</View>
			<Link href='/pokemons'>
				<Text>Go to back</Text>
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
});

export default Pokemon;
