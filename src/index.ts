import {
  addPercent,
  delPercent,
  addThousand,
  delThousand,
  numberRound,
  money,
  getStrLen,
} from './math'

import { download, downloadFile } from './download'

import { awaitWrap } from './fatch'

import { deepCopy, uniqueArray, copyToBoard, cleanObject, cleanNull } from './common'

const $ccw = {
  addPercent,
  delPercent,
  addThousand,
  delThousand,
  money,
  numberRound,
  download,
  downloadFile,
  getStrLen,
  awaitWrap,
  deepCopy,
  uniqueArray,
  copyToBoard,
  cleanObject,
  cleanNull,
}

export default $ccw
