import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Button from '../UI/Button'
import Avatar from './Avatar'

function ProfileForm({onSubmit, defaultValues}) {
  const [inputs, setInputs] = useState({
    name: {
      value: defaultValues ? defaultValues.name : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date : '',
      isValid: true,
    },
    phoneNumber: {
      value: defaultValues ? defaultValues.phoneNumber : '',
      isValid: true,
    },
    email: {
      value: defaultValues ? defaultValues.email : '',
      isValid: true,
    },
    password: {
      value: defaultValues ? defaultValues.password : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {   
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const userData = {
      name: inputs.name.value,
      date: inputs.date.value,
      phoneNumber: +inputs.phoneNumber.value,
      email: inputs.email.value,
      password: inputs.password.value,
    };

    const nameIsValid = userData.name.length > 0;
    const dateIsValid = userData.date.toString() !== 'Invalid Date';
    const phoneNumberIsValid = !isNaN(userData.phoneNumber) 
    const emailIsValid = userData.email.length > 0;
    const passwordIsValid = userData.password.length > 0;

    if (!nameIsValid || !dateIsValid || !phoneNumberIsValid || !emailIsValid || !passwordIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          name: { value: curInputs.name.value, isValid: nameIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          phoneNumber: { value: curInputs.phoneNumber.value, isValid: phoneNumberIsValid },
          email: { value: curInputs.email.value, isValid: emailIsValid },
          password: { value: curInputs.password.value, isValid: passwordIsValid },
        };
      });
      return;
    }
    console.log(userData)
    onSubmit(userData);
  }
  const formIsInvalid =
    !inputs.name.isValid ||
    !inputs.date.isValid ||
    !inputs.phoneNumber.isValid ||
    !inputs.email.isValid ||
    !inputs.password.isValid;

  return (
    <View>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.avatar}>
        <Avatar />
      </View>
      <Input
        label="Full Name"
        invalid={!inputs.name.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this,'name'),
          value: inputs.name.value,
        }} />
      <Input
        label="Date of Birth"
        invalid={!inputs.date.isValid}
        textInputConfig={{
          Placeholder: 'YYYY-MM-DD',
          Maxlength: '10',
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputs.date.value,
        }}
      />
      <Input
        label="Phone Number"
        invalid={!inputs.phoneNumber.isValid}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, 'phoneNumber'),
          value: inputs.phoneNumber.value,
        }}
      />
      <Input
        label="Email"
        invalid={!inputs.email.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'email'),
          value: inputs.email.value,
        }}
      />
      <Input
        label="Password"
        invalid={!inputs.password.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'password'),
          value: inputs.password.value,
          multiline: true,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={submitHandler}>Confirm</Button>
      </View>
    </View>
  )
}

export default ProfileForm

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',

    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    alignItems: 'center',
    padding: 15,
    marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: 'center',
    color: '#9b095c',
    margin: 8,
  },
  avatar:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})
