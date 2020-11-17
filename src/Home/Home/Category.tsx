import React from 'react';
import {View, Image, StyleSheet, ImageRequireSource} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text, Box, theme} from '../../Components';
import {useSelector} from 'react-redux';

const SIZE = 70;

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
    source: ImageRequireSource;
    index: number;
  };
}

const Name = ({category: {color, id, title, source, index}}: CategoryProps) => {
  const {t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);

  return (
    <Box marginLeft="m" alignItems="center">
      <Box
        backgroundColor={bg_state.iconBg}
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
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
        marginTop="s"
        fontFamily={t('font')}
        lineHeight={20}>
        {t(`categories.${index}.title`)}
      </Text>
    </Box>
  );
};

export default Name;
