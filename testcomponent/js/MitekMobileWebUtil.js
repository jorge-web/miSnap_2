
var MobileWebParams = {
    "CallBack": null,
    "CaptureCallback": null,
    "CVCallback": null,
    "RequestCallBack": null
}

var MobileWeb = {

    init: function () {

        addEventListener("message", this.processMessage, true);

        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#mitekIFrame { ' +
            ' position: absolute; ' +
            ' left: -100px; ' +
            ' height: 1px; ' +
            ' width: 1px; ' +
            ' } ';
        document.getElementsByTagName('head')[0].appendChild(style);

        var iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', 'mitekIFrame');
        iFrame.setAttribute('frameborder', '0');
        iFrame.setAttribute('marginwidth', '0');
        iFrame.setAttribute('marginheight', '0');
        iFrame.setAttribute('scrolling', 'auto');
        iFrame.setAttribute('allowtransparency', 'false');
        iFrame.src = 'http://10.200.0.126/MitekMobileWebAPI/src/iframe.html';
        document.body.appendChild(iFrame);

    },

    processMessage: function (data) {
        this.MobileWebParams.CallBack(data.data);
    },

    decodeResponse: function (response) {
        return JSON.parse(decodeURIComponent(response.data));
    },

    captureDocument: function(params) {
        MobileWebParams.CallBack = params.callback;
        document.getElementById('mitekIFrame').contentWindow.postMessage(JSON.stringify(params), '*');
    },

    processDocumentRequest: function (params) {
        MobileWebParams.CallBack = params.callback;
        document.getElementById('mitekIFrame').contentWindow.postMessage(JSON.stringify(params), '*');
    },

    // capture error codes
    captureErrorCode: {
        GOOD: 0, // Success
        NF: 1,  // Not found
        OOF: 2, // Out of focus
        DARK: 3, // Bad lighting
        MINFILL: 4, // Min fill
        SKEW: 5, // Skewed image
        MINWIDTH: 6, // Too far away
        GLARE: 7, // Glare detected
        FOURCORNERS: 8 // Four Corners not detected
    },

    decodeCaptureErrorCodes: function (errors) {

        var captureErrors = [];

        for (var i=0; i<errors.length; i++) {
            switch (errors[i]) {
                case this.captureErrorCode.NF:
                    captureErrors.push('We were unable to read your document.');
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
                    captureErrors.push('Hold camera directly over your document.');
                    break;
                case this.captureErrorCode.MINWIDTH:
                    captureErrors.push('Move the camera closer to your document.');
                    break;
                case this.captureErrorCode.GLARE:
                    captureErrors.push('Too much glare on your image.  Avoid bright lights.');
                    break;
                case this.captureErrorCode.FOURCORNERS:
                    captureErrors.push('We were unable to detect the four corners of your document.');
                    break;
            }
        }

        return captureErrors;
    }

}
