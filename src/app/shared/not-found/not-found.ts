import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/dashboard">Go to Dashboard</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100dvh;
      text-align: center;
      background: #0b0f16;
      color: #e5e7eb;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    a {
      padding: 0.75rem 1.5rem;
      background-color: #1e40af;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
    }
    a:hover {
      background-color: #1e3a8a;
    }
  `]
})
export class NotFound {
}
