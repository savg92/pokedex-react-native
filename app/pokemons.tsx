import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getPokemons } from '../services/pokeApi';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';

export default function Component() {
	// const {
	// 	data,
	// 	isLoading: loading,
	// 	error,
	// } = useQuery({
	// 	queryKey: ['pokemon'],
	// 	queryFn: () => getPokemons(100, 0),
	// });
	// console.log(data);

	return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Pokemons</Text>
            {/* {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            {data &&
                data.map((pokemon, index) => (
                    <Text key={index}>
                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                    </Text>
                ))} */}
            <Link href={'/'}>
                <Text>Go to back</Text>
            </Link>
            <StatusBar style='auto' />
        </View>
		// <ScrollView>
		// 	<Text style={styles.tittle}>Pokemons</Text>
		// 	{loading && <Text>Loading...</Text>}
		// 	{error && <Text>Error: {error.message}</Text>}
		// 	{data &&
		// 		data.map((pokemon, index) => (
		// 			<Text key={index}>
		// 				{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
		// 			</Text>
		// 		))}
		// 	<Link href={'/'}>
		// 		<Text>Go to back</Text>
		// 	</Link>
		// 	<StatusBar style='auto' />
		// </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tittle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
