/**
 * Interface for navigation items used in the application.
 * Each navigation item has an icon ID that corresponds to an icon in the sprite.svg file,
 * a display name, and a route path.
 */
export interface NavigationItem {
  /**
   * The ID of the icon in the sprite.svg file.
   * This should match one of the symbol IDs in the sprite.svg file.
   */
  iconId: string;

  /**
   * Optional width and height for the icon.
   * If not provided, default dimensions will be used.
   */
  iconWidth?: string;

  /**
   * Optional height for the icon.
   * If not provided, default dimensions will be used.
   */
  iconHeight?: string;

  /**
   * The display name of the navigation item.
   * This will be shown in the UI next to the icon.
   */
  name: string;

  /**
   * The route path for the navigation item.
   * This should match a route defined in the application's routing configuration.
   */
  route: string;

  /**
   * Optional badge count to display next to the navigation item.
   * This can be used to show the number of unread items, notifications, etc.
   */
  badgeCount?: number;

  /**
   * Optional flag to indicate if the navigation item is active.
   * This can be used to highlight the current active route.
   */
  isActive?: boolean;
}

/**
 * Type for a collection of navigation items.
 * This can be used to define the main navigation structure of the application.
 */
export type NavigationItems = NavigationItem[];
