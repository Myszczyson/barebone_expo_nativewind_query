import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { RequireContext } from "expo-router/build/types";

// Must be exported or Fast Refresh won't update the context
export function App() {
	const ctx = require.context("./src/app") as RequireContext;
	return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
