from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
datas = img.getdata()
width, height = img.size

newData = []
for item in datas:
    r, g, b, a = item
    
    is_green = False
    
    # Very lenient green screen detection
    # The green screen is a very pure, bright green.
    # We lower the overall brightness requirement to catch the shadowed green
    if g > 100 and g > r + 15 and g > b + 15:
        # Extra check: we know the green screen is generally in the windows.
        # But to be safe against the plant, the neon green screen is overwhelmingly green.
        # So green should be significantly larger than blue.
        if g > b * 1.5:
            is_green = True
            
    if is_green:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png", "PNG")
print("Saved foreground_cabin.png with super lenient keying")
