# v-textarea 

The custom HTML `<textarea>` component. 

- **author** - Sébastien 
- **license** - MIT 

## slots 

- `label` Use this slot to set the label 

## props 

- `v-model` ***String*** (*optional*) 

  Use this directive to create two-way data bindings with the component.
  It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*required*) 

  Defines a unique identifier (ID) which must be unique in the whole document. 

- `disable` ***Boolean*** (*optional*) `default: false` 

  This Boolean property indicates that the user cannot interact with the control. 

- `theme` ***Object*** (*optional*) `default: new DefaultTextareaTheme()` 

  Define a custom theme for the component. 

## events 

- `input` 

  Fired when the value is changed. 

  **arguments:** 

     - `value` **string** - The updated value 

- `keyup` 

  Fired when a key is released. 

## methods 

- `isEmpty()` 

  Define if the control value is empty of not. 

   **return value:** 

     - **boolean** - true if empty; otherwise false 
