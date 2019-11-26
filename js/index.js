let list = [];
    let currentElement = 0;
    let previousElement = 0;
            
    function getList(){
        const list = document.querySelector('.list');
        return list;
    };

    function renderList(){
        const ul = getList();
        for(let i = 0; i < list.length; i++){
            list[i].innerHTML =`element #${i + 1}`;
            ul.append(list[i]);
        }
    };

    function addClassToCurrentElement(){
        const lis = document.querySelectorAll('li');
        for (let i = 0; i < lis.length; i++){
                if(currentElement === i){
                    lis[i].classList.add('current-element');
                }else{
                    lis[i].classList.remove('current-element');
                }
        }
    };

    function createLiElement(){
        let element = document.createElement('li');
        list.push(element);
        renderList();
        addClassToCurrentElement();
    };

    function removeLiElement(){
        const lis = document.querySelectorAll('li');
        for (let i = 0; i < lis.length; i++){
            if(currentElement === i){
                lis[i].remove();
                list.splice(i, 1);
                addClassToCurrentElement();
            }
        }
    };

    function currentElementClassToggle(element){
        element.classList.toggle('current-element');
    };

    function getFirstElement(){
        currentElement = 0;
        addClassToCurrentElement();
    };

    function getLastElement(){
        currentElement = list.length - 1;
        addClassToCurrentElement();
    };

    function getNextElement(){
        currentElement > list.length - 2 ? currentElement = currentElement : currentElement += 1;
        addClassToCurrentElement();
    };

    function getPreviousElement(){
        currentElement > 0 ? currentElement -= 1 : currentElement = currentElement;
        addClassToCurrentElement();
    };

    addClassToCurrentElement();

    renderList();