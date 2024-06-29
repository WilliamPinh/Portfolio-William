document.addEventListener("DOMContentLoaded", function() {
    const username = "WilliamPinh";

    function fetchGitHubRepos(username) {
        const apiUrl = `https://api.github.com/users/${username}/repos`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar repositórios do GitHub: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                
                displayGitHubRepos(data);
            })
            .catch(error => {
                console.error("Erro ao buscar repositórios:", error);
            });
    }

    function displayGitHubRepos(repos) {
        const reposContainer = document.getElementById("github-repos");

        repos.forEach(repo => {
            const repoCard = createRepoCard(repo);
            reposContainer.appendChild(repoCard);
        });
    }

    function createRepoCard(repo) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = repo.name;

        link.appendChild(overlay);
        card.appendChild(link);

        return card;
    }

    fetchGitHubRepos(username);

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});
