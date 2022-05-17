import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import Button from '../UI/Button'

function ProfileForm() {

  return (
    <View>
      <Text style={styles.title}>Personal Information</Text>
      <Input label="Full Name"
        textInputConfig={{
          
        }} />
      <Input label="Date of Birth"
        textInputConfig={{
          Placeholder: 'YYYY-MM-DD',
          Maxlength: '10'
        }} />
      <Input label="Phone Number"
        textInputConfig={{
          keyboardType: 'decimal-pad',
        }} />
         <Input label="Email"
        textInputConfig={{
          
        }} />
        <Input label="Password"
        textInputConfig={{
          multiline: true,
        }} />
        <View style={styles.buttons}>
        <Button style={styles.button} >
          Confirm
        </Button>
      </View>
    </View>

  );
}

export default ProfileForm;

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
 
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },  
});
