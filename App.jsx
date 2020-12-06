import React, { useState, useReducer } from 'react';
import { ThemeProvider } from 'react-native-elements';
import * as workoutsReducer from './reducers/workouts';
import Start from './screens/Start';
import AddNewExercise from './screens/AddNewExercise';

export default function App() {
  return MyApp();
}

const MakeScreen = (screen) => {
  return (
    <ThemeProvider>
      {screen}
    </ThemeProvider>
  );
}

const MyApp = () => {
  const [display, setDisplay] = useState('start');
  const [workoutState, updateWorkoutState] = useReducer(
    workoutsReducer.reducer, workoutsReducer.initialState
  );

  if (display == 'start') {
    return MakeScreen(Start(
      setDisplay,
      workoutState
    ));
  } else if (display == 'add-new-routine') {
    return MakeScreen(AddNewExercise(
      setDisplay,
      (routineName) => {
        updateWorkoutState(workoutsReducer.actionCreators.add(routineName));
      }
    ));
  }
};

