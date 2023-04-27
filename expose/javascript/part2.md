1. 3
2. 150
3. 150
4. [50, 100, 150]. In each loop of the for loop, finalPrice stores the rounded number of the discountedPrice, which is 50% off of the prices in this case. Since finalPrice was pushed to discounted, it stores a list of 50% off prices.
5. error. "let i = 0" locates inside the for loop, but line 12 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, i is not defined in line 12.
6. error. discountedPrice is declared by let inside the for loop, but line 13 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, discountedPrice is not defined in line 13.
7. 150
8. [50, 100, 150]. In each loop of the for loop, finalPrice stores the rounded number of the discountedPrice, which is 50% off of the prices in this case. Since finalPrice was pushed to discounted, it stores a list of 50% off prices. No let declared variables are called outside of their declared blocks.
9. error. "let i = 0" locates inside the for loop, but line 11 is outside of the for loop. Since variables declared by let can only be acccessed within the block it is defined, i is not defined in line 11.
10. 3
11. [50, 100, 150]. In each loop of the for loop, discountedPrice is 50% off of the prices in this case. Since discountedPrice was pushed to discounted, it stores a list of 50% off prices. We can mutate lists declared by const.
12. alert( student.name );
13. alert( student['Grade Year'] );
