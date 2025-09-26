import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-progress',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-progress.html',
  styleUrl: './simple-progress.scss',
})
export class SimpleProgress {
  title = input<string>('Title');
  startLabel = input<string>('0');
  endLabel = input<string>('0');
  progressPct = input<number>(0);
}
