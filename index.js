const cardData = [

    {
        title: "Personal",
        text: "Just started using awesome Module. Great way to boost the hard designing or prototyping process.",
        icon: "",
        sign: "",
        price: '<p class="price pe-4 rem-003">Free</p>',
        texttwo: "Per month billed annualy or $250 from month to month",
        gilaki: "Get it"
    },

    {
        title: "Agency",
        text: "Also a perfect tool for creative studios and freelancers",
        icon: '<img src="Icon.png" class="setting-106">',
        sign: '<img src="$.png" height="20px">',
        price: '<p class="price pe-4">123</p>',
        texttwo: "Per month billed annualy or €250 from month to month",
        gilaki: "Buy now"
    },

    {
        title: "Unlimited",
        text: "Living in today’s metropolitan world of cellular phones, mobile computers",
        icon: "",
        sign: '<img src="$.png" height="20px">',
        price: '<p class="price pe-4">232</p>',
        texttwo: "Per month billed annualy or €250 from month to month",
        gilaki: "Buy now"
    }

];

const yuti = document.getElementById("konteineri");

function postMethods() {

    cardData.map((postData) => {

        const postElement = document.createElement('div');
        postElement.classList.add('col-lg-4');
        postElement.classList.add('col-md-6');
        postElement.classList.add('col-12');
        postElement.innerHTML =
            `
            <div class="setting-102 setting-105">


                    <div>${postData.icon}</div>


                    <div>

                        <p class="title">${postData.title}</p>
                        <p class="text">${postData.text}</p>

                    </div>

                    <div>

                        <hr>

                        <div class="setting-103">

                            <p class="setting-107">${postData.sign}</p>
                            <div>${postData.price}</div>
                            <p class="texttwo">${postData.texttwo}</p>

                        </div>

                        <a href="#">
                            <button class="setting-104">
                                <p class="gilaki m-0">${postData.gilaki}</p>
                            </button>
                        </a>

                    </div>

                </div>
            `;

        yuti.appendChild(postElement);

    });
}

postMethods();
