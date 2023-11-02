/**
 * Describes the interface of a container that exposes methods to read its entries.
 */
export interface ContainerInterface {

  /**
   * Finds an entry of the container by its identifier and returns it.
   *
   * @throws NotFoundExceptionInterface No entry was found for **this** identifier.
   * @throws ContainerExceptionInterface Error while retrieving the entry.
   *
   * @returns mixed
   */
  get(id: string | Symbol): object;

  /**
   * Returns true if the container can return an entry for the given identifier.
   * Returns false otherwise.
   *
   * `has(id)` returning true does not mean that `get(id)` will not throw an exception.
   * It does however mean that `get(id)` will not throw a `NotFoundExceptionInterface`.
   *
   * @return bool
   */
  has(id: string): boolean;
}
