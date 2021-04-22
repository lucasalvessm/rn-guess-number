import React, { useState, useEffect } from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Input from '../components/Input';
import Colors from '../constants/colors';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';

const StartGameScreen = ({ navigation, route: { params } }: any) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^[0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const restart = params?.restart;

  const confirmInputHandler = () => {
    if (!enteredValue) return;
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    Keyboard.dismiss();
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <AppText>You selected</AppText>
        <NumberContainer selectedNumber={selectedNumber} />
        <Button
          title="START GAME"
          onPress={() =>
            navigation.navigate('GameScreen', {
              userChoice: selectedNumber,
            })
          }
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <AppTitle style={styles.title}>The Game Screen!</AppTitle>
        <Card style={styles.inputContainer}>
          <AppText>Select a Number</AppText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            onChangeText={numberInputHandler}
            value={enteredValue}
            autoCorrect={false}
            maxLength={2}
            keyboardType="number-pad"
          />
          <View style={styles.buttonContainer}>
            <Button
              color={Colors.primary}
              title="Reset"
              onPress={resetInputHandler}
            />
            <Button
              color={Colors.accent}
              title="Confirm"
              onPress={confirmInputHandler}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
