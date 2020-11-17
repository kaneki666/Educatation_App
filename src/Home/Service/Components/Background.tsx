import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Box, theme} from '../../Components';

interface BackgroundProps {}

const Background = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="white">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="white" borderTopLeftRadius="xl" />
      </Box>
      <Box flex={1 / 3} backgroundColor="white">
        <Box flex={1} backgroundColor="title" borderTopRightRadius="xl" />
        <Image
          source={require('../../../assets/images/bg1.jpg')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopRightRadius: theme.borderRadii.xl,
            borderBottomLeftRadius: 120,
          }}
        />
      </Box>
    </View>
  );
};

export default Background;
