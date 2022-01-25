jQuery(document).ready(function($) {
	$(window).resize(function(){
		$('.agencies-tables-contents').each(function() {
		var head_col_count =  $(this).find('th').size();
			if($(window).width() <= 768 ){
				for ( i=0; i <= head_col_count; i++ )  {
					var head_col_label = $(this).find('th:nth-child('+ i +')').text();
					$(this).find('tr td#agencies-tables-contents-headers-item-'+i).before("<td class='mobile-header'>"+head_col_label+"</td>" );
				}
			}
		});
	}).resize();
});
