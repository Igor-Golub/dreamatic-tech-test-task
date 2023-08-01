export default function calculateAmountOfCurrency(
  amount: number,
  rate: number | null,
): string {
  if (!rate) return "0";

  return (amount * rate).toFixed(2);
}
