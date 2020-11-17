import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import theme from './Theme';

interface TopCurveProps {
  footerHeight: Number;
}

const TopCurve = ({footerHeight}: TopCurveProps) => {
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{position: 'absolute', bottom: footerHeight, right: 0}}
      viewBox="0 0 1 1">
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill="#1dab9d" />
    </Svg>
  );
};

export default TopCurve;
