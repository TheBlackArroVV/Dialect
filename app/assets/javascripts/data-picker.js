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
  