// let my_btn=document.querySelector('#my_btn');
// let my_p=document.querySelector('#my_p');
// // my_btn.innerHTML='Show';
// let my_show=false;

// my_btn.addEventListener('click',function(){
//  // my_p.style.visibility='visible';
  
//   if(my_show){
//     my_p.style.visibility='hidden';
//     my_show=false;
//     my_btn.innerHTML='show';
//   }else{
//     my_p.style.visibility='visible';
//     my_show=true;
//     my_btn.innerHTML='Hide';
//   }
  
// });


// let root1=document.querySelector('#root');
// let jumboton=document.createElement("div");
// jumboton.className='jumbotron text-center';
// jumboton.setAttribute('id','my_jumb');
// root1.appendChild(jumboton);

// let my_p1=document.createElement("p");
// let my_jumb=document.querySelector('#my_jumb');
// my_p1.className='new_p';
// my_p1.innerHTML='<strong>Book is<strong>';
// my_jumb.appendChild(my_p1);
// // root1.appendChild(my_p1);
// my_p1.style.color='red';
// console.log(my_p1);

// console.log(root1.children);



let nameField=document.querySelector('#nameField');
let ul=document.querySelector('#nameList');

nameField.addEventListener('keypress',function(event){
	// console.log(event);
	if(event.keyCode === 13){
		let name= event.target.value;
		console.log(name);
		// ul.appendChild(createLi(name));
		createLi(ul,name);
		event.target.value="";

	}
});

function createLi(ul,name){
	let li=document.createElement('li');
	li.className='list-group-item d-flex';
	li.innerHTML=name;

	let span=document.createElement('span');
	span.innerHTML='X';
	span.className='ml-auto';
	
	span.style.color='red';
	span.style.cursor='pointer';

	span.addEventListener('click',function(){
		// alert('hello');
		ul.removeChild(li);
	});
	li.appendChild(span);
	ul.appendChild(li);
	// return li;
}