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
    /*popUp */
	const popUpOpen = document.querySelectorAll('[data-role]');
	if(popUpOpen.length>0){
		const popUpWrappers = document.querySelectorAll('[data-popup]');
		popUpOpen.forEach((btn)=>{
			btn.addEventListener('click',()=>{
				let btnData = btn.dataset.role;
				popUpWrappers.forEach((popup)=>{
					let popupData = popup.dataset.popup;
					if(popupData == btnData){
						popup.classList.add('is-open');
					}
				});	
			});
		});
		popUpWrappers.forEach((popup)=>{
			let popupClose = popup.querySelectorAll('[data-close]');
			 popupClose.forEach((closeBtn)=>{
				closeBtn.addEventListener('click',()=>{
					popup.classList.remove('is-open');
				});
			 });
		});

	}
})

