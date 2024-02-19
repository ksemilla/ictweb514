export function createArray(n: number): number[] {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1)
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}
