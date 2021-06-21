function intersection(nums1, nums2) {
  var intersectionNumbers = [];
  for (var indexNums1 = 0; indexNums1 < nums1.length; indexNums1++){
    for (var indexNums2 = 0; indexNums2 < nums2.length; indexNums2++) {
      if (nums1[indexNums1] === nums2[indexNums2]) {
        intersectionNumbers.push(nums1[indexNums1]);
        continue;
      }
    }
  }
  return [...new Set(intersectionNumbers)];
}

var nums1 = [1,2,2,1];

var nums2 = [2,2];

intersection(nums1, nums2);