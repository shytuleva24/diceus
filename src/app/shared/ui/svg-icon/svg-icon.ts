import { Component, computed, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.html',
  styleUrls: ['./svg-icon.scss'],
})
export class SvgIcon implements OnInit {
  iconId = input<string>('');
  width = input<string | undefined>('24px');
  height = input<string | undefined>('24px');
  fill = input<string | undefined>(undefined);
  class = input<string | undefined>(undefined);

  private spriteUrlSignal = signal<string>('');
  public readonly spriteUrl = computed(() => this.spriteUrlSignal());

  ngOnInit(): void {
    const version = new Date().getTime();

    this.spriteUrlSignal.set(
      `./assets/sprite.svg?v=${version}#${this.iconId()}`,
    );
  }
}
