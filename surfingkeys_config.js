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


/* Edit these variables for easy theme making */
:root {
  /* Font */
  --font: 'Source Code Pro', monospace, sans;
  --font-size: 14;
  --font-weight: regular;
  /* -------------- */
  /* --- THEMES --- */
  /* -------------- */
  /* -------------------- */
  /* -- Tomorrow Night -- */
  /* -------------------- */
  /* -- DELETE LINE TO ENABLE THEME */
  --fg: #666666;
  --bg: #282A2E;
  --bg-dark: #1D1F21;
  --border: #282A2E;
  --main-fg: #777;
  --accent-fg: #ffcc00;
  --info-fg: #aaaaaa;
  --select: #585858;
  /* Unused Alternate Colors */
  /* --red: #E74C3C; */
  /* --orange: #FD971F; */
  /* --blue: #268BD2; */
  /* --violet: #9C91E4; */
  /* --cyan: #66D9EF; */
}
/* ---------- Generic ---------- */
.sk_theme {
  background: var(--bg);
  color: var(--main-fg);
  background-color: var(--bg);
  border-color: var(--border);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
input {
  font-family: var(--font);
  font-weight: var(--font-weight);
}
.sk_theme tbody {
  color: var(--fg);
}
.sk_theme input {
  color: var(--fg);
}
/* Hints */
#sk_hints .begin {
  color: var(--accent-fg) !important;
}
#sk_tabs .sk_tab {
  background: var(--bg-dark);
  border: 1px solid var(--border);
  color: var(--fg);
}
#sk_tabs .sk_tab_hint {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--accent-fg);
}
.sk_theme #sk_frame {
  background: var(--bg);
  opacity: 0.2;
  color: var(--accent-fg);
}
/* ---------- Omnibar ---------- */
/* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
/* .sk_theme#sk_omnibar {
  width: 100%;
  left: 0;
} */
.sk_theme .title {
  font-size: 1.14em;
  color: var(--main-fg);
}
.sk_theme .url {
  padding: 0.25rem auto 0.25rem 0.5rem;
  color: var(--main-fg);
}
.sk_theme span.annotation {
  color: var(--info-fg);
}
.sk_theme .omnibar_highlight {
  color: var(--accent-fg);
}
.sk_theme .omnibar_timestamp {
  color: var(--fg);
  font-size: .8em;
}
.sk_theme .omnibar_visitcount {
  color: var(--accent-fg);
}
.sk_theme .omnibar_folder {
  color: var(--main-fg);
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: var(--bg);
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
  color: var(--accent-fg);
  background: var(--bg-dark);
}
.sk_theme #sk_omnibarSearchResult ul li.focused .title {
  color: var(--accent-fg);
}
.sk_theme #sk_omnibarSearchResult ul li.focused .url {
  color: var(--info-fg);
}
.sk_theme #sk_omnibarSearchResult ul li.focused .annotation {
  color: var(--accent-fg);
}
.sk_theme #sk_omnibarSearchArea {
  border-top-color: var(--border);
  border-bottom-color: var(--border);
}
.sk_theme #sk_omnibarSearchArea input,
.sk_theme #sk_omnibarSearchArea span {
  font-size: var(--font-size);
}
.sk_theme .separator {
  color: var(--accent-fg);
}
/* ---------- Popup Notification Banner ---------- */
#sk_banner {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  background: var(--bg);
  border-color: var(--border);
  color: var(--fg);
  opacity: 0.9;
}
/* ---------- Popup Keys ---------- */
#sk_keystroke {
  background-color: var(--bg);
}
.sk_theme kbd .candidates {
  color: var(--info-fg);
}
/* ---------- Popup Translation Bubble ---------- */
#sk_bubble {
  background-color: var(--bg) !important;
  color: var(--fg) !important;
  border-color: var(--border) !important;
}
#sk_bubble * {
  color: var(--fg) !important;
}
#sk_bubble div.sk_arrow div:nth-of-type(1) {
  border-top-color: var(--border) !important;
  border-bottom-color: var(--border) !important;
}
#sk_bubble div.sk_arrow div:nth-of-type(2) {
  border-top-color: var(--bg) !important;
  border-bottom-color: var(--bg) !important;
}

/* ---------- Search ---------- */
#sk_status,
#sk_find {
  font-size: var(--font-size);
  border-color: var(--border);
}
.sk_theme kbd {
  background: var(--bg-dark);
  border-color: var(--border);
  box-shadow: none;
  color: var(--fg);
}
.sk_theme .feature_name span {
  color: var(--main-fg);
}

/* ---------- ACE Editor ---------- */
#sk_editor {
  background: var(--bg-dark) !important;
  height: 50% !important;
  /* Remove this to restore the default editor size */
}
.ace_dialog-bottom {
  border-top: 1px solid var(--bg) !important;
}
.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: var(--bg) !important;
}
.ace-chrome {
  color: var(--fg) !important;
}
.ace_gutter,
.ace_dialog {
  color: var(--fg) !important;
}
.ace_cursor {
  color: var(--fg) !important;
}
.normal-mode .ace_cursor {
  background-color: var(--fg) !important;
  border: var(--fg) !important;
  opacity: 0.7 !important;
}
.ace_marker-layer .ace_selection {
  background: var(--select) !important;
}
.ace_editor,
.ace_dialog span,
.ace_dialog input {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
.surfingkeys_hints_host {
  font-family: var(--font);
}
`;
