var kI=Object.create;var jn=Object.defineProperty;var GI=Object.getOwnPropertyDescriptor;var xI=Object.getOwnPropertyNames;var LI=Object.getPrototypeOf,bI=Object.prototype.hasOwnProperty;var EA=(A,t)=>()=>(A&&(t=A(A=0)),t);var kt=(A,t)=>()=>(t||A((t={exports:{}}).exports,t),t.exports),DA=(A,t)=>{for(var e in t)jn(A,e,{get:t[e],enumerable:!0})},FI=(A,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of xI(t))!bI.call(A,i)&&i!==e&&jn(A,i,{get:()=>t[i],enumerable:!(n=GI(t,i))||n.enumerable});return A};var Gt=(A,t,e)=>(e=A!=null?kI(LI(A)):{},FI(t||!A||!A.__esModule?jn(e,"default",{value:A,enumerable:!0}):e,A));function $A(A){let t=VB[A];if(t===void 0)throw new RangeError(`Invalid field type: ${A}`);return t}function Oo(A,t,e,n=!1,i=!1){Po[t]=A,le[A]={tag:A,name:t,type:typeof e=="string"?m[e]:e,isArray:n,eager:i}}function Ve(A){return typeof A=="number"?A:Po[A]}var m,VB,ZB,Po,le,cA,Jo,qo,jt,wi,WB,Ze=EA(()=>{m={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,SBYTE:6,UNDEFINED:7,SSHORT:8,SLONG:9,SRATIONAL:10,FLOAT:11,DOUBLE:12,IFD:13,LONG8:16,SLONG8:17,IFD8:18},VB={[m.BYTE]:1,[m.ASCII]:1,[m.SBYTE]:1,[m.UNDEFINED]:1,[m.SHORT]:2,[m.SSHORT]:2,[m.LONG]:4,[m.SLONG]:4,[m.FLOAT]:4,[m.IFD]:4,[m.RATIONAL]:8,[m.SRATIONAL]:8,[m.DOUBLE]:8,[m.LONG8]:8,[m.SLONG8]:8,[m.IFD8]:8};ZB={NewSubfileType:{tag:254,type:m.LONG,eager:!0},SubfileType:{tag:255,type:m.SHORT,eager:!0},ImageWidth:{tag:256,type:m.SHORT,eager:!0},ImageLength:{tag:257,type:m.SHORT,eager:!0},BitsPerSample:{tag:258,type:m.SHORT,isArray:!0,eager:!0},Compression:{tag:259,type:m.SHORT,eager:!0},PhotometricInterpretation:{tag:262,type:m.SHORT,eager:!0},Threshholding:{tag:263,type:m.SHORT},CellWidth:{tag:264,type:m.SHORT},CellLength:{tag:265,type:m.SHORT},FillOrder:{tag:266,type:m.SHORT},DocumentName:{tag:269,type:m.ASCII},ImageDescription:{tag:270,type:m.ASCII},Make:{tag:271,type:m.ASCII},Model:{tag:272,type:m.ASCII},StripOffsets:{tag:273,type:m.SHORT,isArray:!0},Orientation:{tag:274,type:m.SHORT},SamplesPerPixel:{tag:277,type:m.SHORT,eager:!0},RowsPerStrip:{tag:278,type:m.SHORT,eager:!0},StripByteCounts:{tag:279,type:m.LONG,isArray:!0},MinSampleValue:{tag:280,type:m.SHORT,isArray:!0},MaxSampleValue:{tag:281,type:m.SHORT,isArray:!0},XResolution:{tag:282,type:m.RATIONAL},YResolution:{tag:283,type:m.RATIONAL},PlanarConfiguration:{tag:284,type:m.SHORT,eager:!0},PageName:{tag:285,type:m.ASCII},XPosition:{tag:286,type:m.RATIONAL},YPosition:{tag:287,type:m.RATIONAL},FreeOffsets:{tag:288,type:m.LONG},FreeByteCounts:{tag:289,type:m.LONG},GrayResponseUnit:{tag:290,type:m.SHORT},GrayResponseCurve:{tag:291,type:m.SHORT,isArray:!0},T4Options:{tag:292,type:m.LONG},T6Options:{tag:293,type:m.LONG},ResolutionUnit:{tag:296,type:m.SHORT},PageNumber:{tag:297,type:m.SHORT,isArray:!0},TransferFunction:{tag:301,type:m.SHORT,isArray:!0},Software:{tag:305,type:m.ASCII},DateTime:{tag:306,type:m.ASCII},Artist:{tag:315,type:m.ASCII},HostComputer:{tag:316,type:m.ASCII},Predictor:{tag:317,type:m.SHORT},WhitePoint:{tag:318,type:m.RATIONAL,isArray:!0},PrimaryChromaticities:{tag:319,type:m.RATIONAL,isArray:!0},ColorMap:{tag:320,type:m.SHORT,isArray:!0},HalftoneHints:{tag:321,type:m.SHORT,isArray:!0},TileWidth:{tag:322,type:m.SHORT,eager:!0},TileLength:{tag:323,type:m.SHORT,eager:!0},TileOffsets:{tag:324,type:m.LONG,isArray:!0},TileByteCounts:{tag:325,type:m.SHORT,isArray:!0},InkSet:{tag:332,type:m.SHORT},InkNames:{tag:333,type:m.ASCII},NumberOfInks:{tag:334,type:m.SHORT},DotRange:{tag:336,type:m.BYTE,isArray:!0},TargetPrinter:{tag:337,type:m.ASCII},ExtraSamples:{tag:338,type:m.BYTE,isArray:!0,eager:!0},SampleFormat:{tag:339,type:m.SHORT,isArray:!0,eager:!0},SMinSampleValue:{tag:340,isArray:!0},SMaxSampleValue:{tag:341,isArray:!0},TransferRange:{tag:342,type:m.SHORT,isArray:!0},JPEGProc:{tag:512,type:m.SHORT},JPEGInterchangeFormat:{tag:513,type:m.LONG},JPEGInterchangeFormatLngth:{tag:514,type:m.LONG},JPEGRestartInterval:{tag:515,type:m.SHORT},JPEGLosslessPredictors:{tag:517,type:m.SHORT,isArray:!0},JPEGPointTransforms:{tag:518,type:m.SHORT,isArray:!0},JPEGQTables:{tag:519,type:m.LONG,isArray:!0},JPEGDCTables:{tag:520,type:m.LONG,isArray:!0},JPEGACTables:{tag:521,type:m.LONG,isArray:!0},YCbCrCoefficients:{tag:529,type:m.RATIONAL,isArray:!0},YCbCrSubSampling:{tag:530,type:m.SHORT,isArray:!0},YCbCrPositioning:{tag:531,type:m.SHORT},ReferenceBlackWhite:{tag:532,type:m.LONG,isArray:!0},Copyright:{tag:33432,type:m.ASCII},BadFaxLines:{tag:326},CleanFaxData:{tag:327},ClipPath:{tag:343},ConsecutiveBadFaxLines:{tag:328},Decode:{tag:433},DefaultImageColor:{tag:434},Indexed:{tag:346},JPEGTables:{tag:347,isArray:!0,eager:!0},StripRowCounts:{tag:559,isArray:!0},SubIFDs:{tag:330,isArray:!0},XClipPathUnits:{tag:344},YClipPathUnits:{tag:345},ApertureValue:{tag:37378},ColorSpace:{tag:40961},DateTimeDigitized:{tag:36868},DateTimeOriginal:{tag:36867},ExifIFD:{tag:34665,name:"Exif IFD",type:m.LONG},ExifVersion:{tag:36864},ExposureTime:{tag:33434},FileSource:{tag:41728},Flash:{tag:37385},FlashpixVersion:{tag:40960},FNumber:{tag:33437},ImageUniqueID:{tag:42016},LightSource:{tag:37384},MakerNote:{tag:37500},ShutterSpeedValue:{tag:37377},UserComment:{tag:37510},IPTC:{tag:33723},CZ_LSMINFO:{tag:34412},ICCProfile:{tag:34675,name:"ICC Profile"},XMP:{tag:700},GDAL_METADATA:{tag:42112},GDAL_NODATA:{tag:42113,type:m.ASCII,eager:!0},Photoshop:{tag:34377},ModelPixelScale:{tag:33550,type:m.DOUBLE,isArray:!0,eager:!0},ModelTiepoint:{tag:33922,type:m.DOUBLE,isArray:!0,eager:!0},ModelTransformation:{tag:34264,type:m.DOUBLE,isArray:!0,eager:!0},GeoKeyDirectory:{tag:34735,type:m.SHORT,isArray:!0,eager:!0},GeoDoubleParams:{tag:34736,type:m.DOUBLE,isArray:!0,eager:!0},GeoAsciiParams:{tag:34737,type:m.ASCII,eager:!0},LercParameters:{tag:50674,eager:!0}},Po={},le={};for(let[A,t]of Object.entries(ZB)){let e=t;Oo(e.tag,e.name||A,e.type,e.isArray,e.eager)}cA={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},Jo={Unspecified:0,Assocalpha:1,Unassalpha:2},qo={Version:0,AddCompression:1},jt={None:0,Deflate:1,Zstandard:2},wi={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},WB={};for(let[A,t]of Object.entries(wi))WB[t]=parseInt(A,10)});function $B(A,t){let e=A.length-t,n=0;do{for(let i=t;i>0;i--)A[n+t]+=A[n],n++;e-=t}while(e>0)}function AE(A,t,e){let n=0,i=A.length,r=i/e;for(;i>t;){for(let g=t;g>0;--g)A[n+t]+=A[n],++n;i-=t}let I=A.slice();for(let g=0;g<r;++g)for(let s=0;s<e;++s)A[e*g+s]=I[(e-s-1)*r+g]}function $o(A,t,e,n,i,r){if(!t||t===1)return A;for(let s=0;s<i.length;++s){if(i[s]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[s]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}let I=i[0]/8,g=r===2?1:i.length;for(let s=0;s<n&&!(s*g*e*I>=A.byteLength);++s){let o;if(t===2){switch(i[0]){case 8:o=new Uint8Array(A,s*g*e*I,g*e*I);break;case 16:o=new Uint16Array(A,s*g*e*I,g*e*I/2);break;case 32:o=new Uint32Array(A,s*g*e*I,g*e*I/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}$B(o,g)}else t===3&&(o=new Uint8Array(A,s*g*e*I,g*e*I),AE(o,g,I))}return A}var Ag=EA(()=>{});var iA,UA=EA(()=>{Ag();iA=class{constructor(t){this.parameters=t}decodeBlock(t){throw new Error("decodeBlock not implemented")}async decode(t){let e=await this.decodeBlock(t),{tileWidth:n,tileHeight:i,predictor:r,bitsPerSample:I,planarConfiguration:g}=this.parameters;if(r!==1){let o=Array.isArray(I)||ArrayBuffer.isView(I)?Array.from(I):[I];return $o(e,r,n,i,o,g)}return e}}});var eg={};DA(eg,{default:()=>zt});var zt,tg=EA(()=>{UA();zt=class extends iA{decodeBlock(t){return t}}});var ig={};DA(ig,{default:()=>Xt});function tE(A,t,e){let n=t%8,i=Math.floor(t/8),r=8-n,I=t+e-(i+1)*8,g=8*(i+2)-(t+e),s=(i+2)*8-t;if(g=Math.max(0,g),i>=A.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),Di;let o=A[i]&2**(8-n)-1;o<<=e-r;let a=o;if(i+1<A.length){let E=A[i+1]>>>g;E<<=Math.max(0,e-s),a+=E}if(I>8&&i+2<A.length){let E=(i+3)*8-(t+e),B=A[i+2]>>>E;a+=B}return a}function mi(A,t){for(let e=t.length-1;e>=0;e--)A.push(t[e]);return A}function nE(A){let t=new Uint16Array(4093),e=new Uint8Array(4093);for(let c=0;c<=257;c++)t[c]=4096,e[c]=c;let n=258,i=ng,r=0;function I(){n=258,i=ng}function g(c){let l=tE(c,r,i);return r+=i,l}function s(c,l){return e[n]=l,t[n]=c,n++,n-1}function o(c){let l=[];for(let h=c;h!==4096;h=t[h])l.push(e[h]);return l}let a=[];I();let E=new Uint8Array(A),B=g(E),C;for(;B!==Di;){if(B===yi){for(I(),B=g(E);B===yi;)B=g(E);if(B===Di)break;if(B>yi)throw new Error(`corrupted code at scanline ${B}`);{let c=o(B);mi(a,c),C=B}}else if(B<n){let c=o(B);mi(a,c),C!==void 0&&s(C,c[c.length-1]),C=B}else{if(C===void 0)throw new Error(`Invalid LZW code: ${B} with no previous code`);let c=o(C);if(!c)throw new Error(`Bogus entry. Not in dictionary, ${C} / ${n}, position: ${r}`);mi(a,c),a.push(c[c.length-1]),s(C,c[c.length-1]),C=B}n+1>=2**i&&(i===eE?C=void 0:i++),B=g(E)}return new Uint8Array(a)}var ng,yi,Di,eE,Xt,rg=EA(()=>{UA();ng=9,yi=256,Di=257,eE=12;Xt=class extends iA{decodeBlock(t){return nE(t).buffer}}});var gg={};DA(gg,{default:()=>gn});function og(A,t){let e=0,n=[],i=16;for(;i>0&&!A[i-1];)--i;n.push({children:[],index:0});let r=n[0],I;for(let g=0;g<i;g++){for(let s=0;s<A[g];s++){if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.children[r.index]=t[e];r.index>0;)if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.index++,n.push(r);n.length<=g;)n.push(I={children:[],index:0}),r.children[r.index]=I.children,r=I;e++}g+1<i&&(n.push(I={children:[],index:0}),r.children[r.index]=I.children,r=I)}return n[0].children}function iE(A,t,e,n,i,r,I,g,s){let{mcusPerLine:o,progressive:a}=e;if(n.length>1&&(o===void 0||e.mcusPerColumn===void 0))throw new Error("Missing MCU dimensions");if(n.length===1&&(n[0].blocksPerLine===void 0||n[0].blocksPerColumn===void 0))throw new Error("Missing block dimensions");let E=t,B=t,C=0,c=0;function l(){if(c>0)return c--,C>>c&1;if(C=A[B++],C===255){let M=A[B++];if(M)throw new Error(`unexpected marker: ${(C<<8|M).toString(16)}`)}return c=7,C>>>7}function h(M){if(!M)throw new Error("Huffman table not found");let Y=M,_;for(;(_=l())!==null;){let J=Y[_];if(typeof J=="number")return J;if(typeof J!="object")throw new Error("invalid huffman sequence");Y=J}return null}function u(M){let Y=M,_=0;for(;Y>0;){let J=l();if(J===null)return;_=_<<1|J,--Y}return _}function p(M){let Y=u(M);if(Y!==void 0)return Y>=1<<M-1?Y:Y+(-1<<M)+1}function y(M,Y){let _=h(M.huffmanTableDC);if(_===null)throw new Error("Huffman error");let J=_===0?0:p(_);if(J===void 0)throw new Error("Unexpected end of stream");M.pred===void 0&&(M.pred=0),M.pred+=J,Y[0]=M.pred;let q=1;for(;q<64;){let AA=h(M.huffmanTableAC);if(AA===null)throw new Error("Unexpected end of data in AC coefficient decoding");let nA=AA&15,O=AA>>4;if(nA===0){if(O<15)break;q+=16}else{q+=O;let sA=We[q],gA=p(nA);if(gA===void 0)throw new Error("Unexpected end of stream");Y[sA]=gA,q++}}}function f(M,Y){let _=h(M.huffmanTableDC);if(_===null)throw new Error("Huffman error");let J=p(_);if(J===void 0)throw new Error("Unexpected end of data in DC coefficient decoding");let q=_===0?0:J<<s;M.pred===void 0&&(M.pred=0),M.pred+=q,Y[0]=M.pred}function Q(M,Y){let _=l();if(_===null)throw new Error("Unexpected end of data in DC coefficient decoding");Y[0]|=_<<s}let w=0;function d(M,Y){if(w>0){w--;return}let _=r,J=I;for(;_<=J;){let q=h(M.huffmanTableAC);if(q===null)throw new Error("Unexpected end of data in AC coefficient decoding");let AA=q&15,nA=q>>4;if(AA===0){if(nA<15){let O=u(nA);if(O===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");w=O+(1<<nA)-1;break}_+=16}else{_+=nA;let O=We[_],sA=p(AA);if(sA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");Y[O]=sA*(1<<s),_++}}}let S=0,R;function D(M,Y){let _=r,J=I,q=0;for(;_<=J;){let AA=We[_],nA=Y[AA]<0?-1:1;switch(S){case 0:{let O=h(M.huffmanTableAC);if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");let sA=O&15;if(q=O>>4,sA===0)if(q<15){let gA=u(q);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");w=gA+(1<<q),S=4}else q=16,S=1;else{if(sA!==1)throw new Error("invalid ACn encoding");let gA=p(sA);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");R=gA,S=q?2:3}continue}case 1:case 2:if(Y[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");Y[AA]+=(O<<s)*nA}else q--,q===0&&(S=S===2?3:0);break;case 3:if(Y[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");Y[AA]+=(O<<s)*nA}else Y[AA]=R<<s,S=0;break;case 4:if(Y[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");Y[AA]+=(O<<s)*nA}break;default:break}_++}S===4&&(w--,w===0&&(S=0))}function k(M,Y,_,J,q){let AA=_/o|0,nA=_%o,O=AA*M.v+J,sA=nA*M.h+q;if(!M.blocks)throw new Error("Missing blocks");Y(M,M.blocks[O][sA])}function L(M,Y,_){let J=_/M.blocksPerLine|0,q=_%M.blocksPerLine;if(!M.blocks)throw new Error("Missing blocks");Y(M,M.blocks[J][q])}let H=n.length,x,N,F,v,b,T;a?r===0?T=g===0?f:Q:T=g===0?d:D:T=y;let U=0,K,Z;H===1?Z=n[0].blocksPerLine*n[0].blocksPerColumn:Z=o*e.mcusPerColumn;let z=i||Z;for(;U<Z;){for(N=0;N<H;N++)n[N].pred=0;if(w=0,H===1)for(x=n[0],b=0;b<z;b++)L(x,T,U),U++;else for(b=0;b<z;b++){for(N=0;N<H;N++){x=n[N];let{h:M,v:Y}=x;for(F=0;F<Y;F++)for(v=0;v<M;v++)k(x,T,U,F,v)}if(U++,U===Z)break}if(c=0,K=A[B]<<8|A[B+1],K<65280)throw new Error("marker was not found");if(K>=65488&&K<=65495)B+=2;else break}return B-E}function rE(A){let t=[],{blocksPerLine:e,blocksPerColumn:n}=A;if(!e||!n||!A.blocks)throw new Error("Missing component data");let i=e<<3,r=new Int32Array(64),I=new Uint8Array(64);function g(s,o,a){let E=A.quantizationTable;if(!E)throw new Error("No quantization table found");let B,C,c,l,h,u,p,y,f,Q=a,w;for(w=0;w<64;w++)Q[w]=s[w]*E[w];for(w=0;w<8;++w){let d=8*w;if(Q[1+d]===0&&Q[2+d]===0&&Q[3+d]===0&&Q[4+d]===0&&Q[5+d]===0&&Q[6+d]===0&&Q[7+d]===0){f=Qe*Q[0+d]+512>>10,Q[0+d]=f,Q[1+d]=f,Q[2+d]=f,Q[3+d]=f,Q[4+d]=f,Q[5+d]=f,Q[6+d]=f,Q[7+d]=f;continue}B=Qe*Q[0+d]+128>>8,C=Qe*Q[4+d]+128>>8,c=Q[2+d],l=Q[6+d],h=on*(Q[1+d]-Q[7+d])+128>>8,y=on*(Q[1+d]+Q[7+d])+128>>8,u=Q[3+d]<<4,p=Q[5+d]<<4,f=B-C+1>>1,B=B+C+1>>1,C=f,f=c*rn+l*nn+128>>8,c=c*nn-l*rn+128>>8,l=f,f=h-p+1>>1,h=h+p+1>>1,p=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-c+1>>1,C=C+c+1>>1,c=f,f=h*tn+y*en+2048>>12,h=h*en-y*tn+2048>>12,y=f,f=u*An+p*$t+2048>>12,u=u*$t-p*An+2048>>12,p=f,Q[0+d]=B+y,Q[7+d]=B-y,Q[1+d]=C+p,Q[6+d]=C-p,Q[2+d]=c+u,Q[5+d]=c-u,Q[3+d]=l+h,Q[4+d]=l-h}for(w=0;w<8;++w){let d=w;if(Q[8+d]===0&&Q[16+d]===0&&Q[24+d]===0&&Q[32+d]===0&&Q[40+d]===0&&Q[48+d]===0&&Q[56+d]===0){f=Qe*a[w+0]+8192>>14,Q[0+d]=f,Q[8+d]=f,Q[16+d]=f,Q[24+d]=f,Q[32+d]=f,Q[40+d]=f,Q[48+d]=f,Q[56+d]=f;continue}B=Qe*Q[0+d]+2048>>12,C=Qe*Q[32+d]+2048>>12,c=Q[16+d],l=Q[48+d],h=on*(Q[8+d]-Q[56+d])+2048>>12,y=on*(Q[8+d]+Q[56+d])+2048>>12,u=Q[24+d],p=Q[40+d],f=B-C+1>>1,B=B+C+1>>1,C=f,f=c*rn+l*nn+2048>>12,c=c*nn-l*rn+2048>>12,l=f,f=h-p+1>>1,h=h+p+1>>1,p=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-c+1>>1,C=C+c+1>>1,c=f,f=h*tn+y*en+2048>>12,h=h*en-y*tn+2048>>12,y=f,f=u*An+p*$t+2048>>12,u=u*$t-p*An+2048>>12,p=f,Q[0+d]=B+y,Q[56+d]=B-y,Q[8+d]=C+p,Q[48+d]=C-p,Q[16+d]=c+u,Q[40+d]=c-u,Q[24+d]=l+h,Q[32+d]=l-h}for(w=0;w<64;++w){let d=128+(Q[w]+8>>4);d<0?o[w]=0:d>255?o[w]=255:o[w]=d}}for(let s=0;s<n;s++){let o=s<<3;for(let a=0;a<8;a++)t.push(new Uint8Array(i));for(let a=0;a<e;a++){g(A.blocks[s][a],I,r);let E=0,B=a<<3;for(let C=0;C<8;C++){let c=t[o+C];for(let l=0;l<8;l++)c[B+l]=I[E++]}}}return t}var We,$t,An,en,tn,nn,rn,Qe,on,Si,gn,ag=EA(()=>{UA();We=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),$t=4017,An=799,en=3406,tn=2276,nn=1567,rn=3784,Qe=5793,on=2896;Si=class{constructor(){this.jfif=null,this.adobe=null,this.resetInterval=0,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.frames=[]}resetFrames(){this.frames=[]}parse(t){let e=0;function n(){let g=t[e]<<8|t[e+1];return e+=2,g}function i(){let g=n(),s=t.subarray(e,e+g-2);return e+=s.length,s}function r(g){let s=0,o=0,a,E;for(E in g.components)g.components.hasOwnProperty(E)&&(a=g.components[E],s<a.h&&(s=a.h),o<a.v&&(o=a.v));let B=Math.ceil(g.samplesPerLine/8/s),C=Math.ceil(g.scanLines/8/o);for(E in g.components)if(g.components.hasOwnProperty(E)){a=g.components[E];let c=Math.ceil(Math.ceil(g.samplesPerLine/8)*a.h/s),l=Math.ceil(Math.ceil(g.scanLines/8)*a.v/o),h=B*a.h,u=C*a.v,p=[];for(let y=0;y<u;y++){let f=[];for(let Q=0;Q<h;Q++)f.push(new Int32Array(64));p.push(f)}a.blocksPerLine=c,a.blocksPerColumn=l,a.blocks=p}g.maxH=s,g.maxV=o,g.mcusPerLine=B,g.mcusPerColumn=C}let I=n();if(I!==65496)throw new Error("SOI not found");for(I=n();I!==65497;){switch(I){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{let g=i();I===65504&&g[0]===74&&g[1]===70&&g[2]===73&&g[3]===70&&g[4]===0&&(this.jfif={version:{major:g[5],minor:g[6]},densityUnits:g[7],xDensity:g[8]<<8|g[9],yDensity:g[10]<<8|g[11],thumbWidth:g[12],thumbHeight:g[13],thumbData:g.subarray(14,14+3*g[12]*g[13])}),I===65518&&g[0]===65&&g[1]===100&&g[2]===111&&g[3]===98&&g[4]===101&&g[5]===0&&(this.adobe={version:g[6],flags0:g[7]<<8|g[8],flags1:g[9]<<8|g[10],transformCode:g[11]});break}case 65499:{let s=n()+e-2;for(;e<s;){let o=t[e++],a=new Int32Array(64);if(o>>4===0)for(let E=0;E<64;E++){let B=We[E];a[B]=t[e++]}else if(o>>4===1)for(let E=0;E<64;E++){let B=We[E];a[B]=n()}else throw new Error("DQT: invalid table spec");this.quantizationTables[o&15]=a}break}case 65472:case 65473:case 65474:{n();let g={extended:I===65473,progressive:I===65474,precision:t[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[],maxH:0,maxV:0,mcusPerLine:0,mcusPerColumn:0},s=t[e++],o;for(let a=0;a<s;a++){o=t[e];let E=t[e+1]>>4,B=t[e+1]&15,C=t[e+2];g.componentsOrder.push(o),g.components[o]={h:E,v:B,quantizationIdx:C,blocksPerLine:0,blocksPerColumn:0,blocks:[]},e+=3}r(g),this.frames.push(g);break}case 65476:{let g=n();for(let s=2;s<g;){let o=t[e++],a=new Uint8Array(16),E=0;for(let C=0;C<16;C++,e++)a[C]=t[e],E+=a[C];let B=new Uint8Array(E);for(let C=0;C<E;C++,e++)B[C]=t[e];s+=17+E,o>>4===0?this.huffmanTablesDC[o&15]=og(a,B):this.huffmanTablesAC[o&15]=og(a,B)}break}case 65501:n(),this.resetInterval=n();break;case 65498:{n();let g=t[e++],s=[],o=this.frames[0];for(let c=0;c<g;c++){let l=o.components[t[e++]],h=t[e++];l.huffmanTableDC=this.huffmanTablesDC[h>>4],l.huffmanTableAC=this.huffmanTablesAC[h&15],s.push(l)}let a=t[e++],E=t[e++],B=t[e++],C=iE(t,e,o,s,this.resetInterval,a,E,B>>4,B&15);e+=C;break}case 65535:t[e]!==255&&e--;break;default:if(t[e-3]===255&&t[e-2]>=192&&t[e-2]<=254){e-=3;break}throw new Error(`unknown JPEG marker ${I.toString(16)}`)}I=n()}}getResult(){let{frames:t}=this;if(this.frames.length===0)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(let a=0;a<this.frames.length;a++){let E=this.frames[a].components;for(let B of Object.keys(E)){let C=E[B].quantizationIdx;typeof C=="number"&&(E[B].quantizationTable=this.quantizationTables[C],delete E[B].quantizationIdx)}}let e=t[0];if(!e.maxH||!e.maxV)throw new Error("Invalid frame dimensions");let{components:n,componentsOrder:i}=e,r=[],I=e.samplesPerLine,g=e.scanLines;for(let a=0;a<i.length;a++){let E=n[i[a]];r.push({lines:rE(E),scaleX:E.h/e.maxH,scaleY:E.v/e.maxV})}let s=new Uint8Array(I*g*r.length),o=0;for(let a=0;a<g;++a)for(let E=0;E<I;++E)for(let B=0;B<r.length;++B){let C=r[B];s[o]=C.lines[0|a*C.scaleY][0|E*C.scaleX],++o}return s}},gn=class extends iA{constructor(t){super(t),this.reader=new Si,t.JPEGTables&&this.reader.parse(t.JPEGTables)}decodeBlock(t){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(t)),this.reader.getResult().buffer}}});function we(A){let t=A.length;for(;--t>=0;)A[t]=0}function Ri(A,t,e,n,i){this.static_tree=A,this.extra_bits=t,this.extra_base=e,this.elems=n,this.max_length=i,this.has_stree=A&&A.length}function ki(A,t){this.dyn_tree=A,this.max_code=0,this.stat_desc=t}function kA(A,t,e,n,i){this.good_length=A,this.max_lazy=t,this.nice_length=e,this.max_chain=n,this.func=i}function gc(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=hn,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(XE*2),this.dyn_dtree=new Uint16Array((2*jE+1)*2),this.bl_tree=new Uint16Array((2*zE+1)*2),OA(this.dyn_ltree),OA(this.dyn_dtree),OA(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array($E+1),this.heap=new Uint16Array(2*Oi+1),OA(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Oi+1),OA(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function kc(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}function Bt(A){this.options=fn.assign({level:Uc,method:Tc,chunkSize:16384,windowBits:15,memLevel:8,strategy:Mc},A||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ca,this.strm.avail_out=0;let e=At.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==ln)throw new Error(ne[e]);if(t.header&&At.deflateSetHeader(this.strm,t.header),t.dictionary){let n;if(typeof t.dictionary=="string"?n=at.string2buf(t.dictionary):la.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,e=At.deflateSetDictionary(this.strm,n),e!==ln)throw new Error(ne[e]);this._dict_set=!0}}function er(A,t){let e=new Bt(t);if(e.push(A,!0),e.err)throw e.msg||ne[e.err];return e.result}function _c(A,t){return t=t||{},t.raw=!0,er(A,t)}function Yc(A,t){return t=t||{},t.gzip=!0,er(A,t)}function al(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Dl(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}function Et(A){this.options=fn.assign({chunkSize:1024*64,windowBits:15,to:""},A||{});let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(A&&A.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ca,this.strm.avail_out=0;let e=_A.inflateInit2(this.strm,t.windowBits);if(e!==st)throw new Error(ne[e]);if(this.header=new Sl,_A.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=at.string2buf(t.dictionary):Na.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=_A.inflateSetDictionary(this.strm,t.dictionary),e!==st)))throw new Error(ne[e])}function tr(A,t){let e=new Et(t);if(e.push(A),e.err)throw e.msg||ne[e.err];return e.result}function xl(A,t){return t=t||{},t.raw=!0,tr(A,t)}var oE,Vg,gE,aE,sE,ji,It,tt,de,zi,Zg,Ae,Ni,IE,Xi,Wg,jg,zg,Hi,En,CE,Xg,BE,TA,$e,nt,it,$i,cn,$g,Aa,ea,ta,rt,lA,GA,na,EE,cE,ia,lE,ra,oa,sg,Gi,Ig,Ki,Cg,Bg,QE,hE,fE,Eg,dE,ga,uE,pE,wE,yE,mE,DE,SE,NE,RE,kE,ot,GE,xE,LE,rA,ne,ye,bE,Pi,FE,qA,UE,VA,ME,TE,pA,cg,oA,lg,xA,_E,xi,YE,vE,an,HE,KE,PE,OE,hn,JE,qE,VE,ZE,WE,Oi,jE,zE,XE,$E,P,JA,LA,Ac,ue,Ar,Ji,qi,Vi,Zi,ee,ze,CA,me,ie,De,ec,te,Qg,OA,tc,nc,ZA,fA,dA,V,je,Wi,aa,pe,sa,Li,he,ic,rc,Xe,oc,Ct,Ia,Ca,ac,Ba,sc,Ic,Cc,Bc,Ec,cc,lc,Qc,hc,fc,dc,uc,pc,At,wc,yc,mc,fn,Ea,gt,Dc,Sc,Nc,Rc,at,ca,la,Gc,xc,Lc,bc,ln,Fc,Uc,Mc,Tc,vc,Hc,Kc,Pc,Oc,Jc,sn,qc,Vc,fe,hg,fg,dg,bi,ug,Zc,Wc,jc,zc,Xc,et,$c,Qa,ha,pg,Al,In,re,el,tl,wA,fa,da,nl,wg,dn,yg,mg,Dg,Sg,Ng,Rg,kg,Gg,xg,Qn,MA,Fi,Lg,Ui,bg,Fg,Ug,Mg,Cn,Bn,Tg,_g,Yg,vg,Hg,Mi,Kg,Pg,$,ua,pa,il,rl,ol,gl,Og,oe,wa,ya,ma,Da,sl,Jg,Ti,_i,Il,Sa,Cl,Bl,El,cl,ll,Ql,hl,fl,dl,ul,pl,wl,yl,ml,_A,Sl,Na,Nl,Rl,st,Yi,vi,kl,qg,Gl,Ll,bl,Fl,Ul,Ml,Tl,lu,Qu,hu,fu,du,_l,uu,pu,un,nr=EA(()=>{oE=0,Vg=1,gE=2,aE=3,sE=258,ji=29,It=256,tt=It+1+ji,de=30,zi=19,Zg=2*tt+1,Ae=15,Ni=16,IE=7,Xi=256,Wg=16,jg=17,zg=18,Hi=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),En=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),CE=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Xg=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),BE=512,TA=new Array((tt+2)*2);we(TA);$e=new Array(de*2);we($e);nt=new Array(BE);we(nt);it=new Array(sE-aE+1);we(it);$i=new Array(ji);we($i);cn=new Array(de);we(cn);ta=A=>A<256?nt[A]:nt[256+(A>>>7)],rt=(A,t)=>{A.pending_buf[A.pending++]=t&255,A.pending_buf[A.pending++]=t>>>8&255},lA=(A,t,e)=>{A.bi_valid>Ni-e?(A.bi_buf|=t<<A.bi_valid&65535,rt(A,A.bi_buf),A.bi_buf=t>>Ni-A.bi_valid,A.bi_valid+=e-Ni):(A.bi_buf|=t<<A.bi_valid&65535,A.bi_valid+=e)},GA=(A,t,e)=>{lA(A,e[t*2],e[t*2+1])},na=(A,t)=>{let e=0;do e|=A&1,A>>>=1,e<<=1;while(--t>0);return e>>>1},EE=A=>{A.bi_valid===16?(rt(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)},cE=(A,t)=>{let e=t.dyn_tree,n=t.max_code,i=t.stat_desc.static_tree,r=t.stat_desc.has_stree,I=t.stat_desc.extra_bits,g=t.stat_desc.extra_base,s=t.stat_desc.max_length,o,a,E,B,C,c,l=0;for(B=0;B<=Ae;B++)A.bl_count[B]=0;for(e[A.heap[A.heap_max]*2+1]=0,o=A.heap_max+1;o<Zg;o++)a=A.heap[o],B=e[e[a*2+1]*2+1]+1,B>s&&(B=s,l++),e[a*2+1]=B,!(a>n)&&(A.bl_count[B]++,C=0,a>=g&&(C=I[a-g]),c=e[a*2],A.opt_len+=c*(B+C),r&&(A.static_len+=c*(i[a*2+1]+C)));if(l!==0){do{for(B=s-1;A.bl_count[B]===0;)B--;A.bl_count[B]--,A.bl_count[B+1]+=2,A.bl_count[s]--,l-=2}while(l>0);for(B=s;B!==0;B--)for(a=A.bl_count[B];a!==0;)E=A.heap[--o],!(E>n)&&(e[E*2+1]!==B&&(A.opt_len+=(B-e[E*2+1])*e[E*2],e[E*2+1]=B),a--)}},ia=(A,t,e)=>{let n=new Array(Ae+1),i=0,r,I;for(r=1;r<=Ae;r++)i=i+e[r-1]<<1,n[r]=i;for(I=0;I<=t;I++){let g=A[I*2+1];g!==0&&(A[I*2]=na(n[g]++,g))}},lE=()=>{let A,t,e,n,i,r=new Array(Ae+1);for(e=0,n=0;n<ji-1;n++)for($i[n]=e,A=0;A<1<<Hi[n];A++)it[e++]=n;for(it[e-1]=n,i=0,n=0;n<16;n++)for(cn[n]=i,A=0;A<1<<En[n];A++)nt[i++]=n;for(i>>=7;n<de;n++)for(cn[n]=i<<7,A=0;A<1<<En[n]-7;A++)nt[256+i++]=n;for(t=0;t<=Ae;t++)r[t]=0;for(A=0;A<=143;)TA[A*2+1]=8,A++,r[8]++;for(;A<=255;)TA[A*2+1]=9,A++,r[9]++;for(;A<=279;)TA[A*2+1]=7,A++,r[7]++;for(;A<=287;)TA[A*2+1]=8,A++,r[8]++;for(ia(TA,tt+1,r),A=0;A<de;A++)$e[A*2+1]=5,$e[A*2]=na(A,5);$g=new Ri(TA,Hi,It+1,tt,Ae),Aa=new Ri($e,En,0,de,Ae),ea=new Ri(new Array(0),CE,0,zi,IE)},ra=A=>{let t;for(t=0;t<tt;t++)A.dyn_ltree[t*2]=0;for(t=0;t<de;t++)A.dyn_dtree[t*2]=0;for(t=0;t<zi;t++)A.bl_tree[t*2]=0;A.dyn_ltree[Xi*2]=1,A.opt_len=A.static_len=0,A.sym_next=A.matches=0},oa=A=>{A.bi_valid>8?rt(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0},sg=(A,t,e,n)=>{let i=t*2,r=e*2;return A[i]<A[r]||A[i]===A[r]&&n[t]<=n[e]},Gi=(A,t,e)=>{let n=A.heap[e],i=e<<1;for(;i<=A.heap_len&&(i<A.heap_len&&sg(t,A.heap[i+1],A.heap[i],A.depth)&&i++,!sg(t,n,A.heap[i],A.depth));)A.heap[e]=A.heap[i],e=i,i<<=1;A.heap[e]=n},Ig=(A,t,e)=>{let n,i,r=0,I,g;if(A.sym_next!==0)do n=A.pending_buf[A.sym_buf+r++]&255,n+=(A.pending_buf[A.sym_buf+r++]&255)<<8,i=A.pending_buf[A.sym_buf+r++],n===0?GA(A,i,t):(I=it[i],GA(A,I+It+1,t),g=Hi[I],g!==0&&(i-=$i[I],lA(A,i,g)),n--,I=ta(n),GA(A,I,e),g=En[I],g!==0&&(n-=cn[I],lA(A,n,g)));while(r<A.sym_next);GA(A,Xi,t)},Ki=(A,t)=>{let e=t.dyn_tree,n=t.stat_desc.static_tree,i=t.stat_desc.has_stree,r=t.stat_desc.elems,I,g,s=-1,o;for(A.heap_len=0,A.heap_max=Zg,I=0;I<r;I++)e[I*2]!==0?(A.heap[++A.heap_len]=s=I,A.depth[I]=0):e[I*2+1]=0;for(;A.heap_len<2;)o=A.heap[++A.heap_len]=s<2?++s:0,e[o*2]=1,A.depth[o]=0,A.opt_len--,i&&(A.static_len-=n[o*2+1]);for(t.max_code=s,I=A.heap_len>>1;I>=1;I--)Gi(A,e,I);o=r;do I=A.heap[1],A.heap[1]=A.heap[A.heap_len--],Gi(A,e,1),g=A.heap[1],A.heap[--A.heap_max]=I,A.heap[--A.heap_max]=g,e[o*2]=e[I*2]+e[g*2],A.depth[o]=(A.depth[I]>=A.depth[g]?A.depth[I]:A.depth[g])+1,e[I*2+1]=e[g*2+1]=o,A.heap[1]=o++,Gi(A,e,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],cE(A,t),ia(e,s,A.bl_count)},Cg=(A,t,e)=>{let n,i=-1,r,I=t[1],g=0,s=7,o=4;for(I===0&&(s=138,o=3),t[(e+1)*2+1]=65535,n=0;n<=e;n++)r=I,I=t[(n+1)*2+1],!(++g<s&&r===I)&&(g<o?A.bl_tree[r*2]+=g:r!==0?(r!==i&&A.bl_tree[r*2]++,A.bl_tree[Wg*2]++):g<=10?A.bl_tree[jg*2]++:A.bl_tree[zg*2]++,g=0,i=r,I===0?(s=138,o=3):r===I?(s=6,o=3):(s=7,o=4))},Bg=(A,t,e)=>{let n,i=-1,r,I=t[1],g=0,s=7,o=4;for(I===0&&(s=138,o=3),n=0;n<=e;n++)if(r=I,I=t[(n+1)*2+1],!(++g<s&&r===I)){if(g<o)do GA(A,r,A.bl_tree);while(--g!==0);else r!==0?(r!==i&&(GA(A,r,A.bl_tree),g--),GA(A,Wg,A.bl_tree),lA(A,g-3,2)):g<=10?(GA(A,jg,A.bl_tree),lA(A,g-3,3)):(GA(A,zg,A.bl_tree),lA(A,g-11,7));g=0,i=r,I===0?(s=138,o=3):r===I?(s=6,o=3):(s=7,o=4)}},QE=A=>{let t;for(Cg(A,A.dyn_ltree,A.l_desc.max_code),Cg(A,A.dyn_dtree,A.d_desc.max_code),Ki(A,A.bl_desc),t=zi-1;t>=3&&A.bl_tree[Xg[t]*2+1]===0;t--);return A.opt_len+=3*(t+1)+5+5+4,t},hE=(A,t,e,n)=>{let i;for(lA(A,t-257,5),lA(A,e-1,5),lA(A,n-4,4),i=0;i<n;i++)lA(A,A.bl_tree[Xg[i]*2+1],3);Bg(A,A.dyn_ltree,t-1),Bg(A,A.dyn_dtree,e-1)},fE=A=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&A.dyn_ltree[e*2]!==0)return 0;if(A.dyn_ltree[18]!==0||A.dyn_ltree[20]!==0||A.dyn_ltree[26]!==0)return 1;for(e=32;e<It;e++)if(A.dyn_ltree[e*2]!==0)return 1;return 0},Eg=!1,dE=A=>{Eg||(lE(),Eg=!0),A.l_desc=new ki(A.dyn_ltree,$g),A.d_desc=new ki(A.dyn_dtree,Aa),A.bl_desc=new ki(A.bl_tree,ea),A.bi_buf=0,A.bi_valid=0,ra(A)},ga=(A,t,e,n)=>{lA(A,(oE<<1)+(n?1:0),3),oa(A),rt(A,e),rt(A,~e),e&&A.pending_buf.set(A.window.subarray(t,t+e),A.pending),A.pending+=e},uE=A=>{lA(A,Vg<<1,3),GA(A,Xi,TA),EE(A)},pE=(A,t,e,n)=>{let i,r,I=0;A.level>0?(A.strm.data_type===2&&(A.strm.data_type=fE(A)),Ki(A,A.l_desc),Ki(A,A.d_desc),I=QE(A),i=A.opt_len+3+7>>>3,r=A.static_len+3+7>>>3,r<=i&&(i=r)):i=r=e+5,e+4<=i&&t!==-1?ga(A,t,e,n):A.strategy===4||r===i?(lA(A,(Vg<<1)+(n?1:0),3),Ig(A,TA,$e)):(lA(A,(gE<<1)+(n?1:0),3),hE(A,A.l_desc.max_code+1,A.d_desc.max_code+1,I+1),Ig(A,A.dyn_ltree,A.dyn_dtree)),ra(A),n&&oa(A)},wE=(A,t,e)=>(A.pending_buf[A.sym_buf+A.sym_next++]=t,A.pending_buf[A.sym_buf+A.sym_next++]=t>>8,A.pending_buf[A.sym_buf+A.sym_next++]=e,t===0?A.dyn_ltree[e*2]++:(A.matches++,t--,A.dyn_ltree[(it[e]+It+1)*2]++,A.dyn_dtree[ta(t)*2]++),A.sym_next===A.sym_end),yE=dE,mE=ga,DE=pE,SE=wE,NE=uE,RE={_tr_init:yE,_tr_stored_block:mE,_tr_flush_block:DE,_tr_tally:SE,_tr_align:NE},kE=(A,t,e,n)=>{let i=A&65535|0,r=A>>>16&65535|0,I=0;for(;e!==0;){I=e>2e3?2e3:e,e-=I;do i=i+t[n++]|0,r=r+i|0;while(--I);i%=65521,r%=65521}return i|r<<16|0},ot=kE,GE=()=>{let A,t=[];for(var e=0;e<256;e++){A=e;for(var n=0;n<8;n++)A=A&1?3988292384^A>>>1:A>>>1;t[e]=A}return t},xE=new Uint32Array(GE()),LE=(A,t,e,n)=>{let i=xE,r=n+e;A^=-1;for(let I=n;I<r;I++)A=A>>>8^i[(A^t[I])&255];return A^-1},rA=LE,ne={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},ye={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},{_tr_init:bE,_tr_stored_block:Pi,_tr_flush_block:FE,_tr_tally:qA,_tr_align:UE}=RE,{Z_NO_FLUSH:VA,Z_PARTIAL_FLUSH:ME,Z_FULL_FLUSH:TE,Z_FINISH:pA,Z_BLOCK:cg,Z_OK:oA,Z_STREAM_END:lg,Z_STREAM_ERROR:xA,Z_DATA_ERROR:_E,Z_BUF_ERROR:xi,Z_DEFAULT_COMPRESSION:YE,Z_FILTERED:vE,Z_HUFFMAN_ONLY:an,Z_RLE:HE,Z_FIXED:KE,Z_DEFAULT_STRATEGY:PE,Z_UNKNOWN:OE,Z_DEFLATED:hn}=ye,JE=9,qE=15,VE=8,ZE=29,WE=256,Oi=WE+1+ZE,jE=30,zE=19,XE=2*Oi+1,$E=15,P=3,JA=258,LA=JA+P+1,Ac=32,ue=42,Ar=57,Ji=69,qi=73,Vi=91,Zi=103,ee=113,ze=666,CA=1,me=2,ie=3,De=4,ec=3,te=(A,t)=>(A.msg=ne[t],t),Qg=A=>A*2-(A>4?9:0),OA=A=>{let t=A.length;for(;--t>=0;)A[t]=0},tc=A=>{let t,e,n,i=A.w_size;t=A.hash_size,n=t;do e=A.head[--n],A.head[n]=e>=i?e-i:0;while(--t);t=i,n=t;do e=A.prev[--n],A.prev[n]=e>=i?e-i:0;while(--t)},nc=(A,t,e)=>(t<<A.hash_shift^e)&A.hash_mask,ZA=nc,fA=A=>{let t=A.state,e=t.pending;e>A.avail_out&&(e=A.avail_out),e!==0&&(A.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),A.next_out),A.next_out+=e,t.pending_out+=e,A.total_out+=e,A.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},dA=(A,t)=>{FE(A,A.block_start>=0?A.block_start:-1,A.strstart-A.block_start,t),A.block_start=A.strstart,fA(A.strm)},V=(A,t)=>{A.pending_buf[A.pending++]=t},je=(A,t)=>{A.pending_buf[A.pending++]=t>>>8&255,A.pending_buf[A.pending++]=t&255},Wi=(A,t,e,n)=>{let i=A.avail_in;return i>n&&(i=n),i===0?0:(A.avail_in-=i,t.set(A.input.subarray(A.next_in,A.next_in+i),e),A.state.wrap===1?A.adler=ot(A.adler,t,i,e):A.state.wrap===2&&(A.adler=rA(A.adler,t,i,e)),A.next_in+=i,A.total_in+=i,i)},aa=(A,t)=>{let e=A.max_chain_length,n=A.strstart,i,r,I=A.prev_length,g=A.nice_match,s=A.strstart>A.w_size-LA?A.strstart-(A.w_size-LA):0,o=A.window,a=A.w_mask,E=A.prev,B=A.strstart+JA,C=o[n+I-1],c=o[n+I];A.prev_length>=A.good_match&&(e>>=2),g>A.lookahead&&(g=A.lookahead);do if(i=t,!(o[i+I]!==c||o[i+I-1]!==C||o[i]!==o[n]||o[++i]!==o[n+1])){n+=2,i++;do;while(o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&n<B);if(r=JA-(B-n),n=B-JA,r>I){if(A.match_start=t,I=r,r>=g)break;C=o[n+I-1],c=o[n+I]}}while((t=E[t&a])>s&&--e!==0);return I<=A.lookahead?I:A.lookahead},pe=A=>{let t=A.w_size,e,n,i;do{if(n=A.window_size-A.lookahead-A.strstart,A.strstart>=t+(t-LA)&&(A.window.set(A.window.subarray(t,t+t-n),0),A.match_start-=t,A.strstart-=t,A.block_start-=t,A.insert>A.strstart&&(A.insert=A.strstart),tc(A),n+=t),A.strm.avail_in===0)break;if(e=Wi(A.strm,A.window,A.strstart+A.lookahead,n),A.lookahead+=e,A.lookahead+A.insert>=P)for(i=A.strstart-A.insert,A.ins_h=A.window[i],A.ins_h=ZA(A,A.ins_h,A.window[i+1]);A.insert&&(A.ins_h=ZA(A,A.ins_h,A.window[i+P-1]),A.prev[i&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=i,i++,A.insert--,!(A.lookahead+A.insert<P)););}while(A.lookahead<LA&&A.strm.avail_in!==0)},sa=(A,t)=>{let e=A.pending_buf_size-5>A.w_size?A.w_size:A.pending_buf_size-5,n,i,r,I=0,g=A.strm.avail_in;do{if(n=65535,r=A.bi_valid+42>>3,A.strm.avail_out<r||(r=A.strm.avail_out-r,i=A.strstart-A.block_start,n>i+A.strm.avail_in&&(n=i+A.strm.avail_in),n>r&&(n=r),n<e&&(n===0&&t!==pA||t===VA||n!==i+A.strm.avail_in)))break;I=t===pA&&n===i+A.strm.avail_in?1:0,Pi(A,0,0,I),A.pending_buf[A.pending-4]=n,A.pending_buf[A.pending-3]=n>>8,A.pending_buf[A.pending-2]=~n,A.pending_buf[A.pending-1]=~n>>8,fA(A.strm),i&&(i>n&&(i=n),A.strm.output.set(A.window.subarray(A.block_start,A.block_start+i),A.strm.next_out),A.strm.next_out+=i,A.strm.avail_out-=i,A.strm.total_out+=i,A.block_start+=i,n-=i),n&&(Wi(A.strm,A.strm.output,A.strm.next_out,n),A.strm.next_out+=n,A.strm.avail_out-=n,A.strm.total_out+=n)}while(I===0);return g-=A.strm.avail_in,g&&(g>=A.w_size?(A.matches=2,A.window.set(A.strm.input.subarray(A.strm.next_in-A.w_size,A.strm.next_in),0),A.strstart=A.w_size,A.insert=A.strstart):(A.window_size-A.strstart<=g&&(A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,A.insert>A.strstart&&(A.insert=A.strstart)),A.window.set(A.strm.input.subarray(A.strm.next_in-g,A.strm.next_in),A.strstart),A.strstart+=g,A.insert+=g>A.w_size-A.insert?A.w_size-A.insert:g),A.block_start=A.strstart),A.high_water<A.strstart&&(A.high_water=A.strstart),I?De:t!==VA&&t!==pA&&A.strm.avail_in===0&&A.strstart===A.block_start?me:(r=A.window_size-A.strstart,A.strm.avail_in>r&&A.block_start>=A.w_size&&(A.block_start-=A.w_size,A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,r+=A.w_size,A.insert>A.strstart&&(A.insert=A.strstart)),r>A.strm.avail_in&&(r=A.strm.avail_in),r&&(Wi(A.strm,A.window,A.strstart,r),A.strstart+=r,A.insert+=r>A.w_size-A.insert?A.w_size-A.insert:r),A.high_water<A.strstart&&(A.high_water=A.strstart),r=A.bi_valid+42>>3,r=A.pending_buf_size-r>65535?65535:A.pending_buf_size-r,e=r>A.w_size?A.w_size:r,i=A.strstart-A.block_start,(i>=e||(i||t===pA)&&t!==VA&&A.strm.avail_in===0&&i<=r)&&(n=i>r?r:i,I=t===pA&&A.strm.avail_in===0&&n===i?1:0,Pi(A,A.block_start,n,I),A.block_start+=n,fA(A.strm)),I?ie:CA)},Li=(A,t)=>{let e,n;for(;;){if(A.lookahead<LA){if(pe(A),A.lookahead<LA&&t===VA)return CA;if(A.lookahead===0)break}if(e=0,A.lookahead>=P&&(A.ins_h=ZA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),e!==0&&A.strstart-e<=A.w_size-LA&&(A.match_length=aa(A,e)),A.match_length>=P)if(n=qA(A,A.strstart-A.match_start,A.match_length-P),A.lookahead-=A.match_length,A.match_length<=A.max_lazy_match&&A.lookahead>=P){A.match_length--;do A.strstart++,A.ins_h=ZA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart;while(--A.match_length!==0);A.strstart++}else A.strstart+=A.match_length,A.match_length=0,A.ins_h=A.window[A.strstart],A.ins_h=ZA(A,A.ins_h,A.window[A.strstart+1]);else n=qA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++;if(n&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=A.strstart<P-1?A.strstart:P-1,t===pA?(dA(A,!0),A.strm.avail_out===0?ie:De):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:me},he=(A,t)=>{let e,n,i;for(;;){if(A.lookahead<LA){if(pe(A),A.lookahead<LA&&t===VA)return CA;if(A.lookahead===0)break}if(e=0,A.lookahead>=P&&(A.ins_h=ZA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),A.prev_length=A.match_length,A.prev_match=A.match_start,A.match_length=P-1,e!==0&&A.prev_length<A.max_lazy_match&&A.strstart-e<=A.w_size-LA&&(A.match_length=aa(A,e),A.match_length<=5&&(A.strategy===vE||A.match_length===P&&A.strstart-A.match_start>4096)&&(A.match_length=P-1)),A.prev_length>=P&&A.match_length<=A.prev_length){i=A.strstart+A.lookahead-P,n=qA(A,A.strstart-1-A.prev_match,A.prev_length-P),A.lookahead-=A.prev_length-1,A.prev_length-=2;do++A.strstart<=i&&(A.ins_h=ZA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart);while(--A.prev_length!==0);if(A.match_available=0,A.match_length=P-1,A.strstart++,n&&(dA(A,!1),A.strm.avail_out===0))return CA}else if(A.match_available){if(n=qA(A,0,A.window[A.strstart-1]),n&&dA(A,!1),A.strstart++,A.lookahead--,A.strm.avail_out===0)return CA}else A.match_available=1,A.strstart++,A.lookahead--}return A.match_available&&(n=qA(A,0,A.window[A.strstart-1]),A.match_available=0),A.insert=A.strstart<P-1?A.strstart:P-1,t===pA?(dA(A,!0),A.strm.avail_out===0?ie:De):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:me},ic=(A,t)=>{let e,n,i,r,I=A.window;for(;;){if(A.lookahead<=JA){if(pe(A),A.lookahead<=JA&&t===VA)return CA;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=P&&A.strstart>0&&(i=A.strstart-1,n=I[i],n===I[++i]&&n===I[++i]&&n===I[++i])){r=A.strstart+JA;do;while(n===I[++i]&&n===I[++i]&&n===I[++i]&&n===I[++i]&&n===I[++i]&&n===I[++i]&&n===I[++i]&&n===I[++i]&&i<r);A.match_length=JA-(r-i),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=P?(e=qA(A,1,A.match_length-P),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(e=qA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),e&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=0,t===pA?(dA(A,!0),A.strm.avail_out===0?ie:De):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:me},rc=(A,t)=>{let e;for(;;){if(A.lookahead===0&&(pe(A),A.lookahead===0)){if(t===VA)return CA;break}if(A.match_length=0,e=qA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,e&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=0,t===pA?(dA(A,!0),A.strm.avail_out===0?ie:De):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:me};Xe=[new kA(0,0,0,0,sa),new kA(4,4,8,4,Li),new kA(4,5,16,8,Li),new kA(4,6,32,32,Li),new kA(4,4,16,16,he),new kA(8,16,32,32,he),new kA(8,16,128,128,he),new kA(8,32,128,256,he),new kA(32,128,258,1024,he),new kA(32,258,258,4096,he)],oc=A=>{A.window_size=2*A.w_size,OA(A.head),A.max_lazy_match=Xe[A.level].max_lazy,A.good_match=Xe[A.level].good_length,A.nice_match=Xe[A.level].nice_length,A.max_chain_length=Xe[A.level].max_chain,A.strstart=0,A.block_start=0,A.lookahead=0,A.insert=0,A.match_length=A.prev_length=P-1,A.match_available=0,A.ins_h=0};Ct=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.status!==ue&&t.status!==Ar&&t.status!==Ji&&t.status!==qi&&t.status!==Vi&&t.status!==Zi&&t.status!==ee&&t.status!==ze?1:0},Ia=A=>{if(Ct(A))return te(A,xA);A.total_in=A.total_out=0,A.data_type=OE;let t=A.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?Ar:t.wrap?ue:ee,A.adler=t.wrap===2?0:1,t.last_flush=-2,bE(t),oA},Ca=A=>{let t=Ia(A);return t===oA&&oc(A.state),t},ac=(A,t)=>Ct(A)||A.state.wrap!==2?xA:(A.state.gzhead=t,oA),Ba=(A,t,e,n,i,r)=>{if(!A)return xA;let I=1;if(t===YE&&(t=6),n<0?(I=0,n=-n):n>15&&(I=2,n-=16),i<1||i>JE||e!==hn||n<8||n>15||t<0||t>9||r<0||r>KE||n===8&&I!==1)return te(A,xA);n===8&&(n=9);let g=new gc;return A.state=g,g.strm=A,g.status=ue,g.wrap=I,g.gzhead=null,g.w_bits=n,g.w_size=1<<g.w_bits,g.w_mask=g.w_size-1,g.hash_bits=i+7,g.hash_size=1<<g.hash_bits,g.hash_mask=g.hash_size-1,g.hash_shift=~~((g.hash_bits+P-1)/P),g.window=new Uint8Array(g.w_size*2),g.head=new Uint16Array(g.hash_size),g.prev=new Uint16Array(g.w_size),g.lit_bufsize=1<<i+6,g.pending_buf_size=g.lit_bufsize*4,g.pending_buf=new Uint8Array(g.pending_buf_size),g.sym_buf=g.lit_bufsize,g.sym_end=(g.lit_bufsize-1)*3,g.level=t,g.strategy=r,g.method=e,Ca(A)},sc=(A,t)=>Ba(A,t,hn,qE,VE,PE),Ic=(A,t)=>{if(Ct(A)||t>cg||t<0)return A?te(A,xA):xA;let e=A.state;if(!A.output||A.avail_in!==0&&!A.input||e.status===ze&&t!==pA)return te(A,A.avail_out===0?xi:xA);let n=e.last_flush;if(e.last_flush=t,e.pending!==0){if(fA(A),A.avail_out===0)return e.last_flush=-1,oA}else if(A.avail_in===0&&Qg(t)<=Qg(n)&&t!==pA)return te(A,xi);if(e.status===ze&&A.avail_in!==0)return te(A,xi);if(e.status===ue&&e.wrap===0&&(e.status=ee),e.status===ue){let i=hn+(e.w_bits-8<<4)<<8,r=-1;if(e.strategy>=an||e.level<2?r=0:e.level<6?r=1:e.level===6?r=2:r=3,i|=r<<6,e.strstart!==0&&(i|=Ac),i+=31-i%31,je(e,i),e.strstart!==0&&(je(e,A.adler>>>16),je(e,A.adler&65535)),A.adler=1,e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(e.status===Ar){if(A.adler=0,V(e,31),V(e,139),V(e,8),e.gzhead)V(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),V(e,e.gzhead.time&255),V(e,e.gzhead.time>>8&255),V(e,e.gzhead.time>>16&255),V(e,e.gzhead.time>>24&255),V(e,e.level===9?2:e.strategy>=an||e.level<2?4:0),V(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(V(e,e.gzhead.extra.length&255),V(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(A.adler=rA(A.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=Ji;else if(V(e,0),V(e,0),V(e,0),V(e,0),V(e,0),V(e,e.level===9?2:e.strategy>=an||e.level<2?4:0),V(e,ec),e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(e.status===Ji){if(e.gzhead.extra){let i=e.pending,r=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+r>e.pending_buf_size;){let g=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+g),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex+=g,fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0,r-=g}let I=new Uint8Array(e.gzhead.extra);e.pending_buf.set(I.subarray(e.gzindex,e.gzindex+r),e.pending),e.pending+=r,e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=qi}if(e.status===qi){if(e.gzhead.name){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0}e.gzindex<e.gzhead.name.length?r=e.gzhead.name.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=Vi}if(e.status===Vi){if(e.gzhead.comment){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0}e.gzindex<e.gzhead.comment.length?r=e.gzhead.comment.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i))}e.status=Zi}if(e.status===Zi){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(fA(A),e.pending!==0))return e.last_flush=-1,oA;V(e,A.adler&255),V(e,A.adler>>8&255),A.adler=0}if(e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(A.avail_in!==0||e.lookahead!==0||t!==VA&&e.status!==ze){let i=e.level===0?sa(e,t):e.strategy===an?rc(e,t):e.strategy===HE?ic(e,t):Xe[e.level].func(e,t);if((i===ie||i===De)&&(e.status=ze),i===CA||i===ie)return A.avail_out===0&&(e.last_flush=-1),oA;if(i===me&&(t===ME?UE(e):t!==cg&&(Pi(e,0,0,!1),t===TE&&(OA(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),fA(A),A.avail_out===0))return e.last_flush=-1,oA}return t!==pA?oA:e.wrap<=0?lg:(e.wrap===2?(V(e,A.adler&255),V(e,A.adler>>8&255),V(e,A.adler>>16&255),V(e,A.adler>>24&255),V(e,A.total_in&255),V(e,A.total_in>>8&255),V(e,A.total_in>>16&255),V(e,A.total_in>>24&255)):(je(e,A.adler>>>16),je(e,A.adler&65535)),fA(A),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?oA:lg)},Cc=A=>{if(Ct(A))return xA;let t=A.state.status;return A.state=null,t===ee?te(A,_E):oA},Bc=(A,t)=>{let e=t.length;if(Ct(A))return xA;let n=A.state,i=n.wrap;if(i===2||i===1&&n.status!==ue||n.lookahead)return xA;if(i===1&&(A.adler=ot(A.adler,t,e,0)),n.wrap=0,e>=n.w_size){i===0&&(OA(n.head),n.strstart=0,n.block_start=0,n.insert=0);let s=new Uint8Array(n.w_size);s.set(t.subarray(e-n.w_size,e),0),t=s,e=n.w_size}let r=A.avail_in,I=A.next_in,g=A.input;for(A.avail_in=e,A.next_in=0,A.input=t,pe(n);n.lookahead>=P;){let s=n.strstart,o=n.lookahead-(P-1);do n.ins_h=ZA(n,n.ins_h,n.window[s+P-1]),n.prev[s&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=s,s++;while(--o);n.strstart=s,n.lookahead=P-1,pe(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=P-1,n.match_available=0,A.next_in=I,A.input=g,A.avail_in=r,n.wrap=i,oA},Ec=sc,cc=Ba,lc=Ca,Qc=Ia,hc=ac,fc=Ic,dc=Cc,uc=Bc,pc="pako deflate (from Nodeca project)",At={deflateInit:Ec,deflateInit2:cc,deflateReset:lc,deflateResetKeep:Qc,deflateSetHeader:hc,deflate:fc,deflateEnd:dc,deflateSetDictionary:uc,deflateInfo:pc},wc=(A,t)=>Object.prototype.hasOwnProperty.call(A,t),yc=function(A){let t=Array.prototype.slice.call(arguments,1);for(;t.length;){let e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(let n in e)wc(e,n)&&(A[n]=e[n])}}return A},mc=A=>{let t=0;for(let n=0,i=A.length;n<i;n++)t+=A[n].length;let e=new Uint8Array(t);for(let n=0,i=0,r=A.length;n<r;n++){let I=A[n];e.set(I,i),i+=I.length}return e},fn={assign:yc,flattenChunks:mc},Ea=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Ea=!1}gt=new Uint8Array(256);for(let A=0;A<256;A++)gt[A]=A>=252?6:A>=248?5:A>=240?4:A>=224?3:A>=192?2:1;gt[254]=gt[254]=1;Dc=A=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(A);let t,e,n,i,r,I=A.length,g=0;for(i=0;i<I;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<I&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),g+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(g),r=0,i=0;r<g;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<I&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),e<128?t[r++]=e:e<2048?(t[r++]=192|e>>>6,t[r++]=128|e&63):e<65536?(t[r++]=224|e>>>12,t[r++]=128|e>>>6&63,t[r++]=128|e&63):(t[r++]=240|e>>>18,t[r++]=128|e>>>12&63,t[r++]=128|e>>>6&63,t[r++]=128|e&63);return t},Sc=(A,t)=>{if(t<65534&&A.subarray&&Ea)return String.fromCharCode.apply(null,A.length===t?A:A.subarray(0,t));let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(A[n]);return e},Nc=(A,t)=>{let e=t||A.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(A.subarray(0,t));let n,i,r=new Array(e*2);for(i=0,n=0;n<e;){let I=A[n++];if(I<128){r[i++]=I;continue}let g=gt[I];if(g>4){r[i++]=65533,n+=g-1;continue}for(I&=g===2?31:g===3?15:7;g>1&&n<e;)I=I<<6|A[n++]&63,g--;if(g>1){r[i++]=65533;continue}I<65536?r[i++]=I:(I-=65536,r[i++]=55296|I>>10&1023,r[i++]=56320|I&1023)}return Sc(r,i)},Rc=(A,t)=>{t=t||A.length,t>A.length&&(t=A.length);let e=t-1;for(;e>=0&&(A[e]&192)===128;)e--;return e<0||e===0?t:e+gt[A[e]]>t?e:t},at={string2buf:Dc,buf2string:Nc,utf8border:Rc};ca=kc,la=Object.prototype.toString,{Z_NO_FLUSH:Gc,Z_SYNC_FLUSH:xc,Z_FULL_FLUSH:Lc,Z_FINISH:bc,Z_OK:ln,Z_STREAM_END:Fc,Z_DEFAULT_COMPRESSION:Uc,Z_DEFAULT_STRATEGY:Mc,Z_DEFLATED:Tc}=ye;Bt.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i,r;if(this.ended)return!1;for(t===~~t?r=t:r=t===!0?bc:Gc,typeof A=="string"?e.input=at.string2buf(A):la.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),(r===xc||r===Lc)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(i=At.deflate(e,r),i===Fc)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),i=At.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===ln;if(e.avail_out===0){this.onData(e.output);continue}if(r>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};Bt.prototype.onData=function(A){this.chunks.push(A)};Bt.prototype.onEnd=function(A){A===ln&&(this.result=fn.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};vc=Bt,Hc=er,Kc=_c,Pc=Yc,Oc=ye,Jc={Deflate:vc,deflate:Hc,deflateRaw:Kc,gzip:Pc,constants:Oc},sn=16209,qc=16191,Vc=function(t,e){let n,i,r,I,g,s,o,a,E,B,C,c,l,h,u,p,y,f,Q,w,d,S,R,D,k=t.state;n=t.next_in,R=t.input,i=n+(t.avail_in-5),r=t.next_out,D=t.output,I=r-(e-t.avail_out),g=r+(t.avail_out-257),s=k.dmax,o=k.wsize,a=k.whave,E=k.wnext,B=k.window,C=k.hold,c=k.bits,l=k.lencode,h=k.distcode,u=(1<<k.lenbits)-1,p=(1<<k.distbits)-1;A:do{c<15&&(C+=R[n++]<<c,c+=8,C+=R[n++]<<c,c+=8),y=l[C&u];e:for(;;){if(f=y>>>24,C>>>=f,c-=f,f=y>>>16&255,f===0)D[r++]=y&65535;else if(f&16){Q=y&65535,f&=15,f&&(c<f&&(C+=R[n++]<<c,c+=8),Q+=C&(1<<f)-1,C>>>=f,c-=f),c<15&&(C+=R[n++]<<c,c+=8,C+=R[n++]<<c,c+=8),y=h[C&p];t:for(;;){if(f=y>>>24,C>>>=f,c-=f,f=y>>>16&255,f&16){if(w=y&65535,f&=15,c<f&&(C+=R[n++]<<c,c+=8,c<f&&(C+=R[n++]<<c,c+=8)),w+=C&(1<<f)-1,w>s){t.msg="invalid distance too far back",k.mode=sn;break A}if(C>>>=f,c-=f,f=r-I,w>f){if(f=w-f,f>a&&k.sane){t.msg="invalid distance too far back",k.mode=sn;break A}if(d=0,S=B,E===0){if(d+=o-f,f<Q){Q-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}}else if(E<f){if(d+=o+E-f,f-=E,f<Q){Q-=f;do D[r++]=B[d++];while(--f);if(d=0,E<Q){f=E,Q-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}}}else if(d+=E-f,f<Q){Q-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}for(;Q>2;)D[r++]=S[d++],D[r++]=S[d++],D[r++]=S[d++],Q-=3;Q&&(D[r++]=S[d++],Q>1&&(D[r++]=S[d++]))}else{d=r-w;do D[r++]=D[d++],D[r++]=D[d++],D[r++]=D[d++],Q-=3;while(Q>2);Q&&(D[r++]=D[d++],Q>1&&(D[r++]=D[d++]))}}else if((f&64)===0){y=h[(y&65535)+(C&(1<<f)-1)];continue t}else{t.msg="invalid distance code",k.mode=sn;break A}break}}else if((f&64)===0){y=l[(y&65535)+(C&(1<<f)-1)];continue e}else if(f&32){k.mode=qc;break A}else{t.msg="invalid literal/length code",k.mode=sn;break A}break}}while(n<i&&r<g);Q=c>>3,n-=Q,c-=Q<<3,C&=(1<<c)-1,t.next_in=n,t.next_out=r,t.avail_in=n<i?5+(i-n):5-(n-i),t.avail_out=r<g?257+(g-r):257-(r-g),k.hold=C,k.bits=c},fe=15,hg=852,fg=592,dg=0,bi=1,ug=2,Zc=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Wc=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),jc=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),zc=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Xc=(A,t,e,n,i,r,I,g)=>{let s=g.bits,o=0,a=0,E=0,B=0,C=0,c=0,l=0,h=0,u=0,p=0,y,f,Q,w,d,S=null,R,D=new Uint16Array(fe+1),k=new Uint16Array(fe+1),L=null,H,x,N;for(o=0;o<=fe;o++)D[o]=0;for(a=0;a<n;a++)D[t[e+a]]++;for(C=s,B=fe;B>=1&&D[B]===0;B--);if(C>B&&(C=B),B===0)return i[r++]=1<<24|64<<16|0,i[r++]=1<<24|64<<16|0,g.bits=1,0;for(E=1;E<B&&D[E]===0;E++);for(C<E&&(C=E),h=1,o=1;o<=fe;o++)if(h<<=1,h-=D[o],h<0)return-1;if(h>0&&(A===dg||B!==1))return-1;for(k[1]=0,o=1;o<fe;o++)k[o+1]=k[o]+D[o];for(a=0;a<n;a++)t[e+a]!==0&&(I[k[t[e+a]]++]=a);if(A===dg?(S=L=I,R=20):A===bi?(S=Zc,L=Wc,R=257):(S=jc,L=zc,R=0),p=0,a=0,o=E,d=r,c=C,l=0,Q=-1,u=1<<C,w=u-1,A===bi&&u>hg||A===ug&&u>fg)return 1;for(;;){H=o-l,I[a]+1<R?(x=0,N=I[a]):I[a]>=R?(x=L[I[a]-R],N=S[I[a]-R]):(x=96,N=0),y=1<<o-l,f=1<<c,E=f;do f-=y,i[d+(p>>l)+f]=H<<24|x<<16|N|0;while(f!==0);for(y=1<<o-1;p&y;)y>>=1;if(y!==0?(p&=y-1,p+=y):p=0,a++,--D[o]===0){if(o===B)break;o=t[e+I[a]]}if(o>C&&(p&w)!==Q){for(l===0&&(l=C),d+=E,c=o-l,h=1<<c;c+l<B&&(h-=D[c+l],!(h<=0));)c++,h<<=1;if(u+=1<<c,A===bi&&u>hg||A===ug&&u>fg)return 1;Q=p&w,i[Q]=C<<24|c<<16|d-r|0}}return p!==0&&(i[d+p]=o-l<<24|64<<16|0),g.bits=C,0},et=Xc,$c=0,Qa=1,ha=2,{Z_FINISH:pg,Z_BLOCK:Al,Z_TREES:In,Z_OK:re,Z_STREAM_END:el,Z_NEED_DICT:tl,Z_STREAM_ERROR:wA,Z_DATA_ERROR:fa,Z_MEM_ERROR:da,Z_BUF_ERROR:nl,Z_DEFLATED:wg}=ye,dn=16180,yg=16181,mg=16182,Dg=16183,Sg=16184,Ng=16185,Rg=16186,kg=16187,Gg=16188,xg=16189,Qn=16190,MA=16191,Fi=16192,Lg=16193,Ui=16194,bg=16195,Fg=16196,Ug=16197,Mg=16198,Cn=16199,Bn=16200,Tg=16201,_g=16202,Yg=16203,vg=16204,Hg=16205,Mi=16206,Kg=16207,Pg=16208,$=16209,ua=16210,pa=16211,il=852,rl=592,ol=15,gl=ol,Og=A=>(A>>>24&255)+(A>>>8&65280)+((A&65280)<<8)+((A&255)<<24);oe=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.mode<dn||t.mode>pa?1:0},wa=A=>{if(oe(A))return wA;let t=A.state;return A.total_in=A.total_out=t.total=0,A.msg="",t.wrap&&(A.adler=t.wrap&1),t.mode=dn,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(il),t.distcode=t.distdyn=new Int32Array(rl),t.sane=1,t.back=-1,re},ya=A=>{if(oe(A))return wA;let t=A.state;return t.wsize=0,t.whave=0,t.wnext=0,wa(A)},ma=(A,t)=>{let e;if(oe(A))return wA;let n=A.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?wA:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=e,n.wbits=t,ya(A))},Da=(A,t)=>{if(!A)return wA;let e=new al;A.state=e,e.strm=A,e.window=null,e.mode=dn;let n=ma(A,t);return n!==re&&(A.state=null),n},sl=A=>Da(A,gl),Jg=!0,Il=A=>{if(Jg){Ti=new Int32Array(512),_i=new Int32Array(32);let t=0;for(;t<144;)A.lens[t++]=8;for(;t<256;)A.lens[t++]=9;for(;t<280;)A.lens[t++]=7;for(;t<288;)A.lens[t++]=8;for(et(Qa,A.lens,0,288,Ti,0,A.work,{bits:9}),t=0;t<32;)A.lens[t++]=5;et(ha,A.lens,0,32,_i,0,A.work,{bits:5}),Jg=!1}A.lencode=Ti,A.lenbits=9,A.distcode=_i,A.distbits=5},Sa=(A,t,e,n)=>{let i,r=A.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(i=r.wsize-r.wnext,i>n&&(i=n),r.window.set(t.subarray(e-n,e-n+i),r.wnext),n-=i,n?(r.window.set(t.subarray(e-n,e),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=i,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=i))),0},Cl=(A,t)=>{let e,n,i,r,I,g,s,o,a,E,B,C,c,l,h=0,u,p,y,f,Q,w,d,S,R=new Uint8Array(4),D,k,L=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(oe(A)||!A.output||!A.input&&A.avail_in!==0)return wA;e=A.state,e.mode===MA&&(e.mode=Fi),I=A.next_out,i=A.output,s=A.avail_out,r=A.next_in,n=A.input,g=A.avail_in,o=e.hold,a=e.bits,E=g,B=s,S=re;A:for(;;)switch(e.mode){case dn:if(e.wrap===0){e.mode=Fi;break}for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&2&&o===35615){e.wbits===0&&(e.wbits=15),e.check=0,R[0]=o&255,R[1]=o>>>8&255,e.check=rA(e.check,R,2,0),o=0,a=0,e.mode=yg;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((o&255)<<8)+(o>>8))%31){A.msg="incorrect header check",e.mode=$;break}if((o&15)!==wg){A.msg="unknown compression method",e.mode=$;break}if(o>>>=4,a-=4,d=(o&15)+8,e.wbits===0&&(e.wbits=d),d>15||d>e.wbits){A.msg="invalid window size",e.mode=$;break}e.dmax=1<<e.wbits,e.flags=0,A.adler=e.check=1,e.mode=o&512?xg:MA,o=0,a=0;break;case yg:for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.flags=o,(e.flags&255)!==wg){A.msg="unknown compression method",e.mode=$;break}if(e.flags&57344){A.msg="unknown header flags set",e.mode=$;break}e.head&&(e.head.text=o>>8&1),e.flags&512&&e.wrap&4&&(R[0]=o&255,R[1]=o>>>8&255,e.check=rA(e.check,R,2,0)),o=0,a=0,e.mode=mg;case mg:for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.head&&(e.head.time=o),e.flags&512&&e.wrap&4&&(R[0]=o&255,R[1]=o>>>8&255,R[2]=o>>>16&255,R[3]=o>>>24&255,e.check=rA(e.check,R,4,0)),o=0,a=0,e.mode=Dg;case Dg:for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.head&&(e.head.xflags=o&255,e.head.os=o>>8),e.flags&512&&e.wrap&4&&(R[0]=o&255,R[1]=o>>>8&255,e.check=rA(e.check,R,2,0)),o=0,a=0,e.mode=Sg;case Sg:if(e.flags&1024){for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.length=o,e.head&&(e.head.extra_len=o),e.flags&512&&e.wrap&4&&(R[0]=o&255,R[1]=o>>>8&255,e.check=rA(e.check,R,2,0)),o=0,a=0}else e.head&&(e.head.extra=null);e.mode=Ng;case Ng:if(e.flags&1024&&(C=e.length,C>g&&(C=g),C&&(e.head&&(d=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(n.subarray(r,r+C),d)),e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,e.length-=C),e.length))break A;e.length=0,e.mode=Rg;case Rg:if(e.flags&2048){if(g===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.name+=String.fromCharCode(d));while(d&&C<g);if(e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,d)break A}else e.head&&(e.head.name=null);e.length=0,e.mode=kg;case kg:if(e.flags&4096){if(g===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.comment+=String.fromCharCode(d));while(d&&C<g);if(e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,d)break A}else e.head&&(e.head.comment=null);e.mode=Gg;case Gg:if(e.flags&512){for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&4&&o!==(e.check&65535)){A.msg="header crc mismatch",e.mode=$;break}o=0,a=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),A.adler=e.check=0,e.mode=MA;break;case xg:for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}A.adler=e.check=Og(o),o=0,a=0,e.mode=Qn;case Qn:if(e.havedict===0)return A.next_out=I,A.avail_out=s,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,tl;A.adler=e.check=1,e.mode=MA;case MA:if(t===Al||t===In)break A;case Fi:if(e.last){o>>>=a&7,a-=a&7,e.mode=Mi;break}for(;a<3;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}switch(e.last=o&1,o>>>=1,a-=1,o&3){case 0:e.mode=Lg;break;case 1:if(Il(e),e.mode=Cn,t===In){o>>>=2,a-=2;break A}break;case 2:e.mode=Fg;break;case 3:A.msg="invalid block type",e.mode=$}o>>>=2,a-=2;break;case Lg:for(o>>>=a&7,a-=a&7;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if((o&65535)!==(o>>>16^65535)){A.msg="invalid stored block lengths",e.mode=$;break}if(e.length=o&65535,o=0,a=0,e.mode=Ui,t===In)break A;case Ui:e.mode=bg;case bg:if(C=e.length,C){if(C>g&&(C=g),C>s&&(C=s),C===0)break A;i.set(n.subarray(r,r+C),I),g-=C,r+=C,s-=C,I+=C,e.length-=C;break}e.mode=MA;break;case Fg:for(;a<14;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.nlen=(o&31)+257,o>>>=5,a-=5,e.ndist=(o&31)+1,o>>>=5,a-=5,e.ncode=(o&15)+4,o>>>=4,a-=4,e.nlen>286||e.ndist>30){A.msg="too many length or distance symbols",e.mode=$;break}e.have=0,e.mode=Ug;case Ug:for(;e.have<e.ncode;){for(;a<3;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.lens[L[e.have++]]=o&7,o>>>=3,a-=3}for(;e.have<19;)e.lens[L[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,D={bits:e.lenbits},S=et($c,e.lens,0,19,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid code lengths set",e.mode=$;break}e.have=0,e.mode=Mg;case Mg:for(;e.have<e.nlen+e.ndist;){for(;h=e.lencode[o&(1<<e.lenbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(y<16)o>>>=u,a-=u,e.lens[e.have++]=y;else{if(y===16){for(k=u+2;a<k;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(o>>>=u,a-=u,e.have===0){A.msg="invalid bit length repeat",e.mode=$;break}d=e.lens[e.have-1],C=3+(o&3),o>>>=2,a-=2}else if(y===17){for(k=u+3;a<k;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=u,a-=u,d=0,C=3+(o&7),o>>>=3,a-=3}else{for(k=u+7;a<k;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=u,a-=u,d=0,C=11+(o&127),o>>>=7,a-=7}if(e.have+C>e.nlen+e.ndist){A.msg="invalid bit length repeat",e.mode=$;break}for(;C--;)e.lens[e.have++]=d}}if(e.mode===$)break;if(e.lens[256]===0){A.msg="invalid code -- missing end-of-block",e.mode=$;break}if(e.lenbits=9,D={bits:e.lenbits},S=et(Qa,e.lens,0,e.nlen,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid literal/lengths set",e.mode=$;break}if(e.distbits=6,e.distcode=e.distdyn,D={bits:e.distbits},S=et(ha,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,D),e.distbits=D.bits,S){A.msg="invalid distances set",e.mode=$;break}if(e.mode=Cn,t===In)break A;case Cn:e.mode=Bn;case Bn:if(g>=6&&s>=258){A.next_out=I,A.avail_out=s,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,Vc(A,B),I=A.next_out,i=A.output,s=A.avail_out,r=A.next_in,n=A.input,g=A.avail_in,o=e.hold,a=e.bits,e.mode===MA&&(e.back=-1);break}for(e.back=0;h=e.lencode[o&(1<<e.lenbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(p&&(p&240)===0){for(f=u,Q=p,w=y;h=e.lencode[w+((o&(1<<f+Q)-1)>>f)],u=h>>>24,p=h>>>16&255,y=h&65535,!(f+u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=f,a-=f,e.back+=f}if(o>>>=u,a-=u,e.back+=u,e.length=y,p===0){e.mode=Hg;break}if(p&32){e.back=-1,e.mode=MA;break}if(p&64){A.msg="invalid literal/length code",e.mode=$;break}e.extra=p&15,e.mode=Tg;case Tg:if(e.extra){for(k=e.extra;a<k;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.length+=o&(1<<e.extra)-1,o>>>=e.extra,a-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=_g;case _g:for(;h=e.distcode[o&(1<<e.distbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if((p&240)===0){for(f=u,Q=p,w=y;h=e.distcode[w+((o&(1<<f+Q)-1)>>f)],u=h>>>24,p=h>>>16&255,y=h&65535,!(f+u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=f,a-=f,e.back+=f}if(o>>>=u,a-=u,e.back+=u,p&64){A.msg="invalid distance code",e.mode=$;break}e.offset=y,e.extra=p&15,e.mode=Yg;case Yg:if(e.extra){for(k=e.extra;a<k;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.offset+=o&(1<<e.extra)-1,o>>>=e.extra,a-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){A.msg="invalid distance too far back",e.mode=$;break}e.mode=vg;case vg:if(s===0)break A;if(C=B-s,e.offset>C){if(C=e.offset-C,C>e.whave&&e.sane){A.msg="invalid distance too far back",e.mode=$;break}C>e.wnext?(C-=e.wnext,c=e.wsize-C):c=e.wnext-C,C>e.length&&(C=e.length),l=e.window}else l=i,c=I-e.offset,C=e.length;C>s&&(C=s),s-=C,e.length-=C;do i[I++]=l[c++];while(--C);e.length===0&&(e.mode=Bn);break;case Hg:if(s===0)break A;i[I++]=e.length,s--,e.mode=Bn;break;case Mi:if(e.wrap){for(;a<32;){if(g===0)break A;g--,o|=n[r++]<<a,a+=8}if(B-=s,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?rA(e.check,i,B,I-B):ot(e.check,i,B,I-B)),B=s,e.wrap&4&&(e.flags?o:Og(o))!==e.check){A.msg="incorrect data check",e.mode=$;break}o=0,a=0}e.mode=Kg;case Kg:if(e.wrap&&e.flags){for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&4&&o!==(e.total&4294967295)){A.msg="incorrect length check",e.mode=$;break}o=0,a=0}e.mode=Pg;case Pg:S=el;break A;case $:S=fa;break A;case ua:return da;case pa:default:return wA}return A.next_out=I,A.avail_out=s,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,(e.wsize||B!==A.avail_out&&e.mode<$&&(e.mode<Mi||t!==pg))&&Sa(A,A.output,A.next_out,B-A.avail_out),E-=A.avail_in,B-=A.avail_out,A.total_in+=E,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?rA(e.check,i,B,A.next_out-B):ot(e.check,i,B,A.next_out-B)),A.data_type=e.bits+(e.last?64:0)+(e.mode===MA?128:0)+(e.mode===Cn||e.mode===Ui?256:0),(E===0&&B===0||t===pg)&&S===re&&(S=nl),S},Bl=A=>{if(oe(A))return wA;let t=A.state;return t.window&&(t.window=null),A.state=null,re},El=(A,t)=>{if(oe(A))return wA;let e=A.state;return(e.wrap&2)===0?wA:(e.head=t,t.done=!1,re)},cl=(A,t)=>{let e=t.length,n,i,r;return oe(A)||(n=A.state,n.wrap!==0&&n.mode!==Qn)?wA:n.mode===Qn&&(i=1,i=ot(i,t,e,0),i!==n.check)?fa:(r=Sa(A,t,e,e),r?(n.mode=ua,da):(n.havedict=1,re))},ll=ya,Ql=ma,hl=wa,fl=sl,dl=Da,ul=Cl,pl=Bl,wl=El,yl=cl,ml="pako inflate (from Nodeca project)",_A={inflateReset:ll,inflateReset2:Ql,inflateResetKeep:hl,inflateInit:fl,inflateInit2:dl,inflate:ul,inflateEnd:pl,inflateGetHeader:wl,inflateSetDictionary:yl,inflateInfo:ml};Sl=Dl,Na=Object.prototype.toString,{Z_NO_FLUSH:Nl,Z_FINISH:Rl,Z_OK:st,Z_STREAM_END:Yi,Z_NEED_DICT:vi,Z_STREAM_ERROR:kl,Z_DATA_ERROR:qg,Z_MEM_ERROR:Gl}=ye;Et.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i=this.options.dictionary,r,I,g;if(this.ended)return!1;for(t===~~t?I=t:I=t===!0?Rl:Nl,Na.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),r=_A.inflate(e,I),r===vi&&i&&(r=_A.inflateSetDictionary(e,i),r===st?r=_A.inflate(e,I):r===qg&&(r=vi));e.avail_in>0&&r===Yi&&e.state.wrap>0&&A[e.next_in]!==0;)_A.inflateReset(e),r=_A.inflate(e,I);switch(r){case kl:case qg:case vi:case Gl:return this.onEnd(r),this.ended=!0,!1}if(g=e.avail_out,e.next_out&&(e.avail_out===0||r===Yi))if(this.options.to==="string"){let s=at.utf8border(e.output,e.next_out),o=e.next_out-s,a=at.buf2string(e.output,s);e.next_out=o,e.avail_out=n-o,o&&e.output.set(e.output.subarray(s,s+o),0),this.onData(a)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(r===st&&g===0)){if(r===Yi)return r=_A.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};Et.prototype.onData=function(A){this.chunks.push(A)};Et.prototype.onEnd=function(A){A===st&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=fn.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};Ll=Et,bl=tr,Fl=xl,Ul=tr,Ml=ye,Tl={Inflate:Ll,inflate:bl,inflateRaw:Fl,ungzip:Ul,constants:Ml},{Deflate:lu,deflate:Qu,deflateRaw:hu,gzip:fu}=Jc,{Inflate:du,inflate:_l,inflateRaw:uu,ungzip:pu}=Tl,un=_l});var Ra={};DA(Ra,{default:()=>pn});var pn,ka=EA(()=>{nr();UA();pn=class extends iA{decodeBlock(t){return un(new Uint8Array(t)).buffer}}});var Ga={};DA(Ga,{default:()=>wn});var wn,xa=EA(()=>{UA();wn=class extends iA{decodeBlock(t){let e=new DataView(t),n=[];for(let i=0;i<t.byteLength;++i){let r=e.getInt8(i);if(r<0){let I=e.getUint8(i+1);r=-r;for(let g=0;g<=r;++g)n.push(I);i+=1}else{for(let I=0;I<=r;++I)n.push(e.getUint8(i+I+1));i+=r+1}}return new Uint8Array(n).buffer}}});var La=kt((Su,yn)=>{(function(){var A=(function(){var i={};i.defaultNoDataValue=-34027999387901484e22,i.decode=function(a,E){E=E||{};var B=E.encodedMaskData||E.encodedMaskData===null,C=s(a,E.inputOffset||0,B),c=E.noDataValue!==null?E.noDataValue:i.defaultNoDataValue,l=r(C,E.pixelType||Float32Array,E.encodedMaskData,c,E.returnMask),h={width:C.width,height:C.height,pixelData:l.resultPixels,minValue:l.minValue,maxValue:C.pixels.maxValue,noDataValue:c};return l.resultMask&&(h.maskData=l.resultMask),E.returnEncodedMask&&C.mask&&(h.encodedMaskData=C.mask.bitset?C.mask.bitset:null),E.returnFileInfo&&(h.fileInfo=I(C),E.computeUsedBitDepths&&(h.fileInfo.bitDepths=g(C))),h};var r=function(a,E,B,C,c){var l=0,h=a.pixels.numBlocksX,u=a.pixels.numBlocksY,p=Math.floor(a.width/h),y=Math.floor(a.height/u),f=2*a.maxZError,Q=Number.MAX_VALUE,w;B=B||(a.mask?a.mask.bitset:null);var d,S;d=new E(a.width*a.height),c&&B&&(S=new Uint8Array(a.width*a.height));for(var R=new Float32Array(p*y),D,k,L=0;L<=u;L++){var H=L!==u?y:a.height%u;if(H!==0)for(var x=0;x<=h;x++){var N=x!==h?p:a.width%h;if(N!==0){var F=L*a.width*y+x*p,v=a.width-N,b=a.pixels.blocks[l],T,U,K;b.encoding<2?(b.encoding===0?T=b.rawData:(o(b.stuffedData,b.bitsPerPixel,b.numValidPixels,b.offset,f,R,a.pixels.maxValue),T=R),U=0):b.encoding===2?K=0:K=b.offset;var Z;if(B)for(k=0;k<H;k++){for(F&7&&(Z=B[F>>3],Z<<=F&7),D=0;D<N;D++)F&7||(Z=B[F>>3]),Z&128?(S&&(S[F]=1),w=b.encoding<2?T[U++]:K,Q=Q>w?w:Q,d[F++]=w):(S&&(S[F]=0),d[F++]=C),Z<<=1;F+=v}else if(b.encoding<2)for(k=0;k<H;k++){for(D=0;D<N;D++)w=T[U++],Q=Q>w?w:Q,d[F++]=w;F+=v}else for(Q=Q>K?K:Q,k=0;k<H;k++){for(D=0;D<N;D++)d[F++]=K;F+=v}if(b.encoding===1&&U!==b.numValidPixels)throw"Block and Mask do not match";l++}}}return{resultPixels:d,resultMask:S,minValue:Q}},I=function(a){return{fileIdentifierString:a.fileIdentifierString,fileVersion:a.fileVersion,imageType:a.imageType,height:a.height,width:a.width,maxZError:a.maxZError,eofOffset:a.eofOffset,mask:a.mask?{numBlocksX:a.mask.numBlocksX,numBlocksY:a.mask.numBlocksY,numBytes:a.mask.numBytes,maxValue:a.mask.maxValue}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,numBytes:a.pixels.numBytes,maxValue:a.pixels.maxValue,noDataValue:a.noDataValue}}},g=function(a){for(var E=a.pixels.numBlocksX*a.pixels.numBlocksY,B={},C=0;C<E;C++){var c=a.pixels.blocks[C];c.encoding===0?B.float32=!0:c.encoding===1?B[c.bitsPerPixel]=!0:B[0]=!0}return Object.keys(B)},s=function(a,E,B){var C={},c=new Uint8Array(a,E,10);if(C.fileIdentifierString=String.fromCharCode.apply(null,c),C.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+C.fileIdentifierString;E+=10;var l=new DataView(a,E,24);if(C.fileVersion=l.getInt32(0,!0),C.imageType=l.getInt32(4,!0),C.height=l.getUint32(8,!0),C.width=l.getUint32(12,!0),C.maxZError=l.getFloat64(16,!0),E+=24,!B)if(l=new DataView(a,E,16),C.mask={},C.mask.numBlocksY=l.getUint32(0,!0),C.mask.numBlocksX=l.getUint32(4,!0),C.mask.numBytes=l.getUint32(8,!0),C.mask.maxValue=l.getFloat32(12,!0),E+=16,C.mask.numBytes>0){var h=new Uint8Array(Math.ceil(C.width*C.height/8));l=new DataView(a,E,C.mask.numBytes);var u=l.getInt16(0,!0),p=2,y=0;do{if(u>0)for(;u--;)h[y++]=l.getUint8(p++);else{var f=l.getUint8(p++);for(u=-u;u--;)h[y++]=f}u=l.getInt16(p,!0),p+=2}while(p<C.mask.numBytes);if(u!==-32768||y<h.length)throw"Unexpected end of mask RLE encoding";C.mask.bitset=h,E+=C.mask.numBytes}else(C.mask.numBytes|C.mask.numBlocksY|C.mask.maxValue)===0&&(C.mask.bitset=new Uint8Array(Math.ceil(C.width*C.height/8)));l=new DataView(a,E,16),C.pixels={},C.pixels.numBlocksY=l.getUint32(0,!0),C.pixels.numBlocksX=l.getUint32(4,!0),C.pixels.numBytes=l.getUint32(8,!0),C.pixels.maxValue=l.getFloat32(12,!0),E+=16;var Q=C.pixels.numBlocksX,w=C.pixels.numBlocksY,d=Q+(C.width%Q>0?1:0),S=w+(C.height%w>0?1:0);C.pixels.blocks=new Array(d*S);for(var R=0,D=0;D<S;D++)for(var k=0;k<d;k++){var L=0,H=a.byteLength-E;l=new DataView(a,E,Math.min(10,H));var x={};C.pixels.blocks[R++]=x;var N=l.getUint8(0);if(L++,x.encoding=N&63,x.encoding>3)throw"Invalid block encoding ("+x.encoding+")";if(x.encoding===2){E++;continue}if(N!==0&&N!==2){if(N>>=6,x.offsetType=N,N===2)x.offset=l.getInt8(1),L++;else if(N===1)x.offset=l.getInt16(1,!0),L+=2;else if(N===0)x.offset=l.getFloat32(1,!0),L+=4;else throw"Invalid block offset type";if(x.encoding===1)if(N=l.getUint8(L),L++,x.bitsPerPixel=N&63,N>>=6,x.numValidPixelsType=N,N===2)x.numValidPixels=l.getUint8(L),L++;else if(N===1)x.numValidPixels=l.getUint16(L,!0),L+=2;else if(N===0)x.numValidPixels=l.getUint32(L,!0),L+=4;else throw"Invalid valid pixel count type"}if(E+=L,x.encoding!==3){var F,v;if(x.encoding===0){var b=(C.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";F=new ArrayBuffer(b*4),v=new Uint8Array(F),v.set(new Uint8Array(a,E,b*4));var T=new Float32Array(F);x.rawData=T,E+=b*4}else if(x.encoding===1){var U=Math.ceil(x.numValidPixels*x.bitsPerPixel/8),K=Math.ceil(U/4);F=new ArrayBuffer(K*4),v=new Uint8Array(F),v.set(new Uint8Array(a,E,U)),x.stuffedData=new Uint32Array(F),E+=U}}}return C.eofOffset=E,C},o=function(a,E,B,C,c,l,h){var u=(1<<E)-1,p=0,y,f=0,Q,w,d=Math.ceil((h-C)/c),S=a.length*4-Math.ceil(E*B/8);for(a[a.length-1]<<=8*S,y=0;y<B;y++){if(f===0&&(w=a[p++],f=32),f>=E)Q=w>>>f-E&u,f-=E;else{var R=E-f;Q=(w&u)<<R&u,w=a[p++],f=32-R,Q+=w>>>f}l[y]=Q<d?C+Q*c:h}return l};return i})(),t=(function(){"use strict";var i={unstuff:function(s,o,a,E,B,C,c,l){var h=(1<<a)-1,u=0,p,y=0,f,Q,w,d,S=s.length*4-Math.ceil(a*E/8);if(s[s.length-1]<<=8*S,B)for(p=0;p<E;p++)y===0&&(Q=s[u++],y=32),y>=a?(f=Q>>>y-a&h,y-=a):(w=a-y,f=(Q&h)<<w&h,Q=s[u++],y=32-w,f+=Q>>>y),o[p]=B[f];else for(d=Math.ceil((l-C)/c),p=0;p<E;p++)y===0&&(Q=s[u++],y=32),y>=a?(f=Q>>>y-a&h,y-=a):(w=a-y,f=(Q&h)<<w&h,Q=s[u++],y=32-w,f+=Q>>>y),o[p]=f<d?C+f*c:l},unstuffLUT:function(s,o,a,E,B,C){var c=(1<<o)-1,l=0,h=0,u=0,p=0,y=0,f,Q=[],w=s.length*4-Math.ceil(o*a/8);s[s.length-1]<<=8*w;var d=Math.ceil((C-E)/B);for(h=0;h<a;h++)p===0&&(f=s[l++],p=32),p>=o?(y=f>>>p-o&c,p-=o):(u=o-p,y=(f&c)<<u&c,f=s[l++],p=32-u,y+=f>>>p),Q[h]=y<d?E+y*B:C;return Q.unshift(E),Q},unstuff2:function(s,o,a,E,B,C,c,l){var h=(1<<a)-1,u=0,p,y=0,f=0,Q,w,d;if(B)for(p=0;p<E;p++)y===0&&(w=s[u++],y=32,f=0),y>=a?(Q=w>>>f&h,y-=a,f+=a):(d=a-y,Q=w>>>f&h,w=s[u++],y=32-d,Q|=(w&(1<<d)-1)<<a-d,f=d),o[p]=B[Q];else{var S=Math.ceil((l-C)/c);for(p=0;p<E;p++)y===0&&(w=s[u++],y=32,f=0),y>=a?(Q=w>>>f&h,y-=a,f+=a):(d=a-y,Q=w>>>f&h,w=s[u++],y=32-d,Q|=(w&(1<<d)-1)<<a-d,f=d),o[p]=Q<S?C+Q*c:l}return o},unstuffLUT2:function(s,o,a,E,B,C){var c=(1<<o)-1,l=0,h=0,u=0,p=0,y=0,f=0,Q,w=[],d=Math.ceil((C-E)/B);for(h=0;h<a;h++)p===0&&(Q=s[l++],p=32,f=0),p>=o?(y=Q>>>f&c,p-=o,f+=o):(u=o-p,y=Q>>>f&c,Q=s[l++],p=32-u,y|=(Q&(1<<u)-1)<<o-u,f=u),w[h]=y<d?E+y*B:C;return w.unshift(E),w},originalUnstuff:function(s,o,a,E){var B=(1<<a)-1,C=0,c,l=0,h,u,p,y=s.length*4-Math.ceil(a*E/8);for(s[s.length-1]<<=8*y,c=0;c<E;c++)l===0&&(u=s[C++],l=32),l>=a?(h=u>>>l-a&B,l-=a):(p=a-l,h=(u&B)<<p&B,u=s[C++],l=32-p,h+=u>>>l),o[c]=h;return o},originalUnstuff2:function(s,o,a,E){var B=(1<<a)-1,C=0,c,l=0,h=0,u,p,y;for(c=0;c<E;c++)l===0&&(p=s[C++],l=32,h=0),l>=a?(u=p>>>h&B,l-=a,h+=a):(y=a-l,u=p>>>h&B,p=s[C++],l=32-y,u|=(p&(1<<y)-1)<<a-y,h=y),o[c]=u;return o}},r={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(s){for(var o=65535,a=65535,E=s.length,B=Math.floor(E/2),C=0;B;){var c=B>=359?359:B;B-=c;do o+=s[C++]<<8,a+=o+=s[C++];while(--c);o=(o&65535)+(o>>>16),a=(a&65535)+(a>>>16)}return E&1&&(a+=o+=s[C]<<8),o=(o&65535)+(o>>>16),a=(a&65535)+(a>>>16),(a<<16|o)>>>0},readHeaderInfo:function(s,o){var a=o.ptr,E=new Uint8Array(s,a,6),B={};if(B.fileIdentifierString=String.fromCharCode.apply(null,E),B.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+B.fileIdentifierString;a+=6;var C=new DataView(s,a,8),c=C.getInt32(0,!0);B.fileVersion=c,a+=4,c>=3&&(B.checksum=C.getUint32(4,!0),a+=4),C=new DataView(s,a,12),B.height=C.getUint32(0,!0),B.width=C.getUint32(4,!0),a+=8,c>=4?(B.numDims=C.getUint32(8,!0),a+=4):B.numDims=1,C=new DataView(s,a,40),B.numValidPixel=C.getUint32(0,!0),B.microBlockSize=C.getInt32(4,!0),B.blobSize=C.getInt32(8,!0),B.imageType=C.getInt32(12,!0),B.maxZError=C.getFloat64(16,!0),B.zMin=C.getFloat64(24,!0),B.zMax=C.getFloat64(32,!0),a+=40,o.headerInfo=B,o.ptr=a;var l,h;if(c>=3&&(h=c>=4?52:48,l=this.computeChecksumFletcher32(new Uint8Array(s,a-h,B.blobSize-14)),l!==B.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(s,o){var a=o.headerInfo,E=this.getDataTypeArray(a.imageType),B=a.numDims*this.getDataTypeSize(a.imageType),C=this.readSubArray(s,o.ptr,E,B),c=this.readSubArray(s,o.ptr+B,E,B);o.ptr+=2*B;var l,h=!0;for(l=0;l<a.numDims;l++)if(C[l]!==c[l]){h=!1;break}return a.minValues=C,a.maxValues=c,h},readSubArray:function(s,o,a,E){var B;if(a===Uint8Array)B=new Uint8Array(s,o,E);else{var C=new ArrayBuffer(E),c=new Uint8Array(C);c.set(new Uint8Array(s,o,E)),B=new a(C)}return B},readMask:function(s,o){var a=o.ptr,E=o.headerInfo,B=E.width*E.height,C=E.numValidPixel,c=new DataView(s,a,4),l={};if(l.numBytes=c.getUint32(0,!0),a+=4,(C===0||B===C)&&l.numBytes!==0)throw"invalid mask";var h,u;if(C===0)h=new Uint8Array(Math.ceil(B/8)),l.bitset=h,u=new Uint8Array(B),o.pixels.resultMask=u,a+=l.numBytes;else if(l.numBytes>0){h=new Uint8Array(Math.ceil(B/8)),c=new DataView(s,a,l.numBytes);var p=c.getInt16(0,!0),y=2,f=0,Q=0;do{if(p>0)for(;p--;)h[f++]=c.getUint8(y++);else for(Q=c.getUint8(y++),p=-p;p--;)h[f++]=Q;p=c.getInt16(y,!0),y+=2}while(y<l.numBytes);if(p!==-32768||f<h.length)throw"Unexpected end of mask RLE encoding";u=new Uint8Array(B);var w=0,d=0;for(d=0;d<B;d++)d&7?(w=h[d>>3],w<<=d&7):w=h[d>>3],w&128&&(u[d]=1);o.pixels.resultMask=u,l.bitset=h,a+=l.numBytes}return o.ptr=a,o.mask=l,!0},readDataOneSweep:function(s,o,a,E){var B=o.ptr,C=o.headerInfo,c=C.numDims,l=C.width*C.height,h=C.imageType,u=C.numValidPixel*r.getDataTypeSize(h)*c,p,y=o.pixels.resultMask;if(a===Uint8Array)p=new Uint8Array(s,B,u);else{var f=new ArrayBuffer(u),Q=new Uint8Array(f);Q.set(new Uint8Array(s,B,u)),p=new a(f)}if(p.length===l*c)E?o.pixels.resultPixels=r.swapDimensionOrder(p,l,c,a,!0):o.pixels.resultPixels=p;else{o.pixels.resultPixels=new a(l*c);var w=0,d=0,S=0,R=0;if(c>1){if(E){for(d=0;d<l;d++)if(y[d])for(R=d,S=0;S<c;S++,R+=l)o.pixels.resultPixels[R]=p[w++]}else for(d=0;d<l;d++)if(y[d])for(R=d*c,S=0;S<c;S++)o.pixels.resultPixels[R+S]=p[w++]}else for(d=0;d<l;d++)y[d]&&(o.pixels.resultPixels[d]=p[w++])}return B+=u,o.ptr=B,!0},readHuffmanTree:function(s,o){var a=this.HUFFMAN_LUT_BITS_MAX,E=new DataView(s,o.ptr,16);o.ptr+=16;var B=E.getInt32(0,!0);if(B<2)throw"unsupported Huffman version";var C=E.getInt32(4,!0),c=E.getInt32(8,!0),l=E.getInt32(12,!0);if(c>=l)return!1;var h=new Uint32Array(l-c);r.decodeBits(s,o,h);var u=[],p,y,f,Q;for(p=c;p<l;p++)y=p-(p<C?0:C),u[y]={first:h[p-c],second:null};var w=s.byteLength-o.ptr,d=Math.ceil(w/4),S=new ArrayBuffer(d*4),R=new Uint8Array(S);R.set(new Uint8Array(s,o.ptr,w));var D=new Uint32Array(S),k=0,L,H=0;for(L=D[0],p=c;p<l;p++)y=p-(p<C?0:C),Q=u[y].first,Q>0&&(u[y].second=L<<k>>>32-Q,32-k>=Q?(k+=Q,k===32&&(k=0,H++,L=D[H])):(k+=Q-32,H++,L=D[H],u[y].second|=L>>>32-k));var x=0,N=0,F=new I;for(p=0;p<u.length;p++)u[p]!==void 0&&(x=Math.max(x,u[p].first));x>=a?N=a:N=x;var v=[],b,T,U,K,Z,z;for(p=c;p<l;p++)if(y=p-(p<C?0:C),Q=u[y].first,Q>0)if(b=[Q,y],Q<=N)for(T=u[y].second<<N-Q,U=1<<N-Q,f=0;f<U;f++)v[T|f]=b;else for(T=u[y].second,z=F,K=Q-1;K>=0;K--)Z=T>>>K&1,Z?(z.right||(z.right=new I),z=z.right):(z.left||(z.left=new I),z=z.left),K===0&&!z.val&&(z.val=b[1]);return{decodeLut:v,numBitsLUTQick:N,numBitsLUT:x,tree:F,stuffedData:D,srcPtr:H,bitPos:k}},readHuffman:function(s,o,a,E){var B=o.headerInfo,C=B.numDims,c=o.headerInfo.height,l=o.headerInfo.width,h=l*c,u=this.readHuffmanTree(s,o),p=u.decodeLut,y=u.tree,f=u.stuffedData,Q=u.srcPtr,w=u.bitPos,d=u.numBitsLUTQick,S=u.numBitsLUT,R=o.headerInfo.imageType===0?128:0,D,k,L,H=o.pixels.resultMask,x,N,F,v,b,T,U,K=0;w>0&&(Q++,w=0);var Z=f[Q],z=o.encodeMode===1,M=new a(h*C),Y=M,_;if(C<2||z){for(_=0;_<C;_++)if(C>1&&(Y=new a(M.buffer,h*_,h),K=0),o.headerInfo.numValidPixel===l*c)for(T=0,v=0;v<c;v++)for(b=0;b<l;b++,T++){if(k=0,x=Z<<w>>>32-d,N=x,32-w<d&&(x|=f[Q+1]>>>64-w-d,N=x),p[N])k=p[N][1],w+=p[N][0];else for(x=Z<<w>>>32-S,N=x,32-w<S&&(x|=f[Q+1]>>>64-w-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){k=D.val,w=w+U+1;break}w>=32&&(w-=32,Q++,Z=f[Q]),L=k-R,z?(b>0?L+=K:v>0?L+=Y[T-l]:L+=K,L&=255,Y[T]=L,K=L):Y[T]=L}else for(T=0,v=0;v<c;v++)for(b=0;b<l;b++,T++)if(H[T]){if(k=0,x=Z<<w>>>32-d,N=x,32-w<d&&(x|=f[Q+1]>>>64-w-d,N=x),p[N])k=p[N][1],w+=p[N][0];else for(x=Z<<w>>>32-S,N=x,32-w<S&&(x|=f[Q+1]>>>64-w-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){k=D.val,w=w+U+1;break}w>=32&&(w-=32,Q++,Z=f[Q]),L=k-R,z?(b>0&&H[T-1]?L+=K:v>0&&H[T-l]?L+=Y[T-l]:L+=K,L&=255,Y[T]=L,K=L):Y[T]=L}}else for(T=0,v=0;v<c;v++)for(b=0;b<l;b++)if(T=v*l+b,!H||H[T])for(_=0;_<C;_++,T+=h){if(k=0,x=Z<<w>>>32-d,N=x,32-w<d&&(x|=f[Q+1]>>>64-w-d,N=x),p[N])k=p[N][1],w+=p[N][0];else for(x=Z<<w>>>32-S,N=x,32-w<S&&(x|=f[Q+1]>>>64-w-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){k=D.val,w=w+U+1;break}w>=32&&(w-=32,Q++,Z=f[Q]),L=k-R,Y[T]=L}o.ptr=o.ptr+(Q+1)*4+(w>0?4:0),o.pixels.resultPixels=M,C>1&&!E&&(o.pixels.resultPixels=r.swapDimensionOrder(M,h,C,a))},decodeBits:function(s,o,a,E,B){{var C=o.headerInfo,c=C.fileVersion,l=0,h=s.byteLength-o.ptr>=5?5:s.byteLength-o.ptr,u=new DataView(s,o.ptr,h),p=u.getUint8(0);l++;var y=p>>6,f=y===0?4:3-y,Q=(p&32)>0,w=p&31,d=0;if(f===1)d=u.getUint8(l),l++;else if(f===2)d=u.getUint16(l,!0),l+=2;else if(f===4)d=u.getUint32(l,!0),l+=4;else throw"Invalid valid pixel count type";var S=2*C.maxZError,R,D,k,L,H,x,N,F,v,b,T=C.numDims>1?C.maxValues[B]:C.zMax;if(Q){for(o.counter.lut++,F=u.getUint8(l),v=w,l++,L=Math.ceil((F-1)*w/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),k=new Uint8Array(D),o.ptr+=l,k.set(new Uint8Array(s,o.ptr,L)),N=new Uint32Array(D),o.ptr+=L,b=0;F-1>>>b;)b++;L=Math.ceil(d*b/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),k=new Uint8Array(D),k.set(new Uint8Array(s,o.ptr,L)),R=new Uint32Array(D),o.ptr+=L,c>=3?x=i.unstuffLUT2(N,w,F-1,E,S,T):x=i.unstuffLUT(N,w,F-1,E,S,T),c>=3?i.unstuff2(R,a,b,d,x):i.unstuff(R,a,b,d,x)}else o.counter.bitstuffer++,b=w,o.ptr+=l,b>0&&(L=Math.ceil(d*b/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),k=new Uint8Array(D),k.set(new Uint8Array(s,o.ptr,L)),R=new Uint32Array(D),o.ptr+=L,c>=3?E==null?i.originalUnstuff2(R,a,b,d):i.unstuff2(R,a,b,d,!1,E,S,T):E==null?i.originalUnstuff(R,a,b,d):i.unstuff(R,a,b,d,!1,E,S,T))}},readTiles:function(s,o,a,E){var B=o.headerInfo,C=B.width,c=B.height,l=C*c,h=B.microBlockSize,u=B.imageType,p=r.getDataTypeSize(u),y=Math.ceil(C/h),f=Math.ceil(c/h);o.pixels.numBlocksY=f,o.pixels.numBlocksX=y,o.pixels.ptr=0;var Q=0,w=0,d=0,S=0,R=0,D=0,k=0,L=0,H=0,x=0,N=0,F=0,v=0,b=0,T=0,U=0,K,Z,z,M,Y,_,J=new a(h*h),q=c%h||h,AA=C%h||h,nA,O,sA=B.numDims,gA,SA=o.pixels.resultMask,uA=o.pixels.resultPixels,RI=B.fileVersion,jr=RI>=5?14:15,HA,Wn=B.zMax,KA;for(d=0;d<f;d++)for(R=d!==f-1?h:q,S=0;S<y;S++)for(D=S!==y-1?h:AA,N=d*C*h+S*h,F=C-D,gA=0;gA<sA;gA++){if(sA>1?(KA=uA,N=d*C*h+S*h,uA=new a(o.pixels.resultPixels.buffer,l*gA*p,l),Wn=B.maxValues[gA]):KA=null,k=s.byteLength-o.ptr,K=new DataView(s,o.ptr,Math.min(10,k)),Z={},U=0,L=K.getUint8(0),U++,HA=B.fileVersion>=5?L&4:0,H=L>>6&255,x=L>>2&jr,x!==(S*h>>3&jr)||HA&&gA===0)throw"integrity issue";if(_=L&3,_>3)throw o.ptr+=U,"Invalid block encoding ("+_+")";if(_===2){if(HA)if(SA)for(Q=0;Q<R;Q++)for(w=0;w<D;w++)SA[N]&&(uA[N]=KA[N]),N++;else for(Q=0;Q<R;Q++)for(w=0;w<D;w++)uA[N]=KA[N],N++;o.counter.constant++,o.ptr+=U;continue}else if(_===0){if(HA)throw"integrity issue";if(o.counter.uncompressed++,o.ptr+=U,v=R*D*p,b=s.byteLength-o.ptr,v=v<b?v:b,z=new ArrayBuffer(v%p===0?v:v+p-v%p),M=new Uint8Array(z),M.set(new Uint8Array(s,o.ptr,v)),Y=new a(z),T=0,SA)for(Q=0;Q<R;Q++){for(w=0;w<D;w++)SA[N]&&(uA[N]=Y[T++]),N++;N+=F}else for(Q=0;Q<R;Q++){for(w=0;w<D;w++)uA[N++]=Y[T++];N+=F}o.ptr+=T*p}else if(nA=r.getDataTypeUsed(HA&&u<6?4:u,H),O=r.getOnePixel(Z,U,nA,K),U+=r.getDataTypeSize(nA),_===3)if(o.ptr+=U,o.counter.constantoffset++,SA)for(Q=0;Q<R;Q++){for(w=0;w<D;w++)SA[N]&&(uA[N]=HA?Math.min(Wn,KA[N]+O):O),N++;N+=F}else for(Q=0;Q<R;Q++){for(w=0;w<D;w++)uA[N]=HA?Math.min(Wn,KA[N]+O):O,N++;N+=F}else if(o.ptr+=U,r.decodeBits(s,o,J,O,gA),U=0,HA)if(SA)for(Q=0;Q<R;Q++){for(w=0;w<D;w++)SA[N]&&(uA[N]=J[U++]+KA[N]),N++;N+=F}else for(Q=0;Q<R;Q++){for(w=0;w<D;w++)uA[N]=J[U++]+KA[N],N++;N+=F}else if(SA)for(Q=0;Q<R;Q++){for(w=0;w<D;w++)SA[N]&&(uA[N]=J[U++]),N++;N+=F}else for(Q=0;Q<R;Q++){for(w=0;w<D;w++)uA[N++]=J[U++];N+=F}}sA>1&&!E&&(o.pixels.resultPixels=r.swapDimensionOrder(o.pixels.resultPixels,l,sA,a))},formatFileInfo:function(s){return{fileIdentifierString:s.headerInfo.fileIdentifierString,fileVersion:s.headerInfo.fileVersion,imageType:s.headerInfo.imageType,height:s.headerInfo.height,width:s.headerInfo.width,numValidPixel:s.headerInfo.numValidPixel,microBlockSize:s.headerInfo.microBlockSize,blobSize:s.headerInfo.blobSize,maxZError:s.headerInfo.maxZError,pixelType:r.getPixelType(s.headerInfo.imageType),eofOffset:s.eofOffset,mask:s.mask?{numBytes:s.mask.numBytes}:null,pixels:{numBlocksX:s.pixels.numBlocksX,numBlocksY:s.pixels.numBlocksY,maxValue:s.headerInfo.zMax,minValue:s.headerInfo.zMin,noDataValue:s.noDataValue}}},constructConstantSurface:function(s,o){var a=s.headerInfo.zMax,E=s.headerInfo.zMin,B=s.headerInfo.maxValues,C=s.headerInfo.numDims,c=s.headerInfo.height*s.headerInfo.width,l=0,h=0,u=0,p=s.pixels.resultMask,y=s.pixels.resultPixels;if(p)if(C>1){if(o)for(l=0;l<C;l++)for(u=l*c,a=B[l],h=0;h<c;h++)p[h]&&(y[u+h]=a);else for(h=0;h<c;h++)if(p[h])for(u=h*C,l=0;l<C;l++)y[u+C]=B[l]}else for(h=0;h<c;h++)p[h]&&(y[h]=a);else if(C>1&&E!==a)if(o)for(l=0;l<C;l++)for(u=l*c,a=B[l],h=0;h<c;h++)y[u+h]=a;else for(h=0;h<c;h++)for(u=h*C,l=0;l<C;l++)y[u+l]=B[l];else for(h=0;h<c*C;h++)y[h]=a},getDataTypeArray:function(s){var o;switch(s){case 0:o=Int8Array;break;case 1:o=Uint8Array;break;case 2:o=Int16Array;break;case 3:o=Uint16Array;break;case 4:o=Int32Array;break;case 5:o=Uint32Array;break;case 6:o=Float32Array;break;case 7:o=Float64Array;break;default:o=Float32Array}return o},getPixelType:function(s){var o;switch(s){case 0:o="S8";break;case 1:o="U8";break;case 2:o="S16";break;case 3:o="U16";break;case 4:o="S32";break;case 5:o="U32";break;case 6:o="F32";break;case 7:o="F64";break;default:o="F32"}return o},isValidPixelValue:function(s,o){if(o==null)return!1;var a;switch(s){case 0:a=o>=-128&&o<=127;break;case 1:a=o>=0&&o<=255;break;case 2:a=o>=-32768&&o<=32767;break;case 3:a=o>=0&&o<=65536;break;case 4:a=o>=-2147483648&&o<=2147483647;break;case 5:a=o>=0&&o<=4294967296;break;case 6:a=o>=-34027999387901484e22&&o<=34027999387901484e22;break;case 7:a=o>=-17976931348623157e292&&o<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(s){var o=0;switch(s){case 0:case 1:o=1;break;case 2:case 3:o=2;break;case 4:case 5:case 6:o=4;break;case 7:o=8;break;default:o=s}return o},getDataTypeUsed:function(s,o){var a=s;switch(s){case 2:case 4:a=s-o;break;case 3:case 5:a=s-2*o;break;case 6:o===0?a=s:o===1?a=2:a=1;break;case 7:o===0?a=s:a=s-2*o+1;break;default:a=s;break}return a},getOnePixel:function(s,o,a,E){var B=0;switch(a){case 0:B=E.getInt8(o);break;case 1:B=E.getUint8(o);break;case 2:B=E.getInt16(o,!0);break;case 3:B=E.getUint16(o,!0);break;case 4:B=E.getInt32(o,!0);break;case 5:B=E.getUInt32(o,!0);break;case 6:B=E.getFloat32(o,!0);break;case 7:B=E.getFloat64(o,!0);break;default:throw"the decoder does not understand this pixel type"}return B},swapDimensionOrder:function(s,o,a,E,B){var C=0,c=0,l=0,h=0,u=s;if(a>1)if(u=new E(o*a),B)for(C=0;C<o;C++)for(h=C,l=0;l<a;l++,h+=o)u[h]=s[c++];else for(C=0;C<o;C++)for(h=C,l=0;l<a;l++,h+=o)u[c++]=s[h];return u}},I=function(s,o,a){this.val=s,this.left=o,this.right=a},g={decode:function(s,o){o=o||{};var a=o.noDataValue,E=0,B={};if(B.ptr=o.inputOffset||0,B.pixels={},!!r.readHeaderInfo(s,B)){var C=B.headerInfo,c=C.fileVersion,l=r.getDataTypeArray(C.imageType);if(c>5)throw"unsupported lerc version 2."+c;r.readMask(s,B),C.numValidPixel!==C.width*C.height&&!B.pixels.resultMask&&(B.pixels.resultMask=o.maskData);var h=C.width*C.height;B.pixels.resultPixels=new l(h*C.numDims),B.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u=!o.returnPixelInterleavedDims;if(C.numValidPixel!==0)if(C.zMax===C.zMin)r.constructConstantSurface(B,u);else if(c>=4&&r.checkMinMaxRanges(s,B))r.constructConstantSurface(B,u);else{var p=new DataView(s,B.ptr,2),y=p.getUint8(0);if(B.ptr++,y)r.readDataOneSweep(s,B,l,u);else if(c>1&&C.imageType<=1&&Math.abs(C.maxZError-.5)<1e-5){var f=p.getUint8(1);if(B.ptr++,B.encodeMode=f,f>2||c<4&&f>1)throw"Invalid Huffman flag "+f;f?r.readHuffman(s,B,l,u):r.readTiles(s,B,l,u)}else r.readTiles(s,B,l,u)}B.eofOffset=B.ptr;var Q;o.inputOffset?(Q=B.headerInfo.blobSize+o.inputOffset-B.ptr,Math.abs(Q)>=1&&(B.eofOffset=o.inputOffset+B.headerInfo.blobSize)):(Q=B.headerInfo.blobSize-B.ptr,Math.abs(Q)>=1&&(B.eofOffset=B.headerInfo.blobSize));var w={width:C.width,height:C.height,pixelData:B.pixels.resultPixels,minValue:C.zMin,maxValue:C.zMax,validPixelCount:C.numValidPixel,dimCount:C.numDims,dimStats:{minValues:C.minValues,maxValues:C.maxValues},maskData:B.pixels.resultMask};if(B.pixels.resultMask&&r.isValidPixelValue(C.imageType,a)){var d=B.pixels.resultMask;for(E=0;E<h;E++)d[E]||(w.pixelData[E]=a);w.noDataValue=a}return B.noDataValue=a,o.returnFileInfo&&(w.fileInfo=r.formatFileInfo(B)),w}},getBandCount:function(s){var o=0,a=0,E={};for(E.ptr=0,E.pixels={};a<s.byteLength-58;)r.readHeaderInfo(s,E),a+=E.headerInfo.blobSize,o++,E.ptr=a;return o}};return g})(),e=(function(){var i=new ArrayBuffer(4),r=new Uint8Array(i),I=new Uint32Array(i);return I[0]=1,r[0]===1})(),n={decode:function(i,r){if(!e)throw"Big endian system is not supported.";r=r||{};var I=r.inputOffset||0,g=new Uint8Array(i,I,10),s=String.fromCharCode.apply(null,g),o,a;if(s.trim()==="CntZImage")o=A,a=1;else if(s.substring(0,5)==="Lerc2")o=t,a=2;else throw"Unexpected file identifier string: "+s;for(var E=0,B=i.byteLength-10,C,c=[],l,h,u={width:0,height:0,pixels:[],pixelType:r.pixelType,mask:null,statistics:[]},p=0;I<B;){var y=o.decode(i,{inputOffset:I,encodedMaskData:C,maskData:h,returnMask:E===0,returnEncodedMask:E===0,returnFileInfo:!0,returnPixelInterleavedDims:r.returnPixelInterleavedDims,pixelType:r.pixelType||null,noDataValue:r.noDataValue||null});I=y.fileInfo.eofOffset,h=y.maskData,E===0&&(C=y.encodedMaskData,u.width=y.width,u.height=y.height,u.dimCount=y.dimCount||1,u.pixelType=y.pixelType||y.fileInfo.pixelType,u.mask=h),a>1&&(h&&c.push(h),y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&p++),E++,u.pixels.push(y.pixelData),u.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}var f,Q,w;if(a>1&&p>1){for(w=u.width*u.height,u.bandMasks=c,h=new Uint8Array(w),h.set(c[0]),f=1;f<c.length;f++)for(l=c[f],Q=0;Q<w;Q++)h[Q]=h[Q]&l[Q];u.maskData=h}return u}};typeof define=="function"&&define.amd?define([],function(){return n}):typeof yn<"u"&&yn.exports?yn.exports=n:this.Lerc=n})()});var ct,YA,rr,ir,mn,ba,Fa=EA(()=>{ir={env:{emscripten_notify_memory_growth:A=>{rr=new Uint8Array(YA.exports.memory.buffer)}}},mn=class{init(){return ct||(typeof fetch<"u"?ct=fetch(`data:application/wasm;base64,${ba}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,ir)).then(this._init):ct=WebAssembly.instantiate(Buffer.from(ba,"base64"),ir).then(this._init),ct)}_init(t){YA=t.instance,ir.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!YA)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=YA.exports.malloc(n);rr.set(t,i),e=e||Number(YA.exports.ZSTD_findDecompressedSize(i,n));let r=YA.exports.malloc(e),I=YA.exports.ZSTD_decompress(r,e,i,n),g=rr.slice(r,r+I);return YA.exports.free(i),YA.exports.free(r),g}},ba="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AikACDcACCAHIDo3AAAgEUEZSA0BIARBGGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgCkkNAAsMAQsCQAJAIAUoAswCIhEgBUHgAWogJUEHcUEMbGoiDygCACICaiIHIBxLDQAgCSAPKAIEIgogAmoiBmogG0sNACAGQSBqIBQgCWtNDQELIAUgDygCCDYCoAEgBSAPKQIANwOYASAJIBQgBUGYAWogBUHMAmogHCALIBcgIhAgIQYMAQsgAiAJaiEEIA8oAgghFSARKQAAITogCSARKQAINwAIIAkgOjcAAAJAIAJBEUkNACARKQAQITogCSARKQAYNwAYIAkgOjcAECACQRBrQRFIDQAgEUEQaiECIAlBIGohEgNAIAIpABAhOiASIAIpABg3AAggEiA6NwAAIAIpACAhOiASIAIpACg3ABggEiA6NwAQIAJBIGohAiASQSBqIhIgBEkNAAsLIAQgFWshAiAFIAc2AswCIAQgC2sgFUkEQCAVIAQgF2tLDQwgIiAiIAIgC2siD2oiByAKak8EQCAKRQ0CIAQgByAK/AoAAAwCC0EAIA9rIgIEQCAEIAcgAvwKAAALIAogD2ohCiAEIA9rIQQgCyECCyAVQRBPBEAgAikAACE6IAQgAikACDcACCAEIDo3AAAgCkERSA0BIAQgCmohByAEQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAELAkAgFUEHTQRAIAQgAi0AADoAACAEIAItAAE6AAEgBCACLQACOgACIAQgAi0AAzoAAyAEIAIgFUECdCIHQeAaaigCAGoiAigAADYABCACIAdBgBtqKAIAayECDAELIAQgAikAADcAAAsgCkEJSQ0AIAQgCmohDyAEQQhqIgcgAkEIaiICa0EPTARAA0AgByACKQAANwAAIAJBCGohAiAHQQhqIgcgD0kNAAwCCwALIAIpAAAhOiAHIAIpAAg3AAggByA6NwAAIApBGUgNACAEQRhqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIA9JDQALCyAGQYh/SwRAIAYhAwwLCyAFQeABaiAlQQdxQQxsaiICIA02AgggAiAMNgIEIAIgEDYCAAsgBiAJaiEJICVBAWohJSAQIC1qIAxqIS0MAQsLIAUoArABIAUoArQBRw0HIAUoAqwBQSBHDQcgDiAoayEQA0ACQCAOIBBMBEBBACECA0AgAkEDRg0CIDIgAkECdCIDaiADICZqKAIANgIAIAJBAWohAgwACwALIAVB4AFqIBBBB3FBDGxqIQoCfwJAIAgoAoTsAUECRgRAIAUoAswCIg8gCigCACIEaiIHIAgoAoDsASICSwRAIAIgD0cEQCACIA9rIgIgFCAJa0sNCyAJIA8gAhAfIAogBCACayIENgIAIAIgCWohCQsgBSAWNgLMAiAIQQA2AoTsAQJAAkACQCAEQYCABEoNACAJIAooAgQiDSAEaiIGaiAbSw0AIAZBIGogFCAJa00NAQsgBSAKKAIINgJQIAUgCikCADcDSCAJIBQgBUHIAGogBUHMAmogGSALIBcgIhAgIQYMAQsgBCAWaiEHIAQgCWohDCAKKAIIIQogFikAACE6IAkgFikACDcACCAJIDo3AAACQCAEQRFJDQAgHikAACE6IAkgHikACDcAGCAJIDo3ABAgBEEQa0ERSA0AIAlBIGohAiAeIQQDQCAEKQAQITogAiAEKQAYNwAIIAIgOjcAACAEKQAgITogAiAEKQAoNwAYIAIgOjcAECAEQSBqIQQgAkEgaiICIAxJDQALCyAMIAprIQIgBSAHNgLMAiAMIAtrIApJBEAgCiAMIBdrSw0PICIgIiACIAtrIgdqIgQgDWpPBEAgDUUNAiAMIAQgDfwKAAAMAgtBACAHayICBEAgDCAEIAL8CgAACyAHIA1qIQ0gDCAHayEMIAshAgsgCkEQTwRAIAIpAAAhOiAMIAIpAAg3AAggDCA6NwAAIA1BEUgNASAMIA1qIQcgDEEQaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwwBCwJAIApBB00EQCAMIAItAAA6AAAgDCACLQABOgABIAwgAi0AAjoAAiAMIAItAAM6AAMgDCACIApBAnQiBEHgGmooAgBqIgIoAAA2AAQgAiAEQYAbaigCAGshAgwBCyAMIAIpAAA3AAALIA1BCUkNACAMIA1qIQcgDEEIaiIEIAJBCGoiAmtBD0wEQANAIAQgAikAADcAACACQQhqIQIgBEEIaiIEIAdJDQAMAgsACyACKQAAITogBCACKQAINwAIIAQgOjcAACANQRlIDQAgDEEYaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwsgBkGJf08EQCAGIQMMDgsgGSEcIAYgCWoMAwsgB0EgayECAkACQCAHIBxLDQAgCSAKKAIEIhIgBGoiDGogAksNACAMQSBqIBQgCWtNDQELIAUgCigCCDYCYCAFIAopAgA3A1ggCSAUIAIgBUHYAGogBUHMAmogHCALIBcgIhAhIQwMAgsgBCAJaiEGIAooAgghCiAPKQAAITogCSAPKQAINwAIIAkgOjcAAAJAIARBEUkNACAPKQAQITogCSAPKQAYNwAYIAkgOjcAECAEQRBrQRFIDQAgD0EQaiECIAlBIGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgBkkNAAsLIAYgCmshAiAFIAc2AswCIAYgC2sgCkkEQCAKIAYgF2tLDQ0gIiAiIAIgC2siB2oiBCASak8EQCASRQ0DIAYgBCAS/AoAAAwDC0EAIAdrIgIEQCAGIAQgAvwKAAALIAcgEmohEiAGIAdrIQYgCyECCyAKQRBPBEAgAikAACE6IAYgAikACDcACCAGIDo3AAAgEkERSA0CIAYgEmohByAGQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAILAkAgCkEHTQRAIAYgAi0AADoAACAGIAItAAE6AAEgBiACLQACOgACIAYgAi0AAzoAAyAGIAIgCkECdCIEQeAaaigCAGoiAigAADYABCACIARBgBtqKAIAayECDAELIAYgAikAADcAAAsgEkEJSQ0BIAYgEmohByAGQQhqIgQgAkEIaiICa0EPTARAA0AgBCACKQAANwAAIAJBCGohAiAE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"});var Ta={};DA(Ta,{default:()=>Dn,zstd:()=>Ma});var Ua,Ma,Dn,_a=EA(()=>{nr();Ua=Gt(La(),1);Fa();UA();Ze();Ma=new mn,Dn=class extends iA{decodeBlock(t){let n=this.parameters.LercParameters?.[qo.AddCompression],i=t;switch(n){case jt.None:break;case jt.Deflate:i=un(new Uint8Array(i)).buffer;break;case jt.Zstandard:i=Ma.decode(new Uint8Array(i)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${n}`)}return Ua.default.decode(i,{returnPixelInterleavedDims:this.parameters.planarConfiguration===1}).pixels[0].buffer}}});var lt,j,Se,bA,or,Sn,Ya,va=EA(()=>{or={env:{emscripten_notify_memory_growth:A=>{Se=new Uint8Array(j.exports.memory.buffer),bA=new DataView(Se.buffer)}}},Sn=class{init(){return lt||(typeof fetch<"u"?lt=fetch(`data:application/wasm;base64,${Ya}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,or)).then(this._init):lt=WebAssembly.instantiate(Buffer.from(Ya,"base64"),or).then(this._init),lt)}_init(t){j=t.instance,or.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!j)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=j.exports.malloc(n);if(Se.set(t,i),e===0&&(e=Number(j.exports.ZSTD_findDecompressedSize(i,n))),e===-1){j.exports.free(i);let s=[];for(let B of this.decodeStreaming([t]))s.push(B);if(s.length===1)return s[0];let o=s.reduce((B,C)=>B+C.byteLength,0),a=new Uint8Array(o),E=0;for(let B of s)a.set(B,E),E+=B.byteLength;return a}let r=j.exports.malloc(e),I=j.exports.ZSTD_decompress(r,e,i,n),g=Se.slice(r,r+I);return j.exports.free(i),j.exports.free(r),g}*decodeStreaming(t){if(!j)throw new Error("ZSTDDecoder: Await .init() before decoding.");let e=j.exports.ZSTD_DStreamInSize(),n=j.exports.malloc(e),i=j.exports.ZSTD_DStreamOutSize(),r=j.exports.malloc(i),I=j.exports.ZSTD_createDCtx(),g=4,s=4,o=j.exports.malloc(g+s*2),a=j.exports.malloc(g+s*2),E=0;for(let B of t){let C=j.exports.malloc(B.byteLength);for(Se.set(B,C),bA.setInt32(o,C,!0),bA.setInt32(o+g,B.byteLength,!0),bA.setInt32(o+g+s,0,!0);bA.getUint32(o+g+s,!0)<bA.getUint32(o+g,!0);){bA.setInt32(a,r,!0),bA.setInt32(a+g,i,!0),bA.setInt32(a+g+s,0,!0),E=j.exports.ZSTD_decompressStream(I,a,o);let c=bA.getUint32(a+g+s,!0);yield Se.slice(r,r+c)}j.exports.free(C)}if(j.exports.ZSTD_freeDCtx(I),j.exports.free(n),j.exports.free(r),j.exports.free(o),j.exports.free(a),E!==0)throw new Error("Incomplete stream, more data expected.")}},Ya="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QQhyIQBBACEDA0AgACADTQ0DIANBQGshAwwACwALQWwhCiAOIA5B/ABqIA5B+ABqIAUgBhAGIgJBiH9LDQEgDigCeCIDIARLDQEgACAOIA4oAnwgByAIIAMgDRAlIAEgADYCACACIQoMAQtBbCEKCyAOQYABaiQAIAoLcAEEfyAAQgA3AgAgAgRAIAFBCmohBiABKAIEIQRBACECQQAhAQNAIAEgBHZFBEAgAiAGIAFBA3RqLQAAIgUgAiAFSxshAiABQQFqIQEgAyAFQRZLaiEDDAELCyAAIAI2AgQgACADQQggBGt0NgIACwuuAQEEfyABIAIoAgQiAyABKAIEaiIENgIEIAAgA0ECdEGwGWooAgAgASgCAEEAIARrdnE2AgACQCAEQSFPBEAgAUGwGjYCCAwBCyABKAIIIgMgASgCEE8EQCABEAwMAQsgAyABKAIMIgVGDQAgASADIAMgBWsgBEEDdiIGIAMgBmsgBUkbIgNrIgU2AgggASAEIANBA3RrNgIEIAEgBSgAADYCAAsgACACQQhqNgIEC40CAgN/AX4gACACaiEEAkACQCACQQhOBEAgACABayICQXlIDQELA0AgACAETw0CIAAgAS0AADoAACAAQQFqIQAgAUEBaiEBDAALAAsCQAJAIAJBb0sNACAAIARBIGsiAksNACABKQAAIQYgACABKQAINwAIIAAgBjcAACACIABrIgVBEU4EQCAAQRBqIQAgASEDA0AgAykAECEGIAAgAykAGDcACCAAIAY3AAAgAykAICEGIAAgAykAKDcAGCAAIAY3ABAgA0EgaiEDIABBIGoiACACSQ0ACwsgASAFaiEBDAELIAAhAgsDQCACIARPDQEgAiABLQAAOgAAIAJBAWohAiABQQFqIQEMAAsACwvfAQEGf0G6fyEKAkAgAigCBCIIIAIoAgAiCWoiDSABIABrSw0AQWwhCiAJIAQgAygCACILa0sNACAAIAlqIgQgAigCCCIMayECIAAgAUEgayIBIAsgCUEAEDMgAyAJIAtqNgIAAkACQCAEIAVrIAxPBEAgAiEFDAELIAwgBCAGa0sNAiAHIAcgAiAFayIDaiICIAhqTwRAIAhFDQIgBCACIAj8CgAADAILQQAgA2siAARAIAQgAiAA/AoAAAsgAyAIaiEIIAQgA2shBAsgBCABIAUgCEEBEDML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"});var Ka={};DA(Ka,{default:()=>Nn,zstd:()=>Ha});var Ha,Nn,Pa=EA(()=>{va();UA();Ha=new Sn,Nn=class extends iA{decodeBlock(t){return Ha.decode(new Uint8Array(t)).buffer}}});var Oa={};DA(Oa,{default:()=>Rn});var Rn,Ja=EA(()=>{UA();Rn=class extends iA{constructor(t){if(super(t),typeof createImageBitmap>"u")throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if(typeof document>"u"&&typeof OffscreenCanvas>"u")throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decodeBlock(t){let e=new Blob([t]),n=await createImageBitmap(e),i;typeof document<"u"?(i=document.createElement("canvas"),i.width=n.width,i.height=n.height):i=new OffscreenCanvas(n.width,n.height);let r=i.getContext("2d");r.drawImage(n,0,0);let I=r.getImageData(0,0,n.width,n.height).data,g=this.parameters.samplesPerPixel||4;if(g===4)return I.buffer;if(g===3){let s=new Uint8ClampedArray(n.width*n.height*3);for(let o=0,a=0;o<s.length;o+=3,a+=4)s[o]=I[a],s[o+1]=I[a+1],s[o+2]=I[a+2];return s.buffer}else throw new Error(`Unsupported SamplesPerPixel value: ${g}`)}}});var is=kt(()=>{});var rs=kt(()=>{});var os=kt(()=>{});function UI(A){let t=atob(A),e=t.length,n=new Uint8Array(e);for(let i=0;i<e;i++)n[i]=t.charCodeAt(i);return n}function Xr(A){typeof A=="string"&&(A=new TextEncoder().encode(A));let t="",e=A.byteLength;for(let n=0;n<e;n++)t+=String.fromCharCode(A[n]);return btoa(t)}var Ef=new Uint8Array(16),MI=class{constructor(A="",t=1e3){this.prefix=A,this.maxCaptureSize=t,this.prefix=A,this.originalConsole={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)},this.patchConsole()}originalConsole;logBuffer=[];patchConsole(){let A=t=>(...e)=>{let n=this.prefix?[this.prefix,...e]:e;this.originalConsole[t](...n),this.captureLog(t,e)};console.log=A("log"),console.info=A("info"),console.warn=A("warn"),console.error=A("error"),console.debug=A("debug")}captureLog(A,t){let e={level:A,timestamp:Date.now(),message:t.map(n=>{if(typeof n=="string")return n;try{return JSON.stringify(n)}catch{return String(n)}}).join(" ")};this.logBuffer.push(e),this.logBuffer.length>this.maxCaptureSize&&this.logBuffer.shift()}async postToServer(A,t){if(this.logBuffer.length>0){let n=[...this.logBuffer];this.logBuffer=[];try{if(!(await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map(r=>({...r,source:t})))})).ok)throw new Error("Failed to post logs to server")}catch(i){console.warn("Could not post logs to server",i.message),this.logBuffer.unshift(...n)}}}},zr;function TI(A=""){return zr=new MI(A),zr}var Te=A=>{throw new Error("Not initialized yet")},$n=typeof window>"u"&&typeof globalThis.WebSocketPair>"u",Xn=new Map,zn=0;$n&&(globalThis.syscall=async(A,...t)=>await new Promise((e,n)=>{zn++,Xn.set(zn,{resolve:e,reject:n}),Te({type:"sys",id:zn,name:A,args:t})}));function $r(A,t,e){$n&&(Te=e,self.addEventListener("message",n=>{(async()=>{let i=n.data;switch(i.type){case"inv":{let r=A[i.name];if(!r)throw new Error(`Function not loaded: ${i.name}`);try{let I=await Promise.resolve(r(...i.args||[]));Te({type:"invr",id:i.id,result:I})}catch(I){console.error("An exception was thrown as a result of invoking function",i.name,"error:",I.message),Te({type:"invr",id:i.id,error:I.message})}}break;case"sysr":{let r=i.id,I=Xn.get(r);if(!I)throw Error("Invalid request id");Xn.delete(r),i.error?I.reject(new Error(i.error)):I.resolve(i.result)}break}})().catch(console.error)}),Te({type:"manifest",manifest:t}),TI(`[${t.name} plug]`))}async function _I(A,t){if(typeof A!="string"){let e=new Uint8Array(await A.arrayBuffer()),n=e.length>0?Xr(e):void 0;t={method:A.method,headers:Object.fromEntries(A.headers.entries()),base64Body:n},A=A.url}return syscall("sandboxFetch.fetch",A,t)}globalThis.nativeFetch=globalThis.fetch;function YI(){globalThis.fetch=async(A,t)=>{let e=t?.body?Xr(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await _I(A,t&&{method:t.method,headers:t.headers,base64Body:e});return new Response(n.base64Body?UI(n.base64Body):null,{status:n.status,headers:n.headers})}}$n&&YI();var aA={};DA(aA,{alert:()=>yC,configureVimMode:()=>vC,confirm:()=>wC,copyToClipboard:()=>FC,deleteLine:()=>UC,dispatch:()=>uC,downloadFile:()=>aC,filterBox:()=>CC,flashNotification:()=>IC,fold:()=>SC,foldAll:()=>kC,getCurrentEditor:()=>OI,getCurrentPage:()=>vI,getCurrentPageMeta:()=>HI,getCurrentPath:()=>KI,getCursor:()=>VI,getRecentlyOpenedPages:()=>PI,getSelection:()=>ZI,getText:()=>JI,getUiOption:()=>mC,goHistory:()=>gC,hidePanel:()=>EC,insertAtCursor:()=>dC,insertAtPos:()=>lC,invokeCommand:()=>jI,isMobile:()=>KC,moveCursor:()=>hC,moveCursorToLine:()=>fC,moveLineDown:()=>_C,moveLineUp:()=>TC,navigate:()=>XI,newWindow:()=>oC,openCommandPalette:()=>AC,openPageNavigator:()=>$I,openSearchPanel:()=>bC,openUrl:()=>rC,prompt:()=>pC,rebuildEditorState:()=>nC,redo:()=>LC,reloadConfigAndCommands:()=>iC,reloadPage:()=>eC,reloadUI:()=>tC,replaceRange:()=>QC,save:()=>zI,sendMessage:()=>HC,setSelection:()=>WI,setText:()=>qI,setUiOption:()=>DC,showPanel:()=>BC,showProgress:()=>cC,toggleComment:()=>MC,toggleFold:()=>RC,undo:()=>xC,unfold:()=>NC,unfoldAll:()=>GC,uploadFile:()=>sC,vimEx:()=>YC});typeof globalThis.syscall>"u"&&(globalThis.syscall=()=>{throw new Error("Not implemented here")});function G(A,...t){return globalThis.syscall(A,...t)}function vI(){return G("editor.getCurrentPage")}function HI(){return G("editor.getCurrentPageMeta")}function KI(){return G("editor.getCurrentPath")}function PI(){return G("editor.getRecentlyOpenedPages")}function OI(){return G("editor.getCurrentEditor")}function JI(){return G("editor.getText")}function qI(A,t=!1){return G("editor.setText",A,t)}function VI(){return G("editor.getCursor")}function ZI(){return G("editor.getSelection")}function WI(A,t){return G("editor.setSelection",A,t)}function jI(A,t){return G("editor.invokeCommand",A,t)}function zI(){return G("editor.save")}function XI(A,t=!1,e=!1){return G("editor.navigate",A,t,e)}function $I(A="page"){return G("editor.openPageNavigator",A)}function AC(){return G("editor.openCommandPalette")}function eC(){return G("editor.reloadPage")}function tC(){return G("editor.reloadUI")}function nC(){return G("editor.rebuildEditorState")}function iC(){return G("editor.reloadConfigAndCommands")}function rC(A,t=!1){return G("editor.openUrl",A,t)}function oC(){return G("editor.newWindow")}function gC(A){return G("editor.goHistory",A)}function aC(A,t){return G("editor.downloadFile",A,t)}function sC(A,t){return G("editor.uploadFile",A,t)}function IC(A,t="info"){return G("editor.flashNotification",A,t)}function CC(A,t,e="",n=""){return G("editor.filterBox",A,t,e,n)}function BC(A,t,e,n=""){return G("editor.showPanel",A,t,e,n)}function EC(A){return G("editor.hidePanel",A)}function cC(A,t){return G("editor.showProgress",A,t)}function lC(A,t){return G("editor.insertAtPos",A,t)}function QC(A,t,e){return G("editor.replaceRange",A,t,e)}function hC(A,t=!1){return G("editor.moveCursor",A,t)}function fC(A,t=1,e=!1){return G("editor.moveCursorToLine",A,t,e)}function dC(A,t=!1,e=!1){return G("editor.insertAtCursor",A,t,e)}function uC(A){return G("editor.dispatch",A)}function pC(A,t=""){return G("editor.prompt",A,t)}function wC(A){return G("editor.confirm",A)}function yC(A){return G("editor.alert",A)}function mC(A){return G("editor.getUiOption",A)}function DC(A,t){return G("editor.setUiOption",A,t)}function SC(){return G("editor.fold")}function NC(){return G("editor.unfold")}function RC(){return G("editor.toggleFold")}function kC(){return G("editor.foldAll")}function GC(){return G("editor.unfoldAll")}function xC(){return G("editor.undo")}function LC(){return G("editor.redo")}function bC(){return G("editor.openSearchPanel")}function FC(A){return G("editor.copyToClipboard",A)}function UC(){return G("editor.deleteLine")}function MC(){return G("editor.toggleComment")}function TC(){return G("editor.moveLineUp")}function _C(){return G("editor.moveLineDown")}function YC(A){return G("editor.vimEx",A)}function vC(){return G("editor.configureVimMode")}function HC(A,t){return G("editor.sendMessage",A,t)}function KC(){return G("editor.isMobile")}var X={};DA(X,{deleteDocument:()=>tB,deleteFile:()=>sB,deletePage:()=>jC,fileExists:()=>IB,getDocumentMeta:()=>$C,getFileMeta:()=>gB,getPageMeta:()=>JC,listDocuments:()=>XC,listFiles:()=>nB,listPages:()=>OC,listPlugs:()=>zC,pageExists:()=>qC,readDocument:()=>AB,readFile:()=>iB,readFileWithMeta:()=>oB,readPage:()=>VC,readPageWithMeta:()=>ZC,readRef:()=>rB,writeDocument:()=>eB,writeFile:()=>aB,writePage:()=>WC});function OC(){return G("space.listPages")}function JC(A){return G("space.getPageMeta",A)}function qC(A){return G("space.pageExists",A)}function VC(A){return G("space.readPage",A)}function ZC(A){return G("space.readPageWithMeta",A)}function WC(A,t){return G("space.writePage",A,t)}function jC(A){return G("space.deletePage",A)}function zC(){return G("space.listPlugs")}function XC(){return G("space.listDocuments")}function $C(A){return G("space.getDocumentMeta",A)}function AB(A){return G("space.readDocument",A)}function eB(A,t){return G("space.writeDocument",A,t)}function tB(A){return G("space.deleteDocument",A)}function nB(){return G("space.listFiles")}function iB(A){return G("space.readFile",A)}function rB(A){return G("space.readRef",A)}function oB(A){return G("space.readFileWithMeta",A)}function gB(A){return G("space.getFileMeta",A)}function aB(A,t){return G("space.writeFile",A,t)}function sB(A){return G("space.deleteFile",A)}function IB(A){return G("space.fileExists",A)}var _e={};DA(_e,{refreshAll:()=>lB});function lB(){return G("codeWidget.refreshAll")}var Df=new Uint8Array(16);var Ao="cimal";var eo="https://copernicus-dem-30m.s3.amazonaws.com";var Ye="Library/.cache/cimal",to=`${Ye}/v2/index.json`,no=250*1024*1024,ve=1,Ai=`${Ye}/hiking-map`,io=`${Ai}/v${ve}/index.json`,ro=150*1024*1024,He=4,ei=`${Ye}/packs`,oo=`${ei}/v${He}/index.json`,go=100*1024*1024;var ti="classic",PA="standard",ni="smooth";var xt=["classic","hiking-map","worldcover","vaporwave","lava","water-world","dracula","pastel","rainbow"],Lt=["low","standard","high","ultra"],bt=["smooth","triangular"],Ft=["raw","no-islands"],Ke={style:ti,hikingMapResolution:PA,terrainShape:ni,worldcoverProcessing:"raw"};function Ut(A){return A.join("|")}function Mt(A){return A.join(", ")}function ao(){return`style: ${Ut(xt)}, terrain-shape: ${Ut(bt)}, optional hiking-map-resolution: ${Ut(Lt)}, and optional worldcover-processing: ${Ut(Ft)}`}function so(A){return/^https?:\/\//i.test(A)}function DB(A){let t=A.trim(),e=/^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/.exec(t);return e?e[1].trim():t}function ii(A){let t=A.trim();if(!t)throw new Error("A space path is required.");return DB(t.replace(/^space\s*:\s*/i,""))}function ri(A){let t=A.trim();if(!t)throw new Error("A GPX URL or space path is required.");let e=ii(t.replace(/^url\s*:\s*/i,""));if(!so(e))return e;let n=new URL(e);if(n.hostname==="github.com"){let i=n.pathname.split("/").filter(Boolean),r=i.indexOf("blob");if(i.length>=5&&r===2){let I=i[0],g=i[1],s=i[3],o=i.slice(4).join("/");return`https://raw.githubusercontent.com/${I}/${g}/${s}/${o}`}}return n.toString()}function oi(A){let t=A.trim().toLowerCase();if(xt.includes(t))return t;throw new Error(`Unsupported cimal style "${A.trim()}". Supported styles: ${Mt(xt)}.`)}function gi(A){let t=A.trim().toLowerCase();if(Lt.includes(t))return t;throw new Error(`Unsupported hiking-map-resolution "${A.trim()}". Supported values: ${Mt(Lt)}.`)}function SB(A){let t=A.trim().toLowerCase();if(bt.includes(t))return t;throw new Error(`Unsupported terrain-shape "${A.trim()}". Supported values: ${Mt(bt)}.`)}function ai(A){let t=A.trim().toLowerCase();if(Ft.includes(t))return t;throw new Error(`Unsupported worldcover-processing "${A.trim()}". Supported values: ${Mt(Ft)}.`)}function Io(A){let t=A.split(/\r?\n/).map(B=>B.trim()).filter(B=>B&&!B.startsWith("#"));if(t.length===0)throw new Error("Add a .cimal pack path or GPX source inside the widget body.");let[e,...n]=t;if(/^(?:style|terrain-shape|hiking-map-resolution|worldcover-processing)\s*:/i.test(e))throw new Error(`Put the .cimal path or GPX source on the first line, then add ${ao()} below it.`);let i=ti,r=PA,I=ni,g="raw",s=!1,o=!1,a=!1,E=!1;for(let B of n){let C=/^style\s*:\s*(.+)$/i.exec(B);if(C){if(s)throw new Error("Duplicate style option in cimal widget body.");i=oi(C[1]),s=!0;continue}let c=/^terrain-shape\s*:\s*(.+)$/i.exec(B);if(c){if(a)throw new Error("Duplicate terrain-shape option in cimal widget body.");I=SB(c[1]),a=!0;continue}let l=/^worldcover-processing\s*:\s*(.+)$/i.exec(B);if(l){if(E)throw new Error("Duplicate worldcover-processing option in cimal widget body.");g=ai(l[1]),E=!0;continue}let h=/^hiking-map-resolution\s*:\s*(.+)$/i.exec(B);if(h){if(o)throw new Error("Duplicate hiking-map-resolution option in cimal widget body.");r=gi(h[1]),o=!0;continue}throw new Error(`Unsupported cimal widget option "${B}". Supported options: ${ao()}.`)}if(o&&i!=="hiking-map")throw new Error('Hiking-map resolution can only be used with "style: hiking-map".');if(E&&i!=="worldcover")throw new Error('WorldCover processing can only be used with "style: worldcover".');return{source:e,style:i,hikingMapResolution:r,terrainShape:I,worldcoverProcessing:g,hasExplicitHikingMapResolution:o,hasExplicitTerrainShape:a,hasExplicitWorldcoverProcessing:E}}function Tt(A){let t=ii(A);if(so(t)||/\.gpx$/i.test(t))throw new Error("Cimal widgets now accept only .cimal pack paths. Build a pack from the GPX first.");return t.endsWith(".cimal")?t:`${t}.cimal`}function Co(A){let t=ii(A.source);if(/\.cimal$/i.test(t)){let e=Tt(t);if(A.hasExplicitHikingMapResolution)throw new Error('Hiking-map resolution is baked into existing .cimal packs. Rebuild the pack from the GPX at the desired resolution instead of setting "hiking-map-resolution" on a .cimal widget.');if(A.hasExplicitWorldcoverProcessing)throw new Error('WorldCover processing is baked into existing .cimal packs. Rebuild the pack from the GPX with the desired "worldcover-processing" option instead of setting it on a .cimal widget.');return{kind:"pack",packPath:e}}return{kind:"gpx",gpxSource:ri(t)}}function Bo(A){let t=A.split(",",2);if(t.length!==2)throw new Error("Invalid baked hiking-map texture data URL.");let[,e]=t;if(typeof atob!="function")throw new Error("Base64 decoding is unavailable in this runtime.");let n=atob(e),i=new Uint8Array(n.length);for(let r=0;r<n.length;r+=1)i[r]=n.charCodeAt(r);return i}function XA(A,t){if(typeof btoa!="function")throw new Error("Base64 encoding is unavailable in this runtime.");let e="";for(let n=0;n<A.length;n+=1)e+=String.fromCharCode(A[n]);return`data:${t};base64,${btoa(e)}`}function si(A){return/^data:([^;,]+)[;,]/i.exec(A)?.[1]??"application/octet-stream"}var Qo=new TextEncoder,Eo=new TextDecoder,ho="CMLP",Pe=12,Ii=65535,co=3,NB=2;function Yt(A){return A+3&-4}function RB(A,t){let e=A.bakedImagery?{kind:A.bakedImagery.kind,width:A.bakedImagery.width,height:A.bakedImagery.height,mimeType:A.bakedImagery.mimeType,sourceVersion:A.bakedImagery.sourceVersion,resolution:A.bakedImagery.resolution,byteLength:t}:void 0,n={version:4,title:A.title,sourceUrl:A.sourceUrl,bounds:A.bounds,center:A.center,metersPerDegree:A.metersPerDegree,grid:{width:A.grid.width,height:A.grid.height,minElevation:A.grid.minElevation,maxElevation:A.grid.maxElevation},stats:A.stats,trackPointCount:A.track.length,bakedImagery:e};return Qo.encode(JSON.stringify(n))}function kB(A){let{elevations:t,minElevation:e,maxElevation:n}=A.grid,i=n-e,r=new Uint16Array(t.length);if(i<=0)return r;for(let I=0;I<t.length;I+=1){let g=(t[I]-e)/i;r[I]=Math.max(0,Math.min(Ii,Math.round(g*Ii)))}return r}function GB(A){let t=new Float32Array(A.length*3);for(let e=0;e<A.length;e+=1){let n=e*3;t[n]=A[e].x,t[n+1]=A[e].y,t[n+2]=A[e].z}return t}function lo(A){return new Uint8Array(A.buffer.slice(A.byteOffset,A.byteOffset+A.byteLength))}function vt(A){let t=A.bakedImagery?Bo(A.bakedImagery.dataUrl):new Uint8Array(0),e=RB(A,t.byteLength),n=Yt(e.length),i=lo(kB(A)),r=Yt(i.length),I=lo(GB(A.track)),g=new Uint8Array(Pe+n+r+I.length+t.length);g.set(Qo.encode(ho),0);let s=new DataView(g.buffer);s.setUint16(4,4,!0),s.setUint16(6,0,!0),s.setUint32(8,e.length,!0);let o=Pe;return g.set(e,o),o+=n,g.set(i,o),o+=r,g.set(I,o),o+=I.length,t.length>0&&g.set(t,o),g}function Ci(A){if(A.byteLength<Pe)throw new Error("Invalid .cimal pack: file is too small.");if(Eo.decode(A.slice(0,4))!==ho)throw new Error("Invalid .cimal pack: wrong file signature.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==NB&&n!==co&&n!==4)throw new Error(`Unsupported .cimal pack version ${n}. Rebuild the pack.`);let i=e.getUint32(8,!0),r=Pe,I=r+i;if(I>A.byteLength)throw new Error("Invalid .cimal pack: header length is out of bounds.");let g=JSON.parse(Eo.decode(A.slice(r,I))),s=g.grid.width*g.grid.height,o=s*Uint16Array.BYTES_PER_ELEMENT,a=Pe+Yt(i);if(a+o>A.byteLength)throw new Error("Invalid .cimal pack: terrain section is truncated.");let B=g.trackPointCount*3*Float32Array.BYTES_PER_ELEMENT,C=a+Yt(o),c=C+B;if(c>A.byteLength)throw new Error("Invalid .cimal pack: track section is truncated.");let l;if(n>=4&&g.bakedImagery){let Q=c,w=Q+g.bakedImagery.byteLength;if(w>A.byteLength)throw new Error("Invalid .cimal pack: imagery section is truncated.");let d=A.slice(Q,w);l={kind:g.bakedImagery.kind,width:g.bakedImagery.width,height:g.bakedImagery.height,mimeType:g.bakedImagery.mimeType,sourceVersion:g.bakedImagery.sourceVersion,resolution:g.bakedImagery.resolution,dataUrl:XA(d,g.bakedImagery.mimeType)}}else if(n>=co&&g.bakedHikingMap){let Q=c,w=Q+g.bakedHikingMap.byteLength;if(w>A.byteLength)throw new Error("Invalid .cimal pack: imagery section is truncated.");let d=A.slice(Q,w);l={kind:"hiking-map",width:g.bakedHikingMap.width,height:g.bakedHikingMap.height,mimeType:g.bakedHikingMap.mimeType,sourceVersion:"OpenHikingMap",resolution:g.bakedHikingMap.resolution,dataUrl:XA(d,g.bakedHikingMap.mimeType)}}let h=new Uint16Array(A.buffer,A.byteOffset+a,s),u=new Float32Array(A.buffer,A.byteOffset+C,g.trackPointCount*3),p=g.grid.maxElevation-g.grid.minElevation,y=Array.from(h,Q=>p<=0?g.grid.minElevation:g.grid.minElevation+Q/Ii*p),f=[];for(let Q=0;Q<g.trackPointCount;Q+=1){let w=Q*3,d=u[w+1];f.push({x:u[w],y:d,z:u[w+2],elevation:d})}return{title:g.title,sourceUrl:g.sourceUrl,bounds:g.bounds,center:g.center,metersPerDegree:g.metersPerDegree,grid:{width:g.grid.width,height:g.grid.height,elevations:y,minElevation:g.grid.minElevation,maxElevation:g.grid.maxElevation},track:f,bakedImagery:l,stats:g.stats}}function fo(A){return A instanceof Error&&(A.message.startsWith("Unsupported .cimal pack version ")||A.message.startsWith("Invalid .cimal pack:"))}var uo="Cannot convert undefined or null to object";function W(A){return(t,...e)=>xB(A,t,e)}function Ce(A,t){return W(Ht(A,t).get)}var{apply:xB,construct:jf,defineProperty:zf,get:Xf,getOwnPropertyDescriptor:Ht,getPrototypeOf:Kt,has:$f,ownKeys:wo,set:Ad,setPrototypeOf:ed}=Reflect;var{EPSILON:yo,MAX_SAFE_INTEGER:td,isFinite:LB,isNaN:bB}=Number,{iterator:Be,species:nd,toStringTag:FB,for:id}=Symbol,Pt=Object,{create:Ot,defineProperty:mo,freeze:rd,is:od}=Pt,Bi=Pt.prototype,gd=Bi.__lookupGetter__?W(Bi.__lookupGetter__):(A,t)=>{if(A==null)throw _B(uo);let e=Pt(A);do{let n=Ht(e,t);if(n!==void 0)return UB(n,"get")?n.get:void 0}while((e=Kt(e))!==null)},UB=Pt.hasOwn||W(Bi.hasOwnProperty),Do=Array,ad=Do.isArray,Jt=Do.prototype,sd=W(Jt.join),Id=W(Jt.push),Cd=W(Jt.toLocaleString),Ei=Jt[Be],So=W(Ei),{abs:MB,trunc:Bd}=Math,qt=ArrayBuffer,Ed=qt.isView,No=qt.prototype,cd=W(No.slice),ld=Ce(No,"byteLength"),po=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Qd=po&&Ce(po.prototype,"byteLength"),Ro=Kt(Uint8Array),hd=Ro.from,IA=Ro.prototype,fd=IA[Be],dd=W(IA.keys),ud=W(IA.values),pd=W(IA.entries),wd=W(IA.set),yd=W(IA.reverse),md=W(IA.fill),Dd=W(IA.copyWithin),Sd=W(IA.sort),Nd=W(IA.slice),Rd=W(IA.subarray),kd=Ce(IA,"buffer"),Gd=Ce(IA,"byteOffset"),xd=Ce(IA,"length"),Ld=Ce(IA,FB),ko=Uint8Array,ci=Uint16Array;var Vt=Uint32Array,Go=Float32Array,Ee=Kt([][Be]()),li=W(Ee.next),xo=W((function*(){})().next),Lo=Kt(Ee),bo=DataView.prototype,Fo=W(bo.getUint16),TB=W(bo.setUint16),_B=TypeError;var YB=WeakSet,Uo=YB.prototype,bd=W(Uo.add),Fd=W(Uo.has),Zt=WeakMap,Qi=Zt.prototype,hi=W(Qi.get),Ud=W(Qi.has),Mo=W(Qi.set);var To=new Zt,vB=Ot(null,{next:{value:function(){let t=hi(To,this);return li(t)}},[Be]:{value:function(){return this}}});function _o(A){if(A[Be]===Ei&&Ee.next===li)return A;let t=Ot(vB);return Mo(To,t,So(A)),t}var HB=new Zt,KB=Ot(Lo,{next:{value:function(){let t=hi(HB,this);return xo(t)},writable:!0,configurable:!0}});for(let A of wo(Ee))A!=="next"&&mo(KB,A,Ht(Ee,A));var PB=1/yo;var OB=6103515625e-14;var Yo=.0009765625,vd=Yo*OB,Hd=Yo*PB;var vo=new qt(4),JB=new Go(vo),qB=new Vt(vo),NA=new ci(512),RA=new ko(512);for(let A=0;A<256;++A){let t=A-127;t<-24?(NA[A]=0,NA[A|256]=32768,RA[A]=24,RA[A|256]=24):t<-14?(NA[A]=1024>>-t-14,NA[A|256]=1024>>-t-14|32768,RA[A]=-t-1,RA[A|256]=-t-1):t<=15?(NA[A]=t+15<<10,NA[A|256]=t+15<<10|32768,RA[A]=13,RA[A|256]=13):t<128?(NA[A]=31744,NA[A|256]=64512,RA[A]=24,RA[A|256]=24):(NA[A]=31744,NA[A|256]=64512,RA[A]=13,RA[A|256]=13)}var fi=new Vt(2048);for(let A=1;A<1024;++A){let t=A<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,fi[A]=t|e}for(let A=1024;A<2048;++A)fi[A]=939524096+(A-1024<<13);var ce=new Vt(64);for(let A=1;A<31;++A)ce[A]=A<<23;ce[31]=1199570944;ce[32]=2147483648;for(let A=33;A<63;++A)ce[A]=2147483648+(A-32<<23);ce[63]=3347054592;var Ho=new ci(64);for(let A=1;A<64;++A)A!==32&&(Ho[A]=1024);function Ko(A){let t=A>>10;return qB[0]=fi[Ho[t]+(A&1023)]+ce[t],JB[0]}function Oe(A,t,...e){return Ko(Fo(A,t,..._o(e)))}function Je(A,t,e){let n=e&&e.debug||!1;n&&console.log("[xml-utils] getting "+t+" in "+A);let i=typeof A=="object"?A.outer:A,r=i.slice(0,i.indexOf(">")+1),I=['"',"'"];for(let g=0;g<I.length;g++){let s=I[g],o=t+"\\="+s+"([^"+s+"]*)"+s;n&&console.log("[xml-utils] pattern:",o);let E=new RegExp(o).exec(r);if(n&&console.log("[xml-utils] match:",E),E)return E[1]}}function di(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index:-1}function qe(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index+i[0].length-1:-1}function Wt(A,t){let e=new RegExp(t,"g"),n=A.match(e);return n?n.length:0}function ui(A,t,e){let n=e&&e.debug||!1,i=!(e&&typeof e.nested===!1),r=e&&e.startIndex||0;n&&console.log("[xml-utils] starting findTagByName with",t," and ",e);let I=di(A,`<${t}[ 
>/]`,r);if(n&&console.log("[xml-utils] start:",I),I===-1)return;let g=A.slice(I+t.length),s=qe(g,"^[^<]*[ /]>",0),o=s!==-1&&g[s-1]==="/";if(n&&console.log("[xml-utils] selfClosing:",o),o===!1)if(i){let C=0,c=1,l=0;for(;(s=qe(g,"[ /]"+t+">",C))!==-1;){let h=g.substring(C,s+1);if(c+=Wt(h,"<"+t+`[ 
	>]`),l+=Wt(h,"</"+t+">"),l>=c)break;C=s}}else s=qe(g,"[ /]"+t+">",0);let a=I+t.length+s+1;if(n&&console.log("[xml-utils] end:",a),a===-1)return;let E=A.slice(I,a),B;return o?B=null:B=E.slice(E.indexOf(">")+1,E.lastIndexOf("<")),{inner:B,outer:E,start:I,end:a}}function pi(A,t,e){let n=[],i=e&&e.debug||!1,r=e&&typeof e.nested=="boolean"?e.nested:!0,I=e&&e.startIndex||0,g;for(;g=ui(A,t,{debug:i,startIndex:I});)r?I=g.start+1+t.length:I=g.end,n.push(g);return i&&console.log("findTagsByName found",n.length,"tags"),n}Ze();function Vo(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let I=0,g=0;I<A.length;++I,g+=3)r=256-A[I]/t*256,i[g]=r,i[g+1]=r,i[g+2]=r;return i}function Zo(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let I=0,g=0;I<A.length;++I,g+=3)r=A[I]/t*256,i[g]=r,i[g+1]=r,i[g+2]=r;return i}function Wo(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r=t.length/3,I=t.length/3*2;for(let g=0,s=0;g<A.length;++g,s+=3){let o=A[g];i[s]=t[o]/65536*256,i[s+1]=t[o+r]/65536*256,i[s+2]=t[o+I]/65536*256}return i}function jo(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=4,r+=3){let I=A[i],g=A[i+1],s=A[i+2],o=A[i+3];n[r]=255*((255-I)/256)*((255-o)/256),n[r+1]=255*((255-g)/256)*((255-o)/256),n[r+2]=255*((255-s)/256)*((255-o)/256)}return n}function zo(A){let{width:t,height:e}=A,n=new Uint8ClampedArray(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let I=A[i],g=A[i+1],s=A[i+2];n[r]=I+1.402*(s-128),n[r+1]=I-.34414*(g-128)-.71414*(s-128),n[r+2]=I+1.772*(g-128)}return n}var jB=.95047,zB=1,XB=1.08883;function Xo(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let I=A[i+0],g=A[i+1]<<24>>24,s=A[i+2]<<24>>24,o=(I+16)/116,a=g/500+o,E=o-s/200,B,C,c;a=jB*(a*a*a>.008856?a*a*a:(a-16/116)/7.787),o=zB*(o*o*o>.008856?o*o*o:(o-16/116)/7.787),E=XB*(E*E*E>.008856?E*E*E:(E-16/116)/7.787),B=a*3.2406+o*-1.5372+E*-.4986,C=a*-.9689+o*1.8758+E*.0415,c=a*.0557+o*-.204+E*1.057,B=B>.0031308?1.055*B**(1/2.4)-.055:12.92*B,C=C>.0031308?1.055*C**(1/2.4)-.055:12.92*C,c=c>.0031308?1.055*c**(1/2.4)-.055:12.92*c,n[r]=Math.max(0,Math.min(1,B))*255,n[r+1]=Math.max(0,Math.min(1,C))*255,n[r+2]=Math.max(0,Math.min(1,c))*255}return n}var Qt=new Map;async function kn(A){let t=!A.hasTag("StripOffsets");return{tileWidth:t?await A.loadValue("TileWidth"):await A.loadValue("ImageWidth"),tileHeight:t?await A.loadValue("TileLength"):await A.loadValue("RowsPerStrip")||await A.loadValue("ImageLength"),planarConfiguration:await A.loadValue("PlanarConfiguration"),bitsPerSample:await A.loadValue("BitsPerSample"),predictor:await A.loadValue("Predictor")||1}}function Yl(A,t,e=kn,n=!0){Array.isArray(A)||(A=[A]),A.forEach(i=>{Qt.set(i,{importFn:t,decoderParameterFn:e,preferWorker:n})})}async function qa(A,t){if(!Qt.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{decoderParameterFn:e}=Qt.get(A);return e(t)}async function Va(A,t){if(!Qt.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{importFn:e}=Qt.get(A),n=await e();return new n(t)}var vl=[{cases:[void 0,1],importFn:()=>Promise.resolve().then(()=>(tg(),eg)).then(A=>A.default),preferWorker:!1},{cases:5,importFn:()=>Promise.resolve().then(()=>(rg(),ig)).then(A=>A.default)},{cases:6,importFn:()=>{throw new Error("old style JPEG compression is not supported.")}},{cases:7,importFn:()=>Promise.resolve().then(()=>(ag(),gg)).then(A=>A.default),decoderParameterFn:async A=>({...await kn(A),JPEGTables:await A.loadValue("JPEGTables")})},{cases:[8,32946],importFn:()=>Promise.resolve().then(()=>(ka(),Ra)).then(A=>A.default)},{cases:32773,importFn:()=>Promise.resolve().then(()=>(xa(),Ga)).then(A=>A.default)},{cases:34887,importFn:()=>Promise.resolve().then(()=>(_a(),Ta)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default),decoderParameterFn:async A=>({...await kn(A),LercParameters:await A.loadValue("LercParameters")})},{cases:5e4,importFn:()=>Promise.resolve().then(()=>(Pa(),Ka)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default)},{cases:50001,importFn:()=>Promise.resolve().then(()=>(Ja(),Oa)).then(A=>A.default),decoderParameterFn:async A=>({...await kn(A),samplesPerPixel:Number(await A.loadValue("SamplesPerPixel"))||4}),preferWorker:!1}];for(let A of vl){let{cases:t,importFn:e,decoderParameterFn:n,preferWorker:i}=A;Yl(t,e,n,i)}function Gn(A,t,e,n=1){return new(Object.getPrototypeOf(A)).constructor(t*e*n)}function Hl(A,t,e,n,i){let r=t/n,I=e/i;return A.map(g=>{let s=Gn(g,n,i);for(let o=0;o<i;++o){let a=Math.min(Math.round(I*o),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(r*E),t-1),C=g[a*t+B];s[o*n+E]=C}}return s})}function Ne(A,t,e){return(1-e)*A+e*t}function Kl(A,t,e,n,i){let r=t/n,I=e/i;return A.map(g=>{let s=Gn(g,n,i);for(let o=0;o<i;++o){let a=I*o,E=Math.floor(a),B=Math.min(Math.ceil(a),e-1);for(let C=0;C<n;++C){let c=r*C,l=c%1,h=Math.floor(c),u=Math.min(Math.ceil(c),t-1),p=g[E*t+h],y=g[E*t+u],f=g[B*t+h],Q=g[B*t+u],w=Ne(Ne(p,y,l),Ne(f,Q,l),a%1);s[o*n+C]=w}}return s})}function Za(A,t,e,n,i,r="nearest"){switch(r.toLowerCase()){case"nearest":return Hl(A,t,e,n,i);case"bilinear":case"linear":return Kl(A,t,e,n,i);default:throw new Error(`Unsupported resampling method: '${r}'`)}}function Pl(A,t,e,n,i,r){let I=t/n,g=e/i,s=Gn(A,n,i,r);for(let o=0;o<i;++o){let a=Math.min(Math.round(g*o),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(I*E),t-1);for(let C=0;C<r;++C){let c=A[a*t*r+B*r+C];s[o*n*r+E*r+C]=c}}}return s}function Ol(A,t,e,n,i,r){let I=t/n,g=e/i,s=Gn(A,n,i,r);for(let o=0;o<i;++o){let a=g*o,E=Math.floor(a),B=Math.min(Math.ceil(a),e-1);for(let C=0;C<n;++C){let c=I*C,l=c%1,h=Math.floor(c),u=Math.min(Math.ceil(c),t-1);for(let p=0;p<r;++p){let y=A[E*t*r+h*r+p],f=A[E*t*r+u*r+p],Q=A[B*t*r+h*r+p],w=A[B*t*r+u*r+p],d=Ne(Ne(y,f,l),Ne(Q,w,l),a%1);s[o*n*r+C*r+p]=d}}}return s}function Wa(A,t,e,n,i,r,I="nearest"){switch(I.toLowerCase()){case"nearest":return Pl(A,t,e,n,i,r);case"bilinear":case"linear":return Ol(A,t,e,n,i,r);default:throw new Error(`Unsupported resampling method: '${I}'`)}}function Jl(A,t,e){let n=0;for(let i=t;i<e;++i)n+=A[i];return n}function gr(A,t,e){let n;switch(A){case 1:t<=8?n=Uint8Array:t<=16?n=Uint16Array:t<=32&&(n=Uint32Array);break;case 2:t===8?n=Int8Array:t===16?n=Int16Array:t===32&&(n=Int32Array);break;case 3:switch(t){case 16:case 32:n=Float32Array;break;case 64:n=Float64Array;break;default:break}break;default:break}if(n){if(typeof e=="number")return new n(e);if(e instanceof ArrayBuffer)return new n(e)}throw Error("Unsupported data format/bitsPerSample")}function ql(A,t){return(A===1||A===2)&&t<=32&&t%8===0?!1:!(A===3&&(t===16||t===32||t===64))}function Vl(A,t,e,n,i,r,I){let g=new DataView(A),s=e===2?I*r:I*r*n,o=e===2?1:n,a=gr(t,i,s),E=parseInt("1".repeat(i),2);if(t===1){let B;e===1?B=n*i:B=i;let C=r*B;(C&7)!==0&&(C=C+7&-8);for(let c=0;c<I;++c){let l=c*C;for(let h=0;h<r;++h){let u=l+h*o*i;for(let p=0;p<o;++p){let y=u+p*i,f=(c*r+h)*o+p,Q=Math.floor(y/8),w=y%8;if(w+i<=8)a[f]=g.getUint8(Q)>>8-i-w&E;else if(w+i<=16)a[f]=g.getUint16(Q)>>16-i-w&E;else if(w+i<=24){let d=g.getUint16(Q)<<8|g.getUint8(Q+2);a[f]=d>>24-i-w&E}else a[f]=g.getUint32(Q)>>32-i-w&E}}}}return a.buffer}var ar=class{constructor(t,e,n,i){this.fileDirectory=t,this.littleEndian=e,this.tiles=n?[]:null,this.isTiled=!t.hasTag("StripOffsets");let r=t.getValue("PlanarConfiguration")??1;if(r!==1&&r!==2)throw new Error("Invalid planar configuration.");this.planarConfiguration=r,this.source=i}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.fileDirectory.parseGeoKeyDirectory()}getWidth(){return this.fileDirectory.getValue("ImageWidth")||0}getHeight(){return this.fileDirectory.getValue("ImageLength")||0}getSamplesPerPixel(){return this.fileDirectory.getValue("SamplesPerPixel")??1}getTileWidth(){return this.isTiled?this.fileDirectory.getValue("TileWidth")||0:this.getWidth()}getTileHeight(){if(this.isTiled)return this.fileDirectory.getValue("TileLength")||0;let t=this.fileDirectory.hasTag("RowsPerStrip")&&this.fileDirectory.getValue("RowsPerStrip");return t?Math.min(t,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(t){return this.isTiled||(t+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-t*this.getTileHeight()}getBytesPerPixel(){let t=0,e=this.fileDirectory.getValue("BitsPerSample")||[];for(let n=0;n<e.length;++n)t+=this.getSampleByteSize(n);return t}getSampleByteSize(t){let e=this.fileDirectory.getValue("BitsPerSample")||[];if(t>=e.length)throw new RangeError(`Sample index ${t} is out of range.`);return Math.ceil(e[t]/8)}getReaderForSample(t){let e=this.fileDirectory.getValue("SampleFormat"),n=e?e[t]:1,i=(this.fileDirectory.getValue("BitsPerSample")||[])[t];switch(n){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(r,I){return Oe(this,r,I)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(t=0){let e=this.fileDirectory.getValue("SampleFormat");return e?e[t]:1}getBitsPerSample(t=0){let e=this.fileDirectory.getValue("BitsPerSample");return e?e[t]:0}getArrayForSample(t,e){let n=this.getSampleFormat(t),i=this.getBitsPerSample(t);return gr(n,i,e)}async getTileOrStrip(t,e,n,i,r){let I=Math.ceil(this.getWidth()/this.getTileWidth()),g=Math.ceil(this.getHeight()/this.getTileHeight()),s,{tiles:o}=this;if(this.planarConfiguration===1?s=e*I+t:this.planarConfiguration===2&&(s=n*I*g+e*I+t),s===void 0)throw new Error("Could not determine tile or strip index.");let a,E;if(this.isTiled?(a=Number(await this.fileDirectory.loadValueIndexed("TileOffsets",s)),E=Number(await this.fileDirectory.loadValueIndexed("TileByteCounts",s))):(a=Number(await this.fileDirectory.loadValueIndexed("StripOffsets",s)),E=Number(await this.fileDirectory.loadValueIndexed("StripByteCounts",s))),E===0){let c=this.getBlockHeight(e)*this.getTileWidth(),l=this.planarConfiguration===2?this.getSampleByteSize(n):this.getBytesPerPixel(),h=new ArrayBuffer(c*l);return this.getArrayForSample(n,h).fill(this.getGDALNoData()||0),{x:t,y:e,sample:n,data:h}}let B=(await this.source.fetch([{offset:a,length:E}],r))[0],C;return o===null||!o[s]?(C=(async()=>{let c=await i.decode(B),l=this.getSampleFormat(),h=this.getBitsPerSample();return ql(l,h)&&(c=Vl(c,l,this.planarConfiguration,this.getSamplesPerPixel(),h,this.getTileWidth(),this.getBlockHeight(e))),c})(),o!==null&&(o[s]=C)):C=o[s],{x:t,y:e,sample:n,data:await C}}async _readRaster(t,e,n,i,r,I,g,s,o){let a=this.getTileWidth(),E=this.getTileHeight(),B=this.getWidth(),C=this.getHeight(),c=Math.max(Math.floor(t[0]/a),0),l=Math.min(Math.ceil(t[2]/a),Math.ceil(B/a)),h=Math.max(Math.floor(t[1]/E),0),u=Math.min(Math.ceil(t[3]/E),Math.ceil(C/E)),p=t[2]-t[0],y=this.getBytesPerPixel(),f=[],Q=[];for(let R=0;R<e.length;++R){if(this.planarConfiguration===1){let D=await this.fileDirectory.loadValue("BitsPerSample");if(typeof D!="object")throw new Error("Expected BitsPerSample to be an array or typed array.");f.push(Jl(D,0,e[R])/8)}else f.push(0);Q.push(this.getReaderForSample(e[R]))}let w=[],{littleEndian:d}=this;for(let R=h;R<u;++R)for(let D=c;D<l;++D){let k;this.planarConfiguration===1&&(k=this.getTileOrStrip(D,R,0,r,o));for(let L=0;L<e.length;++L){let H=L,x=e[L];if(this.planarConfiguration===2&&(y=this.getSampleByteSize(x),k=this.getTileOrStrip(D,R,x,r,o)),!k)throw new Error("Could not get tile or strip data.");let N=k.then(F=>{let v=F.data,b=new DataView(v),T=this.getBlockHeight(F.y),U=F.y*E,K=F.x*a,Z=U+T,z=(F.x+1)*a,M=Q[H],Y=Math.min(T,T-(Z-t[3]),C-U),_=Math.min(a,a-(z-t[2]),B-K);for(let J=Math.max(0,t[1]-U);J<Y;++J)for(let q=Math.max(0,t[0]-K);q<_;++q){let AA=(J*a+q)*y,nA=M.call(b,AA+f[H],d),O;i?(O=(J+U-t[1])*p*e.length+(q+K-t[0])*e.length+H,n[O]=nA):(O=(J+U-t[1])*p+q+K-t[0],n[H][O]=nA)}});w.push(N)}}if(await Promise.all(w),I&&t[2]-t[0]!==I||g&&t[3]-t[1]!==g){let R;i?R=Wa(n,t[2]-t[0],t[3]-t[1],I,g,e.length,s):R=Za(n,t[2]-t[0],t[3]-t[1],I,g,s);let D=R;return D.width=I??t[2]-t[0],D.height=g??t[3]-t[1],D}let S=n;return S.width=I||t[2]-t[0],S.height=g||t[3]-t[1],S}async readRasters(t={}){let{window:e,samples:n=[],pool:i=null,width:r,height:I,resampleMethod:g,fillValue:s,signal:o}=t,a="interleave"in t&&t.interleave,E=e||[0,0,this.getWidth(),this.getHeight()];if(E[0]>E[2]||E[1]>E[3])throw new Error("Invalid subsets");let B=E[2]-E[0],C=E[3]-E[1],c=B*C,l=this.getSamplesPerPixel();if(!n||!n.length)for(let Q=0;Q<l;++Q)n.push(Q);else for(let Q=0;Q<n.length;++Q)if(n[Q]>=l)return Promise.reject(new RangeError(`Invalid sample index '${n[Q]}'.`));let h;if(a){let{fileDirectory:Q}=this,w=Q.getValue("SampleFormat"),d=w?Math.max.apply(null,Array.from(w)):1;if(d!==1&&d!==2&&d!==3)throw new Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");let S=Q.getValue("BitsPerSample"),R=S?Math.max.apply(null,Array.from(S)):8;if(h=gr(d,R,c*n.length),s){if(Array.isArray(s))throw new Error("When reading interleaved data, fillValue must be a single number.");h.fill(s)}}else{h=[];for(let Q=0;Q<n.length;++Q){let w=this.getArrayForSample(n[Q],c);Array.isArray(s)&&Q<s.length?w.fill(s[Q]):s&&!Array.isArray(s)&&w.fill(s),h.push(w)}}let u=this.fileDirectory.getValue("Compression")||1,p=await qa(u,this.fileDirectory),y=i?i.bindParameters(u,p):await Va(u,p);return await this._readRaster(E,n,h,a,y,r,I,g,o)}async readRGB(t={}){let{window:e,pool:n=null,width:i,height:r,resampleMethod:I,enableAlpha:g=!1,signal:s}=t,o=("interleave"in t&&t.interleave)??!1,a=e||[0,0,this.getWidth(),this.getHeight()];if(a[0]>a[2]||a[1]>a[3])throw new Error("Invalid subsets");let E=this.fileDirectory.getValue("PhotometricInterpretation");if(E===cA.RGB){let y=[0,1,2],f=this.fileDirectory.getValue("ExtraSamples");if(f&&f[0]!==Jo.Unspecified&&g){y=[];let Q=this.fileDirectory.getValue("BitsPerSample")||[];for(let w=0;w<Q.length;w+=1)y.push(w)}return this.readRasters({window:e,interleave:o,samples:y,pool:n,width:i,height:r,resampleMethod:I,signal:s})}let B;switch(E){case cA.WhiteIsZero:case cA.BlackIsZero:case cA.Palette:B=[0];break;case cA.CMYK:B=[0,1,2,3];break;case cA.YCbCr:case cA.CIELab:B=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}let C={window:a,interleave:!0,samples:B,pool:n,width:i,height:r,resampleMethod:I,signal:s},{fileDirectory:c}=this,l=await this.readRasters(C),h=2**this.getBitsPerSample(0),u;switch(E){case cA.WhiteIsZero:u=Vo(l,h);break;case cA.BlackIsZero:u=Zo(l,h);break;case cA.Palette:u=Wo(l,await c.loadValue("ColorMap"));break;case cA.CMYK:u=jo(l);break;case cA.YCbCr:u=zo(l);break;case cA.CIELab:u=Xo(l);break;default:throw new Error("Unsupported photometric interpretation.")}if(!o){let y=new Uint8Array(u.length/3),f=new Uint8Array(u.length/3),Q=new Uint8Array(u.length/3);for(let w=0,d=0;w<u.length;w+=3,++d)y[d]=u[w],f[d]=u[w+1],Q[d]=u[w+2];u=[y,f,Q]}let p=u;return p.width=l.width,p.height=l.height,p}async getTiePoints(){if(!this.fileDirectory.hasTag("ModelTiepoint"))return[];let t=await this.fileDirectory.loadValue("ModelTiepoint");if(typeof t!="object")throw new Error("Expected ModelTiepoint to be an array or typed array.");let e=[];for(let n=0;n<t.length;n+=6)e.push({i:t[n],j:t[n+1],k:t[n+2],x:t[n+3],y:t[n+4],z:t[n+5]});return e}async getGDALMetadata(t=null){let e={};if(!this.fileDirectory.hasTag("GDAL_METADATA"))return null;let n=await this.fileDirectory.loadValue("GDAL_METADATA"),i=pi(n,"Item");t===null?i=i.filter(r=>Je(r,"sample")===void 0):i=i.filter(r=>Number(Je(r,"sample"))===t);for(let r=0;r<i.length;++r){let I=i[r];e[Je(I,"name")]=I.inner}return e}getGDALNoData(){let t=this.fileDirectory.hasTag("GDAL_NODATA")&&this.fileDirectory.getValue("GDAL_NODATA");return t?Number(t.substring(0,t.length-1)):null}getOrigin(){let t=this.fileDirectory.getValue("ModelTiepoint"),e=this.fileDirectory.getValue("ModelTransformation");if(t&&t.length===6)return[t[3],t[4],t[5]];if(e)return[e[3],e[7],e[11]];throw new Error("The image does not have an affine transformation.")}getResolution(t=null){let e=this.fileDirectory.getValue("ModelPixelScale"),n=this.fileDirectory.getValue("ModelTransformation");if(e)return[e[0],-e[1],e[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(t){let[i,r,I]=t.getResolution();return[i*t.getWidth()/this.getWidth(),r*t.getHeight()/this.getHeight(),I*t.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.getGeoKeys()?.GTRasterTypeGeoKey===1}getBoundingBox(t=!1){let e=this.getHeight(),n=this.getWidth(),i=this.fileDirectory.getValue("ModelTransformation");if(i&&!t){let[r,I,,g,s,o,,a]=i,B=[[0,0],[0,e],[n,0],[n,e]].map(([l,h])=>[g+r*l+I*h,a+s*l+o*h]),C=B.map(l=>l[0]),c=B.map(l=>l[1]);return[Math.min(...C),Math.min(...c),Math.max(...C),Math.max(...c)]}else{let r=this.getOrigin(),I=this.getResolution(),g=r[0],s=r[1],o=g+I[0]*n,a=s+I[1]*e;return[Math.min(g,o),Math.min(s,a),Math.max(g,o),Math.max(s,a)]}}},ja=ar;var ht=class{constructor(t){this._dataView=new DataView(t)}get buffer(){return this._dataView.buffer}getUint64(t,e){let n=this.getUint32(t,e),i=this.getUint32(t+4,e),r;if(e){if(r=n+2**32*i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*n+i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}getInt64(t,e){let n=0,i=(this._dataView.getUint8(t+(e?7:0))&128)>0,r=!0;for(let I=0;I<8;I++){let g=this._dataView.getUint8(t+(e?I:7-I));i&&(r?g!==0&&(g=~(g-1)&255,r=!1):g=~g&255),n+=g*256**I}return i&&(n=-n),n}getUint8(t){return this._dataView.getUint8(t)}getInt8(t){return this._dataView.getInt8(t)}getUint16(t,e){return this._dataView.getUint16(t,e)}getInt16(t,e){return this._dataView.getInt16(t,e)}getUint32(t,e){return this._dataView.getUint32(t,e)}getInt32(t,e){return this._dataView.getInt32(t,e)}getFloat16(t,e){return Oe(this._dataView,t,e)}getFloat32(t,e){return this._dataView.getFloat32(t,e)}getFloat64(t,e){return this._dataView.getFloat64(t,e)}};var vA=class{constructor(t,e,n,i){this._dataView=new DataView(t),this._sliceOffset=e,this._littleEndian=n,this._bigTiff=i}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(t,e){return this.sliceOffset<=t&&this.sliceTop>=t+e}readUint8(t){return this._dataView.getUint8(t-this._sliceOffset)}readInt8(t){return this._dataView.getInt8(t-this._sliceOffset)}readUint16(t){return this._dataView.getUint16(t-this._sliceOffset,this._littleEndian)}readInt16(t){return this._dataView.getInt16(t-this._sliceOffset,this._littleEndian)}readUint32(t){return this._dataView.getUint32(t-this._sliceOffset,this._littleEndian)}readInt32(t){return this._dataView.getInt32(t-this._sliceOffset,this._littleEndian)}readFloat32(t){return this._dataView.getFloat32(t-this._sliceOffset,this._littleEndian)}readFloat64(t){return this._dataView.getFloat64(t-this._sliceOffset,this._littleEndian)}readUint64(t){let e=this.readUint32(t),n=this.readUint32(t+4),i;if(this._littleEndian){if(i=e+2**32*n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}if(i=2**32*e+n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}readInt64(t){let e=0,n=(this._dataView.getUint8(t+(this._littleEndian?7:0))&128)>0,i=!0;for(let r=0;r<8;r++){let I=this._dataView.getUint8(t+(this._littleEndian?r:7-r));n&&(i?I!==0&&(I=~(I-1)&255,i=!1):I=~I&255),e+=I*256**r}return n&&(e=-e),e}readOffset(t){return this._bigTiff?this.readUint64(t):this.readUint32(t)}};var za=`\r
\r
`;function Xa(A){if(typeof Object.fromEntries<"u")return Object.fromEntries(A);let t={};for(let[e,n]of A)t[e.toLowerCase()]=n;return t}function Zl(A){let t=A.split(`\r
`).map(e=>{let n=e.split(":").map(i=>i.trim());return n[0]=n[0].toLowerCase(),n});return Xa(t)}function $a(A){if(!A)return{type:null,params:{}};let[t,...e]=A.split(";").map(i=>i.trim()),n=e.map(i=>i.split("="));return{type:t,params:Xa(n)}}function xn(A){let t=NaN,e=NaN,n=NaN;return A&&([,t,e,n]=(A.match(/bytes (\d+)-(\d+)\/(\d+)/)||[]).map(Number)),{start:t,end:e,total:n}}function As(A,t){let e=-1,n=new TextDecoder("ascii"),i=[],r=`--${t}`,I=`${r}--`;for(let g=0;g<10;++g)n.decode(new Uint8Array(A,g,r.length))===r&&(e=g);if(e===-1)throw new Error("Could not find initial boundary");for(;e<A.byteLength;){let g=n.decode(new Uint8Array(A,e,Math.min(r.length+1024,A.byteLength-e)));if(g.length===0||g.startsWith(I))break;if(!g.startsWith(r))throw new Error("Part does not start with boundary");let s=g.substr(r.length+2);if(s.length===0)break;let o=s.indexOf(za),a=Zl(s.substr(0,o)),{start:E,end:B,total:C}=xn(a["content-range"]),c=e+r.length+o+za.length,l=B+1-E;i.push({headers:a,data:A.slice(c,c+l),offset:E,length:l,fileSize:C}),e=c+l+4}return i}var WA=class{async fetch(t,e){return Promise.all(t.map(async n=>(await this.fetchSlice(n,e)).data))}async fetchSlice(t,e){throw new Error(`fetching of slice ${t} not possible, not implemented`)}get fileSize(){return null}async close(){}};var ft=class extends Map{constructor(t={}){if(super(),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if(typeof t.maxAge=="number"&&t.maxAge===0)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=t.maxSize,this.maxAge=t.maxAge||Number.POSITIVE_INFINITY,this.onEviction=t.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(t){if(typeof this.onEviction=="function")for(let[e,n]of t)this.onEviction(e,n.value)}_deleteIfExpired(t,e){return typeof e.expiry=="number"&&e.expiry<=Date.now()?(typeof this.onEviction=="function"&&this.onEviction(t,e.value),this.delete(t)):!1}_getOrDeleteIfExpired(t,e){if(this._deleteIfExpired(t,e)===!1)return e.value}_getItemValue(t,e){return e.expiry?this._getOrDeleteIfExpired(t,e):e.value}_peek(t,e){let n=e.get(t);return this._getItemValue(t,n)}_set(t,e){this.cache.set(t,e),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(t,e){this.oldCache.delete(t),this._set(t,e)}*_entriesAscending(){for(let t of this.oldCache){let[e,n]=t;this.cache.has(e)||this._deleteIfExpired(e,n)===!1&&(yield t)}for(let t of this.cache){let[e,n]=t;this._deleteIfExpired(e,n)===!1&&(yield t)}}get(t){if(this.cache.has(t)){let e=this.cache.get(t);return this._getItemValue(t,e)}if(this.oldCache.has(t)){let e=this.oldCache.get(t);if(this._deleteIfExpired(t,e)===!1)return this._moveToRecent(t,e),e.value}}set(t,e,{maxAge:n=this.maxAge}={}){let i=typeof n=="number"&&n!==Number.POSITIVE_INFINITY?Date.now()+n:void 0;return this.cache.has(t)?this.cache.set(t,{value:e,expiry:i}):this._set(t,{value:e,expiry:i}),this}has(t){return this.cache.has(t)?!this._deleteIfExpired(t,this.cache.get(t)):this.oldCache.has(t)?!this._deleteIfExpired(t,this.oldCache.get(t)):!1}peek(t){if(this.cache.has(t))return this._peek(t,this.cache);if(this.oldCache.has(t))return this._peek(t,this.oldCache)}delete(t){let e=this.cache.delete(t);return e&&this._size--,this.oldCache.delete(t)||e}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(t){if(!(t&&t>0))throw new TypeError("`maxSize` must be a number greater than 0");let e=[...this._entriesAscending()],n=e.length-t;n<0?(this.cache=new Map(e),this.oldCache=new Map,this._size=e.length):(n>0&&this._emitEvictions(e.slice(0,n)),this.oldCache=new Map(e.slice(n)),this.cache=new Map,this._size=0),this.maxSize=t}*keys(){for(let[t]of this)yield t}*values(){for(let[,t]of this)yield t}*[Symbol.iterator](){for(let t of this.cache){let[e,n]=t;this._deleteIfExpired(e,n)===!1&&(yield[e,n.value])}for(let t of this.oldCache){let[e,n]=t;this.cache.has(e)||this._deleteIfExpired(e,n)===!1&&(yield[e,n.value])}}*entriesDescending(){let t=[...this.cache];for(let e=t.length-1;e>=0;--e){let n=t[e],[i,r]=n;this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}t=[...this.oldCache];for(let e=t.length-1;e>=0;--e){let n=t[e],[i,r]=n;this.cache.has(i)||this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}}*entriesAscending(){for(let[t,e]of this._entriesAscending())yield[t,e.value]}get size(){if(!this._size)return this.oldCache.size;let t=0;for(let e of this.oldCache.keys())this.cache.has(e)||t++;return Math.min(this._size+t,this.maxSize)}entries(){return this.entriesAscending()}forEach(t,e=this){for(let[n,i]of this.entriesAscending())t.call(e,i,n,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}};async function es(A){return new Promise(t=>setTimeout(t,A))}function ts(A,t){let e=Array.isArray(A)?A:Array.from(A),n=Array.isArray(t)?t:Array.from(t);return e.map((i,r)=>[i,n[r]])}var yA=class A extends Error{constructor(...t){super(...t),Error.captureStackTrace&&Error.captureStackTrace(this,A),this.name="AbortError",this.signal=void 0}},sr=class extends Error{constructor(t,e){super(e),this.errors=t,this.message=e,this.name="AggregateError"}},ns=sr;var Ir=class{constructor(t,e,n){this.offset=t,this.length=e,this.data=n}get top(){return this.offset+this.length}},Ln=class{constructor(t,e,n){this.offset=t,this.length=e,this.blockIds=n}},bn=class extends WA{constructor(t,{blockSize:e=65536,cacheSize:n=100}={}){super(),this.source=t,this.blockSize=e,this.blockCache=new ft({maxSize:n,onEviction:(i,r)=>{this.evictedBlocks.set(i,r)}}),this.evictedBlocks=new Map,this.blockRequests=new Map,this.blockIdsToFetch=new Set,this.abortedBlockIds=new Set}get fileSize(){return this.source.fileSize}async fetch(t,e){let n=[],i=[],r=[];this.evictedBlocks.clear();for(let{offset:B,length:C}of t){let c=B+C,{fileSize:l}=this;l!==null&&(c=Math.min(c,l));let h=Math.floor(B/this.blockSize)*this.blockSize;for(let u=h;u<c;u+=this.blockSize){let p=Math.floor(u/this.blockSize);!this.blockCache.has(p)&&!this.blockRequests.has(p)&&(this.blockIdsToFetch.add(p),i.push(p)),this.blockRequests.has(p)&&n.push(this.blockRequests.get(p)),r.push(p)}}await es(),this.fetchBlocks(e);let I=[];for(let B of i)this.blockRequests.has(B)&&I.push(this.blockRequests.get(B));await Promise.allSettled(n),await Promise.allSettled(I);let g=[],s=r.filter(B=>this.abortedBlockIds.has(B)||!this.blockCache.has(B));if(s.forEach(B=>this.blockIdsToFetch.add(B)),s.length>0&&e&&!e.aborted){this.fetchBlocks();for(let B of s){let C=this.blockRequests.get(B);if(!C)throw new Error(`Block ${B} is not in the block requests`);g.push(C)}await Promise.allSettled(g)}if(e&&e.aborted)throw new yA("Request was aborted");let o=r.map(B=>this.blockCache.get(B)||this.evictedBlocks.get(B)),a=o.filter(B=>!B);if(a.length)throw new ns(a,"Request failed");let E=new Map(ts(r,o));return this.readSliceData(t,E)}fetchBlocks(t){if(this.blockIdsToFetch.size>0){let e=this.groupBlocks(this.blockIdsToFetch),n=e.map(async i=>({...i,...await this.source.fetchSlice(i,t)}));for(let i=0;i<e.length;++i){let r=e[i];for(let I of r.blockIds)this.blockRequests.set(I,(async()=>{try{let g=(await Promise.all(n))[i],s=I*this.blockSize,o=s-g.offset,a=Math.min(o+this.blockSize,g.data.byteLength),E=g.data.slice(o,a),B=new Ir(s,E.byteLength,E);this.blockCache.set(I,B),this.abortedBlockIds.delete(I)}catch(g){if(g instanceof yA&&g.name==="AbortError")g.signal=t,this.blockCache.delete(I),this.abortedBlockIds.add(I);else throw g}finally{this.blockRequests.delete(I)}})())}this.blockIdsToFetch.clear()}}groupBlocks(t){let e=Array.from(t).sort((I,g)=>I-g);if(e.length===0)return[];let n=[],i=null,r=[];for(let I of e)i===null||i+1===I?(n.push(I),i=I):(r.push(new Ln(n[0]*this.blockSize,n.length*this.blockSize,n)),n=[I],i=I);return r.push(new Ln(n[0]*this.blockSize,n.length*this.blockSize,n)),r}readSliceData(t,e){return t.map(n=>{let i=n.offset+n.length;this.fileSize!==null&&(i=Math.min(this.fileSize,i));let r=Math.floor(n.offset/this.blockSize),I=Math.floor((i-1)/this.blockSize),g=new ArrayBuffer(n.length),s=new Uint8Array(g);for(let o=r;o<=I;++o){let a=e.get(o);if(!a)continue;let E=a.offset-n.offset,B=a.top-i,C=0,c=0,l;E<0?C=-E:E>0&&(c=E),B<0?l=a.length-C:l=i-a.offset-C;let h=new Uint8Array(a.data,C,l);s.set(h,c)}return g})}};var jA=class{get ok(){return this.status>=200&&this.status<=299}get status(){throw new Error("not implemented")}getHeader(t){throw new Error("not implemented")}async getData(){throw new Error("not implemented")}},zA=class{constructor(t){this.url=t}async request(t){throw new Error("request is not implemented")}};var Cr=class extends jA{constructor(t){super(),this.response=t}get status(){return this.response.status}getHeader(t){return this.response.headers.get(t)||void 0}async getData(){return this.response.arrayBuffer?await this.response.arrayBuffer():(await this.response.buffer()).buffer}},Fn=class extends zA{constructor(t,e){super(t),this.credentials=e}async request({headers:t,signal:e}={}){let n=await fetch(this.url,{headers:t,credentials:this.credentials,signal:e});return new Cr(n)}};var Br=class extends jA{constructor(t,e){super(),this.xhr=t,this.data=e}get status(){return this.xhr.status}getHeader(t){return this.xhr.getResponseHeader(t)||void 0}async getData(){return this.data}},Un=class extends zA{constructRequest(t,e){return new Promise((n,i)=>{let r=new XMLHttpRequest;r.open("GET",this.url),r.responseType="arraybuffer";for(let[I,g]of Object.entries(t))r.setRequestHeader(I,g);r.onload=()=>{let I=r.response;n(new Br(r,I))},r.onerror=i,r.onabort=()=>i(new yA("Request aborted")),r.send(),e&&(e.aborted&&r.abort(),e.addEventListener("abort",()=>r.abort()))})}async request({headers:t={},signal:e=void 0}={}){return await this.constructRequest(t,e)}};var gs=Gt(is(),1),as=Gt(rs(),1),ss=Gt(os(),1);var Er=class extends jA{constructor(t,e){super(),this.response=t,this.dataPromise=e}get status(){return this.response.statusCode}getHeader(t){let e=this.response.headers[t];return Array.isArray(e)?e.join(", "):e}async getData(){return await this.dataPromise}},Mn=class extends zA{constructor(t){super(t),this.parsedUrl=ss.default.parse(this.url),this.httpApi=this.parsedUrl.protocol==="http:"?gs.default:as.default}constructRequest(t,e){return new Promise((n,i)=>{let r=this.httpApi.get({...this.parsedUrl,headers:t},I=>{let g=new Promise(s=>{let o=[];I.on("data",a=>{o.push(a)}),I.on("end",()=>{let a=Buffer.concat(o).buffer;s(a)}),I.on("error",i)});n(new Er(I,g))});r.on("error",i),e&&(e.aborted&&r.destroy(new yA("Request aborted")),e.addEventListener("abort",()=>r.destroy(new yA("Request aborted"))))})}async request({headers:t={},signal:e=void 0}={}){return await this.constructRequest(t,e)}};var dt=class extends WA{constructor(t,{headers:e,maxRanges:n=0,allowFullFile:i}={}){super(),this.client=t,this.headers=e,this.maxRanges=n,this.allowFullFile=i,this._fileSize=null}async fetch(t,e){return this.maxRanges>=t.length?this.fetchSlices(t,e).then(n=>n.map(i=>i.data)):(this.maxRanges>0&&t.length>1,Promise.all(t.map(async n=>(await this.fetchSlice(n,e)).data)))}async fetchSlices(t,e){let n=await this.client.request({headers:{...this.headers,Range:`bytes=${t.map(({offset:i,length:r})=>`${i}-${i+r-1}`).join(",")}`},signal:e});if(n.ok)if(n.status===206){let{type:i,params:r}=$a(n.getHeader("content-type"));if(i==="multipart/byteranges"){let E=As(await n.getData(),r.boundary);return this._fileSize=E[0].fileSize||null,E}let I=await n.getData(),{start:g,end:s,total:o}=xn(n.getHeader("content-range"));this._fileSize=o||null;let a=[{data:I,offset:g,length:s+1-g}];if(t.length>1){let E=await Promise.all(t.slice(1).map(B=>this.fetchSlice(B,e)));return a.concat(E)}return a}else{if(!this.allowFullFile)throw new Error("Server responded with full file");let i=await n.getData();return this._fileSize=i.byteLength,[{data:i,offset:0,length:i.byteLength}]}else throw new Error("Error fetching data.")}async fetchSlice(t,e){let{offset:n,length:i}=t,r=await this.client.request({headers:{...this.headers,Range:`bytes=${n}-${n+i-1}`},signal:e});if(r.ok)if(r.status===206){let I=await r.getData(),{total:g}=xn(r.getHeader("content-range"));return this._fileSize=g||null,{data:I,offset:n,length:i}}else{if(!this.allowFullFile)throw new Error("Server responded with full file");let I=await r.getData();return this._fileSize=I.byteLength,{data:I,offset:0,length:I.byteLength}}else throw new Error("Error fetching data.")}get fileSize(){return this._fileSize}};function cr(A,{blockSize:t,cacheSize:e}){return t===void 0?A:new bn(A,{blockSize:t,cacheSize:e})}function Wl(A,{headers:t={},credentials:e,maxRanges:n=0,allowFullFile:i=!1,...r}={}){let I=new Fn(A,e),g=new dt(I,{headers:t,maxRanges:n,allowFullFile:i});return cr(g,r)}function jl(A,{headers:t={},maxRanges:e=0,allowFullFile:n=!1,...i}={}){let r=new Un(A),I=new dt(r,{headers:t,maxRanges:e,allowFullFile:n});return cr(I,i)}function zl(A,{headers:t={},maxRanges:e=0,allowFullFile:n=!1,...i}={}){let r=new Mn(A),I=new dt(r,{headers:t,maxRanges:e,allowFullFile:n});return cr(I,i)}function Is(A,{forceXHR:t=!1,...e}={}){return typeof fetch=="function"&&!t?Wl(A,e):typeof XMLHttpRequest<"u"?jl(A,e):zl(A,e)}var lr=class extends WA{constructor(t){super(),this.arrayBuffer=t}fetchSlice(t,e){if(e&&e.aborted)throw new yA("Request aborted");return Promise.resolve({data:this.arrayBuffer.slice(t.offset,t.offset+t.length),offset:t.offset,length:t.length})}};function Cs(A){return new lr(A)}Ze();function Re(A,t){switch(A){case m.BYTE:case m.ASCII:case m.UNDEFINED:return new Uint8Array(t);case m.SBYTE:return new Int8Array(t);case m.SHORT:return new Uint16Array(t);case m.SSHORT:return new Int16Array(t);case m.LONG:case m.IFD:return new Uint32Array(t);case m.SLONG:return new Int32Array(t);case m.LONG8:case m.IFD8:return new Array(t);case m.SLONG8:return new Array(t);case m.RATIONAL:return new Uint32Array(t*2);case m.SRATIONAL:return new Int32Array(t*2);case m.FLOAT:return new Float32Array(t);case m.DOUBLE:return new Float64Array(t);default:throw new RangeError(`Invalid field type: ${A}`)}}function ke(A,t){switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:return A.readUint8;case m.SBYTE:return A.readInt8;case m.SHORT:return A.readUint16;case m.SSHORT:return A.readInt16;case m.LONG:case m.IFD:return A.readUint32;case m.SLONG:return A.readInt32;case m.LONG8:case m.IFD8:return A.readUint64;case m.SLONG8:return A.readInt64;case m.RATIONAL:return A.readUint32;case m.SRATIONAL:return A.readInt32;case m.FLOAT:return A.readFloat32;case m.DOUBLE:return A.readFloat64;default:throw new RangeError(`Invalid field type: ${t}`)}}function ut(A=null,t,e,n,i,r,I=!1){let g=$A(n),s=A||Re(n,i),o=n===m.RATIONAL||n===m.SRATIONAL;if(o)for(let a=0;a<i;a+=2)s[a]=t.call(e,r+a*g),s[a+1]=t.call(e,r+(a*g+4));else for(let a=0;a<i;++a)s[a]=t.call(e,r+a*g);return n===m.ASCII?new TextDecoder("utf-8").decode(s):i===1&&!I&&!o?s[0]:s}var Qr=class{constructor(t,e,n,i,r){this.source=t,this.arrayOffset=e,this.littleEndian=n,this.fieldType=i,this.length=r,this.data=Re(i,r),this.itemSize=$A(i),this.maskBitmap=new Uint8Array(Math.ceil(r/8)),this.fetchIndexPromises=new Map,this.fullFetchPromise=null}async loadAll(){return this.fullFetchPromise||(this.fullFetchPromise=this.source.fetch([{offset:this.arrayOffset,length:this.itemSize*this.length}]).then(t=>{let e=new vA(t[0],this.arrayOffset,!0,!1),n=ut(this.data,ke(e,this.fieldType),e,this.fieldType,this.length,this.arrayOffset,!0);return this.maskBitmap.fill(255),this.fetchIndexPromises.clear(),n})),this.fullFetchPromise}async get(t){if(t<0||t>=this.data.length)throw new RangeError(`Index ${t} out of bounds for length ${this.data.length}`);let e=Math.floor(t/8),n=1<<t%8,i=this.arrayOffset+t*this.itemSize;if((this.maskBitmap[e]&n)===0){if(!this.fetchIndexPromises.has(t)){let r=this.source.fetch([{offset:i,length:this.itemSize}]).then(I=>{let g=new vA(I[0],this.arrayOffset+t*this.itemSize,!0,!1),o=ke(g,this.fieldType).call(g,i);return this.data[t]=o,this.maskBitmap[e]|=n,this.fetchIndexPromises.delete(t),o});this.fetchIndexPromises.set(t,r)}return this.fetchIndexPromises.get(t)}return this.data[t]}},hr=class{constructor(t,e,n,i){this.actualizedFields=t,this.deferredFields=e,this.deferredFieldsBeingResolved=new Map,this.deferredArrays=n,this.nextIFDByteOffset=i}hasTag(t){let e=Ve(t);return this.actualizedFields.has(e)||this.deferredFields.has(e)||this.deferredArrays.has(e)}getValue(t){let e=Ve(t);if(this.deferredFields.has(e)||this.deferredArrays.has(e)){let i=le[e]?.name||`Tag${e}`;throw new Error(`Field '${i}' (${e}) is deferred. Use loadValue() to load it asynchronously.`)}if(this.actualizedFields.has(e))return this.actualizedFields.get(e)}async loadValue(t){let e=Ve(t);if(this.actualizedFields.has(e))return this.actualizedFields.get(e);if(this.deferredFieldsBeingResolved.has(e))return this.deferredFieldsBeingResolved.get(e);let n=this.deferredFields.get(e);if(n){this.deferredFields.delete(e);let r=(async()=>{try{let I=await n();return this.actualizedFields.set(e,I),I}finally{this.deferredFieldsBeingResolved.delete(e)}})();return this.deferredFieldsBeingResolved.set(e,r),r}let i=this.deferredArrays.get(e);if(i)return i.loadAll()}async loadValueIndexed(t,e){let n=Ve(t);if(this.actualizedFields.has(n))return this.actualizedFields.get(n)[e];if(this.deferredArrays.has(n))return this.deferredArrays.get(n).get(e);if(this.hasTag(n)){let i=await this.loadValue(n);if(i&&typeof i!="number")return i[e]}}parseGeoKeyDirectory(){let t=this.getValue("GeoKeyDirectory");if(!t)return null;let e={};for(let n=4;n<=t[3]*4;n+=4){let i=wi[t[n]],r=t[n+1]||null,I=t[n+2],g=t[n+3],s=null;if(!r)s=g;else{if(s=this.getValue(r),typeof s>"u"||s===null)throw new Error(`Could not get value of geoKey '${i}'.`);typeof s=="string"?s=s.substring(g,g+I-1):s.subarray&&(s=s.subarray(g,g+I),I===1&&(s=s[0]))}e[i]=s}return e}toObject(){let t={};for(let[e,n]of this.actualizedFields.entries()){let i=typeof e=="number"?le[e]:void 0,r=i?i.name:`Tag${e}`;t[r]=n}return t}},Tn=class{constructor(t,e,n,i=!1){this.source=t,this.littleEndian=e,this.bigTiff=n,this.eager=i}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new vA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(t){let e=this.bigTiff?20:12,n=this.bigTiff?8:2,i=await this.getSlice(t),r=this.bigTiff?i.readUint64(t):i.readUint16(t),I=r*(e+(this.bigTiff?16:6));i.covers(t,I)||(i=await this.getSlice(t,I));let g=new Map,s=new Map,o=new Map,a=t+(this.bigTiff?8:2);for(let B=0;B<r;a+=e,++B){let C=i.readUint16(a),c=i.readUint16(a+2),l=this.bigTiff?i.readUint64(a+4):i.readUint32(a+4),h=null,u=null,p=null,y=$A(c),f=a+(this.bigTiff?12:8),Q=le[C]?.isArray,w=le[C]?.eager||this.eager;if(y*l<=(this.bigTiff?8:4))h=ut(Re(c,l),ke(i,c),i,c,l,f,Q);else{let d=i.readOffset(f),S=$A(c)*l;if(i.covers(d,S))h=ut(Re(c,l),ke(i,c),i,c,l,d,Q);else if(w){let R=await this.getSlice(d,S);h=ut(Re(c,l),ke(R,c),R,c,l,d,Q)}else Q?p=new Qr(this.source,d,this.littleEndian,c,l):u=async()=>{let R=await this.getSlice(d,S);return ut(Re(c,l),ke(R,c),R,c,l,d,Q)}}h!==null?g.set(C,h):u!==null?s.set(C,u):p!==null&&o.set(C,p)}let E=i.readOffset(t+n+e*r);return new hr(g,s,o,E)}};Ze();function fr(A,t,e,n){let i=null,r=null,I=$A(t);switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:i=new Uint8Array(e),r=A.readUint8;break;case m.SBYTE:i=new Int8Array(e),r=A.readInt8;break;case m.SHORT:i=new Uint16Array(e),r=A.readUint16;break;case m.SSHORT:i=new Int16Array(e),r=A.readInt16;break;case m.LONG:case m.IFD:i=new Uint32Array(e),r=A.readUint32;break;case m.SLONG:i=new Int32Array(e),r=A.readInt32;break;case m.LONG8:case m.IFD8:i=new Array(e),r=A.readUint64;break;case m.SLONG8:i=new Array(e),r=A.readInt64;break;case m.RATIONAL:i=new Uint32Array(e*2),r=A.readUint32;break;case m.SRATIONAL:i=new Int32Array(e*2),r=A.readInt32;break;case m.FLOAT:i=new Float32Array(e),r=A.readFloat32;break;case m.DOUBLE:i=new Float64Array(e),r=A.readFloat64;break;default:}if(i===null||r===null)throw new RangeError(`Invalid field type: ${t}`);if(t===m.RATIONAL||t===m.SRATIONAL)for(let g=0;g<e;g+=2)i[g]=r.call(A,n+g*I),i[g+1]=r.call(A,n+(g*I+4));else for(let g=0;g<e;++g)i[g]=r.call(A,n+g*I);return t===m.ASCII?new TextDecoder("utf-8").decode(i):i}var Ge=class extends Error{constructor(t){super(`No image at index ${t}`),this.index=t}},dr=class{async getImage(t=0){throw new Error("Not implemented")}async getImageCount(){throw new Error("Not implemented")}async readRasters(t={}){let{window:e,width:n,height:i}=t,{resX:r,resY:I,bbox:g}=t,s=await this.getImage(),o=s,a=await this.getImageCount(),E=s.getBoundingBox();if(e&&g)throw new Error('Both "bbox" and "window" passed.');if(n||i){if(e){let[c,l]=s.getOrigin(),[h,u]=s.getResolution();g=[c+e[0]*h,l+e[1]*u,c+e[2]*h,l+e[3]*u]}let C=g||E;if(n){if(r)throw new Error("Both width and resX passed");r=(C[2]-C[0])/n}if(i){if(I)throw new Error("Both width and resY passed");I=(C[3]-C[1])/i}}if(r||I){let C=[];for(let c=0;c<a;++c){let l=await this.getImage(c),h=l.fileDirectory.getValue("SubfileType"),u=l.fileDirectory.getValue("NewSubfileType");(c===0||h===2||(u||0)&1)&&C.push(l)}C.sort((c,l)=>c.getWidth()-l.getWidth());for(let c=0;c<C.length;++c){let l=C[c],h=(E[2]-E[0])/l.getWidth(),u=(E[3]-E[1])/l.getHeight();if(o=l,r&&r>h||I&&I>u)break}}let B=e;if(g){let[C,c]=s.getOrigin(),[l,h]=o.getResolution(s);B=[Math.round((g[0]-C)/l),Math.round((g[1]-c)/h),Math.round((g[2]-C)/l),Math.round((g[3]-c)/h)],B=[Math.min(B[0],B[2]),Math.min(B[1],B[3]),Math.max(B[0],B[2]),Math.max(B[1],B[3])]}return o.readRasters({...t,window:B})}},_n=class A extends dr{constructor(t,e,n,i,r={}){super(),this.source=t,this.parser=new Tn(t,e,n,!1),this.littleEndian=e,this.bigTiff=n,this.firstIFDOffset=i,this.cache=r.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new vA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async requestIFD(t){if(this.ifdRequests[t])return this.ifdRequests[t];if(t===0)return this.ifdRequests[t]=this.parser.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[t];if(!this.ifdRequests[t-1])try{this.ifdRequests[t-1]=this.requestIFD(t-1)}catch(e){throw e instanceof Ge?new Ge(t):e}return this.ifdRequests[t]=(async()=>{let e=this.ifdRequests[t-1];if(!e)throw new Error("Previous IFD request missing");let n=await e;if(n.nextIFDByteOffset===0)throw new Ge(t);return this.parser.parseFileDirectoryAt(n.nextIFDByteOffset)})(),this.ifdRequests[t]}async getImage(t=0){return new ja(await this.requestIFD(t),this.littleEndian,this.cache,this.source)}async getImageCount(){let t=0,e=!0;for(;e;)try{await this.requestIFD(t),++t}catch(n){if(n instanceof Ge)e=!1;else throw n}return t}async getGhostValues(){let t=this.bigTiff?16:8;if(this.ghostValues!==null)return this.ghostValues;let e="GDAL_STRUCTURAL_METADATA_SIZE=",n=e.length+100,i=await this.getSlice(t,n);if(e===fr(i,m.ASCII,e.length,t)){let I=fr(i,m.ASCII,n,t).split(`
`)[0],g=Number(I.split("=")[1].split(" ")[0])+I.length;g>n&&(i=await this.getSlice(t,g));let s=fr(i,m.ASCII,g,t),o={};s.split(`
`).filter(a=>a.length>0).map(a=>a.split("=")).forEach(([a,E])=>{o[a]=E}),this.ghostValues=o}return this.ghostValues}static async fromSource(t,e,n){let i=(await t.fetch([{offset:0,length:1024}],n))[0],r=new ht(i),I=r.getUint16(0,!1),g;if(I===18761)g=!0;else if(I===19789)g=!1;else throw new TypeError("Invalid byte order value.");let s=r.getUint16(2,g),o;if(s===42)o=!1;else if(s===43){if(o=!0,r.getUint16(4,g)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");let a=o?r.getUint64(8,g):r.getUint32(4,g);return new A(t,g,o,a,e)}close(){return typeof this.source.close=="function"?this.source.close():!1}};async function Bs(A,t={},e){return _n.fromSource(Is(A,t),void 0,e)}async function Es(A,t){return _n.fromSource(Cs(A),void 0,t)}var pr=new TextEncoder,wr=new TextDecoder,hs="TGPC",Xl=1e3,cs=new Map,ls=new Map,Qs=new Map;function $l(A){return A instanceof Error&&A.message.startsWith("Unsupported cache version ")}function ur(A){return{version:A,entries:{}}}function yr(A){return A.replaceAll(/[^A-Za-z0-9._-]+/g,"-")}function Yn(A){let t=5381;for(let e=0;e<A.length;e+=1)t=(t<<5)+t^A.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function AQ(A){return[A.minLat,A.maxLat,A.minLon,A.maxLon].map(t=>t.toFixed(6)).join("_")}function eQ(A){let t=pr.encode(JSON.stringify({version:2,bounds:A.bounds,width:A.width,height:A.height,noDataValue:A.noDataValue})),e=new Uint8Array(A.values.buffer.slice(0)),n=new Uint8Array(8+t.length+e.length);n.set(pr.encode(hs),0);let i=new DataView(n.buffer);return i.setUint16(4,2,!0),i.setUint16(6,t.length,!0),n.set(t,8),n.set(e,8+t.length),n}function tQ(A){if(A.length<8)throw new Error("Cache record too small.");if(wr.decode(A.slice(0,4))!==hs)throw new Error("Invalid cache record magic.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==2)throw new Error(`Unsupported cache version ${n}.`);let i=e.getUint16(6,!0),r=8,I=r+i;if(I>A.length)throw new Error("Invalid cache record metadata length.");let g=JSON.parse(wr.decode(A.slice(r,I))),s=A.slice(I);if(s.byteLength%Float32Array.BYTES_PER_ELEMENT!==0)throw new Error("Invalid cached raster byte length.");let o=new Float32Array(s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength));if(o.length!==g.width*g.height)throw new Error("Cached raster dimensions do not match metadata.");return{bounds:g.bounds,width:g.width,height:g.height,values:o,noDataValue:g.noDataValue}}function nQ(A){return Object.values(A.entries).reduce((t,e)=>t+e.size,0)}function mr(A){let t=null,e=!1,n=null;async function i(B){t=B,await X.writeFile(A.indexPath,pr.encode(JSON.stringify(B)))}function r(){n!=null&&(clearTimeout(n),n=null),e=!1}async function I(B){r(),await i(B)}function g(B){t=B,e=!0,n==null&&(n=setTimeout(()=>{n=null,!(!e||!t)&&(e=!1,i(t).catch(C=>{console.warn("Unable to persist terrain cache index usage data.",C)}))},Xl))}async function s(){return r(),await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),t=ur(A.version),t}async function o(){if(t)return t;if(!await X.fileExists(A.indexPath))return t=ur(A.version),t;try{let B=await X.readFile(A.indexPath),C=JSON.parse(wr.decode(B));return C.version!==A.version||!C.entries?s():(t=C,t)}catch{return s()}}async function a(B,C){A.deleteMemoryEntry(C.key),delete B.entries[C.key],await X.fileExists(C.path)&&await X.deleteFile(C.path)}async function E(B){let C=nQ(B);if(C<=A.maxBytes)return;let c=Object.values(B.entries).sort((l,h)=>l.lastUsed-h.lastUsed);for(let l of c)if(await a(B,l),C-=l.size,C<=A.maxBytes)break}return{getMemory(B){return A.memoryCache.get(B)},loadIndex:o,async get(B){if(A.memoryCache.has(B))return A.memoryCache.get(B)??null;let C=await o(),c=C.entries[B];if(!c)return null;if(!await X.fileExists(c.path))return delete C.entries[B],await I(C),null;try{let l=await X.readFile(c.path),h=A.decode(l);return A.memoryCache.set(B,h),c.lastUsed=Date.now(),g(C),h}catch(l){return A.onDecodeError?.(B,l),await a(C,c),await I(C),null}},async put(B,C,c){let l=await o(),h=A.encode(c);A.memoryCache.set(B,c),await X.writeFile(C,h),l.entries[B]={key:B,path:C,size:h.byteLength,lastUsed:Date.now()},await E(l),await I(l)},async invalidate(B){A.deleteMemoryEntry(B);let C=await o(),c=C.entries[B];c&&(await a(C,c),await I(C))},async clear(){r();let B=await o(),C=Object.values(B.entries);for(let c of C)await X.fileExists(c.path)&&await X.deleteFile(c.path);return await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),A.memoryCache.clear(),t=ur(A.version),C.length}}}function fs(A){return A}function ds(A){return A}var Dr=mr({version:2,indexPath:to,maxBytes:no,memoryCache:cs,encode:eQ,decode:tQ,deleteMemoryEntry:A=>cs.delete(A),onDecodeError:(A,t)=>{$l(t)&&console.warn(`Discarding outdated cached terrain tile for ${A}: ${t instanceof Error?t.message:"Unknown error"}`)}}),Sr=mr({version:He,indexPath:oo,maxBytes:go,memoryCache:Qs,encode:ds,decode:fs,deleteMemoryEntry:A=>Qs.delete(A)}),us=mr({version:ve,indexPath:io,maxBytes:ro,memoryCache:ls,encode:ds,decode:fs,deleteMemoryEntry:A=>ls.delete(A)});function ps(A,t){let n=`${yr(t)}-${Yn(A)}.bin`;return{key:A,path:`${Ye}/v${2}/${n}`}}function ws(A,t){let n=`${yr(t.split(/[\\/]/).filter(Boolean).pop()||"track").replace(/(?:\.gpx)?$/i,"")||"track"}-${Yn(A)}.cimal`;return{key:A,path:`${ei}/v${He}/${n}`}}function ys(A,t){let n=`${yr(t)}-${Yn(A)}.bin`;return{key:A,path:`${Ai}/v${ve}/${n}`}}function ms(A){return Dr.getMemory(A)}async function Ds(A){return Dr.get(A)}async function Ss(A,t,e){await Dr.put(A,t,e)}async function Ns(A){return Sr.get(A)}async function Rs(A,t,e){await Sr.put(A,t,e)}async function ks(A){await Sr.invalidate(A)}async function Gs(A){return us.get(A)}async function xs(A,t,e){await us.put(A,t,e)}function Ls(A,t,e,n){return[`v${2}`,A,AQ(t),e,n,"bilinear"].join("|")}function bs(A,t,e,n,i){return[`v${He}`,A,e,n,i,Yn(t)].join("|")}function Fs(A,t,e){return[`v${ve}`,"openhikingmap",A,t,e].join("|")}function eA(A,t,e){return Math.min(e,Math.max(t,A))}function Le(A,t,e){return A+(t-A)*e}function pt(A){return A*Math.PI/180}function vn(A,t){let e=pt(A.lat),n=pt(t.lat),i=pt(t.lat-A.lat),r=pt(t.lon-A.lon),I=Math.sin(i/2),g=Math.sin(r/2),s=I*I+Math.cos(e)*Math.cos(n)*g*g;return 2*6371e3*Math.asin(Math.min(1,Math.sqrt(s)))}function Us(A){if(A.length===0)throw new Error("Cannot compute bounds for an empty point set.");let t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let r of A)t=Math.min(t,r.lat),e=Math.max(e,r.lat),n=Math.min(n,r.lon),i=Math.max(i,r.lon);return{minLat:t,maxLat:e,minLon:n,maxLon:i}}function Hn(A){return Math.max(0,A.maxLon-A.minLon)}function Kn(A){return Math.max(0,A.maxLat-A.minLat)}function Ms(A,t,e){return{minLat:A.minLat-t,maxLat:A.maxLat+t,minLon:A.minLon-e,maxLon:A.maxLon+e}}function Nr(A){return{lat:(A.minLat+A.maxLat)/2,lon:(A.minLon+A.maxLon)/2}}function Rr(A){let t=pt(A),e=111132.92-559.82*Math.cos(2*t)+1.175*Math.cos(4*t),n=111412.84*Math.cos(t)-93.5*Math.cos(3*t);return{lat:e,lon:Math.max(1,n)}}function wt(A,t){let e=Math.max(A.minLat,t.minLat),n=Math.min(A.maxLat,t.maxLat),i=Math.max(A.minLon,t.minLon),r=Math.min(A.maxLon,t.maxLon);return e>=n||i>=r?null:{minLat:e,maxLat:n,minLon:i,maxLon:r}}function Ts(A,t,e){return{x:(A.lon-t.lon)*e.lon,z:(A.lat-t.lat)*-e.lat}}function Ys(A,t){return Math.abs(A).toString().padStart(t,"0")}function oQ(A){return`${A>=0?"N":"S"}${Ys(A,2)}_00`}function gQ(A){return`${A>=0?"E":"W"}${Ys(A,3)}_00`}function vs(A){return`Copernicus_DSM_COG_${10}_${oQ(A.southLat)}_${gQ(A.westLon)}_DEM`}function aQ(A){let t=vs(A);return`${eo}/${t}/${t}.tif`}function Hs(A){let t=Math.floor(A.minLat),e=Math.ceil(A.maxLat)-1,n=Math.floor(A.minLon),i=Math.ceil(A.maxLon)-1,r=[];for(let I=t;I<=e;I+=1)for(let g=n;g<=i;g+=1)r.push({southLat:I,westLon:g});return r.length===0&&r.push({southLat:Math.floor(A.minLat),westLon:Math.floor(A.minLon)}),r}function sQ(A,t,e,n){let i=eA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=eA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),I=eA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=eA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),I+1,n);return[i,I,r,g]}async function IQ(A){let t=new AbortController,e=setTimeout(()=>t.abort(),45e3);try{let n=await fetch(A,{signal:t.signal});if(!n.ok)throw new Error(`Failed to fetch Copernicus tile ${A}: ${n.status} ${n.statusText}`);return await n.arrayBuffer()}finally{clearTimeout(e)}}async function Ks(A,t,e){let n={minLat:A.southLat,maxLat:A.southLat+1,minLon:A.westLon,maxLon:A.westLon+1},i=wt(n,t);if(!i)return null;let r=eA(Math.ceil((i.maxLon-i.minLon)*e.lon)+2,16,640),I=eA(Math.ceil((i.maxLat-i.minLat)*e.lat)+2,16,640),g=vs(A),s=Ls(g,i,r,I),o=ms(s);if(o)return o;let a=await Ds(s);if(a)return a;let E=await IQ(aQ(A)),C=await(await Es(E)).getImage(),[c,l,h,u]=C.getBoundingBox(),p={minLat:l,maxLat:u,minLon:c,maxLon:h},y=wt(p,t);if(!y)return null;let f=sQ(p,y,C.getWidth(),C.getHeight()),Q=await C.readRasters({window:f,width:r,height:I,interleave:!0,fillValue:0,resampleMethod:"bilinear"}),w={bounds:y,width:r,height:I,values:Q,noDataValue:C.getGDALNoData()},d=ps(s,g);return await Ss(d.key,d.path,w),w}function Pn(A,t){return!Number.isFinite(A)||t!=null&&A===t?null:A}function CQ(A,t,e){let{bounds:n,width:i,height:r,values:I,noDataValue:g}=A;if(t<n.minLat||t>n.maxLat||e<n.minLon||e>n.maxLon)return null;let s=(e-n.minLon)/(n.maxLon-n.minLon)*(i-1),o=(n.maxLat-t)/(n.maxLat-n.minLat)*(r-1),a=Math.floor(s),E=Math.floor(o),B=Math.min(i-1,a+1),C=Math.min(r-1,E+1),c=s-a,l=o-E,h=Pn(I[E*i+a],g),u=Pn(I[E*i+B],g),p=Pn(I[C*i+a],g),y=Pn(I[C*i+B],g),f=[h,u,p,y].filter(k=>k!=null);if(f.length===0)return null;if(f.length<4)return f.reduce((k,L)=>k+L,0)/f.length;let[Q,w,d,S]=f,R=Q*(1-c)+w*c,D=d*(1-c)+S*c;return R*(1-l)+D*l}function kr(A,t,e){for(let n of A){let i=CQ(n,t,e);if(i!=null)return i}return null}var Ps=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",BQ=Ps+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",EQ="["+Ps+"]["+BQ+"]*",cQ=new RegExp("^"+EQ+"$");function On(A,t){let e=[],n=t.exec(A);for(;n;){let i=[];i.startIndex=t.lastIndex-n[0].length;let r=n.length;for(let I=0;I<r;I++)i.push(n[I]);e.push(i),n=t.exec(A)}return e}var be=function(A){let t=cQ.exec(A);return!(t===null||typeof t>"u")};function Os(A){return typeof A<"u"}var yt=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],Jn=["__proto__","constructor","prototype"];var lQ={allowBooleanAttributes:!1,unpairedTags:[]};function Ws(A,t){t=Object.assign({},lQ,t);let e=[],n=!1,i=!1;A[0]==="\uFEFF"&&(A=A.substr(1));for(let r=0;r<A.length;r++)if(A[r]==="<"&&A[r+1]==="?"){if(r+=2,r=qs(A,r),r.err)return r}else if(A[r]==="<"){let I=r;if(r++,A[r]==="!"){r=Vs(A,r);continue}else{let g=!1;A[r]==="/"&&(g=!0,r++);let s="";for(;r<A.length&&A[r]!==">"&&A[r]!==" "&&A[r]!=="	"&&A[r]!==`
`&&A[r]!=="\r";r++)s+=A[r];if(s=s.trim(),s[s.length-1]==="/"&&(s=s.substring(0,s.length-1),r--),!yQ(s)){let E;return s.trim().length===0?E="Invalid space after '<'.":E="Tag '"+s+"' is an invalid name.",tA("InvalidTag",E,BA(A,r))}let o=fQ(A,r);if(o===!1)return tA("InvalidAttr","Attributes for '"+s+"' have open quote.",BA(A,r));let a=o.value;if(r=o.index,a[a.length-1]==="/"){let E=r-a.length;a=a.substring(0,a.length-1);let B=Zs(a,t);if(B===!0)n=!0;else return tA(B.err.code,B.err.msg,BA(A,E+B.err.line))}else if(g)if(o.tagClosed){if(a.trim().length>0)return tA("InvalidTag","Closing tag '"+s+"' can't have attributes or invalid starting.",BA(A,I));if(e.length===0)return tA("InvalidTag","Closing tag '"+s+"' has not been opened.",BA(A,I));{let E=e.pop();if(s!==E.tagName){let B=BA(A,E.tagStartPos);return tA("InvalidTag","Expected closing tag '"+E.tagName+"' (opened in line "+B.line+", col "+B.col+") instead of closing tag '"+s+"'.",BA(A,I))}e.length==0&&(i=!0)}}else return tA("InvalidTag","Closing tag '"+s+"' doesn't have proper closing.",BA(A,r));else{let E=Zs(a,t);if(E!==!0)return tA(E.err.code,E.err.msg,BA(A,r-a.length+E.err.line));if(i===!0)return tA("InvalidXml","Multiple possible root nodes found.",BA(A,r));t.unpairedTags.indexOf(s)!==-1||e.push({tagName:s,tagStartPos:I}),n=!0}for(r++;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="!"){r++,r=Vs(A,r);continue}else if(A[r+1]==="?"){if(r=qs(A,++r),r.err)return r}else break;else if(A[r]==="&"){let E=pQ(A,r);if(E==-1)return tA("InvalidChar","char '&' is not expected.",BA(A,r));r=E}else if(i===!0&&!Js(A[r]))return tA("InvalidXml","Extra text at the end",BA(A,r));A[r]==="<"&&r--}}else{if(Js(A[r]))continue;return tA("InvalidChar","char '"+A[r]+"' is not expected.",BA(A,r))}if(n){if(e.length==1)return tA("InvalidTag","Unclosed tag '"+e[0].tagName+"'.",BA(A,e[0].tagStartPos));if(e.length>0)return tA("InvalidXml","Invalid '"+JSON.stringify(e.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return tA("InvalidXml","Start tag expected.",1);return!0}function Js(A){return A===" "||A==="	"||A===`
`||A==="\r"}function qs(A,t){let e=t;for(;t<A.length;t++)if(A[t]=="?"||A[t]==" "){let n=A.substr(e,t-e);if(t>5&&n==="xml")return tA("InvalidXml","XML declaration allowed only at the start of the document.",BA(A,t));if(A[t]=="?"&&A[t+1]==">"){t++;break}else continue}return t}function Vs(A,t){if(A.length>t+5&&A[t+1]==="-"&&A[t+2]==="-"){for(t+=3;t<A.length;t++)if(A[t]==="-"&&A[t+1]==="-"&&A[t+2]===">"){t+=2;break}}else if(A.length>t+8&&A[t+1]==="D"&&A[t+2]==="O"&&A[t+3]==="C"&&A[t+4]==="T"&&A[t+5]==="Y"&&A[t+6]==="P"&&A[t+7]==="E"){let e=1;for(t+=8;t<A.length;t++)if(A[t]==="<")e++;else if(A[t]===">"&&(e--,e===0))break}else if(A.length>t+9&&A[t+1]==="["&&A[t+2]==="C"&&A[t+3]==="D"&&A[t+4]==="A"&&A[t+5]==="T"&&A[t+6]==="A"&&A[t+7]==="["){for(t+=8;t<A.length;t++)if(A[t]==="]"&&A[t+1]==="]"&&A[t+2]===">"){t+=2;break}}return t}var QQ='"',hQ="'";function fQ(A,t){let e="",n="",i=!1;for(;t<A.length;t++){if(A[t]===QQ||A[t]===hQ)n===""?n=A[t]:n!==A[t]||(n="");else if(A[t]===">"&&n===""){i=!0;break}e+=A[t]}return n!==""?!1:{value:e,index:t,tagClosed:i}}var dQ=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Zs(A,t){let e=On(A,dQ),n={};for(let i=0;i<e.length;i++){if(e[i][1].length===0)return tA("InvalidAttr","Attribute '"+e[i][2]+"' has no space in starting.",mt(e[i]));if(e[i][3]!==void 0&&e[i][4]===void 0)return tA("InvalidAttr","Attribute '"+e[i][2]+"' is without value.",mt(e[i]));if(e[i][3]===void 0&&!t.allowBooleanAttributes)return tA("InvalidAttr","boolean attribute '"+e[i][2]+"' is not allowed.",mt(e[i]));let r=e[i][2];if(!wQ(r))return tA("InvalidAttr","Attribute '"+r+"' is an invalid name.",mt(e[i]));if(!Object.prototype.hasOwnProperty.call(n,r))n[r]=1;else return tA("InvalidAttr","Attribute '"+r+"' is repeated.",mt(e[i]))}return!0}function uQ(A,t){let e=/\d/;for(A[t]==="x"&&(t++,e=/[\da-fA-F]/);t<A.length;t++){if(A[t]===";")return t;if(!A[t].match(e))break}return-1}function pQ(A,t){if(t++,A[t]===";")return-1;if(A[t]==="#")return t++,uQ(A,t);let e=0;for(;t<A.length;t++,e++)if(!(A[t].match(/\w/)&&e<20)){if(A[t]===";")break;return-1}return t}function tA(A,t,e){return{err:{code:A,msg:t,line:e.line||e,col:e.col}}}function wQ(A){return be(A)}function yQ(A){return be(A)}function BA(A,t){let e=A.substring(0,t).split(/\r?\n/);return{line:e.length,col:e[e.length-1].length+1}}function mt(A){return A.startIndex+A[1].length}var js=A=>yt.includes(A)?"__"+A:A,mQ={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(A,t){return t},attributeValueProcessor:function(A,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(A,t,e){return A},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:js};function DQ(A,t){if(typeof A!="string")return;let e=A.toLowerCase();if(yt.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);if(Jn.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`)}function zs(A){return typeof A=="boolean"?{enabled:A,maxEntitySize:1e4,maxExpansionDepth:10,maxTotalExpansions:1e3,maxExpandedLength:1e5,maxEntityCount:100,allowedTags:null,tagFilter:null}:typeof A=="object"&&A!==null?{enabled:A.enabled!==!1,maxEntitySize:Math.max(1,A.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,A.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,A.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,A.maxExpandedLength??1e5),maxEntityCount:Math.max(1,A.maxEntityCount??1e3),allowedTags:A.allowedTags??null,tagFilter:A.tagFilter??null}:zs(!0)}var Xs=function(A){let t=Object.assign({},mQ,A),e=[{value:t.attributeNamePrefix,name:"attributeNamePrefix"},{value:t.attributesGroupName,name:"attributesGroupName"},{value:t.textNodeName,name:"textNodeName"},{value:t.cdataPropName,name:"cdataPropName"},{value:t.commentPropName,name:"commentPropName"}];for(let{value:n,name:i}of e)n&&DQ(n,i);return t.onDangerousProperty===null&&(t.onDangerousProperty=js),t.processEntities=zs(t.processEntities),t.stopNodes&&Array.isArray(t.stopNodes)&&(t.stopNodes=t.stopNodes.map(n=>typeof n=="string"&&n.startsWith("*.")?".."+n.substring(2):n)),t};var qn;typeof Symbol!="function"?qn="@@xmlMetadata":qn=Symbol("XML Node Metadata");var QA=class{constructor(t){this.tagname=t,this.child=[],this[":@"]=Object.create(null)}add(t,e){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t,e){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child}),e!==void 0&&(this.child[this.child.length-1][qn]={startIndex:e})}static getMetaDataSymbol(){return qn}};var St=class{constructor(t){this.suppressValidationErr=!t,this.options=t}readDocType(t,e){let n=Object.create(null),i=0;if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let r=1,I=!1,g=!1,s="";for(;e<t.length;e++)if(t[e]==="<"&&!g){if(I&&ge(t,"!ENTITY",e)){e+=7;let o,a;if([o,a,e]=this.readEntityExp(t,e+1,this.suppressValidationErr),a.indexOf("&")===-1){if(this.options.enabled!==!1&&this.options.maxEntityCount!=null&&i>=this.options.maxEntityCount)throw new Error(`Entity count (${i+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);let E=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n[o]={regx:RegExp(`&${E};`,"g"),val:a},i++}}else if(I&&ge(t,"!ELEMENT",e)){e+=8;let{index:o}=this.readElementExp(t,e+1);e=o}else if(I&&ge(t,"!ATTLIST",e))e+=8;else if(I&&ge(t,"!NOTATION",e)){e+=9;let{index:o}=this.readNotationExp(t,e+1,this.suppressValidationErr);e=o}else if(ge(t,"!--",e))g=!0;else throw new Error("Invalid DOCTYPE");r++,s=""}else if(t[e]===">"){if(g?t[e-1]==="-"&&t[e-2]==="-"&&(g=!1,r--):r--,r===0)break}else t[e]==="["?I=!0:s+=t[e];if(r!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:n,i:e}}readEntityExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e])&&t[e]!=='"'&&t[e]!=="'";)e++;let i=t.substring(n,e);if(Dt(i),e=hA(t,e),!this.suppressValidationErr){if(t.substring(e,e+6).toUpperCase()==="SYSTEM")throw new Error("External entities are not supported");if(t[e]==="%")throw new Error("Parameter entities are not supported")}let r="";if([e,r]=this.readIdentifierVal(t,e,"entity"),this.options.enabled!==!1&&this.options.maxEntitySize!=null&&r.length>this.options.maxEntitySize)throw new Error(`Entity "${i}" size (${r.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return e--,[i,r,e]}readNotationExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);!this.suppressValidationErr&&Dt(i),e=hA(t,e);let r=t.substring(e,e+6).toUpperCase();if(!this.suppressValidationErr&&r!=="SYSTEM"&&r!=="PUBLIC")throw new Error(`Expected SYSTEM or PUBLIC, found "${r}"`);e+=r.length,e=hA(t,e);let I=null,g=null;if(r==="PUBLIC")[e,I]=this.readIdentifierVal(t,e,"publicIdentifier"),e=hA(t,e),(t[e]==='"'||t[e]==="'")&&([e,g]=this.readIdentifierVal(t,e,"systemIdentifier"));else if(r==="SYSTEM"&&([e,g]=this.readIdentifierVal(t,e,"systemIdentifier"),!this.suppressValidationErr&&!g))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:i,publicIdentifier:I,systemIdentifier:g,index:--e}}readIdentifierVal(t,e,n){let i="",r=t[e];if(r!=='"'&&r!=="'")throw new Error(`Expected quoted string, found "${r}"`);e++;let I=e;for(;e<t.length&&t[e]!==r;)e++;if(i=t.substring(I,e),t[e]!==r)throw new Error(`Unterminated ${n} value`);return e++,[e,i]}readElementExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);if(!this.suppressValidationErr&&!be(i))throw new Error(`Invalid element name: "${i}"`);e=hA(t,e);let r="";if(t[e]==="E"&&ge(t,"MPTY",e))e+=4;else if(t[e]==="A"&&ge(t,"NY",e))e+=2;else if(t[e]==="("){e++;let I=e;for(;e<t.length&&t[e]!==")";)e++;if(r=t.substring(I,e),t[e]!==")")throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${t[e]}"`);return{elementName:i,contentModel:r.trim(),index:e}}readAttlistExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);for(Dt(i),e=hA(t,e),n=e;e<t.length&&!/\s/.test(t[e]);)e++;let r=t.substring(n,e);if(!Dt(r))throw new Error(`Invalid attribute name: "${r}"`);e=hA(t,e);let I="";if(t.substring(e,e+8).toUpperCase()==="NOTATION"){if(I="NOTATION",e+=8,e=hA(t,e),t[e]!=="(")throw new Error(`Expected '(', found "${t[e]}"`);e++;let s=[];for(;e<t.length&&t[e]!==")";){let o=e;for(;e<t.length&&t[e]!=="|"&&t[e]!==")";)e++;let a=t.substring(o,e);if(a=a.trim(),!Dt(a))throw new Error(`Invalid notation name: "${a}"`);s.push(a),t[e]==="|"&&(e++,e=hA(t,e))}if(t[e]!==")")throw new Error("Unterminated list of notations");e++,I+=" ("+s.join("|")+")"}else{let s=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;I+=t.substring(s,e);let o=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!o.includes(I.toUpperCase()))throw new Error(`Invalid attribute type: "${I}"`)}e=hA(t,e);let g="";return t.substring(e,e+8).toUpperCase()==="#REQUIRED"?(g="#REQUIRED",e+=8):t.substring(e,e+7).toUpperCase()==="#IMPLIED"?(g="#IMPLIED",e+=7):[e,g]=this.readIdentifierVal(t,e,"ATTLIST"),{elementName:i,attributeName:r,attributeType:I,defaultValue:g,index:e}}},hA=(A,t)=>{for(;t<A.length&&/\s/.test(A[t]);)t++;return t};function ge(A,t,e){for(let n=0;n<t.length;n++)if(t[n]!==A[e+n+1])return!1;return!0}function Dt(A){if(be(A))return A;throw new Error(`Invalid entity name ${A}`)}var SQ=/^[-+]?0x[a-fA-F0-9]+$/,NQ=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,RQ={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original"};function Gr(A,t={}){if(t=Object.assign({},RQ,t),!A||typeof A!="string")return A;let e=A.trim();if(e.length===0)return A;if(t.skipLike!==void 0&&t.skipLike.test(e))return A;if(e==="0")return 0;if(t.hex&&SQ.test(e))return LQ(e,16);if(isFinite(e)){if(e.includes("e")||e.includes("E"))return GQ(A,e,t);{let n=NQ.exec(e);if(n){let i=n[1]||"",r=n[2],I=xQ(n[3]),g=i?A[r.length+1]===".":A[r.length]===".";if(!t.leadingZeros&&(r.length>1||r.length===1&&!g))return A;{let s=Number(e),o=String(s);if(s===0)return s;if(o.search(/[eE]/)!==-1)return t.eNotation?s:A;if(e.indexOf(".")!==-1)return o==="0"||o===I||o===`${i}${I}`?s:A;let a=r?I:e;return r?a===o||i+a===o?s:A:a===o||a===i+o?s:A}}else return A}}else return bQ(A,Number(e),t)}var kQ=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function GQ(A,t,e){if(!e.eNotation)return A;let n=t.match(kQ);if(n){let i=n[1]||"",r=n[3].indexOf("e")===-1?"E":"e",I=n[2],g=i?A[I.length+1]===r:A[I.length]===r;return I.length>1&&g?A:I.length===1&&(n[3].startsWith(`.${r}`)||n[3][0]===r)?Number(t):I.length>0?e.leadingZeros&&!g?(t=(n[1]||"")+n[3],Number(t)):A:Number(t)}else return A}function xQ(A){return A&&A.indexOf(".")!==-1&&(A=A.replace(/0+$/,""),A==="."?A="0":A[0]==="."?A="0"+A:A[A.length-1]==="."&&(A=A.substring(0,A.length-1))),A}function LQ(A,t){if(parseInt)return parseInt(A,t);if(Number.parseInt)return Number.parseInt(A,t);if(window&&window.parseInt)return window.parseInt(A,t);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}function bQ(A,t,e){let n=t===1/0;switch(e.infinity.toLowerCase()){case"null":return null;case"infinity":return t;case"string":return n?"Infinity":"-Infinity";default:return A}}function xr(A){return typeof A=="function"?A:Array.isArray(A)?t=>{for(let e of A)if(typeof e=="string"&&t===e||e instanceof RegExp&&e.test(t))return!0}:()=>!1}var ae=class{constructor(t,e={}){this.pattern=t,this.separator=e.separator||".",this.segments=this._parse(t),this._hasDeepWildcard=this.segments.some(n=>n.type==="deep-wildcard"),this._hasAttributeCondition=this.segments.some(n=>n.attrName!==void 0),this._hasPositionSelector=this.segments.some(n=>n.position!==void 0)}_parse(t){let e=[],n=0,i="";for(;n<t.length;)t[n]===this.separator?n+1<t.length&&t[n+1]===this.separator?(i.trim()&&(e.push(this._parseSegment(i.trim())),i=""),e.push({type:"deep-wildcard"}),n+=2):(i.trim()&&e.push(this._parseSegment(i.trim())),i="",n++):(i+=t[n],n++);return i.trim()&&e.push(this._parseSegment(i.trim())),e}_parseSegment(t){let e={type:"tag"},n=null,i=t,r=t.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(r&&(i=r[1]+r[3],r[2])){let a=r[2].slice(1,-1);a&&(n=a)}let I,g=i;if(i.includes("::")){let a=i.indexOf("::");if(I=i.substring(0,a).trim(),g=i.substring(a+2).trim(),!I)throw new Error(`Invalid namespace in pattern: ${t}`)}let s,o=null;if(g.includes(":")){let a=g.lastIndexOf(":"),E=g.substring(0,a).trim(),B=g.substring(a+1).trim();["first","last","odd","even"].includes(B)||/^nth\(\d+\)$/.test(B)?(s=E,o=B):s=g}else s=g;if(!s)throw new Error(`Invalid segment pattern: ${t}`);if(e.tag=s,I&&(e.namespace=I),n)if(n.includes("=")){let a=n.indexOf("=");e.attrName=n.substring(0,a).trim(),e.attrValue=n.substring(a+1).trim()}else e.attrName=n.trim();if(o){let a=o.match(/^nth\((\d+)\)$/);a?(e.position="nth",e.positionValue=parseInt(a[1],10)):e.position=o}return e}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}};var FQ=new Set(["push","pop","reset","updateCurrent","restore"]),Fe=class{constructor(t={}){this.separator=t.separator||".",this.path=[],this.siblingStacks=[]}push(t,e=null,n=null){if(this._pathStringCache=null,this.path.length>0){let a=this.path[this.path.length-1];a.values=void 0}let i=this.path.length;this.siblingStacks[i]||(this.siblingStacks[i]=new Map);let r=this.siblingStacks[i],I=n?`${n}:${t}`:t,g=r.get(I)||0,s=0;for(let a of r.values())s+=a;r.set(I,g+1);let o={tag:t,position:s,counter:g};n!=null&&(o.namespace=n),e!=null&&(o.values=e),this.path.push(o)}pop(){if(this.path.length===0)return;this._pathStringCache=null;let t=this.path.pop();return this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1),t}updateCurrent(t){if(this.path.length>0){let e=this.path[this.path.length-1];t!=null&&(e.values=t)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(t){return this.path.length===0?void 0:this.path[this.path.length-1].values?.[t]}hasAttr(t){if(this.path.length===0)return!1;let e=this.path[this.path.length-1];return e.values!==void 0&&t in e.values}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(t,e=!0){let n=t||this.separator;if(n===this.separator&&e===!0){if(this._pathStringCache!==null&&this._pathStringCache!==void 0)return this._pathStringCache;let r=this.path.map(I=>e&&I.namespace?`${I.namespace}:${I.tag}`:I.tag).join(n);return this._pathStringCache=r,r}return this.path.map(r=>e&&r.namespace?`${r.namespace}:${r.tag}`:r.tag).join(n)}toArray(){return this.path.map(t=>t.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[]}matches(t){let e=t.segments;return e.length===0?!1:t.hasDeepWildcard()?this._matchWithDeepWildcard(e):this._matchSimple(e)}_matchSimple(t){if(this.path.length!==t.length)return!1;for(let e=0;e<t.length;e++){let n=t[e],i=this.path[e],r=e===this.path.length-1;if(!this._matchSegment(n,i,r))return!1}return!0}_matchWithDeepWildcard(t){let e=this.path.length-1,n=t.length-1;for(;n>=0&&e>=0;){let i=t[n];if(i.type==="deep-wildcard"){if(n--,n<0)return!0;let r=t[n],I=!1;for(let g=e;g>=0;g--){let s=g===this.path.length-1;if(this._matchSegment(r,this.path[g],s)){e=g-1,n--,I=!0;break}}if(!I)return!1}else{let r=e===this.path.length-1;if(!this._matchSegment(i,this.path[e],r))return!1;e--,n--}}return n<0}_matchSegment(t,e,n){if(t.tag!=="*"&&t.tag!==e.tag||t.namespace!==void 0&&t.namespace!=="*"&&t.namespace!==e.namespace)return!1;if(t.attrName!==void 0){if(!n||!e.values||!(t.attrName in e.values))return!1;if(t.attrValue!==void 0){let i=e.values[t.attrName];if(String(i)!==String(t.attrValue))return!1}}if(t.position!==void 0){if(!n)return!1;let i=e.counter??0;if(t.position==="first"&&i!==0)return!1;if(t.position==="odd"&&i%2!==1)return!1;if(t.position==="even"&&i%2!==0)return!1;if(t.position==="nth"&&i!==t.positionValue)return!1}return!0}snapshot(){return{path:this.path.map(t=>({...t})),siblingStacks:this.siblingStacks.map(t=>new Map(t))}}restore(t){this._pathStringCache=null,this.path=t.path.map(e=>({...e})),this.siblingStacks=t.siblingStacks.map(e=>new Map(e))}readOnly(){let t=this;return new Proxy(t,{get(e,n,i){if(FQ.has(n))return()=>{throw new TypeError(`Cannot call '${n}' on a read-only Matcher. Obtain a writable instance to mutate state.`)};let r=Reflect.get(e,n,i);return n==="path"||n==="siblingStacks"?Object.freeze(Array.isArray(r)?r.map(I=>I instanceof Map?Object.freeze(new Map(I)):Object.freeze({...I})):r):typeof r=="function"?r.bind(e):r},set(e,n){throw new TypeError(`Cannot set property '${String(n)}' on a read-only Matcher.`)},deleteProperty(e,n){throw new TypeError(`Cannot delete property '${String(n)}' from a read-only Matcher.`)}})}};function UQ(A,t){if(!A)return{};let e=t.attributesGroupName?A[t.attributesGroupName]:A;if(!e)return{};let n={};for(let i in e)if(i.startsWith(t.attributeNamePrefix)){let r=i.substring(t.attributeNamePrefix.length);n[r]=e[i]}else n[i]=e[i];return n}function MQ(A){if(!A||typeof A!="string")return;let t=A.indexOf(":");if(t!==-1&&t>0){let e=A.substring(0,t);if(e!=="xmlns")return e}}var Nt=class{constructor(t){if(this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(e,n)=>$s(n,10,"&#")},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(e,n)=>$s(n,16,"&#x")}},this.addExternalEntities=TQ,this.parseXml=KQ,this.parseTextData=_Q,this.resolveNameSpace=YQ,this.buildAttributesMap=HQ,this.isItStopNode=qQ,this.replaceEntitiesValue=OQ,this.readStopNodeData=ZQ,this.saveTextToParentTag=JQ,this.addChild=PQ,this.ignoreAttributesFn=xr(this.options.ignoreAttributes),this.entityExpansionCount=0,this.currentExpandedLength=0,this.matcher=new Fe,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.options.stopNodes&&this.options.stopNodes.length>0){this.stopNodeExpressions=[];for(let e=0;e<this.options.stopNodes.length;e++){let n=this.options.stopNodes[e];typeof n=="string"?this.stopNodeExpressions.push(new ae(n)):n instanceof ae&&this.stopNodeExpressions.push(n)}}}};function TQ(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e],i=n.replace(/[.\-+*:]/g,"\\.");this.lastEntities[n]={regex:new RegExp("&"+i+";","g"),val:A[n]}}}function _Q(A,t,e,n,i,r,I){if(A!==void 0&&(this.options.trimValues&&!n&&(A=A.trim()),A.length>0)){I||(A=this.replaceEntitiesValue(A,t,e));let g=this.options.jPath?e.toString():e,s=this.options.tagValueProcessor(t,A,g,i,r);return s==null?A:typeof s!=typeof A||s!==A?s:this.options.trimValues?Fr(A,this.options.parseTagValue,this.options.numberParseOptions):A.trim()===A?Fr(A,this.options.parseTagValue,this.options.numberParseOptions):A}}function YQ(A){if(this.options.removeNSPrefix){let t=A.split(":"),e=A.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(A=e+t[1])}return A}var vQ=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function HQ(A,t,e){if(this.options.ignoreAttributes!==!0&&typeof A=="string"){let n=On(A,vQ),i=n.length,r={},I=new Array(i),g=!1,s={};for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]),C=n[E][4];if(B.length&&C!==void 0){let c=C;this.options.trimValues&&(c=c.trim()),c=this.replaceEntitiesValue(c,e,this.readonlyMatcher),I[E]=c,s[B]=c,g=!0}}g&&typeof t=="object"&&t.updateCurrent&&t.updateCurrent(s);let o=this.options.jPath?t.toString():this.readonlyMatcher,a=!1;for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]);if(this.ignoreAttributesFn(B,o))continue;let C=this.options.attributeNamePrefix+B;if(B.length)if(this.options.transformAttributeName&&(C=this.options.transformAttributeName(C)),C=AI(C,this.options),n[E][4]!==void 0){let c=I[E],l=this.options.attributeValueProcessor(B,c,o);l==null?r[C]=c:typeof l!=typeof c||l!==c?r[C]=l:r[C]=Fr(c,this.options.parseAttributeValue,this.options.numberParseOptions),a=!0}else this.options.allowBooleanAttributes&&(r[C]=!0,a=!0)}if(!a)return;if(this.options.attributesGroupName){let E={};return E[this.options.attributesGroupName]=r,E}return r}}var KQ=function(A){A=A.replace(/\r\n?/g,`
`);let t=new QA("!xml"),e=t,n="";this.matcher.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0;let i=new St(this.options.processEntities);for(let r=0;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="/"){let g=se(A,">",r,"Closing Tag is not closed."),s=A.substring(r+2,g).trim();if(this.options.removeNSPrefix){let a=s.indexOf(":");a!==-1&&(s=s.substr(a+1))}s=Lr(this.options.transformTagName,s,"",this.options).tagName,e&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher));let o=this.matcher.getCurrentTag();if(s&&this.options.unpairedTags.indexOf(s)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${s}>`);o&&this.options.unpairedTags.indexOf(o)!==-1&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,e=this.tagsNodeStack.pop(),n="",r=g}else if(A[r+1]==="?"){let g=br(A,r,!1,"?>");if(!g)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,e,this.readonlyMatcher),!(this.options.ignoreDeclaration&&g.tagName==="?xml"||this.options.ignorePiTags)){let s=new QA(g.tagName);s.add(this.options.textNodeName,""),g.tagName!==g.tagExp&&g.attrExpPresent&&(s[":@"]=this.buildAttributesMap(g.tagExp,this.matcher,g.tagName)),this.addChild(e,s,this.readonlyMatcher,r)}r=g.closeIndex+1}else if(A.substr(r+1,3)==="!--"){let g=se(A,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){let s=A.substring(r+4,g-2);n=this.saveTextToParentTag(n,e,this.readonlyMatcher),e.add(this.options.commentPropName,[{[this.options.textNodeName]:s}])}r=g}else if(A.substr(r+1,2)==="!D"){let g=i.readDocType(A,r);this.docTypeEntities=g.entities,r=g.i}else if(A.substr(r+1,2)==="!["){let g=se(A,"]]>",r,"CDATA is not closed.")-2,s=A.substring(r+9,g);n=this.saveTextToParentTag(n,e,this.readonlyMatcher);let o=this.parseTextData(s,e.tagname,this.readonlyMatcher,!0,!1,!0,!0);o==null&&(o=""),this.options.cdataPropName?e.add(this.options.cdataPropName,[{[this.options.textNodeName]:s}]):e.add(this.options.textNodeName,o),r=g+2}else{let g=br(A,r,this.options.removeNSPrefix);if(!g){let y=A.substring(Math.max(0,r-50),Math.min(A.length,r+50));throw new Error(`readTagExp returned undefined at position ${r}. Context: "${y}"`)}let s=g.tagName,o=g.rawTagName,a=g.tagExp,E=g.attrExpPresent,B=g.closeIndex;if({tagName:s,tagExp:a}=Lr(this.options.transformTagName,s,a,this.options),this.options.strictReservedNames&&(s===this.options.commentPropName||s===this.options.cdataPropName||s===this.options.textNodeName||s===this.options.attributesGroupName))throw new Error(`Invalid tag name: ${s}`);e&&n&&e.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher,!1));let C=e;C&&this.options.unpairedTags.indexOf(C.tagname)!==-1&&(e=this.tagsNodeStack.pop(),this.matcher.pop());let c=!1;a.length>0&&a.lastIndexOf("/")===a.length-1&&(c=!0,s[s.length-1]==="/"?(s=s.substr(0,s.length-1),a=s):a=a.substr(0,a.length-1),E=s!==a);let l=null,h={},u;u=MQ(o),s!==t.tagname&&this.matcher.push(s,{},u),s!==a&&E&&(l=this.buildAttributesMap(a,this.matcher,s),l&&(h=UQ(l,this.options))),s!==t.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode(this.stopNodeExpressions,this.matcher));let p=r;if(this.isCurrentNodeStopNode){let y="";if(c)r=g.closeIndex;else if(this.options.unpairedTags.indexOf(s)!==-1)r=g.closeIndex;else{let Q=this.readStopNodeData(A,o,B+1);if(!Q)throw new Error(`Unexpected end of ${o}`);r=Q.i,y=Q.tagContent}let f=new QA(s);l&&(f[":@"]=l),f.add(this.options.textNodeName,y),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(e,f,this.readonlyMatcher,p)}else{if(c){({tagName:s,tagExp:a}=Lr(this.options.transformTagName,s,a,this.options));let y=new QA(s);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else if(this.options.unpairedTags.indexOf(s)!==-1){let y=new QA(s);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),this.matcher.pop(),this.isCurrentNodeStopNode=!1,r=g.closeIndex;continue}else{let y=new QA(s);if(this.tagsNodeStack.length>this.options.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(e),l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),e=y}n="",r=B}}else n+=A[r];return t.child};function PQ(A,t,e,n){this.options.captureMetaData||(n=void 0);let i=this.options.jPath?e.toString():e,r=this.options.updateTag(t.tagname,i,t[":@"]);r===!1||(typeof r=="string"&&(t.tagname=r),A.addChild(t,n))}function OQ(A,t,e){let n=this.options.processEntities;if(!n||!n.enabled)return A;if(n.allowedTags){let i=this.options.jPath?e.toString():e;if(!(Array.isArray(n.allowedTags)?n.allowedTags.includes(t):n.allowedTags(t,i)))return A}if(n.tagFilter){let i=this.options.jPath?e.toString():e;if(!n.tagFilter(t,i))return A}for(let i of Object.keys(this.docTypeEntities)){let r=this.docTypeEntities[i],I=A.match(r.regx);if(I){if(this.entityExpansionCount+=I.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions)throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);let g=A.length;if(A=A.replace(r.regx,r.val),n.maxExpandedLength&&(this.currentExpandedLength+=A.length-g,this.currentExpandedLength>n.maxExpandedLength))throw new Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${n.maxExpandedLength}`)}}if(A.indexOf("&")===-1)return A;for(let i of Object.keys(this.lastEntities)){let r=this.lastEntities[i],I=A.match(r.regex);if(I&&(this.entityExpansionCount+=I.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}if(A.indexOf("&")===-1)return A;if(this.options.htmlEntities)for(let i of Object.keys(this.htmlEntities)){let r=this.htmlEntities[i],I=A.match(r.regex);if(I&&(this.entityExpansionCount+=I.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}return A=A.replace(this.ampEntity.regex,this.ampEntity.val),A}function JQ(A,t,e,n){return A&&(n===void 0&&(n=t.child.length===0),A=this.parseTextData(A,t.tagname,e,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,n),A!==void 0&&A!==""&&t.add(this.options.textNodeName,A),A=""),A}function qQ(A,t){if(!A||A.length===0)return!1;for(let e=0;e<A.length;e++)if(t.matches(A[e]))return!0;return!1}function VQ(A,t,e=">"){let n,i="";for(let r=t;r<A.length;r++){let I=A[r];if(n)I===n&&(n="");else if(I==='"'||I==="'")n=I;else if(I===e[0])if(e[1]){if(A[r+1]===e[1])return{data:i,index:r}}else return{data:i,index:r};else I==="	"&&(I=" ");i+=I}}function se(A,t,e,n){let i=A.indexOf(t,e);if(i===-1)throw new Error(n);return i+t.length-1}function br(A,t,e,n=">"){let i=VQ(A,t+1,n);if(!i)return;let r=i.data,I=i.index,g=r.search(/\s/),s=r,o=!0;g!==-1&&(s=r.substring(0,g),r=r.substring(g+1).trimStart());let a=s;if(e){let E=s.indexOf(":");E!==-1&&(s=s.substr(E+1),o=s!==i.data.substr(E+1))}return{tagName:s,tagExp:r,closeIndex:I,attrExpPresent:o,rawTagName:a}}function ZQ(A,t,e){let n=e,i=1;for(;e<A.length;e++)if(A[e]==="<")if(A[e+1]==="/"){let r=se(A,">",e,`${t} is not closed`);if(A.substring(e+2,r).trim()===t&&(i--,i===0))return{tagContent:A.substring(n,e),i:r};e=r}else if(A[e+1]==="?")e=se(A,"?>",e+1,"StopNode is not closed.");else if(A.substr(e+1,3)==="!--")e=se(A,"-->",e+3,"StopNode is not closed.");else if(A.substr(e+1,2)==="![")e=se(A,"]]>",e,"StopNode is not closed.")-2;else{let r=br(A,e,">");r&&((r&&r.tagName)===t&&r.tagExp[r.tagExp.length-1]!=="/"&&i++,e=r.closeIndex)}}function Fr(A,t,e){if(t&&typeof A=="string"){let n=A.trim();return n==="true"?!0:n==="false"?!1:Gr(A,e)}else return Os(A)?A:""}function $s(A,t,e){let n=Number.parseInt(A,t);return n>=0&&n<=1114111?String.fromCodePoint(n):e+A+";"}function Lr(A,t,e,n){if(A){let i=A(t);e===t&&(e=i),t=i}return t=AI(t,n),{tagName:t,tagExp:e}}function AI(A,t){if(Jn.includes(A))throw new Error(`[SECURITY] Invalid name: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);return yt.includes(A)?t.onDangerousProperty(A):A}var Ur=QA.getMetaDataSymbol();function WQ(A,t){if(!A||typeof A!="object")return{};if(!t)return A;let e={};for(let n in A)if(n.startsWith(t)){let i=n.substring(t.length);e[i]=A[n]}else e[n]=A[n];return e}function Mr(A,t,e,n){return eI(A,t,e,n)}function eI(A,t,e,n){let i,r={};for(let I=0;I<A.length;I++){let g=A[I],s=jQ(g);if(s!==void 0&&s!==t.textNodeName){let o=WQ(g[":@"]||{},t.attributeNamePrefix);e.push(s,o)}if(s===t.textNodeName)i===void 0?i=g[s]:i+=""+g[s];else{if(s===void 0)continue;if(g[s]){let o=eI(g[s],t,e,n),a=XQ(o,t);if(g[":@"]?zQ(o,g[":@"],n,t):Object.keys(o).length===1&&o[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?o=o[t.textNodeName]:Object.keys(o).length===0&&(t.alwaysCreateTextNode?o[t.textNodeName]="":o=""),g[Ur]!==void 0&&typeof o=="object"&&o!==null&&(o[Ur]=g[Ur]),r[s]!==void 0&&Object.prototype.hasOwnProperty.call(r,s))Array.isArray(r[s])||(r[s]=[r[s]]),r[s].push(o);else{let E=t.jPath?n.toString():n;t.isArray(s,E,a)?r[s]=[o]:r[s]=o}s!==void 0&&s!==t.textNodeName&&e.pop()}}}return typeof i=="string"?i.length>0&&(r[t.textNodeName]=i):i!==void 0&&(r[t.textNodeName]=i),r}function jQ(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e];if(n!==":@")return n}}function zQ(A,t,e,n){if(t){let i=Object.keys(t),r=i.length;for(let I=0;I<r;I++){let g=i[I],s=g.startsWith(n.attributeNamePrefix)?g.substring(n.attributeNamePrefix.length):g,o=n.jPath?e.toString()+"."+s:e;n.isArray(g,o,!0,!0)?A[g]=[t[g]]:A[g]=t[g]}}}function XQ(A,t){let{textNodeName:e}=t,n=Object.keys(A).length;return!!(n===0||n===1&&(A[e]||typeof A[e]=="boolean"||A[e]===0))}var Ue=class{constructor(t){this.externalEntities={},this.options=Xs(t)}parse(t,e){if(typeof t!="string"&&t.toString)t=t.toString();else if(typeof t!="string")throw new Error("XML data is accepted in String or Bytes[] form.");if(e){e===!0&&(e={});let r=Ws(t,e);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}let n=new Nt(this.options);n.addExternalEntities(this.externalEntities);let i=n.parseXml(t);return this.options.preserveOrder||i===void 0?i:Mr(i,this.options,n.matcher,n.readonlyMatcher)}addEntity(t,e){if(e.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(e==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}static getMetaDataSymbol(){return QA.getMetaDataSymbol()}};function Vn(A,t){let e=0,n=0,i=0;for(let r=1;r<A.length;r+=1){let I=A[r-1],g=A[r];i+=vn(I,g);let s=t(I),o=t(g);if(s==null||o==null)continue;let a=o-s;a>0?e+=a:n+=Math.abs(a)}return{distanceMeters:i,totalAscent:e,totalDescent:n}}var $Q=new Ue({attributeNamePrefix:"",ignoreAttributes:!1,parseTagValue:!1,removeNSPrefix:!0,trimValues:!0});function Rt(A){return A===void 0?[]:Array.isArray(A)?A:[A]}function tI(A){let t=Number(A.lat),e=Number(A.lon);if(!Number.isFinite(t)||!Number.isFinite(e))return null;let n=A.ele!==void 0?Number(A.ele):null;return{lat:t,lon:e,ele:Number.isFinite(n)?n:null}}function Ah(A){let t=Rt(A.trk),e=Rt(A.rte).flatMap(i=>Rt(i.rtept).map(tI).filter(Boolean)),n=t.flatMap(i=>Rt(i.trkseg).flatMap(r=>Rt(r.trkpt).map(tI).filter(Boolean)));return n.length>0?n:e}function eh(A){return/^https?:\/\//i.test(A)}async function Tr(A){if(eh(A)){let e=await fetch(A);if(!e.ok)throw new Error(`Failed to fetch GPX file: ${e.status} ${e.statusText}`);return await e.text()}let t=A.endsWith(".gpx")?[A]:[A,`${A}.gpx`];for(let e of t)if(await X.fileExists(e)){let n=await X.readFile(e);return new TextDecoder().decode(n)}throw new Error(`GPX file not found in space: ${A}`)}function _r(A,t){let e=$Q.parse(t),n=e.gpx??e,i=Ah(n);if(i.length<2)throw new Error("The GPX file did not contain a usable track or route.");let r=Us(i),I=Vn(i,g=>g.ele);return{sourceUrl:A,points:i,bounds:r,distanceMeters:I.distanceMeters,totalAscent:I.totalAscent,totalDescent:I.totalDescent}}async function nI(A){let t=await Tr(A);return _r(A,t)}var th="https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png";var nh="OpenHikingMap",iI={low:{label:"low",initialZoom:11,maxTileRequests:9,maxTextureDimension:1024},standard:{label:"standard",initialZoom:12,maxTileRequests:16,maxTextureDimension:2048},high:{label:"high",initialZoom:13,maxTileRequests:36,maxTextureDimension:4096},ultra:{label:"ultra",initialZoom:14,maxTileRequests:64,maxTextureDimension:8192}},mA=256,rI=6,oI=16384,ih=12e5,Yr=512,rh=6,oh=.82;function gh(A){return iI[A]??iI.standard}function CI(){return typeof document<"u"&&typeof document.createElement=="function"}function ah(){return typeof Image<"u"}function sh(){return typeof OffscreenCanvas<"u"&&typeof createImageBitmap=="function"||CI()}function Ih(A){return Math.max(-85.05112878,Math.min(85.05112878,A))}function gI(A,t){return(A+180)/360*2**t}function aI(A,t){let e=Ih(A)*Math.PI/180;return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t}function sI(A,t){let e=gI(A.minLon,t),n=gI(A.maxLon,t),i=aI(A.maxLat,t),r=aI(A.minLat,t),I=Math.floor(e),g=Math.max(I,Math.ceil(n)-1),s=Math.floor(i),o=Math.max(s,Math.ceil(r)-1),a=g-I+1,E=o-s+1;return{zoom:t,west:e,east:n,north:i,south:r,tileXStart:I,tileXEnd:g,tileYStart:s,tileYEnd:o,tileColumns:a,tileRows:E,tileCount:a*E}}function Ch(A,t){return A.tileCount<=t.maxTileRequests&&A.tileColumns*mA<=oI&&A.tileRows*mA<=oI}function Bh(A,t){let e=sI(A,rI);for(let n=t.initialZoom;n>=rI;n-=1){let i=sI(A,n);if(Ch(i,t))return i;e=i}return e}function vr(A,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(A,t);if(CI()){let e=document.createElement("canvas");return e.width=A,e.height=t,e}throw new Error("Canvas raster support is unavailable in this runtime.")}function Hr(A){return A.getContext("2d")}function Eh(A){return new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load raster tile ${A}`)),n.src=A})}async function ch(A){let t=await fetch(A);if(!t.ok)throw new Error(`Failed to load raster tile ${A}: HTTP ${t.status}`);return new Uint8Array(await t.arrayBuffer())}async function II(A){let t=new Blob([A],{type:"image/png"});if(typeof createImageBitmap=="function")return createImageBitmap(t);if(ah()&&typeof URL<"u"&&typeof URL.createObjectURL=="function"){let e=URL.createObjectURL(t);try{return await Eh(e)}finally{URL.revokeObjectURL(e)}}throw new Error("Tile image decoding is unavailable in this runtime.")}async function lh(A,t,e,n){let i=Fs(A,t,e),r=await Gs(i);if(r)return II(r);let I=await ch(n),g=ys(i,`z${A}-x${t}-y${e}`);return await xs(g.key,g.path,I),II(I)}async function Qh(A,t,e){if("toDataURL"in A&&typeof A.toDataURL=="function")return A.toDataURL(t,e);if("convertToBlob"in A&&typeof A.convertToBlob=="function"){let n=await A.convertToBlob({type:t,quality:e}),i=new Uint8Array(await n.arrayBuffer());return XA(i,n.type||t)}throw new Error("Canvas export is unavailable in this runtime.")}function hh(A,t,e){let n=vr(t,e),i=Hr(n);if(!i)throw new Error("Canvas resize context is unavailable in this runtime.");return i.drawImage(A,0,0,t,e),n}async function fh(A){let t=A;for(;;){let e=await Qh(t,"image/webp",oh);if(e.length<=ih||Math.max(t.width,t.height)<=Yr)return{dataUrl:e,mimeType:si(e),width:t.width,height:t.height};let n=Math.max(Yr,Math.round(t.width*.75)),i=Math.max(Yr,Math.round(t.height*.75));if(n===t.width&&i===t.height)return{dataUrl:e,mimeType:si(e),width:t.width,height:t.height};t=hh(t,n,i)}}function dh(A){let t=2**A.zoom,e=[];for(let n=A.tileYStart;n<=A.tileYEnd;n+=1)for(let i=A.tileXStart;i<=A.tileXEnd;i+=1){let r=(i%t+t)%t,I=Math.max(0,Math.min(t-1,n));e.push({tileX:i,tileY:n,wrappedX:r,clampedY:I,url:th.replace("{z}",String(A.zoom)).replace("{x}",String(r)).replace("{y}",String(I))})}return e}async function uh(A,t){let e=new Array(A.length),n=0;async function i(){for(;n<A.length;){let I=n;n+=1,e[I]=await A[I]()}}let r=Math.max(1,Math.min(t,A.length));return await Promise.all(Array.from({length:r},()=>i())),e}async function ph(A){let t=dh(A).map(e=>async()=>({image:await lh(A.zoom,e.wrappedX,e.clampedY,e.url),tileX:e.tileX,tileY:e.tileY}));return uh(t,rh)}function wh(A,t){let e=vr(A.tileColumns*mA,A.tileRows*mA),n=Hr(e);if(!n)return null;for(let i of t)n.drawImage(i.image,(i.tileX-A.tileXStart)*mA,(i.tileY-A.tileYStart)*mA,mA,mA);return e}function yh(A,t,e){let n=(t.west-t.tileXStart)*mA,i=(t.north-t.tileYStart)*mA,r=Math.max(1,(t.east-t.west)*mA),I=Math.max(1,(t.south-t.north)*mA),g=Math.min(1,e.maxTextureDimension/Math.max(r,I)),s=vr(Math.max(1,Math.round(r*g)),Math.max(1,Math.round(I*g))),o=Hr(s);return o?(o.drawImage(A,n,i,r,I,0,0,s.width,s.height),s):null}async function BI(A,t){if(!sh())return null;let e=gh(t),n=Bh(A,e),i=await ph(n),r=wh(n,i);if(!r)return null;let I=yh(r,n,e);if(!I)return null;let g=await fh(I);return{kind:"hiking-map",width:g.width,height:g.height,mimeType:g.mimeType,sourceVersion:nh,resolution:e.label,dataUrl:g.dataUrl}}var mh="https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map",Dh="ESA WorldCover 2021 v200",FA=3,Zn=0,Sh=new Map([[10,[0,100,0]],[20,[255,187,34]],[30,[255,255,76]],[40,[240,150,255]],[50,[250,0,0]],[60,[180,180,180]],[70,[240,240,240]],[80,[0,100,200]],[90,[0,150,160]],[95,[0,207,117]],[100,[250,230,160]]]);function Nh(){return typeof ImageData<"u"&&(typeof OffscreenCanvas<"u"||typeof document<"u"&&typeof document.createElement=="function")}function Rh(A,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(A,t);if(typeof document<"u"&&typeof document.createElement=="function"){let e=document.createElement("canvas");return e.width=A,e.height=t,e}throw new Error("Canvas raster support is unavailable in this runtime.")}function kh(A){let t=A.getContext("2d");return t&&(t.imageSmoothingEnabled=!1),t}async function Gh(A,t){if("toDataURL"in A&&typeof A.toDataURL=="function")return A.toDataURL(t);if("convertToBlob"in A&&typeof A.convertToBlob=="function"){let e=await A.convertToBlob({type:t});return XA(new Uint8Array(await e.arrayBuffer()),e.type||t)}throw new Error("Canvas export is unavailable in this runtime.")}function EI(A,t){return Math.abs(A).toString().padStart(t,"0")}function xh(A){return`${A>=0?"N":"S"}${EI(A,2)}`}function Lh(A){return`${A>=0?"E":"W"}${EI(A,3)}`}function bh(A){return`${xh(A.southLat)}${Lh(A.westLon)}`}function Fh(A){return`${mh}/ESA_WorldCover_10m_2021_v200_${bh(A)}_Map.tif`}function Uh(A){let t=Math.floor(A.minLat/FA)*FA,e=Math.floor((A.maxLat-Number.EPSILON)/FA)*FA,n=Math.floor(A.minLon/FA)*FA,i=Math.floor((A.maxLon-Number.EPSILON)/FA)*FA,r=[];for(let I=t;I<=e;I+=FA)for(let g=n;g<=i;g+=FA)r.push({southLat:I,westLon:g});return r.length===0&&r.push({southLat:t,westLon:n}),r}function Mh(A,t,e,n){let i=eA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=eA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),I=eA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=eA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),I+1,n);return[i,I,r,g]}function Th(A,t,e,n){let i=eA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=eA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),I=eA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=eA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),I+1,n);return[i,I,r,g]}function _h(A,t,e){let n=new Uint8ClampedArray(t*e*4);for(let i=0;i<A.length;i+=1){let[r,I,g]=Sh.get(A[i])??[0,0,0],s=i*4;n[s]=r,n[s+1]=I,n[s+2]=g,n[s+3]=A[i]===Zn?0:255}return n}function Yh(A,t){return eA(Math.round(A*t/4096),6,24)}function vh(A,t,e,n,i,r){let I=n%t,g=Math.floor(n/t),s=[I>0?n-1:-1,I+1<t?n+1:-1,g>0?n-t:-1,g+1<e?n+t:-1];for(let o of s){if(o<0)continue;let a=A[o];a===i||a===Zn||r.set(a,(r.get(a)??0)+1)}}function Hh(A){let t=null,e=-1;for(let[n,i]of A.entries())(i>e||i===e&&t!=null&&n<t)&&(t=n,e=i);return t}function Kh(A,t,e){let n=A.slice(),i=Yh(t,e),r=new Uint8Array(n.length),I=new Int32Array(n.length);for(let g=0;g<6;g+=1){r.fill(0);let s=!1;for(let o=0;o<n.length;o+=1){let a=n[o];if(r[o]||a===Zn)continue;let E=0,B=0;I[B++]=o,r[o]=1;let C=[],c=new Map;for(;E<B;){let h=I[E++];C.push(h),vh(n,t,e,h,a,c);let u=h%t,p=Math.floor(h/t),y=[u>0?h-1:-1,u+1<t?h+1:-1,p>0?h-t:-1,p+1<e?h+t:-1];for(let f of y)f<0||r[f]||n[f]!==a||(r[f]=1,I[B++]=f)}if(C.length>i)continue;let l=Hh(c);if(l!=null){for(let h of C)n[h]=l;s=!0}}if(!s)break}return n}async function cI(A,t,e,n="raw"){if(!Nh()||t<=0||e<=0||!Number.isFinite(t)||!Number.isFinite(e))return null;let i=new Uint8Array(t*e),r=Uh(A);for(let o of r){let E=await(await Bs(Fh(o),{allowFullFile:!1})).getImage(),[B,C,c,l]=E.getBoundingBox(),h={minLat:C,maxLat:l,minLon:B,maxLon:c},u=wt(h,A);if(!u)continue;let[p,y,f,Q]=Th(A,u,t,e),w=f-p,d=Q-y;if(w<=0||d<=0)continue;let S=Mh(h,u,E.getWidth(),E.getHeight()),R=await E.readRasters({window:S,width:w,height:d,interleave:!0,fillValue:Zn,resampleMethod:"nearest"});for(let D=0;D<d;D+=1){let k=D*w,L=(y+D)*t+p;i.set(R.subarray(k,k+w),L)}}let I=n==="no-islands"?Kh(i,t,e):i,g=Rh(t,e),s=kh(g);return s?(s.putImageData(new ImageData(_h(I,t,e),t,e),0,0),{kind:"worldcover",width:t,height:e,mimeType:"image/png",dataUrl:await Gh(g,"image/png"),sourceVersion:Dh}):null}var Jh=50,hI=180;function qh(A,t){let e=Nr(A),n=Rr(e.lat),i=eA(t*.08,900,5e3),r=i/n.lat,I=i/n.lon,g=Math.max(Kn(A)*.18,r),s=Math.max(Hn(A)*.18,I),o=hI/n.lat,a=hI/n.lon;return Ms(A,g+o,s+a)}function Vh(A,t){let e=Math.max(1,Hn(A)*t.lon),n=Math.max(1,Kn(A)*t.lat),i=e/n;return i>=1?{width:160,height:eA(Math.round(160/i),72,160)}:{width:eA(Math.round(160*i),72,160),height:160}}function Zh(A,t,e){return{lat:Le(A.lat,t.lat,e),lon:Le(A.lon,t.lon,e),ele:A.ele!=null&&t.ele!=null?Le(A.ele,t.ele,e):A.ele??t.ele??null}}function Wh(A,t){if(A.length<=2)return A;let e=[A[0]],n=t,i=0;for(let g=1;g<A.length;g+=1){let s=A[g-1],o=A[g],a=vn(s,o);if(!(a<=0)){for(;i+a>=n;){let E=(n-i)/a;e.push(Zh(s,o,E)),n+=t}i+=a}}let r=A[A.length-1],I=e[e.length-1];return(I.lat!==r.lat||I.lon!==r.lon)&&e.push(r),e}function jh(A,t,e,n,i){let r=null;return A.map(I=>{let s=kr(t,I.lat,I.lon)??r??e;r=s;let o=Ts(I,n,i);return{x:o.x,z:o.z,y:s,lat:I.lat,lon:I.lon,elevation:s}})}async function fI(A,t={}){let e=A.sourceUrl,n=qh(A.bounds,A.distanceMeters),i=Nr(n),r=Rr(i.lat),I=Vh(n,r),g=Hs(n);if(g.length>16)throw new Error(`The track spans ${g.length} Copernicus tiles. This preview caps builds at ${16} tiles.`);let s={lon:I.width/Math.max(Hn(n),.01),lat:I.height/Math.max(Kn(n),.01)},a=(await Promise.allSettled(g.map(Q=>Ks(Q,n,s)))).filter(Q=>Q.status==="fulfilled").map(Q=>Q.value).filter(Boolean);if(a.length===0)throw new Error("No Copernicus DEM tiles were available for the GPX area.");let E=g.length-a.length,B=E>0?`Terrain preview may be incomplete because ${E} of ${g.length} Copernicus DEM tiles failed to load.`:void 0,C=[],c=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let Q=0;Q<I.height;Q+=1){let w=I.height===1?0:Q/(I.height-1),d=Le(n.maxLat,n.minLat,w);for(let S=0;S<I.width;S+=1){let R=I.width===1?0:S/(I.width-1),D=Le(n.minLon,n.maxLon,R),k=kr(a,d,D)??0;C.push(k),c=Math.min(c,k),l=Math.max(l,k)}}let h=Wh(A.points,Jh),u=jh(h,a,c,i,r),p=Vn(u,Q=>Q.elevation),y=e.split("/").filter(Boolean).pop()??"GPX track",f;if(t.style==="worldcover")try{f=await cI(n,I.width,I.height,t.worldcoverProcessing??"raw")??void 0}catch(Q){console.warn("Unable to bake ESA WorldCover imagery into .cimal pack.",Q),f=void 0}else if(t.style==="hiking-map")try{f=await BI(n,t.hikingMapResolution??PA)??void 0}catch(Q){console.warn("Unable to bake OpenHikingMap imagery into .cimal pack.",Q),f=void 0}return{title:y,sourceUrl:e,warning:B,bounds:n,center:i,metersPerDegree:r,grid:{width:I.width,height:I.height,elevations:C,minElevation:c,maxElevation:l},track:u,bakedImagery:f,stats:{distanceKm:p.distanceMeters/1e3||A.distanceMeters/1e3,totalAscent:p.totalAscent||A.totalAscent,totalDescent:p.totalDescent||A.totalDescent,pointCount:A.points.length,tileCount:a.length}}}async function dI(A,t={}){let e=await nI(A);return fI(e,t)}async function uI(A,t,e={}){return fI(_r(A,t),e)}function zh(A){return`
\`\`\`${Ao}
${A}
\`\`\`
`}function Xh(A){let t=A;if(/^https?:\/\//i.test(A))try{t=new URL(A).pathname}catch{t=A}return`Library/Cimal/${(t.split(/[\\/]/).filter(Boolean).pop()?.replace(/\.gpx$/i,"")?.replace(/\.[^.]+$/u,"")||"track").replaceAll(/[^A-Za-z0-9._-]+/g,"-")}.cimal`}async function Kr(){let A=await aA.prompt("GPX URL or space path");if(!A)return;let t=ri(A),e=await aA.prompt("Output .cimal path",Xh(t));if(!e)return;let n=Tt(e),i=await aA.prompt("Viewer style for this pack","hiking-map");if(!i)return;let r=oi(i),I=PA;if(r==="hiking-map"){let a=await aA.prompt("Baked hiking-map resolution",PA);if(!a)return;I=gi(a)}let g="raw";if(r==="worldcover"){let a=await aA.prompt("WorldCover processing","raw");if(!a)return;g=ai(a)}let s=await dI(t,{style:r,hikingMapResolution:I,worldcoverProcessing:g}),o=vt(s);await X.writeFile(n,o),await aA.flashNotification(`Built ${n}.`)}async function Pr(){let A=await aA.prompt("Cimal pack path");if(!A)return;let t=Tt(A);await aA.insertAtCursor(zh(t),!0),await _e.refreshAll(),await aA.flashNotification("Inserted cimal widget.")}async function Or(){await _e.refreshAll(),await aA.flashNotification("Refreshed cimal widgets.")}var pI=!1;async function Jr(){if(!pI){pI=!0;try{await aA.reloadConfigAndCommands()}catch{}}}var wI=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>__CIMAL_VIEWER_TITLE__</title>
    <style>
:root {
	color-scheme: dark;
	--bg-1: #0d151b;
	--bg-2: #1d2c38;
	--card: rgba(11, 18, 23, 0.78);
	--card-border: rgba(255, 255, 255, 0.12);
	--accent: #ff7b32;
	--accent-soft: #ffd08f;
	--text: #eaf2f5;
	--muted: #9db0bb;
	--warning-bg: rgba(54, 34, 16, 0.82);
	--warning-border: rgba(255, 208, 143, 0.26);
	--warning-text: #ffd08f;
	--shadow-color: rgba(0, 0, 0, 0.34);
	--atmosphere-glow: rgba(255, 123, 50, 0.16);
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
	color: var(--text);
	background:
		radial-gradient(circle at top, var(--atmosphere-glow), transparent 32%),
		linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 70%);
	overflow: hidden;
}

#app {
	position: relative;
	width: 100vw;
	height: 100vh;
}

#scene {
	width: 100%;
	height: 100%;
	display: block;
	outline: none;
}

.warning,
.attribution,
.error-card {
	position: absolute;
	backdrop-filter: blur(16px);
	background: var(--card);
	border: 1px solid var(--card-border);
	box-shadow: 0 18px 50px var(--shadow-color);
}

.warning {
	top: 16px;
	right: 16px;
	max-width: min(360px, calc(100vw - 32px));
	padding: 12px 14px;
	border-radius: 16px;
	border-color: var(--warning-border);
	background: var(--warning-bg);
	color: var(--warning-text);
	font-size: 0.82rem;
	line-height: 1.45;
}

.attribution {
	right: 16px;
	bottom: 16px;
	width: 2rem;
	height: 2rem;
	padding: 10px 12px;
	border-radius: 14px;
	font-size: 0.5rem;
	line-height: 1.4;
	color: var(--muted);
	transition:
		width 0.3s ease,
		max-width 0.3s ease;
	overflow: hidden;
}

.attribution:hover {
	width: auto;
	height: auto;
	max-width: min(420px, calc(100vw - 32px));
}

.attribution a {
	color: var(--accent-soft);
}

.attribution p {
	margin: 0;
}

.error-shell {
	min-height: 100vh;
	display: grid;
	place-items: center;
	padding: 24px;
}

.error-card {
	width: min(560px, 100%);
	padding: 22px 24px;
	border-radius: 22px;
}

.error-card h1 {
	margin: 0 0 10px;
	font-size: 1.2rem;
}

.error-card p {
	margin: 0 0 10px;
	color: var(--muted);
	line-height: 1.5;
}

code {
	font-family: "IBM Plex Mono", Consolas, monospace;
}

@media (max-width: 720px) {
	.warning {
		left: 12px;
		right: 12px;
		top: auto;
		bottom: 72px;
		max-width: none;
	}

	.attribution {
		left: 12px;
		right: 12px;
		bottom: 12px;
		max-width: none;
	}
}
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script id="payload" type="application/json">__CIMAL_VIEWER_PAYLOAD__<\/script>
    <script id="viewer-config" type="application/json">__CIMAL_VIEWER_CONFIG__<\/script>
    <script type="module">
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/viewerConfig.ts
var DEFAULT_VIEWER_STYLE = "classic";
var DEFAULT_HIKING_MAP_RESOLUTION = "standard";
var DEFAULT_TERRAIN_SHAPE = "smooth";
var DEFAULT_WORLDCOVER_PROCESSING = "raw";
var DEFAULT_VIEWER_CONFIG = {
  style: DEFAULT_VIEWER_STYLE,
  hikingMapResolution: DEFAULT_HIKING_MAP_RESOLUTION,
  terrainShape: DEFAULT_TERRAIN_SHAPE,
  worldcoverProcessing: DEFAULT_WORLDCOVER_PROCESSING
};

// src/viewer/dom.ts
function escapeText(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function requireElement(id, elementType) {
  const element = document.getElementById(id);
  if (!(element instanceof elementType)) {
    throw new Error(\`Missing required element #\${id}.\`);
  }
  return element;
}

// src/constants.ts
var COPERNICUS_S3_ROOT = "s3://copernicus-dem-30m/";
var THREE_JS_VERSION = "0.180";
var TERRAIN_CACHE_VERSION = 2;
var TERRAIN_CACHE_ROOT = "Library/.cache/cimal";
var TERRAIN_CACHE_INDEX_PATH = \`\${TERRAIN_CACHE_ROOT}/v\${TERRAIN_CACHE_VERSION}/index.json\`;
var TERRAIN_CACHE_MAX_BYTES = 250 * 1024 * 1024;
var HIKING_MAP_TILE_CACHE_VERSION = 1;
var HIKING_MAP_TILE_CACHE_ROOT = \`\${TERRAIN_CACHE_ROOT}/hiking-map\`;
var HIKING_MAP_TILE_CACHE_INDEX_PATH = \`\${HIKING_MAP_TILE_CACHE_ROOT}/v\${HIKING_MAP_TILE_CACHE_VERSION}/index.json\`;
var HIKING_MAP_TILE_CACHE_MAX_BYTES = 150 * 1024 * 1024;
var CIMAL_PACK_CACHE_VERSION = 4;
var CIMAL_PACK_CACHE_ROOT = \`\${TERRAIN_CACHE_ROOT}/packs\`;
var CIMAL_PACK_CACHE_INDEX_PATH = \`\${CIMAL_PACK_CACHE_ROOT}/v\${CIMAL_PACK_CACHE_VERSION}/index.json\`;
var CIMAL_PACK_CACHE_MAX_BYTES = 100 * 1024 * 1024;

// node_modules/.pnpm/@silverbulletmd+silverbullet@2.5.3_react@19.2.4/node_modules/@silverbulletmd/silverbullet/plug-api/syscall.ts
if (typeof globalThis.syscall === "undefined") {
  globalThis.syscall = () => {
    throw new Error("Not implemented here");
  };
}
function syscall(name, ...args) {
  return globalThis.syscall(name, ...args);
}

// node_modules/.pnpm/@silverbulletmd+silverbullet@2.5.3_react@19.2.4/node_modules/@silverbulletmd/silverbullet/plug-api/syscalls/space.ts
var space_exports = {};
__export(space_exports, {
  deleteDocument: () => deleteDocument,
  deleteFile: () => deleteFile,
  deletePage: () => deletePage,
  fileExists: () => fileExists,
  getDocumentMeta: () => getDocumentMeta,
  getFileMeta: () => getFileMeta,
  getPageMeta: () => getPageMeta,
  listDocuments: () => listDocuments,
  listFiles: () => listFiles,
  listPages: () => listPages,
  listPlugs: () => listPlugs,
  pageExists: () => pageExists,
  readDocument: () => readDocument,
  readFile: () => readFile,
  readFileWithMeta: () => readFileWithMeta,
  readPage: () => readPage,
  readPageWithMeta: () => readPageWithMeta,
  readRef: () => readRef,
  writeDocument: () => writeDocument,
  writeFile: () => writeFile,
  writePage: () => writePage
});
function listPages() {
  return syscall("space.listPages");
}
function getPageMeta(name) {
  return syscall("space.getPageMeta", name);
}
function pageExists(name) {
  return syscall("space.pageExists", name);
}
function readPage(name) {
  return syscall("space.readPage", name);
}
function readPageWithMeta(name) {
  return syscall("space.readPageWithMeta", name);
}
function writePage(name, text) {
  return syscall("space.writePage", name, text);
}
function deletePage(name) {
  return syscall("space.deletePage", name);
}
function listPlugs() {
  return syscall("space.listPlugs");
}
function listDocuments() {
  return syscall("space.listDocuments");
}
function getDocumentMeta(name) {
  return syscall("space.getDocumentMeta", name);
}
function readDocument(name) {
  return syscall("space.readDocument", name);
}
function writeDocument(name, data) {
  return syscall("space.writeDocument", name, data);
}
function deleteDocument(name) {
  return syscall("space.deleteDocument", name);
}
function listFiles() {
  return syscall("space.listFiles");
}
function readFile(name) {
  return syscall("space.readFile", name);
}
function readRef(ref) {
  return syscall("space.readRef", ref);
}
function readFileWithMeta(name) {
  return syscall("space.readFileWithMeta", name);
}
function getFileMeta(name) {
  return syscall("space.getFileMeta", name);
}
function writeFile(name, data) {
  return syscall("space.writeFile", name, data);
}
function deleteFile(name) {
  return syscall("space.deleteFile", name);
}
function fileExists(name) {
  return syscall("space.fileExists", name);
}

// node_modules/.pnpm/@silverbulletmd+silverbullet@2.5.3_react@19.2.4/node_modules/@silverbulletmd/silverbullet/plug-api/lib/crypto.ts
var fixedCounter = new Uint8Array(16);

// src/cache.ts
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var TILE_MAGIC = "TGPC";
var INDEX_WRITE_DEBOUNCE_MS = 1e3;
var memoryTileCache = /* @__PURE__ */ new Map();
var memoryHikingMapTileCache = /* @__PURE__ */ new Map();
var memoryPackCache = /* @__PURE__ */ new Map();
function isUnsupportedCacheVersionError(error) {
  return error instanceof Error && error.message.startsWith("Unsupported cache version ");
}
function createEmptyIndex(version) {
  return {
    version,
    entries: {}
  };
}
function encodeTile(tile) {
  const metadataBytes = encoder.encode(
    JSON.stringify({
      version: TERRAIN_CACHE_VERSION,
      bounds: tile.bounds,
      width: tile.width,
      height: tile.height,
      noDataValue: tile.noDataValue
    })
  );
  const valueBytes = new Uint8Array(tile.values.buffer.slice(0));
  const output = new Uint8Array(8 + metadataBytes.length + valueBytes.length);
  output.set(encoder.encode(TILE_MAGIC), 0);
  const view = new DataView(output.buffer);
  view.setUint16(4, TERRAIN_CACHE_VERSION, true);
  view.setUint16(6, metadataBytes.length, true);
  output.set(metadataBytes, 8);
  output.set(valueBytes, 8 + metadataBytes.length);
  return output;
}
function decodeTile(data) {
  if (data.length < 8) {
    throw new Error("Cache record too small.");
  }
  const magic = decoder.decode(data.slice(0, 4));
  if (magic !== TILE_MAGIC) {
    throw new Error("Invalid cache record magic.");
  }
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const version = view.getUint16(4, true);
  if (version !== TERRAIN_CACHE_VERSION) {
    throw new Error(\`Unsupported cache version \${version}.\`);
  }
  const metadataLength = view.getUint16(6, true);
  const metadataStart = 8;
  const metadataEnd = metadataStart + metadataLength;
  if (metadataEnd > data.length) {
    throw new Error("Invalid cache record metadata length.");
  }
  const metadata = JSON.parse(
    decoder.decode(data.slice(metadataStart, metadataEnd))
  );
  const valueBytes = data.slice(metadataEnd);
  if (valueBytes.byteLength % Float32Array.BYTES_PER_ELEMENT !== 0) {
    throw new Error("Invalid cached raster byte length.");
  }
  const values = new Float32Array(
    valueBytes.buffer.slice(
      valueBytes.byteOffset,
      valueBytes.byteOffset + valueBytes.byteLength
    )
  );
  if (values.length !== metadata.width * metadata.height) {
    throw new Error("Cached raster dimensions do not match metadata.");
  }
  return {
    bounds: metadata.bounds,
    width: metadata.width,
    height: metadata.height,
    values,
    noDataValue: metadata.noDataValue
  };
}
function totalCacheBytes(index) {
  return Object.values(index.entries).reduce(
    (sum, entry) => sum + entry.size,
    0
  );
}
function createCacheStore(config) {
  let memoryIndexCache = null;
  let pendingUsagePersist = false;
  let scheduledPersistTimer = null;
  async function writeIndex(index) {
    memoryIndexCache = index;
    await space_exports.writeFile(
      config.indexPath,
      encoder.encode(JSON.stringify(index))
    );
  }
  function cancelScheduledPersist() {
    if (scheduledPersistTimer != null) {
      clearTimeout(scheduledPersistTimer);
      scheduledPersistTimer = null;
    }
    pendingUsagePersist = false;
  }
  async function persistIndex(index) {
    cancelScheduledPersist();
    await writeIndex(index);
  }
  function scheduleIndexPersist(index) {
    memoryIndexCache = index;
    pendingUsagePersist = true;
    if (scheduledPersistTimer != null) {
      return;
    }
    scheduledPersistTimer = setTimeout(() => {
      scheduledPersistTimer = null;
      if (!pendingUsagePersist || !memoryIndexCache) {
        return;
      }
      pendingUsagePersist = false;
      void writeIndex(memoryIndexCache).catch((error) => {
        console.warn(
          "Unable to persist terrain cache index usage data.",
          error
        );
      });
    }, INDEX_WRITE_DEBOUNCE_MS);
  }
  async function resetIndex() {
    cancelScheduledPersist();
    if (await space_exports.fileExists(config.indexPath)) {
      await space_exports.deleteFile(config.indexPath);
    }
    memoryIndexCache = createEmptyIndex(config.version);
    return memoryIndexCache;
  }
  async function loadIndex() {
    if (memoryIndexCache) {
      return memoryIndexCache;
    }
    if (!await space_exports.fileExists(config.indexPath)) {
      memoryIndexCache = createEmptyIndex(config.version);
      return memoryIndexCache;
    }
    try {
      const data = await space_exports.readFile(config.indexPath);
      const parsed = JSON.parse(decoder.decode(data));
      if (parsed.version !== config.version || !parsed.entries) {
        return resetIndex();
      }
      memoryIndexCache = parsed;
      return memoryIndexCache;
    } catch {
      return resetIndex();
    }
  }
  async function deleteEntry(index, entry) {
    config.deleteMemoryEntry(entry.key);
    delete index.entries[entry.key];
    if (await space_exports.fileExists(entry.path)) {
      await space_exports.deleteFile(entry.path);
    }
  }
  async function enforceLimit(index) {
    let currentBytes = totalCacheBytes(index);
    if (currentBytes <= config.maxBytes) {
      return;
    }
    const entries = Object.values(index.entries).sort(
      (left, right) => left.lastUsed - right.lastUsed
    );
    for (const entry of entries) {
      await deleteEntry(index, entry);
      currentBytes -= entry.size;
      if (currentBytes <= config.maxBytes) {
        break;
      }
    }
  }
  return {
    getMemory(key) {
      return config.memoryCache.get(key);
    },
    loadIndex,
    async get(key) {
      if (config.memoryCache.has(key)) {
        return config.memoryCache.get(key) ?? null;
      }
      const index = await loadIndex();
      const entry = index.entries[key];
      if (!entry) {
        return null;
      }
      if (!await space_exports.fileExists(entry.path)) {
        delete index.entries[key];
        await persistIndex(index);
        return null;
      }
      try {
        const bytes = await space_exports.readFile(entry.path);
        const decoded = config.decode(bytes);
        config.memoryCache.set(key, decoded);
        entry.lastUsed = Date.now();
        scheduleIndexPersist(index);
        return decoded;
      } catch (error) {
        config.onDecodeError?.(key, error);
        await deleteEntry(index, entry);
        await persistIndex(index);
        return null;
      }
    },
    async put(key, path, value) {
      const index = await loadIndex();
      const encoded = config.encode(value);
      config.memoryCache.set(key, value);
      await space_exports.writeFile(path, encoded);
      index.entries[key] = {
        key,
        path,
        size: encoded.byteLength,
        lastUsed: Date.now()
      };
      await enforceLimit(index);
      await persistIndex(index);
    },
    async invalidate(key) {
      config.deleteMemoryEntry(key);
      const index = await loadIndex();
      const entry = index.entries[key];
      if (!entry) {
        return;
      }
      await deleteEntry(index, entry);
      await persistIndex(index);
    },
    async clear() {
      cancelScheduledPersist();
      const index = await loadIndex();
      const entries = Object.values(index.entries);
      for (const entry of entries) {
        if (await space_exports.fileExists(entry.path)) {
          await space_exports.deleteFile(entry.path);
        }
      }
      if (await space_exports.fileExists(config.indexPath)) {
        await space_exports.deleteFile(config.indexPath);
      }
      config.memoryCache.clear();
      memoryIndexCache = createEmptyIndex(config.version);
      return entries.length;
    }
  };
}
function decodeRawBytes(bytes) {
  return bytes;
}
function encodeRawBytes(bytes) {
  return bytes;
}
var tileCacheStore = createCacheStore({
  version: TERRAIN_CACHE_VERSION,
  indexPath: TERRAIN_CACHE_INDEX_PATH,
  maxBytes: TERRAIN_CACHE_MAX_BYTES,
  memoryCache: memoryTileCache,
  encode: encodeTile,
  decode: decodeTile,
  deleteMemoryEntry: (key) => memoryTileCache.delete(key),
  onDecodeError: (key, error) => {
    if (isUnsupportedCacheVersionError(error)) {
      console.warn(
        \`Discarding outdated cached terrain tile for \${key}: \${error instanceof Error ? error.message : "Unknown error"}\`
      );
    }
  }
});
var packCacheStore = createCacheStore({
  version: CIMAL_PACK_CACHE_VERSION,
  indexPath: CIMAL_PACK_CACHE_INDEX_PATH,
  maxBytes: CIMAL_PACK_CACHE_MAX_BYTES,
  memoryCache: memoryPackCache,
  encode: encodeRawBytes,
  decode: decodeRawBytes,
  deleteMemoryEntry: (key) => memoryPackCache.delete(key)
});
var hikingMapTileCacheStore = createCacheStore({
  version: HIKING_MAP_TILE_CACHE_VERSION,
  indexPath: HIKING_MAP_TILE_CACHE_INDEX_PATH,
  maxBytes: HIKING_MAP_TILE_CACHE_MAX_BYTES,
  memoryCache: memoryHikingMapTileCache,
  encode: encodeRawBytes,
  decode: decodeRawBytes,
  deleteMemoryEntry: (key) => memoryHikingMapTileCache.delete(key)
});

// src/hikingMap.ts
var OPEN_HIKING_ATTRIBUTION = 'Imagery: <a href="https://tile.openmaps.fr/" target="_blank" rel="noreferrer">OpenHikingMap</a> with <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> data.';
var OPEN_HIKING_FALLBACK = "Baked OpenHikingMap imagery is unavailable for this pack; showing classic relief tint instead.";

// src/worldcover.ts
var WORLDCOVER_ATTRIBUTION = "Imagery: \\xA9 ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021) processed by ESA WorldCover consortium.";
var WORLDCOVER_FALLBACK = "Baked ESA WorldCover imagery is unavailable for this pack.";

// src/viewer/controls.ts
function bindKeyboardControls({
  THREE,
  camera,
  controls,
  canvas,
  sceneSpan,
  minCameraDistance,
  maxCameraDistance
}) {
  const pressedKeys = /* @__PURE__ */ new Set();
  const keyboardVector = new THREE.Vector3();
  const orbitOffset = new THREE.Vector3();
  const orbitForward = new THREE.Vector3();
  const orbitRight = new THREE.Vector3();
  const orbitSpherical = new THREE.Spherical();
  const handlePointerDown = () => canvas.focus();
  function isKeyboardAction(code) {
    return code === "ArrowLeft" || code === "ArrowRight" || code === "ArrowUp" || code === "ArrowDown" || code === "KeyW" || code === "KeyA" || code === "KeyS" || code === "KeyD" || code === "KeyR" || code === "KeyF";
  }
  function clearPressedKeys() {
    pressedKeys.clear();
  }
  function handleKeyboardDown(event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }
    if (!isKeyboardAction(event.code)) {
      return;
    }
    pressedKeys.add(event.code);
    event.preventDefault();
  }
  function handleKeyboardUp(event) {
    pressedKeys.delete(event.code);
    if (isKeyboardAction(event.code)) {
      event.preventDefault();
    }
  }
  canvas.addEventListener("pointerdown", handlePointerDown);
  canvas.addEventListener("keydown", handleKeyboardDown);
  canvas.addEventListener("keyup", handleKeyboardUp);
  canvas.addEventListener("blur", clearPressedKeys);
  window.addEventListener("blur", clearPressedKeys);
  return {
    applyKeyboardMotion(deltaSeconds) {
      if (!pressedKeys.size || document.activeElement !== canvas) {
        return;
      }
      const clampedDelta = Math.min(deltaSeconds, 1 / 20);
      if (clampedDelta <= 0) {
        return;
      }
      const orbitSpeed = 1.65;
      const panSpeed = Math.max(90, sceneSpan * 0.55);
      const zoomSpeed = Math.max(140, sceneSpan * 0.95);
      let changed = false;
      if (pressedKeys.has("ArrowLeft") || pressedKeys.has("ArrowRight") || pressedKeys.has("ArrowUp") || pressedKeys.has("ArrowDown")) {
        orbitOffset.subVectors(camera.position, controls.target);
        orbitSpherical.setFromVector3(orbitOffset);
        if (pressedKeys.has("ArrowLeft")) {
          orbitSpherical.theta += orbitSpeed * clampedDelta;
          changed = true;
        }
        if (pressedKeys.has("ArrowRight")) {
          orbitSpherical.theta -= orbitSpeed * clampedDelta;
          changed = true;
        }
        if (pressedKeys.has("ArrowUp")) {
          orbitSpherical.phi = Math.max(
            controls.minPolarAngle + 0.01,
            orbitSpherical.phi - orbitSpeed * 0.72 * clampedDelta
          );
          changed = true;
        }
        if (pressedKeys.has("ArrowDown")) {
          orbitSpherical.phi = Math.min(
            controls.maxPolarAngle - 0.01,
            orbitSpherical.phi + orbitSpeed * 0.72 * clampedDelta
          );
          changed = true;
        }
        orbitSpherical.makeSafe();
        orbitOffset.setFromSpherical(orbitSpherical);
        camera.position.copy(controls.target).add(orbitOffset);
      }
      if (pressedKeys.has("KeyW") || pressedKeys.has("KeyA") || pressedKeys.has("KeyS") || pressedKeys.has("KeyD")) {
        camera.getWorldDirection(orbitForward);
        orbitForward.y = 0;
        if (orbitForward.lengthSq() < 1e-6) {
          orbitForward.set(0, 0, -1);
        } else {
          orbitForward.normalize();
        }
        orbitRight.crossVectors(orbitForward, camera.up);
        if (orbitRight.lengthSq() < 1e-6) {
          orbitRight.set(-1, 0, 0);
        } else {
          orbitRight.normalize();
        }
        keyboardVector.set(0, 0, 0);
        if (pressedKeys.has("KeyW")) {
          keyboardVector.add(orbitForward);
        }
        if (pressedKeys.has("KeyS")) {
          keyboardVector.sub(orbitForward);
        }
        if (pressedKeys.has("KeyA")) {
          keyboardVector.sub(orbitRight);
        }
        if (pressedKeys.has("KeyD")) {
          keyboardVector.add(orbitRight);
        }
        if (keyboardVector.lengthSq() > 0) {
          keyboardVector.normalize().multiplyScalar(panSpeed * clampedDelta);
          camera.position.add(keyboardVector);
          controls.target.add(keyboardVector);
          changed = true;
        }
      }
      if (pressedKeys.has("KeyR") || pressedKeys.has("KeyF")) {
        orbitOffset.subVectors(camera.position, controls.target);
        const currentDistance = orbitOffset.length();
        const zoomDirection = (pressedKeys.has("KeyF") ? 1 : 0) - (pressedKeys.has("KeyR") ? 1 : 0);
        const nextDistance = THREE.MathUtils.clamp(
          currentDistance + zoomDirection * zoomSpeed * clampedDelta,
          minCameraDistance,
          maxCameraDistance
        );
        if (Math.abs(nextDistance - currentDistance) > 1e-3) {
          orbitOffset.setLength(nextDistance);
          camera.position.copy(controls.target).add(orbitOffset);
          changed = true;
        }
      }
      if (changed) {
        camera.updateMatrixWorld();
      }
    },
    destroy() {
      clearPressedKeys();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("keydown", handleKeyboardDown);
      canvas.removeEventListener("keyup", handleKeyboardUp);
      canvas.removeEventListener("blur", clearPressedKeys);
      window.removeEventListener("blur", clearPressedKeys);
    }
  };
}

// src/viewer/layout.ts
function renderViewerShell(app2, options) {
  app2.innerHTML = \`
    <canvas id="scene"></canvas>
    \${options.warning ? \`<aside class="warning">\${escapeText(options.warning)}</aside>\` : ""}
    <footer class="attribution">
      <p id="style-attribution"></p>
      <p>Terrain: <a href="https://copernicus-dem-30m.s3.amazonaws.com/readme.html" target="_blank" rel="noreferrer">\${COPERNICUS_S3_ROOT}</a>.</p>
      <p>Click the map to focus it. Drag to orbit, wheel to zoom, right-click to pan. Keyboard: arrows orbit, WASD pan, R/F zoom.</p>
    </footer>
  \`;
  const canvas = requireElement("scene", HTMLCanvasElement);
  const styleAttribution = requireElement(
    "style-attribution",
    HTMLParagraphElement
  );
  canvas.tabIndex = 0;
  canvas.setAttribute("aria-label", "3D terrain map");
  return { canvas, styleAttribution };
}

// src/viewer/lifecycle.ts
function bindViewportResize(canvas, renderer, camera) {
  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();
  return () => {
    window.removeEventListener("resize", resize);
  };
}
function startViewerLoop(THREE, options) {
  const {
    activeTheme: activeTheme2,
    camera,
    controls,
    keyboardControls,
    renderer,
    ring,
    ringMaterial,
    scene,
    waterMaterial
  } = options;
  let animationFrameId = 0;
  let disposed = false;
  let lastFrameTime = performance.now();
  function animate(frameTime) {
    if (disposed) {
      return;
    }
    animationFrameId = requestAnimationFrame(animate);
    const deltaSeconds = Math.max(0, (frameTime - lastFrameTime) / 1e3);
    lastFrameTime = frameTime;
    keyboardControls.applyKeyboardMotion(deltaSeconds);
    const pulse = 0.72 + 0.28 * (0.5 + 0.5 * Math.sin(frameTime * 1e-3 * activeTheme2.markers.ringPulseSpeed));
    ring.rotation.z += 25e-4;
    ringMaterial.opacity = THREE.MathUtils.clamp(
      activeTheme2.markers.ringOpacity * pulse,
      0.08,
      0.95
    );
    ringMaterial.emissiveIntensity = 0.28 + pulse * 0.5;
    if (waterMaterial) {
      waterMaterial.emissiveIntensity = activeTheme2.water.specularStrength * 0.08 * pulse;
    }
    controls.update();
    renderer.render(scene, camera);
  }
  animationFrameId = requestAnimationFrame(animate);
  return () => {
    disposed = true;
    cancelAnimationFrame(animationFrameId);
  };
}

// src/viewer/colors.ts
function resolveColorStops(THREE, stops) {
  return stops.map((stop) => ({
    t: stop.t,
    color: new THREE.Color(stop.color)
  }));
}
function sampleGradient(THREE, stops, normalized) {
  if (normalized <= stops[0].t) {
    return stops[0].color.clone();
  }
  for (let index = 1; index < stops.length; index += 1) {
    const previous = stops[index - 1];
    const current = stops[index];
    if (normalized <= current.t) {
      const localT = (normalized - previous.t) / Math.max(1e-4, current.t - previous.t);
      return previous.color.clone().lerp(current.color, THREE.MathUtils.smoothstep(localT, 0, 1));
    }
  }
  return stops[stops.length - 1].color.clone();
}

// src/viewer/geometry.ts
function buildTrackRibbon(THREE, points, width, heightOffset, minElevation) {
  if (points.length < 2) {
    return null;
  }
  const halfWidth = width / 2;
  const up = new THREE.Vector3(0, 1, 0);
  const centerPoints = points.map(
    (point) => new THREE.Vector3(
      point.x,
      point.y - minElevation + heightOffset,
      point.z
    )
  );
  const positions = new Float32Array(centerPoints.length * 2 * 3);
  const indices = [];
  const tangent = new THREE.Vector3();
  const side = new THREE.Vector3();
  const lateral = new THREE.Vector3();
  for (let index = 0; index < centerPoints.length; index += 1) {
    const previous = centerPoints[Math.max(0, index - 1)];
    const next = centerPoints[Math.min(centerPoints.length - 1, index + 1)];
    tangent.subVectors(next, previous);
    tangent.y = 0;
    if (tangent.lengthSq() < 1e-6) {
      tangent.set(0, 0, -1);
    } else {
      tangent.normalize();
    }
    side.crossVectors(up, tangent);
    if (side.lengthSq() < 1e-6) {
      side.set(1, 0, 0);
    } else {
      side.normalize();
    }
    const center = centerPoints[index];
    lateral.copy(side).multiplyScalar(halfWidth);
    const left = center.clone().add(lateral);
    const right = center.clone().sub(lateral);
    const baseOffset = index * 6;
    positions[baseOffset] = left.x;
    positions[baseOffset + 1] = left.y;
    positions[baseOffset + 2] = left.z;
    positions[baseOffset + 3] = right.x;
    positions[baseOffset + 4] = right.y;
    positions[baseOffset + 5] = right.z;
    if (index < centerPoints.length - 1) {
      const baseIndex = index * 2;
      indices.push(baseIndex, baseIndex + 1, baseIndex + 2);
      indices.push(baseIndex + 2, baseIndex + 1, baseIndex + 3);
    }
  }
  const ribbonGeometry = new THREE.BufferGeometry();
  ribbonGeometry.setIndex(indices);
  ribbonGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  ribbonGeometry.computeVertexNormals();
  return ribbonGeometry;
}
function buildTerrainSideGeometry(THREE, topPositions, width, height, bottomY) {
  const vertices = [];
  function pushQuad(a, b, c, d) {
    vertices.push(
      a.x,
      a.y,
      a.z,
      b.x,
      b.y,
      b.z,
      c.x,
      c.y,
      c.z,
      c.x,
      c.y,
      c.z,
      b.x,
      b.y,
      b.z,
      d.x,
      d.y,
      d.z
    );
  }
  function addStrip(points) {
    for (let index = 0; index < points.length - 1; index += 1) {
      const start = points[index];
      const end = points[index + 1];
      const bottomStart = new THREE.Vector3(start.x, bottomY, start.z);
      const bottomEnd = new THREE.Vector3(end.x, bottomY, end.z);
      pushQuad(start, bottomStart, end, bottomEnd);
    }
  }
  const topEdge = [];
  const bottomEdge = [];
  const leftEdge = [];
  const rightEdge = [];
  for (let column = 0; column < width; column += 1) {
    const topIndex = column * 3;
    const bottomIndex = ((height - 1) * width + column) * 3;
    topEdge.push(
      new THREE.Vector3(
        topPositions[topIndex],
        topPositions[topIndex + 1],
        topPositions[topIndex + 2]
      )
    );
    bottomEdge.push(
      new THREE.Vector3(
        topPositions[bottomIndex],
        topPositions[bottomIndex + 1],
        topPositions[bottomIndex + 2]
      )
    );
  }
  for (let row = 0; row < height; row += 1) {
    const leftIndex = row * width * 3;
    const rightIndex = (row * width + (width - 1)) * 3;
    leftEdge.push(
      new THREE.Vector3(
        topPositions[leftIndex],
        topPositions[leftIndex + 1],
        topPositions[leftIndex + 2]
      )
    );
    rightEdge.push(
      new THREE.Vector3(
        topPositions[rightIndex],
        topPositions[rightIndex + 1],
        topPositions[rightIndex + 2]
      )
    );
  }
  addStrip(topEdge);
  addStrip([...rightEdge].reverse());
  addStrip([...bottomEdge].reverse());
  addStrip(leftEdge);
  const sideGeometry = new THREE.BufferGeometry();
  sideGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  sideGeometry.computeVertexNormals();
  return sideGeometry;
}

// src/viewer/water.ts
var WATER_NEIGHBOR_TOLERANCE = 0.8;
var WATER_COMPONENT_RANGE_MAX = 1.2;
var WATER_MIN_COMPONENT_CELLS = 36;
var WATER_MIN_COMPONENT_RATIO = 0.015;
function detectWaterMask(width, height, elevations, useWaterTint) {
  const cellCount = width * height;
  const waterMask = new Uint8Array(cellCount);
  if (!useWaterTint || cellCount === 0) {
    return waterMask;
  }
  const visited = new Uint8Array(cellCount);
  const minComponentSize = Math.max(
    WATER_MIN_COMPONENT_CELLS,
    Math.ceil(cellCount * WATER_MIN_COMPONENT_RATIO)
  );
  function maybeVisitNeighbor(currentIndex, neighborIndex, queue, component, componentState) {
    if (visited[neighborIndex]) {
      return;
    }
    const currentElevation = elevations[currentIndex];
    const neighborElevation = elevations[neighborIndex];
    if (Math.abs(neighborElevation - currentElevation) > WATER_NEIGHBOR_TOLERANCE) {
      return;
    }
    const nextMinElevation = Math.min(
      componentState.minElevation,
      neighborElevation
    );
    const nextMaxElevation = Math.max(
      componentState.maxElevation,
      neighborElevation
    );
    if (nextMaxElevation - nextMinElevation > WATER_COMPONENT_RANGE_MAX) {
      return;
    }
    visited[neighborIndex] = 1;
    queue.push(neighborIndex);
    component.push(neighborIndex);
    componentState.minElevation = nextMinElevation;
    componentState.maxElevation = nextMaxElevation;
  }
  for (let startIndex = 0; startIndex < cellCount; startIndex += 1) {
    if (visited[startIndex]) {
      continue;
    }
    visited[startIndex] = 1;
    const component = [startIndex];
    const queue = [startIndex];
    const componentState = {
      minElevation: elevations[startIndex],
      maxElevation: elevations[startIndex]
    };
    while (queue.length > 0) {
      const currentIndex = queue.pop();
      if (currentIndex == null) {
        continue;
      }
      const row = Math.floor(currentIndex / width);
      const column = currentIndex % width;
      if (column > 0) {
        maybeVisitNeighbor(
          currentIndex,
          currentIndex - 1,
          queue,
          component,
          componentState
        );
      }
      if (column < width - 1) {
        maybeVisitNeighbor(
          currentIndex,
          currentIndex + 1,
          queue,
          component,
          componentState
        );
      }
      if (row > 0) {
        maybeVisitNeighbor(
          currentIndex,
          currentIndex - width,
          queue,
          component,
          componentState
        );
      }
      if (row < height - 1) {
        maybeVisitNeighbor(
          currentIndex,
          currentIndex + width,
          queue,
          component,
          componentState
        );
      }
    }
    if (component.length >= minComponentSize && componentState.maxElevation - componentState.minElevation <= WATER_COMPONENT_RANGE_MAX) {
      for (const index of component) {
        waterMask[index] = 1;
      }
    }
  }
  return waterMask;
}

// src/viewer/terrainLayer.ts
function computeShoreStrength(THREE, column, row, width, height, waterMask, shoreWidth) {
  if (waterMask[row * width + column] !== 1 || shoreWidth <= 0) {
    return 0;
  }
  let closest = Number.POSITIVE_INFINITY;
  for (let rowOffset = -shoreWidth; rowOffset <= shoreWidth; rowOffset += 1) {
    for (let columnOffset = -shoreWidth; columnOffset <= shoreWidth; columnOffset += 1) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (nextRow < 0 || nextColumn < 0 || nextRow >= height || nextColumn >= width) {
        continue;
      }
      if (waterMask[nextRow * width + nextColumn] === 0) {
        closest = Math.min(
          closest,
          Math.max(Math.abs(rowOffset), Math.abs(columnOffset))
        );
      }
    }
  }
  if (!Number.isFinite(closest)) {
    return 0;
  }
  return THREE.MathUtils.clamp(
    1 - (closest - 1) / Math.max(shoreWidth, 1),
    0,
    1
  );
}
function createTerrainAppearanceSampler(THREE, activeTheme2) {
  const terrainStops = resolveColorStops(
    THREE,
    activeTheme2.terrain.elevationStops
  );
  const slopeLow = new THREE.Color(activeTheme2.terrain.slopeTint.low);
  const slopeHigh = new THREE.Color(activeTheme2.terrain.slopeTint.high);
  const aspectCool = new THREE.Color(activeTheme2.terrain.aspectTint.cool);
  const aspectWarm = new THREE.Color(activeTheme2.terrain.aspectTint.warm);
  const warmAspectDirection = new THREE.Vector2(-0.78, 0.62).normalize();
  const coolAspectDirection = warmAspectDirection.clone().negate();
  return (normalized, normalY, normalX, normalZ) => {
    const baseColor = sampleGradient(THREE, terrainStops, normalized ** 0.92);
    const steepness = THREE.MathUtils.clamp(1 - normalY, 0, 1);
    const slopeMix = steepness ** activeTheme2.terrain.slopeTint.curve * activeTheme2.terrain.slopeTint.strength;
    const slopeColor = slopeLow.clone().lerp(slopeHigh, steepness);
    baseColor.lerp(slopeColor, THREE.MathUtils.clamp(slopeMix, 0, 0.8));
    const horizontalNormal = new THREE.Vector2(normalX, normalZ);
    let reliefOrientation = normalized;
    if (horizontalNormal.lengthSq() > 1e-6) {
      horizontalNormal.normalize();
      const warmMix = Math.max(0, horizontalNormal.dot(warmAspectDirection)) * activeTheme2.terrain.aspectTint.strength * (0.25 + steepness * 0.75);
      const coolMix = Math.max(0, horizontalNormal.dot(coolAspectDirection)) * activeTheme2.terrain.aspectTint.strength * (0.25 + steepness * 0.75);
      baseColor.lerp(aspectWarm, warmMix);
      baseColor.lerp(aspectCool, coolMix);
      reliefOrientation = normalized * 0.68 + THREE.MathUtils.clamp(1 - steepness * 0.85, 0, 1) * 0.32;
    }
    const reliefValue = THREE.MathUtils.lerp(
      activeTheme2.terrain.reliefShading.shadow,
      activeTheme2.terrain.reliefShading.highlight,
      reliefOrientation ** activeTheme2.terrain.reliefShading.curve
    );
    const reliefStrength = activeTheme2.terrain.reliefShading.strength;
    baseColor.multiplyScalar(
      THREE.MathUtils.lerp(
        1,
        reliefValue,
        THREE.MathUtils.clamp(reliefStrength, 0, 1)
      )
    );
    return {
      color: baseColor,
      reliefShade: THREE.MathUtils.clamp(reliefValue, 0.64, 1.18)
    };
  };
}
function createTerrainLayer(THREE, payload2, activeTheme2, options) {
  const { grid } = payload2;
  const { spanX, spanZ, sceneSpan, elevationRange, terrainShape } = options;
  const appearanceForNormal = createTerrainAppearanceSampler(
    THREE,
    activeTheme2
  );
  const waterStops = resolveColorStops(THREE, activeTheme2.water.surfaceStops);
  const shoreTint = activeTheme2.water.shoreTint ? new THREE.Color(activeTheme2.water.shoreTint) : null;
  const geometry = new THREE.BufferGeometry();
  const vertexCount = grid.width * grid.height;
  const positions = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices = [];
  const waterMask = detectWaterMask(
    grid.width,
    grid.height,
    grid.elevations,
    activeTheme2.useWaterTint
  );
  const shoreStrengths = new Float32Array(vertexCount);
  let positionPointer = 0;
  let uvPointer = 0;
  for (let row = 0; row < grid.height; row += 1) {
    const rowRatio = grid.height === 1 ? 0.5 : row / (grid.height - 1);
    const z = (rowRatio - 0.5) * spanZ;
    for (let column = 0; column < grid.width; column += 1) {
      const columnRatio = grid.width === 1 ? 0.5 : column / (grid.width - 1);
      const x = (columnRatio - 0.5) * spanX;
      const elevation = grid.elevations[row * grid.width + column];
      const y = elevation - grid.minElevation;
      positions[positionPointer] = x;
      positions[positionPointer + 1] = y;
      positions[positionPointer + 2] = z;
      uvs[uvPointer] = columnRatio;
      uvs[uvPointer + 1] = 1 - rowRatio;
      shoreStrengths[row * grid.width + column] = computeShoreStrength(
        THREE,
        column,
        row,
        grid.width,
        grid.height,
        waterMask,
        activeTheme2.water.shoreWidth
      );
      positionPointer += 3;
      uvPointer += 2;
    }
  }
  for (let row = 0; row < grid.height - 1; row += 1) {
    for (let column = 0; column < grid.width - 1; column += 1) {
      const topLeft = row * grid.width + column;
      const topRight = topLeft + 1;
      const bottomLeft = topLeft + grid.width;
      const bottomRight = bottomLeft + 1;
      indices.push(topLeft, bottomLeft, topRight);
      indices.push(topRight, bottomLeft, bottomRight);
    }
  }
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  const topGeometry = terrainShape === "triangular" ? geometry.toNonIndexed() : geometry;
  topGeometry.computeVertexNormals();
  const topPositions = topGeometry.getAttribute(
    "position"
  );
  const topUvs = topGeometry.getAttribute("uv");
  const topNormals = topGeometry.getAttribute(
    "normal"
  );
  const topVertexCount = topPositions.count;
  const topTerrainColors = new Float32Array(topVertexCount * 3);
  const topImageryBlendColors = new Float32Array(topVertexCount * 3);
  for (let index = 0; index < topVertexCount; index += 1) {
    const colorPointer = index * 3;
    const u = topUvs.getX(index);
    const v = topUvs.getY(index);
    const column = THREE.MathUtils.clamp(
      Math.round(u * (grid.width - 1)),
      0,
      Math.max(0, grid.width - 1)
    );
    const row = THREE.MathUtils.clamp(
      Math.round((1 - v) * (grid.height - 1)),
      0,
      Math.max(0, grid.height - 1)
    );
    const elevation = grid.elevations[row * grid.width + column];
    const normalized = (elevation - grid.minElevation) / elevationRange;
    const appearance = appearanceForNormal(
      normalized,
      topNormals.getY(index),
      topNormals.getX(index),
      topNormals.getZ(index)
    );
    topTerrainColors[colorPointer] = appearance.color.r;
    topTerrainColors[colorPointer + 1] = appearance.color.g;
    topTerrainColors[colorPointer + 2] = appearance.color.b;
    topImageryBlendColors[colorPointer] = appearance.reliefShade;
    topImageryBlendColors[colorPointer + 1] = appearance.reliefShade;
    topImageryBlendColors[colorPointer + 2] = appearance.reliefShade;
  }
  const terrainColorAttribute = new THREE.BufferAttribute(topTerrainColors, 3);
  const hikingBlendAttribute = new THREE.BufferAttribute(
    topImageryBlendColors,
    3
  );
  topGeometry.setAttribute("color", terrainColorAttribute);
  const terrainMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    flatShading: terrainShape === "triangular",
    roughness: activeTheme2.terrain.roughness,
    metalness: activeTheme2.terrain.metalness
  });
  const terrain = new THREE.Mesh(topGeometry, terrainMaterial);
  const terrainDepth = Math.max(90, elevationRange * 0.42, sceneSpan * 0.08);
  const terrainBottomY = -terrainDepth;
  const sideGeometry = buildTerrainSideGeometry(
    THREE,
    positions,
    grid.width,
    grid.height,
    terrainBottomY
  );
  const sideMaterial = new THREE.MeshStandardMaterial({
    color: activeTheme2.terrain.sideColor,
    roughness: 0.98,
    metalness: 0.02,
    side: THREE.DoubleSide
  });
  const terrainSides = new THREE.Mesh(sideGeometry, sideMaterial);
  const bottomGeometry = new THREE.PlaneGeometry(spanX, spanZ);
  bottomGeometry.rotateX(-Math.PI / 2);
  const bottomMaterial = new THREE.MeshStandardMaterial({
    color: activeTheme2.terrain.bottomColor,
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide
  });
  const terrainBottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
  terrainBottom.position.y = terrainBottomY;
  let waterGeometry = null;
  let waterMaterial = null;
  let waterOverlay = null;
  if (activeTheme2.useWaterTint) {
    const waterPositions = [];
    const waterColors = [];
    const waterIndices = [];
    const overlayHeight = Math.max(1.25, sceneSpan * 8e-5);
    for (let row = 0; row < grid.height - 1; row += 1) {
      for (let column = 0; column < grid.width - 1; column += 1) {
        const topLeft = row * grid.width + column;
        const topRight = topLeft + 1;
        const bottomLeft = topLeft + grid.width;
        const bottomRight = bottomLeft + 1;
        const triangles = [
          [topLeft, bottomLeft, topRight],
          [topRight, bottomLeft, bottomRight]
        ];
        for (const triangle of triangles) {
          if (!triangle.every((vertex) => waterMask[vertex] === 1)) {
            continue;
          }
          const baseIndex = waterPositions.length / 3;
          for (const vertex of triangle) {
            const normalized = (grid.elevations[vertex] - grid.minElevation) / elevationRange;
            const waterColor = sampleGradient(THREE, waterStops, normalized);
            if (shoreTint) {
              waterColor.lerp(shoreTint, shoreStrengths[vertex] * 0.7);
            }
            waterPositions.push(
              positions[vertex * 3],
              positions[vertex * 3 + 1] + overlayHeight,
              positions[vertex * 3 + 2]
            );
            waterColors.push(waterColor.r, waterColor.g, waterColor.b);
          }
          waterIndices.push(baseIndex, baseIndex + 1, baseIndex + 2);
        }
      }
    }
    if (waterPositions.length > 0) {
      waterGeometry = new THREE.BufferGeometry();
      waterGeometry.setIndex(waterIndices);
      waterGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(waterPositions, 3)
      );
      waterGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(waterColors, 3)
      );
      waterGeometry.computeVertexNormals();
      waterMaterial = new THREE.MeshStandardMaterial({
        vertexColors: true,
        transparent: true,
        opacity: activeTheme2.water.opacity,
        roughness: THREE.MathUtils.clamp(
          1 - activeTheme2.water.specularStrength * 0.82,
          0.08,
          0.95
        ),
        metalness: THREE.MathUtils.clamp(
          activeTheme2.water.specularStrength * 0.38,
          0,
          0.45
        ),
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
      });
      waterOverlay = new THREE.Mesh(waterGeometry, waterMaterial);
    }
  }
  return {
    objects: [terrainSides, terrainBottom, terrain, waterOverlay].filter(
      Boolean
    ),
    waterMaterial,
    applyBakedTexture(texture) {
      topGeometry.setAttribute("color", hikingBlendAttribute);
      topGeometry.attributes.color.needsUpdate = true;
      terrainMaterial.map = texture;
      terrainMaterial.needsUpdate = true;
    },
    dispose() {
      waterGeometry?.dispose();
      waterMaterial?.dispose();
      geometry.dispose();
      if (topGeometry !== geometry) {
        topGeometry.dispose();
      }
      sideGeometry.dispose();
      bottomGeometry.dispose();
      terrainMaterial.dispose();
      sideMaterial.dispose();
      bottomMaterial.dispose();
    }
  };
}

// src/viewer/trackLayer.ts
function createTrackLayer(THREE, payload2, activeTheme2, options) {
  const { track, grid } = payload2;
  const { spanX, spanZ, sceneSpan, elevationRange } = options;
  const trackStops = activeTheme2.track.altitudeTintStops ? resolveColorStops(THREE, activeTheme2.track.altitudeTintStops) : null;
  const baseTrackColor = new THREE.Color(activeTheme2.track.baseColor);
  const objects = [];
  const trackRibbonWidth = THREE.MathUtils.clamp(sceneSpan * 0.012, 14, 60);
  const trackHeightOffset = THREE.MathUtils.clamp(sceneSpan * 35e-4, 12, 24);
  const trackGeometry = buildTrackRibbon(
    THREE,
    track,
    trackRibbonWidth,
    trackHeightOffset,
    grid.minElevation
  );
  let trackMaterial = null;
  if (trackGeometry) {
    const trackColorBuffer = new Float32Array(track.length * 2 * 3);
    for (let index = 0; index < track.length; index += 1) {
      const normalized = THREE.MathUtils.clamp(
        (track[index].y - grid.minElevation) / elevationRange,
        0,
        1
      );
      const trackColor = trackStops ? sampleGradient(THREE, trackStops, normalized) : baseTrackColor.clone();
      const pointerBase = index * 6;
      trackColorBuffer[pointerBase] = trackColor.r;
      trackColorBuffer[pointerBase + 1] = trackColor.g;
      trackColorBuffer[pointerBase + 2] = trackColor.b;
      trackColorBuffer[pointerBase + 3] = trackColor.r;
      trackColorBuffer[pointerBase + 4] = trackColor.g;
      trackColorBuffer[pointerBase + 5] = trackColor.b;
    }
    trackGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(trackColorBuffer, 3)
    );
    trackMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: activeTheme2.track.roughness,
      metalness: activeTheme2.track.metalness,
      emissive: activeTheme2.track.emissive,
      emissiveIntensity: activeTheme2.track.emissiveIntensity,
      side: THREE.DoubleSide
    });
    objects.push(new THREE.Mesh(trackGeometry, trackMaterial));
  }
  const markerGeometry = new THREE.SphereGeometry(
    Math.max(6, Math.min(spanX, spanZ) * 8e-3),
    18,
    18
  );
  const startMaterial = new THREE.MeshStandardMaterial({
    color: activeTheme2.markers.startColor,
    emissive: activeTheme2.markers.ringEmissive,
    emissiveIntensity: 0.1
  });
  const finishMaterial = new THREE.MeshStandardMaterial({
    color: activeTheme2.markers.finishColor,
    emissive: activeTheme2.markers.ringEmissive,
    emissiveIntensity: 0.12
  });
  const start = track[0];
  const end = track[track.length - 1];
  const startMarker = new THREE.Mesh(markerGeometry, startMaterial);
  startMarker.position.set(
    start.x,
    start.y - grid.minElevation + trackHeightOffset + 10,
    start.z
  );
  objects.push(startMarker);
  const endMarker = new THREE.Mesh(markerGeometry, finishMaterial);
  endMarker.position.set(
    end.x,
    end.y - grid.minElevation + trackHeightOffset + 10,
    end.z
  );
  objects.push(endMarker);
  const ringGeometry = new THREE.RingGeometry(
    Math.max(10, Math.min(spanX, spanZ) * 0.01),
    Math.max(16, Math.min(spanX, spanZ) * 0.016),
    48
  );
  const ringMaterial = new THREE.MeshStandardMaterial({
    color: activeTheme2.markers.ringColor,
    emissive: activeTheme2.markers.ringEmissive,
    emissiveIntensity: 0.45,
    transparent: true,
    opacity: activeTheme2.markers.ringOpacity,
    side: THREE.DoubleSide,
    roughness: 0.32,
    metalness: 0.12
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 2;
  objects.push(ring);
  return {
    objects,
    ring,
    ringMaterial,
    dispose() {
      trackGeometry?.dispose();
      trackMaterial?.dispose();
      markerGeometry.dispose();
      startMaterial.dispose();
      finishMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    }
  };
}

// src/viewer/render.ts
async function renderTerrainViewer(app2, payload2, activeTheme2, viewerConfig2) {
  const [THREE, { OrbitControls }] = await Promise.all([
    import(\`https://esm.sh/three@\${THREE_JS_VERSION}\`),
    import(\`https://esm.sh/three@\${THREE_JS_VERSION}/examples/jsm/controls/OrbitControls.js\`)
  ]);
  const { warning, bounds, metersPerDegree, grid } = payload2;
  const spanX = (bounds.maxLon - bounds.minLon) * metersPerDegree.lon;
  const spanZ = (bounds.maxLat - bounds.minLat) * metersPerDegree.lat;
  const sceneSpan = Math.max(spanX, spanZ);
  const elevationRange = Math.max(1, grid.maxElevation - grid.minElevation);
  const fogDensity = THREE.MathUtils.clamp(
    0.075 / Math.max(sceneSpan, 1),
    45e-6,
    14e-5
  );
  const { canvas, styleAttribution } = renderViewerShell(app2, { warning });
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(activeTheme2.fogColor, fogDensity);
  const camera = new THREE.PerspectiveCamera(52, 1, 1, 2e5);
  camera.position.set(spanX * 0.6, Math.max(spanX, spanZ) * 0.45, spanZ * 0.8);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.rotateSpeed = 0.9;
  controls.zoomSpeed = 1;
  controls.panSpeed = 0.9;
  controls.screenSpacePanning = false;
  controls.target.set(0, elevationRange * 0.18, 0);
  controls.keyPanSpeed = Math.max(20, Math.min(spanX, spanZ) * 0.03);
  const minCameraDistance = 80;
  const maxCameraDistance = Math.max(sceneSpan * 4, minCameraDistance * 6);
  controls.minDistance = minCameraDistance;
  controls.maxDistance = maxCameraDistance;
  const keyboardControls = bindKeyboardControls({
    THREE,
    camera,
    controls,
    canvas,
    sceneSpan,
    minCameraDistance,
    maxCameraDistance
  });
  scene.add(
    new THREE.HemisphereLight(
      activeTheme2.hemisphereSky,
      activeTheme2.hemisphereGround,
      activeTheme2.hemisphereIntensity
    )
  );
  const sun = new THREE.DirectionalLight(
    activeTheme2.sunColor,
    activeTheme2.sunIntensity
  );
  sun.position.set(-spanX * 0.5, Math.max(spanX, spanZ), spanZ * 0.4);
  scene.add(sun);
  const terrainLayer = createTerrainLayer(THREE, payload2, activeTheme2, {
    spanX,
    spanZ,
    sceneSpan,
    elevationRange,
    terrainShape: viewerConfig2.terrainShape
  });
  const trackLayer = createTrackLayer(THREE, payload2, activeTheme2, {
    spanX,
    spanZ,
    sceneSpan,
    elevationRange
  });
  scene.add(...terrainLayer.objects, ...trackLayer.objects);
  styleAttribution.textContent = activeTheme2.styleDescription;
  let loadedTexture = null;
  let disposed = false;
  if (activeTheme2.imageryKind) {
    if (payload2.bakedImagery?.kind === activeTheme2.imageryKind) {
      loadPackedTexture(THREE, renderer, payload2.bakedImagery).then((texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        loadedTexture?.dispose();
        loadedTexture = texture;
        terrainLayer.applyBakedTexture(texture);
        styleAttribution.innerHTML = buildImageryAttribution(
          payload2.bakedImagery
        );
      }).catch((error) => {
        console.warn(error);
        styleAttribution.textContent = fallbackImageryMessage(
          activeTheme2.imageryKind
        );
      });
    } else {
      styleAttribution.textContent = fallbackImageryMessage(
        activeTheme2.imageryKind
      );
    }
  }
  const cleanupResize = bindViewportResize(canvas, renderer, camera);
  const stopViewerLoop = startViewerLoop(THREE, {
    activeTheme: activeTheme2,
    camera,
    controls,
    keyboardControls,
    renderer,
    ring: trackLayer.ring,
    ringMaterial: trackLayer.ringMaterial,
    scene,
    waterMaterial: terrainLayer.waterMaterial
  });
  return () => {
    if (disposed) {
      return;
    }
    disposed = true;
    stopViewerLoop();
    cleanupResize();
    keyboardControls.destroy();
    controls.dispose();
    loadedTexture?.dispose();
    terrainLayer.dispose();
    trackLayer.dispose();
    scene.clear();
    renderer.dispose();
  };
}
function loadPackedTexture(THREE, renderer, imagery) {
  const loader = new THREE.TextureLoader();
  return loader.loadAsync(imagery.dataUrl).then((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    if (imagery.kind === "worldcover") {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.anisotropy = 1;
    } else {
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    }
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    return texture;
  });
}
function buildImageryAttribution(imagery) {
  if (imagery.kind === "worldcover") {
    return \`\${WORLDCOVER_ATTRIBUTION} <span>Baked \${escapeText(imagery.sourceVersion)} texture.</span>\`;
  }
  return \`\${OPEN_HIKING_ATTRIBUTION} <span>Baked \${escapeText(imagery.resolution ?? "standard")} texture.</span>\`;
}
function fallbackImageryMessage(kind) {
  return kind === "worldcover" ? WORLDCOVER_FALLBACK : OPEN_HIKING_FALLBACK;
}

// src/viewer/themes.ts
function createTheme(config) {
  return {
    ...config,
    cssVars: {
      ...config.cssVars,
      "--warning-bg": config.hud.warningBackground,
      "--warning-border": config.hud.warningBorder,
      "--warning-text": config.hud.warningText,
      "--shadow-color": config.hud.shadowColor,
      "--atmosphere-glow": config.hud.atmosphereGlow
    }
  };
}
function terrainDefaults(overrides) {
  const slopeTint = {
    low: 2176550,
    high: 15850688,
    strength: 0.18,
    curve: 1.25,
    ...overrides.slopeTint
  };
  const aspectTint = {
    cool: 7120856,
    warm: 15250282,
    strength: 0.08,
    ...overrides.aspectTint
  };
  const reliefShading = {
    shadow: 0.84,
    highlight: 1.02,
    strength: 0.45,
    curve: 0.9,
    ...overrides.reliefShading
  };
  return {
    elevationStops: [
      { t: 0, color: 3103288 },
      { t: 0.24, color: 6259016 },
      { t: 0.52, color: 11439450 },
      { t: 0.78, color: 7698818 },
      { t: 1, color: 15131353 }
    ],
    sideColor: 5524802,
    bottomColor: 4209201,
    roughness: 0.94,
    metalness: 0.04,
    ...overrides,
    slopeTint,
    aspectTint,
    reliefShading
  };
}
function waterDefaults(overrides) {
  return {
    surfaceStops: [
      { t: 0, color: 1989253 },
      { t: 1, color: 6142706 }
    ],
    specularStrength: 0.42,
    opacity: 0.62,
    shoreTint: 11462399,
    shoreWidth: 2,
    ...overrides
  };
}
function trackDefaults(overrides) {
  return {
    baseColor: 16743218,
    emissive: 4858380,
    emissiveIntensity: 0.35,
    roughness: 0.42,
    metalness: 0.05,
    ...overrides
  };
}
function markerDefaults(overrides) {
  return {
    startColor: 10479728,
    finishColor: 16765786,
    ringColor: 16777215,
    ringOpacity: 0.18,
    ringEmissive: 1184274,
    ringPulseSpeed: 1.2,
    ...overrides
  };
}
function hudDefaults(overrides) {
  return {
    warningBackground: "rgba(54, 34, 16, 0.82)",
    warningBorder: "rgba(255, 208, 143, 0.26)",
    warningText: "#ffd08f",
    shadowColor: "rgba(0, 0, 0, 0.34)",
    atmosphereGlow: "rgba(255, 123, 50, 0.16)",
    ...overrides
  };
}
var styleThemes = {
  classic: createTheme({
    cssVars: {
      "--bg-1": "#0d151b",
      "--bg-2": "#1d2c38",
      "--card": "rgba(11, 18, 23, 0.78)",
      "--card-border": "rgba(255, 255, 255, 0.12)",
      "--accent": "#ff7b32",
      "--accent-soft": "#ffd08f",
      "--text": "#eaf2f5",
      "--muted": "#9db0bb"
    },
    styleDescription: "Style: Classic relief tint.",
    defaultTerrainShape: "smooth",
    useWaterTint: true,
    fogColor: 1056809,
    hemisphereSky: 14349055,
    hemisphereGround: 1779499,
    hemisphereIntensity: 1.2,
    sunColor: 16773590,
    sunIntensity: 1.2,
    terrain: terrainDefaults({}),
    water: waterDefaults({}),
    track: trackDefaults({}),
    markers: markerDefaults({}),
    hud: hudDefaults({})
  }),
  "hiking-map": createTheme({
    cssVars: {
      "--bg-1": "#0f1718",
      "--bg-2": "#21353a",
      "--card": "rgba(12, 20, 20, 0.78)",
      "--card-border": "rgba(255, 255, 255, 0.12)",
      "--accent": "#f18f43",
      "--accent-soft": "#ffe2a7",
      "--text": "#eaf2f5",
      "--muted": "#a2b7b0"
    },
    styleDescription: "Imagery: baked OpenHikingMap texture.",
    imageryKind: "hiking-map",
    defaultTerrainShape: "smooth",
    useWaterTint: false,
    fogColor: 1123110,
    hemisphereSky: 14741750,
    hemisphereGround: 2240555,
    hemisphereIntensity: 1.25,
    sunColor: 16773842,
    sunIntensity: 1.25,
    terrain: terrainDefaults({
      aspectTint: {
        cool: 8168894,
        warm: 13608047,
        strength: 0.04
      },
      reliefShading: {
        shadow: 0.88,
        highlight: 1,
        strength: 0.32,
        curve: 0.95
      }
    }),
    water: waterDefaults({
      opacity: 0.55,
      shoreTint: void 0,
      shoreWidth: 0
    }),
    track: trackDefaults({}),
    markers: markerDefaults({}),
    hud: hudDefaults({
      atmosphereGlow: "rgba(241, 143, 67, 0.14)"
    })
  }),
  worldcover: createTheme({
    cssVars: {
      "--bg-1": "#11161c",
      "--bg-2": "#29333a",
      "--card": "rgba(15, 22, 22, 0.78)",
      "--card-border": "rgba(255, 255, 255, 0.14)",
      "--accent": "#ffdf6e",
      "--accent-soft": "#fff4bf",
      "--text": "#eff5f4",
      "--muted": "#aab8af"
    },
    styleDescription: "Imagery: baked ESA WorldCover texture.",
    imageryKind: "worldcover",
    defaultTerrainShape: "triangular",
    useWaterTint: false,
    fogColor: 1317659,
    hemisphereSky: 15135215,
    hemisphereGround: 2634280,
    hemisphereIntensity: 1.22,
    sunColor: 16774094,
    sunIntensity: 1.18,
    terrain: terrainDefaults({
      aspectTint: {
        cool: 6983585,
        warm: 12096603,
        strength: 0.02
      },
      reliefShading: {
        shadow: 0.92,
        highlight: 1,
        strength: 0.18,
        curve: 1
      }
    }),
    water: waterDefaults({
      opacity: 0.5,
      shoreTint: void 0,
      shoreWidth: 0
    }),
    track: trackDefaults({}),
    markers: markerDefaults({}),
    hud: hudDefaults({
      atmosphereGlow: "rgba(255, 223, 110, 0.14)"
    })
  }),
  vaporwave: createTheme({
    cssVars: {
      "--bg-1": "#120621",
      "--bg-2": "#471565",
      "--card": "rgba(23, 10, 41, 0.76)",
      "--card-border": "rgba(255, 255, 255, 0.18)",
      "--accent": "#ff5fd1",
      "--accent-soft": "#7efcff",
      "--text": "#f8edff",
      "--muted": "#d3a9ea"
    },
    styleDescription: "Style: Vaporwave flavour.",
    defaultTerrainShape: "triangular",
    useWaterTint: true,
    fogColor: 1772335,
    hemisphereSky: 9097215,
    hemisphereGround: 2426939,
    hemisphereIntensity: 1.35,
    sunColor: 16747992,
    sunIntensity: 1.45,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 1446207 },
        { t: 0.22, color: 4857722 },
        { t: 0.48, color: 16732120 },
        { t: 0.76, color: 16753259 },
        { t: 1, color: 8322303 }
      ],
      slopeTint: {
        low: 2232655,
        high: 16766969,
        strength: 0.28,
        curve: 1.05
      },
      aspectTint: {
        cool: 6879231,
        warm: 16741579,
        strength: 0.18
      },
      reliefShading: {
        shadow: 0.8,
        highlight: 1.08,
        strength: 0.58,
        curve: 0.82
      },
      sideColor: 3216975,
      bottomColor: 1640486,
      roughness: 0.86,
      metalness: 0.08
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 1604607 },
        { t: 1, color: 7534591 }
      ],
      specularStrength: 0.6,
      opacity: 0.56,
      shoreTint: 16742615
    }),
    track: trackDefaults({
      baseColor: 8322303,
      emissive: 3116287,
      emissiveIntensity: 0.55,
      roughness: 0.3,
      metalness: 0.1,
      altitudeTintStops: [
        { t: 0, color: 8322303 },
        { t: 0.55, color: 16736209 },
        { t: 1, color: 16769902 }
      ]
    }),
    markers: markerDefaults({
      startColor: 8322303,
      finishColor: 16769902,
      ringColor: 16736209,
      ringOpacity: 0.3,
      ringEmissive: 10366450,
      ringPulseSpeed: 1.8
    }),
    hud: hudDefaults({
      warningBackground: "rgba(52, 10, 57, 0.84)",
      warningBorder: "rgba(255, 95, 209, 0.32)",
      warningText: "#7efcff",
      atmosphereGlow: "rgba(255, 95, 209, 0.22)"
    })
  }),
  lava: createTheme({
    cssVars: {
      "--bg-1": "#1a0906",
      "--bg-2": "#4b160b",
      "--card": "rgba(33, 10, 6, 0.8)",
      "--card-border": "rgba(255, 173, 96, 0.18)",
      "--accent": "#ff5a1f",
      "--accent-soft": "#ffd166",
      "--text": "#fff0e6",
      "--muted": "#d6a48d"
    },
    styleDescription: "Style: Volcanic lava glow.",
    defaultTerrainShape: "triangular",
    useWaterTint: true,
    fogColor: 2296068,
    hemisphereSky: 16757611,
    hemisphereGround: 2755336,
    hemisphereIntensity: 1.25,
    sunColor: 16747586,
    sunIntensity: 1.55,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 2428170 },
        { t: 0.22, color: 5906191 },
        { t: 0.48, color: 10367252 },
        { t: 0.76, color: 15162138 },
        { t: 1, color: 16765562 }
      ],
      slopeTint: {
        low: 2624776,
        high: 16773296,
        strength: 0.38,
        curve: 0.95
      },
      aspectTint: {
        cool: 7283729,
        warm: 16751159,
        strength: 0.16
      },
      reliefShading: {
        shadow: 0.77,
        highlight: 1.12,
        strength: 0.72,
        curve: 0.76
      },
      sideColor: 3938322,
      bottomColor: 2428941,
      roughness: 0.92,
      metalness: 0.08
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 5904655 },
        { t: 1, color: 16739116 }
      ],
      specularStrength: 0.78,
      opacity: 0.72,
      shoreTint: 16765286,
      shoreWidth: 3
    }),
    track: trackDefaults({
      baseColor: 16765286,
      emissive: 1089e4,
      emissiveIntensity: 0.75,
      roughness: 0.3,
      metalness: 0.12,
      altitudeTintStops: [
        { t: 0, color: 16747586 },
        { t: 0.55, color: 16765286 },
        { t: 1, color: 16774064 }
      ]
    }),
    markers: markerDefaults({
      startColor: 16747586,
      finishColor: 16774064,
      ringColor: 16742959,
      ringOpacity: 0.28,
      ringEmissive: 16734751,
      ringPulseSpeed: 2.1
    }),
    hud: hudDefaults({
      warningBackground: "rgba(69, 20, 10, 0.86)",
      warningBorder: "rgba(255, 169, 82, 0.34)",
      warningText: "#ffd166",
      atmosphereGlow: "rgba(255, 90, 31, 0.26)"
    })
  }),
  "water-world": createTheme({
    cssVars: {
      "--bg-1": "#071722",
      "--bg-2": "#0f4361",
      "--card": "rgba(7, 24, 35, 0.78)",
      "--card-border": "rgba(163, 227, 255, 0.18)",
      "--accent": "#3fc3ff",
      "--accent-soft": "#b8fff5",
      "--text": "#ebfbff",
      "--muted": "#9fcfdb"
    },
    styleDescription: "Style: Oceanic blue world.",
    defaultTerrainShape: "smooth",
    useWaterTint: true,
    fogColor: 664114,
    hemisphereSky: 12054015,
    hemisphereGround: 865088,
    hemisphereIntensity: 1.35,
    sunColor: 15138808,
    sunIntensity: 1.3,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 932427 },
        { t: 0.24, color: 1467004 },
        { t: 0.52, color: 1935776 },
        { t: 0.78, color: 7325652 },
        { t: 1, color: 14745591 }
      ],
      slopeTint: {
        low: 1063754,
        high: 14876665,
        strength: 0.24,
        curve: 1.05
      },
      aspectTint: {
        cool: 6808319,
        warm: 6215876,
        strength: 0.14
      },
      reliefShading: {
        shadow: 0.82,
        highlight: 1.05,
        strength: 0.55,
        curve: 0.86
      },
      sideColor: 1130580,
      bottomColor: 665652,
      roughness: 0.9,
      metalness: 0.06
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 1006490 },
        { t: 0.45, color: 2994909 },
        { t: 1, color: 6808319 }
      ],
      specularStrength: 0.82,
      opacity: 0.74,
      shoreTint: 12124149,
      shoreWidth: 3
    }),
    track: trackDefaults({
      baseColor: 12124149,
      emissive: 2063269,
      emissiveIntensity: 0.45,
      roughness: 0.36,
      metalness: 0.08,
      altitudeTintStops: [
        { t: 0, color: 8322303 },
        { t: 1, color: 16777215 }
      ]
    }),
    markers: markerDefaults({
      startColor: 8322303,
      finishColor: 16777215,
      ringColor: 6808319,
      ringOpacity: 0.26,
      ringEmissive: 2994909,
      ringPulseSpeed: 1.5
    }),
    hud: hudDefaults({
      warningBackground: "rgba(10, 42, 56, 0.84)",
      warningBorder: "rgba(103, 226, 255, 0.34)",
      warningText: "#b8fff5",
      atmosphereGlow: "rgba(63, 195, 255, 0.2)"
    })
  }),
  dracula: createTheme({
    cssVars: {
      "--bg-1": "#1b1830",
      "--bg-2": "#33264d",
      "--card": "rgba(24, 20, 39, 0.8)",
      "--card-border": "rgba(255, 184, 108, 0.16)",
      "--accent": "#ff79c6",
      "--accent-soft": "#f1fa8c",
      "--text": "#f8f8f2",
      "--muted": "#bd93f9"
    },
    styleDescription: "Style: Dracula nightscape.",
    defaultTerrainShape: "triangular",
    useWaterTint: true,
    fogColor: 1511975,
    hemisphereSky: 12032511,
    hemisphereGround: 2365233,
    hemisphereIntensity: 1.3,
    sunColor: 16758892,
    sunIntensity: 1.35,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 1906224 },
        { t: 0.22, color: 4797550 },
        { t: 0.48, color: 8215486 },
        { t: 0.76, color: 16742854 },
        { t: 1, color: 16316658 }
      ],
      slopeTint: {
        low: 1643303,
        high: 16766121,
        strength: 0.26,
        curve: 1.18
      },
      aspectTint: {
        cool: 9169405,
        warm: 16758892,
        strength: 0.16
      },
      reliefShading: {
        shadow: 0.81,
        highlight: 1.08,
        strength: 0.52,
        curve: 0.88
      },
      sideColor: 3153984,
      bottomColor: 2037292,
      roughness: 0.9,
      metalness: 0.07
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 2383260 },
        { t: 1, color: 8118262 }
      ],
      specularStrength: 0.58,
      opacity: 0.6,
      shoreTint: 16742854
    }),
    track: trackDefaults({
      baseColor: 15858316,
      emissive: 7228581,
      emissiveIntensity: 0.42,
      roughness: 0.38,
      metalness: 0.08,
      altitudeTintStops: [
        { t: 0, color: 9169405 },
        { t: 0.6, color: 15858316 },
        { t: 1, color: 16758892 }
      ]
    }),
    markers: markerDefaults({
      startColor: 5307003,
      finishColor: 16758892,
      ringColor: 16742854,
      ringOpacity: 0.26,
      ringEmissive: 12424185,
      ringPulseSpeed: 1.7
    }),
    hud: hudDefaults({
      warningBackground: "rgba(40, 23, 61, 0.84)",
      warningBorder: "rgba(255, 184, 108, 0.28)",
      warningText: "#f1fa8c",
      atmosphereGlow: "rgba(255, 121, 198, 0.2)"
    })
  }),
  pastel: createTheme({
    cssVars: {
      "--bg-1": "#f7dfe8",
      "--bg-2": "#dff5ff",
      "--card": "rgba(255, 255, 255, 0.62)",
      "--card-border": "rgba(255, 255, 255, 0.55)",
      "--accent": "#ff8fab",
      "--accent-soft": "#7bdff2",
      "--text": "#5c4b63",
      "--muted": "#8a7b93"
    },
    styleDescription: "Style: Soft pastel atlas.",
    defaultTerrainShape: "smooth",
    useWaterTint: true,
    fogColor: 14281204,
    hemisphereSky: 16776191,
    hemisphereGround: 14282736,
    hemisphereIntensity: 1.2,
    sunColor: 16773560,
    sunIntensity: 1.2,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 12116178 },
        { t: 0.24, color: 16239312 },
        { t: 0.52, color: 13481179 },
        { t: 0.78, color: 10670847 },
        { t: 1, color: 16777212 }
      ],
      slopeTint: {
        low: 13953247,
        high: 16775151,
        strength: 0.1,
        curve: 1.45
      },
      aspectTint: {
        cool: 10670847,
        warm: 16763604,
        strength: 0.08
      },
      reliefShading: {
        shadow: 0.9,
        highlight: 1.02,
        strength: 0.24,
        curve: 1.08
      },
      sideColor: 13280696,
      bottomColor: 12031658,
      roughness: 0.96,
      metalness: 0.02
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 8112374 },
        { t: 1, color: 12647935 }
      ],
      specularStrength: 0.32,
      opacity: 0.48,
      shoreTint: 16777215,
      shoreWidth: 2
    }),
    track: trackDefaults({
      baseColor: 16748459,
      emissive: 16761553,
      emissiveIntensity: 0.2,
      roughness: 0.5,
      metalness: 0.03,
      altitudeTintStops: [
        { t: 0, color: 16748459 },
        { t: 1, color: 16765286 }
      ]
    }),
    markers: markerDefaults({
      startColor: 8115081,
      finishColor: 16765286,
      ringColor: 16777215,
      ringOpacity: 0.24,
      ringEmissive: 16768232,
      ringPulseSpeed: 1.15
    }),
    hud: hudDefaults({
      warningBackground: "rgba(255, 246, 227, 0.84)",
      warningBorder: "rgba(255, 143, 171, 0.28)",
      warningText: "#7e6388",
      shadowColor: "rgba(89, 63, 96, 0.18)",
      atmosphereGlow: "rgba(255, 143, 171, 0.16)"
    })
  }),
  rainbow: createTheme({
    cssVars: {
      "--bg-1": "#12142e",
      "--bg-2": "#2a1d52",
      "--card": "rgba(18, 16, 42, 0.78)",
      "--card-border": "rgba(255, 255, 255, 0.2)",
      "--accent": "#ff5e5b",
      "--accent-soft": "#fff275",
      "--text": "#f8fbff",
      "--muted": "#c3d0ff"
    },
    styleDescription: "Style: Rainbow spectrum terrain.",
    defaultTerrainShape: "triangular",
    useWaterTint: true,
    fogColor: 1579577,
    hemisphereSky: 10807551,
    hemisphereGround: 2757952,
    hemisphereIntensity: 1.4,
    sunColor: 16777215,
    sunIntensity: 1.45,
    terrain: terrainDefaults({
      elevationStops: [
        { t: 0, color: 16734558 },
        { t: 0.2, color: 16749132 },
        { t: 0.4, color: 16763450 },
        { t: 0.6, color: 9095462 },
        { t: 0.8, color: 1671876 },
        { t: 1, color: 6966419 }
      ],
      slopeTint: {
        low: 3745867,
        high: 16777215,
        strength: 0.26,
        curve: 1.02
      },
      aspectTint: {
        cool: 8322303,
        warm: 16735835,
        strength: 0.22
      },
      reliefShading: {
        shadow: 0.83,
        highlight: 1.08,
        strength: 0.6,
        curve: 0.8
      },
      sideColor: 3944280,
      bottomColor: 2366519,
      roughness: 0.88,
      metalness: 0.09
    }),
    water: waterDefaults({
      surfaceStops: [
        { t: 0, color: 2976991 },
        { t: 1, color: 8322303 }
      ],
      specularStrength: 0.64,
      opacity: 0.62,
      shoreTint: 16773749,
      shoreWidth: 2
    }),
    track: trackDefaults({
      baseColor: 16777215,
      emissive: 16735835,
      emissiveIntensity: 0.5,
      roughness: 0.28,
      metalness: 0.12,
      altitudeTintStops: [
        { t: 0, color: 16734558 },
        { t: 0.2, color: 16749132 },
        { t: 0.4, color: 16763450 },
        { t: 0.6, color: 9095462 },
        { t: 0.8, color: 1671876 },
        { t: 1, color: 6966419 }
      ]
    }),
    markers: markerDefaults({
      startColor: 8322303,
      finishColor: 16773749,
      ringColor: 16735835,
      ringOpacity: 0.3,
      ringEmissive: 6966419,
      ringPulseSpeed: 2.25
    }),
    hud: hudDefaults({
      warningBackground: "rgba(39, 21, 78, 0.84)",
      warningBorder: "rgba(255, 242, 117, 0.32)",
      warningText: "#fff275",
      atmosphereGlow: "rgba(255, 94, 91, 0.22)"
    })
  })
};

// src/viewer/index.ts
var payloadScript = requireElement("payload", HTMLScriptElement);
var viewerConfigScript = requireElement("viewer-config", HTMLScriptElement);
var app = requireElement("app", HTMLDivElement);
var payload = JSON.parse(payloadScript.textContent ?? "null");
var rawViewerConfig = {
  ...JSON.parse(
    viewerConfigScript.textContent ?? JSON.stringify(DEFAULT_VIEWER_CONFIG)
  )
};
var activeTheme = styleThemes[rawViewerConfig.style ?? DEFAULT_VIEWER_CONFIG.style] ?? styleThemes.classic;
var viewerConfig = {
  ...DEFAULT_VIEWER_CONFIG,
  ...rawViewerConfig,
  terrainShape: rawViewerConfig.terrainShape ?? activeTheme.defaultTerrainShape ?? DEFAULT_VIEWER_CONFIG.terrainShape
};
for (const [name, value] of Object.entries(activeTheme.cssVars)) {
  document.documentElement.style.setProperty(name, value);
}
if ("message" in payload) {
  app.innerHTML = \`
    <div class="error-shell">
      <article class="error-card">
        <h1>\${escapeText(payload.title)}</h1>
        <p>\${escapeText(payload.message)}</p>
        \${payload.details ? \`<p><code>\${escapeText(payload.details)}</code></p>\` : ""}
        <p>Use a <code>.cimal</code> pack path in the widget body, for example:</p>
        <p><code>Library/Cimal/track.cimal</code></p>
      </article>
    </div>
  \`;
} else {
  const cleanup = await renderTerrainViewer(
    app,
    payload,
    activeTheme,
    viewerConfig
  );
  window.addEventListener("pagehide", cleanup, { once: true });
  window.addEventListener("beforeunload", cleanup, { once: true });
}
    <\/script>
  </body>
</html>
`;var $h="__CIMAL_VIEWER_TITLE__",Af="__CIMAL_VIEWER_PAYLOAD__",ef="__CIMAL_VIEWER_CONFIG__",tf=12e5;function nf(A){return A.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function yI(A){return JSON.stringify(A).replaceAll("<","\\u003c")}function qr(A,t,e){return A.split(t).join(e)}function rf(A){if(!("bakedImagery"in A)||!A.bakedImagery||A.bakedImagery.dataUrl.length<=tf)return A;let t=A.bakedImagery.kind==="hiking-map"?"The baked hiking-map texture in this pack is too large to embed in the widget iframe. Rebuild the pack at a lower hiking-map resolution to display it here.":"The baked ESA WorldCover texture in this pack is too large to embed in the widget iframe.";return{...A,bakedImagery:void 0,warning:A.warning?`${A.warning} ${t}`:t}}function Vr(A,t=Ke){let e=typeof t=="string"?{style:t}:{style:t.style??Ke.style,hikingMapResolution:t.hikingMapResolution??Ke.hikingMapResolution,worldcoverProcessing:t.worldcoverProcessing??Ke.worldcoverProcessing,...t.terrainShape?{terrainShape:t.terrainShape}:{}},n=qr(qr(qr(wI,$h,nf(A.title)),ef,yI(e)),Af,yI(rf(A)));return`data:text/html;charset=utf-8,${encodeURIComponent(n)}`}function of(A,t,e){return{title:A,message:t,details:e}}var mI=960,gf=600,af=340;function Zr(A,t,e){return{url:Vr(of(A,t),e),width:mI,height:af}}function DI(A,t){return{url:Vr(A,t),width:mI,height:gf}}async function sf(A,t){let e=await X.readFile(A),n=Ci(e);return DI(n,t)}async function If(A,t,e,n){let i=await Tr(A),r=bs(A,i,t,e,n),I=await Ns(r);if(I)try{return Ci(I)}catch(o){if(!fo(o))throw o;await ks(r),I=null}let g=await uI(A,i,{style:t,hikingMapResolution:e,worldcoverProcessing:n}),s=ws(r,A);return await Rs(s.key,s.path,vt(g)),g}async function Cf(A,t){let e=await If(A,t.style,t.hikingMapResolution,t.worldcoverProcessing);return DI(e,t)}async function Wr(A){let t;try{t=Io(A)}catch(o){let a=o instanceof Error?o.message:"Unknown error";return Zr("Cimal widget configuration error",a)}let{source:e,hasExplicitHikingMapResolution:n,hasExplicitTerrainShape:i,hasExplicitWorldcoverProcessing:r,...I}=t,g=i?I:{...I,terrainShape:void 0},s;try{s=Co(t)}catch(o){let a=o instanceof Error?o.message:"Unknown error";return Zr("Cimal widget configuration error",a,g)}try{return s.kind==="pack"?await sf(s.packPath,g):await Cf(s.gpxSource,g)}catch(o){let a=o instanceof Error?o.message:"Unknown error",E=s.kind==="pack"?"Cimal pack preview failed":"GPX terrain preview failed";return Zr(E,a,g)}}var SI={buildCimalPackFromGpx:Kr,insertGpxTerrainBlock:Pr,refreshGpxTerrainWidgets:Or,renderGpxTerrainWidget:Wr,syncGpxTerrainRuntime:Jr},NI={name:"cimal",requiredPermissions:["fetch"],functions:{buildCimalPackFromGpx:{path:"src/index.ts:buildCimalPackFromGpx",command:{name:"Cimal: Build pack from GPX"},slashCommand:{name:"cimal-build",description:"Build a .cimal pack from a GPX source"}},insertGpxTerrainBlock:{path:"src/index.ts:insertGpxTerrainBlock",command:{name:"Cimal: Insert widget"},slashCommand:{name:"cimal",description:"Insert a cimal widget for an existing .cimal pack"}},refreshGpxTerrainWidgets:{path:"src/index.ts:refreshGpxTerrainWidgets",command:{name:"Cimal: Refresh widgets"},slashCommand:{name:"cimal-refresh",description:"Refresh rendered cimal widgets"}},renderGpxTerrainWidget:{path:"src/index.ts:renderGpxTerrainWidget",codeWidget:"cimal",renderMode:"iframe"},syncGpxTerrainRuntime:{path:"src/index.ts:syncGpxTerrainRuntime",events:["plugs:loaded","editor:pageLoaded"]}},assets:{}},Nw={manifest:NI,functionMapping:SI};$r(SI,NI,self.postMessage);export{Nw as plug};
/*! Bundled license information:

pako/dist/pako.esm.mjs:
  (*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) *)

lerc/LercDecode.js:
  (* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve *)
*/
//# sourceMappingURL=cimal.plug.js.map
