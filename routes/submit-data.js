var express = require('express'),
    router = express.Router();

/**
 * Verifies the CSRF token and continues to parse the submission data. If no
 * token is supplied then an error response is issued.
 */
router.post(
    '',
    function(req, res, next) {
        var csrfToken = req.cookies.csrfToken,
            response = "Submission...\n";

        if (csrfToken === undefined)
            csrfToken = req.body._csrfToken;
        if (csrfToken === undefined)
            csrfToken = req.query._csrfToken;
        if (csrfToken === undefined) {
            res.status(403);
            res.send("No token");
            return next();
        }
        
        response += [
            'Received CSRF token: ...' +
                csrfToken.substr(csrfToken.length - 9),
            '[TODO] Validating token',
            '[TODO] Vaidating submission',
            '[TODO] Storing submission'
        ].join("\n");
        res.send(response);
        return;
    }
);

module.exports = router;