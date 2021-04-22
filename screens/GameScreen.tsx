import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import AppText from '../components/AppText';

const generateRandomBetween = (
  min: number,
  max: number,
  except: number
): number => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);

  const randomNumber = Math.floor(
    Math.random() * (maximum - minimum) + minimum
  );

  if (randomNumber === except) {
    return generateRandomBetween(min, max, except);
  }

  return randomNumber;
};

const GameScreen = ({
  navigation,
  route: {
    params: { userChoice },
  },
}: any) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      navigation.navigate('GameOverScreen', { rounds, rightNumber: currentGuess });
    }
  }, [currentGuess, userChoice]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <AppText>Opponent's Guess</AppText>
      <NumberContainer selectedNumber={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, 'lower')}
        ></Button>
        <Button
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, 'higher')}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
