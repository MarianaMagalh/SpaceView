import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input  } from 'react-native-elements';
import {useState} from 'react'

export function Login() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.esfera}>
            <Text style={styles.text}>Seja Bem Vindo! </Text>
            </View>
            <View style={styles.esferaMenor}></View>
            

            <Input
                style = {styles.input}
                placeholder='Seu email'
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />

            <Input
                style={styles.input}
                placeholder='Sua senha'
                onChangeText={setSenha}
                value={senha}
            />
            <TouchableOpacity
                onPress={null}
                style={styles.botaoEntrar}
            >
                <Text style={styles.textoEntrar}>Entrar</Text>
            </TouchableOpacity>
           
           <TouchableOpacity
                onPress={null}
                style={styles.cadastro}
           >
                <Text style={styles.textoCadastro}>Cadastre-se</Text>
            
           </TouchableOpacity>

           <TouchableOpacity
                onPress={null}
                style={styles.esqueci}
           >
                <Text style={styles.textoSenha}>Esqueci minha senha</Text>
            
           </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7E5FF',
    },
    text: {
        color: '#fff', // Cor do texto
        fontWeight: 'bold', // Estilo do texto
        top: 63,
        left: 27,
        fontSize: 50,
        fontFamily: 'League Spartan'
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
    entrar:{
        color:'black',
        fontSize: 30,
        fontWeight: 900,
        fontFamily: 'League Spartan'
    },
    botaoEntrar:{
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    esfera: {
        width: 220,  // Aumenta a largura da esfera
        height: 220, // Aumenta a altura da esfera (igual à largura para manter o círculo)
        backgroundColor: '#0094FECC',
        borderRadius: 110,  // Metade da largura/altura para manter a forma circular
        position: 'absolute',
        top: 0,
        left: 0,
    },
    esferaMenor: {
        width: 200,
        height: 200,
        backgroundColor: '#7BAFD4B2',
        borderRadius: 100, // Metade da largura/altura para criar a esfera
        position: 'absolute',
        top: 0,     // Posiciona a esfera menor no topo da tela
        right: 0,  // Posiciona a esfera menor à direita da tela
        zIndex: 0,   // A esfera menor fica atrás da maior
    },
    cadastro:{
        height: 60,
        width: 130,
        backgroundColor: 'white',
        position: 'absolute',
        top: 470,
        left: 20,
        borderRadius: 20
    },
    textoCadastro:{
        color:'black',
        fontSize: 20,
        fontWeight: 900,
        fontFamily: 'League Spartan',
        position: 'absolute',
        top: 17,
        left: 13
    },
    esqueci:{
        height: 60,
        width: 130,
        backgroundColor: 'white',
        position: 'absolute',
        top: 470,
        left: 210,
        borderRadius: 20
    },
    textoSenha:{
        color:'black',
        fontSize: 17,
        fontWeight: 900,
        fontFamily: 'League Spartan',
        position: 'absolute',
        top: 12,
        left: 13
    }
    
});
