import React from 'react';
import {Dimensions} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import {Box} from '../../../Components';

interface name {}

const {width} = Dimensions.get('window');

const Skeletton = () => {
  const middle = width / 2 - 120;
  const CardWidth = width - 30;
  return (
    <Box
      flex={1}
      left={15}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      style={{marginTop: middle}}>
      <Placeholder Animation={ShineOverlay}>
        <PlaceholderLine width={93} height={40} />
        <PlaceholderMedia
          style={{
            height: 230,
            width: CardWidth,
            marginTop: 10,
            borderRadius: 10,
          }}
        />
      </Placeholder>
    </Box>
  );
};

export default Skeletton;
