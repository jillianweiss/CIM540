# Calculating the number of years until retirement.

## I've created a calculator where the user enters their age and the program performs a function on the input and returns how far away (in years) the user is away from retiring. 


### Input: age of user
### Output: message telling the user how many years until they can retire

### First, I obtain the age of the user through a text input form . The user clicks on the button to submit their age, which triggers the function that evidently calculates the their distance (in years) from retirement. The function takes the input (string) and converts it to an integer in order to work with it and perform math using it. Next, the age is subtracted from the average retirement age in the US, which is 63. This calculation produces the amount of time until retirement. This number is returned to the user on the document in a message stating, "You only have __ many years to go until retirement!"