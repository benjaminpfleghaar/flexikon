# Quiz App

Quiz app as part of the neuefische Web Development Bootcamp

## Table of Contents

1. [Description](#description)
2. [Constraints](#constraints)
3. [Challenges](#challenges)
4. [Learnings](#learnings)
5. [Feature ideas](#feature-ideas)
6. [How to use](#how-to-use)
7. [Tech Stack](#tech-stack)

## Description

A short quiz about modern web technologies. Just click on the respective question to see the answer.

## Constraints

-   Create a home, bookmark and profile page
-   Provide possibility to bookmark a question
-   Create a set of different questions

## Challenges

-   [ ] Check for Accessibility

### Solved

-   [x] Build HTML structure
-   [x] Create three 3 questions
-   [x] Style the page via CSS

## Learnings

-   Apply BEM naming convention
-   Understanding `:has` and `:not`
-   Use `data-js=<name>` for query selection
-   Use `text-overflow: ellipsis` for cutting text
-   How to ensure accessibility of icon only buttons
-   Organize components/styles in different files
-   Use `type="module"` on `<script>` tag enable import
-   Make an array from nodes with `Array.from(nodes)`
    -   even shorter `[...nodes]`
-   Use color and font variables in CSS

## Feature ideas

-   Add counter at bookmark nav link
-   Provide a copy button for the code
-   Provide layout for empty bookmark page

### Implemented

-   Prevent hover effect on mobile
-   Mark new questions with a small dot
-   Make card exactly as high as it is wide
-   Add navigation to header on Desktop

## How to use

The application requires no further packages.

-   Clone the whole repository
-   Open the `index.html` or run `npm run start`

## Tech Stack

-   Visual Studio Code
-   GitHub
-   HTML
-   CSS
-   JS
