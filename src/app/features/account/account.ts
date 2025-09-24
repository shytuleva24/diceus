import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account implements OnInit {
  accountId = signal<string | null>(null);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.accountId.set(id);
      console.log('Account ID:', this.accountId());
      this.loadAccountData(this.accountId());
    });
  }

  private loadAccountData(id: string | null): void {
    console.log('Loading account data for ID:', id);
  }
}
