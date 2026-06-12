from PIL import Image

img = Image.open("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

# Plant is on the right. x > 1400, y > 500
plant_pixels = []
for y in range(500, height):
    for x in range(1400, width):
        r, g, b, a = datas[y * width + x]
        if a > 0 and g > r and g > b:
            plant_pixels.append((r, g, b))

plant_pixels.sort(key=lambda item: item[1], reverse=True)
print(f"Found {len(plant_pixels)} greenish pixels in plant area.")
for i in range(min(20, len(plant_pixels))):
    print(f"R={plant_pixels[i][0]}, G={plant_pixels[i][1]}, B={plant_pixels[i][2]}")
