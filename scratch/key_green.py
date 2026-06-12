from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # If the pixel is very green, make it transparent
    # Neon green is typically R=0, G=255, B=0, but we'll use a threshold
    if item[1] > 200 and item[0] < 100 and item[2] < 100:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png", "PNG")
print("Saved foreground_cabin.png using PIL")
