import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-meter-bar',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meter-bar.html',
  styleUrls: ['./meter-bar.scss'],
})
export class MeterBar {}
