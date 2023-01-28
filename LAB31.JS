const theList = ['Bander', 'Henderson', true, 37, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

 theList.pop();
 theList.unshift("First");
 

theList.splice(1, 1);
theList.splice(2, 5);
theList.splice(3, 0, "MIDDLE");
theList.splice(4, 3, "hello world");

theList.push("Last");
console.log(theList);
