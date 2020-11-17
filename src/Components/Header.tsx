import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Box, Text} from './Theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RectButton} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  iconColor: string;
  textColor: string;
  bgColor: string;
}
const Header = ({
  left,
  right,
  title,
  iconColor,
  bgColor,
  textColor,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  return (
    <Box
      flexDirection="row"
      style={{marginTOp: insets.top}}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      marginVertical="s">
      <RectButton onPress={left.onPress}>
        <Box
          height={38}
          width={38}
          justifyContent="center"
          alignItems="center"
          style={{borderRadius: 38 / 2}}
          backgroundColor={bgColor}>
          <Icon name={left.icon} size={30} color={iconColor} />
        </Box>
      </RectButton>
      <Text
        variant="header"
        color={textColor}
        fontFamily={t('fontBold')}
        style={{textTransform: 'uppercase'}}>
        {title}
      </Text>

      <RectButton onPress={right.onPress}>
        <Box
          height={38}
          width={38}
          justifyContent="center"
          alignItems="center"
          style={{borderRadius: 38 / 2}}
          backgroundColor={bgColor}>
          <Icon name={right.icon} size={25} color={iconColor} />
        </Box>
      </RectButton>
    </Box>
  );
};

export default Header;
