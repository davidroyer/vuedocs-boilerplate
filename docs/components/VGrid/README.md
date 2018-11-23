
# VGrid
This is an example of creating a reusable grid component and using it with external data.

## Props


- `msg` *String|number*

  object/array defaults should be returned from a factory function

  

- `data` *Array*

  describe data

  

- `images` *Array*

  

  **Default:**  function() { return [{}]; }

- `propFunc` *Func*

  prop function

  **Default:**  function() {}

- `columns` *Array*

  get columns list

  

- `filterKey` *String*

  filter key

  **Default:**  "example"


## Slots
- `header`

  Use this slot header      

- `footer`

  Use this slot footer      


## Events
- `error`

  Error event.      

- `success`

  Success event.      



## Methods

- `sortBy`

  Sets the order      


