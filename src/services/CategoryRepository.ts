class CategoryRepository implements ICrudRepository<Category> {
  create(item: Category): Promise<Category> {
    return Promise.resolve(undefined);
  }

  delete(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<Category[]> {
    return Promise.resolve([]);
  }

  read(id: number): Promise<Category> {
    return Promise.resolve(undefined);
  }

  update(id: number, item: Category): Promise<Category> {
    return Promise.resolve(undefined);
  }

}
