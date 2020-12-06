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

export const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createNewExercise(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

export const initialState = {
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
  ],
}

export const reducer = (state, action) => {
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
