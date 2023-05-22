import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function AtividadeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Segundaria</Text>
      <Button title="Ir para o  Contador" onPress={() => navigation.navigate('ContadorV2')}/>
      <Button title="Ir para o Aleatorio" onPress={() => navigation.navigate('Aleatorio')} />
      <Button title="Voltar para a página anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}