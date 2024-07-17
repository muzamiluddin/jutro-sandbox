# Jutro sample app

This is a sample React app that uses Jutro. [Read more on the Jutro documentation site](https://jutro.guidewire.com/)

# Application Structure

## i18n

This folder contains auto-generated temporary files that simply hold the UI strings that have been extracted from src/\*\*. Do not manually edit them, or check them into source control. .gitignore is already configured to ignore these files.

## src

This folder contains the application source:

> `app`
> This folder contains App.js files which export the Jutro class that we use as the application entry component. It provides a basic UI application structure with a floorplan to have consistent user experience and UI across Guidewire.

> `assets`
> This folder contains all assets needed for this application.

> `components`
> This folder contains all components used in this application.

> `config`
> This folder contains the application configuration file "config.json" to configure this application.

> `context`
> This folder contains custom contexts used in this application and their respective providers.

> `i18n`
> This folder contains all generated translation files. Translators will use these files as a basis for further translations.

> `pages`
> This folder contains all the navigation pages used by this application. The presentation metadata for each page is defined in the .metadata.json5 file.

> `styles`
> This folder contains .scss files to support application theme.

## .depcheckrc.js

The Jutro CLI validates dependencies for a given project by comparing the project's package.json file and the modules the project uses. It gives a list of all unused, missing, and non-strictly versioned dependencies. You need to add a `.depcheckrc.js` file at the project root which lists the modules to ignore.

# Migrations

## .jpconfig.json

The `.jpconfig.json` file should exist in the root of the project. It is used by the CLI to know exactly which migrations packages (and in which order) need to be applied to the app.

# Useful commands

To install dependencies:

## `npm install`

To run in interactive mode:

## `npm start`

To build a deployment instance.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `npm run build`

The project was built assuming it is hosted at the server root.
To override this, specify the homepage property in your `package.json`.
Add it as a root-level property, for example:

```
{
    // ...
    "scripts": {
    // ...
},
    "homepage": "https://example.com/my-app"
}
```

# Available Scripts

In the project directory, you can run:

## `npm run depcheck`

This command checks the dependency declaration in the package.json file and creates a log file with missing dependencies details if any have been found.

## `npm run i18n`

To generate pseudo translations.

## `npm run lint`

To run linter on your commits.

## `npm run lint:css`

To avoid errors and enforce conventions in your styles.

## `npm run lint:js`

To statically analyze your code and find problems in JavaScript files.

## `npm run prebuild`

To write build information for the application to a JSON file.

## `npm run prestart`

To write build information for the application to a JSON file and check Jutro's version.

## `npm run prettier`

To enforce consistent style by parsing your code.

## `npm run prettier-check`

To check if specifield files are formatted. The output of the command are messages and a list of unformatted files.

## `npm run prettier-check-files`

To check if files for given extensions are formatted. The output of the command are messages and a list of unformatted files.
for eg. `npm run prettier-check-files **/*.scss*`

## `npm run start`

To start the application.

## `npm run test`

To run the jest tests.

## `npm run test:ci`

To run jest tests in the CI environment.

# Additional features

## `Jutro Platform CLI`

The Jutro Platform Command Line Interface (Jutro Platform CLI) is a unified plugin based tool to manage your Jutro apps. With just one tool, you can control multiple parts of your Jutro app from the command line. The Jutro Platform CLI offers commands such as generate and validate, which you can run directly from the CLI itself or from the embedded version installed in any Jutro app.

See the section about [How to use Jutro Platform CLI](https://docs.int.ccs.guidewire.net/jutro/platform/next/docs/jutro-platform-cli/overview-cli)

## Available commands for jutro cli

### `npm run jutro generate -h`

Generates i18n translations, components, and product metadata for your Jutro application.

> `generate:i18n` - Generates i18n translations
>
> `generate:metadata:product` - Generates Jutro Product Metadata from APD Cloud
>
> `generate:changelog` - Generates the changelog for git repository
>
> `generate:component` - Generates simple React components
>
> `generate:form` - Generates a Jutro form component
>
> `generate:observability` - Generates a Jutro observability report
>
> `generate:page` - Generates a Jutro page
>
> `generate:wizard` - Generates a Jutro wizard component

### `npm run jutro validate -h`

Validates your Jutro App to ensure that it follows Guidewire standards.

> `validate:dependencies` - Validates your package.json dependencies
>
> `validate:folders` - Validates your Jutro app folder structure and files
>
> `validate:linters` - Runs all linters
>
> `validate:migrations` - Validates migration scripts
>
> `validate:tests` - Validates and executes all the tests

## `Steps to enable Datadog`

Uncomment the following datadog variables in .env.local file and assign it with appropriate values

> 1. `REACT_APP_JUTRO_DATA_DOG_ENV`
>    The environment in which the application is running (dev|prod - default is dev)
> 2. `REACT_APP_JUTRO_DATA_DOG_CLIENT_TOKEN`
>    A Datadog client token
> 3. `REACT_APP_JUTRO_DATA_DOG_SERVICE_NAME`
>    Service name for the application (Default is jutro-template-starter-standalone)
