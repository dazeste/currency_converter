const dropList = document.querySelectorAll('.drop-list select');

for (let i = 0; i < dropList.length; i++) {
  for(country_list in country_list){
    let selected;
    if(i == 0){
      selected = country_list == "GBP" ? "selected" : "";
    }else if(i == 1){
      selected = country_list == "GBP" ? "selected" : "";
    }
    //creating option tag with passing current code as a text value
    let optionTag =` <option value = '${country_list}'> ${country_list} </option>`;
    //inserting option tag inside select tag
    dropList[i].insertAdjacentHTML('beforeend', optionTag);
  }
  
}