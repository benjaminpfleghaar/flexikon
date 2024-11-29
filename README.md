# Flexikon

This app project is a personal exercise in component-based development, focused on building modular and reusable components. To keep the focus on understanding core concepts, the project uses only vanilla JavaScript, without relying on frameworks or libraries. The goal was to practice writing clean and maintainable code while exploring the fundamentals of modern JavaScript development.

## Table of Contents

1. [Description](#description)
2. [Design](#design)
3. [Questions](#questions)
4. [Backlog](#backlog)
5. [How to use](#how-to-use)
6. [Tech Stack](#tech-stack)

## Description

This Quiz App provides a simple and interactive way to explore modern web technologies. Users can reveal answers by clicking on questions or contribute by adding their own. Built with a focus on core functionality and ease of use, the app aims to create an engaging experience for testing and expanding knowledge in web development.

## Design

![Mockup](./assets/mockup.jpg)

## Questions

Utilizing ChatGPT for creating new questions.

<details>
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
    
    Attention: in case your code has some html tags in it, make sure to replace the < > with `&lt;` and `&gt;`
    
    Tags (maxium of 3, only one word each):
    html
    css
    js
    
    Could you please give me 6 questions back as a single JSON object, so that I can work on with it.
</details>

## Backlog

-   Add a bookmark counter to nav
-   Provide a copy button for the code
-   Provide layout for empty bookmark page
-   Add a pagination in the footer

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
