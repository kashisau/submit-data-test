var express = require('express'),
    crypto = require('crypto'),
    router = express.Router();

/**
 * Issues a CSRF token to the requester so that subsequent submissions to the
 * REST app can be validated.
 */
router.post(
    '',
    function(req, res) {
        var csrfToken = crypto.randomBytes(64).toString('hex');
        res.cookie(
            'csrfToken',
            csrfToken,
            {
                maxAge: 172800,
                httpOnly: true
            }  
        );

        res.send("CSRF token set (HTTPOnly cookie)");
    }
);

module.exports = router;