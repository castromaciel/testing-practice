export const fizzBuzz = (num) => {
  if (typeof num !== 'number') throw new Error('Parameter provided must be a number')

  if (Number.isNaN(num)) throw new Error('Parameter provided must be a number')

  if (num % 3 === 0) return 'Fizz'

  return num
}
