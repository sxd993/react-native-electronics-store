import React from "react";
import { Pressable, Text, View } from "react-native";

type TabBarButtonProps = {
  label: string;
  icon?: React.ReactNode;
  isFocused: boolean;
  labelColor: string;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
};

export function TabBarButton({
  label,
  icon,
  isFocused,
  labelColor,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
}: TabBarButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      accessibilityRole="button"
      className="px-3 py-2"
    >
      <View className="items-center">
        {icon}

        <Text
          className="mt-1 text-md font-medium"
          style={{ color: labelColor }}
          numberOfLines={1}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
