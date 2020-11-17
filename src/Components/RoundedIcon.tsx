import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Theme, Box, Text} from './Theme';

interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
  iconRatio: number;
}
const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{borderRadius: size / 2}}
      {...{backgroundColor}}>
      <Text style={{width: iconSize, height: iconSize}} {...{color}}>
        <Icon size={iconSize} color="white" {...{name}} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconSize: 0.7,
};

export default RoundedIcon;
