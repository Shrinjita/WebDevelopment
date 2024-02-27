import json

from flask import Flask, render_template, jsonify

app = Flask(__name__)

def home():
    return render_template('front.html')

def get_data():
    with open('static/data/front.json', 'r') as f:
        data = json.load(f)

    # Access specific keys using the get function
    user_images = data.get('userImages')
    doctors = data.get('doctors')

    return jsonify({'userImages': user_images, 'doctors': doctors})

# Function mapping for routes
@app.route('/')
def serve_home():
    return home()

@app.route('/data')
def serve_data():
    return get_data()
