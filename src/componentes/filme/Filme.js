import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 110,
        height: 175,
      },

    T1  :{
        flexDirection:"row",
        alignContent:"center"
    }
})
export default class Filme extends Component {
    render() {
      return (
        <>
        <Text style={Estilo.txtGrande}>Melhores filmes</Text>
        <View style={styles.T1}>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/velozes1.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/space.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/mario.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/creed.jpg')}
          />
        </View>
        </>
      );
    }
  }