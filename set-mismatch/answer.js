function findErrorNums(nums) {
  nums = nums.sort((a, b) => a - b);
  var answer = [];
   for (var index = 0; index < nums.length; index++) {
      for(var index1 = 0; index1 < nums.length; index1++) {
        if (index1 !== index && nums[index] === nums[index1]){
          answer.push(nums[index1]);
        }
      }
   }
   answer[1] = answer[0] + 1;
   return answer;
}

var nums = [10,4,8,5,6,7,8];

findErrorNums(nums);