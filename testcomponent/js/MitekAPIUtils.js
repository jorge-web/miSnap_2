
var MitekUtil = {

    captureErrorCode: {
        GOOD: 0, // Success
        NF: 1,  // Not found
        OOF: 2, // Out of focus
        DARK: 3, // Bad lighting
        MINFILL: 4, // Min fill
        SKEW: 5, // Skewed image
        MINWIDTH: 6, // Too far away
        GLARE: 7, // Glare detected
        FOURCORNERS: 8, // Four Corners not detected
        CORRUPTIMAGE: 9, // Image is corrupt
        MINPADDING: 10, // Min Padding
        LOWCONTRAST: 11, // Low Contrast Background
        BUSYBACKGROUND: 12, // Busy Background
        IMAGETOOSMALL: 13 // image too small
    },

    responseErrorCode: {
        "BackNotReadable": 600,
        "FrontReadableNeedState": 601,
        "FrontNotReadable": 602,
        "InvalidTransactionId": 603
    },

    decodeCaptureErrorCodes: function(errors) {

        var captureErrors = [];

        for (var i=0; i<errors.length; i++) {
            switch (errors[i]) {
                case this.captureErrorCode.NF:
                    captureErrors.push('We were unable to detect the barcode from the back of your license.');
                    break;
                case this.captureErrorCode.OOF:
                    captureErrors.push('The image is too blurry.');
                    break;
                case this.captureErrorCode.DARK:
                    captureErrors.push('There is not enough light on your document.');
                    break;
                case this.captureErrorCode.MINFILL:
                    captureErrors.push('Move the camera closer to your document.');
                    break;
                case this.captureErrorCode.SKEW:
                    captureErrors.push('Document is skewed.  Hold camera directly over your document.');
                    break;
                case this.captureErrorCode.MINPADDING:
                    captureErrors.push('Move the camera further away from your document.');
                    break;
                case this.captureErrorCode.GLARE:
                    captureErrors.push('The image has glare.');
                    break;
                case this.captureErrorCode.FOURCORNERS:
                    captureErrors.push('We can\'t find the 4 corners of your document.');
                    break;
                case this.captureErrorCode.CORRUPTIMAGE:
                    captureErrors.push('The image you provided is unreadable.');
                    break;
                case this.captureErrorCode.LOWCONTRAST:
                    captureErrors.push('Center your document on a dark background.');
                    break;
                case this.captureErrorCode.BUSYBACKGROUND:
                    captureErrors.push('The background is too busy.  Please use a solid background.');
                    break;
                case this.captureErrorCode.IMAGETOOSMALL:
                    captureErrors.push('The image you provided is too small.');
                    break;
            }
        }

        return captureErrors;
    }

};

/**
 *  Mitek Capture Error Codes
 */
var MitekCaptureErrorCode = MitekUtil.captureErrorCode;


