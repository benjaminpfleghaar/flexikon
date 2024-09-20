// Questions object
const questions = [
	{
		question: "Which CSS property is used to make an element's corners rounded?",
		answer: "border-radius",
		explanation: "The border-radius property creates rounded corners on an element.",
		code_language: "CSS",
		code: ["div {", "  border-radius: 10px;", "}"],
		tags: ["css", "border", "effects"],
		bookmark: true,
	},
	{
		question: "Which HTML tag is used to create a form for user input?",
		answer: "form",
		explanation: "The &lt;form&gt; tag defines a form for user input in HTML.",
		code_language: "HTML",
		code: ["&lt;form action=&quot;/submit&quot;&gt;", "  &lt;input type=&quot;text&quot;&gt;", "&lt;/form&gt;"],
		tags: ["html", "form", "input"],
		bookmark: false,
	},
	{
		question: "Which JavaScript method is used to convert a JSON string to an object?",
		answer: "JSON.parse",
		explanation: "The JSON.parse method parses a JSON string into a JavaScript object.",
		code_language: "JS",
		code: ['let obj = JSON.parse(\'{"name":"John"}\');'],
		tags: ["js", "json", "parsing"],
		bookmark: false,
	},
	{
		question: "Which CSS property is used to add shadow to an element?",
		answer: "box-shadow",
		explanation: "The box-shadow property adds shadow to the element's frame.",
		code_language: "CSS",
		code: ["div {", "  box-shadow: 2px 2px 5px #888888;", "}"],
		tags: ["css", "shadow", "effects"],
		bookmark: false,
	},
	{
		question: "Which HTML tag is used to define an internal style sheet?",
		answer: "style",
		explanation: "The &lt;style&gt; tag is used to include CSS directly in the HTML document.",
		code_language: "HTML",
		code: ["&lt;style&gt;", "  body { background-color: #f0f0f0; }", "&lt;/style&gt;"],
		tags: ["html", "css", "style"],
		bookmark: true,
	},
	{
		question: "Which JavaScript function is used to delay code execution by a set time?",
		answer: "setTimeout",
		explanation: "The setTimeout function executes code after a specified delay.",
		code_language: "JS",
		code: ["setTimeout(function() {", "  console.log('Hello!');", "}, 2000);"],
		tags: ["js", "timing", "functions"],
		bookmark: false,
	},
];

export default questions;
