var current_source = "arxiv";
var current_latest = "week";
function loadRows(source, latest) {
    var row_content;
    $("div.rows-here").html("");
    $.post( "https://delanover.com/projects/popular_ML/json_calls/retrieve.php", { source: source, latest: latest }, function( data ) {
      if ((data != null) && (data.length > 0)) {
          for (var i=0; i<data.length; i++) {
              /*row_content = '<div class="row">';
              row_content += '<div class="col-2 themed-grid-col data-source"><table width="100%" height="100%" cellspacing="0" cellpadding="0"><tr><td align="center">'+data[i].url_type+'</td></tr></table></div>';
              row_content += '<div class="col-7 themed-grid-col data-title"><a class="row-title" href="'+data[i].url+'" target="_blank">'+data[i].url_title+'</a></div>';
              row_content += '<div class="col-3 themed-grid-col data-author"><table width="100%" height="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><a class="row-author" href="https://twitter.com/'+data[i].tweet_screenname+'/status/'+data[i].tweet_id+'" target="_blank">@'+data[i].tweet_screenname+'</a></td></tr></table></div>';
              row_content += '</div>'*/

              row_content = '<div class="row">';
              row_content += '<div class="col-12 themed-grid-col data-source">';
              row_content += '<table class="popularml" width="100%" height="100%" cellspacing="0" cellpadding="0">';
              row_content += '<tr><td>';

              row_content += '<table class="popularml" width="100%" height="100%" cellspacing="0" cellpadding="0">';
              row_content += '<tr><td width="50%" align="left">';
              row_content += '<a class="row-author" href="https://twitter.com/'+data[i].tweet_screenname+'/status/'+data[i].tweet_id+'" target="_blank">@'+data[i].tweet_screenname+'</a>';
              row_content += '</td>';

              row_content += '<td width="50%" align="right">'+data[i].url_type+'</td></tr>';
              row_content += '</table>';

              row_content += '</td></tr>';
              row_content += '<tr><td>';
              row_content += '<a class="row-title" href="'+data[i].url+'" target="_blank">'+data[i].url_title+'</a>';
              row_content += '</td></tr>';
              row_content += '<tr><td>';
              row_content += '<table class="popularml" width="100%" height="100%" cellspacing="0" cellpadding="0">';
              row_content += '<tr><td width="25%" align="center">';
              row_content += '<img src="https://raw.githubusercontent.com/jmlipman/jmlipman.github.io/master/assets/images/twitter-retweet.png" width="20" /> <span class="row-numrtwslikes">999</a>';
              row_content += '</td>';

              row_content += '<td width="25%" align="center"><img src="https://raw.githubusercontent.com/jmlipman/jmlipman.github.io/master/assets/images/twitter-like.png" width="20"/><span class="row-numrtwslikes">999</a></td>';
              row_content += '<td width="50%"></td></tr></table>';

              row_content += '</td></tr>';
              row_content += '</table>';

              row_content += '</div></div>';
              $("div.rows-here").append(row_content);
          }
      } else {
          $("div.rows-here").html("No data");
      }
    }, "json");
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
