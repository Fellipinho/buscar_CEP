import React, { Component, useEffect, useState } from "react"
import { Text, View, TextInput, FlatList, TouchableHighlight, StyleSheet, Button } from "react-native"
import axios from "axios"

export default props => {

    const [state, setstate] = useState("")
    const [array, setArray] = useState({})

    async function Cep(text) {

        try {
           return await axios(`https://viacep.com.br/ws/${text}/json/`)
                .then(resp => setArray(resp.data))
        } catch (error) {
             return error
        }

    }

    useEffect(() => {
        Cep()
    }, [])

    return (
        
      <View style={styles.container}> 
            
            <Text>Digite seu CEP:</Text>
            <TextInput onChangeText={text => setstate(text)} />

            <Text>CEP: {array.cep}</Text>
            <Text>logradouro: {array.logradouro}</Text>
            <Text>Complemento: {array.complemento}</Text>
            <Text>localidade: {array.localidade}</Text>
            <Text>UF: {array.uf}</Text>
            <Text>IBGE: {array.ibge}</Text>
            <Text>GIA: {array.gia}</Text>
            <Text>DDD: {array.ddd}</Text>
            <Text>SIAFI: {array.siafi}</Text>
            
            <Button title="Buscar" onPress={()=> Cep(state)}  />
            
        </View>
    )

}

const styles = StyleSheet.create({

  container:{

      marginTop: 300,
      backgroundColor:'#91D9DB',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10

  },

})