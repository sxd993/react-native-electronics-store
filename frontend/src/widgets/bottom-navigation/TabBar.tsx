import React from "react";
import { View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabBarButton } from "./TabBarButton";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const inset = useSafeAreaInsets();

  return (
    <View
      className="absolute self-center flex-row items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-lg px-3"
      style={{
        bottom: inset.bottom ? inset.bottom + 12 : 12,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const rawLabel = options.tabBarLabel ?? options.title ?? route.name;
        const label = typeof rawLabel === "string" ? rawLabel : route.name;

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
          size: 100,
        });

        return (
          <TabBarButton
            key={route.key}
            label={label}
            icon={icon}
            isFocused={isFocused}
            labelColor={color}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
          />
        );
      })}
    </View>
  );
}
