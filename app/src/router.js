import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';

import home from './pages/Home';
import Datails from './pages/Datails';
import Home from './pages/Home';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="datails" component={Datails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;