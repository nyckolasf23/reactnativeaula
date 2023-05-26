import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Filmes"
        onPress={() => navigation.navigate('Filme')}
      />
      <Button
        title="Series"
        onPress={() => navigation.navigate('Serie')}
      />
    </View>
  );
}