from Crypto.Cipher import AES
from Crypto import Random

BLOCK_SIZE = 32

INTERRUPT = u'\u0001'

PAD = u'\u0000'

def AddPadding(data, interrupt, pad, block_size):
    new_data = ''.join([data, interrupt])
    new_data_len = len(new_data)
    remaining_len = block_size - new_data_len
    to_pad_len = remaining_len % block_size
    pad_string = pad * to_pad_len
    return ''.join([new_data, pad_string])

def StripPadding(data, interrupt, pad):
    return data.rstrip(pad).rstrip(interrupt)

SECRET_KEY = str(os.getenv('AES_SECRET')); #Random.new().read(32)

IV = Random.new().read(16)

cipher_for_encryption = AES.new(SECRET_KEY, AES.MODE_CBC, IV)
cipher_for_decryption = AES.new(SECRET_KEY, AES.MODE_CBC, IV)

def EncryptWithAES(encrypt_cipher, plaintext_data):
    plaintext_padded = AddPadding(plaintext_data, INTERRUPT, PAD, BLOCK_SIZE)
    encrypted = encrypt_cipher.encrypt(plaintext_padded)
    return encrypted

def DecryptWithAES(decrypt_cipher, encrypted_data):
    decoded_encrypted_data = encrypted_data
    decrypted_data = decrypt_cipher.decrypt(decoded_encrypted_data)
    return StripPadding(decrypted_data, INTERRUPT, PAD)

our_data_to_encrypt = u'abc11100000'
encrypted_data = EncryptWithAES(cipher_for_encryption, our_data_to_encrypt)
print ('Encrypted string:', encrypted_data)

decrypted_data = DecryptWithAES(cipher_for_decryption, encrypted_data)
print ('Decrypted string:', decrypted_data)
