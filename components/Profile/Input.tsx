import {  StyleSheet, Text, TextInput, View } from 'react-native';



function Input({ label, textInputConfig }) {


  return (
    <View style={styles.inputContainer} >
        <View>
      <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput style={styles.input}  {...textInputConfig} />
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
        color:'#9999aa',
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
});
