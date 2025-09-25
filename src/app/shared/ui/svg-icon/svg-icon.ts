import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.html',
  styleUrls: ['./svg-icon.scss'],
})
export class SvgIcon implements OnInit {
  public iconId = input<string>('');
  public width = input<string | undefined>('24px');
  public height = input<string | undefined>('24px');
  public fill = input<string | undefined>(undefined);
  public class = input<string | undefined>(undefined);

  readonly spriteUrl = computed(() => this._spriteUrlSignal());
  private _spriteUrlSignal = signal<string>('');

  ngOnInit(): void {
    const version = new Date().getTime();

    this._spriteUrlSignal.set(`./assets/sprite.svg?v=${version}#${this.iconId()}`);
  }
}
