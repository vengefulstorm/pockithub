import os
import urllib2
import json
import base64
import PH_common
import datetime
import AES
import markdown

from flask import Flask, url_for, send_from_directory, render_template, request, jsonify, abort, Markup
from render_section import render_section
from pygments import highlight
from pygments.lexers import get_lexer_by_name, guess_lexer
from pygments.formatters import HtmlFormatter

app = Flask(__name__);
app.register_blueprint(render_section);
    

#LANDING PAGE
@app.route('/', methods=['GET'])
def serveLanding():
    return render_template('index.html', user='vengefulstorm', repo='pockithub', public_token=PH_common.PAT, gen_url='/');


#FAVICON
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


#MANIFEST
@app.route('/manifest.appcache')
# TODO:
# -- @PH_common.add_response_headers({'Content-Type': 'text/cache-manifest'})
#   -- Right now this response has header type 'text/html', we should find a way to get it to text/cache-manifest
def manifest():
    origin = request.args.get('source');
    origin = '..' + origin;
    datestr = str(datetime.datetime.today());
    return render_template('manifest.appcache', origin_url=origin, date=datestr);




#OAUTH SETUP
@app.route('/auth', methods=['GET'])
def handleAuth():
    code = request.args.get('code');
    data = json.dumps({ 'client_id' : PH_common.cid, 'client_secret' : PH_common.csecret, 'code' : code });

    #get user access token
    url = 'https://github.com/login/oauth/access_token';
    header = { 'Accept' : 'application/json' };

    req = urllib2.Request(url, data, header);
    resp = urllib2.urlopen(req);
    resp = json.loads('\n'.join(resp.readlines()));
    
    tok = resp['access_token'];

    #get authenticated user's name
    url = 'https://api.github.com/user';
    header = { 'Accept' : 'application/json' };

    req = urllib2.Request(url, header);
    resp = urllib2.urlopen(req);
    resp = json.loads('\n'.join(resp.readlines()));
    
    usrName = resp['login'];
    
    #redirect to user's profile
    return redirect(url_for('/' + usrName, user_token=tok));





#HELPER END POINTS -------------------------------------------

#Encryption
@app.route('/helper/encrypt', methods=['POST'])
def encrypt():
    injson = None;
    if (request.headers['Content-Type'] == 'application/json'):
        injson = json.dumps(request.json);
        injson = json.loads(injson);
    else:
        return abort(415);

    data = injson['data'];
    data = b64decode(data);
    
    encrypted_data = AES.encrypt(data);
    return jsonify(data=encrypted_data);


#Decryption
@app.route('/helper/decrypt', methods=['POST'])
def decrypt():
    injson = None;
    if (request.headers['Content-Type'] == 'application/json'):
        injson = json.dumps(request.json);
        injson = json.loads(injson);
    else:
        return abort(415);

    data = injson['data'];

    decrypted_data = AES.decrypt(data);
    return jsonify(data=decrypted_data);


#Markdown Rendering
@app.route('/helper/markdown', methods=['POST'])
def markdown():
    injson = None;
    if (request.headers['Content-Type'] == 'application/json'):
        injson = json.dumps(request.json);
        injson = json.loads(injson);
    else:
        return abort(415);

    content = injson['data'];
    content = Markup(markdown.markdown(content))

    return jsonify(data=content);


#Markdown Rendering (for Base 64 encoded data)
@app.route('/helper/markdown64', methods=['POST'])
def markdown():
    injson = None;
    if (request.headers['Content-Type'] == 'application/json'):
        injson = json.dumps(request.json);
        injson = json.loads(injson);
    else:
        return abort(415);

    content = injson['data'];
    content = b64decode(content);
    content = Markup(markdown.markdown(content))

    return jsonify(data=content);


#Syntax (for Base 64 encoded data)
@app.route('/helper/syntax', methods=['POST'])
def markdown():
    injson = None;
    if (request.headers['Content-Type'] == 'application/json'):
        injson = json.dumps(request.json);
        injson = json.loads(injson);
    else:
        return abort(415);

    code = injson['data'];
    lang = injson['lang'];
    #code = b64decode(code);

    
    lexer = None;

    if (lang == ""):
        lexer = guess_lexer(code);
    else:
        lexer = get_lexer_by_name(lang, stripall=True);


    formatter = HtmlFormatter(cssclass="source");


    code = highlight(code, lexer, formatter);
    style = '<style>' + HtmlFormatter(style='monokai').get_style_defs('.highlight') + '</style>';
    ''.join(style);

    ret = (style+code);
    return jsonify(data=ret);

#-------------------------------------------------------------


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000));
    app.run(host='0.0.0.0', port=port);
