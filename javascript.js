const input = document.getElementById('input') ;
const text = document.getElementById('text') ;
const inputColor = document.getElementById('inputColor') ;

function search() {
    let searchText = input.value;
    let newSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    //newSearchText needed to find special characters
    const pattern = new RegExp( newSearchText,  'gi', );
    text.innerHTML= text.textContent.replace( pattern , `<span style="color: ${inputColor.value};">$&</span>`,);
} 
