class Solution:
    def twoSum(self, nums, target):
        print('working')
        output = []

        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                print(nums[i], nums[j])
                if nums[i]+nums[j] == target:
                    list = [i, j]
                    return [i, j]


solution = Solution()

output = solution.twoSum([2, 7, 11, 15], 18)

print(output)
