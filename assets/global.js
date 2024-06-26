
$(document).ready(function() {
   $('#openSearch').click(function() {

    $('#closeSearch').toggle();
    $('#openSearch').toggle(); 

    if(isDesktop()){
        $('#searchDesktop').toggleClass('d-md-flex slideDown');
    }else{ 
        $('.container-searchMobile').slideDown().toggleClass('d-flex d-md-none');
        $('#mobileIcon').hide();
    }
  
  });

  
  $('#mobileIcon').click(function() {

    let positionModal = isDesktop() ? 'center' : 'top';
       
        Swal.fire({
            html: `
            <div style="padding:20px 5px 0;"><h2 style="margin-bottom:10px;">Essa é uma versão beta.</h2>O menu está temporariamente desativado.</div>
            `,
            position: 'center', 
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#1C49AD'
        });
    });

    $('#formEmail').submit(function(e) {
        e.preventDefault();

        let positionModal = isDesktop() ? 'center' : 'left';
           
            Swal.fire({
                html: `
                <div style="padding:20px 5px 0;"><h2 style="margin-bottom:10px;">Essa é uma versão beta.</h2>O cadastro de e-mail está desativado.</div>
                `,
                position: 'center', 
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#1C49AD'
            });
        });


  $('#closeSearch').click(function() {
    $('#closeSearch').toggle();
    $('#openSearch').toggle(); 
    if(isDesktop()){
        $('#searchDesktop').toggleClass('d-md-flex slideDown');
    }else{
        $('.container-searchMobile').slideUp().toggleClass('d-flex d-md-none');
        $('#mobileIcon').show();
    }
   
    

  });

  function isDesktop(){
    return $(window).width() > 768 ? true : false;
  }

});

/*
    SEARCH  JS
*/

$(window).on("load", function() {

    temp = createMock();

    $('#bigSearch')
        .search({
            minCharacters: 1,
            type: 'category',
            source: temp,
            maxResults: 15,
            searchFields: ['title'],
            onResultsOpen:function(){
                // apenas adicionei um delay pra mostrar como pesquisando
                $('#bigSearch').addClass('loading');
                setTimeout(function () {
                    $('#bigSearch').removeClass('loading');
                }, 2000);
                return true;
            },
            onSelect: function (result, response) {
                if (clickBookmarked(result)) {
                    $(this).search('hide results');
                    return false
                }
                window.location.href = result.href;
            },
            error: {
                noResults: 'Não há resultados com essa busca.',
                noResults: function (message) {
                    return temp;
                }
            },
            templates: {
                message: function (message, type) {
                    let resultsHtml = `<div class="category"><div class="name">Empresa</div><div class="results">`;
                        temp.forEach(function(item) {
                            resultsHtml += `<a class="result"><div class="content"><div class="price">${item.price}</div><div class="title">${item.title}</div><div class="description">${item.description}</div></div></a>`;
                        });
                        resultsHtml += `</div></div>`;
                        return resultsHtml;
                        //return `<div class="message"><div class="header">Sem Resultados</div><div class="description">${message}</div></div>`;;
                  },
            }
        });


        $('#searchDesktopGo,#searchMobile')
        .search({
            minCharacters: 1,
            type: 'category',
            source: temp,
            maxResults: 15,
            searchFields: ['title'],
            onSelect: function (result, response) {
                if (clickBookmarked(result)) {
                    $(this).search('hide results');
                    return false
                }
                window.location.href = result.href;
            },
            error: {
                noResults: 'Não há resultados com essa busca.',
                noResults: function (message) {
                    return temp;
                }
            },
            templates: {
                message: function (message, type) {
                    let resultsHtml = `<div class="category"><div class="name">Empresa</div><div class="results">`;
                        temp.forEach(function(item) {
                            resultsHtml += `<a class="result"><div class="content"><div class="price">${item.price}</div><div class="title">${item.title}</div><div class="description">${item.description}</div></div></a>`;
                        });
                        resultsHtml += `</div></div>`;
                        return resultsHtml;
                        //return `<div class="message"><div class="header">Sem Resultados</div><div class="description">${message}</div></div>`;;
                  },
            }
        });



    function createMock(){
            let temp = [];

            temp.push({
                category: "Empresa",
                title: "Google Inc.",
                description: "78.507.991/0001-22",
                price: `<span class="material-symbols-outlined" style="margin-top:5px;margin-right:-5px;">check_small</span>`,
                href: "https://example.com/product1"
            });

            temp.push({
                category: "Empresa",
                title: "Microsoft Corporation",
                description: "82.642.114/0001-10",
                price: `<span class="material-symbols-outlined" style="margin-top:5px;margin-right:-5px;filter: grayscale(1); opacity: .5;">check_small</span>`,
                href: "https://example.com/product2"
            });

            temp.push({
                category: "Empresa",
                title: "Apple Inc.",
                description: "60.303.245/0001-97",
                price: `<span class="material-symbols-outlined" style="margin-top:5px;margin-right:-5px;filter: grayscale(1); opacity: .5;">check_small</span>`,
                href: "https://example.com/product3"
            });

            temp.push({
                category: "Empresa",
                title: "Amazon.com Inc.",
                description: "28.690.527/0001-05",
                price: `<span class="material-symbols-outlined" style="margin-top:5px;margin-right:-5px;filter: grayscale(1); opacity: .5;">check_small</span>`,
                href: "https://example.com/product4"
            });

            temp.push({
                category: "Empresa",
                title: "Facebook Inc.",
                description: "05.397.903/0001-45",
                price: `<span class="material-symbols-outlined" style="margin-top:5px;margin-right:-5px;filter: grayscale(1); opacity: .5;">check_small</span>`,
                href: "https://example.com/product5"
            });
            return temp; 

    }



});




/*
    JS ara animar o Mapa e posicionar os elementos (MAPA)
*/
$(window).on("load", function() {

    startAnimation(1000);

    for (let i = 1; i <= 3; i++) {
        updateLabelPosition(i);
        $(window).resize(() => updateLabelPosition(i));
    }
});

function onEndLines(line){

    let lineString = '';
    if(line === 1){
        lineString = 'first';
    }
    if(line === 2){
        lineString = 'second';
    }
    if(line === 3){
        lineString = 'third';
    }

    $('#' + lineString + 'Circle').css('visibility', 'visible');
    $('#' + lineString + 'Label').css('opacity', '1');

    if(line === 1 || line === 2){

        setTimeout(function(){
            $('#' + lineString + 'Circle').css('visibility', 'hidden');
            $('#' + lineString + 'LineSvg').css('visibility', 'hidden');
            $('#' + lineString + 'Label').css('opacity', '0');
            nextAnimation(line);
        }, 3000);

    }else{

        $('#thirdCircle').css('visibility', 'visible');
        $('#thirdLabel').css('opacity', '1');
        startAnimation(3000);
        
    }

}

function nextAnimation(line){
    let nextAnimationString = line === 1 ? 'second' : 'third';
    $('#' + nextAnimationString + 'LineSvg').css('visibility', 'visible');
    $('#' + nextAnimationString + 'Mask').find('animate').eq(0).get(0).beginElement();
}


function restartAnimation(){
    $('#worldMapContainer svg').css('visibility', 'hidden');
    $('#firstLabel, #secondLabel, #thirdLabel').css('opacity', '0');
    $('#firstCircle, #secondCircle, #thirdCircle').css('visibility', 'hidden');
}

function startAnimation(time){
    setTimeout(function(){
        restartAnimation();
        $('#firstLineSvg').css('visibility', 'visible');
        $('#firstMask').find('animate').eq(0).get(0).beginElement();
    }, time);
}

function updateLabelPosition(line){

    let lineString = (line === 1) ? 'first' : (line === 2) ? 'second' : (line === 3) ? 'third' : '';

    let elmCircle = $(`#${lineString}Circle`);
    let elmLabel = $(`#${lineString}Label`);
    let worldMapContainer = $('#worldMapContainer');

    if (elmCircle.length && elmLabel.length && worldMapContainer.length) {

            var circleRect = elmCircle[0].getBoundingClientRect();
            var containerRect = worldMapContainer[0].getBoundingClientRect();

            var relativeLeft = circleRect.left - containerRect.left;
            var relativeTop = circleRect.top - containerRect.top;

            let sizeWindow = $(window).width();

            if(sizeWindow <= 572){
                var LeftAdjustment = 94;
                var topAdjustment = 12;
            }else if(sizeWindow <= 768){
                var LeftAdjustment = 95;
                var topAdjustment = 12;
            }else if(sizeWindow <= 990){
                var LeftAdjustment = 95;
                var topAdjustment = 15;
            }else{
                var LeftAdjustment = 95;
                var topAdjustment = 20;
            }
            
            elmLabel.css('left', relativeLeft - LeftAdjustment + 'px');
            elmLabel.css('top', relativeTop + topAdjustment + 'px');

    }

 }