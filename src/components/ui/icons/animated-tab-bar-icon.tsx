import React, { useEffect, useRef } from 'react';
import { Animated, type ViewStyle } from 'react-native';

interface AnimatedTabBarIconProps {
  icon: React.ReactNode | ((props: { color: string; focused: boolean; }) => React.ReactNode);
  color: string;
  focused: boolean;
  size?: number;
}

export function AnimatedTabBarIcon({ icon, color, focused, size = 24 }: AnimatedTabBarIconProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.2 : 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [focused, scaleAnim]);

  const animatedStyle: Animated.AnimatedProps<ViewStyle> = {
    transform: [{ scale: scaleAnim }],
  };

  const renderIcon = () => {
    if (typeof icon === 'function') {
      return icon({ color, focused });
    }
    return icon;
  };

  return (
    <Animated.View style={[animatedStyle, { width: size, height: size, alignItems: 'center', justifyContent: 'center' }]}>
      {renderIcon()}
    </Animated.View>
  );
}
