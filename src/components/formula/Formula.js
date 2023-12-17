import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static classNameElement = 'excel__formula'
  static classNameBlock = 'formula-excel'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }
  toHTML() {
    return `
      <div class="formula-excel__icon">fx</div>
      <div class="formula-excel__input" contenteditable></div>
    `
  }

  onInput(e) {
    console.log(this)
    console.log('onInput from Formula', e.target.textContent.trim())
  }
}
