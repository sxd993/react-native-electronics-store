import { Header } from "@/widgets/header/Header";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";

const TITLE_ANIMATION_METRICS = {
  hiddenOpacity: 0,
  visibleOpacity: 1,
  hiddenOffset: 6,
} as const;

type CollapsingHeaderProps = {
  title: string;
  onBack: () => void;
  progress: SharedValue<number>;
};

export const CollapsingHeader = ({ title, onBack, progress }: CollapsingHeaderProps) => {
  const animatedTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0, 1],
      [TITLE_ANIMATION_METRICS.hiddenOpacity, TITLE_ANIMATION_METRICS.visibleOpacity],
      Extrapolation.CLAMP
    ),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [TITLE_ANIMATION_METRICS.hiddenOffset, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <Header
      onBack={onBack}
      title={
        <Animated.Text
          className="text-2xl font-semibold text-gray-900 leading-tight text-center"
          numberOfLines={1}
          style={animatedTitleStyle}
        >
          {title}
        </Animated.Text>
      }
    />
  );
};
