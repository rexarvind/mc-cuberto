(function () {
    var myProdCards = document.querySelectorAll('.my-prod-card');
    if (myProdCards) {
        for (var i = 0; i < myProdCards.length; i++) {
            myProdCards[i].addEventListener('click', function (e) {
                e.preventDefault();
                var el = this;
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                } else {
                    el.classList.add('active');
                }
            })
        }
    }

})();