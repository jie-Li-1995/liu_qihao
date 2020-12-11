"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.money = exports.NumberRound = exports.deleteThousand = exports.addThousand = exports.delPercent = exports.addPercent = void 0;
function addPercent(point) {
    let newPoint = point.toString();
    newPoint = /^[0-9]+.?[0-9]*$/.test(newPoint) ? newPoint : '0';
    const arr = newPoint.split('.');
    if (newPoint === '0') {
        return '0%';
    }
    else {
        return (Math.round((newPoint * 10000)) / 100.00).toFixed(2) + '%';
    }
}
exports.addPercent = addPercent;
function delPercent(point = '0%') {
    const reg = new RegExp('%');
    let newPoint = point.toString().replace(reg, '');
    const arr = newPoint.split('.');
    newPoint = arr[1] ? (Number(newPoint) / 100).toFixed(arr[1].length + arr[0].length + 2) : (Number(newPoint) / 100).toFixed(4);
    return Number(newPoint);
}
exports.delPercent = delPercent;
function addThousand(point = 0) {
    const newPoint = point.toFixed(2);
    const arr = newPoint.split('.');
    if (arr.length === 2) {
        return arr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,') + '.' + arr[1];
    }
    else {
        return arr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,');
    }
}
exports.addThousand = addThousand;
function deleteThousand(str = '0') {
    let reg = new RegExp(/,/g);
    let a = str.toString().replace(reg, '');
    a = Number(a).toFixed(2);
    return Number(a);
}
exports.deleteThousand = deleteThousand;
function NumberRound(point = 0) {
    if (point >= 0) {
        return Math.round(point);
    }
    else {
        return -Math.round(-point);
    }
}
exports.NumberRound = NumberRound;
function money(value, currency = '$', decimals = 2) {
    const digitsRE = /(\d{3})(?=\d)/g;
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    if (!isFinite(value) || (!value && value !== 0))
        return '';
    const stringified = Math.abs(value).toFixed(decimals);
    const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    const i = _int.length % 3;
    const head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : '';
    const _float = decimals ? stringified.slice(-1 - decimals) : '';
    const sign = value < 0 ? '-' : '';
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}
exports.money = money;
