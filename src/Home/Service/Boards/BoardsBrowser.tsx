import React, {useEffect, useState} from 'react';
import {Alert, View, TouchableOpacity} from 'react-native';
import {Linking} from 'react-native';
import {Placeholder, PlaceholderLine, ShineOverlay} from 'rn-placeholder';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Box, Text} from '../../../Components';
import {useNavigation} from '@react-navigation/native';

const BoardsBrowser = ({navigation, route}) => {
  const data = route.params.item;
  console.log(data);
  const openLink = async () => {
    try {
      const url = `${data.link}`;
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,

          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
        navigation.goBack();
      } else Linking.openURL(url);
    } catch (error) {}
  };
  openLink();
  return (
    <Box justifyContent="center" alignItems="center" marginTop="xll">
      <Placeholder Animation={ShineOverlay}>
        <PlaceholderLine width={90} />
      </Placeholder>
    </Box>
  );
};

export default BoardsBrowser;
