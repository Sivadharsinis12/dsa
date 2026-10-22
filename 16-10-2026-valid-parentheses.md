# Valid Parentheses

## Problem

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine whether the string is **valid**.

A string is valid if:

- Every opening bracket is closed by the same type of bracket.
- Brackets are closed in the correct order.
- Every closing bracket has a matching opening bracket.

## Examples

```
Input:  s = "()"
Output: true

Input:  s = "()[]{}"
Output: true

Input:  s = "(]"
Output: false

Input:  s = "([)]"
Output: false

Input:  s = "{[]}"
Output: true
```

## Answer 
```
s = "{[{]}"
stack = []
for char in s:
    if char in "({[":
        stack.append(char)
    elif char in ")}]":
        if not stack:
            print(False)
            break
        last = stack.pop()
        if (char == ')' and last != '(') or (char == '}' and last != '{') or (char == ']' and last != '['):
            print(False)
            break
else: 
    print(len(stack) == 0)
```