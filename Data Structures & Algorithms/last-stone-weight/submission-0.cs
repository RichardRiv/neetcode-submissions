public class Solution {
    public int LastStoneWeight(int[] stones) {
        var maxHeap = new PriorityQueue<int,int>(Comparer<int>.Create((a,b) => b.CompareTo(a)));

        foreach (int stone in stones){
            maxHeap.Enqueue(stone, stone);
        }

        while(maxHeap.Count > 1){
            int x = maxHeap.Dequeue();
            int y = maxHeap.Dequeue();
            int res = x-y;

            if(res > 0) maxHeap.Enqueue(res,res);
        }

        return maxHeap.Count == 1? maxHeap.Peek() : 0;
    }
}

/*
[6,4,3,2,2]
dequeue 6 and 4 - [3,2,2]
process
enqueue result (!not equal) - [3,2,2,2]
dequeue 3 and 2 - [2,2]
process
enqueue result (!not equal) - [2,2,1]

dequeue 2 and 2 - [1]
process
enqueue result (!not equal) - [1]
*/ 