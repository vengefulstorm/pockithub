import os
import urllib2
import json
import base64
#import httplib


#def deleteOldPAT(oldUrl):
#    conn = httplib.HTTPConnection(oldUrl)
#    conn.request('DELETE', '/myurl', body)
#    resp = conn.getresponse()
#    content = resp.read()

#    username = str(os.getenv('PUBLIC_USERNAME'));
#    passwd = str(os.getenv('PUBLIC_PASSWORD'));

#    input_data = json.dumps({ 'client_id' : cid, 'client_secret' : csecret, 'note': 'public access' });

#    PAT_req = urllib2.Request('https://api.github.com/authorizations');

#    base64string = base64.encodestring('%s:%s' % (username, passwd)).replace('\n', '')
#    PAT_req.add_header("Authorization", "Basic %s" % base64string)

#    PAT_resp = urllib2.urlopen(PAT_req, input_data);
#    PAT_resp = json.loads('\n'.join(PAT_resp.readlines()));
#    return PAT_resp['token'];


def registerPAT():
    username = str(os.getenv('PUBLIC_USERNAME'));
    passwd = str(os.getenv('PUBLIC_PASSWORD'));

    input_data = json.dumps({ 'client_id' : cid, 'client_secret' : csecret, 'note': 'public access' });

    PAT_req = urllib2.Request('https://api.github.com/authorizations');

    base64string = base64.encodestring('%s:%s' % (username, passwd)).replace('\n', '')
    PAT_req.add_header("Authorization", "Basic %s" % base64string)

    PAT_resp = urllib2.urlopen(PAT_req, input_data);
    PAT_resp = json.loads('\n'.join(PAT_resp.readlines()));
    return (PAT_resp['token'], PAT_resp['url']);


#GET CID & CSECRET
cid = str(os.getenv('CLIENT_ID'));
csecret = str(os.getenv('CLIENT_SECRET'));
(PAT, PAT_url) = registerPAT();

