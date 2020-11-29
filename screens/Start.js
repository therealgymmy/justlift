import React, { useReducer } from 'react';
import { FlatList, View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { Button, Card, Header, ListItem, Text, ThemeProvider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function MakeStartScreen() {
  return MakeScreen(StartScreen());
}

const MakeScreen = (screen) => {
  return (
    <ThemeProvider>
      {screen}
    </ThemeProvider>
  );
}

const StartScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={{flex: 1}}>
      <Header
        centerComponent={<Text style={{fontSize: 24, color:'white'}}>Just Lift</Text>}
        rightComponent={renderSettingsButton(
          () => dispatch(actionCreators.add('New Routine'))
        )}
      />
      <Card>
        <Card.Title>Workout History</Card.Title>
        <Card.Divider/>
        <Text># workouts this week</Text>
        <Text># mins exercised this week</Text>
        <Text># lbs lifted this week</Text>
      </Card>
      <Card containerStyle={{flex: 0.9}} wrapperStyle={{flex: 1}}>
        <Card.Title>Saved Routines</Card.Title>
        <Card.Divider/>
        {renderWorkouts(state.items)}
      </Card>
    </View>
  );
};

const renderSettingsButton = (onPressButton) => {
  return (
    <Button
      icon={<AntDesign name='pluscircleo' size={24} color='white'/>}
      onPress={() => onPressButton()}
    />
  );
}

const renderWorkouts = (workouts) => {
  return (
    <FlatList
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
     data={workouts}
     keyExtractor={(item, index) => index.toString()}
     renderItem={({item}) => (
       <ListItem
         bottomDivider
         Component={TouchableScale}
         friction={90}
         tension={100}
         activeScale={0.95}
       >
         <ListItem.Content>
           <ListItem.Title>{item.title}</ListItem.Title>
           <ListItem.Subtitle>Last Exercise: {item.lastExerciseDate}</ListItem.Subtitle>
         </ListItem.Content>
       </ListItem>
     )}
    />
  );
}

const randomId = () => Math.random().toString();

const createNewExercise = (title) => ({
  id: randomId(),
  title: title,
  lastExerciseDate: '11/01/2020',
});

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createNewExercise(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

const initialState = {
  items: [
    createNewExercise('Routine 1'),
    createNewExercise('Routine 2'),
    createNewExercise('Routine 3'),
    createNewExercise('Routine 4'),
    createNewExercise('Routine 5'),
    createNewExercise('Routine 6'),
    createNewExercise('Routine 7'),
    createNewExercise('Routine 8'),
    createNewExercise('Routine 9'),
    createNewExercise('Routine 10'),
    createNewExercise('Routine 11'),
    createNewExercise('Routine 12'),
    createNewExercise('Routine 13'),
    createNewExercise('Routine 14'),
    createNewExercise('Routine 15'),
  ],
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] }
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
  }
}
