// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  vikingAttack() {
    const randomSaxon = this.selectRandom(this.saxonArmy);
    const randomViking = this.selectRandom(this.vikingArmy);

    const damage = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((eachSaxon) => {
       return eachSaxon !== randomSaxon

      })
    }
    return damage;
  }

  saxonAttack() {
    const randomSaxon = this.selectRandom(this.saxonArmy);
    const randomViking = this.selectRandom(this.vikingArmy);

    const damage = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((eachViking) => {
       return eachViking !== randomViking
      })
    }
    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 1 && this.vikingArmy.length <= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
