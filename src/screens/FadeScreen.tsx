import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          height: 150,
          width: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}
      />

      <Button title="fadein" onPress={() => fadeIn} />
      <Button title="fadeout" onPress={fadeOut} />
    </View>
  );
};
