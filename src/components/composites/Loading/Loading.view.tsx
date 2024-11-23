import React, { useEffect, useRef } from 'react';
import { ILoadingViewProps } from './Loading.model';
import { Animated, StatusBar, View, Text, Easing } from 'react-native';
import Style from './Loading.style';

export default function LoadingView(props: ILoadingViewProps) {
  const { title, subTitle, isPixPayment } = props;

  // Usar useRef para manter o valor da animação entre as renderizações
  const rotate = useRef(new Animated.Value(0)).current;

  const animateRotation = () => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 2000, 
        useNativeDriver: true, 
        easing: Easing.linear, 
      })
    ).start();
  };

  useEffect(() => {
    animateRotation();
  }, []); 

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const boxes = [];
  const boxCount = 6; 
  const radius = 35; 
  const arcLength = 180;

  for (let i = 0; i < boxCount; i++) {
    const angle = (i * arcLength) / (boxCount - 1); 
    const x = Math.cos((angle * Math.PI) / 180) * radius; 
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    const rotation = angle - 90; 
    boxes.push({ x, y, rotation });
  }

  return (
    <View style={Style.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />

      <Animated.View
        style={[Style.circle, { transform: [{ rotate: rotateInterpolate }] }]}
      >
        {boxes.map((position, index) => (
          <View
            key={index}
            style={[
              Style.box,
              {
                transform: [
                  { translateX: position.x }, 
                  { translateY: position.y },
                  { rotate: `${position.rotation}deg` }, 
                ],
              },
            ]}
          />
        ))}
      </Animated.View>

      {title && isPixPayment && <Text style={[Style.loadingText, { marginTop: 40}]}>{title}</Text>}
      {subTitle && isPixPayment && <Text style={Style.loadingText}>{subTitle}</Text>}
    </View>
  );
}
