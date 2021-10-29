from flask import Flask, redirect, request, render_template, jsonify
from flask_awscognito import AWSCognitoAuthentication
from flask_cors import CORS
import base64
import rsession
import requests
import json



app = Flask(__name__)
CORS(app)

# @aws_auth.authentication_required
@app.route('/')
def index():
    return "Hello World!!"

domain_name = 'cogtestnito'
region = 'us-west-2'
client_id = '1d3m6tcmk15irun5p7mie54qn6'
client_secret = 'rhl9nsl9me6ksplpi08ni2p9mbnqmhe2m0hsh9bev0vsjoh9leg' 
pool_id = 'us-west-2_lvdUf58iF'
redirect_uri = 'https://f59cd475202e.ngrok.io/logincallback/'

@app.route('/login')
def login():
    loginendpoint = 'https://' + domain_name + '.auth.' + region + '.amazoncognito.com/login'
    response_type = 'code'
    scope = 'openid+profile'

    loginurl = loginendpoint + '?client_id=' + client_id +  '&response_type=' + response_type + '&scope=' + scope + '&redirect_uri=' + redirect_uri + '&state=' + '12321'
    return redirect(loginurl)

# https://cogtestnito.auth.us-west-2.amazoncognito.com/login?client_id=1d3m6tcmk15irun5p7mie54qn6&response_type=code&scope=openid+profile&redirect_uri=https://f59cd475202e.ngrok.io/logincallback/
# https://cogtestnito.auth.us-west-2.amazoncognito.com/login?client_id=1d3m6tcmk15irun5p7mie54qn6&response_type=code&scope=openid+profile&redirect_uri=https://127.0.0.1:5000/logincallback
# https://cogtestnito.auth.us-west-2.amazoncognito.com/login?client_id=1d3m6tcmk15irun5p7mie54qn6&response_type=code&scope=openid+profile&redirect_uri=https://127.0.0.1:5000/logincallback
# https://cogtestnito.auth.%20us-west-2.amazoncognito.com/login?client_id=1d3m6tcmk15irun5p7mie54qn6response_type=token&scope=openid+profile&redirect_uri=http://localhost:5000/logincallback
# https://127.0.0.1:5000/logincallback#id_token=as&expires_in=3600&token_type=Bearer

@app.route('/logincallback/')
def logincallback():
    code = request.args.get('code')
    state = request.args.get('state')
    print(state)
    x = client_id + ':' + client_secret
    # authheader = base64.b64encode(x)
    headers = {}
    # headers['Authorization'] = "Basic " + authheader
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    tokenendpoint = 'https://' + x + '@' +  domain_name + '.auth.' + region + '.amazoncognito.com/oauth2/token'
    print(tokenendpoint)

    data = {}
    data['client_id'] = client_id
    data['grant_type'] = 'authorization_code'
    data['redirect_uri'] = redirect_uri
    data['code'] = code

    print(data)
    # print(authheader)
    response = requests.post(tokenendpoint,headers=headers,data=data)
    print(response.text)
    return "Hiya"




app.run(debug = True)