export interface UrbanSimulationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const image = (number: number, width: number, height: number, alt: string): UrbanSimulationImage => ({
  src: `/images/board_game/board_game_${number}.png`,
  alt,
  width,
  height,
});

export const urbanSimulationImages = {
  hero: image(1, 1728, 449, 'Urban simulation board game map with city markers and game pieces'),
  simCityScreens: image(2, 633, 719, 'Screens from urban simulation games'),
  gameComparison: image(3, 668, 598, 'Comparison of urban simulation games by scale and participation'),
  userFlow: image(4, 824, 560, 'Urban simulation board game user flow'),
  personas: image(5, 681, 457, 'Potential city actors grouped into game personas'),
  gameLoop: image(6, 745, 459, 'Game loop showing propose, negotiate, decide, and act'),
  negotiation: image(7, 1115, 700, 'Game negotiation model with stakeholder roles'),
  urbanQualityIndex: image(8, 827, 736, 'Urban Quality Index dimensions'),
  playerCards: image(9, 1195, 373, 'Urban simulation game player cards'),
  projectCards: image(10, 1217, 849, 'Urban simulation game project cards'),
  eventCards: image(11, 603, 396, 'Urban simulation game event cards'),
  qualityChart: image(12, 603, 396, 'Urban simulation game Urban Quality chart'),
  gameBoardNotes: image(13, 931, 700, 'Urban simulation game board explanation'),
  gameBoard: image(14, 848, 530, 'Urban simulation game board with pieces'),
  gameBoardDetail: image(15, 463, 540, 'Detailed urban simulation game board map'),
  userTesting: image(16, 1172, 655, 'People testing the urban simulation board game'),
} as const;
