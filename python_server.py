from flask import Flask, jsonify, request
from addressnet.predict import predict_one


# pip install selenium flask bs4
app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return jsonify({"METHOD":{"POST": {"PATH": "/", "DATA": "address: 'address_here'"}, "GET": {"PATH": "/'address_here'"}}})

@ app.route('/<address>', methods=['GET'])
def predict_address(address):
    return jsonify(predict_one(address))

@ app.route('/', methods=['POST'])
def predict_address_POST():
    content = request.json
    if not content['address'] is None:
        return jsonify(predict_one(content['address']))
    return jsonify({"message":"not address found"})


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=False)
