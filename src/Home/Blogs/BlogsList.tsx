import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  PlaceholderMedia,
  Placeholder,
  PlaceholderLine,
  Progressive,
} from 'rn-placeholder';

import {Box, Card} from '../../Components';
import {HomeNavigationProps} from '../../Components/Routes';
import {Get_Blogs_api} from '../../config/Apis';

const {width} = Dimensions.get('window');

const Name = (navigation: () => void) => {
  const [blogs, setBlogs] = useState([]);
  const [fetching, setFetching] = useState(true);
  const CardWidth = width - 30;

  useEffect(() => {
    Get_Blogs_api().then((res) => {
      setBlogs(res);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 2000);
  }, []);
  return (
    <ScrollView>
      {fetching ? (
        <Box>
          {skeletton.map((i) => (
            <Box
              key={i.id}
              flex={1}
              left={15}
              justifyContent="center"
              alignItems="center"
              alignContent="center">
              <Placeholder Animation={Progressive}>
                <PlaceholderMedia
                  style={{
                    height: 230,
                    width: CardWidth,
                  }}
                />
                <PlaceholderLine width={93} style={{marginTop: 10}} />
              </Placeholder>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          {blogs &&
            blogs.map((item) => (
              <Pressable
                key={item.id}
                onPress={() =>
                  navigation.navigation.navigate('BlogDetails', {
                    item: item,
                  })
                }>
                <Card
                  headline={item.headline}
                  description={item.description}
                  image={item.image}
                />
              </Pressable>
            ))}
        </Box>
      )}
    </ScrollView>
  );
};

export default Name;

const skeletton = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
