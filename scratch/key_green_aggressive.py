from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

newData = []
for y in range(height):
    for x in range(width):
        r, g, b, a = datas[y * width + x]
        
        is_green = False
        
        if x < width // 2:
            # LEFT SIDE: Aggressive keying (no plant here)
            # Anything that is moderately green gets wiped out.
            if g > 80 and g > r and g > b:
                is_green = True
        else:
            # RIGHT SIDE: Lenient keying (protect the plant)
            # The green screen is extremely bright green.
            if g > 100 and g > r + 15 and g > b + 15 and g > b * 1.5:
                is_green = True
                
        if is_green:
            newData.append((255, 255, 255, 0))
        else:
            newData.append((r, g, b, a))

img.putdata(newData)
img.save("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png", "PNG")
print("Saved foreground_cabin.png with aggressive left-side keying")
