import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {Text} from '../Components';

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
  children: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Button = ({variant, label, onPress, children}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 12, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{color}}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

export default Button;
