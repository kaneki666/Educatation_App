import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import Pdf from 'react-native-pdf';
import {Header, Box} from '../../Components';
import {HomeNavigationProps} from '../../Components/Routes';
import {useSelector} from 'react-redux';
interface NoticeReadProps {
  route: Object;
  navigation: HomeNavigationProps<'NoticeRead'>;
}
const NoticeRead = ({route, navigation}: NoticeReadProps) => {
  const {notice} = route.params;
  console.log(notice);

  const source = {
    uri: `https://web.shikkhangon.com/uploads/article/file/${notice.files}`,
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf'};

  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
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
        title=""
        iconColor={bg_state.headerColor}
        textColor={bg_state.headerColor}
        bgColor={bg_state.iconBg}
      />
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: bg_state.pdfBg,
        }}
      />
    </Box>
  );
};

export default NoticeRead;
