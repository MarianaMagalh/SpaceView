import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input  } from 'react-native-elements';
import {useState} from 'react'

export function Cadastro(){

    const [nome, setNome] = useState()
    const [email,  setEmail] = useState()
    const [senha, setSenha] = useState()


    return(
        <View style={styles.conteiner}>
            <View style={styles.esfera}>
                <Text style={styles.texto}>Crie sua Conta!</Text>
            </View>
            <View style={styles.esferaMenor}></View>

            
            <Input
                style={styles.input}
                placeholder='Seu Nome'
                onChangeText={setNome}
                value={nome}
            >
            </Input>

            <Input
                style={styles.input}
                placeholder='Seu Email'
                keyboardType='e-mail address'
                onChangeText={setEmail}
                value={email}
            ></Input>

            <Input
                style={styles.input}
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
            ></Input>

            

            <TouchableOpacity
                onPress={null}
                style={styles.botaoCadastro}
            >
                <Text style={styles.textoCadastro}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={null}
                style={styles.botaoEntrar}
            >
                <Text style={styles.textoEntrar}>Entrar</Text>
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
    texto:{
        color: '#fff', 
        fontWeight: 'bold', 
        top: 63,
        left: 27,
        fontSize: 50,
        fontFamily: 'League Spartan'
    },
    esfera:{
        width: 220,  
        height: 220, 
        backgroundColor: '#0094FECC',
        borderRadius: 110,
        position: 'absolute',
        top: 0,
        left: 0,
    }, 
    esferaMenor:{
        width: 200,
        height: 200,
        backgroundColor: '#7BAFD4B2',
        borderRadius: 100, 
        position: 'absolute',
        top: 0,    
        right: 0,  
        zIndex: 0, 
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
    botaoCadastro:{
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    textoCadastro:{
        color:'black',
        fontSize: 30,
        fontWeight: 900,
        fontFamily: 'League Spartan'
    },
    botaoEntrar:{
        height: 60,
        width: 130,
        backgroundColor: 'white',
        position: 'absolute',
        top: 500,
        left: 210,
        borderRadius: 20
    },
    textoEntrar:{
        color:'black',
        fontSize: 20,
        fontWeight: 900,
        fontFamily: 'League Spartan',
        position: 'absolute',
        top: 19,
        left: 36
    }
    
})