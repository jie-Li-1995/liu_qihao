
import axios from 'axios'
// @param {String} filename
export function getExt (filename) {
  if (typeof filename == 'string') {
    return filename
      .split('.')
      .pop()
      .toLowerCase()
  } else {
    throw new Error('filename must be a string type')
  }
}
// 复制内容到剪贴板
export function copyToBoard (value) {
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
// 简单的深拷贝
export function deepCopy (obj) {
  if (typeof obj != 'object') {
    return obj
  }
  if (obj == null) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}
// 数字去重
export function uniqueArray (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The first parameter must be an array')
  }
  if (arr.length == 1) {
    return arr
  }
  return [...new Set(arr)]
}
// 对象转化为FormData对象 
// @param {Object} object

export function getFormData (object) {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) =>
        formData.append(key + `[${i}]`, subValue)
      )
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}

//下载一个链接 
function download (link, name) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1)
  }
  let eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = link
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

//可以用来下载浏览器会默认预览的文件类型，例如mp4,jpg等
//提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls
function downloadByLink (link, fileName) {
  axios.request({
    url: link,
    responseType: 'blob' //关键代码，让axios把响应改成blob
  }).then(res => {
    const link = URL.createObjectURL(res.data)
    download(link, fileName)
  })
}

// 防抖

/**
 *
 * @param {*} func 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 */
export function debounce (func, wait = 500, immediate = false) {
  var timeout
  return function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

// 节流
export function throttle (func, wait = 500, options) {
  //container.onmousemove = throttle(getUserAction, 1000);
  var timeout, context, args
  var previous = 0
  if (!options) options = { leading: false, trailing: true }

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

// 去除对象中value为空(null,undefined,'')的属性
export const isVoid = (value) => value === undefined || value === null || value === "";

export const cleanObject = (object) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};