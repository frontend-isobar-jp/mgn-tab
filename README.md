# mgn-tab ( Don't Need jQuery )


Implement tab function.
- Target browser : IE9+
- In case of IE9, display tab without transition.

___

# Install

```
npm i mgn-tab -S
```

___

# Import

```
import mgnTab from 'mgn-tab';
```

___

# Constructor

```
new mgnTab(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".j-tab"|
|option|Object|-|ex)<br> option = {<br> fadeSpeed: 100,<br> btnElm: "ul li a",<br> detailElm: "div"<br>}|


|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|fadeSpeed|Number|0|Adjust display speed.|
|btnElm|String|".j-tab_btn"<br>(In case of “.j-tab”)|Specify element to be button.|
|detailElm|String|".j-tab_detail"<br>(In case of “.j-tab”)|Specify element to be content.|
___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|Open( element )|String|Open the tab designated by element.|
|OpenEnd = function(){};|-|Execute after opening tab.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-tab/](https://frontend-isobar-jp.github.io/mgn-tab/)

```
import mgnTab from 'mgn-tab';

let tab = new mgnTab('.j-tab');

//

let tab2 = new mgnTab(
    '.j-tab2',
    {
        fadeSpeed: 600
    }
);

tab2.Open( ".open" );

tab2.OpenEnd = function(){
    console.log("OpenEnd");
};

```
