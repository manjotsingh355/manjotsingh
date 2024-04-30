let about_me_elements_left = document.getElementsByClassName("container_box_item");
let about_me_elements_right = document.getElementsByClassName("container_box_item_displayed");
let start_x = 30;
let start_y = 2;
let start_z_index = about_me_elements_left.length + about_me_elements_right.length;


let set_elements_3d = (elements)=>{
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.top = (start_x - (i) * 4) + "vh";
        element.style.left = (start_y + 45 + i) + "%";
        element.style.zIndex = (start_z_index - i)+"";
    }
}

set_elements_3d(about_me_elements_left)

let dothis = ()=>{
    element = about_me_elements_left[0];
    element.classList.add('right_to_left');
    setTimeout(()=>{
        element.classList.remove('right_to_left');
    },3000)
}