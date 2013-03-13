import os
import urllib2
import urllib
import json

from flask import Flask, url_for, send_from_directory

app = Flask(__name__);

#LANDING PAGE
@app.route('/')
def hello():
    return send_from_directory('templates', filename='index.html');


#OAUTH SETUP
@app.route('/auth')
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
    
    
#MAIN APP
@app.route('/app')
def serveApp():
    return render_template('index.html');


#HELPER END POINT
#@app.route('')
#def blah():
#    return 


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000));
    app.run(host='0.0.0.0', port=port);
