

class Solution(object):
    def arrayPairSum(self, nums):

        def sort_arr(arr):
            for i in range(len(arr)-1):
                for j in range(len(arr)-(i+1)):
                    if arr[j] > arr[j+1]:
                        temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp

        sorted_arr = sort_arr(nums)

        total = 0

        for i in range(len(nums)):
            if i % 2 == 0:
                total = total+nums[i]

        return total


solution = Solution()


print(solution.arrayPairSum([1, 3, 4, 2]))


# https://leetcode.com/problems/array-partition
