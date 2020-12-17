import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';

export default function Home() {

    const navigation = useNavigation();

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

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15,}}>
                
                <New
                    cover={require('../assets/house2.jpg')} 
                    name="Casa de Praia"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('datails') }
                />

                <New
                    cover={require('../assets/house3.jpg')} 
                    name="Casa de Praia"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('datails') }
                />

                <New
                    cover={require('../assets/house1.jpg')} 
                    name="Casa de Praia"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('datails') }
                />

            </ScrollView>

            <View style={{flexDirection:'row', marginBottom:10,alignItems:'center'}}>
                <Text style={[styles.title,{marginTop:20}]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15,}}>

                <House
                    cover={require('../assets/house1.jpg')}
                />

                <House
                    cover={require('../assets/house1.jpg')}
                />

                 <House
                    cover={require('../assets/house2.jpg')}
                />

                 <House
                    cover={require('../assets/house3.jpg')}
                />


            </ScrollView>

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
    }, 

    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
    },

    title:{
        paddingHorizontal:15,
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color: '#4f4a4a',
    },
})
