import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AppProvider } from "./providers/AppProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </AppProvider>
  );
}
