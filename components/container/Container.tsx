import React, { useEffect, useState } from "react";
import Homescreen from '../homescreen/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import Characters from '../characters/Characters';
import Favourites from '../favourites/Favourites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Character } from "../../types/api";


const Tab = createBottomTabNavigator();

const Container: React.FC = ()=> {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [favouriteCharacters, setFavouriteCharacters] = useState<Character[]>([]);

    const fetchAllCharacters = ()=>{
        fetch("https://psychonauts-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => setCharacters(data))
    }

    useEffect(()=>{
        fetchAllCharacters()
    },[]);

    const onCharacterClick = (character: Character) => {
        setSelectedCharacter(character)
    };

    const onFavouriteCharacterClick = (character: Character) => {
        const characterAlreadyFavourite = favouriteCharacters.some((favourite) => {
            return favourite._id === character._id
        })

        if (characterAlreadyFavourite) {
            const newFavouriteCharacters = favouriteCharacters.filter((favourite) => {
                return favourite._id !== character._id
            })
             setFavouriteCharacters(newFavouriteCharacters)
        } else {
            const copiedFavouriteCharacters = [...favouriteCharacters, character]
            setFavouriteCharacters(copiedFavouriteCharacters)
        }

    };

    return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Characters" component={Characters} />
          <Tab.Screen name="Favourites" component={Favourites} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default Container;