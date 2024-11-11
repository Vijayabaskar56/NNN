import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';

import {
  Feed as FeedIcon,
  Settings,
  Settings as SettingsIcon,
  Style as StyleIcon,
} from '@/components/ui/icons';
import AnimatedHomeIcon from '@/components/ui/icons/home';
import { BlurView } from 'expo-blur';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff3f',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: 84,
          paddingTop: 0,
          paddingBottom: 30,
          backgroundColor: 'transparent',
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={99}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              height: 84,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, focused, size }) => <AnimatedHomeIcon color={color} focused={focused} size={size} />,
          animation: 'fade',
          transitionSpec: {
            animation: 'spring',
            config: {
              damping: 20,
              mass: 1,
              stiffness: 100,
              overshootClamping: false,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            }
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Style',
          headerShown: false,
          tabBarIcon: ({ color }) => <StyleIcon color={color} />,
          animation: 'fade',
          transitionSpec: {
            animation: 'spring',
            config: {
              damping: 20,
              mass: 1,
              stiffness: 100,
              overshootClamping: false,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            }
          },
        }}
      />
      <Tabs.Screen
        name="demo"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <Settings color={color} />,
          animation: 'fade',
          transitionSpec: {
            animation: 'spring',
            config: {
              damping: 20,
              mass: 1,
              stiffness: 100,
              overshootClamping: false,
              restDisplacementThreshold: 0.01,
              restSpeedThreshold: 0.01,
            }
          },
        }}
      />
    </Tabs>
  );
}
