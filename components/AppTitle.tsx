import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppTitle = ({ style, children }: { style?: any; children: any }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

export default AppTitle;
