import cv2
import numpy as np
import re
import pytesseract
from PIL import Image

def save_circle_with_transparent_background(image, center, radius, file_name):
    
    #Salva um círculo detectado como um arquivo PNG com fundo transparente.
    
    #:param image: Imagem original.
    #:param center: Centro do círculo (x, y).
    #:param radius: Raio do círculo.
    #:param file_name: Nome do arquivo para salvar o círculo.
    
    # Aumenta o raio em 2 pixels
    radius += 40

    # Cria uma imagem de 4 canais (RGBA) com fundo transparente
    circle_img = np.zeros((image.shape[0], image.shape[1], 4), dtype=np.uint8)

    # Cria uma máscara com um círculo preenchido
    mask = np.zeros((image.shape[0], image.shape[1]), dtype=np.uint8)
    cv2.circle(mask, center, radius, (255, 255, 255), -1)

    # Extrai os pixels do círculo usando a máscara
    circle_img[mask > 0] = np.append(image[mask > 0], [[255]] * len(image[mask > 0]), axis=1)

    # Recorta a imagem para a área ao redor do círculo
    x, y = center
    left, right = max(x - radius, 0), min(x + radius, image.shape[1])
    top, bottom = max(y - radius, 0), min(y + radius, image.shape[0])
    cropped_circle = circle_img[top:bottom, left:right]

    # Salva a imagem recortada como PNG
    cv2.imwrite(file_name, cropped_circle)

def save_circle_with_non_transparent_background(image, center, radius, file_name):
    """
    Salva um círculo detectado como um arquivo PNG com fundo não transparente.
    
    :param image: Imagem original.
    :param center: Centro do círculo (x, y).
    :param radius: Raio do círculo.
    :param file_name: Nome do arquivo para salvar o círculo.
    """
    # Aumenta o raio em 2 pixels
    radius += 40

    # Cria uma imagem RGB com fundo branco (ou qualquer outra cor de fundo desejada)
    circle_img = np.ones((image.shape[0], image.shape[1], 3), dtype=np.uint8) * 255  # Mude * 255 para outra cor se quiser

    # Cria uma máscara com um círculo preenchido
    mask = np.zeros((image.shape[0], image.shape[1]), dtype=np.uint8)
    cv2.circle(mask, center, radius, (255, 255, 255), -1)

    # Extrai os pixels do círculo usando a máscara e os coloca no fundo branco
    circle_img[mask > 0] = image[mask > 0]

    # Recorta a imagem para a área ao redor do círculo
    x, y = center
    left, right = max(x - radius, 0), min(x + radius, image.shape[1])
    top, bottom = max(y - radius, 0), min(y + radius, image.shape[0])
    cropped_circle = circle_img[top:bottom, left:right]

    # Salva a imagem recortada como PNG
    cv2.imwrite(file_name, cropped_circle)

imagens = ['frente-1-58.png','frente-59-128.png','frente-129-198.png','frente-199-268.png','frente-269-339.png','frente-340-401.png','frente-402-464.png','frente-465-527.png','frente-528-590.png','frente-591-653.png','frente-654-723.png','frente-724-794.png','frente-795-863.png','frente-864-933.png','frente-934-997.png','verso-1-58.png','verso-59-128.png','verso-129-198.png','verso-199-268.png','verso-269-339.png','verso-340-401.png','verso-402-464.png','verso-465-527.png','verso-528-590.png','verso-591-653.png','verso-654-723.png','verso-724-794.png','verso-795-863.png','verso-864-933.png','verso-934-997.png']

for arquivo in imagens:
    filename = arquivo

    # Encontrando todos os números na string
    numeros = re.findall(r'\d+', filename)
    parte = filename.split("-", 1)[0]

    print(f"{numeros[0]} - {numeros[1]}")
    
    # Exemplo de uso
    image = cv2.imread(arquivo)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (7, 7), 1.5)

    circles = cv2.HoughCircles(blurred, cv2.HOUGH_GRADIENT, dp=1.2, minDist=100, param1=100, param2=30, minRadius=10, maxRadius=200)

    if circles is not None:
        circles = np.round(circles[0, :]).astype("int")
        indice = int(numeros[0])
        for i, (x, y, r) in enumerate(circles, start=1):
            file_name_transparent = f"./img/{parte}_{int(numeros[0])}{int(numeros[1])}{i}.png"
            save_circle_with_transparent_background(image, (x, y), r, file_name_transparent)
            print(f"Círculo {indice} salvo com fundo transparente como {file_name_transparent}.")

            """ if(indice >= int(numeros[1])):
                break """ 
            indice += 1
        print('fim')
