import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Svg, Path} from 'react-native-svg';
import {Box, Header, Text} from '../../Components';
import {HomeNavigationProps} from '../../Components/Routes';
import BlogList from './BlogsList';
import {useSelector} from 'react-redux';

const Name = ({navigation}: HomeNavigationProps<'Blog'>) => {
  const {t} = useTranslation();
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
        title={t('menu.screens.3.name')}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />
      <BlogList {...{navigation}} />
    </Box>
  );
};

export default Name;
