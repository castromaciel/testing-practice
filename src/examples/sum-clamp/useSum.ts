import { useMemo, useState } from 'react'

export const useSum = () => {
  const [numbers, setNumbers] = useState<number[]>([])

  const sum = useMemo(() => (numbers.reduce((acc, num) => acc + num, 0)), [numbers])
  const add = (value: number) => setNumbers((prev) => ([
    ...prev,
    value
  ]))

  return {
    sum,
    add
  }
}
