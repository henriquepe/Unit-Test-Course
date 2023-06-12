interface Locale {
  gameTitle: string;
  gameSubtitle: string;
  points: string;
  changeHightScore: string;
  we: string;
  they: string;
  plusOne: string;
  lessOne: string;
  truco: string;
  save: string;
  cancel: string;
  maximumScoreYouWant: string;
}

export const ptLocale: Locale = {
  gameTitle: "Placar de Truco",
  gameSubtitle: "O jogo termina quando algum time atingir",
  points: "pontos",
  changeHightScore: "Alterar pontuação máxima",
  we: "Nós",
  they: "Eles",
  plusOne: "+1",
  lessOne: "-1",
  truco: "Truco",
  cancel: "Cancelar",
  save: "Salvar",
  maximumScoreYouWant: "Digite a pontuação máxima que deseja:",
};

export const engLocale: Locale = {
  gameTitle: "Truco Scoreboard",
  gameSubtitle: "The game ends when some team reach",
  points: "points",
  changeHightScore: "Change hight score",
  we: "We",
  they: "They",
  plusOne: "+1",
  lessOne: "-1",
  truco: "Truco",
  cancel: "Cancel",
  save: "Save",
  maximumScoreYouWant: "Type the maximum score you want:",
};
