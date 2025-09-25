module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      // Positioning
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // Display & Box Model
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'justify-content',
      'align-items',
      'align-content',
      'gap',
      'grid',
      'grid-template',
      'grid-template-columns',
      'grid-template-rows',
      'grid-column',
      'grid-row',
      'float',
      'clear',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'overflow',
      'overflow-x',
      'overflow-y',

      // Visual
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',
      'box-shadow',
      'opacity',
      'visibility',

      // Typography
      'color',
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'letter-spacing',
      'text-align',
      'text-decoration',
      'text-transform',
      'white-space',

      // Transitions & Animations
      'transition',
      'transform',
      'animation'
    ],

    // SCSS specific rules
    'scss/at-rule-no-unknown': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/dollar-variable-pattern': null,
    'scss/at-import-partial-extension': null,

    // General rules
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'ignorePseudoElements': ['ng-deep']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        'ignore': ['custom-elements']
      }
    ],
    'at-rule-no-unknown': null,
    'function-no-unknown': [
      true,
      {
        'ignoreFunctions': ['map-get', 'map-merge', 'lighten', 'darken', 'adjust']
      }
    ],
    'declaration-empty-line-before': null,
    'value-keyword-case': ['lower', {
      'ignoreFunctions': ['map-get'],
      'ignoreProperties': ['/^\\$/']
    }]
  }
};
