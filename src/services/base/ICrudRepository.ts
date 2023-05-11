interface ICrudRepository<T> {
  create(item: T): Promise<T>;
  read(id: number): Promise<T>;
  update(id: number, item: T): Promise<T>;
  delete(id: number): Promise<boolean>;
  findAll(): Promise<T[]>;
}
