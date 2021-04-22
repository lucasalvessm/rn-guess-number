import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppText = ({ style, children }: { style?: any; children: any }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default AppText;
