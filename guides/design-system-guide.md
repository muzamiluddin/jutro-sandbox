# Design System Documentation - Implementation and Maintenance

This document focuses on the implementation and maintenance phases of integrating design tokens into the Jutro React application. It covers converting design tokens to CSS variables, integrating them into Jutro apps, and managing versions.

## Table of Contents
- [Introduction](#introduction)
- [Defining Design Tokens](#defining-design-tokens)
- [Exporting Design Tokens](#exporting-design-tokens)
- [Converting Tokens to CSS Variables](#converting-tokens-to-css-variables)
- [Integrating CSS Variables in web apps](#integrating-css-variables-in-react)
- [Automating Token Updates](#automating-token-updates)


## Introduction

This document provides a detailed walkthrough of integrating design tokens into a web applications using the Design tokens. It begins with an introduction to the importance and function of design tokens, followed by a step-by-step guide on defining, exporting, and converting these tokens into CSS variables. The guide also explains how to integrate these variables into a React project to ensure consistent styling across components and concludes with strategies for automating token updates to streamline workflow and maintain consistency as the project evolves.

### Overview of Design Tokens

Design tokens are more than just values; they are a shared language and a single source of truth for theming within a design system, facilitating collaboration between designers and developers. For instance, a button using the color token `jds.color.background.brand` will maintain consistency across all elements that utilize the same or a related token. Changing the token value to alter the brand color will automatically update all associated elements, enhancing theming efficiency.

### Why Are Design Tokens Valuable?

- **Collaboration:** Design tokens enable designers, developers, and multidisciplinary teams to collaborate effectively, maintaining synchronization across tools and languages.
- **Control:** They provide granular control over UI elements. For example, changing a single token value can alter specific components across the entire system without affecting unrelated elements.
- **Consistency:** Tokens ensure that both design and development efforts are aligned, eliminating the need to redo work in either phase.

## Defining Design Tokens

- **Tool:** Utilize Figma to create and manage design tokens
- **Details:** Design tokens should include colors, typography, spacing, shadows, border radius etc.

### Design Token Naming Convention

The names of design tokens need to follow a particular format to ensure clarity and relevance:

- **System**: Typically an abbreviation, like 'wsib', which helps to differentiate tokens specific to the WSIB Design System.
- **Category**: Describes the type of visual attribute, such as color, size, or typography.
- **Property**: Indicates the UI element or aspect that the token modifies, such as background, border, or text.
- **Modifier**: Provides additional details about the application or context of the token, such as state changes like hover or active.

### Best Practices for Using Design Tokens

When selecting design tokens for use:

- **Do**: Choose tokens based on their intended meaning, context, and functionality. Ensure the token name and its application align with your specific needs.
- **Don't**: Select tokens based merely on their appearance or current values, as this can lead to inconsistencies or misapplications in your design system.

### Practical Examples and Token Format

Here are some examples of design tokens and their descriptions to illustrate their application:

- **Background Colors**:
  - `wsib.color.background.brand`: Brand color for background
  - `wsib.color.background.error`: Background color for errors
  - `wsib.color.background.selected-active`: Background color indicating a selected active state

- **Border Styles**:
  - `wsib.color.border.focus`: Border color used to indicate focus state
  - `wsib.color.border.error`: Border color for error

- **Text Colors**:
  - `wsib.color.text.success`: Success color for text
  - `wsib.color.text.link.hover`: Color for hover state of link text

Each token's structure is designed to facilitate easy understanding and application, ensuring that every design element adheres to the defined theming guidelines and contributes to a coherent user interface.

By adhering to these guidelines and utilizing design tokens thoughtfully, developers and designers can achieve a harmonious and effective design system that is both scalable and easy to maintain.

### Organize Tokens

- **Categories:** Classify tokens into types like color, font, spacing, etc.
- **Naming Conventions:** Use clear and consistent names following this format:
  - **System:** 'wsib'
  - **Category:** e.g., 'color'
  - **Property:** e.g., 'background'
  - **Modifier:** e.g., 'default'

## Exporting Design Tokens

- **Tool:** Use the “Token for Figma” plugin.
- **Output:** JSON file containing all defined tokens.

Example JSON tokens from Figma:
```json
{
  "wsib": {
    "font-family": {
      "heading": { "type": "fontFamilies", "value": "'Roboto'", "description": "Global font-family for headings" },
      "label": { "type": "fontFamilies", "value": "'Roboto'", "description": "Global font-family for label text" },
      "body": { "type": "fontFamilies", "value": "'Roboto'", "description": "Global font-family for body text" },
      "monospace": { "type": "fontFamilies", "value": "'Roboto'", "description": "Global font-family for monospace text" }
    }
  }
}
```

# Converting Tokens to CSS Variables

The transformation can be executed using the `npm generate:themes` CLI command or automatically through build scripts. Configuration paths and detailed command options are specified within the `.themesConfig.json` file.

## Integrating CSS Variables in React

- **Token Storage**: Place your design token JSON files in the `src/tokens/yourThemeName/` directory within the application's codebase. Update these files whenever new tokens are created or existing tokens are modified.

### Caution:

- **WARNING**: Do not manually change the values in the generated CSS variables.
- Include the design token files in the source code repository to maintain a history of changes and ensure traceability.

### .themesConfig.json Configuration:

- This file is crucial for theming and should be correctly configured with paths and settings for the token files.
- It is generated automatically when creating a new Jutro app or can be manually created using a CLI command.
- The configuration includes paths to token files, output file names for CSS variables, and custom mappings or transformations.

```json
{
  "sampleTheme": {
    "name": "sampleTheme",
    "tokens": {
      "input-path": "src/tokens/sampleTheme/**/*.json",
      "output-file-name": "tokenOverrides.css",
      "custom-mappings": "src/tokens/customMappings.json",
      "custom-transformations": "src/tokens/customTransformations.js"
    }
  }
}
```
## Step 6: Set Up Automation

### Automated Approach

Integrate the design token files into your automated build process to ensure that all token updates are included in the builds.

### Manual Approach

While not necessary, including token files in the version control system is recommended even when using a manual approach to facilitate traceability and consistency.

## Version Control and Collaboration

By integrating these steps into your development workflow, you can ensure that your design tokens are consistently applied and easily maintained across your project, enhancing collaboration between design and development teams.

## Critical Points

- **WARNING**: CSS variables generated from tokens under the "jds" namespace are not covered by non-breaking changes (NBC) policy. Therefore, it's advised against using these directly to style applications.
- **Automated vs. Manual Transformation**:
  - **Automated**: The transformation runs during the build process, recommended for ensuring the latest changes are always included.
  - **Manual**: Can be triggered via CLI commands, useful for development checks.

## Configuration and Usage

- **.themesConfig.json**:
  - This configuration file specifies paths for token files and settings for the transformation process.
  - It's crucial for the proper execution of theme applications within the project.

## Best Practices

- **File Management**: Ensure that design token files are updated regularly and stored in a version-controlled environment.
- **Caution with Direct Edits**: Avoid manually editing generated CSS files or JSON token files. Any changes should be fed back through the design tool and transformed.
