import { Stack, router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AppProvider } from "./providers/AppProvider";
import { CheckoutHeader } from "@/widgets/checkout/CheckoutHeader";


export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Stack
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="product/[id]"
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
                title: "Товар",
              }}
            />
            <Stack.Screen
              name="checkout"
              options={{
                headerShown: true,
                header: () => <CheckoutHeader onBack={() => router.back()} />,
                title: "Оформление",
              }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </AppProvider>
  );
}
