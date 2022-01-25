<div class="agencies-tables-container">
<?php
if( have_rows('agency_header') ):
	while( have_rows('agency_header') ): the_row();
	$name = get_sub_field( 'name' );
	$logo = get_sub_field( 'logo' );
	$location = get_sub_field( 'location' );
	$employees_number = get_sub_field( 'employees_number' );
	$note = get_sub_field( 'note' );
	$website = get_sub_field( 'website' );
	?>
	<div class="agencies-tables-header">
		<div class="agency-logo-container-outer">
		
			<div class="agency-logo-container">
				<?php if( !empty( $logo ) ):?>
					<?php echo wp_get_attachment_image( $logo['ID'], 'thumbnail', null, array( 'class' => 'agency-logo' ) );?>
				<?php endif;?>
			</div>
		<?php
		if( !empty( $name ) ):?>
			<div class="agency-name-container">
				<h4 class="agency-name"><?php echo $name;?></h4>
				<div class="agency-location-container">
					<?php if( !empty( $location ) ):?>
					<div class="agency-location">
						<?php echo $location;?>	
					</div>
					<?php endif;?>
					<?php if( !empty( $employees_number ) ):?>
					<div class="agency-employees-number">
						<?php echo $employees_number;?>	+
					</div>
					<?php endif;?>
				</div>
			</div>
		<?php endif;?>
		</div>
		<?php if( !empty( $note ) ):?>
			<div class="note-container">
				<span class="note-label"><?php _e('Our Score');?></span>
				<?php
				$stars= 0;
				$html="";
			    $note = floatval($note);
			    if( $note )
			    	$stars = floor($note);
			    for( $i= 1;$i<= 5;$i++) {
			    	$class = ' empty';
			    	if( $i <= floor($note) ){
			    		$class = ' full';
			    	}else{
			    		if( $note < $i && $note > $i-1 ){
			    			$class = ' half';
			    		}
			    	}
			    	$html .= "<div class='agency_star agency_star_".$i.$class."'></div>";
			    }?>
			    <div class='agency_stars_container'><?php echo $html;?><div class="agency_stars_note"><?php echo $note;?></div></div>
			</div>
		<?php endif;?>
		<a href="<?php echo $website;?>" target="_blank" title=""><span><?php _e('view website');?></span></a>
	</div>
	<?php endwhile; ?>
<?php endif;
$headers = array();
$contents = array();
$id = uniqid("agencies-table");

if( have_rows('agency_content') ):?>
	<table class="agencies-tables-contents" id="agencies-tables-contents-<?php echo $id;?>">
		<?php while( have_rows('agency_content') ): the_row();
			
			$subheader = get_sub_field( 'subheader' );
			$sub_content = get_sub_field( 'sub_content' );
			$headers[] = $subheader;
			$contents[] = $sub_content;
			?>
		<?php endwhile;?>
		<tr class="agencies-tables-contents-headers">
			<?php foreach ($headers as $key => $header) :?>
				<th class="agencies-tables-contents-headers-item">
					<?php echo $header;?>
				</th>
			<?php endforeach;?>
		</tr>
		<tr class="agencies-tables-contents-items">
			<?php 
			$i = 1;
			foreach ($contents as $key => $content) :?>
				<td class="agencies-tables-contents-items-item" id="agencies-tables-contents-headers-item-<?php echo $i;?>">
					<?php echo $content;?>
				</td>
			<?php 
			$i++;
			endforeach;?>
		</tr>	
	</table>

<?php 

endif;?>
</div>
<script>

</script>