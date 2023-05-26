import React from "react"
import {Text, View, StyleSheet} from 'react-native'
// import Titulo from "./componentes/Titulo"
// import Contador from "./componentes/Contador"
// import Primeiro from './componentes/Primeiro'
// import Of, {Comp1,Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Aleatorio from "./componentes/Aleatorio"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
// import AtDiaDaSemana from "./componentes/AtDiaDaSemana"
// import Pai from "./componentes/direta/Pai"
// import Pai from "./componentes/indireta/Pai"
// import ContadorV2 from "./componentes/contador/ContadorV2"
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Familia from "./componentes/relacao/Familia"
import ListaProdutos from "./componentes/produto/ListaProdutos"
// import HomeScreen from "./componentes/HomeScreen"
// import DetailsScreen from "./componentes/DetailsScreen"
// import AtividadeScreen from "./componentes/Atividade"
// import AtividadeScreen2 from "./componentes/Atividade2"
// import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"
// import ListaProdutoV2 from "./componentes/produto/ListaProdutoV2"
// import Quadrado from "./componentes/layout/Quadrado"
// import FlexboxV1 from "./componentes/layout/FlexboxV1"
// import FlexboxV2 from "./componentes/layout/FlexboxV2"
// import FlexboxV3 from "./componentes/layout/FlexboxV3"
// import FlexboxV4 from "./componentes/layout/FlexboxV4"
// import Mega from "./componentes/mega/Mega"
import Filme from "./componentes/filme/Filme"
import FilmeScreen from "./componentes/filme/FilmeScreen"
import Serie from "./componentes/filme/Serie"
import SerieScreen from "./componentes/filme/SerieScreen"
import HomeScreen from "./componentes/filme/HomeScreen"


const Stack = createNativeStackNavigator()

export default () => (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Filme" component={FilmeScreen}/>
                <Stack.Screen name="Serie" component={SerieScreen}/>
             </Stack.Navigator>
         </NavigationContainer>
        

    
     
    //          {/* <Mega qtdeNumeros={7}/> */}
    //  {/* <FlexboxV3/> */}
    //     {/* <Quadrado cor='#1E90FF'/>
    //     <Quadrado cor='#FF0000'/>
    //     <Quadrado cor='#00FF00'/>
    //     <Quadrado cor='#FF1493'/>
    //     <Quadrado cor='#9B30FF'/> */}
    //    {/* <ListaProdutoV2/> */}
    //    {/* <ListaProdutos/> */}{/* //         <Familia>
//          <Membro nome="Jorge" sobrenome="Pereiras"/>
//     <Membro nome="Edinaldo" sobrenome="Pereiras"/>
//     <Membro nome="Marcinho" sobrenome="Pereiras"/>
//     <Membro nome="Roberta" sobrenome="Pereiras"/>
//     </Familia>
//     <Familia>
//    </Familia>
//       <Familia>
//       <Membro nome="Lucas" sobrenome="Da Silva"/>
//       <Membro nome="Fernando" sobrenome="Da Silva"/>
//       <Membro nome="Jorge" sobrenome="Da Silva"/>
//       <Membro nome="Marcia" sobrenome="Da Silva"/>
//      </Familia> */}
        // </SafeAreaView>

//     <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="Atividade" component={AtividadeScreen}/>
//         <Stack.Screen name="Atividade2" component={AtividadeScreen2}/>
//         <Stack.Screen name="Aleatorio" component={Aleatorio}/>
//         <Stack.Screen name="ContadorV2" component={ContadorV2}/>
//     </Stack.Navigator>
// </NavigationContainer>

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

    const styles = StyleSheet.create({
        TelaIniciante: {
            flexGrow: 1,
            justifyContent: "center",
            alignItems: 'center',
            padding: 20 
        }
    })


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















