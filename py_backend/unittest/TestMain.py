import random
import time


def hello_world():
    hello_world_ascii = [ord(_l) for _l in "Hello World"]
    char_ctr = 0
    with open('ascii_log.txt', 'a+') as f:
        f.write("\n\n----------------------\n")
        while True:
            ascii_ = random.randrange(0, 255)
            f.write("%03d " % ascii_)
            print(chr(ascii_), end='')
            if ascii_ is hello_world_ascii[char_ctr]:
                char_ctr += 1
                print("")
                print("   Hello World"[0:char_ctr])
                f.write("\n   %s\n" % "Hello World"[0:char_ctr])
            if char_ctr is len(hello_world_ascii):
                break


hello_world()
