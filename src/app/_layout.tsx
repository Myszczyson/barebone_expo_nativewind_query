import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const queryClient = new QueryClient();

const RootLayout: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<Stack screenOptions={{ headerShown: false }} />

				<StatusBar style="light" />
			</SafeAreaProvider>
		</QueryClientProvider>
	);
};

export default RootLayout;
