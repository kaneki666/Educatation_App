import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Header, Text} from '../../../Components';
import Shape from '../Components/Shape';
import {HomeNavigationProps} from '../../../Components/Routes';
import {useSelector} from 'react-redux';

const data = [
  {
    source: require('../../../../assets/images/montronaloy/buro.png'),
    name: 'Dhaka',
  },
  {
    source: require('../../../../assets/images/montronaloy/nayem.png'),
    name: 'Chottogram',
  },
  {
    source: require('../../../../assets/images/montronaloy/nctb.png'),
    name: 'Comilla',
  },
  {
    source: require('../../../../assets/images/montronaloy/pmtrust.png'),
    name: 'Borishal',
  },
  {
    source: require('../../../../assets/images/montronaloy/poridorshoon.png'),
    name: 'Sylhet',
  },
  {
    source: require('../../../../assets/images/montronaloy/prokoshol.png'),
    name: 'Rajshahi',
  },
  {
    source: require('../../../../assets/images/montronaloy/scout.png'),
    name: 'Moymonsingh',
  },
  {
    source: require('../../../../assets/images/montronaloy/shikboard.png'),
    name: 'Karogori',
  },
  {
    source: require('../../../../assets/images/montronaloy/subidha.png'),
    name: 'Madrasha',
  },
  {
    source: require('../../../../assets/images/montronaloy/unimonjury.png'),
    name: '',
  },
  {
    source: require('../../../../assets/images/montronaloy/unesco.png'),
    name: 'Madrasha',
  },
];

const Montronaloy = ({navigation}: HomeNavigationProps<'Service'>) => {
  const {t} = useTranslation();
  const bg_state = useSelector((state) => state.authState.modeData);
  return (
    <Box flex={1} backgroundColor={bg_state.backgroundColor}>
      <Header
        left={{icon: 'ios-menu', onPress: () => navigation.openDrawer()}}
        right={{
          icon: 'ios-settings-outline',
          onPress: () => {
            navigation.navigate('Settings');
            // language();
            // AsyncStorage.removeItem('@storage_Key', (err) =>
            //   console.log('userId', err),
            // );
          },
        }}
        title={t('menu.screens.0.name')}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />

      <Box flexDirection="row" flexWrap="wrap">
        <Shape
          source={data[0].source}
          borderRadius={100}
          color="service1"
          name={data[0].name}
        />
        <Shape
          source={data[1].source}
          borderTopRightRadius={100}
          borderBottomRightRadius={100}
          color="service2"
          name={data[1].name}
        />
        <Shape source={data[2].source} color="service3" name={data[2].name} />
        <Shape
          source={data[3].source}
          color="service6"
          borderBottomLeftRadius={100}
          borderBottomRightRadius={100}
          name={data[3].name}
        />
        <Shape
          source={data[4].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={90}
          borderBottomRightRadius={90}
          color="service5"
          name={data[4].name}
        />
        <Shape
          source={data[5].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={100}
          color="service1"
          name={data[5].name}
        />
        <Shape
          source={data[6].source}
          color="service2"
          borderTopLeftRadius={100}
          borderTopRightRadius={90}
          borderBottomRightRadius={90}
          name={data[6].name}
        />
        <Shape
          source={data[7].source}
          borderRadius={100}
          color="service3"
          name={data[7].name}
        />
        <Shape source={data[8].source} color="service4" name={data[8].name} />
      </Box>
      <Text
        color={bg_state.textColor}
        marginTop="l"
        textAlign="center"
        fontFamily="Lobster-Regular"
        fontSize={35}>
        Montronaloy
      </Text>
    </Box>
  );
};

export default Montronaloy;
