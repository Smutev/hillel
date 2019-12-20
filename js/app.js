"use strict"

$(document).ready(function () {
    $('.alert-btn').on('click', function () {
        $('.alert-block').toggle('hidden');
        $('.tooltip').remove();
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    const myBirthDay = moment([1995, 8, 19]);
    $('.birthday').html('My B-day is :' + myBirthDay.format('DD MM YY'));
    
    $('.submit-date').on('click', function() {
       let $userBirthDay = $('.data').val()
        moment.locale('es');
       $('.user-birthday').html(moment($userBirthDay).format('MMMM Do YY'));
    })
})










