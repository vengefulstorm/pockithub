import os
import urllib2
import urllib
import json
import base64

from flask import Flask, url_for, send_from_directory, render_template
from render_section import render_section


app = Flask(__name__);
app.register_blueprint(render_section);


#LANDING PAGE
@app.route('/', methods=['GET'])
def serveLanding():
    return render_template('index.html', user='vengefulstorm', repo='pockithub');
    

#OAUTH SETUP
@app.route('/auth', methods=['GET'])
def handleAuth():
    code = request.args.get('code');
    cid = str(os.getenv('CLIENT_ID'));
    csecret = str(os.getenv('CLIENT_SECRET_KEY'));
    redir = str(os.getenv('CLIENT_REDIRECT_LINK'));
    
    data = { 'client_id' : cid, 'client_secret' : csecret, 'code' : code };
    
    if (redir != ''):
        data['redirect_uri'] = redir;
        
    data = urllib.urlencode(data);
    url = 'https://github.com/login/oauth/access_token';
    header = { 'Accept' : 'application/json' };
    req = urllib2.Request(url, data, header);
    resp = urllib2.urlopen(req);
    resp = json.loads(resp);
    
    tok = resp['access_token'];
    
    return redirect(url_for('app', token=tok));


#HELPER END POINT
#@app.route('/helper/encrypt', methods=['POST'])
#def encrypt():
#    injson = None;
#    if request.headers['Content-Type'] == 'application/json':
#        injson = json.dumps(request.json);

#    data = injson['data'];
#    data = b64decode(data);
    
#    resp = make_response(...)
# jsonify ...


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000));
    app.run(host='0.0.0.0', port=port);
