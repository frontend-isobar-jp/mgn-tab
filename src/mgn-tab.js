/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnTab = factory();
    }
}(this, function() {

    function mgnTab(selector, option) {

        this.selector = selector;
        this.tab = document.querySelectorAll( this.selector );

        //option
        if(option == null) option = {};
        this.fadeSpeed = option.fadeSpeed ? option.fadeSpeed : 0;
        this.btnElm = option.btnElm ? option.btnElm : selector + "_btn";
        this.detailElm = option.detailElm ? option.detailElm : selector + "_detail";

        this.OpenStart = function(){};
        this.OpenEnd = function(){};

        if(this.tab.length != 0) {
            this.Init();
        };

    }


    /**
    **
    ** Init
    **
    **/
    mgnTab.prototype.Init = function() {
        var this_ = this;
        var initCss =  "display: none;";
            initCss += "transition: all " + this.fadeSpeed / 1000 + "s;";
            initCss += "-webkit-transition: all " + this.fadeSpeed/1000 +"s;";

        for (var i = 0; i < this.tab.length; i++) {

            var DETAIL = this.tab[i].querySelectorAll(this.detailElm);
            var BTN = this.tab[i].querySelectorAll(this.btnElm);

            for (var j = 0; j < BTN.length; j++) {

                if( DETAIL[j] ) DETAIL[j].style.cssText = initCss;

                BTN[j].addEventListener( "click", function(e){
                    e.preventDefault();
                    this_.Open( e );
                });

            }

            this.AddClass(DETAIL[0],"active");
            DETAIL[0].style.display = "block";

            this.AddClass(BTN[0],"active");

        }

    }


    /**
    **
    ** Open
    **
    **/
    mgnTab.prototype.Open = function( element ) {

        var this_ = this;

        if( !this.tab[0] ) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        // var TARGET = element.currentTarget ? element.currentTarget : document.querySelectorAll( element )[0];
        var TARGET = element.currentTarget ? element.currentTarget : element;
        var PARENT = this.GetParent( TARGET, this.selector );

        var INDEX = Array.prototype.indexOf.call( PARENT.querySelectorAll( this.btnElm ), TARGET );

        //hide

        for (var k = 0; k < PARENT.querySelectorAll( this.btnElm ).length; k++) {

            var THIS_BTN = PARENT.querySelectorAll( this.btnElm )[k];
            var THIS_DETAIL = PARENT.querySelectorAll( this.detailElm )[k];

            this.RemoveClass(THIS_BTN,"active");

            this.RemoveClass(THIS_DETAIL,"active");
            THIS_DETAIL.style.display = "none";
            THIS_DETAIL.style.opacity = 0;

        }


        //show

        this.OpenStart( INDEX );

        this.AddClass(TARGET,"active");

        var TARGET_DETAIL = PARENT.querySelectorAll( this.detailElm )[ INDEX ];
        TARGET_DETAIL.style.display = "block";

        var EndFunc = function() {
            this_.OpenEnd( INDEX );
            TARGET_DETAIL.removeEventListener("transitionend", EndFunc);
        };

        setTimeout( function() {
            TARGET_DETAIL.style.opacity = 1;
            TARGET_DETAIL.addEventListener("transitionend", EndFunc, false)
        }, 1)

    }


    /**
    **
    ** GetParent
    **
    **/
    mgnTab.prototype.GetParent = function( element, target ) {

        var parent = element,
            i = 0,
            t;

        if ( target.split(".")[1] ) {

            t = target.split(".")[1];

        } else if ( target.split("#")[1] ) {

            t = target.split("#")[1];

        } else {

            t = target;

        }

        while ( i < 100 ){

            parent = parent.parentNode;

            if( parent.tagName.toLowerCase() == t ) break;

            if( parent.className ) {
                if( parent.className.match( t ) ) break;
            } else if( parent.id ) {
                if( parent.id.match( t ) ) break;
            }

            i++;

        }

        return parent;
    }

    mgnTab.prototype.AddClass = function( element, _className ) {

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }
    mgnTab.prototype.RemoveClass = function( element, _className ) {

        if (element.classList) {
            element.classList.remove(_className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + _className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

    }

    return mgnTab;

}));
