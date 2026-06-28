public class Solution {
    public List<List<int>> Subsets(int[] nums) {
        var res = new List<List<int>>();
        res.Add(new List<int>());

        foreach (int num in nums){
            int resCount = res.Count;

            for(int i = 0; i < resCount; i++){
                var subset = new List<int>(res[i]);
                subset.Add(num);
                res.Add(subset);
            }
        }

        return res;
    }
}

/*
nums = [1,2,3]
res = [ [], [1], [2], [1,2], [3], [1,3], [2, 3], [1,2,3] ]
resCount = 4, i = 3

subset = [1,3]
num = 3
*/
