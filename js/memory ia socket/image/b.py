import os
from PIL import Image
import imagehash

def find_identical_images(folder_path):
    image_hashes = {}

    # Iterate through all files in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        # Check if the file is an image
        if os.path.isfile(file_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            # Open the image and compute its hash
            img = Image.open(file_path)
            img_hash = str(imagehash.average_hash(img))

            # Check if the hash already exists in the dictionary
            if img_hash in image_hashes:
                print(f"Identical images found: {filename} and {image_hashes[img_hash]}")
            else:
                image_hashes[img_hash] = filename

if __name__ == "__main__":
    # Ottieni il percorso della cartella dello script
    script_folder = os.path.dirname(__file__)
    
    # Trova immagini identiche nella stessa cartella dello script
    find_identical_images(script_folder)
