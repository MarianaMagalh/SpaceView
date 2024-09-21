import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export function Configuracoes(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.textoControle}>Controle Central</Text>
            <View style={styles.esfera}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{ 
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7E5FF',
    },
    esfera:{
        width: 200,
        height: 200,
        backgroundColor: '#0094FECC',
        borderRadius: 100, // Metade da largura/altura para criar a esfera
        position: 'absolute',
        top: 0,     // Posiciona a esfera menor no topo da tela
        right: 0,  // Posiciona a esfera menor à direita da tela
        zIndex: 0
    },
    textoControle:{
        color:'black',
        fontSize: 50,
        fontWeight: 600,
        fontFamily: 'League Spartan',
        position: 'absolute',
        top: 120,
        left: 30
    }
})