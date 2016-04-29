var contact_container;
var top_row_container;
var alphabet;
var split_alphabet;
var search_container;
var search;

contact_container = document.createElement('div');
contact_container.setAttribute('id','contact_container');

top_row_container = document.createElement('div');
top_row_container.setAttribute('id','top_row_container');

search = document.createElement('input');
search.setAttribute('id','search');

var create_contact_container_elements = function(contact_container_element, contact_container_id){
    var contact_container_element = document.createElement(contact_container_element);
    contact_container_element.setAttribute('id',contact_container_id);
    
    contact_container.appendChild(contact_container_element);
};


var create_element = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    top_row_container.appendChild(element);
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(contact_container);
    contact_container.appendChild(top_row_container);
    contact_container.appendChild(search);
    
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    split_alphabet = alphabet.split('');
    console.log(split_alphabet);
    
    var abc_container;
    
    
    for(var i=0; i<26; i++){
        
        create_contact_container_elements('div','abc_container_' + i);
        
    };
    
    abc_container = document.getElementById('abc_container_' + i);
    console.log(abc_container);
    
    
    create_element('span','group_button');
    create_element('span','contact');
    create_element('span','plus_button');
    
    var group = document.getElementById('group_button');
    var contact = document.getElementById('contact');
    var plus_button = document.getElementById('plus_button');
    
    group.textContent = 'Groups';
    contact.textContent = 'All Contacts';
    plus_button.textContent = '+';
    
    
    
    
    
});