from django.conf import settings
from django.contrib.auth.models import User
from base64 import b64encode
import urllib
from hashlib import sha256
import simplejson as json
import logging
 
class SSOModelBackend(object):

    def authenticate_token(self, request, token):
        original = "%s%s" % (request.META['REMOTE_ADDR'],  request.META['HTTP_USER_AGENT'])
        hashed = b64encode(sha256(original).digest())
        requestdata = urllib.urlencode([('token', token), ('a', 'forum'), ('client', hashed)])
        u = urllib.urlopen("%s/mxid/validatetoken" % settings.MXID_URL, requestdata)

        response = json.decode(u.read())
        if (response["valid"] == True):
            return response["username"]
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

    def authenticate(self, request=None, token=None):
        username = self.authenticate_token(request=request, token=token)
        if username is not None:
            try:
                user = User.objects.get(username=username)
                logging.debug("User %s authenticated via SSO with MXID %s" % (username, settings.MXID_URL))
                return user
            except User.DoesNotExist:
                logging.debug("User %s authenticated via MXID, but no corresponding user found" % username)
                return None
        else:
            return None