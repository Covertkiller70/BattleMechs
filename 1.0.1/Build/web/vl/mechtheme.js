// ----------------------
// -- Theme: MECHTHEME --
// ----------------------
LANSA.addComponent(
{
   id: "MECHTHEME", 
   ot: "th", 
   tp: "Theme", 
   de: "Mech Theme", 
   tl: 14000100
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "lavaclick.jpg" );
   var resource2 = Lansa.createBitmap( "lava.jpg" );

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_THM", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Facename('Lucida Console') Bold(False) Fontsize(12) Borderbottom(1) Borderleft(1) Borderright(1) Bordertop(1) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#MenuBar) Style(#MenuBarStyle)
         //
         var MENUBAR = this.createReference( "MENUBAR", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#MenuBarStyle) Backgroundbrush(#MenubarBackgroundBrush)
         //
         var MENUBARSTYLE = this.createReference( "MENUBARSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#MenubarBackgroundBrush) Color(Theme300)
         //
         var MENUBARBACKGROUNDBRUSH = this.createReference( "MENUBARBACKGROUNDBRUSH", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#PopupMenu) Style(#Style4)
         //
         var POPUPMENU = this.createReference( "POPUPMENU", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PopupMenuStyle) Backgroundbrush(#PopupMenuBackground) Borderbottom(1) Borderright(1) Borderleft(1) Bordertop(1) Cornerbottomleft(0) Cornerbottomright(0) Cornertopleft(0) Cornertopright(0) Borderbrush(#PopupMenuBorder) Effect(#PopupMenuDropShadow)
         //
         var POPUPMENUSTYLE = this.createReference( "POPUPMENUSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PopupMenuBorder) Color(ThemeBorder)
         //
         var POPUPMENUBORDER = this.createReference( "POPUPMENUBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PopupMenuBackground) Color(White)
         //
         var POPUPMENUBACKGROUND = this.createReference( "POPUPMENUBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.DropShadow) Name(#PopupMenuDropShadow)
         //
         var POPUPMENUDROPSHADOW = this.createReference( "POPUPMENUDROPSHADOW", "PRIM_VS", "DropShadow" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) Foregroundbrush(#Brush6)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush6) Color(Theme900)
         //
         var BRUSH6 = this.createReference( "BRUSH6", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Popup) Style(#PopupStyle)
         //
         var POPUP = this.createReference( "POPUP", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PopupStyle) Backgroundbrush(#PopupBackground) Borderbottom(1) Borderright(1) Borderleft(1) Bordertop(1) Cornerbottomleft(0) Cornerbottomright(0) Cornertopleft(0) Cornertopright(0) Borderbrush(#PopupBorder) Effect(#PopupDropShadow)
         //
         var POPUPSTYLE = this.createReference( "POPUPSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PopupBorder) Color(ThemeBorder)
         //
         var POPUPBORDER = this.createReference( "POPUPBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PopupBackground) Color(White)
         //
         var POPUPBACKGROUND = this.createReference( "POPUPBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.DropShadow) Name(#PopupDropShadow)
         //
         var POPUPDROPSHADOW = this.createReference( "POPUPDROPSHADOW", "PRIM_VS", "DropShadow" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#DropDown) Style(#DropDownStyle)
         //
         var DROPDOWN = this.createReference( "DROPDOWN", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#DropDownStyle) Backgroundbrush(#DropDownBackground) Borderbottom(1) Borderright(1) Borderleft(1) Bordertop(1) Cornerbottomleft(0) Cornerbottomright(0) Cornertopleft(0) Cornertopright(0) Borderbrush(#DropDownBorder) Effect(#DropDownDropShadow) Cursor(Hand)
         //
         var DROPDOWNSTYLE = this.createReference( "DROPDOWNSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#DropDownBorder) Color(ThemeBorder)
         //
         var DROPDOWNBORDER = this.createReference( "DROPDOWNBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#DropDownBackground) Color(White)
         //
         var DROPDOWNBACKGROUND = this.createReference( "DROPDOWNBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.DropShadow) Name(#DropDownDropShadow)
         //
         var DROPDOWNDROPSHADOW = this.createReference( "DROPDOWNDROPSHADOW", "PRIM_VS", "DropShadow" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Edit) Style(#Style5)
         //
         var EDIT = this.createReference( "EDIT", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style5) Foregroundbrush(#Brush8)
         //
         var STYLE5 = this.createReference( "STYLE5", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush8) Color(Theme900)
         //
         var BRUSH8 = this.createReference( "BRUSH8", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#List) Style(#Style2)
         //
         var LIST = this.createReference( "LIST", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Foregroundbrush(#Brush2)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(Theme900)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#ListColumn) Style(#ListColumnStyle)
         //
         var LISTCOLUMN = this.createReference( "LISTCOLUMN", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListColumnStyle) Backgroundbrush(#ListColumnBackground) Borderbottom(1) Borderright(1) Borderbrush(#ListColumnBorder) Foregroundbrush(#Brush3)
         //
         var LISTCOLUMNSTYLE = this.createReference( "LISTCOLUMNSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush3) Color(Theme900)
         //
         var BRUSH3 = this.createReference( "BRUSH3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListColumnBorder) Color(ThemeBorder)
         //
         var LISTCOLUMNBORDER = this.createReference( "LISTCOLUMNBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListColumnBackground) Color(White)
         //
         var LISTCOLUMNBACKGROUND = this.createReference( "LISTCOLUMNBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#ListItem) Focusedinactivestyle(#ListItemFocusedInactiveStyle) Selectedinactivestyle(#ListItemSelectedInactiveStyle) Focusedstyle(#ListItemFocusStyle) Mouseoverstyle(#ListItemMouseOverStyle) Selectedstyle(#ListItemSelectedStyle) Style(#Style3)
         //
         var LISTITEM = this.createReference( "LISTITEM", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListItemFocusedInactiveStyle) Borderbrush(#ListItemFocusedInactiveBorder)
         //
         var LISTITEMFOCUSEDINACTIVESTYLE = this.createReference( "LISTITEMFOCUSEDINACTIVESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemFocusedInactiveBorder) Color(ThemeInactive)
         //
         var LISTITEMFOCUSEDINACTIVEBORDER = this.createReference( "LISTITEMFOCUSEDINACTIVEBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListItemSelectedInactiveStyle) Backgroundbrush(#ListItemSelectedInactiveBackground) Borderbrush(#ListItemSelectedInactiveBorder)
         //
         var LISTITEMSELECTEDINACTIVESTYLE = this.createReference( "LISTITEMSELECTEDINACTIVESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemSelectedInactiveBorder) Color(ThemeInactive)
         //
         var LISTITEMSELECTEDINACTIVEBORDER = this.createReference( "LISTITEMSELECTEDINACTIVEBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemSelectedInactiveBackground) Color(ThemeInactive)
         //
         var LISTITEMSELECTEDINACTIVEBACKGROUND = this.createReference( "LISTITEMSELECTEDINACTIVEBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListItemFocusStyle) Backgroundbrush(#ListItemFocusBackground) Borderbrush(#ListItemFocusBorder)
         //
         var LISTITEMFOCUSSTYLE = this.createReference( "LISTITEMFOCUSSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemFocusBorder) Color(Theme100)
         //
         var LISTITEMFOCUSBORDER = this.createReference( "LISTITEMFOCUSBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemFocusBackground) Color(Theme100)
         //
         var LISTITEMFOCUSBACKGROUND = this.createReference( "LISTITEMFOCUSBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListItemSelectedStyle) Backgroundbrush(#ListItemSelectedBackground) Borderbrush(#ListItemSelectedBorder)
         //
         var LISTITEMSELECTEDSTYLE = this.createReference( "LISTITEMSELECTEDSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemSelectedBorder) Color(Theme200)
         //
         var LISTITEMSELECTEDBORDER = this.createReference( "LISTITEMSELECTEDBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemSelectedBackground) Color(Theme200)
         //
         var LISTITEMSELECTEDBACKGROUND = this.createReference( "LISTITEMSELECTEDBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ListItemMouseOverStyle) Backgroundbrush(#ListItemMouseOverBackground) Borderbrush(#ListItemMouseOverBorder)
         //
         var LISTITEMMOUSEOVERSTYLE = this.createReference( "LISTITEMMOUSEOVERSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemMouseOverBorder) Color(Theme100)
         //
         var LISTITEMMOUSEOVERBORDER = this.createReference( "LISTITEMMOUSEOVERBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ListItemMouseOverBackground) Color(Theme100)
         //
         var LISTITEMMOUSEOVERBACKGROUND = this.createReference( "LISTITEMMOUSEOVERBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3) Foregroundbrush(#Brush4)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush4) Color(Theme900)
         //
         var BRUSH4 = this.createReference( "BRUSH4", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#PushButton) Mouseoverstyle(#MechButtonPressed) Pressedstyle(#Style7) Focusedstyle(#Style9) Selectedstyle(#MechButtonResting) Style(#MechButtonResting) Focusedinactivestyle(#MechButtonResting)
         //
         var PUSHBUTTON = this.createReference( "PUSHBUTTON", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonStyle) Backgroundbrush(#PushButtonBackground) Borderbottom(1) Borderleft(1) Borderright(1) Bordertop(1) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4) Foregroundbrush(#Brush5) Borderbrush(#Brush16) Cursor(Hand) Fontsize(14) Bold(False)
         //
         var PUSHBUTTONSTYLE = this.createReference( "PUSHBUTTONSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush16) Color(ThemeBorder)
         //
         var BRUSH16 = this.createReference( "BRUSH16", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush5) Color(ThemeText)
         //
         var BRUSH5 = this.createReference( "BRUSH5", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PushButtonBackground) Color(41:41:41)
         //
         var PUSHBUTTONBACKGROUND = this.createReference( "PUSHBUTTONBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonMouseover) Backgroundbrush(#Brush10) Foregroundbrush(#Brush11) Fontsize(16) Facename('Lucida Console') Borderbottom(2) Borderbrush(#Brush12) Borderleft(2) Borderright(2) Bordertop(2) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4)
         //
         var PUSHBUTTONMOUSEOVER = this.createReference( "PUSHBUTTONMOUSEOVER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush12) Color(ThemeBorder)
         //
         var BRUSH12 = this.createReference( "BRUSH12", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush11) Color(ThemeText)
         //
         var BRUSH11 = this.createReference( "BRUSH11", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush10) Color(Theme800)
         //
         var BRUSH10 = this.createReference( "BRUSH10", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonFocused) Backgroundbrush(#PushButtonFocusBackground) Borderbrush(#PushButtonFocusBorder)
         //
         var PUSHBUTTONFOCUSED = this.createReference( "PUSHBUTTONFOCUSED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PushButtonFocusBackground) Color(Theme200)
         //
         var PUSHBUTTONFOCUSBACKGROUND = this.createReference( "PUSHBUTTONFOCUSBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PushButtonFocusBorder) Color(Theme300)
         //
         var PUSHBUTTONFOCUSBORDER = this.createReference( "PUSHBUTTONFOCUSBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonPressed) Backgroundbrush(#PushButtonPressedBackground)
         //
         var PUSHBUTTONPRESSED = this.createReference( "PUSHBUTTONPRESSED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#PushButtonPressedBackground) Color(Theme300)
         //
         var PUSHBUTTONPRESSEDBACKGROUND = this.createReference( "PUSHBUTTONPRESSEDBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style7) Borderbottom(3) Borderbrush(#Brush14) Borderleft(3) Borderright(3) Bordertop(3) Foregroundbrush(#Brush13) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4) Fontsize(14) Cursor(Wait) Backgroundbrush(#Backgroundbrush4)
         //
         var STYLE7 = this.createReference( "STYLE7", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush4) Image(#LavaClicked)
         //
         var BACKGROUNDBRUSH4 = this.createReference( "BACKGROUNDBRUSH4", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush8) Sizing(FitBoth)
         //
         var BACKGROUNDBRUSH8 = this.createReference( "BACKGROUNDBRUSH8", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush7) Sizing(FitBoth)
         //
         var BACKGROUNDBRUSH7 = this.createReference( "BACKGROUNDBRUSH7", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush13) Color(0:0:0)
         //
         var BRUSH13 = this.createReference( "BRUSH13", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush14) Color(204:8:8)
         //
         var BRUSH14 = this.createReference( "BRUSH14", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style8) Foregroundbrush(#Brush17)
         //
         var STYLE8 = this.createReference( "STYLE8", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush17) Color(Theme300)
         //
         var BRUSH17 = this.createReference( "BRUSH17", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style9) Backgroundbrush(#Backgroundbrush1)
         //
         var STYLE9 = this.createReference( "STYLE9", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush1) Image(#lava)
         //
         var BACKGROUNDBRUSH1 = this.createReference( "BACKGROUNDBRUSH1", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style10) Backgroundbrush(#Backgroundbrush2)
         //
         var STYLE10 = this.createReference( "STYLE10", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush2) Image(#lava)
         //
         var BACKGROUNDBRUSH2 = this.createReference( "BACKGROUNDBRUSH2", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style11) Backgroundbrush(#Backgroundbrush3)
         //
         var STYLE11 = this.createReference( "STYLE11", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush3) Image(#lava)
         //
         var BACKGROUNDBRUSH3 = this.createReference( "BACKGROUNDBRUSH3", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#ToolbarButton) Mouseoverstyle(#ToolbarButtonMouseover) Focusedstyle(#ToolbarButtonFocused) Pressedstyle(#ToolbarButtonPressed) Style(#Style6)
         //
         var TOOLBARBUTTON = this.createReference( "TOOLBARBUTTON", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ToolbarButtonMouseover) Backgroundbrush(#ToolbarButtonMouseoverBackground)
         //
         var TOOLBARBUTTONMOUSEOVER = this.createReference( "TOOLBARBUTTONMOUSEOVER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ToolbarButtonMouseoverBackground) Color(Theme200)
         //
         var TOOLBARBUTTONMOUSEOVERBACKGROUND = this.createReference( "TOOLBARBUTTONMOUSEOVERBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ToolbarButtonFocused) Backgroundbrush(#ToolbarButtonFocusBackground) Borderbrush(#ToolbarButtonFocusBorder)
         //
         var TOOLBARBUTTONFOCUSED = this.createReference( "TOOLBARBUTTONFOCUSED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ToolbarButtonFocusBackground) Color(Theme200)
         //
         var TOOLBARBUTTONFOCUSBACKGROUND = this.createReference( "TOOLBARBUTTONFOCUSBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ToolbarButtonFocusBorder) Color(Theme300)
         //
         var TOOLBARBUTTONFOCUSBORDER = this.createReference( "TOOLBARBUTTONFOCUSBORDER", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ToolbarButtonPressed) Backgroundbrush(#ToolbarButtonPressedBackground)
         //
         var TOOLBARBUTTONPRESSED = this.createReference( "TOOLBARBUTTONPRESSED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#ToolbarButtonPressedBackground) Color(Theme300)
         //
         var TOOLBARBUTTONPRESSEDBACKGROUND = this.createReference( "TOOLBARBUTTONPRESSEDBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style6) Borderbottom(1) Borderbrush(#Brush9) Borderleft(1) Borderright(1) Bordertop(1)
         //
         var STYLE6 = this.createReference( "STYLE6", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush9) Color(Theme900)
         //
         var BRUSH9 = this.createReference( "BRUSH9", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#MenuItem) Mouseoverstyle(#MenuItemMouseOver)
         //
         var MENUITEM = this.createReference( "MENUITEM", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#MenuItemMouseOver) Backgroundbrush(#MenuItemMouseBackground)
         //
         var MENUITEMMOUSEOVER = this.createReference( "MENUITEMMOUSEOVER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#MenuItemMouseBackground) Color(Theme200)
         //
         var MENUITEMMOUSEBACKGROUND = this.createReference( "MENUITEMMOUSEBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Title) Style(#TitleStyle)
         //
         var TITLE = this.createReference( "TITLE", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#TitleStyle) Foregroundbrush(#TitleStyleForeground) Fontsize(250) Fontunits(Percent)
         //
         var TITLESTYLE = this.createReference( "TITLESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#TitleStyleForeground) Color(Theme900)
         //
         var TITLESTYLEFOREGROUND = this.createReference( "TITLESTYLEFOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Heading1) Style(#Heading1Style)
         //
         var HEADING1 = this.createReference( "HEADING1", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Heading1Style) Foregroundbrush(#Heading1Foreground) Fontsize(160) Fontunits(Percent)
         //
         var HEADING1STYLE = this.createReference( "HEADING1STYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Heading1Foreground) Color(Theme900)
         //
         var HEADING1FOREGROUND = this.createReference( "HEADING1FOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Heading2) Style(#Heading2Style)
         //
         var HEADING2 = this.createReference( "HEADING2", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Heading2Style) Foregroundbrush(#Heading2Foreground) Fontsize(140) Fontunits(Percent)
         //
         var HEADING2STYLE = this.createReference( "HEADING2STYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Heading2Foreground) Color(Theme900)
         //
         var HEADING2FOREGROUND = this.createReference( "HEADING2FOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Heading3) Style(#Heading3Style)
         //
         var HEADING3 = this.createReference( "HEADING3", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Heading3Style) Foregroundbrush(#Heading3Foreground) Fontsize(120) Fontunits(Percent)
         //
         var HEADING3STYLE = this.createReference( "HEADING3STYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Heading3Foreground) Color(Theme900)
         //
         var HEADING3FOREGROUND = this.createReference( "HEADING3FOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Strong) Style(#StrongStyle)
         //
         var STRONG = this.createReference( "STRONG", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StrongStyle) Bold(True)
         //
         var STRONGSTYLE = this.createReference( "STRONGSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Emphasis) Style(#EmphasisStyle)
         //
         var EMPHASIS = this.createReference( "EMPHASIS", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#EmphasisStyle) Italic(True) Foregroundbrush(#Brush7)
         //
         var EMPHASISSTYLE = this.createReference( "EMPHASISSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush7) Color(Theme900)
         //
         var BRUSH7 = this.createReference( "BRUSH7", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#LightTitle) Style(#DarkTitleStyle)
         //
         var LIGHTTITLE = this.createReference( "LIGHTTITLE", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#LightTitleStyle) Backgroundbrush(#LightTitleBackground) Foregroundbrush(#LightTitleForeground)
         //
         var LIGHTTITLESTYLE = this.createReference( "LIGHTTITLESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#LightTitleBackground) Color(Theme300)
         //
         var LIGHTTITLEBACKGROUND = this.createReference( "LIGHTTITLEBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#LightTitleForeground) Color(Theme700)
         //
         var LIGHTTITLEFOREGROUND = this.createReference( "LIGHTTITLEFOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#MediumTitle) Style(#DarkTitleStyle)
         //
         var MEDIUMTITLE = this.createReference( "MEDIUMTITLE", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#MediumTitleStyle) Foregroundbrush(#MediumTitleForeground) Backgroundbrush(#MediumTitleBackground)
         //
         var MEDIUMTITLESTYLE = this.createReference( "MEDIUMTITLESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#MediumTitleBackground) Color(Theme500)
         //
         var MEDIUMTITLEBACKGROUND = this.createReference( "MEDIUMTITLEBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#MediumTitleForeground) Color(White)
         //
         var MEDIUMTITLEFOREGROUND = this.createReference( "MEDIUMTITLEFOREGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#DarkTitle) Style(#DarkTitleStyle)
         //
         var DARKTITLE = this.createReference( "DARKTITLE", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#DarkTitleStyle) Backgroundbrush(#DarkTitleBackground) Foregroundbrush(#Brush1) Fontsize(26)
         //
         var DARKTITLESTYLE = this.createReference( "DARKTITLESTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(ThemeText)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#DarkTitleBackground) Color(0:0:0)
         //
         var DARKTITLEBACKGROUND = this.createReference( "DARKTITLEBACKGROUND", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#MechBackground) Style(#Background)
         //
         var MECHBACKGROUND = this.createReference( "MECHBACKGROUND", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Background) Backgroundbrush(#RadialBrush1)
         //
         var BACKGROUND = this.createReference( "BACKGROUND", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.RadialBrush) Name(#RadialBrush1) Colors(#BrushColors2) Radiusleft(100) Centerleft(100) Originleft(100) Centertop(100) Origintop(100) Radiustop(100)
         //
         var RADIALBRUSH1 = this.createReference( "RADIALBRUSH1", "PRIM_VS", "RadialBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColors) Name(#BrushColors2)
         //
         var BRUSHCOLORS2 = this.createReference( "BRUSHCOLORS2", "PRIM_VS", "BrushColors" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor3) Color(255:194:12) Parent(#BrushColors2)
         //
         var BRUSHCOLOR3 = this.createReference( "BRUSHCOLOR3", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor4) At(50) Color(255:144:14) Parent(#BrushColors2)
         //
         var BRUSHCOLOR4 = this.createReference( "BRUSHCOLOR4", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor1) At(100) Color(0:0:0) Parent(#BrushColors2)
         //
         var BRUSHCOLOR1 = this.createReference( "BRUSHCOLOR1", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#MechButtonResting) Backgroundbrush(#Backgroundbrush6) Fontsize(14) Borderbottom(1) Borderleft(1) Borderright(1) Bordertop(1) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4)
         //
         var MECHBUTTONRESTING = this.createReference( "MECHBUTTONRESTING", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush6) Image(#lava)
         //
         var BACKGROUNDBRUSH6 = this.createReference( "BACKGROUNDBRUSH6", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush) Image(#lava)
         //
         var BACKGROUNDBRUSH = this.createReference( "BACKGROUNDBRUSH", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#MechButtonPressed) Backgroundbrush(#Backgroundbrush5) Fontsize(16)
         //
         var MECHBUTTONPRESSED = this.createReference( "MECHBUTTONPRESSED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush5) Image(#lava)
         //
         var BACKGROUNDBRUSH5 = this.createReference( "BACKGROUNDBRUSH5", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_THM.DrawStyle) Name(#Labels) Style(#Style12)
         //
         var LABELS = this.createReference( "LABELS", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style12) Backgroundbrush(#Brush15) Foregroundbrush(#Brush18) Fontsize(10)
         //
         var STYLE12 = this.createReference( "STYLE12", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush18) Color(ThemeText)
         //
         var BRUSH18 = this.createReference( "BRUSH18", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush15) Color(0:0:0)
         //
         var BRUSH15 = this.createReference( "BRUSH15", "PRIM_VS", "SolidBrush" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setFaceName( "Lucida Console" );
         STYLE1.setBold( false );
         STYLE1.setFontSize( 12 );
         STYLE1.setBorderBottom( 1 );
         STYLE1.setBorderLeft( 1 );
         STYLE1.setBorderRight( 1 );
         STYLE1.setBorderTop( 1 );
         STYLE1.setCornerBottomLeft( 4 );
         STYLE1.setCornerBottomRight( 4 );
         STYLE1.setCornerTopLeft( 4 );
         STYLE1.setCornerTopRight( 4 );
         STYLE1.initialize();

         // -------------------------
         // -- Initialize #MENUBAR --
         // -------------------------
         MENUBAR.setStyle( MENUBARSTYLE );
         MENUBAR.initialize();

         // ------------------------------
         // -- Initialize #MENUBARSTYLE --
         // ------------------------------
         MENUBARSTYLE.setBackgroundBrush( MENUBARBACKGROUNDBRUSH );
         MENUBARSTYLE.initialize();

         // ----------------------------------------
         // -- Initialize #MENUBARBACKGROUNDBRUSH --
         // ----------------------------------------
         MENUBARBACKGROUNDBRUSH.setColor( "THEME300" );
         MENUBARBACKGROUNDBRUSH.initialize();

         // ---------------------------
         // -- Initialize #POPUPMENU --
         // ---------------------------
         POPUPMENU.setStyle( STYLE4 );
         POPUPMENU.initialize();

         // --------------------------------
         // -- Initialize #POPUPMENUSTYLE --
         // --------------------------------
         POPUPMENUSTYLE.setBackgroundBrush( POPUPMENUBACKGROUND );
         POPUPMENUSTYLE.setBorderBottom( 1 );
         POPUPMENUSTYLE.setBorderRight( 1 );
         POPUPMENUSTYLE.setBorderLeft( 1 );
         POPUPMENUSTYLE.setBorderTop( 1 );
         POPUPMENUSTYLE.setCornerBottomLeft( 0 );
         POPUPMENUSTYLE.setCornerBottomRight( 0 );
         POPUPMENUSTYLE.setCornerTopLeft( 0 );
         POPUPMENUSTYLE.setCornerTopRight( 0 );
         POPUPMENUSTYLE.setBorderBrush( POPUPMENUBORDER );
         POPUPMENUSTYLE.setEffect( POPUPMENUDROPSHADOW );
         POPUPMENUSTYLE.initialize();

         // ---------------------------------
         // -- Initialize #POPUPMENUBORDER --
         // ---------------------------------
         POPUPMENUBORDER.setColor( "THEMEBORDER" );
         POPUPMENUBORDER.initialize();

         // -------------------------------------
         // -- Initialize #POPUPMENUBACKGROUND --
         // -------------------------------------
         POPUPMENUBACKGROUND.setColor( "WHITE" );
         POPUPMENUBACKGROUND.initialize();

         // -------------------------------------
         // -- Initialize #POPUPMENUDROPSHADOW --
         // -------------------------------------
         POPUPMENUDROPSHADOW.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setForegroundBrush( BRUSH6 );
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #BRUSH6 --
         // ------------------------
         BRUSH6.setColor( "THEME900" );
         BRUSH6.initialize();

         // -----------------------
         // -- Initialize #POPUP --
         // -----------------------
         POPUP.setStyle( POPUPSTYLE );
         POPUP.initialize();

         // ----------------------------
         // -- Initialize #POPUPSTYLE --
         // ----------------------------
         POPUPSTYLE.setBackgroundBrush( POPUPBACKGROUND );
         POPUPSTYLE.setBorderBottom( 1 );
         POPUPSTYLE.setBorderRight( 1 );
         POPUPSTYLE.setBorderLeft( 1 );
         POPUPSTYLE.setBorderTop( 1 );
         POPUPSTYLE.setCornerBottomLeft( 0 );
         POPUPSTYLE.setCornerBottomRight( 0 );
         POPUPSTYLE.setCornerTopLeft( 0 );
         POPUPSTYLE.setCornerTopRight( 0 );
         POPUPSTYLE.setBorderBrush( POPUPBORDER );
         POPUPSTYLE.setEffect( POPUPDROPSHADOW );
         POPUPSTYLE.initialize();

         // -----------------------------
         // -- Initialize #POPUPBORDER --
         // -----------------------------
         POPUPBORDER.setColor( "THEMEBORDER" );
         POPUPBORDER.initialize();

         // ---------------------------------
         // -- Initialize #POPUPBACKGROUND --
         // ---------------------------------
         POPUPBACKGROUND.setColor( "WHITE" );
         POPUPBACKGROUND.initialize();

         // ---------------------------------
         // -- Initialize #POPUPDROPSHADOW --
         // ---------------------------------
         POPUPDROPSHADOW.initialize();

         // --------------------------
         // -- Initialize #DROPDOWN --
         // --------------------------
         DROPDOWN.setStyle( DROPDOWNSTYLE );
         DROPDOWN.initialize();

         // -------------------------------
         // -- Initialize #DROPDOWNSTYLE --
         // -------------------------------
         DROPDOWNSTYLE.setBackgroundBrush( DROPDOWNBACKGROUND );
         DROPDOWNSTYLE.setBorderBottom( 1 );
         DROPDOWNSTYLE.setBorderRight( 1 );
         DROPDOWNSTYLE.setBorderLeft( 1 );
         DROPDOWNSTYLE.setBorderTop( 1 );
         DROPDOWNSTYLE.setCornerBottomLeft( 0 );
         DROPDOWNSTYLE.setCornerBottomRight( 0 );
         DROPDOWNSTYLE.setCornerTopLeft( 0 );
         DROPDOWNSTYLE.setCornerTopRight( 0 );
         DROPDOWNSTYLE.setBorderBrush( DROPDOWNBORDER );
         DROPDOWNSTYLE.setEffect( DROPDOWNDROPSHADOW );
         DROPDOWNSTYLE.setCursor( "HAND" );
         DROPDOWNSTYLE.initialize();

         // --------------------------------
         // -- Initialize #DROPDOWNBORDER --
         // --------------------------------
         DROPDOWNBORDER.setColor( "THEMEBORDER" );
         DROPDOWNBORDER.initialize();

         // ------------------------------------
         // -- Initialize #DROPDOWNBACKGROUND --
         // ------------------------------------
         DROPDOWNBACKGROUND.setColor( "WHITE" );
         DROPDOWNBACKGROUND.initialize();

         // ------------------------------------
         // -- Initialize #DROPDOWNDROPSHADOW --
         // ------------------------------------
         DROPDOWNDROPSHADOW.initialize();

         // ----------------------
         // -- Initialize #EDIT --
         // ----------------------
         EDIT.setStyle( STYLE5 );
         EDIT.initialize();

         // ------------------------
         // -- Initialize #STYLE5 --
         // ------------------------
         STYLE5.setForegroundBrush( BRUSH8 );
         STYLE5.initialize();

         // ------------------------
         // -- Initialize #BRUSH8 --
         // ------------------------
         BRUSH8.setColor( "THEME900" );
         BRUSH8.initialize();

         // ----------------------
         // -- Initialize #LIST --
         // ----------------------
         LIST.setStyle( STYLE2 );
         LIST.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setForegroundBrush( BRUSH2 );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "THEME900" );
         BRUSH2.initialize();

         // ----------------------------
         // -- Initialize #LISTCOLUMN --
         // ----------------------------
         LISTCOLUMN.setStyle( LISTCOLUMNSTYLE );
         LISTCOLUMN.initialize();

         // ---------------------------------
         // -- Initialize #LISTCOLUMNSTYLE --
         // ---------------------------------
         LISTCOLUMNSTYLE.setBackgroundBrush( LISTCOLUMNBACKGROUND );
         LISTCOLUMNSTYLE.setBorderBottom( 1 );
         LISTCOLUMNSTYLE.setBorderRight( 1 );
         LISTCOLUMNSTYLE.setBorderBrush( LISTCOLUMNBORDER );
         LISTCOLUMNSTYLE.setForegroundBrush( BRUSH3 );
         LISTCOLUMNSTYLE.initialize();

         // ------------------------
         // -- Initialize #BRUSH3 --
         // ------------------------
         BRUSH3.setColor( "THEME900" );
         BRUSH3.initialize();

         // ----------------------------------
         // -- Initialize #LISTCOLUMNBORDER --
         // ----------------------------------
         LISTCOLUMNBORDER.setColor( "THEMEBORDER" );
         LISTCOLUMNBORDER.initialize();

         // --------------------------------------
         // -- Initialize #LISTCOLUMNBACKGROUND --
         // --------------------------------------
         LISTCOLUMNBACKGROUND.setColor( "WHITE" );
         LISTCOLUMNBACKGROUND.initialize();

         // --------------------------
         // -- Initialize #LISTITEM --
         // --------------------------
         LISTITEM.setFocusedInactiveStyle( LISTITEMFOCUSEDINACTIVESTYLE );
         LISTITEM.setSelectedInactiveStyle( LISTITEMSELECTEDINACTIVESTYLE );
         LISTITEM.setFocusedStyle( LISTITEMFOCUSSTYLE );
         LISTITEM.setMouseOverStyle( LISTITEMMOUSEOVERSTYLE );
         LISTITEM.setSelectedStyle( LISTITEMSELECTEDSTYLE );
         LISTITEM.setStyle( STYLE3 );
         LISTITEM.initialize();

         // ----------------------------------------------
         // -- Initialize #LISTITEMFOCUSEDINACTIVESTYLE --
         // ----------------------------------------------
         LISTITEMFOCUSEDINACTIVESTYLE.setBorderBrush( LISTITEMFOCUSEDINACTIVEBORDER );
         LISTITEMFOCUSEDINACTIVESTYLE.initialize();

         // -----------------------------------------------
         // -- Initialize #LISTITEMFOCUSEDINACTIVEBORDER --
         // -----------------------------------------------
         LISTITEMFOCUSEDINACTIVEBORDER.setColor( "THEMEINACTIVE" );
         LISTITEMFOCUSEDINACTIVEBORDER.initialize();

         // -----------------------------------------------
         // -- Initialize #LISTITEMSELECTEDINACTIVESTYLE --
         // -----------------------------------------------
         LISTITEMSELECTEDINACTIVESTYLE.setBackgroundBrush( LISTITEMSELECTEDINACTIVEBACKGROUND );
         LISTITEMSELECTEDINACTIVESTYLE.setBorderBrush( LISTITEMSELECTEDINACTIVEBORDER );
         LISTITEMSELECTEDINACTIVESTYLE.initialize();

         // ------------------------------------------------
         // -- Initialize #LISTITEMSELECTEDINACTIVEBORDER --
         // ------------------------------------------------
         LISTITEMSELECTEDINACTIVEBORDER.setColor( "THEMEINACTIVE" );
         LISTITEMSELECTEDINACTIVEBORDER.initialize();

         // ----------------------------------------------------
         // -- Initialize #LISTITEMSELECTEDINACTIVEBACKGROUND --
         // ----------------------------------------------------
         LISTITEMSELECTEDINACTIVEBACKGROUND.setColor( "THEMEINACTIVE" );
         LISTITEMSELECTEDINACTIVEBACKGROUND.initialize();

         // ------------------------------------
         // -- Initialize #LISTITEMFOCUSSTYLE --
         // ------------------------------------
         LISTITEMFOCUSSTYLE.setBackgroundBrush( LISTITEMFOCUSBACKGROUND );
         LISTITEMFOCUSSTYLE.setBorderBrush( LISTITEMFOCUSBORDER );
         LISTITEMFOCUSSTYLE.initialize();

         // -------------------------------------
         // -- Initialize #LISTITEMFOCUSBORDER --
         // -------------------------------------
         LISTITEMFOCUSBORDER.setColor( "THEME100" );
         LISTITEMFOCUSBORDER.initialize();

         // -----------------------------------------
         // -- Initialize #LISTITEMFOCUSBACKGROUND --
         // -----------------------------------------
         LISTITEMFOCUSBACKGROUND.setColor( "THEME100" );
         LISTITEMFOCUSBACKGROUND.initialize();

         // ---------------------------------------
         // -- Initialize #LISTITEMSELECTEDSTYLE --
         // ---------------------------------------
         LISTITEMSELECTEDSTYLE.setBackgroundBrush( LISTITEMSELECTEDBACKGROUND );
         LISTITEMSELECTEDSTYLE.setBorderBrush( LISTITEMSELECTEDBORDER );
         LISTITEMSELECTEDSTYLE.initialize();

         // ----------------------------------------
         // -- Initialize #LISTITEMSELECTEDBORDER --
         // ----------------------------------------
         LISTITEMSELECTEDBORDER.setColor( "THEME200" );
         LISTITEMSELECTEDBORDER.initialize();

         // --------------------------------------------
         // -- Initialize #LISTITEMSELECTEDBACKGROUND --
         // --------------------------------------------
         LISTITEMSELECTEDBACKGROUND.setColor( "THEME200" );
         LISTITEMSELECTEDBACKGROUND.initialize();

         // ----------------------------------------
         // -- Initialize #LISTITEMMOUSEOVERSTYLE --
         // ----------------------------------------
         LISTITEMMOUSEOVERSTYLE.setBackgroundBrush( LISTITEMMOUSEOVERBACKGROUND );
         LISTITEMMOUSEOVERSTYLE.setBorderBrush( LISTITEMMOUSEOVERBORDER );
         LISTITEMMOUSEOVERSTYLE.initialize();

         // -----------------------------------------
         // -- Initialize #LISTITEMMOUSEOVERBORDER --
         // -----------------------------------------
         LISTITEMMOUSEOVERBORDER.setColor( "THEME100" );
         LISTITEMMOUSEOVERBORDER.initialize();

         // ---------------------------------------------
         // -- Initialize #LISTITEMMOUSEOVERBACKGROUND --
         // ---------------------------------------------
         LISTITEMMOUSEOVERBACKGROUND.setColor( "THEME100" );
         LISTITEMMOUSEOVERBACKGROUND.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.setForegroundBrush( BRUSH4 );
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #BRUSH4 --
         // ------------------------
         BRUSH4.setColor( "THEME900" );
         BRUSH4.initialize();

         // ----------------------------
         // -- Initialize #PUSHBUTTON --
         // ----------------------------
         PUSHBUTTON.setMouseOverStyle( MECHBUTTONPRESSED );
         PUSHBUTTON.setPressedStyle( STYLE7 );
         PUSHBUTTON.setFocusedStyle( STYLE9 );
         PUSHBUTTON.setSelectedStyle( MECHBUTTONRESTING );
         PUSHBUTTON.setStyle( MECHBUTTONRESTING );
         PUSHBUTTON.setFocusedInactiveStyle( MECHBUTTONRESTING );
         PUSHBUTTON.initialize();

         // ---------------------------------
         // -- Initialize #PUSHBUTTONSTYLE --
         // ---------------------------------
         PUSHBUTTONSTYLE.setBackgroundBrush( PUSHBUTTONBACKGROUND );
         PUSHBUTTONSTYLE.setBorderBottom( 1 );
         PUSHBUTTONSTYLE.setBorderLeft( 1 );
         PUSHBUTTONSTYLE.setBorderRight( 1 );
         PUSHBUTTONSTYLE.setBorderTop( 1 );
         PUSHBUTTONSTYLE.setCornerBottomLeft( 4 );
         PUSHBUTTONSTYLE.setCornerBottomRight( 4 );
         PUSHBUTTONSTYLE.setCornerTopLeft( 4 );
         PUSHBUTTONSTYLE.setCornerTopRight( 4 );
         PUSHBUTTONSTYLE.setForegroundBrush( BRUSH5 );
         PUSHBUTTONSTYLE.setBorderBrush( BRUSH16 );
         PUSHBUTTONSTYLE.setCursor( "HAND" );
         PUSHBUTTONSTYLE.setFontSize( 14 );
         PUSHBUTTONSTYLE.setBold( false );
         PUSHBUTTONSTYLE.initialize();

         // -------------------------
         // -- Initialize #BRUSH16 --
         // -------------------------
         BRUSH16.setColor( "THEMEBORDER" );
         BRUSH16.initialize();

         // ------------------------
         // -- Initialize #BRUSH5 --
         // ------------------------
         BRUSH5.setColor( "THEMETEXT" );
         BRUSH5.initialize();

         // --------------------------------------
         // -- Initialize #PUSHBUTTONBACKGROUND --
         // --------------------------------------
         PUSHBUTTONBACKGROUND.setColor( "41:41:41" );
         PUSHBUTTONBACKGROUND.initialize();

         // -------------------------------------
         // -- Initialize #PUSHBUTTONMOUSEOVER --
         // -------------------------------------
         PUSHBUTTONMOUSEOVER.setBackgroundBrush( BRUSH10 );
         PUSHBUTTONMOUSEOVER.setForegroundBrush( BRUSH11 );
         PUSHBUTTONMOUSEOVER.setFontSize( 16 );
         PUSHBUTTONMOUSEOVER.setFaceName( "Lucida Console" );
         PUSHBUTTONMOUSEOVER.setBorderBottom( 2 );
         PUSHBUTTONMOUSEOVER.setBorderBrush( BRUSH12 );
         PUSHBUTTONMOUSEOVER.setBorderLeft( 2 );
         PUSHBUTTONMOUSEOVER.setBorderRight( 2 );
         PUSHBUTTONMOUSEOVER.setBorderTop( 2 );
         PUSHBUTTONMOUSEOVER.setCornerBottomLeft( 4 );
         PUSHBUTTONMOUSEOVER.setCornerBottomRight( 4 );
         PUSHBUTTONMOUSEOVER.setCornerTopLeft( 4 );
         PUSHBUTTONMOUSEOVER.setCornerTopRight( 4 );
         PUSHBUTTONMOUSEOVER.initialize();

         // -------------------------
         // -- Initialize #BRUSH12 --
         // -------------------------
         BRUSH12.setColor( "THEMEBORDER" );
         BRUSH12.initialize();

         // -------------------------
         // -- Initialize #BRUSH11 --
         // -------------------------
         BRUSH11.setColor( "THEMETEXT" );
         BRUSH11.initialize();

         // -------------------------
         // -- Initialize #BRUSH10 --
         // -------------------------
         BRUSH10.setColor( "THEME800" );
         BRUSH10.initialize();

         // -----------------------------------
         // -- Initialize #PUSHBUTTONFOCUSED --
         // -----------------------------------
         PUSHBUTTONFOCUSED.setBackgroundBrush( PUSHBUTTONFOCUSBACKGROUND );
         PUSHBUTTONFOCUSED.setBorderBrush( PUSHBUTTONFOCUSBORDER );
         PUSHBUTTONFOCUSED.initialize();

         // -------------------------------------------
         // -- Initialize #PUSHBUTTONFOCUSBACKGROUND --
         // -------------------------------------------
         PUSHBUTTONFOCUSBACKGROUND.setColor( "THEME200" );
         PUSHBUTTONFOCUSBACKGROUND.initialize();

         // ---------------------------------------
         // -- Initialize #PUSHBUTTONFOCUSBORDER --
         // ---------------------------------------
         PUSHBUTTONFOCUSBORDER.setColor( "THEME300" );
         PUSHBUTTONFOCUSBORDER.initialize();

         // -----------------------------------
         // -- Initialize #PUSHBUTTONPRESSED --
         // -----------------------------------
         PUSHBUTTONPRESSED.setBackgroundBrush( PUSHBUTTONPRESSEDBACKGROUND );
         PUSHBUTTONPRESSED.initialize();

         // ---------------------------------------------
         // -- Initialize #PUSHBUTTONPRESSEDBACKGROUND --
         // ---------------------------------------------
         PUSHBUTTONPRESSEDBACKGROUND.setColor( "THEME300" );
         PUSHBUTTONPRESSEDBACKGROUND.initialize();

         // ------------------------
         // -- Initialize #STYLE7 --
         // ------------------------
         STYLE7.setBorderBottom( 3 );
         STYLE7.setBorderBrush( BRUSH14 );
         STYLE7.setBorderLeft( 3 );
         STYLE7.setBorderRight( 3 );
         STYLE7.setBorderTop( 3 );
         STYLE7.setForegroundBrush( BRUSH13 );
         STYLE7.setCornerBottomLeft( 4 );
         STYLE7.setCornerBottomRight( 4 );
         STYLE7.setCornerTopLeft( 4 );
         STYLE7.setCornerTopRight( 4 );
         STYLE7.setFontSize( 14 );
         STYLE7.setCursor( "WAIT" );
         STYLE7.setBackgroundBrush( BACKGROUNDBRUSH4 );
         STYLE7.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH4 --
         // ----------------------------------
         BACKGROUNDBRUSH4.setImage( resource1 );
         BACKGROUNDBRUSH4.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH8 --
         // ----------------------------------
         BACKGROUNDBRUSH8.setSizing( "FITBOTH" );
         BACKGROUNDBRUSH8.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH7 --
         // ----------------------------------
         BACKGROUNDBRUSH7.setSizing( "FITBOTH" );
         BACKGROUNDBRUSH7.initialize();

         // -------------------------
         // -- Initialize #BRUSH13 --
         // -------------------------
         BRUSH13.setColor( "0:0:0" );
         BRUSH13.initialize();

         // -------------------------
         // -- Initialize #BRUSH14 --
         // -------------------------
         BRUSH14.setColor( "204:8:8" );
         BRUSH14.initialize();

         // ------------------------
         // -- Initialize #STYLE8 --
         // ------------------------
         STYLE8.setForegroundBrush( BRUSH17 );
         STYLE8.initialize();

         // -------------------------
         // -- Initialize #BRUSH17 --
         // -------------------------
         BRUSH17.setColor( "THEME300" );
         BRUSH17.initialize();

         // ------------------------
         // -- Initialize #STYLE9 --
         // ------------------------
         STYLE9.setBackgroundBrush( BACKGROUNDBRUSH1 );
         STYLE9.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH1 --
         // ----------------------------------
         BACKGROUNDBRUSH1.setImage( resource2 );
         BACKGROUNDBRUSH1.initialize();

         // -------------------------
         // -- Initialize #STYLE10 --
         // -------------------------
         STYLE10.setBackgroundBrush( BACKGROUNDBRUSH2 );
         STYLE10.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH2 --
         // ----------------------------------
         BACKGROUNDBRUSH2.setImage( resource2 );
         BACKGROUNDBRUSH2.initialize();

         // -------------------------
         // -- Initialize #STYLE11 --
         // -------------------------
         STYLE11.setBackgroundBrush( BACKGROUNDBRUSH3 );
         STYLE11.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH3 --
         // ----------------------------------
         BACKGROUNDBRUSH3.setImage( resource2 );
         BACKGROUNDBRUSH3.initialize();

         // -------------------------------
         // -- Initialize #TOOLBARBUTTON --
         // -------------------------------
         TOOLBARBUTTON.setMouseOverStyle( TOOLBARBUTTONMOUSEOVER );
         TOOLBARBUTTON.setFocusedStyle( TOOLBARBUTTONFOCUSED );
         TOOLBARBUTTON.setPressedStyle( TOOLBARBUTTONPRESSED );
         TOOLBARBUTTON.setStyle( STYLE6 );
         TOOLBARBUTTON.initialize();

         // ----------------------------------------
         // -- Initialize #TOOLBARBUTTONMOUSEOVER --
         // ----------------------------------------
         TOOLBARBUTTONMOUSEOVER.setBackgroundBrush( TOOLBARBUTTONMOUSEOVERBACKGROUND );
         TOOLBARBUTTONMOUSEOVER.initialize();

         // --------------------------------------------------
         // -- Initialize #TOOLBARBUTTONMOUSEOVERBACKGROUND --
         // --------------------------------------------------
         TOOLBARBUTTONMOUSEOVERBACKGROUND.setColor( "THEME200" );
         TOOLBARBUTTONMOUSEOVERBACKGROUND.initialize();

         // --------------------------------------
         // -- Initialize #TOOLBARBUTTONFOCUSED --
         // --------------------------------------
         TOOLBARBUTTONFOCUSED.setBackgroundBrush( TOOLBARBUTTONFOCUSBACKGROUND );
         TOOLBARBUTTONFOCUSED.setBorderBrush( TOOLBARBUTTONFOCUSBORDER );
         TOOLBARBUTTONFOCUSED.initialize();

         // ----------------------------------------------
         // -- Initialize #TOOLBARBUTTONFOCUSBACKGROUND --
         // ----------------------------------------------
         TOOLBARBUTTONFOCUSBACKGROUND.setColor( "THEME200" );
         TOOLBARBUTTONFOCUSBACKGROUND.initialize();

         // ------------------------------------------
         // -- Initialize #TOOLBARBUTTONFOCUSBORDER --
         // ------------------------------------------
         TOOLBARBUTTONFOCUSBORDER.setColor( "THEME300" );
         TOOLBARBUTTONFOCUSBORDER.initialize();

         // --------------------------------------
         // -- Initialize #TOOLBARBUTTONPRESSED --
         // --------------------------------------
         TOOLBARBUTTONPRESSED.setBackgroundBrush( TOOLBARBUTTONPRESSEDBACKGROUND );
         TOOLBARBUTTONPRESSED.initialize();

         // ------------------------------------------------
         // -- Initialize #TOOLBARBUTTONPRESSEDBACKGROUND --
         // ------------------------------------------------
         TOOLBARBUTTONPRESSEDBACKGROUND.setColor( "THEME300" );
         TOOLBARBUTTONPRESSEDBACKGROUND.initialize();

         // ------------------------
         // -- Initialize #STYLE6 --
         // ------------------------
         STYLE6.setBorderBottom( 1 );
         STYLE6.setBorderBrush( BRUSH9 );
         STYLE6.setBorderLeft( 1 );
         STYLE6.setBorderRight( 1 );
         STYLE6.setBorderTop( 1 );
         STYLE6.initialize();

         // ------------------------
         // -- Initialize #BRUSH9 --
         // ------------------------
         BRUSH9.setColor( "THEME900" );
         BRUSH9.initialize();

         // --------------------------
         // -- Initialize #MENUITEM --
         // --------------------------
         MENUITEM.setMouseOverStyle( MENUITEMMOUSEOVER );
         MENUITEM.initialize();

         // -----------------------------------
         // -- Initialize #MENUITEMMOUSEOVER --
         // -----------------------------------
         MENUITEMMOUSEOVER.setBackgroundBrush( MENUITEMMOUSEBACKGROUND );
         MENUITEMMOUSEOVER.initialize();

         // -----------------------------------------
         // -- Initialize #MENUITEMMOUSEBACKGROUND --
         // -----------------------------------------
         MENUITEMMOUSEBACKGROUND.setColor( "THEME200" );
         MENUITEMMOUSEBACKGROUND.initialize();

         // -----------------------
         // -- Initialize #TITLE --
         // -----------------------
         TITLE.setStyle( TITLESTYLE );
         TITLE.initialize();

         // ----------------------------
         // -- Initialize #TITLESTYLE --
         // ----------------------------
         TITLESTYLE.setForegroundBrush( TITLESTYLEFOREGROUND );
         TITLESTYLE.setFontSize( 250 );
         TITLESTYLE.setFontUnits( "PERCENT" );
         TITLESTYLE.initialize();

         // --------------------------------------
         // -- Initialize #TITLESTYLEFOREGROUND --
         // --------------------------------------
         TITLESTYLEFOREGROUND.setColor( "THEME900" );
         TITLESTYLEFOREGROUND.initialize();

         // --------------------------
         // -- Initialize #HEADING1 --
         // --------------------------
         HEADING1.setStyle( HEADING1STYLE );
         HEADING1.initialize();

         // -------------------------------
         // -- Initialize #HEADING1STYLE --
         // -------------------------------
         HEADING1STYLE.setForegroundBrush( HEADING1FOREGROUND );
         HEADING1STYLE.setFontSize( 160 );
         HEADING1STYLE.setFontUnits( "PERCENT" );
         HEADING1STYLE.initialize();

         // ------------------------------------
         // -- Initialize #HEADING1FOREGROUND --
         // ------------------------------------
         HEADING1FOREGROUND.setColor( "THEME900" );
         HEADING1FOREGROUND.initialize();

         // --------------------------
         // -- Initialize #HEADING2 --
         // --------------------------
         HEADING2.setStyle( HEADING2STYLE );
         HEADING2.initialize();

         // -------------------------------
         // -- Initialize #HEADING2STYLE --
         // -------------------------------
         HEADING2STYLE.setForegroundBrush( HEADING2FOREGROUND );
         HEADING2STYLE.setFontSize( 140 );
         HEADING2STYLE.setFontUnits( "PERCENT" );
         HEADING2STYLE.initialize();

         // ------------------------------------
         // -- Initialize #HEADING2FOREGROUND --
         // ------------------------------------
         HEADING2FOREGROUND.setColor( "THEME900" );
         HEADING2FOREGROUND.initialize();

         // --------------------------
         // -- Initialize #HEADING3 --
         // --------------------------
         HEADING3.setStyle( HEADING3STYLE );
         HEADING3.initialize();

         // -------------------------------
         // -- Initialize #HEADING3STYLE --
         // -------------------------------
         HEADING3STYLE.setForegroundBrush( HEADING3FOREGROUND );
         HEADING3STYLE.setFontSize( 120 );
         HEADING3STYLE.setFontUnits( "PERCENT" );
         HEADING3STYLE.initialize();

         // ------------------------------------
         // -- Initialize #HEADING3FOREGROUND --
         // ------------------------------------
         HEADING3FOREGROUND.setColor( "THEME900" );
         HEADING3FOREGROUND.initialize();

         // ------------------------
         // -- Initialize #STRONG --
         // ------------------------
         STRONG.setStyle( STRONGSTYLE );
         STRONG.initialize();

         // -----------------------------
         // -- Initialize #STRONGSTYLE --
         // -----------------------------
         STRONGSTYLE.setBold( true );
         STRONGSTYLE.initialize();

         // --------------------------
         // -- Initialize #EMPHASIS --
         // --------------------------
         EMPHASIS.setStyle( EMPHASISSTYLE );
         EMPHASIS.initialize();

         // -------------------------------
         // -- Initialize #EMPHASISSTYLE --
         // -------------------------------
         EMPHASISSTYLE.setItalic( true );
         EMPHASISSTYLE.setForegroundBrush( BRUSH7 );
         EMPHASISSTYLE.initialize();

         // ------------------------
         // -- Initialize #BRUSH7 --
         // ------------------------
         BRUSH7.setColor( "THEME900" );
         BRUSH7.initialize();

         // ----------------------------
         // -- Initialize #LIGHTTITLE --
         // ----------------------------
         LIGHTTITLE.setStyle( DARKTITLESTYLE );
         LIGHTTITLE.initialize();

         // ---------------------------------
         // -- Initialize #LIGHTTITLESTYLE --
         // ---------------------------------
         LIGHTTITLESTYLE.setBackgroundBrush( LIGHTTITLEBACKGROUND );
         LIGHTTITLESTYLE.setForegroundBrush( LIGHTTITLEFOREGROUND );
         LIGHTTITLESTYLE.initialize();

         // --------------------------------------
         // -- Initialize #LIGHTTITLEBACKGROUND --
         // --------------------------------------
         LIGHTTITLEBACKGROUND.setColor( "THEME300" );
         LIGHTTITLEBACKGROUND.initialize();

         // --------------------------------------
         // -- Initialize #LIGHTTITLEFOREGROUND --
         // --------------------------------------
         LIGHTTITLEFOREGROUND.setColor( "THEME700" );
         LIGHTTITLEFOREGROUND.initialize();

         // -----------------------------
         // -- Initialize #MEDIUMTITLE --
         // -----------------------------
         MEDIUMTITLE.setStyle( DARKTITLESTYLE );
         MEDIUMTITLE.initialize();

         // ----------------------------------
         // -- Initialize #MEDIUMTITLESTYLE --
         // ----------------------------------
         MEDIUMTITLESTYLE.setForegroundBrush( MEDIUMTITLEFOREGROUND );
         MEDIUMTITLESTYLE.setBackgroundBrush( MEDIUMTITLEBACKGROUND );
         MEDIUMTITLESTYLE.initialize();

         // ---------------------------------------
         // -- Initialize #MEDIUMTITLEBACKGROUND --
         // ---------------------------------------
         MEDIUMTITLEBACKGROUND.setColor( "THEME500" );
         MEDIUMTITLEBACKGROUND.initialize();

         // ---------------------------------------
         // -- Initialize #MEDIUMTITLEFOREGROUND --
         // ---------------------------------------
         MEDIUMTITLEFOREGROUND.setColor( "WHITE" );
         MEDIUMTITLEFOREGROUND.initialize();

         // ---------------------------
         // -- Initialize #DARKTITLE --
         // ---------------------------
         DARKTITLE.setStyle( DARKTITLESTYLE );
         DARKTITLE.initialize();

         // --------------------------------
         // -- Initialize #DARKTITLESTYLE --
         // --------------------------------
         DARKTITLESTYLE.setBackgroundBrush( DARKTITLEBACKGROUND );
         DARKTITLESTYLE.setForegroundBrush( BRUSH1 );
         DARKTITLESTYLE.setFontSize( 26 );
         DARKTITLESTYLE.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEMETEXT" );
         BRUSH1.initialize();

         // -------------------------------------
         // -- Initialize #DARKTITLEBACKGROUND --
         // -------------------------------------
         DARKTITLEBACKGROUND.setColor( "0:0:0" );
         DARKTITLEBACKGROUND.initialize();

         // --------------------------------
         // -- Initialize #MECHBACKGROUND --
         // --------------------------------
         MECHBACKGROUND.setStyle( BACKGROUND );
         MECHBACKGROUND.initialize();

         // ----------------------------
         // -- Initialize #BACKGROUND --
         // ----------------------------
         BACKGROUND.setBackgroundBrush( RADIALBRUSH1 );
         BACKGROUND.initialize();

         // ------------------------------
         // -- Initialize #RADIALBRUSH1 --
         // ------------------------------
         RADIALBRUSH1.setColors( BRUSHCOLORS2 );
         RADIALBRUSH1.setRadiusLeft( 100 );
         RADIALBRUSH1.setCenterLeft( 100 );
         RADIALBRUSH1.setOriginLeft( 100 );
         RADIALBRUSH1.setCenterTop( 100 );
         RADIALBRUSH1.setOriginTop( 100 );
         RADIALBRUSH1.setRadiusTop( 100 );
         RADIALBRUSH1.initialize();

         // ------------------------------
         // -- Initialize #BRUSHCOLORS2 --
         // ------------------------------
         BRUSHCOLORS2.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR3 --
         // -----------------------------
         BRUSHCOLOR3.setColor( "255:194:12" );
         BRUSHCOLOR3.setParent( BRUSHCOLORS2 );
         BRUSHCOLOR3.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR4 --
         // -----------------------------
         BRUSHCOLOR4.setAt( 50 );
         BRUSHCOLOR4.setColor( "255:144:14" );
         BRUSHCOLOR4.setParent( BRUSHCOLORS2 );
         BRUSHCOLOR4.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR1 --
         // -----------------------------
         BRUSHCOLOR1.setAt( 100 );
         BRUSHCOLOR1.setColor( "0:0:0" );
         BRUSHCOLOR1.setParent( BRUSHCOLORS2 );
         BRUSHCOLOR1.initialize();

         // -----------------------------------
         // -- Initialize #MECHBUTTONRESTING --
         // -----------------------------------
         MECHBUTTONRESTING.setBackgroundBrush( BACKGROUNDBRUSH6 );
         MECHBUTTONRESTING.setFontSize( 14 );
         MECHBUTTONRESTING.setBorderBottom( 1 );
         MECHBUTTONRESTING.setBorderLeft( 1 );
         MECHBUTTONRESTING.setBorderRight( 1 );
         MECHBUTTONRESTING.setBorderTop( 1 );
         MECHBUTTONRESTING.setCornerBottomLeft( 4 );
         MECHBUTTONRESTING.setCornerBottomRight( 4 );
         MECHBUTTONRESTING.setCornerTopLeft( 4 );
         MECHBUTTONRESTING.setCornerTopRight( 4 );
         MECHBUTTONRESTING.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH6 --
         // ----------------------------------
         BACKGROUNDBRUSH6.setImage( resource2 );
         BACKGROUNDBRUSH6.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDBRUSH --
         // ---------------------------------
         BACKGROUNDBRUSH.setImage( resource2 );
         BACKGROUNDBRUSH.initialize();

         // -----------------------------------
         // -- Initialize #MECHBUTTONPRESSED --
         // -----------------------------------
         MECHBUTTONPRESSED.setBackgroundBrush( BACKGROUNDBRUSH5 );
         MECHBUTTONPRESSED.setFontSize( 16 );
         MECHBUTTONPRESSED.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH5 --
         // ----------------------------------
         BACKGROUNDBRUSH5.setImage( resource2 );
         BACKGROUNDBRUSH5.initialize();

         // ------------------------
         // -- Initialize #LABELS --
         // ------------------------
         LABELS.setStyle( STYLE12 );
         LABELS.initialize();

         // -------------------------
         // -- Initialize #STYLE12 --
         // -------------------------
         STYLE12.setBackgroundBrush( BRUSH15 );
         STYLE12.setForegroundBrush( BRUSH18 );
         STYLE12.setFontSize( 10 );
         STYLE12.initialize();

         // -------------------------
         // -- Initialize #BRUSH18 --
         // -------------------------
         BRUSH18.setColor( "THEMETEXT" );
         BRUSH18.initialize();

         // -------------------------
         // -- Initialize #BRUSH15 --
         // -------------------------
         BRUSH15.setColor( "0:0:0" );
         BRUSH15.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme900Color( "33:33:33" );
         this.setStyle( STYLE1 );
         this.setThemeTextColor( "255:201:17" );
         this.setThemeBorderColor( "255:221:35" );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_THM", "PRIM_VS.Style", "PRIM_THM.DrawStyle", "PRIM_VS.SolidBrush", "PRIM_VS.DropShadow", "PRIM_VS.ImageBrush", "PRIM_VS.RadialBrush", "PRIM_VS.BrushColors", "PRIM_VS.BrushColor" ]
});

//# sourceURL=mechtheme.js
