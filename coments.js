var comments = JSON.parse(localStorage.getItem("comentarios")) || [];

function showComments() {
    var list = document.getElementById("comments-list");

    list.innerHTML = "";

    comments.forEach(function(comment) {
        var div = document.createElement("div");

        var name = document.createElement("h4");
        name.textContent = comment.name;

        var message = document.createElement("p");
        message.textContent = comment.text;

        div.appendChild(name);
        div.appendChild(message);

        list.appendChild(div);
    });
}

document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("comment-name").value;
    var message = document.getElementById("comment-text").value;

    comments.push({
        name: name,
        text: message
    });

    localStorage.setItem("comentarios", JSON.stringify(comments));

    this.reset();
    showComments();
});

showComments();