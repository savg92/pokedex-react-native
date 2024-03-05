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


export default function RootLayoutNav() {
	const queryClient = new QueryClient();

	const colorScheme = useColorScheme() || 'light';

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
				</Stack>
				</QueryClientProvider>
			</ThemeProvider>
		</TamaguiProvider>
	);
}
