import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Character } from "../../types/api";
import CharacterListItem from "../characterListItem/CharacterListItem";


const Characters: React.FC = ()=> {

    const [characters, setCharacters] = useState<Character[]>([]);

    const fetchAllCharacters = ()=>{
        fetch("https://psychonauts-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => setCharacters(data))
    }

    useEffect(()=>{
        fetchAllCharacters()
    },[]);

    const characterList = characters.map((character, index, array)=> {
        return (
            <CharacterListItem 
                key={character._id} 
                character={character} 
                isLast={index === array.length - 1}
            />
        )
    })
    
    return(
        <ScrollView>
            {characterList}
        </ScrollView>
    )
}



export default Characters;