function changeParagraphText() {
    document.getElementById("textParagraph").innerHTML = "Malinga";
}        function changeDivColor() {
    document.getElementById("colorDiv").style.backgroundColor = "lightblue";
}        function toggleParagraph() {
    const paragraph = document.getElementById("toggleParagraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}        function addListItem() {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("myList").appendChild(newItem);
}        function changeImageSource() {
    document.getElementById("myImage").src = "skysports-lasith-malinga-sri-lanka_4688166.jpg";
} 
function changeImageSource() {
    document.getElementById("myImage").src = "/home/uki/Desktop/DOM/1707924420-nissanka-6.jpg";
}  

      function countParagraphs() {
    const paragraphs = document.getElementsByTagName("p");
    alert("Number of paragraphs: " + paragraphs.length);
}        function deleteListItem() {
    const list = document.getElementById("myList");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}
