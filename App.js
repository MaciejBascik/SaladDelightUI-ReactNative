import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Card from './components/card';
import SwipeCard from './components/swipeCard';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';
export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [isMenuActive, setisMenuActive] = useState(false);
  const [menuImg, setMenuImg] = useState("https://i.ibb.co/dJmnyqp/xdxdxd.png");
  const handleMenuClick = () => {
    setisMenuActive(!isMenuActive);
    if(isMenuActive) {
      setMenuImg("https://i.ibb.co/JpYbQd7/menju.png");
  }
  else {
      setMenuImg("https://i.ibb.co/dJmnyqp/xdxdxd.png");
  }   

   
  };


  const handleFavoriteChange = (id, isFavorite) => {
    if (isFavorite) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter(favId => favId !== id));
    }

  };


  const [fontsLoaded, fontError] = useFonts({
    'Cabin': require('./assets/Cabin.ttf'),
    'Bold': require('./assets/bold.ttf'),
    'Medium': require('./assets/medium.ttf'),
    'Regular': require('./assets/regular.ttf'),
  });

  const [categories, setCategories] = useState([
    { 'name': 'Hottest', 'isSelected': true },
    { 'name': 'Popular', 'isSelected': false },
    { 'name': 'New', 'isSelected': false },
    { 'name': 'Top', 'isSelected': false }
  ]);


function handleOrder({title}) {
  let toast = Toast.show(`${title} added to cart.`, {
    duration: Toast.durations.LONG,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
  
  setTimeout(function hideToast() {
    Toast.hide(toast);
  }, 500);
}


if (!fontsLoaded) {
  return <Text>Loading fonts...</Text>;
}

if (fontError) {
  return <Text>Error loading fonts</Text>;
}
function handleClick(name) {
  const updatedCategories = categories.map((e) => {
    return {
      ...e,
      isSelected: false
    };
  });

  const clickedCategory = updatedCategories.find((e) => e.name === name);
  clickedCategory.isSelected = true;

  setCategories([clickedCategory, ...updatedCategories.filter((e) => e.name !== name)]);
}




  return (
<RootSiblingParent>
    <View style={styles.container} >
      
          <View  style={{
            alignSelf:'flex-start',
            paddingLeft:30,
            flexDirection:'row',
            gap:20,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center'
          }}>
            <Pressable onPress={() => handleMenuClick()}><Image source={{uri:menuImg, height: 11, width: 22}} /></Pressable>
            <View style={[styles.cardContainer, isMenuActive ? styles.show : styles.hide]}><Text >Feed</Text></View>
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
          <Card image="https://i.ibb.co/Sxvq9nx/Honey-Lime-Peach-Fruit-Salad-3-725x725-1-removebg-preview-1.png" title="Honey lime" price="30" handleOrder={() =>  handleOrder({ title: "Honey lime" })}   onFavoriteChange={handleFavoriteChange} id={1} />
          <Card image="https://i.ibb.co/2F1VvD8/Glowing-Berry-Fruit-Salad-8-720x720-removebg-preview-1.png" title="Berry mango" price="30" handleOrder={() =>  handleOrder({ title: "Berry mango" })}   onFavoriteChange={handleFavoriteChange} id={2}/>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 35, paddingBottom:15, gap: 35, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        {categories.map((e, idx) => (
          <Pressable key={idx} onPress={() => handleClick(e.name)}>
            <Text  style={e.isSelected ? styles.selected : styles.unselected}>{e.name}</Text>
          </Pressable>
        ))}
      </View>

        
      <ScrollView horizontal={true} style={{ minWidth: Dimensions.get('screen').width }}>
      <SwipeCard image="https://i.ibb.co/D5py9RL/breakfast-quinoa-and-red-fruit-salad-134061-1-removebg-preview-1.png" title="Quinoa fruit" price="30"  handleOrder={() =>  handleOrder({ title: "Quinoa fruit" })}  bg='#FFFAEB' imageH={62} imageW={62} onFavoriteChange={handleFavoriteChange} id={3}/>
      <SwipeCard image="https://i.ibb.co/FBGPwPF/Best-Ever-Tropical-Fruit-Salad8-WIDE-removebg-preview-1.png" title="Tropical fruit" price="30" handleOrder={() => handleOrder({ title: "Melon fruit" })}  bg='#FEF0F0' imageH={48} imageW={94} onFavoriteChange={handleFavoriteChange} id={4}/>
      <SwipeCard image="https://i.ibb.co/QNtKj4W/xddd.png" title="Melon fruit" price="30"  handleOrder={() => handleOrder({ title: "Melon fruit" })}   bg='#F1EFF6' imageH={41} imageW={67} onFavoriteChange={handleFavoriteChange} id={5}/>
      </ScrollView>
      </View>
      </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
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
  show: {
    display:'flex',
  },
  hide: {
    display:'none',
  },
  card2: {
    backgroundColor: '',
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