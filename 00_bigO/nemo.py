import time
fish = ['nemo', 'shart', 'clown fish']

fish = ['nemo']*100000

start = time.time()


def find_nemo(arr):
    for i in arr:
        if i == 'nemo':
            print('We found nemo')
        else:
            print('Oops not nemo')


find_nemo(fish)

end = time.time()

print(f'Time taken: {(end - start) * 1000:.10f} ms')
