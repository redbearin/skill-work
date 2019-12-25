function merge (nums1, m, nums2, n) {
  nums1ExtraRemoved =[];
  for(var nums1Index = 0; nums1Index < m; nums1Index++) {
    nums1ExtraRemoved.push(nums1[nums1Index]);
  }
  for (var nums2Index = 0; nums2Index < n; nums2Index++) {
    nums1ExtraRemoved.push(nums2[nums2Index]);
  }
  return nums1ExtraRemoved.sort();
};

var m = 3;
var n = 3;
var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];

merge (nums1, m, nums2, n);