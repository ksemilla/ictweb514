export function createArray(n: number): number[] {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1)
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}

export type NestedObject = { [key: string]: NestedObject | any[] }

export function hasNestedKey(
  obj: NestedObject | any[],
  keyPath: string
): boolean {
  const keys: string[] = keyPath.split(".")

  for (let key of keys) {
    if (Array.isArray(obj) && !isNaN(Number(key))) {
      // If the current key is a number and the object is an array
      const index = parseInt(key, 10)
      if (index < 0 || index >= obj.length) {
        return false // Array index out of bounds
      }
    } else if (!obj || typeof obj !== "object" || !(key in obj)) {
      return false // Key not found in the current object
    }

    // Type assertion to narrow the type
    obj = (obj as NestedObject)[key]
  }

  return true
}
