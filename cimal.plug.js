var mI=Object.create;var Pn=Object.defineProperty;var DI=Object.getOwnPropertyDescriptor;var SI=Object.getOwnPropertyNames;var NI=Object.getPrototypeOf,kI=Object.prototype.hasOwnProperty;var EA=(A,t)=>()=>(A&&(t=A(A=0)),t);var kt=(A,t)=>()=>(t||A((t={exports:{}}).exports,t),t.exports),DA=(A,t)=>{for(var e in t)Pn(A,e,{get:t[e],enumerable:!0})},RI=(A,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of SI(t))!kI.call(A,i)&&i!==e&&Pn(A,i,{get:()=>t[i],enumerable:!(n=DI(t,i))||n.enumerable});return A};var Rt=(A,t,e)=>(e=A!=null?mI(NI(A)):{},RI(t||!A||!A.__esModule?Pn(e,"default",{value:A,enumerable:!0}):e,A));function $A(A){let t=HB[A];if(t===void 0)throw new RangeError(`Invalid field type: ${A}`);return t}function Yo(A,t,e,n=!1,i=!1){To[t]=A,ce[A]={tag:A,name:t,type:typeof e=="string"?m[e]:e,isArray:n,eager:i}}function qe(A){return typeof A=="number"?A:To[A]}var m,HB,KB,To,ce,cA,_o,vo,Jt,ci,OB,Ve=EA(()=>{m={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,SBYTE:6,UNDEFINED:7,SSHORT:8,SLONG:9,SRATIONAL:10,FLOAT:11,DOUBLE:12,IFD:13,LONG8:16,SLONG8:17,IFD8:18},HB={[m.BYTE]:1,[m.ASCII]:1,[m.SBYTE]:1,[m.UNDEFINED]:1,[m.SHORT]:2,[m.SSHORT]:2,[m.LONG]:4,[m.SLONG]:4,[m.FLOAT]:4,[m.IFD]:4,[m.RATIONAL]:8,[m.SRATIONAL]:8,[m.DOUBLE]:8,[m.LONG8]:8,[m.SLONG8]:8,[m.IFD8]:8};KB={NewSubfileType:{tag:254,type:m.LONG,eager:!0},SubfileType:{tag:255,type:m.SHORT,eager:!0},ImageWidth:{tag:256,type:m.SHORT,eager:!0},ImageLength:{tag:257,type:m.SHORT,eager:!0},BitsPerSample:{tag:258,type:m.SHORT,isArray:!0,eager:!0},Compression:{tag:259,type:m.SHORT,eager:!0},PhotometricInterpretation:{tag:262,type:m.SHORT,eager:!0},Threshholding:{tag:263,type:m.SHORT},CellWidth:{tag:264,type:m.SHORT},CellLength:{tag:265,type:m.SHORT},FillOrder:{tag:266,type:m.SHORT},DocumentName:{tag:269,type:m.ASCII},ImageDescription:{tag:270,type:m.ASCII},Make:{tag:271,type:m.ASCII},Model:{tag:272,type:m.ASCII},StripOffsets:{tag:273,type:m.SHORT,isArray:!0},Orientation:{tag:274,type:m.SHORT},SamplesPerPixel:{tag:277,type:m.SHORT,eager:!0},RowsPerStrip:{tag:278,type:m.SHORT,eager:!0},StripByteCounts:{tag:279,type:m.LONG,isArray:!0},MinSampleValue:{tag:280,type:m.SHORT,isArray:!0},MaxSampleValue:{tag:281,type:m.SHORT,isArray:!0},XResolution:{tag:282,type:m.RATIONAL},YResolution:{tag:283,type:m.RATIONAL},PlanarConfiguration:{tag:284,type:m.SHORT,eager:!0},PageName:{tag:285,type:m.ASCII},XPosition:{tag:286,type:m.RATIONAL},YPosition:{tag:287,type:m.RATIONAL},FreeOffsets:{tag:288,type:m.LONG},FreeByteCounts:{tag:289,type:m.LONG},GrayResponseUnit:{tag:290,type:m.SHORT},GrayResponseCurve:{tag:291,type:m.SHORT,isArray:!0},T4Options:{tag:292,type:m.LONG},T6Options:{tag:293,type:m.LONG},ResolutionUnit:{tag:296,type:m.SHORT},PageNumber:{tag:297,type:m.SHORT,isArray:!0},TransferFunction:{tag:301,type:m.SHORT,isArray:!0},Software:{tag:305,type:m.ASCII},DateTime:{tag:306,type:m.ASCII},Artist:{tag:315,type:m.ASCII},HostComputer:{tag:316,type:m.ASCII},Predictor:{tag:317,type:m.SHORT},WhitePoint:{tag:318,type:m.RATIONAL,isArray:!0},PrimaryChromaticities:{tag:319,type:m.RATIONAL,isArray:!0},ColorMap:{tag:320,type:m.SHORT,isArray:!0},HalftoneHints:{tag:321,type:m.SHORT,isArray:!0},TileWidth:{tag:322,type:m.SHORT,eager:!0},TileLength:{tag:323,type:m.SHORT,eager:!0},TileOffsets:{tag:324,type:m.LONG,isArray:!0},TileByteCounts:{tag:325,type:m.SHORT,isArray:!0},InkSet:{tag:332,type:m.SHORT},InkNames:{tag:333,type:m.ASCII},NumberOfInks:{tag:334,type:m.SHORT},DotRange:{tag:336,type:m.BYTE,isArray:!0},TargetPrinter:{tag:337,type:m.ASCII},ExtraSamples:{tag:338,type:m.BYTE,isArray:!0,eager:!0},SampleFormat:{tag:339,type:m.SHORT,isArray:!0,eager:!0},SMinSampleValue:{tag:340,isArray:!0},SMaxSampleValue:{tag:341,isArray:!0},TransferRange:{tag:342,type:m.SHORT,isArray:!0},JPEGProc:{tag:512,type:m.SHORT},JPEGInterchangeFormat:{tag:513,type:m.LONG},JPEGInterchangeFormatLngth:{tag:514,type:m.LONG},JPEGRestartInterval:{tag:515,type:m.SHORT},JPEGLosslessPredictors:{tag:517,type:m.SHORT,isArray:!0},JPEGPointTransforms:{tag:518,type:m.SHORT,isArray:!0},JPEGQTables:{tag:519,type:m.LONG,isArray:!0},JPEGDCTables:{tag:520,type:m.LONG,isArray:!0},JPEGACTables:{tag:521,type:m.LONG,isArray:!0},YCbCrCoefficients:{tag:529,type:m.RATIONAL,isArray:!0},YCbCrSubSampling:{tag:530,type:m.SHORT,isArray:!0},YCbCrPositioning:{tag:531,type:m.SHORT},ReferenceBlackWhite:{tag:532,type:m.LONG,isArray:!0},Copyright:{tag:33432,type:m.ASCII},BadFaxLines:{tag:326},CleanFaxData:{tag:327},ClipPath:{tag:343},ConsecutiveBadFaxLines:{tag:328},Decode:{tag:433},DefaultImageColor:{tag:434},Indexed:{tag:346},JPEGTables:{tag:347,isArray:!0,eager:!0},StripRowCounts:{tag:559,isArray:!0},SubIFDs:{tag:330,isArray:!0},XClipPathUnits:{tag:344},YClipPathUnits:{tag:345},ApertureValue:{tag:37378},ColorSpace:{tag:40961},DateTimeDigitized:{tag:36868},DateTimeOriginal:{tag:36867},ExifIFD:{tag:34665,name:"Exif IFD",type:m.LONG},ExifVersion:{tag:36864},ExposureTime:{tag:33434},FileSource:{tag:41728},Flash:{tag:37385},FlashpixVersion:{tag:40960},FNumber:{tag:33437},ImageUniqueID:{tag:42016},LightSource:{tag:37384},MakerNote:{tag:37500},ShutterSpeedValue:{tag:37377},UserComment:{tag:37510},IPTC:{tag:33723},CZ_LSMINFO:{tag:34412},ICCProfile:{tag:34675,name:"ICC Profile"},XMP:{tag:700},GDAL_METADATA:{tag:42112},GDAL_NODATA:{tag:42113,type:m.ASCII,eager:!0},Photoshop:{tag:34377},ModelPixelScale:{tag:33550,type:m.DOUBLE,isArray:!0,eager:!0},ModelTiepoint:{tag:33922,type:m.DOUBLE,isArray:!0,eager:!0},ModelTransformation:{tag:34264,type:m.DOUBLE,isArray:!0,eager:!0},GeoKeyDirectory:{tag:34735,type:m.SHORT,isArray:!0,eager:!0},GeoDoubleParams:{tag:34736,type:m.DOUBLE,isArray:!0,eager:!0},GeoAsciiParams:{tag:34737,type:m.ASCII,eager:!0},LercParameters:{tag:50674,eager:!0}},To={},ce={};for(let[A,t]of Object.entries(KB)){let e=t;Yo(e.tag,e.name||A,e.type,e.isArray,e.eager)}cA={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},_o={Unspecified:0,Assocalpha:1,Unassalpha:2},vo={Version:0,AddCompression:1},Jt={None:0,Deflate:1,Zstandard:2},ci={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},OB={};for(let[A,t]of Object.entries(ci))OB[t]=parseInt(A,10)});function VB(A,t){let e=A.length-t,n=0;do{for(let i=t;i>0;i--)A[n+t]+=A[n],n++;e-=t}while(e>0)}function ZB(A,t,e){let n=0,i=A.length,r=i/e;for(;i>t;){for(let g=t;g>0;--g)A[n+t]+=A[n],++n;i-=t}let s=A.slice();for(let g=0;g<r;++g)for(let I=0;I<e;++I)A[e*g+I]=s[(e-I-1)*r+g]}function Vo(A,t,e,n,i,r){if(!t||t===1)return A;for(let I=0;I<i.length;++I){if(i[I]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[I]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}let s=i[0]/8,g=r===2?1:i.length;for(let I=0;I<n&&!(I*g*e*s>=A.byteLength);++I){let o;if(t===2){switch(i[0]){case 8:o=new Uint8Array(A,I*g*e*s,g*e*s);break;case 16:o=new Uint16Array(A,I*g*e*s,g*e*s/2);break;case 32:o=new Uint32Array(A,I*g*e*s,g*e*s/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}VB(o,g)}else t===3&&(o=new Uint8Array(A,I*g*e*s,g*e*s),ZB(o,g,s))}return A}var Zo=EA(()=>{});var iA,UA=EA(()=>{Zo();iA=class{constructor(t){this.parameters=t}decodeBlock(t){throw new Error("decodeBlock not implemented")}async decode(t){let e=await this.decodeBlock(t),{tileWidth:n,tileHeight:i,predictor:r,bitsPerSample:s,planarConfiguration:g}=this.parameters;if(r!==1){let o=Array.isArray(s)||ArrayBuffer.isView(s)?Array.from(s):[s];return Vo(e,r,n,i,o,g)}return e}}});var jo={};DA(jo,{default:()=>qt});var qt,Wo=EA(()=>{UA();qt=class extends iA{decodeBlock(t){return t}}});var Xo={};DA(Xo,{default:()=>Vt});function WB(A,t,e){let n=t%8,i=Math.floor(t/8),r=8-n,s=t+e-(i+1)*8,g=8*(i+2)-(t+e),I=(i+2)*8-t;if(g=Math.max(0,g),i>=A.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),hi;let o=A[i]&2**(8-n)-1;o<<=e-r;let a=o;if(i+1<A.length){let E=A[i+1]>>>g;E<<=Math.max(0,e-I),a+=E}if(s>8&&i+2<A.length){let E=(i+3)*8-(t+e),B=A[i+2]>>>E;a+=B}return a}function Qi(A,t){for(let e=t.length-1;e>=0;e--)A.push(t[e]);return A}function zB(A){let t=new Uint16Array(4093),e=new Uint8Array(4093);for(let c=0;c<=257;c++)t[c]=4096,e[c]=c;let n=258,i=zo,r=0;function s(){n=258,i=zo}function g(c){let l=WB(c,r,i);return r+=i,l}function I(c,l){return e[n]=l,t[n]=c,n++,n-1}function o(c){let l=[];for(let h=c;h!==4096;h=t[h])l.push(e[h]);return l}let a=[];s();let E=new Uint8Array(A),B=g(E),C;for(;B!==hi;){if(B===li){for(s(),B=g(E);B===li;)B=g(E);if(B===hi)break;if(B>li)throw new Error(`corrupted code at scanline ${B}`);{let c=o(B);Qi(a,c),C=B}}else if(B<n){let c=o(B);Qi(a,c),C!==void 0&&I(C,c[c.length-1]),C=B}else{if(C===void 0)throw new Error(`Invalid LZW code: ${B} with no previous code`);let c=o(C);if(!c)throw new Error(`Bogus entry. Not in dictionary, ${C} / ${n}, position: ${r}`);Qi(a,c),a.push(c[c.length-1]),I(C,c[c.length-1]),C=B}n+1>=2**i&&(i===jB?C=void 0:i++),B=g(E)}return new Uint8Array(a)}var zo,li,hi,jB,Vt,$o=EA(()=>{UA();zo=9,li=256,hi=257,jB=12;Vt=class extends iA{decodeBlock(t){return zB(t).buffer}}});var eg={};DA(eg,{default:()=>en});function Ag(A,t){let e=0,n=[],i=16;for(;i>0&&!A[i-1];)--i;n.push({children:[],index:0});let r=n[0],s;for(let g=0;g<i;g++){for(let I=0;I<A[g];I++){if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.children[r.index]=t[e];r.index>0;)if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.index++,n.push(r);n.length<=g;)n.push(s={children:[],index:0}),r.children[r.index]=s.children,r=s;e++}g+1<i&&(n.push(s={children:[],index:0}),r.children[r.index]=s.children,r=s)}return n[0].children}function XB(A,t,e,n,i,r,s,g,I){let{mcusPerLine:o,progressive:a}=e;if(n.length>1&&(o===void 0||e.mcusPerColumn===void 0))throw new Error("Missing MCU dimensions");if(n.length===1&&(n[0].blocksPerLine===void 0||n[0].blocksPerColumn===void 0))throw new Error("Missing block dimensions");let E=t,B=t,C=0,c=0;function l(){if(c>0)return c--,C>>c&1;if(C=A[B++],C===255){let M=A[B++];if(M)throw new Error(`unexpected marker: ${(C<<8|M).toString(16)}`)}return c=7,C>>>7}function h(M){if(!M)throw new Error("Huffman table not found");let _=M,Y;for(;(Y=l())!==null;){let J=_[Y];if(typeof J=="number")return J;if(typeof J!="object")throw new Error("invalid huffman sequence");_=J}return null}function u(M){let _=M,Y=0;for(;_>0;){let J=l();if(J===null)return;Y=Y<<1|J,--_}return Y}function w(M){let _=u(M);if(_!==void 0)return _>=1<<M-1?_:_+(-1<<M)+1}function y(M,_){let Y=h(M.huffmanTableDC);if(Y===null)throw new Error("Huffman error");let J=Y===0?0:w(Y);if(J===void 0)throw new Error("Unexpected end of stream");M.pred===void 0&&(M.pred=0),M.pred+=J,_[0]=M.pred;let q=1;for(;q<64;){let AA=h(M.huffmanTableAC);if(AA===null)throw new Error("Unexpected end of data in AC coefficient decoding");let tA=AA&15,P=AA>>4;if(tA===0){if(P<15)break;q+=16}else{q+=P;let aA=Ze[q],gA=w(tA);if(gA===void 0)throw new Error("Unexpected end of stream");_[aA]=gA,q++}}}function f(M,_){let Y=h(M.huffmanTableDC);if(Y===null)throw new Error("Huffman error");let J=w(Y);if(J===void 0)throw new Error("Unexpected end of data in DC coefficient decoding");let q=Y===0?0:J<<I;M.pred===void 0&&(M.pred=0),M.pred+=q,_[0]=M.pred}function Q(M,_){let Y=l();if(Y===null)throw new Error("Unexpected end of data in DC coefficient decoding");_[0]|=Y<<I}let p=0;function d(M,_){if(p>0){p--;return}let Y=r,J=s;for(;Y<=J;){let q=h(M.huffmanTableAC);if(q===null)throw new Error("Unexpected end of data in AC coefficient decoding");let AA=q&15,tA=q>>4;if(AA===0){if(tA<15){let P=u(tA);if(P===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");p=P+(1<<tA)-1;break}Y+=16}else{Y+=tA;let P=Ze[Y],aA=w(AA);if(aA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");_[P]=aA*(1<<I),Y++}}}let S=0,k;function D(M,_){let Y=r,J=s,q=0;for(;Y<=J;){let AA=Ze[Y],tA=_[AA]<0?-1:1;switch(S){case 0:{let P=h(M.huffmanTableAC);if(P===null)throw new Error("Unexpected end of data in AC coefficient decoding");let aA=P&15;if(q=P>>4,aA===0)if(q<15){let gA=u(q);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");p=gA+(1<<q),S=4}else q=16,S=1;else{if(aA!==1)throw new Error("invalid ACn encoding");let gA=w(aA);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");k=gA,S=q?2:3}continue}case 1:case 2:if(_[AA]){let P=l();if(P===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(P<<I)*tA}else q--,q===0&&(S=S===2?3:0);break;case 3:if(_[AA]){let P=l();if(P===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(P<<I)*tA}else _[AA]=k<<I,S=0;break;case 4:if(_[AA]){let P=l();if(P===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(P<<I)*tA}break;default:break}Y++}S===4&&(p--,p===0&&(S=0))}function G(M,_,Y,J,q){let AA=Y/o|0,tA=Y%o,P=AA*M.v+J,aA=tA*M.h+q;if(!M.blocks)throw new Error("Missing blocks");_(M,M.blocks[P][aA])}function L(M,_,Y){let J=Y/M.blocksPerLine|0,q=Y%M.blocksPerLine;if(!M.blocks)throw new Error("Missing blocks");_(M,M.blocks[J][q])}let H=n.length,x,N,F,v,b,T;a?r===0?T=g===0?f:Q:T=g===0?d:D:T=y;let U=0,K,Z;H===1?Z=n[0].blocksPerLine*n[0].blocksPerColumn:Z=o*e.mcusPerColumn;let z=i||Z;for(;U<Z;){for(N=0;N<H;N++)n[N].pred=0;if(p=0,H===1)for(x=n[0],b=0;b<z;b++)L(x,T,U),U++;else for(b=0;b<z;b++){for(N=0;N<H;N++){x=n[N];let{h:M,v:_}=x;for(F=0;F<_;F++)for(v=0;v<M;v++)G(x,T,U,F,v)}if(U++,U===Z)break}if(c=0,K=A[B]<<8|A[B+1],K<65280)throw new Error("marker was not found");if(K>=65488&&K<=65495)B+=2;else break}return B-E}function $B(A){let t=[],{blocksPerLine:e,blocksPerColumn:n}=A;if(!e||!n||!A.blocks)throw new Error("Missing component data");let i=e<<3,r=new Int32Array(64),s=new Uint8Array(64);function g(I,o,a){let E=A.quantizationTable;if(!E)throw new Error("No quantization table found");let B,C,c,l,h,u,w,y,f,Q=a,p;for(p=0;p<64;p++)Q[p]=I[p]*E[p];for(p=0;p<8;++p){let d=8*p;if(Q[1+d]===0&&Q[2+d]===0&&Q[3+d]===0&&Q[4+d]===0&&Q[5+d]===0&&Q[6+d]===0&&Q[7+d]===0){f=le*Q[0+d]+512>>10,Q[0+d]=f,Q[1+d]=f,Q[2+d]=f,Q[3+d]=f,Q[4+d]=f,Q[5+d]=f,Q[6+d]=f,Q[7+d]=f;continue}B=le*Q[0+d]+128>>8,C=le*Q[4+d]+128>>8,c=Q[2+d],l=Q[6+d],h=An*(Q[1+d]-Q[7+d])+128>>8,y=An*(Q[1+d]+Q[7+d])+128>>8,u=Q[3+d]<<4,w=Q[5+d]<<4,f=B-C+1>>1,B=B+C+1>>1,C=f,f=c*$t+l*Xt+128>>8,c=c*Xt-l*$t+128>>8,l=f,f=h-w+1>>1,h=h+w+1>>1,w=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-c+1>>1,C=C+c+1>>1,c=f,f=h*zt+y*Wt+2048>>12,h=h*Wt-y*zt+2048>>12,y=f,f=u*jt+w*Zt+2048>>12,u=u*Zt-w*jt+2048>>12,w=f,Q[0+d]=B+y,Q[7+d]=B-y,Q[1+d]=C+w,Q[6+d]=C-w,Q[2+d]=c+u,Q[5+d]=c-u,Q[3+d]=l+h,Q[4+d]=l-h}for(p=0;p<8;++p){let d=p;if(Q[8+d]===0&&Q[16+d]===0&&Q[24+d]===0&&Q[32+d]===0&&Q[40+d]===0&&Q[48+d]===0&&Q[56+d]===0){f=le*a[p+0]+8192>>14,Q[0+d]=f,Q[8+d]=f,Q[16+d]=f,Q[24+d]=f,Q[32+d]=f,Q[40+d]=f,Q[48+d]=f,Q[56+d]=f;continue}B=le*Q[0+d]+2048>>12,C=le*Q[32+d]+2048>>12,c=Q[16+d],l=Q[48+d],h=An*(Q[8+d]-Q[56+d])+2048>>12,y=An*(Q[8+d]+Q[56+d])+2048>>12,u=Q[24+d],w=Q[40+d],f=B-C+1>>1,B=B+C+1>>1,C=f,f=c*$t+l*Xt+2048>>12,c=c*Xt-l*$t+2048>>12,l=f,f=h-w+1>>1,h=h+w+1>>1,w=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-c+1>>1,C=C+c+1>>1,c=f,f=h*zt+y*Wt+2048>>12,h=h*Wt-y*zt+2048>>12,y=f,f=u*jt+w*Zt+2048>>12,u=u*Zt-w*jt+2048>>12,w=f,Q[0+d]=B+y,Q[56+d]=B-y,Q[8+d]=C+w,Q[48+d]=C-w,Q[16+d]=c+u,Q[40+d]=c-u,Q[24+d]=l+h,Q[32+d]=l-h}for(p=0;p<64;++p){let d=128+(Q[p]+8>>4);d<0?o[p]=0:d>255?o[p]=255:o[p]=d}}for(let I=0;I<n;I++){let o=I<<3;for(let a=0;a<8;a++)t.push(new Uint8Array(i));for(let a=0;a<e;a++){g(A.blocks[I][a],s,r);let E=0,B=a<<3;for(let C=0;C<8;C++){let c=t[o+C];for(let l=0;l<8;l++)c[B+l]=s[E++]}}}return t}var Ze,Zt,jt,Wt,zt,Xt,$t,le,An,fi,en,tg=EA(()=>{UA();Ze=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),Zt=4017,jt=799,Wt=3406,zt=2276,Xt=1567,$t=3784,le=5793,An=2896;fi=class{constructor(){this.jfif=null,this.adobe=null,this.resetInterval=0,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.frames=[]}resetFrames(){this.frames=[]}parse(t){let e=0;function n(){let g=t[e]<<8|t[e+1];return e+=2,g}function i(){let g=n(),I=t.subarray(e,e+g-2);return e+=I.length,I}function r(g){let I=0,o=0,a,E;for(E in g.components)g.components.hasOwnProperty(E)&&(a=g.components[E],I<a.h&&(I=a.h),o<a.v&&(o=a.v));let B=Math.ceil(g.samplesPerLine/8/I),C=Math.ceil(g.scanLines/8/o);for(E in g.components)if(g.components.hasOwnProperty(E)){a=g.components[E];let c=Math.ceil(Math.ceil(g.samplesPerLine/8)*a.h/I),l=Math.ceil(Math.ceil(g.scanLines/8)*a.v/o),h=B*a.h,u=C*a.v,w=[];for(let y=0;y<u;y++){let f=[];for(let Q=0;Q<h;Q++)f.push(new Int32Array(64));w.push(f)}a.blocksPerLine=c,a.blocksPerColumn=l,a.blocks=w}g.maxH=I,g.maxV=o,g.mcusPerLine=B,g.mcusPerColumn=C}let s=n();if(s!==65496)throw new Error("SOI not found");for(s=n();s!==65497;){switch(s){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{let g=i();s===65504&&g[0]===74&&g[1]===70&&g[2]===73&&g[3]===70&&g[4]===0&&(this.jfif={version:{major:g[5],minor:g[6]},densityUnits:g[7],xDensity:g[8]<<8|g[9],yDensity:g[10]<<8|g[11],thumbWidth:g[12],thumbHeight:g[13],thumbData:g.subarray(14,14+3*g[12]*g[13])}),s===65518&&g[0]===65&&g[1]===100&&g[2]===111&&g[3]===98&&g[4]===101&&g[5]===0&&(this.adobe={version:g[6],flags0:g[7]<<8|g[8],flags1:g[9]<<8|g[10],transformCode:g[11]});break}case 65499:{let I=n()+e-2;for(;e<I;){let o=t[e++],a=new Int32Array(64);if(o>>4===0)for(let E=0;E<64;E++){let B=Ze[E];a[B]=t[e++]}else if(o>>4===1)for(let E=0;E<64;E++){let B=Ze[E];a[B]=n()}else throw new Error("DQT: invalid table spec");this.quantizationTables[o&15]=a}break}case 65472:case 65473:case 65474:{n();let g={extended:s===65473,progressive:s===65474,precision:t[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[],maxH:0,maxV:0,mcusPerLine:0,mcusPerColumn:0},I=t[e++],o;for(let a=0;a<I;a++){o=t[e];let E=t[e+1]>>4,B=t[e+1]&15,C=t[e+2];g.componentsOrder.push(o),g.components[o]={h:E,v:B,quantizationIdx:C,blocksPerLine:0,blocksPerColumn:0,blocks:[]},e+=3}r(g),this.frames.push(g);break}case 65476:{let g=n();for(let I=2;I<g;){let o=t[e++],a=new Uint8Array(16),E=0;for(let C=0;C<16;C++,e++)a[C]=t[e],E+=a[C];let B=new Uint8Array(E);for(let C=0;C<E;C++,e++)B[C]=t[e];I+=17+E,o>>4===0?this.huffmanTablesDC[o&15]=Ag(a,B):this.huffmanTablesAC[o&15]=Ag(a,B)}break}case 65501:n(),this.resetInterval=n();break;case 65498:{n();let g=t[e++],I=[],o=this.frames[0];for(let c=0;c<g;c++){let l=o.components[t[e++]],h=t[e++];l.huffmanTableDC=this.huffmanTablesDC[h>>4],l.huffmanTableAC=this.huffmanTablesAC[h&15],I.push(l)}let a=t[e++],E=t[e++],B=t[e++],C=XB(t,e,o,I,this.resetInterval,a,E,B>>4,B&15);e+=C;break}case 65535:t[e]!==255&&e--;break;default:if(t[e-3]===255&&t[e-2]>=192&&t[e-2]<=254){e-=3;break}throw new Error(`unknown JPEG marker ${s.toString(16)}`)}s=n()}}getResult(){let{frames:t}=this;if(this.frames.length===0)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(let a=0;a<this.frames.length;a++){let E=this.frames[a].components;for(let B of Object.keys(E)){let C=E[B].quantizationIdx;typeof C=="number"&&(E[B].quantizationTable=this.quantizationTables[C],delete E[B].quantizationIdx)}}let e=t[0];if(!e.maxH||!e.maxV)throw new Error("Invalid frame dimensions");let{components:n,componentsOrder:i}=e,r=[],s=e.samplesPerLine,g=e.scanLines;for(let a=0;a<i.length;a++){let E=n[i[a]];r.push({lines:$B(E),scaleX:E.h/e.maxH,scaleY:E.v/e.maxV})}let I=new Uint8Array(s*g*r.length),o=0;for(let a=0;a<g;++a)for(let E=0;E<s;++E)for(let B=0;B<r.length;++B){let C=r[B];I[o]=C.lines[0|a*C.scaleY][0|E*C.scaleX],++o}return I}},en=class extends iA{constructor(t){super(t),this.reader=new fi,t.JPEGTables&&this.reader.parse(t.JPEGTables)}decodeBlock(t){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(t)),this.reader.getResult().buffer}}});function we(A){let t=A.length;for(;--t>=0;)A[t]=0}function ui(A,t,e,n,i){this.static_tree=A,this.extra_bits=t,this.extra_base=e,this.elems=n,this.max_length=i,this.has_stree=A&&A.length}function wi(A,t){this.dyn_tree=A,this.max_code=0,this.stat_desc=t}function RA(A,t,e,n,i){this.good_length=A,this.max_lazy=t,this.nice_length=e,this.max_chain=n,this.func=i}function ec(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Bn,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(qE*2),this.dyn_dtree=new Uint16Array((2*PE+1)*2),this.bl_tree=new Uint16Array((2*JE+1)*2),OA(this.dyn_ltree),OA(this.dyn_dtree),OA(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(VE+1),this.heap=new Uint16Array(2*Mi+1),OA(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Mi+1),OA(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function yc(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}function Ct(A){this.options=En.assign({level:Rc,method:xc,chunkSize:16384,windowBits:15,memLevel:8,strategy:Gc},A||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new aa,this.strm.avail_out=0;let e=$e.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==In)throw new Error(ne[e]);if(t.header&&$e.deflateSetHeader(this.strm,t.header),t.dictionary){let n;if(typeof t.dictionary=="string"?n=gt.string2buf(t.dictionary):sa.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,e=$e.deflateSetDictionary(this.strm,n),e!==In)throw new Error(ne[e]);this._dict_set=!0}}function Vi(A,t){let e=new Ct(t);if(e.push(A,!0),e.err)throw e.msg||ne[e.err];return e.result}function Lc(A,t){return t=t||{},t.raw=!0,Vi(A,t)}function bc(A,t){return t=t||{},t.gzip=!0,Vi(A,t)}function tl(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function dl(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}function Bt(A){this.options=En.assign({chunkSize:1024*64,windowBits:15,to:""},A||{});let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(A&&A.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new aa,this.strm.avail_out=0;let e=YA.inflateInit2(this.strm,t.windowBits);if(e!==at)throw new Error(ne[e]);if(this.header=new ul,YA.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=gt.string2buf(t.dictionary):wa.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=YA.inflateSetDictionary(this.strm,t.dictionary),e!==at)))throw new Error(ne[e])}function Zi(A,t){let e=new Bt(t);if(e.push(A),e.err)throw e.msg||ne[e.err];return e.result}function Dl(A,t){return t=t||{},t.raw=!0,Zi(A,t)}var AE,Hg,eE,tE,nE,Ki,st,et,fe,Oi,Kg,Ae,di,iE,Pi,Og,Pg,Jg,bi,an,rE,qg,oE,TA,Xe,tt,nt,Ji,sn,Vg,Zg,jg,Wg,it,lA,GA,zg,gE,aE,Xg,sE,$g,Aa,ng,pi,ig,Fi,rg,og,IE,CE,BE,gg,EE,ea,cE,lE,QE,hE,fE,dE,uE,wE,pE,yE,rt,mE,DE,SE,rA,ne,pe,NE,Ui,kE,JA,RE,qA,GE,xE,wA,ag,oA,sg,xA,LE,yi,bE,FE,tn,UE,ME,TE,YE,Bn,_E,vE,HE,KE,OE,Mi,PE,JE,qE,VE,O,PA,LA,ZE,de,qi,Ti,Yi,_i,vi,ee,We,CA,ye,ie,me,jE,te,Ig,OA,WE,zE,VA,fA,dA,V,je,Hi,ta,ue,na,mi,Qe,XE,$E,ze,Ac,It,ia,ra,tc,oa,nc,ic,rc,oc,gc,ac,sc,Ic,Cc,Bc,Ec,cc,lc,$e,Qc,hc,fc,En,ga,ot,dc,uc,wc,pc,gt,aa,sa,mc,Dc,Sc,Nc,In,kc,Rc,Gc,xc,Fc,Uc,Mc,Tc,Yc,_c,nn,vc,Hc,he,Cg,Bg,Eg,Di,cg,Kc,Oc,Pc,Jc,qc,At,Vc,Ia,Ca,lg,Zc,rn,re,jc,Wc,pA,Ba,Ea,zc,Qg,cn,hg,fg,dg,ug,wg,pg,yg,mg,Dg,Cn,MA,Si,Sg,Ni,Ng,kg,Rg,Gg,on,gn,xg,Lg,bg,Fg,Ug,ki,Mg,Tg,$,ca,la,Xc,$c,Al,el,Yg,oe,Qa,ha,fa,da,nl,_g,Ri,Gi,il,ua,rl,ol,gl,al,sl,Il,Cl,Bl,El,cl,ll,Ql,hl,fl,YA,ul,wa,wl,pl,at,xi,Li,yl,vg,ml,Sl,Nl,kl,Rl,Gl,xl,ru,ou,gu,au,su,Ll,Iu,Cu,ln,ji=EA(()=>{AE=0,Hg=1,eE=2,tE=3,nE=258,Ki=29,st=256,et=st+1+Ki,fe=30,Oi=19,Kg=2*et+1,Ae=15,di=16,iE=7,Pi=256,Og=16,Pg=17,Jg=18,bi=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),an=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),rE=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),qg=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oE=512,TA=new Array((et+2)*2);we(TA);Xe=new Array(fe*2);we(Xe);tt=new Array(oE);we(tt);nt=new Array(nE-tE+1);we(nt);Ji=new Array(Ki);we(Ji);sn=new Array(fe);we(sn);Wg=A=>A<256?tt[A]:tt[256+(A>>>7)],it=(A,t)=>{A.pending_buf[A.pending++]=t&255,A.pending_buf[A.pending++]=t>>>8&255},lA=(A,t,e)=>{A.bi_valid>di-e?(A.bi_buf|=t<<A.bi_valid&65535,it(A,A.bi_buf),A.bi_buf=t>>di-A.bi_valid,A.bi_valid+=e-di):(A.bi_buf|=t<<A.bi_valid&65535,A.bi_valid+=e)},GA=(A,t,e)=>{lA(A,e[t*2],e[t*2+1])},zg=(A,t)=>{let e=0;do e|=A&1,A>>>=1,e<<=1;while(--t>0);return e>>>1},gE=A=>{A.bi_valid===16?(it(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)},aE=(A,t)=>{let e=t.dyn_tree,n=t.max_code,i=t.stat_desc.static_tree,r=t.stat_desc.has_stree,s=t.stat_desc.extra_bits,g=t.stat_desc.extra_base,I=t.stat_desc.max_length,o,a,E,B,C,c,l=0;for(B=0;B<=Ae;B++)A.bl_count[B]=0;for(e[A.heap[A.heap_max]*2+1]=0,o=A.heap_max+1;o<Kg;o++)a=A.heap[o],B=e[e[a*2+1]*2+1]+1,B>I&&(B=I,l++),e[a*2+1]=B,!(a>n)&&(A.bl_count[B]++,C=0,a>=g&&(C=s[a-g]),c=e[a*2],A.opt_len+=c*(B+C),r&&(A.static_len+=c*(i[a*2+1]+C)));if(l!==0){do{for(B=I-1;A.bl_count[B]===0;)B--;A.bl_count[B]--,A.bl_count[B+1]+=2,A.bl_count[I]--,l-=2}while(l>0);for(B=I;B!==0;B--)for(a=A.bl_count[B];a!==0;)E=A.heap[--o],!(E>n)&&(e[E*2+1]!==B&&(A.opt_len+=(B-e[E*2+1])*e[E*2],e[E*2+1]=B),a--)}},Xg=(A,t,e)=>{let n=new Array(Ae+1),i=0,r,s;for(r=1;r<=Ae;r++)i=i+e[r-1]<<1,n[r]=i;for(s=0;s<=t;s++){let g=A[s*2+1];g!==0&&(A[s*2]=zg(n[g]++,g))}},sE=()=>{let A,t,e,n,i,r=new Array(Ae+1);for(e=0,n=0;n<Ki-1;n++)for(Ji[n]=e,A=0;A<1<<bi[n];A++)nt[e++]=n;for(nt[e-1]=n,i=0,n=0;n<16;n++)for(sn[n]=i,A=0;A<1<<an[n];A++)tt[i++]=n;for(i>>=7;n<fe;n++)for(sn[n]=i<<7,A=0;A<1<<an[n]-7;A++)tt[256+i++]=n;for(t=0;t<=Ae;t++)r[t]=0;for(A=0;A<=143;)TA[A*2+1]=8,A++,r[8]++;for(;A<=255;)TA[A*2+1]=9,A++,r[9]++;for(;A<=279;)TA[A*2+1]=7,A++,r[7]++;for(;A<=287;)TA[A*2+1]=8,A++,r[8]++;for(Xg(TA,et+1,r),A=0;A<fe;A++)Xe[A*2+1]=5,Xe[A*2]=zg(A,5);Vg=new ui(TA,bi,st+1,et,Ae),Zg=new ui(Xe,an,0,fe,Ae),jg=new ui(new Array(0),rE,0,Oi,iE)},$g=A=>{let t;for(t=0;t<et;t++)A.dyn_ltree[t*2]=0;for(t=0;t<fe;t++)A.dyn_dtree[t*2]=0;for(t=0;t<Oi;t++)A.bl_tree[t*2]=0;A.dyn_ltree[Pi*2]=1,A.opt_len=A.static_len=0,A.sym_next=A.matches=0},Aa=A=>{A.bi_valid>8?it(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0},ng=(A,t,e,n)=>{let i=t*2,r=e*2;return A[i]<A[r]||A[i]===A[r]&&n[t]<=n[e]},pi=(A,t,e)=>{let n=A.heap[e],i=e<<1;for(;i<=A.heap_len&&(i<A.heap_len&&ng(t,A.heap[i+1],A.heap[i],A.depth)&&i++,!ng(t,n,A.heap[i],A.depth));)A.heap[e]=A.heap[i],e=i,i<<=1;A.heap[e]=n},ig=(A,t,e)=>{let n,i,r=0,s,g;if(A.sym_next!==0)do n=A.pending_buf[A.sym_buf+r++]&255,n+=(A.pending_buf[A.sym_buf+r++]&255)<<8,i=A.pending_buf[A.sym_buf+r++],n===0?GA(A,i,t):(s=nt[i],GA(A,s+st+1,t),g=bi[s],g!==0&&(i-=Ji[s],lA(A,i,g)),n--,s=Wg(n),GA(A,s,e),g=an[s],g!==0&&(n-=sn[s],lA(A,n,g)));while(r<A.sym_next);GA(A,Pi,t)},Fi=(A,t)=>{let e=t.dyn_tree,n=t.stat_desc.static_tree,i=t.stat_desc.has_stree,r=t.stat_desc.elems,s,g,I=-1,o;for(A.heap_len=0,A.heap_max=Kg,s=0;s<r;s++)e[s*2]!==0?(A.heap[++A.heap_len]=I=s,A.depth[s]=0):e[s*2+1]=0;for(;A.heap_len<2;)o=A.heap[++A.heap_len]=I<2?++I:0,e[o*2]=1,A.depth[o]=0,A.opt_len--,i&&(A.static_len-=n[o*2+1]);for(t.max_code=I,s=A.heap_len>>1;s>=1;s--)pi(A,e,s);o=r;do s=A.heap[1],A.heap[1]=A.heap[A.heap_len--],pi(A,e,1),g=A.heap[1],A.heap[--A.heap_max]=s,A.heap[--A.heap_max]=g,e[o*2]=e[s*2]+e[g*2],A.depth[o]=(A.depth[s]>=A.depth[g]?A.depth[s]:A.depth[g])+1,e[s*2+1]=e[g*2+1]=o,A.heap[1]=o++,pi(A,e,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],aE(A,t),Xg(e,I,A.bl_count)},rg=(A,t,e)=>{let n,i=-1,r,s=t[1],g=0,I=7,o=4;for(s===0&&(I=138,o=3),t[(e+1)*2+1]=65535,n=0;n<=e;n++)r=s,s=t[(n+1)*2+1],!(++g<I&&r===s)&&(g<o?A.bl_tree[r*2]+=g:r!==0?(r!==i&&A.bl_tree[r*2]++,A.bl_tree[Og*2]++):g<=10?A.bl_tree[Pg*2]++:A.bl_tree[Jg*2]++,g=0,i=r,s===0?(I=138,o=3):r===s?(I=6,o=3):(I=7,o=4))},og=(A,t,e)=>{let n,i=-1,r,s=t[1],g=0,I=7,o=4;for(s===0&&(I=138,o=3),n=0;n<=e;n++)if(r=s,s=t[(n+1)*2+1],!(++g<I&&r===s)){if(g<o)do GA(A,r,A.bl_tree);while(--g!==0);else r!==0?(r!==i&&(GA(A,r,A.bl_tree),g--),GA(A,Og,A.bl_tree),lA(A,g-3,2)):g<=10?(GA(A,Pg,A.bl_tree),lA(A,g-3,3)):(GA(A,Jg,A.bl_tree),lA(A,g-11,7));g=0,i=r,s===0?(I=138,o=3):r===s?(I=6,o=3):(I=7,o=4)}},IE=A=>{let t;for(rg(A,A.dyn_ltree,A.l_desc.max_code),rg(A,A.dyn_dtree,A.d_desc.max_code),Fi(A,A.bl_desc),t=Oi-1;t>=3&&A.bl_tree[qg[t]*2+1]===0;t--);return A.opt_len+=3*(t+1)+5+5+4,t},CE=(A,t,e,n)=>{let i;for(lA(A,t-257,5),lA(A,e-1,5),lA(A,n-4,4),i=0;i<n;i++)lA(A,A.bl_tree[qg[i]*2+1],3);og(A,A.dyn_ltree,t-1),og(A,A.dyn_dtree,e-1)},BE=A=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&A.dyn_ltree[e*2]!==0)return 0;if(A.dyn_ltree[18]!==0||A.dyn_ltree[20]!==0||A.dyn_ltree[26]!==0)return 1;for(e=32;e<st;e++)if(A.dyn_ltree[e*2]!==0)return 1;return 0},gg=!1,EE=A=>{gg||(sE(),gg=!0),A.l_desc=new wi(A.dyn_ltree,Vg),A.d_desc=new wi(A.dyn_dtree,Zg),A.bl_desc=new wi(A.bl_tree,jg),A.bi_buf=0,A.bi_valid=0,$g(A)},ea=(A,t,e,n)=>{lA(A,(AE<<1)+(n?1:0),3),Aa(A),it(A,e),it(A,~e),e&&A.pending_buf.set(A.window.subarray(t,t+e),A.pending),A.pending+=e},cE=A=>{lA(A,Hg<<1,3),GA(A,Pi,TA),gE(A)},lE=(A,t,e,n)=>{let i,r,s=0;A.level>0?(A.strm.data_type===2&&(A.strm.data_type=BE(A)),Fi(A,A.l_desc),Fi(A,A.d_desc),s=IE(A),i=A.opt_len+3+7>>>3,r=A.static_len+3+7>>>3,r<=i&&(i=r)):i=r=e+5,e+4<=i&&t!==-1?ea(A,t,e,n):A.strategy===4||r===i?(lA(A,(Hg<<1)+(n?1:0),3),ig(A,TA,Xe)):(lA(A,(eE<<1)+(n?1:0),3),CE(A,A.l_desc.max_code+1,A.d_desc.max_code+1,s+1),ig(A,A.dyn_ltree,A.dyn_dtree)),$g(A),n&&Aa(A)},QE=(A,t,e)=>(A.pending_buf[A.sym_buf+A.sym_next++]=t,A.pending_buf[A.sym_buf+A.sym_next++]=t>>8,A.pending_buf[A.sym_buf+A.sym_next++]=e,t===0?A.dyn_ltree[e*2]++:(A.matches++,t--,A.dyn_ltree[(nt[e]+st+1)*2]++,A.dyn_dtree[Wg(t)*2]++),A.sym_next===A.sym_end),hE=EE,fE=ea,dE=lE,uE=QE,wE=cE,pE={_tr_init:hE,_tr_stored_block:fE,_tr_flush_block:dE,_tr_tally:uE,_tr_align:wE},yE=(A,t,e,n)=>{let i=A&65535|0,r=A>>>16&65535|0,s=0;for(;e!==0;){s=e>2e3?2e3:e,e-=s;do i=i+t[n++]|0,r=r+i|0;while(--s);i%=65521,r%=65521}return i|r<<16|0},rt=yE,mE=()=>{let A,t=[];for(var e=0;e<256;e++){A=e;for(var n=0;n<8;n++)A=A&1?3988292384^A>>>1:A>>>1;t[e]=A}return t},DE=new Uint32Array(mE()),SE=(A,t,e,n)=>{let i=DE,r=n+e;A^=-1;for(let s=n;s<r;s++)A=A>>>8^i[(A^t[s])&255];return A^-1},rA=SE,ne={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},pe={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},{_tr_init:NE,_tr_stored_block:Ui,_tr_flush_block:kE,_tr_tally:JA,_tr_align:RE}=pE,{Z_NO_FLUSH:qA,Z_PARTIAL_FLUSH:GE,Z_FULL_FLUSH:xE,Z_FINISH:wA,Z_BLOCK:ag,Z_OK:oA,Z_STREAM_END:sg,Z_STREAM_ERROR:xA,Z_DATA_ERROR:LE,Z_BUF_ERROR:yi,Z_DEFAULT_COMPRESSION:bE,Z_FILTERED:FE,Z_HUFFMAN_ONLY:tn,Z_RLE:UE,Z_FIXED:ME,Z_DEFAULT_STRATEGY:TE,Z_UNKNOWN:YE,Z_DEFLATED:Bn}=pe,_E=9,vE=15,HE=8,KE=29,OE=256,Mi=OE+1+KE,PE=30,JE=19,qE=2*Mi+1,VE=15,O=3,PA=258,LA=PA+O+1,ZE=32,de=42,qi=57,Ti=69,Yi=73,_i=91,vi=103,ee=113,We=666,CA=1,ye=2,ie=3,me=4,jE=3,te=(A,t)=>(A.msg=ne[t],t),Ig=A=>A*2-(A>4?9:0),OA=A=>{let t=A.length;for(;--t>=0;)A[t]=0},WE=A=>{let t,e,n,i=A.w_size;t=A.hash_size,n=t;do e=A.head[--n],A.head[n]=e>=i?e-i:0;while(--t);t=i,n=t;do e=A.prev[--n],A.prev[n]=e>=i?e-i:0;while(--t)},zE=(A,t,e)=>(t<<A.hash_shift^e)&A.hash_mask,VA=zE,fA=A=>{let t=A.state,e=t.pending;e>A.avail_out&&(e=A.avail_out),e!==0&&(A.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),A.next_out),A.next_out+=e,t.pending_out+=e,A.total_out+=e,A.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},dA=(A,t)=>{kE(A,A.block_start>=0?A.block_start:-1,A.strstart-A.block_start,t),A.block_start=A.strstart,fA(A.strm)},V=(A,t)=>{A.pending_buf[A.pending++]=t},je=(A,t)=>{A.pending_buf[A.pending++]=t>>>8&255,A.pending_buf[A.pending++]=t&255},Hi=(A,t,e,n)=>{let i=A.avail_in;return i>n&&(i=n),i===0?0:(A.avail_in-=i,t.set(A.input.subarray(A.next_in,A.next_in+i),e),A.state.wrap===1?A.adler=rt(A.adler,t,i,e):A.state.wrap===2&&(A.adler=rA(A.adler,t,i,e)),A.next_in+=i,A.total_in+=i,i)},ta=(A,t)=>{let e=A.max_chain_length,n=A.strstart,i,r,s=A.prev_length,g=A.nice_match,I=A.strstart>A.w_size-LA?A.strstart-(A.w_size-LA):0,o=A.window,a=A.w_mask,E=A.prev,B=A.strstart+PA,C=o[n+s-1],c=o[n+s];A.prev_length>=A.good_match&&(e>>=2),g>A.lookahead&&(g=A.lookahead);do if(i=t,!(o[i+s]!==c||o[i+s-1]!==C||o[i]!==o[n]||o[++i]!==o[n+1])){n+=2,i++;do;while(o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&o[++n]===o[++i]&&n<B);if(r=PA-(B-n),n=B-PA,r>s){if(A.match_start=t,s=r,r>=g)break;C=o[n+s-1],c=o[n+s]}}while((t=E[t&a])>I&&--e!==0);return s<=A.lookahead?s:A.lookahead},ue=A=>{let t=A.w_size,e,n,i;do{if(n=A.window_size-A.lookahead-A.strstart,A.strstart>=t+(t-LA)&&(A.window.set(A.window.subarray(t,t+t-n),0),A.match_start-=t,A.strstart-=t,A.block_start-=t,A.insert>A.strstart&&(A.insert=A.strstart),WE(A),n+=t),A.strm.avail_in===0)break;if(e=Hi(A.strm,A.window,A.strstart+A.lookahead,n),A.lookahead+=e,A.lookahead+A.insert>=O)for(i=A.strstart-A.insert,A.ins_h=A.window[i],A.ins_h=VA(A,A.ins_h,A.window[i+1]);A.insert&&(A.ins_h=VA(A,A.ins_h,A.window[i+O-1]),A.prev[i&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=i,i++,A.insert--,!(A.lookahead+A.insert<O)););}while(A.lookahead<LA&&A.strm.avail_in!==0)},na=(A,t)=>{let e=A.pending_buf_size-5>A.w_size?A.w_size:A.pending_buf_size-5,n,i,r,s=0,g=A.strm.avail_in;do{if(n=65535,r=A.bi_valid+42>>3,A.strm.avail_out<r||(r=A.strm.avail_out-r,i=A.strstart-A.block_start,n>i+A.strm.avail_in&&(n=i+A.strm.avail_in),n>r&&(n=r),n<e&&(n===0&&t!==wA||t===qA||n!==i+A.strm.avail_in)))break;s=t===wA&&n===i+A.strm.avail_in?1:0,Ui(A,0,0,s),A.pending_buf[A.pending-4]=n,A.pending_buf[A.pending-3]=n>>8,A.pending_buf[A.pending-2]=~n,A.pending_buf[A.pending-1]=~n>>8,fA(A.strm),i&&(i>n&&(i=n),A.strm.output.set(A.window.subarray(A.block_start,A.block_start+i),A.strm.next_out),A.strm.next_out+=i,A.strm.avail_out-=i,A.strm.total_out+=i,A.block_start+=i,n-=i),n&&(Hi(A.strm,A.strm.output,A.strm.next_out,n),A.strm.next_out+=n,A.strm.avail_out-=n,A.strm.total_out+=n)}while(s===0);return g-=A.strm.avail_in,g&&(g>=A.w_size?(A.matches=2,A.window.set(A.strm.input.subarray(A.strm.next_in-A.w_size,A.strm.next_in),0),A.strstart=A.w_size,A.insert=A.strstart):(A.window_size-A.strstart<=g&&(A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,A.insert>A.strstart&&(A.insert=A.strstart)),A.window.set(A.strm.input.subarray(A.strm.next_in-g,A.strm.next_in),A.strstart),A.strstart+=g,A.insert+=g>A.w_size-A.insert?A.w_size-A.insert:g),A.block_start=A.strstart),A.high_water<A.strstart&&(A.high_water=A.strstart),s?me:t!==qA&&t!==wA&&A.strm.avail_in===0&&A.strstart===A.block_start?ye:(r=A.window_size-A.strstart,A.strm.avail_in>r&&A.block_start>=A.w_size&&(A.block_start-=A.w_size,A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,r+=A.w_size,A.insert>A.strstart&&(A.insert=A.strstart)),r>A.strm.avail_in&&(r=A.strm.avail_in),r&&(Hi(A.strm,A.window,A.strstart,r),A.strstart+=r,A.insert+=r>A.w_size-A.insert?A.w_size-A.insert:r),A.high_water<A.strstart&&(A.high_water=A.strstart),r=A.bi_valid+42>>3,r=A.pending_buf_size-r>65535?65535:A.pending_buf_size-r,e=r>A.w_size?A.w_size:r,i=A.strstart-A.block_start,(i>=e||(i||t===wA)&&t!==qA&&A.strm.avail_in===0&&i<=r)&&(n=i>r?r:i,s=t===wA&&A.strm.avail_in===0&&n===i?1:0,Ui(A,A.block_start,n,s),A.block_start+=n,fA(A.strm)),s?ie:CA)},mi=(A,t)=>{let e,n;for(;;){if(A.lookahead<LA){if(ue(A),A.lookahead<LA&&t===qA)return CA;if(A.lookahead===0)break}if(e=0,A.lookahead>=O&&(A.ins_h=VA(A,A.ins_h,A.window[A.strstart+O-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),e!==0&&A.strstart-e<=A.w_size-LA&&(A.match_length=ta(A,e)),A.match_length>=O)if(n=JA(A,A.strstart-A.match_start,A.match_length-O),A.lookahead-=A.match_length,A.match_length<=A.max_lazy_match&&A.lookahead>=O){A.match_length--;do A.strstart++,A.ins_h=VA(A,A.ins_h,A.window[A.strstart+O-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart;while(--A.match_length!==0);A.strstart++}else A.strstart+=A.match_length,A.match_length=0,A.ins_h=A.window[A.strstart],A.ins_h=VA(A,A.ins_h,A.window[A.strstart+1]);else n=JA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++;if(n&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=A.strstart<O-1?A.strstart:O-1,t===wA?(dA(A,!0),A.strm.avail_out===0?ie:me):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:ye},Qe=(A,t)=>{let e,n,i;for(;;){if(A.lookahead<LA){if(ue(A),A.lookahead<LA&&t===qA)return CA;if(A.lookahead===0)break}if(e=0,A.lookahead>=O&&(A.ins_h=VA(A,A.ins_h,A.window[A.strstart+O-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),A.prev_length=A.match_length,A.prev_match=A.match_start,A.match_length=O-1,e!==0&&A.prev_length<A.max_lazy_match&&A.strstart-e<=A.w_size-LA&&(A.match_length=ta(A,e),A.match_length<=5&&(A.strategy===FE||A.match_length===O&&A.strstart-A.match_start>4096)&&(A.match_length=O-1)),A.prev_length>=O&&A.match_length<=A.prev_length){i=A.strstart+A.lookahead-O,n=JA(A,A.strstart-1-A.prev_match,A.prev_length-O),A.lookahead-=A.prev_length-1,A.prev_length-=2;do++A.strstart<=i&&(A.ins_h=VA(A,A.ins_h,A.window[A.strstart+O-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart);while(--A.prev_length!==0);if(A.match_available=0,A.match_length=O-1,A.strstart++,n&&(dA(A,!1),A.strm.avail_out===0))return CA}else if(A.match_available){if(n=JA(A,0,A.window[A.strstart-1]),n&&dA(A,!1),A.strstart++,A.lookahead--,A.strm.avail_out===0)return CA}else A.match_available=1,A.strstart++,A.lookahead--}return A.match_available&&(n=JA(A,0,A.window[A.strstart-1]),A.match_available=0),A.insert=A.strstart<O-1?A.strstart:O-1,t===wA?(dA(A,!0),A.strm.avail_out===0?ie:me):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:ye},XE=(A,t)=>{let e,n,i,r,s=A.window;for(;;){if(A.lookahead<=PA){if(ue(A),A.lookahead<=PA&&t===qA)return CA;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=O&&A.strstart>0&&(i=A.strstart-1,n=s[i],n===s[++i]&&n===s[++i]&&n===s[++i])){r=A.strstart+PA;do;while(n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&i<r);A.match_length=PA-(r-i),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=O?(e=JA(A,1,A.match_length-O),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(e=JA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),e&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=0,t===wA?(dA(A,!0),A.strm.avail_out===0?ie:me):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:ye},$E=(A,t)=>{let e;for(;;){if(A.lookahead===0&&(ue(A),A.lookahead===0)){if(t===qA)return CA;break}if(A.match_length=0,e=JA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,e&&(dA(A,!1),A.strm.avail_out===0))return CA}return A.insert=0,t===wA?(dA(A,!0),A.strm.avail_out===0?ie:me):A.sym_next&&(dA(A,!1),A.strm.avail_out===0)?CA:ye};ze=[new RA(0,0,0,0,na),new RA(4,4,8,4,mi),new RA(4,5,16,8,mi),new RA(4,6,32,32,mi),new RA(4,4,16,16,Qe),new RA(8,16,32,32,Qe),new RA(8,16,128,128,Qe),new RA(8,32,128,256,Qe),new RA(32,128,258,1024,Qe),new RA(32,258,258,4096,Qe)],Ac=A=>{A.window_size=2*A.w_size,OA(A.head),A.max_lazy_match=ze[A.level].max_lazy,A.good_match=ze[A.level].good_length,A.nice_match=ze[A.level].nice_length,A.max_chain_length=ze[A.level].max_chain,A.strstart=0,A.block_start=0,A.lookahead=0,A.insert=0,A.match_length=A.prev_length=O-1,A.match_available=0,A.ins_h=0};It=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.status!==de&&t.status!==qi&&t.status!==Ti&&t.status!==Yi&&t.status!==_i&&t.status!==vi&&t.status!==ee&&t.status!==We?1:0},ia=A=>{if(It(A))return te(A,xA);A.total_in=A.total_out=0,A.data_type=YE;let t=A.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?qi:t.wrap?de:ee,A.adler=t.wrap===2?0:1,t.last_flush=-2,NE(t),oA},ra=A=>{let t=ia(A);return t===oA&&Ac(A.state),t},tc=(A,t)=>It(A)||A.state.wrap!==2?xA:(A.state.gzhead=t,oA),oa=(A,t,e,n,i,r)=>{if(!A)return xA;let s=1;if(t===bE&&(t=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),i<1||i>_E||e!==Bn||n<8||n>15||t<0||t>9||r<0||r>ME||n===8&&s!==1)return te(A,xA);n===8&&(n=9);let g=new ec;return A.state=g,g.strm=A,g.status=de,g.wrap=s,g.gzhead=null,g.w_bits=n,g.w_size=1<<g.w_bits,g.w_mask=g.w_size-1,g.hash_bits=i+7,g.hash_size=1<<g.hash_bits,g.hash_mask=g.hash_size-1,g.hash_shift=~~((g.hash_bits+O-1)/O),g.window=new Uint8Array(g.w_size*2),g.head=new Uint16Array(g.hash_size),g.prev=new Uint16Array(g.w_size),g.lit_bufsize=1<<i+6,g.pending_buf_size=g.lit_bufsize*4,g.pending_buf=new Uint8Array(g.pending_buf_size),g.sym_buf=g.lit_bufsize,g.sym_end=(g.lit_bufsize-1)*3,g.level=t,g.strategy=r,g.method=e,ra(A)},nc=(A,t)=>oa(A,t,Bn,vE,HE,TE),ic=(A,t)=>{if(It(A)||t>ag||t<0)return A?te(A,xA):xA;let e=A.state;if(!A.output||A.avail_in!==0&&!A.input||e.status===We&&t!==wA)return te(A,A.avail_out===0?yi:xA);let n=e.last_flush;if(e.last_flush=t,e.pending!==0){if(fA(A),A.avail_out===0)return e.last_flush=-1,oA}else if(A.avail_in===0&&Ig(t)<=Ig(n)&&t!==wA)return te(A,yi);if(e.status===We&&A.avail_in!==0)return te(A,yi);if(e.status===de&&e.wrap===0&&(e.status=ee),e.status===de){let i=Bn+(e.w_bits-8<<4)<<8,r=-1;if(e.strategy>=tn||e.level<2?r=0:e.level<6?r=1:e.level===6?r=2:r=3,i|=r<<6,e.strstart!==0&&(i|=ZE),i+=31-i%31,je(e,i),e.strstart!==0&&(je(e,A.adler>>>16),je(e,A.adler&65535)),A.adler=1,e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(e.status===qi){if(A.adler=0,V(e,31),V(e,139),V(e,8),e.gzhead)V(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),V(e,e.gzhead.time&255),V(e,e.gzhead.time>>8&255),V(e,e.gzhead.time>>16&255),V(e,e.gzhead.time>>24&255),V(e,e.level===9?2:e.strategy>=tn||e.level<2?4:0),V(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(V(e,e.gzhead.extra.length&255),V(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(A.adler=rA(A.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=Ti;else if(V(e,0),V(e,0),V(e,0),V(e,0),V(e,0),V(e,e.level===9?2:e.strategy>=tn||e.level<2?4:0),V(e,jE),e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(e.status===Ti){if(e.gzhead.extra){let i=e.pending,r=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+r>e.pending_buf_size;){let g=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+g),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex+=g,fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0,r-=g}let s=new Uint8Array(e.gzhead.extra);e.pending_buf.set(s.subarray(e.gzindex,e.gzindex+r),e.pending),e.pending+=r,e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=Yi}if(e.status===Yi){if(e.gzhead.name){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0}e.gzindex<e.gzhead.name.length?r=e.gzhead.name.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=_i}if(e.status===_i){if(e.gzhead.comment){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i)),fA(A),e.pending!==0)return e.last_flush=-1,oA;i=0}e.gzindex<e.gzhead.comment.length?r=e.gzhead.comment.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=rA(A.adler,e.pending_buf,e.pending-i,i))}e.status=vi}if(e.status===vi){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(fA(A),e.pending!==0))return e.last_flush=-1,oA;V(e,A.adler&255),V(e,A.adler>>8&255),A.adler=0}if(e.status=ee,fA(A),e.pending!==0)return e.last_flush=-1,oA}if(A.avail_in!==0||e.lookahead!==0||t!==qA&&e.status!==We){let i=e.level===0?na(e,t):e.strategy===tn?$E(e,t):e.strategy===UE?XE(e,t):ze[e.level].func(e,t);if((i===ie||i===me)&&(e.status=We),i===CA||i===ie)return A.avail_out===0&&(e.last_flush=-1),oA;if(i===ye&&(t===GE?RE(e):t!==ag&&(Ui(e,0,0,!1),t===xE&&(OA(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),fA(A),A.avail_out===0))return e.last_flush=-1,oA}return t!==wA?oA:e.wrap<=0?sg:(e.wrap===2?(V(e,A.adler&255),V(e,A.adler>>8&255),V(e,A.adler>>16&255),V(e,A.adler>>24&255),V(e,A.total_in&255),V(e,A.total_in>>8&255),V(e,A.total_in>>16&255),V(e,A.total_in>>24&255)):(je(e,A.adler>>>16),je(e,A.adler&65535)),fA(A),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?oA:sg)},rc=A=>{if(It(A))return xA;let t=A.state.status;return A.state=null,t===ee?te(A,LE):oA},oc=(A,t)=>{let e=t.length;if(It(A))return xA;let n=A.state,i=n.wrap;if(i===2||i===1&&n.status!==de||n.lookahead)return xA;if(i===1&&(A.adler=rt(A.adler,t,e,0)),n.wrap=0,e>=n.w_size){i===0&&(OA(n.head),n.strstart=0,n.block_start=0,n.insert=0);let I=new Uint8Array(n.w_size);I.set(t.subarray(e-n.w_size,e),0),t=I,e=n.w_size}let r=A.avail_in,s=A.next_in,g=A.input;for(A.avail_in=e,A.next_in=0,A.input=t,ue(n);n.lookahead>=O;){let I=n.strstart,o=n.lookahead-(O-1);do n.ins_h=VA(n,n.ins_h,n.window[I+O-1]),n.prev[I&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=I,I++;while(--o);n.strstart=I,n.lookahead=O-1,ue(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=O-1,n.match_available=0,A.next_in=s,A.input=g,A.avail_in=r,n.wrap=i,oA},gc=nc,ac=oa,sc=ra,Ic=ia,Cc=tc,Bc=ic,Ec=rc,cc=oc,lc="pako deflate (from Nodeca project)",$e={deflateInit:gc,deflateInit2:ac,deflateReset:sc,deflateResetKeep:Ic,deflateSetHeader:Cc,deflate:Bc,deflateEnd:Ec,deflateSetDictionary:cc,deflateInfo:lc},Qc=(A,t)=>Object.prototype.hasOwnProperty.call(A,t),hc=function(A){let t=Array.prototype.slice.call(arguments,1);for(;t.length;){let e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(let n in e)Qc(e,n)&&(A[n]=e[n])}}return A},fc=A=>{let t=0;for(let n=0,i=A.length;n<i;n++)t+=A[n].length;let e=new Uint8Array(t);for(let n=0,i=0,r=A.length;n<r;n++){let s=A[n];e.set(s,i),i+=s.length}return e},En={assign:hc,flattenChunks:fc},ga=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{ga=!1}ot=new Uint8Array(256);for(let A=0;A<256;A++)ot[A]=A>=252?6:A>=248?5:A>=240?4:A>=224?3:A>=192?2:1;ot[254]=ot[254]=1;dc=A=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(A);let t,e,n,i,r,s=A.length,g=0;for(i=0;i<s;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<s&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),g+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(g),r=0,i=0;r<g;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<s&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),e<128?t[r++]=e:e<2048?(t[r++]=192|e>>>6,t[r++]=128|e&63):e<65536?(t[r++]=224|e>>>12,t[r++]=128|e>>>6&63,t[r++]=128|e&63):(t[r++]=240|e>>>18,t[r++]=128|e>>>12&63,t[r++]=128|e>>>6&63,t[r++]=128|e&63);return t},uc=(A,t)=>{if(t<65534&&A.subarray&&ga)return String.fromCharCode.apply(null,A.length===t?A:A.subarray(0,t));let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(A[n]);return e},wc=(A,t)=>{let e=t||A.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(A.subarray(0,t));let n,i,r=new Array(e*2);for(i=0,n=0;n<e;){let s=A[n++];if(s<128){r[i++]=s;continue}let g=ot[s];if(g>4){r[i++]=65533,n+=g-1;continue}for(s&=g===2?31:g===3?15:7;g>1&&n<e;)s=s<<6|A[n++]&63,g--;if(g>1){r[i++]=65533;continue}s<65536?r[i++]=s:(s-=65536,r[i++]=55296|s>>10&1023,r[i++]=56320|s&1023)}return uc(r,i)},pc=(A,t)=>{t=t||A.length,t>A.length&&(t=A.length);let e=t-1;for(;e>=0&&(A[e]&192)===128;)e--;return e<0||e===0?t:e+ot[A[e]]>t?e:t},gt={string2buf:dc,buf2string:wc,utf8border:pc};aa=yc,sa=Object.prototype.toString,{Z_NO_FLUSH:mc,Z_SYNC_FLUSH:Dc,Z_FULL_FLUSH:Sc,Z_FINISH:Nc,Z_OK:In,Z_STREAM_END:kc,Z_DEFAULT_COMPRESSION:Rc,Z_DEFAULT_STRATEGY:Gc,Z_DEFLATED:xc}=pe;Ct.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i,r;if(this.ended)return!1;for(t===~~t?r=t:r=t===!0?Nc:mc,typeof A=="string"?e.input=gt.string2buf(A):sa.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),(r===Dc||r===Sc)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(i=$e.deflate(e,r),i===kc)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),i=$e.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===In;if(e.avail_out===0){this.onData(e.output);continue}if(r>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};Ct.prototype.onData=function(A){this.chunks.push(A)};Ct.prototype.onEnd=function(A){A===In&&(this.result=En.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};Fc=Ct,Uc=Vi,Mc=Lc,Tc=bc,Yc=pe,_c={Deflate:Fc,deflate:Uc,deflateRaw:Mc,gzip:Tc,constants:Yc},nn=16209,vc=16191,Hc=function(t,e){let n,i,r,s,g,I,o,a,E,B,C,c,l,h,u,w,y,f,Q,p,d,S,k,D,G=t.state;n=t.next_in,k=t.input,i=n+(t.avail_in-5),r=t.next_out,D=t.output,s=r-(e-t.avail_out),g=r+(t.avail_out-257),I=G.dmax,o=G.wsize,a=G.whave,E=G.wnext,B=G.window,C=G.hold,c=G.bits,l=G.lencode,h=G.distcode,u=(1<<G.lenbits)-1,w=(1<<G.distbits)-1;A:do{c<15&&(C+=k[n++]<<c,c+=8,C+=k[n++]<<c,c+=8),y=l[C&u];e:for(;;){if(f=y>>>24,C>>>=f,c-=f,f=y>>>16&255,f===0)D[r++]=y&65535;else if(f&16){Q=y&65535,f&=15,f&&(c<f&&(C+=k[n++]<<c,c+=8),Q+=C&(1<<f)-1,C>>>=f,c-=f),c<15&&(C+=k[n++]<<c,c+=8,C+=k[n++]<<c,c+=8),y=h[C&w];t:for(;;){if(f=y>>>24,C>>>=f,c-=f,f=y>>>16&255,f&16){if(p=y&65535,f&=15,c<f&&(C+=k[n++]<<c,c+=8,c<f&&(C+=k[n++]<<c,c+=8)),p+=C&(1<<f)-1,p>I){t.msg="invalid distance too far back",G.mode=nn;break A}if(C>>>=f,c-=f,f=r-s,p>f){if(f=p-f,f>a&&G.sane){t.msg="invalid distance too far back",G.mode=nn;break A}if(d=0,S=B,E===0){if(d+=o-f,f<Q){Q-=f;do D[r++]=B[d++];while(--f);d=r-p,S=D}}else if(E<f){if(d+=o+E-f,f-=E,f<Q){Q-=f;do D[r++]=B[d++];while(--f);if(d=0,E<Q){f=E,Q-=f;do D[r++]=B[d++];while(--f);d=r-p,S=D}}}else if(d+=E-f,f<Q){Q-=f;do D[r++]=B[d++];while(--f);d=r-p,S=D}for(;Q>2;)D[r++]=S[d++],D[r++]=S[d++],D[r++]=S[d++],Q-=3;Q&&(D[r++]=S[d++],Q>1&&(D[r++]=S[d++]))}else{d=r-p;do D[r++]=D[d++],D[r++]=D[d++],D[r++]=D[d++],Q-=3;while(Q>2);Q&&(D[r++]=D[d++],Q>1&&(D[r++]=D[d++]))}}else if((f&64)===0){y=h[(y&65535)+(C&(1<<f)-1)];continue t}else{t.msg="invalid distance code",G.mode=nn;break A}break}}else if((f&64)===0){y=l[(y&65535)+(C&(1<<f)-1)];continue e}else if(f&32){G.mode=vc;break A}else{t.msg="invalid literal/length code",G.mode=nn;break A}break}}while(n<i&&r<g);Q=c>>3,n-=Q,c-=Q<<3,C&=(1<<c)-1,t.next_in=n,t.next_out=r,t.avail_in=n<i?5+(i-n):5-(n-i),t.avail_out=r<g?257+(g-r):257-(r-g),G.hold=C,G.bits=c},he=15,Cg=852,Bg=592,Eg=0,Di=1,cg=2,Kc=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Oc=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Pc=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Jc=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),qc=(A,t,e,n,i,r,s,g)=>{let I=g.bits,o=0,a=0,E=0,B=0,C=0,c=0,l=0,h=0,u=0,w=0,y,f,Q,p,d,S=null,k,D=new Uint16Array(he+1),G=new Uint16Array(he+1),L=null,H,x,N;for(o=0;o<=he;o++)D[o]=0;for(a=0;a<n;a++)D[t[e+a]]++;for(C=I,B=he;B>=1&&D[B]===0;B--);if(C>B&&(C=B),B===0)return i[r++]=1<<24|64<<16|0,i[r++]=1<<24|64<<16|0,g.bits=1,0;for(E=1;E<B&&D[E]===0;E++);for(C<E&&(C=E),h=1,o=1;o<=he;o++)if(h<<=1,h-=D[o],h<0)return-1;if(h>0&&(A===Eg||B!==1))return-1;for(G[1]=0,o=1;o<he;o++)G[o+1]=G[o]+D[o];for(a=0;a<n;a++)t[e+a]!==0&&(s[G[t[e+a]]++]=a);if(A===Eg?(S=L=s,k=20):A===Di?(S=Kc,L=Oc,k=257):(S=Pc,L=Jc,k=0),w=0,a=0,o=E,d=r,c=C,l=0,Q=-1,u=1<<C,p=u-1,A===Di&&u>Cg||A===cg&&u>Bg)return 1;for(;;){H=o-l,s[a]+1<k?(x=0,N=s[a]):s[a]>=k?(x=L[s[a]-k],N=S[s[a]-k]):(x=96,N=0),y=1<<o-l,f=1<<c,E=f;do f-=y,i[d+(w>>l)+f]=H<<24|x<<16|N|0;while(f!==0);for(y=1<<o-1;w&y;)y>>=1;if(y!==0?(w&=y-1,w+=y):w=0,a++,--D[o]===0){if(o===B)break;o=t[e+s[a]]}if(o>C&&(w&p)!==Q){for(l===0&&(l=C),d+=E,c=o-l,h=1<<c;c+l<B&&(h-=D[c+l],!(h<=0));)c++,h<<=1;if(u+=1<<c,A===Di&&u>Cg||A===cg&&u>Bg)return 1;Q=w&p,i[Q]=C<<24|c<<16|d-r|0}}return w!==0&&(i[d+w]=o-l<<24|64<<16|0),g.bits=C,0},At=qc,Vc=0,Ia=1,Ca=2,{Z_FINISH:lg,Z_BLOCK:Zc,Z_TREES:rn,Z_OK:re,Z_STREAM_END:jc,Z_NEED_DICT:Wc,Z_STREAM_ERROR:pA,Z_DATA_ERROR:Ba,Z_MEM_ERROR:Ea,Z_BUF_ERROR:zc,Z_DEFLATED:Qg}=pe,cn=16180,hg=16181,fg=16182,dg=16183,ug=16184,wg=16185,pg=16186,yg=16187,mg=16188,Dg=16189,Cn=16190,MA=16191,Si=16192,Sg=16193,Ni=16194,Ng=16195,kg=16196,Rg=16197,Gg=16198,on=16199,gn=16200,xg=16201,Lg=16202,bg=16203,Fg=16204,Ug=16205,ki=16206,Mg=16207,Tg=16208,$=16209,ca=16210,la=16211,Xc=852,$c=592,Al=15,el=Al,Yg=A=>(A>>>24&255)+(A>>>8&65280)+((A&65280)<<8)+((A&255)<<24);oe=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.mode<cn||t.mode>la?1:0},Qa=A=>{if(oe(A))return pA;let t=A.state;return A.total_in=A.total_out=t.total=0,A.msg="",t.wrap&&(A.adler=t.wrap&1),t.mode=cn,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Xc),t.distcode=t.distdyn=new Int32Array($c),t.sane=1,t.back=-1,re},ha=A=>{if(oe(A))return pA;let t=A.state;return t.wsize=0,t.whave=0,t.wnext=0,Qa(A)},fa=(A,t)=>{let e;if(oe(A))return pA;let n=A.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?pA:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=e,n.wbits=t,ha(A))},da=(A,t)=>{if(!A)return pA;let e=new tl;A.state=e,e.strm=A,e.window=null,e.mode=cn;let n=fa(A,t);return n!==re&&(A.state=null),n},nl=A=>da(A,el),_g=!0,il=A=>{if(_g){Ri=new Int32Array(512),Gi=new Int32Array(32);let t=0;for(;t<144;)A.lens[t++]=8;for(;t<256;)A.lens[t++]=9;for(;t<280;)A.lens[t++]=7;for(;t<288;)A.lens[t++]=8;for(At(Ia,A.lens,0,288,Ri,0,A.work,{bits:9}),t=0;t<32;)A.lens[t++]=5;At(Ca,A.lens,0,32,Gi,0,A.work,{bits:5}),_g=!1}A.lencode=Ri,A.lenbits=9,A.distcode=Gi,A.distbits=5},ua=(A,t,e,n)=>{let i,r=A.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(i=r.wsize-r.wnext,i>n&&(i=n),r.window.set(t.subarray(e-n,e-n+i),r.wnext),n-=i,n?(r.window.set(t.subarray(e-n,e),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=i,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=i))),0},rl=(A,t)=>{let e,n,i,r,s,g,I,o,a,E,B,C,c,l,h=0,u,w,y,f,Q,p,d,S,k=new Uint8Array(4),D,G,L=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(oe(A)||!A.output||!A.input&&A.avail_in!==0)return pA;e=A.state,e.mode===MA&&(e.mode=Si),s=A.next_out,i=A.output,I=A.avail_out,r=A.next_in,n=A.input,g=A.avail_in,o=e.hold,a=e.bits,E=g,B=I,S=re;A:for(;;)switch(e.mode){case cn:if(e.wrap===0){e.mode=Si;break}for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&2&&o===35615){e.wbits===0&&(e.wbits=15),e.check=0,k[0]=o&255,k[1]=o>>>8&255,e.check=rA(e.check,k,2,0),o=0,a=0,e.mode=hg;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((o&255)<<8)+(o>>8))%31){A.msg="incorrect header check",e.mode=$;break}if((o&15)!==Qg){A.msg="unknown compression method",e.mode=$;break}if(o>>>=4,a-=4,d=(o&15)+8,e.wbits===0&&(e.wbits=d),d>15||d>e.wbits){A.msg="invalid window size",e.mode=$;break}e.dmax=1<<e.wbits,e.flags=0,A.adler=e.check=1,e.mode=o&512?Dg:MA,o=0,a=0;break;case hg:for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.flags=o,(e.flags&255)!==Qg){A.msg="unknown compression method",e.mode=$;break}if(e.flags&57344){A.msg="unknown header flags set",e.mode=$;break}e.head&&(e.head.text=o>>8&1),e.flags&512&&e.wrap&4&&(k[0]=o&255,k[1]=o>>>8&255,e.check=rA(e.check,k,2,0)),o=0,a=0,e.mode=fg;case fg:for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.head&&(e.head.time=o),e.flags&512&&e.wrap&4&&(k[0]=o&255,k[1]=o>>>8&255,k[2]=o>>>16&255,k[3]=o>>>24&255,e.check=rA(e.check,k,4,0)),o=0,a=0,e.mode=dg;case dg:for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.head&&(e.head.xflags=o&255,e.head.os=o>>8),e.flags&512&&e.wrap&4&&(k[0]=o&255,k[1]=o>>>8&255,e.check=rA(e.check,k,2,0)),o=0,a=0,e.mode=ug;case ug:if(e.flags&1024){for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.length=o,e.head&&(e.head.extra_len=o),e.flags&512&&e.wrap&4&&(k[0]=o&255,k[1]=o>>>8&255,e.check=rA(e.check,k,2,0)),o=0,a=0}else e.head&&(e.head.extra=null);e.mode=wg;case wg:if(e.flags&1024&&(C=e.length,C>g&&(C=g),C&&(e.head&&(d=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(n.subarray(r,r+C),d)),e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,e.length-=C),e.length))break A;e.length=0,e.mode=pg;case pg:if(e.flags&2048){if(g===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.name+=String.fromCharCode(d));while(d&&C<g);if(e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,d)break A}else e.head&&(e.head.name=null);e.length=0,e.mode=yg;case yg:if(e.flags&4096){if(g===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.comment+=String.fromCharCode(d));while(d&&C<g);if(e.flags&512&&e.wrap&4&&(e.check=rA(e.check,n,C,r)),g-=C,r+=C,d)break A}else e.head&&(e.head.comment=null);e.mode=mg;case mg:if(e.flags&512){for(;a<16;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&4&&o!==(e.check&65535)){A.msg="header crc mismatch",e.mode=$;break}o=0,a=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),A.adler=e.check=0,e.mode=MA;break;case Dg:for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}A.adler=e.check=Yg(o),o=0,a=0,e.mode=Cn;case Cn:if(e.havedict===0)return A.next_out=s,A.avail_out=I,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,Wc;A.adler=e.check=1,e.mode=MA;case MA:if(t===Zc||t===rn)break A;case Si:if(e.last){o>>>=a&7,a-=a&7,e.mode=ki;break}for(;a<3;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}switch(e.last=o&1,o>>>=1,a-=1,o&3){case 0:e.mode=Sg;break;case 1:if(il(e),e.mode=on,t===rn){o>>>=2,a-=2;break A}break;case 2:e.mode=kg;break;case 3:A.msg="invalid block type",e.mode=$}o>>>=2,a-=2;break;case Sg:for(o>>>=a&7,a-=a&7;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if((o&65535)!==(o>>>16^65535)){A.msg="invalid stored block lengths",e.mode=$;break}if(e.length=o&65535,o=0,a=0,e.mode=Ni,t===rn)break A;case Ni:e.mode=Ng;case Ng:if(C=e.length,C){if(C>g&&(C=g),C>I&&(C=I),C===0)break A;i.set(n.subarray(r,r+C),s),g-=C,r+=C,I-=C,s+=C,e.length-=C;break}e.mode=MA;break;case kg:for(;a<14;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.nlen=(o&31)+257,o>>>=5,a-=5,e.ndist=(o&31)+1,o>>>=5,a-=5,e.ncode=(o&15)+4,o>>>=4,a-=4,e.nlen>286||e.ndist>30){A.msg="too many length or distance symbols",e.mode=$;break}e.have=0,e.mode=Rg;case Rg:for(;e.have<e.ncode;){for(;a<3;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.lens[L[e.have++]]=o&7,o>>>=3,a-=3}for(;e.have<19;)e.lens[L[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,D={bits:e.lenbits},S=At(Vc,e.lens,0,19,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid code lengths set",e.mode=$;break}e.have=0,e.mode=Gg;case Gg:for(;e.have<e.nlen+e.ndist;){for(;h=e.lencode[o&(1<<e.lenbits)-1],u=h>>>24,w=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(y<16)o>>>=u,a-=u,e.lens[e.have++]=y;else{if(y===16){for(G=u+2;a<G;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(o>>>=u,a-=u,e.have===0){A.msg="invalid bit length repeat",e.mode=$;break}d=e.lens[e.have-1],C=3+(o&3),o>>>=2,a-=2}else if(y===17){for(G=u+3;a<G;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=u,a-=u,d=0,C=3+(o&7),o>>>=3,a-=3}else{for(G=u+7;a<G;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=u,a-=u,d=0,C=11+(o&127),o>>>=7,a-=7}if(e.have+C>e.nlen+e.ndist){A.msg="invalid bit length repeat",e.mode=$;break}for(;C--;)e.lens[e.have++]=d}}if(e.mode===$)break;if(e.lens[256]===0){A.msg="invalid code -- missing end-of-block",e.mode=$;break}if(e.lenbits=9,D={bits:e.lenbits},S=At(Ia,e.lens,0,e.nlen,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid literal/lengths set",e.mode=$;break}if(e.distbits=6,e.distcode=e.distdyn,D={bits:e.distbits},S=At(Ca,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,D),e.distbits=D.bits,S){A.msg="invalid distances set",e.mode=$;break}if(e.mode=on,t===rn)break A;case on:e.mode=gn;case gn:if(g>=6&&I>=258){A.next_out=s,A.avail_out=I,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,Hc(A,B),s=A.next_out,i=A.output,I=A.avail_out,r=A.next_in,n=A.input,g=A.avail_in,o=e.hold,a=e.bits,e.mode===MA&&(e.back=-1);break}for(e.back=0;h=e.lencode[o&(1<<e.lenbits)-1],u=h>>>24,w=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(w&&(w&240)===0){for(f=u,Q=w,p=y;h=e.lencode[p+((o&(1<<f+Q)-1)>>f)],u=h>>>24,w=h>>>16&255,y=h&65535,!(f+u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=f,a-=f,e.back+=f}if(o>>>=u,a-=u,e.back+=u,e.length=y,w===0){e.mode=Ug;break}if(w&32){e.back=-1,e.mode=MA;break}if(w&64){A.msg="invalid literal/length code",e.mode=$;break}e.extra=w&15,e.mode=xg;case xg:if(e.extra){for(G=e.extra;a<G;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.length+=o&(1<<e.extra)-1,o>>>=e.extra,a-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Lg;case Lg:for(;h=e.distcode[o&(1<<e.distbits)-1],u=h>>>24,w=h>>>16&255,y=h&65535,!(u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if((w&240)===0){for(f=u,Q=w,p=y;h=e.distcode[p+((o&(1<<f+Q)-1)>>f)],u=h>>>24,w=h>>>16&255,y=h&65535,!(f+u<=a);){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}o>>>=f,a-=f,e.back+=f}if(o>>>=u,a-=u,e.back+=u,w&64){A.msg="invalid distance code",e.mode=$;break}e.offset=y,e.extra=w&15,e.mode=bg;case bg:if(e.extra){for(G=e.extra;a<G;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}e.offset+=o&(1<<e.extra)-1,o>>>=e.extra,a-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){A.msg="invalid distance too far back",e.mode=$;break}e.mode=Fg;case Fg:if(I===0)break A;if(C=B-I,e.offset>C){if(C=e.offset-C,C>e.whave&&e.sane){A.msg="invalid distance too far back",e.mode=$;break}C>e.wnext?(C-=e.wnext,c=e.wsize-C):c=e.wnext-C,C>e.length&&(C=e.length),l=e.window}else l=i,c=s-e.offset,C=e.length;C>I&&(C=I),I-=C,e.length-=C;do i[s++]=l[c++];while(--C);e.length===0&&(e.mode=gn);break;case Ug:if(I===0)break A;i[s++]=e.length,I--,e.mode=gn;break;case ki:if(e.wrap){for(;a<32;){if(g===0)break A;g--,o|=n[r++]<<a,a+=8}if(B-=I,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?rA(e.check,i,B,s-B):rt(e.check,i,B,s-B)),B=I,e.wrap&4&&(e.flags?o:Yg(o))!==e.check){A.msg="incorrect data check",e.mode=$;break}o=0,a=0}e.mode=Mg;case Mg:if(e.wrap&&e.flags){for(;a<32;){if(g===0)break A;g--,o+=n[r++]<<a,a+=8}if(e.wrap&4&&o!==(e.total&4294967295)){A.msg="incorrect length check",e.mode=$;break}o=0,a=0}e.mode=Tg;case Tg:S=jc;break A;case $:S=Ba;break A;case ca:return Ea;case la:default:return pA}return A.next_out=s,A.avail_out=I,A.next_in=r,A.avail_in=g,e.hold=o,e.bits=a,(e.wsize||B!==A.avail_out&&e.mode<$&&(e.mode<ki||t!==lg))&&ua(A,A.output,A.next_out,B-A.avail_out),E-=A.avail_in,B-=A.avail_out,A.total_in+=E,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?rA(e.check,i,B,A.next_out-B):rt(e.check,i,B,A.next_out-B)),A.data_type=e.bits+(e.last?64:0)+(e.mode===MA?128:0)+(e.mode===on||e.mode===Ni?256:0),(E===0&&B===0||t===lg)&&S===re&&(S=zc),S},ol=A=>{if(oe(A))return pA;let t=A.state;return t.window&&(t.window=null),A.state=null,re},gl=(A,t)=>{if(oe(A))return pA;let e=A.state;return(e.wrap&2)===0?pA:(e.head=t,t.done=!1,re)},al=(A,t)=>{let e=t.length,n,i,r;return oe(A)||(n=A.state,n.wrap!==0&&n.mode!==Cn)?pA:n.mode===Cn&&(i=1,i=rt(i,t,e,0),i!==n.check)?Ba:(r=ua(A,t,e,e),r?(n.mode=ca,Ea):(n.havedict=1,re))},sl=ha,Il=fa,Cl=Qa,Bl=nl,El=da,cl=rl,ll=ol,Ql=gl,hl=al,fl="pako inflate (from Nodeca project)",YA={inflateReset:sl,inflateReset2:Il,inflateResetKeep:Cl,inflateInit:Bl,inflateInit2:El,inflate:cl,inflateEnd:ll,inflateGetHeader:Ql,inflateSetDictionary:hl,inflateInfo:fl};ul=dl,wa=Object.prototype.toString,{Z_NO_FLUSH:wl,Z_FINISH:pl,Z_OK:at,Z_STREAM_END:xi,Z_NEED_DICT:Li,Z_STREAM_ERROR:yl,Z_DATA_ERROR:vg,Z_MEM_ERROR:ml}=pe;Bt.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i=this.options.dictionary,r,s,g;if(this.ended)return!1;for(t===~~t?s=t:s=t===!0?pl:wl,wa.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),r=YA.inflate(e,s),r===Li&&i&&(r=YA.inflateSetDictionary(e,i),r===at?r=YA.inflate(e,s):r===vg&&(r=Li));e.avail_in>0&&r===xi&&e.state.wrap>0&&A[e.next_in]!==0;)YA.inflateReset(e),r=YA.inflate(e,s);switch(r){case yl:case vg:case Li:case ml:return this.onEnd(r),this.ended=!0,!1}if(g=e.avail_out,e.next_out&&(e.avail_out===0||r===xi))if(this.options.to==="string"){let I=gt.utf8border(e.output,e.next_out),o=e.next_out-I,a=gt.buf2string(e.output,I);e.next_out=o,e.avail_out=n-o,o&&e.output.set(e.output.subarray(I,I+o),0),this.onData(a)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(r===at&&g===0)){if(r===xi)return r=YA.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};Bt.prototype.onData=function(A){this.chunks.push(A)};Bt.prototype.onEnd=function(A){A===at&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=En.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};Sl=Bt,Nl=Zi,kl=Dl,Rl=Zi,Gl=pe,xl={Inflate:Sl,inflate:Nl,inflateRaw:kl,ungzip:Rl,constants:Gl},{Deflate:ru,deflate:ou,deflateRaw:gu,gzip:au}=_c,{Inflate:su,inflate:Ll,inflateRaw:Iu,ungzip:Cu}=xl,ln=Ll});var pa={};DA(pa,{default:()=>Qn});var Qn,ya=EA(()=>{ji();UA();Qn=class extends iA{decodeBlock(t){return ln(new Uint8Array(t)).buffer}}});var ma={};DA(ma,{default:()=>hn});var hn,Da=EA(()=>{UA();hn=class extends iA{decodeBlock(t){let e=new DataView(t),n=[];for(let i=0;i<t.byteLength;++i){let r=e.getInt8(i);if(r<0){let s=e.getUint8(i+1);r=-r;for(let g=0;g<=r;++g)n.push(s);i+=1}else{for(let s=0;s<=r;++s)n.push(e.getUint8(i+s+1));i+=r+1}}return new Uint8Array(n).buffer}}});var Sa=kt((Qu,fn)=>{(function(){var A=(function(){var i={};i.defaultNoDataValue=-34027999387901484e22,i.decode=function(a,E){E=E||{};var B=E.encodedMaskData||E.encodedMaskData===null,C=I(a,E.inputOffset||0,B),c=E.noDataValue!==null?E.noDataValue:i.defaultNoDataValue,l=r(C,E.pixelType||Float32Array,E.encodedMaskData,c,E.returnMask),h={width:C.width,height:C.height,pixelData:l.resultPixels,minValue:l.minValue,maxValue:C.pixels.maxValue,noDataValue:c};return l.resultMask&&(h.maskData=l.resultMask),E.returnEncodedMask&&C.mask&&(h.encodedMaskData=C.mask.bitset?C.mask.bitset:null),E.returnFileInfo&&(h.fileInfo=s(C),E.computeUsedBitDepths&&(h.fileInfo.bitDepths=g(C))),h};var r=function(a,E,B,C,c){var l=0,h=a.pixels.numBlocksX,u=a.pixels.numBlocksY,w=Math.floor(a.width/h),y=Math.floor(a.height/u),f=2*a.maxZError,Q=Number.MAX_VALUE,p;B=B||(a.mask?a.mask.bitset:null);var d,S;d=new E(a.width*a.height),c&&B&&(S=new Uint8Array(a.width*a.height));for(var k=new Float32Array(w*y),D,G,L=0;L<=u;L++){var H=L!==u?y:a.height%u;if(H!==0)for(var x=0;x<=h;x++){var N=x!==h?w:a.width%h;if(N!==0){var F=L*a.width*y+x*w,v=a.width-N,b=a.pixels.blocks[l],T,U,K;b.encoding<2?(b.encoding===0?T=b.rawData:(o(b.stuffedData,b.bitsPerPixel,b.numValidPixels,b.offset,f,k,a.pixels.maxValue),T=k),U=0):b.encoding===2?K=0:K=b.offset;var Z;if(B)for(G=0;G<H;G++){for(F&7&&(Z=B[F>>3],Z<<=F&7),D=0;D<N;D++)F&7||(Z=B[F>>3]),Z&128?(S&&(S[F]=1),p=b.encoding<2?T[U++]:K,Q=Q>p?p:Q,d[F++]=p):(S&&(S[F]=0),d[F++]=C),Z<<=1;F+=v}else if(b.encoding<2)for(G=0;G<H;G++){for(D=0;D<N;D++)p=T[U++],Q=Q>p?p:Q,d[F++]=p;F+=v}else for(Q=Q>K?K:Q,G=0;G<H;G++){for(D=0;D<N;D++)d[F++]=K;F+=v}if(b.encoding===1&&U!==b.numValidPixels)throw"Block and Mask do not match";l++}}}return{resultPixels:d,resultMask:S,minValue:Q}},s=function(a){return{fileIdentifierString:a.fileIdentifierString,fileVersion:a.fileVersion,imageType:a.imageType,height:a.height,width:a.width,maxZError:a.maxZError,eofOffset:a.eofOffset,mask:a.mask?{numBlocksX:a.mask.numBlocksX,numBlocksY:a.mask.numBlocksY,numBytes:a.mask.numBytes,maxValue:a.mask.maxValue}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,numBytes:a.pixels.numBytes,maxValue:a.pixels.maxValue,noDataValue:a.noDataValue}}},g=function(a){for(var E=a.pixels.numBlocksX*a.pixels.numBlocksY,B={},C=0;C<E;C++){var c=a.pixels.blocks[C];c.encoding===0?B.float32=!0:c.encoding===1?B[c.bitsPerPixel]=!0:B[0]=!0}return Object.keys(B)},I=function(a,E,B){var C={},c=new Uint8Array(a,E,10);if(C.fileIdentifierString=String.fromCharCode.apply(null,c),C.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+C.fileIdentifierString;E+=10;var l=new DataView(a,E,24);if(C.fileVersion=l.getInt32(0,!0),C.imageType=l.getInt32(4,!0),C.height=l.getUint32(8,!0),C.width=l.getUint32(12,!0),C.maxZError=l.getFloat64(16,!0),E+=24,!B)if(l=new DataView(a,E,16),C.mask={},C.mask.numBlocksY=l.getUint32(0,!0),C.mask.numBlocksX=l.getUint32(4,!0),C.mask.numBytes=l.getUint32(8,!0),C.mask.maxValue=l.getFloat32(12,!0),E+=16,C.mask.numBytes>0){var h=new Uint8Array(Math.ceil(C.width*C.height/8));l=new DataView(a,E,C.mask.numBytes);var u=l.getInt16(0,!0),w=2,y=0;do{if(u>0)for(;u--;)h[y++]=l.getUint8(w++);else{var f=l.getUint8(w++);for(u=-u;u--;)h[y++]=f}u=l.getInt16(w,!0),w+=2}while(w<C.mask.numBytes);if(u!==-32768||y<h.length)throw"Unexpected end of mask RLE encoding";C.mask.bitset=h,E+=C.mask.numBytes}else(C.mask.numBytes|C.mask.numBlocksY|C.mask.maxValue)===0&&(C.mask.bitset=new Uint8Array(Math.ceil(C.width*C.height/8)));l=new DataView(a,E,16),C.pixels={},C.pixels.numBlocksY=l.getUint32(0,!0),C.pixels.numBlocksX=l.getUint32(4,!0),C.pixels.numBytes=l.getUint32(8,!0),C.pixels.maxValue=l.getFloat32(12,!0),E+=16;var Q=C.pixels.numBlocksX,p=C.pixels.numBlocksY,d=Q+(C.width%Q>0?1:0),S=p+(C.height%p>0?1:0);C.pixels.blocks=new Array(d*S);for(var k=0,D=0;D<S;D++)for(var G=0;G<d;G++){var L=0,H=a.byteLength-E;l=new DataView(a,E,Math.min(10,H));var x={};C.pixels.blocks[k++]=x;var N=l.getUint8(0);if(L++,x.encoding=N&63,x.encoding>3)throw"Invalid block encoding ("+x.encoding+")";if(x.encoding===2){E++;continue}if(N!==0&&N!==2){if(N>>=6,x.offsetType=N,N===2)x.offset=l.getInt8(1),L++;else if(N===1)x.offset=l.getInt16(1,!0),L+=2;else if(N===0)x.offset=l.getFloat32(1,!0),L+=4;else throw"Invalid block offset type";if(x.encoding===1)if(N=l.getUint8(L),L++,x.bitsPerPixel=N&63,N>>=6,x.numValidPixelsType=N,N===2)x.numValidPixels=l.getUint8(L),L++;else if(N===1)x.numValidPixels=l.getUint16(L,!0),L+=2;else if(N===0)x.numValidPixels=l.getUint32(L,!0),L+=4;else throw"Invalid valid pixel count type"}if(E+=L,x.encoding!==3){var F,v;if(x.encoding===0){var b=(C.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";F=new ArrayBuffer(b*4),v=new Uint8Array(F),v.set(new Uint8Array(a,E,b*4));var T=new Float32Array(F);x.rawData=T,E+=b*4}else if(x.encoding===1){var U=Math.ceil(x.numValidPixels*x.bitsPerPixel/8),K=Math.ceil(U/4);F=new ArrayBuffer(K*4),v=new Uint8Array(F),v.set(new Uint8Array(a,E,U)),x.stuffedData=new Uint32Array(F),E+=U}}}return C.eofOffset=E,C},o=function(a,E,B,C,c,l,h){var u=(1<<E)-1,w=0,y,f=0,Q,p,d=Math.ceil((h-C)/c),S=a.length*4-Math.ceil(E*B/8);for(a[a.length-1]<<=8*S,y=0;y<B;y++){if(f===0&&(p=a[w++],f=32),f>=E)Q=p>>>f-E&u,f-=E;else{var k=E-f;Q=(p&u)<<k&u,p=a[w++],f=32-k,Q+=p>>>f}l[y]=Q<d?C+Q*c:h}return l};return i})(),t=(function(){"use strict";var i={unstuff:function(I,o,a,E,B,C,c,l){var h=(1<<a)-1,u=0,w,y=0,f,Q,p,d,S=I.length*4-Math.ceil(a*E/8);if(I[I.length-1]<<=8*S,B)for(w=0;w<E;w++)y===0&&(Q=I[u++],y=32),y>=a?(f=Q>>>y-a&h,y-=a):(p=a-y,f=(Q&h)<<p&h,Q=I[u++],y=32-p,f+=Q>>>y),o[w]=B[f];else for(d=Math.ceil((l-C)/c),w=0;w<E;w++)y===0&&(Q=I[u++],y=32),y>=a?(f=Q>>>y-a&h,y-=a):(p=a-y,f=(Q&h)<<p&h,Q=I[u++],y=32-p,f+=Q>>>y),o[w]=f<d?C+f*c:l},unstuffLUT:function(I,o,a,E,B,C){var c=(1<<o)-1,l=0,h=0,u=0,w=0,y=0,f,Q=[],p=I.length*4-Math.ceil(o*a/8);I[I.length-1]<<=8*p;var d=Math.ceil((C-E)/B);for(h=0;h<a;h++)w===0&&(f=I[l++],w=32),w>=o?(y=f>>>w-o&c,w-=o):(u=o-w,y=(f&c)<<u&c,f=I[l++],w=32-u,y+=f>>>w),Q[h]=y<d?E+y*B:C;return Q.unshift(E),Q},unstuff2:function(I,o,a,E,B,C,c,l){var h=(1<<a)-1,u=0,w,y=0,f=0,Q,p,d;if(B)for(w=0;w<E;w++)y===0&&(p=I[u++],y=32,f=0),y>=a?(Q=p>>>f&h,y-=a,f+=a):(d=a-y,Q=p>>>f&h,p=I[u++],y=32-d,Q|=(p&(1<<d)-1)<<a-d,f=d),o[w]=B[Q];else{var S=Math.ceil((l-C)/c);for(w=0;w<E;w++)y===0&&(p=I[u++],y=32,f=0),y>=a?(Q=p>>>f&h,y-=a,f+=a):(d=a-y,Q=p>>>f&h,p=I[u++],y=32-d,Q|=(p&(1<<d)-1)<<a-d,f=d),o[w]=Q<S?C+Q*c:l}return o},unstuffLUT2:function(I,o,a,E,B,C){var c=(1<<o)-1,l=0,h=0,u=0,w=0,y=0,f=0,Q,p=[],d=Math.ceil((C-E)/B);for(h=0;h<a;h++)w===0&&(Q=I[l++],w=32,f=0),w>=o?(y=Q>>>f&c,w-=o,f+=o):(u=o-w,y=Q>>>f&c,Q=I[l++],w=32-u,y|=(Q&(1<<u)-1)<<o-u,f=u),p[h]=y<d?E+y*B:C;return p.unshift(E),p},originalUnstuff:function(I,o,a,E){var B=(1<<a)-1,C=0,c,l=0,h,u,w,y=I.length*4-Math.ceil(a*E/8);for(I[I.length-1]<<=8*y,c=0;c<E;c++)l===0&&(u=I[C++],l=32),l>=a?(h=u>>>l-a&B,l-=a):(w=a-l,h=(u&B)<<w&B,u=I[C++],l=32-w,h+=u>>>l),o[c]=h;return o},originalUnstuff2:function(I,o,a,E){var B=(1<<a)-1,C=0,c,l=0,h=0,u,w,y;for(c=0;c<E;c++)l===0&&(w=I[C++],l=32,h=0),l>=a?(u=w>>>h&B,l-=a,h+=a):(y=a-l,u=w>>>h&B,w=I[C++],l=32-y,u|=(w&(1<<y)-1)<<a-y,h=y),o[c]=u;return o}},r={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(I){for(var o=65535,a=65535,E=I.length,B=Math.floor(E/2),C=0;B;){var c=B>=359?359:B;B-=c;do o+=I[C++]<<8,a+=o+=I[C++];while(--c);o=(o&65535)+(o>>>16),a=(a&65535)+(a>>>16)}return E&1&&(a+=o+=I[C]<<8),o=(o&65535)+(o>>>16),a=(a&65535)+(a>>>16),(a<<16|o)>>>0},readHeaderInfo:function(I,o){var a=o.ptr,E=new Uint8Array(I,a,6),B={};if(B.fileIdentifierString=String.fromCharCode.apply(null,E),B.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+B.fileIdentifierString;a+=6;var C=new DataView(I,a,8),c=C.getInt32(0,!0);B.fileVersion=c,a+=4,c>=3&&(B.checksum=C.getUint32(4,!0),a+=4),C=new DataView(I,a,12),B.height=C.getUint32(0,!0),B.width=C.getUint32(4,!0),a+=8,c>=4?(B.numDims=C.getUint32(8,!0),a+=4):B.numDims=1,C=new DataView(I,a,40),B.numValidPixel=C.getUint32(0,!0),B.microBlockSize=C.getInt32(4,!0),B.blobSize=C.getInt32(8,!0),B.imageType=C.getInt32(12,!0),B.maxZError=C.getFloat64(16,!0),B.zMin=C.getFloat64(24,!0),B.zMax=C.getFloat64(32,!0),a+=40,o.headerInfo=B,o.ptr=a;var l,h;if(c>=3&&(h=c>=4?52:48,l=this.computeChecksumFletcher32(new Uint8Array(I,a-h,B.blobSize-14)),l!==B.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(I,o){var a=o.headerInfo,E=this.getDataTypeArray(a.imageType),B=a.numDims*this.getDataTypeSize(a.imageType),C=this.readSubArray(I,o.ptr,E,B),c=this.readSubArray(I,o.ptr+B,E,B);o.ptr+=2*B;var l,h=!0;for(l=0;l<a.numDims;l++)if(C[l]!==c[l]){h=!1;break}return a.minValues=C,a.maxValues=c,h},readSubArray:function(I,o,a,E){var B;if(a===Uint8Array)B=new Uint8Array(I,o,E);else{var C=new ArrayBuffer(E),c=new Uint8Array(C);c.set(new Uint8Array(I,o,E)),B=new a(C)}return B},readMask:function(I,o){var a=o.ptr,E=o.headerInfo,B=E.width*E.height,C=E.numValidPixel,c=new DataView(I,a,4),l={};if(l.numBytes=c.getUint32(0,!0),a+=4,(C===0||B===C)&&l.numBytes!==0)throw"invalid mask";var h,u;if(C===0)h=new Uint8Array(Math.ceil(B/8)),l.bitset=h,u=new Uint8Array(B),o.pixels.resultMask=u,a+=l.numBytes;else if(l.numBytes>0){h=new Uint8Array(Math.ceil(B/8)),c=new DataView(I,a,l.numBytes);var w=c.getInt16(0,!0),y=2,f=0,Q=0;do{if(w>0)for(;w--;)h[f++]=c.getUint8(y++);else for(Q=c.getUint8(y++),w=-w;w--;)h[f++]=Q;w=c.getInt16(y,!0),y+=2}while(y<l.numBytes);if(w!==-32768||f<h.length)throw"Unexpected end of mask RLE encoding";u=new Uint8Array(B);var p=0,d=0;for(d=0;d<B;d++)d&7?(p=h[d>>3],p<<=d&7):p=h[d>>3],p&128&&(u[d]=1);o.pixels.resultMask=u,l.bitset=h,a+=l.numBytes}return o.ptr=a,o.mask=l,!0},readDataOneSweep:function(I,o,a,E){var B=o.ptr,C=o.headerInfo,c=C.numDims,l=C.width*C.height,h=C.imageType,u=C.numValidPixel*r.getDataTypeSize(h)*c,w,y=o.pixels.resultMask;if(a===Uint8Array)w=new Uint8Array(I,B,u);else{var f=new ArrayBuffer(u),Q=new Uint8Array(f);Q.set(new Uint8Array(I,B,u)),w=new a(f)}if(w.length===l*c)E?o.pixels.resultPixels=r.swapDimensionOrder(w,l,c,a,!0):o.pixels.resultPixels=w;else{o.pixels.resultPixels=new a(l*c);var p=0,d=0,S=0,k=0;if(c>1){if(E){for(d=0;d<l;d++)if(y[d])for(k=d,S=0;S<c;S++,k+=l)o.pixels.resultPixels[k]=w[p++]}else for(d=0;d<l;d++)if(y[d])for(k=d*c,S=0;S<c;S++)o.pixels.resultPixels[k+S]=w[p++]}else for(d=0;d<l;d++)y[d]&&(o.pixels.resultPixels[d]=w[p++])}return B+=u,o.ptr=B,!0},readHuffmanTree:function(I,o){var a=this.HUFFMAN_LUT_BITS_MAX,E=new DataView(I,o.ptr,16);o.ptr+=16;var B=E.getInt32(0,!0);if(B<2)throw"unsupported Huffman version";var C=E.getInt32(4,!0),c=E.getInt32(8,!0),l=E.getInt32(12,!0);if(c>=l)return!1;var h=new Uint32Array(l-c);r.decodeBits(I,o,h);var u=[],w,y,f,Q;for(w=c;w<l;w++)y=w-(w<C?0:C),u[y]={first:h[w-c],second:null};var p=I.byteLength-o.ptr,d=Math.ceil(p/4),S=new ArrayBuffer(d*4),k=new Uint8Array(S);k.set(new Uint8Array(I,o.ptr,p));var D=new Uint32Array(S),G=0,L,H=0;for(L=D[0],w=c;w<l;w++)y=w-(w<C?0:C),Q=u[y].first,Q>0&&(u[y].second=L<<G>>>32-Q,32-G>=Q?(G+=Q,G===32&&(G=0,H++,L=D[H])):(G+=Q-32,H++,L=D[H],u[y].second|=L>>>32-G));var x=0,N=0,F=new s;for(w=0;w<u.length;w++)u[w]!==void 0&&(x=Math.max(x,u[w].first));x>=a?N=a:N=x;var v=[],b,T,U,K,Z,z;for(w=c;w<l;w++)if(y=w-(w<C?0:C),Q=u[y].first,Q>0)if(b=[Q,y],Q<=N)for(T=u[y].second<<N-Q,U=1<<N-Q,f=0;f<U;f++)v[T|f]=b;else for(T=u[y].second,z=F,K=Q-1;K>=0;K--)Z=T>>>K&1,Z?(z.right||(z.right=new s),z=z.right):(z.left||(z.left=new s),z=z.left),K===0&&!z.val&&(z.val=b[1]);return{decodeLut:v,numBitsLUTQick:N,numBitsLUT:x,tree:F,stuffedData:D,srcPtr:H,bitPos:G}},readHuffman:function(I,o,a,E){var B=o.headerInfo,C=B.numDims,c=o.headerInfo.height,l=o.headerInfo.width,h=l*c,u=this.readHuffmanTree(I,o),w=u.decodeLut,y=u.tree,f=u.stuffedData,Q=u.srcPtr,p=u.bitPos,d=u.numBitsLUTQick,S=u.numBitsLUT,k=o.headerInfo.imageType===0?128:0,D,G,L,H=o.pixels.resultMask,x,N,F,v,b,T,U,K=0;p>0&&(Q++,p=0);var Z=f[Q],z=o.encodeMode===1,M=new a(h*C),_=M,Y;if(C<2||z){for(Y=0;Y<C;Y++)if(C>1&&(_=new a(M.buffer,h*Y,h),K=0),o.headerInfo.numValidPixel===l*c)for(T=0,v=0;v<c;v++)for(b=0;b<l;b++,T++){if(G=0,x=Z<<p>>>32-d,N=x,32-p<d&&(x|=f[Q+1]>>>64-p-d,N=x),w[N])G=w[N][1],p+=w[N][0];else for(x=Z<<p>>>32-S,N=x,32-p<S&&(x|=f[Q+1]>>>64-p-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){G=D.val,p=p+U+1;break}p>=32&&(p-=32,Q++,Z=f[Q]),L=G-k,z?(b>0?L+=K:v>0?L+=_[T-l]:L+=K,L&=255,_[T]=L,K=L):_[T]=L}else for(T=0,v=0;v<c;v++)for(b=0;b<l;b++,T++)if(H[T]){if(G=0,x=Z<<p>>>32-d,N=x,32-p<d&&(x|=f[Q+1]>>>64-p-d,N=x),w[N])G=w[N][1],p+=w[N][0];else for(x=Z<<p>>>32-S,N=x,32-p<S&&(x|=f[Q+1]>>>64-p-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){G=D.val,p=p+U+1;break}p>=32&&(p-=32,Q++,Z=f[Q]),L=G-k,z?(b>0&&H[T-1]?L+=K:v>0&&H[T-l]?L+=_[T-l]:L+=K,L&=255,_[T]=L,K=L):_[T]=L}}else for(T=0,v=0;v<c;v++)for(b=0;b<l;b++)if(T=v*l+b,!H||H[T])for(Y=0;Y<C;Y++,T+=h){if(G=0,x=Z<<p>>>32-d,N=x,32-p<d&&(x|=f[Q+1]>>>64-p-d,N=x),w[N])G=w[N][1],p+=w[N][0];else for(x=Z<<p>>>32-S,N=x,32-p<S&&(x|=f[Q+1]>>>64-p-S,N=x),D=y,U=0;U<S;U++)if(F=x>>>S-U-1&1,D=F?D.right:D.left,!(D.left||D.right)){G=D.val,p=p+U+1;break}p>=32&&(p-=32,Q++,Z=f[Q]),L=G-k,_[T]=L}o.ptr=o.ptr+(Q+1)*4+(p>0?4:0),o.pixels.resultPixels=M,C>1&&!E&&(o.pixels.resultPixels=r.swapDimensionOrder(M,h,C,a))},decodeBits:function(I,o,a,E,B){{var C=o.headerInfo,c=C.fileVersion,l=0,h=I.byteLength-o.ptr>=5?5:I.byteLength-o.ptr,u=new DataView(I,o.ptr,h),w=u.getUint8(0);l++;var y=w>>6,f=y===0?4:3-y,Q=(w&32)>0,p=w&31,d=0;if(f===1)d=u.getUint8(l),l++;else if(f===2)d=u.getUint16(l,!0),l+=2;else if(f===4)d=u.getUint32(l,!0),l+=4;else throw"Invalid valid pixel count type";var S=2*C.maxZError,k,D,G,L,H,x,N,F,v,b,T=C.numDims>1?C.maxValues[B]:C.zMax;if(Q){for(o.counter.lut++,F=u.getUint8(l),v=p,l++,L=Math.ceil((F-1)*p/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),G=new Uint8Array(D),o.ptr+=l,G.set(new Uint8Array(I,o.ptr,L)),N=new Uint32Array(D),o.ptr+=L,b=0;F-1>>>b;)b++;L=Math.ceil(d*b/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),G=new Uint8Array(D),G.set(new Uint8Array(I,o.ptr,L)),k=new Uint32Array(D),o.ptr+=L,c>=3?x=i.unstuffLUT2(N,p,F-1,E,S,T):x=i.unstuffLUT(N,p,F-1,E,S,T),c>=3?i.unstuff2(k,a,b,d,x):i.unstuff(k,a,b,d,x)}else o.counter.bitstuffer++,b=p,o.ptr+=l,b>0&&(L=Math.ceil(d*b/8),H=Math.ceil(L/4),D=new ArrayBuffer(H*4),G=new Uint8Array(D),G.set(new Uint8Array(I,o.ptr,L)),k=new Uint32Array(D),o.ptr+=L,c>=3?E==null?i.originalUnstuff2(k,a,b,d):i.unstuff2(k,a,b,d,!1,E,S,T):E==null?i.originalUnstuff(k,a,b,d):i.unstuff(k,a,b,d,!1,E,S,T))}},readTiles:function(I,o,a,E){var B=o.headerInfo,C=B.width,c=B.height,l=C*c,h=B.microBlockSize,u=B.imageType,w=r.getDataTypeSize(u),y=Math.ceil(C/h),f=Math.ceil(c/h);o.pixels.numBlocksY=f,o.pixels.numBlocksX=y,o.pixels.ptr=0;var Q=0,p=0,d=0,S=0,k=0,D=0,G=0,L=0,H=0,x=0,N=0,F=0,v=0,b=0,T=0,U=0,K,Z,z,M,_,Y,J=new a(h*h),q=c%h||h,AA=C%h||h,tA,P,aA=B.numDims,gA,SA=o.pixels.resultMask,uA=o.pixels.resultPixels,yI=B.fileVersion,Kr=yI>=5?14:15,HA,On=B.zMax,KA;for(d=0;d<f;d++)for(k=d!==f-1?h:q,S=0;S<y;S++)for(D=S!==y-1?h:AA,N=d*C*h+S*h,F=C-D,gA=0;gA<aA;gA++){if(aA>1?(KA=uA,N=d*C*h+S*h,uA=new a(o.pixels.resultPixels.buffer,l*gA*w,l),On=B.maxValues[gA]):KA=null,G=I.byteLength-o.ptr,K=new DataView(I,o.ptr,Math.min(10,G)),Z={},U=0,L=K.getUint8(0),U++,HA=B.fileVersion>=5?L&4:0,H=L>>6&255,x=L>>2&Kr,x!==(S*h>>3&Kr)||HA&&gA===0)throw"integrity issue";if(Y=L&3,Y>3)throw o.ptr+=U,"Invalid block encoding ("+Y+")";if(Y===2){if(HA)if(SA)for(Q=0;Q<k;Q++)for(p=0;p<D;p++)SA[N]&&(uA[N]=KA[N]),N++;else for(Q=0;Q<k;Q++)for(p=0;p<D;p++)uA[N]=KA[N],N++;o.counter.constant++,o.ptr+=U;continue}else if(Y===0){if(HA)throw"integrity issue";if(o.counter.uncompressed++,o.ptr+=U,v=k*D*w,b=I.byteLength-o.ptr,v=v<b?v:b,z=new ArrayBuffer(v%w===0?v:v+w-v%w),M=new Uint8Array(z),M.set(new Uint8Array(I,o.ptr,v)),_=new a(z),T=0,SA)for(Q=0;Q<k;Q++){for(p=0;p<D;p++)SA[N]&&(uA[N]=_[T++]),N++;N+=F}else for(Q=0;Q<k;Q++){for(p=0;p<D;p++)uA[N++]=_[T++];N+=F}o.ptr+=T*w}else if(tA=r.getDataTypeUsed(HA&&u<6?4:u,H),P=r.getOnePixel(Z,U,tA,K),U+=r.getDataTypeSize(tA),Y===3)if(o.ptr+=U,o.counter.constantoffset++,SA)for(Q=0;Q<k;Q++){for(p=0;p<D;p++)SA[N]&&(uA[N]=HA?Math.min(On,KA[N]+P):P),N++;N+=F}else for(Q=0;Q<k;Q++){for(p=0;p<D;p++)uA[N]=HA?Math.min(On,KA[N]+P):P,N++;N+=F}else if(o.ptr+=U,r.decodeBits(I,o,J,P,gA),U=0,HA)if(SA)for(Q=0;Q<k;Q++){for(p=0;p<D;p++)SA[N]&&(uA[N]=J[U++]+KA[N]),N++;N+=F}else for(Q=0;Q<k;Q++){for(p=0;p<D;p++)uA[N]=J[U++]+KA[N],N++;N+=F}else if(SA)for(Q=0;Q<k;Q++){for(p=0;p<D;p++)SA[N]&&(uA[N]=J[U++]),N++;N+=F}else for(Q=0;Q<k;Q++){for(p=0;p<D;p++)uA[N++]=J[U++];N+=F}}aA>1&&!E&&(o.pixels.resultPixels=r.swapDimensionOrder(o.pixels.resultPixels,l,aA,a))},formatFileInfo:function(I){return{fileIdentifierString:I.headerInfo.fileIdentifierString,fileVersion:I.headerInfo.fileVersion,imageType:I.headerInfo.imageType,height:I.headerInfo.height,width:I.headerInfo.width,numValidPixel:I.headerInfo.numValidPixel,microBlockSize:I.headerInfo.microBlockSize,blobSize:I.headerInfo.blobSize,maxZError:I.headerInfo.maxZError,pixelType:r.getPixelType(I.headerInfo.imageType),eofOffset:I.eofOffset,mask:I.mask?{numBytes:I.mask.numBytes}:null,pixels:{numBlocksX:I.pixels.numBlocksX,numBlocksY:I.pixels.numBlocksY,maxValue:I.headerInfo.zMax,minValue:I.headerInfo.zMin,noDataValue:I.noDataValue}}},constructConstantSurface:function(I,o){var a=I.headerInfo.zMax,E=I.headerInfo.zMin,B=I.headerInfo.maxValues,C=I.headerInfo.numDims,c=I.headerInfo.height*I.headerInfo.width,l=0,h=0,u=0,w=I.pixels.resultMask,y=I.pixels.resultPixels;if(w)if(C>1){if(o)for(l=0;l<C;l++)for(u=l*c,a=B[l],h=0;h<c;h++)w[h]&&(y[u+h]=a);else for(h=0;h<c;h++)if(w[h])for(u=h*C,l=0;l<C;l++)y[u+C]=B[l]}else for(h=0;h<c;h++)w[h]&&(y[h]=a);else if(C>1&&E!==a)if(o)for(l=0;l<C;l++)for(u=l*c,a=B[l],h=0;h<c;h++)y[u+h]=a;else for(h=0;h<c;h++)for(u=h*C,l=0;l<C;l++)y[u+l]=B[l];else for(h=0;h<c*C;h++)y[h]=a},getDataTypeArray:function(I){var o;switch(I){case 0:o=Int8Array;break;case 1:o=Uint8Array;break;case 2:o=Int16Array;break;case 3:o=Uint16Array;break;case 4:o=Int32Array;break;case 5:o=Uint32Array;break;case 6:o=Float32Array;break;case 7:o=Float64Array;break;default:o=Float32Array}return o},getPixelType:function(I){var o;switch(I){case 0:o="S8";break;case 1:o="U8";break;case 2:o="S16";break;case 3:o="U16";break;case 4:o="S32";break;case 5:o="U32";break;case 6:o="F32";break;case 7:o="F64";break;default:o="F32"}return o},isValidPixelValue:function(I,o){if(o==null)return!1;var a;switch(I){case 0:a=o>=-128&&o<=127;break;case 1:a=o>=0&&o<=255;break;case 2:a=o>=-32768&&o<=32767;break;case 3:a=o>=0&&o<=65536;break;case 4:a=o>=-2147483648&&o<=2147483647;break;case 5:a=o>=0&&o<=4294967296;break;case 6:a=o>=-34027999387901484e22&&o<=34027999387901484e22;break;case 7:a=o>=-17976931348623157e292&&o<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(I){var o=0;switch(I){case 0:case 1:o=1;break;case 2:case 3:o=2;break;case 4:case 5:case 6:o=4;break;case 7:o=8;break;default:o=I}return o},getDataTypeUsed:function(I,o){var a=I;switch(I){case 2:case 4:a=I-o;break;case 3:case 5:a=I-2*o;break;case 6:o===0?a=I:o===1?a=2:a=1;break;case 7:o===0?a=I:a=I-2*o+1;break;default:a=I;break}return a},getOnePixel:function(I,o,a,E){var B=0;switch(a){case 0:B=E.getInt8(o);break;case 1:B=E.getUint8(o);break;case 2:B=E.getInt16(o,!0);break;case 3:B=E.getUint16(o,!0);break;case 4:B=E.getInt32(o,!0);break;case 5:B=E.getUInt32(o,!0);break;case 6:B=E.getFloat32(o,!0);break;case 7:B=E.getFloat64(o,!0);break;default:throw"the decoder does not understand this pixel type"}return B},swapDimensionOrder:function(I,o,a,E,B){var C=0,c=0,l=0,h=0,u=I;if(a>1)if(u=new E(o*a),B)for(C=0;C<o;C++)for(h=C,l=0;l<a;l++,h+=o)u[h]=I[c++];else for(C=0;C<o;C++)for(h=C,l=0;l<a;l++,h+=o)u[c++]=I[h];return u}},s=function(I,o,a){this.val=I,this.left=o,this.right=a},g={decode:function(I,o){o=o||{};var a=o.noDataValue,E=0,B={};if(B.ptr=o.inputOffset||0,B.pixels={},!!r.readHeaderInfo(I,B)){var C=B.headerInfo,c=C.fileVersion,l=r.getDataTypeArray(C.imageType);if(c>5)throw"unsupported lerc version 2."+c;r.readMask(I,B),C.numValidPixel!==C.width*C.height&&!B.pixels.resultMask&&(B.pixels.resultMask=o.maskData);var h=C.width*C.height;B.pixels.resultPixels=new l(h*C.numDims),B.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u=!o.returnPixelInterleavedDims;if(C.numValidPixel!==0)if(C.zMax===C.zMin)r.constructConstantSurface(B,u);else if(c>=4&&r.checkMinMaxRanges(I,B))r.constructConstantSurface(B,u);else{var w=new DataView(I,B.ptr,2),y=w.getUint8(0);if(B.ptr++,y)r.readDataOneSweep(I,B,l,u);else if(c>1&&C.imageType<=1&&Math.abs(C.maxZError-.5)<1e-5){var f=w.getUint8(1);if(B.ptr++,B.encodeMode=f,f>2||c<4&&f>1)throw"Invalid Huffman flag "+f;f?r.readHuffman(I,B,l,u):r.readTiles(I,B,l,u)}else r.readTiles(I,B,l,u)}B.eofOffset=B.ptr;var Q;o.inputOffset?(Q=B.headerInfo.blobSize+o.inputOffset-B.ptr,Math.abs(Q)>=1&&(B.eofOffset=o.inputOffset+B.headerInfo.blobSize)):(Q=B.headerInfo.blobSize-B.ptr,Math.abs(Q)>=1&&(B.eofOffset=B.headerInfo.blobSize));var p={width:C.width,height:C.height,pixelData:B.pixels.resultPixels,minValue:C.zMin,maxValue:C.zMax,validPixelCount:C.numValidPixel,dimCount:C.numDims,dimStats:{minValues:C.minValues,maxValues:C.maxValues},maskData:B.pixels.resultMask};if(B.pixels.resultMask&&r.isValidPixelValue(C.imageType,a)){var d=B.pixels.resultMask;for(E=0;E<h;E++)d[E]||(p.pixelData[E]=a);p.noDataValue=a}return B.noDataValue=a,o.returnFileInfo&&(p.fileInfo=r.formatFileInfo(B)),p}},getBandCount:function(I){var o=0,a=0,E={};for(E.ptr=0,E.pixels={};a<I.byteLength-58;)r.readHeaderInfo(I,E),a+=E.headerInfo.blobSize,o++,E.ptr=a;return o}};return g})(),e=(function(){var i=new ArrayBuffer(4),r=new Uint8Array(i),s=new Uint32Array(i);return s[0]=1,r[0]===1})(),n={decode:function(i,r){if(!e)throw"Big endian system is not supported.";r=r||{};var s=r.inputOffset||0,g=new Uint8Array(i,s,10),I=String.fromCharCode.apply(null,g),o,a;if(I.trim()==="CntZImage")o=A,a=1;else if(I.substring(0,5)==="Lerc2")o=t,a=2;else throw"Unexpected file identifier string: "+I;for(var E=0,B=i.byteLength-10,C,c=[],l,h,u={width:0,height:0,pixels:[],pixelType:r.pixelType,mask:null,statistics:[]},w=0;s<B;){var y=o.decode(i,{inputOffset:s,encodedMaskData:C,maskData:h,returnMask:E===0,returnEncodedMask:E===0,returnFileInfo:!0,returnPixelInterleavedDims:r.returnPixelInterleavedDims,pixelType:r.pixelType||null,noDataValue:r.noDataValue||null});s=y.fileInfo.eofOffset,h=y.maskData,E===0&&(C=y.encodedMaskData,u.width=y.width,u.height=y.height,u.dimCount=y.dimCount||1,u.pixelType=y.pixelType||y.fileInfo.pixelType,u.mask=h),a>1&&(h&&c.push(h),y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&w++),E++,u.pixels.push(y.pixelData),u.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}var f,Q,p;if(a>1&&w>1){for(p=u.width*u.height,u.bandMasks=c,h=new Uint8Array(p),h.set(c[0]),f=1;f<c.length;f++)for(l=c[f],Q=0;Q<p;Q++)h[Q]=h[Q]&l[Q];u.maskData=h}return u}};typeof define=="function"&&define.amd?define([],function(){return n}):typeof fn<"u"&&fn.exports?fn.exports=n:this.Lerc=n})()});var Et,_A,zi,Wi,dn,Na,ka=EA(()=>{Wi={env:{emscripten_notify_memory_growth:A=>{zi=new Uint8Array(_A.exports.memory.buffer)}}},dn=class{init(){return Et||(typeof fetch<"u"?Et=fetch(`data:application/wasm;base64,${Na}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Wi)).then(this._init):Et=WebAssembly.instantiate(Buffer.from(Na,"base64"),Wi).then(this._init),Et)}_init(t){_A=t.instance,Wi.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!_A)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=_A.exports.malloc(n);zi.set(t,i),e=e||Number(_A.exports.ZSTD_findDecompressedSize(i,n));let r=_A.exports.malloc(e),s=_A.exports.ZSTD_decompress(r,e,i,n),g=zi.slice(r,r+s);return _A.exports.free(i),_A.exports.free(r),g}},Na="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AikACDcACCAHIDo3AAAgEUEZSA0BIARBGGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgCkkNAAsMAQsCQAJAIAUoAswCIhEgBUHgAWogJUEHcUEMbGoiDygCACICaiIHIBxLDQAgCSAPKAIEIgogAmoiBmogG0sNACAGQSBqIBQgCWtNDQELIAUgDygCCDYCoAEgBSAPKQIANwOYASAJIBQgBUGYAWogBUHMAmogHCALIBcgIhAgIQYMAQsgAiAJaiEEIA8oAgghFSARKQAAITogCSARKQAINwAIIAkgOjcAAAJAIAJBEUkNACARKQAQITogCSARKQAYNwAYIAkgOjcAECACQRBrQRFIDQAgEUEQaiECIAlBIGohEgNAIAIpABAhOiASIAIpABg3AAggEiA6NwAAIAIpACAhOiASIAIpACg3ABggEiA6NwAQIAJBIGohAiASQSBqIhIgBEkNAAsLIAQgFWshAiAFIAc2AswCIAQgC2sgFUkEQCAVIAQgF2tLDQwgIiAiIAIgC2siD2oiByAKak8EQCAKRQ0CIAQgByAK/AoAAAwCC0EAIA9rIgIEQCAEIAcgAvwKAAALIAogD2ohCiAEIA9rIQQgCyECCyAVQRBPBEAgAikAACE6IAQgAikACDcACCAEIDo3AAAgCkERSA0BIAQgCmohByAEQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAELAkAgFUEHTQRAIAQgAi0AADoAACAEIAItAAE6AAEgBCACLQACOgACIAQgAi0AAzoAAyAEIAIgFUECdCIHQeAaaigCAGoiAigAADYABCACIAdBgBtqKAIAayECDAELIAQgAikAADcAAAsgCkEJSQ0AIAQgCmohDyAEQQhqIgcgAkEIaiICa0EPTARAA0AgByACKQAANwAAIAJBCGohAiAHQQhqIgcgD0kNAAwCCwALIAIpAAAhOiAHIAIpAAg3AAggByA6NwAAIApBGUgNACAEQRhqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIA9JDQALCyAGQYh/SwRAIAYhAwwLCyAFQeABaiAlQQdxQQxsaiICIA02AgggAiAMNgIEIAIgEDYCAAsgBiAJaiEJICVBAWohJSAQIC1qIAxqIS0MAQsLIAUoArABIAUoArQBRw0HIAUoAqwBQSBHDQcgDiAoayEQA0ACQCAOIBBMBEBBACECA0AgAkEDRg0CIDIgAkECdCIDaiADICZqKAIANgIAIAJBAWohAgwACwALIAVB4AFqIBBBB3FBDGxqIQoCfwJAIAgoAoTsAUECRgRAIAUoAswCIg8gCigCACIEaiIHIAgoAoDsASICSwRAIAIgD0cEQCACIA9rIgIgFCAJa0sNCyAJIA8gAhAfIAogBCACayIENgIAIAIgCWohCQsgBSAWNgLMAiAIQQA2AoTsAQJAAkACQCAEQYCABEoNACAJIAooAgQiDSAEaiIGaiAbSw0AIAZBIGogFCAJa00NAQsgBSAKKAIINgJQIAUgCikCADcDSCAJIBQgBUHIAGogBUHMAmogGSALIBcgIhAgIQYMAQsgBCAWaiEHIAQgCWohDCAKKAIIIQogFikAACE6IAkgFikACDcACCAJIDo3AAACQCAEQRFJDQAgHikAACE6IAkgHikACDcAGCAJIDo3ABAgBEEQa0ERSA0AIAlBIGohAiAeIQQDQCAEKQAQITogAiAEKQAYNwAIIAIgOjcAACAEKQAgITogAiAEKQAoNwAYIAIgOjcAECAEQSBqIQQgAkEgaiICIAxJDQALCyAMIAprIQIgBSAHNgLMAiAMIAtrIApJBEAgCiAMIBdrSw0PICIgIiACIAtrIgdqIgQgDWpPBEAgDUUNAiAMIAQgDfwKAAAMAgtBACAHayICBEAgDCAEIAL8CgAACyAHIA1qIQ0gDCAHayEMIAshAgsgCkEQTwRAIAIpAAAhOiAMIAIpAAg3AAggDCA6NwAAIA1BEUgNASAMIA1qIQcgDEEQaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwwBCwJAIApBB00EQCAMIAItAAA6AAAgDCACLQABOgABIAwgAi0AAjoAAiAMIAItAAM6AAMgDCACIApBAnQiBEHgGmooAgBqIgIoAAA2AAQgAiAEQYAbaigCAGshAgwBCyAMIAIpAAA3AAALIA1BCUkNACAMIA1qIQcgDEEIaiIEIAJBCGoiAmtBD0wEQANAIAQgAikAADcAACACQQhqIQIgBEEIaiIEIAdJDQAMAgsACyACKQAAITogBCACKQAINwAIIAQgOjcAACANQRlIDQAgDEEYaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwsgBkGJf08EQCAGIQMMDgsgGSEcIAYgCWoMAwsgB0EgayECAkACQCAHIBxLDQAgCSAKKAIEIhIgBGoiDGogAksNACAMQSBqIBQgCWtNDQELIAUgCigCCDYCYCAFIAopAgA3A1ggCSAUIAIgBUHYAGogBUHMAmogHCALIBcgIhAhIQwMAgsgBCAJaiEGIAooAgghCiAPKQAAITogCSAPKQAINwAIIAkgOjcAAAJAIARBEUkNACAPKQAQITogCSAPKQAYNwAYIAkgOjcAECAEQRBrQRFIDQAgD0EQaiECIAlBIGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgBkkNAAsLIAYgCmshAiAFIAc2AswCIAYgC2sgCkkEQCAKIAYgF2tLDQ0gIiAiIAIgC2siB2oiBCASak8EQCASRQ0DIAYgBCAS/AoAAAwDC0EAIAdrIgIEQCAGIAQgAvwKAAALIAcgEmohEiAGIAdrIQYgCyECCyAKQRBPBEAgAikAACE6IAYgAikACDcACCAGIDo3AAAgEkERSA0CIAYgEmohByAGQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAILAkAgCkEHTQRAIAYgAi0AADoAACAGIAItAAE6AAEgBiACLQACOgACIAYgAi0AAzoAAyAGIAIgCkECdCIEQeAaaigCAGoiAigAADYABCACIARBgBtqKAIAayECDAELIAYgAikAADcAAAsgEkEJSQ0BIAYgEmohByAGQQhqIgQgAkEIaiICa0EPTARAA0AgBCACKQAANwAAIAJBCGohAiAE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"});var xa={};DA(xa,{default:()=>un,zstd:()=>Ga});var Ra,Ga,un,La=EA(()=>{ji();Ra=Rt(Sa(),1);ka();UA();Ve();Ga=new dn,un=class extends iA{decodeBlock(t){let n=this.parameters.LercParameters?.[vo.AddCompression],i=t;switch(n){case Jt.None:break;case Jt.Deflate:i=ln(new Uint8Array(i)).buffer;break;case Jt.Zstandard:i=Ga.decode(new Uint8Array(i)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${n}`)}return Ra.default.decode(i,{returnPixelInterleavedDims:this.parameters.planarConfiguration===1}).pixels[0].buffer}}});var ct,W,De,bA,Xi,wn,ba,Fa=EA(()=>{Xi={env:{emscripten_notify_memory_growth:A=>{De=new Uint8Array(W.exports.memory.buffer),bA=new DataView(De.buffer)}}},wn=class{init(){return ct||(typeof fetch<"u"?ct=fetch(`data:application/wasm;base64,${ba}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Xi)).then(this._init):ct=WebAssembly.instantiate(Buffer.from(ba,"base64"),Xi).then(this._init),ct)}_init(t){W=t.instance,Xi.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!W)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=W.exports.malloc(n);if(De.set(t,i),e===0&&(e=Number(W.exports.ZSTD_findDecompressedSize(i,n))),e===-1){W.exports.free(i);let I=[];for(let B of this.decodeStreaming([t]))I.push(B);if(I.length===1)return I[0];let o=I.reduce((B,C)=>B+C.byteLength,0),a=new Uint8Array(o),E=0;for(let B of I)a.set(B,E),E+=B.byteLength;return a}let r=W.exports.malloc(e),s=W.exports.ZSTD_decompress(r,e,i,n),g=De.slice(r,r+s);return W.exports.free(i),W.exports.free(r),g}*decodeStreaming(t){if(!W)throw new Error("ZSTDDecoder: Await .init() before decoding.");let e=W.exports.ZSTD_DStreamInSize(),n=W.exports.malloc(e),i=W.exports.ZSTD_DStreamOutSize(),r=W.exports.malloc(i),s=W.exports.ZSTD_createDCtx(),g=4,I=4,o=W.exports.malloc(g+I*2),a=W.exports.malloc(g+I*2),E=0;for(let B of t){let C=W.exports.malloc(B.byteLength);for(De.set(B,C),bA.setInt32(o,C,!0),bA.setInt32(o+g,B.byteLength,!0),bA.setInt32(o+g+I,0,!0);bA.getUint32(o+g+I,!0)<bA.getUint32(o+g,!0);){bA.setInt32(a,r,!0),bA.setInt32(a+g,i,!0),bA.setInt32(a+g+I,0,!0),E=W.exports.ZSTD_decompressStream(s,a,o);let c=bA.getUint32(a+g+I,!0);yield De.slice(r,r+c)}W.exports.free(C)}if(W.exports.ZSTD_freeDCtx(s),W.exports.free(n),W.exports.free(r),W.exports.free(o),W.exports.free(a),E!==0)throw new Error("Incomplete stream, more data expected.")}},ba="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QQhyIQBBACEDA0AgACADTQ0DIANBQGshAwwACwALQWwhCiAOIA5B/ABqIA5B+ABqIAUgBhAGIgJBiH9LDQEgDigCeCIDIARLDQEgACAOIA4oAnwgByAIIAMgDRAlIAEgADYCACACIQoMAQtBbCEKCyAOQYABaiQAIAoLcAEEfyAAQgA3AgAgAgRAIAFBCmohBiABKAIEIQRBACECQQAhAQNAIAEgBHZFBEAgAiAGIAFBA3RqLQAAIgUgAiAFSxshAiABQQFqIQEgAyAFQRZLaiEDDAELCyAAIAI2AgQgACADQQggBGt0NgIACwuuAQEEfyABIAIoAgQiAyABKAIEaiIENgIEIAAgA0ECdEGwGWooAgAgASgCAEEAIARrdnE2AgACQCAEQSFPBEAgAUGwGjYCCAwBCyABKAIIIgMgASgCEE8EQCABEAwMAQsgAyABKAIMIgVGDQAgASADIAMgBWsgBEEDdiIGIAMgBmsgBUkbIgNrIgU2AgggASAEIANBA3RrNgIEIAEgBSgAADYCAAsgACACQQhqNgIEC40CAgN/AX4gACACaiEEAkACQCACQQhOBEAgACABayICQXlIDQELA0AgACAETw0CIAAgAS0AADoAACAAQQFqIQAgAUEBaiEBDAALAAsCQAJAIAJBb0sNACAAIARBIGsiAksNACABKQAAIQYgACABKQAINwAIIAAgBjcAACACIABrIgVBEU4EQCAAQRBqIQAgASEDA0AgAykAECEGIAAgAykAGDcACCAAIAY3AAAgAykAICEGIAAgAykAKDcAGCAAIAY3ABAgA0EgaiEDIABBIGoiACACSQ0ACwsgASAFaiEBDAELIAAhAgsDQCACIARPDQEgAiABLQAAOgAAIAJBAWohAiABQQFqIQEMAAsACwvfAQEGf0G6fyEKAkAgAigCBCIIIAIoAgAiCWoiDSABIABrSw0AQWwhCiAJIAQgAygCACILa0sNACAAIAlqIgQgAigCCCIMayECIAAgAUEgayIBIAsgCUEAEDMgAyAJIAtqNgIAAkACQCAEIAVrIAxPBEAgAiEFDAELIAwgBCAGa0sNAiAHIAcgAiAFayIDaiICIAhqTwRAIAhFDQIgBCACIAj8CgAADAILQQAgA2siAARAIAQgAiAA/AoAAAsgAyAIaiEIIAQgA2shBAsgBCABIAUgCEEBEDML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"});var Ma={};DA(Ma,{default:()=>pn,zstd:()=>Ua});var Ua,pn,Ta=EA(()=>{Fa();UA();Ua=new wn,pn=class extends iA{decodeBlock(t){return Ua.decode(new Uint8Array(t)).buffer}}});var Ya={};DA(Ya,{default:()=>yn});var yn,_a=EA(()=>{UA();yn=class extends iA{constructor(t){if(super(t),typeof createImageBitmap>"u")throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if(typeof document>"u"&&typeof OffscreenCanvas>"u")throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decodeBlock(t){let e=new Blob([t]),n=await createImageBitmap(e),i;typeof document<"u"?(i=document.createElement("canvas"),i.width=n.width,i.height=n.height):i=new OffscreenCanvas(n.width,n.height);let r=i.getContext("2d");r.drawImage(n,0,0);let s=r.getImageData(0,0,n.width,n.height).data,g=this.parameters.samplesPerPixel||4;if(g===4)return s.buffer;if(g===3){let I=new Uint8ClampedArray(n.width*n.height*3);for(let o=0,a=0;o<I.length;o+=3,a+=4)I[o]=s[a],I[o+1]=s[a+1],I[o+2]=s[a+2];return I.buffer}else throw new Error(`Unsupported SamplesPerPixel value: ${g}`)}}});var Xa=kt(()=>{});var $a=kt(()=>{});var As=kt(()=>{});function GI(A){let t=atob(A),e=t.length,n=new Uint8Array(e);for(let i=0;i<e;i++)n[i]=t.charCodeAt(i);return n}function Pr(A){typeof A=="string"&&(A=new TextEncoder().encode(A));let t="",e=A.byteLength;for(let n=0;n<e;n++)t+=String.fromCharCode(A[n]);return btoa(t)}var tf=new Uint8Array(16),xI=class{constructor(A="",t=1e3){this.prefix=A,this.maxCaptureSize=t,this.prefix=A,this.originalConsole={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)},this.patchConsole()}originalConsole;logBuffer=[];patchConsole(){let A=t=>(...e)=>{let n=this.prefix?[this.prefix,...e]:e;this.originalConsole[t](...n),this.captureLog(t,e)};console.log=A("log"),console.info=A("info"),console.warn=A("warn"),console.error=A("error"),console.debug=A("debug")}captureLog(A,t){let e={level:A,timestamp:Date.now(),message:t.map(n=>{if(typeof n=="string")return n;try{return JSON.stringify(n)}catch{return String(n)}}).join(" ")};this.logBuffer.push(e),this.logBuffer.length>this.maxCaptureSize&&this.logBuffer.shift()}async postToServer(A,t){if(this.logBuffer.length>0){let n=[...this.logBuffer];this.logBuffer=[];try{if(!(await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map(r=>({...r,source:t})))})).ok)throw new Error("Failed to post logs to server")}catch(i){console.warn("Could not post logs to server",i.message),this.logBuffer.unshift(...n)}}}},Or;function LI(A=""){return Or=new xI(A),Or}var Me=A=>{throw new Error("Not initialized yet")},Vn=typeof window>"u"&&typeof globalThis.WebSocketPair>"u",qn=new Map,Jn=0;Vn&&(globalThis.syscall=async(A,...t)=>await new Promise((e,n)=>{Jn++,qn.set(Jn,{resolve:e,reject:n}),Me({type:"sys",id:Jn,name:A,args:t})}));function Jr(A,t,e){Vn&&(Me=e,self.addEventListener("message",n=>{(async()=>{let i=n.data;switch(i.type){case"inv":{let r=A[i.name];if(!r)throw new Error(`Function not loaded: ${i.name}`);try{let s=await Promise.resolve(r(...i.args||[]));Me({type:"invr",id:i.id,result:s})}catch(s){console.error("An exception was thrown as a result of invoking function",i.name,"error:",s.message),Me({type:"invr",id:i.id,error:s.message})}}break;case"sysr":{let r=i.id,s=qn.get(r);if(!s)throw Error("Invalid request id");qn.delete(r),i.error?s.reject(new Error(i.error)):s.resolve(i.result)}break}})().catch(console.error)}),Me({type:"manifest",manifest:t}),LI(`[${t.name} plug]`))}async function bI(A,t){if(typeof A!="string"){let e=new Uint8Array(await A.arrayBuffer()),n=e.length>0?Pr(e):void 0;t={method:A.method,headers:Object.fromEntries(A.headers.entries()),base64Body:n},A=A.url}return syscall("sandboxFetch.fetch",A,t)}globalThis.nativeFetch=globalThis.fetch;function FI(){globalThis.fetch=async(A,t)=>{let e=t?.body?Pr(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await bI(A,t&&{method:t.method,headers:t.headers,base64Body:e});return new Response(n.base64Body?GI(n.base64Body):null,{status:n.status,headers:n.headers})}}Vn&&FI();var sA={};DA(sA,{alert:()=>fC,configureVimMode:()=>UC,confirm:()=>hC,copyToClipboard:()=>RC,deleteLine:()=>GC,dispatch:()=>lC,downloadFile:()=>nC,filterBox:()=>oC,flashNotification:()=>rC,fold:()=>wC,foldAll:()=>mC,getCurrentEditor:()=>_I,getCurrentPage:()=>UI,getCurrentPageMeta:()=>MI,getCurrentPath:()=>TI,getCursor:()=>KI,getRecentlyOpenedPages:()=>YI,getSelection:()=>OI,getText:()=>vI,getUiOption:()=>dC,goHistory:()=>tC,hidePanel:()=>aC,insertAtCursor:()=>cC,insertAtPos:()=>IC,invokeCommand:()=>JI,isMobile:()=>TC,moveCursor:()=>BC,moveCursorToLine:()=>EC,moveLineDown:()=>bC,moveLineUp:()=>LC,navigate:()=>VI,newWindow:()=>eC,openCommandPalette:()=>jI,openPageNavigator:()=>ZI,openSearchPanel:()=>kC,openUrl:()=>AC,prompt:()=>QC,rebuildEditorState:()=>XI,redo:()=>NC,reloadConfigAndCommands:()=>$I,reloadPage:()=>WI,reloadUI:()=>zI,replaceRange:()=>CC,save:()=>qI,sendMessage:()=>MC,setSelection:()=>PI,setText:()=>HI,setUiOption:()=>uC,showPanel:()=>gC,showProgress:()=>sC,toggleComment:()=>xC,toggleFold:()=>yC,undo:()=>SC,unfold:()=>pC,unfoldAll:()=>DC,uploadFile:()=>iC,vimEx:()=>FC});typeof globalThis.syscall>"u"&&(globalThis.syscall=()=>{throw new Error("Not implemented here")});function R(A,...t){return globalThis.syscall(A,...t)}function UI(){return R("editor.getCurrentPage")}function MI(){return R("editor.getCurrentPageMeta")}function TI(){return R("editor.getCurrentPath")}function YI(){return R("editor.getRecentlyOpenedPages")}function _I(){return R("editor.getCurrentEditor")}function vI(){return R("editor.getText")}function HI(A,t=!1){return R("editor.setText",A,t)}function KI(){return R("editor.getCursor")}function OI(){return R("editor.getSelection")}function PI(A,t){return R("editor.setSelection",A,t)}function JI(A,t){return R("editor.invokeCommand",A,t)}function qI(){return R("editor.save")}function VI(A,t=!1,e=!1){return R("editor.navigate",A,t,e)}function ZI(A="page"){return R("editor.openPageNavigator",A)}function jI(){return R("editor.openCommandPalette")}function WI(){return R("editor.reloadPage")}function zI(){return R("editor.reloadUI")}function XI(){return R("editor.rebuildEditorState")}function $I(){return R("editor.reloadConfigAndCommands")}function AC(A,t=!1){return R("editor.openUrl",A,t)}function eC(){return R("editor.newWindow")}function tC(A){return R("editor.goHistory",A)}function nC(A,t){return R("editor.downloadFile",A,t)}function iC(A,t){return R("editor.uploadFile",A,t)}function rC(A,t="info"){return R("editor.flashNotification",A,t)}function oC(A,t,e="",n=""){return R("editor.filterBox",A,t,e,n)}function gC(A,t,e,n=""){return R("editor.showPanel",A,t,e,n)}function aC(A){return R("editor.hidePanel",A)}function sC(A,t){return R("editor.showProgress",A,t)}function IC(A,t){return R("editor.insertAtPos",A,t)}function CC(A,t,e){return R("editor.replaceRange",A,t,e)}function BC(A,t=!1){return R("editor.moveCursor",A,t)}function EC(A,t=1,e=!1){return R("editor.moveCursorToLine",A,t,e)}function cC(A,t=!1,e=!1){return R("editor.insertAtCursor",A,t,e)}function lC(A){return R("editor.dispatch",A)}function QC(A,t=""){return R("editor.prompt",A,t)}function hC(A){return R("editor.confirm",A)}function fC(A){return R("editor.alert",A)}function dC(A){return R("editor.getUiOption",A)}function uC(A,t){return R("editor.setUiOption",A,t)}function wC(){return R("editor.fold")}function pC(){return R("editor.unfold")}function yC(){return R("editor.toggleFold")}function mC(){return R("editor.foldAll")}function DC(){return R("editor.unfoldAll")}function SC(){return R("editor.undo")}function NC(){return R("editor.redo")}function kC(){return R("editor.openSearchPanel")}function RC(A){return R("editor.copyToClipboard",A)}function GC(){return R("editor.deleteLine")}function xC(){return R("editor.toggleComment")}function LC(){return R("editor.moveLineUp")}function bC(){return R("editor.moveLineDown")}function FC(A){return R("editor.vimEx",A)}function UC(){return R("editor.configureVimMode")}function MC(A,t){return R("editor.sendMessage",A,t)}function TC(){return R("editor.isMobile")}var X={};DA(X,{deleteDocument:()=>zC,deleteFile:()=>iB,deletePage:()=>JC,fileExists:()=>rB,getDocumentMeta:()=>ZC,getFileMeta:()=>tB,getPageMeta:()=>vC,listDocuments:()=>VC,listFiles:()=>XC,listPages:()=>_C,listPlugs:()=>qC,pageExists:()=>HC,readDocument:()=>jC,readFile:()=>$C,readFileWithMeta:()=>eB,readPage:()=>KC,readPageWithMeta:()=>OC,readRef:()=>AB,writeDocument:()=>WC,writeFile:()=>nB,writePage:()=>PC});function _C(){return R("space.listPages")}function vC(A){return R("space.getPageMeta",A)}function HC(A){return R("space.pageExists",A)}function KC(A){return R("space.readPage",A)}function OC(A){return R("space.readPageWithMeta",A)}function PC(A,t){return R("space.writePage",A,t)}function JC(A){return R("space.deletePage",A)}function qC(){return R("space.listPlugs")}function VC(){return R("space.listDocuments")}function ZC(A){return R("space.getDocumentMeta",A)}function jC(A){return R("space.readDocument",A)}function WC(A,t){return R("space.writeDocument",A,t)}function zC(A){return R("space.deleteDocument",A)}function XC(){return R("space.listFiles")}function $C(A){return R("space.readFile",A)}function AB(A){return R("space.readRef",A)}function eB(A){return R("space.readFileWithMeta",A)}function tB(A){return R("space.getFileMeta",A)}function nB(A,t){return R("space.writeFile",A,t)}function iB(A){return R("space.deleteFile",A)}function rB(A){return R("space.fileExists",A)}var Te={};DA(Te,{refreshAll:()=>IB});function IB(){return R("codeWidget.refreshAll")}var lf=new Uint8Array(16);var qr="cimal";var Vr="https://copernicus-dem-30m.s3.amazonaws.com";var Ye="Library/.cache/cimal",Zr=`${Ye}/v2/index.json`,jr=250*1024*1024,_e=1,Zn=`${Ye}/hiking-map`,Wr=`${Zn}/v${_e}/index.json`,zr=150*1024*1024,ve=4,jn=`${Ye}/packs`,Xr=`${jn}/v${ve}/index.json`,$r=100*1024*1024;var Wn="classic",zA="standard",Gt=["classic","hiking-map","worldcover","vaporwave","lava","water-world","dracula","pastel","rainbow"],xt=["low","standard","high","ultra"],He={style:Wn,hikingMapResolution:zA};function Ao(A){return A.join("|")}function to(A){return A.join(", ")}function eo(){return`style: ${Ao(Gt)} and optional hiking-map-resolution: ${Ao(xt)}`}function no(A){return/^https?:\/\//i.test(A)}function uB(A){let t=A.trim(),e=/^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/.exec(t);return e?e[1].trim():t}function zn(A){let t=A.trim();if(!t)throw new Error("A space path is required.");return uB(t.replace(/^space\s*:\s*/i,""))}function Xn(A){let t=A.trim();if(!t)throw new Error("A GPX URL or space path is required.");let e=zn(t.replace(/^url\s*:\s*/i,""));if(!no(e))return e;let n=new URL(e);if(n.hostname==="github.com"){let i=n.pathname.split("/").filter(Boolean),r=i.indexOf("blob");if(i.length>=5&&r===2){let s=i[0],g=i[1],I=i[3],o=i.slice(4).join("/");return`https://raw.githubusercontent.com/${s}/${g}/${I}/${o}`}}return n.toString()}function $n(A){let t=A.trim().toLowerCase();if(Gt.includes(t))return t;throw new Error(`Unsupported cimal style "${A.trim()}". Supported styles: ${to(Gt)}.`)}function Ai(A){let t=A.trim().toLowerCase();if(xt.includes(t))return t;throw new Error(`Unsupported hiking-map-resolution "${A.trim()}". Supported values: ${to(xt)}.`)}function io(A){let t=A.split(/\r?\n/).map(I=>I.trim()).filter(I=>I&&!I.startsWith("#"));if(t.length===0)throw new Error("Add a .cimal pack path or GPX source inside the widget body.");let[e,...n]=t;if(/^(?:style|hiking-map-resolution)\s*:/i.test(e))throw new Error(`Put the .cimal path or GPX source on the first line, then add ${eo()} below it.`);let i=Wn,r=zA,s=!1,g=!1;for(let I of n){let o=/^style\s*:\s*(.+)$/i.exec(I);if(o){if(s)throw new Error("Duplicate style option in cimal widget body.");i=$n(o[1]),s=!0;continue}let a=/^hiking-map-resolution\s*:\s*(.+)$/i.exec(I);if(a){if(g)throw new Error("Duplicate hiking-map-resolution option in cimal widget body.");r=Ai(a[1]),g=!0;continue}throw new Error(`Unsupported cimal widget option "${I}". Supported options: ${eo()}.`)}if(g&&i!=="hiking-map")throw new Error('Hiking-map resolution can only be used with "style: hiking-map".');return{source:e,style:i,hikingMapResolution:r,hasExplicitHikingMapResolution:g}}function Lt(A){let t=zn(A);if(no(t)||/\.gpx$/i.test(t))throw new Error("Cimal widgets now accept only .cimal pack paths. Build a pack from the GPX first.");return t.endsWith(".cimal")?t:`${t}.cimal`}function ro(A){let t=zn(A.source);if(/\.cimal$/i.test(t)){let e=Lt(t);if(A.hasExplicitHikingMapResolution)throw new Error('Hiking-map resolution is baked into existing .cimal packs. Rebuild the pack from the GPX at the desired resolution instead of setting "hiking-map-resolution" on a .cimal widget.');return{kind:"pack",packPath:e}}return{kind:"gpx",gpxSource:Xn(t)}}function oo(A){let t=A.split(",",2);if(t.length!==2)throw new Error("Invalid baked hiking-map texture data URL.");let[,e]=t;if(typeof atob!="function")throw new Error("Base64 decoding is unavailable in this runtime.");let n=atob(e),i=new Uint8Array(n.length);for(let r=0;r<n.length;r+=1)i[r]=n.charCodeAt(r);return i}function XA(A,t){if(typeof btoa!="function")throw new Error("Base64 encoding is unavailable in this runtime.");let e="";for(let n=0;n<A.length;n+=1)e+=String.fromCharCode(A[n]);return`data:${t};base64,${btoa(e)}`}function ei(A){return/^data:([^;,]+)[;,]/i.exec(A)?.[1]??"application/octet-stream"}var Io=new TextEncoder,go=new TextDecoder,Co="CMLP",Ke=12,ti=65535,ao=3,wB=2;function Ft(A){return A+3&-4}function pB(A,t){let e=A.bakedImagery?{kind:A.bakedImagery.kind,width:A.bakedImagery.width,height:A.bakedImagery.height,mimeType:A.bakedImagery.mimeType,sourceVersion:A.bakedImagery.sourceVersion,resolution:A.bakedImagery.resolution,byteLength:t}:void 0,n={version:4,title:A.title,sourceUrl:A.sourceUrl,bounds:A.bounds,center:A.center,metersPerDegree:A.metersPerDegree,grid:{width:A.grid.width,height:A.grid.height,minElevation:A.grid.minElevation,maxElevation:A.grid.maxElevation},stats:A.stats,trackPointCount:A.track.length,bakedImagery:e};return Io.encode(JSON.stringify(n))}function yB(A){let{elevations:t,minElevation:e,maxElevation:n}=A.grid,i=n-e,r=new Uint16Array(t.length);if(i<=0)return r;for(let s=0;s<t.length;s+=1){let g=(t[s]-e)/i;r[s]=Math.max(0,Math.min(ti,Math.round(g*ti)))}return r}function mB(A){let t=new Float32Array(A.length*3);for(let e=0;e<A.length;e+=1){let n=e*3;t[n]=A[e].x,t[n+1]=A[e].y,t[n+2]=A[e].z}return t}function so(A){return new Uint8Array(A.buffer.slice(A.byteOffset,A.byteOffset+A.byteLength))}function Ut(A){let t=A.bakedImagery?oo(A.bakedImagery.dataUrl):new Uint8Array(0),e=pB(A,t.byteLength),n=Ft(e.length),i=so(yB(A)),r=Ft(i.length),s=so(mB(A.track)),g=new Uint8Array(Ke+n+r+s.length+t.length);g.set(Io.encode(Co),0);let I=new DataView(g.buffer);I.setUint16(4,4,!0),I.setUint16(6,0,!0),I.setUint32(8,e.length,!0);let o=Ke;return g.set(e,o),o+=n,g.set(i,o),o+=r,g.set(s,o),o+=s.length,t.length>0&&g.set(t,o),g}function ni(A){if(A.byteLength<Ke)throw new Error("Invalid .cimal pack: file is too small.");if(go.decode(A.slice(0,4))!==Co)throw new Error("Invalid .cimal pack: wrong file signature.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==wB&&n!==ao&&n!==4)throw new Error(`Unsupported .cimal pack version ${n}. Rebuild the pack.`);let i=e.getUint32(8,!0),r=Ke,s=r+i;if(s>A.byteLength)throw new Error("Invalid .cimal pack: header length is out of bounds.");let g=JSON.parse(go.decode(A.slice(r,s))),I=g.grid.width*g.grid.height,o=I*Uint16Array.BYTES_PER_ELEMENT,a=Ke+Ft(i);if(a+o>A.byteLength)throw new Error("Invalid .cimal pack: terrain section is truncated.");let B=g.trackPointCount*3*Float32Array.BYTES_PER_ELEMENT,C=a+Ft(o),c=C+B;if(c>A.byteLength)throw new Error("Invalid .cimal pack: track section is truncated.");let l;if(n>=4&&g.bakedImagery){let Q=c,p=Q+g.bakedImagery.byteLength;if(p>A.byteLength)throw new Error("Invalid .cimal pack: imagery section is truncated.");let d=A.slice(Q,p);l={kind:g.bakedImagery.kind,width:g.bakedImagery.width,height:g.bakedImagery.height,mimeType:g.bakedImagery.mimeType,sourceVersion:g.bakedImagery.sourceVersion,resolution:g.bakedImagery.resolution,dataUrl:XA(d,g.bakedImagery.mimeType)}}else if(n>=ao&&g.bakedHikingMap){let Q=c,p=Q+g.bakedHikingMap.byteLength;if(p>A.byteLength)throw new Error("Invalid .cimal pack: imagery section is truncated.");let d=A.slice(Q,p);l={kind:"hiking-map",width:g.bakedHikingMap.width,height:g.bakedHikingMap.height,mimeType:g.bakedHikingMap.mimeType,sourceVersion:"OpenHikingMap",resolution:g.bakedHikingMap.resolution,dataUrl:XA(d,g.bakedHikingMap.mimeType)}}let h=new Uint16Array(A.buffer,A.byteOffset+a,I),u=new Float32Array(A.buffer,A.byteOffset+C,g.trackPointCount*3),w=g.grid.maxElevation-g.grid.minElevation,y=Array.from(h,Q=>w<=0?g.grid.minElevation:g.grid.minElevation+Q/ti*w),f=[];for(let Q=0;Q<g.trackPointCount;Q+=1){let p=Q*3,d=u[p+1];f.push({x:u[p],y:d,z:u[p+2],elevation:d})}return{title:g.title,sourceUrl:g.sourceUrl,bounds:g.bounds,center:g.center,metersPerDegree:g.metersPerDegree,grid:{width:g.grid.width,height:g.grid.height,elevations:y,minElevation:g.grid.minElevation,maxElevation:g.grid.maxElevation},track:f,bakedImagery:l,stats:g.stats}}function Bo(A){return A instanceof Error&&(A.message.startsWith("Unsupported .cimal pack version ")||A.message.startsWith("Invalid .cimal pack:"))}var Eo="Cannot convert undefined or null to object";function j(A){return(t,...e)=>DB(A,t,e)}function Ie(A,t){return j(Mt(A,t).get)}var{apply:DB,construct:vf,defineProperty:Hf,get:Kf,getOwnPropertyDescriptor:Mt,getPrototypeOf:Tt,has:Of,ownKeys:lo,set:Pf,setPrototypeOf:Jf}=Reflect;var{EPSILON:Qo,MAX_SAFE_INTEGER:qf,isFinite:SB,isNaN:NB}=Number,{iterator:Ce,species:Vf,toStringTag:kB,for:Zf}=Symbol,Yt=Object,{create:_t,defineProperty:ho,freeze:jf,is:Wf}=Yt,ii=Yt.prototype,zf=ii.__lookupGetter__?j(ii.__lookupGetter__):(A,t)=>{if(A==null)throw LB(Eo);let e=Yt(A);do{let n=Mt(e,t);if(n!==void 0)return RB(n,"get")?n.get:void 0}while((e=Tt(e))!==null)},RB=Yt.hasOwn||j(ii.hasOwnProperty),fo=Array,Xf=fo.isArray,vt=fo.prototype,$f=j(vt.join),Ad=j(vt.push),ed=j(vt.toLocaleString),ri=vt[Ce],uo=j(ri),{abs:GB,trunc:td}=Math,Ht=ArrayBuffer,nd=Ht.isView,wo=Ht.prototype,id=j(wo.slice),rd=Ie(wo,"byteLength"),co=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,od=co&&Ie(co.prototype,"byteLength"),po=Tt(Uint8Array),gd=po.from,IA=po.prototype,ad=IA[Ce],sd=j(IA.keys),Id=j(IA.values),Cd=j(IA.entries),Bd=j(IA.set),Ed=j(IA.reverse),cd=j(IA.fill),ld=j(IA.copyWithin),Qd=j(IA.sort),hd=j(IA.slice),fd=j(IA.subarray),dd=Ie(IA,"buffer"),ud=Ie(IA,"byteOffset"),wd=Ie(IA,"length"),pd=Ie(IA,kB),yo=Uint8Array,oi=Uint16Array;var Kt=Uint32Array,mo=Float32Array,Be=Tt([][Ce]()),gi=j(Be.next),Do=j((function*(){})().next),So=Tt(Be),No=DataView.prototype,ko=j(No.getUint16),xB=j(No.setUint16),LB=TypeError;var bB=WeakSet,Ro=bB.prototype,yd=j(Ro.add),md=j(Ro.has),Ot=WeakMap,ai=Ot.prototype,si=j(ai.get),Dd=j(ai.has),Go=j(ai.set);var xo=new Ot,FB=_t(null,{next:{value:function(){let t=si(xo,this);return gi(t)}},[Ce]:{value:function(){return this}}});function Lo(A){if(A[Ce]===ri&&Be.next===gi)return A;let t=_t(FB);return Go(xo,t,uo(A)),t}var UB=new Ot,MB=_t(So,{next:{value:function(){let t=si(UB,this);return Do(t)},writable:!0,configurable:!0}});for(let A of lo(Be))A!=="next"&&ho(MB,A,Mt(Be,A));var TB=1/Qo;var YB=6103515625e-14;var bo=.0009765625,Gd=bo*YB,xd=bo*TB;var Fo=new Ht(4),_B=new mo(Fo),vB=new Kt(Fo),NA=new oi(512),kA=new yo(512);for(let A=0;A<256;++A){let t=A-127;t<-24?(NA[A]=0,NA[A|256]=32768,kA[A]=24,kA[A|256]=24):t<-14?(NA[A]=1024>>-t-14,NA[A|256]=1024>>-t-14|32768,kA[A]=-t-1,kA[A|256]=-t-1):t<=15?(NA[A]=t+15<<10,NA[A|256]=t+15<<10|32768,kA[A]=13,kA[A|256]=13):t<128?(NA[A]=31744,NA[A|256]=64512,kA[A]=24,kA[A|256]=24):(NA[A]=31744,NA[A|256]=64512,kA[A]=13,kA[A|256]=13)}var Ii=new Kt(2048);for(let A=1;A<1024;++A){let t=A<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Ii[A]=t|e}for(let A=1024;A<2048;++A)Ii[A]=939524096+(A-1024<<13);var Ee=new Kt(64);for(let A=1;A<31;++A)Ee[A]=A<<23;Ee[31]=1199570944;Ee[32]=2147483648;for(let A=33;A<63;++A)Ee[A]=2147483648+(A-32<<23);Ee[63]=3347054592;var Uo=new oi(64);for(let A=1;A<64;++A)A!==32&&(Uo[A]=1024);function Mo(A){let t=A>>10;return vB[0]=Ii[Uo[t]+(A&1023)]+Ee[t],_B[0]}function Oe(A,t,...e){return Mo(ko(A,t,...Lo(e)))}function Pe(A,t,e){let n=e&&e.debug||!1;n&&console.log("[xml-utils] getting "+t+" in "+A);let i=typeof A=="object"?A.outer:A,r=i.slice(0,i.indexOf(">")+1),s=['"',"'"];for(let g=0;g<s.length;g++){let I=s[g],o=t+"\\="+I+"([^"+I+"]*)"+I;n&&console.log("[xml-utils] pattern:",o);let E=new RegExp(o).exec(r);if(n&&console.log("[xml-utils] match:",E),E)return E[1]}}function Ci(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index:-1}function Je(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index+i[0].length-1:-1}function Pt(A,t){let e=new RegExp(t,"g"),n=A.match(e);return n?n.length:0}function Bi(A,t,e){let n=e&&e.debug||!1,i=!(e&&typeof e.nested===!1),r=e&&e.startIndex||0;n&&console.log("[xml-utils] starting findTagByName with",t," and ",e);let s=Ci(A,`<${t}[ 
>/]`,r);if(n&&console.log("[xml-utils] start:",s),s===-1)return;let g=A.slice(s+t.length),I=Je(g,"^[^<]*[ /]>",0),o=I!==-1&&g[I-1]==="/";if(n&&console.log("[xml-utils] selfClosing:",o),o===!1)if(i){let C=0,c=1,l=0;for(;(I=Je(g,"[ /]"+t+">",C))!==-1;){let h=g.substring(C,I+1);if(c+=Pt(h,"<"+t+`[ 
	>]`),l+=Pt(h,"</"+t+">"),l>=c)break;C=I}}else I=Je(g,"[ /]"+t+">",0);let a=s+t.length+I+1;if(n&&console.log("[xml-utils] end:",a),a===-1)return;let E=A.slice(s,a),B;return o?B=null:B=E.slice(E.indexOf(">")+1,E.lastIndexOf("<")),{inner:B,outer:E,start:s,end:a}}function Ei(A,t,e){let n=[],i=e&&e.debug||!1,r=e&&typeof e.nested=="boolean"?e.nested:!0,s=e&&e.startIndex||0,g;for(;g=Bi(A,t,{debug:i,startIndex:s});)r?s=g.start+1+t.length:s=g.end,n.push(g);return i&&console.log("findTagsByName found",n.length,"tags"),n}Ve();function Ho(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let s=0,g=0;s<A.length;++s,g+=3)r=256-A[s]/t*256,i[g]=r,i[g+1]=r,i[g+2]=r;return i}function Ko(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let s=0,g=0;s<A.length;++s,g+=3)r=A[s]/t*256,i[g]=r,i[g+1]=r,i[g+2]=r;return i}function Oo(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r=t.length/3,s=t.length/3*2;for(let g=0,I=0;g<A.length;++g,I+=3){let o=A[g];i[I]=t[o]/65536*256,i[I+1]=t[o+r]/65536*256,i[I+2]=t[o+s]/65536*256}return i}function Po(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=4,r+=3){let s=A[i],g=A[i+1],I=A[i+2],o=A[i+3];n[r]=255*((255-s)/256)*((255-o)/256),n[r+1]=255*((255-g)/256)*((255-o)/256),n[r+2]=255*((255-I)/256)*((255-o)/256)}return n}function Jo(A){let{width:t,height:e}=A,n=new Uint8ClampedArray(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let s=A[i],g=A[i+1],I=A[i+2];n[r]=s+1.402*(I-128),n[r+1]=s-.34414*(g-128)-.71414*(I-128),n[r+2]=s+1.772*(g-128)}return n}var PB=.95047,JB=1,qB=1.08883;function qo(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let s=A[i+0],g=A[i+1]<<24>>24,I=A[i+2]<<24>>24,o=(s+16)/116,a=g/500+o,E=o-I/200,B,C,c;a=PB*(a*a*a>.008856?a*a*a:(a-16/116)/7.787),o=JB*(o*o*o>.008856?o*o*o:(o-16/116)/7.787),E=qB*(E*E*E>.008856?E*E*E:(E-16/116)/7.787),B=a*3.2406+o*-1.5372+E*-.4986,C=a*-.9689+o*1.8758+E*.0415,c=a*.0557+o*-.204+E*1.057,B=B>.0031308?1.055*B**(1/2.4)-.055:12.92*B,C=C>.0031308?1.055*C**(1/2.4)-.055:12.92*C,c=c>.0031308?1.055*c**(1/2.4)-.055:12.92*c,n[r]=Math.max(0,Math.min(1,B))*255,n[r+1]=Math.max(0,Math.min(1,C))*255,n[r+2]=Math.max(0,Math.min(1,c))*255}return n}var lt=new Map;async function mn(A){let t=!A.hasTag("StripOffsets");return{tileWidth:t?await A.loadValue("TileWidth"):await A.loadValue("ImageWidth"),tileHeight:t?await A.loadValue("TileLength"):await A.loadValue("RowsPerStrip")||await A.loadValue("ImageLength"),planarConfiguration:await A.loadValue("PlanarConfiguration"),bitsPerSample:await A.loadValue("BitsPerSample"),predictor:await A.loadValue("Predictor")||1}}function bl(A,t,e=mn,n=!0){Array.isArray(A)||(A=[A]),A.forEach(i=>{lt.set(i,{importFn:t,decoderParameterFn:e,preferWorker:n})})}async function va(A,t){if(!lt.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{decoderParameterFn:e}=lt.get(A);return e(t)}async function Ha(A,t){if(!lt.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{importFn:e}=lt.get(A),n=await e();return new n(t)}var Fl=[{cases:[void 0,1],importFn:()=>Promise.resolve().then(()=>(Wo(),jo)).then(A=>A.default),preferWorker:!1},{cases:5,importFn:()=>Promise.resolve().then(()=>($o(),Xo)).then(A=>A.default)},{cases:6,importFn:()=>{throw new Error("old style JPEG compression is not supported.")}},{cases:7,importFn:()=>Promise.resolve().then(()=>(tg(),eg)).then(A=>A.default),decoderParameterFn:async A=>({...await mn(A),JPEGTables:await A.loadValue("JPEGTables")})},{cases:[8,32946],importFn:()=>Promise.resolve().then(()=>(ya(),pa)).then(A=>A.default)},{cases:32773,importFn:()=>Promise.resolve().then(()=>(Da(),ma)).then(A=>A.default)},{cases:34887,importFn:()=>Promise.resolve().then(()=>(La(),xa)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default),decoderParameterFn:async A=>({...await mn(A),LercParameters:await A.loadValue("LercParameters")})},{cases:5e4,importFn:()=>Promise.resolve().then(()=>(Ta(),Ma)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default)},{cases:50001,importFn:()=>Promise.resolve().then(()=>(_a(),Ya)).then(A=>A.default),decoderParameterFn:async A=>({...await mn(A),samplesPerPixel:Number(await A.loadValue("SamplesPerPixel"))||4}),preferWorker:!1}];for(let A of Fl){let{cases:t,importFn:e,decoderParameterFn:n,preferWorker:i}=A;bl(t,e,n,i)}function Dn(A,t,e,n=1){return new(Object.getPrototypeOf(A)).constructor(t*e*n)}function Ul(A,t,e,n,i){let r=t/n,s=e/i;return A.map(g=>{let I=Dn(g,n,i);for(let o=0;o<i;++o){let a=Math.min(Math.round(s*o),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(r*E),t-1),C=g[a*t+B];I[o*n+E]=C}}return I})}function Se(A,t,e){return(1-e)*A+e*t}function Ml(A,t,e,n,i){let r=t/n,s=e/i;return A.map(g=>{let I=Dn(g,n,i);for(let o=0;o<i;++o){let a=s*o,E=Math.floor(a),B=Math.min(Math.ceil(a),e-1);for(let C=0;C<n;++C){let c=r*C,l=c%1,h=Math.floor(c),u=Math.min(Math.ceil(c),t-1),w=g[E*t+h],y=g[E*t+u],f=g[B*t+h],Q=g[B*t+u],p=Se(Se(w,y,l),Se(f,Q,l),a%1);I[o*n+C]=p}}return I})}function Ka(A,t,e,n,i,r="nearest"){switch(r.toLowerCase()){case"nearest":return Ul(A,t,e,n,i);case"bilinear":case"linear":return Ml(A,t,e,n,i);default:throw new Error(`Unsupported resampling method: '${r}'`)}}function Tl(A,t,e,n,i,r){let s=t/n,g=e/i,I=Dn(A,n,i,r);for(let o=0;o<i;++o){let a=Math.min(Math.round(g*o),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(s*E),t-1);for(let C=0;C<r;++C){let c=A[a*t*r+B*r+C];I[o*n*r+E*r+C]=c}}}return I}function Yl(A,t,e,n,i,r){let s=t/n,g=e/i,I=Dn(A,n,i,r);for(let o=0;o<i;++o){let a=g*o,E=Math.floor(a),B=Math.min(Math.ceil(a),e-1);for(let C=0;C<n;++C){let c=s*C,l=c%1,h=Math.floor(c),u=Math.min(Math.ceil(c),t-1);for(let w=0;w<r;++w){let y=A[E*t*r+h*r+w],f=A[E*t*r+u*r+w],Q=A[B*t*r+h*r+w],p=A[B*t*r+u*r+w],d=Se(Se(y,f,l),Se(Q,p,l),a%1);I[o*n*r+C*r+w]=d}}}return I}function Oa(A,t,e,n,i,r,s="nearest"){switch(s.toLowerCase()){case"nearest":return Tl(A,t,e,n,i,r);case"bilinear":case"linear":return Yl(A,t,e,n,i,r);default:throw new Error(`Unsupported resampling method: '${s}'`)}}function _l(A,t,e){let n=0;for(let i=t;i<e;++i)n+=A[i];return n}function $i(A,t,e){let n;switch(A){case 1:t<=8?n=Uint8Array:t<=16?n=Uint16Array:t<=32&&(n=Uint32Array);break;case 2:t===8?n=Int8Array:t===16?n=Int16Array:t===32&&(n=Int32Array);break;case 3:switch(t){case 16:case 32:n=Float32Array;break;case 64:n=Float64Array;break;default:break}break;default:break}if(n){if(typeof e=="number")return new n(e);if(e instanceof ArrayBuffer)return new n(e)}throw Error("Unsupported data format/bitsPerSample")}function vl(A,t){return(A===1||A===2)&&t<=32&&t%8===0?!1:!(A===3&&(t===16||t===32||t===64))}function Hl(A,t,e,n,i,r,s){let g=new DataView(A),I=e===2?s*r:s*r*n,o=e===2?1:n,a=$i(t,i,I),E=parseInt("1".repeat(i),2);if(t===1){let B;e===1?B=n*i:B=i;let C=r*B;(C&7)!==0&&(C=C+7&-8);for(let c=0;c<s;++c){let l=c*C;for(let h=0;h<r;++h){let u=l+h*o*i;for(let w=0;w<o;++w){let y=u+w*i,f=(c*r+h)*o+w,Q=Math.floor(y/8),p=y%8;if(p+i<=8)a[f]=g.getUint8(Q)>>8-i-p&E;else if(p+i<=16)a[f]=g.getUint16(Q)>>16-i-p&E;else if(p+i<=24){let d=g.getUint16(Q)<<8|g.getUint8(Q+2);a[f]=d>>24-i-p&E}else a[f]=g.getUint32(Q)>>32-i-p&E}}}}return a.buffer}var Ar=class{constructor(t,e,n,i){this.fileDirectory=t,this.littleEndian=e,this.tiles=n?[]:null,this.isTiled=!t.hasTag("StripOffsets");let r=t.getValue("PlanarConfiguration")??1;if(r!==1&&r!==2)throw new Error("Invalid planar configuration.");this.planarConfiguration=r,this.source=i}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.fileDirectory.parseGeoKeyDirectory()}getWidth(){return this.fileDirectory.getValue("ImageWidth")||0}getHeight(){return this.fileDirectory.getValue("ImageLength")||0}getSamplesPerPixel(){return this.fileDirectory.getValue("SamplesPerPixel")??1}getTileWidth(){return this.isTiled?this.fileDirectory.getValue("TileWidth")||0:this.getWidth()}getTileHeight(){if(this.isTiled)return this.fileDirectory.getValue("TileLength")||0;let t=this.fileDirectory.hasTag("RowsPerStrip")&&this.fileDirectory.getValue("RowsPerStrip");return t?Math.min(t,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(t){return this.isTiled||(t+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-t*this.getTileHeight()}getBytesPerPixel(){let t=0,e=this.fileDirectory.getValue("BitsPerSample")||[];for(let n=0;n<e.length;++n)t+=this.getSampleByteSize(n);return t}getSampleByteSize(t){let e=this.fileDirectory.getValue("BitsPerSample")||[];if(t>=e.length)throw new RangeError(`Sample index ${t} is out of range.`);return Math.ceil(e[t]/8)}getReaderForSample(t){let e=this.fileDirectory.getValue("SampleFormat"),n=e?e[t]:1,i=(this.fileDirectory.getValue("BitsPerSample")||[])[t];switch(n){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(r,s){return Oe(this,r,s)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(t=0){let e=this.fileDirectory.getValue("SampleFormat");return e?e[t]:1}getBitsPerSample(t=0){let e=this.fileDirectory.getValue("BitsPerSample");return e?e[t]:0}getArrayForSample(t,e){let n=this.getSampleFormat(t),i=this.getBitsPerSample(t);return $i(n,i,e)}async getTileOrStrip(t,e,n,i,r){let s=Math.ceil(this.getWidth()/this.getTileWidth()),g=Math.ceil(this.getHeight()/this.getTileHeight()),I,{tiles:o}=this;if(this.planarConfiguration===1?I=e*s+t:this.planarConfiguration===2&&(I=n*s*g+e*s+t),I===void 0)throw new Error("Could not determine tile or strip index.");let a,E;if(this.isTiled?(a=Number(await this.fileDirectory.loadValueIndexed("TileOffsets",I)),E=Number(await this.fileDirectory.loadValueIndexed("TileByteCounts",I))):(a=Number(await this.fileDirectory.loadValueIndexed("StripOffsets",I)),E=Number(await this.fileDirectory.loadValueIndexed("StripByteCounts",I))),E===0){let c=this.getBlockHeight(e)*this.getTileWidth(),l=this.planarConfiguration===2?this.getSampleByteSize(n):this.getBytesPerPixel(),h=new ArrayBuffer(c*l);return this.getArrayForSample(n,h).fill(this.getGDALNoData()||0),{x:t,y:e,sample:n,data:h}}let B=(await this.source.fetch([{offset:a,length:E}],r))[0],C;return o===null||!o[I]?(C=(async()=>{let c=await i.decode(B),l=this.getSampleFormat(),h=this.getBitsPerSample();return vl(l,h)&&(c=Hl(c,l,this.planarConfiguration,this.getSamplesPerPixel(),h,this.getTileWidth(),this.getBlockHeight(e))),c})(),o!==null&&(o[I]=C)):C=o[I],{x:t,y:e,sample:n,data:await C}}async _readRaster(t,e,n,i,r,s,g,I,o){let a=this.getTileWidth(),E=this.getTileHeight(),B=this.getWidth(),C=this.getHeight(),c=Math.max(Math.floor(t[0]/a),0),l=Math.min(Math.ceil(t[2]/a),Math.ceil(B/a)),h=Math.max(Math.floor(t[1]/E),0),u=Math.min(Math.ceil(t[3]/E),Math.ceil(C/E)),w=t[2]-t[0],y=this.getBytesPerPixel(),f=[],Q=[];for(let k=0;k<e.length;++k){if(this.planarConfiguration===1){let D=await this.fileDirectory.loadValue("BitsPerSample");if(typeof D!="object")throw new Error("Expected BitsPerSample to be an array or typed array.");f.push(_l(D,0,e[k])/8)}else f.push(0);Q.push(this.getReaderForSample(e[k]))}let p=[],{littleEndian:d}=this;for(let k=h;k<u;++k)for(let D=c;D<l;++D){let G;this.planarConfiguration===1&&(G=this.getTileOrStrip(D,k,0,r,o));for(let L=0;L<e.length;++L){let H=L,x=e[L];if(this.planarConfiguration===2&&(y=this.getSampleByteSize(x),G=this.getTileOrStrip(D,k,x,r,o)),!G)throw new Error("Could not get tile or strip data.");let N=G.then(F=>{let v=F.data,b=new DataView(v),T=this.getBlockHeight(F.y),U=F.y*E,K=F.x*a,Z=U+T,z=(F.x+1)*a,M=Q[H],_=Math.min(T,T-(Z-t[3]),C-U),Y=Math.min(a,a-(z-t[2]),B-K);for(let J=Math.max(0,t[1]-U);J<_;++J)for(let q=Math.max(0,t[0]-K);q<Y;++q){let AA=(J*a+q)*y,tA=M.call(b,AA+f[H],d),P;i?(P=(J+U-t[1])*w*e.length+(q+K-t[0])*e.length+H,n[P]=tA):(P=(J+U-t[1])*w+q+K-t[0],n[H][P]=tA)}});p.push(N)}}if(await Promise.all(p),s&&t[2]-t[0]!==s||g&&t[3]-t[1]!==g){let k;i?k=Oa(n,t[2]-t[0],t[3]-t[1],s,g,e.length,I):k=Ka(n,t[2]-t[0],t[3]-t[1],s,g,I);let D=k;return D.width=s??t[2]-t[0],D.height=g??t[3]-t[1],D}let S=n;return S.width=s||t[2]-t[0],S.height=g||t[3]-t[1],S}async readRasters(t={}){let{window:e,samples:n=[],pool:i=null,width:r,height:s,resampleMethod:g,fillValue:I,signal:o}=t,a="interleave"in t&&t.interleave,E=e||[0,0,this.getWidth(),this.getHeight()];if(E[0]>E[2]||E[1]>E[3])throw new Error("Invalid subsets");let B=E[2]-E[0],C=E[3]-E[1],c=B*C,l=this.getSamplesPerPixel();if(!n||!n.length)for(let Q=0;Q<l;++Q)n.push(Q);else for(let Q=0;Q<n.length;++Q)if(n[Q]>=l)return Promise.reject(new RangeError(`Invalid sample index '${n[Q]}'.`));let h;if(a){let{fileDirectory:Q}=this,p=Q.getValue("SampleFormat"),d=p?Math.max.apply(null,Array.from(p)):1;if(d!==1&&d!==2&&d!==3)throw new Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");let S=Q.getValue("BitsPerSample"),k=S?Math.max.apply(null,Array.from(S)):8;if(h=$i(d,k,c*n.length),I){if(Array.isArray(I))throw new Error("When reading interleaved data, fillValue must be a single number.");h.fill(I)}}else{h=[];for(let Q=0;Q<n.length;++Q){let p=this.getArrayForSample(n[Q],c);Array.isArray(I)&&Q<I.length?p.fill(I[Q]):I&&!Array.isArray(I)&&p.fill(I),h.push(p)}}let u=this.fileDirectory.getValue("Compression")||1,w=await va(u,this.fileDirectory),y=i?i.bindParameters(u,w):await Ha(u,w);return await this._readRaster(E,n,h,a,y,r,s,g,o)}async readRGB(t={}){let{window:e,pool:n=null,width:i,height:r,resampleMethod:s,enableAlpha:g=!1,signal:I}=t,o=("interleave"in t&&t.interleave)??!1,a=e||[0,0,this.getWidth(),this.getHeight()];if(a[0]>a[2]||a[1]>a[3])throw new Error("Invalid subsets");let E=this.fileDirectory.getValue("PhotometricInterpretation");if(E===cA.RGB){let y=[0,1,2],f=this.fileDirectory.getValue("ExtraSamples");if(f&&f[0]!==_o.Unspecified&&g){y=[];let Q=this.fileDirectory.getValue("BitsPerSample")||[];for(let p=0;p<Q.length;p+=1)y.push(p)}return this.readRasters({window:e,interleave:o,samples:y,pool:n,width:i,height:r,resampleMethod:s,signal:I})}let B;switch(E){case cA.WhiteIsZero:case cA.BlackIsZero:case cA.Palette:B=[0];break;case cA.CMYK:B=[0,1,2,3];break;case cA.YCbCr:case cA.CIELab:B=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}let C={window:a,interleave:!0,samples:B,pool:n,width:i,height:r,resampleMethod:s,signal:I},{fileDirectory:c}=this,l=await this.readRasters(C),h=2**this.getBitsPerSample(0),u;switch(E){case cA.WhiteIsZero:u=Ho(l,h);break;case cA.BlackIsZero:u=Ko(l,h);break;case cA.Palette:u=Oo(l,await c.loadValue("ColorMap"));break;case cA.CMYK:u=Po(l);break;case cA.YCbCr:u=Jo(l);break;case cA.CIELab:u=qo(l);break;default:throw new Error("Unsupported photometric interpretation.")}if(!o){let y=new Uint8Array(u.length/3),f=new Uint8Array(u.length/3),Q=new Uint8Array(u.length/3);for(let p=0,d=0;p<u.length;p+=3,++d)y[d]=u[p],f[d]=u[p+1],Q[d]=u[p+2];u=[y,f,Q]}let w=u;return w.width=l.width,w.height=l.height,w}async getTiePoints(){if(!this.fileDirectory.hasTag("ModelTiepoint"))return[];let t=await this.fileDirectory.loadValue("ModelTiepoint");if(typeof t!="object")throw new Error("Expected ModelTiepoint to be an array or typed array.");let e=[];for(let n=0;n<t.length;n+=6)e.push({i:t[n],j:t[n+1],k:t[n+2],x:t[n+3],y:t[n+4],z:t[n+5]});return e}async getGDALMetadata(t=null){let e={};if(!this.fileDirectory.hasTag("GDAL_METADATA"))return null;let n=await this.fileDirectory.loadValue("GDAL_METADATA"),i=Ei(n,"Item");t===null?i=i.filter(r=>Pe(r,"sample")===void 0):i=i.filter(r=>Number(Pe(r,"sample"))===t);for(let r=0;r<i.length;++r){let s=i[r];e[Pe(s,"name")]=s.inner}return e}getGDALNoData(){let t=this.fileDirectory.hasTag("GDAL_NODATA")&&this.fileDirectory.getValue("GDAL_NODATA");return t?Number(t.substring(0,t.length-1)):null}getOrigin(){let t=this.fileDirectory.getValue("ModelTiepoint"),e=this.fileDirectory.getValue("ModelTransformation");if(t&&t.length===6)return[t[3],t[4],t[5]];if(e)return[e[3],e[7],e[11]];throw new Error("The image does not have an affine transformation.")}getResolution(t=null){let e=this.fileDirectory.getValue("ModelPixelScale"),n=this.fileDirectory.getValue("ModelTransformation");if(e)return[e[0],-e[1],e[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(t){let[i,r,s]=t.getResolution();return[i*t.getWidth()/this.getWidth(),r*t.getHeight()/this.getHeight(),s*t.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.getGeoKeys()?.GTRasterTypeGeoKey===1}getBoundingBox(t=!1){let e=this.getHeight(),n=this.getWidth(),i=this.fileDirectory.getValue("ModelTransformation");if(i&&!t){let[r,s,,g,I,o,,a]=i,B=[[0,0],[0,e],[n,0],[n,e]].map(([l,h])=>[g+r*l+s*h,a+I*l+o*h]),C=B.map(l=>l[0]),c=B.map(l=>l[1]);return[Math.min(...C),Math.min(...c),Math.max(...C),Math.max(...c)]}else{let r=this.getOrigin(),s=this.getResolution(),g=r[0],I=r[1],o=g+s[0]*n,a=I+s[1]*e;return[Math.min(g,o),Math.min(I,a),Math.max(g,o),Math.max(I,a)]}}},Pa=Ar;var Qt=class{constructor(t){this._dataView=new DataView(t)}get buffer(){return this._dataView.buffer}getUint64(t,e){let n=this.getUint32(t,e),i=this.getUint32(t+4,e),r;if(e){if(r=n+2**32*i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*n+i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}getInt64(t,e){let n=0,i=(this._dataView.getUint8(t+(e?7:0))&128)>0,r=!0;for(let s=0;s<8;s++){let g=this._dataView.getUint8(t+(e?s:7-s));i&&(r?g!==0&&(g=~(g-1)&255,r=!1):g=~g&255),n+=g*256**s}return i&&(n=-n),n}getUint8(t){return this._dataView.getUint8(t)}getInt8(t){return this._dataView.getInt8(t)}getUint16(t,e){return this._dataView.getUint16(t,e)}getInt16(t,e){return this._dataView.getInt16(t,e)}getUint32(t,e){return this._dataView.getUint32(t,e)}getInt32(t,e){return this._dataView.getInt32(t,e)}getFloat16(t,e){return Oe(this._dataView,t,e)}getFloat32(t,e){return this._dataView.getFloat32(t,e)}getFloat64(t,e){return this._dataView.getFloat64(t,e)}};var vA=class{constructor(t,e,n,i){this._dataView=new DataView(t),this._sliceOffset=e,this._littleEndian=n,this._bigTiff=i}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(t,e){return this.sliceOffset<=t&&this.sliceTop>=t+e}readUint8(t){return this._dataView.getUint8(t-this._sliceOffset)}readInt8(t){return this._dataView.getInt8(t-this._sliceOffset)}readUint16(t){return this._dataView.getUint16(t-this._sliceOffset,this._littleEndian)}readInt16(t){return this._dataView.getInt16(t-this._sliceOffset,this._littleEndian)}readUint32(t){return this._dataView.getUint32(t-this._sliceOffset,this._littleEndian)}readInt32(t){return this._dataView.getInt32(t-this._sliceOffset,this._littleEndian)}readFloat32(t){return this._dataView.getFloat32(t-this._sliceOffset,this._littleEndian)}readFloat64(t){return this._dataView.getFloat64(t-this._sliceOffset,this._littleEndian)}readUint64(t){let e=this.readUint32(t),n=this.readUint32(t+4),i;if(this._littleEndian){if(i=e+2**32*n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}if(i=2**32*e+n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}readInt64(t){let e=0,n=(this._dataView.getUint8(t+(this._littleEndian?7:0))&128)>0,i=!0;for(let r=0;r<8;r++){let s=this._dataView.getUint8(t+(this._littleEndian?r:7-r));n&&(i?s!==0&&(s=~(s-1)&255,i=!1):s=~s&255),e+=s*256**r}return n&&(e=-e),e}readOffset(t){return this._bigTiff?this.readUint64(t):this.readUint32(t)}};var Ja=`\r
\r
`;function qa(A){if(typeof Object.fromEntries<"u")return Object.fromEntries(A);let t={};for(let[e,n]of A)t[e.toLowerCase()]=n;return t}function Kl(A){let t=A.split(`\r
`).map(e=>{let n=e.split(":").map(i=>i.trim());return n[0]=n[0].toLowerCase(),n});return qa(t)}function Va(A){if(!A)return{type:null,params:{}};let[t,...e]=A.split(";").map(i=>i.trim()),n=e.map(i=>i.split("="));return{type:t,params:qa(n)}}function Sn(A){let t=NaN,e=NaN,n=NaN;return A&&([,t,e,n]=(A.match(/bytes (\d+)-(\d+)\/(\d+)/)||[]).map(Number)),{start:t,end:e,total:n}}function Za(A,t){let e=-1,n=new TextDecoder("ascii"),i=[],r=`--${t}`,s=`${r}--`;for(let g=0;g<10;++g)n.decode(new Uint8Array(A,g,r.length))===r&&(e=g);if(e===-1)throw new Error("Could not find initial boundary");for(;e<A.byteLength;){let g=n.decode(new Uint8Array(A,e,Math.min(r.length+1024,A.byteLength-e)));if(g.length===0||g.startsWith(s))break;if(!g.startsWith(r))throw new Error("Part does not start with boundary");let I=g.substr(r.length+2);if(I.length===0)break;let o=I.indexOf(Ja),a=Kl(I.substr(0,o)),{start:E,end:B,total:C}=Sn(a["content-range"]),c=e+r.length+o+Ja.length,l=B+1-E;i.push({headers:a,data:A.slice(c,c+l),offset:E,length:l,fileSize:C}),e=c+l+4}return i}var ZA=class{async fetch(t,e){return Promise.all(t.map(async n=>(await this.fetchSlice(n,e)).data))}async fetchSlice(t,e){throw new Error(`fetching of slice ${t} not possible, not implemented`)}get fileSize(){return null}async close(){}};var ht=class extends Map{constructor(t={}){if(super(),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if(typeof t.maxAge=="number"&&t.maxAge===0)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=t.maxSize,this.maxAge=t.maxAge||Number.POSITIVE_INFINITY,this.onEviction=t.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(t){if(typeof this.onEviction=="function")for(let[e,n]of t)this.onEviction(e,n.value)}_deleteIfExpired(t,e){return typeof e.expiry=="number"&&e.expiry<=Date.now()?(typeof this.onEviction=="function"&&this.onEviction(t,e.value),this.delete(t)):!1}_getOrDeleteIfExpired(t,e){if(this._deleteIfExpired(t,e)===!1)return e.value}_getItemValue(t,e){return e.expiry?this._getOrDeleteIfExpired(t,e):e.value}_peek(t,e){let n=e.get(t);return this._getItemValue(t,n)}_set(t,e){this.cache.set(t,e),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(t,e){this.oldCache.delete(t),this._set(t,e)}*_entriesAscending(){for(let t of this.oldCache){let[e,n]=t;this.cache.has(e)||this._deleteIfExpired(e,n)===!1&&(yield t)}for(let t of this.cache){let[e,n]=t;this._deleteIfExpired(e,n)===!1&&(yield t)}}get(t){if(this.cache.has(t)){let e=this.cache.get(t);return this._getItemValue(t,e)}if(this.oldCache.has(t)){let e=this.oldCache.get(t);if(this._deleteIfExpired(t,e)===!1)return this._moveToRecent(t,e),e.value}}set(t,e,{maxAge:n=this.maxAge}={}){let i=typeof n=="number"&&n!==Number.POSITIVE_INFINITY?Date.now()+n:void 0;return this.cache.has(t)?this.cache.set(t,{value:e,expiry:i}):this._set(t,{value:e,expiry:i}),this}has(t){return this.cache.has(t)?!this._deleteIfExpired(t,this.cache.get(t)):this.oldCache.has(t)?!this._deleteIfExpired(t,this.oldCache.get(t)):!1}peek(t){if(this.cache.has(t))return this._peek(t,this.cache);if(this.oldCache.has(t))return this._peek(t,this.oldCache)}delete(t){let e=this.cache.delete(t);return e&&this._size--,this.oldCache.delete(t)||e}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(t){if(!(t&&t>0))throw new TypeError("`maxSize` must be a number greater than 0");let e=[...this._entriesAscending()],n=e.length-t;n<0?(this.cache=new Map(e),this.oldCache=new Map,this._size=e.length):(n>0&&this._emitEvictions(e.slice(0,n)),this.oldCache=new Map(e.slice(n)),this.cache=new Map,this._size=0),this.maxSize=t}*keys(){for(let[t]of this)yield t}*values(){for(let[,t]of this)yield t}*[Symbol.iterator](){for(let t of this.cache){let[e,n]=t;this._deleteIfExpired(e,n)===!1&&(yield[e,n.value])}for(let t of this.oldCache){let[e,n]=t;this.cache.has(e)||this._deleteIfExpired(e,n)===!1&&(yield[e,n.value])}}*entriesDescending(){let t=[...this.cache];for(let e=t.length-1;e>=0;--e){let n=t[e],[i,r]=n;this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}t=[...this.oldCache];for(let e=t.length-1;e>=0;--e){let n=t[e],[i,r]=n;this.cache.has(i)||this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}}*entriesAscending(){for(let[t,e]of this._entriesAscending())yield[t,e.value]}get size(){if(!this._size)return this.oldCache.size;let t=0;for(let e of this.oldCache.keys())this.cache.has(e)||t++;return Math.min(this._size+t,this.maxSize)}entries(){return this.entriesAscending()}forEach(t,e=this){for(let[n,i]of this.entriesAscending())t.call(e,i,n,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}};async function ja(A){return new Promise(t=>setTimeout(t,A))}function Wa(A,t){let e=Array.isArray(A)?A:Array.from(A),n=Array.isArray(t)?t:Array.from(t);return e.map((i,r)=>[i,n[r]])}var yA=class A extends Error{constructor(...t){super(...t),Error.captureStackTrace&&Error.captureStackTrace(this,A),this.name="AbortError",this.signal=void 0}},er=class extends Error{constructor(t,e){super(e),this.errors=t,this.message=e,this.name="AggregateError"}},za=er;var tr=class{constructor(t,e,n){this.offset=t,this.length=e,this.data=n}get top(){return this.offset+this.length}},Nn=class{constructor(t,e,n){this.offset=t,this.length=e,this.blockIds=n}},kn=class extends ZA{constructor(t,{blockSize:e=65536,cacheSize:n=100}={}){super(),this.source=t,this.blockSize=e,this.blockCache=new ht({maxSize:n,onEviction:(i,r)=>{this.evictedBlocks.set(i,r)}}),this.evictedBlocks=new Map,this.blockRequests=new Map,this.blockIdsToFetch=new Set,this.abortedBlockIds=new Set}get fileSize(){return this.source.fileSize}async fetch(t,e){let n=[],i=[],r=[];this.evictedBlocks.clear();for(let{offset:B,length:C}of t){let c=B+C,{fileSize:l}=this;l!==null&&(c=Math.min(c,l));let h=Math.floor(B/this.blockSize)*this.blockSize;for(let u=h;u<c;u+=this.blockSize){let w=Math.floor(u/this.blockSize);!this.blockCache.has(w)&&!this.blockRequests.has(w)&&(this.blockIdsToFetch.add(w),i.push(w)),this.blockRequests.has(w)&&n.push(this.blockRequests.get(w)),r.push(w)}}await ja(),this.fetchBlocks(e);let s=[];for(let B of i)this.blockRequests.has(B)&&s.push(this.blockRequests.get(B));await Promise.allSettled(n),await Promise.allSettled(s);let g=[],I=r.filter(B=>this.abortedBlockIds.has(B)||!this.blockCache.has(B));if(I.forEach(B=>this.blockIdsToFetch.add(B)),I.length>0&&e&&!e.aborted){this.fetchBlocks();for(let B of I){let C=this.blockRequests.get(B);if(!C)throw new Error(`Block ${B} is not in the block requests`);g.push(C)}await Promise.allSettled(g)}if(e&&e.aborted)throw new yA("Request was aborted");let o=r.map(B=>this.blockCache.get(B)||this.evictedBlocks.get(B)),a=o.filter(B=>!B);if(a.length)throw new za(a,"Request failed");let E=new Map(Wa(r,o));return this.readSliceData(t,E)}fetchBlocks(t){if(this.blockIdsToFetch.size>0){let e=this.groupBlocks(this.blockIdsToFetch),n=e.map(async i=>({...i,...await this.source.fetchSlice(i,t)}));for(let i=0;i<e.length;++i){let r=e[i];for(let s of r.blockIds)this.blockRequests.set(s,(async()=>{try{let g=(await Promise.all(n))[i],I=s*this.blockSize,o=I-g.offset,a=Math.min(o+this.blockSize,g.data.byteLength),E=g.data.slice(o,a),B=new tr(I,E.byteLength,E);this.blockCache.set(s,B),this.abortedBlockIds.delete(s)}catch(g){if(g instanceof yA&&g.name==="AbortError")g.signal=t,this.blockCache.delete(s),this.abortedBlockIds.add(s);else throw g}finally{this.blockRequests.delete(s)}})())}this.blockIdsToFetch.clear()}}groupBlocks(t){let e=Array.from(t).sort((s,g)=>s-g);if(e.length===0)return[];let n=[],i=null,r=[];for(let s of e)i===null||i+1===s?(n.push(s),i=s):(r.push(new Nn(n[0]*this.blockSize,n.length*this.blockSize,n)),n=[s],i=s);return r.push(new Nn(n[0]*this.blockSize,n.length*this.blockSize,n)),r}readSliceData(t,e){return t.map(n=>{let i=n.offset+n.length;this.fileSize!==null&&(i=Math.min(this.fileSize,i));let r=Math.floor(n.offset/this.blockSize),s=Math.floor((i-1)/this.blockSize),g=new ArrayBuffer(n.length),I=new Uint8Array(g);for(let o=r;o<=s;++o){let a=e.get(o);if(!a)continue;let E=a.offset-n.offset,B=a.top-i,C=0,c=0,l;E<0?C=-E:E>0&&(c=E),B<0?l=a.length-C:l=i-a.offset-C;let h=new Uint8Array(a.data,C,l);I.set(h,c)}return g})}};var jA=class{get ok(){return this.status>=200&&this.status<=299}get status(){throw new Error("not implemented")}getHeader(t){throw new Error("not implemented")}async getData(){throw new Error("not implemented")}},WA=class{constructor(t){this.url=t}async request(t){throw new Error("request is not implemented")}};var nr=class extends jA{constructor(t){super(),this.response=t}get status(){return this.response.status}getHeader(t){return this.response.headers.get(t)||void 0}async getData(){return this.response.arrayBuffer?await this.response.arrayBuffer():(await this.response.buffer()).buffer}},Rn=class extends WA{constructor(t,e){super(t),this.credentials=e}async request({headers:t,signal:e}={}){let n=await fetch(this.url,{headers:t,credentials:this.credentials,signal:e});return new nr(n)}};var ir=class extends jA{constructor(t,e){super(),this.xhr=t,this.data=e}get status(){return this.xhr.status}getHeader(t){return this.xhr.getResponseHeader(t)||void 0}async getData(){return this.data}},Gn=class extends WA{constructRequest(t,e){return new Promise((n,i)=>{let r=new XMLHttpRequest;r.open("GET",this.url),r.responseType="arraybuffer";for(let[s,g]of Object.entries(t))r.setRequestHeader(s,g);r.onload=()=>{let s=r.response;n(new ir(r,s))},r.onerror=i,r.onabort=()=>i(new yA("Request aborted")),r.send(),e&&(e.aborted&&r.abort(),e.addEventListener("abort",()=>r.abort()))})}async request({headers:t={},signal:e=void 0}={}){return await this.constructRequest(t,e)}};var es=Rt(Xa(),1),ts=Rt($a(),1),ns=Rt(As(),1);var rr=class extends jA{constructor(t,e){super(),this.response=t,this.dataPromise=e}get status(){return this.response.statusCode}getHeader(t){let e=this.response.headers[t];return Array.isArray(e)?e.join(", "):e}async getData(){return await this.dataPromise}},xn=class extends WA{constructor(t){super(t),this.parsedUrl=ns.default.parse(this.url),this.httpApi=this.parsedUrl.protocol==="http:"?es.default:ts.default}constructRequest(t,e){return new Promise((n,i)=>{let r=this.httpApi.get({...this.parsedUrl,headers:t},s=>{let g=new Promise(I=>{let o=[];s.on("data",a=>{o.push(a)}),s.on("end",()=>{let a=Buffer.concat(o).buffer;I(a)}),s.on("error",i)});n(new rr(s,g))});r.on("error",i),e&&(e.aborted&&r.destroy(new yA("Request aborted")),e.addEventListener("abort",()=>r.destroy(new yA("Request aborted"))))})}async request({headers:t={},signal:e=void 0}={}){return await this.constructRequest(t,e)}};var ft=class extends ZA{constructor(t,{headers:e,maxRanges:n=0,allowFullFile:i}={}){super(),this.client=t,this.headers=e,this.maxRanges=n,this.allowFullFile=i,this._fileSize=null}async fetch(t,e){return this.maxRanges>=t.length?this.fetchSlices(t,e).then(n=>n.map(i=>i.data)):(this.maxRanges>0&&t.length>1,Promise.all(t.map(async n=>(await this.fetchSlice(n,e)).data)))}async fetchSlices(t,e){let n=await this.client.request({headers:{...this.headers,Range:`bytes=${t.map(({offset:i,length:r})=>`${i}-${i+r-1}`).join(",")}`},signal:e});if(n.ok)if(n.status===206){let{type:i,params:r}=Va(n.getHeader("content-type"));if(i==="multipart/byteranges"){let E=Za(await n.getData(),r.boundary);return this._fileSize=E[0].fileSize||null,E}let s=await n.getData(),{start:g,end:I,total:o}=Sn(n.getHeader("content-range"));this._fileSize=o||null;let a=[{data:s,offset:g,length:I+1-g}];if(t.length>1){let E=await Promise.all(t.slice(1).map(B=>this.fetchSlice(B,e)));return a.concat(E)}return a}else{if(!this.allowFullFile)throw new Error("Server responded with full file");let i=await n.getData();return this._fileSize=i.byteLength,[{data:i,offset:0,length:i.byteLength}]}else throw new Error("Error fetching data.")}async fetchSlice(t,e){let{offset:n,length:i}=t,r=await this.client.request({headers:{...this.headers,Range:`bytes=${n}-${n+i-1}`},signal:e});if(r.ok)if(r.status===206){let s=await r.getData(),{total:g}=Sn(r.getHeader("content-range"));return this._fileSize=g||null,{data:s,offset:n,length:i}}else{if(!this.allowFullFile)throw new Error("Server responded with full file");let s=await r.getData();return this._fileSize=s.byteLength,{data:s,offset:0,length:s.byteLength}}else throw new Error("Error fetching data.")}get fileSize(){return this._fileSize}};function or(A,{blockSize:t,cacheSize:e}){return t===void 0?A:new kn(A,{blockSize:t,cacheSize:e})}function Ol(A,{headers:t={},credentials:e,maxRanges:n=0,allowFullFile:i=!1,...r}={}){let s=new Rn(A,e),g=new ft(s,{headers:t,maxRanges:n,allowFullFile:i});return or(g,r)}function Pl(A,{headers:t={},maxRanges:e=0,allowFullFile:n=!1,...i}={}){let r=new Gn(A),s=new ft(r,{headers:t,maxRanges:e,allowFullFile:n});return or(s,i)}function Jl(A,{headers:t={},maxRanges:e=0,allowFullFile:n=!1,...i}={}){let r=new xn(A),s=new ft(r,{headers:t,maxRanges:e,allowFullFile:n});return or(s,i)}function is(A,{forceXHR:t=!1,...e}={}){return typeof fetch=="function"&&!t?Ol(A,e):typeof XMLHttpRequest<"u"?Pl(A,e):Jl(A,e)}var gr=class extends ZA{constructor(t){super(),this.arrayBuffer=t}fetchSlice(t,e){if(e&&e.aborted)throw new yA("Request aborted");return Promise.resolve({data:this.arrayBuffer.slice(t.offset,t.offset+t.length),offset:t.offset,length:t.length})}};function rs(A){return new gr(A)}Ve();function Ne(A,t){switch(A){case m.BYTE:case m.ASCII:case m.UNDEFINED:return new Uint8Array(t);case m.SBYTE:return new Int8Array(t);case m.SHORT:return new Uint16Array(t);case m.SSHORT:return new Int16Array(t);case m.LONG:case m.IFD:return new Uint32Array(t);case m.SLONG:return new Int32Array(t);case m.LONG8:case m.IFD8:return new Array(t);case m.SLONG8:return new Array(t);case m.RATIONAL:return new Uint32Array(t*2);case m.SRATIONAL:return new Int32Array(t*2);case m.FLOAT:return new Float32Array(t);case m.DOUBLE:return new Float64Array(t);default:throw new RangeError(`Invalid field type: ${A}`)}}function ke(A,t){switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:return A.readUint8;case m.SBYTE:return A.readInt8;case m.SHORT:return A.readUint16;case m.SSHORT:return A.readInt16;case m.LONG:case m.IFD:return A.readUint32;case m.SLONG:return A.readInt32;case m.LONG8:case m.IFD8:return A.readUint64;case m.SLONG8:return A.readInt64;case m.RATIONAL:return A.readUint32;case m.SRATIONAL:return A.readInt32;case m.FLOAT:return A.readFloat32;case m.DOUBLE:return A.readFloat64;default:throw new RangeError(`Invalid field type: ${t}`)}}function dt(A=null,t,e,n,i,r,s=!1){let g=$A(n),I=A||Ne(n,i),o=n===m.RATIONAL||n===m.SRATIONAL;if(o)for(let a=0;a<i;a+=2)I[a]=t.call(e,r+a*g),I[a+1]=t.call(e,r+(a*g+4));else for(let a=0;a<i;++a)I[a]=t.call(e,r+a*g);return n===m.ASCII?new TextDecoder("utf-8").decode(I):i===1&&!s&&!o?I[0]:I}var ar=class{constructor(t,e,n,i,r){this.source=t,this.arrayOffset=e,this.littleEndian=n,this.fieldType=i,this.length=r,this.data=Ne(i,r),this.itemSize=$A(i),this.maskBitmap=new Uint8Array(Math.ceil(r/8)),this.fetchIndexPromises=new Map,this.fullFetchPromise=null}async loadAll(){return this.fullFetchPromise||(this.fullFetchPromise=this.source.fetch([{offset:this.arrayOffset,length:this.itemSize*this.length}]).then(t=>{let e=new vA(t[0],this.arrayOffset,!0,!1),n=dt(this.data,ke(e,this.fieldType),e,this.fieldType,this.length,this.arrayOffset,!0);return this.maskBitmap.fill(255),this.fetchIndexPromises.clear(),n})),this.fullFetchPromise}async get(t){if(t<0||t>=this.data.length)throw new RangeError(`Index ${t} out of bounds for length ${this.data.length}`);let e=Math.floor(t/8),n=1<<t%8,i=this.arrayOffset+t*this.itemSize;if((this.maskBitmap[e]&n)===0){if(!this.fetchIndexPromises.has(t)){let r=this.source.fetch([{offset:i,length:this.itemSize}]).then(s=>{let g=new vA(s[0],this.arrayOffset+t*this.itemSize,!0,!1),o=ke(g,this.fieldType).call(g,i);return this.data[t]=o,this.maskBitmap[e]|=n,this.fetchIndexPromises.delete(t),o});this.fetchIndexPromises.set(t,r)}return this.fetchIndexPromises.get(t)}return this.data[t]}},sr=class{constructor(t,e,n,i){this.actualizedFields=t,this.deferredFields=e,this.deferredFieldsBeingResolved=new Map,this.deferredArrays=n,this.nextIFDByteOffset=i}hasTag(t){let e=qe(t);return this.actualizedFields.has(e)||this.deferredFields.has(e)||this.deferredArrays.has(e)}getValue(t){let e=qe(t);if(this.deferredFields.has(e)||this.deferredArrays.has(e)){let i=ce[e]?.name||`Tag${e}`;throw new Error(`Field '${i}' (${e}) is deferred. Use loadValue() to load it asynchronously.`)}if(this.actualizedFields.has(e))return this.actualizedFields.get(e)}async loadValue(t){let e=qe(t);if(this.actualizedFields.has(e))return this.actualizedFields.get(e);if(this.deferredFieldsBeingResolved.has(e))return this.deferredFieldsBeingResolved.get(e);let n=this.deferredFields.get(e);if(n){this.deferredFields.delete(e);let r=(async()=>{try{let s=await n();return this.actualizedFields.set(e,s),s}finally{this.deferredFieldsBeingResolved.delete(e)}})();return this.deferredFieldsBeingResolved.set(e,r),r}let i=this.deferredArrays.get(e);if(i)return i.loadAll()}async loadValueIndexed(t,e){let n=qe(t);if(this.actualizedFields.has(n))return this.actualizedFields.get(n)[e];if(this.deferredArrays.has(n))return this.deferredArrays.get(n).get(e);if(this.hasTag(n)){let i=await this.loadValue(n);if(i&&typeof i!="number")return i[e]}}parseGeoKeyDirectory(){let t=this.getValue("GeoKeyDirectory");if(!t)return null;let e={};for(let n=4;n<=t[3]*4;n+=4){let i=ci[t[n]],r=t[n+1]||null,s=t[n+2],g=t[n+3],I=null;if(!r)I=g;else{if(I=this.getValue(r),typeof I>"u"||I===null)throw new Error(`Could not get value of geoKey '${i}'.`);typeof I=="string"?I=I.substring(g,g+s-1):I.subarray&&(I=I.subarray(g,g+s),s===1&&(I=I[0]))}e[i]=I}return e}toObject(){let t={};for(let[e,n]of this.actualizedFields.entries()){let i=typeof e=="number"?ce[e]:void 0,r=i?i.name:`Tag${e}`;t[r]=n}return t}},Ln=class{constructor(t,e,n,i=!1){this.source=t,this.littleEndian=e,this.bigTiff=n,this.eager=i}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new vA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(t){let e=this.bigTiff?20:12,n=this.bigTiff?8:2,i=await this.getSlice(t),r=this.bigTiff?i.readUint64(t):i.readUint16(t),s=r*(e+(this.bigTiff?16:6));i.covers(t,s)||(i=await this.getSlice(t,s));let g=new Map,I=new Map,o=new Map,a=t+(this.bigTiff?8:2);for(let B=0;B<r;a+=e,++B){let C=i.readUint16(a),c=i.readUint16(a+2),l=this.bigTiff?i.readUint64(a+4):i.readUint32(a+4),h=null,u=null,w=null,y=$A(c),f=a+(this.bigTiff?12:8),Q=ce[C]?.isArray,p=ce[C]?.eager||this.eager;if(y*l<=(this.bigTiff?8:4))h=dt(Ne(c,l),ke(i,c),i,c,l,f,Q);else{let d=i.readOffset(f),S=$A(c)*l;if(i.covers(d,S))h=dt(Ne(c,l),ke(i,c),i,c,l,d,Q);else if(p){let k=await this.getSlice(d,S);h=dt(Ne(c,l),ke(k,c),k,c,l,d,Q)}else Q?w=new ar(this.source,d,this.littleEndian,c,l):u=async()=>{let k=await this.getSlice(d,S);return dt(Ne(c,l),ke(k,c),k,c,l,d,Q)}}h!==null?g.set(C,h):u!==null?I.set(C,u):w!==null&&o.set(C,w)}let E=i.readOffset(t+n+e*r);return new sr(g,I,o,E)}};Ve();function Ir(A,t,e,n){let i=null,r=null,s=$A(t);switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:i=new Uint8Array(e),r=A.readUint8;break;case m.SBYTE:i=new Int8Array(e),r=A.readInt8;break;case m.SHORT:i=new Uint16Array(e),r=A.readUint16;break;case m.SSHORT:i=new Int16Array(e),r=A.readInt16;break;case m.LONG:case m.IFD:i=new Uint32Array(e),r=A.readUint32;break;case m.SLONG:i=new Int32Array(e),r=A.readInt32;break;case m.LONG8:case m.IFD8:i=new Array(e),r=A.readUint64;break;case m.SLONG8:i=new Array(e),r=A.readInt64;break;case m.RATIONAL:i=new Uint32Array(e*2),r=A.readUint32;break;case m.SRATIONAL:i=new Int32Array(e*2),r=A.readInt32;break;case m.FLOAT:i=new Float32Array(e),r=A.readFloat32;break;case m.DOUBLE:i=new Float64Array(e),r=A.readFloat64;break;default:}if(i===null||r===null)throw new RangeError(`Invalid field type: ${t}`);if(t===m.RATIONAL||t===m.SRATIONAL)for(let g=0;g<e;g+=2)i[g]=r.call(A,n+g*s),i[g+1]=r.call(A,n+(g*s+4));else for(let g=0;g<e;++g)i[g]=r.call(A,n+g*s);return t===m.ASCII?new TextDecoder("utf-8").decode(i):i}var Re=class extends Error{constructor(t){super(`No image at index ${t}`),this.index=t}},Cr=class{async getImage(t=0){throw new Error("Not implemented")}async getImageCount(){throw new Error("Not implemented")}async readRasters(t={}){let{window:e,width:n,height:i}=t,{resX:r,resY:s,bbox:g}=t,I=await this.getImage(),o=I,a=await this.getImageCount(),E=I.getBoundingBox();if(e&&g)throw new Error('Both "bbox" and "window" passed.');if(n||i){if(e){let[c,l]=I.getOrigin(),[h,u]=I.getResolution();g=[c+e[0]*h,l+e[1]*u,c+e[2]*h,l+e[3]*u]}let C=g||E;if(n){if(r)throw new Error("Both width and resX passed");r=(C[2]-C[0])/n}if(i){if(s)throw new Error("Both width and resY passed");s=(C[3]-C[1])/i}}if(r||s){let C=[];for(let c=0;c<a;++c){let l=await this.getImage(c),h=l.fileDirectory.getValue("SubfileType"),u=l.fileDirectory.getValue("NewSubfileType");(c===0||h===2||(u||0)&1)&&C.push(l)}C.sort((c,l)=>c.getWidth()-l.getWidth());for(let c=0;c<C.length;++c){let l=C[c],h=(E[2]-E[0])/l.getWidth(),u=(E[3]-E[1])/l.getHeight();if(o=l,r&&r>h||s&&s>u)break}}let B=e;if(g){let[C,c]=I.getOrigin(),[l,h]=o.getResolution(I);B=[Math.round((g[0]-C)/l),Math.round((g[1]-c)/h),Math.round((g[2]-C)/l),Math.round((g[3]-c)/h)],B=[Math.min(B[0],B[2]),Math.min(B[1],B[3]),Math.max(B[0],B[2]),Math.max(B[1],B[3])]}return o.readRasters({...t,window:B})}},bn=class A extends Cr{constructor(t,e,n,i,r={}){super(),this.source=t,this.parser=new Ln(t,e,n,!1),this.littleEndian=e,this.bigTiff=n,this.firstIFDOffset=i,this.cache=r.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new vA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async requestIFD(t){if(this.ifdRequests[t])return this.ifdRequests[t];if(t===0)return this.ifdRequests[t]=this.parser.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[t];if(!this.ifdRequests[t-1])try{this.ifdRequests[t-1]=this.requestIFD(t-1)}catch(e){throw e instanceof Re?new Re(t):e}return this.ifdRequests[t]=(async()=>{let e=this.ifdRequests[t-1];if(!e)throw new Error("Previous IFD request missing");let n=await e;if(n.nextIFDByteOffset===0)throw new Re(t);return this.parser.parseFileDirectoryAt(n.nextIFDByteOffset)})(),this.ifdRequests[t]}async getImage(t=0){return new Pa(await this.requestIFD(t),this.littleEndian,this.cache,this.source)}async getImageCount(){let t=0,e=!0;for(;e;)try{await this.requestIFD(t),++t}catch(n){if(n instanceof Re)e=!1;else throw n}return t}async getGhostValues(){let t=this.bigTiff?16:8;if(this.ghostValues!==null)return this.ghostValues;let e="GDAL_STRUCTURAL_METADATA_SIZE=",n=e.length+100,i=await this.getSlice(t,n);if(e===Ir(i,m.ASCII,e.length,t)){let s=Ir(i,m.ASCII,n,t).split(`
`)[0],g=Number(s.split("=")[1].split(" ")[0])+s.length;g>n&&(i=await this.getSlice(t,g));let I=Ir(i,m.ASCII,g,t),o={};I.split(`
`).filter(a=>a.length>0).map(a=>a.split("=")).forEach(([a,E])=>{o[a]=E}),this.ghostValues=o}return this.ghostValues}static async fromSource(t,e,n){let i=(await t.fetch([{offset:0,length:1024}],n))[0],r=new Qt(i),s=r.getUint16(0,!1),g;if(s===18761)g=!0;else if(s===19789)g=!1;else throw new TypeError("Invalid byte order value.");let I=r.getUint16(2,g),o;if(I===42)o=!1;else if(I===43){if(o=!0,r.getUint16(4,g)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");let a=o?r.getUint64(8,g):r.getUint32(4,g);return new A(t,g,o,a,e)}close(){return typeof this.source.close=="function"?this.source.close():!1}};async function os(A,t={},e){return bn.fromSource(is(A,t),void 0,e)}async function gs(A,t){return bn.fromSource(rs(A),void 0,t)}var Er=new TextEncoder,cr=new TextDecoder,Cs="TGPC",ql=1e3,as=new Map,ss=new Map,Is=new Map;function Vl(A){return A instanceof Error&&A.message.startsWith("Unsupported cache version ")}function Br(A){return{version:A,entries:{}}}function lr(A){return A.replaceAll(/[^A-Za-z0-9._-]+/g,"-")}function Fn(A){let t=5381;for(let e=0;e<A.length;e+=1)t=(t<<5)+t^A.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function Zl(A){return[A.minLat,A.maxLat,A.minLon,A.maxLon].map(t=>t.toFixed(6)).join("_")}function jl(A){let t=Er.encode(JSON.stringify({version:2,bounds:A.bounds,width:A.width,height:A.height,noDataValue:A.noDataValue})),e=new Uint8Array(A.values.buffer.slice(0)),n=new Uint8Array(8+t.length+e.length);n.set(Er.encode(Cs),0);let i=new DataView(n.buffer);return i.setUint16(4,2,!0),i.setUint16(6,t.length,!0),n.set(t,8),n.set(e,8+t.length),n}function Wl(A){if(A.length<8)throw new Error("Cache record too small.");if(cr.decode(A.slice(0,4))!==Cs)throw new Error("Invalid cache record magic.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==2)throw new Error(`Unsupported cache version ${n}.`);let i=e.getUint16(6,!0),r=8,s=r+i;if(s>A.length)throw new Error("Invalid cache record metadata length.");let g=JSON.parse(cr.decode(A.slice(r,s))),I=A.slice(s);if(I.byteLength%Float32Array.BYTES_PER_ELEMENT!==0)throw new Error("Invalid cached raster byte length.");let o=new Float32Array(I.buffer.slice(I.byteOffset,I.byteOffset+I.byteLength));if(o.length!==g.width*g.height)throw new Error("Cached raster dimensions do not match metadata.");return{bounds:g.bounds,width:g.width,height:g.height,values:o,noDataValue:g.noDataValue}}function zl(A){return Object.values(A.entries).reduce((t,e)=>t+e.size,0)}function Qr(A){let t=null,e=!1,n=null;async function i(B){t=B,await X.writeFile(A.indexPath,Er.encode(JSON.stringify(B)))}function r(){n!=null&&(clearTimeout(n),n=null),e=!1}async function s(B){r(),await i(B)}function g(B){t=B,e=!0,n==null&&(n=setTimeout(()=>{n=null,!(!e||!t)&&(e=!1,i(t).catch(C=>{console.warn("Unable to persist terrain cache index usage data.",C)}))},ql))}async function I(){return r(),await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),t=Br(A.version),t}async function o(){if(t)return t;if(!await X.fileExists(A.indexPath))return t=Br(A.version),t;try{let B=await X.readFile(A.indexPath),C=JSON.parse(cr.decode(B));return C.version!==A.version||!C.entries?I():(t=C,t)}catch{return I()}}async function a(B,C){A.deleteMemoryEntry(C.key),delete B.entries[C.key],await X.fileExists(C.path)&&await X.deleteFile(C.path)}async function E(B){let C=zl(B);if(C<=A.maxBytes)return;let c=Object.values(B.entries).sort((l,h)=>l.lastUsed-h.lastUsed);for(let l of c)if(await a(B,l),C-=l.size,C<=A.maxBytes)break}return{getMemory(B){return A.memoryCache.get(B)},loadIndex:o,async get(B){if(A.memoryCache.has(B))return A.memoryCache.get(B)??null;let C=await o(),c=C.entries[B];if(!c)return null;if(!await X.fileExists(c.path))return delete C.entries[B],await s(C),null;try{let l=await X.readFile(c.path),h=A.decode(l);return A.memoryCache.set(B,h),c.lastUsed=Date.now(),g(C),h}catch(l){return A.onDecodeError?.(B,l),await a(C,c),await s(C),null}},async put(B,C,c){let l=await o(),h=A.encode(c);A.memoryCache.set(B,c),await X.writeFile(C,h),l.entries[B]={key:B,path:C,size:h.byteLength,lastUsed:Date.now()},await E(l),await s(l)},async invalidate(B){A.deleteMemoryEntry(B);let C=await o(),c=C.entries[B];c&&(await a(C,c),await s(C))},async clear(){r();let B=await o(),C=Object.values(B.entries);for(let c of C)await X.fileExists(c.path)&&await X.deleteFile(c.path);return await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),A.memoryCache.clear(),t=Br(A.version),C.length}}}function Bs(A){return A}function Es(A){return A}var hr=Qr({version:2,indexPath:Zr,maxBytes:jr,memoryCache:as,encode:jl,decode:Wl,deleteMemoryEntry:A=>as.delete(A),onDecodeError:(A,t)=>{Vl(t)&&console.warn(`Discarding outdated cached terrain tile for ${A}: ${t instanceof Error?t.message:"Unknown error"}`)}}),fr=Qr({version:ve,indexPath:Xr,maxBytes:$r,memoryCache:Is,encode:Es,decode:Bs,deleteMemoryEntry:A=>Is.delete(A)}),cs=Qr({version:_e,indexPath:Wr,maxBytes:zr,memoryCache:ss,encode:Es,decode:Bs,deleteMemoryEntry:A=>ss.delete(A)});function ls(A,t){let n=`${lr(t)}-${Fn(A)}.bin`;return{key:A,path:`${Ye}/v${2}/${n}`}}function Qs(A,t){let n=`${lr(t.split(/[\\/]/).filter(Boolean).pop()||"track").replace(/(?:\.gpx)?$/i,"")||"track"}-${Fn(A)}.cimal`;return{key:A,path:`${jn}/v${ve}/${n}`}}function hs(A,t){let n=`${lr(t)}-${Fn(A)}.bin`;return{key:A,path:`${Zn}/v${_e}/${n}`}}function fs(A){return hr.getMemory(A)}async function ds(A){return hr.get(A)}async function us(A,t,e){await hr.put(A,t,e)}async function ws(A){return fr.get(A)}async function ps(A,t,e){await fr.put(A,t,e)}async function ys(A){await fr.invalidate(A)}async function ms(A){return cs.get(A)}async function Ds(A,t,e){await cs.put(A,t,e)}function Ss(A,t,e,n){return[`v${2}`,A,Zl(t),e,n,"bilinear"].join("|")}function Ns(A,t,e,n){return[`v${ve}`,A,e,n,Fn(t)].join("|")}function ks(A,t,e){return[`v${_e}`,"openhikingmap",A,t,e].join("|")}function nA(A,t,e){return Math.min(e,Math.max(t,A))}function xe(A,t,e){return A+(t-A)*e}function ut(A){return A*Math.PI/180}function Un(A,t){let e=ut(A.lat),n=ut(t.lat),i=ut(t.lat-A.lat),r=ut(t.lon-A.lon),s=Math.sin(i/2),g=Math.sin(r/2),I=s*s+Math.cos(e)*Math.cos(n)*g*g;return 2*6371e3*Math.asin(Math.min(1,Math.sqrt(I)))}function Rs(A){if(A.length===0)throw new Error("Cannot compute bounds for an empty point set.");let t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let r of A)t=Math.min(t,r.lat),e=Math.max(e,r.lat),n=Math.min(n,r.lon),i=Math.max(i,r.lon);return{minLat:t,maxLat:e,minLon:n,maxLon:i}}function Mn(A){return Math.max(0,A.maxLon-A.minLon)}function Tn(A){return Math.max(0,A.maxLat-A.minLat)}function Gs(A,t,e){return{minLat:A.minLat-t,maxLat:A.maxLat+t,minLon:A.minLon-e,maxLon:A.maxLon+e}}function dr(A){return{lat:(A.minLat+A.maxLat)/2,lon:(A.minLon+A.maxLon)/2}}function ur(A){let t=ut(A),e=111132.92-559.82*Math.cos(2*t)+1.175*Math.cos(4*t),n=111412.84*Math.cos(t)-93.5*Math.cos(3*t);return{lat:e,lon:Math.max(1,n)}}function wt(A,t){let e=Math.max(A.minLat,t.minLat),n=Math.min(A.maxLat,t.maxLat),i=Math.max(A.minLon,t.minLon),r=Math.min(A.maxLon,t.maxLon);return e>=n||i>=r?null:{minLat:e,maxLat:n,minLon:i,maxLon:r}}function xs(A,t,e){return{x:(A.lon-t.lon)*e.lon,z:(A.lat-t.lat)*-e.lat}}function bs(A,t){return Math.abs(A).toString().padStart(t,"0")}function AQ(A){return`${A>=0?"N":"S"}${bs(A,2)}_00`}function eQ(A){return`${A>=0?"E":"W"}${bs(A,3)}_00`}function Fs(A){return`Copernicus_DSM_COG_${10}_${AQ(A.southLat)}_${eQ(A.westLon)}_DEM`}function tQ(A){let t=Fs(A);return`${Vr}/${t}/${t}.tif`}function Us(A){let t=Math.floor(A.minLat),e=Math.ceil(A.maxLat)-1,n=Math.floor(A.minLon),i=Math.ceil(A.maxLon)-1,r=[];for(let s=t;s<=e;s+=1)for(let g=n;g<=i;g+=1)r.push({southLat:s,westLon:g});return r.length===0&&r.push({southLat:Math.floor(A.minLat),westLon:Math.floor(A.minLon)}),r}function nQ(A,t,e,n){let i=nA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=nA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),s=nA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=nA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),s+1,n);return[i,s,r,g]}async function iQ(A){let t=new AbortController,e=setTimeout(()=>t.abort(),45e3);try{let n=await fetch(A,{signal:t.signal});if(!n.ok)throw new Error(`Failed to fetch Copernicus tile ${A}: ${n.status} ${n.statusText}`);return await n.arrayBuffer()}finally{clearTimeout(e)}}async function Ms(A,t,e){let n={minLat:A.southLat,maxLat:A.southLat+1,minLon:A.westLon,maxLon:A.westLon+1},i=wt(n,t);if(!i)return null;let r=nA(Math.ceil((i.maxLon-i.minLon)*e.lon)+2,16,640),s=nA(Math.ceil((i.maxLat-i.minLat)*e.lat)+2,16,640),g=Fs(A),I=Ss(g,i,r,s),o=fs(I);if(o)return o;let a=await ds(I);if(a)return a;let E=await iQ(tQ(A)),C=await(await gs(E)).getImage(),[c,l,h,u]=C.getBoundingBox(),w={minLat:l,maxLat:u,minLon:c,maxLon:h},y=wt(w,t);if(!y)return null;let f=nQ(w,y,C.getWidth(),C.getHeight()),Q=await C.readRasters({window:f,width:r,height:s,interleave:!0,fillValue:0,resampleMethod:"bilinear"}),p={bounds:y,width:r,height:s,values:Q,noDataValue:C.getGDALNoData()},d=ls(I,g);return await us(d.key,d.path,p),p}function Yn(A,t){return!Number.isFinite(A)||t!=null&&A===t?null:A}function rQ(A,t,e){let{bounds:n,width:i,height:r,values:s,noDataValue:g}=A;if(t<n.minLat||t>n.maxLat||e<n.minLon||e>n.maxLon)return null;let I=(e-n.minLon)/(n.maxLon-n.minLon)*(i-1),o=(n.maxLat-t)/(n.maxLat-n.minLat)*(r-1),a=Math.floor(I),E=Math.floor(o),B=Math.min(i-1,a+1),C=Math.min(r-1,E+1),c=I-a,l=o-E,h=Yn(s[E*i+a],g),u=Yn(s[E*i+B],g),w=Yn(s[C*i+a],g),y=Yn(s[C*i+B],g),f=[h,u,w,y].filter(G=>G!=null);if(f.length===0)return null;if(f.length<4)return f.reduce((G,L)=>G+L,0)/f.length;let[Q,p,d,S]=f,k=Q*(1-c)+p*c,D=d*(1-c)+S*c;return k*(1-l)+D*l}function wr(A,t,e){for(let n of A){let i=rQ(n,t,e);if(i!=null)return i}return null}var Ts=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",oQ=Ts+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",gQ="["+Ts+"]["+oQ+"]*",aQ=new RegExp("^"+gQ+"$");function _n(A,t){let e=[],n=t.exec(A);for(;n;){let i=[];i.startIndex=t.lastIndex-n[0].length;let r=n.length;for(let s=0;s<r;s++)i.push(n[s]);e.push(i),n=t.exec(A)}return e}var Le=function(A){let t=aQ.exec(A);return!(t===null||typeof t>"u")};function Ys(A){return typeof A<"u"}var pt=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],vn=["__proto__","constructor","prototype"];var sQ={allowBooleanAttributes:!1,unpairedTags:[]};function Os(A,t){t=Object.assign({},sQ,t);let e=[],n=!1,i=!1;A[0]==="\uFEFF"&&(A=A.substr(1));for(let r=0;r<A.length;r++)if(A[r]==="<"&&A[r+1]==="?"){if(r+=2,r=vs(A,r),r.err)return r}else if(A[r]==="<"){let s=r;if(r++,A[r]==="!"){r=Hs(A,r);continue}else{let g=!1;A[r]==="/"&&(g=!0,r++);let I="";for(;r<A.length&&A[r]!==">"&&A[r]!==" "&&A[r]!=="	"&&A[r]!==`
`&&A[r]!=="\r";r++)I+=A[r];if(I=I.trim(),I[I.length-1]==="/"&&(I=I.substring(0,I.length-1),r--),!hQ(I)){let E;return I.trim().length===0?E="Invalid space after '<'.":E="Tag '"+I+"' is an invalid name.",eA("InvalidTag",E,BA(A,r))}let o=BQ(A,r);if(o===!1)return eA("InvalidAttr","Attributes for '"+I+"' have open quote.",BA(A,r));let a=o.value;if(r=o.index,a[a.length-1]==="/"){let E=r-a.length;a=a.substring(0,a.length-1);let B=Ks(a,t);if(B===!0)n=!0;else return eA(B.err.code,B.err.msg,BA(A,E+B.err.line))}else if(g)if(o.tagClosed){if(a.trim().length>0)return eA("InvalidTag","Closing tag '"+I+"' can't have attributes or invalid starting.",BA(A,s));if(e.length===0)return eA("InvalidTag","Closing tag '"+I+"' has not been opened.",BA(A,s));{let E=e.pop();if(I!==E.tagName){let B=BA(A,E.tagStartPos);return eA("InvalidTag","Expected closing tag '"+E.tagName+"' (opened in line "+B.line+", col "+B.col+") instead of closing tag '"+I+"'.",BA(A,s))}e.length==0&&(i=!0)}}else return eA("InvalidTag","Closing tag '"+I+"' doesn't have proper closing.",BA(A,r));else{let E=Ks(a,t);if(E!==!0)return eA(E.err.code,E.err.msg,BA(A,r-a.length+E.err.line));if(i===!0)return eA("InvalidXml","Multiple possible root nodes found.",BA(A,r));t.unpairedTags.indexOf(I)!==-1||e.push({tagName:I,tagStartPos:s}),n=!0}for(r++;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="!"){r++,r=Hs(A,r);continue}else if(A[r+1]==="?"){if(r=vs(A,++r),r.err)return r}else break;else if(A[r]==="&"){let E=lQ(A,r);if(E==-1)return eA("InvalidChar","char '&' is not expected.",BA(A,r));r=E}else if(i===!0&&!_s(A[r]))return eA("InvalidXml","Extra text at the end",BA(A,r));A[r]==="<"&&r--}}else{if(_s(A[r]))continue;return eA("InvalidChar","char '"+A[r]+"' is not expected.",BA(A,r))}if(n){if(e.length==1)return eA("InvalidTag","Unclosed tag '"+e[0].tagName+"'.",BA(A,e[0].tagStartPos));if(e.length>0)return eA("InvalidXml","Invalid '"+JSON.stringify(e.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return eA("InvalidXml","Start tag expected.",1);return!0}function _s(A){return A===" "||A==="	"||A===`
`||A==="\r"}function vs(A,t){let e=t;for(;t<A.length;t++)if(A[t]=="?"||A[t]==" "){let n=A.substr(e,t-e);if(t>5&&n==="xml")return eA("InvalidXml","XML declaration allowed only at the start of the document.",BA(A,t));if(A[t]=="?"&&A[t+1]==">"){t++;break}else continue}return t}function Hs(A,t){if(A.length>t+5&&A[t+1]==="-"&&A[t+2]==="-"){for(t+=3;t<A.length;t++)if(A[t]==="-"&&A[t+1]==="-"&&A[t+2]===">"){t+=2;break}}else if(A.length>t+8&&A[t+1]==="D"&&A[t+2]==="O"&&A[t+3]==="C"&&A[t+4]==="T"&&A[t+5]==="Y"&&A[t+6]==="P"&&A[t+7]==="E"){let e=1;for(t+=8;t<A.length;t++)if(A[t]==="<")e++;else if(A[t]===">"&&(e--,e===0))break}else if(A.length>t+9&&A[t+1]==="["&&A[t+2]==="C"&&A[t+3]==="D"&&A[t+4]==="A"&&A[t+5]==="T"&&A[t+6]==="A"&&A[t+7]==="["){for(t+=8;t<A.length;t++)if(A[t]==="]"&&A[t+1]==="]"&&A[t+2]===">"){t+=2;break}}return t}var IQ='"',CQ="'";function BQ(A,t){let e="",n="",i=!1;for(;t<A.length;t++){if(A[t]===IQ||A[t]===CQ)n===""?n=A[t]:n!==A[t]||(n="");else if(A[t]===">"&&n===""){i=!0;break}e+=A[t]}return n!==""?!1:{value:e,index:t,tagClosed:i}}var EQ=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Ks(A,t){let e=_n(A,EQ),n={};for(let i=0;i<e.length;i++){if(e[i][1].length===0)return eA("InvalidAttr","Attribute '"+e[i][2]+"' has no space in starting.",yt(e[i]));if(e[i][3]!==void 0&&e[i][4]===void 0)return eA("InvalidAttr","Attribute '"+e[i][2]+"' is without value.",yt(e[i]));if(e[i][3]===void 0&&!t.allowBooleanAttributes)return eA("InvalidAttr","boolean attribute '"+e[i][2]+"' is not allowed.",yt(e[i]));let r=e[i][2];if(!QQ(r))return eA("InvalidAttr","Attribute '"+r+"' is an invalid name.",yt(e[i]));if(!Object.prototype.hasOwnProperty.call(n,r))n[r]=1;else return eA("InvalidAttr","Attribute '"+r+"' is repeated.",yt(e[i]))}return!0}function cQ(A,t){let e=/\d/;for(A[t]==="x"&&(t++,e=/[\da-fA-F]/);t<A.length;t++){if(A[t]===";")return t;if(!A[t].match(e))break}return-1}function lQ(A,t){if(t++,A[t]===";")return-1;if(A[t]==="#")return t++,cQ(A,t);let e=0;for(;t<A.length;t++,e++)if(!(A[t].match(/\w/)&&e<20)){if(A[t]===";")break;return-1}return t}function eA(A,t,e){return{err:{code:A,msg:t,line:e.line||e,col:e.col}}}function QQ(A){return Le(A)}function hQ(A){return Le(A)}function BA(A,t){let e=A.substring(0,t).split(/\r?\n/);return{line:e.length,col:e[e.length-1].length+1}}function yt(A){return A.startIndex+A[1].length}var Ps=A=>pt.includes(A)?"__"+A:A,fQ={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(A,t){return t},attributeValueProcessor:function(A,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(A,t,e){return A},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:Ps};function dQ(A,t){if(typeof A!="string")return;let e=A.toLowerCase();if(pt.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);if(vn.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`)}function Js(A){return typeof A=="boolean"?{enabled:A,maxEntitySize:1e4,maxExpansionDepth:10,maxTotalExpansions:1e3,maxExpandedLength:1e5,maxEntityCount:100,allowedTags:null,tagFilter:null}:typeof A=="object"&&A!==null?{enabled:A.enabled!==!1,maxEntitySize:Math.max(1,A.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,A.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,A.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,A.maxExpandedLength??1e5),maxEntityCount:Math.max(1,A.maxEntityCount??1e3),allowedTags:A.allowedTags??null,tagFilter:A.tagFilter??null}:Js(!0)}var qs=function(A){let t=Object.assign({},fQ,A),e=[{value:t.attributeNamePrefix,name:"attributeNamePrefix"},{value:t.attributesGroupName,name:"attributesGroupName"},{value:t.textNodeName,name:"textNodeName"},{value:t.cdataPropName,name:"cdataPropName"},{value:t.commentPropName,name:"commentPropName"}];for(let{value:n,name:i}of e)n&&dQ(n,i);return t.onDangerousProperty===null&&(t.onDangerousProperty=Ps),t.processEntities=Js(t.processEntities),t.stopNodes&&Array.isArray(t.stopNodes)&&(t.stopNodes=t.stopNodes.map(n=>typeof n=="string"&&n.startsWith("*.")?".."+n.substring(2):n)),t};var Hn;typeof Symbol!="function"?Hn="@@xmlMetadata":Hn=Symbol("XML Node Metadata");var QA=class{constructor(t){this.tagname=t,this.child=[],this[":@"]=Object.create(null)}add(t,e){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t,e){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child}),e!==void 0&&(this.child[this.child.length-1][Hn]={startIndex:e})}static getMetaDataSymbol(){return Hn}};var Dt=class{constructor(t){this.suppressValidationErr=!t,this.options=t}readDocType(t,e){let n=Object.create(null),i=0;if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let r=1,s=!1,g=!1,I="";for(;e<t.length;e++)if(t[e]==="<"&&!g){if(s&&ge(t,"!ENTITY",e)){e+=7;let o,a;if([o,a,e]=this.readEntityExp(t,e+1,this.suppressValidationErr),a.indexOf("&")===-1){if(this.options.enabled!==!1&&this.options.maxEntityCount!=null&&i>=this.options.maxEntityCount)throw new Error(`Entity count (${i+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);let E=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n[o]={regx:RegExp(`&${E};`,"g"),val:a},i++}}else if(s&&ge(t,"!ELEMENT",e)){e+=8;let{index:o}=this.readElementExp(t,e+1);e=o}else if(s&&ge(t,"!ATTLIST",e))e+=8;else if(s&&ge(t,"!NOTATION",e)){e+=9;let{index:o}=this.readNotationExp(t,e+1,this.suppressValidationErr);e=o}else if(ge(t,"!--",e))g=!0;else throw new Error("Invalid DOCTYPE");r++,I=""}else if(t[e]===">"){if(g?t[e-1]==="-"&&t[e-2]==="-"&&(g=!1,r--):r--,r===0)break}else t[e]==="["?s=!0:I+=t[e];if(r!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:n,i:e}}readEntityExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e])&&t[e]!=='"'&&t[e]!=="'";)e++;let i=t.substring(n,e);if(mt(i),e=hA(t,e),!this.suppressValidationErr){if(t.substring(e,e+6).toUpperCase()==="SYSTEM")throw new Error("External entities are not supported");if(t[e]==="%")throw new Error("Parameter entities are not supported")}let r="";if([e,r]=this.readIdentifierVal(t,e,"entity"),this.options.enabled!==!1&&this.options.maxEntitySize!=null&&r.length>this.options.maxEntitySize)throw new Error(`Entity "${i}" size (${r.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return e--,[i,r,e]}readNotationExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);!this.suppressValidationErr&&mt(i),e=hA(t,e);let r=t.substring(e,e+6).toUpperCase();if(!this.suppressValidationErr&&r!=="SYSTEM"&&r!=="PUBLIC")throw new Error(`Expected SYSTEM or PUBLIC, found "${r}"`);e+=r.length,e=hA(t,e);let s=null,g=null;if(r==="PUBLIC")[e,s]=this.readIdentifierVal(t,e,"publicIdentifier"),e=hA(t,e),(t[e]==='"'||t[e]==="'")&&([e,g]=this.readIdentifierVal(t,e,"systemIdentifier"));else if(r==="SYSTEM"&&([e,g]=this.readIdentifierVal(t,e,"systemIdentifier"),!this.suppressValidationErr&&!g))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:i,publicIdentifier:s,systemIdentifier:g,index:--e}}readIdentifierVal(t,e,n){let i="",r=t[e];if(r!=='"'&&r!=="'")throw new Error(`Expected quoted string, found "${r}"`);e++;let s=e;for(;e<t.length&&t[e]!==r;)e++;if(i=t.substring(s,e),t[e]!==r)throw new Error(`Unterminated ${n} value`);return e++,[e,i]}readElementExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);if(!this.suppressValidationErr&&!Le(i))throw new Error(`Invalid element name: "${i}"`);e=hA(t,e);let r="";if(t[e]==="E"&&ge(t,"MPTY",e))e+=4;else if(t[e]==="A"&&ge(t,"NY",e))e+=2;else if(t[e]==="("){e++;let s=e;for(;e<t.length&&t[e]!==")";)e++;if(r=t.substring(s,e),t[e]!==")")throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${t[e]}"`);return{elementName:i,contentModel:r.trim(),index:e}}readAttlistExp(t,e){e=hA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);for(mt(i),e=hA(t,e),n=e;e<t.length&&!/\s/.test(t[e]);)e++;let r=t.substring(n,e);if(!mt(r))throw new Error(`Invalid attribute name: "${r}"`);e=hA(t,e);let s="";if(t.substring(e,e+8).toUpperCase()==="NOTATION"){if(s="NOTATION",e+=8,e=hA(t,e),t[e]!=="(")throw new Error(`Expected '(', found "${t[e]}"`);e++;let I=[];for(;e<t.length&&t[e]!==")";){let o=e;for(;e<t.length&&t[e]!=="|"&&t[e]!==")";)e++;let a=t.substring(o,e);if(a=a.trim(),!mt(a))throw new Error(`Invalid notation name: "${a}"`);I.push(a),t[e]==="|"&&(e++,e=hA(t,e))}if(t[e]!==")")throw new Error("Unterminated list of notations");e++,s+=" ("+I.join("|")+")"}else{let I=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;s+=t.substring(I,e);let o=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!o.includes(s.toUpperCase()))throw new Error(`Invalid attribute type: "${s}"`)}e=hA(t,e);let g="";return t.substring(e,e+8).toUpperCase()==="#REQUIRED"?(g="#REQUIRED",e+=8):t.substring(e,e+7).toUpperCase()==="#IMPLIED"?(g="#IMPLIED",e+=7):[e,g]=this.readIdentifierVal(t,e,"ATTLIST"),{elementName:i,attributeName:r,attributeType:s,defaultValue:g,index:e}}},hA=(A,t)=>{for(;t<A.length&&/\s/.test(A[t]);)t++;return t};function ge(A,t,e){for(let n=0;n<t.length;n++)if(t[n]!==A[e+n+1])return!1;return!0}function mt(A){if(Le(A))return A;throw new Error(`Invalid entity name ${A}`)}var uQ=/^[-+]?0x[a-fA-F0-9]+$/,wQ=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,pQ={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original"};function pr(A,t={}){if(t=Object.assign({},pQ,t),!A||typeof A!="string")return A;let e=A.trim();if(e.length===0)return A;if(t.skipLike!==void 0&&t.skipLike.test(e))return A;if(e==="0")return 0;if(t.hex&&uQ.test(e))return SQ(e,16);if(isFinite(e)){if(e.includes("e")||e.includes("E"))return mQ(A,e,t);{let n=wQ.exec(e);if(n){let i=n[1]||"",r=n[2],s=DQ(n[3]),g=i?A[r.length+1]===".":A[r.length]===".";if(!t.leadingZeros&&(r.length>1||r.length===1&&!g))return A;{let I=Number(e),o=String(I);if(I===0)return I;if(o.search(/[eE]/)!==-1)return t.eNotation?I:A;if(e.indexOf(".")!==-1)return o==="0"||o===s||o===`${i}${s}`?I:A;let a=r?s:e;return r?a===o||i+a===o?I:A:a===o||a===i+o?I:A}}else return A}}else return NQ(A,Number(e),t)}var yQ=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function mQ(A,t,e){if(!e.eNotation)return A;let n=t.match(yQ);if(n){let i=n[1]||"",r=n[3].indexOf("e")===-1?"E":"e",s=n[2],g=i?A[s.length+1]===r:A[s.length]===r;return s.length>1&&g?A:s.length===1&&(n[3].startsWith(`.${r}`)||n[3][0]===r)?Number(t):s.length>0?e.leadingZeros&&!g?(t=(n[1]||"")+n[3],Number(t)):A:Number(t)}else return A}function DQ(A){return A&&A.indexOf(".")!==-1&&(A=A.replace(/0+$/,""),A==="."?A="0":A[0]==="."?A="0"+A:A[A.length-1]==="."&&(A=A.substring(0,A.length-1))),A}function SQ(A,t){if(parseInt)return parseInt(A,t);if(Number.parseInt)return Number.parseInt(A,t);if(window&&window.parseInt)return window.parseInt(A,t);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}function NQ(A,t,e){let n=t===1/0;switch(e.infinity.toLowerCase()){case"null":return null;case"infinity":return t;case"string":return n?"Infinity":"-Infinity";default:return A}}function yr(A){return typeof A=="function"?A:Array.isArray(A)?t=>{for(let e of A)if(typeof e=="string"&&t===e||e instanceof RegExp&&e.test(t))return!0}:()=>!1}var ae=class{constructor(t,e={}){this.pattern=t,this.separator=e.separator||".",this.segments=this._parse(t),this._hasDeepWildcard=this.segments.some(n=>n.type==="deep-wildcard"),this._hasAttributeCondition=this.segments.some(n=>n.attrName!==void 0),this._hasPositionSelector=this.segments.some(n=>n.position!==void 0)}_parse(t){let e=[],n=0,i="";for(;n<t.length;)t[n]===this.separator?n+1<t.length&&t[n+1]===this.separator?(i.trim()&&(e.push(this._parseSegment(i.trim())),i=""),e.push({type:"deep-wildcard"}),n+=2):(i.trim()&&e.push(this._parseSegment(i.trim())),i="",n++):(i+=t[n],n++);return i.trim()&&e.push(this._parseSegment(i.trim())),e}_parseSegment(t){let e={type:"tag"},n=null,i=t,r=t.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(r&&(i=r[1]+r[3],r[2])){let a=r[2].slice(1,-1);a&&(n=a)}let s,g=i;if(i.includes("::")){let a=i.indexOf("::");if(s=i.substring(0,a).trim(),g=i.substring(a+2).trim(),!s)throw new Error(`Invalid namespace in pattern: ${t}`)}let I,o=null;if(g.includes(":")){let a=g.lastIndexOf(":"),E=g.substring(0,a).trim(),B=g.substring(a+1).trim();["first","last","odd","even"].includes(B)||/^nth\(\d+\)$/.test(B)?(I=E,o=B):I=g}else I=g;if(!I)throw new Error(`Invalid segment pattern: ${t}`);if(e.tag=I,s&&(e.namespace=s),n)if(n.includes("=")){let a=n.indexOf("=");e.attrName=n.substring(0,a).trim(),e.attrValue=n.substring(a+1).trim()}else e.attrName=n.trim();if(o){let a=o.match(/^nth\((\d+)\)$/);a?(e.position="nth",e.positionValue=parseInt(a[1],10)):e.position=o}return e}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}};var kQ=new Set(["push","pop","reset","updateCurrent","restore"]),be=class{constructor(t={}){this.separator=t.separator||".",this.path=[],this.siblingStacks=[]}push(t,e=null,n=null){if(this._pathStringCache=null,this.path.length>0){let a=this.path[this.path.length-1];a.values=void 0}let i=this.path.length;this.siblingStacks[i]||(this.siblingStacks[i]=new Map);let r=this.siblingStacks[i],s=n?`${n}:${t}`:t,g=r.get(s)||0,I=0;for(let a of r.values())I+=a;r.set(s,g+1);let o={tag:t,position:I,counter:g};n!=null&&(o.namespace=n),e!=null&&(o.values=e),this.path.push(o)}pop(){if(this.path.length===0)return;this._pathStringCache=null;let t=this.path.pop();return this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1),t}updateCurrent(t){if(this.path.length>0){let e=this.path[this.path.length-1];t!=null&&(e.values=t)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(t){return this.path.length===0?void 0:this.path[this.path.length-1].values?.[t]}hasAttr(t){if(this.path.length===0)return!1;let e=this.path[this.path.length-1];return e.values!==void 0&&t in e.values}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(t,e=!0){let n=t||this.separator;if(n===this.separator&&e===!0){if(this._pathStringCache!==null&&this._pathStringCache!==void 0)return this._pathStringCache;let r=this.path.map(s=>e&&s.namespace?`${s.namespace}:${s.tag}`:s.tag).join(n);return this._pathStringCache=r,r}return this.path.map(r=>e&&r.namespace?`${r.namespace}:${r.tag}`:r.tag).join(n)}toArray(){return this.path.map(t=>t.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[]}matches(t){let e=t.segments;return e.length===0?!1:t.hasDeepWildcard()?this._matchWithDeepWildcard(e):this._matchSimple(e)}_matchSimple(t){if(this.path.length!==t.length)return!1;for(let e=0;e<t.length;e++){let n=t[e],i=this.path[e],r=e===this.path.length-1;if(!this._matchSegment(n,i,r))return!1}return!0}_matchWithDeepWildcard(t){let e=this.path.length-1,n=t.length-1;for(;n>=0&&e>=0;){let i=t[n];if(i.type==="deep-wildcard"){if(n--,n<0)return!0;let r=t[n],s=!1;for(let g=e;g>=0;g--){let I=g===this.path.length-1;if(this._matchSegment(r,this.path[g],I)){e=g-1,n--,s=!0;break}}if(!s)return!1}else{let r=e===this.path.length-1;if(!this._matchSegment(i,this.path[e],r))return!1;e--,n--}}return n<0}_matchSegment(t,e,n){if(t.tag!=="*"&&t.tag!==e.tag||t.namespace!==void 0&&t.namespace!=="*"&&t.namespace!==e.namespace)return!1;if(t.attrName!==void 0){if(!n||!e.values||!(t.attrName in e.values))return!1;if(t.attrValue!==void 0){let i=e.values[t.attrName];if(String(i)!==String(t.attrValue))return!1}}if(t.position!==void 0){if(!n)return!1;let i=e.counter??0;if(t.position==="first"&&i!==0)return!1;if(t.position==="odd"&&i%2!==1)return!1;if(t.position==="even"&&i%2!==0)return!1;if(t.position==="nth"&&i!==t.positionValue)return!1}return!0}snapshot(){return{path:this.path.map(t=>({...t})),siblingStacks:this.siblingStacks.map(t=>new Map(t))}}restore(t){this._pathStringCache=null,this.path=t.path.map(e=>({...e})),this.siblingStacks=t.siblingStacks.map(e=>new Map(e))}readOnly(){let t=this;return new Proxy(t,{get(e,n,i){if(kQ.has(n))return()=>{throw new TypeError(`Cannot call '${n}' on a read-only Matcher. Obtain a writable instance to mutate state.`)};let r=Reflect.get(e,n,i);return n==="path"||n==="siblingStacks"?Object.freeze(Array.isArray(r)?r.map(s=>s instanceof Map?Object.freeze(new Map(s)):Object.freeze({...s})):r):typeof r=="function"?r.bind(e):r},set(e,n){throw new TypeError(`Cannot set property '${String(n)}' on a read-only Matcher.`)},deleteProperty(e,n){throw new TypeError(`Cannot delete property '${String(n)}' from a read-only Matcher.`)}})}};function RQ(A,t){if(!A)return{};let e=t.attributesGroupName?A[t.attributesGroupName]:A;if(!e)return{};let n={};for(let i in e)if(i.startsWith(t.attributeNamePrefix)){let r=i.substring(t.attributeNamePrefix.length);n[r]=e[i]}else n[i]=e[i];return n}function GQ(A){if(!A||typeof A!="string")return;let t=A.indexOf(":");if(t!==-1&&t>0){let e=A.substring(0,t);if(e!=="xmlns")return e}}var St=class{constructor(t){if(this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(e,n)=>Vs(n,10,"&#")},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(e,n)=>Vs(n,16,"&#x")}},this.addExternalEntities=xQ,this.parseXml=MQ,this.parseTextData=LQ,this.resolveNameSpace=bQ,this.buildAttributesMap=UQ,this.isItStopNode=vQ,this.replaceEntitiesValue=YQ,this.readStopNodeData=KQ,this.saveTextToParentTag=_Q,this.addChild=TQ,this.ignoreAttributesFn=yr(this.options.ignoreAttributes),this.entityExpansionCount=0,this.currentExpandedLength=0,this.matcher=new be,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.options.stopNodes&&this.options.stopNodes.length>0){this.stopNodeExpressions=[];for(let e=0;e<this.options.stopNodes.length;e++){let n=this.options.stopNodes[e];typeof n=="string"?this.stopNodeExpressions.push(new ae(n)):n instanceof ae&&this.stopNodeExpressions.push(n)}}}};function xQ(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e],i=n.replace(/[.\-+*:]/g,"\\.");this.lastEntities[n]={regex:new RegExp("&"+i+";","g"),val:A[n]}}}function LQ(A,t,e,n,i,r,s){if(A!==void 0&&(this.options.trimValues&&!n&&(A=A.trim()),A.length>0)){s||(A=this.replaceEntitiesValue(A,t,e));let g=this.options.jPath?e.toString():e,I=this.options.tagValueProcessor(t,A,g,i,r);return I==null?A:typeof I!=typeof A||I!==A?I:this.options.trimValues?Sr(A,this.options.parseTagValue,this.options.numberParseOptions):A.trim()===A?Sr(A,this.options.parseTagValue,this.options.numberParseOptions):A}}function bQ(A){if(this.options.removeNSPrefix){let t=A.split(":"),e=A.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(A=e+t[1])}return A}var FQ=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function UQ(A,t,e){if(this.options.ignoreAttributes!==!0&&typeof A=="string"){let n=_n(A,FQ),i=n.length,r={},s=new Array(i),g=!1,I={};for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]),C=n[E][4];if(B.length&&C!==void 0){let c=C;this.options.trimValues&&(c=c.trim()),c=this.replaceEntitiesValue(c,e,this.readonlyMatcher),s[E]=c,I[B]=c,g=!0}}g&&typeof t=="object"&&t.updateCurrent&&t.updateCurrent(I);let o=this.options.jPath?t.toString():this.readonlyMatcher,a=!1;for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]);if(this.ignoreAttributesFn(B,o))continue;let C=this.options.attributeNamePrefix+B;if(B.length)if(this.options.transformAttributeName&&(C=this.options.transformAttributeName(C)),C=Zs(C,this.options),n[E][4]!==void 0){let c=s[E],l=this.options.attributeValueProcessor(B,c,o);l==null?r[C]=c:typeof l!=typeof c||l!==c?r[C]=l:r[C]=Sr(c,this.options.parseAttributeValue,this.options.numberParseOptions),a=!0}else this.options.allowBooleanAttributes&&(r[C]=!0,a=!0)}if(!a)return;if(this.options.attributesGroupName){let E={};return E[this.options.attributesGroupName]=r,E}return r}}var MQ=function(A){A=A.replace(/\r\n?/g,`
`);let t=new QA("!xml"),e=t,n="";this.matcher.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0;let i=new Dt(this.options.processEntities);for(let r=0;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="/"){let g=se(A,">",r,"Closing Tag is not closed."),I=A.substring(r+2,g).trim();if(this.options.removeNSPrefix){let a=I.indexOf(":");a!==-1&&(I=I.substr(a+1))}I=mr(this.options.transformTagName,I,"",this.options).tagName,e&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher));let o=this.matcher.getCurrentTag();if(I&&this.options.unpairedTags.indexOf(I)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${I}>`);o&&this.options.unpairedTags.indexOf(o)!==-1&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,e=this.tagsNodeStack.pop(),n="",r=g}else if(A[r+1]==="?"){let g=Dr(A,r,!1,"?>");if(!g)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,e,this.readonlyMatcher),!(this.options.ignoreDeclaration&&g.tagName==="?xml"||this.options.ignorePiTags)){let I=new QA(g.tagName);I.add(this.options.textNodeName,""),g.tagName!==g.tagExp&&g.attrExpPresent&&(I[":@"]=this.buildAttributesMap(g.tagExp,this.matcher,g.tagName)),this.addChild(e,I,this.readonlyMatcher,r)}r=g.closeIndex+1}else if(A.substr(r+1,3)==="!--"){let g=se(A,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){let I=A.substring(r+4,g-2);n=this.saveTextToParentTag(n,e,this.readonlyMatcher),e.add(this.options.commentPropName,[{[this.options.textNodeName]:I}])}r=g}else if(A.substr(r+1,2)==="!D"){let g=i.readDocType(A,r);this.docTypeEntities=g.entities,r=g.i}else if(A.substr(r+1,2)==="!["){let g=se(A,"]]>",r,"CDATA is not closed.")-2,I=A.substring(r+9,g);n=this.saveTextToParentTag(n,e,this.readonlyMatcher);let o=this.parseTextData(I,e.tagname,this.readonlyMatcher,!0,!1,!0,!0);o==null&&(o=""),this.options.cdataPropName?e.add(this.options.cdataPropName,[{[this.options.textNodeName]:I}]):e.add(this.options.textNodeName,o),r=g+2}else{let g=Dr(A,r,this.options.removeNSPrefix);if(!g){let y=A.substring(Math.max(0,r-50),Math.min(A.length,r+50));throw new Error(`readTagExp returned undefined at position ${r}. Context: "${y}"`)}let I=g.tagName,o=g.rawTagName,a=g.tagExp,E=g.attrExpPresent,B=g.closeIndex;if({tagName:I,tagExp:a}=mr(this.options.transformTagName,I,a,this.options),this.options.strictReservedNames&&(I===this.options.commentPropName||I===this.options.cdataPropName||I===this.options.textNodeName||I===this.options.attributesGroupName))throw new Error(`Invalid tag name: ${I}`);e&&n&&e.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher,!1));let C=e;C&&this.options.unpairedTags.indexOf(C.tagname)!==-1&&(e=this.tagsNodeStack.pop(),this.matcher.pop());let c=!1;a.length>0&&a.lastIndexOf("/")===a.length-1&&(c=!0,I[I.length-1]==="/"?(I=I.substr(0,I.length-1),a=I):a=a.substr(0,a.length-1),E=I!==a);let l=null,h={},u;u=GQ(o),I!==t.tagname&&this.matcher.push(I,{},u),I!==a&&E&&(l=this.buildAttributesMap(a,this.matcher,I),l&&(h=RQ(l,this.options))),I!==t.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode(this.stopNodeExpressions,this.matcher));let w=r;if(this.isCurrentNodeStopNode){let y="";if(c)r=g.closeIndex;else if(this.options.unpairedTags.indexOf(I)!==-1)r=g.closeIndex;else{let Q=this.readStopNodeData(A,o,B+1);if(!Q)throw new Error(`Unexpected end of ${o}`);r=Q.i,y=Q.tagContent}let f=new QA(I);l&&(f[":@"]=l),f.add(this.options.textNodeName,y),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(e,f,this.readonlyMatcher,w)}else{if(c){({tagName:I,tagExp:a}=mr(this.options.transformTagName,I,a,this.options));let y=new QA(I);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,w),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else if(this.options.unpairedTags.indexOf(I)!==-1){let y=new QA(I);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,w),this.matcher.pop(),this.isCurrentNodeStopNode=!1,r=g.closeIndex;continue}else{let y=new QA(I);if(this.tagsNodeStack.length>this.options.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(e),l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,w),e=y}n="",r=B}}else n+=A[r];return t.child};function TQ(A,t,e,n){this.options.captureMetaData||(n=void 0);let i=this.options.jPath?e.toString():e,r=this.options.updateTag(t.tagname,i,t[":@"]);r===!1||(typeof r=="string"&&(t.tagname=r),A.addChild(t,n))}function YQ(A,t,e){let n=this.options.processEntities;if(!n||!n.enabled)return A;if(n.allowedTags){let i=this.options.jPath?e.toString():e;if(!(Array.isArray(n.allowedTags)?n.allowedTags.includes(t):n.allowedTags(t,i)))return A}if(n.tagFilter){let i=this.options.jPath?e.toString():e;if(!n.tagFilter(t,i))return A}for(let i of Object.keys(this.docTypeEntities)){let r=this.docTypeEntities[i],s=A.match(r.regx);if(s){if(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions)throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);let g=A.length;if(A=A.replace(r.regx,r.val),n.maxExpandedLength&&(this.currentExpandedLength+=A.length-g,this.currentExpandedLength>n.maxExpandedLength))throw new Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${n.maxExpandedLength}`)}}if(A.indexOf("&")===-1)return A;for(let i of Object.keys(this.lastEntities)){let r=this.lastEntities[i],s=A.match(r.regex);if(s&&(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}if(A.indexOf("&")===-1)return A;if(this.options.htmlEntities)for(let i of Object.keys(this.htmlEntities)){let r=this.htmlEntities[i],s=A.match(r.regex);if(s&&(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}return A=A.replace(this.ampEntity.regex,this.ampEntity.val),A}function _Q(A,t,e,n){return A&&(n===void 0&&(n=t.child.length===0),A=this.parseTextData(A,t.tagname,e,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,n),A!==void 0&&A!==""&&t.add(this.options.textNodeName,A),A=""),A}function vQ(A,t){if(!A||A.length===0)return!1;for(let e=0;e<A.length;e++)if(t.matches(A[e]))return!0;return!1}function HQ(A,t,e=">"){let n,i="";for(let r=t;r<A.length;r++){let s=A[r];if(n)s===n&&(n="");else if(s==='"'||s==="'")n=s;else if(s===e[0])if(e[1]){if(A[r+1]===e[1])return{data:i,index:r}}else return{data:i,index:r};else s==="	"&&(s=" ");i+=s}}function se(A,t,e,n){let i=A.indexOf(t,e);if(i===-1)throw new Error(n);return i+t.length-1}function Dr(A,t,e,n=">"){let i=HQ(A,t+1,n);if(!i)return;let r=i.data,s=i.index,g=r.search(/\s/),I=r,o=!0;g!==-1&&(I=r.substring(0,g),r=r.substring(g+1).trimStart());let a=I;if(e){let E=I.indexOf(":");E!==-1&&(I=I.substr(E+1),o=I!==i.data.substr(E+1))}return{tagName:I,tagExp:r,closeIndex:s,attrExpPresent:o,rawTagName:a}}function KQ(A,t,e){let n=e,i=1;for(;e<A.length;e++)if(A[e]==="<")if(A[e+1]==="/"){let r=se(A,">",e,`${t} is not closed`);if(A.substring(e+2,r).trim()===t&&(i--,i===0))return{tagContent:A.substring(n,e),i:r};e=r}else if(A[e+1]==="?")e=se(A,"?>",e+1,"StopNode is not closed.");else if(A.substr(e+1,3)==="!--")e=se(A,"-->",e+3,"StopNode is not closed.");else if(A.substr(e+1,2)==="![")e=se(A,"]]>",e,"StopNode is not closed.")-2;else{let r=Dr(A,e,">");r&&((r&&r.tagName)===t&&r.tagExp[r.tagExp.length-1]!=="/"&&i++,e=r.closeIndex)}}function Sr(A,t,e){if(t&&typeof A=="string"){let n=A.trim();return n==="true"?!0:n==="false"?!1:pr(A,e)}else return Ys(A)?A:""}function Vs(A,t,e){let n=Number.parseInt(A,t);return n>=0&&n<=1114111?String.fromCodePoint(n):e+A+";"}function mr(A,t,e,n){if(A){let i=A(t);e===t&&(e=i),t=i}return t=Zs(t,n),{tagName:t,tagExp:e}}function Zs(A,t){if(vn.includes(A))throw new Error(`[SECURITY] Invalid name: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);return pt.includes(A)?t.onDangerousProperty(A):A}var Nr=QA.getMetaDataSymbol();function OQ(A,t){if(!A||typeof A!="object")return{};if(!t)return A;let e={};for(let n in A)if(n.startsWith(t)){let i=n.substring(t.length);e[i]=A[n]}else e[n]=A[n];return e}function kr(A,t,e,n){return js(A,t,e,n)}function js(A,t,e,n){let i,r={};for(let s=0;s<A.length;s++){let g=A[s],I=PQ(g);if(I!==void 0&&I!==t.textNodeName){let o=OQ(g[":@"]||{},t.attributeNamePrefix);e.push(I,o)}if(I===t.textNodeName)i===void 0?i=g[I]:i+=""+g[I];else{if(I===void 0)continue;if(g[I]){let o=js(g[I],t,e,n),a=qQ(o,t);if(g[":@"]?JQ(o,g[":@"],n,t):Object.keys(o).length===1&&o[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?o=o[t.textNodeName]:Object.keys(o).length===0&&(t.alwaysCreateTextNode?o[t.textNodeName]="":o=""),g[Nr]!==void 0&&typeof o=="object"&&o!==null&&(o[Nr]=g[Nr]),r[I]!==void 0&&Object.prototype.hasOwnProperty.call(r,I))Array.isArray(r[I])||(r[I]=[r[I]]),r[I].push(o);else{let E=t.jPath?n.toString():n;t.isArray(I,E,a)?r[I]=[o]:r[I]=o}I!==void 0&&I!==t.textNodeName&&e.pop()}}}return typeof i=="string"?i.length>0&&(r[t.textNodeName]=i):i!==void 0&&(r[t.textNodeName]=i),r}function PQ(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e];if(n!==":@")return n}}function JQ(A,t,e,n){if(t){let i=Object.keys(t),r=i.length;for(let s=0;s<r;s++){let g=i[s],I=g.startsWith(n.attributeNamePrefix)?g.substring(n.attributeNamePrefix.length):g,o=n.jPath?e.toString()+"."+I:e;n.isArray(g,o,!0,!0)?A[g]=[t[g]]:A[g]=t[g]}}}function qQ(A,t){let{textNodeName:e}=t,n=Object.keys(A).length;return!!(n===0||n===1&&(A[e]||typeof A[e]=="boolean"||A[e]===0))}var Fe=class{constructor(t){this.externalEntities={},this.options=qs(t)}parse(t,e){if(typeof t!="string"&&t.toString)t=t.toString();else if(typeof t!="string")throw new Error("XML data is accepted in String or Bytes[] form.");if(e){e===!0&&(e={});let r=Os(t,e);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}let n=new St(this.options);n.addExternalEntities(this.externalEntities);let i=n.parseXml(t);return this.options.preserveOrder||i===void 0?i:kr(i,this.options,n.matcher,n.readonlyMatcher)}addEntity(t,e){if(e.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(e==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}static getMetaDataSymbol(){return QA.getMetaDataSymbol()}};function Kn(A,t){let e=0,n=0,i=0;for(let r=1;r<A.length;r+=1){let s=A[r-1],g=A[r];i+=Un(s,g);let I=t(s),o=t(g);if(I==null||o==null)continue;let a=o-I;a>0?e+=a:n+=Math.abs(a)}return{distanceMeters:i,totalAscent:e,totalDescent:n}}var VQ=new Fe({attributeNamePrefix:"",ignoreAttributes:!1,parseTagValue:!1,removeNSPrefix:!0,trimValues:!0});function Nt(A){return A===void 0?[]:Array.isArray(A)?A:[A]}function Ws(A){let t=Number(A.lat),e=Number(A.lon);if(!Number.isFinite(t)||!Number.isFinite(e))return null;let n=A.ele!==void 0?Number(A.ele):null;return{lat:t,lon:e,ele:Number.isFinite(n)?n:null}}function ZQ(A){let t=Nt(A.trk),e=Nt(A.rte).flatMap(i=>Nt(i.rtept).map(Ws).filter(Boolean)),n=t.flatMap(i=>Nt(i.trkseg).flatMap(r=>Nt(r.trkpt).map(Ws).filter(Boolean)));return n.length>0?n:e}function jQ(A){return/^https?:\/\//i.test(A)}async function Rr(A){if(jQ(A)){let e=await fetch(A);if(!e.ok)throw new Error(`Failed to fetch GPX file: ${e.status} ${e.statusText}`);return await e.text()}let t=A.endsWith(".gpx")?[A]:[A,`${A}.gpx`];for(let e of t)if(await X.fileExists(e)){let n=await X.readFile(e);return new TextDecoder().decode(n)}throw new Error(`GPX file not found in space: ${A}`)}function Gr(A,t){let e=VQ.parse(t),n=e.gpx??e,i=ZQ(n);if(i.length<2)throw new Error("The GPX file did not contain a usable track or route.");let r=Rs(i),s=Kn(i,g=>g.ele);return{sourceUrl:A,points:i,bounds:r,distanceMeters:s.distanceMeters,totalAscent:s.totalAscent,totalDescent:s.totalDescent}}async function zs(A){let t=await Rr(A);return Gr(A,t)}var WQ="https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png";var zQ="OpenHikingMap",Xs={low:{label:"low",initialZoom:11,maxTileRequests:9,maxTextureDimension:1024},standard:{label:"standard",initialZoom:12,maxTileRequests:16,maxTextureDimension:2048},high:{label:"high",initialZoom:13,maxTileRequests:36,maxTextureDimension:4096},ultra:{label:"ultra",initialZoom:14,maxTileRequests:64,maxTextureDimension:8192}},mA=256,$s=6,AI=16384,XQ=12e5,xr=512,$Q=6,Ah=.82;function eh(A){return Xs[A]??Xs.standard}function rI(){return typeof document<"u"&&typeof document.createElement=="function"}function th(){return typeof Image<"u"}function nh(){return typeof OffscreenCanvas<"u"&&typeof createImageBitmap=="function"||rI()}function ih(A){return Math.max(-85.05112878,Math.min(85.05112878,A))}function eI(A,t){return(A+180)/360*2**t}function tI(A,t){let e=ih(A)*Math.PI/180;return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t}function nI(A,t){let e=eI(A.minLon,t),n=eI(A.maxLon,t),i=tI(A.maxLat,t),r=tI(A.minLat,t),s=Math.floor(e),g=Math.max(s,Math.ceil(n)-1),I=Math.floor(i),o=Math.max(I,Math.ceil(r)-1),a=g-s+1,E=o-I+1;return{zoom:t,west:e,east:n,north:i,south:r,tileXStart:s,tileXEnd:g,tileYStart:I,tileYEnd:o,tileColumns:a,tileRows:E,tileCount:a*E}}function rh(A,t){return A.tileCount<=t.maxTileRequests&&A.tileColumns*mA<=AI&&A.tileRows*mA<=AI}function oh(A,t){let e=nI(A,$s);for(let n=t.initialZoom;n>=$s;n-=1){let i=nI(A,n);if(rh(i,t))return i;e=i}return e}function Lr(A,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(A,t);if(rI()){let e=document.createElement("canvas");return e.width=A,e.height=t,e}throw new Error("Canvas raster support is unavailable in this runtime.")}function br(A){return A.getContext("2d")}function gh(A){return new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load raster tile ${A}`)),n.src=A})}async function ah(A){let t=await fetch(A);if(!t.ok)throw new Error(`Failed to load raster tile ${A}: HTTP ${t.status}`);return new Uint8Array(await t.arrayBuffer())}async function iI(A){let t=new Blob([A],{type:"image/png"});if(typeof createImageBitmap=="function")return createImageBitmap(t);if(th()&&typeof URL<"u"&&typeof URL.createObjectURL=="function"){let e=URL.createObjectURL(t);try{return await gh(e)}finally{URL.revokeObjectURL(e)}}throw new Error("Tile image decoding is unavailable in this runtime.")}async function sh(A,t,e,n){let i=ks(A,t,e),r=await ms(i);if(r)return iI(r);let s=await ah(n),g=hs(i,`z${A}-x${t}-y${e}`);return await Ds(g.key,g.path,s),iI(s)}async function Ih(A,t,e){if("toDataURL"in A&&typeof A.toDataURL=="function")return A.toDataURL(t,e);if("convertToBlob"in A&&typeof A.convertToBlob=="function"){let n=await A.convertToBlob({type:t,quality:e}),i=new Uint8Array(await n.arrayBuffer());return XA(i,n.type||t)}throw new Error("Canvas export is unavailable in this runtime.")}function Ch(A,t,e){let n=Lr(t,e),i=br(n);if(!i)throw new Error("Canvas resize context is unavailable in this runtime.");return i.drawImage(A,0,0,t,e),n}async function Bh(A){let t=A;for(;;){let e=await Ih(t,"image/webp",Ah);if(e.length<=XQ||Math.max(t.width,t.height)<=xr)return{dataUrl:e,mimeType:ei(e),width:t.width,height:t.height};let n=Math.max(xr,Math.round(t.width*.75)),i=Math.max(xr,Math.round(t.height*.75));if(n===t.width&&i===t.height)return{dataUrl:e,mimeType:ei(e),width:t.width,height:t.height};t=Ch(t,n,i)}}function Eh(A){let t=2**A.zoom,e=[];for(let n=A.tileYStart;n<=A.tileYEnd;n+=1)for(let i=A.tileXStart;i<=A.tileXEnd;i+=1){let r=(i%t+t)%t,s=Math.max(0,Math.min(t-1,n));e.push({tileX:i,tileY:n,wrappedX:r,clampedY:s,url:WQ.replace("{z}",String(A.zoom)).replace("{x}",String(r)).replace("{y}",String(s))})}return e}async function ch(A,t){let e=new Array(A.length),n=0;async function i(){for(;n<A.length;){let s=n;n+=1,e[s]=await A[s]()}}let r=Math.max(1,Math.min(t,A.length));return await Promise.all(Array.from({length:r},()=>i())),e}async function lh(A){let t=Eh(A).map(e=>async()=>({image:await sh(A.zoom,e.wrappedX,e.clampedY,e.url),tileX:e.tileX,tileY:e.tileY}));return ch(t,$Q)}function Qh(A,t){let e=Lr(A.tileColumns*mA,A.tileRows*mA),n=br(e);if(!n)return null;for(let i of t)n.drawImage(i.image,(i.tileX-A.tileXStart)*mA,(i.tileY-A.tileYStart)*mA,mA,mA);return e}function hh(A,t,e){let n=(t.west-t.tileXStart)*mA,i=(t.north-t.tileYStart)*mA,r=Math.max(1,(t.east-t.west)*mA),s=Math.max(1,(t.south-t.north)*mA),g=Math.min(1,e.maxTextureDimension/Math.max(r,s)),I=Lr(Math.max(1,Math.round(r*g)),Math.max(1,Math.round(s*g))),o=br(I);return o?(o.drawImage(A,n,i,r,s,0,0,I.width,I.height),I):null}async function oI(A,t){if(!nh())return null;let e=eh(t),n=oh(A,e),i=await lh(n),r=Qh(n,i);if(!r)return null;let s=hh(r,n,e);if(!s)return null;let g=await Bh(s);return{kind:"hiking-map",width:g.width,height:g.height,mimeType:g.mimeType,sourceVersion:zQ,resolution:e.label,dataUrl:g.dataUrl}}var fh="https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map",dh="ESA WorldCover 2021 v200",FA=3,gI=0,uh=new Map([[10,[0,100,0]],[20,[255,187,34]],[30,[255,255,76]],[40,[240,150,255]],[50,[250,0,0]],[60,[180,180,180]],[70,[240,240,240]],[80,[0,100,200]],[90,[0,150,160]],[95,[0,207,117]],[100,[250,230,160]]]);function wh(){return typeof ImageData<"u"&&(typeof OffscreenCanvas<"u"||typeof document<"u"&&typeof document.createElement=="function")}function ph(A,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(A,t);if(typeof document<"u"&&typeof document.createElement=="function"){let e=document.createElement("canvas");return e.width=A,e.height=t,e}throw new Error("Canvas raster support is unavailable in this runtime.")}function yh(A){let t=A.getContext("2d");return t&&(t.imageSmoothingEnabled=!1),t}async function mh(A,t){if("toDataURL"in A&&typeof A.toDataURL=="function")return A.toDataURL(t);if("convertToBlob"in A&&typeof A.convertToBlob=="function"){let e=await A.convertToBlob({type:t});return XA(new Uint8Array(await e.arrayBuffer()),e.type||t)}throw new Error("Canvas export is unavailable in this runtime.")}function aI(A,t){return Math.abs(A).toString().padStart(t,"0")}function Dh(A){return`${A>=0?"N":"S"}${aI(A,2)}`}function Sh(A){return`${A>=0?"E":"W"}${aI(A,3)}`}function Nh(A){return`${Dh(A.southLat)}${Sh(A.westLon)}`}function kh(A){return`${fh}/ESA_WorldCover_10m_2021_v200_${Nh(A)}_Map.tif`}function Rh(A){let t=Math.floor(A.minLat/FA)*FA,e=Math.floor((A.maxLat-Number.EPSILON)/FA)*FA,n=Math.floor(A.minLon/FA)*FA,i=Math.floor((A.maxLon-Number.EPSILON)/FA)*FA,r=[];for(let s=t;s<=e;s+=FA)for(let g=n;g<=i;g+=FA)r.push({southLat:s,westLon:g});return r.length===0&&r.push({southLat:t,westLon:n}),r}function Gh(A,t,e,n){let i=nA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=nA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),s=nA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=nA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),s+1,n);return[i,s,r,g]}function xh(A,t,e,n){let i=nA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=nA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),s=nA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),g=nA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),s+1,n);return[i,s,r,g]}function Lh(A,t,e){let n=new Uint8ClampedArray(t*e*4);for(let i=0;i<A.length;i+=1){let[r,s,g]=uh.get(A[i])??[0,0,0],I=i*4;n[I]=r,n[I+1]=s,n[I+2]=g,n[I+3]=A[i]===gI?0:255}return n}async function sI(A,t,e){if(!wh()||t<=0||e<=0||!Number.isFinite(t)||!Number.isFinite(e))return null;let n=new Uint8Array(t*e),i=Rh(A);for(let g of i){let o=await(await os(kh(g),{allowFullFile:!1})).getImage(),[a,E,B,C]=o.getBoundingBox(),c={minLat:E,maxLat:C,minLon:a,maxLon:B},l=wt(c,A);if(!l)continue;let[h,u,w,y]=xh(A,l,t,e),f=w-h,Q=y-u;if(f<=0||Q<=0)continue;let p=Gh(c,l,o.getWidth(),o.getHeight()),d=await o.readRasters({window:p,width:f,height:Q,interleave:!0,fillValue:gI,resampleMethod:"nearest"});for(let S=0;S<Q;S+=1){let k=S*f,D=(u+S)*t+h;n.set(d.subarray(k,k+f),D)}}let r=ph(t,e),s=yh(r);return s?(s.putImageData(new ImageData(Lh(n,t,e),t,e),0,0),{kind:"worldcover",width:t,height:e,mimeType:"image/png",dataUrl:await mh(r,"image/png"),sourceVersion:dh}):null}var Uh=50,BI=180;function Mh(A,t){let e=dr(A),n=ur(e.lat),i=nA(t*.08,900,5e3),r=i/n.lat,s=i/n.lon,g=Math.max(Tn(A)*.18,r),I=Math.max(Mn(A)*.18,s),o=BI/n.lat,a=BI/n.lon;return Gs(A,g+o,I+a)}function Th(A,t){let e=Math.max(1,Mn(A)*t.lon),n=Math.max(1,Tn(A)*t.lat),i=e/n;return i>=1?{width:160,height:nA(Math.round(160/i),72,160)}:{width:nA(Math.round(160*i),72,160),height:160}}function Yh(A,t,e){return{lat:xe(A.lat,t.lat,e),lon:xe(A.lon,t.lon,e),ele:A.ele!=null&&t.ele!=null?xe(A.ele,t.ele,e):A.ele??t.ele??null}}function _h(A,t){if(A.length<=2)return A;let e=[A[0]],n=t,i=0;for(let g=1;g<A.length;g+=1){let I=A[g-1],o=A[g],a=Un(I,o);if(!(a<=0)){for(;i+a>=n;){let E=(n-i)/a;e.push(Yh(I,o,E)),n+=t}i+=a}}let r=A[A.length-1],s=e[e.length-1];return(s.lat!==r.lat||s.lon!==r.lon)&&e.push(r),e}function vh(A,t,e,n,i){let r=null;return A.map(s=>{let I=wr(t,s.lat,s.lon)??r??e;r=I;let o=xs(s,n,i);return{x:o.x,z:o.z,y:I,lat:s.lat,lon:s.lon,elevation:I}})}async function EI(A,t={}){let e=A.sourceUrl,n=Mh(A.bounds,A.distanceMeters),i=dr(n),r=ur(i.lat),s=Th(n,r),g=Us(n);if(g.length>16)throw new Error(`The track spans ${g.length} Copernicus tiles. This preview caps builds at ${16} tiles.`);let I={lon:s.width/Math.max(Mn(n),.01),lat:s.height/Math.max(Tn(n),.01)},a=(await Promise.allSettled(g.map(Q=>Ms(Q,n,I)))).filter(Q=>Q.status==="fulfilled").map(Q=>Q.value).filter(Boolean);if(a.length===0)throw new Error("No Copernicus DEM tiles were available for the GPX area.");let E=g.length-a.length,B=E>0?`Terrain preview may be incomplete because ${E} of ${g.length} Copernicus DEM tiles failed to load.`:void 0,C=[],c=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let Q=0;Q<s.height;Q+=1){let p=s.height===1?0:Q/(s.height-1),d=xe(n.maxLat,n.minLat,p);for(let S=0;S<s.width;S+=1){let k=s.width===1?0:S/(s.width-1),D=xe(n.minLon,n.maxLon,k),G=wr(a,d,D)??0;C.push(G),c=Math.min(c,G),l=Math.max(l,G)}}let h=_h(A.points,Uh),u=vh(h,a,c,i,r),w=Kn(u,Q=>Q.elevation),y=e.split("/").filter(Boolean).pop()??"GPX track",f;if(t.style==="worldcover")try{f=await sI(n,s.width,s.height)??void 0}catch(Q){console.warn("Unable to bake ESA WorldCover imagery into .cimal pack.",Q),f=void 0}else if(t.style==="hiking-map")try{f=await oI(n,t.hikingMapResolution??zA)??void 0}catch(Q){console.warn("Unable to bake OpenHikingMap imagery into .cimal pack.",Q),f=void 0}return{title:y,sourceUrl:e,warning:B,bounds:n,center:i,metersPerDegree:r,grid:{width:s.width,height:s.height,elevations:C,minElevation:c,maxElevation:l},track:u,bakedImagery:f,stats:{distanceKm:w.distanceMeters/1e3||A.distanceMeters/1e3,totalAscent:w.totalAscent||A.totalAscent,totalDescent:w.totalDescent||A.totalDescent,pointCount:A.points.length,tileCount:a.length}}}async function cI(A,t={}){let e=await zs(A);return EI(e,t)}async function lI(A,t,e={}){return EI(Gr(A,t),e)}function Hh(A){return`
\`\`\`${qr}
${A}
\`\`\`
`}function Kh(A){let t=A;if(/^https?:\/\//i.test(A))try{t=new URL(A).pathname}catch{t=A}return`Library/Cimal/${(t.split(/[\\/]/).filter(Boolean).pop()?.replace(/\.gpx$/i,"")?.replace(/\.[^.]+$/u,"")||"track").replaceAll(/[^A-Za-z0-9._-]+/g,"-")}.cimal`}async function Fr(){let A=await sA.prompt("GPX URL or space path");if(!A)return;let t=Xn(A),e=await sA.prompt("Output .cimal path",Kh(t));if(!e)return;let n=Lt(e),i=await sA.prompt("Viewer style for this pack","hiking-map");if(!i)return;let r=$n(i),s=await sA.prompt("Baked hiking-map resolution",zA);if(!s)return;let g=Ai(s),I=await cI(t,{style:r,hikingMapResolution:g}),o=Ut(I);await X.writeFile(n,o),await sA.flashNotification(`Built ${n}.`)}async function Ur(){let A=await sA.prompt("Cimal pack path");if(!A)return;let t=Lt(A);await sA.insertAtCursor(Hh(t),!0),await Te.refreshAll(),await sA.flashNotification("Inserted cimal widget.")}async function Mr(){await Te.refreshAll(),await sA.flashNotification("Refreshed cimal widgets.")}var QI=!1;async function Tr(){if(!QI){QI=!0;try{await sA.reloadConfigAndCommands()}catch{}}}var hI=`<!DOCTYPE html>
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
var DEFAULT_VIEWER_CONFIG = {
  style: DEFAULT_VIEWER_STYLE,
  hikingMapResolution: DEFAULT_HIKING_MAP_RESOLUTION
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
  const { spanX, spanZ, sceneSpan, elevationRange } = options;
  const appearanceForNormal = createTerrainAppearanceSampler(
    THREE,
    activeTheme2
  );
  const waterStops = resolveColorStops(THREE, activeTheme2.water.surfaceStops);
  const shoreTint = activeTheme2.water.shoreTint ? new THREE.Color(activeTheme2.water.shoreTint) : null;
  const geometry = new THREE.BufferGeometry();
  const vertexCount = grid.width * grid.height;
  const positions = new Float32Array(vertexCount * 3);
  const terrainColors = new Float32Array(vertexCount * 3);
  const hikingTextureBlendColors = new Float32Array(vertexCount * 3);
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
  geometry.computeVertexNormals();
  const normals = geometry.getAttribute("normal");
  for (let index = 0; index < vertexCount; index += 1) {
    const colorPointer = index * 3;
    const elevation = grid.elevations[index];
    const normalized = (elevation - grid.minElevation) / elevationRange;
    const appearance = appearanceForNormal(
      normalized,
      normals.getY(index),
      normals.getX(index),
      normals.getZ(index)
    );
    terrainColors[colorPointer] = appearance.color.r;
    terrainColors[colorPointer + 1] = appearance.color.g;
    terrainColors[colorPointer + 2] = appearance.color.b;
    hikingTextureBlendColors[colorPointer] = appearance.reliefShade;
    hikingTextureBlendColors[colorPointer + 1] = appearance.reliefShade;
    hikingTextureBlendColors[colorPointer + 2] = appearance.reliefShade;
  }
  const terrainColorAttribute = new THREE.BufferAttribute(terrainColors, 3);
  const hikingBlendAttribute = new THREE.BufferAttribute(
    hikingTextureBlendColors,
    3
  );
  geometry.setAttribute("color", terrainColorAttribute);
  const terrainMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: activeTheme2.terrain.roughness,
    metalness: activeTheme2.terrain.metalness
  });
  const terrain = new THREE.Mesh(geometry, terrainMaterial);
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
      geometry.setAttribute("color", hikingBlendAttribute);
      geometry.attributes.color.needsUpdate = true;
      terrainMaterial.map = texture;
      terrainMaterial.needsUpdate = true;
    },
    dispose() {
      waterGeometry?.dispose();
      waterMaterial?.dispose();
      geometry.dispose();
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
async function renderTerrainViewer(app2, payload2, activeTheme2) {
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
    elevationRange
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
var viewerConfig = {
  ...DEFAULT_VIEWER_CONFIG,
  ...JSON.parse(
    viewerConfigScript.textContent ?? JSON.stringify(DEFAULT_VIEWER_CONFIG)
  )
};
var activeTheme = styleThemes[viewerConfig.style] ?? styleThemes.classic;
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
  const cleanup = await renderTerrainViewer(app, payload, activeTheme);
  window.addEventListener("pagehide", cleanup, { once: true });
  window.addEventListener("beforeunload", cleanup, { once: true });
}
    <\/script>
  </body>
</html>
`;var Oh="__CIMAL_VIEWER_TITLE__",Ph="__CIMAL_VIEWER_PAYLOAD__",Jh="__CIMAL_VIEWER_CONFIG__",qh=12e5;function Vh(A){return A.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function fI(A){return JSON.stringify(A).replaceAll("<","\\u003c")}function Yr(A,t,e){return A.split(t).join(e)}function Zh(A){if(!("bakedImagery"in A)||!A.bakedImagery||A.bakedImagery.dataUrl.length<=qh)return A;let t=A.bakedImagery.kind==="hiking-map"?"The baked hiking-map texture in this pack is too large to embed in the widget iframe. Rebuild the pack at a lower hiking-map resolution to display it here.":"The baked ESA WorldCover texture in this pack is too large to embed in the widget iframe.";return{...A,bakedImagery:void 0,warning:A.warning?`${A.warning} ${t}`:t}}function _r(A,t=He){let e=typeof t=="string"?{...He,style:t}:{style:t.style??He.style,hikingMapResolution:t.hikingMapResolution??He.hikingMapResolution},n=Yr(Yr(Yr(hI,Oh,Vh(A.title)),Jh,fI(e)),Ph,fI(Zh(A)));return`data:text/html;charset=utf-8,${encodeURIComponent(n)}`}function jh(A,t,e){return{title:A,message:t,details:e}}var dI=960,Wh=600,zh=340;function vr(A,t,e){return{url:_r(jh(A,t),e),width:dI,height:zh}}function uI(A,t){return{url:_r(A,t),width:dI,height:Wh}}async function Xh(A,t){let e=await X.readFile(A),n=ni(e);return uI(n,t)}async function $h(A,t,e){let n=await Rr(A),i=Ns(A,n,t,e),r=await ws(i);if(r)try{return ni(r)}catch(I){if(!Bo(I))throw I;await ys(i),r=null}let s=await lI(A,n,{style:t,hikingMapResolution:e}),g=Qs(i,A);return await ps(g.key,g.path,Ut(s)),s}async function Af(A,t){let e=await $h(A,t.style,t.hikingMapResolution);return uI(e,t)}async function Hr(A){let t;try{t=io(A)}catch(s){let g=s instanceof Error?s.message:"Unknown error";return vr("Cimal widget configuration error",g)}let{source:e,hasExplicitHikingMapResolution:n,...i}=t,r;try{r=ro(t)}catch(s){let g=s instanceof Error?s.message:"Unknown error";return vr("Cimal widget configuration error",g,i)}try{return r.kind==="pack"?await Xh(r.packPath,i):await Af(r.gpxSource,i)}catch(s){let g=s instanceof Error?s.message:"Unknown error",I=r.kind==="pack"?"Cimal pack preview failed":"GPX terrain preview failed";return vr(I,g,i)}}var wI={buildCimalPackFromGpx:Fr,insertGpxTerrainBlock:Ur,refreshGpxTerrainWidgets:Mr,renderGpxTerrainWidget:Hr,syncGpxTerrainRuntime:Tr},pI={name:"cimal",requiredPermissions:["fetch"],functions:{buildCimalPackFromGpx:{path:"src/index.ts:buildCimalPackFromGpx",command:{name:"Cimal: Build pack from GPX"},slashCommand:{name:"cimal-build",description:"Build a .cimal pack from a GPX source"}},insertGpxTerrainBlock:{path:"src/index.ts:insertGpxTerrainBlock",command:{name:"Cimal: Insert widget"},slashCommand:{name:"cimal",description:"Insert a cimal widget for an existing .cimal pack"}},refreshGpxTerrainWidgets:{path:"src/index.ts:refreshGpxTerrainWidgets",command:{name:"Cimal: Refresh widgets"},slashCommand:{name:"cimal-refresh",description:"Refresh rendered cimal widgets"}},renderGpxTerrainWidget:{path:"src/index.ts:renderGpxTerrainWidget",codeWidget:"cimal",renderMode:"iframe"},syncGpxTerrainRuntime:{path:"src/index.ts:syncGpxTerrainRuntime",events:["plugs:loaded","editor:pageLoaded"]}},assets:{}},hp={manifest:pI,functionMapping:wI};Jr(wI,pI,self.postMessage);export{hp as plug};
/*! Bundled license information:

pako/dist/pako.esm.mjs:
  (*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) *)

lerc/LercDecode.js:
  (* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve *)
*/
//# sourceMappingURL=cimal.plug.js.map
