// ------------------------
// -- Web Page: MECHPAGE --
// ------------------------
LANSA.addComponent(
{
   id: "MECHPAGE", 
   nm: "MechPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Main Mech Web Page", 
   tl: 14000100
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   if ( ( Lansa.getCurrentLanguage() == "FRA" ) || ( Lansa.getCurrentLanguage() == "JPN" ) )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

   // ---------------
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDecimal( "0.96" ), 
      const2 = Lansa.createDecimal( "1.04" ), 
      const3 = Lansa.createDecimal( "1.59" ), 
      const4 = Lansa.createDecimal( "0.23" ), 
      const5 = Lansa.createDecimal( "1.77" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      MUSER:
      {
         nm: "MUSER",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech User",
         h1: "Mech",
         h2: "User",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech User",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      MEMAIL:
      {
         nm: "MEMAIL",
         ft: "VC",
         ln: 512,
         dc: 0,
         lb: "User  Email Add",
         h1: "User",
         h2: "Email",
         h3: "Address",
         de: "User  Email Address",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      MPASSWRD:
      {
         nm: "MPASSWRD",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Password",
         h1: "Mech",
         h2: "Password",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Password",
         dv: "",
         ia: [ "FE", "LC", "ND" ]
      },
      MCBILL:
      {
         nm: "MCBILL",
         ft: "P",
         ln: 15,
         dc: 0,
         ec: "1",
         lb: "Current CBill A",
         h1: "Current",
         h2: "CBill",
         h3: "Amount",
         de: "Current CBill Amount",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MRANK:
      {
         nm: "MRANK",
         ft: "VC",
         ln: 512,
         dc: 0,
         lb: "Current User Ra",
         h1: "Current",
         h2: "User",
         h3: "Rank",
         de: "Current User Rank",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      MXP:
      {
         nm: "MXP",
         ft: "P",
         ln: 15,
         dc: 0,
         ec: "1",
         lb: "Current Experie",
         h1: "Current",
         h2: "Experience",
         h3: "Points",
         de: "Current Experience Points",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MADMIN:
      {
         nm: "MADMIN",
         ft: "A",
         ln: 1,
         dc: 0,
         lb: "Admin User",
         h1: "Admin",
         h2: "User",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Admin User",
         dv: "",
         ia: [ "FE" ]
      },
      MNAME:
      {
         nm: "MNAME",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Name",
         h1: "Mech",
         h2: "Name",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Name",
         dv: "",
         ia: [ "FE" ]
      },
      MCLASS:
      {
         nm: "MCLASS",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Mech Class",
         h1: "Mech",
         h2: "Class",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Class",
         dv: "",
         ia: [ "FE" ]
      },
      MSPEED:
      {
         nm: "MSPEED",
         ft: "P",
         ln: 5,
         dc: 0,
         lb: "Mech Speed",
         h1: "Mech",
         h2: "Speed",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Speed",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MDESC:
      {
         nm: "MDESC",
         ft: "VC",
         ln: 2048,
         dc: 0,
         lb: "Mech Descriptio",
         h1: "Mech",
         h2: "Description",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Description",
         dv: "",
         ia: [ "FE" ]
      },
      MHEAT:
      {
         nm: "MHEAT",
         ft: "P",
         ln: 3,
         dc: 0,
         lb: "Mech Heat Sinks",
         h1: "Mech",
         h2: "Heat",
         h3: "Sinks",
         de: "Mech Heat Sinks",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MENERGYW:
      {
         nm: "MENERGYW",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Energy Wea",
         h1: "Mech",
         h2: "Energy",
         h3: "Weapon",
         de: "Mech Energy Weapon",
         dv: "",
         ia: [ "FE" ]
      },
      MENERGYWQ:
      {
         nm: "MENERGYWQ",
         ft: "P",
         ln: 1,
         dc: 0,
         lb: "Mech Energy Wea",
         h1: "Mech",
         h2: "Energy",
         h3: "Weapon",
         de: "Mech Energy Weapon Quantitiy",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MKINETICW:
      {
         nm: "MKINETICW",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Kinetic We",
         h1: "Mech",
         h2: "Kinetic",
         h3: "Weapon",
         de: "Mech Kinetic Weapon",
         dv: "",
         ia: [ "FE" ]
      },
      MKINETWQ:
      {
         nm: "MKINETWQ",
         ft: "P",
         ln: 1,
         dc: 0,
         lb: "Mech Kinetric W",
         h1: "Mech",
         h2: "Kinetric",
         h3: "Weapon",
         de: "Mech Kinetric Weapon Quantitiy",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MRANGEDW:
      {
         nm: "MRANGEDW",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Ranged Wea",
         h1: "Mech",
         h2: "Ranged",
         h3: "Weapon",
         de: "Mech Ranged Weapon",
         dv: "",
         ia: [ "FE" ]
      },
      MRANGEDWQ:
      {
         nm: "MRANGEDWQ",
         ft: "P",
         ln: 1,
         dc: 0,
         lb: "Mech Ranged Wea",
         h1: "Mech",
         h2: "Ranged",
         h3: "Weapon",
         de: "Mech Ranged Weapon Quantity",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MJUMPJETS:
      {
         nm: "MJUMPJETS",
         ft: "A",
         ln: 3,
         dc: 0,
         lb: "Mech JumpJets",
         h1: "Mech",
         h2: "JumpJets",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech JumpJets",
         dv: "",
         ia: [ "FE" ]
      },
      MEQUIPTME:
      {
         nm: "MEQUIPTME",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Equiptment",
         h1: "Mech",
         h2: "Equiptment",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Equiptment",
         dv: "",
         ia: [ "FE" ]
      },
      MHEALTH:
      {
         nm: "MHEALTH",
         ft: "P",
         ln: 6,
         dc: 0,
         lb: "Mech Health",
         h1: "Mech",
         h2: "Health",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Health",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MIMAGE:
      {
         nm: "MIMAGE",
         ft: "BL",
         ln: 0,
         dc: 0,
         lb: "mech Image BLOB",
         h1: "mech",
         h2: "Image",
         h3: "BLOB",
         de: "mech Image BLOB",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "LC" ]
      },
      MHEATTOL:
      {
         nm: "MHEATTOL",
         ft: "P",
         ln: 8,
         dc: 0,
         lb: "Mech Heat Toler",
         h1: "Mech",
         h2: "Heat",
         h3: "Tolerance",
         de: "Mech Heat Tolerance",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MDAMAGE:
      {
         nm: "MDAMAGE",
         ft: "P",
         ln: 12,
         dc: 0,
         ec: "1",
         lb: "Mech Total Dama",
         h1: "Mech",
         h2: "Total",
         h3: "Damage",
         de: "Mech Total Damage",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      MOWNER:
      {
         nm: "MOWNER",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: "Mech Owner",
         h1: "Mech",
         h2: "Owner",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Mech Owner",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      MAVATAR:
      {
         nm: "MAVATAR",
         ft: "BL",
         ln: 0,
         dc: 0,
         lb: "Users Avatar",
         h1: "Users",
         h2: "Avatar",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Users Avatar",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "LC" ]
      },
      MRANKVAL:
      {
         nm: "MRANKVAL",
         ft: "P",
         ln: 3,
         dc: 0,
         ec: "1",
         lb: "Rank number",
         h1: "Rank",
         h2: "number",
         h3: { "ENG": " ", "FRA": " ", "JPN": "" }[ curLanguage ],
         de: "Rank number",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      RESPONSE:
      {
         nm: "RESPONSE",
         ft: "VC",
         ln: 256,
         dc: 0,
         lb: "response",
         h1: "response",
         h2: "",
         h3: "",
         de: "response",
         dv: ""
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
      fd: Fields, 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "MECHPAGE", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Fontsize(72) Foregroundbrush(#LinearBrush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.LinearBrush) Name(#LinearBrush1) Colors(#BrushColors1)
         //
         var LINEARBRUSH1 = this.createReference( "LINEARBRUSH1", "PRIM_VS", "LinearBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColors) Name(#BrushColors1)
         //
         var BRUSHCOLORS1 = this.createReference( "BRUSHCOLORS1", "PRIM_VS", "BrushColors" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor1) Color(255:194:12) Parent(#BrushColors1) Opacity(25)
         //
         var BRUSHCOLOR1 = this.createReference( "BRUSHCOLOR1", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor2) At(25) Color(255:144:14) Parent(#BrushColors1) Opacity(75)
         //
         var BRUSHCOLOR2 = this.createReference( "BRUSHCOLOR2", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.BrushColor) Name(#BrushColor3) At(75) Color(204:8:8) Parent(#BrushColors1)
         //
         var BRUSHCOLOR3 = this.createReference( "BRUSHCOLOR3", "PRIM_VS", "BrushColor" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Foregroundbrush2) Tile(Tile)
         //
         var FOREGROUNDBRUSH2 = this.createReference( "FOREGROUNDBRUSH2", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Foregroundbrush1) Sizing(FitBoth)
         //
         var FOREGROUNDBRUSH1 = this.createReference( "FOREGROUNDBRUSH1", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Cursor(Hand) Fontsize(14)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3) Cursor(Hand)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) Cursor(Hand)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style5) Fontsize(36)
         //
         var STYLE5 = this.createReference( "STYLE5", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style6) Fontsize(12)
         //
         var STYLE6 = this.createReference( "STYLE6", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style7) Fontsize(36)
         //
         var STYLE7 = this.createReference( "STYLE7", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style8) Fontsize(36) Foregroundbrush(#Brush6)
         //
         var STYLE8 = this.createReference( "STYLE8", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush6) Color(ThemeText)
         //
         var BRUSH6 = this.createReference( "BRUSH6", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style13) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Borderbrush(#Brush5)
         //
         var STYLE13 = this.createReference( "STYLE13", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush5) Color(255:194:12)
         //
         var BRUSH5 = this.createReference( "BRUSH5", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style9) Foregroundbrush(#Brush1)
         //
         var STYLE9 = this.createReference( "STYLE9", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(ThemeText)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style10) Foregroundbrush(#Brush2)
         //
         var STYLE10 = this.createReference( "STYLE10", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(ThemeText)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style11) Foregroundbrush(#Brush3)
         //
         var STYLE11 = this.createReference( "STYLE11", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush3) Color(ThemeText)
         //
         var BRUSH3 = this.createReference( "BRUSH3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style12) Foregroundbrush(#Brush4)
         //
         var STYLE12 = this.createReference( "STYLE12", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush4) Color(ThemeText)
         //
         var BRUSH4 = this.createReference( "BRUSH4", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style14) Borderbottom(4) Borderbrush(#Brush7) Borderleft(4) Borderright(4) Bordertop(4) Cursor(Hand)
         //
         var STYLE14 = this.createReference( "STYLE14", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush7) Color(255:194:12)
         //
         var BRUSH7 = this.createReference( "BRUSH7", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style15)
         //
         var STYLE15 = this.createReference( "STYLE15", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style16) Borderbottom(6) Borderleft(6) Borderright(6) Bordertop(6) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4) Cursor(Hand)
         //
         var STYLE16 = this.createReference( "STYLE16", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style17) Fontsize(28) Bold(True)
         //
         var STYLE17 = this.createReference( "STYLE17", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style18) Borderbottom(6) Borderleft(6) Borderright(6) Bordertop(6) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4) Cursor(Hand)
         //
         var STYLE18 = this.createReference( "STYLE18", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style19) Fontsize(28) Bold(True)
         //
         var STYLE19 = this.createReference( "STYLE19", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style20) Fontsize(36) Cursor(Hand)
         //
         var STYLE20 = this.createReference( "STYLE20", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style21) Fontsize(36) Cursor(Hand)
         //
         var STYLE21 = this.createReference( "STYLE21", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style22) Foregroundbrush(#Brush8) Fontsize(24)
         //
         var STYLE22 = this.createReference( "STYLE22", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush8) Color(204:8:8)
         //
         var BRUSH8 = this.createReference( "BRUSH8", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style23) Foregroundbrush(#Brush9) Fontsize(24)
         //
         var STYLE23 = this.createReference( "STYLE23", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush9) Color(204:8:8)
         //
         var BRUSH9 = this.createReference( "BRUSH9", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style24) Borderbottom(0) Borderleft(0) Borderright(0) Bordertop(0) Cornerbottomleft(0) Cornerbottomright(0) Cornertopleft(0) Cornertopright(0)
         //
         var STYLE24 = this.createReference( "STYLE24", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LoginLayout)
         //
         var LOGINLAYOUT = this.createReference( "LOGINLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) Displayposition(1) Parent(#LoginLayout)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(1) Parent(#LoginLayout)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row10) Displayposition(2) Parent(#LoginLayout)
         //
         var ROW10 = this.createReference( "ROW10", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row11) Displayposition(3) Parent(#LoginLayout)
         //
         var ROW11 = this.createReference( "ROW11", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FIREItem2) Manage(#FIRE) Parent(#LoginLayout) Row(#Row9) Column(#Column7) Rowspan(4)
         //
         var FIREITEM2 = this.createReference( "FIREITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginLBLItem1) Manage(#LoginLBL) Parent(#LoginLayout) Row(#Row9) Column(#Column7) Flow(Down)
         //
         var LOGINLBLITEM1 = this.createReference( "LOGINLBLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MUSERItem2) Manage(#MUSER) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Flow(Down) Alignment(TopCenter) Margintop(5)
         //
         var MUSERITEM2 = this.createReference( "MUSERITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#UsernameResetItem2) Manage(#UsernameReset) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var USERNAMERESETITEM2 = this.createReference( "USERNAMERESETITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#PasswordResetItem2) Manage(#PasswordReset) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var PASSWORDRESETITEM2 = this.createReference( "PASSWORDRESETITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginCMDItem1) Manage(#LoginCMD) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Alignment(TopCenter) Flow(Down) Margintop(30)
         //
         var LOGINCMDITEM1 = this.createReference( "LOGINCMDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column7) Manage(#BlastDoorPNL) Parent(#LoginLayout) Row(#Row11)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label1Item1) Manage(#RegisterLBL) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LABEL1ITEM1 = this.createReference( "LABEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MPASSWRDItem1) Manage(#MPASSWRD) Parent(#LoginLayout) Row(#Row10) Sizing(None) Column(#Column7) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var MPASSWRDITEM1 = this.createReference( "MPASSWRDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#FullPage)
         //
         var FULLPAGE = this.createReference( "FULLPAGE", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#FullPage)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#FullPage)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LOGINPNLItem1) Manage(#LOGINPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var LOGINPNLITEM1 = this.createReference( "LOGINPNLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#BlastDoorPNLItem1) Manage(#BlastDoorPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var BLASTDOORPNLITEM1 = this.createReference( "BLASTDOORPNLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Sound1Item1) Manage(#DoorSound) Parent(#FullPage) Row(#Row1) Sizing(None) Column(#Column1) Alignment(TopLeft)
         //
         var SOUND1ITEM1 = this.createReference( "SOUND1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MusicItem1) Manage(#Music) Parent(#FullPage) Row(#Row1) Sizing(None) Column(#Column1) Alignment(TopLeft)
         //
         var MUSICITEM1 = this.createReference( "MUSICITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Manage(#RESETREGISTERPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#SVRMSGItem1) Manage(#SVRMSG) Parent(#FullPage) Row(#Row1) Sizing(None) Column(#Column1)
         //
         var SVRMSGITEM1 = this.createReference( "SVRMSGITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FGTUSRPNLItem1) Manage(#FGTUSRPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var FGTUSRPNLITEM1 = this.createReference( "FGTUSRPNLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FGTPSWPNLItem1) Manage(#FGTPSWPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var FGTPSWPNLITEM1 = this.createReference( "FGTPSWPNLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item2) Manage(#MainPNL) Parent(#FullPage) Row(#Row1) Column(#Column1)
         //
         var PANEL1ITEM2 = this.createReference( "PANEL1ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginSoundItem1) Manage(#LoginSound) Parent(#FullPage) Row(#Row1) Sizing(None) Column(#Column1) Alignment(TopLeft)
         //
         var LOGINSOUNDITEM1 = this.createReference( "LOGINSOUNDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Sound1Item2) Alignment(TopLeft) Column(#Column1) Manage(#LOGOFFSND) Parent(#FullPage) Row(#Row1) Sizing(None)
         //
         var SOUND1ITEM2 = this.createReference( "SOUND1ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#BlastDoorlayout)
         //
         var BLASTDOORLAYOUT = this.createReference( "BLASTDOORLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(1) Parent(#BlastDoorlayout)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#BlastDoorlayout)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#BlastdoorItem1) Manage(#Blastdoor) Parent(#BlastDoorlayout) Row(#Row2) Column(#Column2)
         //
         var BLASTDOORITEM1 = this.createReference( "BLASTDOORITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#RegisterLBL) Parent(#BlastDoorlayout) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Column(#Column2) Manage(#RESETREGISTERPNL) Parent(#BlastDoorlayout) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#REGLAYOUT)
         //
         var REGLAYOUT = this.createReference( "REGLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(1) Parent(#REGLAYOUT)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#REGLAYOUT)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(2) Parent(#REGLAYOUT)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(3) Parent(#REGLAYOUT)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MUSER1Item1) Manage(#REGUSER) Parent(#REGLAYOUT) Row(#Row4) Sizing(None) Column(#Column4) Flow(Down) Margintop(10) Alignment(TopCenter)
         //
         var MUSER1ITEM1 = this.createReference( "MUSER1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MEmailItem1) Manage(#MEmail) Parent(#REGLAYOUT) Row(#Row4) Sizing(None) Column(#Column4) Flow(Down) Margintop(10) Alignment(TopCenter)
         //
         var MEMAILITEM1 = this.createReference( "MEMAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#Column4) Flow(Down) Manage(#REGPASSWORD) Parent(#REGLAYOUT) Row(#Row4) Sizing(None) Margintop(10) Alignment(TopCenter)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Column(#Column4) Flow(Down) Manage(#CNFMPASS) Parent(#REGLAYOUT) Row(#Row4) Sizing(None) Margintop(10) Alignment(TopCenter)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Column(#Column4) Flow(Right) Manage(#REGOKCMD) Parent(#REGLAYOUT) Row(#Row5) Sizing(None) Marginleft(-70)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Column(#Column4) Flow(Right) Manage(#REGCNLCMD) Parent(#REGLAYOUT) Row(#Row5) Sizing(None) Marginleft(50)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(TopCenter) Column(#Column4) Flow(Down) Manage(#MPASSWRD) Parent(#REGLAYOUT) Row(#Row4) Sizing(None)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Column(#Column4) Manage(#RGRTITLE) Parent(#REGLAYOUT) Row(#Row3) Sizing(FitToWidth)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Column(#Column4) Manage(#REGBKIMG) Parent(#REGLAYOUT) Row(#Row3) Rowspan(3)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Column(#Column4) Manage(#MSGLBL) Parent(#REGLAYOUT) Row(#Row4) Sizing(None)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column4) Manage(#FGTUSRPNL) Parent(#REGLAYOUT) Row(#Row4) Sizing(None)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem13) Column(#Column4) Manage(#FGTPSWPNL) Parent(#REGLAYOUT) Row(#Row4) Sizing(None)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#MSGLayout)
         //
         var MSGLAYOUT = this.createReference( "MSGLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#MSGLayout)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(1) Parent(#MSGLayout)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MSGLBLItem1) Manage(#MSGLBL) Parent(#MSGLayout) Row(#Row6) Column(#Column3)
         //
         var MSGLBLITEM1 = this.createReference( "MSGLBLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#FGTUSRL)
         //
         var FGTUSRL = this.createReference( "FGTUSRL", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#FGTUSRL)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(1) Parent(#FGTUSRL)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(2) Parent(#FGTUSRL)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row12) Displayposition(3) Parent(#FGTUSRL)
         //
         var ROW12 = this.createReference( "ROW12", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FGTUSRLBLTItem1) Manage(#FGTUSRLBLT) Parent(#FGTUSRL) Row(#Row7) Column(#Column5) Sizing(None) Flow(Down)
         //
         var FGTUSRLBLTITEM1 = this.createReference( "FGTUSRLBLTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FGTUSRCMDItem1) Manage(#FGTUSRCMD) Parent(#FGTUSRL) Row(#Row12) Sizing(None) Column(#Column5) Flow(Right) Marginleft(-70)
         //
         var FGTUSRCMDITEM1 = this.createReference( "FGTUSRCMDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MEmail1Item1) Manage(#FGTEMAIL) Parent(#FGTUSRL) Row(#Row8) Sizing(None) Column(#Column5) Flow(Down)
         //
         var MEMAIL1ITEM1 = this.createReference( "MEMAIL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Button1Item1) Manage(#FGTUSRCNL) Parent(#FGTUSRL) Row(#Row12) Sizing(None) Column(#Column5) Flow(Right) Marginleft(50)
         //
         var BUTTON1ITEM1 = this.createReference( "BUTTON1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem21) Column(#Column5) Manage(#FGTUSRBKGND) Parent(#FGTUSRL) Row(#Row7) Rowspan(3)
         //
         var LAYOUTITEM21 = this.createReference( "LAYOUTITEM21", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem22) Column(#Column5) Manage(#LoginSound) Parent(#FGTUSRL) Row(#Row7) Sizing(None) Alignment(TopLeft)
         //
         var LAYOUTITEM22 = this.createReference( "LAYOUTITEM22", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#FGTPSWL)
         //
         var FGTPSWL = this.createReference( "FGTPSWL", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(1) Parent(#FGTPSWL)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row13) Displayposition(1) Parent(#FGTPSWL)
         //
         var ROW13 = this.createReference( "ROW13", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row14) Displayposition(2) Parent(#FGTPSWL)
         //
         var ROW14 = this.createReference( "ROW14", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row15) Displayposition(3) Parent(#FGTPSWL)
         //
         var ROW15 = this.createReference( "ROW15", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem14) Alignment(TopLeft) Column(#Column6) Flow(Down) Manage(#FGTUSRLBLT) Parent(#FGTPSWL) Row(#Row14) Sizing(None)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem15) Alignment(TopLeft) Column(#Column6) Flow(Down) Manage(#FGTUSRCMD) Parent(#FGTPSWL) Row(#Row14) Sizing(None)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem16) Column(#Column6) Flow(Down) Manage(#FGTPSWLBLT) Parent(#FGTPSWL) Row(#Row13) Sizing(FitToWidth)
         //
         var LAYOUTITEM16 = this.createReference( "LAYOUTITEM16", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem17) Column(#Column6) Flow(Right) Manage(#FGTPSWCMD) Parent(#FGTPSWL) Row(#Row15) Sizing(None) Marginright(50) Marginleft(-80)
         //
         var LAYOUTITEM17 = this.createReference( "LAYOUTITEM17", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem18) Alignment(TopLeft) Column(#Column6) Flow(Down) Manage(#FGTEMAIL) Parent(#FGTPSWL) Row(#Row14) Sizing(None)
         //
         var LAYOUTITEM18 = this.createReference( "LAYOUTITEM18", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem19) Alignment(TopLeft) Column(#Column6) Flow(Down) Manage(#FGTUSRCNL) Parent(#FGTPSWL) Row(#Row14) Sizing(None)
         //
         var LAYOUTITEM19 = this.createReference( "LAYOUTITEM19", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem20) Column(#Column6) Manage(#MainPNL) Parent(#FGTPSWL) Row(#Row14) Sizing(None)
         //
         var LAYOUTITEM20 = this.createReference( "LAYOUTITEM20", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem31) Column(#Column6) Flow(Right) Manage(#FGTPSWCNL) Parent(#FGTPSWL) Row(#Row15) Sizing(None)
         //
         var LAYOUTITEM31 = this.createReference( "LAYOUTITEM31", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem32) Column(#Column6) Manage(#FGTPSWUSR) Parent(#FGTPSWL) Row(#Row14) Sizing(None) Flow(Down) Marginbottom(10)
         //
         var LAYOUTITEM32 = this.createReference( "LAYOUTITEM32", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem33) Column(#Column6) Manage(#FGTPSWEMAIL) Parent(#FGTPSWL) Row(#Row14) Sizing(None) Flow(Down)
         //
         var LAYOUTITEM33 = this.createReference( "LAYOUTITEM33", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem34) Column(#Column6) Manage(#FGTPSWBKGND) Parent(#FGTPSWL) Row(#Row13) Rowspan(3)
         //
         var LAYOUTITEM34 = this.createReference( "LAYOUTITEM34", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#MainPNLLayout)
         //
         var MAINPNLLAYOUT = this.createReference( "MAINPNLLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) Displayposition(1) Parent(#MainPNLLayout) Width(0.96)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) Displayposition(2) Parent(#MainPNLLayout) Width(1.04)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column10) Displayposition(3) Parent(#MainPNLLayout)
         //
         var COLUMN10 = this.createReference( "COLUMN10", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row16) Displayposition(1) Parent(#MainPNLLayout) Height(96) Units(Pixels)
         //
         var ROW16 = this.createReference( "ROW16", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row17) Displayposition(2) Parent(#MainPNLLayout) Height(1.59)
         //
         var ROW17 = this.createReference( "ROW17", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row18) Displayposition(3) Parent(#MainPNLLayout)
         //
         var ROW18 = this.createReference( "ROW18", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#HoldIMGItem1) Manage(#HoldIMG) Parent(#MainPNLLayout) Row(#Row16) Column(#Column8) Rowspan(3) Columnspan(3)
         //
         var HOLDIMGITEM1 = this.createReference( "HOLDIMGITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem23) Column(#Column8) Manage(#AVAPNL) Parent(#MainPNLLayout) Row(#Row16) Alignment(TopLeft) Rowspan(2)
         //
         var LAYOUTITEM23 = this.createReference( "LAYOUTITEM23", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem29) Alignment(TopRight) Column(#Column10) Flow(Right) Manage(#LOGOFFCMD) Parent(#MainPNLLayout) Row(#Row16) Sizing(None) Marginright(10) Margintop(10)
         //
         var LAYOUTITEM29 = this.createReference( "LAYOUTITEM29", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem30) Alignment(TopLeft) Column(#Column8) Flow(Down) Manage(#LOGOFFSND) Parent(#MainPNLLayout) Row(#Row17) Sizing(None)
         //
         var LAYOUTITEM30 = this.createReference( "LAYOUTITEM30", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem35) Column(#Column8) Manage(#AVACHGPNL) Parent(#MainPNLLayout) Row(#Row16) Rowspan(3)
         //
         var LAYOUTITEM35 = this.createReference( "LAYOUTITEM35", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem43) Column(#Column8) Manage(#CHOICEPNL) Parent(#MainPNLLayout) Row(#Row17) Rowspan(3) Columnspan(3)
         //
         var LAYOUTITEM43 = this.createReference( "LAYOUTITEM43", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item3) Manage(#MechTilePNL) Parent(#MainPNLLayout) Row(#Row17) Column(#Column8) Rowspan(3) Columnspan(3)
         //
         var PANEL1ITEM3 = this.createReference( "PANEL1ITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#AVALAYOUT)
         //
         var AVALAYOUT = this.createReference( "AVALAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column11) Displayposition(1) Parent(#AVALAYOUT) Units(Pixels) Width(100)
         //
         var COLUMN11 = this.createReference( "COLUMN11", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column12) Displayposition(2) Parent(#AVALAYOUT)
         //
         var COLUMN12 = this.createReference( "COLUMN12", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row19) Displayposition(1) Parent(#AVALAYOUT) Units(Pixels) Height(85)
         //
         var ROW19 = this.createReference( "ROW19", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row23) Displayposition(2) Parent(#AVALAYOUT)
         //
         var ROW23 = this.createReference( "ROW23", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem24) Column(#Column11) Manage(#AVAIMG) Parent(#AVALAYOUT) Row(#Row19) Marginright(10)
         //
         var LAYOUTITEM24 = this.createReference( "LAYOUTITEM24", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem25) Alignment(TopLeft) Column(#Column12) Flow(Down) Manage(#ACCTUSR) Parent(#AVALAYOUT) Row(#Row19) Sizing(FitToWidth)
         //
         var LAYOUTITEM25 = this.createReference( "LAYOUTITEM25", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem26) Alignment(TopLeft) Column(#Column12) Flow(Down) Manage(#MCBill) Parent(#AVALAYOUT) Row(#Row19) Sizing(FitToWidth)
         //
         var LAYOUTITEM26 = this.createReference( "LAYOUTITEM26", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem27) Alignment(TopLeft) Column(#Column12) Flow(Down) Manage(#MRank) Parent(#AVALAYOUT) Row(#Row19) Sizing(FitToWidth)
         //
         var LAYOUTITEM27 = this.createReference( "LAYOUTITEM27", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem28) Alignment(TopLeft) Column(#Column12) Flow(Down) Manage(#MXP) Parent(#AVALAYOUT) Row(#Row19) Sizing(FitToWidth)
         //
         var LAYOUTITEM28 = this.createReference( "LAYOUTITEM28", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AVACHGPNLItem1) Manage(#AVACHGPNL) Parent(#AVALAYOUT) Row(#Row23) Column(#Column11) Columnspan(2) Flow(Down)
         //
         var AVACHGPNLITEM1 = this.createReference( "AVACHGPNLITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#AVACHGLAYOUT)
         //
         var AVACHGLAYOUT = this.createReference( "AVACHGLAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column13) Displayposition(1) Parent(#AVACHGLAYOUT)
         //
         var COLUMN13 = this.createReference( "COLUMN13", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row20) Displayposition(1) Parent(#AVACHGLAYOUT) Height(0.23)
         //
         var ROW20 = this.createReference( "ROW20", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row21) Displayposition(2) Parent(#AVACHGLAYOUT) Height(1.77)
         //
         var ROW21 = this.createReference( "ROW21", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem38) Alignment(TopLeft) Column(#Column13) Flow(Down) Manage(#AVACHGPSWD) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM38 = this.createReference( "LAYOUTITEM38", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem40) Alignment(TopLeft) Column(#Column13) Flow(Down) Manage(#AVACHGEMAIL) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM40 = this.createReference( "LAYOUTITEM40", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem41) Alignment(TopLeft) Column(#Column13) Flow(Down) Manage(#AVACHGCBILL) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM41 = this.createReference( "LAYOUTITEM41", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem42) Alignment(TopLeft) Column(#Column13) Flow(Down) Manage(#AVACHGXP) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM42 = this.createReference( "LAYOUTITEM42", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem44) Column(#Column13) Flow(Right) Manage(#AVACHGCMD) Parent(#AVACHGLAYOUT) Row(#Row20) Sizing(None) Marginright(10) Alignment(CenterLeft)
         //
         var LAYOUTITEM44 = this.createReference( "LAYOUTITEM44", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MAdminItem1) Manage(#MAdmin) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(None) Column(#Column13) Flow(Down) Alignment(TopLeft) Margintop(10)
         //
         var MADMINITEM1 = this.createReference( "MADMINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem36) Alignment(TopLeft) Column(#Column13) Flow(Down) Manage(#AVACHGCNFPSWD) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM36 = this.createReference( "LAYOUTITEM36", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem37) Column(#Column13) Manage(#AVACHGFLPK) Parent(#AVACHGLAYOUT) Row(#Row21) Sizing(None) Alignment(TopLeft) Flow(Down) Margintop(10) Marginleft(100)
         //
         var LAYOUTITEM37 = this.createReference( "LAYOUTITEM37", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem39) Alignment(CenterLeft) Column(#Column13) Flow(Right) Manage(#MGMTCMD) Parent(#AVACHGLAYOUT) Row(#Row20) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM39 = this.createReference( "LAYOUTITEM39", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#ChoiceLayout)
         //
         var CHOICELAYOUT = this.createReference( "CHOICELAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column14) Displayposition(1) Parent(#ChoiceLayout)
         //
         var COLUMN14 = this.createReference( "COLUMN14", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column15) Displayposition(2) Parent(#ChoiceLayout)
         //
         var COLUMN15 = this.createReference( "COLUMN15", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row22) Displayposition(1) Parent(#ChoiceLayout)
         //
         var ROW22 = this.createReference( "ROW22", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem45) Column(#Column15) Manage(#STOCKIMG) Parent(#ChoiceLayout) Row(#Row22)
         //
         var LAYOUTITEM45 = this.createReference( "LAYOUTITEM45", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem46) Column(#Column15) Manage(#STOCKLBL) Parent(#ChoiceLayout) Row(#Row22) Marginleft(5)
         //
         var LAYOUTITEM46 = this.createReference( "LAYOUTITEM46", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem47) Column(#Column14) Manage(#URHANGIMG) Parent(#ChoiceLayout) Row(#Row22) Marginright(5)
         //
         var LAYOUTITEM47 = this.createReference( "LAYOUTITEM47", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem48) Column(#Column14) Manage(#URHANGLBL) Parent(#ChoiceLayout) Row(#Row22)
         //
         var LAYOUTITEM48 = this.createReference( "LAYOUTITEM48", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem49) Column(#Column14) Manage(#MechTiles) Parent(#ChoiceLayout) Row(#Row22) Columnspan(2)
         //
         var LAYOUTITEM49 = this.createReference( "LAYOUTITEM49", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem50) Column(#Column15) Manage(#MechTilePNL) Parent(#ChoiceLayout) Row(#Row22) Sizing(None)
         //
         var LAYOUTITEM50 = this.createReference( "LAYOUTITEM50", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TileLayout)
         //
         var TILELAYOUT = this.createReference( "TILELAYOUT", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column16) Displayposition(1) Parent(#TileLayout)
         //
         var COLUMN16 = this.createReference( "COLUMN16", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row24) Displayposition(1) Parent(#TileLayout)
         //
         var ROW24 = this.createReference( "ROW24", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MechTilesItem1) Manage(#MechTiles) Parent(#TileLayout) Row(#Row24) Column(#Column16)
         //
         var MECHTILESITEM1 = this.createReference( "MECHTILESITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LoginLBL) Caption('BATTLE MECHS') Displayposition(1) Ellipses(Word) Height(217) Left(0) Parent(#LOGINPNL) Tabposition(4) Tabstop(False) Top(0) Verticalalignment(Center) Width(1081) Style(#Style1) Alignment(Center)
         //
         var LOGINLBL = this.createReference( "LOGINLBL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#MUSER.Visual) Name(#MUSER) Displayposition(2) Parent(#LOGINPNL) Tabposition(3) Top(222) Width(252) Left(414) Labelposition(None) Marginleft(0) Placeholder('Username')
         //
         var MUSER = this.createFieldReference( "MUSER", Fields.MUSER.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginCMD) Displayposition(7) Left(417) Parent(#LOGINPNL) Tabposition(7) Top(409) Height(110) Width(246) Caption('ENTER MechXsphere') Themedrawstyle('PushButton') Tabstop(False)
         //
         var LOGINCMD = this.createReference( "LOGINCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#FIRE) Displayposition(8) Left(0) Parent(#LOGINPNL) Tabposition(6) Tabstop(False) Top(0) Height(649) Width(1081) Opacity(80) Filename('/Images/Mechs/MechLoginFire.gif') Imagesizing(FitBoth)
         //
         var FIRE = this.createReference( "FIRE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#PasswordReset) Caption('Forgot Password?') Displayposition(5) Ellipses(Word) Height(25) Left(420) Parent(#LOGINPNL) Tabposition(1) Tabstop(False) Top(319) Verticalalignment(Center) Width(241) Alignment(Center) Style(#Style2)
         //
         var PASSWORDRESET = this.createReference( "PASSWORDRESET", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#UsernameReset) Displayposition(3) Ellipses(Word) Height(25) Left(410) Parent(#LOGINPNL) Tabposition(5) Tabstop(False) Top(253) Verticalalignment(Center) Width(261) Alignment(Center) Caption('Forgot Username?') Style(#Style3)
         //
         var USERNAMERESET = this.createReference( "USERNAMERESET", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#LOGINPNL) Displayposition(10) Height(649) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Width(1081) Layoutmanager(#LoginLayout) Visible(False)
         //
         var LOGINPNL = this.createReference( "LOGINPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#BlastDoorPNL) Displayposition(7) Height(649) Left(0) Parent(#COM_OWNER) Tabposition(8) Tabstop(False) Top(0) Width(1081) Layoutmanager(#BlastDoorlayout)
         //
         var BLASTDOORPNL = this.createReference( "BLASTDOORPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Blastdoor) Displayposition(1) Left(0) Parent(#BlastDoorPNL) Tabposition(1) Tabstop(False) Top(0) Imagesizing(FitBoth) Filename('/images/mechs/door.jpg') Height(649) Width(1081)
         //
         var BLASTDOOR = this.createReference( "BLASTDOOR", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_SOND) Name(#DoorSound) Displayposition(9) Left(0) Parent(#COM_OWNER) Tabposition(6) Top(0) Visible(False)
         //
         var DOORSOUND = this.createReference( "DOORSOUND", "PRIM_SOND" );

         //
         // DEFINE_COM Class(#PRIM_SOND) Name(#Music) Displayposition(8) Left(0) Parent(#COM_OWNER) Tabposition(5) Top(0) Visible(False) Cycletostart(True)
         //
         var MUSIC = this.createReference( "MUSIC", "PRIM_SOND" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#RegisterLBL) Caption('Not a Member? Sign up!') Displayposition(6) Ellipses(Word) Height(25) Left(414) Parent(#LOGINPNL) Tabposition(2) Tabstop(False) Top(354) Verticalalignment(Center) Width(252) Alignment(Center) Style(#Style4)
         //
         var REGISTERLBL = this.createReference( "REGISTERLBL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#RESETREGISTERPNL) Displayposition(6) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(0) Height(649) Width(1081) Visible(False) Layoutmanager(#REGLAYOUT)
         //
         var RESETREGISTERPNL = this.createReference( "RESETREGISTERPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#MUSER.Visual) Name(#REGUSER) Displayposition(1) Height(42) Parent(#RESETREGISTERPNL) Tabposition(1) Top(227) Width(260) Caption('Username') Labeltype(Caption) Marginleft(0) Left(410) Labelhoralignment(Center) Labelposition(Top) Margintop(21)
         //
         var REGUSER = this.createFieldReference( "REGUSER", Fields.MUSER.VISUALEDIT );

         //
         // DEFINE_COM Class(#MEmail.Visual) Name(#MEmail) Displayposition(5) Height(42) Parent(#RESETREGISTERPNL) Tabposition(4) Top(383) Width(268) Caption('Email') Labeltype(Caption) Marginleft(0) Left(406) Labelhoralignment(Center) Labelposition(Top) Margintop(21)
         //
         var MEMAIL = this.createFieldReference( "MEMAIL", Fields.MEMAIL.VISUALEDIT );

         //
         // DEFINE_COM Class(#MPASSWRD.Visual) Name(#REGPASSWORD) Displayposition(3) Parent(#RESETREGISTERPNL) Tabposition(2) Top(279) Width(264) Caption('Password') Labeltype(Caption) Marginleft(0) Left(408) Height(42) Labelhoralignment(Center) Labelposition(Top) Margintop(21)
         //
         var REGPASSWORD = this.createFieldReference( "REGPASSWORD", Fields.MPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#MPASSWRD.Visual) Name(#CNFMPASS) Displayposition(4) Parent(#RESETREGISTERPNL) Tabposition(3) Top(331) Caption('Confirm Password') Labeltype(Caption) Width(268) Marginleft(0) Left(406) Height(42) Labelhoralignment(Center) Labelposition(Top) Margintop(21)
         //
         var CNFMPASS = this.createFieldReference( "CNFMPASS", Fields.MPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#REGOKCMD) Caption('Register') Displayposition(6) Left(403) Parent(#RESETREGISTERPNL) Tabposition(5) Top(525) Width(135) Height(32) Buttondefault(True)
         //
         var REGOKCMD = this.createReference( "REGOKCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#REGCNLCMD) Displayposition(7) Left(588) Parent(#RESETREGISTERPNL) Tabposition(6) Top(525) Caption('Cancel') Height(32) Width(101) Buttoncancel(True)
         //
         var REGCNLCMD = this.createReference( "REGCNLCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#MPASSWRD.Visual) Name(#MPASSWRD) Displayposition(4) Left(414) Parent(#LOGINPNL) Tabposition(8) Top(288) Labelposition(None) Marginleft(0) Width(252) Placeholder('Password')
         //
         var MPASSWRD = this.createFieldReference( "MPASSWRD", Fields.MPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#RGRTITLE) Caption('REGISTRATION') Displayposition(2) Ellipses(Word) Height(64) Left(0) Parent(#RESETREGISTERPNL) Tabposition(7) Tabstop(False) Top(76) Verticalalignment(Center) Width(1081) Style(#Style5) Alignment(Center)
         //
         var RGRTITLE = this.createReference( "RGRTITLE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#REGBKIMG) Displayposition(8) Left(0) Parent(#RESETREGISTERPNL) Tabposition(8) Tabstop(False) Top(0) Imagesizing(FitBoth) Height(649) Width(1081) Filename('/images/mechs/registration.gif') Opacity(50)
         //
         var REGBKIMG = this.createReference( "REGBKIMG", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PPNL) Name(#SVRMSG) Left(364) Parent(#COM_OWNER) Top(248) Themedrawstyle('MediumTitle') Closeonclick(True) Layoutmanager(#MSGLayout) Height(153) Width(352)
         //
         var SVRMSG = this.createReference( "SVRMSG", "PRIM_PPNL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#MSGLBL) Caption('Label1') Displayposition(1) Ellipses(Word) Height(151) Left(0) Parent(#SVRMSG) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(350) Alignment(Center) Themedrawstyle('MediumTitle') Style(#Style6)
         //
         var MSGLBL = this.createReference( "MSGLBL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#FGTUSRPNL) Displayposition(4) Left(0) Parent(#COM_OWNER) Tabposition(9) Tabstop(False) Top(0) Layoutmanager(#FGTUSRL) Height(649) Width(1081) Visible(False)
         //
         var FGTUSRPNL = this.createReference( "FGTUSRPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#FGTPSWPNL) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(10) Tabstop(False) Top(0) Layoutmanager(#FGTPSWL) Height(649) Width(1081) Visible(False)
         //
         var FGTPSWPNL = this.createReference( "FGTPSWPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#FGTUSRLBLT) Caption('Forgot Username') Displayposition(4) Ellipses(Word) Height(217) Left(290) Parent(#FGTUSRPNL) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Width(500) Alignment(Center) Style(#Style7)
         //
         var FGTUSRLBLT = this.createReference( "FGTUSRLBLT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#FGTUSRCMD) Caption('Submit') Displayposition(2) Left(410) Parent(#FGTUSRPNL) Tabposition(1) Top(525) Width(120) Height(32)
         //
         var FGTUSRCMD = this.createReference( "FGTUSRCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#FGTPSWLBLT) Caption('Password Reset') Displayposition(1) Ellipses(Word) Height(30) Left(0) Parent(#FGTPSWPNL) Tabposition(1) Tabstop(False) Top(93) Verticalalignment(Center) Width(1081) Alignment(Center) Style(#Style8)
         //
         var FGTPSWLBLT = this.createReference( "FGTPSWLBLT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#FGTPSWCMD) Caption('Submit') Displayposition(2) Left(386) Parent(#FGTPSWPNL) Tabposition(2) Top(525) Height(32) Width(149)
         //
         var FGTPSWCMD = this.createReference( "FGTPSWCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#MEmail.Visual) Name(#FGTEMAIL) Displayposition(1) Parent(#FGTUSRPNL) Tabposition(4) Top(295) Left(365) Width(350) Height(60) Labelhoralignment(Center) Labelposition(Top) Marginleft(0) Margintop(21)
         //
         var FGTEMAIL = this.createFieldReference( "FGTEMAIL", Fields.MEMAIL.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#FGTUSRCNL) Caption('Go Back') Displayposition(3) Left(580) Parent(#FGTUSRPNL) Tabposition(3) Top(525) Width(120) Height(32)
         //
         var FGTUSRCNL = this.createReference( "FGTUSRCNL", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#MainPNL) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(0) Height(649) Width(1081) Layoutmanager(#MainPNLLayout) Visible(False)
         //
         var MAINPNL = this.createReference( "MAINPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#FGTUSRBKGND) Displayposition(5) Left(0) Parent(#FGTUSRPNL) Tabposition(5) Tabstop(False) Top(0) Height(649) Width(1081) Filename('/images/mechs/GearBanner.jpg') Imagesizing(FitBoth) Opacity(30)
         //
         var FGTUSRBKGND = this.createReference( "FGTUSRBKGND", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_SOND) Name(#LoginSound) Displayposition(3) Left(0) Parent(#COM_OWNER) Tabposition(7) Top(0) Visible(False) Autoplay(False)
         //
         var LOGINSOUND = this.createReference( "LOGINSOUND", "PRIM_SOND" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#HoldIMG) Displayposition(5) Left(0) Parent(#MainPNL) Tabposition(1) Tabstop(False) Top(0) Imagesizing(FitBoth) Filename('/images/mechs/mechHanger.jpg') Height(649) Width(1081) Opacity(50)
         //
         var HOLDIMG = this.createReference( "HOLDIMG", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#AVAPNL) Displayposition(3) Left(0) Parent(#MainPNL) Tabposition(2) Tabstop(False) Top(0) Height(436) Width(346) Layoutmanager(#AVALAYOUT)
         //
         var AVAPNL = this.createReference( "AVAPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#AVAIMG) Displayposition(3) Left(0) Parent(#AVAPNL) Tabposition(1) Tabstop(False) Top(0) Height(85) Width(90) Imagesizing(FitBoth) Style(#Style13) Mouseoverstyle(#Style14)
         //
         var AVAIMG = this.createReference( "AVAIMG", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#MUSER.Visual) Name(#ACCTUSR) Displayposition(2) Left(100) Parent(#AVAPNL) Tabposition(2) Marginleft(80) Width(246) Caption('User ID') Labeltype(Caption) Marginright(10) Height(25) Displayonly(True) Themedrawstyle('Labels') Style(#Style9) Tabstop(False)
         //
         var ACCTUSR = this.createFieldReference( "ACCTUSR", Fields.MUSER.VISUALEDIT );

         //
         // DEFINE_COM Class(#MCBill.Visual) Name(#MCBill) Displayposition(5) Left(100) Parent(#AVAPNL) Tabposition(3) Top(46) Width(246) Marginleft(80) Caption('CBills') Labeltype(Caption) Displayonly(True) Themedrawstyle('Labels') Style(#Style10) Tabstop(False)
         //
         var MCBILL = this.createFieldReference( "MCBILL", Fields.MCBILL.VISUALEDIT );

         //
         // DEFINE_COM Class(#MRank.Visual) Name(#MRank) Displayposition(4) Left(100) Parent(#AVAPNL) Tabposition(5) Width(246) Labeltype(Caption) Caption('Rank') Marginleft(80) Top(25) Displayonly(True) Themedrawstyle('Labels') Style(#Style11) Tabstop(False)
         //
         var MRANK = this.createFieldReference( "MRANK", Fields.MRANK.VISUALEDIT );

         //
         // DEFINE_COM Class(#MXP.Visual) Name(#MXP) Displayposition(6) Left(100) Parent(#AVAPNL) Tabposition(6) Top(67) Width(246) Caption('XP') Labeltype(Caption) Marginleft(80) Displayonly(True) Themedrawstyle('Labels') Style(#Style12) Tabstop(False)
         //
         var MXP = this.createFieldReference( "MXP", Fields.MXP.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LOGOFFCMD) Displayposition(4) Left(968) Parent(#MainPNL) Tabposition(3) Width(103) Caption('Log off')
         //
         var LOGOFFCMD = this.createReference( "LOGOFFCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_SOND) Name(#LOGOFFSND) Displayposition(5) Left(0) Parent(#COM_OWNER) Tabposition(4) Top(0) Visible(False) Autoplay(False)
         //
         var LOGOFFSND = this.createReference( "LOGOFFSND", "PRIM_SOND" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#FGTPSWCNL) Caption('Cancel') Displayposition(3) Left(585) Parent(#FGTPSWPNL) Tabposition(3) Top(525) Height(32) Width(130)
         //
         var FGTPSWCNL = this.createReference( "FGTPSWCNL", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#MUSER.Visual) Name(#FGTPSWUSR) Displayposition(4) Left(348) Parent(#FGTPSWPNL) Tabposition(4) Top(315) Width(384) Caption('Username') Labeltype(Caption) Marginleft(113)
         //
         var FGTPSWUSR = this.createFieldReference( "FGTPSWUSR", Fields.MUSER.VISUALEDIT );

         //
         // DEFINE_COM Class(#MEmail.Visual) Name(#FGTPSWEMAIL) Displayposition(5) Left(311) Parent(#FGTPSWPNL) Tabposition(5) Top(346) Width(459) Labeltype(Caption) Caption('Email Addres')
         //
         var FGTPSWEMAIL = this.createFieldReference( "FGTPSWEMAIL", Fields.MEMAIL.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#FGTPSWBKGND) Displayposition(6) Left(0) Parent(#FGTPSWPNL) Tabposition(6) Tabstop(False) Top(0) Height(649) Width(1081) Opacity(30) Filename('/images/mechs/GearBanner.jpg') Imagesizing(FitBoth)
         //
         var FGTPSWBKGND = this.createReference( "FGTPSWBKGND", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#AVACHGPNL) Displayposition(1) Left(0) Parent(#AVAPNL) Tabposition(4) Tabstop(False) Top(85) Height(351) Width(346) Layoutmanager(#AVACHGLAYOUT) Visible(False) Style(#Style15)
         //
         var AVACHGPNL = this.createReference( "AVACHGPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#MPASSWRD.Visual) Name(#AVACHGPSWD) Displayposition(1) Parent(#AVACHGPNL) Tabposition(1) Top(51) Width(346) Labeltype(Caption) Caption('Password') Marginleft(100)
         //
         var AVACHGPSWD = this.createFieldReference( "AVACHGPSWD", Fields.MPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#MAdmin.VisualPicklist) Name(#MAdmin) Displayposition(3) Parent(#AVACHGPNL) Tabposition(3) Top(113) Width(233) Marginleft(100)
         //
         var MADMIN = this.createFieldReference( "MADMIN", Fields.MADMIN.VISUALPICKLIST );

         //
         // DEFINE_COM Class(#MEmail.Visual) Name(#AVACHGEMAIL) Displayposition(4) Parent(#AVACHGPNL) Tabposition(4) Top(142) Width(346) Caption('Email') Labeltype(Caption) Marginleft(100)
         //
         var AVACHGEMAIL = this.createFieldReference( "AVACHGEMAIL", Fields.MEMAIL.VISUALEDIT );

         //
         // DEFINE_COM Class(#MCBill.Visual) Name(#AVACHGCBILL) Displayposition(5) Parent(#AVACHGPNL) Tabposition(5) Top(173) Labeltype(Caption) Caption('CBills') Width(346) Marginleft(100)
         //
         var AVACHGCBILL = this.createFieldReference( "AVACHGCBILL", Fields.MCBILL.VISUALEDIT );

         //
         // DEFINE_COM Class(#MXP.Visual) Name(#AVACHGXP) Displayposition(6) Parent(#AVACHGPNL) Tabposition(6) Top(204) Width(346) Labeltype(Caption) Caption('XP') Marginleft(100)
         //
         var AVACHGXP = this.createFieldReference( "AVACHGXP", Fields.MXP.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#AVACHGCMD) Caption('Confirm') Displayposition(7) Parent(#AVACHGPNL) Tabposition(8) Top(8) Width(112) Left(0)
         //
         var AVACHGCMD = this.createReference( "AVACHGCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#MPASSWRD.Visual) Name(#AVACHGCNFPSWD) Displayposition(2) Parent(#AVACHGPNL) Tabposition(2) Top(82) Width(346) Caption('Confirm') Labeltype(Caption) Marginleft(100)
         //
         var AVACHGCNFPSWD = this.createFieldReference( "AVACHGCNFPSWD", Fields.MPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_WEB.FilePicker) Name(#AVACHGFLPK) Displayposition(8) Ellipses(Word) Height(25) Parent(#AVACHGPNL) Tabposition(7) Tabstop(False) Top(235) Verticalalignment(Center) Width(169) Themedrawstyle('PushButton') Caption('Change Avatar') Alignment(Center) Left(100)
         //
         var AVACHGFLPK = this.createReference( "AVACHGFLPK", "PRIM_WEB", "FilePicker" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#MGMTCMD) Caption('Users') Displayposition(9) Left(132) Parent(#AVACHGPNL) Tabposition(9) Top(8) Width(102)
         //
         var MGMTCMD = this.createReference( "MGMTCMD", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#CHOICEPNL) Displayposition(2) Height(553) Left(0) Parent(#MainPNL) Tabposition(4) Tabstop(False) Top(96) Width(1081) Layoutmanager(#ChoiceLayout)
         //
         var CHOICEPNL = this.createReference( "CHOICEPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#STOCKIMG) Displayposition(3) Left(541) Parent(#CHOICEPNL) Tabposition(1) Tabstop(False) Top(0) Height(553) Width(540) Style(#Style16) Filename('/images/mechs/StockHanger.jpg') Imagesizing(FitBoth)
         //
         var STOCKIMG = this.createReference( "STOCKIMG", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#STOCKLBL) Caption('Stock Hanger') Displayposition(2) Ellipses(Word) Height(553) Left(546) Parent(#CHOICEPNL) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Width(535) Style(#Style17) Alignment(Center) Mouseoverstyle(#Style21) Pressedstyle(#Style22)
         //
         var STOCKLBL = this.createReference( "STOCKLBL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#URHANGIMG) Displayposition(4) Left(0) Parent(#CHOICEPNL) Tabposition(3) Tabstop(False) Top(0) Height(553) Width(536) Style(#Style18) Filename('/images/mechs/MYHanger.jpg') Imagesizing(FitBoth) Opacity(80)
         //
         var URHANGIMG = this.createReference( "URHANGIMG", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#URHANGLBL) Caption('Your Hanger') Displayposition(1) Ellipses(Word) Height(553) Left(0) Parent(#CHOICEPNL) Tabposition(4) Tabstop(False) Top(0) Verticalalignment(Center) Width(541) Alignment(Center) Style(#Style19) Mouseoverstyle(#Style20) Pressedstyle(#Style23)
         //
         var URHANGLBL = this.createReference( "URHANGLBL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TILE<#MTILED>) Name(#MechTiles) Displayposition(1) Left(0) Parent(#MechTilePNL) Tabposition(1) Top(0) Height(553) Width(1081) Style(#Style24) Direction(TopToBottom)
         //
         var MECHTILES = this.createReference( "MECHTILES", "PRIM_TILE" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#MechTilePNL) Displayposition(1) Left(0) Parent(#MainPNL) Tabposition(5) Tabstop(False) Top(96) Height(553) Width(1081) Visible(False) Layoutmanager(#TileLayout)
         //
         var MECHTILEPNL = this.createReference( "MECHTILEPNL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#MSVRMOD.Register) Name(#register)
         //
         var REGISTER = this.createDataRequest( "REGISTER", "MSVRMOD", "REGISTER" );

         //
         // DEFINE_COM Class(#MSVRMOD.Login) Name(#login)
         //
         var LOGIN = this.createDataRequest( "LOGIN", "MSVRMOD", "LOGIN" );

         //
         // DEFINE_COM Class(#MSVRMOD.ForgotUser) Name(#FUser)
         //
         var FUSER = this.createDataRequest( "FUSER", "MSVRMOD", "FORGOTUSER" );

         //
         // DEFINE_COM Class(#MSVRMOD.ForgotPass) Name(#FPass)
         //
         var FPASS = this.createDataRequest( "FPASS", "MSVRMOD", "FORGOTPASS" );

         //
         // DEFINE_COM Class(#MSVRMOD.ChangeProfile) Name(#CNGPRF)
         //
         var CNGPRF = this.createDataRequest( "CNGPRF", "MSVRMOD", "CHANGEPROFILE" );

         //
         // DEFINE_COM Class(#MSVRMOD.CheckOwn) Name(#Owner)
         //
         var OWNER = this.createDataRequest( "OWNER", "MSVRMOD", "CHECKOWN" );

         //
         // DEFINE_COM Class(#MSVRMOD.LoadTiles) Name(#loadtiles)
         //
         var LOADTILES = this.createDataRequest( "LOADTILES", "MSVRMOD", "LOADTILES" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setFontSize( 72 );
         STYLE1.setForegroundBrush( LINEARBRUSH1 );
         STYLE1.initialize();

         // ------------------------------
         // -- Initialize #LINEARBRUSH1 --
         // ------------------------------
         LINEARBRUSH1.setColors( BRUSHCOLORS1 );
         LINEARBRUSH1.initialize();

         // ------------------------------
         // -- Initialize #BRUSHCOLORS1 --
         // ------------------------------
         BRUSHCOLORS1.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR1 --
         // -----------------------------
         BRUSHCOLOR1.setColor( "255:194:12" );
         BRUSHCOLOR1.setParent( BRUSHCOLORS1 );
         BRUSHCOLOR1.setOpacity( 25 );
         BRUSHCOLOR1.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR2 --
         // -----------------------------
         BRUSHCOLOR2.setAt( 25 );
         BRUSHCOLOR2.setColor( "255:144:14" );
         BRUSHCOLOR2.setParent( BRUSHCOLORS1 );
         BRUSHCOLOR2.setOpacity( 75 );
         BRUSHCOLOR2.initialize();

         // -----------------------------
         // -- Initialize #BRUSHCOLOR3 --
         // -----------------------------
         BRUSHCOLOR3.setAt( 75 );
         BRUSHCOLOR3.setColor( "204:8:8" );
         BRUSHCOLOR3.setParent( BRUSHCOLORS1 );
         BRUSHCOLOR3.initialize();

         // ----------------------------------
         // -- Initialize #FOREGROUNDBRUSH2 --
         // ----------------------------------
         FOREGROUNDBRUSH2.setTile( "TILE" );
         FOREGROUNDBRUSH2.initialize();

         // ----------------------------------
         // -- Initialize #FOREGROUNDBRUSH1 --
         // ----------------------------------
         FOREGROUNDBRUSH1.setSizing( "FITBOTH" );
         FOREGROUNDBRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setCursor( "HAND" );
         STYLE2.setFontSize( 14 );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.setCursor( "HAND" );
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setCursor( "HAND" );
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #STYLE5 --
         // ------------------------
         STYLE5.setFontSize( 36 );
         STYLE5.initialize();

         // ------------------------
         // -- Initialize #STYLE6 --
         // ------------------------
         STYLE6.setFontSize( 12 );
         STYLE6.initialize();

         // ------------------------
         // -- Initialize #STYLE7 --
         // ------------------------
         STYLE7.setFontSize( 36 );
         STYLE7.initialize();

         // ------------------------
         // -- Initialize #STYLE8 --
         // ------------------------
         STYLE8.setFontSize( 36 );
         STYLE8.setForegroundBrush( BRUSH6 );
         STYLE8.initialize();

         // ------------------------
         // -- Initialize #BRUSH6 --
         // ------------------------
         BRUSH6.setColor( "THEMETEXT" );
         BRUSH6.initialize();

         // -------------------------
         // -- Initialize #STYLE13 --
         // -------------------------
         STYLE13.setBorderBottom( 2 );
         STYLE13.setBorderLeft( 2 );
         STYLE13.setBorderRight( 2 );
         STYLE13.setBorderTop( 2 );
         STYLE13.setBorderBrush( BRUSH5 );
         STYLE13.initialize();

         // ------------------------
         // -- Initialize #BRUSH5 --
         // ------------------------
         BRUSH5.setColor( "255:194:12" );
         BRUSH5.initialize();

         // ------------------------
         // -- Initialize #STYLE9 --
         // ------------------------
         STYLE9.setForegroundBrush( BRUSH1 );
         STYLE9.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEMETEXT" );
         BRUSH1.initialize();

         // -------------------------
         // -- Initialize #STYLE10 --
         // -------------------------
         STYLE10.setForegroundBrush( BRUSH2 );
         STYLE10.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "THEMETEXT" );
         BRUSH2.initialize();

         // -------------------------
         // -- Initialize #STYLE11 --
         // -------------------------
         STYLE11.setForegroundBrush( BRUSH3 );
         STYLE11.initialize();

         // ------------------------
         // -- Initialize #BRUSH3 --
         // ------------------------
         BRUSH3.setColor( "THEMETEXT" );
         BRUSH3.initialize();

         // -------------------------
         // -- Initialize #STYLE12 --
         // -------------------------
         STYLE12.setForegroundBrush( BRUSH4 );
         STYLE12.initialize();

         // ------------------------
         // -- Initialize #BRUSH4 --
         // ------------------------
         BRUSH4.setColor( "THEMETEXT" );
         BRUSH4.initialize();

         // -------------------------
         // -- Initialize #STYLE14 --
         // -------------------------
         STYLE14.setBorderBottom( 4 );
         STYLE14.setBorderBrush( BRUSH7 );
         STYLE14.setBorderLeft( 4 );
         STYLE14.setBorderRight( 4 );
         STYLE14.setBorderTop( 4 );
         STYLE14.setCursor( "HAND" );
         STYLE14.initialize();

         // ------------------------
         // -- Initialize #BRUSH7 --
         // ------------------------
         BRUSH7.setColor( "255:194:12" );
         BRUSH7.initialize();

         // -------------------------
         // -- Initialize #STYLE15 --
         // -------------------------
         STYLE15.initialize();

         // -------------------------
         // -- Initialize #STYLE16 --
         // -------------------------
         STYLE16.setBorderBottom( 6 );
         STYLE16.setBorderLeft( 6 );
         STYLE16.setBorderRight( 6 );
         STYLE16.setBorderTop( 6 );
         STYLE16.setCornerBottomLeft( 4 );
         STYLE16.setCornerBottomRight( 4 );
         STYLE16.setCornerTopLeft( 4 );
         STYLE16.setCornerTopRight( 4 );
         STYLE16.setCursor( "HAND" );
         STYLE16.initialize();

         // -------------------------
         // -- Initialize #STYLE17 --
         // -------------------------
         STYLE17.setFontSize( 28 );
         STYLE17.setBold( true );
         STYLE17.initialize();

         // -------------------------
         // -- Initialize #STYLE18 --
         // -------------------------
         STYLE18.setBorderBottom( 6 );
         STYLE18.setBorderLeft( 6 );
         STYLE18.setBorderRight( 6 );
         STYLE18.setBorderTop( 6 );
         STYLE18.setCornerBottomLeft( 4 );
         STYLE18.setCornerBottomRight( 4 );
         STYLE18.setCornerTopLeft( 4 );
         STYLE18.setCornerTopRight( 4 );
         STYLE18.setCursor( "HAND" );
         STYLE18.initialize();

         // -------------------------
         // -- Initialize #STYLE19 --
         // -------------------------
         STYLE19.setFontSize( 28 );
         STYLE19.setBold( true );
         STYLE19.initialize();

         // -------------------------
         // -- Initialize #STYLE20 --
         // -------------------------
         STYLE20.setFontSize( 36 );
         STYLE20.setCursor( "HAND" );
         STYLE20.initialize();

         // -------------------------
         // -- Initialize #STYLE21 --
         // -------------------------
         STYLE21.setFontSize( 36 );
         STYLE21.setCursor( "HAND" );
         STYLE21.initialize();

         // -------------------------
         // -- Initialize #STYLE22 --
         // -------------------------
         STYLE22.setForegroundBrush( BRUSH8 );
         STYLE22.setFontSize( 24 );
         STYLE22.initialize();

         // ------------------------
         // -- Initialize #BRUSH8 --
         // ------------------------
         BRUSH8.setColor( "204:8:8" );
         BRUSH8.initialize();

         // -------------------------
         // -- Initialize #STYLE23 --
         // -------------------------
         STYLE23.setForegroundBrush( BRUSH9 );
         STYLE23.setFontSize( 24 );
         STYLE23.initialize();

         // ------------------------
         // -- Initialize #BRUSH9 --
         // ------------------------
         BRUSH9.setColor( "204:8:8" );
         BRUSH9.initialize();

         // -------------------------
         // -- Initialize #STYLE24 --
         // -------------------------
         STYLE24.setBorderBottom( 0 );
         STYLE24.setBorderLeft( 0 );
         STYLE24.setBorderRight( 0 );
         STYLE24.setBorderTop( 0 );
         STYLE24.setCornerBottomLeft( 0 );
         STYLE24.setCornerBottomRight( 0 );
         STYLE24.setCornerTopLeft( 0 );
         STYLE24.setCornerTopRight( 0 );
         STYLE24.initialize();

         // -----------------------------
         // -- Initialize #LOGINLAYOUT --
         // -----------------------------
         LOGINLAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 1 );
         COLUMN7.setParent( LOGINLAYOUT );
         COLUMN7.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 1 );
         ROW9.setParent( LOGINLAYOUT );
         ROW9.initialize();

         // -----------------------
         // -- Initialize #ROW10 --
         // -----------------------
         ROW10.setDisplayPosition( 2 );
         ROW10.setParent( LOGINLAYOUT );
         ROW10.initialize();

         // -----------------------
         // -- Initialize #ROW11 --
         // -----------------------
         ROW11.setDisplayPosition( 3 );
         ROW11.setParent( LOGINLAYOUT );
         ROW11.initialize();

         // ---------------------------
         // -- Initialize #FIREITEM2 --
         // ---------------------------
         FIREITEM2.setManage( FIRE );
         FIREITEM2.setParent( LOGINLAYOUT );
         FIREITEM2.setRow( ROW9 );
         FIREITEM2.setColumn( COLUMN7 );
         FIREITEM2.setRowSpan( 4 );
         FIREITEM2.initialize();

         // -------------------------------
         // -- Initialize #LOGINLBLITEM1 --
         // -------------------------------
         LOGINLBLITEM1.setManage( LOGINLBL );
         LOGINLBLITEM1.setParent( LOGINLAYOUT );
         LOGINLBLITEM1.setRow( ROW9 );
         LOGINLBLITEM1.setColumn( COLUMN7 );
         LOGINLBLITEM1.setFlow( "DOWN" );
         LOGINLBLITEM1.initialize();

         // ----------------------------
         // -- Initialize #MUSERITEM2 --
         // ----------------------------
         MUSERITEM2.setManage( MUSER );
         MUSERITEM2.setParent( LOGINLAYOUT );
         MUSERITEM2.setRow( ROW10 );
         MUSERITEM2.setSizing( "NONE" );
         MUSERITEM2.setColumn( COLUMN7 );
         MUSERITEM2.setFlow( "DOWN" );
         MUSERITEM2.setAlignment( "TOPCENTER" );
         MUSERITEM2.setMarginTop( 5 );
         MUSERITEM2.initialize();

         // ------------------------------------
         // -- Initialize #USERNAMERESETITEM2 --
         // ------------------------------------
         USERNAMERESETITEM2.setManage( USERNAMERESET );
         USERNAMERESETITEM2.setParent( LOGINLAYOUT );
         USERNAMERESETITEM2.setRow( ROW10 );
         USERNAMERESETITEM2.setSizing( "NONE" );
         USERNAMERESETITEM2.setColumn( COLUMN7 );
         USERNAMERESETITEM2.setAlignment( "TOPCENTER" );
         USERNAMERESETITEM2.setFlow( "DOWN" );
         USERNAMERESETITEM2.setMarginTop( 10 );
         USERNAMERESETITEM2.initialize();

         // ------------------------------------
         // -- Initialize #PASSWORDRESETITEM2 --
         // ------------------------------------
         PASSWORDRESETITEM2.setManage( PASSWORDRESET );
         PASSWORDRESETITEM2.setParent( LOGINLAYOUT );
         PASSWORDRESETITEM2.setRow( ROW10 );
         PASSWORDRESETITEM2.setSizing( "NONE" );
         PASSWORDRESETITEM2.setColumn( COLUMN7 );
         PASSWORDRESETITEM2.setAlignment( "TOPCENTER" );
         PASSWORDRESETITEM2.setFlow( "DOWN" );
         PASSWORDRESETITEM2.setMarginTop( 10 );
         PASSWORDRESETITEM2.initialize();

         // -------------------------------
         // -- Initialize #LOGINCMDITEM1 --
         // -------------------------------
         LOGINCMDITEM1.setManage( LOGINCMD );
         LOGINCMDITEM1.setParent( LOGINLAYOUT );
         LOGINCMDITEM1.setRow( ROW10 );
         LOGINCMDITEM1.setSizing( "NONE" );
         LOGINCMDITEM1.setColumn( COLUMN7 );
         LOGINCMDITEM1.setAlignment( "TOPCENTER" );
         LOGINCMDITEM1.setFlow( "DOWN" );
         LOGINCMDITEM1.setMarginTop( 30 );
         LOGINCMDITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN7 );
         LAYOUTITEM1.setManage( BLASTDOORPNL );
         LAYOUTITEM1.setParent( LOGINLAYOUT );
         LAYOUTITEM1.setRow( ROW11 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LABEL1ITEM1 --
         // -----------------------------
         LABEL1ITEM1.setManage( REGISTERLBL );
         LABEL1ITEM1.setParent( LOGINLAYOUT );
         LABEL1ITEM1.setRow( ROW10 );
         LABEL1ITEM1.setSizing( "NONE" );
         LABEL1ITEM1.setColumn( COLUMN7 );
         LABEL1ITEM1.setAlignment( "TOPCENTER" );
         LABEL1ITEM1.setFlow( "DOWN" );
         LABEL1ITEM1.setMarginTop( 10 );
         LABEL1ITEM1.initialize();

         // -------------------------------
         // -- Initialize #MPASSWRDITEM1 --
         // -------------------------------
         MPASSWRDITEM1.setManage( MPASSWRD );
         MPASSWRDITEM1.setParent( LOGINLAYOUT );
         MPASSWRDITEM1.setRow( ROW10 );
         MPASSWRDITEM1.setSizing( "NONE" );
         MPASSWRDITEM1.setColumn( COLUMN7 );
         MPASSWRDITEM1.setAlignment( "TOPCENTER" );
         MPASSWRDITEM1.setFlow( "DOWN" );
         MPASSWRDITEM1.setMarginTop( 10 );
         MPASSWRDITEM1.initialize();

         // --------------------------
         // -- Initialize #FULLPAGE --
         // --------------------------
         FULLPAGE.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( FULLPAGE );
         COLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( FULLPAGE );
         ROW1.initialize();

         // -------------------------------
         // -- Initialize #LOGINPNLITEM1 --
         // -------------------------------
         LOGINPNLITEM1.setManage( LOGINPNL );
         LOGINPNLITEM1.setParent( FULLPAGE );
         LOGINPNLITEM1.setRow( ROW1 );
         LOGINPNLITEM1.setColumn( COLUMN1 );
         LOGINPNLITEM1.initialize();

         // -----------------------------------
         // -- Initialize #BLASTDOORPNLITEM1 --
         // -----------------------------------
         BLASTDOORPNLITEM1.setManage( BLASTDOORPNL );
         BLASTDOORPNLITEM1.setParent( FULLPAGE );
         BLASTDOORPNLITEM1.setRow( ROW1 );
         BLASTDOORPNLITEM1.setColumn( COLUMN1 );
         BLASTDOORPNLITEM1.initialize();

         // -----------------------------
         // -- Initialize #SOUND1ITEM1 --
         // -----------------------------
         SOUND1ITEM1.setManage( DOORSOUND );
         SOUND1ITEM1.setParent( FULLPAGE );
         SOUND1ITEM1.setRow( ROW1 );
         SOUND1ITEM1.setSizing( "NONE" );
         SOUND1ITEM1.setColumn( COLUMN1 );
         SOUND1ITEM1.setAlignment( "TOPLEFT" );
         SOUND1ITEM1.initialize();

         // ----------------------------
         // -- Initialize #MUSICITEM1 --
         // ----------------------------
         MUSICITEM1.setManage( MUSIC );
         MUSICITEM1.setParent( FULLPAGE );
         MUSICITEM1.setRow( ROW1 );
         MUSICITEM1.setSizing( "NONE" );
         MUSICITEM1.setColumn( COLUMN1 );
         MUSICITEM1.setAlignment( "TOPLEFT" );
         MUSICITEM1.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM1 --
         // -----------------------------
         PANEL1ITEM1.setManage( RESETREGISTERPNL );
         PANEL1ITEM1.setParent( FULLPAGE );
         PANEL1ITEM1.setRow( ROW1 );
         PANEL1ITEM1.setColumn( COLUMN1 );
         PANEL1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #SVRMSGITEM1 --
         // -----------------------------
         SVRMSGITEM1.setManage( SVRMSG );
         SVRMSGITEM1.setParent( FULLPAGE );
         SVRMSGITEM1.setRow( ROW1 );
         SVRMSGITEM1.setSizing( "NONE" );
         SVRMSGITEM1.setColumn( COLUMN1 );
         SVRMSGITEM1.initialize();

         // --------------------------------
         // -- Initialize #FGTUSRPNLITEM1 --
         // --------------------------------
         FGTUSRPNLITEM1.setManage( FGTUSRPNL );
         FGTUSRPNLITEM1.setParent( FULLPAGE );
         FGTUSRPNLITEM1.setRow( ROW1 );
         FGTUSRPNLITEM1.setColumn( COLUMN1 );
         FGTUSRPNLITEM1.initialize();

         // --------------------------------
         // -- Initialize #FGTPSWPNLITEM1 --
         // --------------------------------
         FGTPSWPNLITEM1.setManage( FGTPSWPNL );
         FGTPSWPNLITEM1.setParent( FULLPAGE );
         FGTPSWPNLITEM1.setRow( ROW1 );
         FGTPSWPNLITEM1.setColumn( COLUMN1 );
         FGTPSWPNLITEM1.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM2 --
         // -----------------------------
         PANEL1ITEM2.setManage( MAINPNL );
         PANEL1ITEM2.setParent( FULLPAGE );
         PANEL1ITEM2.setRow( ROW1 );
         PANEL1ITEM2.setColumn( COLUMN1 );
         PANEL1ITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LOGINSOUNDITEM1 --
         // ---------------------------------
         LOGINSOUNDITEM1.setManage( LOGINSOUND );
         LOGINSOUNDITEM1.setParent( FULLPAGE );
         LOGINSOUNDITEM1.setRow( ROW1 );
         LOGINSOUNDITEM1.setSizing( "NONE" );
         LOGINSOUNDITEM1.setColumn( COLUMN1 );
         LOGINSOUNDITEM1.setAlignment( "TOPLEFT" );
         LOGINSOUNDITEM1.initialize();

         // -----------------------------
         // -- Initialize #SOUND1ITEM2 --
         // -----------------------------
         SOUND1ITEM2.setAlignment( "TOPLEFT" );
         SOUND1ITEM2.setColumn( COLUMN1 );
         SOUND1ITEM2.setManage( LOGOFFSND );
         SOUND1ITEM2.setParent( FULLPAGE );
         SOUND1ITEM2.setRow( ROW1 );
         SOUND1ITEM2.setSizing( "NONE" );
         SOUND1ITEM2.initialize();

         // ---------------------------------
         // -- Initialize #BLASTDOORLAYOUT --
         // ---------------------------------
         BLASTDOORLAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 1 );
         COLUMN2.setParent( BLASTDOORLAYOUT );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( BLASTDOORLAYOUT );
         ROW2.initialize();

         // --------------------------------
         // -- Initialize #BLASTDOORITEM1 --
         // --------------------------------
         BLASTDOORITEM1.setManage( BLASTDOOR );
         BLASTDOORITEM1.setParent( BLASTDOORLAYOUT );
         BLASTDOORITEM1.setRow( ROW2 );
         BLASTDOORITEM1.setColumn( COLUMN2 );
         BLASTDOORITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( REGISTERLBL );
         LAYOUTITEM2.setParent( BLASTDOORLAYOUT );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.setSizing( "NONE" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setColumn( COLUMN2 );
         LAYOUTITEM4.setManage( RESETREGISTERPNL );
         LAYOUTITEM4.setParent( BLASTDOORLAYOUT );
         LAYOUTITEM4.setRow( ROW2 );
         LAYOUTITEM4.setSizing( "NONE" );
         LAYOUTITEM4.initialize();

         // ---------------------------
         // -- Initialize #REGLAYOUT --
         // ---------------------------
         REGLAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 1 );
         COLUMN4.setParent( REGLAYOUT );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( REGLAYOUT );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 2 );
         ROW4.setParent( REGLAYOUT );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 3 );
         ROW5.setParent( REGLAYOUT );
         ROW5.initialize();

         // -----------------------------
         // -- Initialize #MUSER1ITEM1 --
         // -----------------------------
         MUSER1ITEM1.setManage( REGUSER );
         MUSER1ITEM1.setParent( REGLAYOUT );
         MUSER1ITEM1.setRow( ROW4 );
         MUSER1ITEM1.setSizing( "NONE" );
         MUSER1ITEM1.setColumn( COLUMN4 );
         MUSER1ITEM1.setFlow( "DOWN" );
         MUSER1ITEM1.setMarginTop( 10 );
         MUSER1ITEM1.setAlignment( "TOPCENTER" );
         MUSER1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #MEMAILITEM1 --
         // -----------------------------
         MEMAILITEM1.setManage( MEMAIL );
         MEMAILITEM1.setParent( REGLAYOUT );
         MEMAILITEM1.setRow( ROW4 );
         MEMAILITEM1.setSizing( "NONE" );
         MEMAILITEM1.setColumn( COLUMN4 );
         MEMAILITEM1.setFlow( "DOWN" );
         MEMAILITEM1.setMarginTop( 10 );
         MEMAILITEM1.setAlignment( "TOPCENTER" );
         MEMAILITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( COLUMN4 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( REGPASSWORD );
         LAYOUTITEM5.setParent( REGLAYOUT );
         LAYOUTITEM5.setRow( ROW4 );
         LAYOUTITEM5.setSizing( "NONE" );
         LAYOUTITEM5.setMarginTop( 10 );
         LAYOUTITEM5.setAlignment( "TOPCENTER" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setColumn( COLUMN4 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( CNFMPASS );
         LAYOUTITEM6.setParent( REGLAYOUT );
         LAYOUTITEM6.setRow( ROW4 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.setMarginTop( 10 );
         LAYOUTITEM6.setAlignment( "TOPCENTER" );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setColumn( COLUMN4 );
         LAYOUTITEM7.setFlow( "RIGHT" );
         LAYOUTITEM7.setManage( REGOKCMD );
         LAYOUTITEM7.setParent( REGLAYOUT );
         LAYOUTITEM7.setRow( ROW5 );
         LAYOUTITEM7.setSizing( "NONE" );
         LAYOUTITEM7.setMarginLeft( -70 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setColumn( COLUMN4 );
         LAYOUTITEM8.setFlow( "RIGHT" );
         LAYOUTITEM8.setManage( REGCNLCMD );
         LAYOUTITEM8.setParent( REGLAYOUT );
         LAYOUTITEM8.setRow( ROW5 );
         LAYOUTITEM8.setSizing( "NONE" );
         LAYOUTITEM8.setMarginLeft( 50 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "TOPCENTER" );
         LAYOUTITEM9.setColumn( COLUMN4 );
         LAYOUTITEM9.setFlow( "DOWN" );
         LAYOUTITEM9.setManage( MPASSWRD );
         LAYOUTITEM9.setParent( REGLAYOUT );
         LAYOUTITEM9.setRow( ROW4 );
         LAYOUTITEM9.setSizing( "NONE" );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setColumn( COLUMN4 );
         LAYOUTITEM10.setManage( RGRTITLE );
         LAYOUTITEM10.setParent( REGLAYOUT );
         LAYOUTITEM10.setRow( ROW3 );
         LAYOUTITEM10.setSizing( "FITTOWIDTH" );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setColumn( COLUMN4 );
         LAYOUTITEM11.setManage( REGBKIMG );
         LAYOUTITEM11.setParent( REGLAYOUT );
         LAYOUTITEM11.setRow( ROW3 );
         LAYOUTITEM11.setRowSpan( 3 );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setColumn( COLUMN4 );
         LAYOUTITEM12.setManage( MSGLBL );
         LAYOUTITEM12.setParent( REGLAYOUT );
         LAYOUTITEM12.setRow( ROW4 );
         LAYOUTITEM12.setSizing( "NONE" );
         LAYOUTITEM12.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN4 );
         LAYOUTITEM3.setManage( FGTUSRPNL );
         LAYOUTITEM3.setParent( REGLAYOUT );
         LAYOUTITEM3.setRow( ROW4 );
         LAYOUTITEM3.setSizing( "NONE" );
         LAYOUTITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setColumn( COLUMN4 );
         LAYOUTITEM13.setManage( FGTPSWPNL );
         LAYOUTITEM13.setParent( REGLAYOUT );
         LAYOUTITEM13.setRow( ROW4 );
         LAYOUTITEM13.setSizing( "NONE" );
         LAYOUTITEM13.initialize();

         // ---------------------------
         // -- Initialize #MSGLAYOUT --
         // ---------------------------
         MSGLAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 1 );
         COLUMN3.setParent( MSGLAYOUT );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 1 );
         ROW6.setParent( MSGLAYOUT );
         ROW6.initialize();

         // -----------------------------
         // -- Initialize #MSGLBLITEM1 --
         // -----------------------------
         MSGLBLITEM1.setManage( MSGLBL );
         MSGLBLITEM1.setParent( MSGLAYOUT );
         MSGLBLITEM1.setRow( ROW6 );
         MSGLBLITEM1.setColumn( COLUMN3 );
         MSGLBLITEM1.initialize();

         // -------------------------
         // -- Initialize #FGTUSRL --
         // -------------------------
         FGTUSRL.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 1 );
         COLUMN5.setParent( FGTUSRL );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 1 );
         ROW7.setParent( FGTUSRL );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 2 );
         ROW8.setParent( FGTUSRL );
         ROW8.initialize();

         // -----------------------
         // -- Initialize #ROW12 --
         // -----------------------
         ROW12.setDisplayPosition( 3 );
         ROW12.setParent( FGTUSRL );
         ROW12.initialize();

         // ---------------------------------
         // -- Initialize #FGTUSRLBLTITEM1 --
         // ---------------------------------
         FGTUSRLBLTITEM1.setManage( FGTUSRLBLT );
         FGTUSRLBLTITEM1.setParent( FGTUSRL );
         FGTUSRLBLTITEM1.setRow( ROW7 );
         FGTUSRLBLTITEM1.setColumn( COLUMN5 );
         FGTUSRLBLTITEM1.setSizing( "NONE" );
         FGTUSRLBLTITEM1.setFlow( "DOWN" );
         FGTUSRLBLTITEM1.initialize();

         // --------------------------------
         // -- Initialize #FGTUSRCMDITEM1 --
         // --------------------------------
         FGTUSRCMDITEM1.setManage( FGTUSRCMD );
         FGTUSRCMDITEM1.setParent( FGTUSRL );
         FGTUSRCMDITEM1.setRow( ROW12 );
         FGTUSRCMDITEM1.setSizing( "NONE" );
         FGTUSRCMDITEM1.setColumn( COLUMN5 );
         FGTUSRCMDITEM1.setFlow( "RIGHT" );
         FGTUSRCMDITEM1.setMarginLeft( -70 );
         FGTUSRCMDITEM1.initialize();

         // ------------------------------
         // -- Initialize #MEMAIL1ITEM1 --
         // ------------------------------
         MEMAIL1ITEM1.setManage( FGTEMAIL );
         MEMAIL1ITEM1.setParent( FGTUSRL );
         MEMAIL1ITEM1.setRow( ROW8 );
         MEMAIL1ITEM1.setSizing( "NONE" );
         MEMAIL1ITEM1.setColumn( COLUMN5 );
         MEMAIL1ITEM1.setFlow( "DOWN" );
         MEMAIL1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #BUTTON1ITEM1 --
         // ------------------------------
         BUTTON1ITEM1.setManage( FGTUSRCNL );
         BUTTON1ITEM1.setParent( FGTUSRL );
         BUTTON1ITEM1.setRow( ROW12 );
         BUTTON1ITEM1.setSizing( "NONE" );
         BUTTON1ITEM1.setColumn( COLUMN5 );
         BUTTON1ITEM1.setFlow( "RIGHT" );
         BUTTON1ITEM1.setMarginLeft( 50 );
         BUTTON1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM21 --
         // ------------------------------
         LAYOUTITEM21.setColumn( COLUMN5 );
         LAYOUTITEM21.setManage( FGTUSRBKGND );
         LAYOUTITEM21.setParent( FGTUSRL );
         LAYOUTITEM21.setRow( ROW7 );
         LAYOUTITEM21.setRowSpan( 3 );
         LAYOUTITEM21.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM22 --
         // ------------------------------
         LAYOUTITEM22.setColumn( COLUMN5 );
         LAYOUTITEM22.setManage( LOGINSOUND );
         LAYOUTITEM22.setParent( FGTUSRL );
         LAYOUTITEM22.setRow( ROW7 );
         LAYOUTITEM22.setSizing( "NONE" );
         LAYOUTITEM22.setAlignment( "TOPLEFT" );
         LAYOUTITEM22.initialize();

         // -------------------------
         // -- Initialize #FGTPSWL --
         // -------------------------
         FGTPSWL.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 1 );
         COLUMN6.setParent( FGTPSWL );
         COLUMN6.initialize();

         // -----------------------
         // -- Initialize #ROW13 --
         // -----------------------
         ROW13.setDisplayPosition( 1 );
         ROW13.setParent( FGTPSWL );
         ROW13.initialize();

         // -----------------------
         // -- Initialize #ROW14 --
         // -----------------------
         ROW14.setDisplayPosition( 2 );
         ROW14.setParent( FGTPSWL );
         ROW14.initialize();

         // -----------------------
         // -- Initialize #ROW15 --
         // -----------------------
         ROW15.setDisplayPosition( 3 );
         ROW15.setParent( FGTPSWL );
         ROW15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setAlignment( "TOPLEFT" );
         LAYOUTITEM14.setColumn( COLUMN6 );
         LAYOUTITEM14.setFlow( "DOWN" );
         LAYOUTITEM14.setManage( FGTUSRLBLT );
         LAYOUTITEM14.setParent( FGTPSWL );
         LAYOUTITEM14.setRow( ROW14 );
         LAYOUTITEM14.setSizing( "NONE" );
         LAYOUTITEM14.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setAlignment( "TOPLEFT" );
         LAYOUTITEM15.setColumn( COLUMN6 );
         LAYOUTITEM15.setFlow( "DOWN" );
         LAYOUTITEM15.setManage( FGTUSRCMD );
         LAYOUTITEM15.setParent( FGTPSWL );
         LAYOUTITEM15.setRow( ROW14 );
         LAYOUTITEM15.setSizing( "NONE" );
         LAYOUTITEM15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM16 --
         // ------------------------------
         LAYOUTITEM16.setColumn( COLUMN6 );
         LAYOUTITEM16.setFlow( "DOWN" );
         LAYOUTITEM16.setManage( FGTPSWLBLT );
         LAYOUTITEM16.setParent( FGTPSWL );
         LAYOUTITEM16.setRow( ROW13 );
         LAYOUTITEM16.setSizing( "FITTOWIDTH" );
         LAYOUTITEM16.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM17 --
         // ------------------------------
         LAYOUTITEM17.setColumn( COLUMN6 );
         LAYOUTITEM17.setFlow( "RIGHT" );
         LAYOUTITEM17.setManage( FGTPSWCMD );
         LAYOUTITEM17.setParent( FGTPSWL );
         LAYOUTITEM17.setRow( ROW15 );
         LAYOUTITEM17.setSizing( "NONE" );
         LAYOUTITEM17.setMarginRight( 50 );
         LAYOUTITEM17.setMarginLeft( -80 );
         LAYOUTITEM17.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM18 --
         // ------------------------------
         LAYOUTITEM18.setAlignment( "TOPLEFT" );
         LAYOUTITEM18.setColumn( COLUMN6 );
         LAYOUTITEM18.setFlow( "DOWN" );
         LAYOUTITEM18.setManage( FGTEMAIL );
         LAYOUTITEM18.setParent( FGTPSWL );
         LAYOUTITEM18.setRow( ROW14 );
         LAYOUTITEM18.setSizing( "NONE" );
         LAYOUTITEM18.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM19 --
         // ------------------------------
         LAYOUTITEM19.setAlignment( "TOPLEFT" );
         LAYOUTITEM19.setColumn( COLUMN6 );
         LAYOUTITEM19.setFlow( "DOWN" );
         LAYOUTITEM19.setManage( FGTUSRCNL );
         LAYOUTITEM19.setParent( FGTPSWL );
         LAYOUTITEM19.setRow( ROW14 );
         LAYOUTITEM19.setSizing( "NONE" );
         LAYOUTITEM19.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM20 --
         // ------------------------------
         LAYOUTITEM20.setColumn( COLUMN6 );
         LAYOUTITEM20.setManage( MAINPNL );
         LAYOUTITEM20.setParent( FGTPSWL );
         LAYOUTITEM20.setRow( ROW14 );
         LAYOUTITEM20.setSizing( "NONE" );
         LAYOUTITEM20.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM31 --
         // ------------------------------
         LAYOUTITEM31.setColumn( COLUMN6 );
         LAYOUTITEM31.setFlow( "RIGHT" );
         LAYOUTITEM31.setManage( FGTPSWCNL );
         LAYOUTITEM31.setParent( FGTPSWL );
         LAYOUTITEM31.setRow( ROW15 );
         LAYOUTITEM31.setSizing( "NONE" );
         LAYOUTITEM31.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM32 --
         // ------------------------------
         LAYOUTITEM32.setColumn( COLUMN6 );
         LAYOUTITEM32.setManage( FGTPSWUSR );
         LAYOUTITEM32.setParent( FGTPSWL );
         LAYOUTITEM32.setRow( ROW14 );
         LAYOUTITEM32.setSizing( "NONE" );
         LAYOUTITEM32.setFlow( "DOWN" );
         LAYOUTITEM32.setMarginBottom( 10 );
         LAYOUTITEM32.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM33 --
         // ------------------------------
         LAYOUTITEM33.setColumn( COLUMN6 );
         LAYOUTITEM33.setManage( FGTPSWEMAIL );
         LAYOUTITEM33.setParent( FGTPSWL );
         LAYOUTITEM33.setRow( ROW14 );
         LAYOUTITEM33.setSizing( "NONE" );
         LAYOUTITEM33.setFlow( "DOWN" );
         LAYOUTITEM33.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM34 --
         // ------------------------------
         LAYOUTITEM34.setColumn( COLUMN6 );
         LAYOUTITEM34.setManage( FGTPSWBKGND );
         LAYOUTITEM34.setParent( FGTPSWL );
         LAYOUTITEM34.setRow( ROW13 );
         LAYOUTITEM34.setRowSpan( 3 );
         LAYOUTITEM34.initialize();

         // -------------------------------
         // -- Initialize #MAINPNLLAYOUT --
         // -------------------------------
         MAINPNLLAYOUT.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 1 );
         COLUMN8.setParent( MAINPNLLAYOUT );
         COLUMN8.setWidth( const1 );
         COLUMN8.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 2 );
         COLUMN9.setParent( MAINPNLLAYOUT );
         COLUMN9.setWidth( const2 );
         COLUMN9.initialize();

         // --------------------------
         // -- Initialize #COLUMN10 --
         // --------------------------
         COLUMN10.setDisplayPosition( 3 );
         COLUMN10.setParent( MAINPNLLAYOUT );
         COLUMN10.initialize();

         // -----------------------
         // -- Initialize #ROW16 --
         // -----------------------
         ROW16.setDisplayPosition( 1 );
         ROW16.setParent( MAINPNLLAYOUT );
         ROW16.setHeight( 96 );
         ROW16.setUnits( "PIXELS" );
         ROW16.initialize();

         // -----------------------
         // -- Initialize #ROW17 --
         // -----------------------
         ROW17.setDisplayPosition( 2 );
         ROW17.setParent( MAINPNLLAYOUT );
         ROW17.setHeight( const3 );
         ROW17.initialize();

         // -----------------------
         // -- Initialize #ROW18 --
         // -----------------------
         ROW18.setDisplayPosition( 3 );
         ROW18.setParent( MAINPNLLAYOUT );
         ROW18.initialize();

         // ------------------------------
         // -- Initialize #HOLDIMGITEM1 --
         // ------------------------------
         HOLDIMGITEM1.setManage( HOLDIMG );
         HOLDIMGITEM1.setParent( MAINPNLLAYOUT );
         HOLDIMGITEM1.setRow( ROW16 );
         HOLDIMGITEM1.setColumn( COLUMN8 );
         HOLDIMGITEM1.setRowSpan( 3 );
         HOLDIMGITEM1.setColumnSpan( 3 );
         HOLDIMGITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM23 --
         // ------------------------------
         LAYOUTITEM23.setColumn( COLUMN8 );
         LAYOUTITEM23.setManage( AVAPNL );
         LAYOUTITEM23.setParent( MAINPNLLAYOUT );
         LAYOUTITEM23.setRow( ROW16 );
         LAYOUTITEM23.setAlignment( "TOPLEFT" );
         LAYOUTITEM23.setRowSpan( 2 );
         LAYOUTITEM23.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM29 --
         // ------------------------------
         LAYOUTITEM29.setAlignment( "TOPRIGHT" );
         LAYOUTITEM29.setColumn( COLUMN10 );
         LAYOUTITEM29.setFlow( "RIGHT" );
         LAYOUTITEM29.setManage( LOGOFFCMD );
         LAYOUTITEM29.setParent( MAINPNLLAYOUT );
         LAYOUTITEM29.setRow( ROW16 );
         LAYOUTITEM29.setSizing( "NONE" );
         LAYOUTITEM29.setMarginRight( 10 );
         LAYOUTITEM29.setMarginTop( 10 );
         LAYOUTITEM29.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM30 --
         // ------------------------------
         LAYOUTITEM30.setAlignment( "TOPLEFT" );
         LAYOUTITEM30.setColumn( COLUMN8 );
         LAYOUTITEM30.setFlow( "DOWN" );
         LAYOUTITEM30.setManage( LOGOFFSND );
         LAYOUTITEM30.setParent( MAINPNLLAYOUT );
         LAYOUTITEM30.setRow( ROW17 );
         LAYOUTITEM30.setSizing( "NONE" );
         LAYOUTITEM30.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM35 --
         // ------------------------------
         LAYOUTITEM35.setColumn( COLUMN8 );
         LAYOUTITEM35.setManage( AVACHGPNL );
         LAYOUTITEM35.setParent( MAINPNLLAYOUT );
         LAYOUTITEM35.setRow( ROW16 );
         LAYOUTITEM35.setRowSpan( 3 );
         LAYOUTITEM35.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM43 --
         // ------------------------------
         LAYOUTITEM43.setColumn( COLUMN8 );
         LAYOUTITEM43.setManage( CHOICEPNL );
         LAYOUTITEM43.setParent( MAINPNLLAYOUT );
         LAYOUTITEM43.setRow( ROW17 );
         LAYOUTITEM43.setRowSpan( 3 );
         LAYOUTITEM43.setColumnSpan( 3 );
         LAYOUTITEM43.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM3 --
         // -----------------------------
         PANEL1ITEM3.setManage( MECHTILEPNL );
         PANEL1ITEM3.setParent( MAINPNLLAYOUT );
         PANEL1ITEM3.setRow( ROW17 );
         PANEL1ITEM3.setColumn( COLUMN8 );
         PANEL1ITEM3.setRowSpan( 3 );
         PANEL1ITEM3.setColumnSpan( 3 );
         PANEL1ITEM3.initialize();

         // ---------------------------
         // -- Initialize #AVALAYOUT --
         // ---------------------------
         AVALAYOUT.initialize();

         // --------------------------
         // -- Initialize #COLUMN11 --
         // --------------------------
         COLUMN11.setDisplayPosition( 1 );
         COLUMN11.setParent( AVALAYOUT );
         COLUMN11.setUnits( "PIXELS" );
         COLUMN11.setWidth( 100 );
         COLUMN11.initialize();

         // --------------------------
         // -- Initialize #COLUMN12 --
         // --------------------------
         COLUMN12.setDisplayPosition( 2 );
         COLUMN12.setParent( AVALAYOUT );
         COLUMN12.initialize();

         // -----------------------
         // -- Initialize #ROW19 --
         // -----------------------
         ROW19.setDisplayPosition( 1 );
         ROW19.setParent( AVALAYOUT );
         ROW19.setUnits( "PIXELS" );
         ROW19.setHeight( 85 );
         ROW19.initialize();

         // -----------------------
         // -- Initialize #ROW23 --
         // -----------------------
         ROW23.setDisplayPosition( 2 );
         ROW23.setParent( AVALAYOUT );
         ROW23.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM24 --
         // ------------------------------
         LAYOUTITEM24.setColumn( COLUMN11 );
         LAYOUTITEM24.setManage( AVAIMG );
         LAYOUTITEM24.setParent( AVALAYOUT );
         LAYOUTITEM24.setRow( ROW19 );
         LAYOUTITEM24.setMarginRight( 10 );
         LAYOUTITEM24.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM25 --
         // ------------------------------
         LAYOUTITEM25.setAlignment( "TOPLEFT" );
         LAYOUTITEM25.setColumn( COLUMN12 );
         LAYOUTITEM25.setFlow( "DOWN" );
         LAYOUTITEM25.setManage( ACCTUSR );
         LAYOUTITEM25.setParent( AVALAYOUT );
         LAYOUTITEM25.setRow( ROW19 );
         LAYOUTITEM25.setSizing( "FITTOWIDTH" );
         LAYOUTITEM25.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM26 --
         // ------------------------------
         LAYOUTITEM26.setAlignment( "TOPLEFT" );
         LAYOUTITEM26.setColumn( COLUMN12 );
         LAYOUTITEM26.setFlow( "DOWN" );
         LAYOUTITEM26.setManage( MCBILL );
         LAYOUTITEM26.setParent( AVALAYOUT );
         LAYOUTITEM26.setRow( ROW19 );
         LAYOUTITEM26.setSizing( "FITTOWIDTH" );
         LAYOUTITEM26.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM27 --
         // ------------------------------
         LAYOUTITEM27.setAlignment( "TOPLEFT" );
         LAYOUTITEM27.setColumn( COLUMN12 );
         LAYOUTITEM27.setFlow( "DOWN" );
         LAYOUTITEM27.setManage( MRANK );
         LAYOUTITEM27.setParent( AVALAYOUT );
         LAYOUTITEM27.setRow( ROW19 );
         LAYOUTITEM27.setSizing( "FITTOWIDTH" );
         LAYOUTITEM27.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM28 --
         // ------------------------------
         LAYOUTITEM28.setAlignment( "TOPLEFT" );
         LAYOUTITEM28.setColumn( COLUMN12 );
         LAYOUTITEM28.setFlow( "DOWN" );
         LAYOUTITEM28.setManage( MXP );
         LAYOUTITEM28.setParent( AVALAYOUT );
         LAYOUTITEM28.setRow( ROW19 );
         LAYOUTITEM28.setSizing( "FITTOWIDTH" );
         LAYOUTITEM28.initialize();

         // --------------------------------
         // -- Initialize #AVACHGPNLITEM1 --
         // --------------------------------
         AVACHGPNLITEM1.setManage( AVACHGPNL );
         AVACHGPNLITEM1.setParent( AVALAYOUT );
         AVACHGPNLITEM1.setRow( ROW23 );
         AVACHGPNLITEM1.setColumn( COLUMN11 );
         AVACHGPNLITEM1.setColumnSpan( 2 );
         AVACHGPNLITEM1.setFlow( "DOWN" );
         AVACHGPNLITEM1.initialize();

         // ------------------------------
         // -- Initialize #AVACHGLAYOUT --
         // ------------------------------
         AVACHGLAYOUT.initialize();

         // --------------------------
         // -- Initialize #COLUMN13 --
         // --------------------------
         COLUMN13.setDisplayPosition( 1 );
         COLUMN13.setParent( AVACHGLAYOUT );
         COLUMN13.initialize();

         // -----------------------
         // -- Initialize #ROW20 --
         // -----------------------
         ROW20.setDisplayPosition( 1 );
         ROW20.setParent( AVACHGLAYOUT );
         ROW20.setHeight( const4 );
         ROW20.initialize();

         // -----------------------
         // -- Initialize #ROW21 --
         // -----------------------
         ROW21.setDisplayPosition( 2 );
         ROW21.setParent( AVACHGLAYOUT );
         ROW21.setHeight( const5 );
         ROW21.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM38 --
         // ------------------------------
         LAYOUTITEM38.setAlignment( "TOPLEFT" );
         LAYOUTITEM38.setColumn( COLUMN13 );
         LAYOUTITEM38.setFlow( "DOWN" );
         LAYOUTITEM38.setManage( AVACHGPSWD );
         LAYOUTITEM38.setParent( AVACHGLAYOUT );
         LAYOUTITEM38.setRow( ROW21 );
         LAYOUTITEM38.setSizing( "FITTOWIDTH" );
         LAYOUTITEM38.setMarginTop( 10 );
         LAYOUTITEM38.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM40 --
         // ------------------------------
         LAYOUTITEM40.setAlignment( "TOPLEFT" );
         LAYOUTITEM40.setColumn( COLUMN13 );
         LAYOUTITEM40.setFlow( "DOWN" );
         LAYOUTITEM40.setManage( AVACHGEMAIL );
         LAYOUTITEM40.setParent( AVACHGLAYOUT );
         LAYOUTITEM40.setRow( ROW21 );
         LAYOUTITEM40.setSizing( "FITTOWIDTH" );
         LAYOUTITEM40.setMarginTop( 10 );
         LAYOUTITEM40.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM41 --
         // ------------------------------
         LAYOUTITEM41.setAlignment( "TOPLEFT" );
         LAYOUTITEM41.setColumn( COLUMN13 );
         LAYOUTITEM41.setFlow( "DOWN" );
         LAYOUTITEM41.setManage( AVACHGCBILL );
         LAYOUTITEM41.setParent( AVACHGLAYOUT );
         LAYOUTITEM41.setRow( ROW21 );
         LAYOUTITEM41.setSizing( "FITTOWIDTH" );
         LAYOUTITEM41.setMarginTop( 10 );
         LAYOUTITEM41.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM42 --
         // ------------------------------
         LAYOUTITEM42.setAlignment( "TOPLEFT" );
         LAYOUTITEM42.setColumn( COLUMN13 );
         LAYOUTITEM42.setFlow( "DOWN" );
         LAYOUTITEM42.setManage( AVACHGXP );
         LAYOUTITEM42.setParent( AVACHGLAYOUT );
         LAYOUTITEM42.setRow( ROW21 );
         LAYOUTITEM42.setSizing( "FITTOWIDTH" );
         LAYOUTITEM42.setMarginTop( 10 );
         LAYOUTITEM42.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM44 --
         // ------------------------------
         LAYOUTITEM44.setColumn( COLUMN13 );
         LAYOUTITEM44.setFlow( "RIGHT" );
         LAYOUTITEM44.setManage( AVACHGCMD );
         LAYOUTITEM44.setParent( AVACHGLAYOUT );
         LAYOUTITEM44.setRow( ROW20 );
         LAYOUTITEM44.setSizing( "NONE" );
         LAYOUTITEM44.setMarginRight( 10 );
         LAYOUTITEM44.setAlignment( "CENTERLEFT" );
         LAYOUTITEM44.initialize();

         // -----------------------------
         // -- Initialize #MADMINITEM1 --
         // -----------------------------
         MADMINITEM1.setManage( MADMIN );
         MADMINITEM1.setParent( AVACHGLAYOUT );
         MADMINITEM1.setRow( ROW21 );
         MADMINITEM1.setSizing( "NONE" );
         MADMINITEM1.setColumn( COLUMN13 );
         MADMINITEM1.setFlow( "DOWN" );
         MADMINITEM1.setAlignment( "TOPLEFT" );
         MADMINITEM1.setMarginTop( 10 );
         MADMINITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM36 --
         // ------------------------------
         LAYOUTITEM36.setAlignment( "TOPLEFT" );
         LAYOUTITEM36.setColumn( COLUMN13 );
         LAYOUTITEM36.setFlow( "DOWN" );
         LAYOUTITEM36.setManage( AVACHGCNFPSWD );
         LAYOUTITEM36.setParent( AVACHGLAYOUT );
         LAYOUTITEM36.setRow( ROW21 );
         LAYOUTITEM36.setSizing( "FITTOWIDTH" );
         LAYOUTITEM36.setMarginTop( 10 );
         LAYOUTITEM36.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM37 --
         // ------------------------------
         LAYOUTITEM37.setColumn( COLUMN13 );
         LAYOUTITEM37.setManage( AVACHGFLPK );
         LAYOUTITEM37.setParent( AVACHGLAYOUT );
         LAYOUTITEM37.setRow( ROW21 );
         LAYOUTITEM37.setSizing( "NONE" );
         LAYOUTITEM37.setAlignment( "TOPLEFT" );
         LAYOUTITEM37.setFlow( "DOWN" );
         LAYOUTITEM37.setMarginTop( 10 );
         LAYOUTITEM37.setMarginLeft( 100 );
         LAYOUTITEM37.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM39 --
         // ------------------------------
         LAYOUTITEM39.setAlignment( "CENTERLEFT" );
         LAYOUTITEM39.setColumn( COLUMN13 );
         LAYOUTITEM39.setFlow( "RIGHT" );
         LAYOUTITEM39.setManage( MGMTCMD );
         LAYOUTITEM39.setParent( AVACHGLAYOUT );
         LAYOUTITEM39.setRow( ROW20 );
         LAYOUTITEM39.setSizing( "NONE" );
         LAYOUTITEM39.setMarginLeft( 10 );
         LAYOUTITEM39.initialize();

         // ------------------------------
         // -- Initialize #CHOICELAYOUT --
         // ------------------------------
         CHOICELAYOUT.initialize();

         // --------------------------
         // -- Initialize #COLUMN14 --
         // --------------------------
         COLUMN14.setDisplayPosition( 1 );
         COLUMN14.setParent( CHOICELAYOUT );
         COLUMN14.initialize();

         // --------------------------
         // -- Initialize #COLUMN15 --
         // --------------------------
         COLUMN15.setDisplayPosition( 2 );
         COLUMN15.setParent( CHOICELAYOUT );
         COLUMN15.initialize();

         // -----------------------
         // -- Initialize #ROW22 --
         // -----------------------
         ROW22.setDisplayPosition( 1 );
         ROW22.setParent( CHOICELAYOUT );
         ROW22.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM45 --
         // ------------------------------
         LAYOUTITEM45.setColumn( COLUMN15 );
         LAYOUTITEM45.setManage( STOCKIMG );
         LAYOUTITEM45.setParent( CHOICELAYOUT );
         LAYOUTITEM45.setRow( ROW22 );
         LAYOUTITEM45.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM46 --
         // ------------------------------
         LAYOUTITEM46.setColumn( COLUMN15 );
         LAYOUTITEM46.setManage( STOCKLBL );
         LAYOUTITEM46.setParent( CHOICELAYOUT );
         LAYOUTITEM46.setRow( ROW22 );
         LAYOUTITEM46.setMarginLeft( 5 );
         LAYOUTITEM46.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM47 --
         // ------------------------------
         LAYOUTITEM47.setColumn( COLUMN14 );
         LAYOUTITEM47.setManage( URHANGIMG );
         LAYOUTITEM47.setParent( CHOICELAYOUT );
         LAYOUTITEM47.setRow( ROW22 );
         LAYOUTITEM47.setMarginRight( 5 );
         LAYOUTITEM47.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM48 --
         // ------------------------------
         LAYOUTITEM48.setColumn( COLUMN14 );
         LAYOUTITEM48.setManage( URHANGLBL );
         LAYOUTITEM48.setParent( CHOICELAYOUT );
         LAYOUTITEM48.setRow( ROW22 );
         LAYOUTITEM48.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM49 --
         // ------------------------------
         LAYOUTITEM49.setColumn( COLUMN14 );
         LAYOUTITEM49.setManage( MECHTILES );
         LAYOUTITEM49.setParent( CHOICELAYOUT );
         LAYOUTITEM49.setRow( ROW22 );
         LAYOUTITEM49.setColumnSpan( 2 );
         LAYOUTITEM49.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM50 --
         // ------------------------------
         LAYOUTITEM50.setColumn( COLUMN15 );
         LAYOUTITEM50.setManage( MECHTILEPNL );
         LAYOUTITEM50.setParent( CHOICELAYOUT );
         LAYOUTITEM50.setRow( ROW22 );
         LAYOUTITEM50.setSizing( "NONE" );
         LAYOUTITEM50.initialize();

         // ----------------------------
         // -- Initialize #TILELAYOUT --
         // ----------------------------
         TILELAYOUT.initialize();

         // --------------------------
         // -- Initialize #COLUMN16 --
         // --------------------------
         COLUMN16.setDisplayPosition( 1 );
         COLUMN16.setParent( TILELAYOUT );
         COLUMN16.initialize();

         // -----------------------
         // -- Initialize #ROW24 --
         // -----------------------
         ROW24.setDisplayPosition( 1 );
         ROW24.setParent( TILELAYOUT );
         ROW24.initialize();

         // --------------------------------
         // -- Initialize #MECHTILESITEM1 --
         // --------------------------------
         MECHTILESITEM1.setManage( MECHTILES );
         MECHTILESITEM1.setParent( TILELAYOUT );
         MECHTILESITEM1.setRow( ROW24 );
         MECHTILESITEM1.setColumn( COLUMN16 );
         MECHTILESITEM1.initialize();

         // --------------------------
         // -- Initialize #LOGINLBL --
         // --------------------------
         LOGINLBL.setCaption( "BATTLE MECHS" );
         LOGINLBL.setDisplayPosition( 1 );
         LOGINLBL.setEllipses( "WORD" );
         LOGINLBL.setHeight( 217 );
         LOGINLBL.setLeft( 0 );
         LOGINLBL.setParent( LOGINPNL );
         LOGINLBL.setTabPosition( 4 );
         LOGINLBL.setTabStop( false );
         LOGINLBL.setTop( 0 );
         LOGINLBL.setVerticalAlignment( "CENTER" );
         LOGINLBL.setWidth( 1081 );
         LOGINLBL.setStyle( STYLE1 );
         LOGINLBL.setAlignment( "CENTER" );
         LOGINLBL.initialize();

         // -----------------------
         // -- Initialize #MUSER --
         // -----------------------
         MUSER.setDisplayPosition( 2 );
         MUSER.setParent( LOGINPNL );
         MUSER.setTabPosition( 3 );
         MUSER.setTop( 222 );
         MUSER.setWidth( 252 );
         MUSER.setLeft( 414 );
         MUSER.setLabelPosition( "NONE" );
         MUSER.setMarginLeft( 0 );
         MUSER.setPlaceholder( "Username" );
         MUSER.applyDefault();
         MUSER.initialize();

         // --------------------------
         // -- Initialize #LOGINCMD --
         // --------------------------
         LOGINCMD.setDisplayPosition( 7 );
         LOGINCMD.setLeft( 417 );
         LOGINCMD.setParent( LOGINPNL );
         LOGINCMD.setTabPosition( 7 );
         LOGINCMD.setTop( 409 );
         LOGINCMD.setHeight( 110 );
         LOGINCMD.setWidth( 246 );
         LOGINCMD.setCaption( "ENTER MechXsphere" );
         LOGINCMD.setThemeDrawStyle( "PushButton" );
         LOGINCMD.setTabStop( false );
         LOGINCMD.initialize();

         // ----------------------
         // -- Initialize #FIRE --
         // ----------------------
         FIRE.setDisplayPosition( 8 );
         FIRE.setLeft( 0 );
         FIRE.setParent( LOGINPNL );
         FIRE.setTabPosition( 6 );
         FIRE.setTabStop( false );
         FIRE.setTop( 0 );
         FIRE.setHeight( 649 );
         FIRE.setWidth( 1081 );
         FIRE.setOpacity( 80 );
         FIRE.setFileName( "/Images/Mechs/MechLoginFire.gif" );
         FIRE.setImageSizing( "FITBOTH" );
         FIRE.initialize();

         // -------------------------------
         // -- Initialize #PASSWORDRESET --
         // -------------------------------
         PASSWORDRESET.setCaption( "Forgot Password?" );
         PASSWORDRESET.setDisplayPosition( 5 );
         PASSWORDRESET.setEllipses( "WORD" );
         PASSWORDRESET.setHeight( 25 );
         PASSWORDRESET.setLeft( 420 );
         PASSWORDRESET.setParent( LOGINPNL );
         PASSWORDRESET.setTabPosition( 1 );
         PASSWORDRESET.setTabStop( false );
         PASSWORDRESET.setTop( 319 );
         PASSWORDRESET.setVerticalAlignment( "CENTER" );
         PASSWORDRESET.setWidth( 241 );
         PASSWORDRESET.setAlignment( "CENTER" );
         PASSWORDRESET.setStyle( STYLE2 );
         PASSWORDRESET.initialize();

         // -------------------------------
         // -- Initialize #USERNAMERESET --
         // -------------------------------
         USERNAMERESET.setDisplayPosition( 3 );
         USERNAMERESET.setEllipses( "WORD" );
         USERNAMERESET.setHeight( 25 );
         USERNAMERESET.setLeft( 410 );
         USERNAMERESET.setParent( LOGINPNL );
         USERNAMERESET.setTabPosition( 5 );
         USERNAMERESET.setTabStop( false );
         USERNAMERESET.setTop( 253 );
         USERNAMERESET.setVerticalAlignment( "CENTER" );
         USERNAMERESET.setWidth( 261 );
         USERNAMERESET.setAlignment( "CENTER" );
         USERNAMERESET.setCaption( "Forgot Username?" );
         USERNAMERESET.setStyle( STYLE3 );
         USERNAMERESET.initialize();

         // --------------------------
         // -- Initialize #LOGINPNL --
         // --------------------------
         LOGINPNL.setDisplayPosition( 10 );
         LOGINPNL.setHeight( 649 );
         LOGINPNL.setLeft( 0 );
         LOGINPNL.setParent( this );
         LOGINPNL.setTabPosition( 1 );
         LOGINPNL.setTabStop( false );
         LOGINPNL.setTop( 0 );
         LOGINPNL.setWidth( 1081 );
         LOGINPNL.setLayoutManager( LOGINLAYOUT );
         LOGINPNL.setVisible( false );
         LOGINPNL.initialize();

         // ------------------------------
         // -- Initialize #BLASTDOORPNL --
         // ------------------------------
         BLASTDOORPNL.setDisplayPosition( 7 );
         BLASTDOORPNL.setHeight( 649 );
         BLASTDOORPNL.setLeft( 0 );
         BLASTDOORPNL.setParent( this );
         BLASTDOORPNL.setTabPosition( 8 );
         BLASTDOORPNL.setTabStop( false );
         BLASTDOORPNL.setTop( 0 );
         BLASTDOORPNL.setWidth( 1081 );
         BLASTDOORPNL.setLayoutManager( BLASTDOORLAYOUT );
         BLASTDOORPNL.initialize();

         // ---------------------------
         // -- Initialize #BLASTDOOR --
         // ---------------------------
         BLASTDOOR.setDisplayPosition( 1 );
         BLASTDOOR.setLeft( 0 );
         BLASTDOOR.setParent( BLASTDOORPNL );
         BLASTDOOR.setTabPosition( 1 );
         BLASTDOOR.setTabStop( false );
         BLASTDOOR.setTop( 0 );
         BLASTDOOR.setImageSizing( "FITBOTH" );
         BLASTDOOR.setFileName( "/images/mechs/door.jpg" );
         BLASTDOOR.setHeight( 649 );
         BLASTDOOR.setWidth( 1081 );
         BLASTDOOR.initialize();

         // ---------------------------
         // -- Initialize #DOORSOUND --
         // ---------------------------
         DOORSOUND.setDisplayPosition( 9 );
         DOORSOUND.setLeft( 0 );
         DOORSOUND.setParent( this );
         DOORSOUND.setTabPosition( 6 );
         DOORSOUND.setTop( 0 );
         DOORSOUND.setVisible( false );
         DOORSOUND.initialize();

         // -----------------------
         // -- Initialize #MUSIC --
         // -----------------------
         MUSIC.setDisplayPosition( 8 );
         MUSIC.setLeft( 0 );
         MUSIC.setParent( this );
         MUSIC.setTabPosition( 5 );
         MUSIC.setTop( 0 );
         MUSIC.setVisible( false );
         MUSIC.setCycleToStart( true );
         MUSIC.initialize();

         // -----------------------------
         // -- Initialize #REGISTERLBL --
         // -----------------------------
         REGISTERLBL.setCaption( "Not a Member? Sign up!" );
         REGISTERLBL.setDisplayPosition( 6 );
         REGISTERLBL.setEllipses( "WORD" );
         REGISTERLBL.setHeight( 25 );
         REGISTERLBL.setLeft( 414 );
         REGISTERLBL.setParent( LOGINPNL );
         REGISTERLBL.setTabPosition( 2 );
         REGISTERLBL.setTabStop( false );
         REGISTERLBL.setTop( 354 );
         REGISTERLBL.setVerticalAlignment( "CENTER" );
         REGISTERLBL.setWidth( 252 );
         REGISTERLBL.setAlignment( "CENTER" );
         REGISTERLBL.setStyle( STYLE4 );
         REGISTERLBL.initialize();

         // ----------------------------------
         // -- Initialize #RESETREGISTERPNL --
         // ----------------------------------
         RESETREGISTERPNL.setDisplayPosition( 6 );
         RESETREGISTERPNL.setLeft( 0 );
         RESETREGISTERPNL.setParent( this );
         RESETREGISTERPNL.setTabPosition( 2 );
         RESETREGISTERPNL.setTabStop( false );
         RESETREGISTERPNL.setTop( 0 );
         RESETREGISTERPNL.setHeight( 649 );
         RESETREGISTERPNL.setWidth( 1081 );
         RESETREGISTERPNL.setVisible( false );
         RESETREGISTERPNL.setLayoutManager( REGLAYOUT );
         RESETREGISTERPNL.initialize();

         // -------------------------
         // -- Initialize #REGUSER --
         // -------------------------
         REGUSER.setDisplayPosition( 1 );
         REGUSER.setHeight( 42 );
         REGUSER.setParent( RESETREGISTERPNL );
         REGUSER.setTabPosition( 1 );
         REGUSER.setTop( 227 );
         REGUSER.setWidth( 260 );
         REGUSER.setCaption( "Username" );
         REGUSER.setLabelType( "CAPTION" );
         REGUSER.setMarginLeft( 0 );
         REGUSER.setLeft( 410 );
         REGUSER.setLabelHorAlignment( "CENTER" );
         REGUSER.setLabelPosition( "TOP" );
         REGUSER.setMarginTop( 21 );
         REGUSER.applyDefault();
         REGUSER.initialize();

         // ------------------------
         // -- Initialize #MEMAIL --
         // ------------------------
         MEMAIL.setDisplayPosition( 5 );
         MEMAIL.setHeight( 42 );
         MEMAIL.setParent( RESETREGISTERPNL );
         MEMAIL.setTabPosition( 4 );
         MEMAIL.setTop( 383 );
         MEMAIL.setWidth( 268 );
         MEMAIL.setCaption( "Email" );
         MEMAIL.setLabelType( "CAPTION" );
         MEMAIL.setMarginLeft( 0 );
         MEMAIL.setLeft( 406 );
         MEMAIL.setLabelHorAlignment( "CENTER" );
         MEMAIL.setLabelPosition( "TOP" );
         MEMAIL.setMarginTop( 21 );
         MEMAIL.applyDefault();
         MEMAIL.initialize();

         // -----------------------------
         // -- Initialize #REGPASSWORD --
         // -----------------------------
         REGPASSWORD.setDisplayPosition( 3 );
         REGPASSWORD.setParent( RESETREGISTERPNL );
         REGPASSWORD.setTabPosition( 2 );
         REGPASSWORD.setTop( 279 );
         REGPASSWORD.setWidth( 264 );
         REGPASSWORD.setCaption( "Password" );
         REGPASSWORD.setLabelType( "CAPTION" );
         REGPASSWORD.setMarginLeft( 0 );
         REGPASSWORD.setLeft( 408 );
         REGPASSWORD.setHeight( 42 );
         REGPASSWORD.setLabelHorAlignment( "CENTER" );
         REGPASSWORD.setLabelPosition( "TOP" );
         REGPASSWORD.setMarginTop( 21 );
         REGPASSWORD.applyDefault();
         REGPASSWORD.initialize();

         // --------------------------
         // -- Initialize #CNFMPASS --
         // --------------------------
         CNFMPASS.setDisplayPosition( 4 );
         CNFMPASS.setParent( RESETREGISTERPNL );
         CNFMPASS.setTabPosition( 3 );
         CNFMPASS.setTop( 331 );
         CNFMPASS.setCaption( "Confirm Password" );
         CNFMPASS.setLabelType( "CAPTION" );
         CNFMPASS.setWidth( 268 );
         CNFMPASS.setMarginLeft( 0 );
         CNFMPASS.setLeft( 406 );
         CNFMPASS.setHeight( 42 );
         CNFMPASS.setLabelHorAlignment( "CENTER" );
         CNFMPASS.setLabelPosition( "TOP" );
         CNFMPASS.setMarginTop( 21 );
         CNFMPASS.applyDefault();
         CNFMPASS.initialize();

         // --------------------------
         // -- Initialize #REGOKCMD --
         // --------------------------
         REGOKCMD.setCaption( "Register" );
         REGOKCMD.setDisplayPosition( 6 );
         REGOKCMD.setLeft( 403 );
         REGOKCMD.setParent( RESETREGISTERPNL );
         REGOKCMD.setTabPosition( 5 );
         REGOKCMD.setTop( 525 );
         REGOKCMD.setWidth( 135 );
         REGOKCMD.setHeight( 32 );
         REGOKCMD.setButtonDefault( true );
         REGOKCMD.initialize();

         // ---------------------------
         // -- Initialize #REGCNLCMD --
         // ---------------------------
         REGCNLCMD.setDisplayPosition( 7 );
         REGCNLCMD.setLeft( 588 );
         REGCNLCMD.setParent( RESETREGISTERPNL );
         REGCNLCMD.setTabPosition( 6 );
         REGCNLCMD.setTop( 525 );
         REGCNLCMD.setCaption( "Cancel" );
         REGCNLCMD.setHeight( 32 );
         REGCNLCMD.setWidth( 101 );
         REGCNLCMD.setButtonCancel( true );
         REGCNLCMD.initialize();

         // --------------------------
         // -- Initialize #MPASSWRD --
         // --------------------------
         MPASSWRD.setDisplayPosition( 4 );
         MPASSWRD.setLeft( 414 );
         MPASSWRD.setParent( LOGINPNL );
         MPASSWRD.setTabPosition( 8 );
         MPASSWRD.setTop( 288 );
         MPASSWRD.setLabelPosition( "NONE" );
         MPASSWRD.setMarginLeft( 0 );
         MPASSWRD.setWidth( 252 );
         MPASSWRD.setPlaceholder( "Password" );
         MPASSWRD.applyDefault();
         MPASSWRD.initialize();

         // --------------------------
         // -- Initialize #RGRTITLE --
         // --------------------------
         RGRTITLE.setCaption( "REGISTRATION" );
         RGRTITLE.setDisplayPosition( 2 );
         RGRTITLE.setEllipses( "WORD" );
         RGRTITLE.setHeight( 64 );
         RGRTITLE.setLeft( 0 );
         RGRTITLE.setParent( RESETREGISTERPNL );
         RGRTITLE.setTabPosition( 7 );
         RGRTITLE.setTabStop( false );
         RGRTITLE.setTop( 76 );
         RGRTITLE.setVerticalAlignment( "CENTER" );
         RGRTITLE.setWidth( 1081 );
         RGRTITLE.setStyle( STYLE5 );
         RGRTITLE.setAlignment( "CENTER" );
         RGRTITLE.initialize();

         // --------------------------
         // -- Initialize #REGBKIMG --
         // --------------------------
         REGBKIMG.setDisplayPosition( 8 );
         REGBKIMG.setLeft( 0 );
         REGBKIMG.setParent( RESETREGISTERPNL );
         REGBKIMG.setTabPosition( 8 );
         REGBKIMG.setTabStop( false );
         REGBKIMG.setTop( 0 );
         REGBKIMG.setImageSizing( "FITBOTH" );
         REGBKIMG.setHeight( 649 );
         REGBKIMG.setWidth( 1081 );
         REGBKIMG.setFileName( "/images/mechs/registration.gif" );
         REGBKIMG.setOpacity( 50 );
         REGBKIMG.initialize();

         // ------------------------
         // -- Initialize #SVRMSG --
         // ------------------------
         SVRMSG.setLeft( 364 );
         SVRMSG.setParent( this );
         SVRMSG.setTop( 248 );
         SVRMSG.setThemeDrawStyle( "MediumTitle" );
         SVRMSG.setCloseOnClick( true );
         SVRMSG.setLayoutManager( MSGLAYOUT );
         SVRMSG.setHeight( 153 );
         SVRMSG.setWidth( 352 );
         SVRMSG.initialize();

         // ------------------------
         // -- Initialize #MSGLBL --
         // ------------------------
         MSGLBL.setCaption( "Label1" );
         MSGLBL.setDisplayPosition( 1 );
         MSGLBL.setEllipses( "WORD" );
         MSGLBL.setHeight( 151 );
         MSGLBL.setLeft( 0 );
         MSGLBL.setParent( SVRMSG );
         MSGLBL.setTabPosition( 1 );
         MSGLBL.setTabStop( false );
         MSGLBL.setTop( 0 );
         MSGLBL.setVerticalAlignment( "CENTER" );
         MSGLBL.setWidth( 350 );
         MSGLBL.setAlignment( "CENTER" );
         MSGLBL.setThemeDrawStyle( "MediumTitle" );
         MSGLBL.setStyle( STYLE6 );
         MSGLBL.initialize();

         // ---------------------------
         // -- Initialize #FGTUSRPNL --
         // ---------------------------
         FGTUSRPNL.setDisplayPosition( 4 );
         FGTUSRPNL.setLeft( 0 );
         FGTUSRPNL.setParent( this );
         FGTUSRPNL.setTabPosition( 9 );
         FGTUSRPNL.setTabStop( false );
         FGTUSRPNL.setTop( 0 );
         FGTUSRPNL.setLayoutManager( FGTUSRL );
         FGTUSRPNL.setHeight( 649 );
         FGTUSRPNL.setWidth( 1081 );
         FGTUSRPNL.setVisible( false );
         FGTUSRPNL.initialize();

         // ---------------------------
         // -- Initialize #FGTPSWPNL --
         // ---------------------------
         FGTPSWPNL.setDisplayPosition( 2 );
         FGTPSWPNL.setLeft( 0 );
         FGTPSWPNL.setParent( this );
         FGTPSWPNL.setTabPosition( 10 );
         FGTPSWPNL.setTabStop( false );
         FGTPSWPNL.setTop( 0 );
         FGTPSWPNL.setLayoutManager( FGTPSWL );
         FGTPSWPNL.setHeight( 649 );
         FGTPSWPNL.setWidth( 1081 );
         FGTPSWPNL.setVisible( false );
         FGTPSWPNL.initialize();

         // ----------------------------
         // -- Initialize #FGTUSRLBLT --
         // ----------------------------
         FGTUSRLBLT.setCaption( "Forgot Username" );
         FGTUSRLBLT.setDisplayPosition( 4 );
         FGTUSRLBLT.setEllipses( "WORD" );
         FGTUSRLBLT.setHeight( 217 );
         FGTUSRLBLT.setLeft( 290 );
         FGTUSRLBLT.setParent( FGTUSRPNL );
         FGTUSRLBLT.setTabPosition( 2 );
         FGTUSRLBLT.setTabStop( false );
         FGTUSRLBLT.setTop( 0 );
         FGTUSRLBLT.setVerticalAlignment( "CENTER" );
         FGTUSRLBLT.setWidth( 500 );
         FGTUSRLBLT.setAlignment( "CENTER" );
         FGTUSRLBLT.setStyle( STYLE7 );
         FGTUSRLBLT.initialize();

         // ---------------------------
         // -- Initialize #FGTUSRCMD --
         // ---------------------------
         FGTUSRCMD.setCaption( "Submit" );
         FGTUSRCMD.setDisplayPosition( 2 );
         FGTUSRCMD.setLeft( 410 );
         FGTUSRCMD.setParent( FGTUSRPNL );
         FGTUSRCMD.setTabPosition( 1 );
         FGTUSRCMD.setTop( 525 );
         FGTUSRCMD.setWidth( 120 );
         FGTUSRCMD.setHeight( 32 );
         FGTUSRCMD.initialize();

         // ----------------------------
         // -- Initialize #FGTPSWLBLT --
         // ----------------------------
         FGTPSWLBLT.setCaption( "Password Reset" );
         FGTPSWLBLT.setDisplayPosition( 1 );
         FGTPSWLBLT.setEllipses( "WORD" );
         FGTPSWLBLT.setHeight( 30 );
         FGTPSWLBLT.setLeft( 0 );
         FGTPSWLBLT.setParent( FGTPSWPNL );
         FGTPSWLBLT.setTabPosition( 1 );
         FGTPSWLBLT.setTabStop( false );
         FGTPSWLBLT.setTop( 93 );
         FGTPSWLBLT.setVerticalAlignment( "CENTER" );
         FGTPSWLBLT.setWidth( 1081 );
         FGTPSWLBLT.setAlignment( "CENTER" );
         FGTPSWLBLT.setStyle( STYLE8 );
         FGTPSWLBLT.initialize();

         // ---------------------------
         // -- Initialize #FGTPSWCMD --
         // ---------------------------
         FGTPSWCMD.setCaption( "Submit" );
         FGTPSWCMD.setDisplayPosition( 2 );
         FGTPSWCMD.setLeft( 386 );
         FGTPSWCMD.setParent( FGTPSWPNL );
         FGTPSWCMD.setTabPosition( 2 );
         FGTPSWCMD.setTop( 525 );
         FGTPSWCMD.setHeight( 32 );
         FGTPSWCMD.setWidth( 149 );
         FGTPSWCMD.initialize();

         // --------------------------
         // -- Initialize #FGTEMAIL --
         // --------------------------
         FGTEMAIL.setDisplayPosition( 1 );
         FGTEMAIL.setParent( FGTUSRPNL );
         FGTEMAIL.setTabPosition( 4 );
         FGTEMAIL.setTop( 295 );
         FGTEMAIL.setLeft( 365 );
         FGTEMAIL.setWidth( 350 );
         FGTEMAIL.setHeight( 60 );
         FGTEMAIL.setLabelHorAlignment( "CENTER" );
         FGTEMAIL.setLabelPosition( "TOP" );
         FGTEMAIL.setMarginLeft( 0 );
         FGTEMAIL.setMarginTop( 21 );
         FGTEMAIL.applyDefault();
         FGTEMAIL.initialize();

         // ---------------------------
         // -- Initialize #FGTUSRCNL --
         // ---------------------------
         FGTUSRCNL.setCaption( "Go Back" );
         FGTUSRCNL.setDisplayPosition( 3 );
         FGTUSRCNL.setLeft( 580 );
         FGTUSRCNL.setParent( FGTUSRPNL );
         FGTUSRCNL.setTabPosition( 3 );
         FGTUSRCNL.setTop( 525 );
         FGTUSRCNL.setWidth( 120 );
         FGTUSRCNL.setHeight( 32 );
         FGTUSRCNL.initialize();

         // -------------------------
         // -- Initialize #MAINPNL --
         // -------------------------
         MAINPNL.setDisplayPosition( 1 );
         MAINPNL.setLeft( 0 );
         MAINPNL.setParent( this );
         MAINPNL.setTabPosition( 3 );
         MAINPNL.setTabStop( false );
         MAINPNL.setTop( 0 );
         MAINPNL.setHeight( 649 );
         MAINPNL.setWidth( 1081 );
         MAINPNL.setLayoutManager( MAINPNLLAYOUT );
         MAINPNL.setVisible( false );
         MAINPNL.initialize();

         // -----------------------------
         // -- Initialize #FGTUSRBKGND --
         // -----------------------------
         FGTUSRBKGND.setDisplayPosition( 5 );
         FGTUSRBKGND.setLeft( 0 );
         FGTUSRBKGND.setParent( FGTUSRPNL );
         FGTUSRBKGND.setTabPosition( 5 );
         FGTUSRBKGND.setTabStop( false );
         FGTUSRBKGND.setTop( 0 );
         FGTUSRBKGND.setHeight( 649 );
         FGTUSRBKGND.setWidth( 1081 );
         FGTUSRBKGND.setFileName( "/images/mechs/GearBanner.jpg" );
         FGTUSRBKGND.setImageSizing( "FITBOTH" );
         FGTUSRBKGND.setOpacity( 30 );
         FGTUSRBKGND.initialize();

         // ----------------------------
         // -- Initialize #LOGINSOUND --
         // ----------------------------
         LOGINSOUND.setDisplayPosition( 3 );
         LOGINSOUND.setLeft( 0 );
         LOGINSOUND.setParent( this );
         LOGINSOUND.setTabPosition( 7 );
         LOGINSOUND.setTop( 0 );
         LOGINSOUND.setVisible( false );
         LOGINSOUND.setAutoplay( false );
         LOGINSOUND.initialize();

         // -------------------------
         // -- Initialize #HOLDIMG --
         // -------------------------
         HOLDIMG.setDisplayPosition( 5 );
         HOLDIMG.setLeft( 0 );
         HOLDIMG.setParent( MAINPNL );
         HOLDIMG.setTabPosition( 1 );
         HOLDIMG.setTabStop( false );
         HOLDIMG.setTop( 0 );
         HOLDIMG.setImageSizing( "FITBOTH" );
         HOLDIMG.setFileName( "/images/mechs/mechHanger.jpg" );
         HOLDIMG.setHeight( 649 );
         HOLDIMG.setWidth( 1081 );
         HOLDIMG.setOpacity( 50 );
         HOLDIMG.initialize();

         // ------------------------
         // -- Initialize #AVAPNL --
         // ------------------------
         AVAPNL.setDisplayPosition( 3 );
         AVAPNL.setLeft( 0 );
         AVAPNL.setParent( MAINPNL );
         AVAPNL.setTabPosition( 2 );
         AVAPNL.setTabStop( false );
         AVAPNL.setTop( 0 );
         AVAPNL.setHeight( 436 );
         AVAPNL.setWidth( 346 );
         AVAPNL.setLayoutManager( AVALAYOUT );
         AVAPNL.initialize();

         // ------------------------
         // -- Initialize #AVAIMG --
         // ------------------------
         AVAIMG.setDisplayPosition( 3 );
         AVAIMG.setLeft( 0 );
         AVAIMG.setParent( AVAPNL );
         AVAIMG.setTabPosition( 1 );
         AVAIMG.setTabStop( false );
         AVAIMG.setTop( 0 );
         AVAIMG.setHeight( 85 );
         AVAIMG.setWidth( 90 );
         AVAIMG.setImageSizing( "FITBOTH" );
         AVAIMG.setStyle( STYLE13 );
         AVAIMG.setMouseOverStyle( STYLE14 );
         AVAIMG.initialize();

         // -------------------------
         // -- Initialize #ACCTUSR --
         // -------------------------
         ACCTUSR.setDisplayPosition( 2 );
         ACCTUSR.setLeft( 100 );
         ACCTUSR.setParent( AVAPNL );
         ACCTUSR.setTabPosition( 2 );
         ACCTUSR.setMarginLeft( 80 );
         ACCTUSR.setWidth( 246 );
         ACCTUSR.setCaption( "User ID" );
         ACCTUSR.setLabelType( "CAPTION" );
         ACCTUSR.setMarginRight( 10 );
         ACCTUSR.setHeight( 25 );
         ACCTUSR.setDisplayOnly( true );
         ACCTUSR.setThemeDrawStyle( "Labels" );
         ACCTUSR.setStyle( STYLE9 );
         ACCTUSR.setTabStop( false );
         ACCTUSR.applyDefault();
         ACCTUSR.initialize();

         // ------------------------
         // -- Initialize #MCBILL --
         // ------------------------
         MCBILL.setDisplayPosition( 5 );
         MCBILL.setLeft( 100 );
         MCBILL.setParent( AVAPNL );
         MCBILL.setTabPosition( 3 );
         MCBILL.setTop( 46 );
         MCBILL.setWidth( 246 );
         MCBILL.setMarginLeft( 80 );
         MCBILL.setCaption( "CBills" );
         MCBILL.setLabelType( "CAPTION" );
         MCBILL.setDisplayOnly( true );
         MCBILL.setThemeDrawStyle( "Labels" );
         MCBILL.setStyle( STYLE10 );
         MCBILL.setTabStop( false );
         MCBILL.applyDefault();
         MCBILL.initialize();

         // -----------------------
         // -- Initialize #MRANK --
         // -----------------------
         MRANK.setDisplayPosition( 4 );
         MRANK.setLeft( 100 );
         MRANK.setParent( AVAPNL );
         MRANK.setTabPosition( 5 );
         MRANK.setWidth( 246 );
         MRANK.setLabelType( "CAPTION" );
         MRANK.setCaption( "Rank" );
         MRANK.setMarginLeft( 80 );
         MRANK.setTop( 25 );
         MRANK.setDisplayOnly( true );
         MRANK.setThemeDrawStyle( "Labels" );
         MRANK.setStyle( STYLE11 );
         MRANK.setTabStop( false );
         MRANK.applyDefault();
         MRANK.initialize();

         // ---------------------
         // -- Initialize #MXP --
         // ---------------------
         MXP.setDisplayPosition( 6 );
         MXP.setLeft( 100 );
         MXP.setParent( AVAPNL );
         MXP.setTabPosition( 6 );
         MXP.setTop( 67 );
         MXP.setWidth( 246 );
         MXP.setCaption( "XP" );
         MXP.setLabelType( "CAPTION" );
         MXP.setMarginLeft( 80 );
         MXP.setDisplayOnly( true );
         MXP.setThemeDrawStyle( "Labels" );
         MXP.setStyle( STYLE12 );
         MXP.setTabStop( false );
         MXP.applyDefault();
         MXP.initialize();

         // ---------------------------
         // -- Initialize #LOGOFFCMD --
         // ---------------------------
         LOGOFFCMD.setDisplayPosition( 4 );
         LOGOFFCMD.setLeft( 968 );
         LOGOFFCMD.setParent( MAINPNL );
         LOGOFFCMD.setTabPosition( 3 );
         LOGOFFCMD.setWidth( 103 );
         LOGOFFCMD.setCaption( "Log off" );
         LOGOFFCMD.initialize();

         // ---------------------------
         // -- Initialize #LOGOFFSND --
         // ---------------------------
         LOGOFFSND.setDisplayPosition( 5 );
         LOGOFFSND.setLeft( 0 );
         LOGOFFSND.setParent( this );
         LOGOFFSND.setTabPosition( 4 );
         LOGOFFSND.setTop( 0 );
         LOGOFFSND.setVisible( false );
         LOGOFFSND.setAutoplay( false );
         LOGOFFSND.initialize();

         // ---------------------------
         // -- Initialize #FGTPSWCNL --
         // ---------------------------
         FGTPSWCNL.setCaption( "Cancel" );
         FGTPSWCNL.setDisplayPosition( 3 );
         FGTPSWCNL.setLeft( 585 );
         FGTPSWCNL.setParent( FGTPSWPNL );
         FGTPSWCNL.setTabPosition( 3 );
         FGTPSWCNL.setTop( 525 );
         FGTPSWCNL.setHeight( 32 );
         FGTPSWCNL.setWidth( 130 );
         FGTPSWCNL.initialize();

         // ---------------------------
         // -- Initialize #FGTPSWUSR --
         // ---------------------------
         FGTPSWUSR.setDisplayPosition( 4 );
         FGTPSWUSR.setLeft( 348 );
         FGTPSWUSR.setParent( FGTPSWPNL );
         FGTPSWUSR.setTabPosition( 4 );
         FGTPSWUSR.setTop( 315 );
         FGTPSWUSR.setWidth( 384 );
         FGTPSWUSR.setCaption( "Username" );
         FGTPSWUSR.setLabelType( "CAPTION" );
         FGTPSWUSR.setMarginLeft( 113 );
         FGTPSWUSR.applyDefault();
         FGTPSWUSR.initialize();

         // -----------------------------
         // -- Initialize #FGTPSWEMAIL --
         // -----------------------------
         FGTPSWEMAIL.setDisplayPosition( 5 );
         FGTPSWEMAIL.setLeft( 311 );
         FGTPSWEMAIL.setParent( FGTPSWPNL );
         FGTPSWEMAIL.setTabPosition( 5 );
         FGTPSWEMAIL.setTop( 346 );
         FGTPSWEMAIL.setWidth( 459 );
         FGTPSWEMAIL.setLabelType( "CAPTION" );
         FGTPSWEMAIL.setCaption( "Email Addres" );
         FGTPSWEMAIL.applyDefault();
         FGTPSWEMAIL.initialize();

         // -----------------------------
         // -- Initialize #FGTPSWBKGND --
         // -----------------------------
         FGTPSWBKGND.setDisplayPosition( 6 );
         FGTPSWBKGND.setLeft( 0 );
         FGTPSWBKGND.setParent( FGTPSWPNL );
         FGTPSWBKGND.setTabPosition( 6 );
         FGTPSWBKGND.setTabStop( false );
         FGTPSWBKGND.setTop( 0 );
         FGTPSWBKGND.setHeight( 649 );
         FGTPSWBKGND.setWidth( 1081 );
         FGTPSWBKGND.setOpacity( 30 );
         FGTPSWBKGND.setFileName( "/images/mechs/GearBanner.jpg" );
         FGTPSWBKGND.setImageSizing( "FITBOTH" );
         FGTPSWBKGND.initialize();

         // ---------------------------
         // -- Initialize #AVACHGPNL --
         // ---------------------------
         AVACHGPNL.setDisplayPosition( 1 );
         AVACHGPNL.setLeft( 0 );
         AVACHGPNL.setParent( AVAPNL );
         AVACHGPNL.setTabPosition( 4 );
         AVACHGPNL.setTabStop( false );
         AVACHGPNL.setTop( 85 );
         AVACHGPNL.setHeight( 351 );
         AVACHGPNL.setWidth( 346 );
         AVACHGPNL.setLayoutManager( AVACHGLAYOUT );
         AVACHGPNL.setVisible( false );
         AVACHGPNL.setStyle( STYLE15 );
         AVACHGPNL.initialize();

         // ----------------------------
         // -- Initialize #AVACHGPSWD --
         // ----------------------------
         AVACHGPSWD.setDisplayPosition( 1 );
         AVACHGPSWD.setParent( AVACHGPNL );
         AVACHGPSWD.setTabPosition( 1 );
         AVACHGPSWD.setTop( 51 );
         AVACHGPSWD.setWidth( 346 );
         AVACHGPSWD.setLabelType( "CAPTION" );
         AVACHGPSWD.setCaption( "Password" );
         AVACHGPSWD.setMarginLeft( 100 );
         AVACHGPSWD.applyDefault();
         AVACHGPSWD.initialize();

         // ------------------------
         // -- Initialize #MADMIN --
         // ------------------------
         MADMIN.setDisplayPosition( 3 );
         MADMIN.setParent( AVACHGPNL );
         MADMIN.setTabPosition( 3 );
         MADMIN.setTop( 113 );
         MADMIN.setWidth( 233 );
         MADMIN.setMarginLeft( 100 );
         MADMIN.applyDefault();
         MADMIN.initialize();

         // -----------------------------
         // -- Initialize #AVACHGEMAIL --
         // -----------------------------
         AVACHGEMAIL.setDisplayPosition( 4 );
         AVACHGEMAIL.setParent( AVACHGPNL );
         AVACHGEMAIL.setTabPosition( 4 );
         AVACHGEMAIL.setTop( 142 );
         AVACHGEMAIL.setWidth( 346 );
         AVACHGEMAIL.setCaption( "Email" );
         AVACHGEMAIL.setLabelType( "CAPTION" );
         AVACHGEMAIL.setMarginLeft( 100 );
         AVACHGEMAIL.applyDefault();
         AVACHGEMAIL.initialize();

         // -----------------------------
         // -- Initialize #AVACHGCBILL --
         // -----------------------------
         AVACHGCBILL.setDisplayPosition( 5 );
         AVACHGCBILL.setParent( AVACHGPNL );
         AVACHGCBILL.setTabPosition( 5 );
         AVACHGCBILL.setTop( 173 );
         AVACHGCBILL.setLabelType( "CAPTION" );
         AVACHGCBILL.setCaption( "CBills" );
         AVACHGCBILL.setWidth( 346 );
         AVACHGCBILL.setMarginLeft( 100 );
         AVACHGCBILL.applyDefault();
         AVACHGCBILL.initialize();

         // --------------------------
         // -- Initialize #AVACHGXP --
         // --------------------------
         AVACHGXP.setDisplayPosition( 6 );
         AVACHGXP.setParent( AVACHGPNL );
         AVACHGXP.setTabPosition( 6 );
         AVACHGXP.setTop( 204 );
         AVACHGXP.setWidth( 346 );
         AVACHGXP.setLabelType( "CAPTION" );
         AVACHGXP.setCaption( "XP" );
         AVACHGXP.setMarginLeft( 100 );
         AVACHGXP.applyDefault();
         AVACHGXP.initialize();

         // ---------------------------
         // -- Initialize #AVACHGCMD --
         // ---------------------------
         AVACHGCMD.setCaption( "Confirm" );
         AVACHGCMD.setDisplayPosition( 7 );
         AVACHGCMD.setParent( AVACHGPNL );
         AVACHGCMD.setTabPosition( 8 );
         AVACHGCMD.setTop( 8 );
         AVACHGCMD.setWidth( 112 );
         AVACHGCMD.setLeft( 0 );
         AVACHGCMD.initialize();

         // -------------------------------
         // -- Initialize #AVACHGCNFPSWD --
         // -------------------------------
         AVACHGCNFPSWD.setDisplayPosition( 2 );
         AVACHGCNFPSWD.setParent( AVACHGPNL );
         AVACHGCNFPSWD.setTabPosition( 2 );
         AVACHGCNFPSWD.setTop( 82 );
         AVACHGCNFPSWD.setWidth( 346 );
         AVACHGCNFPSWD.setCaption( "Confirm" );
         AVACHGCNFPSWD.setLabelType( "CAPTION" );
         AVACHGCNFPSWD.setMarginLeft( 100 );
         AVACHGCNFPSWD.applyDefault();
         AVACHGCNFPSWD.initialize();

         // ----------------------------
         // -- Initialize #AVACHGFLPK --
         // ----------------------------
         AVACHGFLPK.setDisplayPosition( 8 );
         AVACHGFLPK.setEllipses( "WORD" );
         AVACHGFLPK.setHeight( 25 );
         AVACHGFLPK.setParent( AVACHGPNL );
         AVACHGFLPK.setTabPosition( 7 );
         AVACHGFLPK.setTabStop( false );
         AVACHGFLPK.setTop( 235 );
         AVACHGFLPK.setVerticalAlignment( "CENTER" );
         AVACHGFLPK.setWidth( 169 );
         AVACHGFLPK.setThemeDrawStyle( "PushButton" );
         AVACHGFLPK.setCaption( "Change Avatar" );
         AVACHGFLPK.setAlignment( "CENTER" );
         AVACHGFLPK.setLeft( 100 );
         AVACHGFLPK.initialize();

         // -------------------------
         // -- Initialize #MGMTCMD --
         // -------------------------
         MGMTCMD.setCaption( "Users" );
         MGMTCMD.setDisplayPosition( 9 );
         MGMTCMD.setLeft( 132 );
         MGMTCMD.setParent( AVACHGPNL );
         MGMTCMD.setTabPosition( 9 );
         MGMTCMD.setTop( 8 );
         MGMTCMD.setWidth( 102 );
         MGMTCMD.initialize();

         // ---------------------------
         // -- Initialize #CHOICEPNL --
         // ---------------------------
         CHOICEPNL.setDisplayPosition( 2 );
         CHOICEPNL.setHeight( 553 );
         CHOICEPNL.setLeft( 0 );
         CHOICEPNL.setParent( MAINPNL );
         CHOICEPNL.setTabPosition( 4 );
         CHOICEPNL.setTabStop( false );
         CHOICEPNL.setTop( 96 );
         CHOICEPNL.setWidth( 1081 );
         CHOICEPNL.setLayoutManager( CHOICELAYOUT );
         CHOICEPNL.initialize();

         // --------------------------
         // -- Initialize #STOCKIMG --
         // --------------------------
         STOCKIMG.setDisplayPosition( 3 );
         STOCKIMG.setLeft( 541 );
         STOCKIMG.setParent( CHOICEPNL );
         STOCKIMG.setTabPosition( 1 );
         STOCKIMG.setTabStop( false );
         STOCKIMG.setTop( 0 );
         STOCKIMG.setHeight( 553 );
         STOCKIMG.setWidth( 540 );
         STOCKIMG.setStyle( STYLE16 );
         STOCKIMG.setFileName( "/images/mechs/StockHanger.jpg" );
         STOCKIMG.setImageSizing( "FITBOTH" );
         STOCKIMG.initialize();

         // --------------------------
         // -- Initialize #STOCKLBL --
         // --------------------------
         STOCKLBL.setCaption( "Stock Hanger" );
         STOCKLBL.setDisplayPosition( 2 );
         STOCKLBL.setEllipses( "WORD" );
         STOCKLBL.setHeight( 553 );
         STOCKLBL.setLeft( 546 );
         STOCKLBL.setParent( CHOICEPNL );
         STOCKLBL.setTabPosition( 2 );
         STOCKLBL.setTabStop( false );
         STOCKLBL.setTop( 0 );
         STOCKLBL.setVerticalAlignment( "CENTER" );
         STOCKLBL.setWidth( 535 );
         STOCKLBL.setStyle( STYLE17 );
         STOCKLBL.setAlignment( "CENTER" );
         STOCKLBL.setMouseOverStyle( STYLE21 );
         STOCKLBL.setPressedStyle( STYLE22 );
         STOCKLBL.initialize();

         // ---------------------------
         // -- Initialize #URHANGIMG --
         // ---------------------------
         URHANGIMG.setDisplayPosition( 4 );
         URHANGIMG.setLeft( 0 );
         URHANGIMG.setParent( CHOICEPNL );
         URHANGIMG.setTabPosition( 3 );
         URHANGIMG.setTabStop( false );
         URHANGIMG.setTop( 0 );
         URHANGIMG.setHeight( 553 );
         URHANGIMG.setWidth( 536 );
         URHANGIMG.setStyle( STYLE18 );
         URHANGIMG.setFileName( "/images/mechs/MYHanger.jpg" );
         URHANGIMG.setImageSizing( "FITBOTH" );
         URHANGIMG.setOpacity( 80 );
         URHANGIMG.initialize();

         // ---------------------------
         // -- Initialize #URHANGLBL --
         // ---------------------------
         URHANGLBL.setCaption( "Your Hanger" );
         URHANGLBL.setDisplayPosition( 1 );
         URHANGLBL.setEllipses( "WORD" );
         URHANGLBL.setHeight( 553 );
         URHANGLBL.setLeft( 0 );
         URHANGLBL.setParent( CHOICEPNL );
         URHANGLBL.setTabPosition( 4 );
         URHANGLBL.setTabStop( false );
         URHANGLBL.setTop( 0 );
         URHANGLBL.setVerticalAlignment( "CENTER" );
         URHANGLBL.setWidth( 541 );
         URHANGLBL.setAlignment( "CENTER" );
         URHANGLBL.setStyle( STYLE19 );
         URHANGLBL.setMouseOverStyle( STYLE20 );
         URHANGLBL.setPressedStyle( STYLE23 );
         URHANGLBL.initialize();

         // ---------------------------
         // -- Initialize #MECHTILES --
         // ---------------------------
         MECHTILES.setDisplayPosition( 1 );
         MECHTILES.setLeft( 0 );
         MECHTILES.setParent( MECHTILEPNL );
         MECHTILES.setTabPosition( 1 );
         MECHTILES.setTop( 0 );
         MECHTILES.setHeight( 553 );
         MECHTILES.setWidth( 1081 );
         MECHTILES.setStyle( STYLE24 );
         MECHTILES.setDirection( "TOPTOBOTTOM" );
         MECHTILES.initialize();

         // -----------------------------
         // -- Initialize #MECHTILEPNL --
         // -----------------------------
         MECHTILEPNL.setDisplayPosition( 1 );
         MECHTILEPNL.setLeft( 0 );
         MECHTILEPNL.setParent( MAINPNL );
         MECHTILEPNL.setTabPosition( 5 );
         MECHTILEPNL.setTabStop( false );
         MECHTILEPNL.setTop( 96 );
         MECHTILEPNL.setHeight( 553 );
         MECHTILEPNL.setWidth( 1081 );
         MECHTILEPNL.setVisible( false );
         MECHTILEPNL.setLayoutManager( TILELAYOUT );
         MECHTILEPNL.initialize();

         // --------------------------
         // -- Initialize #REGISTER --
         // --------------------------
         REGISTER.initialize();

         // -----------------------
         // -- Initialize #LOGIN --
         // -----------------------
         LOGIN.initialize();

         // -----------------------
         // -- Initialize #FUSER --
         // -----------------------
         FUSER.initialize();

         // -----------------------
         // -- Initialize #FPASS --
         // -----------------------
         FPASS.initialize();

         // ------------------------
         // -- Initialize #CNGPRF --
         // ------------------------
         CNGPRF.initialize();

         // -----------------------
         // -- Initialize #OWNER --
         // -----------------------
         OWNER.initialize();

         // ---------------------------
         // -- Initialize #LOADTILES --
         // ---------------------------
         LOADTILES.initialize();

         // --------------------------------------
         // -- Add Event Handlers for #LOGINCMD --
         // --------------------------------------
         LOGINCMD.addEventHandler( "CLICK", this, evtRoutine3 );

         // -------------------------------------------
         // -- Add Event Handlers for #PASSWORDRESET --
         // -------------------------------------------
         PASSWORDRESET.addEventHandler( "CLICK", this, evtRoutine7 );

         // -------------------------------------------
         // -- Add Event Handlers for #USERNAMERESET --
         // -------------------------------------------
         USERNAMERESET.addEventHandler( "CLICK", this, evtRoutine6 );

         // -----------------------------------------
         // -- Add Event Handlers for #REGISTERLBL --
         // -----------------------------------------
         REGISTERLBL.addEventHandler( "CLICK", this, evtRoutine2 );

         // --------------------------------------
         // -- Add Event Handlers for #REGOKCMD --
         // --------------------------------------
         REGOKCMD.addEventHandler( "CLICK", this, evtRoutine9 );

         // ---------------------------------------
         // -- Add Event Handlers for #REGCNLCMD --
         // ---------------------------------------
         REGCNLCMD.addEventHandler( "CLICK", this, evtRoutine8 );

         // ---------------------------------------
         // -- Add Event Handlers for #FGTUSRCMD --
         // ---------------------------------------
         FGTUSRCMD.addEventHandler( "CLICK", this, evtRoutine10 );

         // ---------------------------------------
         // -- Add Event Handlers for #FGTPSWCMD --
         // ---------------------------------------
         FGTPSWCMD.addEventHandler( "CLICK", this, evtRoutine14 );

         // ---------------------------------------
         // -- Add Event Handlers for #FGTUSRCNL --
         // ---------------------------------------
         FGTUSRCNL.addEventHandler( "CLICK", this, evtRoutine12 );

         // ------------------------------------
         // -- Add Event Handlers for #AVAIMG --
         // ------------------------------------
         AVAIMG.addEventHandler( "CLICK", this, evtRoutine16 );

         // ---------------------------------------
         // -- Add Event Handlers for #LOGOFFCMD --
         // ---------------------------------------
         LOGOFFCMD.addEventHandler( "CLICK", this, evtRoutine20 );

         // ---------------------------------------
         // -- Add Event Handlers for #FGTPSWCNL --
         // ---------------------------------------
         FGTPSWCNL.addEventHandler( "CLICK", this, evtRoutine13 );

         // ---------------------------------------
         // -- Add Event Handlers for #AVACHGCMD --
         // ---------------------------------------
         AVACHGCMD.addEventHandler( "CLICK", this, evtRoutine18 );

         // ----------------------------------------
         // -- Add Event Handlers for #AVACHGFLPK --
         // ----------------------------------------
         AVACHGFLPK.addEventHandler( "FILESELECTED", this, evtRoutine17 );

         // --------------------------------------
         // -- Add Event Handlers for #STOCKLBL --
         // --------------------------------------
         STOCKLBL.addEventHandler( "CLICK", this, evtRoutine21 );

         // -----------------------------------
         // -- Add Event Handlers for #LOGIN --
         // -----------------------------------
         LOGIN.addEventHandler( "COMPLETED", this, evtRoutine4 );

         // -----------------------------------
         // -- Add Event Handlers for #FUSER --
         // -----------------------------------
         FUSER.addEventHandler( "COMPLETED", this, evtRoutine11 );

         // -----------------------------------
         // -- Add Event Handlers for #FPASS --
         // -----------------------------------
         FPASS.addEventHandler( "COMPLETED", this, evtRoutine15 );

         // ------------------------------------
         // -- Add Event Handlers for #CNGPRF --
         // ------------------------------------
         CNGPRF.addEventHandler( "COMPLETED", this, evtRoutine19 );

         // -----------------------------------
         // -- Add Event Handlers for #OWNER --
         // -----------------------------------
         OWNER.addEventHandler( "COMPLETED", this, evtRoutine5 );

         // ---------------------------------------
         // -- Add Event Handlers for #LOADTILES --
         // ---------------------------------------
         LOADTILES.addEventHandler( "COMPLETED", this, evtRoutine22 );

         // -----------------------------------------------
         // -- Define the UDC information for #MECHTILES --
         // -----------------------------------------------
         MECHTILES.addDesign( "MTILED" );
         MECHTILES.addListFields( { "MNAME": fld.MNAME, "MCLASS": fld.MCLASS, "MSPEED": fld.MSPEED, "MDESC": fld.MDESC, "MHEAT": fld.MHEAT, "MENERGYW": fld.MENERGYW, "MENERGYWQ": fld.MENERGYWQ, "MKINETICW": fld.MKINETICW, "MKINETWQ": fld.MKINETWQ, "MRANGEDW": fld.MRANGEDW, "MRANGEDWQ": fld.MRANGEDWQ, "MJUMPJETS": fld.MJUMPJETS, "MEQUIPTME": fld.MEQUIPTME, "MHEALTH": fld.MHEALTH, "MIMAGE": fld.MIMAGE, "MHEATTOL": fld.MHEATTOL, "MDAMAGE": fld.MDAMAGE, "MOWNER": fld.MOWNER } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 649 );
         this.setWidth( 1081 );
         this.setTheme( Lansa.getTheme( "MECHTHEME" ) );
         this.setThemeDrawStyle( "MechBackground" );
         this.setLayoutManager( FULLPAGE );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "MECHPAGE" );

         //
         // DEF_LIST Name(#Mechs) Fields(#MName #MClass #MSpeed #MDesc #MHeatSink #MEnergyW #MEnergyWQ #MKineticW #MKineticWQ #MRangedW #MRangedWQ #MJumpJets #MEquiptment #MHealth #MIMAGE #MHeatTol #MDamage #MOWNER) Type(*Working)
         //
         list.MECHS = Lansa.createList( { "MNAME": fld.MNAME, "MCLASS": fld.MCLASS, "MSPEED": fld.MSPEED, "MDESC": fld.MDESC, "MHEAT": fld.MHEAT, "MENERGYW": fld.MENERGYW, "MENERGYWQ": fld.MENERGYWQ, "MKINETICW": fld.MKINETICW, "MKINETWQ": fld.MKINETWQ, "MRANGEDW": fld.MRANGEDW, "MRANGEDWQ": fld.MRANGEDWQ, "MJUMPJETS": fld.MJUMPJETS, "MEQUIPTME": fld.MEQUIPTME, "MHEALTH": fld.MHEALTH, "MIMAGE": fld.MIMAGE, "MHEATTOL": fld.MHEATTOL, "MDAMAGE": fld.MDAMAGE, "MOWNER": fld.MOWNER }, null );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 272 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 272 );
      {

         //
         // #DoorSound.FileName := "/Images/Mechs/blastdoor2.mp3"
         //
         rtn.Line( 273 );
         ref.DOORSOUND.setFileName( "/Images/Mechs/blastdoor2.mp3" );

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(DifferentEasingFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 274 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "DIFFERENTEASINGFROMBOTTOM", 700, 1000 );

         //
         // #Music.FileName := "/Images/mechs/MenuMusic.mp3"
         //
         rtn.Line( 275 );
         ref.MUSIC.setFileName( "/Images/mechs/MenuMusic.mp3" );

         //
         // #LoginSound.FileName := "/Images/mechs/login.wav"
         //
         rtn.Line( 276 );
         ref.LOGINSOUND.setFileName( "/Images/mechs/login.wav" );

         //
         // #LOGOFFSND.FileName := "/Images/mechs/logoff.wav"
         //
         rtn.Line( 277 );
         ref.LOGOFFSND.setFileName( "/Images/mechs/logoff.wav" );

         //
         // #Music.Play
         //
         rtn.Line( 278 );
         ref.MUSIC.mthPLAY();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 279 );
      rtn.end();
   };

   //
   // evtRoutine2 - #RegisterLBL.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#RegisterLBL.Click", 282 );

      //
      // EVTROUTINE Handling(#RegisterLBL.Click)
      //
      rtn.Line( 282 );
      {

         //
         // #COM_OWNER.Transition From(#LOGINPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 283 );
         this.mthTRANSITION( ref.LOGINPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 284 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#RESETREGISTERPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 285 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.RESETREGISTERPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

         //
         // #REGUSER #REGPASSWORD #CNFMPASS #MEmail := *Blanks
         //
         rtn.Line( 286 );
         ref.REGUSER.set( "" );
         ref.REGPASSWORD.set( "" );
         ref.CNFMPASS.set( "" );
         ref.MEMAIL.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 287 );
      rtn.end();
   };

   //
   // evtRoutine3 - #LoginCMD.Click
   //
   function evtRoutine3( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoginCMD.Click", 290 );

      //
      // EVTROUTINE Handling(#LoginCMD.Click)
      //
      rtn.Line( 290 );
      {

         //
         // #login.ExecuteAsync Data(#Data)
         //
         rtn.Line( 291 );
         ref.LOGIN.mthEXECUTEASYNC( { FLD: { "MUSER": ref.MUSER.get(), "MPASSWRD": ref.MPASSWRD.get(), "MEMAIL": ref.MEMAIL.get(), "MCBILL": ref.MCBILL.get(), "MXP": ref.MXP.get(), "MAVATAR": fld.MAVATAR.get(), "MADMIN": ref.MADMIN.get(), "MRANK": ref.MRANK.get(), "MRANKVAL": fld.MRANKVAL.get(), "RESPONSE": fld.RESPONSE.get() } }, { FLD: { "MUSER": ref.MUSER, "MPASSWRD": ref.MPASSWRD, "MEMAIL": ref.MEMAIL, "MCBILL": ref.MCBILL, "MXP": ref.MXP, "MAVATAR": fld.MAVATAR, "MADMIN": ref.MADMIN, "MRANK": ref.MRANK, "MRANKVAL": fld.MRANKVAL, "RESPONSE": fld.RESPONSE } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 292 );
      rtn.end();
   };

   //
   // evtRoutine4 - #login.Completed
   //
   function evtRoutine4( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#login.Completed", 294 );

      //
      // EVTROUTINE Handling(#login.Completed)
      //
      rtn.Line( 294 );
      {

         //
         // IF Cond(#response *EQ 'Authenticated')
         //
         rtn.Line( 296 );
         if ( Lansa.String.eq( fld.RESPONSE.get(), "Authenticated" ) )
         {

            //
            // #COM_OWNER.Transition From(#LOGINPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
            //
            rtn.Line( 297 );
            this.mthTRANSITION( ref.LOGINPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

            //
            // #LoginSound.Play
            //
            rtn.Line( 298 );
            ref.LOGINSOUND.mthPLAY();

            //
            // #DoorSound.Play
            //
            rtn.Line( 299 );
            ref.DOORSOUND.mthPLAY();

            //
            // #COM_OWNER.Transition From(#BlastDoorPNL) To(#MainPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
            //
            rtn.Line( 300 );
            this.mthTRANSITION( ref.BLASTDOORPNL, ref.MAINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

            //
            // #AVAIMG.FileName := #MAvatar
            //
            rtn.Line( 301 );
            ref.AVAIMG.setFileName( fld.MAVATAR.get() );

            //
            // #ACCTUSR := #MUSER
            //
            rtn.Line( 302 );
            ref.ACCTUSR.set( ref.MUSER.get() );

            //
            // #Owner.ExecuteAsync Muser(#MUSER) Response(#response)
            //
            rtn.Line( 304 );
            ref.OWNER.mthEXECUTEASYNC( { FLD: { "MUSER": ref.MUSER.get() } }, { FLD: { "RESPONSE": fld.RESPONSE } } );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #MSGLBL := #response
            //
            rtn.Line( 307 );
            ref.MSGLBL.set( fld.RESPONSE.get() );

            //
            // #SVRMSG.ShowPopup
            //
            rtn.Line( 308 );
            ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

            //
            // #MUSER #MPASSWRD := *BLANKS
            //
            rtn.Line( 309 );
            ref.MUSER.set( "" );
            ref.MPASSWRD.set( "" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 311 );
      rtn.end();
   };

   //
   // evtRoutine5 - #Owner.Completed
   //
   function evtRoutine5( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Owner.Completed", 313 );

      //
      // EVTROUTINE Handling(#Owner.Completed)
      //
      rtn.Line( 313 );
      {

         //
         // IF Cond(#response *EQ OWN)
         //
         rtn.Line( 314 );
         if ( Lansa.String.eq( fld.RESPONSE.get(), "OWN" ) )
         {

            //
            // #URHANGIMG.FileName := '/images/mechs/MYHanger.jpg'
            //
            rtn.Line( 315 );
            ref.URHANGIMG.setFileName( "/images/mechs/MYHanger.jpg" );

            //
            // #URHANGLBL.Enabled := True
            //
            rtn.Line( 316 );
            ref.URHANGLBL.setEnabled( true );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #URHANGIMG.FileName := '/images/mechs/MYHangerGray.jpg'
            //
            rtn.Line( 318 );
            ref.URHANGIMG.setFileName( "/images/mechs/MYHangerGray.jpg" );

            //
            // #URHANGLBL.Enabled := False
            //
            rtn.Line( 319 );
            ref.URHANGLBL.setEnabled( false );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 321 );
      rtn.end();
   };

   //
   // evtRoutine6 - #UsernameReset.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#UsernameReset.Click", 324 );

      //
      // EVTROUTINE Handling(#UsernameReset.Click)
      //
      rtn.Line( 324 );
      {

         //
         // #COM_OWNER.Transition From(#LOGINPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 325 );
         this.mthTRANSITION( ref.LOGINPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 326 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#FGTUSRPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 327 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.FGTUSRPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 328 );
      rtn.end();
   };

   //
   // evtRoutine7 - #PasswordReset.Click
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#PasswordReset.Click", 330 );

      //
      // EVTROUTINE Handling(#PasswordReset.Click)
      //
      rtn.Line( 330 );
      {

         //
         // #COM_OWNER.Transition From(#LOGINPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 332 );
         this.mthTRANSITION( ref.LOGINPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 333 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#FGTPSWPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 334 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.FGTPSWPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 335 );
      rtn.end();
   };

   //
   // evtRoutine8 - #REGCNLCMD.Click
   //
   function evtRoutine8( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#REGCNLCMD.Click", 340 );

      //
      // EVTROUTINE Handling(#REGCNLCMD.Click)
      //
      rtn.Line( 340 );
      {

         //
         // #COM_OWNER.Transition From(#RESETREGISTERPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 341 );
         this.mthTRANSITION( ref.RESETREGISTERPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 342 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 343 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

         //
         // #MUSER #MPASSWRD #CNFMPASS #MEmail := *Blanks
         //
         rtn.Line( 344 );
         ref.MUSER.set( "" );
         ref.MPASSWRD.set( "" );
         ref.CNFMPASS.set( "" );
         ref.MEMAIL.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 345 );
      rtn.end();
   };

   //
   // evtRoutine9 - #REGOKCMD.Click
   //
   function evtRoutine9( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#REGOKCMD.Click", 348 );

      //
      // EVTROUTINE Handling(#REGOKCMD.Click)
      //
      rtn.Line( 348 );
      {

         //
         // IF Cond(#REGPASSWORD *NE #CNFMPASS)
         //
         rtn.Line( 349 );
         if ( Lansa.String.ne( ref.REGPASSWORD.get(), ref.CNFMPASS.get() ) )
         {

            //
            // #MSGLBL := 'Passwords do not Match! Try again...'
            //
            rtn.Line( 351 );
            ref.MSGLBL.set( "Passwords do not Match! Try again..." );

            //
            // #SVRMSG.ShowPopup
            //
            rtn.Line( 352 );
            ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

            //
            // #REGPASSWORD #CNFMPASS := *BLANKS
            //
            rtn.Line( 353 );
            ref.REGPASSWORD.set( "" );
            ref.CNFMPASS.set( "" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #MUSER := #REGUSER
            //
            rtn.Line( 356 );
            ref.MUSER.set( ref.REGUSER.get() );

            //
            // #MPASSWRD := #REGPASSWORD
            //
            rtn.Line( 357 );
            ref.MPASSWRD.set( ref.REGPASSWORD.get() );

            //
            // #register.Execute Data(#Data)
            //
            rtn.Line( 358 );
            ref.REGISTER.mthEXECUTE( { FLD: { "MUSER": ref.MUSER.get(), "MPASSWRD": ref.MPASSWRD.get(), "MEMAIL": ref.MEMAIL.get(), "MCBILL": ref.MCBILL.get(), "MXP": ref.MXP.get(), "MAVATAR": fld.MAVATAR.get(), "MADMIN": ref.MADMIN.get(), "MRANK": ref.MRANK.get(), "MRANKVAL": fld.MRANKVAL.get(), "RESPONSE": fld.RESPONSE.get() } }, { FLD: { "MUSER": ref.MUSER, "MPASSWRD": ref.MPASSWRD, "MEMAIL": ref.MEMAIL, "MCBILL": ref.MCBILL, "MXP": ref.MXP, "MAVATAR": fld.MAVATAR, "MADMIN": ref.MADMIN, "MRANK": ref.MRANK, "MRANKVAL": fld.MRANKVAL, "RESPONSE": fld.RESPONSE } } );

            //
            // IF Cond(#response *EQ 'Registered')
            //
            rtn.Line( 360 );
            if ( Lansa.String.eq( fld.RESPONSE.get(), "Registered" ) )
            {

               //
               // #COM_OWNER.Transition From(#RESETREGISTERPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
               //
               rtn.Line( 361 );
               this.mthTRANSITION( ref.RESETREGISTERPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

               //
               // #DoorSound.Play
               //
               rtn.Line( 362 );
               ref.DOORSOUND.mthPLAY();

               //
               // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
               //
               rtn.Line( 363 );
               this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

               //
               // #MSGLBL := 'Welcome to BattleMechs'
               //
               rtn.Line( 364 );
               ref.MSGLBL.set( "Welcome to BattleMechs" );

               //
               // #SVRMSG.ShowPopup
               //
               rtn.Line( 365 );
               ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

               //
               // #MPASSWRD := *BLANKS
               //
               rtn.Line( 366 );
               ref.MPASSWRD.set( "" );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #MSGLBL := #response
               //
               rtn.Line( 369 );
               ref.MSGLBL.set( fld.RESPONSE.get() );

               //
               // #SVRMSG.ShowPopup
               //
               rtn.Line( 370 );
               ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

               //
               // #REGUSER #REGPASSWORD #CNFMPASS #MEmail := *Blanks
               //
               rtn.Line( 371 );
               ref.REGUSER.set( "" );
               ref.REGPASSWORD.set( "" );
               ref.CNFMPASS.set( "" );
               ref.MEMAIL.set( "" );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 374 );
      rtn.end();
   };

   //
   // evtRoutine10 - #FGTUSRCMD.Click
   //
   function evtRoutine10( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FGTUSRCMD.Click", 378 );

      //
      // EVTROUTINE Handling(#FGTUSRCMD.Click)
      //
      rtn.Line( 378 );
      {

         //
         // #MEmail := #FGTEMAIL
         //
         rtn.Line( 380 );
         ref.MEMAIL.set( ref.FGTEMAIL.get() );

         //
         // #FUser.ExecuteAsync Data(#Data)
         //
         rtn.Line( 381 );
         ref.FUSER.mthEXECUTEASYNC( { FLD: { "MUSER": ref.MUSER.get(), "MPASSWRD": ref.MPASSWRD.get(), "MEMAIL": ref.MEMAIL.get(), "MCBILL": ref.MCBILL.get(), "MXP": ref.MXP.get(), "MAVATAR": fld.MAVATAR.get(), "MADMIN": ref.MADMIN.get(), "MRANK": ref.MRANK.get(), "MRANKVAL": fld.MRANKVAL.get(), "RESPONSE": fld.RESPONSE.get() } }, { FLD: { "MUSER": ref.MUSER, "MPASSWRD": ref.MPASSWRD, "MEMAIL": ref.MEMAIL, "MCBILL": ref.MCBILL, "MXP": ref.MXP, "MAVATAR": fld.MAVATAR, "MADMIN": ref.MADMIN, "MRANK": ref.MRANK, "MRANKVAL": fld.MRANKVAL, "RESPONSE": fld.RESPONSE } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 382 );
      rtn.end();
   };

   //
   // evtRoutine11 - #FUser.Completed
   //
   function evtRoutine11( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FUser.Completed", 384 );

      //
      // EVTROUTINE Handling(#FUser.Completed)
      //
      rtn.Line( 384 );
      {

         //
         // #MSGLBL := #response
         //
         rtn.Line( 386 );
         ref.MSGLBL.set( fld.RESPONSE.get() );

         //
         // #SVRMSG.ShowPopup
         //
         rtn.Line( 387 );
         ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 388 );
      rtn.end();
   };

   //
   // evtRoutine12 - #FGTUSRCNL.Click
   //
   function evtRoutine12( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FGTUSRCNL.Click", 390 );

      //
      // EVTROUTINE Handling(#FGTUSRCNL.Click)
      //
      rtn.Line( 390 );
      {

         //
         // #COM_OWNER.Transition From(#FGTUSRPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 392 );
         this.mthTRANSITION( ref.FGTUSRPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 393 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 394 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 395 );
      rtn.end();
   };

   //
   // evtRoutine13 - #FGTPSWCNL.Click
   //
   function evtRoutine13( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FGTPSWCNL.Click", 400 );

      //
      // EVTROUTINE Handling(#FGTPSWCNL.Click)
      //
      rtn.Line( 400 );
      {

         //
         // #COM_OWNER.Transition From(#FGTPSWPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 402 );
         this.mthTRANSITION( ref.FGTPSWPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 403 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 404 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

         //
         // #FGTPSWUSR #FGTPSWEMAIL := *BLANKS
         //
         rtn.Line( 405 );
         ref.FGTPSWUSR.set( "" );
         ref.FGTPSWEMAIL.set( "" );

         //
         // #Data := *NULL
         //
         rtn.Line( 406 );
         ref.MUSER.set( "" );
         ref.MPASSWRD.set( "" );
         ref.MEMAIL.set( "" );
         ref.MCBILL.set( 0 );
         ref.MXP.set( 0 );
         fld.MAVATAR.set( "" );
         ref.MADMIN.set( "" );
         ref.MRANK.set( "" );
         fld.MRANKVAL.set( 0 );
         fld.RESPONSE.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 407 );
      rtn.end();
   };

   //
   // evtRoutine14 - #FGTPSWCMD.Click
   //
   function evtRoutine14( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FGTPSWCMD.Click", 409 );

      //
      // EVTROUTINE Handling(#FGTPSWCMD.Click)
      //
      rtn.Line( 409 );
      {

         //
         // #MUSER := #FGTPSWUSR
         //
         rtn.Line( 411 );
         ref.MUSER.set( ref.FGTPSWUSR.get() );

         //
         // #MEmail := #FGTPSWEMAIL
         //
         rtn.Line( 412 );
         ref.MEMAIL.set( ref.FGTPSWEMAIL.get() );

         //
         // #FPass.ExecuteAsync Data(#Data)
         //
         rtn.Line( 413 );
         ref.FPASS.mthEXECUTEASYNC( { FLD: { "MUSER": ref.MUSER.get(), "MPASSWRD": ref.MPASSWRD.get(), "MEMAIL": ref.MEMAIL.get(), "MCBILL": ref.MCBILL.get(), "MXP": ref.MXP.get(), "MAVATAR": fld.MAVATAR.get(), "MADMIN": ref.MADMIN.get(), "MRANK": ref.MRANK.get(), "MRANKVAL": fld.MRANKVAL.get(), "RESPONSE": fld.RESPONSE.get() } }, { FLD: { "MUSER": ref.MUSER, "MPASSWRD": ref.MPASSWRD, "MEMAIL": ref.MEMAIL, "MCBILL": ref.MCBILL, "MXP": ref.MXP, "MAVATAR": fld.MAVATAR, "MADMIN": ref.MADMIN, "MRANK": ref.MRANK, "MRANKVAL": fld.MRANKVAL, "RESPONSE": fld.RESPONSE } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 414 );
      rtn.end();
   };

   //
   // evtRoutine15 - #FPass.Completed
   //
   function evtRoutine15( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FPass.Completed", 416 );

      //
      // EVTROUTINE Handling(#FPass.Completed)
      //
      rtn.Line( 416 );
      {

         //
         // IF Cond(#response *EQ 'Authenticated')
         //
         rtn.Line( 418 );
         if ( Lansa.String.eq( fld.RESPONSE.get(), "Authenticated" ) )
         {

            //
            // #COM_OWNER.Transition From(#FGTPSWPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
            //
            rtn.Line( 419 );
            this.mthTRANSITION( ref.FGTPSWPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

            //
            // #DoorSound.Play
            //
            rtn.Line( 420 );
            ref.DOORSOUND.mthPLAY();

            //
            // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
            //
            rtn.Line( 421 );
            this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

            //
            // #MSGLBL := 'Email Placeholder: Password is mechxsphere'
            //
            rtn.Line( 422 );
            ref.MSGLBL.set( "Email Placeholder: Password is mechxsphere" );

            //
            // #SVRMSG.ShowPopup
            //
            rtn.Line( 423 );
            ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

            //
            // #MPASSWRD := *BLANKS
            //
            rtn.Line( 424 );
            ref.MPASSWRD.set( "" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #MSGLBL := #response
            //
            rtn.Line( 427 );
            ref.MSGLBL.set( fld.RESPONSE.get() );

            //
            // #SVRMSG.ShowPopup
            //
            rtn.Line( 428 );
            ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 430 );
      rtn.end();
   };

   //
   // evtRoutine16 - #AVAIMG.Click
   //
   function evtRoutine16( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AVAIMG.Click", 435 );

      //
      // EVTROUTINE Handling(#AVAIMG.Click)
      //
      rtn.Line( 435 );
      {

         //
         // IF Cond(#MAdmin *EQ N)
         //
         rtn.Line( 437 );
         if ( Lansa.String.eq( ref.MADMIN.get(), "N" ) )
         {

            //
            // #MAdmin.Visible #AVACHGCBILL.Visible #AVACHGXP.Visible #MGMTCMD.Visible := False
            //
            rtn.Line( 438 );
            ref.MADMIN.setVisible( false );
            ref.AVACHGCBILL.setVisible( false );
            ref.AVACHGXP.setVisible( false );
            ref.MGMTCMD.setVisible( false );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #MAdmin.Visible #AVACHGCBILL.Visible #AVACHGXP.Visible #MGMTCMD.Visible := True
            //
            rtn.Line( 440 );
            ref.MADMIN.setVisible( true );
            ref.AVACHGCBILL.setVisible( true );
            ref.AVACHGXP.setVisible( true );
            ref.MGMTCMD.setVisible( true );

         //
         // ENDIF 
         //
         }

         //
         // #AVACHGCBILL := #MCBill
         //
         rtn.Line( 442 );
         ref.AVACHGCBILL.set( ref.MCBILL.get() );

         //
         // #AVACHGXP := #MXP
         //
         rtn.Line( 443 );
         ref.AVACHGXP.set( ref.MXP.get() );

         //
         // #AVACHGEMAIL := #MEmail
         //
         rtn.Line( 444 );
         ref.AVACHGEMAIL.set( ref.MEMAIL.get() );

         //
         // IF Cond(#AVACHGPNL.Visible *EQ True)
         //
         rtn.Line( 446 );
         if ( Lansa.Boolean.eq( ref.AVACHGPNL.getVisible(), true ) )
         {

            //
            // #AVAPNL.DisplayPosition := 2
            //
            rtn.Line( 447 );
            ref.AVAPNL.setDisplayPosition( 2 );

            //
            // #AVACHGPNL.Visible := False
            //
            rtn.Line( 448 );
            ref.AVACHGPNL.setVisible( false );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AVAPNL.DisplayPosition := 1
            //
            rtn.Line( 450 );
            ref.AVAPNL.setDisplayPosition( 1 );

            //
            // #AVACHGPNL.Visible := True
            //
            rtn.Line( 451 );
            ref.AVACHGPNL.setVisible( true );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 453 );
      rtn.end();
   };

   //
   // evtRoutine17 - #AVACHGFLPK.FileSelected
   //
   function evtRoutine17( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AVACHGFLPK.FileSelected", 456 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var FILE = parms.ref( "FILE" );

      //
      // EVTROUTINE Handling(#AVACHGFLPK.FileSelected) File(#file)
      //
      rtn.Line( 456 );
      {

         //
         // #MAvatar := #file.Blob
         //
         rtn.Line( 457 );
         fld.MAVATAR.set( FILE.getBlob() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 458 );
      rtn.end();
   };

   //
   // evtRoutine18 - #AVACHGCMD.Click
   //
   function evtRoutine18( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AVACHGCMD.Click", 461 );

      //
      // EVTROUTINE Handling(#AVACHGCMD.Click)
      //
      rtn.Line( 461 );
      {

         //
         // IF Cond(#AVACHGPSWD *NE #AVACHGCNFPSWD)
         //
         rtn.Line( 463 );
         if ( Lansa.String.ne( ref.AVACHGPSWD.get(), ref.AVACHGCNFPSWD.get() ) )
         {

            //
            // #MSGLBL := 'Passwords do not Match! Try again...'
            //
            rtn.Line( 464 );
            ref.MSGLBL.set( "Passwords do not Match! Try again..." );

            //
            // #SVRMSG.ShowPopup
            //
            rtn.Line( 465 );
            ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

            //
            // #REGPASSWORD #CNFMPASS := *BLANKS
            //
            rtn.Line( 466 );
            ref.REGPASSWORD.set( "" );
            ref.CNFMPASS.set( "" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #MPASSWRD := #AVACHGPSWD
            //
            rtn.Line( 469 );
            ref.MPASSWRD.set( ref.AVACHGPSWD.get() );

            //
            // #MCBill := #AVACHGCBILL
            //
            rtn.Line( 470 );
            ref.MCBILL.set( ref.AVACHGCBILL.get() );

            //
            // #MXP := #AVACHGXP
            //
            rtn.Line( 471 );
            ref.MXP.set( ref.AVACHGXP.get() );

            //
            // #MEmail := #AVACHGEMAIL
            //
            rtn.Line( 472 );
            ref.MEMAIL.set( ref.AVACHGEMAIL.get() );

            //
            // #CNGPRF.ExecuteAsync Data(#Data)
            //
            rtn.Line( 473 );
            ref.CNGPRF.mthEXECUTEASYNC( { FLD: { "MUSER": ref.MUSER.get(), "MPASSWRD": ref.MPASSWRD.get(), "MEMAIL": ref.MEMAIL.get(), "MCBILL": ref.MCBILL.get(), "MXP": ref.MXP.get(), "MAVATAR": fld.MAVATAR.get(), "MADMIN": ref.MADMIN.get(), "MRANK": ref.MRANK.get(), "MRANKVAL": fld.MRANKVAL.get(), "RESPONSE": fld.RESPONSE.get() } }, { FLD: { "MUSER": ref.MUSER, "MPASSWRD": ref.MPASSWRD, "MEMAIL": ref.MEMAIL, "MCBILL": ref.MCBILL, "MXP": ref.MXP, "MAVATAR": fld.MAVATAR, "MADMIN": ref.MADMIN, "MRANK": ref.MRANK, "MRANKVAL": fld.MRANKVAL, "RESPONSE": fld.RESPONSE } } );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 475 );
      rtn.end();
   };

   //
   // evtRoutine19 - #CNGPRF.Completed
   //
   function evtRoutine19( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#CNGPRF.Completed", 478 );

      //
      // EVTROUTINE Handling(#CNGPRF.Completed)
      //
      rtn.Line( 478 );
      {

         //
         // #MSGLBL := #response
         //
         rtn.Line( 479 );
         ref.MSGLBL.set( fld.RESPONSE.get() );

         //
         // #SVRMSG.ShowPopup
         //
         rtn.Line( 480 );
         ref.SVRMSG.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

         //
         // #AVACHGPSWD #AVACHGCNFPSWD := *BLANKS
         //
         rtn.Line( 481 );
         ref.AVACHGPSWD.set( "" );
         ref.AVACHGCNFPSWD.set( "" );

         //
         // #AVAIMG.FileName := #MAvatar
         //
         rtn.Line( 482 );
         ref.AVAIMG.setFileName( fld.MAVATAR.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 483 );
      rtn.end();
   };

   //
   // evtRoutine20 - #LOGOFFCMD.Click
   //
   function evtRoutine20( sender, parms )
   {
      var fld = this.FLD.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LOGOFFCMD.Click", 488 );

      //
      // EVTROUTINE Handling(#LOGOFFCMD.Click)
      //
      rtn.Line( 488 );
      {

         //
         // #COM_OWNER.Transition From(#MechTilePNL) To(#CHOICEPNL) Transitiontype(RollUp) Duration(700)
         //
         rtn.Line( 489 );
         this.mthTRANSITION( ref.MECHTILEPNL, ref.CHOICEPNL, "ROLLUP", 700, undefined );

         //
         // #COM_OWNER.Transition From(#MainPNL) To(#BlastDoorPNL) Transitiontype(MoveToBottomFromTop) Duration(700)
         //
         rtn.Line( 490 );
         this.mthTRANSITION( ref.MAINPNL, ref.BLASTDOORPNL, "MOVETOBOTTOMFROMTOP", 700, undefined );

         //
         // #DoorSound.Play
         //
         rtn.Line( 491 );
         ref.DOORSOUND.mthPLAY();

         //
         // #COM_OWNER.Transition From(#BlastDoorPNL) To(#LOGINPNL) Transitiontype(MoveToTopFromBottom) Delay(1000) Duration(700)
         //
         rtn.Line( 492 );
         this.mthTRANSITION( ref.BLASTDOORPNL, ref.LOGINPNL, "MOVETOTOPFROMBOTTOM", 700, 1000 );

         //
         // #LOGOFFSND.Play
         //
         rtn.Line( 493 );
         ref.LOGOFFSND.mthPLAY();

         //
         // #Data := *NULL
         //
         rtn.Line( 494 );
         ref.MUSER.set( "" );
         ref.MPASSWRD.set( "" );
         ref.MEMAIL.set( "" );
         ref.MCBILL.set( 0 );
         ref.MXP.set( 0 );
         fld.MAVATAR.set( "" );
         ref.MADMIN.set( "" );
         ref.MRANK.set( "" );
         fld.MRANKVAL.set( 0 );
         fld.RESPONSE.set( "" );

         //
         // #AVACHGPNL.Visible := False
         //
         rtn.Line( 495 );
         ref.AVACHGPNL.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 496 );
      rtn.end();
   };

   //
   // evtRoutine21 - #STOCKLBL.Click
   //
   function evtRoutine21( sender, parms )
   {
      var list = this.LIST.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#STOCKLBL.Click", 499 );

      //
      // EVTROUTINE Handling(#STOCKLBL.Click)
      //
      rtn.Line( 499 );
      {

         //
         // #loadtiles.ExecuteAsync Mechs(#Mechs)
         //
         rtn.Line( 500 );
         ref.LOADTILES.mthEXECUTEASYNC( {  }, { LIST: { "MECHS": list.MECHS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 501 );
      rtn.end();
   };

   //
   // evtRoutine22 - #loadtiles.Completed
   //
   function evtRoutine22( sender, parms )
   {
      var list = this.LIST.MECHPAGE, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#loadtiles.Completed", 503 );

      //
      // EVTROUTINE Handling(#loadtiles.Completed)
      //
      rtn.Line( 503 );
      {

         //
         // SELECTLIST Named(#Mechs)
         //
         rtn.Line( 504 );
         for ( var i1 = 1; i1 <= list.MECHS.entryCount(); i1++ )
         {
            list.MECHS.getEntry( i1 );

            //
            // ADD_ENTRY To_List(#MechTiles)
            //
            rtn.Line( 505 );
            ref.MECHTILES.addEntry();

         //
         // ENDSELECT 
         //
         }

         //
         // #COM_OWNER.Transition From(#CHOICEPNL) To(#MechTilePNL) Transitiontype(RollDown) Duration(700)
         //
         rtn.Line( 507 );
         this.mthTRANSITION( ref.CHOICEPNL, ref.MECHTILEPNL, "ROLLDOWN", 700, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 508 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // --------------------------
   // -- MUSER Member Classes --
   // --------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MUSER.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MUSER );
      };

      Lansa.extendClass( Fields.MUSER.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MUSER.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MUSER.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 537 );
      };

      Lansa.extendClass( Fields.MUSER.VISUALEDIT, "PRIM_EVEF" );
   }

   // ---------------------------
   // -- MEMAIL Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MEMAIL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MEMAIL );
      };

      Lansa.extendClass( Fields.MEMAIL.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MEMAIL.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MEMAIL.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 895 );
      };

      Lansa.extendClass( Fields.MEMAIL.VISUALEDIT, "PRIM_EVEF" );
   }

   // -----------------------------
   // -- MPASSWRD Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MPASSWRD.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MPASSWRD );
      };

      Lansa.extendClass( Fields.MPASSWRD.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MPASSWRD.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MPASSWRD.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 537 );
      };

      Lansa.extendClass( Fields.MPASSWRD.VISUALEDIT, "PRIM_EVEF" );
   }

   // ---------------------------
   // -- MCBILL Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MCBILL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MCBILL );
      };

      Lansa.extendClass( Fields.MCBILL.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MCBILL.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MCBILL.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 394 );
      };

      Lansa.extendClass( Fields.MCBILL.VISUALEDIT, "PRIM_EVEF" );
   }

   // --------------------------
   // -- MRANK Member Classes --
   // --------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MRANK.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MRANK );
      };

      Lansa.extendClass( Fields.MRANK.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MRANK.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MRANK.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 895 );
      };

      Lansa.extendClass( Fields.MRANK.VISUALEDIT, "PRIM_EVEF" );
   }

   // ------------------------
   // -- MXP Member Classes --
   // ------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MXP.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MXP );
      };

      Lansa.extendClass( Fields.MXP.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MXP.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MXP.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 394 );
      };

      Lansa.extendClass( Fields.MXP.VISUALEDIT, "PRIM_EVEF" );
   }

   // ---------------------------
   // -- MADMIN Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MADMIN.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MADMIN );
      };

      Lansa.extendClass( Fields.MADMIN.DataClass, "PRIM_FLD" );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.MADMIN.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_1) Value('Y') Caption('Yes') Parent(#Picklist)
         //
         var PKIT_1 = this.createReference( "PKIT_1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_2) Value('N') Caption('No') Parent(#Picklist) Default(True)
         //
         var PKIT_2 = this.createReference( "PKIT_2", "PRIM_PKIT" );

         // ------------------------
         // -- Initialize #PKIT_1 --
         // ------------------------
         PKIT_1.setValue( "Y" );
         PKIT_1.setCaption( "Yes" );
         PKIT_1.setParent( this );
         PKIT_1.initialize();

         // ------------------------
         // -- Initialize #PKIT_2 --
         // ------------------------
         PKIT_2.setValue( "N" );
         PKIT_2.setCaption( "No" );
         PKIT_2.setParent( this );
         PKIT_2.setDefault( true );
         PKIT_2.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "BLANKS" );
      };

      Lansa.extendClass( Fields.MADMIN.pl, "PRIM_PKLT" );

      // --------------------
      // -- VISUALPICKLIST --
      // --------------------
      Fields.MADMIN.VISUALPICKLIST = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MADMIN.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setAppearance( "DROPDOWNLIST" );
         this.setHeight( 19 );
         this.setComponentVersion( 1 );
         this.setWidth( 251 );
      };

      Lansa.extendClass( Fields.MADMIN.VISUALPICKLIST, "PRIM_EVPL" );
   }

   // ---------------------------
   // -- MCLASS Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MCLASS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MCLASS );
      };

      Lansa.extendClass( Fields.MCLASS.DataClass, "PRIM_FLD" );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.MCLASS.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#ASSAULT) Value('ASSAULT') Caption('Assault 100') Parent(#Picklist) Default(True)
         //
         var ASSAULT = this.createReference( "ASSAULT", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#HEAVY) Value('HEAVY') Caption('HEAVY 80-100') Parent(#Picklist)
         //
         var HEAVY = this.createReference( "HEAVY", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#MEDIUM) Parent(#Picklist) Caption('Medium 50-80 ') Value('Medium')
         //
         var MEDIUM = this.createReference( "MEDIUM", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#LIGHT) Parent(#Picklist) Caption('Light 35-50') Value('LIGHT')
         //
         var LIGHT = this.createReference( "LIGHT", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#SCOUT) Parent(#Picklist) Caption('Scout 10-35') Value('SCOUT')
         //
         var SCOUT = this.createReference( "SCOUT", "PRIM_PKIT" );

         // -------------------------
         // -- Initialize #ASSAULT --
         // -------------------------
         ASSAULT.setValue( "ASSAULT" );
         ASSAULT.setCaption( "Assault 100" );
         ASSAULT.setParent( this );
         ASSAULT.setDefault( true );
         ASSAULT.initialize();

         // -----------------------
         // -- Initialize #HEAVY --
         // -----------------------
         HEAVY.setValue( "HEAVY" );
         HEAVY.setCaption( "HEAVY 80-100" );
         HEAVY.setParent( this );
         HEAVY.initialize();

         // ------------------------
         // -- Initialize #MEDIUM --
         // ------------------------
         MEDIUM.setParent( this );
         MEDIUM.setCaption( "Medium 50-80 " );
         MEDIUM.setValue( "Medium" );
         MEDIUM.initialize();

         // -----------------------
         // -- Initialize #LIGHT --
         // -----------------------
         LIGHT.setParent( this );
         LIGHT.setCaption( "Light 35-50" );
         LIGHT.setValue( "LIGHT" );
         LIGHT.initialize();

         // -----------------------
         // -- Initialize #SCOUT --
         // -----------------------
         SCOUT.setParent( this );
         SCOUT.setCaption( "Scout 10-35" );
         SCOUT.setValue( "SCOUT" );
         SCOUT.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "BLANKS" );
      };

      Lansa.extendClass( Fields.MCLASS.pl, "PRIM_PKLT" );
   }

   // ------------------------------
   // -- MJUMPJETS Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MJUMPJETS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MJUMPJETS );
      };

      Lansa.extendClass( Fields.MJUMPJETS.DataClass, "PRIM_FLD" );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.MJUMPJETS.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#YES) Value('YES') Parent(#Picklist) Default(True) Caption('Yes')
         //
         var YES = this.createReference( "YES", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#No) Value('NO') Parent(#Picklist) Caption('No')
         //
         var NO = this.createReference( "NO", "PRIM_PKIT" );

         // ---------------------
         // -- Initialize #YES --
         // ---------------------
         YES.setValue( "YES" );
         YES.setParent( this );
         YES.setDefault( true );
         YES.setCaption( "Yes" );
         YES.initialize();

         // --------------------
         // -- Initialize #NO --
         // --------------------
         NO.setValue( "NO" );
         NO.setParent( this );
         NO.setCaption( "No" );
         NO.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "BLANKS" );
      };

      Lansa.extendClass( Fields.MJUMPJETS.pl, "PRIM_PKLT" );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "MECHTHEME" ],
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.LinearBrush", "PRIM_VS.BrushColors", "PRIM_VS.BrushColor", "PRIM_VS.ImageBrush", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EVEF", "PRIM_PHBN", "PRIM_IMAG", "PRIM_PANL", "PRIM_SOND", "PRIM_PPNL", "PRIM_PKLT", "PRIM_EVPL", "PRIM_WEB.FilePicker", "PRIM_TILE", "PRIM_WEB.DataRequest" ],
   dc: [ "MTILED" ],
   dp: [ "PRIM_ANIM" ]
});

//# sourceURL=mechpage.js
