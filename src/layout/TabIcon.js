import React from 'react-native'

const {
  Component,
  Text
} = React

class TabIcon extends Component {
    render(){
        return (
          <Text style={{color: this.props.selected ? '#fff' :'#a6aaa6'}}>{this.props.title}</Text>
        );
    }
}

export default TabIcon
