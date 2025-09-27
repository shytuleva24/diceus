import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { AccountDetailsGateway } from '@core/api/gateways/account-details.gateway';

import { Accordion } from '@shared/ui/accordion/accordion';
import { Button } from '@shared/ui/button/button';
import { DriverList } from '@shared/ui/driver-list';
import { HistoricalTrendChart } from '@shared/ui/historical-trend-chart/historical-trend-chart';
import { MeterBar } from '@shared/ui/meter-bar/meter-bar';
import { SvgIcon } from '@shared/ui/svg-icon/svg-icon';
import { WinnabilityDots } from '@shared/ui/winnability-dots/winnability-dots';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    Accordion,
    DriverList,
    MeterBar,
    HistoricalTrendChart,
    WinnabilityDots,
    SvgIcon,
    Button,
  ],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  private readonly _accountDetailsGateway = inject(AccountDetailsGateway);
  readonly winnabilityData = rxResource({
    params: () => ({}),
    stream: () => this._accountDetailsGateway.getWinnabilityData(),
  });
}
