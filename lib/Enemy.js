
const Potion = require("./Potion");

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

test("gets enemy's health value", () => {
    const enemy = new Enemy("Dave");

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test("checks if enemy is alive or not", () => {
    const enemy = new Enemy("Dave");

    expect(enemy.isAlive()).toBeTruthy();
    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
})

test("subtract health from enemy's health", () => {
    const enemy = new Enemy("Dave");
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);
    
    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
})

test("gets enemy's attack value", () => {
    const enemy = new Enemy("Dave");
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy("Dave");

    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
})


module.exports = Enemy;