import { ExcelComponent } from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static classNameElement = 'excel__toolbar'
  static classNameBlock = 'toolbar-excel'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    })
  }
  onClick(e) {
    console.log('Click from Toolbar', e)
  }
  toHTML() {
    return `
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_bold </span>
      </div>
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_italic </span>
      </div>
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_underlined </span>
      </div>
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_align_left </span>
      </div>
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_align_center </span>
      </div>
      <div class="toolbar-excel__button">
        <span class="material-symbols-outlined"> format_align_right </span>
      </div>
    `
  }
}
