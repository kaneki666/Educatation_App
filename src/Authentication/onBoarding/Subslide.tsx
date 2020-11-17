import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, Text} from '../../Components';

interface SubslideProps {
  subtitle: string;
  des: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 10,
  },
  des: {
    textAlign: 'center',
    marginBottom: 15,
  },
});

const Subslide = ({subtitle, des, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.des}>
        {des}
      </Text>
      <Button
        children=""
        {...{onPress}}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};

export default Subslide;
