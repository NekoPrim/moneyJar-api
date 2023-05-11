class UserRepository implements ICrudRepository<User> {
  create(item: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  delete(id: number): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }

  read(id: number): Promise<User> {
    return Promise.resolve(undefined);
  }

  update(id: number, item: User): Promise<User> {
    return Promise.resolve(undefined);
  }

}
