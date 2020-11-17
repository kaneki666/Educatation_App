import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppStackRoutes, 'HomeNavigator'>
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppStackRoutes = {
  Authentication: undefined;
  HomeNavigator: undefined;
};

export type AuthenticationRoutes = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type HomeRoutes = {
  Home: undefined;
  Blog: undefined;
  Service: undefined;
  Settings: undefined;
  BlogDetails: undefined;
  Notice: undefined;
  NoticeList: undefined;
  NoticeRead: undefined;
  Elearning: undefined;
  ElearningDetails: undefined;
  Ecommerce: undefined;
  EducationECommerceDetails: undefined;
  Training: undefined;
  TrainingDetails: undefined;
  TuitonTuitor: undefined;
  TuitonTuitorDetails: undefined;
  Esheba: undefined;
  EShebaDetails: undefined;
  EducationLoan: undefined;
  EducationLoanDetails: undefined;
  HealthService: undefined;
  HealthServiceDetails: undefined;
};
