var BASE_API_URL = "https://api.github.com";

function getMarkdownRequest() {
    return BASE_API_URL + "/markdown";
}

function redirectUserRequest(user) {
    return "/" + user;
}

function redirectRepoFeedRequest(owner, repo) {
    return "/" + owner + "/" + repo;
}

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

function getOrgsRequest(user) {
    return BASE_API_URL + "/users/" + user + "/orgs";
}

function getOrgsWithAuthRequest() {
    return BASE_API_URL + "/user/orgs";
}

function getOrgRequest(org) {
    return BASE_API_URL + "/orgs/" + org;
}

function getWatchersRequest(owner, repo) {
    return BASE_API_URL + "/repos/" + owner + "/" + repo + "/watchers";
}

function getCodeRequest(owner, repo, path) {
    var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/contents/";
    if (path) {
        rq = rq + path;
    }
    return rq;
}

function getCommitsRequest(owner, repo, sha) {
    var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/commits";
    if (sha) {
        rq = rq + "/" + sha;
    }
    return rq;
}

function getIssuesRequest(owner, repo, number) {
    number = (typeof number === 'undefined') ? -1 : number;
    var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/issues";
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}

function getIssuesRequestWithAuth() {
    return BASE_API_URL + "/user/issues";
}

function getOrgIssuesRequestWithAuth(org) {
    return BASE_API_URL + "/orgs/" + org + "/issues";
}

function getPullRequestsRequest(owner, repo, number) {
    number = (typeof number === 'undefined') ? -1 : number;
    var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/pulls";    
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}

function getPullRequestCommitsRequest(owner, repo, number) {
    return BASE_API_URL + "/repos/" + owner + "/" + repo + "/pulls/" + number + "/commits";
}

function getPullRequestFilesRequest(owner, repo, number) {
    return BASE_API_URL + "/repos/" + owner + "/" + repo + "/pulls/" + number + "/files";
}

function getMilestonesRequest(owner, repo, number) {
    number = (typeof number === 'undefined') ? -1 : number;
    var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/milestones";
    if (number != -1) {
        rq = rq + "/" + number;
    }
    return rq;
}

function getSearchIssuesRequest(owner, repo, state, query) {
    return BASE_API_URL + "/legacy/issues/search/" + owner + "/" + repo + "/" + state + "/" + query;
}

function getIssuesComments(issuesUrl){
  return issuesUrl + "/comments";
}

function getIssuesComment(owner,repo,number){
  var rq = BASE_API_URL + "/repos/" + owner + "/" + repo + "/issues/comments";
  if (number != -1){
    rq = rq + "/" + number;
  }
  return rq;
}

function getSearchReposRequest(query) {
    return BASE_API_URL + "/legacy/repos/search/" + query;
}

function getSearchUserRequest(query) {
    return BASE_API_URL + "/legacy/user/search/" + query;
}

function getRepoFeedRequest(owner, repo) {
    return BASE_API_URL + "/repos/" + owner + "/" + repo + "/events";
}

function getFeedRequest(user, publicOnly) {
    var rq = BASE_API_URL + "/users/" + user + "/received_events";
    if (publicOnly) {
        rq = rq + "/public";
    }
    return rq;
}

function getUserNotifications() {
    return BASE_API_URL + "/notifications";
}

function getUserRepos(username) {
    return BASE_API_URL + "/users/" + username + "/repos";
}

function getUserReposWithAuth() {
    return BASE_API_URL + "/user";
}

function getFollowers(username){
    return BASE_API_URL + "/users/" + username + "/followers";
}

function getFollowersWithAuth() {
    return BASE_API_URL + "/user/followers";
}

function getFollowing(username){
    return BASE_API_URL + "/users/" + username + "/following";
}

function getFollowingWithAuth() {
    return BASE_API_URL + "/user/following";
}

function getStarredRepos(username){
    return BASE_API_URL + "/users/" + username + "/starred";
}

function getStarredReposWithAuth() {
    return BASE_API_URL + "/user/starred";
}

function getPullRequestRequest(username, repo){
    return BASE_API_URL + "/repos/" + username + "/" + repo + "/pulls";
}
