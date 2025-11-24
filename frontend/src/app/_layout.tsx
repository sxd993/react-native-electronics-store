import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AppProvider } from "./providers/AppProvider";


export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="product/[id]" />
            <Stack.Screen name="checkout" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </AppProvider>
  );
}
