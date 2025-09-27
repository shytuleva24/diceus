# Insurance Dashboard & Account Management System

Angular 20+ dashboard for insurance underwriting workflows with standalone components and signals-based state management.

## 🚀 Live Demo

**Deployed:** [https://diceus-one.vercel.app/dashboard](https://diceus-one.vercel.app/dashboard)

## 🛠 Tech Stack

- **Angular:** 20.3.x with standalone components
- **TypeScript:** 5.9.x (strict mode)
- **State Management:** Angular Signals (no global store)
- **Charts:** Chart.js with ng2-charts
- **Testing:** Jasmine/Karma unit tests
- **Mock API:** jsonbin

## 🚦 Getting Started

```bash
git clone <repository-url>
cd diceus
npm install
npm start  # Runs on http://localhost:4200
```

## 🎯 State Management: Angular Signals (No Global Store)

**Why no global store?** For small applications like this, a global store (NgRx) would add unnecessary complexity and boilerplate code without significant benefits. Signals provide reactive state management with better performance and simpler testing.

## 🌐 Data Fetching & Caching

- **shareReplay()** for Observable caching
- **toSignal()** for reactive template consumption
- HTTP interceptors for error handling

## 🤖 AI Tools Used

- GitHub Copilot
- ChatGPT

## 🧪 Testing

- **Unit Tests:** Jasmine/Karma (`npm test`)

## ✅ Implementation Status

- **Dashboard:** Navigation, work queue, portfolio goals, market intelligence, accounts table
- **Account Detail:** Performance metrics, policies, compliance, winnability, communication
- **Technical:** Standalone components, lazy routes, signals, value accessor for inputs, basic responsive design
- **Note:** Adaptive layout is implemented as a quick solution; further improvements planned.


## ✅**Plans:**

- Cover remaining blocks with Cypress tests
- Implement navigation to account page with dynamic id
- Complete remaining Account blocks not finished due to timebox

## 📝 Architecture

```
src/app/
├── core/      # Guards, services, interceptors
├── features/  # Dashboard, account (lazy-loaded)
└── shared/    # Reusable UI components
```
