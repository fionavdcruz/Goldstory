             $("#js-rotating").Morphext({
                animation: "fadeIn",
                complete: function () {
                    console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
                }
            });