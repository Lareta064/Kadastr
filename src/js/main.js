document.addEventListener('DOMContentLoaded', function(){

	/*custom placeholder */
	const specialFormsItems = document.querySelectorAll('.form-item--special');
	function activatePlaceholder(element, parent){
		element.addEventListener('focus',()=>{
			parent.classList.add('form-item--focus');
		});
		element.addEventListener('blur',()=>{
			if( element.value !==''){parent.classList.add('form-item--focus');}
			else{parent.classList.remove('form-item--focus');}
		});
	}
	if(specialFormsItems.length>0){
		specialFormsItems.forEach((item)=>{
			const itemInput = item.querySelector('.inp');
			const itemTextarea = item.querySelector('.textarea');
			if(itemInput){activatePlaceholder(itemInput, item);}
			if(itemTextarea){activatePlaceholder(itemTextarea, item);}
		});
	}







})