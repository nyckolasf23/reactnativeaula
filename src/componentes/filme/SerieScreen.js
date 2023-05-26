import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Serie from './Serie';

export default function SerieScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Series</Text>
      <Serie/>
      <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}