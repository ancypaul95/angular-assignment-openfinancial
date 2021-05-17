import { getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency',
})
export class IndianCurrencyPipe implements PipeTransform {
  transform(value: number | string, currencySymbol: string = 'INR'): string {
    if (typeof value === 'string') {
      value = (Number(String(value).match(/\d/g)?.join('')))
    }
    const symbol = getCurrencySymbol(currencySymbol, 'wide');
    let newValue = '';
    if (!isNaN(+value)) {
      let [rupees, paisa] = String(value).split('.');
      const rupeesLength = rupees.length;

      for (let i = rupeesLength - 1; i >= 0; i--) {
        if (
          i === rupeesLength - 4 ||
          (i < rupeesLength - 4 && (rupeesLength - i) % 2 === 0)
        ) {
          newValue = ',' + newValue;
        }
        newValue = rupees[i] + newValue;
      }
      if (paisa?.length) {
        paisa = Number(paisa).toFixed(2);
        newValue += `.${paisa}`;
      }
      return `${symbol} ${newValue}`;
    }
    else {
      return ''
    }
  }
}
