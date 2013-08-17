$(document).ready(function() {

    function swapImagesAndText(){

        var leftArrowClass = '<div class="arrow-left"></div>';      
        var rightArrowClass = '<div class="arrow-right"></div>';    

        var contentContainer = $(this).closest('.content-container');
        var badgeClass = $(this).closest('.badge');                 
        var currentClassChild = $(this).children().attr('class');   

        var basecampH1 = 'Basecamp is the project management tool you wish you had on your last project.';
        var basecampH2 = 'Are you still managing projects with email?  Are you still using Excel for your to-do lists?  Its time to upgrade to Basecamp.  Manage projects and collaborate with your team and clients the modern way.';
        var highriseH1 = "Highrise remembers the important things about people you'd normally forget.";
        var highriseH2 = 'Keep a permenant record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.';
        var campfireH1 = 'From near or far, Campfire helps teams work together over the web in real-time.';
        var campfireH2 = "Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  We couldn't run our own business without Campfire.";

        switch(currentClassChild) {
            case 'badge-image basecamp':
            contentContainer.find('h1').text(basecampH1).addClass('hover-h1');  
            contentContainer.find('h2').text(basecampH2).addClass('hover-h2'); 
            badgeClass.prepend(leftArrowClass);  
            break;

            case 'badge-image highrise':
            contentContainer.find('h1').text(highriseH1).addClass('hover-h1'); 
            contentContainer.find('h2').text(highriseH2).addClass('hover-h2');  
            badgeClass.prepend(leftArrowClass);   
            break;

            case 'badge-image campfire':
            contentContainer.find('h1').text(campfireH1).addClass('hover-h1');  
            contentContainer.find('h2').text(campfireH2).addClass('hover-h2');  
            badgeClass.prepend(rightArrowClass);  
            break;
        }
    }

    function resetImagesAndText(){
        var contentContainer = $(this).closest('.content-container');
        var landingH1 = 'Making collaboration productive and enjoyable for people every day.';
        var landingH2 = 'Frustration-free web-based apps for collaboration, sharing information, and making decisions.';

        $(this).children(".arrow-left").remove();
        $(this).children(".arrow-right").remove();
        contentContainer.find('h1').text(landingH1).removeClass('hover-h1');
        contentContainer.find('h2').text(landingH2).removeClass('hover-h2');
    }

   $(".badge").on('mouseenter', swapImagesAndText);
   $(".badge").on('mouseleave', resetImagesAndText);
 });
