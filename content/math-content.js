const MATH_LESSON_CONTENT = {
  "Double-Digit Addition": {
    page1: "In this lesson, you will learn to add two two-digit numbers together, like 23 + 45, without any regrouping needed.",
    page2: "Double-digit addition means adding numbers made of tens and ones. You add the ones digits together, then add the tens digits together, keeping each place value separate.",
    page3: "The rule is: line up the numbers by place value, add the ones column first, then add the tens column, and combine the results.",
    page4: "Let's solve 23 + 45. Step 1: Add the ones: 3 + 5 = 8. Step 2: Add the tens: 2 + 4 = 6 (tens), which is 60. Step 3: Combine: 60 + 8 = 68.",
    page5: "Now let's solve 31 + 26. Step 1: Add the ones: 1 + 6 = 7. Step 2: Add the tens: 3 + 2 = 5 (tens), which is 50. Step 3: Combine: 50 + 7 = 57.",
    page6: "A helpful trick: always add the ones column first, and if the sum of ones is under 10, you won't need to worry about carrying anything to the tens.",
    page7: "You learned to add two-digit numbers by adding the ones column, then the tens column, and combining the results, as in 23 + 45 = 68."
  },
  "Double-Digit Subtraction": {
    page1: "In this lesson, you will learn to subtract one two-digit number from another, like 58 - 23, without any regrouping needed.",
    page2: "Double-digit subtraction means subtracting numbers made of tens and ones. You subtract the ones digits first, then the tens digits, keeping place value separate.",
    page3: "The rule is: line up the numbers by place value, subtract the ones column first, then subtract the tens column, and combine the results.",
    page4: "Let's solve 58 - 23. Step 1: Subtract the ones: 8 - 3 = 5. Step 2: Subtract the tens: 5 - 2 = 3 (tens), which is 30. Step 3: Combine: 30 + 5 = 35.",
    page5: "Now let's solve 79 - 34. Step 1: Subtract the ones: 9 - 4 = 5. Step 2: Subtract the tens: 7 - 3 = 4 (tens), which is 40. Step 3: Combine: 40 + 5 = 45.",
    page6: "A helpful trick: this works smoothly whenever the top ones digit is bigger than or equal to the bottom ones digit — no borrowing needed.",
    page7: "You learned to subtract two-digit numbers by subtracting the ones column, then the tens column, as in 58 - 23 = 35."
  },
  "Regrouping in Addition": {
    page1: "Sometimes adding the ones column gives you a number bigger than 9. In this lesson, you will learn to regroup, or carry, in addition.",
    page2: "Regrouping means that when the ones digits add up to 10 or more, you write down the ones part and carry a group of ten over to the tens column.",
    page3: "The rule is: add the ones column. If the sum is 10 or more, write the ones digit of that sum, and add 1 to the tens column for the carried ten.",
    page4: "Let's solve 27 + 15. Step 1: Add the ones: 7 + 5 = 12. Step 2: Write down 2, carry the 1 ten. Step 3: Add the tens: 2 + 1 + 1(carried) = 4. Answer: 42.",
    page5: "Now let's solve 38 + 46. Step 1: Add the ones: 8 + 6 = 14. Step 2: Write down 4, carry 1. Step 3: Add tens: 3 + 4 + 1 = 8. Answer: 84.",
    page6: "A helpful trick: whenever your ones sum is 10 or higher, remember 'write the ones, carry the tens' — that little carried 1 always goes into the next column.",
    page7: "You learned to regroup in addition by carrying a ten to the tens column whenever the ones digits add up to 10 or more, as in 27 + 15 = 42."
  },
  "Regrouping in Subtraction": {
    page1: "Sometimes the top ones digit is smaller than the bottom ones digit. In this lesson, you will learn to regroup, or borrow, in subtraction.",
    page2: "Regrouping in subtraction means borrowing a group of ten from the tens column when the ones column doesn't have enough to subtract.",
    page3: "The rule is: if the top ones digit is smaller than the bottom ones digit, borrow 1 ten from the tens column (making it 10 more in the ones place), then subtract.",
    page4: "Let's solve 42 - 17. Step 1: Ones: 2 is smaller than 7, so borrow. Step 2: Borrow 1 ten: ones become 12, tens become 3. Step 3: 12-7=5, 3-1=2. Answer: 25.",
    page5: "Now let's solve 63 - 28. Step 1: Ones: 3 is smaller than 8, so borrow. Step 2: Ones become 13, tens become 5. Step 3: 13-8=5, 5-2=3. Answer: 35.",
    page6: "A helpful trick: whenever the top digit is smaller than the bottom digit in a column, that's your signal to borrow from the column to its left.",
    page7: "You learned to regroup in subtraction by borrowing a ten from the tens column whenever the ones column doesn't have enough, as in 42 - 17 = 25."
  },
  "Arithmetic Word Problems": {
    page1: "In this lesson, you will solve real-world word problems that use addition and subtraction with two-digit numbers.",
    page2: "Word problems describe a real situation and ask you to find an answer using math. You must figure out whether to add or subtract based on the story.",
    page3: "The rule is: look for clue words — 'in all', 'total', 'together' mean addition; 'left', 'remain', 'fewer' mean subtraction. Then solve using the numbers given.",
    page4: "Let's solve: 'A store has 45 apples. They sell 18. How many are left?' Step 1: Clue word 'left' means subtract. Step 2: 45 - 18 = 27. Step 3: 27 apples are left.",
    page5: "Now let's solve: 'Maya read 24 pages Monday and 19 pages Tuesday. How many pages in all?' Step 1: 'In all' means add. Step 2: 24 + 19 = 43. Step 3: 43 pages in all.",
    page6: "A helpful trick: underline the numbers and circle the clue word before doing any math — this keeps you from choosing the wrong operation.",
    page7: "You learned to solve arithmetic word problems by identifying clue words and using addition or subtraction with two-digit numbers."
  },
  "Understanding Hundreds": {
    page1: "In this lesson, you will learn about the hundreds place, which represents groups of 100.",
    page2: "The hundreds place is the third digit from the right in a number. It tells you how many groups of 100 are in that number. For example, in 342, there are 3 hundreds.",
    page3: "The rule is: the hundreds digit multiplied by 100 tells you its value. A '3' in the hundreds place is worth 300, not just 3.",
    page4: "Let's find the value of the hundreds digit in 456. Step 1: The hundreds digit is 4. Step 2: Multiply by 100: 4 x 100 = 400. Step 3: The hundreds digit is worth 400.",
    page5: "Now let's find the value in 219. Step 1: The hundreds digit is 2. Step 2: 2 x 100 = 200. Step 3: The hundreds digit is worth 200.",
    page6: "A helpful trick: 100 of anything is like 10 groups of 10 — picture ten full ten-frames stacked together to visualize one hundred.",
    page7: "You learned that the hundreds place represents groups of 100, and its value equals the digit multiplied by 100."
  },
  "Hundreds, Tens, and Ones": {
    page1: "In this lesson, you will learn to read three-digit numbers by breaking them into hundreds, tens, and ones.",
    page2: "A three-digit number is made of hundreds, tens, and ones. For example, 356 has 3 hundreds, 5 tens, and 6 ones.",
    page3: "The rule is: the first digit (from the left) is hundreds, the second is tens, and the third is ones. Add their values together to get the whole number.",
    page4: "Let's break down 274. Step 1: Hundreds digit is 2, worth 200. Step 2: Tens digit is 7, worth 70. Step 3: Ones digit is 4, worth 4. Total: 200+70+4=274.",
    page5: "Now let's break down 508. Step 1: Hundreds digit is 5, worth 500. Step 2: Tens digit is 0, worth 0. Step 3: Ones digit is 8, worth 8. Total: 500+0+8=508.",
    page6: "A helpful trick: even a 0 in the tens or ones place matters — it holds that place value, showing there's nothing there, like in 508.",
    page7: "You learned to read three-digit numbers as hundreds, tens, and ones, and to add their place values to find the total."
  },
  "Comparing Three-Digit Numbers": {
    page1: "In this lesson, you will learn to compare three-digit numbers using the symbols <, >, and =.",
    page2: "To compare three-digit numbers, you check the hundreds digit first, then the tens digit, then the ones digit, moving left to right until you find a difference.",
    page3: "The rule is: compare hundreds digits first. If they're equal, compare tens digits. If those are equal too, compare ones digits.",
    page4: "Let's compare 342 and 298. Step 1: Compare hundreds: 3 vs 2. Step 2: 3 is bigger than 2. Step 3: So 342 > 298.",
    page5: "Now let's compare 456 and 461. Step 1: Hundreds match: 4 and 4. Step 2: Compare tens: 5 vs 6. Step 3: 6 is bigger, so 456 < 461.",
    page6: "A helpful trick: always compare from the leftmost digit — the first place where the digits differ tells you which number is bigger.",
    page7: "You learned to compare three-digit numbers using <, >, and = by comparing hundreds, then tens, then ones digits from left to right."
  },
  "Skip Counting by 5s & 10s": {
    page1: "In this lesson, you will practice skip counting by 5s and by 10s, all the way up to 1000.",
    page2: "Skip counting by 5s means adding 5 each time: 5, 10, 15, 20... Skip counting by 10s means adding 10 each time: 10, 20, 30, 40...",
    page3: "The rule is: for 5s, each number ends in either 0 or 5. For 10s, each number always ends in 0.",
    page4: "Let's skip count by 5s from 20. Step 1: Start at 20. Step 2: Add 5: 25. Step 3: Add 5: 30. The pattern continues: 20, 25, 30, 35...",
    page5: "Now let's skip count by 10s from 150. Step 1: Start at 150. Step 2: Add 10: 160. Step 3: Add 10: 170. The pattern continues: 150, 160, 170, 180...",
    page6: "A helpful trick: skip counting by 10s is the fastest way to count large groups quickly, like counting stacks of ten toys at a time.",
    page7: "You learned to skip count by 5s (ending in 0 or 5) and by 10s (always ending in 0), up to 1000."
  },
  "Skip Counting by 100s": {
    page1: "In this lesson, you will practice skip counting by 100s, all the way up to 1000.",
    page2: "Skip counting by 100s means adding 100 each time: 100, 200, 300, 400, and so on, up to 1000.",
    page3: "The rule is: start at 100, and keep adding 100 to get the next number, watching the hundreds digit go up by 1 each time.",
    page4: "Let's skip count by 100s. Step 1: Start at 100. Step 2: Add 100: 200. Step 3: Add 100: 300. The pattern continues: 100, 200, 300...1000.",
    page5: "Let's fill in a missing number: 400, 500, __, 700. Step 1: Each number is 100 more than the last. Step 2: After 500 comes 500+100=600. Step 3: The missing number is 600.",
    page6: "A helpful trick: when skip counting by 100s, only the hundreds digit changes — the tens and ones digits always stay 0.",
    page7: "You learned that skip counting by 100s means adding 100 each time: 100, 200, 300... all the way to 1000."
  },
  "Measuring in Inches": {
    page1: "In this lesson, you will learn to measure objects using an inch ruler.",
    page2: "An inch is a unit of length used in the United States. A ruler has inch marks, usually numbered 1 through 12, that you use to measure how long something is.",
    page3: "The rule is: line up one end of the object with the '0' mark on the ruler, then read the number at the other end to find the length in inches.",
    page4: "Let's measure a crayon. Step 1: Line up the crayon's end with 0. Step 2: Look at where the other end lands — at the 4 mark. Step 3: The crayon is 4 inches long.",
    page5: "Now let's measure a book. Step 1: Line up one edge with 0. Step 2: The other edge lands at 9. Step 3: The book is 9 inches long.",
    page6: "A helpful trick: always start measuring from the '0' mark, not the very edge of the ruler — some rulers have extra space before the 0.",
    page7: "You learned to measure objects in inches by lining up the object with the 0 mark and reading the number at the other end."
  },
  "Measuring in Centimeters": {
    page1: "In this lesson, you will learn to measure objects using a centimeter ruler.",
    page2: "A centimeter is a metric unit of length, smaller than an inch. A ruler has centimeter marks, often numbered up to 30, used to measure length.",
    page3: "The rule is: line up one end of the object with the '0' mark on the ruler, then read the number at the other end to find the length in centimeters.",
    page4: "Let's measure a pencil. Step 1: Line up the pencil's end with 0. Step 2: The other end lands at 15. Step 3: The pencil is 15 centimeters long.",
    page5: "Now let's measure a small toy. Step 1: Line up one edge with 0. Step 2: The other edge lands at 8. Step 3: The toy is 8 centimeters long.",
    page6: "A helpful trick: a centimeter is about the width of your pinky finger's nail — a small unit good for measuring smaller objects precisely.",
    page7: "You learned to measure objects in centimeters by lining them up with the 0 mark on a centimeter ruler and reading the length."
  },
  "Comparing Lengths": {
    page1: "In this lesson, you will find the difference in length between two objects by subtracting their measurements.",
    page2: "When you know the length of two objects, you can find how much longer one is than the other by subtracting the smaller length from the bigger one.",
    page3: "The rule is: measure both objects, then subtract the shorter length from the longer length to find the difference.",
    page4: "Let's compare a 12-inch ruler and an 8-inch marker. Step 1: Longer is 12, shorter is 8. Step 2: Subtract: 12 - 8 = 4. Step 3: The ruler is 4 inches longer.",
    page5: "Now let's compare a 25 cm rope and a 17 cm string. Step 1: Longer is 25, shorter is 17. Step 2: Subtract: 25 - 17 = 8. Step 3: The rope is 8 centimeters longer.",
    page6: "A helpful trick: always subtract the smaller number from the bigger number when finding a difference — the answer should never be negative.",
    page7: "You learned to find the difference in length between two objects by subtracting the shorter measurement from the longer one."
  },
  "Estimating Lengths": {
    page1: "In this lesson, you will practice estimating lengths in inches and centimeters without measuring exactly.",
    page2: "Estimating means making a smart guess about a length based on familiar objects you already know the size of, rather than measuring precisely.",
    page3: "The rule is: compare the object to something you know the length of, like your finger (about 1 inch) or your hand span, to make a reasonable estimate.",
    page4: "Let's estimate the length of a pencil. Step 1: A pencil is a bit longer than your hand. Step 2: Your hand is about 7 inches. Step 3: Estimate: about 7-8 inches.",
    page5: "Now let's estimate the length of a paperclip. Step 1: A paperclip is small. Step 2: It's about the width of your finger. Step 3: Estimate: about 3 centimeters.",
    page6: "A helpful trick: keep a few 'reference objects' in mind, like your finger (1 inch) or your foot (about 12 inches), to compare against when estimating.",
    page7: "You learned to estimate lengths by comparing objects to familiar reference sizes, without needing to measure exactly."
  },
  "Measurement Word Problems": {
    page1: "In this lesson, you will solve addition and subtraction word problems that involve lengths.",
    page2: "Measurement word problems describe lengths in a story and ask you to combine or compare them using addition or subtraction.",
    page3: "The rule is: read the story, identify the lengths given, and use clue words to decide whether to add or subtract.",
    page4: "Let's solve: 'A ribbon is 14 inches long. Another is 9 inches long. How much longer is the first ribbon?' Step 1: Numbers are 14 and 9. Step 2: 'How much longer' means subtract. Step 3: 14 - 9 = 5 inches.",
    page5: "Now let's solve: 'A rope is 25 cm. Another rope is 18 cm. What is their total length?' Step 1: Numbers are 25 and 18. Step 2: 'Total' means add. Step 3: 25 + 18 = 43 cm.",
    page6: "A helpful trick: measurement word problems use the same clue words as regular addition/subtraction stories — just with a length unit attached to the answer.",
    page7: "You learned to solve measurement word problems by identifying the lengths given and adding or subtracting based on the question."
  },
  "Telling Time: Five Minutes": {
    page1: "In this lesson, you will learn to tell time to the nearest 5 minutes using an analog clock.",
    page2: "An analog clock's minute hand moves around 12 marks, and each mark represents 5 minutes. Counting these marks tells you the exact minutes past the hour.",
    page3: "The rule is: count by 5s around the clock face starting from 12, following the minute hand, to find how many minutes past the hour it is.",
    page4: "Let's read a clock with the minute hand on the 3. Step 1: Count by 5s from 12: 5(at 1), 10(at 2), 15(at 3). Step 2: The minute hand at 3 means 15 minutes.",
    page5: "Now let's read a clock with the minute hand on the 7. Step 1: Count by 5s: 5,10,15,20,25,30,35(at 7). Step 2: The minute hand at 7 means 35 minutes.",
    page6: "A helpful trick: memorize that each number on the clock face equals 5 minutes — number 6 always means 30 minutes, number 9 always means 45 minutes.",
    page7: "You learned to tell time to the nearest 5 minutes by counting by 5s around the clock face using the minute hand's position."
  },
  "A.M. vs. P.M.": {
    page1: "In this lesson, you will learn the difference between A.M. (morning) and P.M. (evening) time.",
    page2: "A.M. stands for the hours from midnight to just before noon (morning). P.M. stands for the hours from noon to just before midnight (afternoon and evening).",
    page3: "The rule is: if an event happens before noon, it's A.M. If it happens at noon or after, up until midnight, it's P.M.",
    page4: "Let's check 'I eat breakfast at 7:00.' Step 1: Breakfast happens in the morning. Step 2: Before noon means A.M. Step 3: The time is 7:00 A.M.",
    page5: "Now let's check 'I eat dinner at 6:00.' Step 1: Dinner happens in the evening. Step 2: After noon means P.M. Step 3: The time is 6:00 P.M.",
    page6: "A helpful trick: think of A.M. as 'after midnight' (the first half of the day) and P.M. as 'past midday' (the second half of the day).",
    page7: "You learned that A.M. refers to the morning hours before noon, and P.M. refers to the afternoon and evening hours after noon."
  },
  "Counting Pennies & Nickels": {
    page1: "In this lesson, you will learn to calculate the total value of a group of pennies and nickels.",
    page2: "A penny is worth 1 cent. A nickel is worth 5 cents. To find the total value of a mix of coins, you add up each coin's worth.",
    page3: "The rule is: count nickels first by skip counting by 5, then add 1 for each penny remaining.",
    page4: "Let's count 3 nickels and 2 pennies. Step 1: Skip count nickels: 5, 10, 15. Step 2: Add pennies: 15+1+1=17. Step 3: The total is 17 cents.",
    page5: "Now let's count 2 nickels and 4 pennies. Step 1: Skip count nickels: 5, 10. Step 2: Add pennies: 10+1+1+1+1=14. Step 3: The total is 14 cents.",
    page6: "A helpful trick: always count the higher-value coins first using skip counting, then add the pennies one at a time at the end.",
    page7: "You learned to calculate the total value of pennies (1 cent) and nickels (5 cents) by skip counting and adding."
  },
  "Counting Dimes & Quarters": {
    page1: "In this lesson, you will learn to calculate the total value of a group of dimes and quarters.",
    page2: "A dime is worth 10 cents. A quarter is worth 25 cents. To find the total value, you add up each coin's worth.",
    page3: "The rule is: count quarters first by skip counting by 25, then count dimes by skip counting by 10, and add them together.",
    page4: "Let's count 2 quarters and 3 dimes. Step 1: Skip count quarters: 25, 50. Step 2: Skip count dimes: 10, 20, 30. Step 3: Total: 50+30=80 cents.",
    page5: "Now let's count 1 quarter and 2 dimes. Step 1: Quarter: 25. Step 2: Dimes: 10, 20. Step 3: Total: 25+20=45 cents.",
    page6: "A helpful trick: quarters are the biggest coin value here, so always count them first, then work down to dimes.",
    page7: "You learned to calculate the total value of dimes (10 cents) and quarters (25 cents) by skip counting and adding."
  },
  "Solving Money Problems": {
    page1: "In this lesson, you will solve word problems involving dollars and coins.",
    page2: "Money word problems ask you to add, subtract, or compare amounts of money, often involving both dollars and cents.",
    page3: "The rule is: read the story, identify the money amounts, and use the clue words to decide whether to add or subtract.",
    page4: "Let's solve: 'Ben has 45 cents. He finds 30 more cents. How much does he have now?' Step 1: Numbers are 45 and 30. Step 2: 'Now' with 'finds more' means add. Step 3: 45 + 30 = 75 cents.",
    page5: "Now let's solve: 'A toy costs 60 cents. Mia has 90 cents. How much change does she get?' Step 1: Numbers are 90 and 60. Step 2: 'Change' means subtract. Step 3: 90 - 60 = 30 cents.",
    page6: "A helpful trick: treat cents just like any other two or three-digit number in addition and subtraction problems, just remember the 'cents' label.",
    page7: "You learned to solve money word problems by identifying the amounts and using addition or subtraction based on the story."
  },
  "Recognizing Shapes": {
    page1: "In this lesson, you will learn to identify triangles, quadrilaterals, pentagons, and hexagons by counting their sides.",
    page2: "Each shape's name tells you how many sides it has: a triangle has 3, a quadrilateral has 4, a pentagon has 5, and a hexagon has 6.",
    page3: "The rule is: count the straight sides of a shape, then match that number to its shape name.",
    page4: "Let's identify a shape with 4 sides. Step 1: Count the sides — 4. Step 2: Match to the name. Step 3: A 4-sided shape is a quadrilateral.",
    page5: "Now let's identify a shape with 5 sides. Step 1: Count the sides — 5. Step 2: Match to the name. Step 3: A 5-sided shape is a pentagon.",
    page6: "A helpful trick: 'quad' means 4, 'penta' means 5, and 'hexa' means 6 — these number prefixes appear in lots of other words too, like 'quadruplets' (4 babies).",
    page7: "You learned to identify triangles (3 sides), quadrilaterals (4 sides), pentagons (5 sides), and hexagons (6 sides) by counting sides."
  },
  "Counting Faces & Vertices": {
    page1: "In this lesson, you will learn to count the faces, edges, and vertices of 3D shapes.",
    page2: "A face is a flat surface on a 3D shape. An edge is where two faces meet in a line. A vertex is a corner point where edges meet.",
    page3: "The rule is: carefully look at each flat surface (face), each line where two surfaces meet (edge), and each corner point (vertex), and count them separately.",
    page4: "Let's count for a cube. Step 1: Faces — 6 flat squares. Step 2: Edges — 12 lines. Step 3: Vertices — 8 corners.",
    page5: "Now let's count for a rectangular prism (like a box). Step 1: Faces — 6 flat rectangles. Step 2: Edges — 12 lines. Step 3: Vertices — 8 corners.",
    page6: "A helpful trick: hold a real 3D object, like a box, and physically touch each face, trace each edge, and point to each vertex as you count.",
    page7: "You learned to count the faces (flat surfaces), edges (lines), and vertices (corners) of 3D shapes like cubes and prisms."
  },
  "Halves & Thirds": {
    page1: "In this lesson, you will learn to partition circles and rectangles into two or three equal shares, called halves and thirds.",
    page2: "Halves means splitting a shape into 2 equal parts. Thirds means splitting a shape into 3 equal parts. Each part must be the exact same size.",
    page3: "The rule is: divide the shape so that every resulting piece is exactly the same size — 2 equal pieces for halves, 3 equal pieces for thirds.",
    page4: "Let's split a rectangle into halves. Step 1: Draw one line down the middle. Step 2: Check the two pieces are equal size. Step 3: Each piece is one half.",
    page5: "Now let's split a circle into thirds. Step 1: Draw three lines from the center, evenly spaced. Step 2: Check all three pieces are equal size. Step 3: Each piece is one third.",
    page6: "A helpful trick: thirds are trickier to draw evenly than halves — try folding paper or using a protractor to help space the three parts evenly.",
    page7: "You learned to partition shapes into halves (2 equal parts) and thirds (3 equal parts)."
  },
  "Fourths & Quarters": {
    page1: "In this lesson, you will learn to partition shapes into four equal shares, called fourths or quarters.",
    page2: "Fourths (also called quarters) means splitting a shape into 4 equal parts. Each part represents one out of four equal pieces of the whole.",
    page3: "The rule is: divide the shape into 4 pieces that are all exactly the same size — often by halving the shape twice.",
    page4: "Let's split a square into fourths. Step 1: Cut it in half with one line. Step 2: Cut it in half again the other direction. Step 3: You now have 4 equal pieces.",
    page5: "Now let's split a circle into fourths. Step 1: Cut it in half through the center. Step 2: Cut it in half again, crossing the first line. Step 3: You have 4 equal pie-slice pieces.",
    page6: "A helpful trick: fourths are made by halving a shape twice — first into 2 halves, then each half into 2 more equal pieces.",
    page7: "You learned to partition shapes into fourths (or quarters): 4 equal parts made by halving a shape twice."
  },
  "Equal Shares Review": {
    page1: "In this lesson, you will review and compare equal parts of identical whole shapes.",
    page2: "When two identical shapes are divided into the same number of equal parts, each part from either shape is the same size.",
    page3: "The rule is: if two identical shapes are split into the same number of equal pieces, you can compare their parts directly since they match in size.",
    page4: "Let's compare two identical squares, one split into halves and one into fourths. Step 1: Halves pieces are bigger (1/2 each). Step 2: Fourths pieces are smaller (1/4 each). Step 3: A half is bigger than a fourth.",
    page5: "Now let's compare two identical circles, both split into thirds. Step 1: Both circles have 3 equal pieces. Step 2: Each piece from either circle is the same size. Step 3: The pieces are equal.",
    page6: "A helpful trick: the MORE pieces a whole is divided into, the SMALLER each individual piece becomes — thirds are bigger than fourths, and fourths are bigger than sixths.",
    page7: "You reviewed comparing equal parts of identical wholes, learning that more pieces means smaller individual shares."
  },
  "Double-Digit Practice": {
    page1: "In this lesson, you will review and practice addition and subtraction of two-digit numbers within 100.",
    page2: "This lesson combines everything you've learned: adding and subtracting two-digit numbers, both with and without regrouping.",
    page3: "The rule is: line up numbers by place value, work through the ones column first, then the tens column, regrouping (carrying or borrowing) as needed.",
    page4: "Let's solve 56 + 27. Step 1: Ones: 6+7=13, write 3 carry 1. Step 2: Tens: 5+2+1=8. Step 3: Answer: 83.",
    page5: "Now let's solve 82 - 39. Step 1: Ones: 2 is smaller than 9, borrow. Ones become 12, tens become 7. Step 2: 12-9=3, 7-3=4. Step 3: Answer: 43.",
    page6: "A helpful trick: always check whether regrouping is needed before you start — look at the ones column first to plan your approach.",
    page7: "You practiced addition and subtraction of two-digit numbers within 100, using regrouping when necessary."
  },
  "Place Value Challenge": {
    page1: "In this lesson, you will review place value and practice comparing multi-digit numbers.",
    page2: "This lesson combines skills: reading numbers by their hundreds, tens, and ones, and comparing two numbers using <, >, and =.",
    page3: "The rule is: break numbers into place values first, then compare digit by digit from left to right to determine which is greater.",
    page4: "Let's compare 385 and 358. Step 1: Hundreds match: 3 and 3. Step 2: Compare tens: 8 vs 5. Step 3: 8 is bigger, so 385 > 358.",
    page5: "Now let's break down and order 214, 241, 142. Step 1: Compare hundreds digits: 2,2,1. Step 2: 142 is smallest. Step 3: Compare 214 and 241 tens: 1<4, so order is 142, 214, 241.",
    page6: "A helpful trick: when comparing several numbers at once, sort them by hundreds digit first, then break ties using the tens digit.",
    page7: "You reviewed place value and practiced comparing and ordering multi-digit numbers using their hundreds, tens, and ones."
  },
  "Measurement Explorer": {
    page1: "In this lesson, you will review estimating and measuring lengths using inches and centimeters.",
    page2: "This lesson combines skills: measuring objects with a ruler and making smart estimates for lengths without measuring exactly.",
    page3: "The rule is: use a ruler for exact measurements, and use reference objects (like your finger or hand) for quick estimates.",
    page4: "Let's measure and check an estimate. Step 1: Estimate a pencil is about 7 inches. Step 2: Measure with a ruler — it's 7 inches. Step 3: The estimate was accurate!",
    page5: "Now let's compare two measured lengths: a 14 cm marker and a 9 cm eraser. Step 1: Measure both. Step 2: Subtract: 14-9=5. Step 3: The marker is 5 cm longer.",
    page6: "A helpful trick: practicing estimation before measuring helps you build a strong sense of size, which makes you faster at measuring later.",
    page7: "You reviewed both estimating and precisely measuring lengths using inches and centimeters."
  },
  "Time & Money Practice": {
    page1: "In this lesson, you will review telling time to 5 minutes and counting coins like nickels, dimes, and quarters.",
    page2: "This lesson combines two important skills: reading an analog clock's minute hand, and adding up the value of different coins.",
    page3: "The rule is: for time, count by 5s around the clock face. For money, count the highest-value coins first, then add the rest.",
    page4: "Let's read a clock showing the minute hand at the 8. Step 1: Count by 5s: 5,10,...,40. Step 2: The minute hand at 8 means 40 minutes.",
    page5: "Now let's count 1 quarter, 1 dime, and 2 pennies. Step 1: Quarter=25. Step 2: Dime=10. Step 3: Pennies=2. Total: 25+10+2=37 cents.",
    page6: "A helpful trick: both telling time and counting money rely on skip counting — practicing one skill helps strengthen the other.",
    page7: "You reviewed telling time to the nearest 5 minutes and counting combinations of coins."
  },
  "Geometry Mastery": {
    page1: "In this lesson, you will review shapes, their attributes, and how to partition them into equal parts.",
    page2: "This lesson combines skills: identifying 2D and 3D shapes by their sides, faces, and vertices, and splitting shapes into halves, thirds, and fourths.",
    page3: "The rule is: use side/face counts to identify shapes, and use even divisions to create equal shares like halves, thirds, and fourths.",
    page4: "Let's identify and partition a square. Step 1: It has 4 equal sides — a quadrilateral. Step 2: Split it in half with one line. Step 3: Each piece is 1/2 of the square.",
    page5: "Now let's identify a cube and count its parts. Step 1: It has 6 faces, 12 edges, 8 vertices. Step 2: All faces are squares. Step 3: It is a cube.",
    page6: "A helpful trick: whenever you review geometry, go back to basics — count sides for 2D shapes and count faces/edges/vertices for 3D shapes.",
    page7: "You reviewed identifying shapes by their attributes and partitioning shapes into equal parts like halves, thirds, and fourths."
  }
  ,"Multiplication Concepts": {
    page1: "In this lesson, you will learn what multiplication means: putting together equal groups to find a total, interpreted as products of whole numbers.",
    page2: "Multiplication is repeated addition of equal groups. 3 x 4 means 3 groups of 4, which is the same as 4+4+4.",
    page3: "The rule is: the first number tells you how many groups, and the second number tells you how many are in each group. Multiply them to find the total.",
    page4: "Let's solve 3 x 4. Step 1: This means 3 groups of 4. Step 2: Add them: 4+4+4. Step 3: 4+4+4=12, so 3 x 4 = 12.",
    page5: "Now let's solve 5 x 2. Step 1: This means 5 groups of 2. Step 2: Add them: 2+2+2+2+2. Step 3: The sum is 10, so 5 x 2 = 10.",
    page6: "A helpful trick: draw the groups as circles with dots inside — it helps you see the repeated addition that multiplication represents.",
    page7: "You learned that multiplication means combining equal groups, and that 3 x 4 = 12 represents 3 groups of 4."
  },
  "Division Concepts": {
    page1: "In this lesson, you will learn what division means: splitting a total into equal groups, interpreted as whole-number quotients.",
    page2: "Division is the opposite of multiplication. It splits a total amount into equal-sized groups, or finds how many groups of a certain size fit into a total.",
    page3: "The rule is: the first number is the total, and the second number is either the group size or the number of groups — divide to find the missing piece.",
    page4: "Let's solve 12 ÷ 3. Step 1: We have 12 total, split into 3 equal groups. Step 2: 12 ÷ 3 asks 'how many in each group?' Step 3: 12 ÷ 3 = 4, so each group has 4.",
    page5: "Now let's solve 15 ÷ 5. Step 1: We have 15 total, split into groups of 5. Step 2: 15 ÷ 5 asks 'how many groups?' Step 3: 15 ÷ 5 = 3 groups.",
    page6: "A helpful trick: division and multiplication are opposites — if you know 3 x 4 = 12, then you also know 12 ÷ 3 = 4 and 12 ÷ 4 = 3.",
    page7: "You learned that division means splitting a total into equal groups, and that 12 ÷ 3 = 4 means 12 split into 3 groups gives 4 in each."
  },
  "Multiplication to 100": {
    page1: "In this lesson, you will practice multiplying and dividing numbers within 100, building fluency with basic facts.",
    page2: "Multiplying and dividing within 100 means using facts like 6 x 7 = 42 or 56 ÷ 8 = 7, where all the numbers involved stay under 100.",
    page3: "The rule is: memorize key multiplication facts (like the times tables) so you can quickly multiply or divide without counting each time.",
    page4: "Let's solve 7 x 8. Step 1: Recall the fact from memory or build it: 7 groups of 8. Step 2: 7 x 8 = 56. Step 3: The answer is 56.",
    page5: "Now let's solve 63 ÷ 9. Step 1: Think 'what times 9 equals 63?' Step 2: 9 x 7 = 63. Step 3: So 63 ÷ 9 = 7.",
    page6: "A helpful trick: practice your times tables from 1-10 regularly — knowing them by heart makes multiplying and dividing within 100 much faster.",
    page7: "You practiced multiplying and dividing within 100 using memorized facts, like 7 x 8 = 56 and 63 ÷ 9 = 7."
  },
  "Properties of Multiplication": {
    page1: "In this lesson, you will learn two important properties of multiplication: the commutative property and the associative property.",
    page2: "The commutative property means you can multiply numbers in any order and get the same answer, like 3 x 4 = 4 x 3. The associative property means you can group numbers differently when multiplying three or more, like (2x3)x4 = 2x(3x4).",
    page3: "The rule is: order doesn't matter (commutative), and grouping doesn't matter (associative) — the product stays the same either way.",
    page4: "Let's check 3 x 4 and 4 x 3. Step 1: 3 x 4 = 12. Step 2: 4 x 3 = 12. Step 3: Both equal 12, showing the commutative property.",
    page5: "Now let's check (2x3)x4 and 2x(3x4). Step 1: (2x3)x4 = 6x4 = 24. Step 2: 2x(3x4) = 2x12 = 24. Step 3: Both equal 24, showing the associative property.",
    page6: "A helpful trick: if a multiplication problem looks hard in one order, try flipping it or regrouping it — the properties guarantee you'll still get the right answer.",
    page7: "You learned the commutative property (order doesn't matter) and the associative property (grouping doesn't matter) of multiplication."
  },
  "Arithmetic Patterns": {
    page1: "In this lesson, you will learn to identify arithmetic patterns in number tables, like multiplication tables.",
    page2: "An arithmetic pattern is a predictable rule that connects numbers in a sequence or table, like each number being 3 more than the last.",
    page3: "The rule is: look at the differences or relationships between numbers in the table to find the repeating rule.",
    page4: "Let's find the pattern in 3, 6, 9, 12. Step 1: Check the differences: 6-3=3, 9-6=3, 12-9=3. Step 2: Each number increases by 3. Step 3: The rule is 'add 3 each time'.",
    page5: "Now let's find the pattern in a multiplication table's 4s row: 4, 8, 12, 16. Step 1: Differences are all 4. Step 2: The rule is 'add 4 each time', matching multiples of 4.",
    page6: "A helpful trick: multiplication tables are full of patterns — the 5s column always ends in 0 or 5, and the 10s column always ends in 0.",
    page7: "You learned to identify arithmetic patterns in tables by finding the consistent rule connecting each number to the next."
  },
  "Fractions Intro": {
    page1: "In this lesson, you will get an introduction to fractions, learning that a fraction represents equal parts of a whole.",
    page2: "A fraction has two parts: the numerator (top number), which tells how many parts you have, and the denominator (bottom number), which tells how many equal parts the whole is divided into.",
    page3: "The rule is: to understand a fraction like 3/4, the whole is split into 4 equal parts (denominator), and you have 3 of them (numerator).",
    page4: "Let's understand 1/2. Step 1: The denominator is 2 — the whole is split into 2 equal parts. Step 2: The numerator is 1 — you have 1 of those parts. Step 3: 1/2 means one of two equal parts.",
    page5: "Now let's understand 3/4. Step 1: Denominator 4 — split into 4 equal parts. Step 2: Numerator 3 — you have 3 of them. Step 3: 3/4 means three of four equal parts.",
    page6: "A helpful trick: the denominator tells you the size of the pieces (bigger denominator = smaller pieces), and the numerator tells you how many pieces you have.",
    page7: "You learned that a fraction represents equal parts of a whole, with a numerator (parts you have) and denominator (total equal parts)."
  },
  "Fractions on Number Line": {
    page1: "In this lesson, you will learn to represent fractions on a number line diagram.",
    page2: "A number line can be divided into equal parts between 0 and 1 to show fractions, just like it shows whole numbers.",
    page3: "The rule is: divide the space between 0 and 1 into as many equal parts as the denominator, then count over by the numerator to find the fraction's location.",
    page4: "Let's place 3/4 on a number line. Step 1: Divide the space from 0 to 1 into 4 equal parts. Step 2: Count over 3 parts from 0. Step 3: That point represents 3/4.",
    page5: "Now let's place 1/3 on a number line. Step 1: Divide 0 to 1 into 3 equal parts. Step 2: Count over 1 part from 0. Step 3: That point represents 1/3.",
    page6: "A helpful trick: the fraction 1 (like 4/4 or 3/3) always lands exactly on the number 1 on the number line — a useful checkpoint.",
    page7: "You learned to represent fractions on a number line by dividing the space between 0 and 1 into equal parts matching the denominator."
  },
  "Equivalent Fractions": {
    page1: "In this lesson, you will learn to recognize and generate equivalent fractions — fractions that look different but represent the same amount.",
    page2: "Equivalent fractions have different numerators and denominators but represent the same value, like 1/2 and 2/4, which both mean 'half'.",
    page3: "The rule is: multiply or divide both the numerator and denominator by the same number to create an equivalent fraction.",
    page4: "Let's find a fraction equivalent to 1/2. Step 1: Multiply top and bottom by 2. Step 2: 1x2=2, 2x2=4. Step 3: 1/2 = 2/4, an equivalent fraction.",
    page5: "Now let's find one equivalent to 2/3. Step 1: Multiply top and bottom by 3. Step 2: 2x3=6, 3x3=9. Step 3: 2/3 = 6/9, an equivalent fraction.",
    page6: "A helpful trick: as long as you do the SAME multiplication or division to both the top and bottom number, the fraction's value never changes.",
    page7: "You learned that equivalent fractions represent the same amount and can be found by multiplying or dividing the numerator and denominator by the same number."
  },
  "Comparing Fractions": {
    page1: "In this lesson, you will learn to compare two fractions that share the same numerator or the same denominator.",
    page2: "When fractions share a denominator, the one with the bigger numerator is greater. When fractions share a numerator, the one with the smaller denominator is greater (since the pieces are bigger).",
    page3: "The rule is: if denominators match, compare numerators directly. If numerators match, the fraction with the smaller denominator is bigger.",
    page4: "Let's compare 3/8 and 5/8. Step 1: Denominators match (8). Step 2: Compare numerators: 3 vs 5. Step 3: 5 is bigger, so 5/8 > 3/8.",
    page5: "Now let's compare 1/3 and 1/5. Step 1: Numerators match (1). Step 2: Compare denominators: 3 vs 5 — smaller denominator means bigger pieces. Step 3: 1/3 > 1/5.",
    page6: "A helpful trick: imagine slicing a pizza — cutting it into 3 pieces (thirds) gives bigger slices than cutting it into 5 pieces (fifths).",
    page7: "You learned to compare fractions with the same denominator (bigger numerator wins) or the same numerator (smaller denominator wins)."
  },
  "Fractions of a Group": {
    page1: "In this lesson, you will learn to find a fraction of a set of objects, like finding 1/3 of 12 apples.",
    page2: "Finding a fraction of a group means splitting the whole group into equal parts (based on the denominator) and taking the number of parts shown by the numerator.",
    page3: "The rule is: divide the total group size by the denominator to find the size of each part, then multiply by the numerator.",
    page4: "Let's find 1/3 of 12. Step 1: Divide 12 by the denominator 3: 12÷3=4. Step 2: Multiply by numerator 1: 4x1=4. Step 3: 1/3 of 12 is 4.",
    page5: "Now let's find 2/5 of 15. Step 1: Divide 15 by denominator 5: 15÷5=3. Step 2: Multiply by numerator 2: 3x2=6. Step 3: 2/5 of 15 is 6.",
    page6: "A helpful trick: always divide by the denominator FIRST to find the size of one part, then multiply by the numerator to get your final answer.",
    page7: "You learned to find a fraction of a group by dividing the total by the denominator, then multiplying by the numerator."
  },
  "Telling Time: Minute": {
    page1: "In this lesson, you will learn to tell time to the nearest minute using an analog clock.",
    page2: "Telling time to the minute means reading the exact position of the minute hand between the 5-minute marks, counting each individual minute.",
    page3: "The rule is: find the nearest 5-minute mark before the minute hand, then count each additional minute mark one at a time.",
    page4: "Let's read a clock where the minute hand is 3 marks past the 2 (which is 10 minutes). Step 1: The 2 mark = 10 minutes. Step 2: Count 3 more: 11, 12, 13. Step 3: The time shows 13 minutes past the hour.",
    page5: "Now let's read a clock where the minute hand is 2 marks past the 6 (30 minutes). Step 1: The 6 mark = 30 minutes. Step 2: Count 2 more: 31, 32. Step 3: The time shows 32 minutes past the hour.",
    page6: "A helpful trick: count by 5s to the nearest number first, then count by 1s the rest of the way — this is much faster than counting every single minute from 0.",
    page7: "You learned to tell time to the nearest minute by combining counting by 5s and counting by 1s on an analog clock."
  },
  "Elapsed Time": {
    page1: "In this lesson, you will learn to measure elapsed time — how many minutes pass between a start time and an end time.",
    page2: "Elapsed time is the amount of time that passes during an activity. You find it by figuring out the difference between the start and end times.",
    page3: "The rule is: count forward from the start time to the end time, in minutes, to find how much time elapsed.",
    page4: "Let's find the elapsed time from 2:00 to 2:45. Step 1: Start at 2:00. Step 2: Count forward to 2:45. Step 3: That's 45 minutes elapsed.",
    page5: "Now let's find the elapsed time from 3:15 to 3:50. Step 1: Start at 3:15. Step 2: Count forward to 3:50. Step 3: That's 35 minutes elapsed.",
    page6: "A helpful trick: count up to the next easy landmark first (like the next hour or half hour), then add the remaining minutes — it's faster than counting one by one.",
    page7: "You learned to measure elapsed time by counting the minutes between a start time and an end time."
  },
  "Liquid Volume & Mass": {
    page1: "In this lesson, you will learn to measure and estimate liquid volumes and masses using standard units.",
    page2: "Liquid volume tells you how much liquid something holds, measured in liters or milliliters. Mass tells you how heavy something is, measured in grams or kilograms.",
    page3: "The rule is: use liters (L) for larger liquid amounts and milliliters (mL) for smaller ones; use kilograms (kg) for heavier objects and grams (g) for lighter ones.",
    page4: "Let's estimate the volume of a water bottle. Step 1: A water bottle holds a medium amount of liquid. Step 2: This is best measured in liters. Step 3: Estimate: about 1 liter.",
    page5: "Now let's estimate the mass of a paperclip. Step 1: A paperclip is very light. Step 2: This is best measured in grams. Step 3: Estimate: about 1 gram.",
    page6: "A helpful trick: think of a liter as a big water bottle, and a kilogram as about the weight of a textbook — these help you estimate quickly.",
    page7: "You learned to measure and estimate liquid volume (liters/milliliters) and mass (kilograms/grams) using standard units."
  },
  "Bar Graphs & Pictographs": {
    page1: "In this lesson, you will learn to draw scaled picture graphs (pictographs) and bar graphs to show data.",
    page2: "A pictograph uses pictures or symbols to represent data, where each picture might stand for more than one item (a scale). A bar graph uses bars to show the same kind of data.",
    page3: "The rule is: choose a scale (like 1 picture = 2 items), then draw the correct number of pictures or bar height for each category based on the data.",
    page4: "Let's make a pictograph where 1 star = 2 apples, and there are 6 apples. Step 1: 6 apples ÷ 2 per star = 3 stars. Step 2: Draw 3 stars. Step 3: This shows 6 apples.",
    page5: "Now let's make a bar graph where 'dogs' = 8. Step 1: Choose a scale, like each line = 1 unit. Step 2: Draw a bar reaching up to 8. Step 3: The bar shows 8 dogs.",
    page6: "A helpful trick: always check the scale/key first before reading a pictograph — a picture might represent more than 1 item.",
    page7: "You learned to draw scaled pictographs (using a picture-to-amount scale) and bar graphs to represent data."
  },
  "Line Plots": {
    page1: "In this lesson, you will learn to generate measurement data and display it on a line plot.",
    page2: "A line plot is a number line where you place an X or dot above each data value to show how many times that value occurs.",
    page3: "The rule is: draw a number line covering your data's range, then place one mark above the line for each piece of data at its matching value.",
    page4: "Let's plot these pencil lengths: 4, 4, 5, 6 inches. Step 1: Draw a number line from 4 to 6. Step 2: Place 2 marks above 4 (since it appears twice). Step 3: Place 1 mark each above 5 and 6.",
    page5: "Now let's plot these shoe sizes: 3, 3, 3, 4. Step 1: Draw a number line from 3 to 4. Step 2: Place 3 marks above 3. Step 3: Place 1 mark above 4.",
    page6: "A helpful trick: a line plot makes it easy to see at a glance which value appears most often — just look for the tallest stack of marks.",
    page7: "You learned to generate measurement data and display it on a line plot, with each mark representing one data point."
  },
  "Understanding Area": {
    page1: "In this lesson, you will learn to measure area by counting unit squares that cover a flat shape.",
    page2: "Area tells you how much flat space a shape covers. One way to measure it is by counting how many equal-sized unit squares fit inside the shape.",
    page3: "The rule is: count every unit square that completely fills the inside of the shape — the total count is the area in square units.",
    page4: "Let's find the area of a rectangle covered by 12 unit squares. Step 1: Count all the squares inside. Step 2: There are 12. Step 3: The area is 12 square units.",
    page5: "Now let's find the area of a shape covered by 8 unit squares. Step 1: Count the squares. Step 2: There are 8. Step 3: The area is 8 square units.",
    page6: "A helpful trick: area is always measured in 'square units' (like square inches or square centimeters), never just plain units like length.",
    page7: "You learned to measure area by counting the unit squares that completely cover a flat shape."
  },
  "Area of Rectangles": {
    page1: "In this lesson, you will learn to find the area of a rectangle by multiplying its side lengths.",
    page2: "Instead of counting every unit square one by one, you can find a rectangle's area faster by multiplying its length by its width.",
    page3: "The rule is: Area = length x width. Multiply the two side lengths of the rectangle to get the area in square units.",
    page4: "Let's find the area of a rectangle 5 units long and 3 units wide. Step 1: Length=5, width=3. Step 2: Multiply: 5x3=15. Step 3: The area is 15 square units.",
    page5: "Now let's find the area of a rectangle 8 units long and 4 units wide. Step 1: Length=8, width=4. Step 2: Multiply: 8x4=32. Step 3: The area is 32 square units.",
    page6: "A helpful trick: this formula, Area = length x width, works for ANY rectangle, no matter how big — it's much faster than counting every square.",
    page7: "You learned to find the area of a rectangle by multiplying its length by its width: Area = length x width."
  },
  "Distributive Area": {
    page1: "In this lesson, you will learn to use area models to represent the distributive property of multiplication.",
    page2: "The distributive property lets you break a big multiplication problem into smaller, easier pieces by splitting one of the rectangle's sides.",
    page3: "The rule is: split a rectangle's length into two parts, find the area of each smaller rectangle, and add them together to get the total area.",
    page4: "Let's solve 6 x 7 using distribution. Step 1: Split 7 into 5+2. Step 2: 6x5=30 and 6x2=12. Step 3: Add: 30+12=42, same as 6x7=42.",
    page5: "Now let's solve 8 x 9. Step 1: Split 9 into 5+4. Step 2: 8x5=40 and 8x4=32. Step 3: Add: 40+32=72, same as 8x9=72.",
    page6: "A helpful trick: splitting a number into a multiple of 5 or 10 plus the leftover makes the smaller multiplications much easier to solve in your head.",
    page7: "You learned to use area models to represent the distributive property, breaking multiplication into easier smaller pieces that add up to the same total."
  },
  "Understanding Perimeter": {
    page1: "In this lesson, you will learn to find the perimeter of polygons by adding up all their side lengths.",
    page2: "Perimeter is the total distance around the outside of a shape. You find it by adding together the lengths of every side.",
    page3: "The rule is: add up the length of every single side of the polygon to get the total perimeter.",
    page4: "Let's find the perimeter of a rectangle with sides 5, 3, 5, 3. Step 1: Add all sides: 5+3+5+3. Step 2: 5+3=8, 8+5=13, 13+3=16. Step 3: The perimeter is 16 units.",
    page5: "Now let's find the perimeter of a triangle with sides 4, 6, 7. Step 1: Add all sides: 4+6+7. Step 2: 4+6=10, 10+7=17. Step 3: The perimeter is 17 units.",
    page6: "A helpful trick: for a rectangle, since opposite sides are equal, you can use the shortcut Perimeter = 2 x (length + width) instead of adding all 4 sides.",
    page7: "You learned to find the perimeter of a polygon by adding up the lengths of all its sides."
  },
  "Area vs. Perimeter": {
    page1: "In this lesson, you will compare rectangles that have the same perimeter but different areas.",
    page2: "Two rectangles can have the exact same perimeter (distance around) but cover very different amounts of space (area) — these are two different measurements.",
    page3: "The rule is: calculate area (length x width) and perimeter (sum of all sides) separately for each rectangle — they don't have to match or relate directly.",
    page4: "Let's compare a 6x2 rectangle and a 4x4 rectangle. Step 1: Perimeter of 6x2: 2(6+2)=16. Step 2: Perimeter of 4x4: 2(4+4)=16 — same! Step 3: Area of 6x2=12, area of 4x4=16 — different!",
    page5: "Now let's compare a 5x3 and a 7x1 rectangle. Step 1: Perimeter of 5x3: 2(5+3)=16. Step 2: Perimeter of 7x1: 2(7+1)=16 — same! Step 3: Area of 5x3=15, area of 7x1=7 — very different!",
    page6: "A helpful trick: a shape closer to a square usually has a bigger area than a long skinny shape with the same perimeter.",
    page7: "You learned that rectangles can share the same perimeter while having very different areas, showing these are two separate measurements."
  },
  "Categorizing Shapes": {
    page1: "In this lesson, you will learn to classify shapes by their side lengths and angles.",
    page2: "Shapes can be grouped by features like whether their sides are equal length, whether their angles are right angles (90 degrees), or how many sides they have.",
    page3: "The rule is: examine each shape's sides (equal or unequal) and angles (right, acute, or obtuse) to sort it into the correct category.",
    page4: "Let's categorize a shape with 4 equal sides and 4 right angles. Step 1: Check sides — all equal. Step 2: Check angles — all right angles. Step 3: This is a square.",
    page5: "Now let's categorize a shape with 3 sides of different lengths. Step 1: Check sides — all unequal. Step 2: This is a scalene triangle.",
    page6: "A helpful trick: a right angle looks exactly like the corner of a piece of paper — use a corner of paper to check if an angle is a right angle.",
    page7: "You learned to classify shapes by examining their side lengths (equal or unequal) and their angles (right, acute, or obtuse)."
  },
  "Understanding Quadrilaterals": {
    page1: "In this lesson, you will learn to identify different types of quadrilaterals: rhombuses, rectangles, and squares.",
    page2: "A quadrilateral is any 4-sided shape. A rectangle has 4 right angles. A rhombus has 4 equal sides. A square is special — it has both 4 equal sides AND 4 right angles.",
    page3: "The rule is: check the angles first (are they all right angles?), then check the sides (are they all equal?) to determine the specific type.",
    page4: "Let's identify a shape with 4 equal sides but no right angles. Step 1: Sides equal — yes. Step 2: Right angles — no. Step 3: This is a rhombus (not a square).",
    page5: "Now let's identify a shape with 4 right angles but unequal sides. Step 1: Right angles — yes. Step 2: Sides equal — no. Step 3: This is a rectangle (not a square).",
    page6: "A helpful trick: every square is both a rectangle AND a rhombus, but not every rectangle or rhombus is a square — squares are the special overlap of both.",
    page7: "You learned to identify rhombuses (equal sides), rectangles (right angles), and squares (both equal sides and right angles)."
  },
  "Partitioning Shapes": {
    page1: "In this lesson, you will learn to partition shapes into parts with equal areas, even when the parts look different in shape.",
    page2: "Sometimes you can divide a shape into pieces that look different but still have the exact same area — equal space, even if not identical shape.",
    page3: "The rule is: check that each part covers the same amount of space (area), not just that the pieces look the same shape.",
    page4: "Let's split a square into 4 equal-area triangles. Step 1: Draw both diagonals of the square. Step 2: This creates 4 triangles. Step 3: Each triangle has the same area, 1/4 of the square.",
    page5: "Now let's split a rectangle into 2 equal-area pieces using a diagonal line. Step 1: Draw one diagonal. Step 2: This creates 2 triangles. Step 3: Each triangle has the same area, 1/2 of the rectangle.",
    page6: "A helpful trick: a diagonal line through a rectangle or square always creates two triangles of exactly equal area, even though they're a different shape than the original.",
    page7: "You learned to partition shapes into equal-area parts, even when the resulting pieces have a different shape than the whole."
  },
  "Symmetry in Shapes": {
    page1: "In this lesson, you will learn to identify lines of symmetry in 2D shapes.",
    page2: "A shape has a line of symmetry if you can fold it along that line and both halves match up perfectly, like a mirror image.",
    page3: "The rule is: imagine folding the shape along a line — if both sides match exactly, that line is a line of symmetry.",
    page4: "Let's check a square. Step 1: Fold it in half straight down the middle. Step 2: Both halves match. Step 3: This is a line of symmetry (a square actually has 4).",
    page5: "Now let's check a heart shape. Step 1: Fold it straight down the middle. Step 2: Both halves match. Step 3: This is a line of symmetry.",
    page6: "A helpful trick: try physically folding a paper cutout of the shape — if the edges line up perfectly, you've found a real line of symmetry.",
    page7: "You learned to identify lines of symmetry in shapes by checking if folding along a line creates two matching halves."
  },
  "Three-Dimensional Shapes": {
    page1: "In this lesson, you will learn to identify 3D shapes: spheres, prisms, and cylinders.",
    page2: "A sphere is perfectly round like a ball. A prism has two matching flat ends connected by flat rectangular sides, like a box. A cylinder has two flat circle ends connected by a curved side, like a can.",
    page3: "The rule is: check the shape's ends and sides — round all over means sphere, flat matching ends with flat sides means prism, flat circle ends with a curved side means cylinder.",
    page4: "Let's identify a shape with two flat rectangle ends. Step 1: Check the ends — flat rectangles. Step 2: Check the sides — flat. Step 3: This is a rectangular prism.",
    page5: "Now let's identify a shape with two flat circle ends and a curved side. Step 1: Ends — flat circles. Step 2: Side — curved. Step 3: This is a cylinder.",
    page6: "A helpful trick: prisms are named after the shape of their matching ends — a rectangular prism has rectangle ends, a triangular prism has triangle ends.",
    page7: "You learned to identify spheres (round), prisms (flat matching ends), and cylinders (circle ends with a curved side)."
  },
  "Multiplication Review": {
    page1: "In this lesson, you will review multiplication and division concepts learned so far.",
    page2: "This review combines your understanding of what multiplication and division mean, along with fluency in facts up to 100.",
    page3: "The rule is: use repeated addition or grouping to understand multiplication, and use the inverse relationship to understand division.",
    page4: "Let's solve 6 x 9. Step 1: This means 6 groups of 9. Step 2: Recall or calculate: 6x9=54. Step 3: The answer is 54.",
    page5: "Now let's solve 72 ÷ 8. Step 1: Think 'what times 8 equals 72?' Step 2: 8x9=72. Step 3: So 72÷8=9.",
    page6: "A helpful trick: multiplication and division facts are connected — practicing one strengthens your memory of the other.",
    page7: "You reviewed multiplication and division concepts, including repeated addition, grouping, and fact fluency."
  },
  "Fractions Review": {
    page1: "In this lesson, you will review fraction representation and comparison skills.",
    page2: "This review combines understanding what a fraction represents, placing fractions on a number line, and comparing fractions by numerator or denominator.",
    page3: "The rule is: remember that a fraction shows equal parts of a whole, and compare fractions by checking shared numerators or denominators.",
    page4: "Let's compare 2/6 and 4/6. Step 1: Denominators match (6). Step 2: Compare numerators: 2 vs 4. Step 3: 4/6 is greater.",
    page5: "Now let's place 2/5 on a number line. Step 1: Divide 0 to 1 into 5 equal parts. Step 2: Count over 2 parts. Step 3: That point represents 2/5.",
    page6: "A helpful trick: always double check whether the denominators or numerators match before comparing — that tells you which comparison rule to use.",
    page7: "You reviewed fraction representation, placement on a number line, and comparison strategies."
  },
  "Measurement Review": {
    page1: "In this lesson, you will review telling time, liquid volume, and mass.",
    page2: "This review combines reading a clock to the minute, and measuring or estimating liquid volume (liters/milliliters) and mass (kilograms/grams).",
    page3: "The rule is: use clock-reading skills for time, and use appropriate units (L/mL for liquid, kg/g for mass) based on the size of what you're measuring.",
    page4: "Let's read a clock showing 4:22. Step 1: The hour hand is between 4 and 5. Step 2: The minute hand shows 22 minutes. Step 3: The time is 4:22.",
    page5: "Now let's estimate the mass of a bicycle. Step 1: A bicycle is fairly heavy. Step 2: Best measured in kilograms. Step 3: Estimate: about 10 kilograms.",
    page6: "A helpful trick: always match your unit to the size of the object — small things use milliliters/grams, and big things use liters/kilograms.",
    page7: "You reviewed telling time to the minute and measuring/estimating liquid volume and mass."
  },
  "Area & Perimeter Review": {
    page1: "In this lesson, you will review calculating area and perimeter of rectangles and polygons.",
    page2: "This review combines finding area (length x width) and perimeter (sum of all sides), and understanding that they measure different things.",
    page3: "The rule is: use Area = length x width for area, and add up all side lengths for perimeter — remember these give different kinds of information.",
    page4: "Let's find the area and perimeter of a 6x4 rectangle. Step 1: Area: 6x4=24 square units. Step 2: Perimeter: 2(6+4)=20 units. Step 3: Area=24, Perimeter=20.",
    page5: "Now let's find the area and perimeter of a 5x5 square. Step 1: Area: 5x5=25 square units. Step 2: Perimeter: 4x5=20 units. Step 3: Area=25, Perimeter=20.",
    page6: "A helpful trick: area is always in 'square units' while perimeter is always in plain 'units' — the labels help you remember which is which.",
    page7: "You reviewed calculating both area and perimeter for rectangles and other polygons."
  },
  "Geometry Review": {
    page1: "In this lesson, you will review quadrilaterals, partitioning shapes, and symmetry.",
    page2: "This review combines identifying types of quadrilaterals (squares, rectangles, rhombuses), splitting shapes into equal-area parts, and finding lines of symmetry.",
    page3: "The rule is: check sides and angles to classify quadrilaterals, check equal area (not just equal shape) for partitioning, and check for matching halves for symmetry.",
    page4: "Let's classify a shape with 4 equal sides and 4 right angles, then find its symmetry. Step 1: Equal sides + right angles = square. Step 2: A square has 4 lines of symmetry.",
    page5: "Now let's partition a rectangle into 2 equal-area triangles. Step 1: Draw a diagonal line. Step 2: This creates 2 triangles. Step 3: Each has equal area, 1/2 of the rectangle.",
    page6: "A helpful trick: when reviewing geometry, work through each skill separately first (classify, then partition, then symmetry) before combining them.",
    page7: "You reviewed classifying quadrilaterals, partitioning shapes into equal areas, and identifying lines of symmetry."
  }
  ,"Factors & Multiples": {
    page1: "In this lesson, you will learn to find all the factor pairs for a whole number within 100.",
    page2: "A factor is a number that divides evenly into another number with no remainder. A multiple is what you get when you multiply a number by a whole number.",
    page3: "The rule is: to find factor pairs, test which numbers divide evenly into your target number, starting from 1 and working up.",
    page4: "Let's find the factor pairs of 12. Step 1: Test 1 — 1x12=12. Step 2: Test 2 — 2x6=12. Step 3: Test 3 — 3x4=12. Factor pairs: (1,12),(2,6),(3,4).",
    page5: "Now let's find the factor pairs of 18. Step 1: 1x18=18. Step 2: 2x9=18. Step 3: 3x6=18. Factor pairs: (1,18),(2,9),(3,6).",
    page6: "A helpful trick: you only need to test numbers up to the square root of your target — once your test numbers start repeating pairs, you've found them all.",
    page7: "You learned to find factor pairs by testing which numbers divide evenly into a target number, like the pairs (1,12),(2,6),(3,4) for 12."
  },
  "Prime & Composite": {
    page1: "In this lesson, you will learn to determine whether a whole number is prime or composite.",
    page2: "A prime number has exactly 2 factors: 1 and itself, like 7 (only 1x7=7). A composite number has more than 2 factors, like 8 (1x8, 2x4).",
    page3: "The rule is: list all the factors of a number. If there are only 2 (1 and the number itself), it's prime. If there are more, it's composite.",
    page4: "Let's check 11. Step 1: Test factors — only 1x11=11 works. Step 2: Only 2 factors: 1 and 11. Step 3: 11 is prime.",
    page5: "Now let's check 9. Step 1: Test factors — 1x9=9 and 3x3=9. Step 2: Factors are 1, 3, 9 — more than 2. Step 3: 9 is composite.",
    page6: "A helpful trick: every even number greater than 2 is composite, since it's always divisible by 2 in addition to 1 and itself.",
    page7: "You learned to determine if a number is prime (exactly 2 factors) or composite (more than 2 factors)."
  },
  "Multi-Digit Addition": {
    page1: "In this lesson, you will learn to fluently add multi-digit whole numbers using the standard algorithm.",
    page2: "The standard algorithm for addition means lining up numbers by place value and adding column by column from right to left, carrying when needed.",
    page3: "The rule is: add the ones column first, then tens, then hundreds, and so on, carrying a 1 to the next column whenever a column's sum reaches 10 or more.",
    page4: "Let's solve 1,847 + 2,956. Step 1: Ones: 7+6=13, write 3 carry 1. Step 2: Tens: 4+5+1=10, write 0 carry 1. Step 3: Hundreds: 8+9+1=18, write 8 carry 1. Step 4: Thousands: 1+2+1=4. Answer: 4,803.",
    page5: "Now let's solve 3,265 + 1,478. Step 1: Ones: 5+8=13, write 3 carry 1. Step 2: Tens: 6+7+1=14, write 4 carry 1. Step 3: Hundreds: 2+4+1=7. Step 4: Thousands: 3+1=4. Answer: 4,743.",
    page6: "A helpful trick: work through the columns methodically from right to left, and always double-check you carried correctly before moving to the next column.",
    page7: "You learned to fluently add multi-digit numbers using the standard algorithm, carrying between columns as needed."
  },
  "Multi-Digit Subtraction": {
    page1: "In this lesson, you will learn to fluently subtract multi-digit whole numbers using the standard algorithm.",
    page2: "The standard algorithm for subtraction means lining up numbers by place value and subtracting column by column from right to left, borrowing when needed.",
    page3: "The rule is: subtract the ones column first, then tens, then hundreds, borrowing from the next column to the left whenever the top digit is too small.",
    page4: "Let's solve 5,432 - 1,876. Step 1: Ones: 2 is smaller than 6, borrow: 12-6=6. Step 2: Tens: 2(after borrow) is smaller than 7, borrow: 12-7=5. Step 3: Hundreds: 3(after borrow)-8, borrow: 13-8=5. Step 4: Thousands: 4(after borrow)-1=3. Answer: 3,556.",
    page5: "Now let's solve 6,203 - 3,145. Step 1: Ones: 3 is smaller than 5, borrow: 13-5=8. Step 2: Tens: 9(after borrow)-4=5. Step 3: Hundreds: 1-1=1. Step 4: Thousands: 6-3=3. Answer: 3,058.",
    page6: "A helpful trick: when a digit is 0 and you need to borrow from it, you must borrow from the column even further left first — this can cause a chain of borrowing.",
    page7: "You learned to fluently subtract multi-digit numbers using the standard algorithm, borrowing between columns as needed."
  },
  "Multiplication: 4-by-1": {
    page1: "In this lesson, you will learn to multiply four-digit numbers by one-digit numbers.",
    page2: "Multiplying a four-digit number by a one-digit number means multiplying each place value (ones, tens, hundreds, thousands) by that single digit, carrying as needed.",
    page3: "The rule is: multiply the one-digit number by each digit of the four-digit number, starting from the ones place, and carry any extra tens to the next column.",
    page4: "Let's solve 2,134 x 3. Step 1: Ones: 4x3=12, write 2 carry 1. Step 2: Tens: 3x3=9+1=10, write 0 carry 1. Step 3: Hundreds: 1x3=3+1=4. Step 4: Thousands: 2x3=6. Answer: 6,402.",
    page5: "Now let's solve 1,523 x 4. Step 1: Ones: 3x4=12, write 2 carry 1. Step 2: Tens: 2x4=8+1=9. Step 3: Hundreds: 5x4=20, write 0 carry 2. Step 4: Thousands: 1x4=4+2=6. Answer: 6,092.",
    page6: "A helpful trick: multiply one column at a time, right to left, exactly like multi-digit addition — the carrying process works the same way.",
    page7: "You learned to multiply four-digit numbers by one-digit numbers, carrying extra tens between place-value columns."
  },
  "Understanding Place Value": {
    page1: "In this lesson, you will learn that a digit represents ten times what it represents in the place to its right.",
    page2: "Each place value in a number is 10 times bigger than the place to its right. The tens place is 10 times the ones place, and the hundreds place is 10 times the tens place.",
    page3: "The rule is: moving one place to the left in a number always multiplies the value by 10.",
    page4: "Let's compare the 3s in 300 and 30. Step 1: In 300, the 3 is in the hundreds place, worth 300. Step 2: In 30, the 3 is in the tens place, worth 30. Step 3: 300 is 10 times 30.",
    page5: "Now let's compare the 5s in 5,000 and 500. Step 1: In 5,000, the 5 is worth 5,000. Step 2: In 500, the 5 is worth 500. Step 3: 5,000 is 10 times 500.",
    page6: "A helpful trick: every time you add a zero to the end of a whole number, you're multiplying it by 10 — that's this place value pattern in action.",
    page7: "You learned that each place value is 10 times the value of the place to its right, a key pattern in our number system."
  },
  "Multi-Digit Numbers": {
    page1: "In this lesson, you will learn to read, write, and compare multi-digit whole numbers.",
    page2: "Multi-digit numbers can have many places: ones, tens, hundreds, thousands, and beyond. Reading them correctly means grouping digits by place value.",
    page3: "The rule is: break large numbers into groups of three digits (using commas) from the right, and read each group by its place value name.",
    page4: "Let's read 45,672. Step 1: Group: 45,672. Step 2: Read the thousands group: 'forty-five thousand'. Step 3: Read the rest: 'six hundred seventy-two'. Full: 'forty-five thousand, six hundred seventy-two'.",
    page5: "Now let's compare 34,521 and 34,512. Step 1: Compare digit by digit from the left. Step 2: They match until the tens place: 2 vs 1. Step 3: 34,521 > 34,512.",
    page6: "A helpful trick: commas in large numbers mark off groups of three digits, which matches how we say numbers out loud — thousands, then hundreds.",
    page7: "You learned to read, write, and compare multi-digit whole numbers by using place value groups."
  },
  "Rounding Whole Numbers": {
    page1: "In this lesson, you will learn to round multi-digit whole numbers to any place value.",
    page2: "Rounding means finding the nearest 'friendly' number at a chosen place value, like rounding 47 to the nearest ten (50).",
    page3: "The rule is: look at the digit right after the place you're rounding to. If it's 5 or more, round up. If it's 4 or less, round down (keep the same).",
    page4: "Let's round 483 to the nearest hundred. Step 1: Look at the tens digit: 8. Step 2: Since 8 is 5 or more, round up. Step 3: 483 rounds to 500.",
    page5: "Now let's round 2,341 to the nearest thousand. Step 1: Look at the hundreds digit: 3. Step 2: Since 3 is less than 5, round down. Step 3: 2,341 rounds to 2,000.",
    page6: "A helpful trick: rounding down means the digits after your rounding place all become 0; rounding up bumps your rounding digit up by 1 and then zeros out the rest.",
    page7: "You learned to round multi-digit whole numbers to any place value by checking the digit right after that place."
  },
  "Multi-Digit Division": {
    page1: "In this lesson, you will learn to divide four-digit numbers by one-digit divisors.",
    page2: "Dividing a four-digit number by a one-digit number means working through the number place by place, from left to right, dividing and bringing down remainders.",
    page3: "The rule is: divide the leftmost digits by the divisor, write the quotient digit, multiply back, subtract, and bring down the next digit — repeat until done.",
    page4: "Let's solve 3,648 ÷ 4. Step 1: 36÷4=9, write 9. Step 2: Bring down 4: 4÷4=1. Step 3: Bring down 8: 8÷4=2. Answer: 912.",
    page5: "Now let's solve 2,556 ÷ 3. Step 1: 25÷3=8 remainder 1, write 8. Step 2: Bring down 5, making 15: 15÷3=5. Step 3: Bring down 6: 6÷3=2. Answer: 852.",
    page6: "A helpful trick: this process is called 'long division' — always work left to right, one digit of the quotient at a time, staying organized in columns.",
    page7: "You learned to divide four-digit numbers by one-digit divisors using long division, working left to right."
  },
  "Remainder Word Problems": {
    page1: "In this lesson, you will solve division word problems that result in remainders.",
    page2: "A remainder is the amount left over after dividing when the numbers don't divide evenly. Word problems sometimes need you to interpret what to do with that remainder.",
    page3: "The rule is: divide the numbers, and then decide based on the story whether to round the answer up, round down, or report the remainder itself.",
    page4: "Let's solve: '23 kids need vans that hold 5 each. How many vans are needed?' Step 1: 23÷5=4 remainder 3. Step 2: The leftover 3 kids still need a van. Step 3: Round up: 5 vans are needed.",
    page5: "Now let's solve: '23 cookies split evenly among 5 friends. How many whole cookies does each get?' Step 1: 23÷5=4 remainder 3. Step 2: The story only asks for whole cookies. Step 3: Each friend gets 4 whole cookies.",
    page6: "A helpful trick: always reread the question after dividing — 'how many are needed' usually means round up, while 'how many whole' usually means round down.",
    page7: "You learned to solve remainder word problems by dividing and then interpreting the remainder based on what the story is asking."
  },
  "Adding Fractions": {
    page1: "In this lesson, you will learn to add and subtract fractions that have the same (like) denominators.",
    page2: "When fractions share the same denominator, you can add or subtract them by just adding or subtracting the numerators, keeping the denominator the same.",
    page3: "The rule is: add or subtract only the numerators when the denominators match, and keep the denominator unchanged in your answer.",
    page4: "Let's solve 2/7 + 3/7. Step 1: Denominators match (7). Step 2: Add numerators: 2+3=5. Step 3: The answer is 5/7.",
    page5: "Now let's solve 5/8 - 2/8. Step 1: Denominators match (8). Step 2: Subtract numerators: 5-2=3. Step 3: The answer is 3/8.",
    page6: "A helpful trick: never add or change the denominator when adding fractions with like denominators — only the numerators change.",
    page7: "You learned to add and subtract fractions with like denominators by combining the numerators and keeping the denominator the same."
  },
  "Mixed Numbers": {
    page1: "In this lesson, you will learn to add and subtract mixed numbers that have like denominators.",
    page2: "A mixed number combines a whole number and a fraction, like 2 1/3. To add or subtract mixed numbers, you work with the whole numbers and fraction parts separately.",
    page3: "The rule is: add or subtract the whole numbers together, then add or subtract the fraction parts together (with matching denominators), and combine the results.",
    page4: "Let's solve 2 1/4 + 1 2/4. Step 1: Add whole numbers: 2+1=3. Step 2: Add fractions: 1/4+2/4=3/4. Step 3: Combine: 3 3/4.",
    page5: "Now let's solve 4 3/5 - 1 1/5. Step 1: Subtract whole numbers: 4-1=3. Step 2: Subtract fractions: 3/5-1/5=2/5. Step 3: Combine: 3 2/5.",
    page6: "A helpful trick: if the fraction parts don't fit evenly (like adding up to more than a whole), you may need to regroup a whole number into the fraction part.",
    page7: "You learned to add and subtract mixed numbers by working with whole numbers and fraction parts separately, then combining them."
  },
  "Multiplying Fractions": {
    page1: "In this lesson, you will learn to multiply a fraction by a whole number.",
    page2: "Multiplying a fraction by a whole number means repeating that fraction the number of times shown by the whole number, similar to repeated addition.",
    page3: "The rule is: multiply the fraction's numerator by the whole number, and keep the denominator the same.",
    page4: "Let's solve 3 x 2/5. Step 1: Multiply the numerator: 3 x 2 = 6. Step 2: Keep the denominator: 5. Step 3: The answer is 6/5, or 1 1/5.",
    page5: "Now let's solve 4 x 1/3. Step 1: Multiply the numerator: 4 x 1 = 4. Step 2: Keep the denominator: 3. Step 3: The answer is 4/3, or 1 1/3.",
    page6: "A helpful trick: think of 3 x 2/5 as adding 2/5 three times: 2/5+2/5+2/5 — multiplying is just a faster way to do the same repeated addition.",
    page7: "You learned to multiply a fraction by a whole number by multiplying the numerator and keeping the denominator the same."
  },
  "Fractions to Decimals": {
    page1: "In this lesson, you will learn to express a fraction with a denominator of 10 or 100 as a decimal.",
    page2: "A fraction with a denominator of 10 or 100 can be written directly as a decimal, since our decimal system is also based on tens and hundreds.",
    page3: "The rule is: if the denominator is 10, the numerator becomes the digit right after the decimal point. If it's 100, the numerator fills the first two decimal places.",
    page4: "Let's convert 7/10. Step 1: Denominator is 10. Step 2: The numerator 7 goes right after the decimal point. Step 3: 7/10 = 0.7.",
    page5: "Now let's convert 45/100. Step 1: Denominator is 100. Step 2: The numerator 45 fills two decimal places. Step 3: 45/100 = 0.45.",
    page6: "A helpful trick: the number of zeros in the denominator (10 or 100) tells you how many digits go after the decimal point (1 or 2).",
    page7: "You learned to convert fractions with denominators of 10 or 100 directly into decimals, like 7/10 = 0.7 and 45/100 = 0.45."
  },
  "Comparing Decimals": {
    page1: "In this lesson, you will learn to compare two decimals to the hundredths place using the symbols <, >, and =.",
    page2: "Comparing decimals works similarly to comparing whole numbers: you compare digit by digit, starting from the leftmost place after the decimal point.",
    page3: "The rule is: compare the tenths digit first. If they're equal, compare the hundredths digit, to determine which decimal is greater.",
    page4: "Let's compare 0.45 and 0.52. Step 1: Compare tenths: 4 vs 5. Step 2: 5 is bigger. Step 3: So 0.52 > 0.45.",
    page5: "Now let's compare 0.63 and 0.68. Step 1: Tenths match: 6 and 6. Step 2: Compare hundredths: 3 vs 8. Step 3: 8 is bigger, so 0.68 > 0.63.",
    page6: "A helpful trick: line up the decimal points and add trailing zeros if needed (like 0.5 becoming 0.50) to make comparing digit by digit easier.",
    page7: "You learned to compare decimals to the hundredths place using <, >, and = by comparing tenths and hundredths digits."
  },
  "Metric Measurement Units": {
    page1: "In this lesson, you will learn to convert larger metric units to smaller units, like kilometers to meters or kilograms to grams.",
    page2: "The metric system uses prefixes to show size: 'kilo-' means 1000 times bigger. So 1 kilometer = 1000 meters, and 1 kilogram = 1000 grams.",
    page3: "The rule is: to convert from a larger unit to a smaller unit, multiply by the conversion factor (usually 1000, 100, or 10).",
    page4: "Let's convert 3 kilometers to meters. Step 1: 1 km = 1000 m. Step 2: Multiply: 3 x 1000. Step 3: 3 kilometers = 3,000 meters.",
    page5: "Now let's convert 2 kilograms to grams. Step 1: 1 kg = 1000 g. Step 2: Multiply: 2 x 1000. Step 3: 2 kilograms = 2,000 grams.",
    page6: "A helpful trick: 'kilo' always means 1000 in the metric system, whether you're measuring distance (kilometers) or mass (kilograms) — the pattern stays the same.",
    page7: "You learned to convert larger metric units to smaller units by multiplying by 1000 (for kilo- prefixes), like km to m and kg to g."
  },
  "Area of Rectilinear Shapes": {
    page1: "In this lesson, you will learn to apply area and perimeter formulas to more complex rectilinear shapes (shapes made of straight lines and right angles).",
    page2: "A rectilinear shape can be split into smaller rectangles. You find the total area by finding the area of each smaller rectangle and adding them together.",
    page3: "The rule is: break the complex shape into simple rectangles, find each rectangle's area (length x width), and add all the areas together.",
    page4: "Let's find the area of an L-shape made of a 4x3 rectangle and a 2x2 rectangle. Step 1: First area: 4x3=12. Step 2: Second area: 2x2=4. Step 3: Total: 12+4=16 square units.",
    page5: "Now let's find the area of a shape made of a 5x2 rectangle and a 3x3 rectangle. Step 1: First area: 5x2=10. Step 2: Second area: 3x3=9. Step 3: Total: 10+9=19 square units.",
    page6: "A helpful trick: draw a line on the complex shape to split it into clear rectangles before calculating — this makes the areas much easier to see and compute.",
    page7: "You learned to find the area of rectilinear shapes by splitting them into simple rectangles and adding up their individual areas."
  },
  "Line Plots with Fractions": {
    page1: "In this lesson, you will learn to make line plots that display data measured in fractional units.",
    page2: "A line plot with fractions works the same as a regular line plot, but the number line is marked with fractions instead of whole numbers.",
    page3: "The rule is: draw a number line with fractional markings (like 1/4, 1/2, 3/4), then place an X above the correct fraction for each data point.",
    page4: "Let's plot these measurements: 1/2, 1/2, 3/4 inch. Step 1: Draw a number line with 1/4 marks. Step 2: Place 2 X's above 1/2. Step 3: Place 1 X above 3/4.",
    page5: "Now let's plot these: 1/4, 1/2, 1/4 inch. Step 1: Draw the number line. Step 2: Place 2 X's above 1/4. Step 3: Place 1 X above 1/2.",
    page6: "A helpful trick: line plots with fractions often come from real measurements, like measuring several pencils and recording their lengths to the nearest fraction of an inch.",
    page7: "You learned to make line plots using fractional measurements, marking a number line with fraction values."
  },
  "Lines & Angles": {
    page1: "In this lesson, you will learn to identify points, lines, line segments, rays, and angles.",
    page2: "A point is an exact location. A line goes on forever in both directions. A line segment has two endpoints. A ray starts at one point and goes on forever in one direction. An angle is formed where two rays meet.",
    page3: "The rule is: check if the figure has endpoints (segment has 2, ray has 1, line has 0) or if it shows two rays meeting (angle).",
    page4: "Let's identify a figure with two endpoints. Step 1: Check endpoints — 2. Step 2: This matches the definition of a line segment.",
    page5: "Now let's identify a figure with one endpoint that goes on forever in one direction. Step 1: Check endpoints — 1. Step 2: This matches the definition of a ray.",
    page6: "A helpful trick: think of a ray like a flashlight beam — it starts at one point (the flashlight) and shines on forever in one direction.",
    page7: "You learned to identify points, lines, line segments, rays, and angles based on their endpoints and direction."
  },
  "Classifying Shapes": {
    page1: "In this lesson, you will learn to classify 2D shapes based on whether they have parallel or perpendicular lines.",
    page2: "Parallel lines never meet and stay the same distance apart, like train tracks. Perpendicular lines cross at a right angle (90 degrees), like a plus sign.",
    page3: "The rule is: check the shape's sides — if any pair of sides never meets, they're parallel; if any pair crosses at a right angle, they're perpendicular.",
    page4: "Let's classify a rectangle. Step 1: Top and bottom sides never meet — parallel. Step 2: Top and side sides meet at 90 degrees — perpendicular. Step 3: A rectangle has both parallel and perpendicular sides.",
    page5: "Now let's classify a trapezoid with only one pair of parallel sides. Step 1: Check the sides — only the top and bottom never meet. Step 2: This shape has exactly one pair of parallel sides.",
    page6: "A helpful trick: picture a capital letter 'H' — the two vertical lines are parallel, and the horizontal line is perpendicular to both of them.",
    page7: "You learned to classify 2D shapes by identifying parallel lines (never meet) and perpendicular lines (meet at right angles)."
  },
  "Line Symmetry": {
    page1: "In this lesson, you will learn to recognize and draw lines of symmetry for 2D figures.",
    page2: "A line of symmetry divides a shape into two mirror-image halves. Some shapes have one line of symmetry, others have many, and some have none.",
    page3: "The rule is: draw a line through the shape and check if both sides are exact mirror images — if yes, you've drawn a line of symmetry.",
    page4: "Let's draw a line of symmetry on an equilateral triangle. Step 1: Draw a line from one corner to the middle of the opposite side. Step 2: Check both halves match. Step 3: Yes, this is a line of symmetry (it has 3 total).",
    page5: "Now let's check a scalene triangle (all sides different lengths). Step 1: Try drawing lines through it. Step 2: No line creates matching halves. Step 3: A scalene triangle has no lines of symmetry.",
    page6: "A helpful trick: regular shapes (like squares and equilateral triangles) tend to have many lines of symmetry, while irregular shapes often have none.",
    page7: "You learned to recognize and draw lines of symmetry, which divide a shape into two matching mirror-image halves."
  },
  "Measuring Angles": {
    page1: "In this lesson, you will learn to measure angles in degrees using a protractor.",
    page2: "A protractor is a tool with degree markings from 0 to 180 used to measure how wide an angle opens. Angles are measured in units called degrees.",
    page3: "The rule is: line up the protractor's center point with the angle's vertex (corner), align the 0 line with one ray, and read where the other ray crosses the scale.",
    page4: "Let's measure an angle that reads 45 on the protractor. Step 1: Line up the center and 0 mark. Step 2: Read where the second ray crosses. Step 3: The angle measures 45 degrees.",
    page5: "Now let's measure an angle that reads 120. Step 1: Line up the protractor. Step 2: Read the second ray's position. Step 3: The angle measures 120 degrees.",
    page6: "A helpful trick: a right angle always measures exactly 90 degrees — use this as a reference point to check if your protractor reading makes sense.",
    page7: "You learned to measure angles in degrees using a protractor by lining up the center and reading where the second ray crosses the scale."
  },
  "Additive Angles": {
    page1: "In this lesson, you will learn to solve addition problems to find unknown angle measurements.",
    page2: "When a larger angle is split into two smaller angles, the two smaller angle measurements add up to equal the larger angle's total measurement.",
    page3: "The rule is: if you know the total angle and one part, subtract to find the missing part. If you know both parts, add them to find the total.",
    page4: "Let's solve: a 90-degree angle is split into two parts; one part is 35 degrees. Step 1: Total is 90. Step 2: Known part is 35. Step 3: Missing part: 90-35=55 degrees.",
    page5: "Now let's solve: two angles of 40 and 60 degrees are combined. Step 1: Add them: 40+60. Step 2: The total combined angle is 100 degrees.",
    page6: "A helpful trick: angle addition works exactly like regular addition and subtraction — just remember the units are degrees instead of plain numbers.",
    page7: "You learned to use addition and subtraction to find unknown angle measurements when angles are combined or split."
  },
  "Arithmetic Review": {
    page1: "In this lesson, you will review multi-digit addition, subtraction, and place value concepts.",
    page2: "This review combines your skills in adding and subtracting large numbers using the standard algorithm, and understanding how place value works.",
    page3: "The rule is: work through each column from right to left, carrying or borrowing as needed, while remembering that each place value is 10 times the one to its right.",
    page4: "Let's solve 4,567 + 2,345. Step 1: Ones: 7+5=12, write 2 carry 1. Step 2: Tens: 6+4+1=11, write 1 carry 1. Step 3: Hundreds: 5+3+1=9. Step 4: Thousands: 4+2=6. Answer: 6,912.",
    page5: "Now let's solve 8,203 - 3,456. Step 1: Ones: 3<6, borrow: 13-6=7. Step 2: Tens: 9(after borrow)-5=4. Step 3: Hundreds: 1<4, borrow: 11-4=7. Step 4: Thousands: 7(after borrow)-3=4. Answer: 4,747.",
    page6: "A helpful trick: always double-check your carrying and borrowing column by column — one small mistake early on can throw off the entire answer.",
    page7: "You reviewed multi-digit addition and subtraction using the standard algorithm, along with place value understanding."
  },
  "Decimals Review": {
    page1: "In this lesson, you will review converting fractions to decimals and comparing decimal values.",
    page2: "This review combines converting fractions with denominators of 10 or 100 into decimals, and comparing decimals by their tenths and hundredths digits.",
    page3: "The rule is: match the denominator's zeros to the number of decimal places, then compare decimals digit by digit from left to right after the decimal point.",
    page4: "Let's convert 3/10 and compare it to 0.25. Step 1: 3/10 = 0.3. Step 2: Compare 0.3 and 0.25: tenths 3 vs 2. Step 3: 0.3 > 0.25.",
    page5: "Now let's convert 60/100 and compare it to 0.7. Step 1: 60/100 = 0.6. Step 2: Compare 0.6 and 0.7: tenths 6 vs 7. Step 3: 0.6 < 0.7.",
    page6: "A helpful trick: converting to decimals first makes comparing much easier than trying to compare fractions with different denominators directly.",
    page7: "You reviewed converting fractions to decimals and comparing decimal values using place value."
  }
  ,"Parentheses & Brackets": {
    page1: "In this lesson, you will learn to use parentheses, brackets, and braces in numerical expressions, and to solve them in the correct order.",
    page2: "Parentheses ( ), brackets [ ], and braces { } group parts of an expression together, showing you which operations to do first.",
    page3: "The rule is: always solve what's inside parentheses first, working from the innermost group outward.",
    page4: "Let's solve (3 + 4) x 2. Step 1: Solve inside parentheses first: 3+4=7. Step 2: Multiply: 7x2=14. Step 3: The answer is 14.",
    page5: "Now let's solve 5 x (6 - 2). Step 1: Solve inside parentheses: 6-2=4. Step 2: Multiply: 5x4=20. Step 3: The answer is 20.",
    page6: "A helpful trick: parentheses are like a VIP line — whatever's inside them always gets solved first, before anything outside.",
    page7: "You learned to use parentheses, brackets, and braces to group expressions, always solving the innermost group first."
  },
  "Evaluating Expressions": {
    page1: "In this lesson, you will learn to write and evaluate simple numerical expressions using the correct order of operations.",
    page2: "A numerical expression is a math phrase combining numbers and operations, like 3 + 4 x 2. Evaluating means finding its final value using the order of operations.",
    page3: "The rule is: solve parentheses first, then multiplication and division (left to right), then addition and subtraction (left to right).",
    page4: "Let's evaluate 3 + 4 x 2. Step 1: No parentheses. Step 2: Multiply first: 4x2=8. Step 3: Add: 3+8=11.",
    page5: "Now let's evaluate (2 + 3) x 4 - 1. Step 1: Parentheses: 2+3=5. Step 2: Multiply: 5x4=20. Step 3: Subtract: 20-1=19.",
    page6: "A helpful trick: remember the order with 'Please Excuse My Dear Aunt Sally' — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.",
    page7: "You learned to evaluate numerical expressions using the correct order of operations: parentheses first, then multiplication/division, then addition/subtraction."
  },
  "Analyzing Patterns": {
    page1: "In this lesson, you will learn to generate two numerical patterns using given rules and compare them.",
    page2: "When you apply a rule repeatedly starting from a number, you create a pattern. Comparing two patterns generated by different rules can reveal interesting relationships.",
    page3: "The rule is: apply each given rule step by step to build each pattern, then compare the corresponding terms between the two patterns.",
    page4: "Let's generate patterns starting at 0, Rule 1: add 3. Rule 2: add 6. Step 1: Pattern 1: 0,3,6,9. Step 2: Pattern 2: 0,6,12,18. Step 3: Pattern 2 is always double Pattern 1.",
    page5: "Now let's compare starting at 1, Rule 1: add 2. Rule 2: add 4. Step 1: Pattern 1: 1,3,5,7. Step 2: Pattern 2: 1,5,9,13. Step 3: The gap between them grows each step.",
    page6: "A helpful trick: line up both patterns in a table, term by term, to spot relationships like doubling or a consistent difference.",
    page7: "You learned to generate numerical patterns from rules and analyze relationships between two related patterns."
  },
  "Powers of Ten": {
    page1: "In this lesson, you will learn to explain patterns in the number of zeros when multiplying a number by powers of 10.",
    page2: "A power of ten is a number like 10, 100, or 1000. When you multiply any number by a power of 10, you add that many zeros to the end (or shift the decimal point).",
    page3: "The rule is: multiplying by 10 adds one zero, by 100 adds two zeros, by 1000 adds three zeros, matching the number of zeros in the power of ten.",
    page4: "Let's solve 45 x 100. Step 1: 100 has 2 zeros. Step 2: Add 2 zeros to 45. Step 3: 45 x 100 = 4,500.",
    page5: "Now let's solve 7 x 1000. Step 1: 1000 has 3 zeros. Step 2: Add 3 zeros to 7. Step 3: 7 x 1000 = 7,000.",
    page6: "A helpful trick: for decimals, multiplying by powers of 10 shifts the decimal point right instead of adding zeros — 4.5 x 100 = 450.",
    page7: "You learned that multiplying a number by a power of 10 adds zeros (or shifts the decimal point) based on how many zeros are in the power of ten."
  },
  "Multi-Digit Multiplication": {
    page1: "In this lesson, you will learn to fluently multiply multi-digit whole numbers using the standard algorithm.",
    page2: "Multiplying multi-digit numbers means multiplying each digit of one number by each digit of the other, then adding up the partial products.",
    page3: "The rule is: multiply the first number by each digit of the second number separately (shifting left each time), then add all the partial products together.",
    page4: "Let's solve 23 x 14. Step 1: 23 x 4 = 92. Step 2: 23 x 10 = 230. Step 3: Add: 92 + 230 = 322.",
    page5: "Now let's solve 36 x 27. Step 1: 36 x 7 = 252. Step 2: 36 x 20 = 720. Step 3: Add: 252 + 720 = 972.",
    page6: "A helpful trick: always multiply by the ones digit first, then the tens digit (remembering to shift one place left), then add the results.",
    page7: "You learned to multiply multi-digit numbers using the standard algorithm by multiplying by each digit separately and adding the partial products."
  },
  "Decimal Place Value": {
    page1: "In this lesson, you will learn to read, write, and compare decimals to the thousandths place.",
    page2: "Decimal place values after the decimal point are tenths, hundredths, and thousandths — each is 10 times smaller than the one before it.",
    page3: "The rule is: the first digit after the decimal is tenths, the second is hundredths, and the third is thousandths.",
    page4: "Let's read 0.375. Step 1: 3 is tenths (0.3). Step 2: 7 is hundredths (0.07). Step 3: 5 is thousandths (0.005). Total: 0.375.",
    page5: "Now let's compare 0.45 and 0.450. Step 1: Add a placeholder zero: 0.450 has thousandths digit 0. Step 2: Compare: they represent the same value. Step 3: 0.45 = 0.450.",
    page6: "A helpful trick: trailing zeros after the decimal point don't change the value — 0.5 and 0.50 and 0.500 are all equal.",
    page7: "You learned to read, write, and compare decimals to the thousandths place using tenths, hundredths, and thousandths."
  },
  "Rounding Decimals": {
    page1: "In this lesson, you will learn to use place value understanding to round decimals to any place.",
    page2: "Rounding decimals works just like rounding whole numbers — you look at the digit right after your rounding place to decide whether to round up or down.",
    page3: "The rule is: look at the digit to the right of the place you're rounding to. If it's 5 or more, round up; if it's 4 or less, keep the digit the same.",
    page4: "Let's round 3.678 to the nearest tenth. Step 1: Look at the hundredths digit: 7. Step 2: Since 7 is 5 or more, round up. Step 3: 3.678 rounds to 3.7.",
    page5: "Now let's round 5.234 to the nearest hundredth. Step 1: Look at the thousandths digit: 4. Step 2: Since 4 is less than 5, round down. Step 3: 5.234 rounds to 5.23.",
    page6: "A helpful trick: rounding decimals uses the exact same 5-or-more rule as rounding whole numbers — just apply it to decimal places instead.",
    page7: "You learned to round decimals to any place value by checking the digit immediately to the right of that place."
  },
  "Decimal Addition": {
    page1: "In this lesson, you will learn to add decimals to the hundredths place using models or drawings.",
    page2: "Adding decimals means lining up the decimal points so that each place value (ones, tenths, hundredths) matches up correctly before adding.",
    page3: "The rule is: line up the decimal points, add trailing zeros if needed so both numbers have the same number of decimal places, then add like whole numbers.",
    page4: "Let's solve 3.45 + 2.7. Step 1: Line up decimals: 3.45 and 2.70. Step 2: Add: 45+70=115, so hundredths+tenths=1.15. Step 3: Add ones: 3+2=5. Answer: 6.15.",
    page5: "Now let's solve 1.2 + 4.68. Step 1: Line up: 1.20 and 4.68. Step 2: Add: 20+68=88. Step 3: Add ones: 1+4=5. Answer: 5.88.",
    page6: "A helpful trick: always add a zero placeholder to make both decimals have the same number of digits after the decimal point before adding.",
    page7: "You learned to add decimals to the hundredths place by lining up decimal points and adding like whole numbers."
  },
  "Decimal Subtraction": {
    page1: "In this lesson, you will learn to subtract decimals to the hundredths place using place value understanding.",
    page2: "Subtracting decimals works like adding decimals: line up the decimal points first, then subtract each place value column, borrowing when needed.",
    page3: "The rule is: line up the decimal points, add trailing zeros if needed, then subtract like whole numbers, borrowing across the decimal point if necessary.",
    page4: "Let's solve 5.6 - 2.35. Step 1: Line up: 5.60 and 2.35. Step 2: Subtract hundredths/tenths: 60-35=25. Step 3: Subtract ones: 5-2=3. Answer: 3.25.",
    page5: "Now let's solve 8.2 - 3.75. Step 1: Line up: 8.20 and 3.75. Step 2: Borrow: 20-75 needs borrowing from ones: 120-75=45, ones become 7. Step 3: 7-3=4. Answer: 4.45.",
    page6: "A helpful trick: borrowing across a decimal point works just like borrowing in whole numbers — the decimal point doesn't change the borrowing process at all.",
    page7: "You learned to subtract decimals to the hundredths place by lining up decimal points and subtracting, borrowing when necessary."
  },
  "Decimal Multiplication": {
    page1: "In this lesson, you will learn to multiply decimals to the hundredths place using models.",
    page2: "Multiplying decimals means multiplying the numbers as if they were whole numbers first, then placing the decimal point based on the total decimal places in both factors.",
    page3: "The rule is: multiply ignoring the decimal points first, then count the total decimal places in both original numbers and place the decimal point that many places from the right in your answer.",
    page4: "Let's solve 0.3 x 0.4. Step 1: Multiply as whole numbers: 3x4=12. Step 2: Count decimal places: 1+1=2. Step 3: Place decimal 2 places from right: 0.12.",
    page5: "Now let's solve 1.5 x 0.2. Step 1: Multiply: 15x2=30. Step 2: Count decimal places: 1+1=2. Step 3: Place decimal: 0.30, or 0.3.",
    page6: "A helpful trick: always count decimal places in BOTH numbers you're multiplying and add them together — that total tells you where the decimal goes in your final answer.",
    page7: "You learned to multiply decimals by multiplying as whole numbers, then placing the decimal point based on the total decimal places in both factors."
  },
  "Adding Fractions (Unlike)": {
    page1: "In this lesson, you will learn to add fractions that have unlike (different) denominators.",
    page2: "When fractions have different denominators, you can't add them directly — you must first find a common denominator so the pieces are the same size.",
    page3: "The rule is: find a common denominator (often by multiplying the denominators), convert both fractions, then add the numerators.",
    page4: "Let's solve 1/3 + 1/4. Step 1: Common denominator: 3x4=12. Step 2: Convert: 1/3=4/12, 1/4=3/12. Step 3: Add: 4/12+3/12=7/12.",
    page5: "Now let's solve 1/2 + 1/5. Step 1: Common denominator: 2x5=10. Step 2: Convert: 1/2=5/10, 1/5=2/10. Step 3: Add: 5/10+2/10=7/10.",
    page6: "A helpful trick: multiplying the two denominators together always gives you a common denominator, even if it's not the smallest possible one.",
    page7: "You learned to add fractions with unlike denominators by finding a common denominator, converting both fractions, and adding the numerators."
  },
  "Subtracting Fractions (Unlike)": {
    page1: "In this lesson, you will learn to subtract fractions that have unlike (different) denominators.",
    page2: "Just like adding, subtracting fractions with different denominators requires converting them to a common denominator first.",
    page3: "The rule is: find a common denominator, convert both fractions, then subtract the numerators, keeping the common denominator.",
    page4: "Let's solve 3/4 - 1/3. Step 1: Common denominator: 4x3=12. Step 2: Convert: 3/4=9/12, 1/3=4/12. Step 3: Subtract: 9/12-4/12=5/12.",
    page5: "Now let's solve 2/3 - 1/6. Step 1: Common denominator: 6 (since 3x2=6). Step 2: Convert: 2/3=4/6, 1/6 stays. Step 3: Subtract: 4/6-1/6=3/6, or 1/2.",
    page6: "A helpful trick: if one denominator is a multiple of the other (like 3 and 6), you only need to convert one fraction, not both.",
    page7: "You learned to subtract fractions with unlike denominators by finding a common denominator, converting, and subtracting the numerators."
  },
  "Fractions Word Problems": {
    page1: "In this lesson, you will solve word problems involving addition and subtraction of fractions.",
    page2: "Fraction word problems describe real situations using fractional amounts, and ask you to combine or compare them using addition or subtraction.",
    page3: "The rule is: read the story, identify the fractions, find a common denominator if needed, and add or subtract based on the clue words.",
    page4: "Let's solve: 'Mia ate 1/4 of a pizza. Leo ate 2/4. How much did they eat together?' Step 1: Same denominator. Step 2: Add: 1/4+2/4=3/4. Step 3: They ate 3/4 of the pizza.",
    page5: "Now let's solve: 'A recipe needs 2/3 cup flour. You have 1/6 cup. How much more do you need?' Step 1: Common denominator 6. Step 2: 2/3=4/6. Step 3: Subtract: 4/6-1/6=3/6=1/2 cup more.",
    page6: "A helpful trick: always check the denominators first in a fraction word problem — if they differ, convert to a common denominator before doing any math.",
    page7: "You learned to solve fraction word problems by identifying the fractions in the story and adding or subtracting them, converting denominators when needed."
  },
  "Dividing Unit Fractions": {
    page1: "In this lesson, you will learn to divide unit fractions by non-zero whole numbers.",
    page2: "A unit fraction has a numerator of 1, like 1/3 or 1/5. Dividing a unit fraction by a whole number means splitting that fraction into even smaller equal parts.",
    page3: "The rule is: to divide a unit fraction by a whole number, multiply the denominator by that whole number, keeping the numerator as 1.",
    page4: "Let's solve 1/3 ÷ 2. Step 1: Multiply the denominator by 2: 3x2=6. Step 2: Keep the numerator as 1. Step 3: 1/3 ÷ 2 = 1/6.",
    page5: "Now let's solve 1/4 ÷ 3. Step 1: Multiply the denominator by 3: 4x3=12. Step 2: Keep the numerator as 1. Step 3: 1/4 ÷ 3 = 1/12.",
    page6: "A helpful trick: dividing makes fractions smaller (more pieces means smaller pieces) — the answer to dividing a unit fraction is always an even smaller unit fraction.",
    page7: "You learned to divide unit fractions by whole numbers by multiplying the denominator by that whole number."
  },
  "Understanding Volume": {
    page1: "In this lesson, you will learn to recognize volume as an attribute of 3D space, measured in cubic units.",
    page2: "Volume tells you how much space a 3D object takes up or how much it can hold inside, measured using cubic units, like cubic inches or cubic centimeters.",
    page3: "The rule is: volume is measured in three dimensions (length, width, and height), unlike area, which only measures two dimensions.",
    page4: "Let's think about a small box. Step 1: It has length, width, and height. Step 2: The space it takes up is measured in cubic units. Step 3: This total space is its volume.",
    page5: "Now let's compare a flat piece of paper (2D, measured in square units) to a cardboard box (3D, measured in cubic units). Step 1: Paper has no real depth — area. Step 2: The box has depth — volume.",
    page6: "A helpful trick: whenever you see the word 'cubic' before a unit (like cubic inches), you know you're measuring volume, not just area or length.",
    page7: "You learned that volume measures the amount of 3D space an object takes up or holds, using cubic units."
  },
  "Counting Unit Cubes": {
    page1: "In this lesson, you will learn to measure volume by counting unit cubes that fill a 3D shape.",
    page2: "A unit cube is a cube with sides of length 1 unit. Counting how many unit cubes fit inside a solid shape tells you its volume.",
    page3: "The rule is: count every unit cube that completely fills the inside of the 3D shape — the total count is the volume in cubic units.",
    page4: "Let's find the volume of a box filled with 24 unit cubes. Step 1: Count all the cubes inside. Step 2: There are 24. Step 3: The volume is 24 cubic units.",
    page5: "Now let's find the volume of a shape made of 3 layers of 5 cubes each. Step 1: Cubes per layer: 5. Step 2: Number of layers: 3. Step 3: Total: 5x3=15 cubic units.",
    page6: "A helpful trick: it's often easier to count cubes layer by layer (like floors of a building) and multiply, rather than counting one cube at a time.",
    page7: "You learned to measure volume by counting the unit cubes that completely fill a 3D shape."
  },
  "Volume Formulas": {
    page1: "In this lesson, you will learn to apply the volume formulas V = l x w x h and V = base area x height.",
    page2: "Instead of counting every cube, you can calculate volume quickly using a formula: multiply the length, width, and height of a rectangular prism.",
    page3: "The rule is: Volume = length x width x height (V = l x w x h), or equivalently, Volume = base area x height (V = b x h).",
    page4: "Let's find the volume of a box that is 4 units long, 3 units wide, and 2 units tall. Step 1: Multiply length x width: 4x3=12. Step 2: Multiply by height: 12x2=24. Step 3: Volume = 24 cubic units.",
    page5: "Now let's find the volume of a box with base area 15 square units and height 4 units. Step 1: Use V=bxh. Step 2: Multiply: 15x4=60. Step 3: Volume = 60 cubic units.",
    page6: "A helpful trick: V = l x w x h is the same as multiplying the base area (l x w) by the height — both formulas give the exact same answer.",
    page7: "You learned to apply the volume formulas V = l x w x h and V = base area x height to find the volume of rectangular prisms."
  },
  "Additive Volume": {
    page1: "In this lesson, you will learn to find the volume of solid figures composed of two or more rectangular prisms.",
    page2: "Some 3D shapes are made of multiple simpler rectangular prisms combined together. You find the total volume by adding each prism's volume.",
    page3: "The rule is: split the complex solid into simple rectangular prisms, find each prism's volume (l x w x h), and add the volumes together.",
    page4: "Let's find the volume of an L-shaped solid made of a 4x3x2 prism and a 2x2x2 prism. Step 1: First volume: 4x3x2=24. Step 2: Second volume: 2x2x2=8. Step 3: Total: 24+8=32 cubic units.",
    page5: "Now let's find the volume of a shape made of a 5x2x3 prism and a 3x3x3 prism. Step 1: First volume: 5x2x3=30. Step 2: Second volume: 3x3x3=27. Step 3: Total: 30+27=57 cubic units.",
    page6: "A helpful trick: draw a line to clearly divide the complex solid into simple rectangular prisms before calculating each volume separately.",
    page7: "You learned to find the volume of complex solids by splitting them into rectangular prisms and adding up their individual volumes."
  },
  "Unit Conversion": {
    page1: "In this lesson, you will learn to convert among different-sized standard measurement units, like feet to inches or pounds to ounces.",
    page2: "Standard measurement units relate to each other by fixed conversion factors, like 1 foot = 12 inches, or 1 pound = 16 ounces.",
    page3: "The rule is: to convert from a bigger unit to a smaller unit, multiply by the conversion factor. To convert from smaller to bigger, divide.",
    page4: "Let's convert 3 feet to inches. Step 1: 1 foot = 12 inches. Step 2: Multiply: 3 x 12. Step 3: 3 feet = 36 inches.",
    page5: "Now let's convert 32 ounces to pounds. Step 1: 1 pound = 16 ounces. Step 2: Divide: 32 ÷ 16. Step 3: 32 ounces = 2 pounds.",
    page6: "A helpful trick: memorize a few key conversions (12 inches=1 foot, 16 ounces=1 pound, 3 feet=1 yard) since these come up often in measurement problems.",
    page7: "You learned to convert between measurement units by multiplying (bigger to smaller) or dividing (smaller to bigger) using conversion factors."
  },
  "Coordinate System": {
    page1: "In this lesson, you will learn about the coordinate plane, including the x-axis, y-axis, and origin.",
    page2: "A coordinate plane is a grid formed by two number lines: the horizontal x-axis and the vertical y-axis. They cross at a point called the origin, (0,0).",
    page3: "The rule is: the x-axis measures how far left or right a point is, and the y-axis measures how far up or down a point is, starting from the origin.",
    page4: "Let's locate the origin. Step 1: Find where the x-axis and y-axis cross. Step 2: This point is (0,0). Step 3: The origin is the starting point for all coordinates.",
    page5: "Now let's understand the axes. Step 1: The x-axis runs left-right (horizontal). Step 2: The y-axis runs up-down (vertical). Step 3: Together they create the coordinate plane.",
    page6: "A helpful trick: remember 'x is across' (like a hallway floor) and 'y is up' (like a tall building) to keep the two axes straight in your mind.",
    page7: "You learned about the coordinate plane's x-axis, y-axis, and origin, which together form a grid for locating points."
  },
  "Graphing Coordinate Points": {
    page1: "In this lesson, you will learn to graph points in the first quadrant of the coordinate plane.",
    page2: "A coordinate point is written as (x, y), where x tells you how far to move right from the origin, and y tells you how far to move up.",
    page3: "The rule is: start at the origin (0,0), move right along the x-axis by the first number, then move up along the y-axis by the second number.",
    page4: "Let's graph the point (3, 4). Step 1: Start at the origin. Step 2: Move right 3 units. Step 3: Move up 4 units, and mark the point.",
    page5: "Now let's graph the point (5, 2). Step 1: Start at the origin. Step 2: Move right 5 units. Step 3: Move up 2 units, and mark the point.",
    page6: "A helpful trick: always move horizontally (x) FIRST, then vertically (y) — the order in (x,y) tells you exactly which direction to move first.",
    page7: "You learned to graph coordinate points in the first quadrant by moving right along the x-axis, then up along the y-axis."
  },
  "Real-World Coordinate Problems": {
    page1: "In this lesson, you will learn to represent real-world and mathematical problems by graphing points on the coordinate plane.",
    page2: "Coordinate points can represent real things, like a location on a map or data comparing two values, such as hours worked (x) and money earned (y).",
    page3: "The rule is: identify what the x-value and y-value represent in the story, then plot each pair of values as a point on the coordinate plane.",
    page4: "Let's plot: 'After 1 hour, Sam earned $5. After 2 hours, he earned $10.' Step 1: Points are (1,5) and (2,10). Step 2: Plot (1,5): right 1, up 5. Step 3: Plot (2,10): right 2, up 10.",
    page5: "Now let's plot: 'A plant is 2 inches tall on day 1, and 4 inches tall on day 3.' Step 1: Points are (1,2) and (3,4). Step 2: Plot (1,2) and (3,4) on the grid.",
    page6: "A helpful trick: label your axes clearly with what they represent (like 'hours' and 'dollars') before plotting, so the graph tells a clear story.",
    page7: "You learned to represent real-world problems by graphing points on the coordinate plane, where each point's x and y values have real meaning."
  },
  "Classifying 2D Figures": {
    page1: "In this lesson, you will learn to classify two-dimensional figures in a hierarchy based on their properties.",
    page2: "Shapes can be organized in categories and subcategories, like how all squares are rectangles, but not all rectangles are squares — this is called a hierarchy.",
    page3: "The rule is: a shape belongs to a broader category if it has all the properties of that category, even if it also has extra special properties.",
    page4: "Let's classify a square within the quadrilateral hierarchy. Step 1: A square has 4 sides — it's a quadrilateral. Step 2: It has 4 right angles — it's a rectangle. Step 3: It also has 4 equal sides — it's a rhombus too.",
    page5: "Now let's classify a rhombus. Step 1: A rhombus has 4 sides — quadrilateral. Step 2: It has 4 equal sides. Step 3: But it may not have right angles, so it's not always a rectangle or square.",
    page6: "A helpful trick: picture a hierarchy like a family tree — 'quadrilateral' is the broad family name, and 'square' is a very specific member with extra special traits.",
    page7: "You learned to classify 2D figures in a hierarchy, understanding that shapes like squares belong to multiple broader categories like rectangles and rhombuses."
  },
  "Properties of Polygons": {
    page1: "In this lesson, you will learn that attributes belonging to a category of shapes also belong to all its subcategories.",
    page2: "If a broad shape category has a certain property, every more specific shape within that category also has that property, since subcategories inherit traits.",
    page3: "The rule is: identify the properties of the broad category, then confirm that every subcategory shares those same properties, plus possibly more of their own.",
    page4: "Let's apply this to quadrilaterals. Step 1: All quadrilaterals have 4 sides. Step 2: A rectangle is a quadrilateral. Step 3: So a rectangle must also have 4 sides.",
    page5: "Now let's apply this to rectangles. Step 1: All rectangles have 4 right angles. Step 2: A square is a rectangle. Step 3: So a square must also have 4 right angles.",
    page6: "A helpful trick: think of properties flowing downward through a hierarchy, like water flowing downhill — broad category traits always pass down to more specific shapes.",
    page7: "You learned that properties of a broad shape category, like 'quadrilateral', automatically apply to all of its more specific subcategories, like rectangles and squares."
  },
  "PEMDAS & Decimals Review": {
    page1: "In this lesson, you will review the order of operations (PEMDAS) and decimal operations.",
    page2: "This review combines evaluating expressions using the correct order of operations, and performing addition, subtraction, and multiplication with decimals.",
    page3: "The rule is: solve parentheses first, then multiplication/division, then addition/subtraction — and remember to line up decimal points when adding or subtracting decimals.",
    page4: "Let's solve (2.5 + 1.5) x 2. Step 1: Parentheses: 2.5+1.5=4. Step 2: Multiply: 4x2=8. Step 3: The answer is 8.",
    page5: "Now let's solve 3.2 + 4 x 0.5. Step 1: Multiply first: 4x0.5=2. Step 2: Add: 3.2+2=5.2. Step 3: The answer is 5.2.",
    page6: "A helpful trick: even with decimals involved, PEMDAS order never changes — always handle parentheses and multiplication before addition and subtraction.",
    page7: "You reviewed the order of operations (PEMDAS) combined with decimal addition, subtraction, and multiplication."
  },
  "Fractions Mastery": {
    page1: "In this lesson, you will review multiplication and division of fractions.",
    page2: "This review combines multiplying a fraction by a whole number, and dividing a unit fraction by a whole number.",
    page3: "The rule is: for multiplying, multiply the numerator by the whole number. For dividing a unit fraction, multiply the denominator by the whole number.",
    page4: "Let's solve 4 x 2/3. Step 1: Multiply numerator: 4x2=8. Step 2: Keep denominator: 3. Step 3: Answer: 8/3, or 2 2/3.",
    page5: "Now let's solve 1/5 ÷ 2. Step 1: Multiply the denominator: 5x2=10. Step 2: Keep numerator as 1. Step 3: Answer: 1/10.",
    page6: "A helpful trick: multiplying a fraction usually makes it bigger (if by a whole number more than 1), while dividing a unit fraction always makes it smaller.",
    page7: "You reviewed multiplying fractions by whole numbers and dividing unit fractions by whole numbers."
  },
  "Volume Review": {
    page1: "In this lesson, you will review counting unit cubes and applying rectangular prism volume formulas.",
    page2: "This review combines finding volume by counting unit cubes directly, and using the formula V = l x w x h for faster calculation.",
    page3: "The rule is: for small or irregular shapes, count unit cubes; for regular rectangular prisms, use V = l x w x h.",
    page4: "Let's find the volume of a box that's 5 long, 2 wide, 3 tall using the formula. Step 1: Multiply: 5x2=10. Step 2: Multiply by height: 10x3=30. Step 3: Volume = 30 cubic units.",
    page5: "Now let's count cubes in a shape with 2 layers of 6 cubes each. Step 1: Cubes per layer: 6. Step 2: Layers: 2. Step 3: Total: 6x2=12 cubic units.",
    page6: "A helpful trick: the formula V=lxwxh gives you the same answer as counting cubes, but much faster for large or regular shapes.",
    page7: "You reviewed finding volume both by counting unit cubes and by applying the formula V = l x w x h."
  },
  "Coordinate Graphing Review": {
    page1: "In this lesson, you will review understanding the coordinate plane and plotting points.",
    page2: "This review combines knowing the x-axis, y-axis, and origin, along with correctly plotting (x,y) coordinate points in the first quadrant.",
    page3: "The rule is: start at the origin, move right by the x-value, then move up by the y-value to plot any point.",
    page4: "Let's plot (4, 6). Step 1: Start at origin (0,0). Step 2: Move right 4. Step 3: Move up 6, and mark the point.",
    page5: "Now let's plot (2, 7). Step 1: Start at origin. Step 2: Move right 2. Step 3: Move up 7, and mark the point.",
    page6: "A helpful trick: always double check you moved along the x-axis (right) before moving along the y-axis (up) — mixing up the order plots the wrong point.",
    page7: "You reviewed the coordinate plane's structure and practiced plotting points using their x and y values."
  },
  "Intro to Ratios": {
    page1: "In this lesson, you will learn what a ratio is and how to use ratio language to compare two quantities, like the number of red marbles to blue marbles in a bag.",
    page2: "A ratio is a comparison of two quantities by division. It tells you how many of one thing there are for every certain number of another thing. Ratios can compare part-to-part (red marbles to blue marbles) or part-to-whole (red marbles to all marbles).",
    page3: "The rule is: write a ratio as 'a to b', 'a:b', or as the fraction a/b, keeping the order of the quantities exactly as described in the problem.",
    page4: "Let's write the ratio of 4 dogs to 9 cats. Step 1: Identify the two quantities in order: dogs first, cats second. Step 2: Write it as 4 to 9, or 4:9, or 4/9. Step 3: This means for every 4 dogs, there are 9 cats.",
    page5: "Now let's write the ratio of 15 apples to 5 oranges in a basket of fruit. Step 1: Apples first: 15, oranges second: 5. Step 2: Write it as 15:5. Step 3: This simplifies to 3:1, meaning 3 apples for every orange.",
    page6: "A helpful trick: order matters in a ratio. 'Dogs to cats' is different from 'cats to dogs' — always match the order the words are given in the problem.",
    page7: "You learned that a ratio compares two quantities using 'to', a colon, or a fraction, and that the order of the quantities must match the order given, as in 4 dogs to 9 cats written as 4:9."
  },
  "Equivalent Ratios": {
    page1: "In this lesson, you will learn how to find equivalent ratios and use a ratio table to scale a ratio up or down.",
    page2: "Equivalent ratios are ratios that describe the same relationship between two quantities, even though the actual numbers are different. Just like equivalent fractions, you multiply or divide both terms of a ratio by the same number.",
    page3: "The rule is: to find an equivalent ratio, multiply or divide both parts of the ratio by the same nonzero number.",
    page4: "Let's find a ratio equivalent to 2:3. Step 1: Choose a multiplier, say 4. Step 2: Multiply both terms: 2x4=8, 3x4=12. Step 3: 8:12 is equivalent to 2:3.",
    page5: "Now let's find an equivalent ratio for 12:18 in simplest form. Step 1: Find the GCF of 12 and 18, which is 6. Step 2: Divide both terms by 6: 12÷6=2, 18÷6=3. Step 3: The simplest form is 2:3.",
    page6: "A helpful trick: build a ratio table by listing multiples of both numbers in matching columns — this makes it easy to scale a recipe or compare rates at a glance.",
    page7: "You learned that equivalent ratios are found by multiplying or dividing both terms by the same number, as in 2:3 = 8:12, which simplifies back to 2:3."
  },
  "Rate and Unit Rate": {
    page1: "In this lesson, you will learn to calculate a unit rate, which tells you an amount per single unit, like miles per hour or price per item.",
    page2: "A rate compares two quantities with different units, such as dollars and pounds. A unit rate is a rate where the second quantity is 1, making it easy to compare prices, speeds, or other measurements.",
    page3: "The rule is: to find a unit rate, divide the first quantity by the second quantity so that the second number becomes 1.",
    page4: "Let's find the unit rate if a car travels 240 miles in 4 hours. Step 1: Divide miles by hours: 240 ÷ 4 = 60. Step 2: The unit rate is 60 miles per hour.",
    page5: "Now let's find the unit price if 5 notebooks cost $10. Step 1: Divide cost by quantity: 10 ÷ 5 = 2. Step 2: The unit rate is $2 per notebook.",
    page6: "A helpful trick: to compare two deals, always find the unit rate for each — the smaller unit price or the larger unit rate (like speed) is usually the better value.",
    page7: "You learned to find a unit rate by dividing the first quantity by the second so the second quantity equals 1, as in 240 miles ÷ 4 hours = 60 miles per hour."
  },
  "Percent as a Ratio": {
    page1: "In this lesson, you will learn that a percent is a special ratio that compares a number to 100, and how to convert between percents, fractions, and decimals.",
    page2: "Percent means 'per hundred.' A percent is a ratio where the second term is always 100, so 45% means 45 out of every 100. Because of this, percents can always be written as fractions with denominator 100 or as decimals.",
    page3: "The rule is: to change a percent to a decimal, divide by 100 (move the decimal point two places left). To change a decimal to a percent, multiply by 100. To change a fraction to a percent, first write it as an equivalent fraction over 100.",
    page4: "Let's convert 3/4 to a percent. Step 1: Find an equivalent fraction with denominator 100: 3/4 = 75/100. Step 2: Write as a percent: 75%.",
    page5: "Now let's convert 0.6 to a percent. Step 1: Multiply by 100: 0.6 x 100 = 60. Step 2: Write as a percent: 60%.",
    page6: "A helpful trick: memorize common fraction-percent pairs like 1/2=50%, 1/4=25%, 1/5=20%, and 1/10=10% — they help you estimate other percents quickly.",
    page7: "You learned that percent means 'per hundred,' and you can convert between fractions, decimals, and percents, as in 3/4 = 75/100 = 75%."
  },
  "Ratio Word Problems": {
    page1: "In this lesson, you will use ratio and rate reasoning to solve real-world word problems.",
    page2: "Many real-world situations, like mixing paint colors, adjusting recipes, or comparing prices, can be solved using ratio tables, equivalent ratios, or unit rates.",
    page3: "The rule is: identify the ratio given in the problem, set up an equivalent ratio or ratio table with the unknown value, and solve by finding the scale factor or missing term.",
    page4: "Let's solve: a recipe uses 2 cups of flour for every 3 cups of sugar. How much flour is needed for 12 cups of sugar? Step 1: Set up the ratio 2:3 = x:12. Step 2: Find the scale factor: 12÷3=4. Step 3: Multiply flour by 4: 2x4=8. You need 8 cups of flour.",
    page5: "Now let's solve: a car uses 5 gallons of gas to travel 150 miles. How far can it go on 8 gallons? Step 1: Find the unit rate: 150÷5=30 miles per gallon. Step 2: Multiply: 30x8=240. The car can travel 240 miles.",
    page6: "A helpful trick: draw a ratio table with two rows — one for each quantity — and look for the multiplier that connects the known value to the unknown value.",
    page7: "You learned to solve ratio word problems by setting up equivalent ratios or finding a unit rate and applying it, as in scaling a recipe from 3 cups of sugar to 12 cups."
  },
  "Dividing Fractions by Fractions": {
    page1: "In this lesson, you will learn to divide a fraction by another fraction, like 2/3 ÷ 1/4.",
    page2: "Dividing by a fraction means finding how many times that fraction fits into another number. Instead of dividing directly, we use the fact that dividing by a fraction is the same as multiplying by its reciprocal, the fraction flipped upside down.",
    page3: "The rule is: keep the first fraction the same, change division to multiplication, and flip (find the reciprocal of) the second fraction. Then multiply numerators and multiply denominators.",
    page4: "Let's solve 2/3 ÷ 1/4. Step 1: Keep 2/3, change to multiplication, flip 1/4 to 4/1. Step 2: Multiply: 2/3 x 4/1 = 8/3. Step 3: Simplify: 8/3 = 2 2/3.",
    page5: "Now let's solve 3/5 ÷ 2/7. Step 1: Keep 3/5, flip 2/7 to 7/2. Step 2: Multiply: 3/5 x 7/2 = 21/10. Step 3: Simplify: 21/10 = 2 1/10.",
    page6: "A helpful trick: remember 'keep, change, flip' — keep the first fraction, change the sign to multiplication, and flip the second fraction before multiplying.",
    page7: "You learned to divide fractions by multiplying by the reciprocal, using 'keep, change, flip', as in 2/3 ÷ 1/4 = 2/3 x 4/1 = 8/3."
  },
  "Fraction Division Word Problems": {
    page1: "In this lesson, you will apply fraction division to solve real-world word problems.",
    page2: "Fraction division word problems often ask how many equal-sized fractional groups fit into a total amount, such as how many 3/4-cup servings are in a container of juice.",
    page3: "The rule is: identify the total amount and the size of each group (both as fractions if needed), then divide the total by the group size using 'keep, change, flip'.",
    page4: "Let's solve: a ribbon is 5/6 yard long. How many 1/6-yard pieces can be cut from it? Step 1: Set up division: 5/6 ÷ 1/6. Step 2: Keep, change, flip: 5/6 x 6/1 = 30/6 = 5. Step 3: You can cut 5 pieces.",
    page5: "Now let's solve: you have 3/4 pound of trail mix and want to split it into 1/8-pound bags. How many bags can you make? Step 1: Set up: 3/4 ÷ 1/8. Step 2: Keep, change, flip: 3/4 x 8/1 = 24/4 = 6. Step 3: You can make 6 bags.",
    page6: "A helpful trick: when a problem asks 'how many groups of a certain size fit into a total', that phrasing is a signal to divide the total by the group size.",
    page7: "You learned to solve fraction division word problems by dividing the total amount by the fractional group size, as in 5/6 ÷ 1/6 = 5 pieces."
  },
  "Greatest Common Factor": {
    page1: "In this lesson, you will learn to find the greatest common factor, or GCF, of two whole numbers up to 100.",
    page2: "The greatest common factor of two numbers is the largest number that divides evenly into both of them. It's useful for simplifying fractions and factoring expressions.",
    page3: "The rule is: list the factors of each number, identify the common factors, and choose the largest one. You can also use prime factorization and multiply the shared prime factors.",
    page4: "Let's find the GCF of 18 and 24. Step 1: Factors of 18: 1,2,3,6,9,18. Step 2: Factors of 24: 1,2,3,4,6,8,12,24. Step 3: Common factors: 1,2,3,6. The GCF is 6.",
    page5: "Now let's find the GCF of 36 and 48 using prime factorization. Step 1: 36 = 2x2x3x3. Step 2: 48 = 2x2x2x2x3. Step 3: Shared factors: 2x2x3 = 12. The GCF is 12.",
    page6: "A helpful trick: the GCF is never larger than the smaller of the two numbers — that's a quick way to check your answer makes sense.",
    page7: "You learned to find the greatest common factor by listing common factors or using prime factorization, as in the GCF of 18 and 24 being 6."
  },
  "Least Common Multiple": {
    page1: "In this lesson, you will learn to find the least common multiple, or LCM, of two whole numbers up to 12.",
    page2: "The least common multiple of two numbers is the smallest number that both numbers divide into evenly. It's especially useful when adding or subtracting fractions with different denominators.",
    page3: "The rule is: list the multiples of each number until you find the smallest one they share, or use prime factorization and multiply the highest power of each prime that appears.",
    page4: "Let's find the LCM of 4 and 6. Step 1: Multiples of 4: 4,8,12,16. Step 2: Multiples of 6: 6,12,18. Step 3: The smallest shared multiple is 12. The LCM is 12.",
    page5: "Now let's find the LCM of 5 and 8. Step 1: Multiples of 5: 5,10,15,20,25,30,35,40. Step 2: Multiples of 8: 8,16,24,32,40. Step 3: The smallest shared multiple is 40. The LCM is 40.",
    page6: "A helpful trick: if two numbers share no common factors besides 1, like 5 and 8, their LCM is simply their product.",
    page7: "You learned to find the least common multiple by listing multiples or using prime factorization, as in the LCM of 4 and 6 being 12."
  },
  "Fraction and Decimal Conversion": {
    page1: "In this lesson, you will learn to convert fluently between fractions, decimals, and percents.",
    page2: "Fractions, decimals, and percents are three different ways to represent the same value. Being able to switch between them helps you compare quantities and solve problems more flexibly.",
    page3: "The rule is: to change a fraction to a decimal, divide the numerator by the denominator. To change a decimal to a fraction, write it over a power of 10 and simplify. To connect to percents, multiply a decimal by 100.",
    page4: "Let's convert 3/8 to a decimal. Step 1: Divide 3 by 8: 3 ÷ 8 = 0.375. Step 2: 3/8 = 0.375, which is also 37.5%.",
    page5: "Now let's convert 0.45 to a fraction. Step 1: Write as 45/100. Step 2: Simplify using the GCF of 45 and 100, which is 5: 45÷5=9, 100÷5=20. Step 3: 0.45 = 9/20.",
    page6: "A helpful trick: memorize that any decimal's place value tells you the denominator — tenths give /10, hundredths give /100, and so on.",
    page7: "You learned to convert between fractions and decimals by dividing or writing over a power of 10, as in 3/8 = 0.375 and 0.45 = 9/20."
  },
  "Intro to Negative Numbers": {
    page1: "In this lesson, you will learn what negative numbers are and how they describe values below zero in real-world situations.",
    page2: "Negative numbers are numbers less than zero, written with a minus sign, like -5. They're used to describe things like temperatures below freezing, elevations below sea level, or money owed.",
    page3: "The rule is: a negative number represents the opposite direction or value from a positive number of the same size — for example, -5 is the opposite of 5, both being 5 units from zero but in opposite directions.",
    page4: "Let's interpret -10 degrees Fahrenheit. Step 1: The negative sign means below zero. Step 2: -10°F means 10 degrees colder than 0°F.",
    page5: "Now let's interpret an elevation of -50 feet. Step 1: Negative means below a reference point, like sea level. Step 2: -50 feet means 50 feet below sea level.",
    page6: "A helpful trick: think of zero as a starting line — positive numbers move one direction (up, right, above) and negative numbers move the opposite direction (down, left, below).",
    page7: "You learned that negative numbers represent values less than zero and are used to describe real-world situations like temperature, elevation, and debt."
  },
  "Integers on the Number Line": {
    page1: "In this lesson, you will learn to plot and order positive and negative integers on a number line.",
    page2: "Integers are whole numbers and their opposites, including negative numbers, zero, and positive numbers. On a number line, numbers increase as you move right and decrease as you move left.",
    page3: "The rule is: to plot an integer, count that many units from zero in the correct direction — right for positive, left for negative. A number further right is always greater.",
    page4: "Let's plot -3 and 4 on a number line. Step 1: Start at 0. Step 2: Move 3 units left to plot -3. Step 3: Move 4 units right to plot 4. Since 4 is to the right of -3, 4 > -3.",
    page5: "Now let's order -7, 2, -1, and 5 from least to greatest. Step 1: Plot each on a number line. Step 2: Read left to right: -7, -1, 2, 5. Step 3: The order from least to greatest is -7, -1, 2, 5.",
    page6: "A helpful trick: on a number line, 'greater than' always means 'further to the right', no matter whether the numbers are negative or positive.",
    page7: "You learned to plot integers on a number line and to order them by position, with numbers further right being greater, as in -7 < -1 < 2 < 5."
  },
  "Absolute Value": {
    page1: "In this lesson, you will learn to find the absolute value of a number and understand it as the distance from zero.",
    page2: "Absolute value is the distance a number is from zero on the number line, and distance is always positive or zero. The absolute value of a number is written with two vertical bars, like |−7|.",
    page3: "The rule is: to find the absolute value, drop the sign of the number — both positive and negative numbers of the same size have the same absolute value.",
    page4: "Let's find |−8|. Step 1: -8 is 8 units from zero. Step 2: |−8| = 8.",
    page5: "Now let's find |6| and |−6| and compare them. Step 1: |6| = 6, since 6 is 6 units from zero. Step 2: |−6| = 6, since -6 is also 6 units from zero. Step 3: |6| = |−6|, they are equal.",
    page6: "A helpful trick: absolute value answers the question 'how far?' not 'which direction?' — so the answer is never negative.",
    page7: "You learned that absolute value is the distance a number is from zero, so it is always positive, as in |−8| = 8."
  },
  "Comparing and Ordering Integers": {
    page1: "In this lesson, you will learn to compare and order integers using the symbols <, >, and =.",
    page2: "Comparing integers means deciding which of two numbers is larger, including cases where one or both numbers are negative. Remember that on a number line, numbers get smaller as you move left, even into negative territory.",
    page3: "The rule is: any positive number is greater than any negative number, zero is greater than any negative number, and between two negative numbers, the one closer to zero is greater.",
    page4: "Let's compare -4 and -9. Step 1: Both are negative, so compare distance from zero. Step 2: -4 is closer to zero than -9. Step 3: So -4 > -9.",
    page5: "Now let's order -2, 3, -8, 0 from greatest to least. Step 1: Positive numbers are greatest: 3. Step 2: Then zero: 0. Step 3: Then negatives, closest to zero first: -2, then -8. Order: 3, 0, -2, -8.",
    page6: "A helpful trick: for two negative numbers, the one with the smaller number part (ignoring the sign) is actually the greater number, like -4 > -9 because 4 < 9.",
    page7: "You learned to compare and order integers, remembering that negative numbers closer to zero are greater, as in -4 > -9."
  },
  "The Coordinate Plane and Four Quadrants": {
    page1: "In this lesson, you will learn to plot and identify points in all four quadrants of the coordinate plane.",
    page2: "The coordinate plane is formed by a horizontal x-axis and a vertical y-axis crossing at the origin (0,0). The axes divide the plane into four regions called quadrants, numbered I through IV counterclockwise starting from the upper right, and points can now have negative coordinates.",
    page3: "The rule is: in Quadrant I, both x and y are positive. In Quadrant II, x is negative and y is positive. In Quadrant III, both x and y are negative. In Quadrant IV, x is positive and y is negative.",
    page4: "Let's plot (-3, 5). Step 1: x is negative and y is positive. Step 2: This places the point in Quadrant II. Step 3: Move 3 left and 5 up from the origin.",
    page5: "Now let's identify the quadrant for (4, -2). Step 1: x is positive and y is negative. Step 2: This places the point in Quadrant IV.",
    page6: "A helpful trick: remember the quadrants go counterclockwise starting from the top right (Quadrant I), matching the sign patterns (+,+), (−,+), (−,−), (+,−).",
    page7: "You learned to plot points and identify quadrants on the coordinate plane using the signs of the x and y coordinates, as in (-3,5) being in Quadrant II."
  },
  "Writing Algebraic Expressions": {
    page1: "In this lesson, you will learn to translate verbal phrases into algebraic expressions using variables.",
    page2: "An algebraic expression uses letters, called variables, to represent unknown numbers, combined with numbers and operations. Word phrases like '5 more than a number' can be translated directly into symbols.",
    page3: "The rule is: identify the operation from key words (sum/more than = add, difference/less than = subtract, product/times = multiply, quotient = divide), then write the expression using a variable for the unknown.",
    page4: "Let's translate '7 less than a number x'. Step 1: 'Less than' means subtraction, and it reverses order. Step 2: Write x - 7, not 7 - x. Step 3: The expression is x - 7.",
    page5: "Now let's translate 'the product of 4 and a number y, increased by 3'. Step 1: Product of 4 and y is 4y. Step 2: Increased by 3 means add 3. Step 3: The expression is 4y + 3.",
    page6: "A helpful trick: watch out for 'less than' and 'subtracted from' — they flip the order of the subtraction compared to how the sentence reads.",
    page7: "You learned to translate word phrases into algebraic expressions by identifying operations and key words, as in '7 less than a number' becoming x - 7."
  },
  "Evaluating Algebraic Expressions": {
    page1: "In this lesson, you will learn to evaluate algebraic expressions by substituting given values for the variables.",
    page2: "Evaluating an expression means replacing each variable with a specific number and then simplifying using the order of operations.",
    page3: "The rule is: substitute the given value for each variable, then simplify using PEMDAS (parentheses, exponents, multiplication/division, addition/subtraction) to find the final value.",
    page4: "Let's evaluate 3x + 5 when x = 4. Step 1: Substitute: 3(4) + 5. Step 2: Multiply: 12 + 5. Step 3: Add: 17.",
    page5: "Now let's evaluate 2a² - b when a = 3 and b = 7. Step 1: Substitute: 2(3)² - 7. Step 2: Exponent: 2(9) - 7. Step 3: Multiply, then subtract: 18 - 7 = 11.",
    page6: "A helpful trick: put the substituted value in parentheses before simplifying — this prevents sign errors, especially with negative numbers or exponents.",
    page7: "You learned to evaluate algebraic expressions by substituting values for variables and simplifying with order of operations, as in 3x+5 at x=4 equaling 17."
  },
  "Solving One-Step Equations": {
    page1: "In this lesson, you will learn to solve one-step equations involving addition, subtraction, multiplication, and division.",
    page2: "An equation is a statement that two expressions are equal. Solving an equation means finding the value of the variable that makes the equation true, using inverse operations to isolate the variable.",
    page3: "The rule is: perform the inverse operation on both sides of the equation to undo whatever is being done to the variable, keeping the equation balanced.",
    page4: "Let's solve x + 9 = 15. Step 1: The inverse of adding 9 is subtracting 9. Step 2: Subtract 9 from both sides: x = 15 - 9. Step 3: x = 6.",
    page5: "Now let's solve 4x = 28. Step 1: The inverse of multiplying by 4 is dividing by 4. Step 2: Divide both sides by 4: x = 28 ÷ 4. Step 3: x = 7.",
    page6: "A helpful trick: whatever you do to one side of the equation, you must do to the other side too — this keeps the equation balanced like a scale.",
    page7: "You learned to solve one-step equations by applying inverse operations to both sides, as in x + 9 = 15 giving x = 6."
  },
  "Independent and Dependent Variables": {
    page1: "In this lesson, you will learn to identify independent and dependent variables and represent their relationship with an equation, table, or graph.",
    page2: "In a relationship between two quantities, the independent variable is the one you choose or control, and the dependent variable's value depends on the independent variable. For example, the number of hours worked (independent) affects the total pay earned (dependent).",
    page3: "The rule is: ask which quantity depends on the other. The one that changes because of the other is the dependent variable; the one that causes the change is the independent variable.",
    page4: "Let's identify the variables: the total cost depends on the number of items bought. Step 1: Number of items is chosen freely — it's independent. Step 2: Total cost depends on that choice — it's dependent.",
    page5: "Now let's write an equation: each ticket costs $8. Let x = number of tickets (independent), y = total cost (dependent). Step 1: Cost equals price times quantity. Step 2: The equation is y = 8x.",
    page6: "A helpful trick: the dependent variable is usually the one you're trying to find or predict, often plotted on the vertical (y) axis of a graph.",
    page7: "You learned to identify independent and dependent variables and to write an equation relating them, as in y = 8x for ticket cost."
  },
  "Inequalities on a Number Line": {
    page1: "In this lesson, you will learn to write and graph simple inequalities on a number line.",
    page2: "An inequality compares two values that are not necessarily equal, using symbols like <, >, ≤, or ≥. Unlike an equation, an inequality's solution is often a whole range of numbers.",
    page3: "The rule is: use an open circle for < or > (the boundary value is not included) and a closed circle for ≤ or ≥ (the boundary value is included), then shade the number line in the direction of the solutions.",
    page4: "Let's graph x > 3. Step 1: Draw an open circle at 3, since 3 is not included. Step 2: Shade to the right, since values must be greater than 3.",
    page5: "Now let's graph x ≤ -2. Step 1: Draw a closed circle at -2, since -2 is included. Step 2: Shade to the left, since values must be less than or equal to -2.",
    page6: "A helpful trick: think of the circle as a 'gate' — open means you can't stand exactly there, closed means you can — then shade toward all the valid values.",
    page7: "You learned to graph inequalities on a number line using open or closed circles and shading, as in x > 3 shown with an open circle at 3 shaded rightward."
  },
  "Area of Triangles": {
    page1: "In this lesson, you will learn to find the area of a triangle using its base and height.",
    page2: "The area of a triangle is the amount of space it covers, measured in square units. A triangle's area is exactly half the area of a rectangle with the same base and height, because two triangles can form that rectangle.",
    page3: "The rule is: Area = 1/2 × base × height, where the height is measured perpendicular (at a right angle) to the base.",
    page4: "Let's find the area of a triangle with base 8 cm and height 5 cm. Step 1: Multiply base and height: 8x5=40. Step 2: Multiply by 1/2: 40÷2=20. Step 3: The area is 20 square cm.",
    page5: "Now let's find the area of a triangle with base 12 in and height 7 in. Step 1: Multiply: 12x7=84. Step 2: Half of 84 is 42. Step 3: The area is 42 square inches.",
    page6: "A helpful trick: the height must always be perpendicular to the base — if a triangle is tilted, imagine dropping a straight vertical line from the top vertex to the base to find the true height.",
    page7: "You learned to find the area of a triangle using Area = 1/2 × base × height, as in a triangle with base 8 and height 5 having an area of 20 square cm."
  },
  "Area of Quadrilaterals": {
    page1: "In this lesson, you will learn to find the area of parallelograms, trapezoids, and other quadrilaterals.",
    page2: "Quadrilaterals are four-sided shapes, and different types have different area formulas. A parallelogram's area works like a rectangle's, while a trapezoid's area averages its two parallel sides.",
    page3: "The rule is: for a parallelogram, Area = base × height. For a trapezoid, Area = 1/2 × (base1 + base2) × height, where height is the perpendicular distance between the parallel sides.",
    page4: "Let's find the area of a parallelogram with base 10 m and height 6 m. Step 1: Multiply: 10x6=60. Step 2: The area is 60 square meters.",
    page5: "Now let's find the area of a trapezoid with bases 8 cm and 12 cm and height 5 cm. Step 1: Add the bases: 8+12=20. Step 2: Multiply by height: 20x5=100. Step 3: Multiply by 1/2: 100÷2=50. The area is 50 square cm.",
    page6: "A helpful trick: you can split a parallelogram into a rectangle and two triangles, or a trapezoid into a rectangle and triangles, to see why these formulas work.",
    page7: "You learned to find the area of parallelograms (base × height) and trapezoids (1/2 × sum of bases × height), as in a trapezoid with bases 8 and 12 having an area of 50 square cm."
  },
  "Area of Composite Polygons": {
    page1: "In this lesson, you will learn to find the area of composite shapes by breaking them into simpler polygons.",
    page2: "A composite shape is made up of two or more simple shapes, like rectangles, triangles, and trapezoids, combined together. To find its total area, you find the area of each simple piece and add or subtract them.",
    page3: "The rule is: divide the composite shape into familiar shapes, find the area of each piece using the correct formula, and then add the areas together, or subtract if a piece is removed, like a hole.",
    page4: "Let's find the area of an L-shaped figure made of a 6x4 rectangle with a 2x2 square cut from one corner. Step 1: Area of rectangle: 6x4=24. Step 2: Area of square cut out: 2x2=4. Step 3: Subtract: 24-4=20. The area is 20 square units.",
    page5: "Now let's find the area of a shape made of a rectangle (5x3) with a triangle (base 5, height 4) on top. Step 1: Rectangle area: 5x3=15. Step 2: Triangle area: 1/2 x5x4=10. Step 3: Add: 15+10=25. The total area is 25 square units.",
    page6: "A helpful trick: sketch dashed lines to divide the composite shape into simple pieces before calculating — labeling each piece prevents missed or double-counted regions.",
    page7: "You learned to find the area of composite shapes by breaking them into simple polygons and adding or subtracting their areas, as in an L-shape with area 20 square units."
  },
  "Surface Area of Prisms": {
    page1: "In this lesson, you will learn to use nets to find the surface area of rectangular and triangular prisms.",
    page2: "Surface area is the total area of all the outer faces of a 3D shape. A net is a 2D pattern that folds up into the 3D shape, showing all its faces flattened out, which makes them easier to measure and add together.",
    page3: "The rule is: unfold the prism into its net, find the area of each face, and add all the face areas together to get the total surface area.",
    page4: "Let's find the surface area of a rectangular prism 4 x 3 x 2 (length x width x height). Step 1: Find area of each pair of faces: 2(4x3)=24, 2(4x2)=16, 2(3x2)=12. Step 2: Add: 24+16+12=52. The surface area is 52 square units.",
    page5: "Now let's find the surface area of a triangular prism with two triangular faces (base 6, height 4) and three rectangular faces each 6 by 5. Step 1: Triangle faces: 2 x (1/2x6x4)=24. Step 2: Rectangle faces: 3 x (6x5) = 90. Step 3: Add: 24+90=114. The surface area is 114 square units.",
    page6: "A helpful trick: a rectangular prism always has three pairs of matching faces — find the area of just three different faces, double each, and add.",
    page7: "You learned to find surface area by unfolding a prism into a net and adding the areas of all its faces, as in a 4x3x2 rectangular prism having a surface area of 52 square units."
  },
  "Volume of Rectangular Prisms": {
    page1: "In this lesson, you will learn to find the volume of rectangular prisms, including those with fractional edge lengths.",
    page2: "Volume measures how much space a 3D shape takes up, in cubic units. For a rectangular prism, volume is found by multiplying its three dimensions: length, width, and height — and this works the same way even when the edges are fractions.",
    page3: "The rule is: Volume = length × width × height, multiplying all three dimensions together, whether they are whole numbers or fractions.",
    page4: "Let's find the volume of a prism with length 5, width 3, and height 2. Step 1: Multiply length and width: 5x3=15. Step 2: Multiply by height: 15x2=30. The volume is 30 cubic units.",
    page5: "Now let's find the volume of a prism with length 1/2 ft, width 3 ft, and height 4 ft. Step 1: Multiply length and width: 1/2 x 3 = 3/2. Step 2: Multiply by height: 3/2 x 4 = 12/2 = 6. The volume is 6 cubic feet.",
    page6: "A helpful trick: when multiplying fractional dimensions, convert mixed numbers to improper fractions first — it keeps the multiplication simple and avoids mistakes.",
    page7: "You learned to find the volume of a rectangular prism using V = length × width × height, even with fractional edges, as in a prism with a 1/2 ft edge having a volume of 6 cubic feet."
  },
  "Statistical Questions": {
    page1: "In this lesson, you will learn to recognize statistical questions and understand what a data distribution shows.",
    page2: "A statistical question is one that anticipates variability in the data, meaning different answers are expected. 'How old is my teacher?' is not statistical since there's one clear answer, but 'How old are the students in my class?' is statistical, because ages will vary.",
    page3: "The rule is: a question is statistical if you expect to collect multiple different responses and need to look at the spread, or distribution, of the data to answer it.",
    page4: "Let's decide if 'How many pets does each student in the class have?' is statistical. Step 1: Different students will likely give different numbers of pets. Step 2: Since answers vary, this is a statistical question.",
    page5: "Now let's decide if 'How many days are in a week?' is statistical. Step 1: This has one fixed answer, 7, for everyone. Step 2: Since there's no variability, this is not a statistical question.",
    page6: "A helpful trick: ask yourself if you asked 20 different people this question, would you expect 20 different answers? If yes, it's likely statistical.",
    page7: "You learned that a statistical question expects variability in its answers, as in 'How many pets does each student have?' being statistical while 'How many days are in a week?' is not."
  },
  "Mean, Median, and Mode": {
    page1: "In this lesson, you will learn to calculate the mean, median, and mode to describe a data set.",
    page2: "Mean, median, and mode are all measures of center that summarize a data set with a single typical value. The mean is the average, the median is the middle value when data is ordered, and the mode is the most frequently occurring value.",
    page3: "The rule is: for mean, add all values and divide by the count. For median, order the data and find the middle value, or average the two middle values if there's an even count. For mode, find the value(s) that appear most often.",
    page4: "Let's find the mean, median, and mode of 4, 7, 4, 9, 6. Step 1: Mean: (4+7+4+9+6)÷5 = 30÷5 = 6. Step 2: Ordered: 4,4,6,7,9 — median is 6. Step 3: Mode is 4, since it appears twice.",
    page5: "Now let's find the mean and median of 2, 8, 5, 11. Step 1: Mean: (2+8+5+11)÷4=26÷4=6.5. Step 2: Ordered: 2,5,8,11 — middle two are 5 and 8, so median is (5+8)÷2=6.5.",
    page6: "A helpful trick: always order the data from least to greatest before finding the median — trying to find the middle of unordered data leads to mistakes.",
    page7: "You learned to calculate mean (average), median (middle value), and mode (most frequent value), as in the data set 4,7,4,9,6 having a mean and median of 6 and a mode of 4."
  },
  "Range and Variability": {
    page1: "In this lesson, you will learn to measure the spread of a data set using range and interquartile range.",
    page2: "While mean, median, and mode describe the center of data, range and interquartile range (IQR) describe how spread out or variable the data is. A larger range or IQR means the data values are more spread apart.",
    page3: "The rule is: Range = maximum value − minimum value. Interquartile range (IQR) = Q3 (upper quartile, the median of the upper half) − Q1 (lower quartile, the median of the lower half).",
    page4: "Let's find the range of 12, 5, 9, 18, 7. Step 1: Maximum is 18, minimum is 5. Step 2: Subtract: 18-5=13. The range is 13.",
    page5: "Now let's find the IQR of 2, 4, 5, 7, 9, 11, 12. Step 1: Median is 7, splitting into lower half (2,4,5) and upper half (9,11,12). Step 2: Q1, the median of the lower half, is 4. Q3, the median of the upper half, is 11. Step 3: IQR = 11-4=7.",
    page6: "A helpful trick: the IQR describes the spread of the middle 50% of the data and is less affected by extreme outliers than the range is.",
    page7: "You learned to measure data spread using range (max − min) and interquartile range (Q3 − Q1), as in a data set with a range of 13 and an IQR of 7."
  },
  "Dot Plots and Histograms": {
    page1: "In this lesson, you will learn to display and interpret data using dot plots and histograms.",
    page2: "A dot plot shows individual data values as dots above a number line, making it easy to see every data point and its frequency. A histogram groups data into equal-sized intervals called bins and uses bars to show how many values fall in each interval.",
    page3: "The rule is: for a dot plot, place one dot above the number line for each data value, stacking dots for repeated values. For a histogram, choose equal-width intervals, count how many data values fall in each interval, and draw a bar with that height.",
    page4: "Let's make a dot plot for test scores 80, 85, 80, 90, 85, 85. Step 1: List unique values: 80, 85, 90. Step 2: Count occurrences: 80 has 2 dots, 85 has 3 dots, 90 has 1 dot. Step 3: Stack dots above each value on the number line.",
    page5: "Now let's build a histogram for ages 12,13,13,15,16,17,19 using bins of size 3 (12-14, 15-17, 18-20). Step 1: Count values in each bin: 12-14 has 3 values, 15-17 has 3 values, 18-20 has 1 value. Step 2: Draw bars of heights 3, 3, 1 for the three bins.",
    page6: "A helpful trick: use a dot plot for smaller data sets where you want to see every value, and a histogram for larger data sets where grouping into bins makes the shape of the distribution clearer.",
    page7: "You learned to create and interpret dot plots, with individual dots per value, and histograms, with bars for grouped intervals, to visualize data distributions."
  },
  "Grade 6 Math Review": {
    page1: "In this lesson, you will review the key skills from Grade 6 math, including ratios, negative numbers, expressions, geometry, and statistics.",
    page2: "Throughout Grade 6, you learned to compare quantities with ratios and rates, work with negative numbers on the coordinate plane, write and solve algebraic expressions and equations, find area and volume of shapes, and describe data using statistics.",
    page3: "The rule is: when reviewing, revisit each unit's core method — ratio tables and unit rates, integer comparison and quadrants, inverse operations for equations, area and volume formulas, and mean/median/mode/range for data.",
    page4: "Let's review a ratio and equation problem together. If a recipe ratio is 3 cups flour to 2 cups sugar, how much flour is needed for 8 cups of sugar? Step 1: Set up 3:2 = x:8. Step 2: Scale factor: 8÷2=4. Step 3: Multiply: 3x4=12 cups of flour.",
    page5: "Now let's review a geometry and statistics problem. Find the area of a triangle with base 10 and height 6, then find the mean of 6, 8, and that area. Step 1: Triangle area: 1/2x10x6=30. Step 2: Mean of 6,8,30: (6+8+30)÷3=44÷3≈14.7.",
    page6: "A helpful trick: when reviewing for a test, work one problem from every unit rather than many problems from just one unit — this builds confidence across all the year's skills.",
    page7: "You reviewed the major Grade 6 math topics: ratios and rates, negative numbers and the coordinate plane, expressions and equations, area/surface area/volume, and statistics."
  },
  "Unit Rates with Fractions": {
    page1: "In this lesson, you will learn to compute unit rates when the quantities being compared involve fractions, such as miles per hour when distance and time are both fractions.",
    page2: "A unit rate compares a quantity to exactly 1 unit of another quantity. When the numbers involved are fractions, you find the unit rate by dividing the first fraction by the second.",
    page3: "The rule is: to divide by a fraction, multiply by its reciprocal (flip the second fraction and multiply), then simplify the result.",
    page4: "Let's find the unit rate if a runner covers 2/3 mile in 1/4 hour. Step 1: Set up 2/3 ÷ 1/4. Step 2: Multiply by the reciprocal: 2/3 x 4/1 = 8/3. Step 3: 8/3 = 2 2/3 miles per hour.",
    page5: "Now let's find the unit rate if a recipe uses 3/4 cup of sugar for 1/2 of a batch. Step 1: Set up 3/4 ÷ 1/2. Step 2: Multiply by the reciprocal: 3/4 x 2/1 = 6/4. Step 3: Simplify: 6/4 = 1 1/2 cups per whole batch.",
    page6: "A helpful trick: remember 'Keep, Change, Flip' — keep the first fraction, change division to multiplication, and flip the second fraction before multiplying.",
    page7: "You learned to find unit rates with fractions by dividing the first quantity by the second using the reciprocal method, as in 2/3 mile ÷ 1/4 hour equaling 2 2/3 miles per hour."
  },
  "Identifying Proportional Relationships": {
    page1: "In this lesson, you will learn to determine whether a relationship between two quantities is proportional using tables, graphs, or equations.",
    page2: "A relationship is proportional if the ratio between the two quantities stays constant for every pair of values, and its graph is a straight line that passes through the origin (0, 0).",
    page3: "The rule is: divide y by x for every pair in a table — if the ratio y/x is the same every time, the relationship is proportional; on a graph, it must be a straight line through the origin.",
    page4: "Let's check the table x: 2, 4, 6 and y: 6, 12, 18. Step 1: Divide each pair: 6/2=3, 12/4=3, 18/6=3. Step 2: Every ratio equals 3. Step 3: Since the ratio is constant, this relationship is proportional.",
    page5: "Now let's check the table x: 1, 2, 3 and y: 3, 5, 7. Step 1: Divide each pair: 3/1=3, 5/2=2.5, 7/3≈2.33. Step 2: The ratios are different. Step 3: Since the ratio is not constant, this relationship is not proportional.",
    page6: "A helpful trick: a proportional graph must pass through the origin — if the line crosses the y-axis anywhere other than (0,0), it is not proportional, even if it's straight.",
    page7: "You learned to identify proportional relationships by checking that y/x is constant across all pairs and that the graph passes through the origin."
  },
  "Constant of Proportionality": {
    page1: "In this lesson, you will learn to identify the constant of proportionality, k, in tables, graphs, and equations of the form y = kx.",
    page2: "The constant of proportionality is the fixed number that relates x and y in a proportional relationship. It represents how much y changes for every one unit of x, just like a unit rate.",
    page3: "The rule is: from a table, divide any y value by its matching x value (k = y/x); from a graph, use rise over run between any point and the origin; from an equation y = kx, k is the number multiplying x.",
    page4: "Let's find k from the table x: 3, 6, 9 and y: 12, 24, 36. Step 1: Pick a pair, like x=3, y=12. Step 2: Divide: k = 12/3 = 4. Step 3: The equation is y = 4x.",
    page5: "Now let's find k from a graph that passes through the point (5, 15). Step 1: Divide y by x: k = 15/5 = 3. Step 2: The equation is y = 3x. Step 3: This means y increases by 3 for every 1 unit increase in x.",
    page6: "A helpful trick: the constant of proportionality is exactly the same idea as a unit rate — it tells you 'how much y for every 1 x.'",
    page7: "You learned to find the constant of proportionality k from tables, graphs, and equations, always by dividing a y value by its matching x value."
  },
  "Graphing Proportional Relationships": {
    page1: "In this lesson, you will learn to graph proportional relationships and interpret the unit rate as the slope of the line.",
    page2: "A proportional relationship graphs as a straight line that passes through the origin. The steepness of the line, called the slope, is equal to the constant of proportionality k.",
    page3: "The rule is: to graph y = kx, plot the origin (0,0) first, then use k as rise over run to plot a second point, and draw a straight line through both points.",
    page4: "Let's graph y = 2x. Step 1: Plot the origin (0,0). Step 2: Since k=2, move right 1 and up 2 to plot (1,2). Step 3: Draw a straight line through (0,0) and (1,2), extending in both directions.",
    page5: "Now let's find k from a graph that passes through (0,0) and (4,12). Step 1: Rise/run = 12/4. Step 2: Simplify: k = 3. Step 3: The equation is y = 3x, meaning the line rises 3 units for every 1 unit across.",
    page6: "A helpful trick: always check that the line passes through the origin before calling it proportional — a straight line that misses (0,0) is not a proportional relationship.",
    page7: "You learned to graph proportional relationships as straight lines through the origin and to read the unit rate as the slope, or steepness, of that line."
  },
  "Proportion Word Problems": {
    page1: "In this lesson, you will learn to solve multi-step real-world ratio and percent problems by setting up and solving proportions.",
    page2: "A proportion is an equation stating that two ratios are equal. Many real-world problems, like scaling recipes or converting map distances, can be solved by setting up a proportion and solving for the unknown.",
    page3: "The rule is: write two equal ratios with matching units in the same position, then cross multiply (multiply diagonally) and solve for the unknown variable.",
    page4: "Let's solve: if 3 pens cost $6, how much do 8 pens cost? Step 1: Set up 3 pens/$6 = 8 pens/x. Step 2: Cross multiply: 3x = 6 x 8 = 48. Step 3: Divide: x = 48 ÷ 3 = $16.",
    page5: "Now let's solve: a map has a scale of 1 inch to 25 miles. Two cities are 4.5 inches apart on the map. Step 1: Set up 1 inch/25 miles = 4.5 inches/x. Step 2: Cross multiply: x = 4.5 x 25. Step 3: x = 112.5 miles.",
    page6: "A helpful trick: label the units in both ratios the same way, like 'pens over dollars' in both spots, so your proportion isn't set up upside down.",
    page7: "You learned to solve proportion word problems by setting up two equal ratios with matching units and cross multiplying to find the unknown value."
  },
  "Adding and Subtracting Integers": {
    page1: "In this lesson, you will learn to add and subtract positive and negative integers using number line models.",
    page2: "Integers include positive numbers, negative numbers, and zero. On a number line, adding a positive number moves right, adding a negative number moves left, and subtracting is the same as adding the opposite.",
    page3: "The rule is: for same signs, add the absolute values and keep that sign; for different signs, subtract the smaller absolute value from the larger and keep the sign of the number with the greater absolute value.",
    page4: "Let's solve -5 + 8. Step 1: The signs are different, so subtract: 8 - 5 = 3. Step 2: Keep the sign of the number with the larger absolute value, which is 8 (positive). Step 3: The answer is 3.",
    page5: "Now let's solve -3 - 7. Step 1: Rewrite subtraction as adding the opposite: -3 + (-7). Step 2: Same signs, so add: 3 + 7 = 10. Step 3: Keep the negative sign: the answer is -10.",
    page6: "A helpful trick: 'same signs, add and keep; different signs, subtract and keep the sign of the bigger number' — say this rule out loud every time you add or subtract integers.",
    page7: "You learned to add and subtract integers using number line reasoning, including rewriting subtraction as adding the opposite, as in -3 - 7 becoming -3 + (-7) = -10."
  },
  "Multiplying and Dividing Integers": {
    page1: "In this lesson, you will learn to multiply and divide integers and apply the rules for determining the sign of the result.",
    page2: "When multiplying or dividing integers, the sign of the answer depends only on the signs of the numbers involved, not their size.",
    page3: "The rule is: multiply or divide the absolute values first, then apply the sign rule — same signs give a positive result, different signs give a negative result.",
    page4: "Let's solve -6 x 4. Step 1: Multiply the absolute values: 6 x 4 = 24. Step 2: The signs are different (negative and positive). Step 3: The answer is -24.",
    page5: "Now let's solve -36 ÷ -9. Step 1: Divide the absolute values: 36 ÷ 9 = 4. Step 2: The signs are the same (both negative). Step 3: The answer is 4.",
    page6: "A helpful trick: count the number of negative signs in the problem — an even number of negatives gives a positive answer, and an odd number of negatives gives a negative answer.",
    page7: "You learned to multiply and divide integers by finding the answer's magnitude first, then applying the sign rule: same signs make a positive result, different signs make a negative result."
  },
  "Adding and Subtracting Rational Numbers": {
    page1: "In this lesson, you will learn to add and subtract rational numbers, including fractions, decimals, and negative numbers.",
    page2: "Rational numbers include integers, fractions, and decimals. Adding and subtracting them uses the same sign rules as integers, combined with finding common denominators for fractions or aligning decimal points for decimals.",
    page3: "The rule is: convert fractions to a common denominator before adding or subtracting, align decimal points for decimals, and apply the same-sign/different-sign rules for integers throughout.",
    page4: "Let's solve -1/2 + 3/4. Step 1: Find a common denominator: 4. Step 2: Rewrite -1/2 as -2/4. Step 3: Add: -2/4 + 3/4 = 1/4.",
    page5: "Now let's solve -2.5 - 1.75. Step 1: Rewrite as adding the opposite: -2.5 + (-1.75). Step 2: Same signs, so add the magnitudes: 2.5 + 1.75 = 4.25. Step 3: Keep the negative sign: the answer is -4.25.",
    page6: "A helpful trick: treat subtraction of rational numbers exactly like integers — rewrite it as 'adding the opposite' before you do anything else.",
    page7: "You learned to add and subtract rational numbers by finding common denominators or aligning decimals and applying integer sign rules, as in -2.5 - 1.75 = -4.25."
  },
  "Multiplying and Dividing Rational Numbers": {
    page1: "In this lesson, you will learn to multiply and divide rational numbers and interpret the sign of the result.",
    page2: "Multiplying and dividing fractions, decimals, and negative numbers follows the same sign rules as integers: same signs give a positive result, different signs give a negative result.",
    page3: "The rule is: multiply numerators and denominators for fractions (or multiply decimals normally), then apply the sign rule based on how many negative numbers are involved.",
    page4: "Let's solve -2/3 x 3/5. Step 1: Multiply numerators: -2 x 3 = -6. Step 2: Multiply denominators: 3 x 5 = 15. Step 3: Simplify -6/15 to -2/5.",
    page5: "Now let's solve -0.4 x -5. Step 1: Multiply the magnitudes: 0.4 x 5 = 2. Step 2: Both signs are negative, so the result is positive. Step 3: The answer is 2.",
    page6: "A helpful trick: simplify or cancel common factors in fractions before multiplying — it keeps the numbers smaller and easier to work with.",
    page7: "You learned to multiply and divide rational numbers by computing the magnitude first and then applying the sign rule, as in -0.4 x -5 = 2 because two negatives make a positive."
  },
  "Rational Number Word Problems": {
    page1: "In this lesson, you will learn to solve real-world problems involving all four operations — addition, subtraction, multiplication, and division — with rational numbers.",
    page2: "Real-world situations like temperature changes, elevation, and money often require combining several operations with positive and negative rational numbers.",
    page3: "The rule is: identify the operation from context clues (gain/loss, above/below, total, split evenly), translate the situation into a numeric expression, and compute carefully while tracking signs.",
    page4: "Let's solve: the temperature was -4°F and rose 9°F. Step 1: Rising means adding. Step 2: -4 + 9 = 5. Step 3: The new temperature is 5°F.",
    page5: "Now let's solve: a submarine at -120 feet dives to 3 times its depth. Step 1: 'Times its depth' means multiply. Step 2: -120 x 3 = -360. Step 3: The submarine is now at -360 feet.",
    page6: "A helpful trick: sketch a quick number line or vertical scale for elevation and temperature problems — seeing the direction of change helps you pick the right operation.",
    page7: "You learned to solve rational number word problems by identifying the correct operation from context and computing with careful attention to sign, as in -120 feet x 3 = -360 feet."
  },
  "Simplifying Expressions with Rational Coefficients": {
    page1: "In this lesson, you will learn to simplify linear expressions that have rational (fraction or decimal) coefficients by combining like terms.",
    page2: "Like terms share the same variable raised to the same power. To simplify an expression, combine the coefficients of like terms, even when those coefficients are fractions or decimals.",
    page3: "The rule is: use the distributive property to remove any parentheses first, then add or subtract the coefficients of like terms, keeping the variable part unchanged.",
    page4: "Let's simplify 1/2x + 3 - 1/4x + 5. Step 1: Combine the x terms: 1/2x - 1/4x = 1/4x. Step 2: Combine the constants: 3 + 5 = 8. Step 3: The simplified expression is 1/4x + 8.",
    page5: "Now let's simplify 0.5(4x - 6) + 2x. Step 1: Distribute 0.5: 0.5(4x) - 0.5(6) = 2x - 3. Step 2: Combine with the remaining term: 2x - 3 + 2x. Step 3: Add like terms: 4x - 3.",
    page6: "A helpful trick: find a common denominator for fraction coefficients the same way you would when adding two fractions — it makes combining like terms much easier.",
    page7: "You learned to simplify expressions with rational coefficients by distributing first and then combining like terms, as in 1/2x - 1/4x + 8 = 1/4x + 8."
  },
  "Factoring Expressions": {
    page1: "In this lesson, you will learn to factor linear expressions by pulling out the greatest common factor using the distributive property.",
    page2: "Factoring is the reverse of distributing. Instead of multiplying a number through parentheses, you find a common factor shared by every term and write it outside the parentheses.",
    page3: "The rule is: find the greatest common factor (GCF) of all the coefficients (and any shared variable), then write the expression as GCF times the sum or difference of the remaining terms.",
    page4: "Let's factor 6x + 9. Step 1: Find the GCF of 6 and 9, which is 3. Step 2: Divide each term by 3: 6x÷3=2x and 9÷3=3. Step 3: Write it as 3(2x + 3).",
    page5: "Now let's factor 12x - 18y. Step 1: Find the GCF of 12 and 18, which is 6. Step 2: Divide each term by 6: 12x÷6=2x and 18y÷6=3y. Step 3: Write it as 6(2x - 3y).",
    page6: "A helpful trick: check your factoring by distributing the factored form back out — it should exactly match the original expression.",
    page7: "You learned to factor expressions by finding the greatest common factor and writing it outside parentheses, as in 6x + 9 factoring to 3(2x + 3)."
  },
  "Solving Multi-Step Equations": {
    page1: "In this lesson, you will learn to solve multi-step equations that involve rational numbers, combining like terms and using inverse operations.",
    page2: "A multi-step equation often requires simplifying each side first — by distributing or combining like terms — before you can isolate the variable using inverse operations.",
    page3: "The rule is: simplify both sides of the equation completely, then undo operations in reverse order (addition/subtraction, then multiplication/division) to isolate the variable, doing the same thing to both sides.",
    page4: "Let's solve 2x + 5 = 17. Step 1: Subtract 5 from both sides: 2x = 12. Step 2: Divide both sides by 2: x = 6. Step 3: Check: 2(6)+5=17. ✓",
    page5: "Now let's solve 3(x - 2) = 15. Step 1: Distribute: 3x - 6 = 15. Step 2: Add 6 to both sides: 3x = 21. Step 3: Divide by 3: x = 7.",
    page6: "A helpful trick: always simplify and distribute completely before you start moving terms across the equal sign — it prevents careless errors.",
    page7: "You learned to solve multi-step equations by simplifying each side and then applying inverse operations, as in 3(x-2)=15 giving x=7."
  },
  "Equations with Variables on Both Sides": {
    page1: "In this lesson, you will learn to solve equations that have variable terms on both sides of the equal sign.",
    page2: "When variables appear on both sides of an equation, you first need to move all the variable terms to one side by adding or subtracting the same term from both sides.",
    page3: "The rule is: choose one side to move the variable terms to, add or subtract that term from both sides to eliminate it from the other side, then solve the resulting one-variable equation.",
    page4: "Let's solve 5x + 3 = 2x + 12. Step 1: Subtract 2x from both sides: 3x + 3 = 12. Step 2: Subtract 3: 3x = 9. Step 3: Divide by 3: x = 3.",
    page5: "Now let's solve 7 - 2x = 3x - 8. Step 1: Add 2x to both sides: 7 = 5x - 8. Step 2: Add 8 to both sides: 15 = 5x. Step 3: Divide by 5: x = 3.",
    page6: "A helpful trick: move the variable term with the smaller coefficient — it keeps your remaining coefficient positive and easier to work with.",
    page7: "You learned to solve equations with variables on both sides by collecting all variable terms on one side first, as in 5x+3=2x+12 giving x=3."
  },
  "Translating Word Problems into Equations": {
    page1: "In this lesson, you will learn to translate real-world word problems into algebraic equations and then solve them.",
    page2: "Key phrases in word problems map to math operations: 'more than' and 'sum' mean addition, 'less than' means subtraction (in reverse order), 'times' or 'product' means multiplication, and 'is' means equals.",
    page3: "The rule is: define a variable for the unknown quantity, translate the sentence into an equation phrase by phrase, then solve the equation using inverse operations.",
    page4: "Let's translate and solve: 'Five more than twice a number is 17.' Step 1: Let n be the number: 2n + 5 = 17. Step 2: Subtract 5: 2n = 12. Step 3: Divide by 2: n = 6.",
    page5: "Now let's translate and solve: 'Three less than a number, divided by 4, is 5.' Step 1: (n - 3)/4 = 5. Step 2: Multiply both sides by 4: n - 3 = 20. Step 3: Add 3: n = 23.",
    page6: "A helpful trick: watch out for 'less than,' which reverses the order — 'three less than n' means n - 3, not 3 - n.",
    page7: "You learned to translate word problems into equations using key phrases and then solve them, as in 'five more than twice a number is 17' becoming 2n+5=17 with n=6."
  },
  "Solving Inequalities": {
    page1: "In this lesson, you will learn to solve multi-step inequalities and correctly interpret the solution set.",
    page2: "Inequalities compare expressions using <, >, ≤, or ≥ instead of an equal sign. You solve them almost the same way as equations, using inverse operations to isolate the variable.",
    page3: "The rule is: isolate the variable using inverse operations just like an equation, but flip the inequality symbol whenever you multiply or divide both sides by a negative number.",
    page4: "Let's solve 3x - 4 < 11. Step 1: Add 4 to both sides: 3x < 15. Step 2: Divide both sides by 3: x < 5. Step 3: The solution is all numbers less than 5.",
    page5: "Now let's solve -2x + 6 ≥ 10. Step 1: Subtract 6 from both sides: -2x ≥ 4. Step 2: Divide both sides by -2 and flip the sign: x ≤ -2. Step 3: The solution is all numbers less than or equal to -2.",
    page6: "A helpful trick: whenever you multiply or divide by a negative number, immediately flip the inequality sign — it's the one rule that's different from solving equations.",
    page7: "You learned to solve multi-step inequalities using inverse operations, remembering to flip the inequality sign when multiplying or dividing by a negative, as in -2x+6≥10 giving x≤-2."
  },
  "Graphing Inequality Solutions": {
    page1: "In this lesson, you will learn to graph the solution set of an inequality on a number line.",
    page2: "The solution to an inequality is a whole range of values, shown on a number line as a ray or segment. An open circle means the boundary point is not included, and a closed circle means it is included.",
    page3: "The rule is: plot the boundary value with an open circle for < or > and a closed circle for ≤ or ≥, then shade the direction of the number line that satisfies the inequality.",
    page4: "Let's graph x > 3. Step 1: Since it's strictly greater than, use an open circle at 3. Step 2: Shade to the right, toward larger numbers. Step 3: The arrow points right, showing all numbers greater than 3.",
    page5: "Now let's graph x ≤ -2. Step 1: Since it includes -2, use a closed (filled-in) circle at -2. Step 2: Shade to the left, toward smaller numbers. Step 3: The arrow points left, showing all numbers less than or equal to -2.",
    page6: "A helpful trick: a closed circle 'closes the deal' — it means the boundary number is included because the inequality has an 'or equal to' part.",
    page7: "You learned to graph inequality solutions using open circles for strict inequalities and closed circles for 'or equal to' inequalities, shading in the correct direction."
  },
  "Percent Increase and Decrease": {
    page1: "In this lesson, you will learn to solve problems involving percent increase and percent decrease.",
    page2: "Percent change compares how much a quantity has changed to its original amount, expressed as a percent. An increase makes the quantity larger, and a decrease makes it smaller.",
    page3: "The rule is: find the percent amount by multiplying the percent (as a decimal) by the original number, then add that amount for an increase or subtract it for a decrease.",
    page4: "Let's solve: a $40 shirt increases in price by 25%. Step 1: Find 25% of 40: 0.25 x 40 = 10. Step 2: Add to the original: 40 + 10 = 50. Step 3: The new price is $50.",
    page5: "Now let's solve: a population of 200 decreases by 15%. Step 1: Find 15% of 200: 0.15 x 200 = 30. Step 2: Subtract from the original: 200 - 30 = 170. Step 3: The new population is 170.",
    page6: "A helpful trick: to increase by a percent in one step, multiply by (1 + the decimal percent); to decrease, multiply by (1 - the decimal percent) — for example, 40 x 1.25 = 50 directly.",
    page7: "You learned to solve percent increase and decrease problems by finding the percent amount and adding or subtracting it from the original, as in a $40 shirt increasing 25% to $50."
  },
  "Simple Interest": {
    page1: "In this lesson, you will learn to calculate simple interest using the formula I = prt, where p is principal, r is rate, and t is time.",
    page2: "Simple interest is the amount of money earned or owed on a principal (starting) amount over a period of time, at a fixed interest rate, without compounding.",
    page3: "The rule is: convert the interest rate to a decimal, then multiply principal x rate x time (in years) to find the interest earned or owed; add the interest to the principal to find the total amount.",
    page4: "Let's find the interest on $500 at 4% annual interest for 3 years. Step 1: Convert 4% to 0.04. Step 2: Multiply: I = 500 x 0.04 x 3. Step 3: I = $60.",
    page5: "Now let's find the total amount owed on $1200 at 5% interest for 2 years. Step 1: Find the interest: I = 1200 x 0.05 x 2 = $120. Step 2: Add to the principal: 1200 + 120. Step 3: The total amount is $1320.",
    page6: "A helpful trick: always convert the percent rate to a decimal (divide by 100) before plugging it into the I = prt formula.",
    page7: "You learned to calculate simple interest using I = prt, as in $500 at 4% for 3 years earning $60 in interest."
  },
  "Percent Word Problems": {
    page1: "In this lesson, you will learn to solve multi-step real-world percent problems, including tax, tip, and discount.",
    page2: "Percent problems in daily life often start with a base price and require adding a percent for tax or tip, or subtracting a percent for a discount, to find the final amount.",
    page3: "The rule is: find the percent amount by multiplying the percent (as a decimal) by the base price, then add that amount for tax/tip or subtract it for a discount.",
    page4: "Let's solve: a $60 meal has an 18% tip. Step 1: Find 18% of 60: 0.18 x 60 = 10.80. Step 2: Add to the base: 60 + 10.80. Step 3: The total is $70.80.",
    page5: "Now let's solve: an $80 jacket is 30% off. Step 1: Find 30% of 80: 0.30 x 80 = 24. Step 2: Subtract from the base: 80 - 24. Step 3: The sale price is $56.",
    page6: "A helpful trick: for tax or tip, multiply the base price by (1 + the percent); for a discount, multiply by (1 - the percent) — this finds the final amount in a single step.",
    page7: "You learned to solve multi-step percent word problems involving tax, tip, and discount by finding the percent amount and adding or subtracting it from the base price."
  },
  "Scale Drawings": {
    page1: "In this lesson, you will learn to compute actual lengths and areas from a scale drawing using a given scale factor.",
    page2: "A scale drawing represents a real object or space with lengths that are proportional to the actual lengths, connected by a scale such as 1 inch to 5 miles.",
    page3: "The rule is: set up a proportion between the scale measurement and the actual measurement, keeping units consistent, then cross multiply or use the scale factor to solve for the unknown length.",
    page4: "Let's solve: a scale is 1 cm to 5 m. A wall measures 8 cm on the drawing. Step 1: Set up 1 cm/5 m = 8 cm/x. Step 2: Cross multiply: x = 8 x 5. Step 3: The actual wall is 40 m long.",
    page5: "Now let's solve: a scale factor is 1:200, and a room is actually 12 m long. Step 1: Set up actual length ÷ scale factor: 12 ÷ 200. Step 2: Compute: 0.06 m. Step 3: On the drawing, the room is 6 cm long.",
    page6: "A helpful trick: if lengths scale by a factor k, area scales by k² — so doubling the scale factor of a drawing multiplies the represented area by 4, not 2.",
    page7: "You learned to compute actual and scaled lengths from a scale drawing by setting up and solving a proportion based on the given scale."
  },
  "Circumference and Area of Circles": {
    page1: "In this lesson, you will learn to find the circumference and area of circles using either the radius or the diameter.",
    page2: "Circumference is the distance around a circle, and area is the space inside it. Both formulas depend on the radius (the distance from the center to the edge) and the constant π, which is approximately 3.14.",
    page3: "The rule is: circumference C = 2πr (or C = πd, since diameter is twice the radius); area A = πr².",
    page4: "Let's find the circumference and area of a circle with radius 5. Step 1: Circumference: C = 2π(5) = 10π ≈ 31.4. Step 2: Area: A = π(5)² = 25π ≈ 78.5. Step 3: So C ≈ 31.4 units and A ≈ 78.5 square units.",
    page5: "Now let's find the circumference and area of a circle with diameter 12 (radius 6). Step 1: Circumference: C = π(12) = 12π ≈ 37.68. Step 2: Area: A = π(6)² = 36π ≈ 113.04. Step 3: So C ≈ 37.68 units and A ≈ 113.04 square units.",
    page6: "A helpful trick: circumference uses the radius to the first power (2πr), but area uses the radius squared (πr²) — don't accidentally square the radius when finding circumference.",
    page7: "You learned to find the circumference and area of circles using C = 2πr and A = πr², given either the radius or diameter."
  },
  "Angle Relationships": {
    page1: "In this lesson, you will learn to use facts about supplementary, complementary, vertical, and adjacent angles to solve for unknown angle measures.",
    page2: "Complementary angles add up to 90°, supplementary angles add up to 180°, vertical angles (formed by intersecting lines) are always equal, and adjacent angles share a common ray and vertex.",
    page3: "The rule is: identify the angle relationship shown in the diagram or description, then write an equation using the sum (90° or 180°) or the equality of vertical angles, and solve for the unknown.",
    page4: "Let's solve: two angles are complementary, and one measures 35°. Step 1: Complementary angles sum to 90°. Step 2: Set up 35 + x = 90. Step 3: Subtract 35: x = 55°.",
    page5: "Now let's solve: two supplementary angles measure 3x and 2x + 30. Step 1: Supplementary angles sum to 180°: 3x + 2x + 30 = 180. Step 2: Combine like terms: 5x + 30 = 180. Step 3: Subtract 30 and divide by 5: x = 30, so the angles are 90° and 90°.",
    page6: "A helpful trick: remember 'Complementary = Corner (90°)' and 'Supplementary = Straight (180°)' — C comes before S alphabetically, just like 90 comes before 180 numerically.",
    page7: "You learned to use complementary, supplementary, and vertical angle relationships to write equations and solve for unknown angle measures."
  },
  "Cross-Sections of 3D Figures": {
    page1: "In this lesson, you will learn to describe the two-dimensional cross-sections formed when a three-dimensional figure is sliced by a plane.",
    page2: "A cross-section is the flat, 2D shape you see when you slice through a solid. The shape of the cross-section depends on the solid's shape and the direction of the slice.",
    page3: "The rule is: picture the plane cutting through the solid — parallel to the base, perpendicular to the base, or at an angle — and identify the outline exposed at that cut.",
    page4: "Let's find the cross-section of a rectangular prism sliced parallel to its base. Step 1: The base is a rectangle. Step 2: Slicing parallel to it exposes the same shape. Step 3: The cross-section is a rectangle.",
    page5: "Now let's find the cross-sections of a cone sliced two different ways. Step 1: Slicing parallel to the circular base gives a circle. Step 2: Slicing straight down through the apex gives a triangle. Step 3: The same solid can have different cross-sections depending on the slice direction.",
    page6: "A helpful trick: imagine slicing a loaf of bread — the shape of each slice depends entirely on the angle of the knife relative to the loaf.",
    page7: "You learned to describe the 2D cross-sections created by slicing 3D figures, and that the direction of the slice determines the resulting shape."
  },
  "Surface Area and Volume of Solids": {
    page1: "In this lesson, you will learn to solve real-world problems involving the surface area and volume of prisms and pyramids.",
    page2: "Surface area is the total area of all the outer faces of a solid, while volume is the amount of space inside it. Each type of solid has its own formulas for these measurements.",
    page3: "The rule is: for prisms, surface area equals the sum of the areas of all faces (found using a net), and volume equals base area times height; for pyramids, volume equals 1/3 times base area times height.",
    page4: "Let's find the surface area and volume of a rectangular prism with length 4, width 3, and height 5. Step 1: Surface area: SA = 2(4x3 + 4x5 + 3x5) = 2(12+20+15) = 2(47) = 94 square units. Step 2: Volume: V = 4x3x5 = 60 cubic units.",
    page5: "Now let's find the volume of a square pyramid with base side 6 and height 8. Step 1: Base area: 6x6=36. Step 2: Volume: V = 1/3 x 36 x 8. Step 3: V = 96 cubic units.",
    page6: "A helpful trick: to find surface area, imagine unfolding the solid into its flat net — then just add up the area of each individual flat shape.",
    page7: "You learned to find the surface area and volume of prisms and pyramids using nets and the formulas V = Bh for prisms and V = 1/3 Bh for pyramids."
  },
  "Probability of Simple Events": {
    page1: "In this lesson, you will learn to find the probability of a simple event and express it as a fraction, decimal, and percent.",
    page2: "Probability measures how likely an event is to happen. It is calculated by comparing the number of favorable outcomes to the total number of possible outcomes.",
    page3: "The rule is: P(event) = number of favorable outcomes ÷ total number of possible outcomes; this fraction can be converted to a decimal or percent.",
    page4: "Let's find the probability of drawing a red marble from a bag with 3 red and 5 blue marbles. Step 1: Total marbles: 3+5=8. Step 2: Favorable outcomes: 3 red. Step 3: P(red) = 3/8 = 0.375 = 37.5%.",
    page5: "Now let's find the probability of rolling a number greater than 4 on a standard die. Step 1: Total outcomes: 6. Step 2: Favorable outcomes: 5 and 6, so 2 outcomes. Step 3: P = 2/6 = 1/3 ≈ 33.3%.",
    page6: "A helpful trick: probability is always between 0 (impossible) and 1 (certain) — if your calculated probability falls outside that range, recheck your work.",
    page7: "You learned to find the probability of simple events as a fraction, decimal, and percent by dividing favorable outcomes by total possible outcomes."
  },
  "Experimental vs Theoretical Probability": {
    page1: "In this lesson, you will learn to compare experimental probability, based on actual trial results, with theoretical probability, based on mathematical reasoning.",
    page2: "Theoretical probability is calculated using a formula based on all possible equally likely outcomes. Experimental probability is calculated from the results of actually performing trials or observations.",
    page3: "The rule is: theoretical probability = favorable outcomes ÷ total possible outcomes; experimental probability = number of times the event occurred ÷ total number of trials conducted.",
    page4: "Let's compare: a coin is flipped 50 times and lands heads 28 times. Step 1: Experimental P(heads) = 28/50 = 0.56. Step 2: Theoretical P(heads) = 1/2 = 0.5. Step 3: The experimental result is close to, but not exactly, the theoretical probability.",
    page5: "Now let's compare a 4-section spinner. Step 1: Theoretical P(section 1) = 1/4 = 0.25. Step 2: In 20 spins, section 1 came up 7 times: experimental P = 7/20 = 0.35. Step 3: The experimental probability differs from theoretical because of chance in a limited number of trials.",
    page6: "A helpful trick: the more trials you run, the closer the experimental probability tends to get to the theoretical probability — this is called the law of large numbers.",
    page7: "You learned to compare experimental probability, based on trial results, with theoretical probability, based on calculation, and that more trials bring them closer together."
  },
  "Compound Events": {
    page1: "In this lesson, you will learn to find the probability of compound events, which involve two or more simple events, using organized lists and tree diagrams.",
    page2: "A compound event happens when two or more simple events occur together, such as flipping a coin and rolling a die at the same time.",
    page3: "The rule is: list all possible outcomes using a tree diagram or organized list, then find P(compound event) = favorable combined outcomes ÷ total combined outcomes; for independent events, you can also multiply the individual probabilities.",
    page4: "Let's find the probability of flipping heads and rolling a 6. Step 1: P(heads) = 1/2. Step 2: P(rolling a 6) = 1/6. Step 3: Since the events are independent, multiply: 1/2 x 1/6 = 1/12.",
    page5: "Now let's find the probability that two spinners, each with 3 equal sections (A, B, C), both land on A. Step 1: Total combined outcomes: 3 x 3 = 9. Step 2: Favorable outcome: only (A, A), so 1 outcome. Step 3: P = 1/9, which matches 1/3 x 1/3.",
    page6: "A helpful trick: for independent events, the word 'and' means multiply — just multiply the individual probabilities together to get the compound probability.",
    page7: "You learned to find the probability of compound events using tree diagrams, organized lists, and by multiplying individual probabilities for independent events."
  },
  "Sampling and Populations": {
    page1: "In this lesson, you will learn to use random sampling to draw reasonable inferences about a larger population.",
    page2: "A population is the entire group being studied, while a sample is a smaller, randomly selected subset used to estimate characteristics of that population without surveying everyone.",
    page3: "The rule is: a random sample should fairly represent the population; use the sample's proportion or statistic to estimate the same measure for the whole population, and larger random samples tend to give more reliable estimates.",
    page4: "Let's solve: a random sample of 50 students from a school of 800 shows 30 prefer pizza. Step 1: Find the sample proportion: 30/50 = 0.6. Step 2: Apply that proportion to the population: 0.6 x 800. Step 3: About 480 students in the whole school likely prefer pizza.",
    page5: "Now let's solve: two random samples of 40 fish from a lake found average lengths of 12 inches and 13 inches. Step 1: Compare the two sample means: 12 in. and 13 in. Step 2: Since they are close together, they suggest a consistent estimate. Step 3: The lake's fish are likely typically around 12 to 13 inches long.",
    page6: "A helpful trick: a sample must be both random and large enough to fairly represent the population — a small or biased sample can lead to misleading conclusions.",
    page7: "You learned to use random samples to estimate characteristics of a larger population, and that larger, truly random samples produce more reliable estimates."
  },
  "Grade 7 Math Review": {
    page1: "In this lesson, you will review the key skills from Grade 7 math, including proportional relationships, rational numbers, equations, inequalities, percent, geometry, and probability.",
    page2: "Throughout Grade 7, you learned to identify and graph proportional relationships, add/subtract/multiply/divide rational numbers, solve multi-step equations and inequalities, solve percent and interest problems, find measurements of circles and solids, and calculate probability of simple and compound events.",
    page3: "The rule is: when reviewing, revisit each unit's core method — constant of proportionality for ratios, sign rules for rational numbers, inverse operations for equations and inequalities, percent formulas, circle and solid formulas, and favorable-over-total for probability.",
    page4: "Let's review a proportion and equation problem together. If 3 notebooks cost $12, and a solved equation for the total cost of n notebooks is c = 4n, find the cost of 7 notebooks. Step 1: Unit rate: 12÷3=4. Step 2: c = 4(7). Step 3: c = $28.",
    page5: "Now let's review a geometry and probability problem. Find the area of a circle with radius 4, then find the probability of rolling a number less than that area's tens digit on a die. Step 1: Area: π(4)²=16π≈50.24. Step 2: Tens digit context aside, practice reading such combined problems slowly, one step at a time. Step 3: This kind of multi-step reasoning is exactly what a review should reinforce.",
    page6: "A helpful trick: when reviewing for a test, work one problem from every unit rather than many problems from just one unit — this builds confidence across the whole year's skills.",
    page7: "You reviewed the major Grade 7 math topics: proportional relationships, operations with rational numbers, expressions and equations, inequalities and percent, geometry, and probability and statistics."
  }
};
if (typeof module !== 'undefined') module.exports = MATH_LESSON_CONTENT;
