# BMI Calculator as Function
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

## 1. Calculate BMI
- Create a function named `calculateBMI`
- It takes two arguments:
  - `weight` (number) and
  - `height` (number)
- It returns the BMI value calculated as below:   
BMI = `weight / ( height / 100 * height / 100 )`
* Make sure to round the output to 2 decimal places

## 2. Compare BMIs
- Create a function named `whoIsBiggest`
- It takes four arguments:
  - two name strings and
  - two bmi numbers
- It returns the name string of the bigger person  

Example:  
`whoIsBiggest("Frank", "Mark", 26.72, 28.33)` => "Mark"

**Bonus**

- Rewrite the **whoIsBiggest** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggest** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggest** function is called)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Calculate BMI

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `calculateBMI` function exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | function accepts 2 arguments |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | function returns the BMI of a person |

### 2. Compare BMIs

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `whoIsBiggest` fuction exists |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | function accepts 4 arguments |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | function returns name of the person with the highest BMI |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-functions-revisit-bmi-calculator)


[//]: # (autograding info end)