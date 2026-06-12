from PIL import Image

img = Image.open("/Users/shayan/Desktop/personal/lofi-chill-room/assets/images/scene2/foreground_cabin.png").convert("RGBA")

# Let's search the image for non-transparent pixels that have high green values and low blue values.
# If they exist, they are the culprit.
datas = img.getdata()
width, height = img.size

culprits = []
for y in range(height):
    for x in range(width):
        r, g, b, a = datas[y * width + x]
        if a > 0: # only look at visible pixels
            # The plant is green, but let's just look at the left half of the image (x < width/2)
            if x < width // 2:
                # We suspect green screen pixels have high G and low B
                if g > 150 and b < 100:
                    # Exclude the brown wood (brown has higher R than G typically, but let's just collect samples)
                    # Let's collect if G > B + 50
                    if g > b + 50:
                        culprits.append((r, g, b, x, y))

# Let's sort culprits by G value
culprits.sort(key=lambda item: item[1], reverse=True)

print(f"Found {len(culprits)} potential green screen pixels on the left half.")
for i in range(min(20, len(culprits))):
    c = culprits[i]
    print(f"R={c[0]}, G={c[1]}, B={c[2]} at x={c[3]}, y={c[4]}")
