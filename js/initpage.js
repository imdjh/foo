function initpage() {
    var urlHash = window.location.hash;
    window.jsonCurr = {'isleft': false, 'isright': false};
    var curr;      // current question ID, starting from 1

    if (urlHash) {
        curr = parseInt(urlHash.substring(1, urlHash.length));
        if (isNaN(curr)) {
            alert("Wrong Hash!");
        }
    } else {
        curr = 1;
    }
    if (curr > window.sizeJSONQA || curr < 1) {
        alert("Wrong Hash!");
    } else {
        // parse window.jsonQA unit -> window.jsonCurr
        window.jsonCurr['a'] = window.jsonQA.a[curr - 1];
        window.jsonCurr['q'] = window.jsonQA.q[curr - 1];     // "q": {"qNum": ...}

        if ((curr - 1) == 0) {
            window.jsonCurr['isleft'] = true;
        }
        if (curr == window.sizeJSONQA) {
            window.jsonCurr['isright'] = true;
        }

    }
}