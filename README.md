# ComS-319-Lex-Converter
Assignment 2 for ComS-319
# Task: Basic theory of grammars and parsing: Developing a Lexical Analyzer (Lexer) and a Parser (50 points)
You  are  required  to  develop  a  Lexical  Analyzer  (Lexer)  and  a  Parser  in  JavaScript  using  the  below template. Show the output in GUI i.e., the output of the parser "Abstract Syntax Tree (AST)"and lexer  "list of tokens"should be shown/visualized on  the browser and also for the input  which can be obtained from user as in input field on browser. Implement the whole program using a html page via an input textbox and a button to complete. Show that output as string.

# Task 2.1: Implement a Lexer    (15 points)
A lexer turns the input string into a list of tokens. A token looks the following way in javascript:{"type": Symbol("Operator"),"value: "-"}```For example, `lex` will turn the following expression:```mul 6 sub 4 sum 7 3 4 To the following array:["mul", "6", "sub", "4", "sum", "7", "3", "4"] Implement your Lexer based on the above description.

# Task 2.2: Implement a Parser    (15 points)
A parser turns the list of tokens into an Abstract Syntax Tree(AST). Visually, the parsing is a process which turns the array:const tokens = ["sub", "3", "sum", "2", "4”, "5"];to the following tree:sub/ \3  sum/|\2 45

# Assignment 2 
Below is the grammar that is used to parse the input tokennum := 0-9+op := sum | sub | div | mulexpr := num | op expr+This translated to plain English, means:-`num` can be any sequence of the numbers between 0 and 9.-`op` can be any of `sum`, `sub`, `div`, `mul`.-`expr` can be either a number (i.e. `num`) or an operation followed by one or more `expr`s.Notice: ‘expr` has a recursive declaration.

# Task 2.3: Implement a Evaluator   (5 points)
The evaluator visit each node from the tree with pre-order traversal and perform either of the following:-Return the corresponding value, if the node is number type.-Perform the corresponding arithmetic operation, if it is anoperation node.Task 

# 2.4 Implement a code generator   (5 points)
A code generator can translate theinput to another language.Task 2.5 Implement an interpreter   (5 points)An interpreter an interpreter is a computer program that directly executes, i.e. performs, instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.Task 2.6 Implement a compiler (5 points)A compiler is a program that converts instructions into a machine-code or lower-level form so that they can be read and executed by a computer.Implement the program using a html page as the UI. It contains one text box for input, and a “compile” button. Once the “compile” button is pressed, the result should be shown in the console.For example: Input:mul 5 sub 2 sum 7 2 9Outputin console should be:•-80•(5 * (2 -(7 + 2 + 9)))What to S
