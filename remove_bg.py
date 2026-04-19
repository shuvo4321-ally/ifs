from rembg import remove
from PIL import Image
import os

images = [
    "public/assets/img/icons/iso_quality_icon.png",
    "public/assets/img/icons/insured_staff_icon.png",
    "public/assets/img/icons/support_24_7_icon.png"
]

for img_path in images:
    if os.path.exists(img_path):
        input_image = Image.open(img_path)
        output_image = remove(input_image)
        output_image.save(img_path)
        print(f"Processed {img_path}")
    else:
        print(f"Not found: {img_path}")
