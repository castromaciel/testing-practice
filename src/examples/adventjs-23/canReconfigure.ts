export const canReconfigure = (from:string, to:string) => {
  if (typeof from !== 'string') throw new Error('From must be a string')
  if (typeof to !== 'string') throw new Error('To must be a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetter = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetter) return false

  const transformations: any = {}

  for (let i = 0; i < from.length; i += 1) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false
    
    transformations[fromLetter] = toLetter 
  }

  return true
}
