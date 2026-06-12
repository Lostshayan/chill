from PIL import Image

img = Image.open("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

transparent_plant = 0
for y in range(500, height):
    for x in range(1400, width):
        r, g, b, a = datas[y * width + x]
        if a == 0:
            transparent_plant += 1

print(f"Found {transparent_plant} transparent pixels in the plant area.")
