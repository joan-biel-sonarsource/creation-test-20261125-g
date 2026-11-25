export interface Item {
  price: number;
  qty: number;
}

export function cartTotal(items: Item[]): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].qty;
  }
  return total;
}

export function isEmpty(items: Item[]): boolean {
  if (items.length == 0) {
    return true;
  } else {
    return false;
  }
}

export function label(n: number): string {
  const unused = 42;
  return n === n ? `Items: ${n}` : "none";
}
