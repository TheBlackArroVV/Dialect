// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require tinymce-jquery
//= require leaflet.js
//= require leaflet.markercluster
//= require_tree .


selectRegion = data => {
  $.ajax({
    type: 'POST',
    url: '/words/find_region',
    data: data,
    success: function(data) {
      console.log(data)
      $.each(data, function(i, value) {
         $('#district').append($('<option>').text(value).attr('value', value));
       });
    },
    error: function(data) {
      console.log('error')
    }
  });
}

selectDistrict = data => {
  $.ajax({
    type: 'POST',
    url: '/words/find_district',
    data: data,
    success: function(data) {
      $.each(data, function(i, value) {
         $('#city').append($('<option>').text(value).attr('value', value));
       });
    },
    error: function(data) {
      console.log('error')
    }
  });
}

addWord = (off, dial) => {
  data = document.getElementById('city').value
  $.ajax({
    type: 'POST',
    url: '/words',
    data: { data: data, off: off, dial: dial },
    success: function(data, off, dial) {
      console.log('success')
    },
    error: function(data) {
      console.log('error')
    }
  });
}
