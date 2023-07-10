export const sumClamp = (numbers: number[], clamp: number): number => {
  let sum = 0
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]
  }

  return Math.min(sum, clamp)
}
