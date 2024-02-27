import json

from flask import Flask, render_template, jsonify

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def serve_home():
    return render_template('front.html')
# Function mapping for routes
@app.route('/')
def serve_home():
    return home()

@app.route('/data')
def serve_data():
    return get_data()
def get_data():
    with open('WebDevelopment/static/data/front.json', 'r') as f:
        data = json.load(f)

    # Access specific keys using the get function
    user_images = data.get('userImages')
    doctors = data.get('doctors')

    return jsonify({'userImages': user_images, 'doctors': doctors})

if __name__ == "__main__":
    app.run(debug=True)
