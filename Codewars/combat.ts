function combat(health:number, damage:number):number {
  return damage > health ? 0 : health - damage
}