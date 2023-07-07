(function () {
    var myProdCards = document.querySelectorAll('.my-prod-card');
    var myCartSheet = document.getElementById('my-cart-sheet');
    var myCartSheetCloseBtn = document.getElementById('my-cart-sheet-close-btn');
    var myCartSheetOverlay = document.getElementById('my-cart-sheet-overlay');

    if (myProdCards) {
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
    }

    if(myCartSheetCloseBtn && myCartSheet){
        myCartSheetCloseBtn.addEventListener('click', function(){
            myCartSheet.classList.remove('active');
        });
    }

    if(myCartSheetOverlay && myCartSheet){
        myCartSheetOverlay.addEventListener('click', function(){
            myCartSheet.classList.remove('active');
        });
    }


})();