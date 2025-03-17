import interns from "./step-interns.json" with {type: 'json'}

// const pushIntoGroup = (group) => {
//   const randomElement = getRandomElement(data);
// }

const randomElement = (data) => {
  const randomIndex = Math.floor(Math.random() * data.length);

  return data.splice(randomIndex, 1);
};

const randomGroup = ([...data], noOfGroups) => {
  let groups = new Array(noOfGroups).fill([]);

  while (data.length !== 0) {
    groups = groups.map((g) => {
      return [...g, ...randomElement(data)];
    });
  }

  return groups;
};

// const bet = () => {
//   const playersChoice = [];
//   const numOfPlayers = Number(prompt("Enter Number of players :"));

//   for (let i = 0; i < numOfPlayers; i++){
//     playersChoice[i] = { player: prompt(`${i+1}. Player Name:`), choice: [prompt("Choice 1:"), prompt("Choice 2:")] };
//   }

//   return playersChoice;
// }

// const scoring = () => {
//   const players = bet();
//   const groups = main();

//   players.forEach((player) => {
//     player.score = 0;
//     groups.forEach(({ group }) => {
//       if (group.includes(player.choice[1]) && group.includes(player.choice[2])) {
//         player.score++;
//       }
//     });
//   });

//   console.table(players);
// }

const main = () => {
  const names = interns.interns;

  const random = randomGroup(names, 10);

  const groupObject = random.map((group, index) => ({
    groupNo: index + 1,
    group,
    strength: group.length,
  }));

  // groupObject.forEach(group => console.table(group))
  // return groupObject;

  console.log(groupObject);
  
};


main();

// console.table(bet());


// scoring();