import React from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';

import theme, {Box, Text} from '../../Components/Theme';
import {Button} from '../../Components';
import {AuthNavigationProps} from '../../Components/Routes';

const {width} = Dimensions.get('window');

const picture = {
  title: 'Playful',
  color: '#BEECC4',
  picture: require('../../../assets/images/welcome.jpg'),
  subtitle: 'Hear it First, Wear it First',
  des: 'Exploer hundres of outfit ideas',
};

const styles = StyleSheet.create({
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: 75,
  },
});

const Welcome = ({navigation}: AuthNavigationProps<'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        justifyContent="flex-end"
        alignItems="center">
        <Image
          resizeMethod="scale"
          source={picture.picture}
          style={styles.picture}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl">
        <Box
          style={{backgroundColor: '#ba9cf3'}}
          backgroundColor="buttonSecondary"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        <Box
          backgroundColor="white"
          justifyContent="space-evenly"
          alignItems="center"
          borderTopLeftRadius="xl"
          padding="xl"
          flex={1}>
          <Text variant="title2">Let's get started</Text>
          <Text variant="body">Login Or SignUp for awsome experiece.</Text>
          <Button
            onPress={() => navigation.navigate('Login')}
            variant="primary"
            label="Have an account? Login"
            children=""
          />
          <Button
            onPress={() => navigation.navigate('SignUp')}
            variant="default"
            label="SignUp"
            children=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
