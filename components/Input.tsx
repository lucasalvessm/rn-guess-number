import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = (props: any) => {
  return (
    <View style={{ ...styles.input, ...props.style }}>
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
