import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Character } from "../../types/api";

interface CharacterListItemProps {
    character: Character
    isLast?: boolean
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({character, isLast}) => {
   
    const styles = createStyles(isLast ?? false)
   
    return (
        <View style={styles.outerContainer}>
            <View style={styles.leftInnerContainer}></View>   
            <View style={styles.rightInnerContainer}>
                <Text style={styles.characterName}>{character.name}</Text>
            </View>
        </View>
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