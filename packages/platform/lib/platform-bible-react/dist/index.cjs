"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),b=require("react"),at=require("clsx"),pl=require("tailwind-merge"),ss=require("@radix-ui/react-dropdown-menu"),Z=require("lucide-react"),K=require("platform-bible-utils"),Xt=require("@radix-ui/react-slot"),Yt=require("class-variance-authority"),wl=require("@radix-ui/react-label"),fl=require("@radix-ui/react-radio-group"),ml=require("@radix-ui/react-popover"),Re=require("cmdk"),hl=require("@radix-ui/react-dialog"),Se=require("@tanstack/react-table"),gl=require("@radix-ui/react-select"),bl=require("@radix-ui/react-checkbox"),vl=require("@radix-ui/react-toggle-group"),xl=require("@radix-ui/react-toggle"),yl=require("@radix-ui/react-tabs"),Nl=require("@radix-ui/react-separator"),kl=require("@radix-ui/react-tooltip"),Hr=require("@mui/styled-engine"),De=require("@mui/material"),ln=require("react-dom"),is=require("sonner"),Sl=require("@radix-ui/react-slider"),jl=require("@radix-ui/react-switch"),El=require("markdown-to-jsx");function ke(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const D=ke(b),we=ke(ss),ls=ke(wl),gn=ke(fl),bn=ke(ml),Ye=ke(hl),ge=ke(gl),Xr=ke(bl),ar=ke(vl),cs=ke(xl),_e=ke(yl),ds=ke(Nl),kn=ke(kl),Cl=ke(ln),cn=ke(Sl),Yr=ke(jl),Tl=pl.extendTailwindMerge({prefix:"tw-"});function N(...e){return Tl(at.clsx(e))}const Ct=b.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:N("pr-twp tw-flex tw-h-10 tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-foreground placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),ref:r,...n}));Ct.displayName="Input";const Ol=b.forwardRef(({handleSearch:e,handleKeyDown:t,handleOnClick:n,handleSubmit:r,...o},s)=>a.jsx("div",{className:"tw-relative",children:a.jsx(Ct,{...o,type:"text",className:N("tw-box-border tw-w-[200px] tw-gap-2.5 tw-rounded-lg tw-border tw-border-solid tw-bg-background tw-py-2 tw-pe-9 tw-ps-4 tw-font-medium tw-shadow-none tw-outline-none"),onChange:i=>e(i.target.value),onKeyDown:i=>{i.key==="Enter"&&r(),t(i)},onClick:n,ref:s})})),Rl="layoutDirection";function xe(){const e=localStorage.getItem(Rl);return e==="rtl"?e:"ltr"}const sr=we.Root,lo=we.Trigger,us=we.Group,_l=we.Portal,Pl=we.Sub,Il=we.RadioGroup,ps=b.forwardRef(({className:e,inset:t,children:n,...r},o)=>a.jsxs(we.SubTrigger,{ref:o,className:N("tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent data-[state=open]:tw-bg-accent",t&&"tw-pl-8",e),...r,children:[n,a.jsx(Z.ChevronRight,{className:"tw-ml-auto tw-h-4 tw-w-4"})]}));ps.displayName=we.SubTrigger.displayName;const ws=b.forwardRef(({className:e,...t},n)=>a.jsx(we.SubContent,{ref:n,className:N("tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...t}));ws.displayName=we.SubContent.displayName;const Sn=b.forwardRef(({className:e,sideOffset:t=4,children:n,...r},o)=>{const s=xe();return a.jsx(we.Portal,{children:a.jsx(we.Content,{ref:o,sideOffset:t,className:N("pr-twp tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...r,children:a.jsx("div",{dir:s,children:n})})})});Sn.displayName=we.Content.displayName;const co=b.forwardRef(({className:e,inset:t,...n},r)=>{const o=xe();return a.jsx(we.Item,{ref:r,className:N("tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",t&&"tw-pl-8",e),...n,dir:o})});co.displayName=we.Item.displayName;const ir=b.forwardRef(({className:e,children:t,checked:n,...r},o)=>a.jsxs(we.CheckboxItem,{ref:o,className:N("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pe-2 tw-ps-8 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),checked:n,...r,children:[a.jsx("span",{className:"tw-absolute tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center ltr:tw-left-2 rtl:tw-right-2",children:a.jsx(we.ItemIndicator,{children:a.jsx(Z.Check,{className:"tw-h-4 tw-w-4"})})}),t]}));ir.displayName=we.CheckboxItem.displayName;const uo=b.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(we.RadioItem,{ref:r,className:N("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pe-2 tw-ps-8 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center ltr:tw-left-2 rtl:tw-right-2",children:a.jsx(we.ItemIndicator,{children:a.jsx(Z.Circle,{className:"tw-h-2 tw-w-2 tw-fill-current"})})}),t]}));uo.displayName=we.RadioItem.displayName;const jn=b.forwardRef(({className:e,inset:t,...n},r)=>a.jsx(we.Label,{ref:r,className:N("tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold",t&&"tw-pl-8",e),...n}));jn.displayName=we.Label.displayName;const En=b.forwardRef(({className:e,...t},n)=>a.jsx(we.Separator,{ref:n,className:N("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));En.displayName=we.Separator.displayName;function fs({className:e,...t}){return a.jsx("span",{className:N("tw-ms-auto tw-text-xs tw-tracking-widest tw-opacity-60",e),...t})}fs.displayName="DropdownMenuShortcut";var Ml=Object.defineProperty,$l=(e,t,n)=>t in e?Ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t,n)=>$l(e,typeof t!="symbol"?t+"":t,n);const xt=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV","TOB","JDT","ESG","WIS","SIR","BAR","LJE","S3Y","SUS","BEL","1MA","2MA","3MA","4MA","1ES","2ES","MAN","PS2","ODA","PSS","JSA","JDB","TBS","SST","DNT","BLT","XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","3ES","EZA","5EZ","6EZ","INT","CNC","GLO","TDX","NDX","DAG","PS3","2BA","LBA","JUB","ENO","1MQ","2MQ","3MQ","REP","4BA","LAO"],po=["XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","INT","CNC","GLO","TDX","NDX"],ms=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther (Hebrew)","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel (Hebrew)","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation","Tobit","Judith","Esther Greek","Wisdom of Solomon","Sirach (Ecclesiasticus)","Baruch","Letter of Jeremiah","Song of 3 Young Men","Susanna","Bel and the Dragon","1 Maccabees","2 Maccabees","3 Maccabees","4 Maccabees","1 Esdras (Greek)","2 Esdras (Latin)","Prayer of Manasseh","Psalm 151","Odes","Psalms of Solomon","Joshua A. *obsolete*","Judges B. *obsolete*","Tobit S. *obsolete*","Susanna Th. *obsolete*","Daniel Th. *obsolete*","Bel Th. *obsolete*","Extra A","Extra B","Extra C","Extra D","Extra E","Extra F","Extra G","Front Matter","Back Matter","Other Matter","3 Ezra *obsolete*","Apocalypse of Ezra","5 Ezra (Latin Prologue)","6 Ezra (Latin Epilogue)","Introduction","Concordance ","Glossary ","Topical Index","Names Index","Daniel Greek","Psalms 152-155","2 Baruch (Apocalypse)","Letter of Baruch","Jubilees","Enoch","1 Meqabyan","2 Meqabyan","3 Meqabyan","Reproof (Proverbs 25-31)","4 Baruch (Rest of Baruch)","Laodiceans"],wa=ql();function Wt(e,t=!0){return t&&(e=e.toUpperCase()),e in wa?wa[e]:0}function wo(e){return Wt(e)>0}function Dl(e){const t=typeof e=="string"?Wt(e):e;return t>=40&&t<=66}function Al(e){return(typeof e=="string"?Wt(e):e)<=39}function hs(e){return e<=66}function Bl(e){const t=typeof e=="string"?Wt(e):e;return vs(t)&&!hs(t)}function*zl(){for(let e=1;e<=xt.length;e++)yield e}const Vl=1,gs=xt.length;function Fl(){return["XXA","XXB","XXC","XXD","XXE","XXF","XXG"]}function fo(e,t="***"){const n=e-1;return n<0||n>=xt.length?t:xt[n]}function bs(e){return e<=0||e>gs?"******":ms[e-1]}function Ll(e){return bs(Wt(e))}function vs(e){const t=typeof e=="number"?fo(e):e;return wo(t)&&!po.includes(t)}function Gl(e){const t=typeof e=="number"?fo(e):e;return wo(t)&&po.includes(t)}function Ul(e){return ms[e-1].includes("*obsolete*")}function ql(){const e={};for(let t=0;t<xt.length;t++)e[xt[t]]=t+1;return e}const ae={allBookIds:xt,nonCanonicalIds:po,bookIdToNumber:Wt,isBookIdValid:wo,isBookNT:Dl,isBookOT:Al,isBookOTNT:hs,isBookDC:Bl,allBookNumbers:zl,firstBook:Vl,lastBook:gs,extraBooks:Fl,bookNumberToId:fo,bookNumberToEnglishName:bs,bookIdToEnglishName:Ll,isCanonical:vs,isExtraMaterial:Gl,isObsolete:Ul};var He=(e=>(e[e.Unknown=0]="Unknown",e[e.Original=1]="Original",e[e.Septuagint=2]="Septuagint",e[e.Vulgate=3]="Vulgate",e[e.English=4]="English",e[e.RussianProtestant=5]="RussianProtestant",e[e.RussianOrthodox=6]="RussianOrthodox",e))(He||{});const Ie=class{constructor(t){if(ne(this,"name"),ne(this,"fullPath"),ne(this,"isPresent"),ne(this,"hasVerseSegments"),ne(this,"isCustomized"),ne(this,"baseVersification"),ne(this,"scriptureBooks"),ne(this,"_type"),t==null)throw new Error("Argument undefined");typeof t=="string"?(this.name=t,this._type=He[t]):(this._type=t,this.name=He[t])}get type(){return this._type}equals(t){return!t.type||!this.type?!1:t.type===this.type}};ne(Ie,"Original",new Ie(He.Original)),ne(Ie,"Septuagint",new Ie(He.Septuagint)),ne(Ie,"Vulgate",new Ie(He.Vulgate)),ne(Ie,"English",new Ie(He.English)),ne(Ie,"RussianProtestant",new Ie(He.RussianProtestant)),ne(Ie,"RussianOrthodox",new Ie(He.RussianOrthodox));let ft=Ie;function fa(e,t){const n=t[0];for(let r=1;r<t.length;r++)e=e.split(t[r]).join(n);return e.split(n)}var xs=(e=>(e[e.Valid=0]="Valid",e[e.UnknownVersification=1]="UnknownVersification",e[e.OutOfRange=2]="OutOfRange",e[e.VerseOutOfOrder=3]="VerseOutOfOrder",e[e.VerseRepeated=4]="VerseRepeated",e))(xs||{});const Ee=class oe{constructor(t,n,r,o){if(ne(this,"firstChapter"),ne(this,"lastChapter"),ne(this,"lastVerse"),ne(this,"hasSegmentsDefined"),ne(this,"text"),ne(this,"BBBCCCVVVS"),ne(this,"longHashCode"),ne(this,"versification"),ne(this,"rtlMark","‏"),ne(this,"_bookNum",0),ne(this,"_chapterNum",0),ne(this,"_verseNum",0),ne(this,"_verse"),r==null&&o==null)if(t!=null&&typeof t=="string"){const s=t,i=n!=null&&n instanceof ft?n:void 0;this.setEmpty(i),this.parse(s)}else if(t!=null&&typeof t=="number"){const s=n!=null&&n instanceof ft?n:void 0;this.setEmpty(s),this._verseNum=t%oe.chapterDigitShifter,this._chapterNum=Math.floor(t%oe.bookDigitShifter/oe.chapterDigitShifter),this._bookNum=Math.floor(t/oe.bookDigitShifter)}else if(n==null)if(t!=null&&t instanceof oe){const s=t;this._bookNum=s.bookNum,this._chapterNum=s.chapterNum,this._verseNum=s.verseNum,this._verse=s.verse,this.versification=s.versification}else{if(t==null)return;const s=t instanceof ft?t:oe.defaultVersification;this.setEmpty(s)}else throw new Error("VerseRef constructor not supported.");else if(t!=null&&n!=null&&r!=null)if(typeof t=="string"&&typeof n=="string"&&typeof r=="string")this.setEmpty(o),this.updateInternal(t,n,r);else if(typeof t=="number"&&typeof n=="number"&&typeof r=="number")this._bookNum=t,this._chapterNum=n,this._verseNum=r,this.versification=o??oe.defaultVersification;else throw new Error("VerseRef constructor not supported.");else throw new Error("VerseRef constructor not supported.")}static isVerseParseable(t){return t.length>0&&"0123456789".includes(t[0])&&!t.endsWith(this.verseRangeSeparator)&&!t.endsWith(this.verseSequenceIndicator)}static tryParse(t){let n;try{return n=new oe(t),{success:!0,verseRef:n}}catch(r){if(r instanceof nn)return n=new oe,{success:!1,verseRef:n};throw r}}static getBBBCCCVVV(t,n,r){return t%oe.bcvMaxValue*oe.bookDigitShifter+(n>=0?n%oe.bcvMaxValue*oe.chapterDigitShifter:0)+(r>=0?r%oe.bcvMaxValue:0)}static fromJSON(t){const{book:n,chapterNum:r,verseNum:o,verse:s,versificationStr:i}=t,l=s||o.toString();let c;return i&&(c=new ft(i)),n?new oe(n,r.toString(),l,c):new oe}static tryGetVerseNum(t){let n;if(!t)return n=-1,{success:!0,vNum:n};n=0;let r;for(let o=0;o<t.length;o++){if(r=t[o],r<"0"||r>"9")return o===0&&(n=-1),{success:!1,vNum:n};if(n=n*10+ +r-0,n>oe.bcvMaxValue)return n=-1,{success:!1,vNum:n}}return{success:!0,vNum:n}}get isDefault(){return this.bookNum===0&&this.chapterNum===0&&this.verseNum===0&&this.versification==null}get hasMultiple(){return this._verse!=null&&(this._verse.includes(oe.verseRangeSeparator)||this._verse.includes(oe.verseSequenceIndicator))}get book(){return ae.bookNumberToId(this.bookNum,"")}set book(t){this.bookNum=ae.bookIdToNumber(t)}get chapter(){return this.isDefault||this._chapterNum<0?"":this._chapterNum.toString()}set chapter(t){const n=+t;this._chapterNum=Number.isInteger(n)?n:-1}get verse(){return this._verse!=null?this._verse:this.isDefault||this._verseNum<0?"":this._verseNum.toString()}set verse(t){const{success:n,vNum:r}=oe.tryGetVerseNum(t);this._verse=n?void 0:t.replace(this.rtlMark,""),this._verseNum=r,!(this._verseNum>=0)&&({vNum:this._verseNum}=oe.tryGetVerseNum(this._verse))}get bookNum(){return this._bookNum}set bookNum(t){if(t<=0||t>ae.lastBook)throw new nn("BookNum must be greater than zero and less than or equal to last book");this._bookNum=t}get chapterNum(){return this._chapterNum}set chapterNum(t){this.chapterNum=t}get verseNum(){return this._verseNum}set verseNum(t){this._verseNum=t}get versificationStr(){var t;return(t=this.versification)==null?void 0:t.name}set versificationStr(t){this.versification=this.versification!=null?new ft(t):void 0}get valid(){return this.validStatus===0}get validStatus(){return this.validateVerse(oe.verseRangeSeparators,oe.verseSequenceIndicators)}get BBBCCC(){return oe.getBBBCCCVVV(this._bookNum,this._chapterNum,0)}get BBBCCCVVV(){return oe.getBBBCCCVVV(this._bookNum,this._chapterNum,this._verseNum)}get isExcluded(){return!1}parse(t){if(t=t.replace(this.rtlMark,""),t.includes("/")){const s=t.split("/");if(t=s[0],s.length>1)try{const i=+s[1].trim();this.versification=new ft(He[i])}catch{throw new nn("Invalid reference : "+t)}}const n=t.trim().split(" ");if(n.length!==2)throw new nn("Invalid reference : "+t);const r=n[1].split(":"),o=+r[0];if(r.length!==2||ae.bookIdToNumber(n[0])===0||!Number.isInteger(o)||o<0||!oe.isVerseParseable(r[1]))throw new nn("Invalid reference : "+t);this.updateInternal(n[0],r[0],r[1])}simplify(){this._verse=void 0}clone(){return new oe(this)}toString(){const t=this.book;return t===""?"":`${t} ${this.chapter}:${this.verse}`}toJSON(){let t=this.verse;(t===""||t===this.verseNum.toString())&&(t=void 0);const n={book:this.book,chapterNum:this.chapterNum,verseNum:this.verseNum,verse:t,versificationStr:this.versificationStr};return t||delete n.verse,n}equals(t){return t instanceof oe?t._bookNum===this._bookNum&&t._chapterNum===this._chapterNum&&t._verseNum===this._verseNum&&t.verse===this.verse&&(t.versification==null&&this.versification==null||t.versification!=null&&this.versification!=null&&t.versification.equals(this.versification)):!1}allVerses(t=!1,n=oe.verseRangeSeparators,r=oe.verseSequenceIndicators){if(this._verse==null||this.chapterNum<=0)return[this.clone()];const o=[],s=fa(this._verse,r);for(const i of s.map(l=>fa(l,n))){const l=this.clone();l.verse=i[0];const c=l.verseNum;if(o.push(l),i.length>1){const d=this.clone();if(d.verse=i[1],!t)for(let u=c+1;u<d.verseNum;u++){const f=new oe(this._bookNum,this._chapterNum,u,this.versification);this.isExcluded||o.push(f)}o.push(d)}}return o}validateVerse(t,n){if(!this.verse)return this.internalValid;let r=0;for(const o of this.allVerses(!0,t,n)){const s=o.internalValid;if(s!==0)return s;const i=o.BBBCCCVVV;if(r>i)return 3;if(r===i)return 4;r=i}return 0}get internalValid(){return this.versification==null?1:this._bookNum<=0||this._bookNum>ae.lastBook?2:(ae.isCanonical(this._bookNum),0)}setEmpty(t=oe.defaultVersification){this._bookNum=0,this._chapterNum=-1,this._verse=void 0,this.versification=t}updateInternal(t,n,r){this.bookNum=ae.bookIdToNumber(t),this.chapter=n,this.verse=r}};ne(Ee,"defaultVersification",ft.English),ne(Ee,"verseRangeSeparator","-"),ne(Ee,"verseSequenceIndicator",","),ne(Ee,"verseRangeSeparators",[Ee.verseRangeSeparator]),ne(Ee,"verseSequenceIndicators",[Ee.verseSequenceIndicator]),ne(Ee,"chapterDigitShifter",1e3),ne(Ee,"bookDigitShifter",Ee.chapterDigitShifter*Ee.chapterDigitShifter),ne(Ee,"bcvMaxValue",Ee.chapterDigitShifter-1),ne(Ee,"ValidStatusType",xs);class nn extends Error{}const Hl=b.forwardRef(({bookId:e,handleSelectBook:t,isSelected:n,handleHighlightBook:r,handleKeyDown:o,bookType:s,children:i},l)=>a.jsxs(co,{ref:l,textValue:e,className:N("tw-mx-1 tw-flex-col tw-items-start tw-px-1 tw-font-normal tw-text-foreground/80",{"tw-bg-amber-50 tw-text-yellow-900 data-[highlighted]:tw-bg-amber-100":n}),onSelect:c=>{c.preventDefault(),t()},onKeyDown:c=>{o(c)},onFocus:r,onMouseMove:r,children:[a.jsx("span",{className:N("tw-border-b-0 tw-border-e-0 tw-border-s-2 tw-border-t-0 tw-border-solid tw-px-2",{"tw-font-bold":n,"tw-border-s-red-200":s.toLowerCase()==="ot","tw-border-s-purple-200":s.toLowerCase()==="nt","tw-border-s-indigo-200":s.toLowerCase()==="dc"}),children:ae.bookIdToEnglishName(e)}),n&&a.jsx("div",{children:i})]},e));function Xl({handleSelectChapter:e,endChapter:t,activeChapter:n,highlightedChapter:r,handleHighlightedChapter:o}){const s=Array.from({length:t},(l,c)=>c+1),i=b.useCallback(l=>{o(l)},[o]);return a.jsx("div",{className:N("tw-flex tw-flex-wrap tw-items-start tw-justify-start tw-self-stretch"),children:s.map(l=>a.jsx("div",{className:N("tw-box-content tw-flex tw-h-4 tw-w-4 tw-cursor-pointer tw-items-center tw-justify-end tw-rounded-md tw-p-2 tw-text-amber-800",{"tw-font-semibold tw-text-amber-900":l===n,"tw-bg-amber-200":l===r}),onClick:c=>{c.preventDefault(),c.stopPropagation(),e(l)},role:"button",onKeyDown:c=>{c.key==="Enter"&&e(l)},tabIndex:0,onMouseMove:()=>i(l),children:l},l))})}const mo=ae.allBookIds.filter(e=>!ae.isObsolete(ae.bookIdToNumber(e))),Yl={OT:"Old Testament",NT:"New Testament",DC:"Deuterocanon"},ma=["OT","NT","DC"],Wl=96,Kl=[/^(\w+)$/i,/^(\w+)(?:\s(\d+))$/i,/^(\w+)(?:\s(\d+):(\d+))$/i],rn=e=>K.getChaptersForBook(ae.bookIdToNumber(e));function Jl(){return mo.map(t=>ae.bookIdToEnglishName(t))}function Zl(e){return Jl().includes(e)}function Ql(e){const t=e.toLowerCase().replace(/^\w/,n=>n.toUpperCase());if(Zl(t))return mo.find(r=>ae.bookIdToEnglishName(r)===t)}function ec({scrRef:e,handleSubmit:t,getActiveBookIds:n}){const r=xe(),[o,s]=b.useState(""),[i,l]=b.useState(ae.bookNumberToId(e.bookNum)),[c,d]=b.useState(e.chapterNum??0),[u,f]=b.useState(ae.bookNumberToId(e.bookNum)),[w,g]=b.useState(!1),[x,m]=b.useState(w),h=b.useRef(void 0),k=b.useRef(void 0),j=b.useRef(void 0),E=b.useCallback(_=>{const z=n?n():mo;return{OT:z.filter(A=>ae.isBookOT(A)),NT:z.filter(A=>ae.isBookNT(A)),DC:z.filter(A=>ae.isBookDC(A))}[_].filter(A=>{const $=ae.bookIdToEnglishName(A).toLowerCase(),G=o.replace(/[^a-zA-Z]/g,"").toLowerCase();return $.includes(G)||A.toLowerCase().includes(G)})},[o,n]),S=_=>{s(_)},v=b.useRef(!1),P=b.useCallback(_=>{if(v.current){v.current=!1;return}g(_)},[]),B=b.useCallback((_,z,A,$)=>{if(d(ae.bookNumberToId(e.bookNum)!==_?1:e.chapterNum),z||rn(_)===-1){t({bookNum:ae.bookIdToNumber(_),chapterNum:A||1,verseNum:$||1}),g(!1),s("");return}l(i!==_?_:""),g(!z)},[t,e.bookNum,e.chapterNum,i]),T=_=>{_<=0||_>rn(i)||B(i,!0,_)},R=b.useCallback(()=>{Kl.forEach(_=>{const z=o.match(_);if(z){const[A,$=void 0,G=void 0]=z.slice(1),re=Ql(A);(ae.isBookIdValid(A)||re)&&B(re??A,!0,$?parseInt($,10):1,G?parseInt(G,10):1)}})},[B,o]),L=b.useCallback(_=>{w?(_.key==="ArrowDown"||_.key==="ArrowUp")&&(typeof j<"u"&&j.current!==null?j.current.focus():typeof k<"u"&&k.current!==null&&k.current.focus(),_.preventDefault()):g(!0)},[w]),M=_=>{const{key:z}=_;z==="ArrowRight"||z==="ArrowLeft"||z==="ArrowDown"||z==="ArrowUp"||z==="Enter"||(h.current.dispatchEvent(new KeyboardEvent("keydown",{key:z})),h.current.focus())},ee=_=>{const{key:z}=_;if(u===i){if(z==="Enter"){_.preventDefault(),B(i,!0,c);return}const A=z==="ArrowRight"&&!r||z==="ArrowRight"&&r==="ltr"||z==="ArrowLeft"&&r==="rtl",$=z==="ArrowLeft"&&!r||z==="ArrowLeft"&&r==="ltr"||z==="ArrowRight"&&r==="rtl";let G=0;if(A)if(c<rn(u))G=1;else{_.preventDefault();return}else if($)if(c>1)G=-1;else{_.preventDefault();return}else z==="ArrowDown"?G=6:z==="ArrowUp"&&(G=-6);c+G<=0||c+G>rn(u)?d(0):G!==0&&(d(c+G),_.preventDefault())}};return b.useEffect(()=>{i===u?i===ae.bookNumberToId(e.bookNum)?d(e.chapterNum):d(1):d(0)},[u,e.bookNum,e.chapterNum,i]),b.useLayoutEffect(()=>{m(w)},[w]),b.useLayoutEffect(()=>{const _=setTimeout(()=>{if(x&&k.current&&j.current){const A=j.current.offsetTop-Wl;k.current.scrollTo({top:A,behavior:"instant"})}},10);return()=>{clearTimeout(_)}},[x]),a.jsx("div",{className:"pr-twp tw-flex",children:a.jsxs(sr,{modal:!1,open:w,onOpenChange:P,children:[a.jsx(lo,{asChild:!0,children:a.jsx(Ol,{ref:h,value:o,handleSearch:S,handleKeyDown:L,handleOnClick:()=>{l(ae.bookNumberToId(e.bookNum)),f(ae.bookNumberToId(e.bookNum)),d(e.chapterNum>0?e.chapterNum:0),g(!0),h.current.focus()},onFocus:()=>{v.current=!0},handleSubmit:R,placeholder:`${ae.bookNumberToEnglishName(e.bookNum)} ${e.chapterNum}:${e.verseNum}`})}),a.jsx(Sn,{className:"tw-m-1 tw-overflow-y-auto tw-p-0 tw-font-normal tw-text-foreground/80",style:{width:"233px",maxHeight:"500px",zIndex:"250"},onKeyDown:M,align:r==="ltr"?"start":"end",ref:k,children:a.jsx("div",{className:"rtl:tw-ps-2",children:ma.map((_,z)=>{const A=E(_);return A.length>0&&a.jsxs("div",{children:[a.jsx(jn,{className:"tw-font-semibold tw-text-foreground/80",children:Yl[_]}),A.map($=>a.jsx("div",{children:a.jsx(Hl,{bookId:$,handleSelectBook:()=>B($,!1),isSelected:i===$,handleHighlightBook:()=>f($),handleKeyDown:ee,bookType:_,ref:G=>{i===$&&(j.current=G)},children:a.jsx(Xl,{handleSelectChapter:T,endChapter:rn($),activeChapter:e.bookNum===ae.bookIdToNumber($)?e.chapterNum:0,highlightedChapter:c,handleHighlightedChapter:G=>{d(G)}})})},$)),ma.length-1!==z?a.jsx(En,{}):void 0]},_)})})})]})})}const ys=Yt.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50",{variants:{variant:{default:"tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/90",destructive:"tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90",outline:"tw-border tw-border-input tw-bg-background hover:tw-bg-accent hover:tw-text-accent-foreground",secondary:"tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",ghost:"hover:tw-bg-accent hover:tw-text-accent-foreground",link:"tw-text-primary tw-underline-offset-4 hover:tw-underline"},size:{default:"tw-h-10 tw-px-4 tw-py-2",sm:"tw-h-9 tw-rounded-md tw-px-3",lg:"tw-h-11 tw-rounded-md tw-px-8",icon:"tw-h-10 tw-w-10"}},defaultVariants:{variant:"default",size:"default"}}),pe=b.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?Xt.Slot:"button";return a.jsx(i,{className:N(ys({variant:t,size:n,className:e})),ref:s,...o})});pe.displayName="Button";const tc=Yt.cva("tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"),Ce=b.forwardRef(({className:e,...t},n)=>a.jsx(ls.Root,{ref:n,className:N("pr-twp",tc(),e),...t}));Ce.displayName=ls.Root.displayName;const ho=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsx(gn.Root,{className:N("pr-twp tw-grid tw-gap-2",e),...t,ref:n,dir:r})});ho.displayName=gn.Root.displayName;const Yn=b.forwardRef(({className:e,...t},n)=>a.jsx(gn.Item,{ref:n,className:N("pr-twp tw-aspect-square tw-h-4 tw-w-4 tw-rounded-full tw-border tw-border-primary tw-text-primary tw-ring-offset-background focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t,children:a.jsx(gn.Indicator,{className:"tw-flex tw-items-center tw-justify-center",children:a.jsx(Z.Circle,{className:"tw-h-2.5 tw-w-2.5 tw-fill-current tw-text-current"})})}));Yn.displayName=gn.Item.displayName;const go=bn.Root,bo=bn.Trigger,lr=b.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>{const s=xe();return a.jsx(bn.Portal,{children:a.jsx(bn.Content,{ref:o,align:t,sideOffset:n,className:N("pr-twp tw-z-50 tw-w-72 tw-rounded-md tw-border tw-bg-popover tw-p-4 tw-text-popover-foreground tw-shadow-md tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...r,dir:s})})});lr.displayName=bn.Content.displayName;const nc=Ye.Portal,Ns=b.forwardRef(({className:e,...t},n)=>a.jsx(Ye.Overlay,{ref:n,className:N("tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",e),...t}));Ns.displayName=Ye.Overlay.displayName;const rc=b.forwardRef(({className:e,children:t,...n},r)=>{const o=xe();return a.jsxs(nc,{children:[a.jsx(Ns,{}),a.jsxs(Ye.Content,{ref:r,className:N("pr-twp tw-fixed tw-left-[50%] tw-top-[50%] tw-z-50 tw-grid tw-w-full tw-max-w-lg tw-translate-x-[-50%] tw-translate-y-[-50%] tw-gap-4 tw-border tw-bg-background tw-p-6 tw-shadow-lg tw-duration-200 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[state=closed]:tw-slide-out-to-left-1/2 data-[state=closed]:tw-slide-out-to-top-[48%] data-[state=open]:tw-slide-in-from-left-1/2 data-[state=open]:tw-slide-in-from-top-[48%] sm:tw-rounded-lg",e),...n,dir:o,children:[t,a.jsxs(Ye.Close,{className:N("tw-absolute tw-top-4 tw-rounded-sm tw-opacity-70 tw-ring-offset-background tw-transition-opacity hover:tw-opacity-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-pointer-events-none data-[state=open]:tw-bg-accent data-[state=open]:tw-text-muted-foreground",{"tw-right-4":o==="ltr"},{"tw-left-4":o==="rtl"}),children:[a.jsx(Z.X,{className:"tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-sr-only",children:"Close"})]})]})]})});rc.displayName=Ye.Content.displayName;const oc=b.forwardRef(({className:e,...t},n)=>a.jsx(Ye.Title,{ref:n,className:N("tw-text-lg tw-font-semibold tw-leading-none tw-tracking-tight",e),...t}));oc.displayName=Ye.Title.displayName;const ac=b.forwardRef(({className:e,...t},n)=>a.jsx(Ye.Description,{ref:n,className:N("tw-text-sm tw-text-muted-foreground",e),...t}));ac.displayName=Ye.Description.displayName;const vo=b.forwardRef(({className:e,...t},n)=>a.jsx(Re.Command,{ref:n,className:N("tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-popover tw-text-popover-foreground",e),...t}));vo.displayName=Re.Command.displayName;const xo=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsxs("div",{className:"tw-flex tw-items-center tw-border-b tw-px-3",dir:r,children:[a.jsx(Z.Search,{className:"tw-me-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"}),a.jsx(Re.Command.Input,{ref:n,className:N("tw-flex tw-h-11 tw-w-full tw-rounded-md tw-bg-transparent tw-py-3 tw-text-sm tw-outline-none placeholder:tw-text-muted-foreground disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t})]})});xo.displayName=Re.Command.Input.displayName;const yo=b.forwardRef(({className:e,...t},n)=>a.jsx(Re.Command.List,{ref:n,className:N("tw-max-h-[300px] tw-overflow-y-auto tw-overflow-x-hidden",e),...t}));yo.displayName=Re.Command.List.displayName;const No=b.forwardRef((e,t)=>a.jsx(Re.Command.Empty,{ref:t,className:"tw-py-6 tw-text-center tw-text-sm",...e}));No.displayName=Re.Command.Empty.displayName;const ks=b.forwardRef(({className:e,...t},n)=>a.jsx(Re.Command.Group,{ref:n,className:N("tw-overflow-hidden tw-p-1 tw-text-foreground [&_[cmdk-group-heading]]:tw-px-2 [&_[cmdk-group-heading]]:tw-py-1.5 [&_[cmdk-group-heading]]:tw-text-xs [&_[cmdk-group-heading]]:tw-font-medium [&_[cmdk-group-heading]]:tw-text-muted-foreground",e),...t}));ks.displayName=Re.Command.Group.displayName;const sc=b.forwardRef(({className:e,...t},n)=>a.jsx(Re.Command.Separator,{ref:n,className:N("tw--mx-1 tw-h-px tw-bg-border",e),...t}));sc.displayName=Re.Command.Separator.displayName;const ko=b.forwardRef(({className:e,...t},n)=>a.jsx(Re.Command.Item,{ref:n,className:N("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[disabled=true]:tw-pointer-events-none data-[selected=true]:tw-bg-accent data-[selected=true]:tw-text-accent-foreground data-[disabled=true]:tw-opacity-50",e),...t}));ko.displayName=Re.Command.Item.displayName;function ic(e){return typeof e=="string"?e:typeof e=="number"?e.toString():e.label}function Wn({id:e,options:t=[],className:n,buttonClassName:r,popoverContentClassName:o,value:s,onChange:i=()=>{},getOptionLabel:l=ic,icon:c=void 0,buttonPlaceholder:d="",textPlaceholder:u="",commandEmptyMessage:f="No option found",buttonVariant:w="outline",alignDropDown:g="start",isDisabled:x=!1,...m}){const[h,k]=b.useState(!1);return a.jsxs(go,{open:h,onOpenChange:k,...m,children:[a.jsx(bo,{asChild:!0,children:a.jsxs(pe,{variant:w,role:"combobox","aria-expanded":h,id:e,className:N("tw-flex tw-w-[200px] tw-items-center tw-justify-between tw-overflow-hidden",r??n),disabled:x,children:[a.jsxs("div",{className:"tw-flex tw-flex-1 tw-items-center tw-overflow-hidden",children:[c&&a.jsx("div",{className:"tw-pe-2",children:c}),a.jsx("span",{className:"tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap",children:s?l(s):d})]}),a.jsx(Z.ChevronsUpDown,{className:"tw-ms-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"})]})}),a.jsx(lr,{align:g,className:N("tw-w-[200px] tw-p-0",o),children:a.jsxs(vo,{children:[a.jsx(xo,{placeholder:u,className:"tw-text-inherit"}),a.jsx(No,{children:f}),a.jsx(yo,{children:t.map(j=>a.jsxs(ko,{value:l(j),onSelect:()=>{i(j),k(!1)},children:[a.jsx(Z.Check,{className:N("tw-me-2 tw-h-4 tw-w-4",{"tw-opacity-0":!s||l(s)!==l(j)})}),l(j)]},l(j)))})]})})]})}function Ss({startChapter:e,endChapter:t,handleSelectStartChapter:n,handleSelectEndChapter:r,isDisabled:o=!1,chapterCount:s}){const i=b.useMemo(()=>Array.from({length:s},(d,u)=>u+1),[s]),l=d=>{n(d),d>t&&r(d)},c=d=>{r(d),d<e&&n(d)};return a.jsxs(a.Fragment,{children:[a.jsx(Ce,{htmlFor:"start-chapters-combobox",children:"Chapters"}),a.jsx(Wn,{isDisabled:o,onChange:l,buttonClassName:"tw-me-2 tw-ms-2 tw-w-20",options:i,getOptionLabel:d=>d.toString(),value:e},"start chapter"),a.jsx(Ce,{htmlFor:"end-chapters-combobox",children:"to"}),a.jsx(Wn,{isDisabled:o,onChange:c,buttonClassName:"tw-ms-2 tw-w-20",options:i,getOptionLabel:d=>d.toString(),value:t},"end chapter")]})}var js=(e=>(e.CURRENT_BOOK="current book",e.CHOOSE_BOOKS="choose books",e))(js||{});const lc=Object.freeze(["%webView_bookSelector_currentBook%","%webView_bookSelector_choose%","%webView_bookSelector_chooseBooks%"]),Pr=(e,t)=>e[t]??t;function cc({handleBookSelectionModeChange:e,currentBookName:t,onSelectBooks:n,selectedBookIds:r,chapterCount:o,endChapter:s,handleSelectEndChapter:i,startChapter:l,handleSelectStartChapter:c,localizedStrings:d}){const u=Pr(d,"%webView_bookSelector_currentBook%"),f=Pr(d,"%webView_bookSelector_choose%"),w=Pr(d,"%webView_bookSelector_chooseBooks%"),[g,x]=b.useState("current book"),m=h=>{x(h),e(h)};return a.jsx(ho,{className:"pr-twp tw-flex",value:g,onValueChange:h=>m(h),children:a.jsxs("div",{className:"tw-flex tw-w-full tw-flex-col tw-gap-4",children:[a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,25%,50%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(Yn,{value:"current book"}),a.jsx(Ce,{className:"tw-ms-1",children:u})]}),a.jsx(Ce,{className:"tw-flex tw-items-center",children:t}),a.jsx("div",{className:"tw-flex tw-items-center tw-justify-end",children:a.jsx(Ss,{isDisabled:g==="choose books",handleSelectStartChapter:c,handleSelectEndChapter:i,chapterCount:o,startChapter:l,endChapter:s})})]}),a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,50%,25%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(Yn,{value:"choose books"}),a.jsx(Ce,{className:"tw-ms-1",children:w})]}),a.jsx(Ce,{className:"tw-flex tw-items-center",children:r.map(h=>ae.bookIdToEnglishName(h)).join(", ")}),a.jsx(pe,{disabled:g==="current book",onClick:()=>n(),children:f})]})]})})}function dc({table:e}){return a.jsxs(sr,{children:[a.jsx(ss.DropdownMenuTrigger,{asChild:!0,children:a.jsxs(pe,{variant:"outline",size:"sm",className:"tw-ml-auto tw-hidden tw-h-8 lg:tw-flex",children:[a.jsx(Z.FilterIcon,{className:"tw-mr-2 tw-h-4 tw-w-4"}),"View"]})}),a.jsxs(Sn,{align:"end",className:"tw-w-[150px]",children:[a.jsx(jn,{children:"Toggle columns"}),a.jsx(En,{}),e.getAllColumns().filter(t=>t.getCanHide()).map(t=>a.jsx(ir,{className:"tw-capitalize",checked:t.getIsVisible(),onCheckedChange:n=>t.toggleVisibility(!!n),children:t.id},t.id))]})]})}const yt=ge.Root,Es=ge.Group,Nt=ge.Value,it=b.forwardRef(({className:e,children:t,...n},r)=>{const o=xe();return a.jsxs(ge.Trigger,{ref:r,className:N("tw-flex tw-h-10 tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>span]:tw-line-clamp-1",e),...n,dir:o,children:[t,a.jsx(ge.Icon,{asChild:!0,children:a.jsx(Z.ChevronDown,{className:"tw-h-4 tw-w-4 tw-opacity-50"})})]})});it.displayName=ge.Trigger.displayName;const So=b.forwardRef(({className:e,...t},n)=>a.jsx(ge.ScrollUpButton,{ref:n,className:N("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(Z.ChevronUp,{className:"tw-h-4 tw-w-4"})}));So.displayName=ge.ScrollUpButton.displayName;const jo=b.forwardRef(({className:e,...t},n)=>a.jsx(ge.ScrollDownButton,{ref:n,className:N("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(Z.ChevronDown,{className:"tw-h-4 tw-w-4"})}));jo.displayName=ge.ScrollDownButton.displayName;const lt=b.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>{const s=xe();return a.jsx(ge.Portal,{children:a.jsxs(ge.Content,{ref:o,className:N("pr-twp tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1",e),position:n,...r,children:[a.jsx(So,{}),a.jsx(ge.Viewport,{className:N("tw-p-1",n==="popper"&&"tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]"),children:a.jsx("div",{dir:s,children:t})}),a.jsx(jo,{})]})})});lt.displayName=ge.Content.displayName;const Cs=b.forwardRef(({className:e,...t},n)=>a.jsx(ge.Label,{ref:n,className:N("tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold",e),...t}));Cs.displayName=ge.Label.displayName;const Me=b.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(ge.Item,{ref:r,className:N("tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pe-2 tw-ps-8 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-start-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(ge.ItemIndicator,{children:a.jsx(Z.Check,{className:"tw-h-4 tw-w-4"})})}),a.jsx(ge.ItemText,{children:t})]}));Me.displayName=ge.Item.displayName;const Ts=b.forwardRef(({className:e,...t},n)=>a.jsx(ge.Separator,{ref:n,className:N("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));Ts.displayName=ge.Separator.displayName;function uc({table:e}){return a.jsx("div",{className:"tw-flex tw-items-center tw-justify-between tw-px-2 tw-pb-3 tw-pt-3",children:a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-8",children:[a.jsxs("div",{className:"tw-flex-1 tw-text-sm tw-text-muted-foreground",children:[e.getFilteredSelectedRowModel().rows.length," of"," ",e.getFilteredRowModel().rows.length," row(s) selected"]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsx("p",{className:"tw-text-nowrap tw-text-sm tw-font-medium",children:"Rows per page"}),a.jsxs(yt,{value:`${e.getState().pagination.pageSize}`,onValueChange:t=>{e.setPageSize(Number(t))},children:[a.jsx(it,{className:"tw-h-8 tw-w-[70px]",children:a.jsx(Nt,{placeholder:e.getState().pagination.pageSize})}),a.jsx(lt,{side:"top",children:[10,20,30,40,50].map(t=>a.jsx(Me,{value:`${t}`,children:t},t))})]})]}),a.jsxs("div",{className:"tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-medium",children:["Page ",e.getState().pagination.pageIndex+1," of ",e.getPageCount()]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsxs(pe,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(0),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to first page"}),a.jsx(Z.ArrowLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(pe,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to previous page"}),a.jsx(Z.ChevronLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(pe,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to next page"}),a.jsx(Z.ChevronRightIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(pe,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(e.getPageCount()-1),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to last page"}),a.jsx(Z.ArrowRightIcon,{className:"tw-h-4 tw-w-4"})]})]})]})})}const Cn=b.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("div",{className:N("pr-twp tw-relative tw-w-full",{"tw-overflow-auto":!t}),children:a.jsx("table",{ref:r,className:N("tw-w-full tw-caption-bottom tw-text-sm",e),...n})}));Cn.displayName="Table";const Tn=b.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("thead",{ref:r,className:N({"tw-sticky tw-top-[-1px] tw-bg-background tw-drop-shadow-sm":t},"[&_tr]:tw-border-b",e),...n}));Tn.displayName="TableHeader";const On=b.forwardRef(({className:e,...t},n)=>a.jsx("tbody",{ref:n,className:N("[&_tr:last-child]:tw-border-0",e),...t}));On.displayName="TableBody";const Os=b.forwardRef(({className:e,...t},n)=>a.jsx("tfoot",{ref:n,className:N("tw-border-t tw-bg-muted/50 tw-font-medium [&>tr]:last:tw-border-b-0",e),...t}));Os.displayName="TableFooter";const Qe=b.forwardRef(({className:e,...t},n)=>a.jsx("tr",{ref:n,className:N("tw-border-b tw-transition-colors hover:tw-bg-muted/50 data-[state=selected]:tw-bg-muted",e),...t}));Qe.displayName="TableRow";const Vt=b.forwardRef(({className:e,...t},n)=>a.jsx("th",{ref:n,className:N("tw-h-12 tw-px-4 tw-text-start tw-align-middle tw-font-medium tw-text-muted-foreground [&:has([role=checkbox])]:tw-pe-0",e),...t}));Vt.displayName="TableHead";const kt=b.forwardRef(({className:e,...t},n)=>a.jsx("td",{ref:n,className:N("tw-p-4 tw-align-middle [&:has([role=checkbox])]:tw-pe-0",e),...t}));kt.displayName="TableCell";const Rs=b.forwardRef(({className:e,...t},n)=>a.jsx("caption",{ref:n,className:N("tw-mt-4 tw-text-sm tw-text-muted-foreground",e),...t}));Rs.displayName="TableCaption";function _s({columns:e,data:t,enablePagination:n=!1,showPaginationControls:r=!1,showColumnVisibilityControls:o=!1,stickyHeader:s=!1,onRowClickHandler:i=()=>{}}){var h;const[l,c]=b.useState([]),[d,u]=b.useState([]),[f,w]=b.useState({}),[g,x]=b.useState({}),m=Se.useReactTable({data:t,columns:e,getCoreRowModel:Se.getCoreRowModel(),...n&&{getPaginationRowModel:Se.getPaginationRowModel()},onSortingChange:c,getSortedRowModel:Se.getSortedRowModel(),onColumnFiltersChange:u,getFilteredRowModel:Se.getFilteredRowModel(),onColumnVisibilityChange:w,onRowSelectionChange:x,state:{sorting:l,columnFilters:d,columnVisibility:f,rowSelection:g}});return a.jsxs("div",{className:"pr-twp",children:[o&&a.jsx(dc,{table:m}),a.jsxs(Cn,{stickyHeader:s,children:[a.jsx(Tn,{stickyHeader:s,children:m.getHeaderGroups().map(k=>a.jsx(Qe,{children:k.headers.map(j=>a.jsx(Vt,{children:j.isPlaceholder?void 0:Se.flexRender(j.column.columnDef.header,j.getContext())},j.id))},k.id))}),a.jsx(On,{children:(h=m.getRowModel().rows)!=null&&h.length?m.getRowModel().rows.map(k=>a.jsx(Qe,{onClick:()=>i(k,m),"data-state":k.getIsSelected()&&"selected",children:k.getVisibleCells().map(j=>a.jsx(kt,{children:Se.flexRender(j.column.columnDef.cell,j.getContext())},j.id))},k.id)):a.jsx(Qe,{children:a.jsx(kt,{colSpan:e.length,className:"tw-h-24 tw-text-center",children:"No results."})})})]}),n&&a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-end tw-space-x-2 tw-py-4",children:[a.jsx(pe,{variant:"outline",size:"sm",onClick:()=>m.previousPage(),disabled:!m.getCanPreviousPage(),children:"Previous"}),a.jsx(pe,{variant:"outline",size:"sm",onClick:()=>m.nextPage(),disabled:!m.getCanNextPage(),children:"Next"})]}),n&&r&&a.jsx(uc,{table:m})]})}function pc({occurrenceData:e,setScriptureReference:t,localizedStrings:n}){const r=n["%webView_inventory_occurrences_table_header_reference%"],o=n["%webView_inventory_occurrences_table_header_occurrence%"],s=b.useMemo(()=>{const i=[];return e.forEach(l=>{i.some(c=>K.deepEqual(c,l))||i.push(l)}),i},[e]);return a.jsxs(Cn,{stickyHeader:!0,children:[a.jsx(Tn,{stickyHeader:!0,children:a.jsxs(Qe,{children:[a.jsx(Vt,{children:r}),a.jsx(Vt,{children:o})]})}),a.jsx(On,{children:s.length>0&&s.map(i=>a.jsxs(Qe,{onClick:()=>{t(i.reference)},children:[a.jsx(kt,{children:`${ae.bookNumberToEnglishName(i.reference.bookNum)} ${i.reference.chapterNum}:${i.reference.verseNum}`}),a.jsx(kt,{children:i.text})]},`${i.reference.bookNum} ${i.reference.chapterNum}:${i.reference.verseNum}-${i.text}`))})]})}const cr=b.forwardRef(({className:e,...t},n)=>a.jsx(Xr.Root,{ref:n,className:N("tw-peer pr-twp tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border tw-border-primary tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=checked]:tw-text-primary-foreground",e),...t,children:a.jsx(Xr.Indicator,{className:N("tw-flex tw-items-center tw-justify-center tw-text-current"),children:a.jsx(Z.Check,{className:"tw-h-4 tw-w-4"})})}));cr.displayName=Xr.Root.displayName;const Ps=e=>e.split(/(?:\r?\n|\r)|(?=(?:\\(?:v|c|id)))/g),Wr=e=>{const t=/^\\[vc]\s+(\d+)/,n=e.match(t);if(n)return+n[1]},Is=e=>{const t=e.match(/^\\id\s+([A-Za-z]+)/);return t?ae.bookIdToNumber(t[1]):0},Ms=(e,t,n)=>n.includes(e)?"unapproved":t.includes(e)?"approved":"unknown",$s=Yt.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors hover:tw-bg-muted hover:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=on]:tw-bg-accent data-[state=on]:tw-text-accent-foreground",{variants:{variant:{default:"tw-bg-transparent",outline:"tw-border tw-border-input tw-bg-transparent hover:tw-bg-accent hover:tw-text-accent-foreground"},size:{default:"tw-h-10 tw-px-3",sm:"tw-h-9 tw-px-2.5",lg:"tw-h-11 tw-px-5"}},defaultVariants:{variant:"default",size:"default"}}),wc=b.forwardRef(({className:e,variant:t,size:n,...r},o)=>a.jsx(cs.Root,{ref:o,className:N($s({variant:t,size:n,className:e})),...r}));wc.displayName=cs.Root.displayName;const Ds=b.createContext({size:"default",variant:"default"}),Eo=b.forwardRef(({className:e,variant:t,size:n,children:r,...o},s)=>{const i=xe();return a.jsx(ar.Root,{ref:s,className:N("pr-twp tw-flex tw-items-center tw-justify-center tw-gap-1",e),...o,dir:i,children:a.jsx(Ds.Provider,{value:{variant:t,size:n},children:r})})});Eo.displayName=ar.Root.displayName;const wn=b.forwardRef(({className:e,children:t,variant:n,size:r,...o},s)=>{const i=b.useContext(Ds);return a.jsx(ar.Item,{ref:s,className:N($s({variant:i.variant||n,size:i.size||r}),e),...o,children:t})});wn.displayName=ar.Item.displayName;const dr=e=>e==="asc"?a.jsx(Z.ArrowUpIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):e==="desc"?a.jsx(Z.ArrowDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):a.jsx(Z.ArrowUpDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}),fc=e=>({accessorKey:"item",accessorFn:t=>t.items[0],header:({column:t})=>a.jsxs(pe,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,dr(t.getIsSorted())]})}),mc=(e,t)=>({accessorKey:`item${t}`,accessorFn:n=>n.items[t],header:({column:n})=>a.jsxs(pe,{variant:"ghost",onClick:()=>n.toggleSorting(void 0),children:[e,dr(n.getIsSorted())]})}),hc=e=>({accessorKey:"count",header:({column:t})=>a.jsx("div",{className:"tw-flex tw-justify-end tw-tabular-nums",children:a.jsxs(pe,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,dr(t.getIsSorted())]})}),cell:({row:t})=>a.jsx("div",{className:"tw-flex tw-justify-end",children:t.getValue("count")})}),Ir=(e,t,n,r,o,s)=>{let i=[...n];e.forEach(c=>{t==="approved"?i.includes(c)||i.push(c):i=i.filter(d=>d!==c)}),r(i);let l=[...o];e.forEach(c=>{t==="unapproved"?l.includes(c)||l.push(c):l=l.filter(d=>d!==c)}),s(l)},gc=(e,t,n,r,o)=>({accessorKey:"status",header:({column:s})=>a.jsx("div",{className:"tw-flex tw-justify-center",children:a.jsxs(pe,{variant:"ghost",onClick:()=>s.toggleSorting(void 0),children:[e,dr(s.getIsSorted())]})}),cell:({row:s})=>{const i=s.getValue("status"),l=s.getValue("item");return a.jsxs(Eo,{value:i,variant:"outline",type:"single",children:[a.jsx(wn,{onClick:()=>Ir([l],"approved",t,n,r,o),value:"approved",children:a.jsx(Z.CircleCheckIcon,{})}),a.jsx(wn,{onClick:()=>Ir([l],"unapproved",t,n,r,o),value:"unapproved",children:a.jsx(Z.CircleXIcon,{})}),a.jsx(wn,{onClick:()=>Ir([l],"unknown",t,n,r,o),value:"unknown",children:a.jsx(Z.CircleHelpIcon,{})})]})}}),bc=Object.freeze(["%webView_inventory_all%","%webView_inventory_approved%","%webView_inventory_unapproved%","%webView_inventory_unknown%","%webView_inventory_scope_currentBook%","%webView_inventory_scope_chapter%","%webView_inventory_scope_verse%","%webView_inventory_filter_text%","%webView_inventory_show_additional_items%","%webView_inventory_occurrences_table_header_reference%","%webView_inventory_occurrences_table_header_occurrence%"]),vc=(e,t,n)=>{let r=e;return t!=="all"&&(r=r.filter(o=>t==="approved"&&o.status==="approved"||t==="unapproved"&&o.status==="unapproved"||t==="unknown"&&o.status==="unknown")),n!==""&&(r=r.filter(o=>o.items[0].includes(n))),r},xc=(e,t,n,r,o)=>{if(!e)return[];const s=[];let i=t.bookNum,l=t.chapterNum,c=t.verseNum;return Ps(e).forEach(u=>{u.startsWith("\\id")&&(i=Is(u),l=0,c=0),u.startsWith("\\c")&&(l=Wr(u),c=0),u.startsWith("\\v")&&(c=Wr(u),l===0&&(l=t.chapterNum));let f=o.exec(u)??void 0;for(;f;){const w=[];f.forEach(h=>w.push(h));const g=f.index,x=s.find(h=>K.deepEqual(h.items,w)),m={reference:{bookNum:i!==void 0?i:-1,chapterNum:l!==void 0?l:-1,verseNum:c!==void 0?c:-1},text:K.substring(u,Math.max(0,g-25),Math.min(g+25,u.length))};if(x)x.count+=1,x.occurrences.push(m);else{const h={items:w,count:1,status:Ms(w[0],n,r),occurrences:[m]};s.push(h)}f=o.exec(u)??void 0}}),s},Ze=(e,t)=>e[t]??t;function yc({scriptureReference:e,setScriptureReference:t,localizedStrings:n,extractItems:r,additionalItemsLabels:o,approvedItems:s,unapprovedItems:i,text:l,scope:c,onScopeChange:d,columns:u}){const f=Ze(n,"%webView_inventory_all%"),w=Ze(n,"%webView_inventory_approved%"),g=Ze(n,"%webView_inventory_unapproved%"),x=Ze(n,"%webView_inventory_unknown%"),m=Ze(n,"%webView_inventory_scope_currentBook%"),h=Ze(n,"%webView_inventory_scope_chapter%"),k=Ze(n,"%webView_inventory_scope_verse%"),j=Ze(n,"%webView_inventory_filter_text%"),E=Ze(n,"%webView_inventory_show_additional_items%"),[S,v]=b.useState(!1),[P,B]=b.useState("all"),[T,R]=b.useState(""),[L,M]=b.useState([]),ee=b.useMemo(()=>l?r instanceof RegExp?xc(l,e,s,i,r):r(l,e,s,i):[],[l,r,e,s,i]),_=b.useMemo(()=>{if(S)return ee;const y=[];return ee.forEach(C=>{const U=C.items[0],q=y.find(F=>F.items[0]===U);q?(q.count+=C.count,q.occurrences=q.occurrences.concat(C.occurrences)):y.push({items:[U],count:C.count,occurrences:C.occurrences,status:C.status})}),y},[S,ee]),z=b.useMemo(()=>vc(_,P,T),[_,P,T]),A=b.useMemo(()=>{var U,q;if(!S)return u;const y=(U=o==null?void 0:o.tableHeaders)==null?void 0:U.length;if(!y)return u;const C=[];for(let F=0;F<y;F++)C.push(mc(((q=o==null?void 0:o.tableHeaders)==null?void 0:q[F])||"Additional Item",F+1));return[...C,...u]},[o==null?void 0:o.tableHeaders,u,S]);b.useEffect(()=>{M([])},[z]);const $=(y,C)=>{C.setRowSelection(()=>{const U={};return U[y.index]=!0,U}),M(y.original.items)},G=y=>{if(y==="book"||y==="chapter"||y==="verse")d(y);else throw new Error(`Invalid scope value: ${y}`)},re=y=>{if(y==="all"||y==="approved"||y==="unapproved"||y==="unknown")B(y);else throw new Error(`Invalid status filter value: ${y}`)},se=b.useMemo(()=>{if(_.length===0||L.length===0)return[];const y=_.filter(C=>K.deepEqual(S?C.items:[C.items[0]],L));if(y.length>1)throw new Error("Selected item is not unique");return y[0].occurrences},[L,S,_]);return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-flex-col",children:[a.jsxs("div",{className:"tw-flex tw-items-stretch",children:[a.jsxs(yt,{onValueChange:y=>re(y),defaultValue:P,children:[a.jsx(it,{className:"tw-m-1",children:a.jsx(Nt,{placeholder:"Select filter"})}),a.jsxs(lt,{children:[a.jsx(Me,{value:"all",children:f}),a.jsx(Me,{value:"approved",children:w}),a.jsx(Me,{value:"unapproved",children:g}),a.jsx(Me,{value:"unknown",children:x})]})]}),a.jsxs(yt,{onValueChange:y=>G(y),defaultValue:c,children:[a.jsx(it,{className:"tw-m-1",children:a.jsx(Nt,{placeholder:"Select scope"})}),a.jsxs(lt,{children:[a.jsx(Me,{value:"book",children:m}),a.jsx(Me,{value:"chapter",children:h}),a.jsx(Me,{value:"verse",children:k})]})]}),a.jsx(Ct,{className:"tw-m-1 tw-rounded-md tw-border",placeholder:j,value:T,onChange:y=>{R(y.target.value)}}),o&&a.jsxs("div",{className:"tw-m-1 tw-flex tw-items-center tw-rounded-md tw-border",children:[a.jsx(cr,{className:"tw-m-1",checked:S,onCheckedChange:y=>{M([]),v(y)}}),a.jsx(Ce,{className:"tw-m-1 tw-flex-shrink-0 tw-whitespace-nowrap",children:(o==null?void 0:o.checkboxText)??E})]})]}),a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(_s,{columns:A,data:z,onRowClickHandler:$,stickyHeader:!0})}),se.length>0&&a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(pc,{occurrenceData:se,setScriptureReference:t,localizedStrings:n})})]})}function As({entries:e,getEntriesCount:t=void 0,selected:n,onChange:r,placeholder:o,commandEmptyMessage:s="No entries found",customSelectedText:i,sortSelected:l=!1,icon:c=void 0,className:d=void 0}){const[u,f]=b.useState(!1),w=b.useCallback(m=>{var k;const h=(k=e.find(j=>j.label===m))==null?void 0:k.value;h&&r(n.includes(h)?n.filter(j=>j!==h):[...n,h])},[e,n,r]),g=()=>i||o,x=b.useMemo(()=>{if(!l)return e;const m=e.filter(k=>k.starred).sort((k,j)=>k.label.localeCompare(j.label)),h=e.filter(k=>!k.starred).sort((k,j)=>{const E=n.includes(k.value),S=n.includes(j.value);return E&&!S?-1:!E&&S?1:k.label.localeCompare(j.label)});return[...m,...h]},[e,n,l]);return a.jsx("div",{className:d,children:a.jsxs(go,{open:u,onOpenChange:f,children:[a.jsx(bo,{asChild:!0,children:a.jsxs(pe,{variant:"ghost",role:"combobox","aria-expanded":u,className:N("tw-w-full tw-justify-between",n.length>0&&n.length<e.length&&"tw-border-primary","tw-group"),children:[a.jsxs("div",{className:"tw-flex tw-items-center tw-gap-2",children:[a.jsx("div",{className:"tw-ml-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50",children:a.jsx("span",{className:"tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center",children:c})}),a.jsx("div",{className:N({"tw-text-muted-foreground group-hover:tw-text-secondary-foreground":n.length===0||n.length===e.length}),children:a.jsx("div",{className:"tw-font-normal",children:g()})})]}),a.jsx(Z.ChevronsUpDown,{className:"tw-ml-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"})]})}),a.jsx(lr,{align:"start",className:"tw-w-full tw-p-0",children:a.jsxs(vo,{children:[a.jsx(xo,{placeholder:`Search ${o.toLowerCase()}...`}),a.jsxs(yo,{children:[a.jsx(No,{children:s}),a.jsx(ks,{children:x.map(m=>{const h=t?t(m):void 0;return a.jsxs(ko,{value:m.label,onSelect:w,className:"tw-flex tw-items-center tw-gap-2",children:[a.jsx("div",{className:"w-4",children:a.jsx(Z.Check,{className:N("tw-h-4 tw-w-4",n.includes(m.value)?"tw-opacity-100":"tw-opacity-0")})}),a.jsx("div",{className:"tw-w-4",children:m.starred&&a.jsx(Z.Star,{className:"tw-h-4 tw-w-4"})}),a.jsx("div",{className:"tw-flex-grow",children:m.label}),t&&a.jsx("div",{className:"tw-w-10 tw-text-end tw-text-muted-foreground",children:h})]},m.label)})})]})]})})]})})}function Co({value:e,onSearch:t,placeholder:n,isFullWidth:r,className:o}){const s=xe();return a.jsxs("div",{className:N("tw-relative",{"tw-w-full":r},o),children:[a.jsx(Z.Search,{className:N("tw-absolute tw-top-1/2 tw-h-4 tw-w-4 tw--translate-y-1/2 tw-transform tw-opacity-50",{"tw-right-3":s==="rtl"},{"tw-left-3":s==="ltr"})}),a.jsx(Ct,{className:"tw-w-full tw-text-ellipsis tw-pe-9 tw-ps-9",placeholder:n,value:e,onChange:i=>t(i.target.value)}),e&&a.jsxs(pe,{variant:"ghost",size:"icon",className:N("tw-absolute tw-top-1/2 tw-h-7 tw--translate-y-1/2 tw-transform hover:tw-bg-transparent",{"tw-left-0":s==="rtl"},{"tw-right-0":s==="ltr"}),onClick:()=>{t("")},children:[a.jsx(Z.X,{className:"tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-sr-only",children:"Clear"})]})]})}const To=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsx(_e.Root,{orientation:"vertical",ref:n,className:N("tw-flex tw-gap-1 tw-rounded-md tw-text-muted-foreground",e),...t,dir:r})});To.displayName=_e.List.displayName;const Oo=b.forwardRef(({className:e,...t},n)=>a.jsx(_e.List,{ref:n,className:N("tw-flex-fit tw-mlk-items-center tw-w-[124px] tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t}));Oo.displayName=_e.List.displayName;const Bs=b.forwardRef(({className:e,...t},n)=>a.jsx(_e.Trigger,{ref:n,...t,className:N("overflow-clip tw-inline-flex tw-w-[116px] tw-cursor-pointer tw-items-center tw-justify-center tw-break-words tw-rounded-sm tw-border-0 tw-bg-muted tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-inherit tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e)})),Ro=b.forwardRef(({className:e,...t},n)=>a.jsx(_e.Content,{ref:n,className:N("tw-ms-5 tw-flex-grow tw-text-foreground tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));Ro.displayName=_e.Content.displayName;function Nc({tabList:e,searchValue:t,onSearch:n,searchPlaceholder:r,headerTitle:o,searchClassName:s}){return a.jsxs("div",{className:"pr-twp",children:[a.jsxs("div",{className:"tw-sticky tw-top-0 tw-space-y-2 tw-pb-2",children:[o?a.jsx("h1",{children:o}):"",a.jsx(Co,{className:s,value:t,onSearch:n,placeholder:r})]}),a.jsxs(To,{children:[a.jsx(Oo,{children:e.map(i=>a.jsx(Bs,{value:i.value,children:i.value},i.key))}),e.map(i=>a.jsx(Ro,{value:i.value,children:i.content},i.key))]})]})}const ur=b.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>a.jsx(ds.Root,{ref:o,decorative:n,orientation:t,className:N("pr-twp tw-shrink-0 tw-bg-border",t==="horizontal"?"tw-h-[1px] tw-w-full":"tw-h-full tw-w-[1px]",e),...r}));ur.displayName=ds.Root.displayName;function ha({className:e,...t}){return a.jsx("div",{className:N("pr-twp tw-animate-pulse tw-rounded-md tw-bg-muted",e),...t})}const kc=kn.Provider,Sc=kn.Root,jc=kn.Trigger,zs=b.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(kn.Content,{ref:r,sideOffset:t,className:N("pr-twp tw-z-50 tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-px-3 tw-py-1.5 tw-text-sm tw-text-popover-foreground tw-shadow-md tw-animate-in tw-fade-in-0 tw-zoom-in-95 data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...n}));zs.displayName=kn.Content.displayName;const Ec="16rem",Cc="3rem",Vs=b.createContext(void 0);function pr(){const e=b.useContext(Vs);if(!e)throw new Error("useSidebar must be used within a SidebarProvider.");return e}const Fs=b.forwardRef(({defaultOpen:e=!0,open:t,onOpenChange:n,className:r,style:o,children:s,side:i="primary",...l},c)=>{const[d,u]=b.useState(e),f=t??d,w=b.useCallback(E=>{const S=typeof E=="function"?E(f):E;n?n(S):u(S)},[n,f]),g=b.useCallback(()=>w(E=>!E),[w]),x=f?"expanded":"collapsed",k=xe()==="ltr"?i:i==="primary"?"secondary":"primary",j=b.useMemo(()=>({state:x,open:f,setOpen:w,toggleSidebar:g,side:k}),[x,f,w,g,k]);return a.jsx(Vs.Provider,{value:j,children:a.jsx(kc,{delayDuration:0,children:a.jsx("div",{style:{"--sidebar-width":Ec,"--sidebar-width-icon":Cc,...o},className:N("tw-group/sidebar-wrapper pr-twp tw-flex tw-w-full has-[[data-variant=inset]]:tw-bg-sidebar",r),ref:c,...l,children:s})})})});Fs.displayName="SidebarProvider";const Ls=b.forwardRef(({variant:e="sidebar",collapsible:t="offcanvas",className:n,children:r,...o},s)=>{const i=pr();return t==="none"?a.jsx("div",{className:N("tw-flex tw-h-full tw-w-[--sidebar-width] tw-flex-col tw-bg-sidebar tw-text-sidebar-foreground",n),ref:s,...o,children:r}):a.jsxs("div",{ref:s,className:"tw-group tw-peer tw-hidden tw-text-sidebar-foreground md:tw-block","data-state":i.state,"data-collapsible":i.state==="collapsed"?t:"","data-variant":e,"data-side":i.side,children:[a.jsx("div",{className:N("tw-relative tw-h-svh tw-w-[--sidebar-width] tw-bg-transparent tw-transition-[width] tw-duration-200 tw-ease-linear","group-data-[collapsible=offcanvas]:tw-w-0","group-data-[side=secondary]:tw-rotate-180",e==="floating"||e==="inset"?"group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon]")}),a.jsx("div",{className:N("tw-absolute tw-inset-y-0 tw-z-10 tw-hidden tw-h-svh tw-w-[--sidebar-width] tw-transition-[left,right,width] tw-duration-200 tw-ease-linear md:tw-flex",i.side==="primary"?"tw-left-0 group-data-[collapsible=offcanvas]:tw-left-[calc(var(--sidebar-width)*-1)]":"tw-right-0 group-data-[collapsible=offcanvas]:tw-right-[calc(var(--sidebar-width)*-1)]",e==="floating"||e==="inset"?"tw-p-2 group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon] group-data-[side=primary]:tw-border-r group-data-[side=secondary]:tw-border-l",n),...o,children:a.jsx("div",{"data-sidebar":"sidebar",className:"tw-flex tw-h-full tw-w-full tw-flex-col tw-bg-sidebar group-data-[variant=floating]:tw-rounded-lg group-data-[variant=floating]:tw-border group-data-[variant=floating]:tw-border-sidebar-border group-data-[variant=floating]:tw-shadow",children:r})})]})});Ls.displayName="Sidebar";const Tc=b.forwardRef(({className:e,onClick:t,...n},r)=>{const o=pr();return a.jsxs(pe,{ref:r,"data-sidebar":"trigger",variant:"ghost",size:"icon",className:N("tw-h-7 tw-w-7",e),onClick:s=>{t==null||t(s),o.toggleSidebar()},...n,children:[o.side==="primary"?a.jsx(Z.PanelLeft,{}):a.jsx(Z.PanelRight,{}),a.jsx("span",{className:"tw-sr-only",children:"Toggle Sidebar"})]})});Tc.displayName="SidebarTrigger";const Oc=b.forwardRef(({className:e,...t},n)=>{const{toggleSidebar:r}=pr();return a.jsx("button",{type:"button",ref:n,"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:r,title:"Toggle Sidebar",className:N("tw-absolute tw-inset-y-0 tw-z-20 tw-hidden tw-w-4 tw--translate-x-1/2 tw-transition-all tw-ease-linear after:tw-absolute after:tw-inset-y-0 after:tw-left-1/2 after:tw-w-[2px] hover:after:tw-bg-sidebar-border group-data-[side=primary]:tw--right-4 group-data-[side=secondary]:tw-left-0 sm:tw-flex","[[data-side=secondary]_&]:tw-cursor-e-resize [[data-side=secondary]_&]:tw-cursor-w-resize","[[data-side=primary][data-state=collapsed]_&]:tw-cursor-e-resize [[data-side=secondary][data-state=collapsed]_&]:tw-cursor-w-resize","group-data-[collapsible=offcanvas]:tw-translate-x-0 group-data-[collapsible=offcanvas]:after:tw-left-full group-data-[collapsible=offcanvas]:hover:tw-bg-sidebar","[[data-side=primary][data-collapsible=offcanvas]_&]:tw--right-2","[[data-side=secondary][data-collapsible=offcanvas]_&]:tw--left-2",e),...t})});Oc.displayName="SidebarRail";const Gs=b.forwardRef(({className:e,...t},n)=>a.jsx("main",{ref:n,className:N("tw-relative tw-flex tw-flex-1 tw-flex-col tw-bg-background","peer-data-[variant=inset]:tw-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:tw-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:tw-ml-2 md:peer-data-[variant=inset]:tw-ml-0 md:peer-data-[variant=inset]:tw-rounded-xl md:peer-data-[variant=inset]:tw-shadow",e),...t}));Gs.displayName="SidebarInset";const Rc=b.forwardRef(({className:e,...t},n)=>a.jsx(Ct,{ref:n,"data-sidebar":"input",className:N("tw-h-8 tw-w-full tw-bg-background tw-shadow-none focus-visible:tw-ring-2 focus-visible:tw-ring-sidebar-ring",e),...t}));Rc.displayName="SidebarInput";const _c=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"header",className:N("tw-flex tw-flex-col tw-gap-2 tw-p-2",e),...t}));_c.displayName="SidebarHeader";const Pc=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"footer",className:N("tw-flex tw-flex-col tw-gap-2 tw-p-2",e),...t}));Pc.displayName="SidebarFooter";const Ic=b.forwardRef(({className:e,...t},n)=>a.jsx(ur,{ref:n,"data-sidebar":"separator",className:N("tw-mx-2 tw-w-auto tw-bg-sidebar-border",e),...t}));Ic.displayName="SidebarSeparator";const Us=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"content",className:N("tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-auto group-data-[collapsible=icon]:tw-overflow-hidden",e),...t}));Us.displayName="SidebarContent";const Kr=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"group",className:N("tw-relative tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-p-2",e),...t}));Kr.displayName="SidebarGroup";const Jr=b.forwardRef(({className:e,asChild:t=!1,...n},r)=>{const o=t?Xt.Slot:"div";return a.jsx(o,{ref:r,"data-sidebar":"group-label",className:N("tw-flex tw-h-8 tw-shrink-0 tw-items-center tw-rounded-md tw-px-2 tw-text-xs tw-font-medium tw-text-sidebar-foreground/70 tw-outline-none tw-ring-sidebar-ring tw-transition-[margin,opa] tw-duration-200 tw-ease-linear focus-visible:tw-ring-2 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0","group-data-[collapsible=icon]:tw--mt-8 group-data-[collapsible=icon]:tw-opacity-0",e),...n})});Jr.displayName="SidebarGroupLabel";const Mc=b.forwardRef(({className:e,asChild:t=!1,...n},r)=>{const o=t?Xt.Slot:"button";return a.jsx(o,{ref:r,"data-sidebar":"group-action",className:N("tw-absolute tw-right-3 tw-top-3.5 tw-flex tw-aspect-square tw-w-5 tw-items-center tw-justify-center tw-rounded-md tw-p-0 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring tw-transition-transform hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0","after:tw-absolute after:tw--inset-2 after:md:tw-hidden","group-data-[collapsible=icon]:tw-hidden",e),...n})});Mc.displayName="SidebarGroupAction";const Zr=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"group-content",className:N("tw-w-full tw-text-sm",e),...t}));Zr.displayName="SidebarGroupContent";const qs=b.forwardRef(({className:e,...t},n)=>a.jsx("ul",{ref:n,"data-sidebar":"menu",className:N("tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-gap-1",e),...t}));qs.displayName="SidebarMenu";const Hs=b.forwardRef(({className:e,...t},n)=>a.jsx("li",{ref:n,"data-sidebar":"menu-item",className:N("tw-group/menu-item tw-relative",e),...t}));Hs.displayName="SidebarMenuItem";const $c=Yt.cva("tw-peer/menu-button tw-flex tw-w-full tw-items-center tw-gap-2 tw-overflow-hidden tw-rounded-md tw-p-2 tw-text-left tw-text-sm tw-outline-none tw-ring-sidebar-ring tw-transition-[width,height,padding] hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground disabled:tw-pointer-events-none disabled:tw-opacity-50 tw-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50 data-[active=true]:tw-font-medium data-[active=true]:tw-text-sidebar-accent-foreground data-[state=open]:hover:tw-bg-sidebar-accent data-[state=open]:hover:tw-text-sidebar-accent-foreground group-data-[collapsible=icon]:tw-!size-8 group-data-[collapsible=icon]:tw-!p-2 [&>span:last-child]:tw-truncate [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",{variants:{variant:{default:"hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground",outline:"tw-bg-background tw-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground hover:tw-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"tw-h-8 tw-text-sm",sm:"tw-h-7 tw-text-xs",lg:"tw-h-12 tw-text-sm group-data-[collapsible=icon]:tw-!p-0"}},defaultVariants:{variant:"default",size:"default"}}),Xs=b.forwardRef(({asChild:e=!1,isActive:t=!1,variant:n="default",size:r="default",tooltip:o,className:s,...i},l)=>{const c=e?Xt.Slot:"button",{state:d}=pr(),u=a.jsx(c,{ref:l,"data-sidebar":"menu-button","data-size":r,"data-active":t,className:N($c({variant:n,size:r}),s),...i});return o?(typeof o=="string"&&(o={children:o}),a.jsxs(Sc,{children:[a.jsx(jc,{asChild:!0,children:u}),a.jsx(zs,{side:"right",align:"center",hidden:d!=="collapsed",...o})]})):u});Xs.displayName="SidebarMenuButton";const Dc=b.forwardRef(({className:e,asChild:t=!1,showOnHover:n=!1,...r},o)=>{const s=t?Xt.Slot:"button";return a.jsx(s,{ref:o,"data-sidebar":"menu-action",className:N("tw-peer-hover/menu-button:text-sidebar-accent-foreground tw-absolute tw-right-1 tw-top-1.5 tw-flex tw-aspect-square tw-w-5 tw-items-center tw-justify-center tw-rounded-md tw-p-0 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring tw-transition-transform hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0","after:tw-absolute after:tw--inset-2 after:md:tw-hidden","tw-peer-data-[size=sm]/menu-button:top-1","tw-peer-data-[size=default]/menu-button:top-1.5","tw-peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:tw-hidden",n&&"tw-group-focus-within/menu-item:opacity-100 tw-group-hover/menu-item:opacity-100 tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:tw-opacity-100 md:tw-opacity-0",e),...r})});Dc.displayName="SidebarMenuAction";const Ac=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,"data-sidebar":"menu-badge",className:N("tw-pointer-events-none tw-absolute tw-right-1 tw-flex tw-h-5 tw-min-w-5 tw-select-none tw-items-center tw-justify-center tw-rounded-md tw-px-1 tw-text-xs tw-font-medium tw-tabular-nums tw-text-sidebar-foreground","tw-peer-hover/menu-button:text-sidebar-accent-foreground tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","tw-peer-data-[size=sm]/menu-button:top-1","tw-peer-data-[size=default]/menu-button:top-1.5","tw-peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:tw-hidden",e),...t}));Ac.displayName="SidebarMenuBadge";const Bc=b.forwardRef(({className:e,showIcon:t=!1,...n},r)=>{const o=b.useMemo(()=>`${Math.floor(Math.random()*40)+50}%`,[]);return a.jsxs("div",{ref:r,"data-sidebar":"menu-skeleton",className:N("tw-flex tw-h-8 tw-items-center tw-gap-2 tw-rounded-md tw-px-2",e),...n,children:[t&&a.jsx(ha,{className:"tw-size-4 tw-rounded-md","data-sidebar":"menu-skeleton-icon"}),a.jsx(ha,{className:"tw-h-4 tw-max-w-[--skeleton-width] tw-flex-1","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":o}})]})});Bc.displayName="SidebarMenuSkeleton";const zc=b.forwardRef(({className:e,...t},n)=>a.jsx("ul",{ref:n,"data-sidebar":"menu-sub",className:N("tw-mx-3.5 tw-flex tw-min-w-0 tw-translate-x-px tw-flex-col tw-gap-1 tw-border-l tw-border-sidebar-border tw-px-2.5 tw-py-0.5","group-data-[collapsible=icon]:tw-hidden",e),...t}));zc.displayName="SidebarMenuSub";const Vc=b.forwardRef(({...e},t)=>a.jsx("li",{ref:t,...e}));Vc.displayName="SidebarMenuSubItem";const Fc=b.forwardRef(({asChild:e=!1,size:t="md",isActive:n,className:r,...o},s)=>{const i=e?Xt.Slot:"a";return a.jsx(i,{ref:s,"data-sidebar":"menu-sub-button","data-size":t,"data-active":n,className:N("tw-flex tw-h-7 tw-min-w-0 tw--translate-x-px tw-items-center tw-gap-2 tw-overflow-hidden tw-rounded-md tw-px-2 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground disabled:tw-pointer-events-none disabled:tw-opacity-50 aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50 [&>span:last-child]:tw-truncate [&>svg]:tw-size-4 [&>svg]:tw-shrink-0 [&>svg]:tw-text-sidebar-accent-foreground","data-[active=true]:tw-bg-sidebar-accent data-[active=true]:tw-text-sidebar-accent-foreground",t==="sm"&&"tw-text-xs",t==="md"&&"tw-text-sm","group-data-[collapsible=icon]:tw-hidden",r),...o})});Fc.displayName="SidebarMenuSubButton";function Ys({id:e,extensionLabels:t,projectInfo:n,handleSelectSidebarItem:r,selectedSidebarItem:o,extensionsSidebarGroupLabel:s,projectsSidebarGroupLabel:i,buttonPlaceholderText:l}){const c=b.useCallback((f,w)=>{r(f,w)},[r]),d=b.useCallback(f=>{const w=n.find(g=>g.projectId===f);return w?w.projectName:f},[n]),u=b.useCallback(f=>!o.projectId&&f===o.label,[o]);return a.jsx(Ls,{id:e,collapsible:"none",variant:"inset",className:"tw-w-96 tw-gap-2 tw-overflow-y-auto tw-rounded tw-bg-slate-100",children:a.jsxs(Us,{children:[a.jsxs(Kr,{children:[a.jsx(Jr,{className:"tw-text-sm tw-text-gray-400",children:s}),a.jsx(Zr,{children:a.jsx(qs,{children:t.map(f=>a.jsx(Hs,{children:a.jsx(Xs,{className:N("tw-rounded tw-py-2 tw-text-sm tw-text-gray-500 hover:tw-bg-white hover:tw-text-gray-900 hover:tw-shadow-sm active:tw-bg-white",{"tw-bg-white tw-text-gray-900 tw-shadow-sm":u(f)}),onClick:()=>c(f),isActive:u(f),children:a.jsx("span",{className:"tw-pl-3",children:f})})},f))})})]}),a.jsxs(Kr,{children:[a.jsx(Jr,{className:"tw-text-sm tw-text-gray-400",children:i}),a.jsx(Zr,{className:"tw-pl-3",children:a.jsx(Wn,{popoverContentClassName:"tw-z-[1000]",options:n.flatMap(f=>f.projectId),getOptionLabel:f=>d(f),buttonPlaceholder:l,onChange:f=>{const w=d(f);c(w,f)},value:(o==null?void 0:o.projectId)??void 0})})]})]})})}function Lc({id:e,extensionLabels:t,projectInfo:n,children:r,handleSelectSidebarItem:o,selectedSidebarItem:s,searchValue:i,onSearch:l,extensionsSidebarGroupLabel:c,projectsSidebarGroupLabel:d,buttonPlaceholderText:u}){return a.jsxs("div",{className:"tw-box-border tw-flex tw-h-full tw-flex-col tw-p-3",children:[a.jsx("div",{className:"tw-box-border tw-flex tw-items-center tw-justify-center tw-py-4",children:a.jsx(Co,{className:"tw-w-9/12",value:i,onSearch:l,placeholder:"Search app settings, extension settings, and project settings"})}),a.jsxs(Fs,{id:e,className:"tw-h-full tw-flex-1 tw-gap-4 tw-overflow-auto",children:[a.jsx(Ys,{extensionLabels:t,projectInfo:n,handleSelectSidebarItem:o,selectedSidebarItem:s,extensionsSidebarGroupLabel:c,projectsSidebarGroupLabel:d,buttonPlaceholderText:u}),a.jsx(Gs,{className:"tw-overflow-y-auto",children:r})]})]})}const ot="scrBook",Gc="scrRef",mt="source",Uc="details",qc="Scripture Reference",Hc="Scripture Book",Ws="Type",Xc="Details";function Yc(e,t){const n=t??!1;return[{accessorFn:r=>`${ae.bookNumberToId(r.start.bookNum)} ${r.start.chapterNum}:${r.start.verseNum}`,id:ot,header:(e==null?void 0:e.scriptureReferenceColumnName)??qc,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?ae.bookNumberToEnglishName(o.start.bookNum):r.row.groupingColumnId===ot?K.formatScrRef(o.start):void 0},getGroupingValue:r=>r.start.bookNum,sortingFn:(r,o)=>K.compareScrRefs(r.original.start,o.original.start),enableGrouping:!0},{accessorFn:r=>K.formatScrRef(r.start),id:Gc,header:void 0,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?void 0:K.formatScrRef(o.start)},sortingFn:(r,o)=>K.compareScrRefs(r.original.start,o.original.start),enableGrouping:!1},{accessorFn:r=>r.source.displayName,id:mt,header:n?(e==null?void 0:e.typeColumnName)??Ws:void 0,cell:r=>n||r.row.getIsGrouped()?r.getValue():void 0,getGroupingValue:r=>r.source.id,sortingFn:(r,o)=>r.original.source.displayName.localeCompare(o.original.source.displayName),enableGrouping:!0},{accessorFn:r=>r.detail,id:Uc,header:(e==null?void 0:e.detailsColumnName)??Xc,cell:r=>r.getValue(),enableGrouping:!1}]}const Wc=e=>{if(!("offset"in e.start))throw new Error("No offset available in range start");if(e.end&&!("offset"in e.end))throw new Error("No offset available in range end");const{offset:t}=e.start;let n=0;return e.end&&({offset:n}=e.end),!e.end||K.compareScrRefs(e.start,e.end)===0?`${K.scrRefToBBBCCCVVV(e.start)}+${t}`:`${K.scrRefToBBBCCCVVV(e.start)}+${t}-${K.scrRefToBBBCCCVVV(e.end)}+${n}`},ga=e=>`${Wc({start:e.start,end:e.end})} ${e.source.displayName} ${e.detail}`;function Kc({sources:e,showColumnHeaders:t=!1,showSourceColumn:n=!1,scriptureReferenceColumnName:r,scriptureBookGroupName:o,typeColumnName:s,detailsColumnName:i,onRowSelected:l}){const[c,d]=b.useState([]),[u,f]=b.useState([{id:ot,desc:!1}]),[w,g]=b.useState({}),x=b.useMemo(()=>e.flatMap(T=>T.data.map(R=>({...R,source:T.source}))),[e]),m=b.useMemo(()=>Yc({scriptureReferenceColumnName:r,typeColumnName:s,detailsColumnName:i},n),[r,s,i,n]);b.useEffect(()=>{c.includes(mt)?f([{id:mt,desc:!1},{id:ot,desc:!1}]):f([{id:ot,desc:!1}])},[c]);const h=Se.useReactTable({data:x,columns:m,state:{grouping:c,sorting:u,rowSelection:w},onGroupingChange:d,onSortingChange:f,onRowSelectionChange:g,getExpandedRowModel:Se.getExpandedRowModel(),getGroupedRowModel:Se.getGroupedRowModel(),getCoreRowModel:Se.getCoreRowModel(),getSortedRowModel:Se.getSortedRowModel(),getRowId:ga,autoResetExpanded:!1,enableMultiRowSelection:!1,enableSubRowSelection:!1});b.useEffect(()=>{if(l){const T=h.getSelectedRowModel().rowsById,R=Object.keys(T);if(R.length===1){const L=x.find(M=>ga(M)===R[0])||void 0;L&&l(L)}}},[w,x,l,h]);const k=o??Hc,j=s??Ws,E=[{label:"No Grouping",value:[]},{label:`Group by ${k}`,value:[ot]},{label:`Group by ${j}`,value:[mt]},{label:`Group by ${k} and ${j}`,value:[ot,mt]},{label:`Group by ${j} and ${k}`,value:[mt,ot]}],S=T=>{d(JSON.parse(T))},v=(T,R)=>{!T.getIsGrouped()&&!T.getIsSelected()&&T.getToggleSelectedHandler()(R)},P=(T,R)=>T.getIsGrouped()?"":N("banded-row",R%2===0?"even":"odd"),B=(T,R,L)=>{if(!((T==null?void 0:T.length)===0||R.depth<L.column.getGroupedIndex())){if(R.getIsGrouped())switch(R.depth){case 1:return"tw-ps-4";default:return}switch(R.depth){case 1:return"tw-ps-8";case 2:return"tw-ps-12";default:return}}};return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-w-full tw-flex-col",children:[!t&&a.jsxs(yt,{value:JSON.stringify(c),onValueChange:T=>{S(T)},children:[a.jsx(it,{className:"tw-mb-1 tw-mt-2",children:a.jsx(Nt,{})}),a.jsx(lt,{position:"item-aligned",children:a.jsx(Es,{children:E.map(T=>a.jsx(Me,{value:JSON.stringify(T.value),children:T.label},T.label))})})]}),a.jsxs(Cn,{className:"tw-relative tw-flex tw-flex-col tw-overflow-y-auto tw-p-0",children:[t&&a.jsx(Tn,{children:h.getHeaderGroups().map(T=>a.jsx(Qe,{children:T.headers.filter(R=>R.column.columnDef.header).map(R=>a.jsx(Vt,{colSpan:R.colSpan,className:"top-0 tw-sticky",children:R.isPlaceholder?void 0:a.jsxs("div",{children:[R.column.getCanGroup()?a.jsx(pe,{variant:"ghost",title:`Toggle grouping by ${R.column.columnDef.header}`,onClick:R.column.getToggleGroupingHandler(),type:"button",children:R.column.getIsGrouped()?"🛑":"👊 "}):void 0," ",Se.flexRender(R.column.columnDef.header,R.getContext())]})},R.id))},T.id))}),a.jsx(On,{children:h.getRowModel().rows.map((T,R)=>{const L=xe();return a.jsx(Qe,{"data-state":T.getIsSelected()?"selected":"",className:N(P(T,R)),onClick:M=>v(T,M),children:T.getVisibleCells().map(M=>{if(!(M.getIsPlaceholder()||M.column.columnDef.enableGrouping&&!M.getIsGrouped()&&(M.column.columnDef.id!==mt||!n)))return a.jsx(kt,{className:N(M.column.columnDef.id,"tw-p-[1px]",B(c,T,M)),children:M.getIsGrouped()?a.jsxs(pe,{variant:"link",onClick:T.getToggleExpandedHandler(),type:"button",children:[T.getIsExpanded()&&a.jsx(Z.ChevronDown,{}),!T.getIsExpanded()&&(L==="ltr"?a.jsx(Z.ChevronRight,{}):a.jsx(Z.ChevronLeft,{}))," ",Se.flexRender(M.column.columnDef.cell,M.getContext())," (",T.subRows.length,")"]}):Se.flexRender(M.column.columnDef.cell,M.getContext())},M.id)})},T.id)})})]})]})}const Mr={[K.getLocalizeKeyForScrollGroupId("undefined")]:"Ø",[K.getLocalizeKeyForScrollGroupId(0)]:"A",[K.getLocalizeKeyForScrollGroupId(1)]:"B",[K.getLocalizeKeyForScrollGroupId(2)]:"C",[K.getLocalizeKeyForScrollGroupId(3)]:"D",[K.getLocalizeKeyForScrollGroupId(4)]:"E",[K.getLocalizeKeyForScrollGroupId(5)]:"F",[K.getLocalizeKeyForScrollGroupId(6)]:"G",[K.getLocalizeKeyForScrollGroupId(7)]:"H",[K.getLocalizeKeyForScrollGroupId(8)]:"I",[K.getLocalizeKeyForScrollGroupId(9)]:"J",[K.getLocalizeKeyForScrollGroupId(10)]:"K",[K.getLocalizeKeyForScrollGroupId(11)]:"L",[K.getLocalizeKeyForScrollGroupId(12)]:"M",[K.getLocalizeKeyForScrollGroupId(13)]:"N",[K.getLocalizeKeyForScrollGroupId(14)]:"O",[K.getLocalizeKeyForScrollGroupId(15)]:"P",[K.getLocalizeKeyForScrollGroupId(16)]:"Q",[K.getLocalizeKeyForScrollGroupId(17)]:"R",[K.getLocalizeKeyForScrollGroupId(18)]:"S",[K.getLocalizeKeyForScrollGroupId(19)]:"T",[K.getLocalizeKeyForScrollGroupId(20)]:"U",[K.getLocalizeKeyForScrollGroupId(21)]:"V",[K.getLocalizeKeyForScrollGroupId(22)]:"W",[K.getLocalizeKeyForScrollGroupId(23)]:"X",[K.getLocalizeKeyForScrollGroupId(24)]:"Y",[K.getLocalizeKeyForScrollGroupId(25)]:"Z"};function Jc({availableScrollGroupIds:e,scrollGroupId:t,onChangeScrollGroupId:n,localizedStrings:r={}}){const o={...Mr,...Object.fromEntries(Object.entries(r).map(([i,l])=>[i,i===l&&i in Mr?Mr[i]:l]))},s=xe();return a.jsxs(yt,{value:`${t}`,onValueChange:i=>n(i==="undefined"?void 0:parseInt(i,10)),children:[a.jsx(it,{className:"pr-twp tw-w-auto",children:a.jsx(Nt,{placeholder:o[K.getLocalizeKeyForScrollGroupId(t)]??t})}),a.jsx(lt,{align:s==="rtl"?"end":"start",style:{zIndex:250},children:e.map(i=>a.jsx(Me,{value:`${i}`,children:o[K.getLocalizeKeyForScrollGroupId(i)]},`${i}`))})]})}function Zc({children:e}){return a.jsx("div",{className:"pr-twp tw-grid",children:e})}function Qc({primary:e,secondary:t,children:n,isLoading:r=!1,loadingMessage:o}){return a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-between tw-space-x-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"tw-text-sm tw-font-medium tw-leading-none",children:e}),a.jsx("p",{className:"tw-whitespace-normal tw-break-words tw-text-sm tw-text-muted-foreground",children:t})]}),r?a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:o}):a.jsx("div",{children:n})]})}function ed({primary:e,secondary:t,includeSeparator:n=!1}){return a.jsxs("div",{className:"tw-space-y-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"tw-text-lg tw-font-medium",children:e}),a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:t})]}),n?a.jsx(ur,{}):""]})}function td({id:e,className:t,listItems:n,selectedListItems:r,handleSelectListItem:o,createLabel:s}){return a.jsx("div",{id:e,className:t,children:n.map(i=>a.jsxs("div",{className:"tw-m-2 tw-flex tw-items-center",children:[a.jsx(cr,{className:"tw-me-2 tw-align-middle",checked:r.includes(i),onCheckedChange:l=>o(i,l)}),a.jsx(Ce,{children:s?s(i):i})]},i))})}function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function rd(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var _o={},Ks={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ks);var od=Ks.exports,$r={};function Po(e,t){return process.env.NODE_ENV==="production"?()=>null:function(...r){return e(...r)||t(...r)}}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function bt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Js(e){if(!bt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Js(e[n])}),t}function et(e,t,n={clone:!0}){const r=n.clone?O({},e):e;return bt(e)&&bt(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(bt(t[o])&&o in e&&bt(e[o])?r[o]=et(e[o],t[o],n):n.clone?r[o]=bt(t[o])?Js(t[o]):t[o]:r[o]=t[o])}),r}var Qr={exports:{}},Vn={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba;function ad(){if(ba)return ie;ba=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function E(v){if(typeof v=="object"&&v!==null){var P=v.$$typeof;switch(P){case t:switch(v=v.type,v){case c:case d:case r:case s:case o:case f:return v;default:switch(v=v&&v.$$typeof,v){case l:case u:case x:case g:case i:return v;default:return P}}case n:return P}}}function S(v){return E(v)===d}return ie.AsyncMode=c,ie.ConcurrentMode=d,ie.ContextConsumer=l,ie.ContextProvider=i,ie.Element=t,ie.ForwardRef=u,ie.Fragment=r,ie.Lazy=x,ie.Memo=g,ie.Portal=n,ie.Profiler=s,ie.StrictMode=o,ie.Suspense=f,ie.isAsyncMode=function(v){return S(v)||E(v)===c},ie.isConcurrentMode=S,ie.isContextConsumer=function(v){return E(v)===l},ie.isContextProvider=function(v){return E(v)===i},ie.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===t},ie.isForwardRef=function(v){return E(v)===u},ie.isFragment=function(v){return E(v)===r},ie.isLazy=function(v){return E(v)===x},ie.isMemo=function(v){return E(v)===g},ie.isPortal=function(v){return E(v)===n},ie.isProfiler=function(v){return E(v)===s},ie.isStrictMode=function(v){return E(v)===o},ie.isSuspense=function(v){return E(v)===f},ie.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===r||v===d||v===s||v===o||v===f||v===w||typeof v=="object"&&v!==null&&(v.$$typeof===x||v.$$typeof===g||v.$$typeof===i||v.$$typeof===l||v.$$typeof===u||v.$$typeof===h||v.$$typeof===k||v.$$typeof===j||v.$$typeof===m)},ie.typeOf=E,ie}var le={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va;function sd(){return va||(va=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function E(I){return typeof I=="string"||typeof I=="function"||I===r||I===d||I===s||I===o||I===f||I===w||typeof I=="object"&&I!==null&&(I.$$typeof===x||I.$$typeof===g||I.$$typeof===i||I.$$typeof===l||I.$$typeof===u||I.$$typeof===h||I.$$typeof===k||I.$$typeof===j||I.$$typeof===m)}function S(I){if(typeof I=="object"&&I!==null){var ye=I.$$typeof;switch(ye){case t:var V=I.type;switch(V){case c:case d:case r:case s:case o:case f:return V;default:var ve=V&&V.$$typeof;switch(ve){case l:case u:case x:case g:case i:return ve;default:return ye}}case n:return ye}}}var v=c,P=d,B=l,T=i,R=t,L=u,M=r,ee=x,_=g,z=n,A=s,$=o,G=f,re=!1;function se(I){return re||(re=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),y(I)||S(I)===c}function y(I){return S(I)===d}function C(I){return S(I)===l}function U(I){return S(I)===i}function q(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function F(I){return S(I)===u}function W(I){return S(I)===r}function X(I){return S(I)===x}function Y(I){return S(I)===g}function H(I){return S(I)===n}function J(I){return S(I)===s}function Q(I){return S(I)===o}function ue(I){return S(I)===f}le.AsyncMode=v,le.ConcurrentMode=P,le.ContextConsumer=B,le.ContextProvider=T,le.Element=R,le.ForwardRef=L,le.Fragment=M,le.Lazy=ee,le.Memo=_,le.Portal=z,le.Profiler=A,le.StrictMode=$,le.Suspense=G,le.isAsyncMode=se,le.isConcurrentMode=y,le.isContextConsumer=C,le.isContextProvider=U,le.isElement=q,le.isForwardRef=F,le.isFragment=W,le.isLazy=X,le.isMemo=Y,le.isPortal=H,le.isProfiler=J,le.isStrictMode=Q,le.isSuspense=ue,le.isValidElementType=E,le.typeOf=S}()),le}var xa;function Zs(){return xa||(xa=1,process.env.NODE_ENV==="production"?Vn.exports=ad():Vn.exports=sd()),Vn.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Dr,ya;function id(){if(ya)return Dr;ya=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function o(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var c=Object.getOwnPropertyNames(i).map(function(u){return i[u]});if(c.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(u){d[u]=u}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Dr=o()?Object.assign:function(s,i){for(var l,c=r(s),d,u=1;u<arguments.length;u++){l=Object(arguments[u]);for(var f in l)t.call(l,f)&&(c[f]=l[f]);if(e){d=e(l);for(var w=0;w<d.length;w++)n.call(l,d[w])&&(c[d[w]]=l[d[w]])}}return c},Dr}var Ar,Na;function Io(){if(Na)return Ar;Na=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ar=e,Ar}var Br,ka;function Qs(){return ka||(ka=1,Br=Function.call.bind(Object.prototype.hasOwnProperty)),Br}var zr,Sa;function ld(){if(Sa)return zr;Sa=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=Io(),n={},r=Qs();e=function(s){var i="Warning: "+s;typeof console<"u"&&console.error(i);try{throw new Error(i)}catch{}}}function o(s,i,l,c,d){if(process.env.NODE_ENV!=="production"){for(var u in s)if(r(s,u)){var f;try{if(typeof s[u]!="function"){var w=Error((c||"React class")+": "+l+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw w.name="Invariant Violation",w}f=s[u](i,u,c,l,null,t)}catch(x){f=x}if(f&&!(f instanceof Error)&&e((c||"React class")+": type specification of "+l+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in n)){n[f.message]=!0;var g=d?d():"";e("Failed "+l+" type: "+f.message+(g??""))}}}}return o.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},zr=o,zr}var Vr,ja;function cd(){if(ja)return Vr;ja=1;var e=Zs(),t=id(),n=Io(),r=Qs(),o=ld(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(l){var c="Warning: "+l;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}});function i(){return null}return Vr=function(l,c){var d=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function f(y){var C=y&&(d&&y[d]||y[u]);if(typeof C=="function")return C}var w="<<anonymous>>",g={array:k("array"),bigint:k("bigint"),bool:k("boolean"),func:k("function"),number:k("number"),object:k("object"),string:k("string"),symbol:k("symbol"),any:j(),arrayOf:E,element:S(),elementType:v(),instanceOf:P,node:L(),objectOf:T,oneOf:B,oneOfType:R,shape:ee,exact:_};function x(y,C){return y===C?y!==0||1/y===1/C:y!==y&&C!==C}function m(y,C){this.message=y,this.data=C&&typeof C=="object"?C:{},this.stack=""}m.prototype=Error.prototype;function h(y){if(process.env.NODE_ENV!=="production")var C={},U=0;function q(W,X,Y,H,J,Q,ue){if(H=H||w,Q=Q||Y,ue!==n){if(c){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var ye=H+":"+Y;!C[ye]&&U<3&&(s("You are manually calling a React.PropTypes validation function for the `"+Q+"` prop on `"+H+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),C[ye]=!0,U++)}}return X[Y]==null?W?X[Y]===null?new m("The "+J+" `"+Q+"` is marked as required "+("in `"+H+"`, but its value is `null`.")):new m("The "+J+" `"+Q+"` is marked as required in "+("`"+H+"`, but its value is `undefined`.")):null:y(X,Y,H,J,Q)}var F=q.bind(null,!1);return F.isRequired=q.bind(null,!0),F}function k(y){function C(U,q,F,W,X,Y){var H=U[q],J=$(H);if(J!==y){var Q=G(H);return new m("Invalid "+W+" `"+X+"` of type "+("`"+Q+"` supplied to `"+F+"`, expected ")+("`"+y+"`."),{expectedType:y})}return null}return h(C)}function j(){return h(i)}function E(y){function C(U,q,F,W,X){if(typeof y!="function")return new m("Property `"+X+"` of component `"+F+"` has invalid PropType notation inside arrayOf.");var Y=U[q];if(!Array.isArray(Y)){var H=$(Y);return new m("Invalid "+W+" `"+X+"` of type "+("`"+H+"` supplied to `"+F+"`, expected an array."))}for(var J=0;J<Y.length;J++){var Q=y(Y,J,F,W,X+"["+J+"]",n);if(Q instanceof Error)return Q}return null}return h(C)}function S(){function y(C,U,q,F,W){var X=C[U];if(!l(X)){var Y=$(X);return new m("Invalid "+F+" `"+W+"` of type "+("`"+Y+"` supplied to `"+q+"`, expected a single ReactElement."))}return null}return h(y)}function v(){function y(C,U,q,F,W){var X=C[U];if(!e.isValidElementType(X)){var Y=$(X);return new m("Invalid "+F+" `"+W+"` of type "+("`"+Y+"` supplied to `"+q+"`, expected a single ReactElement type."))}return null}return h(y)}function P(y){function C(U,q,F,W,X){if(!(U[q]instanceof y)){var Y=y.name||w,H=se(U[q]);return new m("Invalid "+W+" `"+X+"` of type "+("`"+H+"` supplied to `"+F+"`, expected ")+("instance of `"+Y+"`."))}return null}return h(C)}function B(y){if(!Array.isArray(y))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),i;function C(U,q,F,W,X){for(var Y=U[q],H=0;H<y.length;H++)if(x(Y,y[H]))return null;var J=JSON.stringify(y,function(ue,I){var ye=G(I);return ye==="symbol"?String(I):I});return new m("Invalid "+W+" `"+X+"` of value `"+String(Y)+"` "+("supplied to `"+F+"`, expected one of "+J+"."))}return h(C)}function T(y){function C(U,q,F,W,X){if(typeof y!="function")return new m("Property `"+X+"` of component `"+F+"` has invalid PropType notation inside objectOf.");var Y=U[q],H=$(Y);if(H!=="object")return new m("Invalid "+W+" `"+X+"` of type "+("`"+H+"` supplied to `"+F+"`, expected an object."));for(var J in Y)if(r(Y,J)){var Q=y(Y,J,F,W,X+"."+J,n);if(Q instanceof Error)return Q}return null}return h(C)}function R(y){if(!Array.isArray(y))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var C=0;C<y.length;C++){var U=y[C];if(typeof U!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+re(U)+" at index "+C+"."),i}function q(F,W,X,Y,H){for(var J=[],Q=0;Q<y.length;Q++){var ue=y[Q],I=ue(F,W,X,Y,H,n);if(I==null)return null;I.data&&r(I.data,"expectedType")&&J.push(I.data.expectedType)}var ye=J.length>0?", expected one of type ["+J.join(", ")+"]":"";return new m("Invalid "+Y+" `"+H+"` supplied to "+("`"+X+"`"+ye+"."))}return h(q)}function L(){function y(C,U,q,F,W){return z(C[U])?null:new m("Invalid "+F+" `"+W+"` supplied to "+("`"+q+"`, expected a ReactNode."))}return h(y)}function M(y,C,U,q,F){return new m((y||"React class")+": "+C+" type `"+U+"."+q+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+F+"`.")}function ee(y){function C(U,q,F,W,X){var Y=U[q],H=$(Y);if(H!=="object")return new m("Invalid "+W+" `"+X+"` of type `"+H+"` "+("supplied to `"+F+"`, expected `object`."));for(var J in y){var Q=y[J];if(typeof Q!="function")return M(F,W,X,J,G(Q));var ue=Q(Y,J,F,W,X+"."+J,n);if(ue)return ue}return null}return h(C)}function _(y){function C(U,q,F,W,X){var Y=U[q],H=$(Y);if(H!=="object")return new m("Invalid "+W+" `"+X+"` of type `"+H+"` "+("supplied to `"+F+"`, expected `object`."));var J=t({},U[q],y);for(var Q in J){var ue=y[Q];if(r(y,Q)&&typeof ue!="function")return M(F,W,X,Q,G(ue));if(!ue)return new m("Invalid "+W+" `"+X+"` key `"+Q+"` supplied to `"+F+"`.\nBad object: "+JSON.stringify(U[q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(y),null,"  "));var I=ue(Y,Q,F,W,X+"."+Q,n);if(I)return I}return null}return h(C)}function z(y){switch(typeof y){case"number":case"string":case"undefined":return!0;case"boolean":return!y;case"object":if(Array.isArray(y))return y.every(z);if(y===null||l(y))return!0;var C=f(y);if(C){var U=C.call(y),q;if(C!==y.entries){for(;!(q=U.next()).done;)if(!z(q.value))return!1}else for(;!(q=U.next()).done;){var F=q.value;if(F&&!z(F[1]))return!1}}else return!1;return!0;default:return!1}}function A(y,C){return y==="symbol"?!0:C?C["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&C instanceof Symbol:!1}function $(y){var C=typeof y;return Array.isArray(y)?"array":y instanceof RegExp?"object":A(C,y)?"symbol":C}function G(y){if(typeof y>"u"||y===null)return""+y;var C=$(y);if(C==="object"){if(y instanceof Date)return"date";if(y instanceof RegExp)return"regexp"}return C}function re(y){var C=G(y);switch(C){case"array":case"object":return"an "+C;case"boolean":case"date":case"regexp":return"a "+C;default:return C}}function se(y){return!y.constructor||!y.constructor.name?w:y.constructor.name}return g.checkPropTypes=o,g.resetWarningCache=o.resetWarningCache,g.PropTypes=g,g},Vr}var Fr,Ea;function dd(){if(Ea)return Fr;Ea=1;var e=Io();function t(){}function n(){}return n.resetWarningCache=t,Fr=function(){function r(i,l,c,d,u,f){if(f!==e){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function o(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},Fr}if(process.env.NODE_ENV!=="production"){var ud=Zs(),pd=!0;Qr.exports=cd()(ud.isElement,pd)}else Qr.exports=dd()();var wd=Qr.exports;const p=nd(wd);function fd(e){const{prototype:t={}}=e;return!!t.isReactComponent}function ei(e,t,n,r,o){const s=e[t],i=o||t;if(s==null||typeof window>"u")return null;let l;const c=s.type;return typeof c=="function"&&!fd(c)&&(l="Did you accidentally use a plain function component for an element instead?"),l!==void 0?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const Mo=Po(p.element,ei);Mo.isRequired=Po(p.element.isRequired,ei);const md="exact-prop: ​";function hd(e){return process.env.NODE_ENV==="production"?e:O({},e,{[md]:t=>{const n=Object.keys(t).filter(r=>!e.hasOwnProperty(r));return n.length>0?new Error(`The following props are not supported: ${n.map(r=>`\`${r}\``).join(", ")}. Please remove them.`):null}})}function Ft(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var eo={exports:{}},ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca;function gd(){if(Ca)return ce;Ca=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function m(h){if(typeof h=="object"&&h!==null){var k=h.$$typeof;switch(k){case e:switch(h=h.type,h){case n:case o:case r:case d:case u:return h;default:switch(h=h&&h.$$typeof,h){case l:case i:case c:case w:case f:case s:return h;default:return k}}case t:return k}}}return ce.ContextConsumer=i,ce.ContextProvider=s,ce.Element=e,ce.ForwardRef=c,ce.Fragment=n,ce.Lazy=w,ce.Memo=f,ce.Portal=t,ce.Profiler=o,ce.StrictMode=r,ce.Suspense=d,ce.SuspenseList=u,ce.isAsyncMode=function(){return!1},ce.isConcurrentMode=function(){return!1},ce.isContextConsumer=function(h){return m(h)===i},ce.isContextProvider=function(h){return m(h)===s},ce.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===e},ce.isForwardRef=function(h){return m(h)===c},ce.isFragment=function(h){return m(h)===n},ce.isLazy=function(h){return m(h)===w},ce.isMemo=function(h){return m(h)===f},ce.isPortal=function(h){return m(h)===t},ce.isProfiler=function(h){return m(h)===o},ce.isStrictMode=function(h){return m(h)===r},ce.isSuspense=function(h){return m(h)===d},ce.isSuspenseList=function(h){return m(h)===u},ce.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===o||h===r||h===d||h===u||h===g||typeof h=="object"&&h!==null&&(h.$$typeof===w||h.$$typeof===f||h.$$typeof===s||h.$$typeof===i||h.$$typeof===c||h.$$typeof===x||h.getModuleId!==void 0)},ce.typeOf=m,ce}var de={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta;function bd(){return Ta||(Ta=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),x=!1,m=!1,h=!1,k=!1,j=!1,E;E=Symbol.for("react.module.reference");function S(V){return!!(typeof V=="string"||typeof V=="function"||V===n||V===o||j||V===r||V===d||V===u||k||V===g||x||m||h||typeof V=="object"&&V!==null&&(V.$$typeof===w||V.$$typeof===f||V.$$typeof===s||V.$$typeof===i||V.$$typeof===c||V.$$typeof===E||V.getModuleId!==void 0))}function v(V){if(typeof V=="object"&&V!==null){var ve=V.$$typeof;switch(ve){case e:var Ue=V.type;switch(Ue){case n:case o:case r:case d:case u:return Ue;default:var ut=Ue&&Ue.$$typeof;switch(ut){case l:case i:case c:case w:case f:case s:return ut;default:return ve}}case t:return ve}}}var P=i,B=s,T=e,R=c,L=n,M=w,ee=f,_=t,z=o,A=r,$=d,G=u,re=!1,se=!1;function y(V){return re||(re=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function C(V){return se||(se=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function U(V){return v(V)===i}function q(V){return v(V)===s}function F(V){return typeof V=="object"&&V!==null&&V.$$typeof===e}function W(V){return v(V)===c}function X(V){return v(V)===n}function Y(V){return v(V)===w}function H(V){return v(V)===f}function J(V){return v(V)===t}function Q(V){return v(V)===o}function ue(V){return v(V)===r}function I(V){return v(V)===d}function ye(V){return v(V)===u}de.ContextConsumer=P,de.ContextProvider=B,de.Element=T,de.ForwardRef=R,de.Fragment=L,de.Lazy=M,de.Memo=ee,de.Portal=_,de.Profiler=z,de.StrictMode=A,de.Suspense=$,de.SuspenseList=G,de.isAsyncMode=y,de.isConcurrentMode=C,de.isContextConsumer=U,de.isContextProvider=q,de.isElement=F,de.isForwardRef=W,de.isFragment=X,de.isLazy=Y,de.isMemo=H,de.isPortal=J,de.isProfiler=Q,de.isStrictMode=ue,de.isSuspense=I,de.isSuspenseList=ye,de.isValidElementType=S,de.typeOf=v}()),de}process.env.NODE_ENV==="production"?eo.exports=gd():eo.exports=bd();var Oa=eo.exports;const vd=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function xd(e){const t=`${e}`.match(vd);return t&&t[1]||""}function ti(e,t=""){return e.displayName||e.name||xd(e)||t}function Ra(e,t,n){const r=ti(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function yd(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return ti(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Oa.ForwardRef:return Ra(e,e.render,"ForwardRef");case Oa.Memo:return Ra(e,e.type,"memo");default:return}}}function vn(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=e[t],i=o||t;return s==null?null:s&&s.nodeType!==1?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an HTMLElement.`):null}const ni=p.oneOfType([p.func,p.object]);function We(e){if(typeof e!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Ft(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Nd(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function kd(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function Sd(e,t){return process.env.NODE_ENV==="production"?()=>null:(n,r,o,s,i)=>{const l=o||"<<anonymous>>",c=i||r;return typeof n[r]<"u"?new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`):null}}function jd(e,t){var n,r;return D.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Kn(e){return e&&e.ownerDocument||document}function Ed(e){return Kn(e).defaultView||window}function Cd(e,t){if(process.env.NODE_ENV==="production")return()=>null;const n=t?O({},t.propTypes):null;return o=>(s,i,l,c,d,...u)=>{const f=d||i,w=n==null?void 0:n[f];if(w){const g=w(s,i,l,c,d,...u);if(g)return g}return typeof s[i]<"u"&&!s[o]?new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${o}\` prop.`):null}}function Jn(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Lt=typeof window<"u"?D.useLayoutEffect:D.useEffect;let _a=0;function Td(e){const[t,n]=D.useState(e),r=e||t;return D.useEffect(()=>{t==null&&(_a+=1,n(`mui-${_a}`))},[t]),r}const Pa=D.useId;function ri(e){if(Pa!==void 0){const t=Pa();return e??t}return Td(e)}function Od(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=o||t;return typeof e[t]<"u"?new Error(`The prop \`${s}\` is not supported. Please remove it.`):null}function oi({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=D.useRef(e!==void 0),[s,i]=D.useState(t),l=o?e:s;if(process.env.NODE_ENV!=="production"){D.useEffect(()=>{o!==(e!==void 0)&&console.error([`MUI: A component is changing the ${o?"":"un"}controlled ${r} state of ${n} to be ${o?"un":""}controlled.`,"Elements should not switch from uncontrolled to controlled (or vice versa).",`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.","More info: https://fb.me/react-controlled-components"].join(`
`))},[r,n,e]);const{current:d}=D.useRef(t);D.useEffect(()=>{!o&&d!==t&&console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`))},[JSON.stringify(t)])}const c=D.useCallback(d=>{o||i(d)},[]);return[l,c]}function to(e){const t=D.useRef(e);return Lt(()=>{t.current=e}),D.useRef((...n)=>(0,t.current)(...n)).current}function St(...e){return D.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Jn(n,t)})},e)}const Ia={};function Rd(e,t){const n=D.useRef(Ia);return n.current===Ia&&(n.current=e(t)),n}const _d=[];function Pd(e){D.useEffect(e,_d)}class Rn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Rn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function dn(){const e=Rd(Rn.create).current;return Pd(e.disposeEffect),e}let wr=!0,no=!1;const Id=new Rn,Md={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function $d(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Md[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Dd(e){e.metaKey||e.altKey||e.ctrlKey||(wr=!0)}function Lr(){wr=!1}function Ad(){this.visibilityState==="hidden"&&no&&(wr=!0)}function Bd(e){e.addEventListener("keydown",Dd,!0),e.addEventListener("mousedown",Lr,!0),e.addEventListener("pointerdown",Lr,!0),e.addEventListener("touchstart",Lr,!0),e.addEventListener("visibilitychange",Ad,!0)}function zd(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return wr||$d(t)}function ai(){const e=D.useCallback(o=>{o!=null&&Bd(o.ownerDocument)},[]),t=D.useRef(!1);function n(){return t.current?(no=!0,Id.start(100,()=>{no=!1}),t.current=!1,!0):!1}function r(o){return zd(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function si(e,t){const n=O({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=O({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},s=t[r];n[r]={},!s||!Object.keys(s)?n[r]=o:!o||!Object.keys(o)?n[r]=s:(n[r]=O({},s),Object.keys(o).forEach(i=>{n[r][i]=si(o[i],s[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function $o(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((s,i)=>{if(i){const l=t(i);l!==""&&s.push(l),n&&n[i]&&s.push(n[i])}return s},[]).join(" ")}),r}const Ma=e=>e,Vd=()=>{let e=Ma;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ma}}},ii=Vd(),li={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function fr(e,t,n="Mui"){const r=li[t];return r?`${n}-${r}`:`${ii.generate(e)}-${t}`}function ci(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=fr(e,o,n)}),r}function Fd(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function Ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Ld=["values","unit","step"],Gd=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>O({},n,{[r.key]:r.val}),{})};function Ud(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Ne(e,Ld),s=Gd(t),i=Object.keys(s);function l(w){return`@media (min-width:${typeof t[w]=="number"?t[w]:w}${n})`}function c(w){return`@media (max-width:${(typeof t[w]=="number"?t[w]:w)-r/100}${n})`}function d(w,g){const x=i.indexOf(g);return`@media (min-width:${typeof t[w]=="number"?t[w]:w}${n}) and (max-width:${(x!==-1&&typeof t[i[x]]=="number"?t[i[x]]:g)-r/100}${n})`}function u(w){return i.indexOf(w)+1<i.length?d(w,i[i.indexOf(w)+1]):l(w)}function f(w){const g=i.indexOf(w);return g===0?l(i[1]):g===i.length-1?c(i[g]):d(w,i[i.indexOf(w)+1]).replace("@media","@media not all and")}return O({keys:i,values:s,up:l,down:c,between:d,only:u,not:f,unit:n},o)}const qd={borderRadius:4},ct=process.env.NODE_ENV!=="production"?p.oneOfType([p.number,p.string,p.object,p.array]):{};function fn(e,t){return t?et(e,t,{clone:!1}):e}const Do={xs:0,sm:600,md:900,lg:1200,xl:1536},$a={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Do[e]}px)`};function tt(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||$a;return t.reduce((i,l,c)=>(i[s.up(s.keys[c])]=n(t[c]),i),{})}if(typeof t=="object"){const s=r.breakpoints||$a;return Object.keys(t).reduce((i,l)=>{if(Object.keys(s.values||Do).indexOf(l)!==-1){const c=s.up(l);i[c]=n(t[l],l)}else{const c=l;i[c]=t[c]}return i},{})}return n(t)}function Hd(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const s=e.up(o);return r[s]={},r},{}))||{}}function Xd(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function mr(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,s)=>o&&o[s]?o[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Zn(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=mr(e,n)||r,t&&(o=t(o,r,e)),o}function be(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,s=i=>{if(i[t]==null)return null;const l=i[t],c=i.theme,d=mr(c,r)||{};return tt(i,l,f=>{let w=Zn(d,o,f);return f===w&&typeof f=="string"&&(w=Zn(d,o,`${t}${f==="default"?"":We(f)}`,f)),n===!1?w:{[n]:w}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[t]:ct}:{},s.filterProps=[t],s}function Yd(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const Wd={m:"margin",p:"padding"},Kd={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Da={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Jd=Yd(e=>{if(e.length>2)if(Da[e])e=Da[e];else return[e];const[t,n]=e.split(""),r=Wd[t],o=Kd[n]||"";return Array.isArray(o)?o.map(s=>r+s):[r+o]}),hr=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],gr=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Zd=[...hr,...gr];function _n(e,t,n,r){var o;const s=(o=mr(e,t,!1))!=null?o:n;return typeof s=="number"?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&typeof i!="number"&&console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`),s*i):Array.isArray(s)?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&(Number.isInteger(i)?i>s.length-1&&console.error([`MUI: The value provided (${i}) overflows.`,`The supported values are: ${JSON.stringify(s)}.`,`${i} > ${s.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))),s[i]):typeof s=="function"?s:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function di(e){return _n(e,"spacing",8,"spacing")}function Pn(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Qd(e,t){return n=>e.reduce((r,o)=>(r[o]=Pn(t,n),r),{})}function eu(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=Jd(n),s=Qd(o,r),i=e[n];return tt(e,i,s)}function ui(e,t){const n=di(e.theme);return Object.keys(e).map(r=>eu(e,t,r,n)).reduce(fn,{})}function me(e){return ui(e,hr)}me.propTypes=process.env.NODE_ENV!=="production"?hr.reduce((e,t)=>(e[t]=ct,e),{}):{};me.filterProps=hr;function he(e){return ui(e,gr)}he.propTypes=process.env.NODE_ENV!=="production"?gr.reduce((e,t)=>(e[t]=ct,e),{}):{};he.filterProps=gr;process.env.NODE_ENV!=="production"&&Zd.reduce((e,t)=>(e[t]=ct,e),{});function tu(e=8){if(e.mui)return e;const t=di({spacing:e}),n=(...r)=>(process.env.NODE_ENV!=="production"&&(r.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)),(r.length===0?[1]:r).map(s=>{const i=t(s);return typeof i=="number"?`${i}px`:i}).join(" "));return n.mui=!0,n}function br(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(s=>{r[s]=o}),r),{}),n=r=>Object.keys(r).reduce((o,s)=>t[s]?fn(o,t[s](r)):o,{});return n.propTypes=process.env.NODE_ENV!=="production"?e.reduce((r,o)=>Object.assign(r,o.propTypes),{}):{},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function ze(e){return typeof e!="number"?e:`${e}px solid`}function Ge(e,t){return be({prop:e,themeKey:"borders",transform:t})}const nu=Ge("border",ze),ru=Ge("borderTop",ze),ou=Ge("borderRight",ze),au=Ge("borderBottom",ze),su=Ge("borderLeft",ze),iu=Ge("borderColor"),lu=Ge("borderTopColor"),cu=Ge("borderRightColor"),du=Ge("borderBottomColor"),uu=Ge("borderLeftColor"),pu=Ge("outline",ze),wu=Ge("outlineColor"),vr=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=_n(e.theme,"shape.borderRadius",4,"borderRadius"),n=r=>({borderRadius:Pn(t,r)});return tt(e,e.borderRadius,n)}return null};vr.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:ct}:{};vr.filterProps=["borderRadius"];br(nu,ru,ou,au,su,iu,lu,cu,du,uu,vr,pu,wu);const xr=e=>{if(e.gap!==void 0&&e.gap!==null){const t=_n(e.theme,"spacing",8,"gap"),n=r=>({gap:Pn(t,r)});return tt(e,e.gap,n)}return null};xr.propTypes=process.env.NODE_ENV!=="production"?{gap:ct}:{};xr.filterProps=["gap"];const yr=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=_n(e.theme,"spacing",8,"columnGap"),n=r=>({columnGap:Pn(t,r)});return tt(e,e.columnGap,n)}return null};yr.propTypes=process.env.NODE_ENV!=="production"?{columnGap:ct}:{};yr.filterProps=["columnGap"];const Nr=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=_n(e.theme,"spacing",8,"rowGap"),n=r=>({rowGap:Pn(t,r)});return tt(e,e.rowGap,n)}return null};Nr.propTypes=process.env.NODE_ENV!=="production"?{rowGap:ct}:{};Nr.filterProps=["rowGap"];const fu=be({prop:"gridColumn"}),mu=be({prop:"gridRow"}),hu=be({prop:"gridAutoFlow"}),gu=be({prop:"gridAutoColumns"}),bu=be({prop:"gridAutoRows"}),vu=be({prop:"gridTemplateColumns"}),xu=be({prop:"gridTemplateRows"}),yu=be({prop:"gridTemplateAreas"}),Nu=be({prop:"gridArea"});br(xr,yr,Nr,fu,mu,hu,gu,bu,vu,xu,yu,Nu);function zt(e,t){return t==="grey"?t:e}const ku=be({prop:"color",themeKey:"palette",transform:zt}),Su=be({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:zt}),ju=be({prop:"backgroundColor",themeKey:"palette",transform:zt});br(ku,Su,ju);function $e(e){return e<=1&&e!==0?`${e*100}%`:e}const Eu=be({prop:"width",transform:$e}),Ao=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const s=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Do[n];return s?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:$e(n)}};return tt(e,e.maxWidth,t)}return null};Ao.filterProps=["maxWidth"];const Cu=be({prop:"minWidth",transform:$e}),Tu=be({prop:"height",transform:$e}),Ou=be({prop:"maxHeight",transform:$e}),Ru=be({prop:"minHeight",transform:$e});be({prop:"size",cssProperty:"width",transform:$e});be({prop:"size",cssProperty:"height",transform:$e});const _u=be({prop:"boxSizing"});br(Eu,Ao,Cu,Tu,Ou,Ru,_u);const Bo={border:{themeKey:"borders",transform:ze},borderTop:{themeKey:"borders",transform:ze},borderRight:{themeKey:"borders",transform:ze},borderBottom:{themeKey:"borders",transform:ze},borderLeft:{themeKey:"borders",transform:ze},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ze},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:vr},color:{themeKey:"palette",transform:zt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:zt},backgroundColor:{themeKey:"palette",transform:zt},p:{style:he},pt:{style:he},pr:{style:he},pb:{style:he},pl:{style:he},px:{style:he},py:{style:he},padding:{style:he},paddingTop:{style:he},paddingRight:{style:he},paddingBottom:{style:he},paddingLeft:{style:he},paddingX:{style:he},paddingY:{style:he},paddingInline:{style:he},paddingInlineStart:{style:he},paddingInlineEnd:{style:he},paddingBlock:{style:he},paddingBlockStart:{style:he},paddingBlockEnd:{style:he},m:{style:me},mt:{style:me},mr:{style:me},mb:{style:me},ml:{style:me},mx:{style:me},my:{style:me},margin:{style:me},marginTop:{style:me},marginRight:{style:me},marginBottom:{style:me},marginLeft:{style:me},marginX:{style:me},marginY:{style:me},marginInline:{style:me},marginInlineStart:{style:me},marginInlineEnd:{style:me},marginBlock:{style:me},marginBlockStart:{style:me},marginBlockEnd:{style:me},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:xr},rowGap:{style:Nr},columnGap:{style:yr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:$e},maxWidth:{style:Ao},minWidth:{transform:$e},height:{transform:$e},maxHeight:{transform:$e},minHeight:{transform:$e},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Pu(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Iu(e,t){return typeof e=="function"?e(t):e}function Mu(){function e(n,r,o,s){const i={[n]:r,theme:o},l=s[n];if(!l)return{[n]:r};const{cssProperty:c=n,themeKey:d,transform:u,style:f}=l;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[n]:r};const w=mr(o,d)||{};return f?f(i):tt(i,r,x=>{let m=Zn(w,u,x);return x===m&&typeof x=="string"&&(m=Zn(w,u,`${n}${x==="default"?"":We(x)}`,x)),c===!1?m:{[c]:m}})}function t(n){var r;const{sx:o,theme:s={}}=n||{};if(!o)return null;const i=(r=s.unstable_sxConfig)!=null?r:Bo;function l(c){let d=c;if(typeof c=="function")d=c(s);else if(typeof c!="object")return c;if(!d)return null;const u=Hd(s.breakpoints),f=Object.keys(u);let w=u;return Object.keys(d).forEach(g=>{const x=Iu(d[g],s);if(x!=null)if(typeof x=="object")if(i[g])w=fn(w,e(g,x,s,i));else{const m=tt({theme:s},x,h=>({[g]:h}));Pu(m,x)?w[g]=t({sx:x,theme:s}):w=fn(w,m)}else w=fn(w,e(g,x,s,i))}),Xd(f,w)}return Array.isArray(o)?o.map(l):l(o)}return t}const kr=Mu();kr.filterProps=["sx"];function $u(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Du=["breakpoints","palette","spacing","shape"];function zo(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:s={}}=e,i=Ne(e,Du),l=Ud(n),c=tu(o);let d=et({breakpoints:l,direction:"ltr",components:{},palette:O({mode:"light"},r),spacing:c,shape:O({},qd,s)},i);return d.applyStyles=$u,d=t.reduce((u,f)=>et(u,f),d),d.unstable_sxConfig=O({},Bo,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(f){return kr({sx:f,theme:this})},d}function Au(e){return Object.keys(e).length===0}function pi(e=null){const t=D.useContext(Hr.ThemeContext);return!t||Au(t)?e:t}const Bu=zo();function wi(e=Bu){return pi(e)}const zu=["ownerState"],Vu=["variants"],Fu=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Lu(e){return Object.keys(e).length===0}function Gu(e){return typeof e=="string"&&e.charCodeAt(0)>96}function qn(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Uu=zo(),Aa=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Fn({defaultTheme:e,theme:t,themeId:n}){return Lu(t)?e:t[n]||t}function qu(e){return e?(t,n)=>n[e]:null}function Hn(e,t){let{ownerState:n}=t,r=Ne(t,zu);const o=typeof e=="function"?e(O({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(s=>Hn(s,O({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let l=Ne(o,Vu);return s.forEach(c=>{let d=!0;typeof c.props=="function"?d=c.props(O({ownerState:n},r,n)):Object.keys(c.props).forEach(u=>{(n==null?void 0:n[u])!==c.props[u]&&r[u]!==c.props[u]&&(d=!1)}),d&&(Array.isArray(l)||(l=[l]),l.push(typeof c.style=="function"?c.style(O({ownerState:n},r,n)):c.style))}),l}return o}function Hu(e={}){const{themeId:t,defaultTheme:n=Uu,rootShouldForwardProp:r=qn,slotShouldForwardProp:o=qn}=e,s=i=>kr(O({},i,{theme:Fn(O({},i,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(i,l={})=>{Hr.internal_processStyles(i,v=>v.filter(P=>!(P!=null&&P.__mui_systemSx)));const{name:c,slot:d,skipVariantsResolver:u,skipSx:f,overridesResolver:w=qu(Aa(d))}=l,g=Ne(l,Fu),x=u!==void 0?u:d&&d!=="Root"&&d!=="root"||!1,m=f||!1;let h;process.env.NODE_ENV!=="production"&&c&&(h=`${c}-${Aa(d||"Root")}`);let k=qn;d==="Root"||d==="root"?k=r:d?k=o:Gu(i)&&(k=void 0);const j=Hr(i,O({shouldForwardProp:k,label:h},g)),E=v=>typeof v=="function"&&v.__emotion_real!==v||bt(v)?P=>Hn(v,O({},P,{theme:Fn({theme:P.theme,defaultTheme:n,themeId:t})})):v,S=(v,...P)=>{let B=E(v);const T=P?P.map(E):[];c&&w&&T.push(M=>{const ee=Fn(O({},M,{defaultTheme:n,themeId:t}));if(!ee.components||!ee.components[c]||!ee.components[c].styleOverrides)return null;const _=ee.components[c].styleOverrides,z={};return Object.entries(_).forEach(([A,$])=>{z[A]=Hn($,O({},M,{theme:ee}))}),w(M,z)}),c&&!x&&T.push(M=>{var ee;const _=Fn(O({},M,{defaultTheme:n,themeId:t})),z=_==null||(ee=_.components)==null||(ee=ee[c])==null?void 0:ee.variants;return Hn({variants:z},O({},M,{theme:_}))}),m||T.push(s);const R=T.length-P.length;if(Array.isArray(v)&&R>0){const M=new Array(R).fill("");B=[...v,...M],B.raw=[...v.raw,...M]}const L=j(B,...T);if(process.env.NODE_ENV!=="production"){let M;c&&(M=`${c}${We(d||"")}`),M===void 0&&(M=`Styled(${yd(i)})`),L.displayName=M}return i.muiName&&(L.muiName=i.muiName),L};return j.withConfig&&(S.withConfig=j.withConfig),S}}function Xu(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:si(t.components[n].defaultProps,r)}function Yu({props:e,name:t,defaultTheme:n,themeId:r}){let o=wi(n);return o=o[r]||o,Xu({theme:o,name:t,props:e})}function Vo(e,t=0,n=1){return process.env.NODE_ENV!=="production"&&(e<t||e>n)&&console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`),Fd(e,t,n)}function Wu(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function jt(e){if(e.type)return e;if(e.charAt(0)==="#")return jt(Wu(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Ft(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Ft(10,o))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:o}}function Sr(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,s)=>s<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Ku(e){e=jt(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,s=r*Math.min(o,1-o),i=(d,u=(d+n/30)%12)=>o-s*Math.max(Math.min(u-3,9-u,1),-1);let l="rgb";const c=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),Sr({type:l,values:c})}function Ba(e){e=jt(e);let t=e.type==="hsl"||e.type==="hsla"?jt(Ku(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function za(e,t){const n=Ba(e),r=Ba(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function fi(e,t){return e=jt(e),t=Vo(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Sr(e)}function Ju(e,t){if(e=jt(e),t=Vo(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Sr(e)}function Zu(e,t){if(e=jt(e),t=Vo(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Sr(e)}function Qu(e,t){return O({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const xn={black:"#000",white:"#fff"},ep={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Pt={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},It={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},on={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Mt={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},$t={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Dt={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},tp=["mode","contrastThreshold","tonalOffset"],Va={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:xn.white,default:xn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Gr={text:{primary:xn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:xn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Fa(e,t,n,r){const o=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Zu(e.main,o):t==="dark"&&(e.dark=Ju(e.main,s)))}function np(e="light"){return e==="dark"?{main:Mt[200],light:Mt[50],dark:Mt[400]}:{main:Mt[700],light:Mt[400],dark:Mt[800]}}function rp(e="light"){return e==="dark"?{main:Pt[200],light:Pt[50],dark:Pt[400]}:{main:Pt[500],light:Pt[300],dark:Pt[700]}}function op(e="light"){return e==="dark"?{main:It[500],light:It[300],dark:It[700]}:{main:It[700],light:It[400],dark:It[800]}}function ap(e="light"){return e==="dark"?{main:$t[400],light:$t[300],dark:$t[700]}:{main:$t[700],light:$t[500],dark:$t[900]}}function sp(e="light"){return e==="dark"?{main:Dt[400],light:Dt[300],dark:Dt[700]}:{main:Dt[800],light:Dt[500],dark:Dt[900]}}function ip(e="light"){return e==="dark"?{main:on[400],light:on[300],dark:on[700]}:{main:"#ed6c02",light:on[500],dark:on[900]}}function lp(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Ne(e,tp),s=e.primary||np(t),i=e.secondary||rp(t),l=e.error||op(t),c=e.info||ap(t),d=e.success||sp(t),u=e.warning||ip(t);function f(m){const h=za(m,Gr.text.primary)>=n?Gr.text.primary:Va.text.primary;if(process.env.NODE_ENV!=="production"){const k=za(m,h);k<3&&console.error([`MUI: The contrast ratio of ${k}:1 for ${h} on ${m}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return h}const w=({color:m,name:h,mainShade:k=500,lightShade:j=300,darkShade:E=700})=>{if(m=O({},m),!m.main&&m[k]&&(m.main=m[k]),!m.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${h?` (${h})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.`:Ft(11,h?` (${h})`:"",k));if(typeof m.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${h?` (${h})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Ft(12,h?` (${h})`:"",JSON.stringify(m.main)));return Fa(m,"light",j,r),Fa(m,"dark",E,r),m.contrastText||(m.contrastText=f(m.main)),m},g={dark:Gr,light:Va};return process.env.NODE_ENV!=="production"&&(g[t]||console.error(`MUI: The palette mode \`${t}\` is not supported.`)),et(O({common:O({},xn),mode:t,primary:w({color:s,name:"primary"}),secondary:w({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:l,name:"error"}),warning:w({color:u,name:"warning"}),info:w({color:c,name:"info"}),success:w({color:d,name:"success"}),grey:ep,contrastThreshold:n,getContrastText:f,augmentColor:w,tonalOffset:r},g[t]),o)}const cp=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function dp(e){return Math.round(e*1e5)/1e5}const La={textTransform:"uppercase"},Ga='"Roboto", "Helvetica", "Arial", sans-serif';function up(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Ga,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:i=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:u,pxToRem:f}=n,w=Ne(n,cp);process.env.NODE_ENV!=="production"&&(typeof o!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof d!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const g=o/14,x=f||(k=>`${k/d*g}rem`),m=(k,j,E,S,v)=>O({fontFamily:r,fontWeight:k,fontSize:x(j),lineHeight:E},r===Ga?{letterSpacing:`${dp(S/j)}em`}:{},v,u),h={h1:m(s,96,1.167,-1.5),h2:m(s,60,1.2,-.5),h3:m(i,48,1.167,0),h4:m(i,34,1.235,.25),h5:m(i,24,1.334,0),h6:m(l,20,1.6,.15),subtitle1:m(i,16,1.75,.15),subtitle2:m(l,14,1.57,.1),body1:m(i,16,1.5,.15),body2:m(i,14,1.43,.15),button:m(l,14,1.75,.4,La),caption:m(i,12,1.66,.4),overline:m(i,12,2.66,1,La),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return et(O({htmlFontSize:d,pxToRem:x,fontFamily:r,fontSize:o,fontWeightLight:s,fontWeightRegular:i,fontWeightMedium:l,fontWeightBold:c},h),w,{clone:!1})}const pp=.2,wp=.14,fp=.12;function fe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pp})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wp})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fp})`].join(",")}const mp=["none",fe(0,2,1,-1,0,1,1,0,0,1,3,0),fe(0,3,1,-2,0,2,2,0,0,1,5,0),fe(0,3,3,-2,0,3,4,0,0,1,8,0),fe(0,2,4,-1,0,4,5,0,0,1,10,0),fe(0,3,5,-1,0,5,8,0,0,1,14,0),fe(0,3,5,-1,0,6,10,0,0,1,18,0),fe(0,4,5,-2,0,7,10,1,0,2,16,1),fe(0,5,5,-3,0,8,10,1,0,3,14,2),fe(0,5,6,-3,0,9,12,1,0,3,16,2),fe(0,6,6,-3,0,10,14,1,0,4,18,3),fe(0,6,7,-4,0,11,15,1,0,4,20,3),fe(0,7,8,-4,0,12,17,2,0,5,22,4),fe(0,7,8,-4,0,13,19,2,0,5,24,4),fe(0,7,9,-4,0,14,21,2,0,5,26,4),fe(0,8,9,-5,0,15,22,2,0,6,28,5),fe(0,8,10,-5,0,16,24,2,0,6,30,5),fe(0,8,11,-5,0,17,26,2,0,6,32,5),fe(0,9,11,-5,0,18,28,2,0,7,34,6),fe(0,9,12,-6,0,19,29,2,0,7,36,6),fe(0,10,13,-6,0,20,31,3,0,8,38,7),fe(0,10,13,-6,0,21,33,3,0,8,40,7),fe(0,10,14,-6,0,22,35,3,0,8,42,7),fe(0,11,14,-7,0,23,36,3,0,9,44,8),fe(0,11,15,-7,0,24,38,3,0,9,46,8)],hp=["duration","easing","delay"],gp={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},bp={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ua(e){return`${Math.round(e)}ms`}function vp(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function xp(e){const t=O({},gp,e.easing),n=O({},bp,e.duration);return O({getAutoHeightDuration:vp,create:(o=["all"],s={})=>{const{duration:i=n.standard,easing:l=t.easeInOut,delay:c=0}=s,d=Ne(s,hp);if(process.env.NODE_ENV!=="production"){const u=w=>typeof w=="string",f=w=>!isNaN(parseFloat(w));!u(o)&&!Array.isArray(o)&&console.error('MUI: Argument "props" must be a string or Array.'),!f(i)&&!u(i)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`),u(l)||console.error('MUI: Argument "easing" must be a string.'),!f(c)&&!u(c)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(d).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`)}return(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof i=="string"?i:Ua(i)} ${l} ${typeof c=="string"?c:Ua(c)}`).join(",")}},e,{easing:t,duration:n})}const yp={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Np=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function kp(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:s={}}=e,i=Ne(e,Np);if(e.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Ft(18));const l=lp(r),c=zo(e);let d=et(c,{mixins:Qu(c.breakpoints,n),palette:l,shadows:mp.slice(),typography:up(l,s),transitions:xp(o),zIndex:O({},yp)});if(d=et(d,i),d=t.reduce((u,f)=>et(u,f),d),process.env.NODE_ENV!=="production"){const u=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],f=(w,g)=>{let x;for(x in w){const m=w[x];if(u.indexOf(x)!==-1&&Object.keys(m).length>0){if(process.env.NODE_ENV!=="production"){const h=fr("",x);console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${x}\` internal state.`,"You can not override it like this: ",JSON.stringify(w,null,2),"",`Instead, you need to use the '&.${h}' syntax:`,JSON.stringify({root:{[`&.${h}`]:m}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}w[x]={}}}};Object.keys(d.components).forEach(w=>{const g=d.components[w].styleOverrides;g&&w.indexOf("Mui")===0&&f(g,w)})}return d.unstable_sxConfig=O({},Bo,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(f){return kr({sx:f,theme:this})},d}const Fo=kp(),Lo="$$material";function Go({props:e,name:t}){return Yu({props:e,name:t,defaultTheme:Fo,themeId:Lo})}const Sp=e=>qn(e)&&e!=="classes",In=Hu({themeId:Lo,defaultTheme:Fo,rootShouldForwardProp:Sp});function jp(e){return fr("MuiSvgIcon",e)}ci("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ep=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Cp=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${We(t)}`,`fontSize${We(n)}`]};return $o(o,jp,r)},Tp=In("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${We(n.color)}`],t[`fontSize${We(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,s,i,l,c,d,u,f,w,g,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(i=s.pxToRem)==null?void 0:i.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((d=e.typography)==null||(u=d.pxToRem)==null?void 0:u.call(d,35))||"2.1875rem"}[t.fontSize],color:(f=(w=(e.vars||e).palette)==null||(w=w[t.color])==null?void 0:w.main)!=null?f:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(x=(e.vars||e).palette)==null||(x=x.action)==null?void 0:x.disabled,inherit:void 0}[t.color]}}),Qn=D.forwardRef(function(t,n){const r=Go({props:t,name:"MuiSvgIcon"}),{children:o,className:s,color:i="inherit",component:l="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:u=!1,titleAccess:f,viewBox:w="0 0 24 24"}=r,g=Ne(r,Ep),x=D.isValidElement(o)&&o.type==="svg",m=O({},r,{color:i,component:l,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:w,hasSvgAsChild:x}),h={};u||(h.viewBox=w);const k=Cp(m);return a.jsxs(Tp,O({as:l,className:at(k.root,s),focusable:"false",color:d,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},h,g,x&&o.props,{ownerState:m,children:[x?o.props.children:o,f?a.jsx("title",{children:f}):null]}))});process.env.NODE_ENV!=="production"&&(Qn.propTypes={children:p.node,classes:p.object,className:p.string,color:p.oneOfType([p.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),p.string]),component:p.elementType,fontSize:p.oneOfType([p.oneOf(["inherit","large","medium","small"]),p.string]),htmlColor:p.string,inheritViewBox:p.bool,shapeRendering:p.string,sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),titleAccess:p.string,viewBox:p.string});Qn.muiName="SvgIcon";function mi(e,t){function n(r,o){return a.jsx(Qn,O({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return process.env.NODE_ENV!=="production"&&(n.displayName=`${t}Icon`),n.muiName=Qn.muiName,D.memo(D.forwardRef(n))}const Op={configure:e=>{process.env.NODE_ENV!=="production"&&console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),ii.configure(e)}},Rp=Object.freeze(Object.defineProperty({__proto__:null,capitalize:We,createChainedFunction:Nd,createSvgIcon:mi,debounce:kd,deprecatedPropType:Sd,isMuiElement:jd,ownerDocument:Kn,ownerWindow:Ed,requirePropFactory:Cd,setRef:Jn,unstable_ClassNameGenerator:Op,unstable_useEnhancedEffect:Lt,unstable_useId:ri,unsupportedProp:Od,useControlled:oi,useEventCallback:to,useForkRef:St,useIsFocusVisible:ai},Symbol.toStringTag,{value:"Module"})),_p=rd(Rp);var qa;function Pp(){return qa||(qa=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=_p}($r)),$r}var Ip=od;Object.defineProperty(_o,"__esModule",{value:!0});var hi=_o.default=void 0,Mp=Ip(Pp()),$p=a;hi=_o.default=(0,Mp.default)((0,$p.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");function Dp(e){return typeof e=="string"}function un(e,t,n){return e===void 0||Dp(e)?t:O({},t,{ownerState:O({},t.ownerState,n)})}const Ap={disableDefaultClasses:!1},Bp=D.createContext(Ap);function zp(e){const{disableDefaultClasses:t}=D.useContext(Bp);return n=>t?"":e(n)}function Vp(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Fp(e,t,n){return typeof e=="function"?e(t,n):e}function Ha(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Lp(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:s}=e;if(!t){const g=at(n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),x=O({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),m=O({},n,o,r);return g.length>0&&(m.className=g),Object.keys(x).length>0&&(m.style=x),{props:m,internalRef:void 0}}const i=Vp(O({},o,r)),l=Ha(r),c=Ha(o),d=t(i),u=at(d==null?void 0:d.className,n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),f=O({},d==null?void 0:d.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),w=O({},d,n,c,l);return u.length>0&&(w.className=u),Object.keys(f).length>0&&(w.style=f),{props:w,internalRef:d.ref}}const Gp=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Up(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:s=!1}=e,i=Ne(e,Gp),l=s?{}:Fp(r,o),{props:c,internalRef:d}=Lp(O({},i,{externalSlotProps:l})),u=St(d,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return un(n,O({},c,{ref:u}),o)}const gi="base";function qp(e){return`${gi}--${e}`}function Hp(e,t){return`${gi}-${e}-${t}`}function Xp(e,t){const n=li[t];return n?qp(n):Hp(e,t)}function Yp(e){return typeof e=="function"?e():e}const er=D.forwardRef(function(t,n){const{children:r,container:o,disablePortal:s=!1}=t,[i,l]=D.useState(null),c=St(D.isValidElement(r)?r.ref:null,n);if(Lt(()=>{s||l(Yp(o)||document.body)},[o,s]),Lt(()=>{if(i&&!s)return Jn(n,i),()=>{Jn(n,null)}},[n,i,s]),s){if(D.isValidElement(r)){const d={ref:c};return D.cloneElement(r,d)}return a.jsx(D.Fragment,{children:r})}return a.jsx(D.Fragment,{children:i&&Cl.createPortal(r,i)})});process.env.NODE_ENV!=="production"&&(er.propTypes={children:p.node,container:p.oneOfType([vn,p.func]),disablePortal:p.bool});process.env.NODE_ENV!=="production"&&(er.propTypes=hd(er.propTypes));var Te="top",Fe="bottom",Le="right",Oe="left",Uo="auto",Mn=[Te,Fe,Le,Oe],Gt="start",yn="end",Wp="clippingParents",bi="viewport",an="popper",Kp="reference",Xa=Mn.reduce(function(e,t){return e.concat([t+"-"+Gt,t+"-"+yn])},[]),vi=[].concat(Mn,[Uo]).reduce(function(e,t){return e.concat([t,t+"-"+Gt,t+"-"+yn])},[]),Jp="beforeRead",Zp="read",Qp="afterRead",ew="beforeMain",tw="main",nw="afterMain",rw="beforeWrite",ow="write",aw="afterWrite",sw=[Jp,Zp,Qp,ew,tw,nw,rw,ow,aw];function Ke(e){return e?(e.nodeName||"").toLowerCase():null}function Ae(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Et(e){var t=Ae(e).Element;return e instanceof t||e instanceof Element}function Ve(e){var t=Ae(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function qo(e){if(typeof ShadowRoot>"u")return!1;var t=Ae(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function iw(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},s=t.elements[n];!Ve(s)||!Ke(s)||(Object.assign(s.style,r),Object.keys(o).forEach(function(i){var l=o[i];l===!1?s.removeAttribute(i):s.setAttribute(i,l===!0?"":l)}))})}function lw(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],s=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),l=i.reduce(function(c,d){return c[d]="",c},{});!Ve(o)||!Ke(o)||(Object.assign(o.style,l),Object.keys(s).forEach(function(c){o.removeAttribute(c)}))})}}const cw={name:"applyStyles",enabled:!0,phase:"write",fn:iw,effect:lw,requires:["computeStyles"]};function Xe(e){return e.split("-")[0]}var vt=Math.max,tr=Math.min,Ut=Math.round;function ro(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xi(){return!/^((?!chrome|android).)*safari/i.test(ro())}function qt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,s=1;t&&Ve(e)&&(o=e.offsetWidth>0&&Ut(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Ut(r.height)/e.offsetHeight||1);var i=Et(e)?Ae(e):window,l=i.visualViewport,c=!xi()&&n,d=(r.left+(c&&l?l.offsetLeft:0))/o,u=(r.top+(c&&l?l.offsetTop:0))/s,f=r.width/o,w=r.height/s;return{width:f,height:w,top:u,right:d+f,bottom:u+w,left:d,x:d,y:u}}function Ho(e){var t=qt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function yi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&qo(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function nt(e){return Ae(e).getComputedStyle(e)}function dw(e){return["table","td","th"].indexOf(Ke(e))>=0}function dt(e){return((Et(e)?e.ownerDocument:e.document)||window.document).documentElement}function jr(e){return Ke(e)==="html"?e:e.assignedSlot||e.parentNode||(qo(e)?e.host:null)||dt(e)}function Ya(e){return!Ve(e)||nt(e).position==="fixed"?null:e.offsetParent}function uw(e){var t=/firefox/i.test(ro()),n=/Trident/i.test(ro());if(n&&Ve(e)){var r=nt(e);if(r.position==="fixed")return null}var o=jr(e);for(qo(o)&&(o=o.host);Ve(o)&&["html","body"].indexOf(Ke(o))<0;){var s=nt(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function $n(e){for(var t=Ae(e),n=Ya(e);n&&dw(n)&&nt(n).position==="static";)n=Ya(n);return n&&(Ke(n)==="html"||Ke(n)==="body"&&nt(n).position==="static")?t:n||uw(e)||t}function Xo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function mn(e,t,n){return vt(e,tr(t,n))}function pw(e,t,n){var r=mn(e,t,n);return r>n?n:r}function Ni(){return{top:0,right:0,bottom:0,left:0}}function ki(e){return Object.assign({},Ni(),e)}function Si(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var ww=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ki(typeof t!="number"?t:Si(t,Mn))};function fw(e){var t,n=e.state,r=e.name,o=e.options,s=n.elements.arrow,i=n.modifiersData.popperOffsets,l=Xe(n.placement),c=Xo(l),d=[Oe,Le].indexOf(l)>=0,u=d?"height":"width";if(!(!s||!i)){var f=ww(o.padding,n),w=Ho(s),g=c==="y"?Te:Oe,x=c==="y"?Fe:Le,m=n.rects.reference[u]+n.rects.reference[c]-i[c]-n.rects.popper[u],h=i[c]-n.rects.reference[c],k=$n(s),j=k?c==="y"?k.clientHeight||0:k.clientWidth||0:0,E=m/2-h/2,S=f[g],v=j-w[u]-f[x],P=j/2-w[u]/2+E,B=mn(S,P,v),T=c;n.modifiersData[r]=(t={},t[T]=B,t.centerOffset=B-P,t)}}function mw(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||yi(t.elements.popper,o)&&(t.elements.arrow=o))}const hw={name:"arrow",enabled:!0,phase:"main",fn:fw,effect:mw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ht(e){return e.split("-")[1]}var gw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bw(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Ut(n*o)/o||0,y:Ut(r*o)/o||0}}function Wa(e){var t,n=e.popper,r=e.popperRect,o=e.placement,s=e.variation,i=e.offsets,l=e.position,c=e.gpuAcceleration,d=e.adaptive,u=e.roundOffsets,f=e.isFixed,w=i.x,g=w===void 0?0:w,x=i.y,m=x===void 0?0:x,h=typeof u=="function"?u({x:g,y:m}):{x:g,y:m};g=h.x,m=h.y;var k=i.hasOwnProperty("x"),j=i.hasOwnProperty("y"),E=Oe,S=Te,v=window;if(d){var P=$n(n),B="clientHeight",T="clientWidth";if(P===Ae(n)&&(P=dt(n),nt(P).position!=="static"&&l==="absolute"&&(B="scrollHeight",T="scrollWidth")),P=P,o===Te||(o===Oe||o===Le)&&s===yn){S=Fe;var R=f&&P===v&&v.visualViewport?v.visualViewport.height:P[B];m-=R-r.height,m*=c?1:-1}if(o===Oe||(o===Te||o===Fe)&&s===yn){E=Le;var L=f&&P===v&&v.visualViewport?v.visualViewport.width:P[T];g-=L-r.width,g*=c?1:-1}}var M=Object.assign({position:l},d&&gw),ee=u===!0?bw({x:g,y:m},Ae(n)):{x:g,y:m};if(g=ee.x,m=ee.y,c){var _;return Object.assign({},M,(_={},_[S]=j?"0":"",_[E]=k?"0":"",_.transform=(v.devicePixelRatio||1)<=1?"translate("+g+"px, "+m+"px)":"translate3d("+g+"px, "+m+"px, 0)",_))}return Object.assign({},M,(t={},t[S]=j?m+"px":"",t[E]=k?g+"px":"",t.transform="",t))}function vw(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,s=n.adaptive,i=s===void 0?!0:s,l=n.roundOffsets,c=l===void 0?!0:l,d={placement:Xe(t.placement),variation:Ht(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Wa(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Wa(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vw,data:{}};var Ln={passive:!0};function yw(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,s=o===void 0?!0:o,i=r.resize,l=i===void 0?!0:i,c=Ae(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach(function(u){u.addEventListener("scroll",n.update,Ln)}),l&&c.addEventListener("resize",n.update,Ln),function(){s&&d.forEach(function(u){u.removeEventListener("scroll",n.update,Ln)}),l&&c.removeEventListener("resize",n.update,Ln)}}const Nw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yw,data:{}};var kw={left:"right",right:"left",bottom:"top",top:"bottom"};function Xn(e){return e.replace(/left|right|bottom|top/g,function(t){return kw[t]})}var Sw={start:"end",end:"start"};function Ka(e){return e.replace(/start|end/g,function(t){return Sw[t]})}function Yo(e){var t=Ae(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Wo(e){return qt(dt(e)).left+Yo(e).scrollLeft}function jw(e,t){var n=Ae(e),r=dt(e),o=n.visualViewport,s=r.clientWidth,i=r.clientHeight,l=0,c=0;if(o){s=o.width,i=o.height;var d=xi();(d||!d&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:s,height:i,x:l+Wo(e),y:c}}function Ew(e){var t,n=dt(e),r=Yo(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=vt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=vt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Wo(e),c=-r.scrollTop;return nt(o||n).direction==="rtl"&&(l+=vt(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:i,x:l,y:c}}function Ko(e){var t=nt(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ji(e){return["html","body","#document"].indexOf(Ke(e))>=0?e.ownerDocument.body:Ve(e)&&Ko(e)?e:ji(jr(e))}function hn(e,t){var n;t===void 0&&(t=[]);var r=ji(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=Ae(r),i=o?[s].concat(s.visualViewport||[],Ko(r)?r:[]):r,l=t.concat(i);return o?l:l.concat(hn(jr(i)))}function oo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Cw(e,t){var n=qt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ja(e,t,n){return t===bi?oo(jw(e,n)):Et(t)?Cw(t,n):oo(Ew(dt(e)))}function Tw(e){var t=hn(jr(e)),n=["absolute","fixed"].indexOf(nt(e).position)>=0,r=n&&Ve(e)?$n(e):e;return Et(r)?t.filter(function(o){return Et(o)&&yi(o,r)&&Ke(o)!=="body"}):[]}function Ow(e,t,n,r){var o=t==="clippingParents"?Tw(e):[].concat(t),s=[].concat(o,[n]),i=s[0],l=s.reduce(function(c,d){var u=Ja(e,d,r);return c.top=vt(u.top,c.top),c.right=tr(u.right,c.right),c.bottom=tr(u.bottom,c.bottom),c.left=vt(u.left,c.left),c},Ja(e,i,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Ei(e){var t=e.reference,n=e.element,r=e.placement,o=r?Xe(r):null,s=r?Ht(r):null,i=t.x+t.width/2-n.width/2,l=t.y+t.height/2-n.height/2,c;switch(o){case Te:c={x:i,y:t.y-n.height};break;case Fe:c={x:i,y:t.y+t.height};break;case Le:c={x:t.x+t.width,y:l};break;case Oe:c={x:t.x-n.width,y:l};break;default:c={x:t.x,y:t.y}}var d=o?Xo(o):null;if(d!=null){var u=d==="y"?"height":"width";switch(s){case Gt:c[d]=c[d]-(t[u]/2-n[u]/2);break;case yn:c[d]=c[d]+(t[u]/2-n[u]/2);break}}return c}function Nn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,s=n.strategy,i=s===void 0?e.strategy:s,l=n.boundary,c=l===void 0?Wp:l,d=n.rootBoundary,u=d===void 0?bi:d,f=n.elementContext,w=f===void 0?an:f,g=n.altBoundary,x=g===void 0?!1:g,m=n.padding,h=m===void 0?0:m,k=ki(typeof h!="number"?h:Si(h,Mn)),j=w===an?Kp:an,E=e.rects.popper,S=e.elements[x?j:w],v=Ow(Et(S)?S:S.contextElement||dt(e.elements.popper),c,u,i),P=qt(e.elements.reference),B=Ei({reference:P,element:E,placement:o}),T=oo(Object.assign({},E,B)),R=w===an?T:P,L={top:v.top-R.top+k.top,bottom:R.bottom-v.bottom+k.bottom,left:v.left-R.left+k.left,right:R.right-v.right+k.right},M=e.modifiersData.offset;if(w===an&&M){var ee=M[o];Object.keys(L).forEach(function(_){var z=[Le,Fe].indexOf(_)>=0?1:-1,A=[Te,Fe].indexOf(_)>=0?"y":"x";L[_]+=ee[A]*z})}return L}function Rw(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,s=n.rootBoundary,i=n.padding,l=n.flipVariations,c=n.allowedAutoPlacements,d=c===void 0?vi:c,u=Ht(r),f=u?l?Xa:Xa.filter(function(x){return Ht(x)===u}):Mn,w=f.filter(function(x){return d.indexOf(x)>=0});w.length===0&&(w=f);var g=w.reduce(function(x,m){return x[m]=Nn(e,{placement:m,boundary:o,rootBoundary:s,padding:i})[Xe(m)],x},{});return Object.keys(g).sort(function(x,m){return g[x]-g[m]})}function _w(e){if(Xe(e)===Uo)return[];var t=Xn(e);return[Ka(e),t,Ka(t)]}function Pw(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!0:i,c=n.fallbackPlacements,d=n.padding,u=n.boundary,f=n.rootBoundary,w=n.altBoundary,g=n.flipVariations,x=g===void 0?!0:g,m=n.allowedAutoPlacements,h=t.options.placement,k=Xe(h),j=k===h,E=c||(j||!x?[Xn(h)]:_w(h)),S=[h].concat(E).reduce(function(F,W){return F.concat(Xe(W)===Uo?Rw(t,{placement:W,boundary:u,rootBoundary:f,padding:d,flipVariations:x,allowedAutoPlacements:m}):W)},[]),v=t.rects.reference,P=t.rects.popper,B=new Map,T=!0,R=S[0],L=0;L<S.length;L++){var M=S[L],ee=Xe(M),_=Ht(M)===Gt,z=[Te,Fe].indexOf(ee)>=0,A=z?"width":"height",$=Nn(t,{placement:M,boundary:u,rootBoundary:f,altBoundary:w,padding:d}),G=z?_?Le:Oe:_?Fe:Te;v[A]>P[A]&&(G=Xn(G));var re=Xn(G),se=[];if(s&&se.push($[ee]<=0),l&&se.push($[G]<=0,$[re]<=0),se.every(function(F){return F})){R=M,T=!1;break}B.set(M,se)}if(T)for(var y=x?3:1,C=function(W){var X=S.find(function(Y){var H=B.get(Y);if(H)return H.slice(0,W).every(function(J){return J})});if(X)return R=X,"break"},U=y;U>0;U--){var q=C(U);if(q==="break")break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}}const Iw={name:"flip",enabled:!0,phase:"main",fn:Pw,requiresIfExists:["offset"],data:{_skip:!1}};function Za(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Qa(e){return[Te,Le,Fe,Oe].some(function(t){return e[t]>=0})}function Mw(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,s=t.modifiersData.preventOverflow,i=Nn(t,{elementContext:"reference"}),l=Nn(t,{altBoundary:!0}),c=Za(i,r),d=Za(l,o,s),u=Qa(c),f=Qa(d);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const $w={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Mw};function Dw(e,t,n){var r=Xe(e),o=[Oe,Te].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=s[0],l=s[1];return i=i||0,l=(l||0)*o,[Oe,Le].indexOf(r)>=0?{x:l,y:i}:{x:i,y:l}}function Aw(e){var t=e.state,n=e.options,r=e.name,o=n.offset,s=o===void 0?[0,0]:o,i=vi.reduce(function(u,f){return u[f]=Dw(f,t.rects,s),u},{}),l=i[t.placement],c=l.x,d=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=i}const Bw={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Aw};function zw(e){var t=e.state,n=e.name;t.modifiersData[n]=Ei({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Vw={name:"popperOffsets",enabled:!0,phase:"read",fn:zw,data:{}};function Fw(e){return e==="x"?"y":"x"}function Lw(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!1:i,c=n.boundary,d=n.rootBoundary,u=n.altBoundary,f=n.padding,w=n.tether,g=w===void 0?!0:w,x=n.tetherOffset,m=x===void 0?0:x,h=Nn(t,{boundary:c,rootBoundary:d,padding:f,altBoundary:u}),k=Xe(t.placement),j=Ht(t.placement),E=!j,S=Xo(k),v=Fw(S),P=t.modifiersData.popperOffsets,B=t.rects.reference,T=t.rects.popper,R=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,L=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ee={x:0,y:0};if(P){if(s){var _,z=S==="y"?Te:Oe,A=S==="y"?Fe:Le,$=S==="y"?"height":"width",G=P[S],re=G+h[z],se=G-h[A],y=g?-T[$]/2:0,C=j===Gt?B[$]:T[$],U=j===Gt?-T[$]:-B[$],q=t.elements.arrow,F=g&&q?Ho(q):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ni(),X=W[z],Y=W[A],H=mn(0,B[$],F[$]),J=E?B[$]/2-y-H-X-L.mainAxis:C-H-X-L.mainAxis,Q=E?-B[$]/2+y+H+Y+L.mainAxis:U+H+Y+L.mainAxis,ue=t.elements.arrow&&$n(t.elements.arrow),I=ue?S==="y"?ue.clientTop||0:ue.clientLeft||0:0,ye=(_=M==null?void 0:M[S])!=null?_:0,V=G+J-ye-I,ve=G+Q-ye,Ue=mn(g?tr(re,V):re,G,g?vt(se,ve):se);P[S]=Ue,ee[S]=Ue-G}if(l){var ut,je=S==="x"?Te:Oe,Dn=S==="x"?Fe:Le,qe=P[v],Tt=v==="y"?"height":"width",pt=qe+h[je],Ot=qe-h[Dn],Rt=[Te,Oe].indexOf(k)!==-1,_t=(ut=M==null?void 0:M[v])!=null?ut:0,wt=Rt?pt:qe-B[Tt]-T[Tt]-_t+L.altAxis,Jt=Rt?qe+B[Tt]+T[Tt]-_t-L.altAxis:Ot,An=g&&Rt?pw(wt,qe,Jt):mn(g?wt:pt,qe,g?Jt:Ot);P[v]=An,ee[v]=An-qe}t.modifiersData[r]=ee}}const Gw={name:"preventOverflow",enabled:!0,phase:"main",fn:Lw,requiresIfExists:["offset"]};function Uw(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function qw(e){return e===Ae(e)||!Ve(e)?Yo(e):Uw(e)}function Hw(e){var t=e.getBoundingClientRect(),n=Ut(t.width)/e.offsetWidth||1,r=Ut(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Xw(e,t,n){n===void 0&&(n=!1);var r=Ve(t),o=Ve(t)&&Hw(t),s=dt(t),i=qt(e,o,n),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Ke(t)!=="body"||Ko(s))&&(l=qw(t)),Ve(t)?(c=qt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Wo(s))),{x:i.left+l.scrollLeft-c.x,y:i.top+l.scrollTop-c.y,width:i.width,height:i.height}}function Yw(e){var t=new Map,n=new Set,r=[];e.forEach(function(s){t.set(s.name,s)});function o(s){n.add(s.name);var i=[].concat(s.requires||[],s.requiresIfExists||[]);i.forEach(function(l){if(!n.has(l)){var c=t.get(l);c&&o(c)}}),r.push(s)}return e.forEach(function(s){n.has(s.name)||o(s)}),r}function Ww(e){var t=Yw(e);return sw.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Kw(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Jw(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var es={placement:"bottom",modifiers:[],strategy:"absolute"};function ts(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Zw(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,s=o===void 0?es:o;return function(l,c,d){d===void 0&&(d=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},es,s),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},f=[],w=!1,g={state:u,setOptions:function(k){var j=typeof k=="function"?k(u.options):k;m(),u.options=Object.assign({},s,u.options,j),u.scrollParents={reference:Et(l)?hn(l):l.contextElement?hn(l.contextElement):[],popper:hn(c)};var E=Ww(Jw([].concat(r,u.options.modifiers)));return u.orderedModifiers=E.filter(function(S){return S.enabled}),x(),g.update()},forceUpdate:function(){if(!w){var k=u.elements,j=k.reference,E=k.popper;if(ts(j,E)){u.rects={reference:Xw(j,$n(E),u.options.strategy==="fixed"),popper:Ho(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(L){return u.modifiersData[L.name]=Object.assign({},L.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var v=u.orderedModifiers[S],P=v.fn,B=v.options,T=B===void 0?{}:B,R=v.name;typeof P=="function"&&(u=P({state:u,options:T,name:R,instance:g})||u)}}}},update:Kw(function(){return new Promise(function(h){g.forceUpdate(),h(u)})}),destroy:function(){m(),w=!0}};if(!ts(l,c))return g;g.setOptions(d).then(function(h){!w&&d.onFirstUpdate&&d.onFirstUpdate(h)});function x(){u.orderedModifiers.forEach(function(h){var k=h.name,j=h.options,E=j===void 0?{}:j,S=h.effect;if(typeof S=="function"){var v=S({state:u,name:k,instance:g,options:E}),P=function(){};f.push(v||P)}})}function m(){f.forEach(function(h){return h()}),f=[]}return g}}var Qw=[Nw,Vw,xw,cw,Bw,Iw,Gw,hw,$w],ef=Zw({defaultModifiers:Qw});const tf="Popper";function nf(e){return Xp(tf,e)}const rf=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],of=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function af(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function nr(e){return typeof e=="function"?e():e}function Er(e){return e.nodeType!==void 0}function sf(e){return!Er(e)}const lf=()=>$o({root:["root"]},zp(nf)),cf={},df=D.forwardRef(function(t,n){var r;const{anchorEl:o,children:s,direction:i,disablePortal:l,modifiers:c,open:d,placement:u,popperOptions:f,popperRef:w,slotProps:g={},slots:x={},TransitionProps:m}=t,h=Ne(t,rf),k=D.useRef(null),j=St(k,n),E=D.useRef(null),S=St(E,w),v=D.useRef(S);Lt(()=>{v.current=S},[S]),D.useImperativeHandle(w,()=>E.current,[]);const P=af(u,i),[B,T]=D.useState(P),[R,L]=D.useState(nr(o));D.useEffect(()=>{E.current&&E.current.forceUpdate()}),D.useEffect(()=>{o&&L(nr(o))},[o]),Lt(()=>{if(!R||!d)return;const A=re=>{T(re.placement)};if(process.env.NODE_ENV!=="production"&&R&&Er(R)&&R.nodeType===1){const re=R.getBoundingClientRect();process.env.NODE_ENV!=="test"&&re.top===0&&re.left===0&&re.right===0&&re.bottom===0&&console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}let $=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:re})=>{A(re)}}];c!=null&&($=$.concat(c)),f&&f.modifiers!=null&&($=$.concat(f.modifiers));const G=ef(R,k.current,O({placement:P},f,{modifiers:$}));return v.current(G),()=>{G.destroy(),v.current(null)}},[R,l,c,d,f,P]);const M={placement:B};m!==null&&(M.TransitionProps=m);const ee=lf(),_=(r=x.root)!=null?r:"div",z=Up({elementType:_,externalSlotProps:g.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:j},ownerState:t,className:ee.root});return a.jsx(_,O({},z,{children:typeof s=="function"?s(M):s}))}),Ci=D.forwardRef(function(t,n){const{anchorEl:r,children:o,container:s,direction:i="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:d,open:u,placement:f="bottom",popperOptions:w=cf,popperRef:g,style:x,transition:m=!1,slotProps:h={},slots:k={}}=t,j=Ne(t,of),[E,S]=D.useState(!0),v=()=>{S(!1)},P=()=>{S(!0)};if(!c&&!u&&(!m||E))return null;let B;if(s)B=s;else if(r){const L=nr(r);B=L&&Er(L)?Kn(L).body:Kn(null).body}const T=!u&&c&&(!m||E)?"none":void 0,R=m?{in:u,onEnter:v,onExited:P}:void 0;return a.jsx(er,{disablePortal:l,container:B,children:a.jsx(df,O({anchorEl:r,direction:i,disablePortal:l,modifiers:d,ref:n,open:m?!E:u,placement:f,popperOptions:w,popperRef:g,slotProps:h,slots:k},j,{style:O({position:"fixed",top:0,left:0,display:T},x),TransitionProps:R,children:o}))})});process.env.NODE_ENV!=="production"&&(Ci.propTypes={anchorEl:Po(p.oneOfType([vn,p.object,p.func]),e=>{if(e.open){const t=nr(e.anchorEl);if(t&&Er(t)&&t.nodeType===1){const n=t.getBoundingClientRect();if(process.env.NODE_ENV!=="test"&&n.top===0&&n.left===0&&n.right===0&&n.bottom===0)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else if(!t||typeof t.getBoundingClientRect!="function"||sf(t)&&t.contextElement!=null&&t.contextElement.nodeType!==1)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","It should be an HTML element instance or a virtualElement ","(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`))}return null}),children:p.oneOfType([p.node,p.func]),container:p.oneOfType([vn,p.func]),direction:p.oneOf(["ltr","rtl"]),disablePortal:p.bool,keepMounted:p.bool,modifiers:p.arrayOf(p.shape({data:p.object,effect:p.func,enabled:p.bool,fn:p.func,name:p.any,options:p.object,phase:p.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:p.arrayOf(p.string),requiresIfExists:p.arrayOf(p.string)})),open:p.bool.isRequired,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:p.shape({modifiers:p.array,onFirstUpdate:p.func,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:p.oneOf(["absolute","fixed"])}),popperRef:ni,slotProps:p.shape({root:p.oneOfType([p.func,p.object])}),slots:p.shape({root:p.elementType}),transition:p.bool});function Ti(){const e=wi(Fo);return process.env.NODE_ENV!=="production"&&D.useDebugValue(e),e[Lo]||e}function ao(e,t){return ao=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ao(e,t)}function uf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ao(e,t)}const ns={disabled:!1};var pf=process.env.NODE_ENV!=="production"?p.oneOfType([p.number,p.shape({enter:p.number,exit:p.number,appear:p.number}).isRequired]):null;process.env.NODE_ENV!=="production"&&p.oneOfType([p.string,p.shape({enter:p.string,exit:p.string,active:p.string}),p.shape({enter:p.string,enterDone:p.string,enterActive:p.string,exit:p.string,exitDone:p.string,exitActive:p.string})]);const Oi=b.createContext(null);var wf=function(t){return t.scrollTop},pn="unmounted",ht="exited",gt="entering",Bt="entered",so="exiting",rt=function(e){uf(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var i=o,l=i&&!i.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?l?(c=ht,s.appearStatus=gt):c=Bt:r.unmountOnExit||r.mountOnEnter?c=pn:c=ht,s.state={status:c},s.nextCallback=null,s}t.getDerivedStateFromProps=function(o,s){var i=o.in;return i&&s.status===pn?{status:ht}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var s=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==gt&&i!==Bt&&(s=gt):(i===gt||i===Bt)&&(s=so)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,s,i,l;return s=i=l=o,o!=null&&typeof o!="number"&&(s=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:s,enter:i,appear:l}},n.updateStatus=function(o,s){if(o===void 0&&(o=!1),s!==null)if(this.cancelNextCallback(),s===gt){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:ln.findDOMNode(this);i&&wf(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ht&&this.setState({status:pn})},n.performEnter=function(o){var s=this,i=this.props.enter,l=this.context?this.context.isMounting:o,c=this.props.nodeRef?[l]:[ln.findDOMNode(this),l],d=c[0],u=c[1],f=this.getTimeouts(),w=l?f.appear:f.enter;if(!o&&!i||ns.disabled){this.safeSetState({status:Bt},function(){s.props.onEntered(d)});return}this.props.onEnter(d,u),this.safeSetState({status:gt},function(){s.props.onEntering(d,u),s.onTransitionEnd(w,function(){s.safeSetState({status:Bt},function(){s.props.onEntered(d,u)})})})},n.performExit=function(){var o=this,s=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:ln.findDOMNode(this);if(!s||ns.disabled){this.safeSetState({status:ht},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:so},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:ht},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,s){s=this.setNextCallback(s),this.setState(o,s)},n.setNextCallback=function(o){var s=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,s.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,s){this.setNextCallback(s);var i=this.props.nodeRef?this.props.nodeRef.current:ln.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],d=c[0],u=c[1];this.props.addEndListener(d,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===pn)return null;var s=this.props,i=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=Ne(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return b.createElement(Oi.Provider,{value:null},typeof i=="function"?i(o,l):b.cloneElement(b.Children.only(i),l))},t}(b.Component);rt.contextType=Oi;rt.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:p.shape({current:typeof Element>"u"?p.any:function(e,t,n,r,o,s){var i=e[t];return p.instanceOf(i&&"ownerDocument"in i?i.ownerDocument.defaultView.Element:Element)(e,t,n,r,o,s)}}),children:p.oneOfType([p.func.isRequired,p.element.isRequired]).isRequired,in:p.bool,mountOnEnter:p.bool,unmountOnExit:p.bool,appear:p.bool,enter:p.bool,exit:p.bool,timeout:function(t){var n=pf;t.addEndListener||(n=n.isRequired);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return n.apply(void 0,[t].concat(o))},addEndListener:p.func,onEnter:p.func,onEntering:p.func,onEntered:p.func,onExit:p.func,onExiting:p.func,onExited:p.func}:{};function At(){}rt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:At,onEntering:At,onEntered:At,onExit:At,onExiting:At,onExited:At};rt.UNMOUNTED=pn;rt.EXITED=ht;rt.ENTERING=gt;rt.ENTERED=Bt;rt.EXITING=so;const ff=e=>e.scrollTop;function rs(e,t){var n,r;const{timeout:o,easing:s,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof s=="object"?s[t.mode]:s,delay:i.transitionDelay}}const mf=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function io(e){return`scale(${e}, ${e**2})`}const hf={entering:{opacity:1,transform:io(1)},entered:{opacity:1,transform:"none"}},Ur=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),rr=D.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:s,easing:i,in:l,onEnter:c,onEntered:d,onEntering:u,onExit:f,onExited:w,onExiting:g,style:x,timeout:m="auto",TransitionComponent:h=rt}=t,k=Ne(t,mf),j=dn(),E=D.useRef(),S=Ti(),v=D.useRef(null),P=St(v,s.ref,n),B=A=>$=>{if(A){const G=v.current;$===void 0?A(G):A(G,$)}},T=B(u),R=B((A,$)=>{ff(A);const{duration:G,delay:re,easing:se}=rs({style:x,timeout:m,easing:i},{mode:"enter"});let y;m==="auto"?(y=S.transitions.getAutoHeightDuration(A.clientHeight),E.current=y):y=G,A.style.transition=[S.transitions.create("opacity",{duration:y,delay:re}),S.transitions.create("transform",{duration:Ur?y:y*.666,delay:re,easing:se})].join(","),c&&c(A,$)}),L=B(d),M=B(g),ee=B(A=>{const{duration:$,delay:G,easing:re}=rs({style:x,timeout:m,easing:i},{mode:"exit"});let se;m==="auto"?(se=S.transitions.getAutoHeightDuration(A.clientHeight),E.current=se):se=$,A.style.transition=[S.transitions.create("opacity",{duration:se,delay:G}),S.transitions.create("transform",{duration:Ur?se:se*.666,delay:Ur?G:G||se*.333,easing:re})].join(","),A.style.opacity=0,A.style.transform=io(.75),f&&f(A)}),_=B(w),z=A=>{m==="auto"&&j.start(E.current||0,A),r&&r(v.current,A)};return a.jsx(h,O({appear:o,in:l,nodeRef:v,onEnter:R,onEntered:L,onEntering:T,onExit:ee,onExited:_,onExiting:M,addEndListener:z,timeout:m==="auto"?null:m},k,{children:(A,$)=>D.cloneElement(s,O({style:O({opacity:0,transform:io(.75),visibility:A==="exited"&&!l?"hidden":void 0},hf[A],x,s.props.style),ref:P},$))}))});process.env.NODE_ENV!=="production"&&(rr.propTypes={addEndListener:p.func,appear:p.bool,children:Mo.isRequired,easing:p.oneOfType([p.shape({enter:p.string,exit:p.string}),p.string]),in:p.bool,onEnter:p.func,onEntered:p.func,onEntering:p.func,onExit:p.func,onExited:p.func,onExiting:p.func,style:p.object,timeout:p.oneOfType([p.oneOf(["auto"]),p.number,p.shape({appear:p.number,enter:p.number,exit:p.number})])});rr.muiSupportAuto=!0;const gf=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],bf=In(Ci,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Jo=D.forwardRef(function(t,n){var r;const o=pi(),s=Go({props:t,name:"MuiPopper"}),{anchorEl:i,component:l,components:c,componentsProps:d,container:u,disablePortal:f,keepMounted:w,modifiers:g,open:x,placement:m,popperOptions:h,popperRef:k,transition:j,slots:E,slotProps:S}=s,v=Ne(s,gf),P=(r=E==null?void 0:E.root)!=null?r:c==null?void 0:c.Root,B=O({anchorEl:i,container:u,disablePortal:f,keepMounted:w,modifiers:g,open:x,placement:m,popperOptions:h,popperRef:k,transition:j},v);return a.jsx(bf,O({as:l,direction:o==null?void 0:o.direction,slots:{root:P},slotProps:S??d},B,{ref:n}))});process.env.NODE_ENV!=="production"&&(Jo.propTypes={anchorEl:p.oneOfType([vn,p.object,p.func]),children:p.oneOfType([p.node,p.func]),component:p.elementType,components:p.shape({Root:p.elementType}),componentsProps:p.shape({root:p.oneOfType([p.func,p.object])}),container:p.oneOfType([vn,p.func]),disablePortal:p.bool,keepMounted:p.bool,modifiers:p.arrayOf(p.shape({data:p.object,effect:p.func,enabled:p.bool,fn:p.func,name:p.any,options:p.object,phase:p.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:p.arrayOf(p.string),requiresIfExists:p.arrayOf(p.string)})),open:p.bool.isRequired,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:p.shape({modifiers:p.array,onFirstUpdate:p.func,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:p.oneOf(["absolute","fixed"])}),popperRef:ni,slotProps:p.shape({root:p.oneOfType([p.func,p.object])}),slots:p.shape({root:p.elementType}),sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),transition:p.bool});function vf(e){return fr("MuiTooltip",e)}const st=ci("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),xf=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function yf(e){return Math.round(e*1e5)/1e5}const Nf=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:s}=e,i={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${We(s.split("-")[0])}`],arrow:["arrow"]};return $o(i,vf,t)},kf=In(Jo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>O({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${st.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${st.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${st.arrow}`]:O({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${st.arrow}`]:O({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Sf=In("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${We(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>O({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:fi(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${yf(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${st.popper}[data-popper-placement*="left"] &`]:O({transformOrigin:"right center"},t.isRtl?O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):O({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${st.popper}[data-popper-placement*="right"] &`]:O({transformOrigin:"left center"},t.isRtl?O({marginRight:"14px"},t.touch&&{marginRight:"24px"}):O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${st.popper}[data-popper-placement*="top"] &`]:O({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${st.popper}[data-popper-placement*="bottom"] &`]:O({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),jf=In("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:fi(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Gn=!1;const os=new Rn;let sn={x:0,y:0};function Un(e,t){return n=>{t&&t(n),e(n)}}const Ri=D.forwardRef(function(t,n){var r,o,s,i,l,c,d,u,f,w,g,x,m,h,k,j,E,S,v;const P=Go({props:t,name:"MuiTooltip"}),{arrow:B=!1,children:T,components:R={},componentsProps:L={},describeChild:M=!1,disableFocusListener:ee=!1,disableHoverListener:_=!1,disableInteractive:z=!1,disableTouchListener:A=!1,enterDelay:$=100,enterNextDelay:G=0,enterTouchDelay:re=700,followCursor:se=!1,id:y,leaveDelay:C=0,leaveTouchDelay:U=1500,onClose:q,onOpen:F,open:W,placement:X="bottom",PopperComponent:Y,PopperProps:H={},slotProps:J={},slots:Q={},title:ue,TransitionComponent:I=rr,TransitionProps:ye}=P,V=Ne(P,xf),ve=D.isValidElement(T)?T:a.jsx("span",{children:T}),Ue=Ti(),ut=Ue.direction==="rtl",[je,Dn]=D.useState(),[qe,Tt]=D.useState(null),pt=D.useRef(!1),Ot=z||se,Rt=dn(),_t=dn(),wt=dn(),Jt=dn(),[An,Qo]=oi({controlled:W,default:!1,name:"Tooltip",state:"open"});let Je=An;if(process.env.NODE_ENV!=="production"){const{current:te}=D.useRef(W!==void 0);D.useEffect(()=>{je&&je.disabled&&!te&&ue!==""&&je.tagName.toLowerCase()==="button"&&console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.","A disabled element does not fire events.","Tooltip needs to listen to the child element's events to display the title.","","Add a simple wrapper element, such as a `span`."].join(`
`))},[ue,je,te])}const Cr=ri(y),Zt=D.useRef(),Bn=to(()=>{Zt.current!==void 0&&(document.body.style.WebkitUserSelect=Zt.current,Zt.current=void 0),Jt.clear()});D.useEffect(()=>Bn,[Bn]);const ea=te=>{os.clear(),Gn=!0,Qo(!0),F&&!Je&&F(te)},zn=to(te=>{os.start(800+C,()=>{Gn=!1}),Qo(!1),q&&Je&&q(te),Rt.start(Ue.transitions.duration.shortest,()=>{pt.current=!1})}),Tr=te=>{pt.current&&te.type!=="touchstart"||(je&&je.removeAttribute("title"),_t.clear(),wt.clear(),$||Gn&&G?_t.start(Gn?G:$,()=>{ea(te)}):ea(te))},ta=te=>{_t.clear(),wt.start(C,()=>{zn(te)})},{isFocusVisibleRef:na,onBlur:el,onFocus:tl,ref:nl}=ai(),[,ra]=D.useState(!1),oa=te=>{el(te),na.current===!1&&(ra(!1),ta(te))},aa=te=>{je||Dn(te.currentTarget),tl(te),na.current===!0&&(ra(!0),Tr(te))},sa=te=>{pt.current=!0;const Pe=ve.props;Pe.onTouchStart&&Pe.onTouchStart(te)},ia=Tr,la=ta,rl=te=>{sa(te),wt.clear(),Rt.clear(),Bn(),Zt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Jt.start(re,()=>{document.body.style.WebkitUserSelect=Zt.current,Tr(te)})},ol=te=>{ve.props.onTouchEnd&&ve.props.onTouchEnd(te),Bn(),wt.start(U,()=>{zn(te)})};D.useEffect(()=>{if(!Je)return;function te(Pe){(Pe.key==="Escape"||Pe.key==="Esc")&&zn(Pe)}return document.addEventListener("keydown",te),()=>{document.removeEventListener("keydown",te)}},[zn,Je]);const al=St(ve.ref,nl,Dn,n);!ue&&ue!==0&&(Je=!1);const Or=D.useRef(),sl=te=>{const Pe=ve.props;Pe.onMouseMove&&Pe.onMouseMove(te),sn={x:te.clientX,y:te.clientY},Or.current&&Or.current.update()},Qt={},Rr=typeof ue=="string";M?(Qt.title=!Je&&Rr&&!_?ue:null,Qt["aria-describedby"]=Je?Cr:null):(Qt["aria-label"]=Rr?ue:null,Qt["aria-labelledby"]=Je&&!Rr?Cr:null);const Be=O({},Qt,V,ve.props,{className:at(V.className,ve.props.className),onTouchStart:sa,ref:al},se?{onMouseMove:sl}:{});process.env.NODE_ENV!=="production"&&(Be["data-mui-internal-clone-element"]=!0,D.useEffect(()=>{je&&!je.getAttribute("data-mui-internal-clone-element")&&console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.","Please make sure that props are spread on the same element that the ref is applied to."].join(`
`))},[je]));const en={};A||(Be.onTouchStart=rl,Be.onTouchEnd=ol),_||(Be.onMouseOver=Un(ia,Be.onMouseOver),Be.onMouseLeave=Un(la,Be.onMouseLeave),Ot||(en.onMouseOver=ia,en.onMouseLeave=la)),ee||(Be.onFocus=Un(aa,Be.onFocus),Be.onBlur=Un(oa,Be.onBlur),Ot||(en.onFocus=aa,en.onBlur=oa)),process.env.NODE_ENV!=="production"&&ve.props.title&&console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.",`Remove this title prop \`${ve.props.title}\` or the Tooltip component.`].join(`
`));const il=D.useMemo(()=>{var te;let Pe=[{name:"arrow",enabled:!!qe,options:{element:qe,padding:4}}];return(te=H.popperOptions)!=null&&te.modifiers&&(Pe=Pe.concat(H.popperOptions.modifiers)),O({},H.popperOptions,{modifiers:Pe})},[qe,H]),tn=O({},P,{isRtl:ut,arrow:B,disableInteractive:Ot,placement:X,PopperComponentProp:Y,touch:pt.current}),_r=Nf(tn),ca=(r=(o=Q.popper)!=null?o:R.Popper)!=null?r:kf,da=(s=(i=(l=Q.transition)!=null?l:R.Transition)!=null?i:I)!=null?s:rr,ua=(c=(d=Q.tooltip)!=null?d:R.Tooltip)!=null?c:Sf,pa=(u=(f=Q.arrow)!=null?f:R.Arrow)!=null?u:jf,ll=un(ca,O({},H,(w=J.popper)!=null?w:L.popper,{className:at(_r.popper,H==null?void 0:H.className,(g=(x=J.popper)!=null?x:L.popper)==null?void 0:g.className)}),tn),cl=un(da,O({},ye,(m=J.transition)!=null?m:L.transition),tn),dl=un(ua,O({},(h=J.tooltip)!=null?h:L.tooltip,{className:at(_r.tooltip,(k=(j=J.tooltip)!=null?j:L.tooltip)==null?void 0:k.className)}),tn),ul=un(pa,O({},(E=J.arrow)!=null?E:L.arrow,{className:at(_r.arrow,(S=(v=J.arrow)!=null?v:L.arrow)==null?void 0:S.className)}),tn);return a.jsxs(D.Fragment,{children:[D.cloneElement(ve,Be),a.jsx(ca,O({as:Y??Jo,placement:X,anchorEl:se?{getBoundingClientRect:()=>({top:sn.y,left:sn.x,right:sn.x,bottom:sn.y,width:0,height:0})}:je,popperRef:Or,open:je?Je:!1,id:Cr,transition:!0},en,ll,{popperOptions:il,children:({TransitionProps:te})=>a.jsx(da,O({timeout:Ue.transitions.duration.shorter},te,cl,{children:a.jsxs(ua,O({},dl,{children:[ue,B?a.jsx(pa,O({},ul,{ref:Tt})):null]}))}))}))]})});process.env.NODE_ENV!=="production"&&(Ri.propTypes={arrow:p.bool,children:Mo.isRequired,classes:p.object,className:p.string,components:p.shape({Arrow:p.elementType,Popper:p.elementType,Tooltip:p.elementType,Transition:p.elementType}),componentsProps:p.shape({arrow:p.object,popper:p.object,tooltip:p.object,transition:p.object}),describeChild:p.bool,disableFocusListener:p.bool,disableHoverListener:p.bool,disableInteractive:p.bool,disableTouchListener:p.bool,enterDelay:p.number,enterNextDelay:p.number,enterTouchDelay:p.number,followCursor:p.bool,id:p.string,leaveDelay:p.number,leaveTouchDelay:p.number,onClose:p.func,onOpen:p.func,open:p.bool,placement:p.oneOf(["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),PopperComponent:p.elementType,PopperProps:p.object,slotProps:p.shape({arrow:p.object,popper:p.object,tooltip:p.object,transition:p.object}),slots:p.shape({arrow:p.elementType,popper:p.elementType,tooltip:p.elementType,transition:p.elementType}),sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),title:p.node,TransitionComponent:p.elementType,TransitionProps:p.object});function as(e,t,n){return e?a.jsx(De.ListItemIcon,{className:`papi-menu-icon-${n?"leading":"trailing"}`,children:a.jsx("img",{src:e,alt:`${n?"Leading":"Trailing"} icon for ${t}`})}):void 0}function Zo(e){const{onClick:t,label:n,tooltip:r,allowForLeadingIcons:o=!0,iconPathBefore:s=void 0,iconPathAfter:i=void 0,hasAutoFocus:l=!1,className:c,isDisabled:d=!1,isDense:u=!0,isSubMenuParent:f=!1,hasDisabledGutters:w=!1,hasDivider:g=!1,focusVisibleClassName:x,id:m,children:h}=e,k=a.jsx(De.MenuItem,{sx:{lineHeight:.8},autoFocus:l,className:c,disabled:d,dense:u,disableGutters:w,divider:g,focusVisibleClassName:x,onClick:t,id:m,children:n?a.jsxs(a.Fragment,{children:[as(s,n,!0),a.jsx(De.ListItemText,{primary:n,inset:!s&&o}),f?a.jsx(De.ListItemIcon,{className:"papi-menu-icon-trailing",children:a.jsx(hi,{})}):as(i,n,!1)]}):h});return r?a.jsx(Ri,{title:r,placement:"right",children:a.jsx("div",{children:k})}):k}function _i(e){return Object.entries(e.groups).map(([n,r])=>({id:n,group:r}))}function Ef(e){const[t,n]=b.useState(void 0),{parentMenuItem:r,parentItemProps:o,menuDefinition:s}=e,i=d=>{n(d.currentTarget)},l=()=>{n(void 0)},c=()=>{let d=_i(s).filter(u=>"menuItem"in u.group);if(!(r!=null&&r.id))throw new Error("A valid parent menu item is required for submenus.");return d=d.filter(u=>"menuItem"in u.group&&u.group.menuItem===r.id),a.jsx(Pi,{...e,includedGroups:d})};return a.jsxs(a.Fragment,{children:[a.jsx(Zo,{onClick:i,...o,isSubMenuParent:!0}),a.jsx(De.Menu,{anchorEl:t,open:!!t,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:c()},r.id)]})}const Cf=(e,t)=>t.filter(o=>o.group===e).sort((o,s)=>(o.order||0)-(s.order||0));function Pi(e){const{menuDefinition:t,onClick:n,commandHandler:r,includedGroups:o}=e,{items:s,allowForLeadingIcons:i}=b.useMemo(()=>{const u=o&&o.length>0?o:_i(t).filter(x=>!("menuItem"in x.group)),f=Object.values(u).sort((x,m)=>(x.group.order||0)-(m.group.order||0)),w=[];f.forEach(x=>{Cf(x.id,t.items).forEach(m=>w.push({item:m,isLastItemInGroup:!1})),w.length>0&&(w[w.length-1].isLastItemInGroup=!0)}),w.length>0&&(w[w.length-1].isLastItemInGroup=!1);const g=w.some(x=>"iconPathBefore"in x.item&&x.item.iconPathBefore);return{items:w,allowForLeadingIcons:g}},[o,t]),l=({item:u,isLastItemInGroup:f})=>({className:"papi-menu-item",label:u.label,tooltip:u.tooltip,iconPathBefore:"iconPathBefore"in u?u.iconPathBefore:void 0,iconPathAfter:"iconPathAfter"in u?u.iconPathAfter:void 0,hasDivider:f,allowForLeadingIcons:i}),[c]=s;if(!c)return a.jsx("div",{});const d=c.item.group;return a.jsx("div",{role:"menu","aria-label":d,children:s.map((u,f)=>{const{item:w}=u,g=l(u);if("command"in w){const x=w.group+f;return a.jsx(Zo,{onClick:m=>{n==null||n(m),r(w)},...g},x)}return a.jsx(Ef,{parentMenuItem:w,parentItemProps:g,...e},d+w.id)})},d)}function Tf(e){const{menuDefinition:t,columnId:n}=e;let s=Object.entries(t.groups).map(([i,l])=>({id:i,group:l})).filter(i=>"column"in i.group);return n&&"columns"in t&&t.columns[n]&&(s=s.filter(i=>"column"in i.group&&i.group.column===n)),a.jsx(Pi,{...e,includedGroups:s})}function Of({commandHandler:e,menuDefinition:t,id:n,metadata:r,onClick:o,className:s}){return a.jsxs(De.Grid,{id:n,item:!0,xs:"auto",role:"menu","aria-label":n,className:`papi-menu-column ${s??""}`,children:[a.jsx("h3",{"aria-label":r.label,className:`papi-menu-column-header ${s??""}`,children:r.label}),a.jsx(De.List,{id:n,dense:!0,className:s??"",children:a.jsx(Tf,{commandHandler:e,menuDefinition:t,columnId:n,onClick:o})})]})}function Ii({commandHandler:e,className:t,multiColumnMenu:n,id:r}){const{columns:o}=n,s=b.useMemo(()=>{const i=new Map;return Object.getOwnPropertyNames(o).forEach(l=>{if(l==="isExtensible")return;const c=l,d=o[c];typeof d=="object"&&typeof d.order=="number"&&!Number.isNaN(d.order)?i.set(d.order,{id:c,metadata:d}):console.warn(`Property ${l} (${typeof d}) on menu ${r} is not a valid column and is being ignored. This might indicate data corruption`)}),Array.from(i.values()).sort((l,c)=>(l.metadata.order||0)-(c.metadata.order||0))},[o,r]);return a.jsx(De.Grid,{container:!0,spacing:0,className:`papi-multi-column-menu ${t??""}`,columns:s.length,role:"menu","aria-label":"GridMenu",id:r,children:s.map((i,l)=>a.jsx(Of,{commandHandler:e,menuDefinition:n,...i,className:t},l))})}function Rf(e){return{preserveValue:!0,...e}}const or=(e,t,n={})=>{const r=b.useRef(t);r.current=t;const o=b.useRef(n);o.current=Rf(o.current);const[s,i]=b.useState(()=>r.current),[l,c]=b.useState(!0);return b.useEffect(()=>{let d=!0;return c(!!e),(async()=>{if(e){const u=await e();d&&(i(()=>u),c(!1))}})(),()=>{d=!1,o.current.preserveValue||i(()=>r.current)}},[e]),[s,l]},_f=mi(a.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function Mi({menuProvider:e,normalMenu:t,fullMenu:n,commandHandler:r,containerRef:o,className:s,ariaLabelPrefix:i,children:l}){const[c,d]=b.useState(!1),[u,f]=b.useState(!1),w=b.useCallback(()=>{c&&d(!1),f(!1)},[c]),g=b.useCallback(S=>{S.stopPropagation(),d(v=>{const P=!v;return P&&S.shiftKey?f(!0):P||f(!1),P})},[]),x=b.useCallback(S=>(w(),r(S)),[r,w]),[m,h]=b.useState({top:1,left:1});b.useEffect(()=>{if(c){const S=o==null?void 0:o.current;if(S){const v=S.getBoundingClientRect(),P=window.scrollY,B=window.scrollX,T=v.top+P+S.clientHeight,R=v.left+B;h({top:T,left:R})}}},[c,o]);const[k]=or(b.useCallback(async()=>(e==null?void 0:e(!1))??t,[e,t,c]),t),[j]=or(b.useCallback(async()=>(e==null?void 0:e(!0))??n??k,[e,n,k,c]),n??k),E=u&&j?j:k;return a.jsxs(a.Fragment,{children:[a.jsx(De.IconButton,{sx:{paddingTop:0,paddingBottom:0},edge:"start",className:`papi-menuButton ${s??""}`,color:"inherit","aria-label":`${i??""} menu button`,onClick:g,children:l??a.jsx(_f,{})}),a.jsx(De.Drawer,{className:`papi-menu-drawer ${s??""}`,anchor:"left",variant:"temporary",open:c,onClose:w,PaperProps:{className:"papi-menu-drawer-paper",style:{top:m.top,left:m.left}},children:E?a.jsx(Ii,{className:s,id:`${i??""} main menu`,commandHandler:x,multiColumnMenu:E}):void 0})]})}function Pf({id:e,label:t,isDisabled:n=!1,tooltip:r,isTooltipSuppressed:o=!1,adjustMarginToAlignToEdge:s=!1,size:i="medium",className:l,onClick:c,children:d}){return a.jsx(De.IconButton,{id:e,disabled:n,edge:s,size:i,"aria-label":t,title:o?void 0:r??t,className:`papi-icon-button ${l??""}`,onClick:c,children:d})}const Kt=b.forwardRef(({className:e,...t},n)=>a.jsx(Z.LoaderCircle,{size:35,className:N("tw-animate-spin",e),...t,ref:n}));Kt.displayName="Spinner";function If({id:e,isDisabled:t=!1,hasError:n=!1,isFullWidth:r=!1,helperText:o,label:s,placeholder:i,isRequired:l=!1,className:c,defaultValue:d,value:u,onChange:f,onFocus:w,onBlur:g}){return a.jsxs("div",{className:N("tw-inline-grid tw-items-center tw-gap-1.5",{"tw-w-full":r}),children:[a.jsx(Ce,{htmlFor:e,className:N({"tw-text-red-600":n,"tw-hidden":!s}),children:`${s}${l?"*":""}`}),a.jsx(Ct,{id:e,disabled:t,placeholder:i,required:l,className:N(c,{"tw-border-red-600":n}),defaultValue:d,value:u,onChange:f,onFocus:w,onBlur:g}),a.jsx("p",{className:N({"tw-hidden":!o}),children:o})]})}function Mf({menuProvider:e,commandHandler:t,className:n,id:r,children:o}){const s=b.useRef(void 0);return a.jsx("div",{ref:s,style:{position:"relative"},children:a.jsx(De.AppBar,{position:"static",id:r,children:a.jsxs(De.Toolbar,{className:N("tw-bg-muted tw-text-muted-foreground",n),variant:"dense",children:[e?a.jsx(Mi,{commandHandler:t,containerRef:s,menuProvider:e}):void 0,o?a.jsx("div",{className:"papi-toolbar-children",children:o}):void 0]})})})}const $f=Yt.cva("tw-relative tw-w-full tw-rounded-lg tw-border tw-p-4 [&>svg~*]:tw-pl-7 [&>svg+div]:tw-translate-y-[-3px] [&>svg]:tw-absolute [&>svg]:tw-left-4 [&>svg]:tw-top-4 [&>svg]:tw-text-foreground",{variants:{variant:{default:"tw-bg-background tw-text-foreground",destructive:"tw-border-destructive/50 tw-text-destructive dark:tw-border-destructive [&>svg]:tw-text-destructive"}},defaultVariants:{variant:"default"}}),$i=b.forwardRef(({className:e,variant:t,...n},r)=>a.jsx("div",{ref:r,role:"alert",className:N($f({variant:t}),e),...n}));$i.displayName="Alert";const Di=b.forwardRef(({className:e,...t},n)=>a.jsxs("h5",{ref:n,className:N("tw-mb-1 tw-font-medium tw-leading-none tw-tracking-tight",e),...t,children:[t.children," "]}));Di.displayName="AlertTitle";const Ai=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:N("tw-text-sm [&_p]:tw-leading-relaxed",e),...t}));Ai.displayName="AlertDescription";const Bi=Yt.cva("pr-twp tw-inline-flex tw-items-center tw-rounded-full tw-px-2.5 tw-py-0.5 tw-text-xs tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2",{variants:{variant:{default:"tw-border tw-border-transparent tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/80",secondary:"tw-border tw-border-transparent tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",muted:"tw-border tw-border-transparent tw-bg-muted tw-text-muted-foreground hover:tw-bg-muted/80",destructive:"tw-border tw-border-transparent tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/80",outline:"tw-border tw-text-foreground",blueIndicator:"tw-w-[5px] tw-h-[5px] tw-bg-blue-400 tw-px-0",mutedIndicator:"tw-w-[5px] tw-h-[5px] tw-bg-zinc-400 tw-px-0"}},defaultVariants:{variant:"default"}});function zi({className:e,variant:t,...n}){return a.jsx("div",{className:N("pr-twp",Bi({variant:t}),e),...n})}const Vi=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:N("pr-twp tw-rounded-lg tw-border tw-bg-card tw-text-card-foreground tw-shadow-sm",e),...t}));Vi.displayName="Card";const Fi=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:N("pr-twp tw-flex tw-flex-col tw-space-y-1.5 tw-p-6",e),...t}));Fi.displayName="CardHeader";const Li=b.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:N("pr-twp tw-text-2xl tw-font-semibold tw-leading-none tw-tracking-tight",e),...t,children:t.children}));Li.displayName="CardTitle";const Gi=b.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:N("pr-twp tw-text-sm tw-text-muted-foreground",e),...t}));Gi.displayName="CardDescription";const Ui=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:N("pr-twp tw-p-6 tw-pt-0",e),...t}));Ui.displayName="CardContent";const qi=b.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:N("pr-twp tw-flex tw-items-center tw-p-6 tw-pt-0",e),...t}));qi.displayName="CardFooter";function Df({...e}){return a.jsx(is.Toaster,{className:"tw-toaster tw-group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}const Hi=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsxs(cn.Root,{ref:n,className:N("pr-twp tw-relative tw-flex tw-w-full tw-touch-none tw-select-none tw-items-center",e),...t,dir:r,children:[a.jsx(cn.Track,{className:"tw-relative tw-h-2 tw-w-full tw-grow tw-overflow-hidden tw-rounded-full tw-bg-secondary",children:a.jsx(cn.Range,{className:"tw-absolute tw-h-full tw-bg-primary"})}),a.jsx(cn.Thumb,{className:"tw-block tw-h-5 tw-w-5 tw-rounded-full tw-border-2 tw-border-primary tw-bg-background tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50"})]})});Hi.displayName=cn.Root.displayName;const Xi=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsx(Yr.Root,{className:N("tw-peer pr-twp tw-inline-flex tw-h-6 tw-w-11 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-background disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=unchecked]:tw-bg-input",e),...t,ref:n,children:a.jsx(Yr.Thumb,{className:N("pr-twp tw-pointer-events-none tw-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-background tw-shadow-lg tw-ring-0 tw-transition-transform",{"data-[state=checked]:tw-translate-x-5 data-[state=unchecked]:tw-translate-x-0":r==="ltr"},{"data-[state=checked]:tw-translate-x-[-20px] data-[state=unchecked]:tw-translate-x-0":r==="rtl"})})})});Xi.displayName=Yr.Root.displayName;const Af=_e.Root,Yi=b.forwardRef(({className:e,...t},n)=>{const r=xe();return a.jsx(_e.List,{ref:n,className:N("tw-inline-flex tw-h-10 tw-items-center tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t,dir:r})});Yi.displayName=_e.List.displayName;const Wi=b.forwardRef(({className:e,...t},n)=>a.jsx(_e.Trigger,{ref:n,className:N("tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-sm tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e),...t}));Wi.displayName=_e.Trigger.displayName;const Ki=b.forwardRef(({className:e,...t},n)=>a.jsx(_e.Content,{ref:n,className:N("tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));Ki.displayName=_e.Content.displayName;function Bf({isInstalling:e,handleClick:t,buttonText:n,className:r,...o}){return a.jsx(pe,{className:N("tw-h-8 tw-rounded-md tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e,"tw-bg-blue-600":!e,"tw-bg-white tw-text-blue-600 hover:tw-text-white":!n,"tw-w-20":n},r),onClick:t,...o,children:e?a.jsx(Kt,{size:15}):a.jsxs(a.Fragment,{children:[a.jsx(Z.Download,{size:25,className:N("tw-h-4 tw-w-4",{"tw-mr-1":n})}),n]})})}function zf({isEnabling:e,handleClick:t,className:n,...r}){return a.jsx(pe,{className:N("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Kt,{size:15,className:"tw-mr-1 tw-text-white"}),"Enabling..."]}):"Enable"})}function Vf({isDisabling:e,handleClick:t,className:n,...r}){return a.jsx(pe,{className:N("tw-h-8 tw-rounded-md tw-bg-gray-300 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-400",{"tw-cursor-not-allowed tw-bg-gray-400":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Kt,{size:15,className:"tw-mr-1 tw-text-black"}),"Disabling..."]}):"Disable"})}function Ff({isUpdating:e,handleClick:t,className:n,...r}){return a.jsx(pe,{className:N("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Kt,{size:15,className:"tw-mr-1 tw-text-white"}),"Updating..."]}):"Update"})}function Lf({id:e,markdown:t,className:n,anchorTarget:r}){const o=b.useMemo(()=>({overrides:{a:{props:{target:r}}}}),[r]);return a.jsx("div",{id:e,className:N("pr-twp tw-prose",n),children:a.jsx(El,{options:o,children:t})})}const Ji=b.forwardRef((e,t)=>a.jsxs(pe,{ref:t,className:"tw-rounded-md tw-border tw-border-dashed tw-border-gray-400 tw-bg-white tw-px-4 tw-py-2 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-border-blue-600 hover:tw-bg-white hover:tw-text-blue-600",...e,children:[a.jsx(Z.Filter,{size:16,className:"tw-mr-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"}),"Filter",a.jsx(Z.ChevronDown,{size:16,className:"tw-ml-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"})]}));var Zi=(e=>(e[e.Check=0]="Check",e[e.Radio=1]="Radio",e))(Zi||{});function Gf({id:e,groups:t}){return a.jsx("div",{id:e,children:a.jsxs(sr,{children:[a.jsx(lo,{asChild:!0,children:a.jsx(Ji,{})}),a.jsx(Sn,{children:t.map(n=>a.jsxs("div",{children:[a.jsx(jn,{children:n.label}),a.jsx(us,{children:n.items.map(r=>a.jsx("div",{children:r.itemType===0?a.jsx(ir,{onClick:r.onClick,children:r.label}):a.jsx(uo,{onClick:r.onClick,value:r.label,children:r.label})},r.label))}),a.jsx(En,{})]},n.label))})]})})}function Uf({id:e,message:t}){return a.jsx("div",{id:e,className:"tw-mb-20 tw-mt-20 tw-flex tw-items-center tw-justify-center",children:a.jsx("div",{className:"tw-w-3/4 tw-rounded-lg tw-bg-gray-100 tw-p-8 tw-text-center",children:a.jsx("p",{className:"tw-text-lg tw-text-gray-800",children:t})})})}function qf({id:e,category:t,downloads:n,languages:r,moreInfoUrl:o}){const s=new K.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(Object.values(n).reduce((l,c)=>l+c,0)),i=()=>{window.scrollTo(0,document.body.scrollHeight)};return a.jsxs("div",{id:e,className:"tw-flex tw-flex-wrap tw-items-start tw-space-x-4 tw-border-b tw-border-t tw-bg-white tw-pb-4 tw-pt-4",children:[a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:t})}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"CATEGORY"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsxs("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:[a.jsx(Z.User,{className:"tw-mr-1 tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:s})]}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"USERS"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center",children:r.slice(0,3).map(l=>a.jsx("span",{className:"tw-ml-1 tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-700",children:l.toUpperCase()},l))}),r.length>3&&a.jsxs("button",{type:"button",onClick:()=>i(),className:"tw-text-xs tw-text-gray-500 tw-underline",children:["+",r.length-3," more languages"]})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-ml-auto tw-flex tw-flex-col tw-space-y-2",children:[a.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Website",a.jsx(Z.Link,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]}),a.jsxs("a",{href:"https://example.com",target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Support",a.jsx(Z.CircleHelp,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]})]})]})}function Qi({id:e,versionHistory:t}){const[n,r]=b.useState(!1),o=new Date;function s(l){const c=new Date(l),d=new Date(o.getTime()-c.getTime()),u=d.getUTCFullYear()-1970,f=d.getUTCMonth(),w=d.getUTCDate()-1;let g="";return u>0?g=`${u.toString()} year${u===1?"":"s"} ago`:f>0?g=`${f.toString()} month${f===1?"":"s"} ago`:w===0?g="today":g=`${w.toString()} day${w===1?"":"s"} ago`,g}const i=Object.entries(t).sort((l,c)=>c[0].localeCompare(l[0]));return a.jsxs("div",{id:e,children:[a.jsx("h3",{className:"tw-text-md tw-font-semibold",children:"What`s New"}),a.jsx("ul",{className:"tw-list-disc tw-pl-5 tw-pr-4 tw-text-xs tw-text-gray-600",children:(n?i:i.slice(0,5)).map(l=>a.jsxs("div",{className:"tw-mt-3 tw-flex tw-justify-between",children:[a.jsx("div",{className:"tw-text-gray-600",children:a.jsx("li",{className:"tw-prose tw-text-xs",children:a.jsx("span",{children:l[1].description})})}),a.jsxs("div",{className:"tw-justify-end tw-text-right",children:[a.jsxs("div",{children:["Version ",l[0]]}),a.jsx("div",{children:s(l[1].date)})]})]},l[0]))}),i.length>5&&a.jsx("button",{type:"button",onClick:()=>r(!n),className:"tw-text-xs tw-text-gray-500 tw-underline",children:n?"Show Less Version History":"Show All Version History"})]})}function Hf({id:e,publisherDisplayName:t,fileSize:n,locales:r,versionHistory:o}){const s=b.useMemo(()=>K.formatBytes(n),[n]),l=(c=>{const d=new Intl.DisplayNames(navigator.language,{type:"language"});return c.map(u=>d.of(u))})(r);return a.jsx("div",{id:e,className:"tw-border-t tw-pb-4 tw-pt-4",children:a.jsxs("div",{className:"tw-md:flex-row tw-md:space-x-8 tw-flex tw-flex-col tw-space-x-0",children:[a.jsx(Qi,{versionHistory:o}),a.jsx("div",{className:"tw-md:border-t-0 tw-md:border-l tw-md-h-auto tw-md-ml-8 tw-mt-4 tw-border-t tw-border-gray-300"}),a.jsxs("div",{className:"tw-md:mt-0 tw-mt-4 tw-flex-1 tw-space-y-3",children:[a.jsx("h2",{className:"tw-text-md tw-font-semibold",children:"Information"}),a.jsxs("div",{className:"tw-flex tw-items-start tw-justify-between tw-pr-4 tw-text-xs tw-text-gray-600",children:[a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Publisher"}),a.jsx("span",{className:"tw-font-semibold",children:t}),a.jsx("span",{className:"tw-mb-2 tw-mt-4",children:"Size"}),a.jsx("span",{className:"tw-font-semibold",children:s})]}),a.jsx("div",{className:"tw-flex tw-w-3/4 tw-items-center tw-justify-between tw-text-xs tw-text-gray-600",children:a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Languages"}),a.jsx("span",{className:"tw-font-semibold",children:l.join(", ")})]})})]})]})]})})}function Xf({entries:e,getEntriesCount:t,selected:n,onChange:r,placeholder:o,commandEmptyMessage:s,customSelectedText:i,sortSelected:l,icon:c,className:d,badgesPlaceholder:u}){return a.jsxs("div",{className:"tw-flex tw-items-center tw-gap-2",children:[a.jsx(As,{entries:e,getEntriesCount:t,selected:n,onChange:r,placeholder:o,commandEmptyMessage:s,customSelectedText:i,sortSelected:l,icon:c,className:d}),n.length>0?a.jsx("div",{className:"tw-flex tw-flex-wrap tw-items-center tw-gap-2",children:n.map(f=>{var w;return a.jsxs(zi,{variant:"muted",className:"tw-flex tw-items-center tw-gap-1",children:[a.jsx(pe,{variant:"ghost",size:"icon",className:"tw-h-4 tw-w-4 tw-p-0 hover:tw-bg-transparent",onClick:()=>r(n.filter(g=>g!==f)),children:a.jsx(Z.X,{className:"tw-h-3 tw-w-3"})}),(w=e.find(g=>g.value===f))==null?void 0:w.label]},f)})}):a.jsx(Ce,{children:u})]})}const Yf=(e,t)=>e[t]??t;function Wf({knownUiLanguages:e,primaryLanguage:t="en",fallbackLanguages:n=[],onLanguagesChange:r,onPrimaryLanguageChange:o,onFallbackLanguagesChange:s,localizedStrings:i,className:l}){const c=Yf(i,"%settings_uiLanguageSelector_selectFallbackLanguages%"),[d,u]=b.useState(!1),f=g=>{o&&o(g),r&&r([g,...n.filter(x=>x!==g)]),s&&n.find(x=>x===g)&&s([...n.filter(x=>x!==g)]),u(!1)},w=(g,x)=>{var h,k,j,E,S,v;const m=x!==g?((k=(h=e[g])==null?void 0:h.uiNames)==null?void 0:k[x])??((E=(j=e[g])==null?void 0:j.uiNames)==null?void 0:E.en):void 0;return m?`${(S=e[g])==null?void 0:S.autonym} (${m})`:(v=e[g])==null?void 0:v.autonym};return a.jsxs("div",{className:N("pr-twp tw-max-w-sm",l),children:[a.jsxs(yt,{name:"uiLanguage",value:t,onValueChange:f,open:d,onOpenChange:g=>u(g),children:[a.jsx(it,{children:a.jsx(Nt,{})}),a.jsx(lt,{className:"tw-z-[250]",children:Object.keys(e).map(g=>a.jsx(Me,{value:g,children:w(g,t)},g))})]}),t!=="en"&&a.jsxs(a.Fragment,{children:[a.jsx(Ce,{className:"tw-ms-3",children:c}),a.jsx("div",{className:"tw-ms-3",children:a.jsxs(Ce,{children:["Currently:"," ",(n==null?void 0:n.length)>0?`${n.map(g=>w(g,t)).join(", ")}`:`default (${e.en.autonym})`]})})]})]})}const Kf=(e,t)=>{b.useEffect(()=>{if(!e)return()=>{};const n=e(t);return()=>{n()}},[e,t])},qr=()=>!1,Jf=(e,t)=>{const[n]=or(b.useCallback(async()=>{if(!e)return qr;const r=await Promise.resolve(e(t));return async()=>r()},[t,e]),qr,{preserveValue:!1});b.useEffect(()=>()=>{n!==qr&&n()},[n])};Object.defineProperty(exports,"sonner",{enumerable:!0,get:()=>is.toast});exports.Alert=$i;exports.AlertDescription=Ai;exports.AlertTitle=Di;exports.BOOK_SELECTOR_STRING_KEYS=lc;exports.Badge=zi;exports.BookChapterControl=ec;exports.BookSelectionMode=js;exports.BookSelector=cc;exports.Button=pe;exports.Card=Vi;exports.CardContent=Ui;exports.CardDescription=Gi;exports.CardFooter=qi;exports.CardHeader=Fi;exports.CardTitle=Li;exports.ChapterRangeSelector=Ss;exports.Checkbox=cr;exports.Checklist=td;exports.ComboBox=Wn;exports.DataTable=_s;exports.DisableButton=Vf;exports.DropdownMenu=sr;exports.DropdownMenuCheckboxItem=ir;exports.DropdownMenuContent=Sn;exports.DropdownMenuGroup=us;exports.DropdownMenuItem=co;exports.DropdownMenuItemType=Zi;exports.DropdownMenuLabel=jn;exports.DropdownMenuPortal=_l;exports.DropdownMenuRadioGroup=Il;exports.DropdownMenuRadioItem=uo;exports.DropdownMenuSeparator=En;exports.DropdownMenuShortcut=fs;exports.DropdownMenuSub=Pl;exports.DropdownMenuSubContent=ws;exports.DropdownMenuSubTrigger=ps;exports.DropdownMenuTrigger=lo;exports.EnableButton=zf;exports.Filter=Xf;exports.FilterButton=Ji;exports.FilterDropdown=Gf;exports.Footer=Hf;exports.GridMenu=Ii;exports.HamburgerMenuButton=Mi;exports.INVENTORY_STRING_KEYS=bc;exports.IconButton=Pf;exports.Input=Ct;exports.InstallButton=Bf;exports.Inventory=yc;exports.Label=Ce;exports.MarkdownRenderer=Lf;exports.MenuItem=Zo;exports.MoreInfo=qf;exports.MultiSelectComboBox=As;exports.NavigationContentSearch=Nc;exports.NoExtensionsFound=Uf;exports.Popover=go;exports.PopoverContent=lr;exports.PopoverTrigger=bo;exports.RadioGroup=ho;exports.RadioGroupItem=Yn;exports.ScriptureResultsViewer=Kc;exports.ScrollGroupSelector=Jc;exports.SearchBar=Co;exports.Select=yt;exports.SelectContent=lt;exports.SelectGroup=Es;exports.SelectItem=Me;exports.SelectLabel=Cs;exports.SelectScrollDownButton=jo;exports.SelectScrollUpButton=So;exports.SelectSeparator=Ts;exports.SelectTrigger=it;exports.SelectValue=Nt;exports.Separator=ur;exports.SettingsList=Zc;exports.SettingsListHeader=ed;exports.SettingsListItem=Qc;exports.SettingsSidebar=Ys;exports.SettingsSidebarContentSearch=Lc;exports.Slider=Hi;exports.Sonner=Df;exports.Spinner=Kt;exports.Switch=Xi;exports.Table=Cn;exports.TableBody=On;exports.TableCaption=Rs;exports.TableCell=kt;exports.TableFooter=Os;exports.TableHead=Vt;exports.TableHeader=Tn;exports.TableRow=Qe;exports.Tabs=Af;exports.TabsContent=Ki;exports.TabsList=Yi;exports.TabsTrigger=Wi;exports.TextField=If;exports.ToggleGroup=Eo;exports.ToggleGroupItem=wn;exports.Toolbar=Mf;exports.UiLanguageSelector=Wf;exports.UpdateButton=Ff;exports.VersionHistory=Qi;exports.VerticalTabs=To;exports.VerticalTabsContent=Ro;exports.VerticalTabsList=Oo;exports.VerticalTabsTrigger=Bs;exports.badgeVariants=Bi;exports.buttonVariants=ys;exports.cn=N;exports.getBookNumFromId=Is;exports.getLinesFromUSFM=Ps;exports.getNumberFromUSFM=Wr;exports.getStatusForItem=Ms;exports.inventoryCountColumn=hc;exports.inventoryItemColumn=fc;exports.inventoryStatusColumn=gc;exports.useEvent=Kf;exports.useEventAsync=Jf;exports.usePromise=or;function Zf(e,t="top"){if(!e||typeof document>"u")return;const n=document.head||document.querySelector("head"),r=n.querySelector(":first-child"),o=document.createElement("style");o.appendChild(document.createTextNode(e)),t==="top"&&r?n.insertBefore(o,r):n.appendChild(o)}Zf(`.papi-menu-drawer-paper {
  height: fit-content !important;
  position: absolute !important;
}

.papi-toolbar-children {
  padding: 10px;
  display: flex;
  gap: 8px;
}
.papi-multi-column-menu {
  background-color: rgb(222, 222, 222);
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  padding-right: 3px;
}

.papi-menu-column {
  font-size: 11pt;
  font-weight: 600;
  padding-bottom: 2px;
}

.papi-menu-column ul {
  padding-top: 0;
}

.papi-menu-column-header {
  background-color: rgb(181, 181, 181);
  padding-left: 24px;
  margin-top: 0;
  margin-bottom: 0;
}

.papi-multi-column-menu.paratext {
  background-color: rgb(76, 106, 76);
  color: rgb(214, 255, 152);
}

.papi-multi-column-menu.paratext.bright {
  color: rgb(76, 106, 76);
  background-color: rgb(214, 255, 152);
}
.papi-icon-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
}

.papi-icon-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-icon-button.secondary {
  background-color: transparent;
  color: #333;
}

.papi-icon-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-icon-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*:where(.pr-twp,.pr-twp *),
::before:where(.pr-twp,.pr-twp *),
::after:where(.pr-twp,.pr-twp *) {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before:where(.pr-twp,.pr-twp *),
::after:where(.pr-twp,.pr-twp *) {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html:where(.pr-twp,.pr-twp *),
:host:where(.pr-twp,.pr-twp *) {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body:where(.pr-twp,.pr-twp *) {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr:where(.pr-twp,.pr-twp *) {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]):where(.pr-twp,.pr-twp *) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1:where(.pr-twp,.pr-twp *),
h2:where(.pr-twp,.pr-twp *),
h3:where(.pr-twp,.pr-twp *),
h4:where(.pr-twp,.pr-twp *),
h5:where(.pr-twp,.pr-twp *),
h6:where(.pr-twp,.pr-twp *) {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a:where(.pr-twp,.pr-twp *) {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b:where(.pr-twp,.pr-twp *),
strong:where(.pr-twp,.pr-twp *) {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code:where(.pr-twp,.pr-twp *),
kbd:where(.pr-twp,.pr-twp *),
samp:where(.pr-twp,.pr-twp *),
pre:where(.pr-twp,.pr-twp *) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small:where(.pr-twp,.pr-twp *) {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub:where(.pr-twp,.pr-twp *),
sup:where(.pr-twp,.pr-twp *) {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub:where(.pr-twp,.pr-twp *) {
  bottom: -0.25em;
}

sup:where(.pr-twp,.pr-twp *) {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table:where(.pr-twp,.pr-twp *) {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button:where(.pr-twp,.pr-twp *),
input:where(.pr-twp,.pr-twp *),
optgroup:where(.pr-twp,.pr-twp *),
select:where(.pr-twp,.pr-twp *),
textarea:where(.pr-twp,.pr-twp *) {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button:where(.pr-twp,.pr-twp *),
select:where(.pr-twp,.pr-twp *) {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button:where(.pr-twp,.pr-twp *),
input:where([type='button']):where(.pr-twp,.pr-twp *),
input:where([type='reset']):where(.pr-twp,.pr-twp *),
input:where([type='submit']):where(.pr-twp,.pr-twp *) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring:where(.pr-twp,.pr-twp *) {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid:where(.pr-twp,.pr-twp *) {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress:where(.pr-twp,.pr-twp *) {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button:where(.pr-twp,.pr-twp *),
::-webkit-outer-spin-button:where(.pr-twp,.pr-twp *) {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search']:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary:where(.pr-twp,.pr-twp *) {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote:where(.pr-twp,.pr-twp *),
dl:where(.pr-twp,.pr-twp *),
dd:where(.pr-twp,.pr-twp *),
h1:where(.pr-twp,.pr-twp *),
h2:where(.pr-twp,.pr-twp *),
h3:where(.pr-twp,.pr-twp *),
h4:where(.pr-twp,.pr-twp *),
h5:where(.pr-twp,.pr-twp *),
h6:where(.pr-twp,.pr-twp *),
hr:where(.pr-twp,.pr-twp *),
figure:where(.pr-twp,.pr-twp *),
p:where(.pr-twp,.pr-twp *),
pre:where(.pr-twp,.pr-twp *) {
  margin: 0;
}

fieldset:where(.pr-twp,.pr-twp *) {
  margin: 0;
  padding: 0;
}

legend:where(.pr-twp,.pr-twp *) {
  padding: 0;
}

ol:where(.pr-twp,.pr-twp *),
ul:where(.pr-twp,.pr-twp *),
menu:where(.pr-twp,.pr-twp *) {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog:where(.pr-twp,.pr-twp *) {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea:where(.pr-twp,.pr-twp *) {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder:where(.pr-twp,.pr-twp *),
textarea::placeholder:where(.pr-twp,.pr-twp *) {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button:where(.pr-twp,.pr-twp *),
[role="button"]:where(.pr-twp,.pr-twp *) {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled:where(.pr-twp,.pr-twp *) {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img:where(.pr-twp,.pr-twp *),
svg:where(.pr-twp,.pr-twp *),
video:where(.pr-twp,.pr-twp *),
canvas:where(.pr-twp,.pr-twp *),
audio:where(.pr-twp,.pr-twp *),
iframe:where(.pr-twp,.pr-twp *),
embed:where(.pr-twp,.pr-twp *),
object:where(.pr-twp,.pr-twp *) {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img:where(.pr-twp,.pr-twp *),
video:where(.pr-twp,.pr-twp *) {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])):where(.pr-twp,.pr-twp *) {
  display: none;
}
  /* Adding the preflight selector (pr-twp) to components was not changing the font as desired.
  So this piece of code adds tw-font-sans everywhere we include preflight. */
  .pr-twp {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
  @font-face {
    font-family: 'Inter';
    font-display: 'swap';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  }

  /*
   * Theme colors in Platform.Bible. These are applied in CSS properties using \`hsl(var(--varName))\`
   * or Tailwind classes like \`tw-bg-primary\`
   *
   * See the wiki's
   * [Matching Application Theme](https://github.com/paranext/paranext-extension-template/wiki/Extension-Anatomy#matching-application-theme)
   * section for more information
   */
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 90%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  /* using color palette https://supercolorpalette.com/?scp=G0-hsl-99827A-E7DDD0-FEF4E7-FEFAF1-FFFFFF-D8E9E3-719892-07463D-0A433D-083030-041616-000000-85DBB8-F2F52E-CD3737 */
  .paratext-light {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --muted: 33.9 32.4% 86.1%;
    --muted-foreground: 15.5 13.2% 53.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --border: 220 13% 91%;
    --input: 161.3 26.7% 88.2%;
    --primary: 173.4 82.1% 15.3%;
    --primary-foreground: 40 85.7% 97.3%;
    --secondary: 161.3 26.7% 88.2%;
    --secondary-foreground: 173.4 82.1% 15.3%;
    --accent: 161.3 26.7% 88.2%;
    --accent-foreground: 173.4 82.1% 15.3%;
    --destructive: 0 60% 51%;
    --destructive-foreground: 210 20% 98%;
    --ring: 13.5 13.2% 53.9%;
  }

  .paratext-dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --muted: 15.5 13.2% 53.9%;
    --muted-foreground: 33.9 32.4% 86.1%;
    --popover: 180 71.4% 5%;
    --popover-foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --border: 220 13% 20%;
    --input: 220 13% 20%;
    --primary: 161.3 26.7% 88.2%;
    --primary-foreground: 173.4 82.1% 15.3%;
    --secondary: 180 71.4% 11%;
    --secondary-foreground: 161.3 26.7% 88.2%;
    --accent: 180 71.4% 11%;
    --accent-foreground: 161.3 26.7% 88.2%;
    --destructive: 0 60% 51%;
    --destructive-foreground: 210 20% 98%;
    --ring: 13.5 13.2% 53.9%;
  }
  * {
  border-color: hsl(var(--border));
}

  body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
.tw-prose {
  color: var(--tw-prose-body);
  max-width: 65ch;
}
.tw-prose :where(p):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.tw-prose :where([class~="lead"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-lead);
  font-size: 1.25em;
  line-height: 1.6;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
}
.tw-prose :where(a):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-links);
  text-decoration: underline;
  font-weight: 500;
}
.tw-prose :where(strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-bold);
  font-weight: 600;
}
.tw-prose :where(a strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(blockquote strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(thead th strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(ol):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: decimal;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(ol[type="A"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-alpha;
}
.tw-prose :where(ol[type="a"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-alpha;
}
.tw-prose :where(ol[type="A" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-alpha;
}
.tw-prose :where(ol[type="a" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-alpha;
}
.tw-prose :where(ol[type="I"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-roman;
}
.tw-prose :where(ol[type="i"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-roman;
}
.tw-prose :where(ol[type="I" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-roman;
}
.tw-prose :where(ol[type="i" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-roman;
}
.tw-prose :where(ol[type="1"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: decimal;
}
.tw-prose :where(ul):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: disc;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(ol > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::marker {
  font-weight: 400;
  color: var(--tw-prose-counters);
}
.tw-prose :where(ul > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::marker {
  color: var(--tw-prose-bullets);
}
.tw-prose :where(dt):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.25em;
}
.tw-prose :where(hr):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-color: var(--tw-prose-hr);
  border-top-width: 1px;
  margin-top: 3em;
  margin-bottom: 3em;
}
.tw-prose :where(blockquote):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 500;
  font-style: italic;
  color: var(--tw-prose-quotes);
  border-inline-start-width: 0.25rem;
  border-inline-start-color: var(--tw-prose-quote-borders);
  quotes: "0o201C""0o201D""0o2018""0o2019";
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  padding-inline-start: 1em;
}
.tw-prose :where(blockquote p:first-of-type):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: open-quote;
}
.tw-prose :where(blockquote p:last-of-type):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: close-quote;
}
.tw-prose :where(h1):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}
.tw-prose :where(h1 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 900;
  color: inherit;
}
.tw-prose :where(h2):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
.tw-prose :where(h2 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 800;
  color: inherit;
}
.tw-prose :where(h3):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
.tw-prose :where(h3 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 700;
  color: inherit;
}
.tw-prose :where(h4):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.5;
}
.tw-prose :where(h4 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 700;
  color: inherit;
}
.tw-prose :where(img):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(picture):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  display: block;
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(video):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(kbd):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 500;
  font-family: inherit;
  color: var(--tw-prose-kbd);
  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
  font-size: 0.875em;
  border-radius: 0.3125rem;
  padding-top: 0.1875em;
  padding-inline-end: 0.375em;
  padding-bottom: 0.1875em;
  padding-inline-start: 0.375em;
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-code);
  font-weight: 600;
  font-size: 0.875em;
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: "\`";
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: "\`";
}
.tw-prose :where(a code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(h1 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(h2 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
  font-size: 0.875em;
}
.tw-prose :where(h3 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
  font-size: 0.9em;
}
.tw-prose :where(h4 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(blockquote code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(thead th code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(pre):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-pre-code);
  background-color: var(--tw-prose-pre-bg);
  overflow-x: auto;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding-top: 0.8571429em;
  padding-inline-end: 1.1428571em;
  padding-bottom: 0.8571429em;
  padding-inline-start: 1.1428571em;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: none;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: none;
}
.tw-prose :where(table):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  width: 100%;
  table-layout: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
}
.tw-prose :where(thead):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-th-borders);
}
.tw-prose :where(thead th):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  vertical-align: bottom;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.tw-prose :where(tbody tr):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-td-borders);
}
.tw-prose :where(tbody tr:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 0;
}
.tw-prose :where(tbody td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  vertical-align: baseline;
}
.tw-prose :where(tfoot):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-top-width: 1px;
  border-top-color: var(--tw-prose-th-borders);
}
.tw-prose :where(tfoot td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  vertical-align: top;
}
.tw-prose :where(th, td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  text-align: start;
}
.tw-prose :where(figure > *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.tw-prose :where(figcaption):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-captions);
  font-size: 0.875em;
  line-height: 1.4285714;
  margin-top: 0.8571429em;
}
.tw-prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-lead: #4b5563;
  --tw-prose-links: #111827;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6b7280;
  --tw-prose-bullets: #d1d5db;
  --tw-prose-hr: #e5e7eb;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #e5e7eb;
  --tw-prose-captions: #6b7280;
  --tw-prose-kbd: #111827;
  --tw-prose-kbd-shadows: 17 24 39;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #e5e7eb;
  --tw-prose-pre-bg: #1f2937;
  --tw-prose-th-borders: #d1d5db;
  --tw-prose-td-borders: #e5e7eb;
  --tw-prose-invert-body: #d1d5db;
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: #9ca3af;
  --tw-prose-invert-links: #fff;
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: #9ca3af;
  --tw-prose-invert-bullets: #4b5563;
  --tw-prose-invert-hr: #374151;
  --tw-prose-invert-quotes: #f3f4f6;
  --tw-prose-invert-quote-borders: #374151;
  --tw-prose-invert-captions: #9ca3af;
  --tw-prose-invert-kbd: #fff;
  --tw-prose-invert-kbd-shadows: 255 255 255;
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #d1d5db;
  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
  --tw-prose-invert-th-borders: #4b5563;
  --tw-prose-invert-td-borders: #374151;
  font-size: 1rem;
  line-height: 1.75;
}
.tw-prose :where(picture > img):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.tw-prose :where(li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.tw-prose :where(ol > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0.375em;
}
.tw-prose :where(ul > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0.375em;
}
.tw-prose :where(.tw-prose > ul > li p):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.tw-prose :where(.tw-prose > ul > li > p:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
}
.tw-prose :where(.tw-prose > ul > li > p:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 1.25em;
}
.tw-prose :where(.tw-prose > ol > li > p:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
}
.tw-prose :where(.tw-prose > ol > li > p:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 1.25em;
}
.tw-prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.tw-prose :where(dl):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.tw-prose :where(dd):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.5em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(hr + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h2 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h3 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h4 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(thead th:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0;
}
.tw-prose :where(thead th:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-end: 0;
}
.tw-prose :where(tbody td, tfoot td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-top: 0.5714286em;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.tw-prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0;
}
.tw-prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-end: 0;
}
.tw-prose :where(figure):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(.tw-prose > :first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(.tw-prose > :last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 0;
}
.tw-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.tw-pointer-events-none {
  pointer-events: none;
}
.tw-fixed {
  position: fixed;
}
.tw-absolute {
  position: absolute;
}
.tw-relative {
  position: relative;
}
.tw-sticky {
  position: sticky;
}
.tw-inset-0 {
  inset: 0px;
}
.tw-inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.tw-bottom-2 {
  bottom: 0.5rem;
}
.tw-left-0 {
  left: 0px;
}
.tw-left-2 {
  left: 0.5rem;
}
.tw-left-3 {
  left: 0.75rem;
}
.tw-left-4 {
  left: 1rem;
}
.tw-left-\\[50\\%\\] {
  left: 50%;
}
.tw-right-0 {
  right: 0px;
}
.tw-right-1 {
  right: 0.25rem;
}
.tw-right-3 {
  right: 0.75rem;
}
.tw-right-4 {
  right: 1rem;
}
.tw-start-2 {
  inset-inline-start: 0.5rem;
}
.tw-top-0 {
  top: 0px;
}
.tw-top-1\\.5 {
  top: 0.375rem;
}
.tw-top-1\\/2 {
  top: 50%;
}
.tw-top-2\\.5 {
  top: 0.625rem;
}
.tw-top-3\\.5 {
  top: 0.875rem;
}
.tw-top-4 {
  top: 1rem;
}
.tw-top-\\[-1px\\] {
  top: -1px;
}
.tw-top-\\[50\\%\\] {
  top: 50%;
}
.tw-z-10 {
  z-index: 10;
}
.tw-z-20 {
  z-index: 20;
}
.tw-z-30 {
  z-index: 30;
}
.tw-z-50 {
  z-index: 50;
}
.tw-z-\\[1000\\] {
  z-index: 1000;
}
.tw-z-\\[250\\] {
  z-index: 250;
}
.tw-col-span-2 {
  grid-column: span 2 / span 2;
}
.tw-m-1 {
  margin: 0.25rem;
}
.tw-m-2 {
  margin: 0.5rem;
}
.tw-m-4 {
  margin: 1rem;
}
.tw--mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.tw-mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.tw-mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.tw-mx-3\\.5 {
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}
.tw-my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.tw-my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.tw-my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.tw-mb-1 {
  margin-bottom: 0.25rem;
}
.tw-mb-2 {
  margin-bottom: 0.5rem;
}
.tw-mb-20 {
  margin-bottom: 5rem;
}
.tw-me-2 {
  margin-inline-end: 0.5rem;
}
.tw-me-4 {
  margin-inline-end: 1rem;
}
.tw-ml-1 {
  margin-left: 0.25rem;
}
.tw-ml-2 {
  margin-left: 0.5rem;
}
.tw-ml-auto {
  margin-left: auto;
}
.tw-mr-1 {
  margin-right: 0.25rem;
}
.tw-mr-2 {
  margin-right: 0.5rem;
}
.tw-ms-1 {
  margin-inline-start: 0.25rem;
}
.tw-ms-2 {
  margin-inline-start: 0.5rem;
}
.tw-ms-3 {
  margin-inline-start: 0.75rem;
}
.tw-ms-5 {
  margin-inline-start: 1.25rem;
}
.tw-ms-auto {
  margin-inline-start: auto;
}
.tw-mt-1 {
  margin-top: 0.25rem;
}
.tw-mt-2 {
  margin-top: 0.5rem;
}
.tw-mt-20 {
  margin-top: 5rem;
}
.tw-mt-3 {
  margin-top: 0.75rem;
}
.tw-mt-4 {
  margin-top: 1rem;
}
.tw-mt-auto {
  margin-top: auto;
}
.tw-box-border {
  box-sizing: border-box;
}
.tw-box-content {
  box-sizing: content-box;
}
.tw-block {
  display: block;
}
.tw-inline-block {
  display: inline-block;
}
.tw-inline {
  display: inline;
}
.tw-flex {
  display: flex;
}
.tw-inline-flex {
  display: inline-flex;
}
.tw-grid {
  display: grid;
}
.tw-inline-grid {
  display: inline-grid;
}
.tw-hidden {
  display: none;
}
.tw-aspect-square {
  aspect-ratio: 1 / 1;
}
.tw-size-4 {
  width: 1rem;
  height: 1rem;
}
.tw-h-1\\/2 {
  height: 50%;
}
.tw-h-10 {
  height: 2.5rem;
}
.tw-h-11 {
  height: 2.75rem;
}
.tw-h-12 {
  height: 3rem;
}
.tw-h-14 {
  height: 3.5rem;
}
.tw-h-2 {
  height: 0.5rem;
}
.tw-h-2\\.5 {
  height: 0.625rem;
}
.tw-h-20 {
  height: 5rem;
}
.tw-h-24 {
  height: 6rem;
}
.tw-h-3 {
  height: 0.75rem;
}
.tw-h-3\\.5 {
  height: 0.875rem;
}
.tw-h-4 {
  height: 1rem;
}
.tw-h-40 {
  height: 10rem;
}
.tw-h-5 {
  height: 1.25rem;
}
.tw-h-6 {
  height: 1.5rem;
}
.tw-h-7 {
  height: 1.75rem;
}
.tw-h-8 {
  height: 2rem;
}
.tw-h-9 {
  height: 2.25rem;
}
.tw-h-96 {
  height: 24rem;
}
.tw-h-\\[1\\.2rem\\] {
  height: 1.2rem;
}
.tw-h-\\[100\\%\\] {
  height: 100%;
}
.tw-h-\\[1px\\] {
  height: 1px;
}
.tw-h-\\[405px\\] {
  height: 405px;
}
.tw-h-\\[5px\\] {
  height: 5px;
}
.tw-h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.tw-h-full {
  height: 100%;
}
.tw-h-px {
  height: 1px;
}
.tw-h-screen {
  height: 100vh;
}
.tw-h-svh {
  height: 100svh;
}
.tw-max-h-80 {
  max-height: 20rem;
}
.tw-max-h-96 {
  max-height: 24rem;
}
.tw-max-h-\\[300px\\] {
  max-height: 300px;
}
.tw-min-h-0 {
  min-height: 0px;
}
.tw-min-h-svh {
  min-height: 100svh;
}
.tw-w-0 {
  width: 0px;
}
.tw-w-1\\/3 {
  width: 33.333333%;
}
.tw-w-10 {
  width: 2.5rem;
}
.tw-w-11 {
  width: 2.75rem;
}
.tw-w-14 {
  width: 3.5rem;
}
.tw-w-2 {
  width: 0.5rem;
}
.tw-w-2\\.5 {
  width: 0.625rem;
}
.tw-w-20 {
  width: 5rem;
}
.tw-w-3 {
  width: 0.75rem;
}
.tw-w-3\\.5 {
  width: 0.875rem;
}
.tw-w-3\\/4 {
  width: 75%;
}
.tw-w-4 {
  width: 1rem;
}
.tw-w-5 {
  width: 1.25rem;
}
.tw-w-6 {
  width: 1.5rem;
}
.tw-w-64 {
  width: 16rem;
}
.tw-w-7 {
  width: 1.75rem;
}
.tw-w-72 {
  width: 18rem;
}
.tw-w-8 {
  width: 2rem;
}
.tw-w-9 {
  width: 2.25rem;
}
.tw-w-9\\/12 {
  width: 75%;
}
.tw-w-96 {
  width: 24rem;
}
.tw-w-\\[--sidebar-width\\] {
  width: var(--sidebar-width);
}
.tw-w-\\[1\\.2rem\\] {
  width: 1.2rem;
}
.tw-w-\\[100px\\] {
  width: 100px;
}
.tw-w-\\[116px\\] {
  width: 116px;
}
.tw-w-\\[124px\\] {
  width: 124px;
}
.tw-w-\\[150px\\] {
  width: 150px;
}
.tw-w-\\[1px\\] {
  width: 1px;
}
.tw-w-\\[200px\\] {
  width: 200px;
}
.tw-w-\\[300px\\] {
  width: 300px;
}
.tw-w-\\[350px\\] {
  width: 350px;
}
.tw-w-\\[400px\\] {
  width: 400px;
}
.tw-w-\\[5px\\] {
  width: 5px;
}
.tw-w-\\[70px\\] {
  width: 70px;
}
.tw-w-auto {
  width: auto;
}
.tw-w-full {
  width: 100%;
}
.tw-min-w-0 {
  min-width: 0px;
}
.tw-min-w-5 {
  min-width: 1.25rem;
}
.tw-min-w-72 {
  min-width: 18rem;
}
.tw-min-w-\\[12rem\\] {
  min-width: 12rem;
}
.tw-min-w-\\[8rem\\] {
  min-width: 8rem;
}
.tw-min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.tw-max-w-64 {
  max-width: 16rem;
}
.tw-max-w-\\[--skeleton-width\\] {
  max-width: var(--skeleton-width);
}
.tw-max-w-lg {
  max-width: 32rem;
}
.tw-max-w-sm {
  max-width: 24rem;
}
.tw-flex-1 {
  flex: 1 1 0%;
}
.tw-flex-shrink-0 {
  flex-shrink: 0;
}
.tw-shrink-0 {
  flex-shrink: 0;
}
.tw-flex-grow {
  flex-grow: 1;
}
.tw-grow {
  flex-grow: 1;
}
.tw-caption-bottom {
  caption-side: bottom;
}
.tw--translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw--translate-x-px {
  --tw-translate-x: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw--translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-x-px {
  --tw-translate-x: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes tw-pulse {

  50% {
    opacity: .5;
  }
}
.tw-animate-pulse {
  animation: tw-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes tw-spin {

  to {
    transform: rotate(360deg);
  }
}
.tw-animate-spin {
  animation: tw-spin 1s linear infinite;
}
.tw-cursor-default {
  cursor: default;
}
.tw-cursor-not-allowed {
  cursor: not-allowed;
}
.tw-cursor-pointer {
  cursor: pointer;
}
.tw-touch-none {
  touch-action: none;
}
.tw-select-none {
  user-select: none;
}
.tw-resize {
  resize: both;
}
.tw-list-disc {
  list-style-type: disc;
}
.tw-columns-2 {
  columns: 2;
}
.tw-auto-rows-max {
  grid-auto-rows: max-content;
}
.tw-grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.tw-grid-cols-\\[25\\%\\,25\\%\\,50\\%\\] {
  grid-template-columns: 25% 25% 50%;
}
.tw-grid-cols-\\[25\\%\\,50\\%\\,25\\%\\] {
  grid-template-columns: 25% 50% 25%;
}
.tw-flex-row {
  flex-direction: row;
}
.tw-flex-col {
  flex-direction: column;
}
.tw-flex-col-reverse {
  flex-direction: column-reverse;
}
.tw-flex-wrap {
  flex-wrap: wrap;
}
.tw-items-start {
  align-items: flex-start;
}
.tw-items-center {
  align-items: center;
}
.tw-items-stretch {
  align-items: stretch;
}
.tw-justify-start {
  justify-content: flex-start;
}
.tw-justify-end {
  justify-content: flex-end;
}
.tw-justify-center {
  justify-content: center;
}
.tw-justify-between {
  justify-content: space-between;
}
.tw-gap-0\\.5 {
  gap: 0.125rem;
}
.tw-gap-1 {
  gap: 0.25rem;
}
.tw-gap-1\\.5 {
  gap: 0.375rem;
}
.tw-gap-2 {
  gap: 0.5rem;
}
.tw-gap-2\\.5 {
  gap: 0.625rem;
}
.tw-gap-3 {
  gap: 0.75rem;
}
.tw-gap-4 {
  gap: 1rem;
}
.tw-gap-6 {
  gap: 1.5rem;
}
.tw-gap-x-2 {
  column-gap: 0.5rem;
}
.tw-gap-x-4 {
  column-gap: 1rem;
}
.tw-space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0px * var(--tw-space-x-reverse));
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.tw-space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.tw-space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.tw-space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.tw-space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.tw-self-stretch {
  align-self: stretch;
}
.tw-overflow-auto {
  overflow: auto;
}
.tw-overflow-hidden {
  overflow: hidden;
}
.tw-overflow-y-auto {
  overflow-y: auto;
}
.tw-overflow-x-hidden {
  overflow-x: hidden;
}
.tw-overflow-y-hidden {
  overflow-y: hidden;
}
.tw-text-ellipsis {
  text-overflow: ellipsis;
}
.tw-whitespace-normal {
  white-space: normal;
}
.tw-whitespace-nowrap {
  white-space: nowrap;
}
.tw-text-nowrap {
  text-wrap: nowrap;
}
.tw-text-balance {
  text-wrap: balance;
}
.tw-break-words {
  overflow-wrap: break-word;
}
.tw-rounded {
  border-radius: 0.25rem;
}
.tw-rounded-full {
  border-radius: 9999px;
}
.tw-rounded-lg {
  border-radius: var(--radius);
}
.tw-rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.tw-rounded-none {
  border-radius: 0px;
}
.tw-rounded-sm {
  border-radius: calc(var(--radius) - 4px);
}
.tw-rounded-s-md {
  border-start-start-radius: calc(var(--radius) - 2px);
  border-end-start-radius: calc(var(--radius) - 2px);
}
.tw-rounded-ee-none {
  border-end-end-radius: 0px;
}
.tw-rounded-se-md {
  border-start-end-radius: calc(var(--radius) - 2px);
}
.tw-rounded-ss-none {
  border-start-start-radius: 0px;
}
.tw-border {
  border-width: 1px;
}
.tw-border-0 {
  border-width: 0px;
}
.tw-border-2 {
  border-width: 2px;
}
.tw-border-b {
  border-bottom-width: 1px;
}
.tw-border-b-0 {
  border-bottom-width: 0px;
}
.tw-border-e {
  border-inline-end-width: 1px;
}
.tw-border-e-0 {
  border-inline-end-width: 0px;
}
.tw-border-l {
  border-left-width: 1px;
}
.tw-border-s-2 {
  border-inline-start-width: 2px;
}
.tw-border-t {
  border-top-width: 1px;
}
.tw-border-t-0 {
  border-top-width: 0px;
}
.tw-border-solid {
  border-style: solid;
}
.tw-border-dashed {
  border-style: dashed;
}
.tw-border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity, 1));
}
.tw-border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));
}
.tw-border-destructive\\/50 {
  border-color: hsl(var(--destructive) / 0.5);
}
.tw-border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
.tw-border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));
}
.tw-border-input {
  border-color: hsl(var(--input));
}
.tw-border-primary {
  border-color: hsl(var(--primary));
}
.tw-border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity, 1));
}
.tw-border-sidebar-border {
  border-color: hsl(var(--sidebar-border));
}
.tw-border-transparent {
  border-color: transparent;
}
.tw-border-s-indigo-200 {
  --tw-border-opacity: 1;
  border-inline-start-color: rgb(199 210 254 / var(--tw-border-opacity, 1));
}
.tw-border-s-purple-200 {
  --tw-border-opacity: 1;
  border-inline-start-color: rgb(233 213 255 / var(--tw-border-opacity, 1));
}
.tw-border-s-red-200 {
  --tw-border-opacity: 1;
  border-inline-start-color: rgb(254 202 202 / var(--tw-border-opacity, 1));
}
.tw-bg-accent {
  background-color: hsl(var(--accent));
}
.tw-bg-accent-foreground {
  background-color: hsl(var(--accent-foreground));
}
.tw-bg-amber-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1));
}
.tw-bg-amber-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 230 138 / var(--tw-bg-opacity, 1));
}
.tw-bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));
}
.tw-bg-background {
  background-color: hsl(var(--background));
}
.tw-bg-black\\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.tw-bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1));
}
.tw-bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}
.tw-bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}
.tw-bg-border {
  background-color: hsl(var(--border));
}
.tw-bg-card {
  background-color: hsl(var(--card));
}
.tw-bg-card-foreground {
  background-color: hsl(var(--card-foreground));
}
.tw-bg-destructive {
  background-color: hsl(var(--destructive));
}
.tw-bg-destructive-foreground {
  background-color: hsl(var(--destructive-foreground));
}
.tw-bg-foreground {
  background-color: hsl(var(--foreground));
}
.tw-bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}
.tw-bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1));
}
.tw-bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}
.tw-bg-input {
  background-color: hsl(var(--input));
}
.tw-bg-muted {
  background-color: hsl(var(--muted));
}
.tw-bg-muted-foreground {
  background-color: hsl(var(--muted-foreground));
}
.tw-bg-muted\\/40 {
  background-color: hsl(var(--muted) / 0.4);
}
.tw-bg-muted\\/50 {
  background-color: hsl(var(--muted) / 0.5);
}
.tw-bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity, 1));
}
.tw-bg-popover {
  background-color: hsl(var(--popover));
}
.tw-bg-popover-foreground {
  background-color: hsl(var(--popover-foreground));
}
.tw-bg-primary {
  background-color: hsl(var(--primary));
}
.tw-bg-primary-foreground {
  background-color: hsl(var(--primary-foreground));
}
.tw-bg-ring {
  background-color: hsl(var(--ring));
}
.tw-bg-secondary {
  background-color: hsl(var(--secondary));
}
.tw-bg-secondary-foreground {
  background-color: hsl(var(--secondary-foreground));
}
.tw-bg-sidebar {
  background-color: hsl(var(--sidebar-background));
}
.tw-bg-sidebar-border {
  background-color: hsl(var(--sidebar-border));
}
.tw-bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}
.tw-bg-transparent {
  background-color: transparent;
}
.tw-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.tw-bg-zinc-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 161 170 / var(--tw-bg-opacity, 1));
}
.tw-bg-none {
  background-image: none;
}
.tw-fill-current {
  fill: currentColor;
}
.tw-p-0 {
  padding: 0px;
}
.tw-p-1 {
  padding: 0.25rem;
}
.tw-p-2 {
  padding: 0.5rem;
}
.tw-p-3 {
  padding: 0.75rem;
}
.tw-p-4 {
  padding: 1rem;
}
.tw-p-6 {
  padding: 1.5rem;
}
.tw-p-8 {
  padding: 2rem;
}
.tw-p-\\[1px\\] {
  padding: 1px;
}
.tw-px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.tw-px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.tw-px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.tw-px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.tw-px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.tw-px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.tw-px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.tw-px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.tw-px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.tw-px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.tw-py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.tw-py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.tw-py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.tw-py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.tw-py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.tw-py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.tw-py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.tw-py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.tw-pb-2 {
  padding-bottom: 0.5rem;
}
.tw-pb-3 {
  padding-bottom: 0.75rem;
}
.tw-pb-4 {
  padding-bottom: 1rem;
}
.tw-pe-2 {
  padding-inline-end: 0.5rem;
}
.tw-pe-9 {
  padding-inline-end: 2.25rem;
}
.tw-pl-1 {
  padding-left: 0.25rem;
}
.tw-pl-3 {
  padding-left: 0.75rem;
}
.tw-pl-4 {
  padding-left: 1rem;
}
.tw-pl-5 {
  padding-left: 1.25rem;
}
.tw-pl-8 {
  padding-left: 2rem;
}
.tw-pr-0 {
  padding-right: 0px;
}
.tw-pr-2 {
  padding-right: 0.5rem;
}
.tw-pr-3 {
  padding-right: 0.75rem;
}
.tw-pr-4 {
  padding-right: 1rem;
}
.tw-ps-12 {
  padding-inline-start: 3rem;
}
.tw-ps-4 {
  padding-inline-start: 1rem;
}
.tw-ps-8 {
  padding-inline-start: 2rem;
}
.tw-ps-9 {
  padding-inline-start: 2.25rem;
}
.tw-pt-0 {
  padding-top: 0px;
}
.tw-pt-3 {
  padding-top: 0.75rem;
}
.tw-pt-4 {
  padding-top: 1rem;
}
.tw-text-left {
  text-align: left;
}
.tw-text-center {
  text-align: center;
}
.tw-text-right {
  text-align: right;
}
.tw-text-start {
  text-align: start;
}
.tw-text-end {
  text-align: end;
}
.tw-align-middle {
  vertical-align: middle;
}
.tw-text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.tw-text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.tw-text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.tw-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.tw-text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.tw-text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.tw-text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.tw-font-bold {
  font-weight: 700;
}
.tw-font-medium {
  font-weight: 500;
}
.tw-font-normal {
  font-weight: 400;
}
.tw-font-semibold {
  font-weight: 600;
}
.tw-uppercase {
  text-transform: uppercase;
}
.tw-capitalize {
  text-transform: capitalize;
}
.tw-not-italic {
  font-style: normal;
}
.tw-tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.tw-leading-9 {
  line-height: 2.25rem;
}
.tw-leading-none {
  line-height: 1;
}
.tw-leading-relaxed {
  line-height: 1.625;
}
.tw-tracking-tight {
  letter-spacing: -0.025em;
}
.tw-tracking-widest {
  letter-spacing: 0.1em;
}
.tw-text-accent-foreground {
  color: hsl(var(--accent-foreground));
}
.tw-text-amber-800 {
  --tw-text-opacity: 1;
  color: rgb(146 64 14 / var(--tw-text-opacity, 1));
}
.tw-text-amber-900 {
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity, 1));
}
.tw-text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.tw-text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity, 1));
}
.tw-text-card-foreground {
  color: hsl(var(--card-foreground));
}
.tw-text-current {
  color: currentColor;
}
.tw-text-destructive {
  color: hsl(var(--destructive));
}
.tw-text-destructive-foreground {
  color: hsl(var(--destructive-foreground));
}
.tw-text-foreground {
  color: hsl(var(--foreground));
}
.tw-text-foreground\\/80 {
  color: hsl(var(--foreground) / 0.8);
}
.tw-text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.tw-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.tw-text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
.tw-text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}
.tw-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}
.tw-text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}
.tw-text-inherit {
  color: inherit;
}
.tw-text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.tw-text-popover-foreground {
  color: hsl(var(--popover-foreground));
}
.tw-text-primary {
  color: hsl(var(--primary));
}
.tw-text-primary-foreground {
  color: hsl(var(--primary-foreground));
}
.tw-text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.tw-text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity, 1));
}
.tw-text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}
.tw-text-sidebar-foreground {
  color: hsl(var(--sidebar-foreground));
}
.tw-text-sidebar-foreground\\/70 {
  color: hsl(var(--sidebar-foreground) / 0.7);
}
.tw-text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity, 1));
}
.tw-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.tw-text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity, 1));
}
.tw-underline {
  text-decoration-line: underline;
}
.tw-underline-offset-4 {
  text-underline-offset: 4px;
}
.tw-opacity-0 {
  opacity: 0;
}
.tw-opacity-100 {
  opacity: 1;
}
.tw-opacity-50 {
  opacity: 0.5;
}
.tw-opacity-60 {
  opacity: 0.6;
}
.tw-opacity-70 {
  opacity: 0.7;
}
.tw-shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\] {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.tw-ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.tw-ring-sidebar-ring {
  --tw-ring-color: hsl(var(--sidebar-ring));
}
.tw-ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.tw-drop-shadow-sm {
  --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.tw-transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-\\[left\\,right\\,width\\] {
  transition-property: left,right,width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-\\[margin\\,opa\\] {
  transition-property: margin,opa;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-\\[width\\,height\\,padding\\] {
  transition-property: width,height,padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-\\[width\\] {
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-duration-200 {
  transition-duration: 200ms;
}
.tw-duration-300 {
  transition-duration: 300ms;
}
.tw-duration-500 {
  transition-duration: 500ms;
}
.tw-ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.tw-ease-linear {
  transition-timing-function: linear;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.tw-animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.tw-fade-in-0 {
  --tw-enter-opacity: 0;
}
.tw-zoom-in-95 {
  --tw-enter-scale: .95;
}
.tw-duration-200 {
  animation-duration: 200ms;
}
.tw-duration-300 {
  animation-duration: 300ms;
}
.tw-duration-500 {
  animation-duration: 500ms;
}
.tw-ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.tw-ease-linear {
  animation-timing-function: linear;
}

/* #region shared with https://github.com/paranext/paranext-extension-template/blob/main/src/tailwind.css */

/* #endregion */

.\\*\\:tw-m-4 > * {
  margin: 1rem;
}

.file\\:tw-border-0::file-selector-button {
  border-width: 0px;
}

.file\\:tw-bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:tw-text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.file\\:tw-font-medium::file-selector-button {
  font-weight: 500;
}

.file\\:tw-text-foreground::file-selector-button {
  color: hsl(var(--foreground));
}

.placeholder\\:tw-text-muted-foreground::placeholder {
  color: hsl(var(--muted-foreground));
}

.after\\:tw-absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:tw--inset-2::after {
  content: var(--tw-content);
  inset: -0.5rem;
}

.after\\:tw-inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}

.after\\:tw-left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:tw-w-\\[2px\\]::after {
  content: var(--tw-content);
  width: 2px;
}

.hover\\:tw-border-blue-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity, 1));
}

.hover\\:tw-bg-accent:hover {
  background-color: hsl(var(--accent));
}

.hover\\:tw-bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.hover\\:tw-bg-destructive\\/80:hover {
  background-color: hsl(var(--destructive) / 0.8);
}

.hover\\:tw-bg-destructive\\/90:hover {
  background-color: hsl(var(--destructive) / 0.9);
}

.hover\\:tw-bg-gray-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}

.hover\\:tw-bg-muted:hover {
  background-color: hsl(var(--muted));
}

.hover\\:tw-bg-muted\\/50:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.hover\\:tw-bg-muted\\/80:hover {
  background-color: hsl(var(--muted) / 0.8);
}

.hover\\:tw-bg-primary\\/80:hover {
  background-color: hsl(var(--primary) / 0.8);
}

.hover\\:tw-bg-primary\\/90:hover {
  background-color: hsl(var(--primary) / 0.9);
}

.hover\\:tw-bg-secondary\\/80:hover {
  background-color: hsl(var(--secondary) / 0.8);
}

.hover\\:tw-bg-sidebar-accent:hover {
  background-color: hsl(var(--sidebar-accent));
}

.hover\\:tw-bg-transparent:hover {
  background-color: transparent;
}

.hover\\:tw-bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.hover\\:tw-text-accent-foreground:hover {
  color: hsl(var(--accent-foreground));
}

.hover\\:tw-text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity, 1));
}

.hover\\:tw-text-foreground:hover {
  color: hsl(var(--foreground));
}

.hover\\:tw-text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}

.hover\\:tw-text-muted-foreground:hover {
  color: hsl(var(--muted-foreground));
}

.hover\\:tw-text-sidebar-accent-foreground:hover {
  color: hsl(var(--sidebar-accent-foreground));
}

.hover\\:tw-text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.hover\\:tw-underline:hover {
  text-decoration-line: underline;
}

.hover\\:tw-opacity-100:hover {
  opacity: 1;
}

.hover\\:tw-shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\]:hover {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:tw-shadow-sm:hover {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:after\\:tw-bg-sidebar-border:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--sidebar-border));
}

.focus\\:tw-bg-accent:focus {
  background-color: hsl(var(--accent));
}

.focus\\:tw-text-accent-foreground:focus {
  color: hsl(var(--accent-foreground));
}

.focus\\:tw-outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:tw-ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:tw-ring-ring:focus {
  --tw-ring-color: hsl(var(--ring));
}

.focus\\:tw-ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:tw-outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:tw-ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:tw-ring-\\[color\\:hsl\\(2400o2c 5\\%0o2c 64\\.9\\%\\)\\]:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(240 5% 64.9% / var(--tw-ring-opacity, 1));
}

.focus-visible\\:tw-ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}

.focus-visible\\:tw-ring-sidebar-ring:focus-visible {
  --tw-ring-color: hsl(var(--sidebar-ring));
}

.focus-visible\\:tw-ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:tw-ring-offset-background:focus-visible {
  --tw-ring-offset-color: hsl(var(--background));
}

.active\\:tw-bg-sidebar-accent:active {
  background-color: hsl(var(--sidebar-accent));
}

.active\\:tw-bg-white:active {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.active\\:tw-text-sidebar-accent-foreground:active {
  color: hsl(var(--sidebar-accent-foreground));
}

.disabled\\:tw-pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:tw-cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:tw-opacity-50:disabled {
  opacity: 0.5;
}

.tw-group:hover .group-hover\\:tw-text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}

.tw-group:hover .group-hover\\:tw-opacity-100 {
  opacity: 1;
}

.tw-peer:disabled ~ .peer-disabled\\:tw-cursor-not-allowed {
  cursor: not-allowed;
}

.tw-peer:disabled ~ .peer-disabled\\:tw-opacity-70 {
  opacity: 0.7;
}

.has-\\[\\[data-variant\\=inset\\]\\]\\:tw-bg-sidebar:has([data-variant=inset]) {
  background-color: hsl(var(--sidebar-background));
}

.aria-disabled\\:tw-pointer-events-none[aria-disabled="true"] {
  pointer-events: none;
}

.aria-disabled\\:tw-opacity-50[aria-disabled="true"] {
  opacity: 0.5;
}

.data-\\[disabled\\=true\\]\\:tw-pointer-events-none[data-disabled="true"] {
  pointer-events: none;
}

.data-\\[disabled\\]\\:tw-pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[side\\=bottom\\]\\:tw-translate-y-1[data-side="bottom"] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=left\\]\\:tw--translate-x-1[data-side="left"] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=right\\]\\:tw-translate-x-1[data-side="right"] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=top\\]\\:tw--translate-y-1[data-side="top"] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:tw-translate-x-5[data-state="checked"] {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:tw-translate-x-\\[-20px\\][data-state="checked"] {
  --tw-translate-x: -20px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=unchecked\\]\\:tw-translate-x-0[data-state="unchecked"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[active\\=true\\]\\:tw-bg-sidebar-accent[data-active="true"] {
  background-color: hsl(var(--sidebar-accent));
}

.data-\\[highlighted\\]\\:tw-bg-amber-100[data-highlighted] {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1));
}

.data-\\[selected\\=true\\]\\:tw-bg-accent[data-selected="true"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=active\\]\\:tw-bg-background[data-state="active"] {
  background-color: hsl(var(--background));
}

.data-\\[state\\=checked\\]\\:tw-bg-primary[data-state="checked"] {
  background-color: hsl(var(--primary));
}

.data-\\[state\\=on\\]\\:tw-bg-accent[data-state="on"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=open\\]\\:tw-bg-accent[data-state="open"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=selected\\]\\:tw-bg-muted[data-state="selected"] {
  background-color: hsl(var(--muted));
}

.data-\\[state\\=unchecked\\]\\:tw-bg-input[data-state="unchecked"] {
  background-color: hsl(var(--input));
}

.data-\\[active\\=true\\]\\:tw-font-medium[data-active="true"] {
  font-weight: 500;
}

.data-\\[active\\=true\\]\\:tw-text-sidebar-accent-foreground[data-active="true"] {
  color: hsl(var(--sidebar-accent-foreground));
}

.data-\\[selected\\=true\\]\\:tw-text-accent-foreground[data-selected="true"] {
  color: hsl(var(--accent-foreground));
}

.data-\\[state\\=active\\]\\:tw-text-foreground[data-state="active"] {
  color: hsl(var(--foreground));
}

.data-\\[state\\=checked\\]\\:tw-text-primary-foreground[data-state="checked"] {
  color: hsl(var(--primary-foreground));
}

.data-\\[state\\=on\\]\\:tw-text-accent-foreground[data-state="on"] {
  color: hsl(var(--accent-foreground));
}

.data-\\[state\\=open\\]\\:tw-text-accent-foreground[data-state="open"] {
  color: hsl(var(--accent-foreground));
}

.data-\\[state\\=open\\]\\:tw-text-muted-foreground[data-state="open"] {
  color: hsl(var(--muted-foreground));
}

.data-\\[disabled\\=true\\]\\:tw-opacity-50[data-disabled="true"] {
  opacity: 0.5;
}

.data-\\[disabled\\]\\:tw-opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[state\\=open\\]\\:tw-opacity-100[data-state="open"] {
  opacity: 1;
}

.data-\\[state\\=active\\]\\:tw-shadow-sm[data-state="active"] {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\\[state\\=open\\]\\:tw-animate-in[data-state="open"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:tw-animate-out[data-state="closed"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:tw-fade-out-0[data-state="closed"] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=open\\]\\:tw-fade-in-0[data-state="open"] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=closed\\]\\:tw-zoom-out-95[data-state="closed"] {
  --tw-exit-scale: .95;
}

.data-\\[state\\=open\\]\\:tw-zoom-in-95[data-state="open"] {
  --tw-enter-scale: .95;
}

.data-\\[side\\=bottom\\]\\:tw-slide-in-from-top-2[data-side="bottom"] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:tw-slide-in-from-right-2[data-side="left"] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:tw-slide-in-from-left-2[data-side="right"] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:tw-slide-in-from-bottom-2[data-side="top"] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\\[state\\=closed\\]\\:tw-slide-out-to-left-1\\/2[data-state="closed"] {
  --tw-exit-translate-x: -50%;
}

.data-\\[state\\=closed\\]\\:tw-slide-out-to-top-\\[48\\%\\][data-state="closed"] {
  --tw-exit-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:tw-slide-in-from-left-1\\/2[data-state="open"] {
  --tw-enter-translate-x: -50%;
}

.data-\\[state\\=open\\]\\:tw-slide-in-from-top-\\[48\\%\\][data-state="open"] {
  --tw-enter-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:hover\\:tw-bg-sidebar-accent:hover[data-state="open"] {
  background-color: hsl(var(--sidebar-accent));
}

.data-\\[state\\=open\\]\\:hover\\:tw-text-sidebar-accent-foreground:hover[data-state="open"] {
  color: hsl(var(--sidebar-accent-foreground));
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:tw-left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
  left: calc(var(--sidebar-width) * -1);
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:tw-right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
  right: calc(var(--sidebar-width) * -1);
}

.tw-group[data-side="primary"] .group-data-\\[side\\=primary\\]\\:tw--right-4 {
  right: -1rem;
}

.tw-group[data-side="secondary"] .group-data-\\[side\\=secondary\\]\\:tw-left-0 {
  left: 0px;
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw--mt-8 {
  margin-top: -2rem;
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-hidden {
  display: none;
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-w-\\[--sidebar-width-icon\\] {
  width: var(--sidebar-width-icon);
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-w-\\[calc\\(var\\(--sidebar-width-icon\\)_\\+_theme\\(spacing\\.4\\)\\)\\] {
  width: calc(var(--sidebar-width-icon) + 1rem);
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-w-\\[calc\\(var\\(--sidebar-width-icon\\)_\\+_theme\\(spacing\\.4\\)_\\+2px\\)\\] {
  width: calc(var(--sidebar-width-icon) + 1rem + 2px);
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:tw-w-0 {
  width: 0px;
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:tw-translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.tw-group[data-side="secondary"] .group-data-\\[side\\=secondary\\]\\:tw-rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-overflow-hidden {
  overflow: hidden;
}

.tw-group[data-variant="floating"] .group-data-\\[variant\\=floating\\]\\:tw-rounded-lg {
  border-radius: var(--radius);
}

.tw-group[data-variant="floating"] .group-data-\\[variant\\=floating\\]\\:tw-border {
  border-width: 1px;
}

.tw-group[data-side="primary"] .group-data-\\[side\\=primary\\]\\:tw-border-r {
  border-right-width: 1px;
}

.tw-group[data-side="secondary"] .group-data-\\[side\\=secondary\\]\\:tw-border-l {
  border-left-width: 1px;
}

.tw-group[data-variant="floating"] .group-data-\\[variant\\=floating\\]\\:tw-border-sidebar-border {
  border-color: hsl(var(--sidebar-border));
}

.tw-group[data-collapsible="icon"] .group-data-\\[collapsible\\=icon\\]\\:tw-opacity-0 {
  opacity: 0;
}

.tw-group[data-variant="floating"] .group-data-\\[variant\\=floating\\]\\:tw-shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:tw-left-full::after {
  content: var(--tw-content);
  left: 100%;
}

.tw-group[data-collapsible="offcanvas"] .group-data-\\[collapsible\\=offcanvas\\]\\:hover\\:tw-bg-sidebar:hover {
  background-color: hsl(var(--sidebar-background));
}

.tw-peer[data-variant="inset"] ~ .peer-data-\\[variant\\=inset\\]\\:tw-min-h-\\[calc\\(100svh-theme\\(spacing\\.4\\)\\)\\] {
  min-height: calc(100svh - 1rem);
}

@media (min-width: 640px) {

  .sm\\:tw-not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .sm\\:tw-static {
    position: static;
  }

  .sm\\:tw-col-span-2 {
    grid-column: span 2 / span 2;
  }

  .sm\\:tw-flex {
    display: flex;
  }

  .sm\\:tw-table-cell {
    display: table-cell;
  }

  .sm\\:tw-hidden {
    display: none;
  }

  .sm\\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:tw-flex-row {
    flex-direction: row;
  }

  .sm\\:tw-justify-end {
    justify-content: flex-end;
  }

  .sm\\:tw-gap-4 {
    gap: 1rem;
  }

  .sm\\:tw-space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:tw-rounded-lg {
    border-radius: var(--radius);
  }

  .sm\\:tw-border-0 {
    border-width: 0px;
  }

  .sm\\:tw-bg-transparent {
    background-color: transparent;
  }

  .sm\\:tw-px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:tw-py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .sm\\:tw-py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:tw-py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .sm\\:tw-pl-14 {
    padding-left: 3.5rem;
  }

  .sm\\:tw-text-start {
    text-align: start;
  }
}

@media (min-width: 768px) {

  .md\\:tw-block {
    display: block;
  }

  .md\\:tw-inline {
    display: inline;
  }

  .md\\:tw-flex {
    display: flex;
  }

  .md\\:tw-table-cell {
    display: table-cell;
  }

  .md\\:tw-h-8 {
    height: 2rem;
  }

  .md\\:tw-w-8 {
    width: 2rem;
  }

  .md\\:tw-w-\\[200px\\] {
    width: 200px;
  }

  .md\\:tw-grow-0 {
    flex-grow: 0;
  }

  .md\\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:tw-gap-8 {
    gap: 2rem;
  }

  .md\\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .md\\:tw-opacity-0 {
    opacity: 0;
  }

  .after\\:md\\:tw-hidden::after {
    content: var(--tw-content);
    display: none;
  }

  .tw-peer[data-variant="inset"] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:tw-m-2 {
    margin: 0.5rem;
  }

  .tw-peer[data-state="collapsed"][data-variant="inset"] ~ .md\\:peer-data-\\[state\\=collapsed\\]\\:peer-data-\\[variant\\=inset\\]\\:tw-ml-2 {
    margin-left: 0.5rem;
  }

  .tw-peer[data-variant="inset"] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:tw-ml-0 {
    margin-left: 0px;
  }

  .tw-peer[data-variant="inset"] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:tw-rounded-xl {
    border-radius: 0.75rem;
  }

  .tw-peer[data-variant="inset"] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:tw-shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}

@media (min-width: 1024px) {

  .lg\\:tw-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .lg\\:tw-col-span-2 {
    grid-column: span 2 / span 2;
  }

  .lg\\:tw-flex {
    display: flex;
  }

  .lg\\:tw-w-\\[336px\\] {
    width: 336px;
  }

  .lg\\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:tw-space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }
}

@media (min-width: 1280px) {

  .xl\\:tw-not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .xl\\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xl\\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\\:tw-whitespace-nowrap {
    white-space: nowrap;
  }
}

.ltr\\:tw-left-2:where([dir="ltr"], [dir="ltr"] *) {
  left: 0.5rem;
}

.ltr\\:tw-left-2\\.5:where([dir="ltr"], [dir="ltr"] *) {
  left: 0.625rem;
}

.rtl\\:tw-right-2:where([dir="rtl"], [dir="rtl"] *) {
  right: 0.5rem;
}

.rtl\\:tw-right-2\\.5:where([dir="rtl"], [dir="rtl"] *) {
  right: 0.625rem;
}

.rtl\\:tw-ps-2:where([dir="rtl"], [dir="rtl"] *) {
  padding-inline-start: 0.5rem;
}

@media (prefers-color-scheme: dark) {

  .dark\\:tw--rotate-90 {
    --tw-rotate: -90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-rotate-0 {
    --tw-rotate: 0deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-scale-0 {
    --tw-scale-x: 0;
    --tw-scale-y: 0;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-border-destructive {
    border-color: hsl(var(--destructive));
  }
}

.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:tw-pe-0:has([role=checkbox]) {
  padding-inline-end: 0px;
}

.\\[\\&\\>span\\:last-child\\]\\:tw-truncate>span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.\\[\\&\\>span\\]\\:tw-line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.\\[\\&\\>svg\\+div\\]\\:tw-translate-y-\\[-3px\\]>svg+div {
  --tw-translate-y: -3px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>svg\\]\\:tw-absolute>svg {
  position: absolute;
}

.\\[\\&\\>svg\\]\\:tw-left-4>svg {
  left: 1rem;
}

.\\[\\&\\>svg\\]\\:tw-top-4>svg {
  top: 1rem;
}

.\\[\\&\\>svg\\]\\:tw-size-4>svg {
  width: 1rem;
  height: 1rem;
}

.\\[\\&\\>svg\\]\\:tw-shrink-0>svg {
  flex-shrink: 0;
}

.\\[\\&\\>svg\\]\\:tw-text-destructive>svg {
  color: hsl(var(--destructive));
}

.\\[\\&\\>svg\\]\\:tw-text-foreground>svg {
  color: hsl(var(--foreground));
}

.\\[\\&\\>svg\\]\\:tw-text-sidebar-accent-foreground>svg {
  color: hsl(var(--sidebar-accent-foreground));
}

.\\[\\&\\>svg\\~\\*\\]\\:tw-pl-7>svg~* {
  padding-left: 1.75rem;
}

.\\[\\&\\>tr\\]\\:last\\:tw-border-b-0:last-child>tr {
  border-bottom-width: 0px;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-px-2 [cmdk-group-heading] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-py-1\\.5 [cmdk-group-heading] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-text-xs [cmdk-group-heading] {
  font-size: 0.75rem;
  line-height: 1rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-font-medium [cmdk-group-heading] {
  font-weight: 500;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-text-muted-foreground [cmdk-group-heading] {
  color: hsl(var(--muted-foreground));
}

.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:tw-pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {
  padding-top: 0px;
}

.\\[\\&_\\[cmdk-group\\]\\]\\:tw-px-2 [cmdk-group] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:tw-h-5 [cmdk-input-wrapper] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:tw-w-5 [cmdk-input-wrapper] svg {
  width: 1.25rem;
}

.\\[\\&_\\[cmdk-input\\]\\]\\:tw-h-12 [cmdk-input] {
  height: 3rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:tw-px-2 [cmdk-item] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:tw-py-3 [cmdk-item] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:tw-h-5 [cmdk-item] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:tw-w-5 [cmdk-item] svg {
  width: 1.25rem;
}

.\\[\\&_p\\]\\:tw-leading-relaxed p {
  line-height: 1.625;
}

.\\[\\&_tr\\:last-child\\]\\:tw-border-0 tr:last-child {
  border-width: 0px;
}

.\\[\\&_tr\\]\\:tw-border-b tr {
  border-bottom-width: 1px;
}

[data-side=primary][data-collapsible=offcanvas] .\\[\\[data-side\\=primary\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:tw--right-2 {
  right: -0.5rem;
}

[data-side=primary][data-state=collapsed] .\\[\\[data-side\\=primary\\]\\[data-state\\=collapsed\\]_\\&\\]\\:tw-cursor-e-resize {
  cursor: e-resize;
}

[data-side=secondary][data-collapsible=offcanvas] .\\[\\[data-side\\=secondary\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:tw--left-2 {
  left: -0.5rem;
}

[data-side=secondary][data-state=collapsed] .\\[\\[data-side\\=secondary\\]\\[data-state\\=collapsed\\]_\\&\\]\\:tw-cursor-w-resize {
  cursor: w-resize;
}

[data-side=secondary] .\\[\\[data-side\\=secondary\\]_\\&\\]\\:tw-cursor-e-resize {
  cursor: e-resize;
}

[data-side=secondary] .\\[\\[data-side\\=secondary\\]_\\&\\]\\:tw-cursor-w-resize {
  cursor: w-resize;
}
.banded-row:hover {
  cursor: pointer;
}

.banded-row[data-state='selected']:hover {
  cursor: default;
}
.papi-menu-item {
  background-color: transparent;
}

.papi-menu-icon-trailing {
  margin-left: 10px;
  place-content: flex-end;
}

.papi-menu-item img {
  max-width: 24px;
  max-height: 24px;
}
`,"top");
//# sourceMappingURL=index.cjs.map
