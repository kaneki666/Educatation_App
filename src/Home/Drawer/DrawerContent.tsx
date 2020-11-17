import React, {useState, useEffect} from 'react';
import {Dimensions, Image} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import I18 from 'i18next';

import {Box, theme, Text, Header} from '../../Components';
import DrawerItem, {DrawerItemProps} from './DrawerItem';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
export const Background = require('../../../assets/images/bg.jpg');

interface userDataProps {
  email: string;
  fullname: string;
  photo: string;
}

const {width} = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 800 / 470;
const height = DRAWER_WIDTH * aspectRatio;

const Drawer = () => {
  const navigation = useNavigation();
  const [userdata, setUserData] = useState<userDataProps>();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userinfo');
      const data = JSON.parse(jsonValue);
      setUserData(data);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const items: DrawerItemProps[] = [
    {
      icon: 'home',
      color: 'primary',
      screen: 'Home',
      label: 'Home',
      index: 0,
    },
    {
      icon: 'activity',
      color: 'bluish',
      screen: 'Service',
      label: 'Service',
      index: 1,
    },
    {
      icon: 'archive',
      color: 'orange',
      screen: 'Notice',
      label: 'Notice',
      index: 2,
    },
    {
      icon: 'aperture',
      color: 'red',
      screen: 'Blog',
      label: 'Blog',
      index: 3,
    },
    {
      icon: 'log-out',
      color: 'black',
      screen: 'Logout',
      label: 'Logout',
      index: 4,
    },
  ];

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="title"
        />

        <Header
          left={{
            icon: 'ios-close-sharp',
            onPress: () => navigation.closeDrawer(),
          }}
          right={{
            onPress: () => true,
          }}
          title={I18.t('menu.title')}
          iconColor="white"
          textColor="white"
          bgColor="title"
        />
      </Box>
      <Box flex={0.85}>
        <Box flex={1} backgroundColor="title" />
        <Box flex={1} backgroundColor="primary" />

        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          justifyContent="center"
          padding="xl"
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl">
          {userdata ? (
            <>
              <Box
                top={-theme.spacing.xl}
                alignSelf="center"
                backgroundColor="primary"
                width={100}
                height={100}
                style={{borderRadius: 50}}>
                <Image
                  source={{
                    uri: `https://shikhhangon.bangabandhuolympiad.com/${userdata.photo}`,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                  }}
                />
              </Box>
              <Box marginVertical="m">
                <Text variant="title1" textAlign="center">
                  {userdata.fullname}
                </Text>
                <Text variant="body" textAlign="center">
                  {userdata.email}
                </Text>
              </Box>
            </>
          ) : (
            <Box>
              <Box
                top={-theme.spacing.xl}
                alignSelf="center"
                backgroundColor="primary"
                width={100}
                height={100}
                style={{borderRadius: 50}}
              />
            </Box>
          )}
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} navigation={navigation} />
          ))}
        </Box>
      </Box>
      <Box
        flex={0.15}
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        borderBottomLeftRadius="xl"
        height={height * 0.61}>
        <Image
          source={Background}
          style={{
            width: DRAWER_WIDTH,
            height,

            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
