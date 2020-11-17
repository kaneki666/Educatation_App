import React from 'react';
import {Box, Text} from './Theme';
import Button from './Button';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({onPress, title, action}: FooterProps) => {
  return (
    <Box alignItems="center" marginTop="l">
      <TouchableWithoutFeedback {...{onPress}}>
        <Text variant="button" color="white">
          <Text> {`${title} `}</Text>
          <Text marginLeft="s" color="primary">
            {action}
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default Footer;
