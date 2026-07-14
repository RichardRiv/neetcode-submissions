public class Solution {
    public List<List<int>> CombinationSum(int[] nums, int target) {
        var result = new List<List<int>>();
        var current = new List<int>();
        Array.Sort(nums);

        dfs(result, current, 0, target, nums);
        return result;
    }

    public void dfs(List<List<int>> result, List<int> current, int idx, int remainder, int[] nums){
        if(remainder == 0){
            result.Add(new List<int>(current));
            return;
        }

        for(int i = idx; i < nums.Length; i++){
            if(nums[i] > remainder) break;

            current.Add(nums[i]);
            dfs(result, current, i, remainder - nums[i], nums);
            current.RemoveAt(current.Count-1);
        }
    }
}
