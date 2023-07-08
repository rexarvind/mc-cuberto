(function () {
    var myProdCards = document.querySelectorAll('.my-prod-card');
    var myCartSheet = document.getElementById('my-cart-sheet');
    var cartSheetCloseBtn = document.getElementById('my-cart-sheet-close-btn');
    var myCartSheetOverlay = document.getElementById('my-cart-sheet-overlay');
    var cartSheetCustomiseBtn = document.getElementById('my-cart-sheet-action-btn-customise');
    var cartSheetMainProdImg = document.getElementById('my-cart-sheet-main-prod-img');
    var cartSheetQtyBox = document.getElementById('my-cart-sheet-qty-box');
    var cartSheetActions = document.getElementById('my-cart-sheet-actions');
    var cartSheetProdCustomSection = document.getElementById('my-cart-sheet-prod-custom-section');


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

            if(myCartSheet){
                myCartSheet.classList.add('active');
            }
        })
    }

    cartSheetCloseBtn.addEventListener('click', function(){
        if(cartSheetCloseBtn.classList.contains('back')){
            cartSheetMainProdImg.classList.remove('shrink');
            cartSheetQtyBox.classList.remove('hide');
            cartSheetCloseBtn.classList.remove('back');
            cartSheetActions.classList.remove('hide');
            cartSheetProdCustomSection.classList.remove('show');
            return;
        }
        myCartSheet.classList.remove('active');
    });

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


})();