// function will keep track of user's UID on any page they are in.
function sayHi() {
     firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);


                })

            document.getElementById("profile-btn")
                .addEventListener("click", function () {
                    window.location.href = "profile.html?id=" + user.uid;
                });


        } else {
            // No user is signed in.
        }
    });
}
sayHi();


//Animate
$('#Login').on('click', function () {
    const images = $('#images').position().top;

    $('html,body').animate({
        scrollTop: images
    }, 900);
});

function writeQuotes() {
    var quotesRef = db.collection("quotes");
    quotesRef.add({

        quote: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful.",
        randomNum: 1
    });
    quotesRef.add({

        quote: " Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
        randomNum: 2
    });
    quotesRef.add({

        quote: " Look deep into nature, and then you will understand everything better. —Albert Einstein",
        randomNum: 3
    });
    quotesRef.add({

        quote: "Heaven is under our feet as well as over our heads. —Henry David Thoreau",
        randomNum: 4
    });
    quotesRef.add({

        quote: "To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.",
        randomNum: 5
    });
    quotesRef.add({

        quote: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
        randomNum: 6
    });
    quotesRef.add({

        quote: " I believe in God, only I spell it Nature.",
        randomNum: 7
    });
}
// writeQuotes();

function quotesQuery() {
    db.collection("quotes")
        .where("randomNum", "==", Math.floor(Math.random() * 7) + 1)
        .limit(1)
        .get()
        .then(function (abc) {
            abc.forEach(function (doc) {
                var q = doc.data().quote;
                var num = doc.data().randomNum;
                console.log(q);
                console.log(num);


                var neww = '<p><i> "' + q + '"</i><p>';
                $("#quotes-go-here").html(neww);

            })
        })
}