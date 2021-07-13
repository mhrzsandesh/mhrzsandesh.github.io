fetch("https://api.github.com/users/mhrzsandesh")
.then(response => response.json())
.then(function(data){
    let name = data['name']
    let intro = `I am ${name}`
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
        // console.log(repo)
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
        document.getElementById('repos').innerHTML +=
            "<a href='" + repo_url + "' target='_blank'>"+
            "<div class='repo-box'>"+
            "<h2 class='title'>" +repo_name + "</h2>"+
            "<p class='description'>" + repo_description + "</p>" +
            "<strong class='language'>" + repo_language + "</strong></div>" 
        ;
        }
    })
    // document.getElementById('loader').hidden = true
}