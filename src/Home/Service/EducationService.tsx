import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Header, Text} from '../../Components';
import Shape from './Components/Shape';
import {HomeNavigationProps} from '../../Components/Routes';
import {ImageRequireSource} from 'react-native';
import {useSelector} from 'react-redux';

interface BoardsProps {
  name: string;
  source: ImageRequireSource;
}

const data = [
  {source: require('../../../assets/images/services/elearning.png')},
  {source: require('../../../assets/images/services/healthservice.png')},
  {source: require('../../../assets/images/services/ecommerce.png')},
  {source: require('../../../assets/images/services/tuiton.png')},
  {source: require('../../../assets/images/services/training.png')},
  {source: require('../../../assets/images/services/esheba.png')},
  {source: require('../../../assets/images/services/scholarship.png')},
];

const EducationService = (
  {navigation}: HomeNavigationProps<'Service'>,
  {name, source}: BoardsProps,
) => {
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
          },
        }}
        title={t('menu.screens.1.name')}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />

      <Box flexDirection="row" flexWrap="wrap" flex={1} marginTop="l">
        <Shape
          source={data[0].source}
          borderRadius={100}
          color="service1"
          name={t('Service.services.Elearning')}
          onPress={() => navigation.navigate('Elearning')}
        />

        <Shape
          source={data[2].source}
          color="service3"
          name={t('Service.services.Ecommerce')}
          onPress={() => navigation.navigate('Ecommerce')}
        />
        <Shape
          source={data[1].source}
          color="service2"
          borderTopLeftRadius={100}
          borderTopRightRadius={90}
          borderBottomRightRadius={90}
          name={t('Service.services.HealthService')}
          onPress={() => navigation.navigate('HealthService')}
        />
        <Shape
          source={data[4].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={90}
          borderBottomRightRadius={90}
          color="service3"
          name={t('Service.services.Training')}
          onPress={() => navigation.navigate('Training')}
        />
        <Shape
          source={data[3].source}
          color="service6"
          borderBottomLeftRadius={100}
          borderBottomRightRadius={100}
          name={t('Service.services.TuitonTuitor')}
          onPress={() => navigation.navigate('TuitonTuitor')}
        />

        <Shape
          source={data[5].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={100}
          color="service1"
          name={t('Service.services.Esheba')}
          onPress={() => navigation.navigate('Esheba')}
        />
        <Shape
          source={data[6].source}
          color="service2"
          borderTopLeftRadius={100}
          borderTopRightRadius={90}
          borderBottomRightRadius={90}
          name={t('Service.services.EducationLoan')}
          onPress={() => navigation.navigate('EducationLoan')}
        />
      </Box>
      <Text
        color={bg_state.textColor}
        lineHeight={60}
        marginTop="l"
        textAlign="center"
        fontFamily={t('fontBold')}
        fontSize={35}>
        Education Service
      </Text>
    </Box>
  );
};

export default EducationService;
