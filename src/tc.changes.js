TC.Changes = (function() {

    var insert = function(string, type) {
        var user_id   = TC.current_user().id(),
            selection = new tc.Selection(),
            target    = selection.node(),
            new_node  = TC.DOM.create_element(type || "ins", string, {
                   "data-user-id": TC.current_user().id(),
                 "data-user-name": TC.current_user().name(),
                 "data-crated-at": TC.now(),
                "data-updated-at": TC.now()
            });

        if(selection.range().text().length > 0)
            remove(8);

        if(target.is("div[data-edit='true']")) {

            selection.insert_node(new_node);

        } else if(target.is("ins")) {
            if(target.data("user-id") == user_id) {

                new_node = TC.DOM.create_text_element(string);
                selection.insert_node(new_node);

            } else {

                selection.insert_node(new_node);

            }
        } else if(target.is("del")){

            if(target.data("user-id") == user_id)
                selection.insert_node(new_node);
            else
                selection.append_node(new_node);

        }
    };

    var remove = function(i) {
        var selection = new tc.Selection(),
            range     = selection.range(),
            max_pos   = range.text().length;

        if(max_pos == 0) {

            _remove(i, selection, range);

        } else {

            range.collapse(true);

            if(i==8)
                range.move("character", max_pos);

            selection.set_single_range(range);

            for(pos=0; pos < max_pos; pos++){
                _remove(i, selection, range);
            }
        }
    };

    var _remove = function (i, selection, range){
        var user_id   = TC.current_user().id(),
            tmp_range = range.cloneRange(),
            target    = null,
            text      = null,
            parents   = selection.node().parents("div[data-edit='true']");

        switch(i) {
        case 8: //backspace
            tmp_range.setStart(parents.get())
            if(tmp_range.text() == "")
                return;
            else
                range.moveStart("character", -1);
            break;
        case 46: //delete
            tmp_range.setEndAfter(parents.children(":last").get())
            if(tmp_range.text() == "")
                return;
            else
                range.moveEnd("character", 1);
            break;
        }

        selection.set_single_range(range);

        target = selection.node();
        text   = range.text();

        if(target.data("user-id") == user_id) {

            if(target.is("ins"))
                range.deleteContents();
            else {
                target.replace_with(text);

                if(i==46)
                    range.move("character", 1);
            }

        } else {

            range.deleteContents();
            TC.Changes.insert(text, "del");

            if(i==46)
                range.move("character", 1);

        }

        selection.set_single_range(range);
    };

    return {
        insert: insert,
        remove: remove
    };

})();
