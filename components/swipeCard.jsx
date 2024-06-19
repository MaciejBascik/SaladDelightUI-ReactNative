import { View, Text,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

const SwipeCard = ({ handleOrder, image, title, price, bg='white', imageH=78, imageW=78, onFavoriteChange,id }) => {
    const [vectorImage, setVectorImage] = useState("https://i.ibb.co/VgHtxyy/Vector.png");
    const [isFavorite, setIsFavorite] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleVectorClick = () => {
          setIsFavorite(!isFavorite);
          onFavoriteChange(id, isFavorite);
            setIsActive(!isActive);
        if(isActive) {
            setVectorImage("https://i.ibb.co/gM7ms5k/Vector2.png");
        }
        else {
            setVectorImage("https://i.ibb.co/VgHtxyy/Vector.png");
        }        
    };
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
    <Pressable onPress={() => handleVectorClick()}>
      <Image source={{ uri: vectorImage, height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
      </Pressable>
      <Image source={{ uri: image, height: imageH, width: imageW }} style={{ marginBottom: 10 }} />
      <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>{title}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
        <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>{price} zł</Text>
        <Pressable onPress={() => handleOrder(1)}>
        <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
      </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 14,
        width: 150,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:12
        }
    }
);
export default SwipeCard