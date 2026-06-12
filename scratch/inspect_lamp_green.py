from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
width, height = img.size

# Let's inspect a patch under the lamp, roughly left side, middle height
# e.g. x between 200 and 400, y between 400 and 600

patch = img.crop((200, 400, 400, 600))
datas = patch.getdata()

# count pixel values
samples = []
import random
for _ in range(50):
    idx = random.randint(0, len(datas)-1)
    samples.append(datas[idx])

for i, s in enumerate(samples[:20]):
    print(f"Sample {i}: R={s[0]}, G={s[1]}, B={s[2]}")

