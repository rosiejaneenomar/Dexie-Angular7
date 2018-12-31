import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('TodoDB');
    this.version(1).stores({
      todos: '++id'
    });
  }
}
