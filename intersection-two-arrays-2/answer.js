function intersection(nums1, nums2) {
  nums2 = [...new Set(nums2)];
  var intersectionNumbers = [];
  for (var indexNums1 = 0; indexNums1 < nums1.length; indexNums1++){
    for (var indexNums2 = 0; indexNums2 < nums2.length; indexNums2++) {
      if (nums1[indexNums1] === nums2[indexNums2]) {
        intersectionNumbers.push(nums1[indexNums1]);
        continue;
      }
    }
  }
  return intersectionNumbers;
}

var nums1 = [4,9,5];

var nums2 = [9,4,9,8,4];

intersection(nums1, nums2);