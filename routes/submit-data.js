var express = require('express'),
    router = express.Router();

/**
 * Verifies the CSRF token and continues to parse the submission data. If no
 * token is supplied then an error response is issued.
 */
router.post(
    '',
    function(req, res, next) {
        var csrfToken = req.cookies.csrfToken;
        if (csrfToken === undefined)
            csrfToken = req.body._csrfToken;
        if (csrfToken === undefined)
            csrfToken = req.query._csrfToken;
        if (csrfToken === undefined) {
            res.status(403);
            res.send("No token");
            return next();
        }
        res.send("Got your post.");
    }
);

module.exports = router;