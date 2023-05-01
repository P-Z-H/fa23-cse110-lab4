1. 3. Because i will stop increment when i equals or exceeds the length of the array, which is 3. Also, var variable has a function scope.
2. 150. Because the last element in the array times 0.5 = 150. Also, var variable has a function scope.
3. 150. Because 150 times 100 divides by 100 equals 150. Also, var variable has a function scope.
4. [50, 100, 150]. In each loop of the for loop, finalPrice stores the rounded number of the discountedPrice, which is 50% off of the prices in this case. Since finalPrice was pushed to discounted, it stores a list of 50% off prices.
5. error. "let i = 0" locates inside the for loop, but line 12 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, i is not defined in line 12.
6. error. discountedPrice is declared by let inside the for loop, but line 13 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, discountedPrice is not defined in line 13.
7. 150. Because 150 times 100 divides by 100 equals 150. Also, let variable has a block scope.
8. [50, 100, 150]. In each loop of the for loop, finalPrice stores the rounded number of the discountedPrice, which is 50% off of the prices in this case. Since finalPrice was pushed to discounted, it stores a list of 50% off prices. No let declared variables are called outside of their declared blocks.
9. error. "let i = 0" locates inside the for loop, but line 11 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, i is not defined in line 11.
10. 3. Because the length of the array is 3. Also, const variable has a block scope.
11. [50, 100, 150]. In each loop of the for loop, discountedPrice is 50% off of the prices in this case. Since discountedPrice was pushed to discounted, it stores a list of 50% off prices. We can mutate lists declared by const.
12. a. console.log(student.name);
    b. console.log(student['Grad Year']);
    c. student.greeting();
    d. console.log(student['Favorite Teacher'].name);
    e. console.log(student.courseLoad[0]);
13. a. '32' since integers map to their exact string representation.
    b. 1 since string is converted to integer in subtraction.
    c. 3 since null converts to 0 in Arithmetic calculatin.
    d. '3null' since null is treated as a string and thus performs a string concatenation.
    e. 4 since true maps to 1.
    f. 0 since false and null both converts to 0 in Arithmetic calculatin.
    g. '3undefined' since undefined is treated as a string and thus performs a string concatenation.
    h. NaN since we cannot perform such calculation.
14. a. true since string becomes an interger in this comparison.
    b. false since alphabetically 1 is less than 2.
    c. true since string becomes an interger in this comparison.
    d. false since their types are different.
    e. false since true maps to 1 in this comparison.
    f. true since everything with a value is true.
15. == is a regular equality check which automatically perform some type conversions when checking equality. On the other hand, === is a strict equality operator which checks the equality without type conversion.
16. code
17. [2,4,6]. After the function is called, it first created a new list. After that, the callback function is called for each element in the list from parameter, and then the result is pushed into the new list. At last, the new list is returned.
18. code
19. 1 
    4  
    3 
    2
