# Components

## v-base-comp 

- **mixin** 

### props 

- `question` ***String*** (*optional*) `default: 'Default Question'` 

## v-card 

A basic card component that offers 2 slots to use:
1. Card Body
2. Card Footer

```html
<v-card heading="Card Header">
<div slot="body">Card Body<p>Some content for the body you your card</p></div>
<div slot="footer">Card Footer</div>
</v-card>
``` 

### slots 

- `body` @slot Use this slot to for the card body, which is the middle area 

- `footer` @slot Use this slot to for the card footer 

### props 

- `heading` ***String*** (*optional*) 

  The text for the heading 

## v-checkbox 

A simple checkbox component NEW FOR VUEDOC.MD

```html
<checkbox v-model="value"/>
``` 

- **author** - Sébastien 
- **license** - MIT 
- **input** 

### slots 

- `label` @slot Use this slot to set the checkbox label 

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

## v-extended-comp 

Description Extended component from `VBaseComp` 

### props 

- `placeholder` ***String*** (*optional*) 

## v-grid 

This is an example of creating a reusable grid component and using it with external data. 

- **version** - 1.0.5 
- **author** - [Rafael](https://github.com/rafaesc92) 
- **since** - Version 1.0.1 

### slots 

- `header` @slot Use this slot header 

- `footer` @slot Use this slot footer 

### props 

- `msg` ***String|Number*** (*optional*) `default: 'text'` 

  object/array defaults should be returned from a factory function 

- `data` ***Array*** (*optional*) 

  describe data 

- `images` ***Array*** (*optional*) `default: [object Object]` 

- `prop-func` ***[object Object]*** (*optional*) `default: [object Object]` 

  prop function 

- `columns` ***ArrayExpression*** (*optional*) 

  get columns list 

- `filter-key` ***String*** (*optional*) `default: 'example'` 

  filter key 

### data 

- `sortKey` 

**initial value:** `''` 

- `sortOrders` 

**initial value:** `'sortOrders'` 

### computed properties 

- `filteredData` 

   **dependencies:** `sortKey`, `filterKey`, `filterKey`, `sortOrders`, `data` 

### events 

- `success` 

  Success event. 

- `error` 

  Error event. 

### methods 

- `sortBy(key)` 

  Sets the order 

  **parameters:** 

     - `key` **string** - Key to order 

   **return value:** 

     - **string** - Test 
- `hiddenMethod()` 

## v-textarea 

The custom HTML `<textarea>` component.

```html
<v-textarea id="text" label="Text"/>
``` 

### slots 

- `slotTest` 

### props 

- `label` ***String*** (*optional*) 

- `v-model` ***String*** (*optional*) 

  Use this directive to create two-way data bindings with the component.
  It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*required*) 

  Defines a unique identifier (ID) which must be unique in the whole document. 

- `disable` ***Boolean*** (*optional*) `default: false` 

  This Boolean property indicates that the user cannot interact with the control. 

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

## my-header 

A header component

```html
<my-header>
Some Important Heading
<h2 slot="subheading">Subheading Slot</h2>
</my-header>
``` 

### slots 

- `default` 

- `subheading` @slot Use this slot to set the subheading 

# Mixins

## mixin-a 

- **mixin** 

### props 

- `mixin-prop1` ***String*** (*optional*) 

  A prop from mixinA 

### events 

- `created` 

  Emitted when the component has been created 

### methods 

- `hello()` 
