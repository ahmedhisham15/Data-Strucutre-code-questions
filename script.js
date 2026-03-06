const codeQuestions = [
  {
    type: "Code",
    question: "What does this code print?",
    code: `stack<int> s;
for(int i = 1; i <= 4; i++) s.push(i);
while(!s.empty()){
  cout << s.top() * 2 << " ";
  s.pop();
}`,
    options: ["2 4 6 8", "8 6 4 2", "4 3 2 1", "1 2 3 4"],
    correct: 1,
    explanation: "The stack stores 1, 2, 3, 4. It pops in reverse order: 4, 3, 2, 1. Multiplying each by 2 gives 8 6 4 2."
  },
  {
    type: "Code",
    question: "What is the output?",
    code: `stack<int> s;
s.push(2);
s.push(4);
s.push(6);
int x = s.top(); s.pop();
s.push(x + s.top());
cout << s.top();`,
    options: ["8", "10", "12", "14"],
    correct: 1,
    explanation: "x = 6, then after pop the new top is 4. Push 6 + 4 = 10, so the top is 10."
  },
  {
    type: "Code",
    question: "What does this code print?",
    code: `queue<int> q;
for(int i = 1; i <= 5; i++) q.push(i);
for(int i = 0; i < 2; i++){
  q.push(q.front());
  q.pop();
}
while(!q.empty()){
  cout << q.front() << " ";
  q.pop();
}`,
    options: ["1 2 3 4 5", "3 4 5 1 2", "2 3 4 5 1", "5 4 3 2 1"],
    correct: 1,
    explanation: "Each loop moves the front to the rear. After two rotations, the queue becomes 3 4 5 1 2."
  },
  {
    type: "Code",
    question: "What is printed?",
    code: `stack<char> s;
string x = "STACK";
for(char c : x) s.push(c);
s.pop();
cout << s.top();`,
    options: ["S", "T", "C", "K"],
    correct: 2,
    explanation: "The letters pushed are S T A C K, so top is K. After one pop, top becomes C."
  },
  {
    type: "Code",
    question: "What is the output?",
    code: `queue<char> q;
string x = "DATA";
for(char c : x) q.push(c);
q.pop();
q.push('X');
while(!q.empty()){
  cout << q.front();
  q.pop();
}`,
    options: ["ATAX", "DATX", "ATXA", "AXTA"],
    correct: 0,
    explanation: "Queue starts as D A T A. Pop removes D, then X is added, so it becomes A T A X."
  },
  {
    type: "Code",
    question: "What does this code print?",
    code: `stack<int> s;
for(int i = 1; i <= 3; i++) s.push(i * i);
int sum = 0;
while(!s.empty()){
  sum += s.top();
  s.pop();
}
cout << sum;`,
    options: ["6", "9", "14", "12"],
    correct: 2,
    explanation: "The pushed values are 1, 4, and 9. Their sum is 14."
  },
  {
    type: "Code",
    question: "What is the output?",
    code: `queue<int> q;
q.push(10);
q.push(20);
q.push(30);
q.pop();
q.push(q.front());
while(!q.empty()){
  cout << q.front() << " ";
  q.pop();
}`,
    options: ["10 20 30", "20 30 20", "30 20 20", "20 20 30"],
    correct: 1,
    explanation: "After removing 10, the front is 20. Pushing q.front() adds another 20 at the end, so the queue becomes 20 30 20."
  },
  {
    type: "Code",
    question: "Assume circular queue capacity = 5, front = 1, rear = 3. After one enqueue, what is rear?",
    code: `rear = (rear + 1) % 5;`,
    options: ["0", "1", "4", "3"],
    correct: 2,
    explanation: "Rear moves one step forward: (3 + 1) % 5 = 4."
  },
  {
    type: "Code",
    question: "Assume circular queue capacity = 5, front = 2, rear = 4. After one enqueue, what is rear?",
    code: `rear = (rear + 1) % 5;`,
    options: ["0", "1", "2", "4"],
    correct: 0,
    explanation: "Rear wraps around: (4 + 1) % 5 = 0."
  },
  {
    type: "Code",
    question: "For a circular queue with capacity = 6, front = 2, rear = 1, is it full if the condition is (rear + 1) % capacity == front ?",
    code: `if((rear + 1) % 6 == front) FULL;`,
    options: ["Yes", "No", "Only if front = 0", "Cannot determine"],
    correct: 0,
    explanation: "(1 + 1) % 6 = 2, and that equals front, so the queue is full."
  },
  {
    type: "Code",
    question: "What does this code print?",
    code: `stack<int> s;
s.push(1);
s.push(2);
s.push(3);
int a = s.top(); s.pop();
int b = s.top(); s.pop();
s.push(a * b);
cout << s.top();`,
    options: ["5", "6", "3", "2"],
    correct: 1,
    explanation: "a = 3 and b = 2, so 3 * 2 = 6 is pushed."
  },
  {
    type: "Code",
    question: "What is the output?",
    code: `queue<int> q;
for(int i = 1; i <= 4; i++) q.push(i);
int x = q.front(); q.pop();
q.push(x + q.front());
while(!q.empty()){
  cout << q.front() << " ";
  q.pop();
}`,
    options: ["2 3 4 3", "2 3 4 5", "1 2 3 4", "2 3 5 4"],
    correct: 0,
    explanation: "x = 1, then front becomes 2, so push 1 + 2 = 3. Final queue is 2 3 4 3."
  },
  {
    type: "Code",
    question: "What does this code print?",
    code: `stack<char> s;
string x = "LEVEL";
for(char c : x) s.push(c);
for(int i = 0; i < 2; i++) s.pop();
cout << s.top();`,
    options: ["V", "E", "L", "No output"],
    correct: 0,
    explanation: "The top two letters are L then E, so after two pops the new top is V."
  },
  {
    type: "Code",
    question: "How many times is push() called for the expression: {[(())]}",
    code: `for each opening bracket:
   push(bracket);`,
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Opening brackets are {, [, (, (. That is 4 pushes."
  },
  {
    type: "Code",
    question: "The postfix expression is: 2 3 * 5 + 4 -. What is the result?",
    code: `Use a stack to evaluate postfix.`,
    options: ["7", "6", "5", "4"],
    correct: 0,
    explanation: "2*3 = 6, then 6+5 = 11, then 11-4 = 7."
  },
  {
    type: "Code",
    question: "The postfix expression is: 8 2 / 3 1 + *. What is the result?",
    code: `Use a stack to evaluate postfix.`,
    options: ["12", "14", "16", "18"],
    correct: 2,
    explanation: "8/2 = 4, 3+1 = 4, then 4*4 = 16."
  },
  {
    type: "Code",
    question: "The prefix expression is: - + 7 3 2. What is the result?",
    code: `Evaluate prefix from right to left using a stack.`,
    options: ["8", "6", "10", "12"],
    correct: 0,
    explanation: "First + 7 3 = 10, then 10 - 2 = 8."
  },
  {
    type: "Code",
    question: "The prefix expression is: * + 2 3 - 8 4. What is the result?",
    code: `Evaluate prefix from right to left using a stack.`,
    options: ["16", "20", "24", "12"],
    correct: 1,
    explanation: "+ 2 3 = 5, - 8 4 = 4, then 5 * 4 = 20."
  },
  {
    type: "Code",
    question: "Convert infix to postfix: (A+B)*C",
    code: `Use stack rules for operators and parentheses.`,
    options: ["AB+C*", "ABC+*", "*+ABC", "A+B*C"],
    correct: 0,
    explanation: "A+B becomes AB+, then multiply by C gives AB+C*."
  },
  {
    type: "Code",
    question: "Convert infix to prefix: A+B*C",
    code: `Use operator precedence.`,
    options: ["+A*BC", "*+ABC", "ABC*+", "AB+C*"],
    correct: 0,
    explanation: "B*C is evaluated first, so prefix is + A * B C."
  },
  {
    type: "Code",
    question: "Is this expression balanced? {(A+B)*[C-D]}",
    code: `Use stack push for open brackets and pop/match for close brackets.`,
    options: ["Yes", "No", "Only round brackets are balanced", "Cannot know"],
    correct: 0,
    explanation: "All brackets are correctly opened and closed in the right order."
  },
  {
    type: "Code",
    question: "Is this expression balanced? ([A+B)}",
    code: `Use stack push for open brackets and pop/match for close brackets.`,
    options: ["Yes", "No", "Balanced only if spaces removed", "Depends on letters"],
    correct: 1,
    explanation: "The closing } does not match the opening [."
  },
  {
    type: "Code",
    question: "Does this expression contain duplicate parentheses? ((A+B))",
    code: `Use stack and check content between matching parentheses.`,
    options: ["Yes", "No", "Only if using queue", "Cannot determine"],
    correct: 0,
    explanation: "The expression A+B is enclosed by two unnecessary layers of parentheses."
  },
  {
    type: "Code",
    question: "What is the next greater element for 4 in the array [4, 5, 2, 25]?",
    code: `Use a stack-based Next Greater Element approach.`,
    options: ["2", "25", "5", "-1"],
    correct: 2,
    explanation: "The first value to the right of 4 that is greater than 4 is 5."
  },
  {
    type: "Code",
    question: "What is the next greater element for 5 in the array [4, 5, 2, 25]?",
    code: `Use a stack-based Next Greater Element approach.`,
    options: ["2", "25", "-1", "4"],
    correct: 1,
    explanation: "Looking to the right of 5, the first greater value is 25."
  },
  {
    type: "Code",
    question: "What does this code print?",
    code: `stack<int> s;
for(int i = 1; i <= 5; i++){
  if(i % 2 == 0) s.push(i);
}
while(!s.empty()){
  cout << s.top() << " ";
  s.pop();
}`,
    options: ["2 4", "4 2", "1 3 5", "5 3 1"],
    correct: 1,
    explanation: "Only 2 and 4 are pushed. The stack pops in reverse order: 4 then 2."
  },
  {
    type: "Code",
    question: "What is the output?",
    code: `queue<int> q;
for(int i = 1; i <= 5; i++){
  if(i % 2 != 0) q.push(i);
}
while(!q.empty()){
  cout << q.front() << " ";
  q.pop();
}`,
    options: ["5 3 1", "1 3 5", "2 4", "1 2 3 4 5"],
    correct: 1,
    explanation: "Only odd numbers 1, 3, and 5 are inserted, and queues keep the same order."
  },
  {
    type: "Code",
    question: "What is the final top of the stack?",
    code: `stack<int> s;
s.push(10);
s.push(20);
s.pop();
s.push(30);
s.push(40);
s.pop();
cout << s.top();`,
    options: ["10", "20", "30", "40"],
    correct: 2,
    explanation: "20 is popped, then 30 and 40 are pushed, then 40 is popped. Top becomes 30."
  },
  {
    type: "Code",
    question: "What is the final front of the queue?",
    code: `queue<int> q;
q.push(10);
q.push(20);
q.push(30);
q.pop();
q.push(40);
q.pop();
cout << q.front();`,
    options: ["10", "20", "30", "40"],
    correct: 2,
    explanation: "10 is removed, then later 20 is removed, so the front becomes 30."
  },
  {
    type: "Code",
    question: "How many pop() operations happen while evaluating the postfix expression 2 3 + 4 * ?",
    code: `For every operator:
  pop second operand
  pop first operand`,
    options: ["2", "3", "4", "6"],
    correct: 2,
    explanation: "There are 2 operators, and each operator causes 2 pops, so total pops = 4."
  }
];

const theoryQuestions = [
  {
    type: "Theory",
    question: "Which principle describes a stack?",
    code: "",
    options: ["FIFO", "LIFO", "Random access", "Sorted access"],
    correct: 1,
    explanation: "A stack works by Last In First Out."
  },
  {
    type: "Theory",
    question: "Which principle describes a queue?",
    code: "",
    options: ["FIFO", "LIFO", "Reverse order", "Priority order"],
    correct: 0,
    explanation: "A queue works by First In First Out."
  },
  {
    type: "Theory",
    question: "Which operation adds an element to a stack?",
    code: "",
    options: ["pop()", "top()", "push()", "front()"],
    correct: 2,
    explanation: "push() inserts a new element at the top of the stack."
  },
  {
    type: "Theory",
    question: "Which operation removes the top element from a stack?",
    code: "",
    options: ["top()", "push()", "pop()", "peekBack()"],
    correct: 2,
    explanation: "pop() removes the current top element."
  },
  {
    type: "Theory",
    question: "Which operation reads the top stack value without removing it?",
    code: "",
    options: ["pop()", "top()", "push()", "rear()"],
    correct: 1,
    explanation: "top() returns the top value but does not delete it."
  },
  {
    type: "Theory",
    question: "In a queue, a new element is inserted at the:",
    code: "",
    options: ["front", "middle", "rear", "top"],
    correct: 2,
    explanation: "Queue insertion happens at the rear."
  },
  {
    type: "Theory",
    question: "In a queue, deletion happens from the:",
    code: "",
    options: ["rear", "front", "middle", "top"],
    correct: 1,
    explanation: "Queue deletion happens from the front."
  },
  {
    type: "Theory",
    question: "Which data structure is best for checking balanced parentheses?",
    code: "",
    options: ["Queue", "Array", "Stack", "Graph"],
    correct: 2,
    explanation: "Balanced parentheses need the last opening bracket to be matched first, so stack is used."
  },
  {
    type: "Theory",
    question: "When a closing parenthesis is found, it must match the:",
    code: "",
    options: ["first opening parenthesis", "last opening parenthesis", "smallest parenthesis", "next operator"],
    correct: 1,
    explanation: "The most recent opening bracket must be matched first."
  },
  {
    type: "Theory",
    question: "Which notation places the operator between operands?",
    code: "",
    options: ["Prefix", "Postfix", "Infix", "Unary"],
    correct: 2,
    explanation: "Infix notation uses operand operator operand."
  },
  {
    type: "Theory",
    question: "Which notation places the operator before operands?",
    code: "",
    options: ["Prefix", "Postfix", "Infix", "Binary"],
    correct: 0,
    explanation: "Prefix notation starts with the operator."
  },
  {
    type: "Theory",
    question: "Which notation places the operator after operands?",
    code: "",
    options: ["Prefix", "Infix", "Postfix", "Circular"],
    correct: 2,
    explanation: "Postfix notation places the operator after the operands."
  },
  {
    type: "Theory",
    question: "The infix expression A + B * C becomes which postfix expression?",
    code: "",
    options: ["+A*BC", "AB+C*", "ABC*+", "A*BC+"],
    correct: 2,
    explanation: "Multiplication has higher precedence, so B*C is done first. The postfix form is A B C * +."
  },
  {
    type: "Theory",
    question: "The infix expression A + B * C becomes which prefix expression?",
    code: "",
    options: ["+A*BC", "*+ABC", "ABC*+", "AB+C*"],
    correct: 0,
    explanation: "Since B*C comes first, the prefix expression is + A * B C."
  },
  {
    type: "Theory",
    question: "Which data structure is used to evaluate postfix expressions efficiently?",
    code: "",
    options: ["Queue", "Stack", "Array only", "Tree only"],
    correct: 1,
    explanation: "Postfix evaluation uses a stack to store operands and intermediate results."
  },
  {
    type: "Theory",
    question: "In postfix evaluation, an operator works on:",
    code: "",
    options: ["the first two symbols", "the last two preceding operands", "all operands", "the first and last operands"],
    correct: 1,
    explanation: "Each operator uses the nearest two previous operands or results."
  },
  {
    type: "Theory",
    question: "Prefix expressions are usually evaluated by scanning:",
    code: "",
    options: ["left to right", "right to left", "top to bottom", "from the middle"],
    correct: 1,
    explanation: "Prefix is commonly evaluated from right to left using a stack."
  },
  {
    type: "Theory",
    question: "In an array-based stack, the top index stores:",
    code: "",
    options: ["number of empty cells", "value of the first element", "location of the top element", "front of queue"],
    correct: 2,
    explanation: "The top index points to the current top position."
  },
  {
    type: "Theory",
    question: "An empty array-based stack is commonly represented by:",
    code: "",
    options: ["top = -1", "top = 0", "rear = -1", "front = 1"],
    correct: 0,
    explanation: "top = -1 means there is no element in the stack."
  },
  {
    type: "Theory",
    question: "Which structure reuses freed queue positions by wrapping around?",
    code: "",
    options: ["Tree", "Circular queue", "Graph", "Heap"],
    correct: 1,
    explanation: "A circular queue reuses array cells by wrapping the rear and front."
  },
  {
    type: "Theory",
    question: "Which condition is used to test circular queue fullness?",
    code: "",
    options: ["rear == front", "(rear + 1) % capacity == front", "front == 0", "rear == capacity"],
    correct: 1,
    explanation: "If the next rear position reaches front, the circular queue is full."
  },
  {
    type: "Theory",
    question: "Which condition commonly tests whether a stack is empty?",
    code: "",
    options: ["front == rear", "top == -1", "rear == capacity - 1", "top == 0"],
    correct: 1,
    explanation: "A typical array stack is empty when top = -1."
  },
  {
    type: "Theory",
    question: "A queue allows insertion at one end and deletion at the other. These ends are:",
    code: "",
    options: ["top and bottom", "left and right", "rear and front", "head and tail only in trees"],
    correct: 2,
    explanation: "Queue insertion is at the rear and deletion is at the front."
  },
  {
    type: "Theory",
    question: "Which is a real-life use case of a queue?",
    code: "",
    options: ["Undo operation", "Function call stack", "Printer jobs", "Expression reversal only"],
    correct: 2,
    explanation: "Printer jobs are processed in arrival order, like a queue."
  },
  {
    type: "Theory",
    question: "Which is a real-life use case of a stack?",
    code: "",
    options: ["Traffic line", "Printer scheduling", "Undo/Redo", "CPU ready queue"],
    correct: 2,
    explanation: "Undo/Redo uses the most recent action first."
  },
  {
    type: "Theory",
    question: "Which of the following is postfix for (A+B)*C ?",
    code: "",
    options: ["AB+C*", "*+ABC", "ABC+*", "A+BC*"],
    correct: 0,
    explanation: "A+B becomes AB+, then multiply by C to get AB+C*."
  },
  {
    type: "Theory",
    question: "Which of the following is prefix for (A+B)*C ?",
    code: "",
    options: ["AB+C*", "*+ABC", "+AB*C", "*A+BC"],
    correct: 1,
    explanation: "The prefix form is * + A B C."
  },
  {
    type: "Theory",
    question: "If extra opening parentheses remain in the stack after scanning, the expression is:",
    code: "",
    options: ["balanced", "optimized", "unbalanced", "prefix"],
    correct: 2,
    explanation: "Unmatched opening brackets mean the expression is not balanced."
  },
  {
    type: "Theory",
    question: "After applying an operator in postfix evaluation, what should happen to the result?",
    code: "",
    options: ["discard it", "push it back", "enqueue it", "print only"],
    correct: 1,
    explanation: "The result is pushed back because it may be used by later operators."
  },
  {
    type: "Theory",
    question: "Which notation removes the need for parentheses to represent order clearly?",
    code: "",
    options: ["Only infix", "Prefix and postfix", "Only circular", "Only queue notation"],
    correct: 1,
    explanation: "Prefix and postfix already encode the order of evaluation."
  },
  {
    type: "Theory",
    question: "What does the stack operation Empty() check?",
    code: "",
    options: ["If top value is even", "If the stack has no elements", "If the stack is full", "If the stack is sorted"],
    correct: 1,
    explanation: "Empty() checks whether there are no elements in the stack."
  },
  {
    type: "Theory",
    question: "Which statement about pop() in a stack is true?",
    code: "",
    options: ["It adds a new item", "It removes the bottom item", "It removes the top item", "It reads all items"],
    correct: 2,
    explanation: "pop() always removes the top item of the stack."
  },
  {
    type: "Theory",
    question: "What is the first step in checking balanced parentheses using a stack?",
    code: "",
    options: ["Sort the expression", "Scan expression from left to right", "Evaluate numbers", "Reverse the string"],
    correct: 1,
    explanation: "The algorithm processes the expression character by character from left to right."
  },
  {
    type: "Theory",
    question: "When an opening parenthesis is found during balance checking, you should:",
    code: "",
    options: ["Ignore it", "Push it to the stack", "Pop the stack", "End the algorithm"],
    correct: 1,
    explanation: "Opening brackets are pushed until a matching closing bracket appears."
  },
  {
    type: "Theory",
    question: "When a closing parenthesis is found and the stack is empty, the expression is:",
    code: "",
    options: ["balanced", "valid", "incorrect", "postfix"],
    correct: 2,
    explanation: "There is no opening bracket available to match it."
  },
  {
    type: "Theory",
    question: "Which of the following is an example of a duplicate parentheses expression?",
    code: "",
    options: ["(x+y)", "((x+y))+z", "(x+y)+z", "(a+b*c)"],
    correct: 1,
    explanation: "The expression x+y is unnecessarily surrounded by an extra pair of parentheses."
  },
  {
    type: "Theory",
    question: "According to the labs, next greater element means:",
    code: "",
    options: ["the largest number in array", "the first greater element on the right", "the previous greater value", "the next smaller element"],
    correct: 1,
    explanation: "Next greater element is the first value to the right that is larger."
  },
  {
    type: "Theory",
    question: "In infix notation, why are parentheses important?",
    code: "",
    options: ["To increase memory", "To change operator precedence when needed", "To remove operands", "To make postfix easier only"],
    correct: 1,
    explanation: "Parentheses can force a different evaluation order."
  },
  {
    type: "Theory",
    question: "Which operation has higher precedence than addition in normal infix rules?",
    code: "",
    options: ["Subtraction", "Multiplication", "Assignment", "Comma"],
    correct: 1,
    explanation: "Multiplication is evaluated before addition."
  },
  {
    type: "Theory",
    question: "Expressions inside parentheses are evaluated:",
    code: "",
    options: ["last", "first", "randomly", "only in postfix"],
    correct: 1,
    explanation: "Parentheses have the highest priority."
  },
  {
    type: "Theory",
    question: "In queue terminology, adding an item is called:",
    code: "",
    options: ["push", "enqueue", "top", "peek"],
    correct: 1,
    explanation: "The queue insertion operation is called enqueue."
  },
  {
    type: "Theory",
    question: "In queue terminology, removing an item is called:",
    code: "",
    options: ["pop", "dequeue", "top", "append"],
    correct: 1,
    explanation: "The queue deletion operation is called dequeue."
  },
  {
    type: "Theory",
    question: "Which queue operation returns the first element without removing it?",
    code: "",
    options: ["rear()", "front()", "top()", "pop()"],
    correct: 1,
    explanation: "front() reads the first queue element."
  },
  {
    type: "Theory",
    question: "Which queue operation is useful to know how many values are stored?",
    code: "",
    options: ["size()", "front()", "empty()", "push()"],
    correct: 0,
    explanation: "size() returns the number of stored items."
  },
  {
    type: "Theory",
    question: "Which STL container is directly used in many lecture examples for stack problems?",
    code: "",
    options: ["vector", "stack", "map", "set"],
    correct: 1,
    explanation: "The standard STL container for stack problems is stack."
  },
  {
    type: "Theory",
    question: "Which STL container is directly used for queue examples?",
    code: "",
    options: ["queue", "set", "deque only", "priority_queue only"],
    correct: 0,
    explanation: "The direct STL container used is queue."
  },
  {
    type: "Theory",
    question: "Which expression is balanced?",
    code: "",
    options: ["{(A+B)*(C+D)}", "{(x+y)*(z+(m/n)}", "[2*3] + (A)]", ")x-y("],
    correct: 0,
    explanation: "All brackets match correctly and are in the proper order."
  },
  {
    type: "Theory",
    question: "Which expression is not balanced because of wrong order?",
    code: "",
    options: ["(A+B)", "{a+b}", ")x-y(", "[a+b]"],
    correct: 2,
    explanation: "A closing bracket appears before its corresponding opening bracket."
  },
  {
    type: "Theory",
    question: "If you reverse a string using a stack, the key idea is:",
    code: "",
    options: ["push then pop characters", "sort the string", "use queue front only", "use modulo"],
    correct: 0,
    explanation: "Push all characters, then pop them back to get the reversed order."
  },
  {
    type: "Theory",
    question: "A stack can be implemented using:",
    code: "",
    options: ["an array", "contiguous memory with a top index", "class methods", "all of these"],
    correct: 3,
    explanation: "All of these are part of a valid stack implementation."
  },
  {
    type: "Theory",
    question: "In a simple array queue, one common problem without circular behavior is:",
    code: "",
    options: ["LIFO order", "wasted free spaces after dequeues", "no rear", "no front"],
    correct: 1,
    explanation: "Dequeued spaces at the beginning may remain unused unless circular indexing is used."
  },
  {
    type: "Theory",
    question: "Which data structure behavior fits function calls and recursion memory?",
    code: "",
    options: ["Queue", "Stack", "Heap tree", "Graph"],
    correct: 1,
    explanation: "Function calls and recursion are handled using stack behavior."
  },
  {
    type: "Theory",
    question: "What is the main advantage of prefix and postfix over infix for evaluation logic?",
    code: "",
    options: ["They need more parentheses", "They remove ambiguity of order", "They cannot be evaluated", "They only work for letters"],
    correct: 1,
    explanation: "Prefix and postfix make the order of evaluation explicit."
  }
];

const questions = [...codeQuestions, ...theoryQuestions];

let currentQuestion = 0;
const solved = new Array(questions.length).fill(false);

const grid = document.getElementById("grid");
const qTitle = document.getElementById("qTitle");
const qType = document.getElementById("qType");
const qText = document.getElementById("qText");
const codeBlock = document.getElementById("codeBlock");
const optionsDiv = document.getElementById("options");
const answerBox = document.getElementById("answerBox");
const correctAnswer = document.getElementById("correctAnswer");
const explanation = document.getElementById("explanation");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const showBtn = document.getElementById("showBtn");

function buildGrid() {
  grid.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = i + 1;

    if (solved[i]) btn.classList.add("solved");
    if (i === currentQuestion) btn.classList.add("active");

    btn.addEventListener("click", function () {
      currentQuestion = i;
      renderQuestion();
    });

    grid.appendChild(btn);
  }
}

function renderQuestion() {
  const q = questions[currentQuestion];

  qTitle.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
  qType.textContent = q.type;
  qText.textContent = q.question;

  if (q.code.trim() === "") {
    codeBlock.style.display = "none";
    codeBlock.textContent = "";
  } else {
    codeBlock.style.display = "block";
    codeBlock.textContent = q.code;
  }

  optionsDiv.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach(function (option, index) {
    const btn = document.createElement("button");
    btn.className = "optionBtn";
    btn.textContent = letters[index] + ") " + option;

    btn.addEventListener("click", function () {
      solved[currentQuestion] = true;

      document.querySelectorAll(".optionBtn").forEach(function (b) {
        b.classList.remove("selected");
      });

      btn.classList.add("selected");
      buildGrid();
    });

    optionsDiv.appendChild(btn);
  });

  answerBox.classList.add("hidden");
  correctAnswer.textContent = "";
  explanation.textContent = "";

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = currentQuestion === questions.length - 1;

  buildGrid();
}

showBtn.addEventListener("click", function () {
  const q = questions[currentQuestion];
  const letters = ["A", "B", "C", "D"];

  correctAnswer.textContent = letters[q.correct] + ") " + q.options[q.correct];
  explanation.textContent = q.explanation;
  answerBox.classList.remove("hidden");
});

prevBtn.addEventListener("click", function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", function () {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
});

renderQuestion();