class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
      let arr = [];
      let x = 0, y = 0;
      while(x < nums1.length && y < nums2.length){
        if(nums1[x] <= nums2[y]){
          arr.push(nums1[x]);
          x++;
        }else{
          arr.push(nums2[y]);
          y++;
        }
      }
      
      while(x < nums1.length) {arr.push(nums1[x]); x++;};
      while(y < nums2.length) {arr.push(nums2[y]); y++;};
      
      let l = 0, r = arr.length - 1;
      while(l <= r){
        let m = Math.floor((l+r) / 2);
        
        if(arr.length % 2 === 0) return (arr[m] + arr[m+1]) / 2;
        return arr[m];
      }
    }
}