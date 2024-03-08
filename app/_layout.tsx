import { Stack } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TamaguiProvider, createTamagui } from '@tamagui/core';
// import { config } from '@tamagui/config/v3';

import { useColorScheme } from 'react-native';
import tamaguiConfig from '../tamagui.config';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayoutNav() {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	});

	const queryClient = new QueryClient();

	const colorScheme = useColorScheme() || 'light';

	useEffect(() => {
		if (loaded) {
			// can hide splash screen here
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<TamaguiProvider
			config={tamaguiConfig}
			defaultTheme={colorScheme}
		>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<QueryClientProvider client={queryClient}>
					<Stack>
						<Stack.Screen
							name='(tabs)'
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='modal'
							options={{ presentation: 'modal' }}
						/>
						<Stack.Screen
							name='index'
							options={{
								title: 'Home',
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='pokemons'
							options={{
								title: 'Pokemons',
								headerShown: false,
							}}
						/>
					</Stack>
				</QueryClientProvider>
			</ThemeProvider>
		</TamaguiProvider>
	);
}
