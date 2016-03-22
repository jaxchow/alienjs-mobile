import React from 'react-native'

const {
  Component,
  Text,
  View,
  StyleSheet
} = React

export default class FieldView extends Component{
  render(){
    return(
      <View style={styles.fieldView} >
        <Text style={styles.labelStyle}>{this.props.labelText}</Text>
        <View style={styles.fieldStyle}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

let styles=StyleSheet.create({
  fieldView:{
    flexWrap:'nowrap',
    flexDirection:'row',
    paddingTop:5,
    borderBottomWidth:1,
    borderColor:'#dcdcdc',
  },
  labelStyle:{
    width:100,
    paddingTop:5,
    fontWeight:'bold',
    alignSelf:'center',
    height:30,
  },
  fieldStyle:{
    flex:1,
    padding:1,
    alignItems:'flex-end'
  }
})
