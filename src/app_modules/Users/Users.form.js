import React from 'react-native'

import {Actions} from 'react-native-router-flux'
import Form from 'react-native-form'
import styles from './Users.style'

import FieldView from '../../Components/FieldView'

const {
  Component,
  View,
  Text,
  TextInput,
  Picker,
  ScrollView
}= React


export default class BooksForm extends Component{
  handleSubmit(){
    let values=this.refs.form.getValues()
    Actions.pop()
  }
  render(){
    return(
      <View style={[styles.container]}>
      <ScrollView>
        <Text>new Books</Text>
        <Form ref="form" style={{flexDirection:'column',flex:1}}>
          <FieldView labelText="bookname">
            <TextInput type="TextInput" name="bookname" placeholder="please enter Bookname" autoFocus={true} style={{height:30}} />
          </FieldView>
          <FieldView labelText="by">
            <TextInput type="TextInput" name="by" style={{height:30}} />
          </FieldView>
          <FieldView labelText="publisher">
            <TextInput type="TextInput" name="publisher" style={{height:30}} />
          </FieldView>
          <FieldView labelText="isbn">
            <TextInput type="TextInput" name="isbn" style={{height:30}} />
          </FieldView>
          <FieldView labelText="language">
            <TextInput type="TextInput" name="language" style={{height:30}} />
          </FieldView>
          <FieldView labelText="year">
            <TextInput type="TextInput" name="year" style={{height:30}} />
          </FieldView>
          <FieldView labelText="page">
            <TextInput type="TextInput" name="page" style={{height:30}} />
          </FieldView>
        </Form>
        </ScrollView>
      </View>
    )
  }
}
