import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const FiltersBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Pressable
        className="flex-row items-center justify-between px-4 py-3 rounded-2xl bg-black active:opacity-90 shadow-sm"
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <Text className="text-white text-base font-semibold">Все фильтры</Text>
        <Text className="text-white text-lg">{isOpen ? "−" : "+"}</Text>
      </Pressable>

      {isOpen && (
        <View className="mt-3 rounded-3xl border border-gray-100 bg-white px-4 py-5 shadow-md">
          <Text className="text-gray-900 font-semibold text-lg">Фильтры в разработке</Text>
          <Text className="text-gray-500 mt-1">
            Здесь появится выбор категорий, цены и брендов. Пока доступно обновление списка свайпом вниз.
          </Text>
        </View>
      )}
    </View>
  );
};
