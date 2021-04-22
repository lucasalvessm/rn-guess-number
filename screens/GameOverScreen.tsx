import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import colors from '../constants/colors';

const GameOverScreen = ({
  navigation,
  route: {
    params: { rounds, rightNumber },
  },
}: any) => {
  const restartGameHandler = () => {
    navigation.dispatch((state: any) => {
      // Remove the home route from the stack
      const routes = state.routes.filter(
        (r: any) => r.name === 'GameOverScreen'
      );

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
    navigation.navigate('Home', { restart: true });
  };
  return (
    <View style={styles.screen}>
      <AppTitle>The Game is Over!</AppTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/img/success.png')}
          // source={ uri: 'https://imagem.com/imagem.jpg'}
        />
      </View>
      <View style={styles.resultContainer}>
        <AppText style={styles.resultText}>
          Yout phone needed <TextHighlight>{rounds}</TextHighlight> rounds to
          guess the number
          <TextHighlight>{rightNumber}</TextHighlight>
        </AppText>
      </View>
      <Button
        color={colors.accent}
        title="Play Again"
        onPress={restartGameHandler}
      ></Button>
    </View>
  );
};

const TextHighlight = ({ children }: { children: any }) => (
  <Text style={styles.textHighlight}>{children}</Text>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    width: '80%',
    marginVertical: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderColor: colors.primary,
    borderWidth: 3,
    marginVertical: 30,
  },
  textHighlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
