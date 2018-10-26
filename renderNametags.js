
function renderNametags(nametags) {
    return `
        <div class="nametag">
            <div id="hello">Hello, my name is:</div>
            <div>
            </div>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}