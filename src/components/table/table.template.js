const CHAR_CODES = {
  A: 65,
  Z: 90,
}

function createCell() {
  return `
    <div class="table-excel__cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="table-excel__column-info">${col}</div>
  `
}

function createRow(content, index) {
  return `
  <div class="table-excel__row">
    <div class="table-excel__row-info">${index ? index : ''}</div>
    <div class="table-excel__row-data">${content}</div>
  </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CHAR_CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A + 1
  const rows = []

  const columns = new Array(colsCount).fill('').map(toChar).map(toColumn).join('')

  rows.push(createRow(columns))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(createCell).join('')
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
