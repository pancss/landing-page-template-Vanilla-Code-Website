(()=>{
    function stickyHeader(){
        const header = document.querySelector('header');
        const banner = document.querySelector('#banner');
        let scrollY = window.scrollY;

        if(scrollY > 75){
            header.style.position = 'fixed';
            banner.style.marginTop = '80px';
        }else{
            header.style.position = 'relative';
            banner.style.marginTop = '0';
        }
    }

    function dropdownFAQ(target){
        const activedElem =  document.querySelector('#faq > ul.actived');
        const descElem = target.querySelector('.desc');
        const heightRef = descElem.querySelector('li').offsetHeight;

        if(activedElem == target){
            activedElem.classList.remove('actived');
            activedElem.querySelector('.desc').style.height = '';
            return;
        }else if(activedElem != null){
            activedElem.classList.remove('actived');
            activedElem.querySelector('.desc').style.height = '';
        }
        descElem.style.height = `${heightRef}px`;
        target.classList.add('actived');
    }

    function run(){
        // EventFAQ
        const faqUl = document.querySelectorAll('#faq > ul');
        faqUl.forEach(faqUl => {
            faqUl.addEventListener('click', function (){dropdownFAQ(this)})
        });

        // stickyHeader
        window.addEventListener('scroll', stickyHeader);
    }
    run();
})()