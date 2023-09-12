let currentPage = 1;
let photoGrid = document.querySelector(".photo-grid");
let postPage = "page=1&per_page=16&order=asc";
let postUrl = `http://newmotaphoto.local/wp-json/wp/v2/photo?${postPage}`;
let postData = "";
$(document).ready(() => {
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
        postData = data;
        createHTML(filters, data);
      },
      error: function (xhr, status, error) {
        console.error("Error fetching data:", error);
      },
    });
  }

  if (window.location.href == "http://newmotaphoto.local/") {
    initFilters();
    function initFilters() {
      const categoryFilter = $("#categories-select");
      const formatFilter = $("#filter-select");
      const dateFilter = $("#sort-dates");

      const filters = {
        category: "",
        format: "",
        sort: "",
      };

      function updateFiltersAndLoad() {
        filters.category = categoryFilter.val();
        filters.format = formatFilter.val();
        filters.sort = dateFilter.val();
        if (filters != "") {
          photoGrid.innerHTML = "";
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
    postPage = "page=2&per_page=12&order=asc";
    fetch(postUrl + postPage, {
      method: "GET",
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response error.");
        }
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (post) {
          photoGrid.insertAdjacentHTML(
            "beforeend",
            `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine"><img src=` +
              post.acf.image +
              ` alt=` +
              post.title.rendered +
              `><div class="overlay"><div class="open-fullscreen" rel=` +
              post.acf.image +
              `><img rel=` +
              post.acf.image +
              ` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen"></div><div class="eye"><a href=` +
              post.link +
              `><img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a></div><div class="infos"><p class="titleName">` +
              post.title.rendered +
              `</p><p class="categorie">` +
              post.acf.categorie +
              `</p></div></div></div>`
          );
        });
      })
      .catch(function (error) {
        console.error("There was a problem with the fetch operation: ", error);
      });
  });

  function createHTML(filters, data) {
    $(".photo-grid").html("");
    data.forEach((element) => {
      $(".linkSingle").attr("href", element.link);
      if (filters.category === element.acf.categorie) {
        $(".photo-grid").append(
          `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
        <img src=` +
            element.acf.image +
            ` alt=` +
            element.title.rendered +
            `>
        <div class="overlay"><div class="open-fullscreen" rel=` +
            element.acf.image +
            `>
        <img rel=` +
            element.acf.image +
            ` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen"></div><div class="eye">
        <a class="linkSingle">
        <img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a></div>
        <div class="infos"><p class="titleName">` +
            element.title.rendered +
            `</p><p class="categorie">` +
            element.acf.categorie +
            `</p></div></div></div>`
        );
      }
      if (filters.format === element.acf.format) {
        $(".photo-grid").append(
          `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
          <img src=` +
            element.acf.image +
            ` alt=` +
            element.acf.title +
            `>
          <div class="overlay">
          <div class="open-fullscreen" rel=` +
            element.acf.image +
            `>
          <img rel=` +
            element.acf.image +
            ` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen">
          </div><div class="eye">
          <a class="linkSingle">
          <img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye">
          </a></div>
          <div class="infos">
          <p class="ref-val">` +
            element.acf.reference +
            `</p>          
          <p class="categorie">` +
            element.acf.categorie +
            `</p>
          </div></div></div>`
        );
      }

      if (filters.sort === "date") {
        if (element.date) {
          $(".photo-grid").append(
            `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
          <img src=` +
              element.acf.image +
              ` alt=` +
              element.title.rendered +
              `>
          <div class="overlay"><div class="open-fullscreen" rel=` +
              element.acf.image +
              `>
          <img rel=` +
              element.acf.image +
              ` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen">
          </div><div class="eye">
          <a class="linkSingle"><img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye"></a>
          </div><div class="links">
          <p class="ref-val">` +
              element.acf.reference +
              `</p>
          <p class="titleName">` +
              element.title.rendered +
              `</p>
          <p class="categorie">` +
              element.acf.categorie +
              `</p>
          </div></div></div>`
          );
        }
      }
      if (filters.sort === "DESC") {
        reverseData();
      }
    });
  }

  function reverseData() {
    let formatData = [];
    formatData.push(postData);
    let newData = postData.reverse();
    newData.forEach(function (newData) {
      $(".reverseSingle").attr("href", newData.link);
      $(".photo-grid").append(
        `<div class="img aos-init aos-animate" data-aos="fade-right" data-offset="300" data-easing="ease-in-sine">
        <img src=` +
          newData.acf.image +
          ` alt=` +
          newData.acf.title +
          `>
        <div class="overlay">
        <div class="open-fullscreen" rel=` +
          newData.acf.image +
          `>
        <img rel=` +
          newData.acf.image +
          ` class="fullscreen" src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg" alt="Fullscreen">
        </div><div class="eye">
        <a class="reverseSingle">
        <img src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/picture-eye.svg" alt="Eye">
        </a></div>
        <div class="infos">
        <p class="ref-val">` +
          newData.acf.reference +
          `</p>          
        <p class="categorie">` +
          newData.acf.categorie +
          `</p>
        </div></div></div>`
      );
    });
  }

  
});
