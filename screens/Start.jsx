import React from 'react';
import { FlatList, View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { Button, Card, Header, ListItem, Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function Start(setDisplay, workoutState) {
  return (
    <View style={{flex: 1}}>
      <Header
        centerComponent={<Text style={{fontSize: 24, color:'white'}}>Just Lift</Text>}
        rightComponent={renderSettingsButton(
          () => {
            setDisplay('add-new-routine');
          }
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
        {renderWorkouts(workoutState.items)}
      </Card>
    </View>
  );
}

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

