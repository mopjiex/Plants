const serviceBtn = document.querySelectorAll('.service__btn');
const serviceCard = document.querySelectorAll('.service__card');
const serviceCardTitle = document.querySelectorAll('.service__card-title');

let count = 0;

serviceBtn.forEach((item, index) => {
    item.addEventListener('click', () => {

        if(!item.classList.contains('service__btn_active')) {
            item.classList.add('service__btn_active');
            serviceCard.forEach(itemCard => {
                itemCard.classList.add('service__card_blur')
                if(item.textContent === itemCard.dataset.name) {
                    itemCard.classList.add('service__card_noblur')
                }
            })

            count++;
        } else if(item.classList.contains('service__btn_active')) {
            item.classList.remove('service__btn_active');
            serviceCard.forEach(itemCard => {
                if(item.textContent === itemCard.dataset.name) {
                    itemCard.classList.remove('service__card_noblur')
                }
            })
            count--;
        }
        
        serviceBtn.forEach(item => {
            if(count == 0) {
                serviceCard.forEach(itemCard => {
                itemCard.classList.remove('service__card_blur')
                })
            }
            if(count == 2) {
                if(!item.classList.contains('service__btn_active')) {
                    item.disabled = true;
                }
            } else if(count < 2) {
                item.disabled = false;
            }
        })


    })

})


