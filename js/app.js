document.addEventListener("DOMContentLoaded", function () {

    // CHAIR NAME

    var imageBox = document.querySelectorAll('.info-box');
    console.log(imageBox);

    var imageBoxContent = document.querySelectorAll('.info-box-content');
    console.log(imageBoxContent);

    for (var i = 0; i < imageBoxContent.length; i++) {

        imageBoxContent[i].addEventListener('mouseover', function (event) {

            this.classList.add('hidden');
        });
    }

    // SLIDER

    var prevButton = document.querySelector(".banner-prev");
    var nextButton = document.querySelector(".banner-next");
    var imagesList = document.querySelectorAll(".banner-slide-image li");

    console.log(prevButton);
    console.log(nextButton);
    console.log(imagesList);

    var pictureIndex = 0;

    var visibleImage = imagesList[0].firstElementChild;
    imagesList[pictureIndex].classList.add('visible');

    prevButton.addEventListener('click', function () {

        pictureIndex--;

        if (pictureIndex >= 0) {
            imagesList[pictureIndex + 1].classList.remove('visible');
            imagesList[pictureIndex].classList.add('visible');
        } else {
            pictureIndex = 0;
        }
    });

    nextButton.addEventListener('click', function () {

        pictureIndex++;

        if (pictureIndex < imagesList.length) {
            imagesList[pictureIndex - 1].classList.remove('visible');
            imagesList[pictureIndex].classList.add('visible');
        } else {
            pictureIndex = imagesList.length - 1;
        }

    });

    // CALCULATOR

    var chooseType = document.querySelectorAll(".list_arrow")[0];
    var chooseColor = document.querySelectorAll(".list_arrow")[1];
    var chooseFabric = document.querySelectorAll(".list_arrow")[2];

    var dropType = document.querySelectorAll(".list_panel")[0];
    var dropColor = document.querySelectorAll(".list_panel")[1];
    var dropFabric = document.querySelectorAll(".list_panel")[2];

    var panelElements = document.querySelectorAll('.list_panel li');

    var summaryTitle = document.querySelector(".panel_left .title");
    var summaryColor = document.querySelector(".panel_left .color");
    var summaryFabric = document.querySelector(".panel_left .pattern");
    var summaryTransport = document.querySelector(".panel_left .transport");

    var valueTitle = document.querySelector(".panel_right .title");
    var valueColor = document.querySelector(".panel_right .color");
    var valueFabric = document.querySelector(".panel_right .pattern");
    var valueTransport = document.querySelector(".panel_right .transport");

    var checkboxTransport = document.querySelector('#transport');

    var sum = document.querySelector(".sum strong");

    var sumValue = 0;

    var valueTitleNumber = 0;
    var valueColorNumber = 0;
    var valueFabricNumber = 0;
    var valueTransportNumber = 0;

    chooseType.addEventListener('click', function () {

        dropType.classList.toggle('visible');

    });

    chooseColor.addEventListener('click', function () {

        dropColor.classList.toggle('visible');

    });

    chooseFabric.addEventListener('click', function () {

        dropFabric.classList.toggle('visible');

    });


    for (let i=0; i<panelElements.length; i++) {
        panelElements[i].addEventListener('click', function () {
            if (i > -1 && i < 3) {
                summaryTitle.innerText = this.innerText;
                valueTitle.innerText = this.dataset.typePrice;
                valueTitleNumber = Number(this.dataset.typePrice);
            }
            else if (i > 2 && i < 6) {
                summaryColor.innerText = this.innerText;
                valueColor.innerText = this.dataset.colorPrice;
                valueColorNumber = Number(this.dataset.colorPrice);
            }
            else {
                summaryFabric.innerText = this.innerText;
                valueFabric.innerText = this.dataset.fabricPrice;
                valueFabricNumber = Number(this.dataset.fabricPrice);
            }
            sumValue = valueTitleNumber + valueColorNumber + valueFabricNumber;
            sum.innerText = sumValue + ' zł';
        })
    }

    checkboxTransport.addEventListener('click', function () {
        if (this.checked) {
            summaryTransport.innerText = 'Transport';
            valueTransport.innerText = this.dataset.transportPrice;
            valueTransportNumber = Number(this.dataset.transportPrice);
            sum.innerText = (sumValue + valueTransportNumber) + ' zł';
        }
        if (!this.checked) {
            transport.innerText = '';
            valueTransport.innerText = '';
            sum.innerText = sumValue + ' zł';

        }
    })
});


