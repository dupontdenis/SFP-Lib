import { paper, rock, scissors } from './shapes.js'
import { keysTab, ramdomKey } from './libMap.js'

// Create a Map
export const ruleGameMap = new Map();

// Add new rule to the Map
ruleGameMap.set(paper, rock);
ruleGameMap.set(rock, scissors);
ruleGameMap.set(scissors, paper);

export const shapes = keysTab(ruleGameMap)
// console.log(shapes)

const printRules = (rule) => {
  let i = 0;
  console.log("Rules of the game")
  for (const [shape1, shape2] of rule) {
    console.log(`Rule ${++i}: ${shape1.shape} wins ${shape2.shape}`)
  }
}
printRules(ruleGameMap);

export const statusWinner = (shape1, shape2) => {
  console.log(`${shape1.shape} would win against ${ruleGameMap.get(shape1).shape}`)
  let status = "Player1 loses !"
  if (shape1.shape == shape2.shape) {
    status = "Draw"
  } else if (shape2.shape == ruleGameMap.get(shape1).shape) {
    status = "Player1 wins"
  }
  return status;
}
// console.log(ramdomKey(ruleGameMap))
export const ramdomShape = ramdomKey(ruleGameMap);


