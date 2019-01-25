from .base import *

DEBUG = False


SECURE_SSL_REDIRECT = True

SECURE_PROXY_SSL_HEADER = (‘HTTP_X_FORWARDED_PROTO’, ‘https’)

# django-storages dropbox
DEFAULT_FILE_STORAGE = 'storages.backends.dropbox.DropBoxStorage'
DROPBOX_OAUTH2_TOKEN = 'P-DMhRXchXAAAAAAAAAAC8O1yV4Ta9-DDyyoxfuXMpw-xwHFrMtVzqvipdQkQjML'