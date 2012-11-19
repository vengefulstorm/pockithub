function getWatchersRequest(user, repo) {
    var rq = "https://api.github.com/repos/";
    return rq + user + "/" + repo + "/watchers";
}

function getCodeRequest(user, repo, path) {
    var rq = "https://api.github.com/repos/";
    rq = rq + user + "/" + repo + "/contents/";
    if (path) {
        rq = rq + path;
    }
    return rq;
}

function getIssuesRequest(user, repo, path) {
    var rq = "https://api.github.com/repos/";
    rq = rq + user + "/" + repo + "/issues";
    return rq;
}

function getIssuesRequest(user, repo, number=-1) {
    var rq = "https://api.github.com/repos/";
    rq = rq + user + "/" + repo + "/pulls";
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}
