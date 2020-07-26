---
title: Efuzy CLI Installation
desc: How to install the Efuzy CLI on your development machine.
---

Make sure that you have Node >=10 and NPM >=5 installed on your machine.

::: warning
**Do not use uneven versions of Node i.e. 11, 13, etc.** These versions aren't tested with Efuzy and often cause issues due to their experimental nature. We highly recommend always using the LTS version of Node.
:::

```bash
# Node.js >=10 is required.

$ yarn global add @efuzy/cli
# or
$ npm install -g @efuzy/cli
```

::: tip
If you are using Yarn, make sure that the Yarn [global install location](https://yarnpkg.com/lang/en/docs/cli/global/) is in your PATH:

```bash
# in ~/.bashrc or equivalent
export PATH="$(yarn global bin):$PATH"
```

Under Windows, modify user's PATH environment variable. If you are using yarn then add `%LOCALAPPDATA%\yarn\bin`, otherwise if you're using npm then add `%APPDATA%\npm`.
:::

Then we create a project folder with Efuzy CLI:

```bash
$ efuzy create <folder_name>
```

:::tip
Some **advanced** scenarios require to use a custom starter kit (eg. testing or personal presets). In those **rare** cases, you can use `--kit` option. Read more about this into [create command](/efuzy-cli/commands-list#create) description. Remember that the recommended way to go is through writing a Efuzy App Extension though.
:::

Note that you don't need separate projects if you want to build any of the available platforms. This one project can seamlessly handle all of them.

To continue your learning about Efuzy, you should familiarize yourself with the Efuzy CLI in depth, because you will be using it a lot.

## How it works

Efuzy CLI is made up of two packages: `@efuzy/cli` and `@efuzy/app`. The first one is optional and only allows you to create a project folder and globally run Efuzy commands. The second package is the heart of it and it gets installed into every Efuzy project folder.

Once a project folder has been generated, Efuzy CLI will only help in running `@efuzy/app`'s commands globally. You don't need it for anything else at this point. To ensure full independence from Efuzy CLI you can write npm scripts (in your `package.json`) to run Efuzy commands. It is `@efuzy/app` (which is specific to each project) that will run all the CLI commands.

Example of adding a few npm scripts into your `package.json`:

```js
// package.json
"scripts": {
  "dev": "efuzy dev",
  "build": "efuzy build",
  "build:pwa": "efuzy build -m pwa"
}
```

The above will allow you to run `$ yarn dev` or `$ yarn build` without the need of a globally installed `@efuzy/cli`, should you wish to do so.

Alternatively, you can even use [npx](https://github.com/npm/npx) to run efuzy commands without the need of a globally installed `@efuzy/cli`.

```bash
$ npx efuzy dev
```
