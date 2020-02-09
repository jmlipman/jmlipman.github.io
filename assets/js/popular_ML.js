var current_source = "arxiv";
var current_latest = "week";
function loadRows(source, latest) {
    var row_content;
    alert(source);
    alert(latest);
    $("div.rows-here").html("");
    $.post( "https://delanover.com/projects/popular_ML/json_calls/retrieve.php", { source: source, latest: latest }, function( data ) {
      if ((data != null) && (data.length > 0)) {
          for (var i=0; i<data.length; i++) {
              row_content = '<div class="row">';
              row_content += '<div class="col-2 themed-grid-col data-source"><table width="100%" height="100%" cellspacing="0", cellpadding="0"><tr><td align="center">'+data[i].source+'</td></tr></table></div>';
              row_content += '<div class="col-7 themed-grid-col data-title"><a class="row-title" href="'+data[i].url+'" target="_blank">'+data[i].title+'</a></div>';
              row_content += '<div class="col-3 themed-grid-col data-author"><table width="100%" height="100%" cellspacing="0", cellpadding="0"><tr><td align="center"><a class="row-author" href="'+data[i].tweet_url+'" target="_blank">@'+data[i].author+'</a></td></tr></table></div>';
              row_content += '</div>'
              $("div.rows-here").append(row_content);
          }
      } else {
          $("div.rows-here").html("No data");
      }
    }, "json");
    alert("finish");
}

$(this).ready(function() {
    
    loadRows(current_source, current_latest);
    
    // Clicking buttons
    $("button[type=button]").click(function() {
        current_latest = $(this).attr("id");
        loadRows(current_source, current_latest);
        
         $("button[type=button]").each(function() {
             $(this).attr("class", "btn btn-light");
         });
         $(this).attr("class", "btn btn-primary");
    });
    
    // Changing "select"
    $("select#select-source").change(function() {
        current_source = $("select#select-source :selected").val();
        loadRows(current_source, current_latest);
    });
})
