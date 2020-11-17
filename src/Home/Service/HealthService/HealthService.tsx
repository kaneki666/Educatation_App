import React, {useEffect, useState} from 'react';

import {Box, Container, theme} from '../../../Components';
import {Get_HealthServie_api} from '../../../config/Apis';
import Content from '../Components/Content';
import Skeletton from '../Components/Skeletton';

const Elearning = ({navigation}) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    Get_HealthServie_api().then((res) => setData(res));
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
            fileroute="https://web.shikkhangon.com/uploads/application/health_service/"
            apiData={data}
          />
        </Box>
      )}
    </Container>
  );
};

export default Elearning;
