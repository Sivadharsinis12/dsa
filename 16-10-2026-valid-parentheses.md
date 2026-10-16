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
s = "{[]}"
stack =[]

for ch in s:
 if ch =='(' or ch == '{' or ch == '[':
   stack.append(ch)
  else:
    if not stack:
        print(False)
        break
   last = stack.pop()
    if (ch == ')' and last != '(') or \
        (ch == '}' and last != '{' or \
        (ch == ']' and last != '['):
        print(False)
        break
  else:
       print(len(stack) == 0)
        
