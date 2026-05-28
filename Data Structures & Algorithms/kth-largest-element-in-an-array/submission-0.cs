public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        var maxHeap = new PriorityQueue<int,int>(Comparer<int>.Create((x,y) => y.CompareTo(x)));

        foreach (int num in nums){
            maxHeap.Enqueue(num, num);
        }

        while(k > 1){
            maxHeap.Dequeue();
            k--;
        }

        return maxHeap.Peek();
    }
}
