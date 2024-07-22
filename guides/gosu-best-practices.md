## Table of Contents
- [Introduction](#introduction)
- [General Coding](#general-coding)
  - [Early Problem Detection](#early-problem-detection)
  - [Cloud Specific](#cloud-specific)
- [Benefits](#benefits)
- [Best Practices](#best-practices)
  - [Standards](#standards)
  - [Both](#both)
  - [Gosu Reference Guide](#gosu-reference-guide)
- [Use of Internal Classes](#use-of-internal-classes)
- [Conditional Statements Involving Typelists](#conditional-statements-involving-typelists)
- [Logical Operators](#logical-operators)
- [Gosu Code and Page Configuration Files](#gosu-code-and-page-configuration-files)
- [Deprecated Classes and Methods](#deprecated-classes-and-methods)
- [Studio Inspections](#studio-inspections)
- [Gosu Coding Best Practices](#gosu-coding-best-practices)
  - [Use Whitespace Effectively](#use-whitespace-effectively)
  - [Use Curly Braces Effectively](#use-curly-braces-effectively)
  - [Code Comments](#code-comments)
- [Data Model Naming Standards](#data-model-naming-standards)
- [Typelist Best Practices](#typelist-best-practices)
- [Script Parameter Best Practices](#script-parameter-best-practices)
- [Data Model Best Practices](#data-model-best-practices)
- [Page Configuration Files](#page-configuration-files)
  - [Display Key](#display-key)
- [Naming and Structuring Packages](#naming-and-structuring-packages)
- [Interfaces](#interfaces)
- [Abstract Classes](#abstract-classes)
- [Functions](#functions)
- [Properties](#properties)
- [Constants & Enumerations](#constants--enumerations)
- [Variables](#variables)
- [Other Naming Standards](#other-naming-standards)
- [Page Configuration Files (PCFs)](#page-configuration-files-pcfs)
- [Script Parameters](#script-parameters)
- [Logging](#logging)
  - [Guidewire Cloud Logging](#guidewire-cloud-logging)
  - [CLF - Common Logging Format](#clf---common-logging-format)
- [Exception Handling](#exception-handling)
- [Query API and SQL](#query-api-and-sql)
  - [Case-Insensitive Searches](#case-insensitive-searches)
  - [Subselect](#subselect)
- [Query Anti-Patterns](#query-anti-patterns)
- [Advance Query API](#advance-query-api)
- [PCF Performance](#pcf-performance)
  - [Dynamic Widget Properties](#dynamic-widget-properties)
  - [PCF Variables](#pcf-variables)
  - [List View Best Practices](#list-view-best-practices)
- [View Entities](#view-entities)
- [List View Filters](#list-view-filters)
  - [Hidden Toolbar Filters](#hidden-toolbar-filters)
- [Post on Change](#post-on-change)
  - [Client Reflection Properties](#client-reflection-properties)
- [G-Unit Tests](#g-unit-tests)
  - [Organizing Tests](#organizing-tests)

## Introduction

This document provides guidelines and best practices for developers using Guidewire's suite of products. By adhering to these practices, developers can ensure the stability, performance, and maintainability of their code, while also promoting security and facilitating upgrades.

## General Coding

### Early Problem Detection

- Regularly run studio inspections to catch issues early.
- Turn on inspections in Guidewire Studio: `File -> Settings -> Inspections` and run from `Analyze -> Inspect Code`.

### Cloud Specific

- Follow Guidewire Cloud logging standards.
- Use StructuredLogger for cloud projects.

## Benefits

1. Produce standardized solutions.
2. Ensure stability and integrity of custom code.
3. Improve performance.
4. Reduce rework and wasted effort.
5. Save on maintenance.
6. Promote security.
7. Facilitate upgrades.

## Best Practices

### Standards

- Compliance can be independently determined.
- Promotes quality, efficiency, and consistency.
- Helps improve the quality of software.

### Both

- Best practices and standards together promote quality, efficiency, and consistency.

### Gosu Reference Guide

- Avoid using internal `com.guidewire.*` classes unless absolutely necessary.
- Use static properties on typelists to reference typecode values.
- Place logic related to PCF files in UI helper classes.
- Do not use deprecated classes and methods.

## Use of Internal Classes

- Avoid using internal `com.guidewire.*` classes as they may be removed or modified in future versions.
- If used, ensure the development team is aware and work with Guidewire support.

## Conditional Statements Involving Typelists

- Use static properties on typelists class to reference typecode values.
- Avoid referencing typecodes using a string representation.

## Logical Operators

- Use text format (`and`, `or`, `not`) for logical operators in code for clarity.
- Avoid using the symbol format (`&&`, `||`, `!`).

## Gosu Code and Page Configuration Files

- Place logic related to PCF files in a UI helper class.
- Avoid placing code directly in the code tab of a PCF.
- A code snippet specific to a single PCF is acceptable.
- Avoid extending entity enhancements to support UI operations.

## Deprecated Classes and Methods

- Do not use deprecated classes and methods.
- Refactor code to use improved alternatives provided by Guidewire.

## Studio Inspections

- Regularly run studio inspections to ensure adherence to naming conventions and other best practices.

## Gosu Coding Best Practices

### Use Whitespace Effectively

- Add spaces around operators.
- Indent logical blocks by two spaces.
- Add blank lines after code blocks and methods.

### Use Curly Braces Effectively

- Surround logical blocks with curly braces.
- Place opening curly brace on the line that starts the block and closing curly brace on its own line.

### Code Comments

- Document new classes and functions with javadoc-style comments.
- Use single-line comments within functions and methods for clarity.
- Use `gwb gosudoc` to generate Gosu documentation.

## Data Model Naming Standards

- Match metadata definition file names and entity attribute names.
- Use `_Ext` suffix for new entities and properties added to existing Guidewire entities.
- Use singular word for field names, except for arrays.

## Typelist Best Practices

- Use CamelCase for typelist names.
- Use snake_case for codes.
- Add informative descriptions to all typelist values.

## Script Parameter Best Practices

- Add `_Ext` suffix to custom script parameters.

## Data Model Best Practices

- Add informative descriptions for all new entities, properties, typelists, and typecodes.
- Use defined text data types (e.g., `shorttext`, `mediumtext`, `longtext`) instead of `varchar`.

## Page Configuration Files

- Add `_Ext` suffix to new PCF files to avoid name conflicts.
- Place logic in UI helper classes instead of directly in PCF files.

### Display Key

- Do not use hard-coded string literals.
- Add `_Ext` suffix to display keys to avoid name conflicts.

## Naming and Structuring Packages

- Use a short name that defines the project or customer.
- Add application-specific code under each package.
- Use feature-based subpackages.
- Avoid adding new classes to the Guidewire package space.

## Interfaces

- Add new interfaces to the customer package space.
- Do not prefix interface names with an ‘I’.

## Abstract Classes

- Prefix abstract class names with ‘Abstract’.

## Functions

- Use lower camel case for function names.
- Use descriptive verbs that reflect the function's action.

## Properties

- Add new classes and member properties to the customer package space.
- Use upper camel case for property names.

## Constants & Enumerations

- Use all capitals with underscores for constants.
- Use upper camel case for enumeration types and values.

## Variables

- Use lower camel case for local variables.
- Start member variable names with an underscore followed by lower camel case.

## Other Naming Standards

- Add `_Ext` to all new display keys.

## Page Configuration Files (PCFs)

- Place custom PCFs in appropriate packages.
- Add `_Ext` suffix to all custom PCFs and their elements.

## Script Parameters

- Add `_Ext` suffix to all new script parameter values.

## Logging

- Use SLF4J API library in combination with Apache Log4j libraries.
- Configure loggers, appenders, and layouts in the logging configuration file.

### Guidewire Cloud Logging

- Log data in JSON format using Guidewire Common Logging Format (CLF).
- Use StructuredLogger for cloud projects.

### CLF - Common Logging Format

- Use core fields and context map to provide sufficient context in log messages.

## Exception Handling

- Log exception information before logging an error.
- Use appropriate logging levels based on the severity and recoverability of the exception.

## Query API and SQL

- Use the Query API for type-safe and efficient database queries.

### Case-Insensitive Searches

- Use `compareIgnoreCase` for case-insensitive searches.
- Set `supportsLinguisticSearch` attribute to true for case-insensitive searches on columns.

### Subselect

- Use `subselect` method to embed queries inside other queries.

## Query Anti-Patterns

- Avoid using `intersect()` and `subselect` under an `or`.
- Retrieve only the data needed.

## Advance Query API

- Use context information to understand query performance.

## PCF Performance

### Dynamic Widget Properties

- Avoid expensive expressions in widget properties.

### PCF Variables

- Use PCF variables to avoid repeated evaluation of expensive methods.

### List View Best Practices

- Use array-backed lists for short lists and query-backed lists for long lists.

## View Entities

- Use view entities to enhance performance for viewing tabular data in a list view.

## List View Filters

- Use filters to enable users to filter list view contents.

### Hidden Toolbar Filters

- Use hidden toolbar filters to set default filters on query-backed list views.

## Post on Change

### Client Reflection Properties

- Use client reflection properties for inter-widget dependencies.

## G-Unit Tests

- Use GUnit for writing automated unit tests of Gosu code.

### Organizing Tests

- Organize test classes by feature and create feature suites.
