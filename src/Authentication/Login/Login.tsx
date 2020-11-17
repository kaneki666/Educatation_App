import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {changeAuth} from '../../../reducers/changeAuthState';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
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
import {Login_Api} from '../../config/Apis';

const Login = ({navigation}: AuthNavigationProps<'Login'>) => {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState('');
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: '', remember: true},
    onSubmit: (values) => {
      Login_Api(values).then((res) => {
        if (res.success === 'login sucessfull') {
          dispatch(changeAuth(true));
          AsyncStorage.setItem('@storage_Key', 'LoggedIn');
          const jsonValue = JSON.stringify(res.data);
          console.log(jsonValue, 'json');
          AsyncStorage.setItem('userinfo', jsonValue);
        } else {
          setLoginError(res.success);
        }
      });
    },
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container
      borderLeftRadius="xl"
      borderRightRadius="null"
      borderBottomLeftRadius={theme.borderRadii.xl}
      borderBottomRightRadius={0}
      nullRadiusLeft="null"
      {...{footer}}>
      <Box padding="l">
        <Box>
          <Text variant="title1" textAlign="center">
            Welcome Back
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            User your credentials below to login in your account
          </Text>
          <Text textAlign="center" marginBottom="s" color="danger">
            {errors.email || errors.password || loginError}
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
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            icon="lock"
            placeholder="Enter your password"
            error={errors.password}
            touched={touched.password}
            secureTextEntry={true}
            autoCompleteType="password"
          />

          <Box flexDirection="row" justifyContent="space-around">
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text marginLeft="s" color="primary">
                Forgot password
              </Text>
            </TouchableOpacity>
          </Box>

          <Box alignItems="center" marginTop="m">
            <Button
              onPress={handleSubmit}
              variant="primary"
              label="Log into your account"
              children=""
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
