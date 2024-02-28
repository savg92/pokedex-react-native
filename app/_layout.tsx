import { Stack } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function RootLayoutNav() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='index'
					options={{ title: 'Home' }}
				/>
			</Stack>
		</QueryClientProvider>
	);
}
