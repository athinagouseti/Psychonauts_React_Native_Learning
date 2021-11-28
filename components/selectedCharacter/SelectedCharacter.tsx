import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Character } from "../../types/api";

type SelectedCharacterScreenRouteProp = {
    key: string,
    name: string,
    path?: string,
    params: {
        characterName: string
    }
}

const SelectedCharacter: React.FC = () => {
    const { width } = useWindowDimensions()
    const { params } = useRoute<SelectedCharacterScreenRouteProp>()
    const navigation  = useNavigation()
    const [character, setCharacter] = useState<Character>()

    navigation.setOptions({title: character?.name})


    const styles = createStyles(width)

    const fetchSpecificCharacter = ()=>{
        fetch(`https://psychonauts-api.herokuapp.com/api/characters?name=${params.characterName}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
    }

    useEffect(() => {
        if (params.characterName) {
            fetchSpecificCharacter()
        }
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}> 
            <Text>{character?.name}</Text>
            <Image source={{uri: character?.img}} style={styles.image}/>
            </View>
        </ScrollView>
    )
}

const createStyles = (windowWidth: number) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: windowWidth - 20,
        height: 1000,
        resizeMode: 'contain'
    }
})
export default SelectedCharacter;