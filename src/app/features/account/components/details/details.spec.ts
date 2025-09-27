import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { AccountDetailsGateway } from '@core/api/gateways/account-details.gateway';
import { WinnabilityResponse } from '@core/types/winnability.types';

import { Details } from './details';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;
  let accountDetailsGateway: jasmine.SpyObj<AccountDetailsGateway>;
  let httpMock: HttpTestingController;

  const mockWinnabilityData: WinnabilityResponse = {
    accountDetails: {
      title: 'Winnability',
      summary: {
        overallScore: 0.82,
        display: '82%',
        rating: { label: 'Very Strong', value: 4, max: 5 },
      },
      historicalTrend: [
        { label: 'Jan', score: 0.72 },
        { label: 'Feb', score: 0.79 },
      ],
      position: [
        { label: 'Your score', value: 0.82 },
        { label: 'Market Avg', value: 0.68 },
      ],
      drivers: {
        increasing: {
          title: 'Increasing Winnability',
          items: [
            {
              rank: 1,
              name: 'Brokers relationship',
              value: 0.9,
              delta: 0.28,
              deltaDisplay: '+28%',
            },
          ],
        },
        decreasing: {
          title: 'Decreasing Winnability',
          items: [
            { rank: 1, name: 'Premium pricing', value: 0.78, delta: -0.24, deltaDisplay: '-24%' },
          ],
        },
      },
      recommendations: [
        {
          id: 'rec-1',
          title: 'Test recommendation',
          body: 'Test body',
          cta: { text: 'Apply', href: '#test' },
        },
      ],
    },
  };

  beforeEach(async () => {
    const accountDetailsGatewaySpy = jasmine.createSpyObj('AccountDetailsGateway', [
      'getWinnabilityData',
    ]);

    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: AccountDetailsGateway, useValue: accountDetailsGatewaySpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    accountDetailsGateway = TestBed.inject(
      AccountDetailsGateway,
    ) as jasmine.SpyObj<AccountDetailsGateway>;
    httpMock = TestBed.inject(HttpTestingController);

    accountDetailsGateway.getWinnabilityData.and.returnValue(of(mockWinnabilityData));
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load winnability data on init', () => {
    fixture.detectChanges();

    expect(accountDetailsGateway.getWinnabilityData).toHaveBeenCalled();
    expect(component.winnabilityData.value()).toEqual(mockWinnabilityData);
  });

  it('should display winnability title when data is loaded', () => {
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.winnability__title');
    expect(titleElement?.textContent?.trim()).toBe('Winnability');
  });
});
