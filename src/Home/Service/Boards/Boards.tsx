import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Header, Text} from '../../../Components';
import Shape from '../Components/Shape';
import {HomeNavigationProps} from '../../../Components/Routes';
import {ImageRequireSource} from 'react-native';
import {useSelector} from 'react-redux';

interface BoardsProps {
  name: string;
  source: ImageRequireSource;
}

const data = [
  {
    source: require('../../../../assets/images/boards/9.png'),
    link: 'https://dhakaeducationboard.gov.bd/',
  },
  {
    source: require('../../../../assets/images/boards/10.png'),
    link: 'https://web.bise-ctg.gov.bd/bisectg',
  },
  {
    source: require('../../../../assets/images/boards/1.png'),
    link: 'https://web.comillaboard.gov.bd/bisecb',
  },
  {
    source: require('../../../../assets/images/boards/2.png'),
    link: 'http://www.barisalboard.gov.bd/index.php',
  },
  {
    source: require('../../../../assets/images/boards/3.png'),
    link: 'https://sylhetboard.gov.bd/',
  },
  {
    source: require('../../../../assets/images/boards/4.png'),
    link: 'http://www.rajshahieducationboard.gov.bd/',
  },
  {
    source: require('../../../../assets/images/boards/5.png'),
    link: 'https://www.mymensingheducationboard.gov.bd/',
  },
  {
    source: require('../../../../assets/images/boards/7.png'),
    link: 'http://www.bteb.gov.bd/',
  },
  {
    source: require('../../../../assets/images/boards/8.png'),
    link: 'http://bmeb.ebmeb.gov.bd/',
  },
];

const Boards = (
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

      <Box flexDirection="row" flexWrap="wrap">
        <Shape
          source={data[0].source}
          borderRadius={100}
          color="service1"
          name={t('Service.educationBoards.Dhaka')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[0],
            })
          }
        />
        <Shape
          source={data[1].source}
          borderTopRightRadius={100}
          borderBottomRightRadius={100}
          color="service2"
          name={t('Service.educationBoards.Chattogram')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[1],
            })
          }
        />
        <Shape
          source={data[2].source}
          color="service3"
          name={t('Service.educationBoards.Comilla')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[2],
            })
          }
        />
        <Shape
          source={data[3].source}
          color="service6"
          borderBottomLeftRadius={100}
          borderBottomRightRadius={100}
          name={t('Service.educationBoards.Barisal')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[3],
            })
          }
        />
        <Shape
          source={data[4].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={90}
          borderBottomRightRadius={90}
          color="service5"
          name={t('Service.educationBoards.Sylhet')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[4],
            })
          }
        />
        <Shape
          source={data[5].source}
          borderTopLeftRadius={100}
          borderBottomLeftRadius={100}
          color="service1"
          name={t('Service.educationBoards.Rajshahi')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[5],
            })
          }
        />
        <Shape
          source={data[6].source}
          color="service2"
          borderTopLeftRadius={100}
          borderTopRightRadius={90}
          borderBottomRightRadius={90}
          name={t('Service.educationBoards.Mymensingh')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[6],
            })
          }
        />
        <Shape
          source={data[7].source}
          borderRadius={100}
          color="service3"
          name={t('Service.educationBoards.Technical')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[7],
            })
          }
        />
        <Shape
          source={data[8].source}
          color="service4"
          name={t('Service.educationBoards.Madrasha')}
          onPress={() =>
            navigation.navigate('BoardsBrowser', {
              item: data[8],
            })
          }
        />
      </Box>
      <Text
        color={bg_state.textColor}
        lineHeight={60}
        marginTop="l"
        textAlign="center"
        fontFamily={t('fontBold')}
        fontSize={35}>
        {t('Service.educationBoardstitle')}
      </Text>
    </Box>
  );
};

export default Boards;
