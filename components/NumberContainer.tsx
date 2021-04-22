import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import Colors from '../constants/colors';

const NumberContainer = ({ selectedNumber }: { selectedNumber: number }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.number}>{selectedNumber}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
