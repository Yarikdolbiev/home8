function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(condition);
}



class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    const length = this.items.length;
    if (length === 0) {
      return undefined;
    }
    return this.items[length - 1];
  }
}



class Dictionary<K extends string | number, V> {
  private data: Record<K, V> ;

  set(key: K, value: V): void {
    this.data[key] = value;
  }

  get(key: K): V | undefined {
    return this.data[key];
  }

  has(key: K): boolean {
    return key in this.data;
  }
}