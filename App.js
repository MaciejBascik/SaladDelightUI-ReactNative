import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';

export default function App() {
  console.log(Dimensions.get('screen'))
  const [isSelected, setIsSelected] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    'Cabin': require('./assets/Cabin.ttf'),
    'Bold': require('./assets/bold.ttf'),
    'Medium': require('./assets/medium.ttf'),
    'Regular': require('./assets/regular.ttf'),
  });

  const categories = [
    { 'name': 'Hottest', 'isSelected': true },
    { 'name': 'Popular', 'isSelected': false },
    { 'name': 'New combo', 'isSelected': false },
    { 'name': 'Top', 'isSelected': false }
  ];

function handleOrder(id) {
  console.log(id)
}

function handleLike(id) {
  console.log("liked")
}


  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    <View style={styles.container} >
          <View  style={{
            alignSelf:'flex-start',
            paddingLeft:30
          }}>
          <Image source={{uri:"https://i.ibb.co/dJmnyqp/xdxdxd.png", height: 11, width: 22}} />
        </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, color: '#27214D', width: '80%', fontFamily: 'Regular' }}>
          Hello Maciej, <Text style={{ fontFamily: 'Bold' }}>What dish combo do you want today?</Text>
        </Text>
      </View>
      <Text style={{ fontSize: 24, color: '#27214D', width: '70%', fontFamily: 'Medium', marginVertical: 20, alignSelf:'flex-start', marginLeft:35}}>
        Recommended Combos
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <Pressable onPress={() => handleLike(2)}>
          <Image source={{ uri: "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
          </Pressable>
          <Image source={{ uri: "https://i.ibb.co/Sxvq9nx/Honey-Lime-Peach-Fruit-Salad-3-725x725-1-removebg-preview-1.png", height: 78, width: 78 }} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>Honey lime combo</Text>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
            <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>30 zł</Text>
            <Pressable onPress={() => handleOrder(1)}>
            <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
          </Pressable>
          </View>
        </View>
        <View style={styles.card}>
        <Pressable onPress={() => handleLike(2)}>
          <Image source={{ uri: "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
          </Pressable>
          <Image source={{ uri: "https://i.ibb.co/2F1VvD8/Glowing-Berry-Fruit-Salad-8-720x720-removebg-preview-1.png", height: 78, width: 78 }} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>Berry mango combo</Text>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
            <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>30 zł</Text>
            <Pressable onPress={() => handleOrder(2)}>
            <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 35, paddingBottom:15, gap: 35, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        {categories.map((e, idx) => (
          <Text key={idx} style={e.isSelected ? styles.selected : styles.unselected}>{e.name}</Text>
        ))}
      </View>

        
      <ScrollView horizontal={true} style={{ minWidth: Dimensions.get('screen').width }}>
        <View style={styles.card1}>
        <Pressable onPress={() => handleLike(3)}>
          <Image source={{ uri: "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
        </Pressable>
          <Image source={{ uri: "https://i.ibb.co/D5py9RL/breakfast-quinoa-and-red-fruit-salad-134061-1-removebg-preview-1.png", height: 62, width: 62 }} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>Quinoa fruit salad</Text>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
            <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>30 zł</Text>
            <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
          </View>
        </View>
        <View style={styles.card2}>
        <Pressable onPress={() => handleLike(4)}>
          <Image source={{ uri: "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
        </Pressable>  
          <Image source={{ uri: "https://i.ibb.co/FBGPwPF/Best-Ever-Tropical-Fruit-Salad8-WIDE-removebg-preview-1.png", height: 48, width: 94 }} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>Tropical fruit salad</Text>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
            <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>30 zł</Text>
            <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 22, width: 22 }} style={{ marginBottom: 10 }} />
          </View>
        </View>
        <View style={styles.card3}>
        <Pressable onPress={() => handleLike(5)}>
          <Image source={{ uri: "https://i.ibb.co/VgHtxyy/Vector.png", height: 12, width: 14 }} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', marginBottom: 5 }} />
          </Pressable>  
          <Image source={{ uri: "https://i.ibb.co/QNtKj4W/xddd.png", height: 42, width: 67 }} style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 14, color: '#27214D', fontFamily: 'Medium', width: '100%' }}>Tropical fruit salad</Text>
          <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 11 }}>
            <Text style={{ fontSize: 12, color: '#F08626', fontFamily: 'Regular', width: '100%' }}>30 zł</Text>
            <Image source={{ uri: "https://i.ibb.co/gP7YmN7/Group-10.png", height: 26, width: 26 }} style={{ marginBottom: 10 }} />
          </View>
        </View>
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  card1: {
    backgroundColor: '#FFFAEB',
    borderRadius: 15,
    padding: 14,
    width: 150,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,
    marginLeft: 30,
  },
  card3: {
    backgroundColor: '#F1EFF6',
    borderRadius: 15,
    padding: 14,
    width: 150,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,
  },
  card2: {
    backgroundColor: '#FEF0F0',
    borderRadius: 15,
    padding: 14,
    width: 150,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,
  },
  
  selected: {
    color: '#27214D',
    fontSize: 24,
    fontFamily: 'Medium',
    },
    unselected: {
    color: '#938DB5',
    fontSize: 14,
    fontFamily: 'Medium',
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical:50,
    },
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
    },
    header: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    },
    cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    },

    });