export const fizzBuzz = (num) => {
  if (typeof num !== 'number') throw new Error('Parameter provided must be a number')

  if (Number.isNaN(num)) throw new Error('Parameter provided must be a number')
  let output = ''

  const multiplies = { 3: 'Fizz', 5: 'Buzz' }

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (num % multiplier === 0) output += word
    })

  return output === '' ? num : output
}
