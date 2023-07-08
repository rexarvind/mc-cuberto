(function () {
    var myProdCards = document.querySelectorAll('.my-prod-card');
    var prodSmallCards = document.querySelectorAll('.my-prod-card-small');
    var myCartSheet = document.getElementById('my-cart-sheet');
    var cartSheetCloseBtn = document.getElementById('my-cart-sheet-close-btn');
    var myCartSheetOverlay = document.getElementById('my-cart-sheet-overlay');
    var cartSheetCustomiseBtn = document.getElementById('my-cart-sheet-action-btn-customise');
    var cartSheetMainProdImg = document.getElementById('my-cart-sheet-main-prod-img');
    var cartSheetQtyBox = document.getElementById('my-cart-sheet-qty-box');
    var cartSheetActions = document.getElementById('my-cart-sheet-actions');
    var cartSheetProdCustomSection = document.getElementById('my-cart-sheet-prod-custom-section');
    var cartSheetApplyBtn = document.getElementById('my-cart-sheet-apply-btn');
    var contentHeader = document.getElementById('my-content-header');
    var headerBackBtn = document.getElementById('my-header-back-btn');
    var contentIntro = document.getElementById('my-content-intro');
    var cartSheetActionBtnDone = document.getElementById('my-cart-sheet-action-btn-done');


    for (var i = 0; i < myProdCards.length; i++) {
        myProdCards[i].addEventListener('click', function (e) {
            e.preventDefault();
            var el = this;
            if (el.classList.contains('active')) {
                for (var i = 0; i < myProdCards.length; i++) {
                    myProdCards[i].classList.remove('active');
                }
                el.classList.remove('active');
            } else {
                for (var i = 0; i < myProdCards.length; i++) {
                    myProdCards[i].classList.remove('active');
                }
                el.classList.add('active');
            }

            contentHeader.classList.add('back');
            contentIntro.classList.add('hide');
        })
    }

    for (var i = 0; i < prodSmallCards.length; i++) {
        prodSmallCards[i].addEventListener('click', function(){
            myCartSheet.classList.add('active');
        });
    }

    headerBackBtn.addEventListener('click', function(){
        contentIntro.classList.remove('hide');
        contentHeader.classList.remove('back');
        for (var i = 0; i < myProdCards.length; i++) {
            myProdCards[i].classList.remove('active');
        }
    });

    function cancelCustomisation (){
        cartSheetMainProdImg.classList.remove('shrink');
        cartSheetQtyBox.classList.remove('hide');
        cartSheetCloseBtn.classList.remove('back');
        cartSheetActions.classList.remove('hide');
        cartSheetProdCustomSection.classList.remove('show');
    }

    cartSheetCloseBtn.addEventListener('click', function(){
        if(cartSheetCloseBtn.classList.contains('back')){
            cancelCustomisation();
            return;
        }
        myCartSheet.classList.remove('active');
    });

    cartSheetApplyBtn.addEventListener('click', function(){
        cancelCustomisation();
    })

    myCartSheetOverlay.addEventListener('click', function(){
        myCartSheet.classList.remove('active');
    });


    cartSheetCustomiseBtn.addEventListener('click', function(){
        cartSheetMainProdImg.classList.add('shrink');
        cartSheetQtyBox.classList.add('hide');
        cartSheetActions.classList.add('hide');
        cartSheetCloseBtn.classList.add('back');
        cartSheetProdCustomSection.classList.add('show');
    });

    cartSheetActionBtnDone.addEventListener('click', function(){
        myCartSheet.classList.remove('active')
    });


})();