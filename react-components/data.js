export let result;
export let round1Results;
export let round2Results;
const randNumberTrial = Math.random();
const randNumberGroupOrIndi = Math.random();

export const data = {
  dependency: {
    fair: ['FGroup', 'FIndividual'],
    unfair: ['UGroup', 'UIndividual']
  },
  round1Fair: {
    group: {
      user: 11,
      player1: 8,
      player2: 14,
      player3: 11,
      player4: 12
    },
    individual: {
      user: 11,
      player1: 12,
      player2: 14,
      player3: 8,
      player4: 11
    }
  },
  round1Unfair: {
    group: {
      user: 12,
      player1: 11,
      player2: 14,
      player3: 11,
      player4: 8
    },
    individual: {
      user: 12,
      player1: 11,
      player2: 14,
      player3: 11,
      player4: 8
    }
  },
  round2Fair: {
    group: {
      user: 35,
      player1: null,
      player2: 45,
      player3: 38,
      player4: 39
    },
    individual: {
      user: 35,
      player1: 39,
      player2: 45,
      player3: null,
      player4: 38
    }
  },
  round2Unfair: {
    group: {
      user: 39,
      player1: null,
      player2: 45,
      player3: 38,
      player4: 35
    },
    individual: {
      user: 39,
      player1: 35,
      player2: 45,
      player3: null,
      player4: 38
    }
  },
}


if(randNumberTrial >= 0.50){
  if(randNumberGroupOrIndi >= 0.50){
    result = data.dependency.fair[0];
  }else {
    result = data.dependency.fair[1];
  }
}else{
  if(randNumberGroupOrIndi >= 0.50){
    result = data.dependency.unfair[0];
  }else {
    result = data.dependency.unfair[1];
  }
}

/*Dictates which results to use for data obj from based on results variable*/
switch (result) {
  case 'FGroup':
    round1Results = Object.values(data.round1Fair.group);
    round2Results = Object.values(data.round2Fair.group);
    break;

  case 'FIndividual':
    round1Results = Object.values(data.round1Fair.individual);
    round2Results = Object.values(data.round2Fair.individual);
    break;

  case 'UGroup':
    round1Results = Object.values(data.round1Unfair.group);
    round2Results = Object.values(data.round2Unfair.group);
    break;

  case 'UIndividual':
    round1Results = Object.values(data.round1Unfair.individual);
    round2Results = Object.values(data.round2Unfair.individual);
    break;

  default:
    console.log('error in searching for match');
}
