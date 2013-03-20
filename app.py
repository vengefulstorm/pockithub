import os
import urllib2
import json
import base64
import PH_common
#import AES

from flask import Flask, url_for, send_from_directory, render_template
from render_section import render_section


app = Flask(__name__);
app.register_blueprint(render_section);


#LANDING PAGE
@app.route('/', methods=['GET'])
def serveLanding():
    #return PH_common.PAT;
    #import pdb; pdb.set_trace()
    #return render_template('index.html', user='vengefulstorm', repo='pockithub');
    return render_template('index.html', user='vengefulstorm', repo='pockithub', public_token=PH_common.PAT);


#FAVICON
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


#OAUTH SETUP
@app.route('/auth', methods=['GET'])
def handleAuth():
    code = request.args.get('code');
    #return PH_common.cid;
    return cid;
    
    #data = { 'client_id' : PH_common.cid, 'client_secret' : PH_common.csecret, 'code' : code };
    data = { 'client_id' : cid, 'client_secret' : csecret, 'code' : code };
    data = urllib.urlencode(data);
    url = 'https://github.com/login/oauth/access_token';
    header = { 'Accept' : 'application/json' };
    req = urllib2.Request(url, data, header);
    resp = urllib2.urlopen(req);
    resp = json.loads('\n'.join(resp.readlines()));
    
    tok = resp['access_token'];
    
    return redirect(url_for('/', user_token=tok));


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
