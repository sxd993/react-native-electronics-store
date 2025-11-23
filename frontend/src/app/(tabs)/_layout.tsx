import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { AppHeaderBar } from "@/widgets/app-header";
import { CartTabIcon } from "@/shared/icons";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#2563eb",
            header: () => <AppHeaderBar city="Москва" />,
            tabBarStyle: {
                height: 55,
                paddingBottom: 6,
                paddingTop: 6,
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderTopColor: "#e5e7eb",
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Каталог",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Корзина",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <CartTabIcon color={color} size={size} />,
                }}
            />
        </Tabs>
    )
}
