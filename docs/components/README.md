---
title: Components
sidebar: true
---
# Components

## v-checkbox 

A simple checkbox component

```html
<checkbox v-model="value"/>
``` 

- **author** - Sébastien 
- **license** - MIT 
- **input** 

### slots 

- `default` 

- `label` Use this slot to set the checkbox label 

### props 

- `model` ***Array*** (*required*) 

  The checkbox model 

- `disabled` ***Boolean*** (*optional*) 

  Initial checkbox state 

- `enabled` ***Boolean*** (*optional*) `default: true` 

  Initial checkbox value 

- `label` ***String*** (*optional*) `default: 'Unamed checkbox'` 

  The checkbox label 

- `object` ***Object*** (*optional*) `default: null` 

- `bool-false` ***Boolean*** (*optional*) `default: false` 

- `prop-with-default-as-keyword-but-without-default` ***Object*** (*optional*) `default: {}` 

- `prop-with-default-as-keyword` ***Object*** (*optional*) `default: {}` 

- `prop-with-empty-default-as-keyword` ***Object*** (*optional*) `default: [object Object]` 

- `number-prop-with-default-as-keyword` ***Number*** (*optional*) `default: 0` 

- `string-prop-with-default-as-keyword` ***String*** (*optional*) `default: ''` 

- `boolean-prop-with-default-as-keyword` ***Boolean*** (*optional*) `default: false` 

- `array-prop-with-default-as-keyword` ***Array*** (*optional*) `default: empty array` 

- `function-prop-with-default-as-keyword` ***Function*** (*optional*) `default: identity function` 

- `prop-with-null-as-default-keyword` ***Object*** (*optional*) `default: null` 

- `prop-with-undefined-as-default-keyword` ***Object*** (*optional*) `default: undefined` 

### data 

- `initialValue` 

  The initial component value.
  Used to detect changes and restore the initial value. 

**initial value:** `''` 

- `currentValue` 

**initial value:** `''` 

### computed properties 

- `id` 

  The component identifier.
  Generated using the `initialValue` data. 

   **dependencies:** `initialValue` 

- `changed` 

   **dependencies:** `currentValue`, `initialValue` 

- `withNoDependencies` 

### events 

- `loaded` 

  Emitted when the component has been loaded 

- `enabled` 

  Emitted the event `enabled` when loaded
  Multilign 

### methods 

- `check()` 

  Check if the input is checked 

- `prop()` 

- `dynamic()` 

  Make component dynamic 

- `dynamic2()` 

  Enter to dynamic mode 

- `enable(value)` 

  Enable the checkbox 

## v-textarea 

The custom HTML `<textarea>` component. 

- **author** - Sébastien 
- **license** - MIT 

### slots 

- `label` Use this slot to set the label 

### props 

- `v-model` ***String*** (*optional*) 

  Use this directive to create two-way data bindings with the component.
  It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*required*) 

  Defines a unique identifier (ID) which must be unique in the whole document. 

- `disable` ***Boolean*** (*optional*) `default: false` 

  This Boolean property indicates that the user cannot interact with the control. 

- `theme` ***Object*** (*optional*) `default: new DefaultTextareaTheme()` 

  Define a custom theme for the component. 

### events 

- `input` 

  Fired when the value is changed. 

  **arguments:** 

     - `value` **string** - The updated value 

- `keyup` 

  Fired when a key is released. 

### methods 

- `isEmpty()` 

  Define if the control value is empty of not. 

   **return value:** 

     - **boolean** - true if empty; otherwise false 
