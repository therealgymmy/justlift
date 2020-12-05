import React, { useReducer } from 'react';
import { FlatList, View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { Button, Card, Header, ListItem, Text, ThemeProvider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function MakeAddNewExerciseScreen(setDisplay) {
  return MakeScreen(AddNewExerciseScreen(setDisplay));
}

const MakeScreen = (screen) => {
  return (
    <ThemeProvider>
      {screen}
    </ThemeProvider>
  );
}

const AddNewExerciseScreen = (setDisplay) => {
  return (
    <View style={{flex: 1}}>
      <Header
        centerComponent={<Text style={{fontSize: 24, color:'white'}}>Just Lift</Text>}
        rightComponent={renderSettingsButton(
          () => {
            setDisplay('start');
          }
        )}
      />
      <Card>
        <Card.Title>Add A New Routines</Card.Title>
        <Card.Divider/>
        <Text># exercises</Text>
        <Text># lbs target</Text>
      </Card>
    </View>
  );
}

const renderSettingsButton = (onPressButton) => {
  return (
    <Button
      icon={<AntDesign name="closecircleo" size={24} color="white" />}
      onPress={() => onPressButton()}
    />
  );
}
