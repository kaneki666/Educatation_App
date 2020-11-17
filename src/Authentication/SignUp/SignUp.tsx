import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useFormik, ErrorMessage} from 'formik';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  fullname: Yup.string()
    .required('No Name provided.')
    .min(4, 'Name is too short - should be 4 chars minimum.'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain letters ann numbers.'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Password doesn't match")
    .required('No confirmation password provided'),
});

import {AuthNavigationProps} from '../../Components/Routes';
import {
  Container,
  Button,
  Text,
  Box,
  TextInput,
  Footer,
  theme,
} from '../../Components';
import {Register_api} from '../../config/Apis';

const SignUp = ({navigation}: AuthNavigationProps<'SignUp'>) => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageerror, setImageError] = useState('');
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {
      email: '',
      fullname: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
      remember: false,
    },
    onSubmit: async (values, errors) => {
      const filename = Date.now() + '.png';

      const user_data = {
        email: values.email,
        fullname: values.fullname,
        contact: values.phone,
        photo: filename,
        password: values.password,
      };
      Register_api(user_data);
      setTimeout(() => {
        setModalVisible(true);
      }, 1000);
      let ret = await RNFetchBlob.fetch(
        'POST',
        'https://shikhhangon.bangabandhuolympiad.com/testpost',
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'image',
            filename: filename,
            type: 'image/png',
            data: RNFetchBlob.wrap(image.uri),
          },
        ],
      );
      return ret;
    },
  });

  let selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setImage(res);
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container
      borderLeftRadius="null"
      borderRightRadius="xl"
      borderBottomLeftRadius={0}
      borderBottomRightRadius={theme.borderRadii.xl}
      nullRadiusRight="null"
      {...{footer}}>
      <Box padding="l">
        <Text variant="title1" textAlign="center">
          Create Account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us your name, email and your password
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
          onChangeText={handleChange('fullname')}
          onBlur={handleBlur('fullname')}
          value={values.fullname}
          icon="user"
          placeholder="Enter your Fullname"
          error={errors.fullname}
          touched={touched.fullname}
          autoCompleteType="name"
          autoCapitalize="none"
        />

        <TextInput
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          icon="phone"
          placeholder="Enter your Phone"
          error={errors.phone}
          touched={touched.phone}
          autoCompleteType="tel"
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
        <TextInput
          onChangeText={handleChange('passwordConfirmation')}
          onBlur={handleBlur('passwordConfirmation')}
          value={values.passwordConfirmation}
          icon="lock"
          placeholder="Reenter your password"
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
          secureTextEntry={true}
          autoCompleteType="password"
        />

        <Box flexDirection="row" margin="m">
          {image ? (
            <Text color="text">{image.name}</Text>
          ) : (
            <Text color="text">Select Your Image</Text>
          )}
          <TouchableOpacity onPress={selectFile}>
            <Icon style={{marginLeft: 40}} name="image" size={30} />
          </TouchableOpacity>
        </Box>

        <Box alignItems="center">
          <Button
            onPress={handleSubmit}
            variant="primary"
            label="Create your account"
            children=""
          />
        </Box>
        <Text textAlign="center" marginBottom="s" color="danger">
          {errors.email ||
            errors.fullname ||
            errors.phone ||
            errors.password ||
            errors.passwordConfirmation ||
            imageerror}
        </Text>
        <Box>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Registration Done!</Text>

                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#0C0D34'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
