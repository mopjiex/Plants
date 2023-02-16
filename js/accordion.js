const pricesEquipmentCell = document.querySelectorAll('.prices__equipment-cell');
const pricesContent = document.querySelectorAll('.prices__content');
const pricesWrapper = document.querySelectorAll('.prices__wrapper');
const pricesEquipmentIcon = document.querySelectorAll('.prices__equipment-icon');
const pricesContentBtn = document.querySelectorAll('.prices__content-btn');



const contactsSelect = document.querySelector('.contacts__select');
const contactsSelectContent = document.querySelector('.contacts__select-content');
const contactsSelectName = document.querySelector('.contacts__select-name');
const selectsList = document.querySelector('.selects__list');
const informationText = document.querySelectorAll('.information__right .information__text');
const selectInformation = document.querySelector('.select__information');
const contactsSelectImg = document.querySelector('.contacts__select-img');
const contactsSelectInner = document.querySelector('.contacts__select-inner'); 
const informationBtn = document.querySelector('.information__btn');


const accordeon = index => {
    let content = pricesContent[index];
        pricesEquipmentIcon[index].classList.toggle('prices__equipment-icon_active');
        if (content.style.maxHeight) {
            pricesContent.forEach(item => {
                item.style.maxHeight = null;
            });

        } else {
            pricesContent.forEach(item => {
                item.style.maxHeight = null;
            });


            
            pricesEquipmentCell.forEach(item => {
                item.classList.remove('prices__equipment-cell_color');
            })
            content.style.maxHeight = content.scrollHeight + 'px';
            pricesEquipmentCell[index].classList.add('prices__equipment-cell_color');

            pricesContentBtn[index].disabled = true;
            
            
        }

        if(!content.style.maxHeight) {
            pricesEquipmentCell.forEach(item => {
                item.classList.remove('prices__equipment-cell_color');
            })
            pricesEquipmentIcon.forEach(item => {
                item.classList.remove('prices__equipment-icon_activ');
            })
        }
}

pricesEquipmentCell.forEach((item, index) => item.addEventListener('click', () => {
    accordeon(index);
}));


const informationContent = {
    'Canandaigua': ['Canandaigua, NY', '+1 585 391 0001', '151 Charlotte Street'],
    'New York City': ['New York City', '+1 212 456 0002', '9 East 91st Street'],
    'Yonkers': ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'],
    'Sherrill': ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD'],
};


const addingInformationCity = (informationContent, informationText) => {
    informationContent.forEach((item, index) => {
        informationText[index].textContent = item
    })
    informationBtn.href = `tel:${informationContent[1]}`
}


contactsSelect.addEventListener('click', () => {
    contactsSelectImg.classList.toggle('contacts__select-img_active');
    if(contactsSelectContent.style.maxHeight) {
        contactsSelectContent.style.maxHeight = null
    } else {
        contactsSelectContent.style.maxHeight = contactsSelectContent.scrollHeight + 'px';
    }
})


selectsList.addEventListener('click', (e) => {
    contactsSelectInner.classList.add('contacts__select-inner_active-color');
    contactsSelectName.textContent = e.target.textContent;
    selectInformation.style.display = 'block';

    if(e.target.textContent === 'Canandaigua, NY') {
        addingInformationCity(informationContent['Canandaigua'], informationText);

    } else if(e.target.textContent === 'New York City') {
        addingInformationCity(informationContent['New York City'], informationText);

    } else if(e.target.textContent === 'Yonkers, NY') {
       addingInformationCity(informationContent['Yonkers'], informationText);

    } else if(e.target.textContent === 'Sherrill, NY') {
       addingInformationCity(informationContent['Sherrill'], informationText);
    } 
})





