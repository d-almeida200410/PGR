from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Vercel!"

# Certifique-se de que o app está definido para o Vercel
if __name__ == "__main__":
    app.run()
