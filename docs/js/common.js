document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuOpenIcon = document.querySelector(".icon__menu"),
    menuCloseIcon = document.querySelector(".nav__icon-close"),
    menuList = document.querySelector(".main-nav"),
    searchOpenIcon = document.querySelector(".icon__search"),
    searchCloseIcon = document.querySelector(".search__close"),
    searchInput = document.querySelector(".search__text"),
    search = document.querySelector(".search"),
    searchBox = document.querySelector(".search__box"),
    toggleTheme = document.querySelector(".toggle-theme"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Search + Theme Switcher
  ======================================================= */
  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }
  
  function menuClose() {
    menuList.classList.remove("is-open");
  }

  searchOpenIcon.addEventListener("click", () => {
    searchOpen();
  });

  searchCloseIcon.addEventListener("click", () => {
    searchClose();
  });

  function searchOpen() {
    search.classList.add("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 250);
  }

  function searchClose() {
    search.classList.remove("is-visible");
  }

  searchBox.addEventListener("keydown", function(event) {
    if (event.target == this || event.keyCode == 27) {
      search.classList.remove('is-visible');
    }
  });

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };


  // Theme Switcher
  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }


  // =====================
  // Simple Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '{article}',
    noResultsText: '<h3 class="no-results">No results found</h3>'
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }



  /* =================================
  // Smooth scroll to the tags page
  ================================= */
  document.querySelectorAll(".tag__link, .top__link").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  /* =======================
  // Scroll Top Button
  ======================= */
  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });


  /* =======================
  // Expansion toggle for asides.
  ======================= */
  
  for(const h3 of document.querySelectorAll('article__aside h3')) {
    h3.onclick = function() {
        const div = this.nextSibling.nextSibling;
        div.className = div.className === 'expanded' ? '' : 'expanded';
    };
  }

  /* =======================
  // Toc
  ======================= */
  let allPosTag = document.querySelectorAll(".post h2, .post h3")
  if(allPosTag.length > 0){
    const topLevel = document.createElement('ol');
    topLevel.style.display = 'none';
    
    function toggleToC() {
        topLevel.style.display = topLevel.style.display === 'none' ? 'block' : 'none';
    }
  
    function buildToC() {
        let subLevel = null;
        let indexH2 = 0;
        let indexH3 = 0;
  
        for(const alltag of allPosTag) {
            var headerId;
            const isH2 = alltag.tagName === 'H2';
            if (isH2) {
                indexH2 += 1;
                indexH3 = 0;
                headerId = indexH2;
            }
            else {
                indexH3 += 1;
                headerId = indexH2 + "." + indexH3;
            }
            alltag.id = headerId;
            var li = (isH2 ? topLevel : subLevel).appendChild(document.createElement('li'));
            li.className = isH2 ? 'toc-h2' : 'toc-h3';
            const link = li.appendChild(document.createElement('a'));
            link.href = '#' + headerId;
            link.innerHTML = alltag.innerText;
            link.onclick = toggleToC;
            if(isH2) {
                subLevel = li.appendChild(document.createElement('ol'));
            }
        }
    }
    buildToC();
    
    const toc = document.createElement('div');
    toc.id = 'toc';
    const header = toc.appendChild(document.createElement('div'));
    header.innerHTML = '文章目录';
    header.onclick = toggleToC;
    toc.appendChild(topLevel);
    document.getElementsByTagName('body')[0].appendChild(toc);
  }

  
});