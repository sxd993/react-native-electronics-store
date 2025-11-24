import { Extrapolation, interpolate, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from "react-native-reanimated";

const COLLAPSING_HEADER_CONFIG = {
  revealOffset: 12,
  revealDistance: 64,
  scrollEventThrottle: 16,
} as const;

export type CollapsingHeaderConfig = Partial<typeof COLLAPSING_HEADER_CONFIG>;

export const useCollapsingHeader = (config?: CollapsingHeaderConfig) => {
  const { revealOffset, revealDistance, scrollEventThrottle } = {
    ...COLLAPSING_HEADER_CONFIG,
    ...config,
  };

  const scrollY = useSharedValue(0);

  const progress = useDerivedValue(() => {
    const start = revealOffset;
    const end = revealOffset + revealDistance;

    return interpolate(scrollY.value, [start, end], [0, 1], Extrapolation.CLAMP);
  }, [revealOffset, revealDistance]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return {
    scrollY,
    progress,
    onScroll,
    scrollEventThrottle,
  };
};
