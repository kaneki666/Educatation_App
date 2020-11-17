import React, {ReactNode} from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageRequireSource,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, theme} from '../../Components';
import {useSelector} from 'react-redux';
export const Background = require('../../../assets/images/bg.jpg');
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
  BgColor: string;
  image: ImageRequireSource;
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
  image,
  BgColor,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const bg_state = useSelector((state: any) => state.authState.modeData);

  return (
    <Box flex={1} backgroundColor="title">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor={bg_state.backgroundColor}>
        <Box
          borderBottomLeftRadius={borderLeftRadius}
          borderBottomRightRadius={borderRightRadius}
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={{uri: `https://web.shikkhangon.com/uploads/blog/${image}`}}
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
          source={{uri: `https://web.shikkhangon.com/uploads/blog/${image}`}}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          backgroundColor={bg_state.backgroundColor}
          borderTopLeftRadius={nullRadiusLeft}
          borderTopRightRadius={nullRadiusRight}
          flex={1}>
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
        <Box backgroundColor="title" paddingTop="l">
          {footer}
          <Box height={insets.top} />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
