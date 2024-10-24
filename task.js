let containdiv=document.getElementById("container")
let imgtag=document.createElement("img")
imgtag.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg")
let ptag=document.createElement("p")
ptag.innerHTML="this is p tag"
let span=document.createElement("span")
span.innerText="this is span"
containdiv.append(imgtag,ptag,span)
containdiv.style.textAlign="center"
containdiv.style.backgroundColor="lightgreen"
containdiv.style.display="inline-block"
containdiv.style.padding="30px"
containdiv.style.margin="40px"
containdiv.style.borderRadius="40px"
imgtag.style.width="400px"
imgtag.style.borderRadius="40px"
ptag.style.fontSize="30px"
ptag.style.fontWeight="800"
span.style.fontWeight="800"
span.style.color="blue"
ptag.style.color="red"
