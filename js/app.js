(() => {
    "use strict";
    "use strict";
    const PAGE1 = "page1.html";
    const PAGE2 = "page2.html";
    const PAGE3 = "page3.html";
    const PAGE4 = "page4.html";
    let addres = document.location;
    addres = addres.href;
    addres = addres.split("/");
    if (addres.includes(PAGE1)) {
        function showName() {
            console.log("vasya");
        }
        setTimeout(showName, 0);
        console.log("kolya");
        console.log("kolya1");
        console.log("kolya2");
        showMessage();
        function showMessage() {
            console.log("message");
        }
        let showMessage2 = function() {
            console.log("this is message");
        };
        showMessage2();
        function showMessage3() {
            if (true) console.log("hello");
        }
        showMessage3();
        if (true) {
            function showMessage4() {
                console.log("hello world");
            }
            showMessage4();
        }
    }
    if (addres.includes(PAGE2)) {
        let arr = [ "vanya", "ishtvan", "olya" ];
        let newArr = arr;
        newArr.push("petya");
        console.log(arr.length);
        let users = [ "vanya", "ishtvan" ];
        console.log(users);
        users.push("olya");
        console.log(users);
        let index;
        if (users.includes("ishtvan")) {
            index = users.indexOf("ishtvan");
            users[index] = "petya";
        }
        console.log(users);
        users.unshift("masha", "pasha");
        console.log(users);
        let arr2 = [ "vanya", "ishtvan", "olya" ];
        let index2;
        let elem;
        console.log(arr2);
        index2 = arr2.includes("ishtvan") ? arr2.indexOf("ishtvan") : "нет такого элемента";
        if (typeof index2 == "number") {
            elem = arr2[index2];
            arr2.splice(index2, 1);
        } else console.log(index2);
        elem.toString();
        console.log(elem);
        console.log(arr2);
        let str = "vanya,ishtvan,olya";
        let arr3 = str.split(",");
        console.log(arr3);
        let arrOne = [ 9, 2, 8 ];
        let reduseValue = arrOne.reduce((function(previosValue, item, index, arrey) {
            console.log(previosValue);
            return previosValue + item;
        }));
        console.log(reduseValue);
        arrOne.forEach(((item, index, array) => {
            console.log(`this ${array} has ${item} on position ${index}`);
        }));
    }
    if (addres.includes(PAGE3)) {
        const doc = document.documentElement;
        console.log(doc);
        const body = document.body;
        console.log(body);
        let child = body.childNodes;
        for (let ch of child) console.log(ch);
        console.log("childnodes", child);
        console.log(body.hasChildNodes());
        const bodyPrev = body.previousSibling;
        const bodyNext = body.nextSibling;
        const bodyParent = body.parentNode;
        console.log("nodes", bodyPrev, bodyNext, bodyParent);
        let bodyChild = body.children;
        console.log("children", bodyChild);
        let firstChild = body.firstElementChild;
        let lastChild = body.lastElementChild;
        console.log("children first/last", firstChild, lastChild);
        const bodyPrevElem = body.previousElementSibling;
        const bodyNextElem = body.nextElementSibling;
        const bodyParentElem = body.parentElement;
        console.log("elements", bodyPrevElem, bodyNextElem, bodyParentElem);
        let allLi = body.querySelectorAll("li");
        console.log("tag", allLi);
        let allLiCod = body.querySelectorAll("li.article__cod");
        console.log("tag+class", allLiCod);
        let Cod = body.querySelectorAll(".article__cod");
        console.log("class", Cod);
        let someClass = body.querySelectorAll(".article__text,.article__cod");
        console.log(someClass);
        let test1 = document.querySelectorAll(".test__ul > *");
        console.log(test1);
        let testWord1 = test1[1].querySelectorAll(".test__childlist > *");
        console.log(testWord1);
        let someWords = document.getElementsByClassName("test__children");
        console.log(someWords);
        const staticCort = document.querySelectorAll(".test__li");
        const liveCort = document.getElementsByClassName("test__li");
        console.log(staticCort, liveCort);
        let someChild = document.querySelector(".test__children");
        let parentElem = someChild.closest(".test");
        console.log(parentElem, someChild[3]);
        let chek = document.querySelectorAll(".test__li");
        for (let cheked of chek) if (cheked.matches('[class$="li--text"]')) console.log("number"); else if (cheked.matches('[class$="li--number"]')) console.log("text"); else console.log("something wrong");
        console.log(chek);
        const inner = document.querySelector(".test__head");
        const innerContent = inner.innerHTML;
        console.log(innerContent);
        inner.innerHTML = `${innerContent}` + " YAHOO";
        const outor = document.querySelector(".test__childlist");
        const outorContent = outor.outerHTML;
        console.log(outorContent);
        const testChildlist = document.querySelector(".test__childlist");
        let coment = testChildlist.lastElementChild;
        coment = coment.nextSibling;
        coment = coment.nextSibling;
        console.log(coment.data);
        const newElem = document.createElement("div");
        console.log(newElem);
        inner.before(newElem);
        newElem.innerHTML = '<h2 class="test__elem">helo world</h2>';
        const testlock = document.querySelector(".test");
        const newElem2 = document.createElement("p");
        newElem2.innerHTML = '<span class="test__elem">i am span</span>';
        testlock.append(newElem2);
        inner.after("we are testing all");
        const list = document.querySelector(".test__ul");
        list.insertAdjacentHTML("beforeend", '<li class = "test__elem">текст beforeend</li>');
        const clonParent = document.querySelector(".test__childlist");
        let clon = clonParent.cloneNode(true);
        inner.append(clon);
        inner.remove();
        clonParent.classList.add("active");
        let test2 = list.classList.contains("test__ul");
        console.log(test2);
        clonParent.style.background = "red";
        someChild.style.cssText = `color: #ffff;\n        font-size: 2em;`;
        const headerTitle = document.querySelector(".test__elem");
        let headerStyle = getComputedStyle(headerTitle);
        console.log(headerStyle.color, headerStyle.textShadow, headerStyle.fontFamily);
        console.dir(headerTitle);
        const data = document.querySelector("[data-say-hi]");
        let dataContent = data.innerHTML;
        console.log(dataContent);
        let data2 = document.querySelector("ul.homework__exemple");
        data2 = data2.lastElementChild;
        data2 = data2.innerHTML;
        console.log(data2);
        let data3 = document.querySelectorAll(".like");
        for (let data3Elem of data3) console.log(data3Elem);
        let data4 = document.querySelector("ul.homework__exemple");
        data4.insertAdjacentHTML("beforeend", "<li>текст beforeend</li>");
    }
    if (addres.includes(PAGE4)) {
        let widthPlusScroll, width;
        widthPlusScroll = window.innerWidth;
        width = document.documentElement;
        width = widthPlusScroll - width.clientWidth;
        console.log(width, widthPlusScroll);
        let tagResolt = document.querySelector(".article__resolt");
        tagResolt.innerHTML = `${tagResolt.innerHTML} ${width};`;
        let windowHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        console.log(windowHeight);
        function scrollMe() {
            window.scrollTo({
                top: 100,
                left: 0,
                behavior: "smooth"
            });
            console.log(window.pageYOffset, "нажмите f5 чтоб узнать результат");
        }
        setTimeout(scrollMe, 1e3);
        const testBlock = document.querySelector(".test__text");
        const testBlockOY = testBlock.offsetTop;
        const testBlockParent = testBlock.offsetParent;
        console.log(testBlockOY, "координаты тест блока по игрику относительно родителя", testBlockParent, "родитель нашего блока");
        testBlock.scrollTop = 500;
        const testSpan = document.querySelector(".test__span");
        const testSpanOY = testSpan.offsetTop;
        const testSpanParent = testSpan.offsetParent;
        console.log(testSpanParent, testSpanOY);
        testBlock.scrollTop = 200;
        console.log(testBlock.scrollTop);
        console.log(testSpan.getBoundingClientRect().top);
        let article = document.querySelector(".article");
        let testBox = document.querySelector(".test");
        console.log(article.getBoundingClientRect().top, "-координаты article OY");
        console.log(tagResolt.getBoundingClientRect().top, "-координаты результата первого примера OY");
        console.log(testBox.getBoundingClientRect().top, "-координаты тестового блока OY");
        let resoltList = document.querySelectorAll(".article__resolt");
        resoltList[1].innerHTML = `\n    ${resoltList[1].innerHTML} координаты article OY ${article.getBoundingClientRect().top} <br>\n    координаты результата первого примера OY${tagResolt.getBoundingClientRect().top} <br>\n    координаты тестового блока OY ${testBox.getBoundingClientRect().top}`;
    }
})();