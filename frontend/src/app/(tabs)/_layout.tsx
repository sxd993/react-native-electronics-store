import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { CartTabIcon } from "@/shared/icons";
import { ProductListHeader } from "@/widgets/products-list/ProductListHeader";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#2563eb",
            headerShown: false,
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
                    headerShown: true,
                    header: () => <ProductListHeader city="Москва" />,
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
