const $gifContent = $("#content");
const $inputImg = $("#search");
const $form1 = $("form")

function addImg(res) {
    console.log("hi")
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifContent.append($newCol);
    }
}

$form1.on("submit", async function(e) {
    e.preventDefault();

    let searchInput = $inputImg.val();
    $inputImg.val(""); 

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
        q: searchInput,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });

    addImg(response.data);
});

$("#remove").on("click", function(){
    $gifContent.empty();
});
