import * as React from 'react';
import {
  TouchableOpacity,
  Alert,
  StatusBar,
  Dimensions,
  Animated,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import data from './data';
import {theme, Button, Box} from '../../Components';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const ICON_SIZE = 42;
const ITEM_HEIGHT = ICON_SIZE * 2;
const colors = {
  yellow: '#FFE8A3',
  dark: '#2D2D2D',
};
const {width, height} = Dimensions.get('window');

const Icon = React.memo(({icon, color}) => {
  return <SimpleLineIcons name={icon} color={color} size={ICON_SIZE} />;
});

const Item = React.memo(({icon, color, name, showText}, {index}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.itemWrapper}>
      {showText ? (
        <Text style={[styles.itemText, {color}]}>
          {t(`Notice.category.${name}`)}
        </Text>
      ) : (
        // for spacing purposes
        <View />
      )}
      <Icon icon={icon} color={color} />
    </View>
  );
});

const ConnectWithText = React.memo(() => {
  const {t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);
  return (
    <View
      style={{
        position: 'absolute',
        top: height / 4 - ITEM_HEIGHT * 2,
        width: width * 0.7,
        paddingHorizontal: 14,
      }}>
      <Text
        style={{
          color: bg_state.noticeColor,
          fontSize: 45,
          fontWeight: '700',
          lineHeight: 62,
        }}>
        {t('menu.screens.2.name')}...
      </Text>
    </View>
  );
});

const ConnectButton = React.memo(({onPress}) => {
  const {t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);
  return (
    <View
      style={{
        position: 'absolute',
        top: height / 3 + ITEM_HEIGHT / 2,
        paddingHorizontal: 14,
      }}>
      <View
        style={{
          height: ITEM_HEIGHT * 2,
          width: 4,
          backgroundColor: bg_state.noticeColor,
        }}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 12,
          backgroundColor: bg_state.noticeColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        activeOpacity={0.8}>
        <Button onPress={onPress} variant="buttonPrimary">
          <Text style={{fontSize: 32, fontWeight: '800', color: colors.dark}}>
            {t('Notice.open')}!
          </Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
});

const List = React.memo(
  React.forwardRef(
    ({color, showText, style, onScroll, onItemIndexChange}, ref) => {
      return (
        <Animated.FlatList
          ref={ref}
          data={data}
          style={style}
          keyExtractor={(item) => `${item.name}-${item.icon}`}
          bounces={false}
          scrollEnabled={!showText}
          scrollEventThrottle={16}
          onScroll={onScroll}
          decelerationRate="fast"
          snapToInterval={ITEM_HEIGHT}
          showsVerticalScrollIndicator={false}
          renderToHardwareTextureAndroid
          contentContainerStyle={{
            paddingTop: showText ? 0 : height / 2 - ITEM_HEIGHT / 2,
            paddingBottom: showText ? 0 : height / 2 - ITEM_HEIGHT / 2,
            paddingHorizontal: 20,
          }}
          renderItem={({item, index}) => {
            return (
              <Item {...item} {...index} color={color} showText={showText} />
            );
          }}
          onMomentumScrollEnd={(ev) => {
            const newIndex = Math.round(
              ev.nativeEvent.contentOffset.y / ITEM_HEIGHT,
            );

            if (onItemIndexChange) {
              onItemIndexChange(newIndex);
            }
          }}
        />
      );
    },
  ),
);
export default function App(props) {
  const [index, setIndex] = React.useState(0);
  const bg_state = useSelector((state) => state.authState.modeData);
  const onConnectPress = React.useCallback(() => {
    console.log(data[index].bangla);
    props.navigation.navigate('NoticeList', {
      type: data[index].bangla,
      name: data[index].name,
    });
  }, [index]);
  const yellowRef = React.useRef();
  const darkRef = React.useRef();
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );
  const onItemIndexChange = React.useCallback(setIndex, []);
  React.useEffect(() => {
    scrollY.addListener((v) => {
      if (darkRef?.current) {
        darkRef.current.scrollToOffset({
          offset: v.value,
          animated: false,
        });
      }
    });
  });

  return (
    <Box
      backgroundColor={bg_state.backgroundColor}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar hidden />
      <ConnectWithText />
      <List
        ref={yellowRef}
        color={bg_state.noticeColor}
        style={StyleSheet.absoluteFillObject}
        onScroll={onScroll}
        onItemIndexChange={onItemIndexChange}
      />
      <List
        ref={darkRef}
        color={colors.dark}
        showText
        style={{
          position: 'absolute',
          backgroundColor: bg_state.noticeColor,
          width,
          height: ITEM_HEIGHT,
          top: height / 2 - ITEM_HEIGHT / 2,
        }}
      />
      <ConnectButton onPress={onConnectPress} />
      <Item />
    </Box>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ITEM_HEIGHT,
  },
  itemText: {
    fontSize: 26,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
});
