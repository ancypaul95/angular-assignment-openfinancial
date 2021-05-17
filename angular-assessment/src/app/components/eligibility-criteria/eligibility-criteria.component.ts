import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-criteria',
  templateUrl: './eligibility-criteria.component.html',
  styleUrls: ['./eligibility-criteria.component.scss'],
})
export class EligibilityCriteriaComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  image!: string;

  constructor() {}

  ngOnInit(): void {}
}
