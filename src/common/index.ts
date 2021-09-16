export const deepCopy = (obj: any) => {
  if (typeof obj !== 'object') {
    return obj
  }
  if (obj == null) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

export const copyToBoard = (value) => {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }
  document.body.removeChild(element)
  return false
}

// 数组去重
export const uniqueArray = (arr: (string | number)[]) => {
  if (!Array.isArray(arr)) {
    throw new Error('The first parameter must be an array')
  }
  if (arr.length === 1) {
    return arr
  }
  return [...new Set(arr)]
}


// 去除对象中value为空(null,undefined,'')的属性
export const isVoid = (value) => value === undefined || value === null || value === ''

export const cleanObject = (object) => {
  if (!object) {
    return {}
  }
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

export const isNull = (value) => value === undefined || value === null

export const cleanNull = (object) => {
  if (!object) {
    return {}
  }
  const result = {}
  for (const key of Object.keys(object)) {
    result[key] = isNull(object[key]) ? '' : result[key]
  }
  return result
}
