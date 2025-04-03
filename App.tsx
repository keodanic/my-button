import { Text, Image, StyleSheet, View, FlatList } from 'react-native';
import {MyButton} from "./components/myButton"
import { useState } from 'react';

const categories=[
  {id:1, title:"Fotografo"},
  {id:2, title:"Pintor"},
  {id:3, title:"Professor"}]
export default function App(){
  const [isSelected,setIsSelected]= useState("")
  return(
    <View style={styles.container}>
    <Image source={{uri: "https://www.github.com/keodanic.png"}}
    style={styles.picture}/>
    <FlatList data={categories}
    keyExtractor={(item)=>String(item.id)}
    renderItem={({item})=>(
      <MyButton 
      title={item.title}
      onPress={()=> setIsSelected(item.title)}
      selected={isSelected==item.title}
      />
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      gap:10,
      alignItems:"center"

    }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#4E4D5C",
    gap:10
  },
  text: {fontSize:23,
  color:"#FFF",
  fontWeight:"bold"
  },
  picture:{height:80,width:80,borderRadius:40},
  
});
