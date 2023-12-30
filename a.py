import requests
import socket

def get_public_ip():
    try:
        # Utilizza un servizio per ottenere l'IP pubblico
        response = requests.get('https://api64.ipify.org?format=json')
        data = response.json()
        public_ip = data['ip']
        return public_ip
    except Exception as e:
        print(f"Errore durante il recupero dell'IP pubblico: {e}")
        return None

def send_post_request(public_ip):
    try:
        # Specifica l'URL del server a cui inviare la richiesta POST
        url = 'https://example.com/api/post-endpoint'
        
        # Dati da inviare nella richiesta POST
        payload = {'public_ip': public_ip}

        # Effettua la richiesta POST
        response = requests.post(url, data=payload)
        
        # Stampa la risposta del server
        print(f"Risposta dal server: {response.text}")
    except Exception as e:
        print(f"Errore durante l'invio della richiesta POST: {e}")

def main():
    # Ottieni l'IP pubblico
    public_ip = get_public_ip()

    if public_ip:
        print(f"IP pubblico del tuo computer: {public_ip}")
        
        # Invia la richiesta POST al server
        send_post_request(public_ip)
    else:
        print("Impossibile ottenere l'IP pubblico.")

if __name__ == "__main__":
    main()
