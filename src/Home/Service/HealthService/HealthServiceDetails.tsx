import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {RouteProp} from '@react-navigation/native';
import {HomeRoutes, HomeNavigationProps} from '../../../Components/Routes';
import {Text, Box, theme} from '../../../Components';
import ContainerBg from '../Components/ContainerBg';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

type BlogDetailsRouteProp = RouteProp<HomeRoutes, 'BlogDetails'>;

interface BlogDetailsProps {
  route: BlogDetailsRouteProp;
  navigation: HomeNavigationProps<'BlogDetails'>;
}

const BlogDetails = ({route, navigation}: BlogDetailsProps) => {
  const itemData = route.params.item;
  const bg_state = useSelector((state) => state.authState.modeData);

  const footer = (
    <Box minHeight={50} justifyContent="center" alignItems="center">
      <Box borderColor="white" style={{borderRadius: 25, borderWidth: 2}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="x" size={30} color="white" />
        </Pressable>
      </Box>
    </Box>
  );
  return (
    <ContainerBg
      borderLeftRadius="xl"
      borderRightRadius="null"
      borderBottomLeftRadius={theme.borderRadii.xl}
      borderBottomRightRadius={0}
      nullRadiusLeft="null"
      image={itemData.image}
      {...{footer}}>
      <Box flex={1} margin="m">
        <Text color={bg_state.textColor} variant="title2" margin="m">
          {itemData.headline}
        </Text>
        <ScrollView>
          <Text color={bg_state.textColor} variant="body" margin="m">
            {itemData.description}
          </Text>
        </ScrollView>
      </Box>
    </ContainerBg>
  );
};

export default BlogDetails;
