# Flexikon

A personal project focused on component-based development using only vanilla **JavaScript**. Flexikon offers an interactive way to explore modern web technologies, allowing users to test their knowledge and contribute new questions.

![Mockup](./assets/mockup.jpg)

## Features

- **Interactive Quizzes:** Test your knowledge on modern web technologies
- **Custom Questions:** Add your own questions to expand the learning experience

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

## Getting Started

The application requires no further packages.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benjaminpfleghaar/flexikon.git
   ```
   
2. Run the application:
   ```bash
   npm run start
   ```