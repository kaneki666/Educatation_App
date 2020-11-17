import React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';

import {Text} from '../../Components';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,

    width: undefined,
    height: undefined,
    borderBottomRightRadius: 75,
    marginLeft: 70,
    marginRight: 70,
    alignSelf: 'center',
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({title, right, picture}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={{width}}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} resizeMode="center" />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
