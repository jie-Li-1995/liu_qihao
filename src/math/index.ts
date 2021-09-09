export function addPercent(point: any): string {
  let newPoint = point.toString()
  newPoint = /^[0-9]+.?[0-9]*$/.test(newPoint) ? newPoint : '0'
  if (newPoint === '0') {
    return '0%'
  } else {
    return (Math.round((newPoint * 10000)) / 100.00).toFixed(2) + '%'
  }
}

export function delPercent(point: string = '0%'): number {
  const reg = new RegExp('%')
  let newPoint = point.toString().replace(reg, '')
  const arr = newPoint.split('.')
  newPoint = arr[1] ? (Number(newPoint) / 100).toFixed(arr[1].length + arr[0].length + 2) : (Number(newPoint) / 100).toFixed(4)
  return Number(newPoint)
}

export function addThousand(point: number = 0): string {
  const newPoint = point.toFixed(2)
  const arr = newPoint.split('.')
  if (arr.length === 2) {
    return arr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,') + '.' + arr[1]
  } else {
    return arr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
  }
}

export function deleteThousand(str: string = '0'): number {
  const reg = new RegExp(/,/g)
  let a = str.toString().replace(reg, '')
  a = Number(a).toFixed(2)
  return Number(a)
}

export function NumberRound(point: number = 0): number {
  if (point >= 0) {
    return Math.round(point)
  } else {
    return -Math.round(-point)
  }
}

export function money(value: string | number, currency = '$', decimals = 2) {
  const digitsRE = /(\d{3})(?=\d)/g
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  if (!isFinite(value) || (!value && value !== 0)) return ''
  const stringified = Math.abs(value).toFixed(decimals)
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  const i = _int.length % 3
  const head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
  const _float = decimals ? stringified.slice(-1 - decimals) : ''
  const sign = value < 0 ? '-' : ''
  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

export function getStrLen(val = ''): number {
  const str = val.toString()
  let len = 0
  if (str !== '' && str !== null && str !== undefined) {
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i)
      // 单字节加1
      if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
        len++
      } else {
        len += 2
      }
    }
  } else {
    len = 0
  }
  return len
}
