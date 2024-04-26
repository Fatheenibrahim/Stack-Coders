from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)
db = client.get_database("PROJECT")
collection1 = db.get_collection('PatientInformation')  
collection2 = db.get_collection('DoctorInformation')  

@app.route('/api/patientlogin', methods=['POST'])
def patientlogin():
    data = request.get_json()
    uniqueid = data.get('uniqueid')
    password = data.get('password')

    user = collection1.find_one({'uniqueid': uniqueid})
    try:
        if user and user['password'] == password:
            print('successful')
            return 'yes'
        else:
            print('unsuccessful')
            return 'no'
    except ValueError:
        print('Invalid password hash')
        return 'no'
    

@app.route('/api/doctorlogin', methods=['POST'])
def doctorlogin():
    data = request.get_json()
    uniqueid = data.get('uniqueid')
    password = data.get('password')

    user = collection2.find_one({'uniqueid': uniqueid})
    try:
        if user and user['password'] == password:
            print('successful')
            return 'yes'
        else:
            print('unsuccessful')
            return 'no'
    except ValueError:
        print('Invalid password hash')
        return 'no'
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
