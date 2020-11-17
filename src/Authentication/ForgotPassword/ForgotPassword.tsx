import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

import {AuthNavigationProps} from '../../Components/Routes';
import {
  Container,
  Button,
  Text,
  Box,
  TextInput,
  CheckBox,
  Footer,
  theme,
} from '../../Components';

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<'ForgotPassword'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: ''},
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      title="Fixed Password"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container
      borderBottomLeftRadius={theme.borderRadii.xl}
      borderBottomRightRadius={0}
      {...{footer}}>
      <Box padding="l">
        <Box>
          <Text variant="title1" textAlign="center">
            Forgot Password
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Enter the email address assosiate with your account
          </Text>
          <Text textAlign="center" marginBottom="s" color="danger">
            {errors.email}
          </Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            icon="mail"
            placeholder="Enter your Email"
            error={errors.email}
            touched={touched.email}
            autoCompleteType="email"
            autoCapitalize="none"
          />
          <Box alignItems="center" marginTop="m">
            <Button
              onPress={handleSubmit}
              variant="primary"
              label="Recover your password"
              children=""
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
