import React from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {Theme, Box} from '../../Components/Theme';
import {RectButton} from 'react-native-gesture-handler';
import {RoundedIcon, Text} from '../../Components';
import {changeAuth} from '../../../reducers/changeAuthState';
import {HomeNavigationProps} from '../../Components/Routes';

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  screen: string;
  label: string;
  index: number;
  navigation?: any;
}

const DrawerItem = ({
  icon,
  color,
  screen,
  label,
  navigation,
  index,
}: DrawerItemProps) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  return (
    <RectButton
      onPress={() => {
        if (screen === 'Logout') {
          dispatch(changeAuth(false));
          const RemoveLoginData = async () => {
            try {
              await AsyncStorage.removeItem('@storage_Key');
              await AsyncStorage.removeItem('userinfo');
            } catch (e) {
              console.log(e);
            }
          };
          RemoveLoginData();
        } else {
          navigation.navigate(screen);
        }
      }}>
      <Box flexDirection="row" alignItems="center" padding="s" borderRadius="m">
        <RoundedIcon
          iconRatio={0.5}
          size={36}
          name={icon}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" marginLeft="m">
          {t(`menu.screens.${index}.name`)}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
