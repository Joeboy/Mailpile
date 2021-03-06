MailPile.prototype.view = function(idx, msgid) {
	this.json_get("view", {"idx": idx, "msgid": msgid}, function(data) {
		if ($("#results").length === 0) {
			$("#content").prepend('<table id="results" class="results"><tbody></tbody></table>');
		}
		$("#results").empty();
	});
};

/* Thread - Show People In Conversation */
$(document).on('click', '.thread-show-people', function() {

  alert('FIXME: Show all people in conversation');
});

/* Thread - Show Security */
$(document).on('click', '.thread-show-security', function() {
  
  alert('FIXME: Show details about security of thread');
})

/* Thread - Expand Snippet */
$(document).on('click', '.thread-snippet', function() {
  
  alert('FIXME: Will load full message with mid: ' + $(this).data('mid'));
});


/* Thread - Might Move to Global Location / Abstraction */
$(document).on('click', '.dropdown-toggle', function() {
  console.log('toggle da bizzle');
  $(this).find('.icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
});


/* Compose - Pick Send Date */
$(document).on('click', '.pick-send-datetime', function(e) {

  if ($(this).data('datetime') == 'immediately') {
    $('#reply-datetime-display').html($(this).html());
  }
  else {
    $('#reply-datetime-display').html('in ' + $(this).html());
  }

  $('#reply-datetime span.icon').removeClass('icon-arrow-down').addClass('icon-arrow-right');

});


/* Compose - Details */
$(document).on('click', '#reply-show-details', function(e) {
  $('#thread-reply-details').slideDown('fast');
});
