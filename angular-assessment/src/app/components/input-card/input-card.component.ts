import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputCardComponent implements OnInit {
  minMonthlyIncome = 100000;
  maxMonthlyIncome = 300000;
  tenures: any[] = [];
  selectedTenure = 6;
  hasLoans = false;
  monthlyIncome = this.minMonthlyIncome;
  monthlyExpense = 0;
  existingLoan = '';
  constructor() {}

  ngOnInit(): void {
    this.getTenures();
    this.monthlyIncome = this.minMonthlyIncome;
  }

  private getTenures = () => {
    const tenures = [];
    for (let i = 6; i <= 40; i += 6) {
      tenures.push({
        value: i,
        viewValue: this.getTenureValue(i),
      });
    }
    this.tenures = tenures;
  };

  private getTenureValue = (period: number): string => {
    const years = Math.floor(period / 12);
    const months = period % 12;
    let value = '';
    if (years) {
      if (years === 1) {
        value += '1 year';
      } else {
        value += `${years} years`;
      }
    }
    if (months) {
      value += ` ${months} months`;
    }
    return value.trim();
  };
}
