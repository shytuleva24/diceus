export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'apply';

/**
 * Context interface for smart cell templates.
 * Defines the shape of data available in template variables.
 */
export interface SmartCellContext {
  /** The implicit context containing cell data */
  $implicit: {
    /** The cell value */
    value: unknown;
    /** The row data */
    row: unknown;
    /** The column definition */
    col: unknown;
  };
}
