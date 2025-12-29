document.addEventListener('DOMContentLoaded', function(){
	const bodyEl= document.body;
	/*custom placeholder */
	const specialFormsItems = document.querySelectorAll('.form-item--special');
	function activatePlaceholder(element, parent){
		element.addEventListener('focus',()=>{
			parent.classList.add('form-item--focus');
			if(parent.classList.contains('error')){
				parent.classList.remove('error');
			}
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
						bodyEl.classList.add('lock');
					}
				});	
			});
		});
		popUpWrappers.forEach((popup)=>{
			let popupClose = popup.querySelectorAll('[data-close]');
			 popupClose.forEach((closeBtn)=>{
				closeBtn.addEventListener('click',()=>{
					popup.classList.remove('is-open');
					bodyEl.classList.remove('lock');
				});
			 });
		});
	}
	/*open states list */
	const openStateListBtn = document.querySelector('#open-states-list');
	if(openStateListBtn){
		const statesList = document.querySelector('#states-list');
		if(statesList){
			openStateListBtn.addEventListener('click', ()=>{
				if(openStateListBtn.classList.contains('active')){
					openStateListBtn.classList.remove('active');
					statesList.style.height = 0;
					bodyEl.classList.remove('lock');
				}else{
					openStateListBtn.classList.add('active');
					statesList.style.height = statesList.scrollHeight +'px';
					bodyEl.classList.add('lock');
				}
			});

			const stateListItems = statesList.querySelectorAll('.drop-list-item');
			stateListItems.forEach((item)=>{
				item.addEventListener('click', ()=>{
					openStateListBtn.classList.remove('active');
					statesList.style.height = 0;
					bodyEl.classList.remove('lock');
				});
			})
		}
	}
})

