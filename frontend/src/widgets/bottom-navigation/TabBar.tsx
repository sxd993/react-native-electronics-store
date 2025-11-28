import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, Text, View } from "react-native";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const inset = useSafeAreaInsets();

    return (
        <View
            className="absolute left-4 right-4 flex-row items-center justify-between rounded-full bg-white"
            style={{
                bottom: inset.bottom ? inset.bottom + 12 : 12,
                paddingVertical: 10,
                paddingHorizontal: 12,
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
                elevation: 8,
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel ??
                    options.title ??
                    route.name;

                const isFocused = state.index === index;
                const activeColor = options.tabBarActiveTintColor ?? "#0f172a";
                const inactiveColor = options.tabBarInactiveTintColor ?? "#94a3b8";
                const color = isFocused ? activeColor : inactiveColor;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                const icon = options.tabBarIcon?.({
                    focused: isFocused,
                    color,
                    size: 22,
                });

                return (
                    <Pressable
                        key={route.name}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        className="flex-1 items-center justify-center"
                        style={{
                            paddingVertical: 6,
                            borderRadius: 999,
                            backgroundColor: isFocused ? "#f8fafc" : "transparent",
                        }}
                    >
                        {icon}
                        <Text
                            className="text-[11px] font-semibold mt-1"
                            style={{ color }}
                        >
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}
