// name: Rosé Pine
// author: thuanowa
// license: unlicense
// upstream: https://github.com/rose-pine/surfingkeys/blob/main/dist/rose-pine.conf
// blurb: All natural pine, faux fur and a bit of soho vibes for the classy minimalist

const hintsCss =
  "font-size: 16.5px; font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace; border: 0px; border-radius: 3px; padding: 2px 2.5px; color: #191724 !important; background: #e1def7; background-color: #e1def7; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); line-height: 1";

settings.hintAlign = 'left';
// const hintsCss =
//  "font-size: 11pt; font-family: 'JetBrains Mono NL', 'Cascadia Code', 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 0px; color: #191724 !important; background: #C5C0F9; background-color:rgb(225, 222, 241)";

api.Hints.style(hintsCss);
api.Hints.style(hintsCss, "text");

api.Hints.setCharacters('efdvhjlio'); // for left hand and right hand use 

// UNMAPPING SOME SEMIN COLUMN FEATURES 
api.unmap(';cq');
api.unmap(';di');
api.unmap(';fs');
api.unmap(';g');
api.unmap(';pf');
api.unmap(';ph');
api.unmap(';pj');
api.unmap(';pp');
api.unmap(';u');


// UNMAPPING THE YX YANKING 

api.unmap('yG');
api.unmap('yQ');
api.unmap('yS');
api.unmap('yY');
api.unmap('ya');
api.unmap('yc');
api.unmap('yd');
api.unmap('yf');
api.unmap('yg');
api.unmap('yh');
api.unmap('yj');
api.unmap('yi');
api.unmap('yl');
api.unmap('ymc');
api.unmap('yp');
api.unmap('yq');
api.unmap('ys');



// UNMAPPING SEARCH ALL SEARCH SELECTED WITH 

api.unmap('sg');
api.unmap('sd');
api.unmap('sb');
api.unmap('se');
api.unmap('sw');
api.unmap('ss');
api.unmap('sh');
api.unmap('sy');
api.unmap(';t');

const { mapkey, unmap, imap, imapkey, getClickableElements, vmapkey, map, cmap, addSearchAlias, removeSearchAlias, tabOpenLink, readText, Clipboard, Front, Hints, Visual, RUNTIME } = api;
removeSearchAlias('b', 's');


// Final clean version - no remote suggestions
addSearchAlias('b', 'google', 
  'https://search.brave.com/search?q=',
  '', // Empty string disables remote suggestions
  'google' // Keeps the Google icon
);

// Optional: Keep your quick-access shortcut
mapkey('go', '#1Search Brave (Google UI)', function() {
  Front.openOmnibar({type: "SearchEngine", extra: "b"});
});

settings.extraModifier = 'alt';  // Ensure RAlt works consistently
mapkey('<m-t>', 'Focus tabs omnibar', function() {
    Front.showOmnibar({type: "Tabs"});
});


// ----------------------------------------------------------

// MAPPING FOR THE VISUAL MODE 
api.map('ss', 'zv');
api.vmapkey('ss', 'zv');


// UNMAPPING DEFAULT TAB SWITCHING 
api.map('K' , 'R');               // go one tab left
api.map('J' , 'E');               // go one tab right 

// Recommended approach (uses Surfingkeys' native tab switching)
//api.mapkey('J', 'Go one tab left', function() { api.Tabs.goLeft(); });
//api.mapkey('K', 'Go one tab right', function() { api.Tabs.goRight(); });



api.unmap('r');               // reload pag
api.unmap('x');               // close tab
api.unmap('$');               // 
api.unmap('on');              //          
api.unmap('ga');              // about 
api.unmap('gc');              // cache
api.unmap('gd');              // downloads        
api.unmap('gk');              // cookies
api.unmap('e');               // scroll up something
api.unmap(';i');              // chrome inspect
api.unmap(';j');              // download shelf close
api.unmap('gs');              // view page source
api.unmap('%');               // scroll percentage not needed
api.unmap('P');               // no needed 
api.unmap('0');               // scroll all the way left
api.unmap('gf');              // open a link in non-active new tab
api.unmap('O');               // open detected links 

// UNMAPPING ALL VIM THINGS   
api.unmap('m');               // open detected links


// UNMAPPING TAB THINGS 
api.unmap('g0');              // first tab
api.unmap('yT');              // last tab
api.unmap('gx0');             // close tabs on the left
api.unmap('gx$');             // close tabs on the right
api.unmap('gxt');             // close tab on left
api.unmap('gxT');             // close tab on right
api.unmap('zi');             // zoom in 
api.unmap('zo');             // zoom out

// UNMAPPING & MAPPING MOUSE CLICKS      
api.map('mf', 'cf');          // Open multiple links in a new tab
api.map('mm', 'q')            // Click on an image or a button 
api.unmap('[[');              // Click on the previous link on current page
api.unmap(']]');              // Click on the next link on current page
api.unmap(';m')               // mouse out last element

// api.map('mov','<Ctrl-h>')        // mouse over elements.
api.unmap('<Ctrl-h>');        // Mouse over elements.
api.unmap('<Ctrl-j>')         // Mouse out elements.

// UNMAPPING ALL PROXY THINGS
api.unmap('cp');
api.unmap(';pa');
api.unmap(';pb');
api.unmap(';pd');
api.unmap(';ps');
api.unmap(';pc');
api.unmap(';cp');
api.unmap(';ap');

// UNMAPPING SETTINGS 
api.unmap(';v');
api.unmap(';pm');

// REMAPPING ALL OF THESE 
api.map('H', 'S');            // go back in history
api.map('L', 'D');            // go forward in history
api.map(';g', 'og');          // search with google
api.map('you', 'oy');         // search with YouTube
api.map('w', 'cs');           // change scroll target
api.map('ee', 'ge');          // edge extensions 
api.map('eb', 'gb');          // edge bookmarks
api.map('eh', 'gh');          // edge history 
api.map(';;', ';e');          // setting surfingkeys
api.map('sett', ';e');         // settings surfingkeys
api.map('F', 'C');            // open in new tab 
api.map('res', 'X');          // restored closed tab


// REMAPPING THE OMNIBARS TRY

// api.map('go', 'og');             // search google



// UNMAP CERTAIN KEYS FROM YOUTUBE
// api.unmapAllExcept(['f','i','gi','w','T','og','j','k','d','u','you','G','gg','ss','mf','H'], /youtube.com/);

api.unmap("l", /youtube.com/);
api.unmap("/", /youtube.com/);
api.unmap(";", /youtube.com/);
api.unmap("?", /youtube.com/);
api.unmap("t", /youtube.com/); 


settings.smoothScroll = false;

// THEME DEEPSEEK STYLE

settings.theme = `
.sk_theme {
  background: #191724;
  color: #e0def4;
}
.sk_theme input {
  color: #e0def4;
}
.sk_theme .url {
  color: #c4a7e7;
}
.sk_theme .annotation {
  color: #ebbcba;
}
.sk_theme kbd {
  background: #26233a;
  color: #e0def4;
}
.sk_theme .frame {
  background: #1f1d2e;
}
.sk_theme .omnibar_highlight {
  color: #403d52;
}
.sk_theme .omnibar_folder {
  color: #e0def4;
}
.sk_theme .omnibar_timestamp {
  color: #9ccfd8;
}
.sk_theme .omnibar_visitcount {
  color: #9ccfd8;
}
.sk_theme .prompt, .sk_theme .resultPage {
  color: #e0def4;
}
.sk_theme .feature_name {
  color: #e0def4;
}
.sk_theme .separator {
  color: #524f67;
}
body {
  margin: 0;
  font-family: "JetBrains Mono NL", "Cascadia Code", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
}
#sk_omnibar {
  overflow: hidden;
  position: fixed;
  width: 80%;
  max-height: 80%;
  left: 10%;
  text-align: left;
  box-shadow: 0px 2px 10px #21202e;
  z-index: 2147483000;
}
.sk_omnibar_middle {
  top: 10%;
  border-radius: 4px;
}
.sk_omnibar_bottom {
  bottom: 0;
  border-radius: 4px 4px 0px 0px;
}
#sk_omnibar span.omnibar_highlight {
  text-shadow: 0 0 0.01em;
}
#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
  display: inline-block;
  font-size: 20px;
  width: auto;
}
#sk_omnibarSearchArea>input {
  display: inline-block;
  width: 100%;
  flex: 1;
  font-size: 20px;
  margin-bottom: 0;
  padding: 0px 0px 0px 0.5rem;
  background: transparent;
  border-style: none;
  outline: none;
}
#sk_omnibarSearchArea {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #524f67;
}
.sk_omnibar_middle #sk_omnibarSearchArea {
  margin: 0.5rem 1rem;
}
.sk_omnibar_bottom #sk_omnibarSearchArea {
  margin: 0.2rem 1rem;
}
#sk_omnibarSearchResult {
  max-height: 60vh;
  overflow: hidden;
  margin: 0rem 0.6rem;
}
#sk_omnibarSearchResult:empty {
  display: none;
}
#sk_omnibarSearchResult>ul {
  padding: 0;
}
#sk_omnibarSearchResult>ul>li {
  padding: 0.2rem 0rem;
  display: block;
  max-height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
  background: #1f1d2e;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
  background: #26233a;
}
.sk_theme #sk_omnibarSearchResult>ul>li.window {
  border: 2px solid #524f67;
  border-radius: 8px;
  margin: 4px 0px;
}
.sk_theme #sk_omnibarSearchResult>ul>li.window.focused {
  border: 2px solid #c4a7e7;
}
.sk_theme div.table {
  display: table;
}
.sk_theme div.table>* {
  vertical-align: middle;
  display: table-cell;
}
#sk_omnibarSearchResult li div.title {
  text-align: left;
}
#sk_omnibarSearchResult li div.url {
  font-weight: bold;
  white-space: nowrap;
  display: none;
}
#sk_omnibarSearchResult li.focused div.url {
  white-space: normal;
}
#sk_omnibarSearchResult li span.annotation {
  float: right;
}
#sk_omnibarSearchResult .tab_in_window {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  box-shadow: 0px 2px 10px #21202e;
}
#sk_status {
  position: fixed;
  bottom: 0;
  right: 20%;
  z-index: 2147483000;
  padding: 4px 8px 0 8px;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid #524f67;
  font-size: 12px;
}
#sk_status>span {
  line-height: 16px;
}
.expandRichHints span.annotation {
  padding-left: 4px;
  color: #ebbcba;
}
.expandRichHints .kbd-span {
  min-width: 30px;
  text-align: right;
  display: inline-block;
}
.expandRichHints kbd>.candidates {
  color: #e0def4;
  font-weight: bold;
}
.expandRichHints kbd {
  padding: 1px 2px;
}
#sk_find {
  border-style: none;
  outline: none;
}
#sk_keystroke {
  padding: 6px;
  position: fixed;
  float: right;
  bottom: 0px;
  z-index: 2147483000;
  right: 0px;
  background: #191724;
  color: #e0def4;
}
#sk_usage, #sk_popup, #sk_editor {
  overflow: auto;
  position: fixed;
  width: 80%;
  max-height: 80%;
  top: 10%;
  left: 10%;
  text-align: left;
  box-shadow: #21202e;
  z-index: 2147483298;
  padding: 1rem;
}
#sk_nvim {
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 30%;
}
#sk_popup img {
  width: 100%;
}
#sk_usage>div {
  display: inline-block;
  vertical-align: top;
}
#sk_usage .kbd-span {
  width: 80px;
  text-align: right;
  display: inline-block;
}
#sk_usage .feature_name {
  text-align: center;
  padding-bottom: 4px;
}
#sk_usage .feature_name>span {
  border-bottom: 2px solid #524f67;
}
#sk_usage span.annotation {
  padding-left: 32px;
  line-height: 22px;
}
#sk_usage * {
  font-size: 10pt;
}
kbd {
  white-space: nowrap;
  display: inline-block;
  padding: 3px 5px;
  font: 11px "JetBrains Mono NL", "Cascadia Code", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 10px;
  vertical-align: middle;
  border: solid 1px #524f67;
  border-bottom-lolor: #524f67;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #21202e;
}
#sk_banner {
  padding: 0.5rem;
  position: fixed;
  left: 10%;
  top: -3rem;
  z-index: 2147483000;
  width: 80%;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid #524f67;
  border-top-style: none;
  text-align: center;
  background: #191724;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#sk_tabs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: auto;
  z-index: 2147483000;
}

/* --- NEW UNIVERSAL TAB LAYOUT --- */
.sk_theme div.sk_tab {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  height: 38px !important;
  padding: 8px 12px !important;
  margin: 4px !important;
  background: #1f1d2e !important;
  border-radius: 4px !important;
}

.sk_theme div.sk_tab_content {
  display: flex !important;
  align-items: center !important;
  width: 100% !important;
  min-width: 0 !important;
}

.sk_theme div.sk_tab_icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 20px !important;
  height: 20px !important;
  margin-right: 8px !important;
  flex-shrink: 0 !important;
}

.sk_theme div.sk_tab_icon img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
}

.sk_theme div.sk_tab_title {
  flex: 1 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  font-size: 12px !important;
  line-height: 1.3 !important;
  color: #e0def4 !important;
  padding-left: 0 !important;
  margin-left: 0 !important;
}

.sk_theme div.sk_tab_url {
  display: none !important;
}

/* Firefox-specific fixes */
@-moz-document url-prefix() {
  .sk_theme div.sk_tab_icon {
    margin-top: -1px !important;
  }
}
/* --- END TAB LAYOUT --- */

div.sk_tab_hint {
  display: inline-block;
  float:right;
  font-size: 10pt;
  font-weight: bold;
  padding: 0px 2px 0px 2px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#191724), color-stop(100%,#191724));
  color: #e0def4;
  border: solid 1px #524f67;
  border-radius: 3px;
  box-shadow: #21202e;
}
#sk_tabs.vertical div.sk_tab_hint {
  position: initial;
  margin-inline: 0;
}
div.tab_rocket {
  display: none;
}
#sk_bubble {
  position: absolute;
  padding: 9px;
  border: 1px solid #524f67;
  border-radius: 4px;
  box-shadow: 0 0 20px #21202e;
  color: #e0def4;
  background-color: #191724;
  z-index: 2147483000;
  font-size: 14px;
}
#sk_bubble .sk_bubble_content {
  overflow-y: scroll;
  background-size: 3px 100%;
  background-position: 100%;
  background-repeat: no-repeat;
}
.sk_scroller_indicator_top {
  background-image: linear-gradient(#191724, transparent);
}
.sk_scroller_indicator_middle {
  background-image: linear-gradient(transparent, #191724, transparent);
}
.sk_scroller_indicator_bottom {
  background-image: linear-gradient(transparent, #191724);
}
#sk_bubble * {
  color: #e0def4 !important;
}
div.sk_arrow>div:nth-of-type(1) {
  left: 0;
  position: absolute;
  width: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  background: transparent;
}
div.sk_arrow[dir=down]>div:nth-of-type(1) {
  border-top: 12px solid #524f67;
}
div.sk_arrow[dir=up]>div:nth-of-type(1) {
  border-bottom: 12px solid #524f67;
}
div.sk_arrow>div:nth-of-type(2) {
  left: 2px;
  position: absolute;
  width: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  background: transparent;
}
div.sk_arrow[dir=down]>div:nth-of-type(2) {
  border-top: 10px solid #e0def4;
}
div.sk_arrow[dir=up]>div:nth-of-type(2) {
  top: 2px;
  border-bottom: 10px solid #e0def4;
}
.ace_editor.ace_autocomplete {
  z-index: 2147483300 !important;
  width: 80% !important;
}
@media only screen and (max-width: 767px) {
  #sk_omnibar {
    width: 100%;
    left: 0;
  }
  #sk_omnibarSearchResult {
    max-height: 50vh;
    overflow: scroll;
  }
  .sk_omnibar_bottom #sk_omnibarSearchArea {
    margin: 0;
    padding: 0.2rem;
  }
}
`;
