import React from 'react';
import {ImageRequireSource, StyleSheet, Image, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Box, theme, Text} from '../../../Components';
import {useSelector} from 'react-redux';

interface ShapeProps {
  color: string;
  source: ImageRequireSource;
  borderRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  name: string;
  onPress: () => void;
}

const Shape = ({
  color,
  source,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  name,
  onPress,
}: ShapeProps) => {
  const {t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);
  return (
    <Pressable onPress={onPress}>
      <Box>
        <Box
          height={100}
          width={100}
          backgroundColor={color}
          margin="m"
          style={{
            borderRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            borderTopLeftRadius,
            borderTopRightRadius,
          }}>
          <Image
            source={source}
            resizeMode="center"
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
            }}
          />
        </Box>
        <Text
          color={bg_state.textColor}
          textAlign="center"
          fontFamily={t('font')}
          lineHeight={30}>
          {name}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Shape;
