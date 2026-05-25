public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        var maxHeap = new PriorityQueue<int[],int>();
        var list = new List<int[]>();

        foreach(int[] point in points){
            int dist = point[0] * point[0] + point[1] * point[1];
            maxHeap.Enqueue(point, -dist);

            if(maxHeap.Count > k) maxHeap.Dequeue();
        }

        while(maxHeap.Count > 0){
            list.Add(maxHeap.Dequeue());
        }

        return list.ToArray();
    }
}

/*
maxHeap = {
[2,2]: -8 -> dequeued
[0,2]: -4,
[2,0]: -4,
}

points = [[0,2],[2,0],[2,2]], k = 2
*/
