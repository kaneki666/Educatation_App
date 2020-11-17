import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {
  PlaceholderLine,
  PlaceholderMedia,
  Placeholder,
  ShineOverlay,
} from 'rn-placeholder';

import {Box, Container, theme, Text} from '../../../Components';
import {Get_Elearning_api} from '../../../config/Apis';
import Content from '../Components/Content';
import Skeletton from '../Components/Skeletton';

const Elearning = ({navigation}) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    Get_Elearning_api().then((res) => setData(res));
    setTimeout(() => {
      setFetching(false);
    }, 2000);
  }, []);

  return (
    <Container
      borderLeftRadius="xl"
      borderRightRadius="null"
      borderBottomRightRadius={0}
      borderBottomRightRadius={theme.borderRadii.xl}
      nullRadiusLeft="null">
      {fetching ? (
        <Skeletton />
      ) : (
        <Box padding="m">
          <Content
            {...{navigation}}
            fileroute="https://web.shikkhangon.com/uploads/application/elearning/"
            apiData={data}
          />
        </Box>
      )}
    </Container>
  );
};

export default Elearning;

const skeletton = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
