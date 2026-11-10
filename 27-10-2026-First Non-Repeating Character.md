# First Non-Repeating Character

## Problem
Given a string `s`, find the **first character that does not repeat** anywhere in the string and return its **index**. If every character repeats, return `-1`.

## Examples

```
Input:  s = "leetcode"
Output: 0
Reason: "l" appears only once and is the first such character.

Input:  s = "loveleetcode"
Output: 2
Reason: "l" and "o" both repeat; "v" at index 2 is the first unique one.

Input:  s = "aabb"
Output: -1
Reason: every character repeats.
```

## Your Answer
```python
str  = input()
count=0 
for i in range(len(str)):  
    for j in range(i+1, len(str)):
        if str[i] == str[j]:
          count+=1
          print(count)
        else:
          str[i] == str[j]
          count=(len/2)
          print(-1) 
        else:
          str[i] != str[j]
          print(0)
       
```
