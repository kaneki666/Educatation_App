import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Box, Text} from './index';
import {RectButton} from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({label, checked, onChange}: CheckBoxProps) => {
  return (
    <RectButton onPress={() => onChange()}>
      <Box flexDirection="row">
        <Box
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          marginRight="m"
          backgroundColor={checked ? 'primary' : 'white'}>
          <Icon name="check" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
