import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageRequireSource,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Box} from '../../Components';
import Animated, {interpolate, add, Extrapolate} from 'react-native-reanimated';
import {mixColor, mix, usePanGestureHandler} from 'react-native-redash';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {useSpring} from './Animations';

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
  style: StyleProp<Animated.AnimateStyle<ViewStyle>>;
  color: string;
}

const {width: wWidth, height: hHeight} = Dimensions.get('window');
const width = wWidth * 0.9;
const height = hHeight * 0.65;
const borderRadius = 24;

const Card = ({position, onSwipe, source, step, style, color}: CardProps) => {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8');
  const translateYOffset = mix(position, 0, -55);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1, 0.7],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  );

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center">
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            height,
            width,
            borderRadius,
            overflow: 'hidden',
            transform: [{translateY}, {translateX}, {scale}],
          }}>
          <Animated.Image
            {...{source}}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{scale: imageScale}],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
