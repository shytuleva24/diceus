import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account implements OnInit {
  accountId = signal<string | null>(null);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.accountId.set(id);
    });
  }
}
