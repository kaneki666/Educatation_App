import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Animated, {Easing} from 'react-native-reanimated';
import {loop, mix} from 'react-native-redash';
import {useMemoOne} from 'use-memo-one';

import {Box, theme, TopCurve, Header, Text, Logo} from '../../Components';
import {HomeNavigationProps} from '../../Components/Routes';
import {Get_Notices_Api} from '../../config/Apis';

interface NoticeListProps {
  title: string;
  date: Date;
  link: string;
  navigation: HomeNavigationProps<'NoticeList'>;
  route: any;
}

const styles = StyleSheet.create({
  footer: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const footerHeight = Dimensions.get('window').width / 3;

const {
  Value,
  Clock,
  useCode,
  set,
  block,
  cond,
  and,
  not,
  clockRunning,
  startClock,
  stopClock,
} = Animated;

const NoticeList = ({
  title,
  date,
  navigation,
  link,
  route,
}: NoticeListProps) => {
  const {t} = useTranslation();
  const {type, name} = route.params;

  const [NoticeData, setNoticeData] = useState([]);
  useEffect(() => {
    Get_Notices_Api(type).then((res) => {
      setNoticeData(res);
      setfectching(false);
      setPlay(false);
    });
  }, [type]);

  const [play, setPlay] = useState(false);

  const [fetcing, setfectching] = useState(true);
  const {isPlaying, animation, clock} = useMemoOne(
    () => ({
      isPlaying: new Value(0),
      animation: new Value(0),
      clock: new Clock(),
    }),
    [],
  );
  useCode(
    () =>
      block([
        cond(and(not(clockRunning(clock)), isPlaying), startClock(clock)),
        cond(and(clockRunning(clock), not(isPlaying)), stopClock(clock)),
        set(
          animation,
          loop({
            clock,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            boomerang: true,
            autoStart: false,
          }),
        ),
      ]),
    [],
  );
  setTimeout(() => {
    isPlaying.setValue(play ? 0 : 1);
  }, 10);
  const scale = mix(animation, 0.4, 1);
  const rotate = mix(animation, 0, 2 * Math.PI * 5);

  const bg_state = useSelector((state) => state.authState.modeData);

  return (
    <Box flex={1} backgroundColor={bg_state.backgroundColor}>
      <Header
        left={{icon: 'ios-menu', onPress: () => navigation.openDrawer()}}
        right={{
          icon: 'ios-settings-outline',
          onPress: () => {
            navigation.navigate('Settings');
          },
        }}
        title={t(`Notice.category.${name}`)}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />
      <TopCurve footerHeight={footerHeight} />
      <Box
        flex={1}
        marginTop="xl"
        margin="m"
        maxHeight={Dimensions.get('window').height - footerHeight - 100}>
        <ScrollView>
          {!fetcing ? (
            NoticeData.map((notice) => (
              <Box margin="s" flexDirection="row" key={notice.id}>
                <Box maxWidth={Dimensions.get('window').width - 100}>
                  <Text
                    color={bg_state.textColor}
                    // fontFamily={t('fontBold')}
                    fontWeight="bold"
                    fontSize={24}>
                    {notice.name}
                  </Text>
                </Box>
                <Box
                  position="absolute"
                  right={0}
                  justifyContent="center"
                  alignSelf="center">
                  <Pressable
                    onPress={() =>
                      navigation.navigate('NoticeRead', {
                        notice: notice,
                        navigate: navigation,
                      })
                    }>
                    <Icon name="file-pdf" color="red" size={28} />
                  </Pressable>
                </Box>
              </Box>
            ))
          ) : (
            <View style={styles.container}>
              <Animated.View style={{transform: [{scale}, {rotate}]}}>
                <Logo />
              </Animated.View>
            </View>
          )}
        </ScrollView>
      </Box>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}>
        <Image
          style={styles.footer}
          source={require('../../../assets/images/bg1.jpg')}
        />
      </Box>
    </Box>
  );
};

export default NoticeList;
