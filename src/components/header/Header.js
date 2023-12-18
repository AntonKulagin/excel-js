import { ExcelComponent } from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static classNameElement = 'excel__header'
  static classNameBlock = 'header-excel'

  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: [],
    })
  }
  toHTML() {
    return `
      <div class="header-excel__input">
        <input type="text" value="Название таблицы" />
      </div>
      <div class="header-excel__items">
        <div class="header-excel__button">
          <span class="material-symbols-outlined"> delete </span>
        </div>
        <div class="header-excel__button">
          <span class="material-symbols-outlined"> logout </span>
        </div>
      </div>`
  }
}
