from PIL import Image

img = Image.open("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

lingering_green = 0
for item in datas:
    r, g, b, a = item
    if a > 0: # not keyed out
        # check if it's very green
        if g > 150 and g > r + 15 and g > b + 15:
            lingering_green += 1

print(f"Lingering green pixels > 150: {lingering_green}")
