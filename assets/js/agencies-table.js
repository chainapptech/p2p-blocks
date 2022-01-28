jQuery(document).ready(function($) {
	
	$(window).resize(function(){
		$('.agencies-tables-contents').find('.mobile-header').remove();
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

	$(window).resize(function(){
		$('.container-agency-snapshot-block-content').find('.mobile-header').remove();
		$('.container-agency-snapshot-block-content').each(function() {
		var head_col_count =  $(this).find('th').size();
		console.log(head_col_count);
			if($(window).width() <= 991 ){
				for ( i=1; i <= head_col_count; i++ )  {
					var head_col_label = $(this).find('th:nth-child('+ i +')').text();
					$(this).find('tr:not(.thead) td:nth-child('+ (i) +')').prepend('<div class="mobile-header">'+head_col_label+'</div>' );
				}
			}
		});
	}).resize();
});
