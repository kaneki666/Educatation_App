import React, {useState} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Box, Text, theme} from './index';

interface TextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
  secureTextEntry: boolean;
}
const Size = theme.borderRadii.m * 2.2;

const TextInput = ({
  icon,
  touched,
  error,
  secureTextEntry,
  ...props
}: TextInputProps) => {
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderRadius="s"
      borderWidth={1}
      marginBottom="l"
      borderColor={reColor}>
      <Box padding="m">
        <Icon size={16} name={icon} {...{color}} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
          secureTextEntry={secureTextEntry}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="xl"
          height={Size}
          width={Size}
          margin="s"
          backgroundColor={!error ? 'primary' : 'danger'}
          justifyContent="center"
          alignItems="center">
          <Icon size={16} color="white" name={!error ? 'check' : 'x'} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
