import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Filme from './Filme';

export default function FilmeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Filmes</Text>
      <Filme/>
      <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}