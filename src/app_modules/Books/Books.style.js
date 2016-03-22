import React,{StyleSheet} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1d1f21'
  }
})

//list item styles
var bookItemStyle = StyleSheet.create({
	itemRowStyle:{
    flex:1,
    flexDirection:'row',
		padding:5,
    position:'relative',
    borderBottomColor:'#393939',
    borderTopColor:'#34353c',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    borderWidth:1/2
	},
  bookImage:{
    width:80,
    height:100,
  },
  bookPropsStyle:{
    flex:1,
    flexDirection:'column',
  },
	articleTitle:{
		fontSize:14,
		color:'#f8f8f8'
	},
	articleDate:{
		fontSize:10,
		color:'#5c5c5c',
    backgroundColor:'transparent',
		position:'absolute',
		right:10,
		top:4
	},
	articleContent:{
		fontSize:12,
		color:'#5c5c5c'
	}
});
export {bookItemStyle}
export default styles
