import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home';
import Blog from './Blogs';
import Service from './Service';
import Settings from './Settings';
import {Notice, NoticeList, NoticeRead} from './Notice';
import BlogDetails from './Blogs/BlogDetails';

import {
  ELearning,
  ElearningDetails,
  EducationECommerce,
  EducationECommerceDetails,
  HealthService,
  HealthServiceDetails,
  Training,
  TrainingDetails,
  TuitonTuitor,
  TuitonTuitorDetails,
  ESheba,
  EShebaDetails,
  EducationLoan,
  EducationLoanDetails,
} from './Service';
import BoardsBrowser from './Service/Boards/BoardsBrowser';
import DrawerContent from './Drawer/DrawerContent';
import {HomeRoutes} from '../../src/Components/Routes';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const {width} = Dimensions.get('window');

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  // const [userdata, setUserData] = useState('');

  const DRAWER_WIDTH = width * 0.8;

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      drawerStyle={{
        width: DRAWER_WIDTH,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Service" component={Service} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notice" component={Notice} />
      <Drawer.Screen name="Elearning" component={ELearning} />
      <Drawer.Screen name="ElearningDetails" component={ElearningDetails} />
      <Drawer.Screen name="Ecommerce" component={EducationECommerce} />
      <Drawer.Screen
        name="EducationECommerceDetails"
        component={EducationECommerceDetails}
      />
      <Drawer.Screen name="Training" component={Training} />
      <Drawer.Screen name="TrainingDetails" component={TrainingDetails} />
      <Drawer.Screen name="TuitonTuitor" component={TuitonTuitor} />
      <Drawer.Screen
        name="TuitonTuitorDetails"
        component={TuitonTuitorDetails}
      />
      <Drawer.Screen name="Esheba" component={ESheba} />
      <Drawer.Screen name="EShebaDetails" component={EShebaDetails} />
      <Drawer.Screen name="EducationLoan" component={EducationLoan} />
      <Drawer.Screen
        name="EducationLoanDetails"
        component={EducationLoanDetails}
      />
      <Drawer.Screen name="HealthService" component={HealthService} />
      <Drawer.Screen
        name="HealthServiceDetails"
        component={HealthServiceDetails}
      />
      <Drawer.Screen name="BlogDetails" component={BlogDetails} />
      <Drawer.Screen name="NoticeList" component={NoticeList} />
      <Drawer.Screen name="NoticeRead" component={NoticeRead} />
      <Drawer.Screen name="BoardsBrowser" component={BoardsBrowser} />
    </Drawer.Navigator>
  );
};
