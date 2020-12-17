import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import SwiperComponent from '../components/Swiper';
import Stars from 'react-native-stars';

export default function Datails() {
    return (
        <View style={styles.container}>

            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>

            <View style={styles.headerContent}>

                <View style={{width:'65%'}}>
                    <Text style={styles.house}>Casa de práia</Text>
                </View>

                <View style={{width:'35%'}}>
                    <Text style={styles.rating}>Avaliações</Text>
                    
                    <View style={{alignItems:'center', flexDirection:'row'}}>
                        <Stars 
                            // update={(valor) => useState(valor)}
                            default={4} 
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle}/> }
                            empytStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle}/> }
                            halfStar={ <Ionicons name="md-star-falf" size={24} style={styles.myStarStyle}/> }
                        />
                    </View>

                </View>

            </View>

            

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFF',
    }, 

    swiperContent:{
       flexDirection:'row',
        height:340,
        width:'100%',
    },

    headerContent:{
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginTop:20
    },

    house:{
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color:'#4f4a4a'
    },

    rating:{
        fontFamily:'Montserrat_500Medium',
        fontSize:9,
        color:'#4f4a4a'
    },

    myStarStyle:{
        color:'#E7A74E',
        backgroundColor:'transparent',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:1,
    },

});
