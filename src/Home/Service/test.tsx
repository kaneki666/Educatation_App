import React, {useState} from 'react';
import {Alert, View, TouchableOpacity} from 'react-native';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Box, Text} from '../../Components';

const Test = () => {
  const openLink = async () => {
    try {
      const url = 'https://www.google.com/';
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
      } else Linking.openURL(url);
    } catch (error) {}
  };
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      margin="l"
      backgroundColor="title">
      <TouchableOpacity onPress={openLink}>
        <Text color="white">Open Browser</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Test;
