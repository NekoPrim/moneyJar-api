class ItemRepository implements ICrudRepository<Item> {
  create(item: Item): Promise<Item> {
    return Promise.resolve(undefined);
  }

  delete(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<Item[]> {
    return Promise.resolve([]);
  }

  read(id: number): Promise<Item> {
    return Promise.resolve(undefined);
  }

  update(id: number, item: Item): Promise<Item> {
    return Promise.resolve(undefined);
  }
}
