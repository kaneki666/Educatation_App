import React, {useState, useEffect} from 'react';

import {Box, Container, theme, Text} from '../../../Components';
import {Get_EducationLoan_api} from '../../../config/Apis';
import Content from '../Components/Content';
import Skeletton from '../Components/Skeletton';

const EducationECommerceDetails = ({navigation}) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    Get_EducationLoan_api().then((res) => setData(res));
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
            fileroute="https://web.shikkhangon.com/uploads/application/educatino_loan/"
            apiData={data}
          />
        </Box>
      )}
    </Container>
  );
};

export default EducationECommerceDetails;
