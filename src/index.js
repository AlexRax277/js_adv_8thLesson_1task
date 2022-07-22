class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Incorrect data!');
    } else {
      this.members.add(char);
    }
  }

  addAll([...chars]) {
    for (const mem in [...chars]) {
      this.members.add([...chars][mem]);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
