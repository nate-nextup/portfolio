var images = ["https://ci3.googleusercontent.com/proxy/G5C455JL2Jz6Wc8khgHRNAkS628MHZSnvaNeWh198jDChr0yPVfchI1bqPUbMxy3WTNQz7TpvZka9YwLN3wljPSdla1oBu7TuspYzMszX_EUAKMjnG4ePw=s0-d-e1-ft#https://www.customink.com/designs/proofs/464442959-26495416/front.jpg" ,
 "https://ci3.googleusercontent.com/proxy/CMlyEn7h4HXmJXIXS52r7rnvizfCJ0lZ4KttSonUozbQtj3Jy1CkgHatUAXAH3324xoj8qGy8Sy0prfZb6bZQLrYM-YL-rL1YxvOyr1LdLgs2gblqAFdrg=s0-d-e1-ft#https://www.customink.com/designs/proofs/464190343-26495416/front.jpg" ];
function loadImage(imageID) {
    document.write(images[imageID]);
}
function myFunction() {
  // document.getElementById("myUL").style.display = "";
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;

  input = document.getElementById('myInput');
  // setting a variable filter equal to the input in our search bar
  // and changing it to uppercase
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  //ul.style.display = "";
  // creating an array with each li tag inside 
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
      //console.log(li[i]);
    // grabs a tag from each li tag  
    a = li[i].getElementsByTagName("a")[0];
    console.log(a);
    // sets txtValue text of the a href tag 
    txtValue = a.textContent || a.innerText;
    //when search input matches one of the li 
 
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ul.style.display = "";
        li[i].style.display = "";
    } else {
       ul.style.display = "";
      li[i].style.display = "none";
    }
  }
}
