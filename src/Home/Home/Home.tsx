import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Header, Text} from '../../Components';
import Background from './Background';
import Catagories from './Catagories';
import {HomeNavigationProps} from '../../Components/Routes';
import Card from './Card';
import {useTransition} from 'react-native-redash';
import {sub} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

const cards = [
  {
    index: 9,
    source: require('../../../assets/images/10.png'),
    color: '#8F67FF',
  },
  {index: 8, source: require('../../../assets/images/9.png'), color: '#2C003E'},
  {index: 7, source: require('../../../assets/images/8.png'), color: '#FE5C82'},
  {index: 6, source: require('../../../assets/images/7.png'), color: '#FFE8E9'},
  {index: 5, source: require('../../../assets/images/6.png'), color: '#F1E0FF'},
  {index: 4, source: require('../../../assets/images/5.png'), color: '#E2E0ED'},
  {index: 3, source: require('../../../assets/images/4.png'), color: '#ADA4EB'},
  {index: 2, source: require('../../../assets/images/1.png'), color: '#184A40'},
  {index: 1, source: require('../../../assets/images/3.png'), color: '#BFEAF5'},
  {index: 0, source: require('../../../assets/images/2.png'), color: '#96B2FF'},
];
const step = 1 / (cards.length - 1);

const Home = ({navigation}: HomeNavigationProps<'Home'>) => {
  const [currrentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currrentIndex);

  const {i18n, t} = useTranslation();

  const bg_state = useSelector((state: any) => state.authState.modeData);

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
        title={t('menu.screens.0.name')}
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />
      <Catagories />
      <Box flex={1}>
        <Background bgColor={bg_state.backgroundColor} />

        {cards.map(
          ({index, source, color}) =>
            currrentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{source, step, color}}
              />
            ),
        )}
      </Box>
    </Box>
  );
};

export default Home;
