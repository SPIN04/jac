import os
import requests

# Crea una cartella per salvare le immagini
os.makedirs('downloaded_images', exist_ok=True)

# URL della pagina con le immagini (esempio: Lorem Picsum)
url = 'https://picsum.photos/'

# Numero di immagini da scaricare
num_images = 98

# Scarica le immagini
for i in range(num_images):
    # Costruisci l'URL dell'immagine
    image_url = f'{url}/200'  # Cambia '200' alla dimensione desiderata
    
    # Scarica l'immagine
    response = requests.get(image_url)
    
    # Salva l'immagine nella stessa cartella dello script
    with open(f'{i}.jpg', 'wb') as file:
        file.write(response.content)

print(f'{num_images} immagini sono state scaricate e salvate nella cartella "downloaded_images".')
