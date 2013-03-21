import base64
import os

from Crypto.Cipher import AES
from Crypto import Random

# secret key and initial value (IV) for cipher generation
SECRET_KEY = os.getenv('AES_SECRET');
IV = Random.new().read(16);


# the block size for the cipher object; must be 16, 24, or 32 for AES
BLOCK_SIZE = 32;


# the character used for padding--with a block cipher such as AES, the value
# you encrypt must be a multiple of BLOCK_SIZE in length.  This character is
# used to ensure that your value is always a multiple of BLOCK_SIZE
PADDING = '{';


# one-liner to sufficiently pad the text to be encrypted
pad = lambda s: s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * PADDING;


# generate and return new cipher object
def get_cipher():
    return AES.new(SECRET_KEY, AES.MODE_CBC, IV);


# encrypt with AES, encode with base64
def encrypt(data):
    return base64.b64encode(cipher.encrypt(pad(data)));


# decode with base64, decrypt with AES
def decrypt(data):
    cipher = get_cipher();
    return cipher.decrypt(base64.b64decode(data)).rstrip(PADDING);


cipher = get_cipher();
