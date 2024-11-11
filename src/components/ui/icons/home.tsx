import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function AnimatedHomeIcon({ color = '#000', size = 24, focused = false }) {
  const animation = useSharedValue(100);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(animation.value, {
      duration: 600,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }),
  }));

  useEffect(() => {
    animation.value = focused ? 0 : 100;
  }, [focused]);

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedPath
        d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={100}
        animatedProps={animatedProps}
      />
    </Svg>
  );
}
