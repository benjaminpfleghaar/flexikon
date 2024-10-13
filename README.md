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

## Challenges

-   [x] Handle data input
-   [x] Use vanilla JS only 
-   [x] Build HTML structure
-   [x] Create at least 3 questions
-   [x] Style the pages with CSS
-   [x] Check for Accessibility

## Learnings

-   Apply BEM naming convention
-   Understanding `:has` and `:not`
-   Use `data-js=<name>` for query selection
    -   `data-js*=<name>` selects all with `<name>`in it
-   Use `text-overflow: ellipsis` for cutting text
-   How to ensure accessibility of icon only buttons
-   Organize components/styles in different files
-   How to style `<input type="radio">` elements with css
    - ... using `appearance: none;`
-   Use `hidden` attribute to hide elements to screenreaders
-   Apply `aria-live` to inform impaired users politely
-   Use `type="module"` on `<script>` tag enable import
-   Make an array from nodes with `Array.from(nodes)`
    -   even shorter `[...nodes]`
-   Use color and font variables in CSS
-   Ask ChatGPT for generating questions
    -   <details>
            <summary>Show prompt</summary>
            
            Hey, please pretend to be a html, css and javascript expert because I want you to help me create a random question either html, css or javascript related for a quiz. Here's an example:
            
            Question (maximum of 80 characters):
            Which CSS property can be used to invert the flexbox axes?
            
            Answer (single line, only the html tag/css/js attribute):
            flex-direction
            
            Explanation (maximum of 80 characters):
            The flex-direction property specifies the direction of the flexible items.
            
            Code language (single word, CSS, HTML or JS):
            CSS
            
            Code (maximum of 120 characters, each line individually):
            div {
            display: flex;
            flex-direction: column;
            }
            
            Attention: in case you code has some html tags in it, make sure to replace the < > with `&lt;` and `&gt;`
            
            Tags (maxium of 3, only one word each):
            html
            css
            js
            
            Could you please give me 6 questions back as a single JSON object, so that I can work on with it.
        </details>

## Feature ideas

-   Provide a copy button for the code
-   Provide layout for empty bookmark page
-   Add counter to bookmark nav link
-   Add pagination in footer

### Implemented

-   Create questions with ChatGPT
-   Prevent hover effect on mobile
-   Mark new questions with a small dot
-   Make card exactly as high as it is wide
-   Add navigation to header on Desktop

## How to use

The application requires no further packages.

-   Clone the whole repository
-   Run `npm run start` to start the application

## Tech Stack

-   VSC
-   GitHub
-   HTML
-   CSS
-   JS
