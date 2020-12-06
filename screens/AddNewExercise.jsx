import React from 'react';
import { View } from 'react-native';
import { Button, Card, Header, Input, Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function AddNewExercise(setDisplay, addNewRoutine) {
  let newRoutineName = ''
  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={renderCancelButton(
          () => {
            setDisplay('start');
          }
        )}
        centerComponent={<Text style={{fontSize: 24, color:'white'}}>Just Lift</Text>}
        rightComponent={renderSaveButton(
          () => {
            addNewRoutine(newRoutineName);
            setDisplay('start');
          }
        )}
      />
      <Card>
        <Input
          placeholder='new routine'
          onChangeText={text => newRoutineName=text}
        />
        <Card.Divider/>
        <Text># exercises</Text>
        <Text># lbs target</Text>
      </Card>
      <Card>
        <Input placeholder='new exercise'/>
        <Input placeholder='reps'/>
        <Button
          title="Add New Exercise"
        />
      </Card>
    </View>
  );
}

const renderCancelButton = (onPressButton) => {
  return (
    <Button
      icon={<AntDesign name="closecircleo" size={24} color="white" />}
      onPress={() => onPressButton()}
    />
  );
}

const renderSaveButton = (onPressButton) => {
  return (
    <Button
      icon={<AntDesign name="checkcircleo" size={24} color="white" />}
      onPress={() => onPressButton()}
    />
  );
}
