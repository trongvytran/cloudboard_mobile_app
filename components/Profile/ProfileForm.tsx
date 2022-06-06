import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Button from '../UI/Button'
import Avatar from './Avatar'
import React from 'react'

const ProfileForm = () => {
  return (
    <View>
      <Text style={styles.title}>Personal Information</Text>
      <View>
        <Avatar />
      </View>
      <Input label="Full Name" textInputConfig={{}} />
      <Input
        label="Date of Birth"
        textInputConfig={{
          Placeholder: 'YYYY-MM-DD',
          Maxlength: '10',
        }}
      />
      <Input
        label="Phone Number"
        textInputConfig={{
          keyboardType: 'decimal-pad',
        }}
      />
      <Input label="Email" textInputConfig={{}} />
      <Input
        label="Password"
        textInputConfig={{
          multiline: true,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button}>Confirm</Button>
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
})
