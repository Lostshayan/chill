from PIL import Image

img = Image.open("/Users/shayan/.gemini/antigravity/brain/07068ffc-6e5f-4690-aa76-005afb39b25d/foreground_cabin_1781268133553.png").convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    r, g, b, a = item
    
    # We are looking for the bright green screen
    # Normal neon green: R ~ 0, G ~ 255, B ~ 0
    # Green under lamp: R ~ 140, G ~ 255, B ~ 60
    
    # Let's say if G > 180 and G > R and G > B + 20
    is_green = False
    
    if g > 180 and g > r and g > b + 20:
        is_green = True
        
    if is_green:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png", "PNG")
print("Saved foreground_cabin.png with super robust keying")
