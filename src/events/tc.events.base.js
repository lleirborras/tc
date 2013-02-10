TC.Events = (function() {

    var keydown = function(e) {
        if(e.altKey || e.ctrlKey)
          return;

        var self = this;

        switch(e.which) {
		case  13://tab
            e.preventDefault();
            tc.Changes.insert("\n");
			break;

		case  9://tab
            e.preventDefault();
            tc.Changes.insert(String.fromCharCode(e.which));
			break;

		case  8://backspace
            e.preventDefault();
            tc.Changes.remove(e.which)
			break;

		case  46://delete
            e.preventDefault();
            tc.Changes.remove(e.which)
			break;
        };
    };

    var keypress = function(e) {
        if(e.altKey || e.ctrlKey)
          return;

        var self = this;

        switch(e.which) {
        default:
            e.preventDefault();
            tc.Changes.insert(String.fromCharCode(e.which));
        };
    };

    return {
        keydown: keydown,
        keypress: keypress
    };
})();
