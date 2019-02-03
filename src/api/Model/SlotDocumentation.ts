export class SlotDocumentation {
  constructor(public name: string, public description: string) {}

  toJSON(): object {
    return {
      name: this.name || '',
      description: this.description,
    };
  }

  static fromJSON(slot: {name: string, description: string}): SlotDocumentation {
    return new SlotDocumentation(slot.name, slot.description);
  }
}
