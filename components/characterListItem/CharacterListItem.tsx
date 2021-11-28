import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Character } from "../../types/api";

interface CharacterListItemProps {
    character: Character
    isLast?: boolean
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({character, isLast}) => {
    const navigation = useNavigation()
    
    const styles = createStyles(isLast ?? false)
    
    const navigateToCharacter = () => {
        navigation.navigate("SelectedCharacter" as never, { characterName: character.name} as never) //TO DO: Fix types
    }
   
    return (
        <TouchableHighlight style={styles.outerContainer} onPress={navigateToCharacter}>
            <>
                <View style={styles.leftInnerContainer}></View>   
                <View style={styles.rightInnerContainer}>
                    <Text style={styles.characterName}>{character.name}</Text>
                </View>
            </>
        </TouchableHighlight>
    )
}

const createStyles = (isLast: boolean) => StyleSheet.create({
    outerContainer: {
        flexDirection: "row",
        flex: 1
    },
    leftInnerContainer: {
        width: 20,
    },
    rightInnerContainer: {
        flex: 1,
        paddingVertical: 12,
        borderBottomColor: 'grey',
        borderBottomWidth: isLast ? undefined : 1
    },
    characterName: {
        textTransform: "capitalize"
    }
})

export default CharacterListItem;