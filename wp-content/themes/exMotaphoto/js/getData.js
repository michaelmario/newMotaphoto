 let currentPage = 1;
  let photoGrid = document.querySelector(".photo-grid");
  let postPage = 'page=1&per_page=16&order=asc';
  let postUrl = `http://newmotaphoto.local/wp-json/wp/v2/photo?${postPage}`;
  let descData = [];
  let formatData = [];
  let dataMedia = [];
  let singleImage ="";
$(document).ready(()=> {
  AOS.init({
    initClassName: "aos-init",
    startEvent: "DOMContentLoaded",
  });
  setInterval(() => {
    openLightbox();
  }, "1000"); 
  function sendRequest(filters) {
    $.ajax({
      url: postUrl,
      method: "GET",
      dataType: "json",
      success: function (data) {
        createHTML(filters, data);        
        
      },
      error: function (xhr, status, error) {
        console.error("Error fetching data:", error);
      },
    });
  }
  
  if(window.location.href == "http://newmotaphoto.local/"){
  initFilters();
  function initFilters() {
    const categoryFilter = $("#categories-select");
    const formatFilter = $("#filter-select");
    const dateFilter = $("#sort-dates");

    const filters = {
      category: '',
      format: '',
      sort: ''
    };
   
    function updateFiltersAndLoad() {
      filters.category = categoryFilter.val();
      filters.format = formatFilter.val();
      filters.sort = dateFilter.val();
      if(filters != ''){
       photoGrid.innerHTML = ""; 
       console.log(filters.sort);
       sendRequest(filters);
        }
    
      }

      categoryFilter.on("change", updateFiltersAndLoad);
      formatFilter.on("change", updateFiltersAndLoad);
      dateFilter.on("change", updateFiltersAndLoad);
  } 
}
   
  $("#load-more").on("click", (e) => {
    e.preventDefault();        
    postPage = 'page=2&per_page=8&order=asc';
     fetch(postUrl + postPage, {
        method: 'GET',        
      }).then(function(response) {
        if (!response.ok) {
          throw new Error('Network response error.');
        } 
        return response.json();
      }).then(function(data) {
         console.log(data)         
        data.forEach(function(post) {
           
           photoGrid.insertAdjacentHTML('beforeend', 
          `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine"><img src=`+post.acf.image +` alt=`+ post.title.rendered +`><div class="overlay"><div class="open-fullscreen" rel=`+  post.acf.image +`><img rel=`+  post.acf.image +` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen"></div><div class="eye"><a href=`+ post.link +`><img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a></div><div class="links"><p class="titleName">`+post.title.rendered+`</p><p class="categorie">`+post.acf.categorie  +`</p></div></div></div>`);
           
          })
      }).catch(function(error) {
        console.error('There was a problem with the fetch operation: ', error);
      });
    
      
    })
   
    
 
    
    function createHTML(filters, data) {
      $(".photo-grid").html('');
      data.forEach(element => {      
      if (filters.category === element.acf.categorie){          
    $(".photo-grid").append(`<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
    <img src=` + element.acf.image +` alt=`+ element.title.rendered +`>
    <div class="overlay"><div class="open-fullscreen" rel=`+ element.acf.image +`>
    <img rel=`+ element.link +` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen">
    </div><div class="eye">
    <a href=`+ element.link +`><img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a>
    </div><div class="infos">
    <p class="ref-val">`+element.acf.reference +`</p>
    <p class="titleName">`+element.title.rendered+`</p>
    <p class="categorie">`+element.acf.categorie+`</p>
    </div></div></div>`);    
      }
      if(filters.format === element.acf.format ){
        $(".photo-grid").append(`<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
          <img src=` + element.acf.image +` alt=`+ element.acf.title +`>
          <div class="overlay"><div class="open-fullscreen" rel=`+ element.acf.image +`>
          <img rel=`+ element.acf.image +` class="fullscreen" src="http://newmotaphoto.local/wp-content/uploads/2023/08/fullscreen.png" alt="Fullscreen">
          </div><div class="eye">
          <a href=`+ element.acf.image +`><img src="http://newmotaphoto.local/wp-content/themes/motaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a>
          </div><div class="links">
          <p class="ref-val">`+element.acf.reference +`</p>
          
          <p class="categorie">`+element.acf.categorie+`</p>
          </div></div></div>`);           
              
             
            
      }          
      
       if(filters.sort === "date" ){
          $(".photo-grid").append( `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
          <img src=` +
                newpost.acf.image +
                ` alt=` +
                newpost.title.rendered +
                `>
          <div class="overlay"><div class="open-fullscreen" rel=` +
                newpost.acf.image +
                `>
          <img rel=` +
                newpost.acf.image +
                ` class="fullscreen" src="http://newmotaphoto.local/wp-content/uploads/2023/08/fullscreen.png" alt="Fullscreen"></div>
          <div class="eye"><a href=` +
                newpost.link +
                `><img src="http://newmotaphoto.local/wp-content/themes/motaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a></div>
          <div class="links"><p class="ref-val">` +
                newpost.acf.reference +
                `</p>
          <p class="titleName">` +
                newpost.title.rendered +
                `</p>
          <p class="categorie">` +
                newpost.acf.categorie +
                `</p></div></div></div>`);
         
        }else{
          descData.push(element);
        let newData = descData.reverse();
         newData.forEach((newpost)=>{ })   
        }     
            if(filters.sort === 'date'){
         if(element.date){  
          $(".photo-grid").html('');
          $(".photo-grid").append(`<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
          <img src=` + element.acf.image +` alt=`+ element.title.rendered +`>
          <div class="overlay"><div class="open-fullscreen" rel=`+ element.acf.image +`>
          <img rel=`+ element.acf.image +` class="fullscreen" src="http://newmotaphoto.local/wp-content/uploads/2023/08/fullscreen.png" alt="Fullscreen">
          </div><div class="eye">
          <a href=`+ element.acf.image +`><img src="http://newmotaphoto.local/wp-content/themes/motaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a>
          </div><div class="links">
          <p class="ref-val">`+element.acf.reference +`</p>
          <p class="titleName">`+element.title.rendered+`</p>
          <p class="categorie">`+element.acf.categorie+`</p>
          </div></div></div>`); 
        }                
        
      }
    })
  }; 
  
//   function filterPhotos(filtersData){
//     let postPage = 'page=1&per_page=16&order=asc';
//   let newpostUrl = `http://newmotaphoto.local/wp-json/wp/v2/photos?${postPage}`;
//   $.ajax({
//     url: newpostUrl,
//     method: "GET",
//     dataType: "json",
//     success: function (data) {
//       getHTML(filtersData ,data);
//     },
//     error: function (xhr, status, error) {
//       console.error("Error fetching data:", error);
//     },
//   });
// }

// function getHTML(filtersData ,data){
  
//   for (let i of data) {
//     console.log(i.link) 
//     let dataHTML = `<div class="img imgFoto aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine" id=`+i.acf.categorie +`>
//   <img src=` + i.acf.image +` alt=`+ i.title.rendered +`>
//   <div class="overlay"><div class="open-fullscreen" rel=`+ i.acf.image +`>
//   <img rel=`+ i.acf.image +` class="fullscreen" src="http://newmotaphoto.local/wp-content/uploads/2023/08/fullscreen.png" alt="Fullscreen">
//   </div><div class="eye">
//   <a href=`+ i.link +`><img src="http://newmotaphoto.local/wp-content/themes/motaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a>
//   </div><div class="links">
//   <p class="ref-val">`+i.acf.reference +`</p>
//   <p class="titleName">`+i.title.rendered+`</p>
//   <p class="categorie">`+i.acf.categorie+`</p>
//   </div></div></div>`;  
//   if(filtersData.category === i.acf.categorie){
//    $(".photo-grid").prepend(dataHTML);
//    }
//    let filtersFormat = filtersData.format.toLowerCase();
//    if(filtersFormat=== i.acf.format){
//     $(".photo-grid").prepend(dataHTML);
//   }

// }
// }

  

// function initFilters() {
//   const category = $("#categoriesSelect");
//   const format = $("#filterSelect");
//   const date = $("#sortDates");

//   const filtersData = {
//     category: "",
//     format: "",
//     sort: "",
//   };

//   function updateFiltersAndLoad() {
//     filtersData.category = category.val();
//     filtersData.format = format.val();
//     filtersData.sort = date.val();
//     $(".photo-grid").html("");
//       // 
//        console.log(filtersData.format);
//       filterPhotos(filtersData)
   
//   }

//   category.on("change", updateFiltersAndLoad);
//   format.on("change", updateFiltersAndLoad);
//   date.on("change", updateFiltersAndLoad);
//   $(".photo-grid").html("");
//   }

  

window.onload = () => {  
  initFilters();
};


 });


 
  
  
  
  


