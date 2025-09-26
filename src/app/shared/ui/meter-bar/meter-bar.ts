import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-meter-bar',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meter-bar.html',
  styleUrls: ['./meter-bar.scss'],
})
export class MeterBar {
  readonly title = input<string>('');
  readonly percent = input<number>(0);
  readonly goal = input<string>('');
  readonly passed = input<string>('');
}
