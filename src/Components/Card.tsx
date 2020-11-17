import React from 'react';
import {Image, StyleSheet, Dimensions, ImageRequireSource} from 'react-native';
import {Box, Text} from './Theme';
import {useSelector} from 'react-redux';

interface CardProps {
  id: number;
  headline: string;
  description: string;
  image: ImageRequireSource;
}

const {width} = Dimensions.get('window');

const Card = ({id, headline, description, image}: CardProps) => {
  const CardWidth = width - 20;
  const bg_state = useSelector((state: any) => state.authState.modeData);

  return (
    <Box key={id}>
      <Box justifyContent="center" alignItems="center" margin="l" key={id}>
        <Box width={CardWidth} height={230}>
          <Image
            source={{uri: `https://web.shikkhangon.com/uploads/blog/${image}`}}
            style={{
              ...StyleSheet.absoluteFillObject,
              height: undefined,
              width: undefined,
            }}
          />
        </Box>
        <Box backgroundColor={bg_state.iconBg} height={130} width={CardWidth}>
          <Text variant="blogTitle">{`${headline.substring(0, 25)}...`}</Text>
          <Text
            color={bg_state.textColor}
            variant="body">{`${description.substring(0, 100)}...`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
