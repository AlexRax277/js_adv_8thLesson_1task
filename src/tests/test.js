import Team from '../index';

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const boby = new Character('bob', 'xxx');
const susy = new Character('sus', 'zcc');
const mySet = new Set();
mySet.add(boby);
mySet.add(susy);

test('adding test', () => {
  const dreamTeam = new Team();
  dreamTeam.add(boby);
  dreamTeam.add(susy);
  expect(dreamTeam.members).toEqual(mySet);
});

test('throw error adding', () => {
  const dreamTeam = new Team();
  dreamTeam.add(susy);
  expect(() => { dreamTeam.add(susy); }).toThrow('Incorrect data!');
});

test('adding All & toArray tests', () => {
  const dreamTeam = new Team();
  dreamTeam.addAll([boby, susy, boby]);
  dreamTeam.toArray();
  expect(dreamTeam.members).toEqual(mySet);
});
