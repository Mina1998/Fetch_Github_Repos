let input = document.querySelector("#input"),
getReposButton = document.querySelector(".get-repos-button"),
reposData = document.querySelector(".show-data");

getReposButton.onclick = function () {
    getRepos();
}

// Get Repos Function
function getRepos() {
    if (input.value == "") {
        reposData.innerHTML = `<span>Please Write Github Username</span>`;
    } else {
        fetch (`https://api.github.com/users/${input.value}/repos`)
        .then((response)  => {
            return response.json();
        })
        .then((repos) => {
            reposData.innerHTML =  "";
            repos.forEach((repo) => {
                let mainDv = document.createElement("div");
                let repoName = document.createTextNode(repo["name"]);
                mainDv.appendChild(repoName);
                let URL = document.createElement("a");
                URL.appendChild(document.createTextNode("Visit"));
                URL.href = repo["html_url"];
                URL.target = "blank";
                mainDv.appendChild(URL);
                mainDv.classList.add("repo-box");
                reposData.appendChild(mainDv);
            });
        })
    }
}