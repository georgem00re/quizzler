interface Action {
  payload: object;
  type: string;
}

export function quizReducer(state = null, action: Action) {
  if (action.type === "UPDATE_QUIZ") {
    return action.payload;
  } else {
    return state;
  }
}

export function answeredQuestions(state = [], action: Action) {
  if (action.type === "ANSWER_QUESTION") {
    return [...state, action.payload];
  } else {
    return state;
  }
}

export function scoreReducer(state = 0, action: Action) {
  if (action.type === "CORRECT_ANSWER") {
    return state + 1;
  } else if (action.type === "INCORRECT_ANSWER") {
    return state;
  } else {
    return state;
  }
}

export function helpDialogOpen(state = false, action: Action) {
  if (action.type === "OPEN_HELP_DIALOG") {
    return true;
  } else if (action.type === "CLOSE_HELP_DIALOG") {
    return false;
  } else {
    return state;
  }
}

export function settingsDialogOpen(state = false, action: Action) {
  if (action.type === "OPEN_SETTINGS_DIALOG") {
    return true;
  } else if (action.type === "CLOSE_SETTINGS_DIALOG") {
    return false;
  } else {
    return state;
  }
}

export function statsDialogOpen(state = false, action: Action) {
  if (action.type === "OPEN_STATS_DIALOG") {
    return true;
  } else if (action.type === "CLOSE_STATS_DIALOG") {
    return false;
  } else {
    return state;
  }
}

export function lightTheme(state = true, action: Action) {
  if (action.type === "TOGGLE_THEME") {
    return !state;
  } else {
    return state;
  }
}
