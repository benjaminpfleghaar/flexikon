# Flexikon App

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

A short quiz about modern web technologies. Just click on the respective question to see the answer or add your own question.

## Constraints

-   Create a home, bookmark and profile page
-   Provide possibility to bookmark a question
-   Provide a form to add a new question
-   Create a set of different questions

### Solved

-   [x] Handle data input
-   [x] Build HTML structure
-   [x] Create at least 3 questions
-   [x] Check for Accessibility
-   [x] Style the page via CSS

## Learnings

-   Apply BEM naming convention
-   Understanding `:has` and `:not`
-   Use `data-js=<name>` for query selection
-   Use `text-overflow: ellipsis` for cutting text
-   How to ensure accessibility of icon only buttons
-   Organize components/styles in different files
-   Apply `aria-live` to inform impaired users politely
-   Use `type="module"` on `<script>` tag enable import
-   Make an array from nodes with `Array.from(nodes)`
    -   even shorter `[...nodes]`
-   Use color and font variables in CSS
-   Ask ChatGPT for generating questions
    -   <details>
            <summary>Show prompt</summary>
            Hey, please pretend to be a html and css expert because I want you to help me create a random question either css or html related for a quiz. Here's an example:
            
            **Question (maximum of 80 characters):**
            Which CSS property can be used to invert the flexbox axes?
            
            **Answer (single line, only the html tag/css attribute:**
            flex-direction
            
            **Description (maximum of 80 characters):**
            The flex-direction property specifies the direction of the flexible items.
            
            **Code language (single word):**
            CSS
            
            **Code (each line individually):**
            div {
            display: flex;
            flex-direction: column;
            }
            
            Attention: in case you code has some html tags in it, make sure to replace the < > with `&lt;` and `&gt;`
            
            **Tags (maxium of 3, only one word each):**
            html
            css
            flexbox
            
            Could you please give me 6 questions back as a single JSON object, so that I can work on with it.
        </details>

## Feature ideas

-   Create questions with ChatGPT
-   Provide a copy button for the code
-   Provide layout for empty bookmark page
-   Add counter at bookmark nav link

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
