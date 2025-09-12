import React from 'react';
import { View, Button, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function Main() {
    const [fontsLoaded] = useFonts({
        'IRANSans': require('../assets/fonts/IRANSans.ttf'),
    });
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title='صفحه ورود' onPress={() => navigation.navigate('EntryPage')} />
            <Button title='Login Page' onPress={() => navigation.navigate('LoginPage')} />
            <Button title='Main Page' onPress={() => navigation.navigate('MainPage')} />
            <Button title='Login Form Page' onPress={() => navigation.navigate('LoginFormPage')} />
            <Text style={{fontFamily: 'IRANSans'}}>صفحه ورود</Text>
        </View>
    )
} 