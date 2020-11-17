import React, {useState} from 'react';
import {StyleSheet, Switch, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import Swipe from './swipe';
import {HomeNavigationProps} from '../../Components/Routes';
import {Container, theme, RNSwitch, Box, Text} from '../../Components';
import {changeDarkMode} from '../../../reducers/ChangeDarkMode';

interface SettingsProps {}

const Settings = ({navigation}: HomeNavigationProps<'Settings'>) => {
  const dispatch = useDispatch();
  const {i18n, t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);

  const [lang, setLang] = useState('en');
  const [switchStateEnglish, setSwitchStateEnglish] = useState(true);
  const [switchStateBangla, setSwitchStateBangla] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const language = () => {
    if (lang === 'en') {
      setLang('bd');
      setSwitchStateBangla(!switchStateBangla);
      setSwitchStateEnglish(!switchStateEnglish);
      i18n.changeLanguage('bd');
    } else {
      setLang('en');
      setSwitchStateEnglish(!switchStateEnglish);
      setSwitchStateBangla(!switchStateBangla);
      i18n.changeLanguage('en');
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(changeDarkMode(!darkMode));
  };

  const Row = ({item}) => (
    <RectButton style={styles.rectButton} onPress={() => true}>
      <Box flexDirection="row">
        <Text
          fontSize={20}
          fontFamily={t('fontBold')}
          color="white"
          textAlign="center"
          paddingRight="l">
          {t('Setting.footer')}
        </Text>
        <Icon name="caret-back-circle" size={30} color="white" />
      </Box>
    </RectButton>
  );

  const SwipeableRow = ({item, index}) => {
    return (
      <Swipe navigation={navigation}>
        <Row item={item} />
      </Swipe>
    );
  };

  const footer = <SwipeableRow />;

  return (
    <Container
      borderLeftRadius="xl"
      borderRightRadius="null"
      borderBottomLeftRadius={theme.borderRadii.xl}
      borderBottomRightRadius={0}
      nullRadiusLeft="null"
      bgColor={bg_state.backgroundColor}
      {...{footer}}>
      <Box>
        <Text
          color={bg_state.textColor}
          variant="header"
          fontSize={25}
          lineHeight={30}
          textAlign="center"
          marginTop="xl"
          fontFamily={t('fontBold')}>
          {t('Setting.header')}
        </Text>
        <Box justifyContent="center" alignItems="center">
          <Box flexDirection="row" margin="l">
            <Text fontSize={16} color={bg_state.textColor} paddingRight="xl">
              English
            </Text>
            <RNSwitch
              handleOnPress={language}
              activeTrackColor="#FE5F8F"
              value={switchStateEnglish}
            />
          </Box>
          <Box flexDirection="row">
            <Text fontSize={16} color={bg_state.textColor} paddingRight="xl">
              বাংলা
            </Text>
            <RNSwitch
              handleOnPress={language}
              activeTrackColor="#667eea"
              value={switchStateBangla}
            />
          </Box>
        </Box>
        <Box>
          <Text
            color={bg_state.textColor}
            variant="header"
            fontSize={25}
            lineHeight={30}
            textAlign="center"
            marginTop="xl"
            fontFamily={t('fontBold')}>
            Dark Mode
          </Text>
          <Box justifyContent="center" alignItems="center" marginTop="l">
            <RNSwitch
              handleOnPress={handleDarkMode}
              activeTrackColor="black"
              value={darkMode}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  rectButton: {
    height: 80,

    justifyContent: 'center',
    alignSelf: 'center',
  },
});
