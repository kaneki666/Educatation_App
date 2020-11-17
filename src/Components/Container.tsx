import React, {ReactNode} from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, theme} from './index';
export const Background = require('../../assets/images/bg.jpg');
const {width} = Dimensions.get('window');
const aspectRatio = 814 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  borderLeftRadius: string;
  borderRightRadius: string;
  nullLeftRadiusImage: number;
  nullRightRadiusImage: number;
  nullRadiusRight: string;
  nullRadiusLeft: string;
  bgColor: string;
}

const Container = ({
  children,
  footer,
  borderLeftRadius,
  borderRightRadius,
  nullRightRadiusImage,
  nullLeftRadiusImage,
  nullRadiusRight,
  nullRadiusLeft,
  bgColor,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();

  let bg = 'white';
  const handlebg = () => {
    if (bgColor === 'bgDark') {
      bg = 'bgDark';
    }
  };
  handlebg();
  return (
    <Box flex={1} backgroundColor="title">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor={bg}>
        <Box
          borderBottomLeftRadius={borderLeftRadius}
          borderBottomRightRadius={borderRightRadius}
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={Background}
            style={{
              width,
              height,
              borderBottomLeftRadius: nullLeftRadiusImage,
              borderBottomRightRadius: nullRightRadiusImage,
            }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={Background}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          backgroundColor={bg}
          borderTopLeftRadius={nullRadiusLeft}
          borderTopRightRadius={nullRadiusRight}
          flex={1}>
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box backgroundColor="title" paddingTop="l">
        {footer}
        <Box height={insets.top} />
      </Box>
    </Box>
  );
};

export default Container;
