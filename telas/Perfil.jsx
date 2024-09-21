import {React} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useState} from 'react'

export function Perfil(){

    return(
        <View style={styles.conteiner}>
            <Text style={styles.textoPerfil}>Perfil</Text>
            <View style={styles.esferaMenor}>
                <FontAwesome styles={styles.icon}
                    name="user" 
                    size={30}  
                    color="black" />
                    
            </View>

            <Input
                style={styles.input}
            ></Input>
            <Input
                style={styles.input}
            ></Input>
            <Input
                style={styles.input}
            ></Input>
            <Input
                style={styles.input}
            ></Input>

            <TouchableOpacity>
                <Text style={styles.textoAjuda}>Ajuda?</Text>
            </TouchableOpacity>
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

    textoPerfil:{
        color:'black',
        fontSize: 50,
        fontWeight: 600,
        fontFamily: 'League Spartan',
        position: 'absolute',
        top: 120,
        left: 30
    },
    input:{
        height: 60,
        width: 300,
        backgroundColor: 'white',
        color: 'black',
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        fontSize: 16,
        borderColor: '#0077b6',
    }, 
    esferaMenor:{
        width: 100,
        height: 100,
        backgroundColor: '#7BAFD4B2',
        borderRadius: 100, 
        position: 'absolute',
        top: 75,    
        right: 30,  
        zIndex: 0, 
    }, 
    icon:{
        positon: 'center',
        
    },
    textoAjuda:{
        color:'black',
        fontSize: 25,
        fontWeight: 900,
        fontFamily: 'League Spartan', 
        position: 'absolute',
        left: 75
        
    }
})