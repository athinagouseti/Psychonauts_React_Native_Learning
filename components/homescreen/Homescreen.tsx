import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';


const Homescreen: React.FC = () => {
    const { height, width } = useWindowDimensions();

    const styles = createStyles(width)

    return (
        <View style={styles.container}>
            <Image style={styles.titleImage} source={require('../../assets/psychonauts-logo.png')}></Image>
        </View>
    )
} 

const createStyles = (windowWidth: number) => StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleImage: {
        width: windowWidth - 20,
        resizeMode: 'contain'
    }
})

export default Homescreen;