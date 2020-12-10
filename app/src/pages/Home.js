import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

export default function Home() {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor:"#FFF",}}
        >
            
            <View style={styles.header}>
                <View style={styles.imputArea}>
                    <Feather name="search" size={24} color="black"/>
                    <TextInput 
                        placeholder="O que você está procurando?"
                        style={styles.imput}
                    />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:20,
    },
    imputArea:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        width:'98%',
        backgroundColor:'#FFF',
        elevation:2,
        paddingHorizontal:10,
        height:37,
        borderRadius:10,
    },
    input:{
        fontFamily:'Montserrat_500Medium'
    }
})
