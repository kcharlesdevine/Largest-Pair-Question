const largestPair = function(userInput){
  var inputArray = userInput;
  var firstChoice = 0;
  var secondChoice = 0;
  var choiceSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
      firstChoice = inputArray[i];
      secondChoice = inputArray[i + 1];
        if (firstChoice * secondChoice > choiceSum){
          choiceSum = firstChoice * secondChoice;
        };
      };
      return choiceSum
};
