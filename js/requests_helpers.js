var BASE_API_URL = "https://api.github.com";

function getUserRequest(user) {
    return BASE_API_URL + "/users/" + user;
}

function getUserWithAuth() {
    return BASE_API_URL + "/user";
}

function getReposRequest(user) {
    return BASE_API_URL + "/users/" + user + "/repos";
}

function getOrgReposRequest(org) {
    return BASE_API_URL + "/orgs/" + org + "/repos";
}

function getReposWithAuthRequest() {
    return BASE_API_URL + "/user/repos";
}

function getWatchersRequest(user, repo) {
    return BASE_API_URL + "/repos/" + user + "/" + repo + "/watchers";
}

function getCodeRequest(user, repo, path) {
    var rq = BASE_API_URL + "/repos/" + user + "/" + repo + "/contents/";
    if (path) {
        rq = rq + path;
    }
    return rq;
}

function getCommitsRequest(user, repo, sha) {
    var rq = BASE_API_URL + "/repos/" + user + "/" + repo + "/commits";
    if (sha) {
        rq = rq + "/" + sha;
    }
    return rq;
}

function getIssuesRequest(user, repo, number=-1) {
    var rq = BASE_API_URL + "/repos/" + user + "/" + repo + "/issues";
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}

function getIssuesRequestWithAuth(user) {
    var rq = BASE_API_URL;
    if (user) {
        rq = rq + "/user";
    }
    return rq + "/issues";
}

function getOrgIssuesRequestWithAuth(org) {
    return BASE_API_URL + "/orgs/" + org + "/issues";
}

function getMilestonesRequest(user, repo, number=-1) {
    var rq = BASE_API_URL + "/repos/" + user + "/" + repo + "/milestones";
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}

