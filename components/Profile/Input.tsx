import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../UI/Button'

function Input({ invalid, label, textInputConfig }) {
  const inputStyles = [styles.input]
  if (invalid) {
    inputStyles.push((styles as any).invalidInput)
  }
  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>
          {label}
        </Text>
      </View>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 13,
    color: '#9999aa',
    marginVertical: 14,
    marginHorizontal: 14,
    marginBottom: 4,
  },
  input: {
    marginHorizontal: 8,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  invalidInput: {
    backgroundColor: '#fcc4e4',
  },
  invalidLabel: {
    color: '#9b095c',
  },
})
