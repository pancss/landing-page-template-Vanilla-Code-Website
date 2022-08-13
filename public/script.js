

(() => {

    function getPositionY(elem) {
        return elem.getBoundingClientRect().y;
    }
    function checkActivedNav() {
        const activedMenu = document.querySelector('nav li.actived');
        if (activedMenu != null) {
            activedMenu.classList.remove('actived')
        }
    }

    function animateUnderlineHeader() {
        const listElems = document.querySelectorAll('nav > li');

        const priceSection = document.getElementById('price-section');
        const portfolioSection = document.getElementById('portfolio');
        const whyUsSection = document.getElementById('why-us');
        const workflowSection = document.getElementById('workflow');
        const faqSection = document.getElementById('faq');
        const contactSection = document.getElementById('contact-us');

        // display underline
        const showPosition = (window.innerHeight * 0.6)
        if (getPositionY(contactSection) < showPosition) {
            checkActivedNav();
            listElems[6].classList.add('actived')
        } else if (getPositionY(faqSection) < showPosition) {
            checkActivedNav();
            listElems[5].classList.add('actived')
        } else if (getPositionY(workflowSection) < showPosition) {
            checkActivedNav();
            listElems[4].classList.add('actived')
        } else if (getPositionY(whyUsSection) < showPosition) {
            checkActivedNav();
            listElems[3].classList.add('actived')

        } else if (getPositionY(portfolioSection) < showPosition) {
            checkActivedNav();
            listElems[2].classList.add('actived')

        } else if (getPositionY(priceSection) < showPosition) {
            checkActivedNav();
            listElems[1].classList.add('actived')
        } else {
            checkActivedNav();
            listElems[0].classList.add('actived')
        }
    }

    function createSoftLightBg(result) {
        const toggle = document.querySelector('#sidebar .toggle');

        const sidebar = document.querySelector('#sidebar');
        const softLight = document.createElement('div');
        softLight.className = 'soft-light-bg';
        // click toggle
        softLight.addEventListener('click', () => {
            toggle.click();
        })

        result ? sidebar.appendChild(softLight) : sidebar.querySelector('.soft-light-bg').remove();
    }
    function actionToggle() {
        const toggle = document.querySelector('#sidebar .toggle');
        const toggleActived = toggle.classList.contains('actived') ? true : false;
        if (toggleActived === true) {
            toggle.classList.remove('actived')
            // Displaysidebar
            hideShowSidebar(false)
            // createSoftLightBg
            createSoftLightBg(false);
            // unfix scroll
            document.body.style.overflow = '';
            document.querySelector('html').style.overflow = '';

        } else {
            toggle.classList.add('actived')
            // Displaysidebar
            hideShowSidebar(true)
            // createSoftLightBg
            createSoftLightBg(true);
            // fix scroll
            document.body.style.overflow = 'hidden';
            document.querySelector('html').style.overflow = 'hidden';
        }
    }
    function hideShowSidebar(result) {
        const sidebarElem = document.querySelector('#sidebar ul');
        result ? sidebarElem.classList.add('actived') : sidebarElem.classList.remove('actived');
    }

    function dropdownFAQ(target) {
        const activedElem = document.querySelector('#faq > ul.actived');
        const descElem = target.querySelector('.desc');
        const heightRef = descElem.querySelector('li').offsetHeight;

        if (activedElem == target) {
            activedElem.classList.remove('actived');
            activedElem.querySelector('.desc').style.height = '';
            return;
        } else if (activedElem != null) {
            activedElem.classList.remove('actived');
            activedElem.querySelector('.desc').style.height = '';
        }
        descElem.style.height = `${heightRef}px`;
        target.classList.add('actived');
    }

    function animationTitle() {
        const title = document.querySelectorAll('.title');
        let position = window.innerHeight * 0.8;

        for (i = 0; i < title.length; i++) {
            if (position > getPositionY(title[i])) {
                if (title[i].classList.contains('actived') != true) {
                    title[i].classList.add('actived')
                }
            }
        }
    }

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function seeAllProject(elem){
        elem.preventDefault();

        // Create Elems
        const container = document.createElement('div');
        const header = document.createElement('h1');
        const desc = document.createElement('p');
        const bgFade = document.createElement('div');

        header.innerHTML = 'Oops!';
        header.style.color = '#fa6854';

        desc.innerHTML = 'Our site is under manintenance';
        desc.style.color = '#fff';
        desc.style.textAlign = 'center';
        desc.style.marginTop = '15px';

        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center';
        container.style.width = '300px';
        container.style.height = '150px';
        container.style.background = '#121b36';
        container.style.border = '1px solid #fa6854';
        container.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,30%)';
        container.style.zIndex = '999';

        bgFade.style.position = 'fixed';
        bgFade.style.top = '0';
        bgFade.style.left = '0';
        bgFade.style.width = '100%';
        bgFade.style.height = '100%';
        bgFade.style.display = 'flex';
        bgFade.style.alignItems = 'center';
        bgFade.style.justifyContent = 'center';
        bgFade.style.backgroundColor = 'rgba(0,0,0, 70%)';
        bgFade.style.zIndex = '999';
        
        //append Elems
        document.body.appendChild(bgFade)
        bgFade.appendChild(container);
        container.appendChild(header);
        container.appendChild(desc);

        // Disable scroll
        document.body.style.overflow = 'hidden';
        document.querySelector('html').style.overflow = 'hidden';

        bgFade.addEventListener('click', ()=>{
            bgFade.remove();

            // Enable scroll
            document.body.style.overflow = '';
             document.querySelector('html').style.overflow = '';
        })
    }

    function run() {
        document.getElementById('logo-site').addEventListener('click', goTop)
        // EventFAQ
        const faqUl = document.querySelectorAll('#faq > ul');
        faqUl.forEach(faqUl => {
            faqUl.addEventListener('click', function () { dropdownFAQ(this) })
        });

        document.getElementById('all-works').addEventListener('click', seeAllProject);

        // Animation Nav
        window.addEventListener('scroll', animateUnderlineHeader)
        // Animation Title
        window.addEventListener('scroll', animationTitle)

        // Toggle
        const toggle = document.querySelector('#sidebar .toggle');
        toggle.addEventListener('click', actionToggle);
        const lineSidebar = document.querySelectorAll('#sidebar li');
        lineSidebar.forEach(lineSidebar => {
            lineSidebar.addEventListener('click', () => {
                toggle.click();
            })
        })
    }
    run();
})()