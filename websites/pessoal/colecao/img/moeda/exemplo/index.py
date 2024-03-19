from PIL import Image
import os

def make_background_transparent(image_path, output_path, bg_color):
    image = Image.open(image_path)
    image = image.convert("RGBA")
    datas = image.getdata()

    newData = []
    for item in datas:
        # Alterando a cor de fundo para transparente (255, 255, 255) é o branco
        if item[0] == bg_color[0] and item[1] == bg_color[1] and item[2] == bg_color[2]:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    image.putdata(newData)
    image.save(output_path, "PNG")

imagens = ['frente-1-58.png']
#imagens = ['frente-1-58.png','frente-59-128.png','frente-129-198.png','frente-199-268.png','frente-269-339.png','frente-340-401.png','frente-402-464.png','frente-465-527.png','frente-528-590.png','frente-591-653.png','frente-654-723.png','frente-724-794.png','frente-795-863.png','frente-864-933.png','frente-934-997.png','verso-1-58.png','verso-59-128.png','verso-129-198.png','verso-199-268.png','verso-269-339.png','verso-340-401.png','verso-402-464.png','verso-465-527.png','verso-528-590.png','verso-591-653.png','verso-654-723.png','verso-724-794.png','verso-795-863.png','verso-864-933.png','verso-934-997.png']

for arquivo in imagens:
    source_folder = './copia/img/'
    target_folder = './img/'
    background_color = (255, 255, 255) # Exemplo: branco

    for filename in os.listdir(source_folder):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            file_path = os.path.join(source_folder, filename)
            output_path = os.path.join(target_folder, filename.split('.')[0] + '_transparent.png')
            make_background_transparent(file_path, output_path, background_color)
            print(f'Processado: {filename}')
