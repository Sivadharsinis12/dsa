# 2026-10-22 · Easy

## Best Time to Buy and Sell Stock

### Problem

You are given an array `prices` where `prices[i]` is the price of a stock on day `i`.

You want to maximize your profit by choosing **one day to buy** and a **different day in the future to sell**.

Return the maximum profit you can achieve. If no profit is possible, return `0`.

### Examples

```
Input:  prices = [7, 1, 5, 3, 6, 4]
Output: 5
Why:    Buy on day 2 (price = 1), sell on day 5 (price = 6). Profit = 6 - 1 = 5.

Input:  prices = [7, 6, 4, 3, 1]
Output: 0
Why:    Prices only go down, so no profitable trade exists.
```

## Answer

```python
prices= [7,1,5,3,6,4];
max = 0
min = prices[0]
for i in range(len(prices)):
if prices[i]<min:
   min = prices[i]
   profit = prices[i] - min
if profit > max:
   max = profit
print(max)
