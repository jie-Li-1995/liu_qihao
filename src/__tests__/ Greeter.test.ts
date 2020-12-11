import $ccw from '../index'

test('My Greeter', () => {
  expect($ccw.NumberRound(-100)).toBe(-100)
})

test('addPercent', () => {
  expect($ccw.addPercent(0.98224)).toBe('98.22%')
})

test('delPercent', () => {
  expect($ccw.delPercent('98.22%')).toBe(0.9822)
})

test('getStrLen', () => {
  expect($ccw.getStrLen('中国任命')).toBe(6)
})

test('money2', () => {
  expect($ccw.money('-10222220.567', '')).toBe('-10,222,220.57')
})
// 最常用的代码: expect(变量).toEqual(期待值);
