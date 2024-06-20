import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Card = ({ handleOrder, image, title, price, bg = 'white', id, onFavoriteChange }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleVectorClick = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onFavoriteChange(id, newFavoriteStatus);
  };

  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <Pressable onPress={() => handleVectorClick()}>
        <Image
          source={{ uri: isFavorite ? "https://i.ibb.co/gM7ms5k/Vector2.png" : "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }}
          style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }}
        />
      </Pressable>
      <Image source={{ uri: image, height: 78, width: 78 }} style={{ marginBottom: 10 }} />
      <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>{title}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
        <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>{price} zł</Text>
        <Pressable onPress={() => handleOrder(title)}>
          <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 14,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    width: 150,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Card;
