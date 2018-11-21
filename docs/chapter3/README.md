---
title: Chapter 3 - The Essentials
---
# Our Config File

- directory customization
- registering things (css, modules, plugins, custom routes, middleware, ect)

We have already worked with a few of the options available inside `nuxt.config.js` throughout Chapter 2.

There are many options available for use inside our `nuxt.config.js` file. At the time of this writing, the [config API ](https://nuxtjs.org/api) is available on Nuxt's documentation website under the **Configuration** section.

Because of this, our goal of this section is to not to cover every option available but instead strive to provide the essentials.

**_(Think the 80/20 rule. That concept is very applicable here with most application use-cases only need to use a small subset of the available options.)_**

## Important/Good To Know

- Use router base for Github Pages. Guide [here](https://nuxtjs.org/faq/github-pages)
- Options for Nuxt modules can often can be declared while registering the module or as it's own property.

An example using the axios module:

```js
module.export = {

  modules:[
    ['@nuxtjs/axios', {
      prefix: '/api',
      credentials: true    
    }]
  ]

}
```

OR

```js
module.export = {

  modules:[
    '@nuxtjs/axios'
  ],

  axios: {
    prefix: '/api',
    credentials: true   
  }
}
```

## The `build` Property

- `vendor`
- `extractCSS`
- `babel`
- `extend` (We can add webpack plugins here like PurgeCSS)

## Covering Several Concepts With PurgeCSS/Tailwind Example

Can setup postCSS inside `nuxt.config.js` or by creating a `postcss.config.js` file at the root directory.

Inside `nuxt.config.js`:

```js
build: {
  postcss: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('cssnano')({
      preset: 'default',
      discardComments: { removeAll: true }
    })    
  ]  
}
```

Within a `postcss.config.js` file:

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('cssnano')({
      preset: 'default',
      discardComments: { removeAll: true }
    })
  ]
}

```



## Customizing Source and Output Directories

See my [example](https://github.com/davidroyer/nuxtqs-nuxt-express/tree/structure) using express

## Customizing Directory Names

Even though Nuxt comes with predefined directory names such as `store`, `middleware,`, and `assets`, these directory names are customizable thanks to release of [v1.4.0](https://github.com/nuxt/nuxt.js/releases/tag/v1.4.0).

We can define these custom names in `nuxt.config.js` within the `dir` option.

Here an example showing all customizable directories at the time of these writing within the `dir` option:

```bash
# Inside nuxt.config.js

module.export = {
  dir: {
    assets: 'custom-assets-directory',
    layouts: 'custom-layouts-directory',
    middleware: 'custom-middleware-directory',
    pages: 'custom-pages-directory',
    static: 'custom-static-directory',
    store: 'custom-store-directory'
  }  
}
```

<!-- POSSIBLE SWITCH `middleware` TO `router-middleware` PERMANENTLY OR FOR EXAMPLE AT LEAST  -->

# State Management - Vuex Store

There are a few items that I would like to address before getting into this section. Understanding state management and what it is can seem/by overwhelming to developers at first. Additionally, looking at Vuex can cause ever worse dread. I honestly put off learning Vuex until I started using Nuxt because but having a basic understanding of it, we can obtain major benefits in our code quality and application.

While providing an in-depth breakdown of Vuex is outside the scope of this book, I will be walking through the Vuex code we're using for NuxtStrap application.

If part of or all of it does not make sense at first, just know this is normal. It takes most people some time to process all the aspects. Don't worry, just keep following along.

## The Vuex Overview

The basic concept of Vuex you always want to remember is this:

> We have something we want to keep track of, that's our `state`.
>
> We need a way of updating this state when needed. We will use functions to do this. Those functions are our `mutations`.
>
> We need a way of handling asynchronous operations which is when we are doing something that takes up an unknown amount of time such as making an GET request to an API to get some data. The `mutation` functions cannot handle these types of operations. We will still use functions to do this though, and they are our `actions`.

This means the following:

> If I am dealing with something that **is** instantaneous and will not vary in the time it tapes, we can just skip using actions and only need `mutations` to then update our `state`   
>
> If I am dealing with something that is **not** instantaneous and can vary in the time it tapes, we need to use an function within our `actions` that handles this for us and then it will call the necessary function without our `mutation` to then update our `state`

Note: For our case, we will start out only needing `mutations` and will add `actions` later.

## Creating Our Vuex Store

We're going to create some data that we want to keep track of across our applicable. We want access to this data in our `routes`, `plugins`, `middleware`, on the sever, on the client ect. Basically, anywhere and everywhere. Vuex allows us to easly do this within our Nuxt application.

Create an `index.js` file inside the `store` directory. Place the following inside this new file:

```js
export const state = () => ({
  renderedFrom: null
})


export const mutations = {
  setRenderedResult (state, renderResult) {
    state.renderedFrom = renderResult
  }
}
```

We are exporting our `state` and `mutations`. For now, we only have one property within our state. We will use this soon when covering the `middleware` directory. For now, there are only a few things to mention...

### Our Mutation Function

We have created a function inside our `mutations` named `setRenderedResult`. Any mutation function takes the `state` as the first parameter and an optional **_payload_** as the second parameter.

**payload**: The data we want to pass along to use for updating our state.

If you want to call one of your mutations when using Vuex you use `store.commit`. Thus, to use our newly created mutation, we would do so as follows:

```js
store.commit('setRenderedResult', renderResultPayload)
```

Note: When we use this later with our middleware, `renderResultPayload` will be a string equal to either **Server** or **Client**

If this doesn't quite make sense, it will once we setup our middleware here momentarily.

### ES6 Syntax

If the code used for exporting our `state` is unfamiliar to you then know that its using ES6 functionality to make the code more concise. We could have alternatively used the following syntax:

```js
export const state = function() {
  return {
    loading: false,
    renderedFrom: null,
    user: null
  }
}
```

# Middleware Versus ServerMiddleware

 Understanding the difference between these 2 directories can be confusing at first but by understanding the objective for each provides much clarity.

Let's state some differences first:

1. The Timing of Execution:

   `middleware` runs on both the client and server side and does so before each route.

   `serverMiddleware` only runs on the server side before vue-server-renderer.

2. Their Directories:

   `middleware` is one of Nuxt's predefined directories and stores the files containing logic pertaining to your application's middleware functionality.

   `serverMiddleware` has no predefined directory to store the files for its respective functionality. You would need to create your own directory for `serverMiddleware` such as `API` (which is used in examples Nuxt provides).

## `middleware`

`middleware` functionality can be declared in 3 different locations:

- In a layout
- In a page
- In `nuxt.config.js` within the `router` property

It can always be declared as an array (for declaring multiple files), or as a string (for declaring a single file).

It's important to note, the order of files listed in the array is the order in which they will be executed.

Let's imagine we have a file inside our `middleware` directory named `auth-check.js`. We use that filename when registering it with Nuxt

### In A Layout Or Page

If declared inside a layout then all pages using that particular layout will use that middleware functionality.

If declared inside a page(s), only that page(s) will use that middleware functionality.

As A String:

```html
<script>
export default {
  middleware: 'auth-check'
}
</script>
```

As An Array:

```html
<script>
  export default {
    middleware: ['auth-check', 'another-middleware-file']
  }
</script>
```

### Inside `nuxt.config.js`

If declared inside `nuxt.config.js`, all routes will use that middleware functionality.

As A String:

```js
router: {
  middleware: 'auth-check'
}
```

As An Array:

```bash
router: {
  middleware: ['auth-check', 'another-middleware-file']
}
```

## `serverMiddleware`

ServerMiddleware is declared inside `nuxt.config.js` within the `serverMiddleware` property.

------

## Adding middleware to NuxtStrap

We're going to setup some middleware for our application which will strengthen our understand of it as well as provide helpful functionality to our application.

We'll create 2 files for now inside the `middleware` directory. The files are as follows:

1. `rendered.js`
2. `auth-check.js`

While `rendered.js` will only serve the purpose of telling us whether the page was rendered on the client or the server, `auth.check.js`, will serve a more practical role in actually helping us with the `admin.vue` page we previously created.

### Setting Up `rendered.js`

At the time I was first learning Nuxt, I had little experience with Universal Applications. While I had spend some time working with Node.js for web-based applications by using frameworks such as Express.js, my development experiences had never called for to think about what was being rendered on the client versus the server, or what that even meant.

I understand the basic idea of Nuxt was that my initial render (initial loading of a page of my site/application) should be rendered on the server. From that point, all subsequent routing done within my application should always be rendered on the client.

I had seen in a Nuxt starter template where this very thing was being checked and then would display the result on the page. I wanted to see this result on all routes though. I realized using the `middleware` directory would be perfect for this.

We're going to use this concept for our application to see Nuxt's magic in action. Anytime we are loading any route of our application initially, **_including when reloading a page_**, the content should be rendered on the server, otherwise the client.

#### Creating a `middleware` file

Create the `rendered.js` file inside our `middleware` directory if you have not done so already.

Middleware files need to export a function. So our starting point for this file is as follows:

```js
export default function () {
  const renderedFrom = process.server ? 'Server' : 'Client'
  context.store.commit('setRenderedResult', renderedFrom)
}
```

```js
export default function (context) {
  const renderedFrom = process.server ? 'Server' : 'Client'
  context.store.commit('setRenderedResult', renderedFrom)
}
```

# Plugins

Plugins