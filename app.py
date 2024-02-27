import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('front.html')

@app.route('/data')
def get_data():
    with open('static/data/front.json', 'r') as f:
        data = json.load(f)

    # Access specific keys using the get function
    user_images = data.get('userImages')
    doctors = data.get('doctors')

    return jsonify({'userImages': user_images, 'doctors': doctors})

if __name__ == '__main__':
    app.run(debug=True)
