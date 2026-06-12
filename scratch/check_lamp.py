from PIL import Image

img = Image.open("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

transparent_lamp = 0
for y in range(400, 700):
    for x in range(100, int(width/2)):
        r, g, b, a = datas[y * width + x]
        if a == 0:
            transparent_lamp += 1

print(f"Found {transparent_lamp} transparent pixels in the lamp area.")
