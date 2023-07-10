(function () {
    var shopContainer = document.getElementById('my-shop-container');
    var checkoutContainer = document.getElementById('my-checkout-container');
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
    var cartDoneBtn = document.getElementById('my-cart-done-btn');
    var checkoutBackBtn = document.getElementById('my-checkout-back-btn');
    var checkoutBtn = document.getElementById('my-checkout-btn');
    var cartUpsell = document.getElementById('my-cart-upsell');

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
            var el = this;
            var img = el.querySelector('img');
            img.classList.add('move-up');
            setTimeout(function(){
                img.classList.remove('move-up');
            }, 500);
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
        cartUpsell.classList.remove('hide');
    }

    function startCustomisation(){
        cartSheetMainProdImg.classList.add('shrink');
        cartSheetQtyBox.classList.add('hide');
        cartSheetActions.classList.add('hide');
        cartSheetCloseBtn.classList.add('back');
        cartSheetProdCustomSection.classList.add('show');
        cartUpsell.classList.add('hide');
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


    cartSheetCustomiseBtn.addEventListener('click', startCustomisation);

    cartSheetActionBtnDone.addEventListener('click', function(){
        myCartSheet.classList.remove('active')
    });

    function closeCheckoutPage(){
        shopContainer.classList.remove('back-page');
        checkoutContainer.classList.remove('active');
    }

    function openCheckoutPage(){
        shopContainer.classList.add('back-page');
        checkoutContainer.classList.add('active');
    }

    cartDoneBtn.addEventListener('click', openCheckoutPage);

    checkoutBackBtn.addEventListener('click', closeCheckoutPage);
    checkoutBtn.addEventListener('click', closeCheckoutPage);




    var cartProdCardQtyPlus = document.querySelectorAll('.my-cart-prod-card-qty-plus');
    var cartProdCardQtyMinus = document.querySelectorAll('.my-cart-prod-card-qty-minus');
    for (var i = 0; i < cartProdCardQtyPlus.length; i++) {
        cartProdCardQtyPlus[i].addEventListener('click', function(){
            var input = this.previousElementSibling;
            if(input){
                input.value = parseInt(input.value) + 1;
            }
        });
    }
    for (var i = 0; i < cartProdCardQtyMinus.length; i++) {
        cartProdCardQtyMinus[i].addEventListener('click', function(){
            var input = this.nextElementSibling;
            if(input){
                if( parseInt(input.value) > 0 ){
                    input.value = parseInt(input.value) - 1;
                }
            }
        });
    }


    var cartSheetQtyMinus = document.querySelectorAll('.my-cart-sheet-qty-minus');
    var cartSheetQtyPlus = document.querySelectorAll('.my-cart-sheet-qty-plus');
    for (var i = cartSheetQtyPlus.length - 1; i >= 0; i--) {
        cartSheetQtyPlus[i].addEventListener('click', function() {
            var input = this.previousElementSibling;
            if(input){
                input.value = parseInt(input.value) + 1;
            }
        })
    }

    for (var i = 0; i < cartSheetQtyMinus.length; i++) {
        cartSheetQtyMinus[i].addEventListener('click', function(){
            var input = this.nextElementSibling;
            if(input){
                if( parseInt(input.value) > 0 ){
                    input.value = parseInt(input.value) - 1;
                }
            }
        });
    }



})();