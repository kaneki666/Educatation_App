import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {multiply, divide} from 'react-native-reanimated';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';

import Slide, {SLIDE_HEIGHT} from './Slide';
import {AuthNavigationProps} from '../../Components/Routes';
import Subslide from './Subslide';
import Dot from './Dot';
import {theme} from '../../Components';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
});

const slides = [
  {
    title: 'Live Class',
    color: '#BFEAF5',
    picture: require('../../../assets/images/14.png'),
    subtitle: 'Find Your Classes',
    des:
      'Interact with your friends and teachers through chats and comments, which helps to make the class more dynamic.',
  },
  {
    title: 'Tuiton',
    color: '#BEECC4',
    picture: require('../../../assets/images/11.png'),
    subtitle: 'Find your teachers',
    des: 'Exploer hundreds of tecaher, choose the one you want to learn from!',
  },
  {
    title: 'Olympiad',
    color: '#FFE4D9',
    picture: require('../../../assets/images/12.png'),
    subtitle: 'Quiz,Learn in fun way',
    des: 'Challenge your friends , win amazing prizes.',
  },
  {
    title: 'Notice',
    color: '#F1E0FF',
    picture: require('../../../assets/images/13.png'),
    subtitle: 'Hear it first, Know it first',
    des: 'Get all the educational notices in one place',
  },
];

const OnBoarding = ({navigation}: AuthNavigationProps<'OnBoarding'>) => {
  const scroll = useRef<Animated.ScrollView>(null);
  let x = useValue(0);
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{onScroll}}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>
          <Animated.View
            style={{
              flexDirection: 'row',
              width: width * slides.length,
              flex: 1,
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {slides.map(({subtitle, des}, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{last}}
                  {...{subtitle, des}}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current?.getNode().scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
