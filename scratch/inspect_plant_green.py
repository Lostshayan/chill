from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
width, height = img.size

# Plant is on the right. x between 1400 and 1800, y between 500 and 800
patch = img.crop((1400, 500, 1800, 800))
datas = patch.getdata()

samples = []
import random
for _ in range(50):
    idx = random.randint(0, len(datas)-1)
    samples.append(datas[idx])

for i, s in enumerate(samples[:20]):
    print(f"Sample {i}: R={s[0]}, G={s[1]}, B={s[2]}")

