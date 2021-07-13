fetch("https://api.github.com/users/mhrzsandesh")
.then(response => response.json())
.then(function(data){
    let name = data['name']
    let intro = `Hello!! I am ${name}`
    document.getElementById('image').src = data['avatar_url']
    document.getElementById('name').textContent = intro
    document.getElementById('bio').textContent = data['bio']
    document.getElementById('github').href = data['html_url']
    document.getElementById('main_container').hidden = false
    

})


function genRepo(){
    fetch('https://api.github.com/users/ghaleprachan/repos')
    .then(response => response.json())
    .then(function(repo){
        console.log(repo)
        for (i = 0; i < repo.length; i++) {
        // variables from api repo
        var repo_url = repo[i].html_url;
        var repo_name = repo[i].name;
        var repo_description = repo[i].description;
        var repo_language = repo[i].language;
                
        // replaces null values to be better represented when displayed
        if (repo_description == null) {
            repo_description = "<i>No Description</i>";
            }
        if (repo_language == null) {
            repo_language = "-";
            }
                
        // Puts repo information into div
        document.getElementById('repo-box').innerHTML +=
            "<a href='" + repo_url + "' target='_blank'><div class='repo-item'><h1 class='title'>" +
        repo_name + "</h1><p class='description'>" +
        repo_description + "</p>" + "<div class='bottom'><div class='language'>" +
        repo_language + "</div></div></div>" 
        ;
        }
    })
    document.getElementById('loader').hidden = true
}