import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";


export default props => {
    return (
       <>
       <Text>[Começo] Membros Familia:</Text>
          {props.children}
          <Text>----------------[Fim] Final da lista ----------------</Text>
          <Text></Text>
          <Text></Text>
       </>
    )
}