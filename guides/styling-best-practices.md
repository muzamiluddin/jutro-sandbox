# Utility CSS Classes Guidelines

## Table of Contents
- [Introduction](#introduction)
- [Benefits of Using Utility Classes](#benefits-of-using-utility-classes)
- [General Principles](#general-principles)
- [Usage Guidelines](#usage-guidelines)
- [Examples](#examples)

## Introduction
These guidelines are designed to help developers use the provided utility CSS classes effectively in their HTML components. The utility classes are similar to those found in popular libraries like Bootstrap and Tailwind CSS. By adhering to these guidelines, you can maintain consistency, improve maintainability, and ensure that your HTML components are styled efficiently.

## Benefits of Using Utility Classes
1. **Consistency**: Using a standardized set of utility classes ensures a consistent look and feel across all components.
2. **Maintainability**: Utility classes make your code easier to read and maintain. Changes to styles can be made globally by updating the utility classes.
3. **Reusability**: Utility classes promote reusability of styles, reducing the need for redundant CSS code.
4. **Performance**: Utility classes can improve the performance of your web pages by reducing the size of your CSS files.

## General Principles
1. **Use Utility Classes for Styling**: Avoid writing custom CSS in your HTML components. Instead, use the predefined utility classes to apply styles.
2. **Avoid Inline Styles**: Do not use inline styles. They override the utility classes and make the code harder to maintain.
3. **Keep It Simple**: Use the smallest number of utility classes necessary to achieve the desired result.
4. **Document Your Classes**: Ensure all utility classes are well-documented to facilitate ease of use and understanding.

## Usage Guidelines
### Layout Utilities
- `.justify-content-space-between`: Apply `justify-content: space-between;`
- `.align-items-center`: Apply `align-items: center;`
- `.column-container`: Apply `display: flex; flex-direction: column; align-items: center;`
- `.row-container`: Apply `display: flex; flex-direction: row; align-items: center;`

### Border Utilities
- `.border-regular`: Apply default border color.
- `.border-inverse`: Apply inverse border color.
- `.border-separator`: Apply border color for separators.
- `.border-selected`: Apply border color indicating a selected state.
- `.border-selected-hover`: Apply border color indicating a selected hover state.
- `.border-selected-active`: Apply border color indicating a selected active state.
- `.border-brand`: Apply brand border color.
- `.border-brand-hover`: Apply brand border color for hover state.
- `.border-brand-active`: Apply brand border color for active state.
- `.border-brand-accent-1`: Apply brand accent 1 border color.
- `.border-brand-accent-1-hover`: Apply brand accent 1 border color for hover state.
- `.border-brand-accent-1-active`: Apply brand accent 1 border color for active state.
- `.border-brand-accent-2`: Apply brand accent 2 border color.
- `.border-brand-accent-2-hover`: Apply brand accent 2 border color for hover state.
- `.border-brand-accent-2-active`: Apply brand accent 2 border color for active state.
- `.border-focus`: Apply focus border color.
- `.border-focus-inverse`: Apply inverse focus border color.
- `.border-error`: Apply error border color.
- `.border-success`: Apply success border color.
- `.border-information`: Apply information border color.
- `.border-warning`: Apply warning border color.

### Text Utilities
- `.text-regular`: Apply regular text color.
- `.text-subtle`: Apply subtle text color.
- `.text-inverse`: Apply inverse text color.
- `.text-brand`: Apply brand text color.
- `.text-brand-hover`: Apply brand text color for hover state.
- `.text-brand-active`: Apply brand text color for active state.
- `.text-brand-accent-1`: Apply brand accent 1 text color.
- `.text-brand-accent-2`: Apply brand accent 2 text color.
- `.text-error`: Apply error text color.
- `.text-information`: Apply information text color.
- `.text-success`: Apply success text color.
- `.text-warning`: Apply warning text color.
- `.text-required`: Apply color for indicating required action.
- `.text-link`: Apply default link text color.
- `.text-link-hover`: Apply link text color for hover state.
- `.text-link-active`: Apply link text color for active state.
- `.text-link-inverse`: Apply inverse link text color.
- `.text-link-visited`: Apply visited link text color.
- `.text-link-visited-hover`: Apply visited link text color for hover state.
- `.text-link-visited-active`: Apply visited link text color for active state.

## Examples

### Example 1: Centered Flexbox Column
```html
<div class="column-container">
  <div class="text-regular">Item 1</div>
  <div class="text-regular">Item 2</div>
  <div class="text-regular">Item 3</div>
</div>
