import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from '@gorhom/animated-tabbar';
import Icon from 'react-native-vector-icons/Feather';
import {MainTabsParams} from './BottmNavigationTypes';
import {useSelector} from 'react-redux';

import {Boards, EducationService} from '../index';
import Elearning from '../ELearning/ELearning';

const BoardsSVG = () => {
  return <Icon name="home" size={20} />;
};

const SearchSVG = () => {
  return <Icon name="search" size={20} />;
};
const ELearningSVG = () => {
  return <Icon name="book" size={20} />;
};

const HealthServiceSVG = () => {
  return <Icon name="heart" size={20} />;
};

const Tab = createBottomTabNavigator<MainTabsParams>();

const tabs: TabsConfig<BubbleTabBarItemConfig, MainTabsParams> = {
  Boards: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: BoardsSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Education: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: ELearningSVG,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  ELearning: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: ELearningSVG,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  HealthService: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HealthServiceSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  EducationLoan: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HealthServiceSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  TuitonTuitor: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HealthServiceSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Training: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HealthServiceSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  ESheba: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HealthServiceSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
};

const BubbleScreen = () => {
  const bg_state = useSelector((state) => state.authState.modeData);
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'black'}}
      tabBar={(props) => (
        <AnimatedTabBar
          style={{backgroundColor: bg_state.tabBackground}}
          iconSize={20}
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen
        name="Boards"
        initialParams={{
          backgroundColor: tabs.Boards.labelStyle.color,
          nextScreen: 'Search',
        }}
        component={Boards}
      />
      <Tab.Screen
        name="Education"
        initialParams={{
          backgroundColor: tabs.Education.labelStyle.color,
          nextScreen: 'Search',
        }}
        component={EducationService}
      />
    </Tab.Navigator>
  );
};

export default BubbleScreen;
