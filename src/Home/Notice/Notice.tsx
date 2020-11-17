import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header, Box, TopCurve, theme} from '../../Components';
import Picker from './Picker';
import {HomeNavigationProps} from '../../Components/Routes';
import {Dimensions, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

const footerHeight = Dimensions.get('window').width / 3;

const Notice = ({navigation}: HomeNavigationProps<'Notice'>) => {
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
        title={t('menu.screens.2.name')}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />
      <Picker {...{navigation}} />
      <Box backgroundColor={bg_state.backgroundColor}>
        <TopCurve footerHeight={footerHeight} />
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          height={footerHeight}>
          <Image
            style={{
              ...StyleSheet.absoluteFillObject,
              height: undefined,
              width: undefined,
              borderTopLeftRadius: theme.borderRadii.xl,
            }}
            source={require('../../../assets/images/bg1.jpg')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Notice;
