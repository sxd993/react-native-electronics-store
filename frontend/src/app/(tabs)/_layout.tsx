import { CatalogPage } from '@/pages/CatalogPage';
import { TabBar } from '@/widgets/bottom-navigation/TabBar';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='Главная'
                component={CatalogPage}
                options={{ tabBarIcon: () => <Ionicons name="home-outline" size={26} /> }}
            />
            <Tab.Screen
                name='Избранное'
                component={CatalogPage}
                options={{ tabBarIcon: () => <Ionicons name="heart" size={26} color={'#f5554a'} /> }}
            />
        </Tab.Navigator>
    );
}
