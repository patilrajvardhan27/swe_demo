// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieSelection from './MovieSelection';
import MovieDetail from './MovieDetail';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MovieSelection"
                    component={MovieSelection}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MovieDetail"
                    component={MovieDetail}
                    options={{ title: 'Movie Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
