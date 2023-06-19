export function updateQuiz(quiz: object) {
  return {
    type: "UPDATE_QUIZ",
    payload: quiz,
  };
}

export function answerQuestion(index: number) {
  return {
    type: "ANSWER_QUESTION",
    payload: index,
  };
}

export function correctAnswer() {
  return {
    type: "CORRECT_ANSWER",
  };
}

export function incorrectAnswer() {
  return {
    type: "INCORRECT_ANSWER",
  };
}

export function openHelpDialog() {
  return {
    type: "OPEN_HELP_DIALOG",
  };
}

export function closeHelpDialog() {
  return {
    type: "CLOSE_HELP_DIALOG",
  };
}

export function openSettingsDialog() {
  return {
    type: "OPEN_SETTINGS_DIALOG",
  };
}

export function closeSettingsDialog() {
  return {
    type: "CLOSE_SETTINGS_DIALOG",
  };
}

export function toggleTheme() {
  return {
    type: "TOGGLE_THEME",
  };
}

export function openStatsDialog() {
  return {
    type: "OPEN_STATS_DIALOG",
  };
}

export function closeStatsDialog() {
  return {
    type: "CLOSE_STATS_DIALOG",
  };
}
