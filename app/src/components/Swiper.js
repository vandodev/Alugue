import React from 'react'
import { View, Image,StyleSheet } from 'react-native';
import Swipper from 'react-native-swiper';

export default function SwiperComponent() {
    return (
       <Swipper
            style={styles.wrapper}
            dotStyle={{
                backgroundColor:'#000',
                borderColor:'#000',
                borderWidth:1,
                width:10,
                height:10,
                borderRadius:10,
            }}

            activeDotColor="#FFF"
            activeDotStyle={{
                borderColor:'#000',
                borderWidth:1,
                width:10,
                height:10,
                borderRadius:10,
            }}
        >

            <View style={styles.slide}>
                <Image
                    source={require('../assets/house1.jpg')}
                    style={{width:'100%', height:400}}
                />
            </View>

            <View style={styles.slide}>
                <Image
                    source={require('../assets/house2.jpg')}
                    style={{width:'100%', height:400}}
                />
            </View>

            <View style={styles.slide}>
                <Image
                    source={require('../assets/house3.jpg')}
                    style={{width:'100%', height:400}}
                />
            </View>

       </Swipper>
    );
}

const styles = StyleSheet.create({
    wrapper:{

    },

    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
});
