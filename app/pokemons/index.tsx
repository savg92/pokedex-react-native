import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { getPokemons } from '../../services/pokeApi';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';

export default function Component() {
	const {
		data,
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: ['pokemon'],
		queryFn: () => getPokemons(100, 0),
	});

	return (
		<View style={styles.container}>
			<Text style={styles.tittle}>Pokemons</Text>
			{loading && <Text>Loading...</Text>}
			{error && <Text>Error: {error.message}</Text>}
			{data && data.length === 0 && <Text>No pokemons</Text>}
			{data && data.length > 0 && (
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Link
							href={`/pokemons/${item.name}`}
						>
							<View style={styles.subContainer}>
								<Image
									source={{ uri: item.img }}
									style={{ width: 150, height: 150 }}
								/>
								<View style={styles.subContainer2}>
									<Text>
										{item.name[0].toUpperCase() + item.name.slice(1)}
									</Text>
									<Text>Id: {item.id}</Text>
									<Text>Type: {item.type}</Text>
								</View>
							</View>
						</Link>
					)}
				/>
			)}

			<Link href={'/'}>
				<Button title="Go back" />
			</Link>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
	},
	tittle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	main: {
		flex: 1,
	},
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '95%',
    },
    subContainer2: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
    }
});
