import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import "../../global.css";
import { AppProvider } from "./providers/AppProvider";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <SafeAreaProvider>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="product/[id]" />
              <Stack.Screen name="checkout" />
            </Stack>
          </View>
        </SafeAreaProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
