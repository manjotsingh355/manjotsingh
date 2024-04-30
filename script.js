let about_me_elements_right = document.getElementsByClassName("container_box_item");
let about_me_elements_left = document.getElementsByClassName("container_box_item_displayed");
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

set_elements_3d(about_me_elements_right)

let dothis = ()=>{
    element = about_me_elements_right[0];
    element.classList.add('right_to_left');
    setTimeout(()=>{
        element.classList.remove('right_to_left');
        removeAndAddElement();
    },3000)
}

let removeAndAddElement = ()=>{
    let left_parent =about_me_elements_left[0].parentNode;
    let right_parent = about_me_elements_right[0].parentNode;

    element_right = right_parent.removeChild(about_me_elements_right[0]);
    element_left = left_parent.removeChild(about_me_elements_left[0]);
    

    element_left.classList.remove('container_box_item_displayed');
    element_left.classList.add('container_box_item');

    element_right.classList.remove('container_box_item');
    element_right.classList.add('container_box_item_displayed');

    left_parent.appendChild(element_right);
    right_parent.appendChild(element_left);
    
    set_elements_3d(about_me_elements_right)
}