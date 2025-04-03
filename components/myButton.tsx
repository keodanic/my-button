import {View,TouchableOpacity,Text,StyleSheet,TouchableOpacityProps} from "react-native"

type Props= TouchableOpacityProps &{
  title:string;
  selected: boolean;
}

export function MyButton({title,selected, ...rest}:Props){

  return(
      <TouchableOpacity style={[styles.contanier,
        {
          backgroundColor: selected ? "blue": "#b9b9b9"
        }
      ]} 
      activeOpacity={0.3} 
      {...rest}
      >
        <Text>
          {title}
        </Text>
      </TouchableOpacity>
  )
}
const styles= StyleSheet.create({
  contanier:{backgroundColor:"#b9b9b9", padding:10, borderRadius:10, height:48}
})