/* global $, Stripe */
$(document).on('turbolinks:load', function(){
    var theForm = $('#pro_form');
    var submitButton = $('#form-submit-btn')
    // Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    
    submitButton.click(function(event)  {
        event.preventDefault();
        
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        // Stripe.createToken({
        //     number: ccNum,
        //     cvc: cvcNum,
        //     exp_month: expMonth,
        //     exp_year: expYear
        //     }, stripeResponseHandler);
    })
});