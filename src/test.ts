// Przykładowa funkcja do testowania
export function calculateTotal(items: { price: number; quantity: number }[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Przykładowe dane
const items = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 },
  { price: 20, quantity: 3 },
];

// Wywołanie funkcji
const result = calculateTotal(items);
console.log(`Total: ${result}`);
