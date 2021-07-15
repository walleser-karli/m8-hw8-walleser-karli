var showDropdown = document.getElementById("products");

showDropdown.addEventListener("mouseenter",
  function() {
   document.getElementById("product-list").classList.remove("hide1");
   document.getElementById("product-list").classList.add("show");
  }, false
);

showDropdown.addEventListener("mouseleave",
  function() {
   document.getElementById("product-list").classList.remove("show");
   document.getElementById("product-list").classList.add("hide1");
  }, false
);

var showDropdown2 = document.getElementById("services");

showDropdown2.addEventListener("mouseenter",
  function() {
   document.getElementById("services-list").classList.remove("hide2");
   document.getElementById("services-list").classList.add("show");
  }, false 
);

showDropdown2.addEventListener("mouseleave",
  function() {
   document.getElementById("services-list").classList.remove("show");
   document.getElementById("services-list").classList.add("hide2");
  }, false 
);

var showDropdown3 = document.getElementById("company");

showDropdown3.addEventListener("mouseenter",
  function() {
   document.getElementById("company-list").classList.remove("hide3");
   document.getElementById("company-list").classList.add("show");
  }, false
);

showDropdown3.addEventListener("mouseleave",
  function() {
   document.getElementById("company-list").classList.remove("show");
   document.getElementById("company-list").classList.add("hide3");
  }, false
);