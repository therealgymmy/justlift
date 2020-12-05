import { useState, useReducer } from 'react'
import MakeStartScreen from './screens/Start'
import MakeAddNewExerciseScreen from './screens/AddNewExercise'

export default function App() {
  return MyApp();
}

const MyApp = () => {
  const [display, setDisplay] = useState('start');
  const [workouts, updateWorkouts] = useReducer(reducer, initialWorkouts);

  if (display == 'start') {
    return MakeStartScreen(setDisplay, workouts, updateWorkouts, actionCreators);
  } else if (display == 'add-new-routine') {
    return MakeAddNewExerciseScreen(setDisplay);
  } else if (display == 'workout-history') {
    return MakeStartScreen(setDisplay);
  }
};

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

const initialWorkouts = {
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
