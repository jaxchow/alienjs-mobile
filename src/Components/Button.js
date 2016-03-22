import React from 'react-native'

const {
  Component,
  TouchableHighlight,
  Text
}=React

class Button extends Component{
  render(){
    return(
    <TouchableHighlight onPress={this.props.handle}>
      <Text>
        {this.props.text}
      </Text>
    </TouchableHighlight>
    )
  }
}
