// tabs
$(document).ready(

    function () {
        $("#tabs a").click(showTab);

        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }


//running functions when submit button is clicked
        $("#submit").click(pizza);
        $("#submit2").click(delivery);

//pizza order form
        function pizza(event) {

            event.preventDefault();

            //setting the price of meat and veggies
            let sizePrice
            let meatPrice = 1.50;
            let veggiePrice = 1;

            //setting the price of delivery
            delivery = 2;

            //checking the size value
            let size = $("input[name=size]:checked").val();

               if (size =="Small") {
                   sizePrice = 7;
               }
               else if (size =="Medium") {
                   sizePrice = 9;
               }
               else if (size =="Large") {
                   sizePrice = 12;
               }

            //getting value from crust input
            let crust = $("input[name=crust]:checked").val();

            //getting value from meat input
            let meat = $("input[name=meat]:checked").val();


            //getting value from veggie input
            let veggies = $("input[name=veggies]:checked").val();

            //creating the sentence for displaying what kind of pizza was ordered
            let pizzaOrder = size + " " +  crust +  " " + meat + " " + veggies;

            //getting the total of the pizza after determining size and toppings
            let pizzaTotal = sizePrice + meatPrice + veggiePrice;

            //creating the sentence to display for the pizza total
            let pizzaTotalDisplay = "$" + pizzaTotal.toFixed(2);

            //getting the price of tax
            let tax = pizzaTotal * .051;
                let taxDisplay = "$" + tax.toFixed(2);

            //getting the total of the pizza, tax, and delivery
            let total = pizzaTotal + tax + delivery;
                let pizzaOrderTotal = "$" + total.toFixed(2);

            //displaying the results in paragraphs
            $("p#pizzaOrder").text(pizzaOrder);
            $("p#subtotal").text(pizzaTotalDisplay);
            $("#tax").text(taxDisplay);
            $("#total").text(pizzaOrderTotal);




        }

// code for delivery order form

        function delivery(event) {

            event.preventDefault();

            let name = $("input#name").val();

            let address = $("input#address").val();

            let phone = $("input#phone").val();

            $("p#namePara").text(name);
            $("p#addressPara").text(address);
            $("p#phonePara").text(phone);



        }






    });