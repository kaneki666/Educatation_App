import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Box, theme} from '../../Components';

interface BackgroundProps {
  bgColor: string;
}

const Background = ({bgColor}: BackgroundProps) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="orange">
        <Box flex={1} backgroundColor={bgColor} borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor={bgColor} />
        <Box flex={1} backgroundColor="title" />
        <Image
          source={require('../../../assets/images/bg1.jpg')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="orange">
        <Box flex={1} backgroundColor="title" borderTopLeftRadius="xl" />
      </Box>
    </View>
  );
};

export default Background;
