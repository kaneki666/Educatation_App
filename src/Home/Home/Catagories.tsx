import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Button} from 'react-native';
import Category from './Category';

import {Text} from '../../Components';

interface CatagoriesProps {}

const catagories = [
  {
    id: 'newin',
    title: 'লাইভ ক্লাস',
    color: '#FFE8E9',
    source: require('../../../assets/images/sheba/1.png'),
    index: 0,
  },
  {
    id: 'summer',
    title: 'অনলাইন অলিম্পিয়াড',
    color: '#F1E0FF',
    source: require('../../../assets/images/sheba/2.png'),
    index: 1,
  },
  {
    id: 'activewear',
    title: 'পাবলিকেশন',
    color: '#BFEAF5',
    source: require('../../../assets/images/sheba/3.png'),
    index: 2,
  },
  {
    id: 'outlet',
    title: 'এসএমএস সেবা',
    color: '#F2E0FF',
    source: require('../../../assets/images/sheba/4.png'),
    index: 3,
  },
  {
    id: 'spring',
    title: 'টিউশন টিউটর',
    color: '#C9E9E7',
    source: require('../../../assets/images/sheba/5.png'),
    index: 4,
  },
  {
    id: 'autumn',
    title: 'শিক্ষা ই-কমার্স',
    color: '#D1C9FF',
    source: require('../../../assets/images/sheba/6.png'),
    index: 5,
  },
  {
    id: 'winter',
    title: 'শিক্ষা লোন',
    color: '#DBACA7',
    source: require('../../../assets/images/sheba/7.png'),
    index: 6,
  },
];

const Catagories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {catagories.map((category, i) => {
          return <Category key={category.id} category={category} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Catagories;
