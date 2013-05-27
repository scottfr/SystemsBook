// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Library/WebServer/Documents/calc/Formula.g 2013-03-26 19:59:34

var FormulaParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    FormulaParser.superclass.constructor.call(this, input, state);

    this.dfa5 = new FormulaParser.DFA5(this);
    this.dfa40 = new FormulaParser.DFA40(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(FormulaParser, {
    EOF: -1,
    T__92: 92,
    T__93: 93,
    T__94: 94,
    T__95: 95,
    T__96: 96,
    T__97: 97,
    NEGATE: 4,
    ASSIGN: 5,
    FUNCALL: 6,
    MATERIAL: 7,
    UNIT: 8,
    POWER: 9,
    DEFAULTS: 10,
    PARAMS: 11,
    UNITCLUMP: 12,
    ARRAY: 13,
    LINES: 14,
    WHILE: 15,
    IFTHENELSE: 16,
    ELSE: 17,
    FOR: 18,
    FORIN: 19,
    FUNCTION: 20,
    NUMBER: 21,
    NEWLINE: 22,
    W: 23,
    H: 24,
    I: 25,
    L: 26,
    E: 27,
    WHILESTATEMENT: 28,
    F: 29,
    O: 30,
    R: 31,
    FORSTATEMENT: 32,
    M: 33,
    FROMSTATEMENT: 34,
    N: 35,
    INSTATEMENT: 36,
    T: 37,
    TOSTATEMENT: 38,
    B: 39,
    Y: 40,
    BYSTATEMENT: 41,
    P: 42,
    LOOPSTATEMENT: 43,
    IFSTATEMENT: 44,
    THENSTATEMENT: 45,
    S: 46,
    ELSESTATEMENT: 47,
    U: 48,
    C: 49,
    FUNCTIONSTATEMENT: 50,
    D: 51,
    ENDBLOCK: 52,
    RETURNSTATEMENT: 53,
    IDENT: 54,
    EQUALS: 55,
    PRIMITIVE: 56,
    OR: 57,
    AND: 58,
    A: 59,
    NOTEQUALS: 60,
    LT: 61,
    LTEQ: 62,
    GT: 63,
    GTEQ: 64,
    PLUS: 65,
    MINUS: 66,
    MULT: 67,
    DIV: 68,
    MOD: 69,
    POW: 70,
    NOT: 71,
    LARR: 72,
    RARR: 73,
    INTEGER: 74,
    FLOAT: 75,
    TRUE: 76,
    FALSE: 77,
    PER: 78,
    CUBED: 79,
    SQUARED: 80,
    Q: 81,
    COMMENT: 82,
    LINE_COMMENT: 83,
    WS: 84,
    G: 85,
    J: 86,
    K: 87,
    V: 88,
    X: 89,
    Z: 90,
    STRING: 91
});

(function(){
// public class variables
var EOF= -1,
    T__92= 92,
    T__93= 93,
    T__94= 94,
    T__95= 95,
    T__96= 96,
    T__97= 97,
    NEGATE= 4,
    ASSIGN= 5,
    FUNCALL= 6,
    MATERIAL= 7,
    UNIT= 8,
    POWER= 9,
    DEFAULTS= 10,
    PARAMS= 11,
    UNITCLUMP= 12,
    ARRAY= 13,
    LINES= 14,
    WHILE= 15,
    IFTHENELSE= 16,
    ELSE= 17,
    FOR= 18,
    FORIN= 19,
    FUNCTION= 20,
    NUMBER= 21,
    NEWLINE= 22,
    W= 23,
    H= 24,
    I= 25,
    L= 26,
    E= 27,
    WHILESTATEMENT= 28,
    F= 29,
    O= 30,
    R= 31,
    FORSTATEMENT= 32,
    M= 33,
    FROMSTATEMENT= 34,
    N= 35,
    INSTATEMENT= 36,
    T= 37,
    TOSTATEMENT= 38,
    B= 39,
    Y= 40,
    BYSTATEMENT= 41,
    P= 42,
    LOOPSTATEMENT= 43,
    IFSTATEMENT= 44,
    THENSTATEMENT= 45,
    S= 46,
    ELSESTATEMENT= 47,
    U= 48,
    C= 49,
    FUNCTIONSTATEMENT= 50,
    D= 51,
    ENDBLOCK= 52,
    RETURNSTATEMENT= 53,
    IDENT= 54,
    EQUALS= 55,
    PRIMITIVE= 56,
    OR= 57,
    AND= 58,
    A= 59,
    NOTEQUALS= 60,
    LT= 61,
    LTEQ= 62,
    GT= 63,
    GTEQ= 64,
    PLUS= 65,
    MINUS= 66,
    MULT= 67,
    DIV= 68,
    MOD= 69,
    POW= 70,
    NOT= 71,
    LARR= 72,
    RARR= 73,
    INTEGER= 74,
    FLOAT= 75,
    TRUE= 76,
    FALSE= 77,
    PER= 78,
    CUBED= 79,
    SQUARED= 80,
    Q= 81,
    COMMENT= 82,
    LINE_COMMENT= 83,
    WS= 84,
    G= 85,
    J= 86,
    K= 87,
    V= 88,
    X= 89,
    Z= 90,
    STRING= 91;

// public instance methods/vars
org.antlr.lang.extend(FormulaParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return FormulaParser.tokenNames; },
    getGrammarFileName: function() { return "/Library/WebServer/Documents/calc/Formula.g"; }
});
org.antlr.lang.augmentObject(FormulaParser.prototype, {

    // inline static return class
    lines_return: (function() {
        FormulaParser.lines_return = function(){};
        org.antlr.lang.extend(FormulaParser.lines_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:33:1: lines : ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) ;
    // $ANTLR start "lines"
    lines: function() {
        var retval = new FormulaParser.lines_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWLINE1 = null;
        var NEWLINE3 = null;
        var EOF4 = null;
        var EOF5 = null;
         var expression2 = null;

        var NEWLINE1_tree=null;
        var NEWLINE3_tree=null;
        var EOF4_tree=null;
        var EOF5_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_EOF=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EOF");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:34:2: ( ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF -> ^( LINES ( expression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:34:4: ( NEWLINE )* ( expression ( ( NEWLINE )+ | EOF ) )* EOF
            // /Library/WebServer/Documents/calc/Formula.g:34:4: ( NEWLINE )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==NEWLINE) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:34:4: NEWLINE
                    NEWLINE1=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines116); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE1);



                    break;

                default :
                    break loop1;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:34:13: ( expression ( ( NEWLINE )+ | EOF ) )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==WHILESTATEMENT||LA4_0==FORSTATEMENT||LA4_0==IFSTATEMENT||LA4_0==FUNCTIONSTATEMENT||(LA4_0>=RETURNSTATEMENT && LA4_0<=IDENT)||LA4_0==PRIMITIVE||LA4_0==MINUS||(LA4_0>=NOT && LA4_0<=LARR)||(LA4_0>=INTEGER && LA4_0<=FALSE)||(LA4_0>=STRING && LA4_0<=92)||LA4_0==96) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:34:14: expression ( ( NEWLINE )+ | EOF )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_lines120);
                    expression2=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression2.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:34:26: ( ( NEWLINE )+ | EOF )
                    var alt3=2;
                    var LA3_0 = this.input.LA(1);

                    if ( (LA3_0==NEWLINE) ) {
                        alt3=1;
                    }
                    else if ( (LA3_0==EOF) ) {
                        alt3=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                        throw nvae;
                    }
                    switch (alt3) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:34:27: ( NEWLINE )+
                            // /Library/WebServer/Documents/calc/Formula.g:34:27: ( NEWLINE )+
                            var cnt2=0;
                            loop2:
                            do {
                                var alt2=2;
                                var LA2_0 = this.input.LA(1);

                                if ( (LA2_0==NEWLINE) ) {
                                    alt2=1;
                                }


                                switch (alt2) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:34:27: NEWLINE
                                    NEWLINE3=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_lines124); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE3);



                                    break;

                                default :
                                    if ( cnt2 >= 1 ) {
                                        break loop2;
                                    }
                                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                                        throw eee;
                                }
                                cnt2++;
                            } while (true);



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:34:36: EOF
                            EOF4=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines127); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EOF.add(EOF4);



                            break;

                    }



                    break;

                default :
                    break loop4;
                }
            } while (true);

            EOF5=this.match(this.input,EOF,FormulaParser.FOLLOW_EOF_in_lines132); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_EOF.add(EOF5);



            // AST REWRITE
            // elements: expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 34:47: -> ^( LINES ( expression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:34:50: ^( LINES ( expression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LINES, "LINES"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:34:58: ( expression )*
                while ( stream_expression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_expression.nextTree());

                }
                stream_expression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        FormulaParser.expression_return = function(){};
        org.antlr.lang.extend(FormulaParser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:93:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );
    // $ANTLR start "expression"
    expression: function() {
        var retval = new FormulaParser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var assignment6 = null;
         var logicalExpression7 = null;
         var whileLoop8 = null;
         var forLoop9 = null;
         var forInLoop10 = null;
         var ifThenElse11 = null;
         var functionDef12 = null;
         var returnExp13 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:94:2: ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp )
            var alt5=8;
            alt5 = this.dfa5.predict(this.input);
            switch (alt5) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:94:5: assignment
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_assignment_in_expression394);
                    assignment6=this.assignment();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment6.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:95:5: logicalExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_expression400);
                    logicalExpression7=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression7.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:96:5: whileLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_whileLoop_in_expression406);
                    whileLoop8=this.whileLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileLoop8.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:97:5: forLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forLoop_in_expression412);
                    forLoop9=this.forLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forLoop9.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:98:5: forInLoop
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_forInLoop_in_expression418);
                    forInLoop10=this.forInLoop();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forInLoop10.getTree());


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:99:5: ifThenElse
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_ifThenElse_in_expression424);
                    ifThenElse11=this.ifThenElse();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifThenElse11.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:100:5: functionDef
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_functionDef_in_expression430);
                    functionDef12=this.functionDef();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionDef12.getTree());


                    break;
                case 8 :
                    // /Library/WebServer/Documents/calc/Formula.g:101:5: returnExp
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_returnExp_in_expression436);
                    returnExp13=this.returnExp();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, returnExp13.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    returnExp_return: (function() {
        FormulaParser.returnExp_return = function(){};
        org.antlr.lang.extend(FormulaParser.returnExp_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:104:1: returnExp : RETURNSTATEMENT logicalExpression ;
    // $ANTLR start "returnExp"
    returnExp: function() {
        var retval = new FormulaParser.returnExp_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var RETURNSTATEMENT14 = null;
         var logicalExpression15 = null;

        var RETURNSTATEMENT14_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:105:2: ( RETURNSTATEMENT logicalExpression )
            // /Library/WebServer/Documents/calc/Formula.g:106:2: RETURNSTATEMENT logicalExpression
            root_0 = this.adaptor.nil();

            RETURNSTATEMENT14=this.match(this.input,RETURNSTATEMENT,FormulaParser.FOLLOW_RETURNSTATEMENT_in_returnExp448); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RETURNSTATEMENT14_tree = this.adaptor.create(RETURNSTATEMENT14);
            root_0 = this.adaptor.becomeRoot(RETURNSTATEMENT14_tree, root_0);
            }
            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_returnExp451);
            logicalExpression15=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression15.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    innerBlock_return: (function() {
        FormulaParser.innerBlock_return = function(){};
        org.antlr.lang.extend(FormulaParser.innerBlock_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:109:1: innerBlock : ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) ;
    // $ANTLR start "innerBlock"
    innerBlock: function() {
        var retval = new FormulaParser.innerBlock_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NEWLINE17 = null;
         var expression16 = null;

        var NEWLINE17_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_expression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule expression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:110:2: ( ( expression ( ( NEWLINE )+ ) )* -> ^( LINES ( expression )+ ) )
            // /Library/WebServer/Documents/calc/Formula.g:110:4: ( expression ( ( NEWLINE )+ ) )*
            // /Library/WebServer/Documents/calc/Formula.g:110:4: ( expression ( ( NEWLINE )+ ) )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==WHILESTATEMENT||LA7_0==FORSTATEMENT||LA7_0==IFSTATEMENT||LA7_0==FUNCTIONSTATEMENT||(LA7_0>=RETURNSTATEMENT && LA7_0<=IDENT)||LA7_0==PRIMITIVE||LA7_0==MINUS||(LA7_0>=NOT && LA7_0<=LARR)||(LA7_0>=INTEGER && LA7_0<=FALSE)||(LA7_0>=STRING && LA7_0<=92)||LA7_0==96) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:110:5: expression ( ( NEWLINE )+ )
                    this.pushFollow(FormulaParser.FOLLOW_expression_in_innerBlock464);
                    expression16=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_expression.add(expression16.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:110:17: ( ( NEWLINE )+ )
                    // /Library/WebServer/Documents/calc/Formula.g:110:18: ( NEWLINE )+
                    // /Library/WebServer/Documents/calc/Formula.g:110:18: ( NEWLINE )+
                    var cnt6=0;
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==NEWLINE) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:110:18: NEWLINE
                            NEWLINE17=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_innerBlock468); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE17);



                            break;

                        default :
                            if ( cnt6 >= 1 ) {
                                break loop6;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(6, this.input);
                                throw eee;
                        }
                        cnt6++;
                    } while (true);






                    break;

                default :
                    break loop7;
                }
            } while (true);



            // AST REWRITE
            // elements: expression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 110:30: -> ^( LINES ( expression )+ )
            {
                // /Library/WebServer/Documents/calc/Formula.g:110:33: ^( LINES ( expression )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LINES, "LINES"), root_1);

                if ( !(stream_expression.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_expression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_expression.nextTree());

                }
                stream_expression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    whileLoop_return: (function() {
        FormulaParser.whileLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.whileLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:113:1: whileLoop : WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) ;
    // $ANTLR start "whileLoop"
    whileLoop: function() {
        var retval = new FormulaParser.whileLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WHILESTATEMENT18 = null;
        var NEWLINE20 = null;
        var ENDBLOCK22 = null;
        var LOOPSTATEMENT23 = null;
         var logicalExpression19 = null;
         var innerBlock21 = null;

        var WHILESTATEMENT18_tree=null;
        var NEWLINE20_tree=null;
        var ENDBLOCK22_tree=null;
        var LOOPSTATEMENT23_tree=null;
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_WHILESTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WHILESTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:114:2: ( WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( WHILE logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:114:4: WHILESTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            WHILESTATEMENT18=this.match(this.input,WHILESTATEMENT,FormulaParser.FOLLOW_WHILESTATEMENT_in_whileLoop493); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_WHILESTATEMENT.add(WHILESTATEMENT18);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_whileLoop495);
            logicalExpression19=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression19.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:114:37: ( NEWLINE )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0==NEWLINE) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:114:37: NEWLINE
                    NEWLINE20=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_whileLoop497); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE20);



                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_whileLoop500);
            innerBlock21=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock21.getTree());
            ENDBLOCK22=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_whileLoop503); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK22);

            LOOPSTATEMENT23=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_whileLoop505); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT23);



            // AST REWRITE
            // elements: innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 114:81: -> ^( WHILE logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:114:84: ^( WHILE logicalExpression innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(WHILE, "WHILE"), root_1);

                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    forLoop_return: (function() {
        FormulaParser.forLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.forLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:117:1: forLoop : FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) ;
    // $ANTLR start "forLoop"
    forLoop: function() {
        var retval = new FormulaParser.forLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FORSTATEMENT24 = null;
        var IDENT25 = null;
        var FROMSTATEMENT26 = null;
        var TOSTATEMENT28 = null;
        var BYSTATEMENT30 = null;
        var NEWLINE32 = null;
        var ENDBLOCK34 = null;
        var LOOPSTATEMENT35 = null;
         var logicalExpression27 = null;
         var logicalExpression29 = null;
         var logicalExpression31 = null;
         var innerBlock33 = null;

        var FORSTATEMENT24_tree=null;
        var IDENT25_tree=null;
        var FROMSTATEMENT26_tree=null;
        var TOSTATEMENT28_tree=null;
        var BYSTATEMENT30_tree=null;
        var NEWLINE32_tree=null;
        var ENDBLOCK34_tree=null;
        var LOOPSTATEMENT35_tree=null;
        var stream_FORSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FORSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_FROMSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FROMSTATEMENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_TOSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token TOSTATEMENT");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_BYSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token BYSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:118:2: ( FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:118:4: FORSTATEMENT IDENT FROMSTATEMENT logicalExpression TOSTATEMENT logicalExpression ( BYSTATEMENT logicalExpression )? ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT24=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forLoop526); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT24);

            IDENT25=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forLoop528); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT25);

            FROMSTATEMENT26=this.match(this.input,FROMSTATEMENT,FormulaParser.FOLLOW_FROMSTATEMENT_in_forLoop530); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FROMSTATEMENT.add(FROMSTATEMENT26);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop532);
            logicalExpression27=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression27.getTree());
            TOSTATEMENT28=this.match(this.input,TOSTATEMENT,FormulaParser.FOLLOW_TOSTATEMENT_in_forLoop534); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_TOSTATEMENT.add(TOSTATEMENT28);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop536);
            logicalExpression29=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression29.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:118:85: ( BYSTATEMENT logicalExpression )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==BYSTATEMENT) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:118:86: BYSTATEMENT logicalExpression
                    BYSTATEMENT30=this.match(this.input,BYSTATEMENT,FormulaParser.FOLLOW_BYSTATEMENT_in_forLoop539); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_BYSTATEMENT.add(BYSTATEMENT30);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forLoop541);
                    logicalExpression31=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression31.getTree());


                    break;

            }

            // /Library/WebServer/Documents/calc/Formula.g:118:118: ( NEWLINE )+
            var cnt10=0;
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0==NEWLINE) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:118:118: NEWLINE
                    NEWLINE32=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forLoop545); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE32);



                    break;

                default :
                    if ( cnt10 >= 1 ) {
                        break loop10;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(10, this.input);
                        throw eee;
                }
                cnt10++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forLoop548);
            innerBlock33=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock33.getTree());
            ENDBLOCK34=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forLoop551); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK34);

            LOOPSTATEMENT35=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forLoop553); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT35);



            // AST REWRITE
            // elements: IDENT, innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 118:162: -> ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:118:165: ^( FOR IDENT ^( PARAMS ( logicalExpression )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FOR, "FOR"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                // /Library/WebServer/Documents/calc/Formula.g:118:177: ^( PARAMS ( logicalExpression )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:118:186: ( logicalExpression )*
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    forInLoop_return: (function() {
        FormulaParser.forInLoop_return = function(){};
        org.antlr.lang.extend(FormulaParser.forInLoop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:121:1: forInLoop : FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) ;
    // $ANTLR start "forInLoop"
    forInLoop: function() {
        var retval = new FormulaParser.forInLoop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FORSTATEMENT36 = null;
        var IDENT37 = null;
        var INSTATEMENT38 = null;
        var NEWLINE40 = null;
        var ENDBLOCK42 = null;
        var LOOPSTATEMENT43 = null;
         var logicalExpression39 = null;
         var innerBlock41 = null;

        var FORSTATEMENT36_tree=null;
        var IDENT37_tree=null;
        var INSTATEMENT38_tree=null;
        var NEWLINE40_tree=null;
        var ENDBLOCK42_tree=null;
        var LOOPSTATEMENT43_tree=null;
        var stream_FORSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FORSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_LOOPSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LOOPSTATEMENT");
        var stream_INSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:122:2: ( FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT -> ^( FORIN IDENT logicalExpression innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:122:4: FORSTATEMENT IDENT INSTATEMENT logicalExpression ( NEWLINE )+ innerBlock ENDBLOCK LOOPSTATEMENT
            FORSTATEMENT36=this.match(this.input,FORSTATEMENT,FormulaParser.FOLLOW_FORSTATEMENT_in_forInLoop581); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FORSTATEMENT.add(FORSTATEMENT36);

            IDENT37=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_forInLoop583); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT37);

            INSTATEMENT38=this.match(this.input,INSTATEMENT,FormulaParser.FOLLOW_INSTATEMENT_in_forInLoop585); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_INSTATEMENT.add(INSTATEMENT38);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_forInLoop587);
            logicalExpression39=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression39.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:122:53: ( NEWLINE )+
            var cnt11=0;
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==NEWLINE) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:122:53: NEWLINE
                    NEWLINE40=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_forInLoop589); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE40);



                    break;

                default :
                    if ( cnt11 >= 1 ) {
                        break loop11;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(11, this.input);
                        throw eee;
                }
                cnt11++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_forInLoop592);
            innerBlock41=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock41.getTree());
            ENDBLOCK42=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_forInLoop595); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK42);

            LOOPSTATEMENT43=this.match(this.input,LOOPSTATEMENT,FormulaParser.FOLLOW_LOOPSTATEMENT_in_forInLoop597); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LOOPSTATEMENT.add(LOOPSTATEMENT43);



            // AST REWRITE
            // elements: IDENT, logicalExpression, innerBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 122:98: -> ^( FORIN IDENT logicalExpression innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:122:101: ^( FORIN IDENT logicalExpression innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FORIN, "FORIN"), root_1);

                this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    ifThenElse_return: (function() {
        FormulaParser.ifThenElse_return = function(){};
        org.antlr.lang.extend(FormulaParser.ifThenElse_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:125:1: ifThenElse : IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) ;
    // $ANTLR start "ifThenElse"
    ifThenElse: function() {
        var retval = new FormulaParser.ifThenElse_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IFSTATEMENT44 = null;
        var THENSTATEMENT46 = null;
        var NEWLINE47 = null;
        var ELSESTATEMENT49 = null;
        var IFSTATEMENT50 = null;
        var THENSTATEMENT52 = null;
        var NEWLINE53 = null;
        var ELSESTATEMENT55 = null;
        var NEWLINE56 = null;
        var ENDBLOCK58 = null;
        var IFSTATEMENT59 = null;
         var logicalExpression45 = null;
         var innerBlock48 = null;
         var logicalExpression51 = null;
         var innerBlock54 = null;
         var innerBlock57 = null;

        var IFSTATEMENT44_tree=null;
        var THENSTATEMENT46_tree=null;
        var NEWLINE47_tree=null;
        var ELSESTATEMENT49_tree=null;
        var IFSTATEMENT50_tree=null;
        var THENSTATEMENT52_tree=null;
        var NEWLINE53_tree=null;
        var ELSESTATEMENT55_tree=null;
        var NEWLINE56_tree=null;
        var ENDBLOCK58_tree=null;
        var IFSTATEMENT59_tree=null;
        var stream_IFSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IFSTATEMENT");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_ELSESTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ELSESTATEMENT");
        var stream_THENSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token THENSTATEMENT");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:126:2: ( IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) ) )
            // /Library/WebServer/Documents/calc/Formula.g:126:4: IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )* ( ELSESTATEMENT ( NEWLINE )+ innerBlock )? ENDBLOCK IFSTATEMENT
            IFSTATEMENT44=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse622); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT44);

            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse624);
            logicalExpression45=this.logicalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression45.getTree());
            THENSTATEMENT46=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse626); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT46);

            // /Library/WebServer/Documents/calc/Formula.g:126:49: ( NEWLINE )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( (LA12_0==NEWLINE) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:126:49: NEWLINE
                    NEWLINE47=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse629); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE47);



                    break;

                default :
                    if ( cnt12 >= 1 ) {
                        break loop12;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                        throw eee;
                }
                cnt12++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse632);
            innerBlock48=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock48.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:126:70: ( ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( (LA14_0==ELSESTATEMENT) ) {
                    var LA14_1 = this.input.LA(2);

                    if ( (LA14_1==IFSTATEMENT) ) {
                        alt14=1;
                    }


                }


                switch (alt14) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:126:71: ELSESTATEMENT IFSTATEMENT logicalExpression THENSTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT49=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse636); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT49);

                    IFSTATEMENT50=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse638); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT50);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_ifThenElse640);
                    logicalExpression51=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression51.getTree());
                    THENSTATEMENT52=this.match(this.input,THENSTATEMENT,FormulaParser.FOLLOW_THENSTATEMENT_in_ifThenElse642); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_THENSTATEMENT.add(THENSTATEMENT52);

                    // /Library/WebServer/Documents/calc/Formula.g:126:129: ( NEWLINE )+
                    var cnt13=0;
                    loop13:
                    do {
                        var alt13=2;
                        var LA13_0 = this.input.LA(1);

                        if ( (LA13_0==NEWLINE) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:126:129: NEWLINE
                            NEWLINE53=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse644); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE53);



                            break;

                        default :
                            if ( cnt13 >= 1 ) {
                                break loop13;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(13, this.input);
                                throw eee;
                        }
                        cnt13++;
                    } while (true);

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse647);
                    innerBlock54=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock54.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);

            // /Library/WebServer/Documents/calc/Formula.g:126:151: ( ELSESTATEMENT ( NEWLINE )+ innerBlock )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==ELSESTATEMENT) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:126:152: ELSESTATEMENT ( NEWLINE )+ innerBlock
                    ELSESTATEMENT55=this.match(this.input,ELSESTATEMENT,FormulaParser.FOLLOW_ELSESTATEMENT_in_ifThenElse652); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_ELSESTATEMENT.add(ELSESTATEMENT55);

                    // /Library/WebServer/Documents/calc/Formula.g:126:166: ( NEWLINE )+
                    var cnt15=0;
                    loop15:
                    do {
                        var alt15=2;
                        var LA15_0 = this.input.LA(1);

                        if ( (LA15_0==NEWLINE) ) {
                            alt15=1;
                        }


                        switch (alt15) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:126:166: NEWLINE
                            NEWLINE56=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_ifThenElse654); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE56);



                            break;

                        default :
                            if ( cnt15 >= 1 ) {
                                break loop15;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(15, this.input);
                                throw eee;
                        }
                        cnt15++;
                    } while (true);

                    this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_ifThenElse657);
                    innerBlock57=this.innerBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock57.getTree());


                    break;

            }

            ENDBLOCK58=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_ifThenElse661); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK58);

            IFSTATEMENT59=this.match(this.input,IFSTATEMENT,FormulaParser.FOLLOW_IFSTATEMENT_in_ifThenElse663); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IFSTATEMENT.add(IFSTATEMENT59);



            // AST REWRITE
            // elements: innerBlock, logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 126:209: -> ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
            {
                // /Library/WebServer/Documents/calc/Formula.g:126:212: ^( IFTHENELSE ^( PARAMS ( logicalExpression )+ ) ^( PARAMS ( innerBlock )+ ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(IFTHENELSE, "IFTHENELSE"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:126:225: ^( PARAMS ( logicalExpression )+ )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                if ( !(stream_logicalExpression.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:126:254: ^( PARAMS ( innerBlock )+ )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                if ( !(stream_innerBlock.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_innerBlock.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_innerBlock.nextTree());

                }
                stream_innerBlock.reset();

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    functionDef_return: (function() {
        FormulaParser.functionDef_return = function(){};
        org.antlr.lang.extend(FormulaParser.functionDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:129:1: functionDef : FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) ;
    // $ANTLR start "functionDef"
    functionDef: function() {
        var retval = new FormulaParser.functionDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FUNCTIONSTATEMENT60 = null;
        var IDENT61 = null;
        var char_literal62 = null;
        var IDENT63 = null;
        var EQUALS64 = null;
        var char_literal66 = null;
        var IDENT67 = null;
        var char_literal68 = null;
        var IDENT69 = null;
        var EQUALS70 = null;
        var char_literal72 = null;
        var NEWLINE73 = null;
        var ENDBLOCK75 = null;
        var FUNCTIONSTATEMENT76 = null;
         var defaultValue65 = null;
         var defaultValue71 = null;
         var innerBlock74 = null;

        var FUNCTIONSTATEMENT60_tree=null;
        var IDENT61_tree=null;
        var char_literal62_tree=null;
        var IDENT63_tree=null;
        var EQUALS64_tree=null;
        var char_literal66_tree=null;
        var IDENT67_tree=null;
        var char_literal68_tree=null;
        var IDENT69_tree=null;
        var EQUALS70_tree=null;
        var char_literal72_tree=null;
        var NEWLINE73_tree=null;
        var ENDBLOCK75_tree=null;
        var FUNCTIONSTATEMENT76_tree=null;
        var stream_FUNCTIONSTATEMENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FUNCTIONSTATEMENT");
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_94=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 94");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_93=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 93");
        var stream_92=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 92");
        var stream_NEWLINE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NEWLINE");
        var stream_ENDBLOCK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ENDBLOCK");
        var stream_innerBlock=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule innerBlock");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:130:2: ( FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock ) )
            // /Library/WebServer/Documents/calc/Formula.g:130:4: FUNCTIONSTATEMENT IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' ( NEWLINE )+ innerBlock ENDBLOCK FUNCTIONSTATEMENT
            FUNCTIONSTATEMENT60=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef694); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT60);

            IDENT61=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef696); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT61);

            char_literal62=this.match(this.input,92,FormulaParser.FOLLOW_92_in_functionDef698); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_92.add(char_literal62);

            // /Library/WebServer/Documents/calc/Formula.g:130:32: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==IDENT) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:130:33: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                    IDENT63=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef701); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT63);

                    // /Library/WebServer/Documents/calc/Formula.g:130:40: ( EQUALS defaultValue | ( ',' IDENT )* )
                    var alt18=2;
                    var LA18_0 = this.input.LA(1);

                    if ( (LA18_0==EQUALS) ) {
                        alt18=1;
                    }
                    else if ( ((LA18_0>=93 && LA18_0<=94)) ) {
                        alt18=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                        throw nvae;
                    }
                    switch (alt18) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:130:41: EQUALS defaultValue
                            EQUALS64=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef705); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS64);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef708);
                            defaultValue65=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue65.getTree());


                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:130:64: ( ',' IDENT )*
                            // /Library/WebServer/Documents/calc/Formula.g:130:64: ( ',' IDENT )*
                            loop17:
                            do {
                                var alt17=2;
                                var LA17_0 = this.input.LA(1);

                                if ( (LA17_0==93) ) {
                                    var LA17_1 = this.input.LA(2);

                                    if ( (LA17_1==IDENT) ) {
                                        var LA17_3 = this.input.LA(3);

                                        if ( ((LA17_3>=93 && LA17_3<=94)) ) {
                                            alt17=1;
                                        }


                                    }


                                }


                                switch (alt17) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:130:65: ',' IDENT
                                    char_literal66=this.match(this.input,93,FormulaParser.FOLLOW_93_in_functionDef713); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_93.add(char_literal66);

                                    IDENT67=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef715); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT67);



                                    break;

                                default :
                                    break loop17;
                                }
                            } while (true);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:130:79: ( ',' IDENT EQUALS defaultValue )*
                    loop19:
                    do {
                        var alt19=2;
                        var LA19_0 = this.input.LA(1);

                        if ( (LA19_0==93) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:130:80: ',' IDENT EQUALS defaultValue
                            char_literal68=this.match(this.input,93,FormulaParser.FOLLOW_93_in_functionDef722); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_93.add(char_literal68);

                            IDENT69=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_functionDef724); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT69);

                            EQUALS70=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_functionDef726); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS70);

                            this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_functionDef728);
                            defaultValue71=this.defaultValue();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue71.getTree());


                            break;

                        default :
                            break loop19;
                        }
                    } while (true);



                    break;

            }

            char_literal72=this.match(this.input,94,FormulaParser.FOLLOW_94_in_functionDef735); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_94.add(char_literal72);

            // /Library/WebServer/Documents/calc/Formula.g:130:119: ( NEWLINE )+
            var cnt21=0;
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( (LA21_0==NEWLINE) ) {
                    alt21=1;
                }


                switch (alt21) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:130:119: NEWLINE
                    NEWLINE73=this.match(this.input,NEWLINE,FormulaParser.FOLLOW_NEWLINE_in_functionDef737); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_NEWLINE.add(NEWLINE73);



                    break;

                default :
                    if ( cnt21 >= 1 ) {
                        break loop21;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(21, this.input);
                        throw eee;
                }
                cnt21++;
            } while (true);

            this.pushFollow(FormulaParser.FOLLOW_innerBlock_in_functionDef740);
            innerBlock74=this.innerBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_innerBlock.add(innerBlock74.getTree());
            ENDBLOCK75=this.match(this.input,ENDBLOCK,FormulaParser.FOLLOW_ENDBLOCK_in_functionDef743); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_ENDBLOCK.add(ENDBLOCK75);

            FUNCTIONSTATEMENT76=this.match(this.input,FUNCTIONSTATEMENT,FormulaParser.FOLLOW_FUNCTIONSTATEMENT_in_functionDef745); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_FUNCTIONSTATEMENT.add(FUNCTIONSTATEMENT76);



            // AST REWRITE
            // elements: defaultValue, IDENT, innerBlock
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 130:167: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
            {
                // /Library/WebServer/Documents/calc/Formula.g:130:170: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) innerBlock )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:130:181: ^( PARAMS ( IDENT )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:130:190: ( IDENT )*
                while ( stream_IDENT.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                }
                stream_IDENT.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                // /Library/WebServer/Documents/calc/Formula.g:130:198: ^( DEFAULTS ( defaultValue )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                // /Library/WebServer/Documents/calc/Formula.g:130:209: ( defaultValue )*
                while ( stream_defaultValue.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_defaultValue.nextTree());

                }
                stream_defaultValue.reset();

                this.adaptor.addChild(root_1, root_2);
                }
                this.adaptor.addChild(root_1, stream_innerBlock.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_return: (function() {
        FormulaParser.assignment_return = function(){};
        org.antlr.lang.extend(FormulaParser.assignment_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:133:1: assignment : ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | IDENT ) ( ',' ( PRIMITIVE | IDENT ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( IDENT )* logicalExpression ) );
    // $ANTLR start "assignment"
    assignment: function() {
        var retval = new FormulaParser.assignment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT77 = null;
        var char_literal78 = null;
        var IDENT79 = null;
        var EQUALS80 = null;
        var char_literal82 = null;
        var IDENT83 = null;
        var char_literal84 = null;
        var IDENT85 = null;
        var EQUALS86 = null;
        var char_literal88 = null;
        var string_literal89 = null;
        var PRIMITIVE91 = null;
        var IDENT92 = null;
        var char_literal93 = null;
        var PRIMITIVE94 = null;
        var IDENT95 = null;
        var string_literal96 = null;
         var defaultValue81 = null;
         var defaultValue87 = null;
         var logicalExpression90 = null;
         var logicalExpression97 = null;

        var IDENT77_tree=null;
        var char_literal78_tree=null;
        var IDENT79_tree=null;
        var EQUALS80_tree=null;
        var char_literal82_tree=null;
        var IDENT83_tree=null;
        var char_literal84_tree=null;
        var IDENT85_tree=null;
        var EQUALS86_tree=null;
        var char_literal88_tree=null;
        var string_literal89_tree=null;
        var PRIMITIVE91_tree=null;
        var IDENT92_tree=null;
        var char_literal93_tree=null;
        var PRIMITIVE94_tree=null;
        var IDENT95_tree=null;
        var string_literal96_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_95=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 95");
        var stream_94=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 94");
        var stream_EQUALS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EQUALS");
        var stream_93=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 93");
        var stream_92=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 92");
        var stream_PRIMITIVE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PRIMITIVE");
        var stream_defaultValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule defaultValue");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:134:2: ( IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression ) | ( PRIMITIVE | IDENT ) ( ',' ( PRIMITIVE | IDENT ) )* '<-' logicalExpression -> ^( ASSIGN ( PRIMITIVE )* ( IDENT )* logicalExpression ) )
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==IDENT) ) {
                var LA29_1 = this.input.LA(2);

                if ( (LA29_1==92) ) {
                    alt29=1;
                }
                else if ( (LA29_1==93||LA29_1==95) ) {
                    alt29=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 29, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA29_0==PRIMITIVE) ) {
                alt29=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }
            switch (alt29) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:135:2: IDENT '(' ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )? ')' '<-' logicalExpression
                    IDENT77=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment780); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT77);

                    char_literal78=this.match(this.input,92,FormulaParser.FOLLOW_92_in_assignment782); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_92.add(char_literal78);

                    // /Library/WebServer/Documents/calc/Formula.g:135:12: ( IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )* )?
                    var alt25=2;
                    var LA25_0 = this.input.LA(1);

                    if ( (LA25_0==IDENT) ) {
                        alt25=1;
                    }
                    switch (alt25) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:135:13: IDENT ( EQUALS defaultValue | ( ',' IDENT )* ) ( ',' IDENT EQUALS defaultValue )*
                            IDENT79=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment785); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT79);

                            // /Library/WebServer/Documents/calc/Formula.g:135:20: ( EQUALS defaultValue | ( ',' IDENT )* )
                            var alt23=2;
                            var LA23_0 = this.input.LA(1);

                            if ( (LA23_0==EQUALS) ) {
                                alt23=1;
                            }
                            else if ( ((LA23_0>=93 && LA23_0<=94)) ) {
                                alt23=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                                throw nvae;
                            }
                            switch (alt23) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:135:21: EQUALS defaultValue
                                    EQUALS80=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment789); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS80);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment791);
                                    defaultValue81=this.defaultValue();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue81.getTree());


                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:135:43: ( ',' IDENT )*
                                    // /Library/WebServer/Documents/calc/Formula.g:135:43: ( ',' IDENT )*
                                    loop22:
                                    do {
                                        var alt22=2;
                                        var LA22_0 = this.input.LA(1);

                                        if ( (LA22_0==93) ) {
                                            var LA22_1 = this.input.LA(2);

                                            if ( (LA22_1==IDENT) ) {
                                                var LA22_3 = this.input.LA(3);

                                                if ( ((LA22_3>=93 && LA22_3<=94)) ) {
                                                    alt22=1;
                                                }


                                            }


                                        }


                                        switch (alt22) {
                                        case 1 :
                                            // /Library/WebServer/Documents/calc/Formula.g:135:44: ',' IDENT
                                            char_literal82=this.match(this.input,93,FormulaParser.FOLLOW_93_in_assignment796); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_93.add(char_literal82);

                                            IDENT83=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment798); if (this.state.failed) return retval; 
                                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT83);



                                            break;

                                        default :
                                            break loop22;
                                        }
                                    } while (true);



                                    break;

                            }

                            // /Library/WebServer/Documents/calc/Formula.g:135:58: ( ',' IDENT EQUALS defaultValue )*
                            loop24:
                            do {
                                var alt24=2;
                                var LA24_0 = this.input.LA(1);

                                if ( (LA24_0==93) ) {
                                    alt24=1;
                                }


                                switch (alt24) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:135:59: ',' IDENT EQUALS defaultValue
                                    char_literal84=this.match(this.input,93,FormulaParser.FOLLOW_93_in_assignment805); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_93.add(char_literal84);

                                    IDENT85=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment807); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT85);

                                    EQUALS86=this.match(this.input,EQUALS,FormulaParser.FOLLOW_EQUALS_in_assignment809); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_EQUALS.add(EQUALS86);

                                    this.pushFollow(FormulaParser.FOLLOW_defaultValue_in_assignment811);
                                    defaultValue87=this.defaultValue();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_defaultValue.add(defaultValue87.getTree());


                                    break;

                                default :
                                    break loop24;
                                }
                            } while (true);



                            break;

                    }

                    char_literal88=this.match(this.input,94,FormulaParser.FOLLOW_94_in_assignment818); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_94.add(char_literal88);

                    string_literal89=this.match(this.input,95,FormulaParser.FOLLOW_95_in_assignment820); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_95.add(string_literal89);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment822);
                    logicalExpression90=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression90.getTree());


                    // AST REWRITE
                    // elements: IDENT, logicalExpression, defaultValue
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 135:121: -> ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:135:124: ^( FUNCTION ^( PARAMS ( IDENT )* ) ^( DEFAULTS ( defaultValue )* ) logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:135:135: ^( PARAMS ( IDENT )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(PARAMS, "PARAMS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:135:144: ( IDENT )*
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }
                        // /Library/WebServer/Documents/calc/Formula.g:135:152: ^( DEFAULTS ( defaultValue )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(DEFAULTS, "DEFAULTS"), root_2);

                        // /Library/WebServer/Documents/calc/Formula.g:135:163: ( defaultValue )*
                        while ( stream_defaultValue.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_defaultValue.nextTree());

                        }
                        stream_defaultValue.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }
                        this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:136:2: ( PRIMITIVE | IDENT ) ( ',' ( PRIMITIVE | IDENT ) )* '<-' logicalExpression
                    // /Library/WebServer/Documents/calc/Formula.g:136:2: ( PRIMITIVE | IDENT )
                    var alt26=2;
                    var LA26_0 = this.input.LA(1);

                    if ( (LA26_0==PRIMITIVE) ) {
                        alt26=1;
                    }
                    else if ( (LA26_0==IDENT) ) {
                        alt26=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 26, 0, this.input);

                        throw nvae;
                    }
                    switch (alt26) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:136:3: PRIMITIVE
                            PRIMITIVE91=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment850); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE91);



                            break;
                        case 2 :
                            // /Library/WebServer/Documents/calc/Formula.g:136:15: IDENT
                            IDENT92=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment854); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT92);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:136:22: ( ',' ( PRIMITIVE | IDENT ) )*
                    loop28:
                    do {
                        var alt28=2;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0==93) ) {
                            alt28=1;
                        }


                        switch (alt28) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:136:23: ',' ( PRIMITIVE | IDENT )
                            char_literal93=this.match(this.input,93,FormulaParser.FOLLOW_93_in_assignment858); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_93.add(char_literal93);

                            // /Library/WebServer/Documents/calc/Formula.g:136:27: ( PRIMITIVE | IDENT )
                            var alt27=2;
                            var LA27_0 = this.input.LA(1);

                            if ( (LA27_0==PRIMITIVE) ) {
                                alt27=1;
                            }
                            else if ( (LA27_0==IDENT) ) {
                                alt27=2;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                                throw nvae;
                            }
                            switch (alt27) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:136:28: PRIMITIVE
                                    PRIMITIVE94=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_assignment861); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_PRIMITIVE.add(PRIMITIVE94);



                                    break;
                                case 2 :
                                    // /Library/WebServer/Documents/calc/Formula.g:136:40: IDENT
                                    IDENT95=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_assignment865); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT95);



                                    break;

                            }



                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    string_literal96=this.match(this.input,95,FormulaParser.FOLLOW_95_in_assignment871); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_95.add(string_literal96);

                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_assignment873);
                    logicalExpression97=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression97.getTree());


                    // AST REWRITE
                    // elements: IDENT, PRIMITIVE, logicalExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 136:73: -> ^( ASSIGN ( PRIMITIVE )* ( IDENT )* logicalExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:136:76: ^( ASSIGN ( PRIMITIVE )* ( IDENT )* logicalExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ASSIGN, "ASSIGN"), root_1);

                        // /Library/WebServer/Documents/calc/Formula.g:136:85: ( PRIMITIVE )*
                        while ( stream_PRIMITIVE.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_PRIMITIVE.nextNode());

                        }
                        stream_PRIMITIVE.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:136:96: ( IDENT )*
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();
                        this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logicalExpression_return: (function() {
        FormulaParser.logicalExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.logicalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:139:1: logicalExpression : booleanAndExpression ( OR booleanAndExpression )* ;
    // $ANTLR start "logicalExpression"
    logicalExpression: function() {
        var retval = new FormulaParser.logicalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var OR99 = null;
         var booleanAndExpression98 = null;
         var booleanAndExpression100 = null;

        var OR99_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:140:2: ( booleanAndExpression ( OR booleanAndExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:140:4: booleanAndExpression ( OR booleanAndExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_logicalExpression900);
            booleanAndExpression98=this.booleanAndExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression98.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:140:25: ( OR booleanAndExpression )*
            loop30:
            do {
                var alt30=2;
                var LA30_0 = this.input.LA(1);

                if ( (LA30_0==OR) ) {
                    alt30=1;
                }


                switch (alt30) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:140:26: OR booleanAndExpression
                    OR99=this.match(this.input,OR,FormulaParser.FOLLOW_OR_in_logicalExpression903); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    OR99_tree = this.adaptor.create(OR99);
                    root_0 = this.adaptor.becomeRoot(OR99_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_booleanAndExpression_in_logicalExpression906);
                    booleanAndExpression100=this.booleanAndExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, booleanAndExpression100.getTree());


                    break;

                default :
                    break loop30;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    booleanAndExpression_return: (function() {
        FormulaParser.booleanAndExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.booleanAndExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:145:1: booleanAndExpression : equalityExpression ( AND equalityExpression )* ;
    // $ANTLR start "booleanAndExpression"
    booleanAndExpression: function() {
        var retval = new FormulaParser.booleanAndExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var AND102 = null;
         var equalityExpression101 = null;
         var equalityExpression103 = null;

        var AND102_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:146:2: ( equalityExpression ( AND equalityExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:146:4: equalityExpression ( AND equalityExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression937);
            equalityExpression101=this.equalityExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression101.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:146:23: ( AND equalityExpression )*
            loop31:
            do {
                var alt31=2;
                var LA31_0 = this.input.LA(1);

                if ( (LA31_0==AND) ) {
                    alt31=1;
                }


                switch (alt31) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:146:24: AND equalityExpression
                    AND102=this.match(this.input,AND,FormulaParser.FOLLOW_AND_in_booleanAndExpression940); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    AND102_tree = this.adaptor.create(AND102);
                    root_0 = this.adaptor.becomeRoot(AND102_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_equalityExpression_in_booleanAndExpression943);
                    equalityExpression103=this.equalityExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression103.getTree());


                    break;

                default :
                    break loop31;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    equalityExpression_return: (function() {
        FormulaParser.equalityExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.equalityExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:151:1: equalityExpression : relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* ;
    // $ANTLR start "equalityExpression"
    equalityExpression: function() {
        var retval = new FormulaParser.equalityExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set105 = null;
         var relationalExpression104 = null;
         var relationalExpression106 = null;

        var set105_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:152:2: ( relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:152:4: relationalExpression ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression974);
            relationalExpression104=this.relationalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression104.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:152:25: ( ( EQUALS | NOTEQUALS ) relationalExpression )*
            loop32:
            do {
                var alt32=2;
                var LA32_0 = this.input.LA(1);

                if ( (LA32_0==EQUALS||LA32_0==NOTEQUALS) ) {
                    alt32=1;
                }


                switch (alt32) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:152:26: ( EQUALS | NOTEQUALS ) relationalExpression
                    
                    set105=this.input.LT(1);
                    if ( this.input.LA(1)==EQUALS||this.input.LA(1)==NOTEQUALS ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set105), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_relationalExpression_in_equalityExpression984);
                    relationalExpression106=this.relationalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression106.getTree());


                    break;

                default :
                    break loop32;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relationalExpression_return: (function() {
        FormulaParser.relationalExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.relationalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:162:1: relationalExpression : additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* ;
    // $ANTLR start "relationalExpression"
    relationalExpression: function() {
        var retval = new FormulaParser.relationalExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set108 = null;
         var additiveExpression107 = null;
         var additiveExpression109 = null;

        var set108_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:163:2: ( additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:163:4: additiveExpression ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1026);
            additiveExpression107=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression107.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:163:23: ( ( LT | LTEQ | GT | GTEQ ) additiveExpression )*
            loop33:
            do {
                var alt33=2;
                var LA33_0 = this.input.LA(1);

                if ( ((LA33_0>=LT && LA33_0<=GTEQ)) ) {
                    alt33=1;
                }


                switch (alt33) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:163:25: ( LT | LTEQ | GT | GTEQ ) additiveExpression
                    
                    set108=this.input.LT(1);
                    if ( (this.input.LA(1)>=LT && this.input.LA(1)<=GTEQ) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set108), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_relationalExpression1041);
                    additiveExpression109=this.additiveExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression109.getTree());


                    break;

                default :
                    break loop33;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    additiveExpression_return: (function() {
        FormulaParser.additiveExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.additiveExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:171:1: additiveExpression : multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* ;
    // $ANTLR start "additiveExpression"
    additiveExpression: function() {
        var retval = new FormulaParser.additiveExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set111 = null;
         var multiplicativeExpression110 = null;
         var multiplicativeExpression112 = null;

        var set111_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:172:2: ( multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:172:4: multiplicativeExpression ( ( PLUS | MINUS ) multiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1084);
            multiplicativeExpression110=this.multiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression110.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:172:29: ( ( PLUS | MINUS ) multiplicativeExpression )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( ((LA34_0>=PLUS && LA34_0<=MINUS)) ) {
                    alt34=1;
                }


                switch (alt34) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:172:31: ( PLUS | MINUS ) multiplicativeExpression
                    
                    set111=this.input.LT(1);
                    if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=MINUS) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set111), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_multiplicativeExpression_in_additiveExpression1095);
                    multiplicativeExpression112=this.multiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression112.getTree());


                    break;

                default :
                    break loop34;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multiplicativeExpression_return: (function() {
        FormulaParser.multiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.multiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:178:1: multiplicativeExpression : negationExpression ( ( MULT | DIV | MOD ) negationExpression )* ;
    // $ANTLR start "multiplicativeExpression"
    multiplicativeExpression: function() {
        var retval = new FormulaParser.multiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set114 = null;
         var negationExpression113 = null;
         var negationExpression115 = null;

        var set114_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:179:2: ( negationExpression ( ( MULT | DIV | MOD ) negationExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:179:4: negationExpression ( ( MULT | DIV | MOD ) negationExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_multiplicativeExpression1125);
            negationExpression113=this.negationExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, negationExpression113.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:179:23: ( ( MULT | DIV | MOD ) negationExpression )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( ((LA35_0>=MULT && LA35_0<=MOD)) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:179:25: ( MULT | DIV | MOD ) negationExpression
                    
                    set114=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=MOD) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set114), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_negationExpression_in_multiplicativeExpression1138);
                    negationExpression115=this.negationExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, negationExpression115.getTree());


                    break;

                default :
                    break loop35;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    negationExpression_return: (function() {
        FormulaParser.negationExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.negationExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:186:1: negationExpression : ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression );
    // $ANTLR start "negationExpression"
    negationExpression: function() {
        var retval = new FormulaParser.negationExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS116 = null;
         var powerExpression117 = null;
         var powerExpression118 = null;

        var MINUS116_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_powerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule powerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:187:2: ( MINUS powerExpression -> ^( NEGATE powerExpression ) | powerExpression )
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0==MINUS) ) {
                alt36=1;
            }
            else if ( (LA36_0==IDENT||LA36_0==PRIMITIVE||(LA36_0>=NOT && LA36_0<=LARR)||(LA36_0>=INTEGER && LA36_0<=FALSE)||(LA36_0>=STRING && LA36_0<=92)||LA36_0==96) ) {
                alt36=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 36, 0, this.input);

                throw nvae;
            }
            switch (alt36) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:187:4: MINUS powerExpression
                    MINUS116=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negationExpression1183); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS116);

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1185);
                    powerExpression117=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_powerExpression.add(powerExpression117.getTree());


                    // AST REWRITE
                    // elements: powerExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 187:26: -> ^( NEGATE powerExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:187:29: ^( NEGATE powerExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                        this.adaptor.addChild(root_1, stream_powerExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:188:3: powerExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_powerExpression_in_negationExpression1199);
                    powerExpression118=this.powerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, powerExpression118.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    powerExpression_return: (function() {
        FormulaParser.powerExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.powerExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:190:1: powerExpression : unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) ;
    // $ANTLR start "powerExpression"
    powerExpression: function() {
        var retval = new FormulaParser.powerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW120 = null;
         var unaryExpression119 = null;
         var unaryOrNegate121 = null;

        var POW120_tree=null;
        var stream_POW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token POW");
        var stream_unaryOrNegate=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryOrNegate");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:191:2: ( unaryExpression ( POW unaryOrNegate )* -> ^( POWER unaryExpression ( unaryOrNegate )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:191:4: unaryExpression ( POW unaryOrNegate )*
            this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_powerExpression1210);
            unaryExpression119=this.unaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression119.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:191:20: ( POW unaryOrNegate )*
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( (LA37_0==POW) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:191:21: POW unaryOrNegate
                    POW120=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_powerExpression1213); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_POW.add(POW120);

                    this.pushFollow(FormulaParser.FOLLOW_unaryOrNegate_in_powerExpression1215);
                    unaryOrNegate121=this.unaryOrNegate();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryOrNegate.add(unaryOrNegate121.getTree());


                    break;

                default :
                    break loop37;
                }
            } while (true);



            // AST REWRITE
            // elements: unaryExpression, unaryOrNegate
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 191:43: -> ^( POWER unaryExpression ( unaryOrNegate )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:191:47: ^( POWER unaryExpression ( unaryOrNegate )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(POWER, "POWER"), root_1);

                this.adaptor.addChild(root_1, stream_unaryExpression.nextTree());
                // /Library/WebServer/Documents/calc/Formula.g:191:71: ( unaryOrNegate )*
                while ( stream_unaryOrNegate.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_unaryOrNegate.nextTree());

                }
                stream_unaryOrNegate.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryOrNegate_return: (function() {
        FormulaParser.unaryOrNegate_return = function(){};
        org.antlr.lang.extend(FormulaParser.unaryOrNegate_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:194:1: unaryOrNegate : ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) );
    // $ANTLR start "unaryOrNegate"
    unaryOrNegate: function() {
        var retval = new FormulaParser.unaryOrNegate_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var MINUS123 = null;
         var unaryExpression122 = null;
         var unaryExpression124 = null;

        var MINUS123_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_unaryExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unaryExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:195:2: ( unaryExpression | MINUS unaryExpression -> ^( NEGATE unaryExpression ) )
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==IDENT||LA38_0==PRIMITIVE||(LA38_0>=NOT && LA38_0<=LARR)||(LA38_0>=INTEGER && LA38_0<=FALSE)||(LA38_0>=STRING && LA38_0<=92)||LA38_0==96) ) {
                alt38=1;
            }
            else if ( (LA38_0==MINUS) ) {
                alt38=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 38, 0, this.input);

                throw nvae;
            }
            switch (alt38) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:195:4: unaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1242);
                    unaryExpression122=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression122.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:196:3: MINUS unaryExpression
                    MINUS123=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unaryOrNegate1248); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_MINUS.add(MINUS123);

                    this.pushFollow(FormulaParser.FOLLOW_unaryExpression_in_unaryOrNegate1250);
                    unaryExpression124=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unaryExpression.add(unaryExpression124.getTree());


                    // AST REWRITE
                    // elements: unaryExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 196:25: -> ^( NEGATE unaryExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:196:28: ^( NEGATE unaryExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                        this.adaptor.addChild(root_1, stream_unaryExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unaryExpression_return: (function() {
        FormulaParser.unaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:201:1: unaryExpression : ( NOT primaryExpression | primaryExpression );
    // $ANTLR start "unaryExpression"
    unaryExpression: function() {
        var retval = new FormulaParser.unaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var NOT125 = null;
         var primaryExpression126 = null;
         var primaryExpression127 = null;

        var NOT125_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:202:2: ( NOT primaryExpression | primaryExpression )
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==NOT) ) {
                alt39=1;
            }
            else if ( (LA39_0==IDENT||LA39_0==PRIMITIVE||LA39_0==LARR||(LA39_0>=INTEGER && LA39_0<=FALSE)||(LA39_0>=STRING && LA39_0<=92)||LA39_0==96) ) {
                alt39=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 39, 0, this.input);

                throw nvae;
            }
            switch (alt39) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:202:4: NOT primaryExpression
                    root_0 = this.adaptor.nil();

                    NOT125=this.match(this.input,NOT,FormulaParser.FOLLOW_NOT_in_unaryExpression1278); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    NOT125_tree = this.adaptor.create(NOT125);
                    root_0 = this.adaptor.becomeRoot(NOT125_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_primaryExpression_in_unaryExpression1281);
                    primaryExpression126=this.primaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression126.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:204:8: primaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_primaryExpression_in_unaryExpression1293);
                    primaryExpression127=this.primaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression127.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primaryExpression_return: (function() {
        FormulaParser.primaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.primaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:209:1: primaryExpression : ( ( innerPrimaryExpression array )=> innerPrimaryExpression array | innerPrimaryExpression );
    // $ANTLR start "primaryExpression"
    primaryExpression: function() {
        var retval = new FormulaParser.primaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var innerPrimaryExpression128 = null;
         var array129 = null;
         var innerPrimaryExpression130 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:210:2: ( ( innerPrimaryExpression array )=> innerPrimaryExpression array | innerPrimaryExpression )
            var alt40=2;
            alt40 = this.dfa40.predict(this.input);
            switch (alt40) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:210:5: ( innerPrimaryExpression array )=> innerPrimaryExpression array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_primaryExpression1334);
                    innerPrimaryExpression128=this.innerPrimaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, innerPrimaryExpression128.getTree());
                    this.pushFollow(FormulaParser.FOLLOW_array_in_primaryExpression1337);
                    array129=this.array();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, array129.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:211:4: innerPrimaryExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_primaryExpression1343);
                    innerPrimaryExpression130=this.innerPrimaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, innerPrimaryExpression130.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    innerPrimaryExpression_return: (function() {
        FormulaParser.innerPrimaryExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.innerPrimaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:213:1: innerPrimaryExpression : ( '(' logicalExpression ')' | value );
    // $ANTLR start "innerPrimaryExpression"
    innerPrimaryExpression: function() {
        var retval = new FormulaParser.innerPrimaryExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal131 = null;
        var char_literal133 = null;
         var logicalExpression132 = null;
         var value134 = null;

        var char_literal131_tree=null;
        var char_literal133_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:214:2: ( '(' logicalExpression ')' | value )
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==92) ) {
                alt41=1;
            }
            else if ( (LA41_0==IDENT||LA41_0==PRIMITIVE||LA41_0==LARR||(LA41_0>=INTEGER && LA41_0<=FALSE)||LA41_0==STRING||LA41_0==96) ) {
                alt41=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 41, 0, this.input);

                throw nvae;
            }
            switch (alt41) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:214:4: '(' logicalExpression ')'
                    root_0 = this.adaptor.nil();

                    char_literal131=this.match(this.input,92,FormulaParser.FOLLOW_92_in_innerPrimaryExpression1353); if (this.state.failed) return retval;
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_innerPrimaryExpression1356);
                    logicalExpression132=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalExpression132.getTree());
                    char_literal133=this.match(this.input,94,FormulaParser.FOLLOW_94_in_innerPrimaryExpression1358); if (this.state.failed) return retval;


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:215:4: value
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_value_in_innerPrimaryExpression1364);
                    value134=this.value();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, value134.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    value_return: (function() {
        FormulaParser.value_return = function(){};
        org.antlr.lang.extend(FormulaParser.value_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:218:1: value : ( number | bool | string | material | funOrIdent | primitive | array );
    // $ANTLR start "value"
    value: function() {
        var retval = new FormulaParser.value_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var number135 = null;
         var bool136 = null;
         var string137 = null;
         var material138 = null;
         var funOrIdent139 = null;
         var primitive140 = null;
         var array141 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:219:2: ( number | bool | string | material | funOrIdent | primitive | array )
            var alt42=7;
            switch ( this.input.LA(1) ) {
            case INTEGER:
            case FLOAT:
                alt42=1;
                break;
            case TRUE:
            case FALSE:
                alt42=2;
                break;
            case STRING:
                alt42=3;
                break;
            case 96:
                alt42=4;
                break;
            case IDENT:
                alt42=5;
                break;
            case PRIMITIVE:
                alt42=6;
                break;
            case LARR:
                alt42=7;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 42, 0, this.input);

                throw nvae;
            }

            switch (alt42) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:219:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_value1378);
                    number135=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number135.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:220:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_value1384);
                    bool136=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool136.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:221:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_value1390);
                    string137=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string137.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:222:5: material
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_material_in_value1396);
                    material138=this.material();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, material138.getTree());


                    break;
                case 5 :
                    // /Library/WebServer/Documents/calc/Formula.g:223:4: funOrIdent
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_funOrIdent_in_value1401);
                    funOrIdent139=this.funOrIdent();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, funOrIdent139.getTree());


                    break;
                case 6 :
                    // /Library/WebServer/Documents/calc/Formula.g:224:4: primitive
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_primitive_in_value1406);
                    primitive140=this.primitive();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primitive140.getTree());


                    break;
                case 7 :
                    // /Library/WebServer/Documents/calc/Formula.g:225:4: array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_array_in_value1411);
                    array141=this.array();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, array141.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    defaultValue_return: (function() {
        FormulaParser.defaultValue_return = function(){};
        org.antlr.lang.extend(FormulaParser.defaultValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:229:1: defaultValue : ( negnumber | number | bool | string );
    // $ANTLR start "defaultValue"
    defaultValue: function() {
        var retval = new FormulaParser.defaultValue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var negnumber142 = null;
         var number143 = null;
         var bool144 = null;
         var string145 = null;


        try {
            // /Library/WebServer/Documents/calc/Formula.g:230:2: ( negnumber | number | bool | string )
            var alt43=4;
            switch ( this.input.LA(1) ) {
            case MINUS:
                alt43=1;
                break;
            case INTEGER:
            case FLOAT:
                alt43=2;
                break;
            case TRUE:
            case FALSE:
                alt43=3;
                break;
            case STRING:
                alt43=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 43, 0, this.input);

                throw nvae;
            }

            switch (alt43) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:230:5: negnumber
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_negnumber_in_defaultValue1427);
                    negnumber142=this.negnumber();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, negnumber142.getTree());


                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:231:5: number
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_number_in_defaultValue1433);
                    number143=this.number();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, number143.getTree());


                    break;
                case 3 :
                    // /Library/WebServer/Documents/calc/Formula.g:232:5: bool
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_bool_in_defaultValue1439);
                    bool144=this.bool();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bool144.getTree());


                    break;
                case 4 :
                    // /Library/WebServer/Documents/calc/Formula.g:233:5: string
                    root_0 = this.adaptor.nil();

                    this.pushFollow(FormulaParser.FOLLOW_string_in_defaultValue1445);
                    string145=this.string();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, string145.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    array_return: (function() {
        FormulaParser.array_return = function(){};
        org.antlr.lang.extend(FormulaParser.array_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:236:1: array : LARR ( logicalExpression ( ',' logicalExpression )* )? RARR -> ^( ARRAY ( logicalExpression )* ) ;
    // $ANTLR start "array"
    array: function() {
        var retval = new FormulaParser.array_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LARR146 = null;
        var char_literal148 = null;
        var RARR150 = null;
         var logicalExpression147 = null;
         var logicalExpression149 = null;

        var LARR146_tree=null;
        var char_literal148_tree=null;
        var RARR150_tree=null;
        var stream_93=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 93");
        var stream_RARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RARR");
        var stream_LARR=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LARR");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:237:2: ( LARR ( logicalExpression ( ',' logicalExpression )* )? RARR -> ^( ARRAY ( logicalExpression )* ) )
            // /Library/WebServer/Documents/calc/Formula.g:237:4: LARR ( logicalExpression ( ',' logicalExpression )* )? RARR
            LARR146=this.match(this.input,LARR,FormulaParser.FOLLOW_LARR_in_array1457); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_LARR.add(LARR146);

            // /Library/WebServer/Documents/calc/Formula.g:237:9: ( logicalExpression ( ',' logicalExpression )* )?
            var alt45=2;
            var LA45_0 = this.input.LA(1);

            if ( (LA45_0==IDENT||LA45_0==PRIMITIVE||LA45_0==MINUS||(LA45_0>=NOT && LA45_0<=LARR)||(LA45_0>=INTEGER && LA45_0<=FALSE)||(LA45_0>=STRING && LA45_0<=92)||LA45_0==96) ) {
                alt45=1;
            }
            switch (alt45) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:237:10: logicalExpression ( ',' logicalExpression )*
                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_array1460);
                    logicalExpression147=this.logicalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression147.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:237:28: ( ',' logicalExpression )*
                    loop44:
                    do {
                        var alt44=2;
                        var LA44_0 = this.input.LA(1);

                        if ( (LA44_0==93) ) {
                            alt44=1;
                        }


                        switch (alt44) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:237:29: ',' logicalExpression
                            char_literal148=this.match(this.input,93,FormulaParser.FOLLOW_93_in_array1463); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_93.add(char_literal148);

                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_array1465);
                            logicalExpression149=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression149.getTree());


                            break;

                        default :
                            break loop44;
                        }
                    } while (true);



                    break;

            }

            RARR150=this.match(this.input,RARR,FormulaParser.FOLLOW_RARR_in_array1471); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_RARR.add(RARR150);



            // AST REWRITE
            // elements: logicalExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 237:60: -> ^( ARRAY ( logicalExpression )* )
            {
                // /Library/WebServer/Documents/calc/Formula.g:237:63: ^( ARRAY ( logicalExpression )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAY, "ARRAY"), root_1);

                // /Library/WebServer/Documents/calc/Formula.g:237:71: ( logicalExpression )*
                while ( stream_logicalExpression.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                }
                stream_logicalExpression.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    number_return: (function() {
        FormulaParser.number_return = function(){};
        org.antlr.lang.extend(FormulaParser.number_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:243:1: number : ( INTEGER | FLOAT );
    // $ANTLR start "number"
    number: function() {
        var retval = new FormulaParser.number_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set151 = null;

        var set151_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:243:8: ( INTEGER | FLOAT )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set151=this.input.LT(1);
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set151));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    negnumber_return: (function() {
        FormulaParser.negnumber_return = function(){};
        org.antlr.lang.extend(FormulaParser.negnumber_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:245:1: negnumber : '-' number -> ^( NEGATE number ) ;
    // $ANTLR start "negnumber"
    negnumber: function() {
        var retval = new FormulaParser.negnumber_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal152 = null;
         var number153 = null;

        var char_literal152_tree=null;
        var stream_MINUS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token MINUS");
        var stream_number=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule number");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:245:11: ( '-' number -> ^( NEGATE number ) )
            // /Library/WebServer/Documents/calc/Formula.g:245:13: '-' number
            char_literal152=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_negnumber1524); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_MINUS.add(char_literal152);

            this.pushFollow(FormulaParser.FOLLOW_number_in_negnumber1526);
            number153=this.number();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_number.add(number153.getTree());


            // AST REWRITE
            // elements: number
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 245:24: -> ^( NEGATE number )
            {
                // /Library/WebServer/Documents/calc/Formula.g:245:27: ^( NEGATE number )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(NEGATE, "NEGATE"), root_1);

                this.adaptor.addChild(root_1, stream_number.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    bool_return: (function() {
        FormulaParser.bool_return = function(){};
        org.antlr.lang.extend(FormulaParser.bool_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:255:1: bool : ( TRUE | FALSE );
    // $ANTLR start "bool"
    bool: function() {
        var retval = new FormulaParser.bool_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set154 = null;

        var set154_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:256:2: ( TRUE | FALSE )
            // /Library/WebServer/Documents/calc/Formula.g:
            root_0 = this.adaptor.nil();

            set154=this.input.LT(1);
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set154));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    material_return: (function() {
        FormulaParser.material_return = function(){};
        org.antlr.lang.extend(FormulaParser.material_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:268:1: material : '{' additiveExpression unitMultiplicativeExpression '}' -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) ;
    // $ANTLR start "material"
    material: function() {
        var retval = new FormulaParser.material_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal155 = null;
        var char_literal158 = null;
         var additiveExpression156 = null;
         var unitMultiplicativeExpression157 = null;

        var char_literal155_tree=null;
        var char_literal158_tree=null;
        var stream_97=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 97");
        var stream_96=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 96");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        var stream_additiveExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule additiveExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:268:9: ( '{' additiveExpression unitMultiplicativeExpression '}' -> ^( MATERIAL unitMultiplicativeExpression additiveExpression ) )
            // /Library/WebServer/Documents/calc/Formula.g:268:12: '{' additiveExpression unitMultiplicativeExpression '}'
            char_literal155=this.match(this.input,96,FormulaParser.FOLLOW_96_in_material1678); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_96.add(char_literal155);

            this.pushFollow(FormulaParser.FOLLOW_additiveExpression_in_material1680);
            additiveExpression156=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_additiveExpression.add(additiveExpression156.getTree());
            this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_material1682);
            unitMultiplicativeExpression157=this.unitMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression157.getTree());
            char_literal158=this.match(this.input,97,FormulaParser.FOLLOW_97_in_material1684); if (this.state.failed) return retval; 
            if ( this.state.backtracking===0 ) stream_97.add(char_literal158);



            // AST REWRITE
            // elements: additiveExpression, unitMultiplicativeExpression
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            if ( this.state.backtracking===0 ) {
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 268:68: -> ^( MATERIAL unitMultiplicativeExpression additiveExpression )
            {
                // /Library/WebServer/Documents/calc/Formula.g:268:71: ^( MATERIAL unitMultiplicativeExpression additiveExpression )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(MATERIAL, "MATERIAL"), root_1);

                this.adaptor.addChild(root_1, stream_unitMultiplicativeExpression.nextTree());
                this.adaptor.addChild(root_1, stream_additiveExpression.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;}


            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitMultiplicativeExpression_return: (function() {
        FormulaParser.unitMultiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitMultiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:275:1: unitMultiplicativeExpression : unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* ;
    // $ANTLR start "unitMultiplicativeExpression"
    unitMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PER160 = null;
         var unitInnerMultiplicativeExpression159 = null;
         var unitInnerMultiplicativeExpression161 = null;

        var PER160_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:276:2: ( unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )* )
            // /Library/WebServer/Documents/calc/Formula.g:276:4: unitInnerMultiplicativeExpression ( PER unitInnerMultiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1721);
            unitInnerMultiplicativeExpression159=this.unitInnerMultiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression159.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:276:38: ( PER unitInnerMultiplicativeExpression )*
            loop46:
            do {
                var alt46=2;
                var LA46_0 = this.input.LA(1);

                if ( (LA46_0==PER) ) {
                    alt46=1;
                }


                switch (alt46) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:276:40: PER unitInnerMultiplicativeExpression
                    PER160=this.match(this.input,PER,FormulaParser.FOLLOW_PER_in_unitMultiplicativeExpression1725); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    PER160_tree = this.adaptor.create(PER160);
                    root_0 = this.adaptor.becomeRoot(PER160_tree, root_0);
                    }
                    this.pushFollow(FormulaParser.FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1728);
                    unitInnerMultiplicativeExpression161=this.unitInnerMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitInnerMultiplicativeExpression161.getTree());


                    break;

                default :
                    break loop46;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitInnerMultiplicativeExpression_return: (function() {
        FormulaParser.unitInnerMultiplicativeExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitInnerMultiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:279:1: unitInnerMultiplicativeExpression : unitClump ( ( MULT | DIV ) unitClump )* ;
    // $ANTLR start "unitInnerMultiplicativeExpression"
    unitInnerMultiplicativeExpression: function() {
        var retval = new FormulaParser.unitInnerMultiplicativeExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set163 = null;
         var unitClump162 = null;
         var unitClump164 = null;

        var set163_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:280:2: ( unitClump ( ( MULT | DIV ) unitClump )* )
            // /Library/WebServer/Documents/calc/Formula.g:280:4: unitClump ( ( MULT | DIV ) unitClump )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1744);
            unitClump162=this.unitClump();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump162.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:280:14: ( ( MULT | DIV ) unitClump )*
            loop47:
            do {
                var alt47=2;
                var LA47_0 = this.input.LA(1);

                if ( ((LA47_0>=MULT && LA47_0<=DIV)) ) {
                    alt47=1;
                }


                switch (alt47) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:280:16: ( MULT | DIV ) unitClump
                    set163=this.input.LT(1);
                    if ( (this.input.LA(1)>=MULT && this.input.LA(1)<=DIV) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(this.adaptor.create(set163), root_0);
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(FormulaParser.FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1755);
                    unitClump164=this.unitClump();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unitClump164.getTree());


                    break;

                default :
                    break loop47;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitClump_return: (function() {
        FormulaParser.unitClump_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitClump_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:283:1: unitClump : ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) );
    // $ANTLR start "unitClump"
    unitClump: function() {
        var retval = new FormulaParser.unitClump_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INTEGER165 = null;
        var DIV166 = null;
        var CUBED168 = null;
        var SQUARED169 = null;
        var CUBED171 = null;
        var SQUARED172 = null;
         var unitPowerExpression167 = null;
         var unitPowerExpression170 = null;

        var INTEGER165_tree=null;
        var DIV166_tree=null;
        var CUBED168_tree=null;
        var SQUARED169_tree=null;
        var CUBED171_tree=null;
        var SQUARED172_tree=null;
        var stream_INTEGER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INTEGER");
        var stream_SQUARED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token SQUARED");
        var stream_DIV=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DIV");
        var stream_CUBED=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token CUBED");
        var stream_unitPowerExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitPowerExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:284:2: ( ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* ) | unitPowerExpression ( CUBED )? ( SQUARED )? -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* ) )
            var alt52=2;
            var LA52_0 = this.input.LA(1);

            if ( (LA52_0==INTEGER) ) {
                alt52=1;
            }
            else if ( (LA52_0==IDENT||LA52_0==92) ) {
                alt52=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 52, 0, this.input);

                throw nvae;
            }
            switch (alt52) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:284:4: ( INTEGER DIV ) unitPowerExpression ( CUBED )? ( SQUARED )?
                    // /Library/WebServer/Documents/calc/Formula.g:284:4: ( INTEGER DIV )
                    // /Library/WebServer/Documents/calc/Formula.g:284:5: INTEGER DIV
                    INTEGER165=this.match(this.input,INTEGER,FormulaParser.FOLLOW_INTEGER_in_unitClump1771); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_INTEGER.add(INTEGER165);

                    DIV166=this.match(this.input,DIV,FormulaParser.FOLLOW_DIV_in_unitClump1773); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_DIV.add(DIV166);




                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump1776);
                    unitPowerExpression167=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression167.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:284:38: ( CUBED )?
                    var alt48=2;
                    var LA48_0 = this.input.LA(1);

                    if ( (LA48_0==CUBED) ) {
                        alt48=1;
                    }
                    switch (alt48) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:284:38: CUBED
                            CUBED168=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump1778); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED168);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:284:45: ( SQUARED )?
                    var alt49=2;
                    var LA49_0 = this.input.LA(1);

                    if ( (LA49_0==SQUARED) ) {
                        alt49=1;
                    }
                    switch (alt49) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:284:45: SQUARED
                            SQUARED169=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump1781); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED169);



                            break;

                    }



                    // AST REWRITE
                    // elements: CUBED, unitPowerExpression, SQUARED
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 284:54: -> ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:284:57: ^( UNITCLUMP unitPowerExpression NEGATE ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        this.adaptor.addChild(root_1, this.adaptor.create(NEGATE, "NEGATE"));
                        // /Library/WebServer/Documents/calc/Formula.g:284:96: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:284:103: ( SQUARED )*
                        while ( stream_SQUARED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_SQUARED.nextNode());

                        }
                        stream_SQUARED.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:285:5: unitPowerExpression ( CUBED )? ( SQUARED )?
                    this.pushFollow(FormulaParser.FOLLOW_unitPowerExpression_in_unitClump1804);
                    unitPowerExpression170=this.unitPowerExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitPowerExpression.add(unitPowerExpression170.getTree());
                    // /Library/WebServer/Documents/calc/Formula.g:285:25: ( CUBED )?
                    var alt50=2;
                    var LA50_0 = this.input.LA(1);

                    if ( (LA50_0==CUBED) ) {
                        alt50=1;
                    }
                    switch (alt50) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:285:25: CUBED
                            CUBED171=this.match(this.input,CUBED,FormulaParser.FOLLOW_CUBED_in_unitClump1806); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_CUBED.add(CUBED171);



                            break;

                    }

                    // /Library/WebServer/Documents/calc/Formula.g:285:32: ( SQUARED )?
                    var alt51=2;
                    var LA51_0 = this.input.LA(1);

                    if ( (LA51_0==SQUARED) ) {
                        alt51=1;
                    }
                    switch (alt51) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:285:32: SQUARED
                            SQUARED172=this.match(this.input,SQUARED,FormulaParser.FOLLOW_SQUARED_in_unitClump1809); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_SQUARED.add(SQUARED172);



                            break;

                    }



                    // AST REWRITE
                    // elements: CUBED, SQUARED, unitPowerExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 285:41: -> ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:285:44: ^( UNITCLUMP unitPowerExpression ( CUBED )* ( SQUARED )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitPowerExpression.nextTree());
                        // /Library/WebServer/Documents/calc/Formula.g:285:76: ( CUBED )*
                        while ( stream_CUBED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_CUBED.nextNode());

                        }
                        stream_CUBED.reset();
                        // /Library/WebServer/Documents/calc/Formula.g:285:83: ( SQUARED )*
                        while ( stream_SQUARED.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_SQUARED.nextNode());

                        }
                        stream_SQUARED.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unitPowerExpression_return: (function() {
        FormulaParser.unitPowerExpression_return = function(){};
        org.antlr.lang.extend(FormulaParser.unitPowerExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:289:1: unitPowerExpression : unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* ;
    // $ANTLR start "unitPowerExpression"
    unitPowerExpression: function() {
        var retval = new FormulaParser.unitPowerExpression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var POW174 = null;
        var MINUS175 = null;
        var set176 = null;
         var unit173 = null;

        var POW174_tree=null;
        var MINUS175_tree=null;
        var set176_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:290:2: ( unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )* )
            // /Library/WebServer/Documents/calc/Formula.g:290:5: unit ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            root_0 = this.adaptor.nil();

            this.pushFollow(FormulaParser.FOLLOW_unit_in_unitPowerExpression1871);
            unit173=this.unit();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unit173.getTree());
            // /Library/WebServer/Documents/calc/Formula.g:290:10: ( POW ( MINUS )? ( INTEGER | FLOAT ) )*
            loop54:
            do {
                var alt54=2;
                var LA54_0 = this.input.LA(1);

                if ( (LA54_0==POW) ) {
                    alt54=1;
                }


                switch (alt54) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:290:12: POW ( MINUS )? ( INTEGER | FLOAT )
                    POW174=this.match(this.input,POW,FormulaParser.FOLLOW_POW_in_unitPowerExpression1875); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    POW174_tree = this.adaptor.create(POW174);
                    root_0 = this.adaptor.becomeRoot(POW174_tree, root_0);
                    }
                    // /Library/WebServer/Documents/calc/Formula.g:290:17: ( MINUS )?
                    var alt53=2;
                    var LA53_0 = this.input.LA(1);

                    if ( (LA53_0==MINUS) ) {
                        alt53=1;
                    }
                    switch (alt53) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:290:17: MINUS
                            MINUS175=this.match(this.input,MINUS,FormulaParser.FOLLOW_MINUS_in_unitPowerExpression1878); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            MINUS175_tree = this.adaptor.create(MINUS175);
                            this.adaptor.addChild(root_0, MINUS175_tree);
                            }


                            break;

                    }

                    set176=this.input.LT(1);
                    if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=FLOAT) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set176));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }



                    break;

                default :
                    break loop54;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unit_return: (function() {
        FormulaParser.unit_return = function(){};
        org.antlr.lang.extend(FormulaParser.unit_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:293:1: unit : ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) );
    // $ANTLR start "unit"
    unit: function() {
        var retval = new FormulaParser.unit_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT177 = null;
        var IDENT178 = null;
        var char_literal179 = null;
        var char_literal181 = null;
         var unitMultiplicativeExpression180 = null;

        var IDENT177_tree=null;
        var IDENT178_tree=null;
        var char_literal179_tree=null;
        var char_literal181_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_94=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 94");
        var stream_92=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 92");
        var stream_unitMultiplicativeExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule unitMultiplicativeExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:293:6: ( IDENT ( IDENT )* -> ^( UNIT ( IDENT )+ ) | '(' unitMultiplicativeExpression ')' -> ^( UNITCLUMP unitMultiplicativeExpression ) )
            var alt56=2;
            var LA56_0 = this.input.LA(1);

            if ( (LA56_0==IDENT) ) {
                alt56=1;
            }
            else if ( (LA56_0==92) ) {
                alt56=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 56, 0, this.input);

                throw nvae;
            }
            switch (alt56) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:293:8: IDENT ( IDENT )*
                    IDENT177=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit1899); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT177);

                    // /Library/WebServer/Documents/calc/Formula.g:293:14: ( IDENT )*
                    loop55:
                    do {
                        var alt55=2;
                        var LA55_0 = this.input.LA(1);

                        if ( (LA55_0==IDENT) ) {
                            alt55=1;
                        }


                        switch (alt55) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:293:15: IDENT
                            IDENT178=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_unit1902); if (this.state.failed) return retval; 
                            if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT178);



                            break;

                        default :
                            break loop55;
                        }
                    } while (true);



                    // AST REWRITE
                    // elements: IDENT
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 293:23: -> ^( UNIT ( IDENT )+ )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:293:26: ^( UNIT ( IDENT )+ )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNIT, "UNIT"), root_1);

                        if ( !(stream_IDENT.hasNext()) ) {
                            throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                        }
                        while ( stream_IDENT.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_IDENT.nextNode());

                        }
                        stream_IDENT.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:294:5: '(' unitMultiplicativeExpression ')'
                    char_literal179=this.match(this.input,92,FormulaParser.FOLLOW_92_in_unit1919); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_92.add(char_literal179);

                    this.pushFollow(FormulaParser.FOLLOW_unitMultiplicativeExpression_in_unit1921);
                    unitMultiplicativeExpression180=this.unitMultiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) stream_unitMultiplicativeExpression.add(unitMultiplicativeExpression180.getTree());
                    char_literal181=this.match(this.input,94,FormulaParser.FOLLOW_94_in_unit1923); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_94.add(char_literal181);



                    // AST REWRITE
                    // elements: unitMultiplicativeExpression
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 294:42: -> ^( UNITCLUMP unitMultiplicativeExpression )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:294:45: ^( UNITCLUMP unitMultiplicativeExpression )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNITCLUMP, "UNITCLUMP"), root_1);

                        this.adaptor.addChild(root_1, stream_unitMultiplicativeExpression.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    funOrIdent_return: (function() {
        FormulaParser.funOrIdent_return = function(){};
        org.antlr.lang.extend(FormulaParser.funOrIdent_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:302:1: funOrIdent : ( ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL IDENT ( logicalExpression )* ) | IDENT );
    // $ANTLR start "funOrIdent"
    funOrIdent: function() {
        var retval = new FormulaParser.funOrIdent_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENT182 = null;
        var char_literal183 = null;
        var char_literal185 = null;
        var char_literal187 = null;
        var IDENT188 = null;
         var logicalExpression184 = null;
         var logicalExpression186 = null;

        var IDENT182_tree=null;
        var char_literal183_tree=null;
        var char_literal185_tree=null;
        var char_literal187_tree=null;
        var IDENT188_tree=null;
        var stream_IDENT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENT");
        var stream_94=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 94");
        var stream_93=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 93");
        var stream_92=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 92");
        var stream_logicalExpression=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule logicalExpression");
        try {
            // /Library/WebServer/Documents/calc/Formula.g:303:2: ( ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' -> ^( FUNCALL IDENT ( logicalExpression )* ) | IDENT )
            var alt59=2;
            var LA59_0 = this.input.LA(1);

            if ( (LA59_0==IDENT) ) {
                var LA59_1 = this.input.LA(2);

                if ( (this.synpred2_Formula()) ) {
                    alt59=1;
                }
                else if ( (true) ) {
                    alt59=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 59, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 59, 0, this.input);

                throw nvae;
            }
            switch (alt59) {
                case 1 :
                    // /Library/WebServer/Documents/calc/Formula.g:303:4: ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )=> IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')'
                    IDENT182=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_funOrIdent1969); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_IDENT.add(IDENT182);

                    char_literal183=this.match(this.input,92,FormulaParser.FOLLOW_92_in_funOrIdent1971); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_92.add(char_literal183);

                    // /Library/WebServer/Documents/calc/Formula.g:303:79: ( logicalExpression ( ',' logicalExpression )* )?
                    var alt58=2;
                    var LA58_0 = this.input.LA(1);

                    if ( (LA58_0==IDENT||LA58_0==PRIMITIVE||LA58_0==MINUS||(LA58_0>=NOT && LA58_0<=LARR)||(LA58_0>=INTEGER && LA58_0<=FALSE)||(LA58_0>=STRING && LA58_0<=92)||LA58_0==96) ) {
                        alt58=1;
                    }
                    switch (alt58) {
                        case 1 :
                            // /Library/WebServer/Documents/calc/Formula.g:303:81: logicalExpression ( ',' logicalExpression )*
                            this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funOrIdent1975);
                            logicalExpression184=this.logicalExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression184.getTree());
                            // /Library/WebServer/Documents/calc/Formula.g:303:99: ( ',' logicalExpression )*
                            loop57:
                            do {
                                var alt57=2;
                                var LA57_0 = this.input.LA(1);

                                if ( (LA57_0==93) ) {
                                    alt57=1;
                                }


                                switch (alt57) {
                                case 1 :
                                    // /Library/WebServer/Documents/calc/Formula.g:303:100: ',' logicalExpression
                                    char_literal185=this.match(this.input,93,FormulaParser.FOLLOW_93_in_funOrIdent1978); if (this.state.failed) return retval; 
                                    if ( this.state.backtracking===0 ) stream_93.add(char_literal185);

                                    this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_funOrIdent1980);
                                    logicalExpression186=this.logicalExpression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) stream_logicalExpression.add(logicalExpression186.getTree());


                                    break;

                                default :
                                    break loop57;
                                }
                            } while (true);



                            break;

                    }

                    char_literal187=this.match(this.input,94,FormulaParser.FOLLOW_94_in_funOrIdent1987); if (this.state.failed) return retval; 
                    if ( this.state.backtracking===0 ) stream_94.add(char_literal187);



                    // AST REWRITE
                    // elements: logicalExpression, IDENT
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    if ( this.state.backtracking===0 ) {
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 303:131: -> ^( FUNCALL IDENT ( logicalExpression )* )
                    {
                        // /Library/WebServer/Documents/calc/Formula.g:303:134: ^( FUNCALL IDENT ( logicalExpression )* )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCALL, "FUNCALL"), root_1);

                        this.adaptor.addChild(root_1, stream_IDENT.nextNode());
                        // /Library/WebServer/Documents/calc/Formula.g:303:150: ( logicalExpression )*
                        while ( stream_logicalExpression.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_logicalExpression.nextTree());

                        }
                        stream_logicalExpression.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;}

                    break;
                case 2 :
                    // /Library/WebServer/Documents/calc/Formula.g:304:5: IDENT
                    root_0 = this.adaptor.nil();

                    IDENT188=this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_funOrIdent2004); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENT188_tree = this.adaptor.create(IDENT188);
                    this.adaptor.addChild(root_0, IDENT188_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primitive_return: (function() {
        FormulaParser.primitive_return = function(){};
        org.antlr.lang.extend(FormulaParser.primitive_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:312:1: primitive : PRIMITIVE ;
    // $ANTLR start "primitive"
    primitive: function() {
        var retval = new FormulaParser.primitive_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PRIMITIVE189 = null;

        var PRIMITIVE189_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:313:2: ( PRIMITIVE )
            // /Library/WebServer/Documents/calc/Formula.g:313:4: PRIMITIVE
            root_0 = this.adaptor.nil();

            PRIMITIVE189=this.match(this.input,PRIMITIVE,FormulaParser.FOLLOW_PRIMITIVE_in_primitive2060); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            PRIMITIVE189_tree = this.adaptor.create(PRIMITIVE189);
            this.adaptor.addChild(root_0, PRIMITIVE189_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    string_return: (function() {
        FormulaParser.string_return = function(){};
        org.antlr.lang.extend(FormulaParser.string_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /Library/WebServer/Documents/calc/Formula.g:363:1: string : STRING ;
    // $ANTLR start "string"
    string: function() {
        var retval = new FormulaParser.string_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STRING190 = null;

        var STRING190_tree=null;

        try {
            // /Library/WebServer/Documents/calc/Formula.g:364:4: ( STRING )
            // /Library/WebServer/Documents/calc/Formula.g:364:7: STRING
            root_0 = this.adaptor.nil();

            STRING190=this.match(this.input,STRING,FormulaParser.FOLLOW_STRING_in_string2520); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            STRING190_tree = this.adaptor.create(STRING190);
            root_0 = this.adaptor.becomeRoot(STRING190_tree, root_0);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // $ANTLR start "synpred1_Formula"
    synpred1_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:210:5: ( innerPrimaryExpression array )
        // /Library/WebServer/Documents/calc/Formula.g:210:6: innerPrimaryExpression array
        this.pushFollow(FormulaParser.FOLLOW_innerPrimaryExpression_in_synpred1_Formula1326);
        this.innerPrimaryExpression();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.pushFollow(FormulaParser.FOLLOW_array_in_synpred1_Formula1329);
        this.array();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred1_Formula",

    // $ANTLR start "synpred2_Formula"
    synpred2_Formula_fragment: function() {
        // /Library/WebServer/Documents/calc/Formula.g:303:4: ( IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')' )
        // /Library/WebServer/Documents/calc/Formula.g:303:5: IDENT '(' ( logicalExpression ( ',' logicalExpression )* )? ')'
        this.match(this.input,IDENT,FormulaParser.FOLLOW_IDENT_in_synpred2_Formula1948); if (this.state.failed) return ;
        this.match(this.input,92,FormulaParser.FOLLOW_92_in_synpred2_Formula1950); if (this.state.failed) return ;
        // /Library/WebServer/Documents/calc/Formula.g:303:15: ( logicalExpression ( ',' logicalExpression )* )?
        var alt61=2;
        var LA61_0 = this.input.LA(1);

        if ( (LA61_0==IDENT||LA61_0==PRIMITIVE||LA61_0==MINUS||(LA61_0>=NOT && LA61_0<=LARR)||(LA61_0>=INTEGER && LA61_0<=FALSE)||(LA61_0>=STRING && LA61_0<=92)||LA61_0==96) ) {
            alt61=1;
        }
        switch (alt61) {
            case 1 :
                // /Library/WebServer/Documents/calc/Formula.g:303:17: logicalExpression ( ',' logicalExpression )*
                this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred2_Formula1954);
                this.logicalExpression();

                this.state._fsp--;
                if (this.state.failed) return ;
                // /Library/WebServer/Documents/calc/Formula.g:303:35: ( ',' logicalExpression )*
                loop60:
                do {
                    var alt60=2;
                    var LA60_0 = this.input.LA(1);

                    if ( (LA60_0==93) ) {
                        alt60=1;
                    }


                    switch (alt60) {
                    case 1 :
                        // /Library/WebServer/Documents/calc/Formula.g:303:36: ',' logicalExpression
                        this.match(this.input,93,FormulaParser.FOLLOW_93_in_synpred2_Formula1957); if (this.state.failed) return ;
                        this.pushFollow(FormulaParser.FOLLOW_logicalExpression_in_synpred2_Formula1959);
                        this.logicalExpression();

                        this.state._fsp--;
                        if (this.state.failed) return ;


                        break;

                    default :
                        break loop60;
                    }
                } while (true);



                break;

        }

        this.match(this.input,94,FormulaParser.FOLLOW_94_in_synpred2_Formula1966); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred2_Formula"

    // Delegated rules



    synpred1_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred1_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred2_Formula: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred2_Formula_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(FormulaParser, {
    DFA5_eotS:
        "\u0020\uffff",
    DFA5_eofS:
        "\u0001\uffff\u0002\u0003\u000a\uffff\u0001\u0003\u0012\uffff",
    DFA5_minS:
        "\u0001\u001c\u0002\u0016\u0002\uffff\u0001\u0036\u0003\uffff\u0001"+
    "\u0036\u0001\uffff\u0001\u0022\u0001\u0037\u0001\u0016\u0002\uffff\u0003"+
    "\u0036\u0005\u0037\u0002\u0036\u0001\u0037\u0001\u0036\u0004\u0037",
    DFA5_maxS:
        "\u0001\u0060\u0002\u005f\u0002\uffff\u0001\u0036\u0003\uffff\u0001"+
    "\u0060\u0001\uffff\u0001\u0024\u0001\u005e\u0001\u005f\u0002\uffff\u0003"+
    "\u0060\u0005\u005e\u0002\u0060\u0001\u005e\u0001\u0060\u0004\u005e",
    DFA5_acceptS:
        "\u0003\uffff\u0001\u0002\u0001\u0003\u0001\uffff\u0001\u0006\u0001"+
    "\u0007\u0001\u0008\u0001\uffff\u0001\u0001\u0003\uffff\u0001\u0004\u0001"+
    "\u0005\u0010\uffff",
    DFA5_specialS:
        "\u0020\uffff}>",
    DFA5_transitionS: [
            "\u0001\u0004\u0003\uffff\u0001\u0005\u000b\uffff\u0001\u0006"+
            "\u0005\uffff\u0001\u0007\u0002\uffff\u0001\u0008\u0001\u0001"+
            "\u0001\uffff\u0001\u0002\u0009\uffff\u0001\u0003\u0004\uffff"+
            "\u0002\u0003\u0001\uffff\u0004\u0003\u000d\uffff\u0002\u0003"+
            "\u0003\uffff\u0001\u0003",
            "\u0001\u0003\u0020\uffff\u0001\u0003\u0001\uffff\u0002\u0003"+
            "\u0001\uffff\u000b\u0003\u0001\uffff\u0001\u0003\u0013\uffff"+
            "\u0001\u0009\u0001\u000a\u0001\uffff\u0001\u000a",
            "\u0001\u0003\u0020\uffff\u0001\u0003\u0001\uffff\u0002\u0003"+
            "\u0001\uffff\u000b\u0003\u0001\uffff\u0001\u0003\u0014\uffff"+
            "\u0001\u000a\u0001\uffff\u0001\u000a",
            "",
            "",
            "\u0001\u000b",
            "",
            "",
            "",
            "\u0001\u000c\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u0003"+
            "\u0004\uffff\u0002\u0003\u0001\uffff\u0004\u0003\u000d\uffff"+
            "\u0002\u0003\u0001\uffff\u0001\u000d\u0001\uffff\u0001\u0003",
            "",
            "\u0001\u000e\u0001\uffff\u0001\u000f",
            "\u0001\u0010\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0013\uffff\u0001\u0003\u0001\u0011"+
            "\u0001\u000d",
            "\u0001\u0003\u0020\uffff\u0001\u0003\u0001\uffff\u0002\u0003"+
            "\u0001\uffff\u000b\u0003\u0001\uffff\u0001\u0003\u0016\uffff"+
            "\u0001\u000a",
            "",
            "",
            "\u0001\u0003\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u0012"+
            "\u0004\uffff\u0002\u0003\u0001\uffff\u0002\u0013\u0002\u0014"+
            "\u000d\uffff\u0001\u0015\u0001\u0003\u0003\uffff\u0001\u0003",
            "\u0001\u0016\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u0003"+
            "\u0004\uffff\u0002\u0003\u0001\uffff\u0004\u0003\u000d\uffff"+
            "\u0002\u0003\u0003\uffff\u0001\u0003",
            "\u0001\u0003\u0001\uffff\u0001\u0003\u000e\uffff\u0002\u0003"+
            "\u0001\uffff\u0002\u0017\u0002\u0003\u000d\uffff\u0002\u0003"+
            "\u0003\uffff\u0001\u0003",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0019\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0013\uffff\u0001\u0003\u0001\u0011"+
            "\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u001a\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u0003"+
            "\u0004\uffff\u0002\u0003\u0001\uffff\u0004\u0003\u000d\uffff"+
            "\u0002\u0003\u0003\uffff\u0001\u0003",
            "\u0001\u0003\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u001b"+
            "\u0004\uffff\u0002\u0003\u0001\uffff\u0002\u001c\u0002\u001d"+
            "\u000d\uffff\u0001\u001e\u0001\u0003\u0003\uffff\u0001\u0003",
            "\u0001\u0019\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0013\uffff\u0003\u0003",
            "\u0001\u0003\u0001\uffff\u0001\u0003\u000e\uffff\u0002\u0003"+
            "\u0001\uffff\u0002\u001f\u0002\u0003\u000d\uffff\u0002\u0003"+
            "\u0003\uffff\u0001\u0003",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d",
            "\u0001\u0003\u0001\uffff\u0002\u0003\u0001\uffff\u000b\u0003"+
            "\u0001\uffff\u0001\u0003\u0014\uffff\u0001\u0018\u0001\u000d"
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA5_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_eotS),
    DFA5_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_eofS),
    DFA5_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA5_minS),
    DFA5_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA5_maxS),
    DFA5_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_acceptS),
    DFA5_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_specialS),
    DFA5_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA5_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA5_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA5 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 5;
    this.eot = FormulaParser.DFA5_eot;
    this.eof = FormulaParser.DFA5_eof;
    this.min = FormulaParser.DFA5_min;
    this.max = FormulaParser.DFA5_max;
    this.accept = FormulaParser.DFA5_accept;
    this.special = FormulaParser.DFA5_special;
    this.transition = FormulaParser.DFA5_transition;
};

org.antlr.lang.extend(FormulaParser.DFA5, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "93:1: expression : ( assignment | logicalExpression | whileLoop | forLoop | forInLoop | ifThenElse | functionDef | returnExp );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(FormulaParser, {
    DFA40_eotS:
        "\u000b\uffff",
    DFA40_eofS:
        "\u000b\uffff",
    DFA40_minS:
        "\u0001\u0036\u0008\u0000\u0002\uffff",
    DFA40_maxS:
        "\u0001\u0060\u0008\u0000\u0002\uffff",
    DFA40_acceptS:
        "\u0009\uffff\u0001\u0001\u0001\u0002",
    DFA40_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002\uffff}>",
    DFA40_transitionS: [
            "\u0001\u0006\u0001\uffff\u0001\u0007\u000f\uffff\u0001\u0008"+
            "\u0001\uffff\u0002\u0002\u0002\u0003\u000d\uffff\u0001\u0004"+
            "\u0001\u0001\u0003\uffff\u0001\u0005",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(FormulaParser, {
    DFA40_eot:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA40_eotS),
    DFA40_eof:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA40_eofS),
    DFA40_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA40_minS),
    DFA40_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(FormulaParser.DFA40_maxS),
    DFA40_accept:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA40_acceptS),
    DFA40_special:
        org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA40_specialS),
    DFA40_transition: (function() {
        var a = [],
            i,
            numStates = FormulaParser.DFA40_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(FormulaParser.DFA40_transitionS[i]));
        }
        return a;
    })()
});

FormulaParser.DFA40 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 40;
    this.eot = FormulaParser.DFA40_eot;
    this.eof = FormulaParser.DFA40_eof;
    this.min = FormulaParser.DFA40_min;
    this.max = FormulaParser.DFA40_max;
    this.accept = FormulaParser.DFA40_accept;
    this.special = FormulaParser.DFA40_special;
    this.transition = FormulaParser.DFA40_transition;
};

org.antlr.lang.extend(FormulaParser.DFA40, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "209:1: primaryExpression : ( ( innerPrimaryExpression array )=> innerPrimaryExpression array | innerPrimaryExpression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA40_1 = input.LA(1);

                             
                            var index40_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA40_2 = input.LA(1);

                             
                            var index40_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA40_3 = input.LA(1);

                             
                            var index40_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA40_4 = input.LA(1);

                             
                            var index40_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA40_5 = input.LA(1);

                             
                            var index40_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA40_6 = input.LA(1);

                             
                            var index40_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA40_7 = input.LA(1);

                             
                            var index40_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA40_8 = input.LA(1);

                             
                            var index40_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_Formula()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index40_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 40, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(FormulaParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEGATE", "ASSIGN", "FUNCALL", "MATERIAL", "UNIT", "POWER", "DEFAULTS", "PARAMS", "UNITCLUMP", "ARRAY", "LINES", "WHILE", "IFTHENELSE", "ELSE", "FOR", "FORIN", "FUNCTION", "NUMBER", "NEWLINE", "W", "H", "I", "L", "E", "WHILESTATEMENT", "F", "O", "R", "FORSTATEMENT", "M", "FROMSTATEMENT", "N", "INSTATEMENT", "T", "TOSTATEMENT", "B", "Y", "BYSTATEMENT", "P", "LOOPSTATEMENT", "IFSTATEMENT", "THENSTATEMENT", "S", "ELSESTATEMENT", "U", "C", "FUNCTIONSTATEMENT", "D", "ENDBLOCK", "RETURNSTATEMENT", "IDENT", "EQUALS", "PRIMITIVE", "OR", "AND", "A", "NOTEQUALS", "LT", "LTEQ", "GT", "GTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "POW", "NOT", "LARR", "RARR", "INTEGER", "FLOAT", "TRUE", "FALSE", "PER", "CUBED", "SQUARED", "Q", "COMMENT", "LINE_COMMENT", "WS", "G", "J", "K", "V", "X", "Z", "STRING", "'('", "','", "')'", "'<-'", "'{'", "'}'"],
    FOLLOW_NEWLINE_in_lines116: new org.antlr.runtime.BitSet([0x10400000, 0x01641001,0x18003D84, 0x00000001]),
    FOLLOW_expression_in_lines120: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_lines124: new org.antlr.runtime.BitSet([0x10400000, 0x01641001,0x18003D84, 0x00000001]),
    FOLLOW_EOF_in_lines127: new org.antlr.runtime.BitSet([0x10000000, 0x01641001,0x18003D84, 0x00000001]),
    FOLLOW_EOF_in_lines132: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_in_expression394: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalExpression_in_expression400: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileLoop_in_expression406: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forLoop_in_expression412: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInLoop_in_expression418: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifThenElse_in_expression424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionDef_in_expression430: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_returnExp_in_expression436: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_RETURNSTATEMENT_in_returnExp448: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_returnExp451: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_innerBlock464: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_innerBlock468: new org.antlr.runtime.BitSet([0x10400002, 0x01641001,0x18003D84, 0x00000001]),
    FOLLOW_WHILESTATEMENT_in_whileLoop493: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_whileLoop495: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_whileLoop497: new org.antlr.runtime.BitSet([0x10400000, 0x01741001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_whileLoop500: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_ENDBLOCK_in_whileLoop503: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_LOOPSTATEMENT_in_whileLoop505: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forLoop526: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_forLoop528: new org.antlr.runtime.BitSet([0x00000000, 0x00000004]),
    FOLLOW_FROMSTATEMENT_in_forLoop530: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_forLoop532: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_TOSTATEMENT_in_forLoop534: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_forLoop536: new org.antlr.runtime.BitSet([0x00400000, 0x00000200]),
    FOLLOW_BYSTATEMENT_in_forLoop539: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_forLoop541: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_forLoop545: new org.antlr.runtime.BitSet([0x10400000, 0x01741001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_forLoop548: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_ENDBLOCK_in_forLoop551: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_LOOPSTATEMENT_in_forLoop553: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FORSTATEMENT_in_forInLoop581: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_forInLoop583: new org.antlr.runtime.BitSet([0x00000000, 0x00000010]),
    FOLLOW_INSTATEMENT_in_forInLoop585: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_forInLoop587: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_forInLoop589: new org.antlr.runtime.BitSet([0x10400000, 0x01741001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_forInLoop592: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_ENDBLOCK_in_forInLoop595: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_LOOPSTATEMENT_in_forInLoop597: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse622: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_ifThenElse624: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse626: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse629: new org.antlr.runtime.BitSet([0x10400000, 0x01749001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_ifThenElse632: new org.antlr.runtime.BitSet([0x00000000, 0x00108000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse636: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse638: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_ifThenElse640: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_THENSTATEMENT_in_ifThenElse642: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse644: new org.antlr.runtime.BitSet([0x10400000, 0x01749001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_ifThenElse647: new org.antlr.runtime.BitSet([0x00000000, 0x00108000]),
    FOLLOW_ELSESTATEMENT_in_ifThenElse652: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_ifThenElse654: new org.antlr.runtime.BitSet([0x10400000, 0x01741001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_ifThenElse657: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_ENDBLOCK_in_ifThenElse661: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_IFSTATEMENT_in_ifThenElse663: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef694: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_functionDef696: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_92_in_functionDef698: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x40000000, 0x00000000]),
    FOLLOW_IDENT_in_functionDef701: new org.antlr.runtime.BitSet([0x00000000, 0x00800000,0x60000000, 0x00000000]),
    FOLLOW_EQUALS_in_functionDef705: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08003C04, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef708: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_functionDef713: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_functionDef715: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_functionDef722: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_functionDef724: new org.antlr.runtime.BitSet([0x00000000, 0x00800000]),
    FOLLOW_EQUALS_in_functionDef726: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08003C04, 0x00000000]),
    FOLLOW_defaultValue_in_functionDef728: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_94_in_functionDef735: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_NEWLINE_in_functionDef737: new org.antlr.runtime.BitSet([0x10400000, 0x01741001,0x18003D84, 0x00000001]),
    FOLLOW_innerBlock_in_functionDef740: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_ENDBLOCK_in_functionDef743: new org.antlr.runtime.BitSet([0x00000000, 0x00040000]),
    FOLLOW_FUNCTIONSTATEMENT_in_functionDef745: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_assignment780: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_92_in_assignment782: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x40000000, 0x00000000]),
    FOLLOW_IDENT_in_assignment785: new org.antlr.runtime.BitSet([0x00000000, 0x00800000,0x60000000, 0x00000000]),
    FOLLOW_EQUALS_in_assignment789: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08003C04, 0x00000000]),
    FOLLOW_defaultValue_in_assignment791: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_assignment796: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_assignment798: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_assignment805: new org.antlr.runtime.BitSet([0x00000000, 0x00400000]),
    FOLLOW_IDENT_in_assignment807: new org.antlr.runtime.BitSet([0x00000000, 0x00800000]),
    FOLLOW_EQUALS_in_assignment809: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x08003C04, 0x00000000]),
    FOLLOW_defaultValue_in_assignment811: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_94_in_assignment818: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_assignment820: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_assignment822: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_assignment850: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0xA0000000, 0x00000000]),
    FOLLOW_IDENT_in_assignment854: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0xA0000000, 0x00000000]),
    FOLLOW_93_in_assignment858: new org.antlr.runtime.BitSet([0x00000000, 0x01400000]),
    FOLLOW_PRIMITIVE_in_assignment861: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0xA0000000, 0x00000000]),
    FOLLOW_IDENT_in_assignment865: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0xA0000000, 0x00000000]),
    FOLLOW_95_in_assignment871: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_assignment873: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanAndExpression_in_logicalExpression900: new org.antlr.runtime.BitSet([0x00000002, 0x02000000]),
    FOLLOW_OR_in_logicalExpression903: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_booleanAndExpression_in_logicalExpression906: new org.antlr.runtime.BitSet([0x00000002, 0x02000000]),
    FOLLOW_equalityExpression_in_booleanAndExpression937: new org.antlr.runtime.BitSet([0x00000002, 0x04000000]),
    FOLLOW_AND_in_booleanAndExpression940: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_equalityExpression_in_booleanAndExpression943: new org.antlr.runtime.BitSet([0x00000002, 0x04000000]),
    FOLLOW_relationalExpression_in_equalityExpression974: new org.antlr.runtime.BitSet([0x00000002, 0x10800000]),
    FOLLOW_set_in_equalityExpression977: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_relationalExpression_in_equalityExpression984: new org.antlr.runtime.BitSet([0x00000002, 0x10800000]),
    FOLLOW_additiveExpression_in_relationalExpression1026: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000,0x00000001, 0x00000000]),
    FOLLOW_set_in_relationalExpression1030: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_additiveExpression_in_relationalExpression1041: new org.antlr.runtime.BitSet([0x00000002, 0xE0000000,0x00000001, 0x00000000]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1084: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000006, 0x00000000]),
    FOLLOW_set_in_additiveExpression1088: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_multiplicativeExpression_in_additiveExpression1095: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000006, 0x00000000]),
    FOLLOW_negationExpression_in_multiplicativeExpression1125: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000038, 0x00000000]),
    FOLLOW_set_in_multiplicativeExpression1129: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_negationExpression_in_multiplicativeExpression1138: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000038, 0x00000000]),
    FOLLOW_MINUS_in_negationExpression1183: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_powerExpression_in_negationExpression1185: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_powerExpression_in_negationExpression1199: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unaryExpression_in_powerExpression1210: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_POW_in_powerExpression1213: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_unaryOrNegate_in_powerExpression1215: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_unaryExpression_in_unaryOrNegate1242: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_unaryOrNegate1248: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_unaryExpression_in_unaryOrNegate1250: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NOT_in_unaryExpression1278: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_primaryExpression_in_unaryExpression1281: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpression_in_unaryExpression1293: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_innerPrimaryExpression_in_primaryExpression1334: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D00, 0x00000001]),
    FOLLOW_array_in_primaryExpression1337: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_innerPrimaryExpression_in_primaryExpression1343: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_92_in_innerPrimaryExpression1353: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_innerPrimaryExpression1356: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_94_in_innerPrimaryExpression1358: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_value_in_innerPrimaryExpression1364: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_value1378: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_value1384: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_value1390: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_material_in_value1396: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_funOrIdent_in_value1401: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primitive_in_value1406: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_value1411: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_negnumber_in_defaultValue1427: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_number_in_defaultValue1433: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_bool_in_defaultValue1439: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_defaultValue1445: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LARR_in_array1457: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003F84, 0x00000001]),
    FOLLOW_logicalExpression_in_array1460: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x20000200, 0x00000000]),
    FOLLOW_93_in_array1463: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_array1465: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x20000200, 0x00000000]),
    FOLLOW_RARR_in_array1471: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_number0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MINUS_in_negnumber1524: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000C00, 0x00000000]),
    FOLLOW_number_in_negnumber1526: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_bool0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_96_in_material1678: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_additiveExpression_in_material1680: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x10000400, 0x00000000]),
    FOLLOW_unitMultiplicativeExpression_in_material1682: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000002]),
    FOLLOW_97_in_material1684: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1721: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_PER_in_unitMultiplicativeExpression1725: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x10000400, 0x00000000]),
    FOLLOW_unitInnerMultiplicativeExpression_in_unitMultiplicativeExpression1728: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1744: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000018, 0x00000000]),
    FOLLOW_set_in_unitInnerMultiplicativeExpression1748: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x10000400, 0x00000000]),
    FOLLOW_unitClump_in_unitInnerMultiplicativeExpression1755: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000018, 0x00000000]),
    FOLLOW_INTEGER_in_unitClump1771: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000010, 0x00000000]),
    FOLLOW_DIV_in_unitClump1773: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x10000400, 0x00000000]),
    FOLLOW_unitPowerExpression_in_unitClump1776: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00018000, 0x00000000]),
    FOLLOW_CUBED_in_unitClump1778: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_SQUARED_in_unitClump1781: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unitPowerExpression_in_unitClump1804: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00018000, 0x00000000]),
    FOLLOW_CUBED_in_unitClump1806: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_SQUARED_in_unitClump1809: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unit_in_unitPowerExpression1871: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_POW_in_unitPowerExpression1875: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000C04, 0x00000000]),
    FOLLOW_MINUS_in_unitPowerExpression1878: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000C00, 0x00000000]),
    FOLLOW_set_in_unitPowerExpression1881: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_IDENT_in_unit1899: new org.antlr.runtime.BitSet([0x00000002, 0x00400000]),
    FOLLOW_IDENT_in_unit1902: new org.antlr.runtime.BitSet([0x00000002, 0x00400000]),
    FOLLOW_92_in_unit1919: new org.antlr.runtime.BitSet([0x00000000, 0x00400000,0x10000400, 0x00000000]),
    FOLLOW_unitMultiplicativeExpression_in_unit1921: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_94_in_unit1923: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_funOrIdent1969: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_92_in_funOrIdent1971: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x58003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_funOrIdent1975: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_funOrIdent1978: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_funOrIdent1980: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_94_in_funOrIdent1987: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_funOrIdent2004: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRIMITIVE_in_primitive2060: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_string2520: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_innerPrimaryExpression_in_synpred1_Formula1326: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D00, 0x00000001]),
    FOLLOW_array_in_synpred1_Formula1329: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENT_in_synpred2_Formula1948: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_92_in_synpred2_Formula1950: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x58003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_synpred2_Formula1954: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_synpred2_Formula1957: new org.antlr.runtime.BitSet([0x00000000, 0x01400000,0x18003D84, 0x00000001]),
    FOLLOW_logicalExpression_in_synpred2_Formula1959: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_94_in_synpred2_Formula1966: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();