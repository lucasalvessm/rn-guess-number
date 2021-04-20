import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const AppButton = ({
  style,
  title,
  color,
  disabled = false,
  onPress = () => {},
}: {
  style?: any;
  title: string;
  color?: string;
  disabled?: boolean;
  onPress: Function;
}) => {
  return (
    <View style={{ ...styles.button, ...style }}>
      <Button disabled={disabled} color={color} title={title} onPress={() => onPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
});

export default AppButton;
