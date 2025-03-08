from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def racine():
    return {"message": "Bienvenue sur votre API locale"}

@app.get("/voici-ma-phrase")
def phrase_personnalisee():
    return {"message": "Hello"}

@app.get("/{texte}")
def reponse_dynamique(texte: str):
    return {"message": f"Vous avez saisi : {texte}"}
