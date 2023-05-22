import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import Titulo from "./componentes/Titulo"
// import Contador from "./componentes/Contador"
// import Primeiro from './componentes/Primeiro'
// import Of, {Comp1,Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
import Aleatorio from "./componentes/Aleatorio"
// import Titulo from "./componentes/Titulo"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
// import AtDiaDaSemana from "./componentes/AtDiaDaSemana"
// import Pai from "./componentes/direta/Pai"
// import Pai from "./componentes/indireta/Pai"
import ContadorV2 from "./componentes/contador/ContadorV2"
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import HomeScreen from "./componentes/HomeScreen"
// import DetailsScreen from "./componentes/DetailsScreen"
import AtividadeScreen from "./componentes/Atividade"
import AtividadeScreen2 from "./componentes/Atividade2"


const Stack = createNativeStackNavigator()

export default () => (

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Atividade" component={AtividadeScreen}/>
        <Stack.Screen name="Atividade2" component={AtividadeScreen2}/>
        <Stack.Screen name="Aleatorio" component={Aleatorio}/>
        <Stack.Screen name="ContadorV2" component={ContadorV2}/>
    </Stack.Navigator>
</NavigationContainer>

)
    // <View style={styles.TelaIniciante}>
    //     <ContadorV2>

    //     </ContadorV2>
        {/* <Pai/> */}
        {/* <ContadorDisplay>
        
        </ContadorDisplay> */}
        {/*
         <DiaDaSemana inicial={100}/> */}
        {/*<Botao />
        {/* <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro"/> 
         <Primeiro/>
        <Text>1 + 2</Text>
        <Text>O Valor da soma 1 + 2 = {1+2}</Text>
        <Comp1/>
        <Comp2/>
        <Of/> */}
        {/* <MinMax min="3" max="20"/>
        <MinMax min="5" max="40"/>
        <MinMax min="7" max="55"/> 



        <Aleatorio mino={3} maxo={20} />
        <Aleatorio mino={5} maxo={40} />
        <Aleatorio mino={7} maxo={55} /> */}
//     </View>
// )

//     // export default App

//     const styles = StyleSheet.create({
//         TelaIniciante: {
//             flexGrow: 1,
//             justifyContent: "center",
//             alignItems: 'center',
//             padding: 20 
//         }
//     })


// function App(){
//    const jsx = <Text>Daniel Aguiar</Text>
//     return jsx
// }

// const App = function () {
//     return <Text>Component 2</Text>
// }

// export default function () {
//     return <Text>Component 3</Text>
// }

// export default () => {
//     return <Text>Component 4</Text>
// }