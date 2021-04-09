//#region Program start steps
    loadingElements();
    getElements();
    showElements();
//#endregion

//#region Aux variables
    var x = 0;
    var z = 0;
//#endregion

//#region Program functions

    //This function hide and show the loader element or the table results, according the moment
    function loadingElements()
    {
        $('#table').hide(0); 
        $('#table').delay(2000).show(0); 
        $('.loader').show(0); 
        $('.loader').delay(2000).hide(0); 
    }

    //This function get the elements from the API
    function getElements()
    {
        for (i = 0; i < 10; i++) {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(elements => showElements(elements.results));
        
        }
    }

    //This function put 10 results obtained from API in DOM
    function showElements()
    {
        showElements = elements => {
            const elementsDiv = document.querySelector('#table');
            elements.forEach(element => {
        
                z++;
            const elementContainer = document.createElement('p');
            elementContainer.innerText = `${z} - ${element.name.title} ${element.name.first} ${element.name.last} `;
            elementsDiv.append(elementContainer);
            
            const elementImage = document.createElement('img'); 
            elementImage.src = element.picture.thumbnail;
            elementsDiv.append(elementImage);
            
            });        
        }
    }

    //This function show more 10 results when the button has clicked
    function moreResults() 
    {
        x++;
            if(x <= 1)
            {
                loadingElements()    
                getElements();     
                howElements() 
            }
            else
            {
                //If 20 people are showed the program block the load of more people
                alert("Sorry but you don't have permission to see more results!");
            }

    }
//#endregion





