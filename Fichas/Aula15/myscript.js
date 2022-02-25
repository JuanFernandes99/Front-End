document.getElementById("myBtn").addEventListener("click", function() {

    const y = document.querySelectorAll("p");

    for (let i = 0; y.length > i; i++) {
        console.log(i);
        if (i % 2 == 0) {
            y[i].remove();
        }

    }


});