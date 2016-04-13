// ---------------------------
// -- Reusable Part: MTILED --
// ---------------------------
LANSA.addComponent(
{
   id: "MTILED", 
   nm: "MTileD", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Mech Tiles Design", 
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
      const1 = Lansa.createDecimal( "1.55" );

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "lava.jpg" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
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
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         OnAdd: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnDelete: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnFind: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               },

               "Key":
               {
                  pt: "i"
               }
            }
         },

         OnItemGotFocus: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnItemGotReference: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnItemGotSelection: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnItemLostFocus: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnItemLostSelection: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnItemRealizing: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         },

         OnUpdate: 
         {
            ps: 
            {
               "TileItem":
               {
                  pt: "i"
               }
            }
         }
      },

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
         var fld = this.addFields( "MTILED", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Cornerbottomleft(4) Cornerbottomright(4) Cornertopleft(4) Cornertopright(4) Backgroundbrush(#Backgroundbrush1) Borderbrush(#Brush2)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(255:194:12)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#Backgroundbrush1) Image(#lava)
         //
         var BACKGROUNDBRUSH1 = this.createReference( "BACKGROUNDBRUSH1", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Foregroundbrush(#Brush1)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(255:194:12)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#Prim_tblo) Name(#TableLayout_1)
         //
         var TABLELAYOUT_1 = this.createReference( "TABLELAYOUT_1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#TableLayout1) Height(1.55)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#MName) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Marginleft(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Manage(#Image1) Parent(#TableLayout1) Row(#Row2) Rowspan(2) Margintop(10) Marginleft(10) Marginbottom(10)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#MClass) Parent(#TableLayout1) Row(#Row2) Marginleft(10) Sizing(FitToWidth)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#MHealth) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Margintop(10) Marginleft(10)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#MDamage) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Margintop(10) Marginleft(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#MCBill) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Marginleft(10) Margintop(10)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#MName.Visual) Name(#MName) Displayposition(1) Parent(#COM_OWNER) Tabposition(1) Marginleft(50) Width(192) Height(33) Readonly(True) Caption('Name: ') Labeltype(Caption) Displayonly(True) Style(#Style2) Left(213)
         //
         var MNAME = this.createFieldReference( "MNAME", Fields.MNAME.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image1) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Height(169) Width(193) Imagesizing(FitBoth)
         //
         var IMAGE1 = this.createReference( "IMAGE1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#MClass.Visual) Name(#MClass) Displayposition(3) Left(213) Parent(#COM_OWNER) Tabposition(3) Marginleft(50) Width(192) Height(28) Readonly(True) Caption('Class: ') Labeltype(Caption) Displayonly(True) Style(#Style2) Top(33)
         //
         var MCLASS = this.createFieldReference( "MCLASS", Fields.MCLASS.VISUALEDIT );

         //
         // DEFINE_COM Class(#MHealth.Visual) Name(#MHealth) Displayposition(4) Left(213) Parent(#COM_OWNER) Tabposition(4) Top(71) Labeltype(Caption) Caption('Health') Marginleft(50) Width(192) Displayonly(True) Style(#Style2)
         //
         var MHEALTH = this.createFieldReference( "MHEALTH", Fields.MHEALTH.VISUALEDIT );

         //
         // DEFINE_COM Class(#MDamage.Visual) Name(#MDamage) Componentversion(1) Displayposition(5) Height(21) Left(213) Parent(#COM_OWNER) Tabposition(5) Top(102) Usepicklist(False) Width(192) Caption('Damage') Labeltype(Caption) Marginleft(50) Displayonly(True) Style(#Style2)
         //
         var MDAMAGE = this.createFieldReference( "MDAMAGE", Fields.MDAMAGE.VISUALEDIT );

         //
         // DEFINE_COM Class(#MCBill.Visual) Name(#MCBill) Displayposition(6) Left(213) Parent(#COM_OWNER) Tabposition(6) Top(133) Caption('Cost') Labeltype(Caption) Width(192) Marginleft(50) Displayonly(True) Style(#Style2)
         //
         var MCBILL = this.createFieldReference( "MCBILL", Fields.MCBILL.VISUALEDIT );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBorderBottom( 2 );
         STYLE1.setBorderLeft( 2 );
         STYLE1.setBorderRight( 2 );
         STYLE1.setBorderTop( 2 );
         STYLE1.setCornerBottomLeft( 4 );
         STYLE1.setCornerBottomRight( 4 );
         STYLE1.setCornerTopLeft( 4 );
         STYLE1.setCornerTopRight( 4 );
         STYLE1.setBackgroundBrush( BACKGROUNDBRUSH1 );
         STYLE1.setBorderBrush( BRUSH2 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "255:194:12" );
         BRUSH2.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDBRUSH1 --
         // ----------------------------------
         BACKGROUNDBRUSH1.setImage( resource1 );
         BACKGROUNDBRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setForegroundBrush( BRUSH1 );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "255:194:12" );
         BRUSH1.initialize();

         // -------------------------------
         // -- Initialize #TABLELAYOUT_1 --
         // -------------------------------
         TABLELAYOUT_1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( const1 );
         ROW2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( MNAME );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setMarginLeft( 10 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( IMAGE1 );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.setRowSpan( 2 );
         LAYOUTITEM2.setMarginTop( 10 );
         LAYOUTITEM2.setMarginLeft( 10 );
         LAYOUTITEM2.setMarginBottom( 10 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( MCLASS );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW2 );
         LAYOUTITEM3.setMarginLeft( 10 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN2 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( MHEALTH );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW2 );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.setMarginTop( 10 );
         LAYOUTITEM4.setMarginLeft( 10 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( MDAMAGE );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW2 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.setMarginTop( 10 );
         LAYOUTITEM5.setMarginLeft( 10 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN2 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( MCBILL );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW2 );
         LAYOUTITEM6.setSizing( "FITTOWIDTH" );
         LAYOUTITEM6.setMarginLeft( 10 );
         LAYOUTITEM6.setMarginTop( 10 );
         LAYOUTITEM6.initialize();

         // -----------------------
         // -- Initialize #MNAME --
         // -----------------------
         MNAME.setDisplayPosition( 1 );
         MNAME.setParent( this );
         MNAME.setTabPosition( 1 );
         MNAME.setMarginLeft( 50 );
         MNAME.setWidth( 192 );
         MNAME.setHeight( 33 );
         MNAME.setReadOnly( true );
         MNAME.setCaption( "Name: " );
         MNAME.setLabelType( "CAPTION" );
         MNAME.setDisplayOnly( true );
         MNAME.setStyle( STYLE2 );
         MNAME.setLeft( 213 );
         MNAME.applyDefault();
         MNAME.initialize();

         // ------------------------
         // -- Initialize #IMAGE1 --
         // ------------------------
         IMAGE1.setDisplayPosition( 2 );
         IMAGE1.setParent( this );
         IMAGE1.setTabPosition( 2 );
         IMAGE1.setTabStop( false );
         IMAGE1.setHeight( 169 );
         IMAGE1.setWidth( 193 );
         IMAGE1.setImageSizing( "FITBOTH" );
         IMAGE1.initialize();

         // ------------------------
         // -- Initialize #MCLASS --
         // ------------------------
         MCLASS.setDisplayPosition( 3 );
         MCLASS.setLeft( 213 );
         MCLASS.setParent( this );
         MCLASS.setTabPosition( 3 );
         MCLASS.setMarginLeft( 50 );
         MCLASS.setWidth( 192 );
         MCLASS.setHeight( 28 );
         MCLASS.setReadOnly( true );
         MCLASS.setCaption( "Class: " );
         MCLASS.setLabelType( "CAPTION" );
         MCLASS.setDisplayOnly( true );
         MCLASS.setStyle( STYLE2 );
         MCLASS.setTop( 33 );
         MCLASS.applyDefault();
         MCLASS.initialize();

         // -------------------------
         // -- Initialize #MHEALTH --
         // -------------------------
         MHEALTH.setDisplayPosition( 4 );
         MHEALTH.setLeft( 213 );
         MHEALTH.setParent( this );
         MHEALTH.setTabPosition( 4 );
         MHEALTH.setTop( 71 );
         MHEALTH.setLabelType( "CAPTION" );
         MHEALTH.setCaption( "Health" );
         MHEALTH.setMarginLeft( 50 );
         MHEALTH.setWidth( 192 );
         MHEALTH.setDisplayOnly( true );
         MHEALTH.setStyle( STYLE2 );
         MHEALTH.applyDefault();
         MHEALTH.initialize();

         // -------------------------
         // -- Initialize #MDAMAGE --
         // -------------------------
         MDAMAGE.setComponentVersion( 1 );
         MDAMAGE.setDisplayPosition( 5 );
         MDAMAGE.setHeight( 21 );
         MDAMAGE.setLeft( 213 );
         MDAMAGE.setParent( this );
         MDAMAGE.setTabPosition( 5 );
         MDAMAGE.setTop( 102 );
         MDAMAGE.setUsePicklist( false );
         MDAMAGE.setWidth( 192 );
         MDAMAGE.setCaption( "Damage" );
         MDAMAGE.setLabelType( "CAPTION" );
         MDAMAGE.setMarginLeft( 50 );
         MDAMAGE.setDisplayOnly( true );
         MDAMAGE.setStyle( STYLE2 );
         MDAMAGE.applyDefault();
         MDAMAGE.initialize();

         // ------------------------
         // -- Initialize #MCBILL --
         // ------------------------
         MCBILL.setDisplayPosition( 6 );
         MCBILL.setLeft( 213 );
         MCBILL.setParent( this );
         MCBILL.setTabPosition( 6 );
         MCBILL.setTop( 133 );
         MCBILL.setCaption( "Cost" );
         MCBILL.setLabelType( "CAPTION" );
         MCBILL.setWidth( 192 );
         MCBILL.setMarginLeft( 50 );
         MCBILL.setDisplayOnly( true );
         MCBILL.setStyle( STYLE2 );
         MCBILL.applyDefault();
         MCBILL.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 193 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 409 );
         this.setStyle( STYLE1 );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "MNAME": MNAME, "MCLASS": MCLASS, "MSPEED": fld.MSPEED, "MDESC": fld.MDESC, "MHEAT": fld.MHEAT, "MENERGYW": fld.MENERGYW, "MENERGYWQ": fld.MENERGYWQ, "MKINETICW": fld.MKINETICW, "MKINETWQ": fld.MKINETWQ, "MRANGEDW": fld.MRANGEDW, "MRANGEDWQ": fld.MRANGEDWQ, "MJUMPJETS": fld.MJUMPJETS, "MEQUIPTME": fld.MEQUIPTME, "MHEALTH": MHEALTH, "MIMAGE": fld.MIMAGE, "MHEATTOL": fld.MHEATTOL, "MDAMAGE": MDAMAGE, "MOWNER": fld.MOWNER } );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthONADD - OnAdd
   //
   COM_OWNER.mthONADD = function( parm_TILEITEM )
   {
      var fld = this.FLD.MTILED, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "OnAdd", 39 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnAdd) Options(*Redefine)
      //
      rtn.Line( 39 );
      {

         //
         // #Image1.FileName := #MIMAGE
         //
         rtn.Line( 40 );
         ref.IMAGE1.setFileName( fld.MIMAGE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // mthONDELETE - OnDelete
   //
   COM_OWNER.mthONDELETE = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnDelete", 44 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnDelete) Options(*Redefine)
      //
      rtn.Line( 44 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 47 );
      rtn.end();
   };

   //
   // mthONFIND - OnFind
   //
   COM_OWNER.mthONFIND = function( parm_TILEITEM, parm_KEY )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnFind", 49 );

      //
      // DEFINE_MAP Class(#) Name(Result) For(*RESULT)
      //
      var RESULT = rtn.createBooleanParameter( "RESULT" );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      //
      // DEFINE_MAP Class(#*VARIANT) Name(Key) For(*INPUT)
      //
      var KEY = rtn.createParameter( "KEY", "*VARIANT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;
      KEY.set( parm_KEY );

      //
      // MTHROUTINE Name(OnFind) Options(*Redefine)
      //
      rtn.Line( 49 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthONITEMGOTFOCUS - OnItemGotFocus
   //
   COM_OWNER.mthONITEMGOTFOCUS = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemGotFocus", 54 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemGotFocus) Options(*Redefine)
      //
      rtn.Line( 54 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 57 );
      rtn.end();
   };

   //
   // mthONITEMGOTREFERENCE - OnItemGotReference
   //
   COM_OWNER.mthONITEMGOTREFERENCE = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemGotReference", 59 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemGotReference) Options(*Redefine)
      //
      rtn.Line( 59 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 62 );
      rtn.end();
   };

   //
   // mthONITEMGOTSELECTION - OnItemGotSelection
   //
   COM_OWNER.mthONITEMGOTSELECTION = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemGotSelection", 64 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemGotSelection) Options(*Redefine)
      //
      rtn.Line( 64 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 67 );
      rtn.end();
   };

   //
   // mthONITEMLOSTFOCUS - OnItemLostFocus
   //
   COM_OWNER.mthONITEMLOSTFOCUS = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemLostFocus", 69 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemLostFocus) Options(*Redefine)
      //
      rtn.Line( 69 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 72 );
      rtn.end();
   };

   //
   // mthONITEMLOSTSELECTION - OnItemLostSelection
   //
   COM_OWNER.mthONITEMLOSTSELECTION = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemLostSelection", 74 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemLostSelection) Options(*Redefine)
      //
      rtn.Line( 74 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 77 );
      rtn.end();
   };

   //
   // mthONITEMREALIZING - OnItemRealizing
   //
   COM_OWNER.mthONITEMREALIZING = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemRealizing", 79 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemRealizing) Options(*Redefine)
      //
      rtn.Line( 79 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 82 );
      rtn.end();
   };

   //
   // mthONUPDATE - OnUpdate
   //
   COM_OWNER.mthONUPDATE = function( parm_TILEITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnUpdate", 84 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnUpdate) Options(*Redefine)
      //
      rtn.Line( 84 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // --------------------------
   // -- MNAME Member Classes --
   // --------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MNAME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MNAME );
      };

      Lansa.extendClass( Fields.MNAME.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MNAME.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MNAME.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 323 );
      };

      Lansa.extendClass( Fields.MNAME.VISUALEDIT, "PRIM_EVEF" );
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

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MCLASS.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MCLASS.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 323 );
      };

      Lansa.extendClass( Fields.MCLASS.VISUALEDIT, "PRIM_EVEF" );

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

   // ----------------------------
   // -- MHEALTH Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MHEALTH.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MHEALTH );
      };

      Lansa.extendClass( Fields.MHEALTH.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MHEALTH.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MHEALTH.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 266 );
      };

      Lansa.extendClass( Fields.MHEALTH.VISUALEDIT, "PRIM_EVEF" );
   }

   // ----------------------------
   // -- MDAMAGE Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.MDAMAGE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.MDAMAGE );
      };

      Lansa.extendClass( Fields.MDAMAGE.DataClass, "PRIM_FLD" );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.MDAMAGE.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.MDAMAGE.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 352 );
      };

      Lansa.extendClass( Fields.MDAMAGE.VISUALEDIT, "PRIM_EVEF" );
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
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_VS.ImageBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_EVEF", "PRIM_IMAG", "PRIM_PKLT" ]
});

//# sourceURL=mtiled.js
