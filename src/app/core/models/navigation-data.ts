import { NavigationItems } from '@core/models/navigation.model';

/**
 * Sample navigation data for the application.
 * This can be used as a starting point for defining the main navigation structure.
 *
 * The iconId values correspond to symbol IDs in the sprite.svg file.
 * The route values should match routes defined in the application's routing configuration.
 */
export const MAIN_NAVIGATION: NavigationItems = [
  {
    iconId: 'dashboard',
    iconWidth: '18px',
    iconHeight: '19px',
    name: 'Dashboard',
    route: '/dashboard',
    isActive: true,
  },
  {
    iconId: 'accounts',
    iconWidth: '18px',
    iconHeight: '20px',
    name: 'Accounts',
    route: '/accounts',
  },
  {
    iconId: 'brokers',
    iconWidth: '20px',
    iconHeight: '18px',
    name: 'Brokers',
    route: '/brokers',
  },
  {
    iconId: 'submissions',
    iconWidth: '16px',
    iconHeight: '20px',
    name: 'Submissions',
    route: '/submissions',
  },
  {
    iconId: 'organizations',
    iconWidth: '20px',
    iconHeight: '20px',
    name: 'Organizations',
    route: '/organizations',
  },
  {
    iconId: 'goalsRules',
    iconWidth: '18px',
    iconHeight: '20px',
    name: 'Goals & Rules',
    route: '/goals-rules',
  },
  {
    iconId: 'admin',
    iconWidth: '20px',
    iconHeight: '20px',
    name: 'Admin',
    route: '/admin',
  },
];
