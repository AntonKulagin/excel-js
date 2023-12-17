import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static classNameElement = 'excel__table'
  static classNameBlock = 'table-excel'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: [],
    })
  }
  toHTML() {
    return createTable()
  }
}
