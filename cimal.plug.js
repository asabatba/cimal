var Ha=Object.create;var kn=Object.defineProperty;var va=Object.getOwnPropertyDescriptor;var Ka=Object.getOwnPropertyNames;var Pa=Object.getPrototypeOf,Oa=Object.prototype.hasOwnProperty;var CA=(A,t)=>()=>(A&&(t=A(A=0)),t);var Ja=(A,t)=>()=>(t||A((t={exports:{}}).exports,t),t.exports),yA=(A,t)=>{for(var e in t)kn(A,e,{get:t[e],enumerable:!0})},qa=(A,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ka(t))!Oa.call(A,i)&&i!==e&&kn(A,i,{get:()=>t[i],enumerable:!(n=va(t,i))||n.enumerable});return A};var Va=(A,t,e)=>(e=A!=null?Ha(Pa(A)):{},qa(t||!A||!A.__esModule?kn(e,"default",{value:A,enumerable:!0}):e,A));function VA(A){let t=gB[A];if(t===void 0)throw new RangeError(`Invalid field type: ${A}`);return t}function hg(A,t,e,n=!1,i=!1){cg[t]=A,Ie[A]={tag:A,name:t,type:typeof e=="string"?m[e]:e,isArray:n,eager:i}}function He(A){return typeof A=="number"?A:cg[A]}var m,gB,oB,cg,Ie,EA,fg,dg,bt,Xn,IB,ve=CA(()=>{m={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,SBYTE:6,UNDEFINED:7,SSHORT:8,SLONG:9,SRATIONAL:10,FLOAT:11,DOUBLE:12,IFD:13,LONG8:16,SLONG8:17,IFD8:18},gB={[m.BYTE]:1,[m.ASCII]:1,[m.SBYTE]:1,[m.UNDEFINED]:1,[m.SHORT]:2,[m.SSHORT]:2,[m.LONG]:4,[m.SLONG]:4,[m.FLOAT]:4,[m.IFD]:4,[m.RATIONAL]:8,[m.SRATIONAL]:8,[m.DOUBLE]:8,[m.LONG8]:8,[m.SLONG8]:8,[m.IFD8]:8};oB={NewSubfileType:{tag:254,type:m.LONG,eager:!0},SubfileType:{tag:255,type:m.SHORT,eager:!0},ImageWidth:{tag:256,type:m.SHORT,eager:!0},ImageLength:{tag:257,type:m.SHORT,eager:!0},BitsPerSample:{tag:258,type:m.SHORT,isArray:!0,eager:!0},Compression:{tag:259,type:m.SHORT,eager:!0},PhotometricInterpretation:{tag:262,type:m.SHORT,eager:!0},Threshholding:{tag:263,type:m.SHORT},CellWidth:{tag:264,type:m.SHORT},CellLength:{tag:265,type:m.SHORT},FillOrder:{tag:266,type:m.SHORT},DocumentName:{tag:269,type:m.ASCII},ImageDescription:{tag:270,type:m.ASCII},Make:{tag:271,type:m.ASCII},Model:{tag:272,type:m.ASCII},StripOffsets:{tag:273,type:m.SHORT,isArray:!0},Orientation:{tag:274,type:m.SHORT},SamplesPerPixel:{tag:277,type:m.SHORT,eager:!0},RowsPerStrip:{tag:278,type:m.SHORT,eager:!0},StripByteCounts:{tag:279,type:m.LONG,isArray:!0},MinSampleValue:{tag:280,type:m.SHORT,isArray:!0},MaxSampleValue:{tag:281,type:m.SHORT,isArray:!0},XResolution:{tag:282,type:m.RATIONAL},YResolution:{tag:283,type:m.RATIONAL},PlanarConfiguration:{tag:284,type:m.SHORT,eager:!0},PageName:{tag:285,type:m.ASCII},XPosition:{tag:286,type:m.RATIONAL},YPosition:{tag:287,type:m.RATIONAL},FreeOffsets:{tag:288,type:m.LONG},FreeByteCounts:{tag:289,type:m.LONG},GrayResponseUnit:{tag:290,type:m.SHORT},GrayResponseCurve:{tag:291,type:m.SHORT,isArray:!0},T4Options:{tag:292,type:m.LONG},T6Options:{tag:293,type:m.LONG},ResolutionUnit:{tag:296,type:m.SHORT},PageNumber:{tag:297,type:m.SHORT,isArray:!0},TransferFunction:{tag:301,type:m.SHORT,isArray:!0},Software:{tag:305,type:m.ASCII},DateTime:{tag:306,type:m.ASCII},Artist:{tag:315,type:m.ASCII},HostComputer:{tag:316,type:m.ASCII},Predictor:{tag:317,type:m.SHORT},WhitePoint:{tag:318,type:m.RATIONAL,isArray:!0},PrimaryChromaticities:{tag:319,type:m.RATIONAL,isArray:!0},ColorMap:{tag:320,type:m.SHORT,isArray:!0},HalftoneHints:{tag:321,type:m.SHORT,isArray:!0},TileWidth:{tag:322,type:m.SHORT,eager:!0},TileLength:{tag:323,type:m.SHORT,eager:!0},TileOffsets:{tag:324,type:m.LONG,isArray:!0},TileByteCounts:{tag:325,type:m.SHORT,isArray:!0},InkSet:{tag:332,type:m.SHORT},InkNames:{tag:333,type:m.ASCII},NumberOfInks:{tag:334,type:m.SHORT},DotRange:{tag:336,type:m.BYTE,isArray:!0},TargetPrinter:{tag:337,type:m.ASCII},ExtraSamples:{tag:338,type:m.BYTE,isArray:!0,eager:!0},SampleFormat:{tag:339,type:m.SHORT,isArray:!0,eager:!0},SMinSampleValue:{tag:340,isArray:!0},SMaxSampleValue:{tag:341,isArray:!0},TransferRange:{tag:342,type:m.SHORT,isArray:!0},JPEGProc:{tag:512,type:m.SHORT},JPEGInterchangeFormat:{tag:513,type:m.LONG},JPEGInterchangeFormatLngth:{tag:514,type:m.LONG},JPEGRestartInterval:{tag:515,type:m.SHORT},JPEGLosslessPredictors:{tag:517,type:m.SHORT,isArray:!0},JPEGPointTransforms:{tag:518,type:m.SHORT,isArray:!0},JPEGQTables:{tag:519,type:m.LONG,isArray:!0},JPEGDCTables:{tag:520,type:m.LONG,isArray:!0},JPEGACTables:{tag:521,type:m.LONG,isArray:!0},YCbCrCoefficients:{tag:529,type:m.RATIONAL,isArray:!0},YCbCrSubSampling:{tag:530,type:m.SHORT,isArray:!0},YCbCrPositioning:{tag:531,type:m.SHORT},ReferenceBlackWhite:{tag:532,type:m.LONG,isArray:!0},Copyright:{tag:33432,type:m.ASCII},BadFaxLines:{tag:326},CleanFaxData:{tag:327},ClipPath:{tag:343},ConsecutiveBadFaxLines:{tag:328},Decode:{tag:433},DefaultImageColor:{tag:434},Indexed:{tag:346},JPEGTables:{tag:347,isArray:!0,eager:!0},StripRowCounts:{tag:559,isArray:!0},SubIFDs:{tag:330,isArray:!0},XClipPathUnits:{tag:344},YClipPathUnits:{tag:345},ApertureValue:{tag:37378},ColorSpace:{tag:40961},DateTimeDigitized:{tag:36868},DateTimeOriginal:{tag:36867},ExifIFD:{tag:34665,name:"Exif IFD",type:m.LONG},ExifVersion:{tag:36864},ExposureTime:{tag:33434},FileSource:{tag:41728},Flash:{tag:37385},FlashpixVersion:{tag:40960},FNumber:{tag:33437},ImageUniqueID:{tag:42016},LightSource:{tag:37384},MakerNote:{tag:37500},ShutterSpeedValue:{tag:37377},UserComment:{tag:37510},IPTC:{tag:33723},CZ_LSMINFO:{tag:34412},ICCProfile:{tag:34675,name:"ICC Profile"},XMP:{tag:700},GDAL_METADATA:{tag:42112},GDAL_NODATA:{tag:42113,type:m.ASCII,eager:!0},Photoshop:{tag:34377},ModelPixelScale:{tag:33550,type:m.DOUBLE,isArray:!0,eager:!0},ModelTiepoint:{tag:33922,type:m.DOUBLE,isArray:!0,eager:!0},ModelTransformation:{tag:34264,type:m.DOUBLE,isArray:!0,eager:!0},GeoKeyDirectory:{tag:34735,type:m.SHORT,isArray:!0,eager:!0},GeoDoubleParams:{tag:34736,type:m.DOUBLE,isArray:!0,eager:!0},GeoAsciiParams:{tag:34737,type:m.ASCII,eager:!0},LercParameters:{tag:50674,eager:!0}},cg={},Ie={};for(let[A,t]of Object.entries(oB)){let e=t;hg(e.tag,e.name||A,e.type,e.isArray,e.eager)}EA={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},fg={Unspecified:0,Assocalpha:1,Unassalpha:2},dg={Version:0,AddCompression:1},bt={None:0,Deflate:1,Zstandard:2},Xn={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},IB={};for(let[A,t]of Object.entries(Xn))IB[t]=parseInt(A,10)});function BB(A,t){let e=A.length-t,n=0;do{for(let i=t;i>0;i--)A[n+t]+=A[n],n++;e-=t}while(e>0)}function EB(A,t,e){let n=0,i=A.length,r=i/e;for(;i>t;){for(let o=t;o>0;--o)A[n+t]+=A[n],++n;i-=t}let s=A.slice();for(let o=0;o<r;++o)for(let a=0;a<e;++a)A[e*o+a]=s[(e-a-1)*r+o]}function Sg(A,t,e,n,i,r){if(!t||t===1)return A;for(let a=0;a<i.length;++a){if(i[a]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[a]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}let s=i[0]/8,o=r===2?1:i.length;for(let a=0;a<n&&!(a*o*e*s>=A.byteLength);++a){let g;if(t===2){switch(i[0]){case 8:g=new Uint8Array(A,a*o*e*s,o*e*s);break;case 16:g=new Uint16Array(A,a*o*e*s,o*e*s/2);break;case 32:g=new Uint32Array(A,a*o*e*s,o*e*s/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}BB(g,o)}else t===3&&(g=new Uint8Array(A,a*o*e*s,o*e*s),EB(g,o,s))}return A}var Ng=CA(()=>{});var nA,LA=CA(()=>{Ng();nA=class{constructor(t){this.parameters=t}decodeBlock(t){throw new Error("decodeBlock not implemented")}async decode(t){let e=await this.decodeBlock(t),{tileWidth:n,tileHeight:i,predictor:r,bitsPerSample:s,planarConfiguration:o}=this.parameters;if(r!==1){let g=Array.isArray(s)||ArrayBuffer.isView(s)?Array.from(s):[s];return Sg(e,r,n,i,g,o)}return e}}});var kg={};yA(kg,{default:()=>Ut});var Ut,Rg=CA(()=>{LA();Ut=class extends nA{decodeBlock(t){return t}}});var Fg={};yA(Fg,{default:()=>Mt});function lB(A,t,e){let n=t%8,i=Math.floor(t/8),r=8-n,s=t+e-(i+1)*8,o=8*(i+2)-(t+e),a=(i+2)*8-t;if(o=Math.max(0,o),i>=A.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),ei;let g=A[i]&2**(8-n)-1;g<<=e-r;let I=g;if(i+1<A.length){let E=A[i+1]>>>o;E<<=Math.max(0,e-a),I+=E}if(s>8&&i+2<A.length){let E=(i+3)*8-(t+e),B=A[i+2]>>>E;I+=B}return I}function Ai(A,t){for(let e=t.length-1;e>=0;e--)A.push(t[e]);return A}function cB(A){let t=new Uint16Array(4093),e=new Uint8Array(4093);for(let Q=0;Q<=257;Q++)t[Q]=4096,e[Q]=Q;let n=258,i=Gg,r=0;function s(){n=258,i=Gg}function o(Q){let l=lB(Q,r,i);return r+=i,l}function a(Q,l){return e[n]=l,t[n]=Q,n++,n-1}function g(Q){let l=[];for(let h=Q;h!==4096;h=t[h])l.push(e[h]);return l}let I=[];s();let E=new Uint8Array(A),B=o(E),C;for(;B!==ei;){if(B===$n){for(s(),B=o(E);B===$n;)B=o(E);if(B===ei)break;if(B>$n)throw new Error(`corrupted code at scanline ${B}`);{let Q=g(B);Ai(I,Q),C=B}}else if(B<n){let Q=g(B);Ai(I,Q),C!==void 0&&a(C,Q[Q.length-1]),C=B}else{if(C===void 0)throw new Error(`Invalid LZW code: ${B} with no previous code`);let Q=g(C);if(!Q)throw new Error(`Bogus entry. Not in dictionary, ${C} / ${n}, position: ${r}`);Ai(I,Q),I.push(Q[Q.length-1]),a(C,Q[Q.length-1]),C=B}n+1>=2**i&&(i===QB?C=void 0:i++),B=o(E)}return new Uint8Array(I)}var Gg,$n,ei,QB,Mt,xg=CA(()=>{LA();Gg=9,$n=256,ei=257,QB=12;Mt=class extends nA{decodeBlock(t){return cB(t).buffer}}});var bg={};yA(bg,{default:()=>Ot});function Lg(A,t){let e=0,n=[],i=16;for(;i>0&&!A[i-1];)--i;n.push({children:[],index:0});let r=n[0],s;for(let o=0;o<i;o++){for(let a=0;a<A[o];a++){if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.children[r.index]=t[e];r.index>0;)if(r=n.pop(),!r)throw new Error("buildHuffmanTable: codeLength mismatch");for(r.index++,n.push(r);n.length<=o;)n.push(s={children:[],index:0}),r.children[r.index]=s.children,r=s;e++}o+1<i&&(n.push(s={children:[],index:0}),r.children[r.index]=s.children,r=s)}return n[0].children}function hB(A,t,e,n,i,r,s,o,a){let{mcusPerLine:g,progressive:I}=e;if(n.length>1&&(g===void 0||e.mcusPerColumn===void 0))throw new Error("Missing MCU dimensions");if(n.length===1&&(n[0].blocksPerLine===void 0||n[0].blocksPerColumn===void 0))throw new Error("Missing block dimensions");let E=t,B=t,C=0,Q=0;function l(){if(Q>0)return Q--,C>>Q&1;if(C=A[B++],C===255){let M=A[B++];if(M)throw new Error(`unexpected marker: ${(C<<8|M).toString(16)}`)}return Q=7,C>>>7}function h(M){if(!M)throw new Error("Huffman table not found");let _=M,Y;for(;(Y=l())!==null;){let J=_[Y];if(typeof J=="number")return J;if(typeof J!="object")throw new Error("invalid huffman sequence");_=J}return null}function u(M){let _=M,Y=0;for(;_>0;){let J=l();if(J===null)return;Y=Y<<1|J,--_}return Y}function p(M){let _=u(M);if(_!==void 0)return _>=1<<M-1?_:_+(-1<<M)+1}function y(M,_){let Y=h(M.huffmanTableDC);if(Y===null)throw new Error("Huffman error");let J=Y===0?0:p(Y);if(J===void 0)throw new Error("Unexpected end of stream");M.pred===void 0&&(M.pred=0),M.pred+=J,_[0]=M.pred;let q=1;for(;q<64;){let AA=h(M.huffmanTableAC);if(AA===null)throw new Error("Unexpected end of data in AC coefficient decoding");let tA=AA&15,O=AA>>4;if(tA===0){if(O<15)break;q+=16}else{q+=O;let oA=Ke[q],gA=p(tA);if(gA===void 0)throw new Error("Unexpected end of stream");_[oA]=gA,q++}}}function f(M,_){let Y=h(M.huffmanTableDC);if(Y===null)throw new Error("Huffman error");let J=p(Y);if(J===void 0)throw new Error("Unexpected end of data in DC coefficient decoding");let q=Y===0?0:J<<a;M.pred===void 0&&(M.pred=0),M.pred+=q,_[0]=M.pred}function c(M,_){let Y=l();if(Y===null)throw new Error("Unexpected end of data in DC coefficient decoding");_[0]|=Y<<a}let w=0;function d(M,_){if(w>0){w--;return}let Y=r,J=s;for(;Y<=J;){let q=h(M.huffmanTableAC);if(q===null)throw new Error("Unexpected end of data in AC coefficient decoding");let AA=q&15,tA=q>>4;if(AA===0){if(tA<15){let O=u(tA);if(O===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");w=O+(1<<tA)-1;break}Y+=16}else{Y+=tA;let O=Ke[Y],oA=p(AA);if(oA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");_[O]=oA*(1<<a),Y++}}}let S=0,k;function D(M,_){let Y=r,J=s,q=0;for(;Y<=J;){let AA=Ke[Y],tA=_[AA]<0?-1:1;switch(S){case 0:{let O=h(M.huffmanTableAC);if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");let oA=O&15;if(q=O>>4,oA===0)if(q<15){let gA=u(q);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");w=gA+(1<<q),S=4}else q=16,S=1;else{if(oA!==1)throw new Error("invalid ACn encoding");let gA=p(oA);if(gA===void 0)throw new Error("Unexpected end of data in AC coefficient decoding");k=gA,S=q?2:3}continue}case 1:case 2:if(_[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(O<<a)*tA}else q--,q===0&&(S=S===2?3:0);break;case 3:if(_[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(O<<a)*tA}else _[AA]=k<<a,S=0;break;case 4:if(_[AA]){let O=l();if(O===null)throw new Error("Unexpected end of data in AC coefficient decoding");_[AA]+=(O<<a)*tA}break;default:break}Y++}S===4&&(w--,w===0&&(S=0))}function G(M,_,Y,J,q){let AA=Y/g|0,tA=Y%g,O=AA*M.v+J,oA=tA*M.h+q;if(!M.blocks)throw new Error("Missing blocks");_(M,M.blocks[O][oA])}function x(M,_,Y){let J=Y/M.blocksPerLine|0,q=Y%M.blocksPerLine;if(!M.blocks)throw new Error("Missing blocks");_(M,M.blocks[J][q])}let v=n.length,F,N,b,H,L,T;I?r===0?T=o===0?f:c:T=o===0?d:D:T=y;let U=0,K,Z;v===1?Z=n[0].blocksPerLine*n[0].blocksPerColumn:Z=g*e.mcusPerColumn;let z=i||Z;for(;U<Z;){for(N=0;N<v;N++)n[N].pred=0;if(w=0,v===1)for(F=n[0],L=0;L<z;L++)x(F,T,U),U++;else for(L=0;L<z;L++){for(N=0;N<v;N++){F=n[N];let{h:M,v:_}=F;for(b=0;b<_;b++)for(H=0;H<M;H++)G(F,T,U,b,H)}if(U++,U===Z)break}if(Q=0,K=A[B]<<8|A[B+1],K<65280)throw new Error("marker was not found");if(K>=65488&&K<=65495)B+=2;else break}return B-E}function fB(A){let t=[],{blocksPerLine:e,blocksPerColumn:n}=A;if(!e||!n||!A.blocks)throw new Error("Missing component data");let i=e<<3,r=new Int32Array(64),s=new Uint8Array(64);function o(a,g,I){let E=A.quantizationTable;if(!E)throw new Error("No quantization table found");let B,C,Q,l,h,u,p,y,f,c=I,w;for(w=0;w<64;w++)c[w]=a[w]*E[w];for(w=0;w<8;++w){let d=8*w;if(c[1+d]===0&&c[2+d]===0&&c[3+d]===0&&c[4+d]===0&&c[5+d]===0&&c[6+d]===0&&c[7+d]===0){f=ae*c[0+d]+512>>10,c[0+d]=f,c[1+d]=f,c[2+d]=f,c[3+d]=f,c[4+d]=f,c[5+d]=f,c[6+d]=f,c[7+d]=f;continue}B=ae*c[0+d]+128>>8,C=ae*c[4+d]+128>>8,Q=c[2+d],l=c[6+d],h=Pt*(c[1+d]-c[7+d])+128>>8,y=Pt*(c[1+d]+c[7+d])+128>>8,u=c[3+d]<<4,p=c[5+d]<<4,f=B-C+1>>1,B=B+C+1>>1,C=f,f=Q*Kt+l*vt+128>>8,Q=Q*vt-l*Kt+128>>8,l=f,f=h-p+1>>1,h=h+p+1>>1,p=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-Q+1>>1,C=C+Q+1>>1,Q=f,f=h*Ht+y*_t+2048>>12,h=h*_t-y*Ht+2048>>12,y=f,f=u*Yt+p*Tt+2048>>12,u=u*Tt-p*Yt+2048>>12,p=f,c[0+d]=B+y,c[7+d]=B-y,c[1+d]=C+p,c[6+d]=C-p,c[2+d]=Q+u,c[5+d]=Q-u,c[3+d]=l+h,c[4+d]=l-h}for(w=0;w<8;++w){let d=w;if(c[8+d]===0&&c[16+d]===0&&c[24+d]===0&&c[32+d]===0&&c[40+d]===0&&c[48+d]===0&&c[56+d]===0){f=ae*I[w+0]+8192>>14,c[0+d]=f,c[8+d]=f,c[16+d]=f,c[24+d]=f,c[32+d]=f,c[40+d]=f,c[48+d]=f,c[56+d]=f;continue}B=ae*c[0+d]+2048>>12,C=ae*c[32+d]+2048>>12,Q=c[16+d],l=c[48+d],h=Pt*(c[8+d]-c[56+d])+2048>>12,y=Pt*(c[8+d]+c[56+d])+2048>>12,u=c[24+d],p=c[40+d],f=B-C+1>>1,B=B+C+1>>1,C=f,f=Q*Kt+l*vt+2048>>12,Q=Q*vt-l*Kt+2048>>12,l=f,f=h-p+1>>1,h=h+p+1>>1,p=f,f=y+u+1>>1,u=y-u+1>>1,y=f,f=B-l+1>>1,B=B+l+1>>1,l=f,f=C-Q+1>>1,C=C+Q+1>>1,Q=f,f=h*Ht+y*_t+2048>>12,h=h*_t-y*Ht+2048>>12,y=f,f=u*Yt+p*Tt+2048>>12,u=u*Tt-p*Yt+2048>>12,p=f,c[0+d]=B+y,c[56+d]=B-y,c[8+d]=C+p,c[48+d]=C-p,c[16+d]=Q+u,c[40+d]=Q-u,c[24+d]=l+h,c[32+d]=l-h}for(w=0;w<64;++w){let d=128+(c[w]+8>>4);d<0?g[w]=0:d>255?g[w]=255:g[w]=d}}for(let a=0;a<n;a++){let g=a<<3;for(let I=0;I<8;I++)t.push(new Uint8Array(i));for(let I=0;I<e;I++){o(A.blocks[a][I],s,r);let E=0,B=I<<3;for(let C=0;C<8;C++){let Q=t[g+C];for(let l=0;l<8;l++)Q[B+l]=s[E++]}}}return t}var Ke,Tt,Yt,_t,Ht,vt,Kt,ae,Pt,ti,Ot,Ug=CA(()=>{LA();Ke=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),Tt=4017,Yt=799,_t=3406,Ht=2276,vt=1567,Kt=3784,ae=5793,Pt=2896;ti=class{constructor(){this.jfif=null,this.adobe=null,this.resetInterval=0,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.frames=[]}resetFrames(){this.frames=[]}parse(t){let e=0;function n(){let o=t[e]<<8|t[e+1];return e+=2,o}function i(){let o=n(),a=t.subarray(e,e+o-2);return e+=a.length,a}function r(o){let a=0,g=0,I,E;for(E in o.components)o.components.hasOwnProperty(E)&&(I=o.components[E],a<I.h&&(a=I.h),g<I.v&&(g=I.v));let B=Math.ceil(o.samplesPerLine/8/a),C=Math.ceil(o.scanLines/8/g);for(E in o.components)if(o.components.hasOwnProperty(E)){I=o.components[E];let Q=Math.ceil(Math.ceil(o.samplesPerLine/8)*I.h/a),l=Math.ceil(Math.ceil(o.scanLines/8)*I.v/g),h=B*I.h,u=C*I.v,p=[];for(let y=0;y<u;y++){let f=[];for(let c=0;c<h;c++)f.push(new Int32Array(64));p.push(f)}I.blocksPerLine=Q,I.blocksPerColumn=l,I.blocks=p}o.maxH=a,o.maxV=g,o.mcusPerLine=B,o.mcusPerColumn=C}let s=n();if(s!==65496)throw new Error("SOI not found");for(s=n();s!==65497;){switch(s){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{let o=i();s===65504&&o[0]===74&&o[1]===70&&o[2]===73&&o[3]===70&&o[4]===0&&(this.jfif={version:{major:o[5],minor:o[6]},densityUnits:o[7],xDensity:o[8]<<8|o[9],yDensity:o[10]<<8|o[11],thumbWidth:o[12],thumbHeight:o[13],thumbData:o.subarray(14,14+3*o[12]*o[13])}),s===65518&&o[0]===65&&o[1]===100&&o[2]===111&&o[3]===98&&o[4]===101&&o[5]===0&&(this.adobe={version:o[6],flags0:o[7]<<8|o[8],flags1:o[9]<<8|o[10],transformCode:o[11]});break}case 65499:{let a=n()+e-2;for(;e<a;){let g=t[e++],I=new Int32Array(64);if(g>>4===0)for(let E=0;E<64;E++){let B=Ke[E];I[B]=t[e++]}else if(g>>4===1)for(let E=0;E<64;E++){let B=Ke[E];I[B]=n()}else throw new Error("DQT: invalid table spec");this.quantizationTables[g&15]=I}break}case 65472:case 65473:case 65474:{n();let o={extended:s===65473,progressive:s===65474,precision:t[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[],maxH:0,maxV:0,mcusPerLine:0,mcusPerColumn:0},a=t[e++],g;for(let I=0;I<a;I++){g=t[e];let E=t[e+1]>>4,B=t[e+1]&15,C=t[e+2];o.componentsOrder.push(g),o.components[g]={h:E,v:B,quantizationIdx:C,blocksPerLine:0,blocksPerColumn:0,blocks:[]},e+=3}r(o),this.frames.push(o);break}case 65476:{let o=n();for(let a=2;a<o;){let g=t[e++],I=new Uint8Array(16),E=0;for(let C=0;C<16;C++,e++)I[C]=t[e],E+=I[C];let B=new Uint8Array(E);for(let C=0;C<E;C++,e++)B[C]=t[e];a+=17+E,g>>4===0?this.huffmanTablesDC[g&15]=Lg(I,B):this.huffmanTablesAC[g&15]=Lg(I,B)}break}case 65501:n(),this.resetInterval=n();break;case 65498:{n();let o=t[e++],a=[],g=this.frames[0];for(let Q=0;Q<o;Q++){let l=g.components[t[e++]],h=t[e++];l.huffmanTableDC=this.huffmanTablesDC[h>>4],l.huffmanTableAC=this.huffmanTablesAC[h&15],a.push(l)}let I=t[e++],E=t[e++],B=t[e++],C=hB(t,e,g,a,this.resetInterval,I,E,B>>4,B&15);e+=C;break}case 65535:t[e]!==255&&e--;break;default:if(t[e-3]===255&&t[e-2]>=192&&t[e-2]<=254){e-=3;break}throw new Error(`unknown JPEG marker ${s.toString(16)}`)}s=n()}}getResult(){let{frames:t}=this;if(this.frames.length===0)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(let I=0;I<this.frames.length;I++){let E=this.frames[I].components;for(let B of Object.keys(E)){let C=E[B].quantizationIdx;typeof C=="number"&&(E[B].quantizationTable=this.quantizationTables[C],delete E[B].quantizationIdx)}}let e=t[0];if(!e.maxH||!e.maxV)throw new Error("Invalid frame dimensions");let{components:n,componentsOrder:i}=e,r=[],s=e.samplesPerLine,o=e.scanLines;for(let I=0;I<i.length;I++){let E=n[i[I]];r.push({lines:fB(E),scaleX:E.h/e.maxH,scaleY:E.v/e.maxV})}let a=new Uint8Array(s*o*r.length),g=0;for(let I=0;I<o;++I)for(let E=0;E<s;++E)for(let B=0;B<r.length;++B){let C=r[B];a[g]=C.lines[0|I*C.scaleY][0|E*C.scaleX],++g}return a}},Ot=class extends nA{constructor(t){super(t),this.reader=new ti,t.JPEGTables&&this.reader.parse(t.JPEGTables)}decodeBlock(t){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(t)),this.reader.getResult().buffer}}});function le(A){let t=A.length;for(;--t>=0;)A[t]=0}function ii(A,t,e,n,i){this.static_tree=A,this.extra_bits=t,this.extra_base=e,this.elems=n,this.max_length=i,this.has_stree=A&&A.length}function ri(A,t){this.dyn_tree=A,this.max_code=0,this.stat_desc=t}function kA(A,t,e,n,i){this.good_length=A,this.max_lazy=t,this.nice_length=e,this.max_chain=n,this.func=i}function uE(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=An,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(CE*2),this.dyn_dtree=new Uint16Array((2*aE+1)*2),this.bl_tree=new Uint16Array((2*sE+1)*2),vA(this.dyn_ltree),vA(this.dyn_dtree),vA(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(BE+1),this.heap=new Uint16Array(2*ui+1),vA(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*ui+1),vA(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function KE(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}function rt(A){this.options=en.assign({level:ZE,method:WE,chunkSize:16384,windowBits:15,memLevel:8,strategy:jE},A||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ko,this.strm.avail_out=0;let e=Ve.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==Xt)throw new Error(zA[e]);if(t.header&&Ve.deflateSetHeader(this.strm,t.header),t.dictionary){let n;if(typeof t.dictionary=="string"?n=et.string2buf(t.dictionary):Po.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,e=Ve.deflateSetDictionary(this.strm,n),e!==Xt)throw new Error(zA[e]);this._dict_set=!0}}function Fi(A,t){let e=new rt(t);if(e.push(A,!0),e.err)throw e.msg||zA[e.err];return e.result}function zE(A,t){return t=t||{},t.raw=!0,Fi(A,t)}function XE(A,t){return t=t||{},t.gzip=!0,Fi(A,t)}function wQ(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function YQ(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}function gt(A){this.options=en.assign({chunkSize:1024*64,windowBits:15,to:""},A||{});let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(A&&A.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ko,this.strm.avail_out=0;let e=MA.inflateInit2(this.strm,t.windowBits);if(e!==tt)throw new Error(zA[e]);if(this.header=new _Q,MA.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=et.string2buf(t.dictionary):eI.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=MA.inflateSetDictionary(this.strm,t.dictionary),e!==tt)))throw new Error(zA[e])}function xi(A,t){let e=new gt(t);if(e.push(A),e.err)throw e.msg||zA[e.err];return e.result}function OQ(A,t){return t=t||{},t.raw=!0,xi(A,t)}var dB,wo,uB,wB,pB,Si,nt,je,Be,Ni,po,ZA,ni,yB,ki,yo,mo,Do,hi,Wt,mB,So,DB,UA,qe,We,ze,Ri,zt,No,ko,Ro,Go,Xe,QA,RA,Fo,SB,NB,xo,kB,Lo,bo,Mg,gi,Tg,fi,Yg,_g,RB,GB,FB,Hg,xB,Uo,LB,bB,UB,MB,TB,YB,_B,HB,vB,KB,$e,PB,OB,JB,iA,zA,ce,qB,di,VB,PA,ZB,OA,jB,WB,uA,vg,rA,Kg,GA,zB,oi,XB,$B,Jt,AE,eE,tE,nE,An,iE,rE,gE,oE,IE,ui,aE,sE,CE,BE,P,KA,FA,EE,Ee,Gi,wi,pi,yi,mi,jA,Oe,aA,he,XA,fe,QE,WA,Pg,vA,lE,cE,JA,hA,fA,V,Pe,Di,Mo,Qe,To,Ii,se,hE,fE,Je,dE,it,Yo,_o,wE,Ho,pE,yE,mE,DE,SE,NE,kE,RE,GE,FE,xE,LE,bE,Ve,UE,ME,TE,en,vo,At,YE,_E,HE,vE,et,Ko,Po,PE,OE,JE,qE,Xt,VE,ZE,jE,WE,$E,AQ,eQ,tQ,nQ,iQ,qt,rQ,gQ,Ce,Og,Jg,qg,ai,Vg,oQ,IQ,aQ,sQ,CQ,Ze,BQ,Oo,Jo,Zg,EQ,Vt,$A,QQ,lQ,wA,qo,Vo,cQ,jg,tn,Wg,zg,Xg,$g,Ao,eo,to,no,io,$t,bA,si,ro,Ci,go,oo,Io,ao,Zt,jt,so,Co,Bo,Eo,Qo,Bi,lo,co,$,Zo,jo,hQ,fQ,dQ,uQ,ho,Ae,Wo,zo,Xo,$o,pQ,fo,Ei,Qi,yQ,AI,mQ,DQ,SQ,NQ,kQ,RQ,GQ,FQ,xQ,LQ,bQ,UQ,MQ,TQ,MA,_Q,eI,HQ,vQ,tt,li,ci,KQ,uo,PQ,JQ,qQ,VQ,ZQ,jQ,WQ,id,rd,gd,od,Id,zQ,ad,sd,nn,Li=CA(()=>{dB=0,wo=1,uB=2,wB=3,pB=258,Si=29,nt=256,je=nt+1+Si,Be=30,Ni=19,po=2*je+1,ZA=15,ni=16,yB=7,ki=256,yo=16,mo=17,Do=18,hi=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Wt=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),mB=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),So=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DB=512,UA=new Array((je+2)*2);le(UA);qe=new Array(Be*2);le(qe);We=new Array(DB);le(We);ze=new Array(pB-wB+1);le(ze);Ri=new Array(Si);le(Ri);zt=new Array(Be);le(zt);Go=A=>A<256?We[A]:We[256+(A>>>7)],Xe=(A,t)=>{A.pending_buf[A.pending++]=t&255,A.pending_buf[A.pending++]=t>>>8&255},QA=(A,t,e)=>{A.bi_valid>ni-e?(A.bi_buf|=t<<A.bi_valid&65535,Xe(A,A.bi_buf),A.bi_buf=t>>ni-A.bi_valid,A.bi_valid+=e-ni):(A.bi_buf|=t<<A.bi_valid&65535,A.bi_valid+=e)},RA=(A,t,e)=>{QA(A,e[t*2],e[t*2+1])},Fo=(A,t)=>{let e=0;do e|=A&1,A>>>=1,e<<=1;while(--t>0);return e>>>1},SB=A=>{A.bi_valid===16?(Xe(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)},NB=(A,t)=>{let e=t.dyn_tree,n=t.max_code,i=t.stat_desc.static_tree,r=t.stat_desc.has_stree,s=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,a=t.stat_desc.max_length,g,I,E,B,C,Q,l=0;for(B=0;B<=ZA;B++)A.bl_count[B]=0;for(e[A.heap[A.heap_max]*2+1]=0,g=A.heap_max+1;g<po;g++)I=A.heap[g],B=e[e[I*2+1]*2+1]+1,B>a&&(B=a,l++),e[I*2+1]=B,!(I>n)&&(A.bl_count[B]++,C=0,I>=o&&(C=s[I-o]),Q=e[I*2],A.opt_len+=Q*(B+C),r&&(A.static_len+=Q*(i[I*2+1]+C)));if(l!==0){do{for(B=a-1;A.bl_count[B]===0;)B--;A.bl_count[B]--,A.bl_count[B+1]+=2,A.bl_count[a]--,l-=2}while(l>0);for(B=a;B!==0;B--)for(I=A.bl_count[B];I!==0;)E=A.heap[--g],!(E>n)&&(e[E*2+1]!==B&&(A.opt_len+=(B-e[E*2+1])*e[E*2],e[E*2+1]=B),I--)}},xo=(A,t,e)=>{let n=new Array(ZA+1),i=0,r,s;for(r=1;r<=ZA;r++)i=i+e[r-1]<<1,n[r]=i;for(s=0;s<=t;s++){let o=A[s*2+1];o!==0&&(A[s*2]=Fo(n[o]++,o))}},kB=()=>{let A,t,e,n,i,r=new Array(ZA+1);for(e=0,n=0;n<Si-1;n++)for(Ri[n]=e,A=0;A<1<<hi[n];A++)ze[e++]=n;for(ze[e-1]=n,i=0,n=0;n<16;n++)for(zt[n]=i,A=0;A<1<<Wt[n];A++)We[i++]=n;for(i>>=7;n<Be;n++)for(zt[n]=i<<7,A=0;A<1<<Wt[n]-7;A++)We[256+i++]=n;for(t=0;t<=ZA;t++)r[t]=0;for(A=0;A<=143;)UA[A*2+1]=8,A++,r[8]++;for(;A<=255;)UA[A*2+1]=9,A++,r[9]++;for(;A<=279;)UA[A*2+1]=7,A++,r[7]++;for(;A<=287;)UA[A*2+1]=8,A++,r[8]++;for(xo(UA,je+1,r),A=0;A<Be;A++)qe[A*2+1]=5,qe[A*2]=Fo(A,5);No=new ii(UA,hi,nt+1,je,ZA),ko=new ii(qe,Wt,0,Be,ZA),Ro=new ii(new Array(0),mB,0,Ni,yB)},Lo=A=>{let t;for(t=0;t<je;t++)A.dyn_ltree[t*2]=0;for(t=0;t<Be;t++)A.dyn_dtree[t*2]=0;for(t=0;t<Ni;t++)A.bl_tree[t*2]=0;A.dyn_ltree[ki*2]=1,A.opt_len=A.static_len=0,A.sym_next=A.matches=0},bo=A=>{A.bi_valid>8?Xe(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0},Mg=(A,t,e,n)=>{let i=t*2,r=e*2;return A[i]<A[r]||A[i]===A[r]&&n[t]<=n[e]},gi=(A,t,e)=>{let n=A.heap[e],i=e<<1;for(;i<=A.heap_len&&(i<A.heap_len&&Mg(t,A.heap[i+1],A.heap[i],A.depth)&&i++,!Mg(t,n,A.heap[i],A.depth));)A.heap[e]=A.heap[i],e=i,i<<=1;A.heap[e]=n},Tg=(A,t,e)=>{let n,i,r=0,s,o;if(A.sym_next!==0)do n=A.pending_buf[A.sym_buf+r++]&255,n+=(A.pending_buf[A.sym_buf+r++]&255)<<8,i=A.pending_buf[A.sym_buf+r++],n===0?RA(A,i,t):(s=ze[i],RA(A,s+nt+1,t),o=hi[s],o!==0&&(i-=Ri[s],QA(A,i,o)),n--,s=Go(n),RA(A,s,e),o=Wt[s],o!==0&&(n-=zt[s],QA(A,n,o)));while(r<A.sym_next);RA(A,ki,t)},fi=(A,t)=>{let e=t.dyn_tree,n=t.stat_desc.static_tree,i=t.stat_desc.has_stree,r=t.stat_desc.elems,s,o,a=-1,g;for(A.heap_len=0,A.heap_max=po,s=0;s<r;s++)e[s*2]!==0?(A.heap[++A.heap_len]=a=s,A.depth[s]=0):e[s*2+1]=0;for(;A.heap_len<2;)g=A.heap[++A.heap_len]=a<2?++a:0,e[g*2]=1,A.depth[g]=0,A.opt_len--,i&&(A.static_len-=n[g*2+1]);for(t.max_code=a,s=A.heap_len>>1;s>=1;s--)gi(A,e,s);g=r;do s=A.heap[1],A.heap[1]=A.heap[A.heap_len--],gi(A,e,1),o=A.heap[1],A.heap[--A.heap_max]=s,A.heap[--A.heap_max]=o,e[g*2]=e[s*2]+e[o*2],A.depth[g]=(A.depth[s]>=A.depth[o]?A.depth[s]:A.depth[o])+1,e[s*2+1]=e[o*2+1]=g,A.heap[1]=g++,gi(A,e,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],NB(A,t),xo(e,a,A.bl_count)},Yg=(A,t,e)=>{let n,i=-1,r,s=t[1],o=0,a=7,g=4;for(s===0&&(a=138,g=3),t[(e+1)*2+1]=65535,n=0;n<=e;n++)r=s,s=t[(n+1)*2+1],!(++o<a&&r===s)&&(o<g?A.bl_tree[r*2]+=o:r!==0?(r!==i&&A.bl_tree[r*2]++,A.bl_tree[yo*2]++):o<=10?A.bl_tree[mo*2]++:A.bl_tree[Do*2]++,o=0,i=r,s===0?(a=138,g=3):r===s?(a=6,g=3):(a=7,g=4))},_g=(A,t,e)=>{let n,i=-1,r,s=t[1],o=0,a=7,g=4;for(s===0&&(a=138,g=3),n=0;n<=e;n++)if(r=s,s=t[(n+1)*2+1],!(++o<a&&r===s)){if(o<g)do RA(A,r,A.bl_tree);while(--o!==0);else r!==0?(r!==i&&(RA(A,r,A.bl_tree),o--),RA(A,yo,A.bl_tree),QA(A,o-3,2)):o<=10?(RA(A,mo,A.bl_tree),QA(A,o-3,3)):(RA(A,Do,A.bl_tree),QA(A,o-11,7));o=0,i=r,s===0?(a=138,g=3):r===s?(a=6,g=3):(a=7,g=4)}},RB=A=>{let t;for(Yg(A,A.dyn_ltree,A.l_desc.max_code),Yg(A,A.dyn_dtree,A.d_desc.max_code),fi(A,A.bl_desc),t=Ni-1;t>=3&&A.bl_tree[So[t]*2+1]===0;t--);return A.opt_len+=3*(t+1)+5+5+4,t},GB=(A,t,e,n)=>{let i;for(QA(A,t-257,5),QA(A,e-1,5),QA(A,n-4,4),i=0;i<n;i++)QA(A,A.bl_tree[So[i]*2+1],3);_g(A,A.dyn_ltree,t-1),_g(A,A.dyn_dtree,e-1)},FB=A=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&A.dyn_ltree[e*2]!==0)return 0;if(A.dyn_ltree[18]!==0||A.dyn_ltree[20]!==0||A.dyn_ltree[26]!==0)return 1;for(e=32;e<nt;e++)if(A.dyn_ltree[e*2]!==0)return 1;return 0},Hg=!1,xB=A=>{Hg||(kB(),Hg=!0),A.l_desc=new ri(A.dyn_ltree,No),A.d_desc=new ri(A.dyn_dtree,ko),A.bl_desc=new ri(A.bl_tree,Ro),A.bi_buf=0,A.bi_valid=0,Lo(A)},Uo=(A,t,e,n)=>{QA(A,(dB<<1)+(n?1:0),3),bo(A),Xe(A,e),Xe(A,~e),e&&A.pending_buf.set(A.window.subarray(t,t+e),A.pending),A.pending+=e},LB=A=>{QA(A,wo<<1,3),RA(A,ki,UA),SB(A)},bB=(A,t,e,n)=>{let i,r,s=0;A.level>0?(A.strm.data_type===2&&(A.strm.data_type=FB(A)),fi(A,A.l_desc),fi(A,A.d_desc),s=RB(A),i=A.opt_len+3+7>>>3,r=A.static_len+3+7>>>3,r<=i&&(i=r)):i=r=e+5,e+4<=i&&t!==-1?Uo(A,t,e,n):A.strategy===4||r===i?(QA(A,(wo<<1)+(n?1:0),3),Tg(A,UA,qe)):(QA(A,(uB<<1)+(n?1:0),3),GB(A,A.l_desc.max_code+1,A.d_desc.max_code+1,s+1),Tg(A,A.dyn_ltree,A.dyn_dtree)),Lo(A),n&&bo(A)},UB=(A,t,e)=>(A.pending_buf[A.sym_buf+A.sym_next++]=t,A.pending_buf[A.sym_buf+A.sym_next++]=t>>8,A.pending_buf[A.sym_buf+A.sym_next++]=e,t===0?A.dyn_ltree[e*2]++:(A.matches++,t--,A.dyn_ltree[(ze[e]+nt+1)*2]++,A.dyn_dtree[Go(t)*2]++),A.sym_next===A.sym_end),MB=xB,TB=Uo,YB=bB,_B=UB,HB=LB,vB={_tr_init:MB,_tr_stored_block:TB,_tr_flush_block:YB,_tr_tally:_B,_tr_align:HB},KB=(A,t,e,n)=>{let i=A&65535|0,r=A>>>16&65535|0,s=0;for(;e!==0;){s=e>2e3?2e3:e,e-=s;do i=i+t[n++]|0,r=r+i|0;while(--s);i%=65521,r%=65521}return i|r<<16|0},$e=KB,PB=()=>{let A,t=[];for(var e=0;e<256;e++){A=e;for(var n=0;n<8;n++)A=A&1?3988292384^A>>>1:A>>>1;t[e]=A}return t},OB=new Uint32Array(PB()),JB=(A,t,e,n)=>{let i=OB,r=n+e;A^=-1;for(let s=n;s<r;s++)A=A>>>8^i[(A^t[s])&255];return A^-1},iA=JB,zA={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},ce={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},{_tr_init:qB,_tr_stored_block:di,_tr_flush_block:VB,_tr_tally:PA,_tr_align:ZB}=vB,{Z_NO_FLUSH:OA,Z_PARTIAL_FLUSH:jB,Z_FULL_FLUSH:WB,Z_FINISH:uA,Z_BLOCK:vg,Z_OK:rA,Z_STREAM_END:Kg,Z_STREAM_ERROR:GA,Z_DATA_ERROR:zB,Z_BUF_ERROR:oi,Z_DEFAULT_COMPRESSION:XB,Z_FILTERED:$B,Z_HUFFMAN_ONLY:Jt,Z_RLE:AE,Z_FIXED:eE,Z_DEFAULT_STRATEGY:tE,Z_UNKNOWN:nE,Z_DEFLATED:An}=ce,iE=9,rE=15,gE=8,oE=29,IE=256,ui=IE+1+oE,aE=30,sE=19,CE=2*ui+1,BE=15,P=3,KA=258,FA=KA+P+1,EE=32,Ee=42,Gi=57,wi=69,pi=73,yi=91,mi=103,jA=113,Oe=666,aA=1,he=2,XA=3,fe=4,QE=3,WA=(A,t)=>(A.msg=zA[t],t),Pg=A=>A*2-(A>4?9:0),vA=A=>{let t=A.length;for(;--t>=0;)A[t]=0},lE=A=>{let t,e,n,i=A.w_size;t=A.hash_size,n=t;do e=A.head[--n],A.head[n]=e>=i?e-i:0;while(--t);t=i,n=t;do e=A.prev[--n],A.prev[n]=e>=i?e-i:0;while(--t)},cE=(A,t,e)=>(t<<A.hash_shift^e)&A.hash_mask,JA=cE,hA=A=>{let t=A.state,e=t.pending;e>A.avail_out&&(e=A.avail_out),e!==0&&(A.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),A.next_out),A.next_out+=e,t.pending_out+=e,A.total_out+=e,A.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},fA=(A,t)=>{VB(A,A.block_start>=0?A.block_start:-1,A.strstart-A.block_start,t),A.block_start=A.strstart,hA(A.strm)},V=(A,t)=>{A.pending_buf[A.pending++]=t},Pe=(A,t)=>{A.pending_buf[A.pending++]=t>>>8&255,A.pending_buf[A.pending++]=t&255},Di=(A,t,e,n)=>{let i=A.avail_in;return i>n&&(i=n),i===0?0:(A.avail_in-=i,t.set(A.input.subarray(A.next_in,A.next_in+i),e),A.state.wrap===1?A.adler=$e(A.adler,t,i,e):A.state.wrap===2&&(A.adler=iA(A.adler,t,i,e)),A.next_in+=i,A.total_in+=i,i)},Mo=(A,t)=>{let e=A.max_chain_length,n=A.strstart,i,r,s=A.prev_length,o=A.nice_match,a=A.strstart>A.w_size-FA?A.strstart-(A.w_size-FA):0,g=A.window,I=A.w_mask,E=A.prev,B=A.strstart+KA,C=g[n+s-1],Q=g[n+s];A.prev_length>=A.good_match&&(e>>=2),o>A.lookahead&&(o=A.lookahead);do if(i=t,!(g[i+s]!==Q||g[i+s-1]!==C||g[i]!==g[n]||g[++i]!==g[n+1])){n+=2,i++;do;while(g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&g[++n]===g[++i]&&n<B);if(r=KA-(B-n),n=B-KA,r>s){if(A.match_start=t,s=r,r>=o)break;C=g[n+s-1],Q=g[n+s]}}while((t=E[t&I])>a&&--e!==0);return s<=A.lookahead?s:A.lookahead},Qe=A=>{let t=A.w_size,e,n,i;do{if(n=A.window_size-A.lookahead-A.strstart,A.strstart>=t+(t-FA)&&(A.window.set(A.window.subarray(t,t+t-n),0),A.match_start-=t,A.strstart-=t,A.block_start-=t,A.insert>A.strstart&&(A.insert=A.strstart),lE(A),n+=t),A.strm.avail_in===0)break;if(e=Di(A.strm,A.window,A.strstart+A.lookahead,n),A.lookahead+=e,A.lookahead+A.insert>=P)for(i=A.strstart-A.insert,A.ins_h=A.window[i],A.ins_h=JA(A,A.ins_h,A.window[i+1]);A.insert&&(A.ins_h=JA(A,A.ins_h,A.window[i+P-1]),A.prev[i&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=i,i++,A.insert--,!(A.lookahead+A.insert<P)););}while(A.lookahead<FA&&A.strm.avail_in!==0)},To=(A,t)=>{let e=A.pending_buf_size-5>A.w_size?A.w_size:A.pending_buf_size-5,n,i,r,s=0,o=A.strm.avail_in;do{if(n=65535,r=A.bi_valid+42>>3,A.strm.avail_out<r||(r=A.strm.avail_out-r,i=A.strstart-A.block_start,n>i+A.strm.avail_in&&(n=i+A.strm.avail_in),n>r&&(n=r),n<e&&(n===0&&t!==uA||t===OA||n!==i+A.strm.avail_in)))break;s=t===uA&&n===i+A.strm.avail_in?1:0,di(A,0,0,s),A.pending_buf[A.pending-4]=n,A.pending_buf[A.pending-3]=n>>8,A.pending_buf[A.pending-2]=~n,A.pending_buf[A.pending-1]=~n>>8,hA(A.strm),i&&(i>n&&(i=n),A.strm.output.set(A.window.subarray(A.block_start,A.block_start+i),A.strm.next_out),A.strm.next_out+=i,A.strm.avail_out-=i,A.strm.total_out+=i,A.block_start+=i,n-=i),n&&(Di(A.strm,A.strm.output,A.strm.next_out,n),A.strm.next_out+=n,A.strm.avail_out-=n,A.strm.total_out+=n)}while(s===0);return o-=A.strm.avail_in,o&&(o>=A.w_size?(A.matches=2,A.window.set(A.strm.input.subarray(A.strm.next_in-A.w_size,A.strm.next_in),0),A.strstart=A.w_size,A.insert=A.strstart):(A.window_size-A.strstart<=o&&(A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,A.insert>A.strstart&&(A.insert=A.strstart)),A.window.set(A.strm.input.subarray(A.strm.next_in-o,A.strm.next_in),A.strstart),A.strstart+=o,A.insert+=o>A.w_size-A.insert?A.w_size-A.insert:o),A.block_start=A.strstart),A.high_water<A.strstart&&(A.high_water=A.strstart),s?fe:t!==OA&&t!==uA&&A.strm.avail_in===0&&A.strstart===A.block_start?he:(r=A.window_size-A.strstart,A.strm.avail_in>r&&A.block_start>=A.w_size&&(A.block_start-=A.w_size,A.strstart-=A.w_size,A.window.set(A.window.subarray(A.w_size,A.w_size+A.strstart),0),A.matches<2&&A.matches++,r+=A.w_size,A.insert>A.strstart&&(A.insert=A.strstart)),r>A.strm.avail_in&&(r=A.strm.avail_in),r&&(Di(A.strm,A.window,A.strstart,r),A.strstart+=r,A.insert+=r>A.w_size-A.insert?A.w_size-A.insert:r),A.high_water<A.strstart&&(A.high_water=A.strstart),r=A.bi_valid+42>>3,r=A.pending_buf_size-r>65535?65535:A.pending_buf_size-r,e=r>A.w_size?A.w_size:r,i=A.strstart-A.block_start,(i>=e||(i||t===uA)&&t!==OA&&A.strm.avail_in===0&&i<=r)&&(n=i>r?r:i,s=t===uA&&A.strm.avail_in===0&&n===i?1:0,di(A,A.block_start,n,s),A.block_start+=n,hA(A.strm)),s?XA:aA)},Ii=(A,t)=>{let e,n;for(;;){if(A.lookahead<FA){if(Qe(A),A.lookahead<FA&&t===OA)return aA;if(A.lookahead===0)break}if(e=0,A.lookahead>=P&&(A.ins_h=JA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),e!==0&&A.strstart-e<=A.w_size-FA&&(A.match_length=Mo(A,e)),A.match_length>=P)if(n=PA(A,A.strstart-A.match_start,A.match_length-P),A.lookahead-=A.match_length,A.match_length<=A.max_lazy_match&&A.lookahead>=P){A.match_length--;do A.strstart++,A.ins_h=JA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart;while(--A.match_length!==0);A.strstart++}else A.strstart+=A.match_length,A.match_length=0,A.ins_h=A.window[A.strstart],A.ins_h=JA(A,A.ins_h,A.window[A.strstart+1]);else n=PA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++;if(n&&(fA(A,!1),A.strm.avail_out===0))return aA}return A.insert=A.strstart<P-1?A.strstart:P-1,t===uA?(fA(A,!0),A.strm.avail_out===0?XA:fe):A.sym_next&&(fA(A,!1),A.strm.avail_out===0)?aA:he},se=(A,t)=>{let e,n,i;for(;;){if(A.lookahead<FA){if(Qe(A),A.lookahead<FA&&t===OA)return aA;if(A.lookahead===0)break}if(e=0,A.lookahead>=P&&(A.ins_h=JA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),A.prev_length=A.match_length,A.prev_match=A.match_start,A.match_length=P-1,e!==0&&A.prev_length<A.max_lazy_match&&A.strstart-e<=A.w_size-FA&&(A.match_length=Mo(A,e),A.match_length<=5&&(A.strategy===$B||A.match_length===P&&A.strstart-A.match_start>4096)&&(A.match_length=P-1)),A.prev_length>=P&&A.match_length<=A.prev_length){i=A.strstart+A.lookahead-P,n=PA(A,A.strstart-1-A.prev_match,A.prev_length-P),A.lookahead-=A.prev_length-1,A.prev_length-=2;do++A.strstart<=i&&(A.ins_h=JA(A,A.ins_h,A.window[A.strstart+P-1]),e=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart);while(--A.prev_length!==0);if(A.match_available=0,A.match_length=P-1,A.strstart++,n&&(fA(A,!1),A.strm.avail_out===0))return aA}else if(A.match_available){if(n=PA(A,0,A.window[A.strstart-1]),n&&fA(A,!1),A.strstart++,A.lookahead--,A.strm.avail_out===0)return aA}else A.match_available=1,A.strstart++,A.lookahead--}return A.match_available&&(n=PA(A,0,A.window[A.strstart-1]),A.match_available=0),A.insert=A.strstart<P-1?A.strstart:P-1,t===uA?(fA(A,!0),A.strm.avail_out===0?XA:fe):A.sym_next&&(fA(A,!1),A.strm.avail_out===0)?aA:he},hE=(A,t)=>{let e,n,i,r,s=A.window;for(;;){if(A.lookahead<=KA){if(Qe(A),A.lookahead<=KA&&t===OA)return aA;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=P&&A.strstart>0&&(i=A.strstart-1,n=s[i],n===s[++i]&&n===s[++i]&&n===s[++i])){r=A.strstart+KA;do;while(n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&i<r);A.match_length=KA-(r-i),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=P?(e=PA(A,1,A.match_length-P),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(e=PA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),e&&(fA(A,!1),A.strm.avail_out===0))return aA}return A.insert=0,t===uA?(fA(A,!0),A.strm.avail_out===0?XA:fe):A.sym_next&&(fA(A,!1),A.strm.avail_out===0)?aA:he},fE=(A,t)=>{let e;for(;;){if(A.lookahead===0&&(Qe(A),A.lookahead===0)){if(t===OA)return aA;break}if(A.match_length=0,e=PA(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,e&&(fA(A,!1),A.strm.avail_out===0))return aA}return A.insert=0,t===uA?(fA(A,!0),A.strm.avail_out===0?XA:fe):A.sym_next&&(fA(A,!1),A.strm.avail_out===0)?aA:he};Je=[new kA(0,0,0,0,To),new kA(4,4,8,4,Ii),new kA(4,5,16,8,Ii),new kA(4,6,32,32,Ii),new kA(4,4,16,16,se),new kA(8,16,32,32,se),new kA(8,16,128,128,se),new kA(8,32,128,256,se),new kA(32,128,258,1024,se),new kA(32,258,258,4096,se)],dE=A=>{A.window_size=2*A.w_size,vA(A.head),A.max_lazy_match=Je[A.level].max_lazy,A.good_match=Je[A.level].good_length,A.nice_match=Je[A.level].nice_length,A.max_chain_length=Je[A.level].max_chain,A.strstart=0,A.block_start=0,A.lookahead=0,A.insert=0,A.match_length=A.prev_length=P-1,A.match_available=0,A.ins_h=0};it=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.status!==Ee&&t.status!==Gi&&t.status!==wi&&t.status!==pi&&t.status!==yi&&t.status!==mi&&t.status!==jA&&t.status!==Oe?1:0},Yo=A=>{if(it(A))return WA(A,GA);A.total_in=A.total_out=0,A.data_type=nE;let t=A.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?Gi:t.wrap?Ee:jA,A.adler=t.wrap===2?0:1,t.last_flush=-2,qB(t),rA},_o=A=>{let t=Yo(A);return t===rA&&dE(A.state),t},wE=(A,t)=>it(A)||A.state.wrap!==2?GA:(A.state.gzhead=t,rA),Ho=(A,t,e,n,i,r)=>{if(!A)return GA;let s=1;if(t===XB&&(t=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),i<1||i>iE||e!==An||n<8||n>15||t<0||t>9||r<0||r>eE||n===8&&s!==1)return WA(A,GA);n===8&&(n=9);let o=new uE;return A.state=o,o.strm=A,o.status=Ee,o.wrap=s,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+P-1)/P),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=t,o.strategy=r,o.method=e,_o(A)},pE=(A,t)=>Ho(A,t,An,rE,gE,tE),yE=(A,t)=>{if(it(A)||t>vg||t<0)return A?WA(A,GA):GA;let e=A.state;if(!A.output||A.avail_in!==0&&!A.input||e.status===Oe&&t!==uA)return WA(A,A.avail_out===0?oi:GA);let n=e.last_flush;if(e.last_flush=t,e.pending!==0){if(hA(A),A.avail_out===0)return e.last_flush=-1,rA}else if(A.avail_in===0&&Pg(t)<=Pg(n)&&t!==uA)return WA(A,oi);if(e.status===Oe&&A.avail_in!==0)return WA(A,oi);if(e.status===Ee&&e.wrap===0&&(e.status=jA),e.status===Ee){let i=An+(e.w_bits-8<<4)<<8,r=-1;if(e.strategy>=Jt||e.level<2?r=0:e.level<6?r=1:e.level===6?r=2:r=3,i|=r<<6,e.strstart!==0&&(i|=EE),i+=31-i%31,Pe(e,i),e.strstart!==0&&(Pe(e,A.adler>>>16),Pe(e,A.adler&65535)),A.adler=1,e.status=jA,hA(A),e.pending!==0)return e.last_flush=-1,rA}if(e.status===Gi){if(A.adler=0,V(e,31),V(e,139),V(e,8),e.gzhead)V(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),V(e,e.gzhead.time&255),V(e,e.gzhead.time>>8&255),V(e,e.gzhead.time>>16&255),V(e,e.gzhead.time>>24&255),V(e,e.level===9?2:e.strategy>=Jt||e.level<2?4:0),V(e,e.gzhead.os&255),e.gzhead.extra&&e.gzhead.extra.length&&(V(e,e.gzhead.extra.length&255),V(e,e.gzhead.extra.length>>8&255)),e.gzhead.hcrc&&(A.adler=iA(A.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=wi;else if(V(e,0),V(e,0),V(e,0),V(e,0),V(e,0),V(e,e.level===9?2:e.strategy>=Jt||e.level<2?4:0),V(e,QE),e.status=jA,hA(A),e.pending!==0)return e.last_flush=-1,rA}if(e.status===wi){if(e.gzhead.extra){let i=e.pending,r=(e.gzhead.extra.length&65535)-e.gzindex;for(;e.pending+r>e.pending_buf_size;){let o=e.pending_buf_size-e.pending;if(e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex,e.gzindex+o),e.pending),e.pending=e.pending_buf_size,e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex+=o,hA(A),e.pending!==0)return e.last_flush=-1,rA;i=0,r-=o}let s=new Uint8Array(e.gzhead.extra);e.pending_buf.set(s.subarray(e.gzindex,e.gzindex+r),e.pending),e.pending+=r,e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=pi}if(e.status===pi){if(e.gzhead.name){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i)),hA(A),e.pending!==0)return e.last_flush=-1,rA;i=0}e.gzindex<e.gzhead.name.length?r=e.gzhead.name.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i)),e.gzindex=0}e.status=yi}if(e.status===yi){if(e.gzhead.comment){let i=e.pending,r;do{if(e.pending===e.pending_buf_size){if(e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i)),hA(A),e.pending!==0)return e.last_flush=-1,rA;i=0}e.gzindex<e.gzhead.comment.length?r=e.gzhead.comment.charCodeAt(e.gzindex++)&255:r=0,V(e,r)}while(r!==0);e.gzhead.hcrc&&e.pending>i&&(A.adler=iA(A.adler,e.pending_buf,e.pending-i,i))}e.status=mi}if(e.status===mi){if(e.gzhead.hcrc){if(e.pending+2>e.pending_buf_size&&(hA(A),e.pending!==0))return e.last_flush=-1,rA;V(e,A.adler&255),V(e,A.adler>>8&255),A.adler=0}if(e.status=jA,hA(A),e.pending!==0)return e.last_flush=-1,rA}if(A.avail_in!==0||e.lookahead!==0||t!==OA&&e.status!==Oe){let i=e.level===0?To(e,t):e.strategy===Jt?fE(e,t):e.strategy===AE?hE(e,t):Je[e.level].func(e,t);if((i===XA||i===fe)&&(e.status=Oe),i===aA||i===XA)return A.avail_out===0&&(e.last_flush=-1),rA;if(i===he&&(t===jB?ZB(e):t!==vg&&(di(e,0,0,!1),t===WB&&(vA(e.head),e.lookahead===0&&(e.strstart=0,e.block_start=0,e.insert=0))),hA(A),A.avail_out===0))return e.last_flush=-1,rA}return t!==uA?rA:e.wrap<=0?Kg:(e.wrap===2?(V(e,A.adler&255),V(e,A.adler>>8&255),V(e,A.adler>>16&255),V(e,A.adler>>24&255),V(e,A.total_in&255),V(e,A.total_in>>8&255),V(e,A.total_in>>16&255),V(e,A.total_in>>24&255)):(Pe(e,A.adler>>>16),Pe(e,A.adler&65535)),hA(A),e.wrap>0&&(e.wrap=-e.wrap),e.pending!==0?rA:Kg)},mE=A=>{if(it(A))return GA;let t=A.state.status;return A.state=null,t===jA?WA(A,zB):rA},DE=(A,t)=>{let e=t.length;if(it(A))return GA;let n=A.state,i=n.wrap;if(i===2||i===1&&n.status!==Ee||n.lookahead)return GA;if(i===1&&(A.adler=$e(A.adler,t,e,0)),n.wrap=0,e>=n.w_size){i===0&&(vA(n.head),n.strstart=0,n.block_start=0,n.insert=0);let a=new Uint8Array(n.w_size);a.set(t.subarray(e-n.w_size,e),0),t=a,e=n.w_size}let r=A.avail_in,s=A.next_in,o=A.input;for(A.avail_in=e,A.next_in=0,A.input=t,Qe(n);n.lookahead>=P;){let a=n.strstart,g=n.lookahead-(P-1);do n.ins_h=JA(n,n.ins_h,n.window[a+P-1]),n.prev[a&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=a,a++;while(--g);n.strstart=a,n.lookahead=P-1,Qe(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=P-1,n.match_available=0,A.next_in=s,A.input=o,A.avail_in=r,n.wrap=i,rA},SE=pE,NE=Ho,kE=_o,RE=Yo,GE=wE,FE=yE,xE=mE,LE=DE,bE="pako deflate (from Nodeca project)",Ve={deflateInit:SE,deflateInit2:NE,deflateReset:kE,deflateResetKeep:RE,deflateSetHeader:GE,deflate:FE,deflateEnd:xE,deflateSetDictionary:LE,deflateInfo:bE},UE=(A,t)=>Object.prototype.hasOwnProperty.call(A,t),ME=function(A){let t=Array.prototype.slice.call(arguments,1);for(;t.length;){let e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(let n in e)UE(e,n)&&(A[n]=e[n])}}return A},TE=A=>{let t=0;for(let n=0,i=A.length;n<i;n++)t+=A[n].length;let e=new Uint8Array(t);for(let n=0,i=0,r=A.length;n<r;n++){let s=A[n];e.set(s,i),i+=s.length}return e},en={assign:ME,flattenChunks:TE},vo=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{vo=!1}At=new Uint8Array(256);for(let A=0;A<256;A++)At[A]=A>=252?6:A>=248?5:A>=240?4:A>=224?3:A>=192?2:1;At[254]=At[254]=1;YE=A=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(A);let t,e,n,i,r,s=A.length,o=0;for(i=0;i<s;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<s&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),o+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(o),r=0,i=0;r<o;i++)e=A.charCodeAt(i),(e&64512)===55296&&i+1<s&&(n=A.charCodeAt(i+1),(n&64512)===56320&&(e=65536+(e-55296<<10)+(n-56320),i++)),e<128?t[r++]=e:e<2048?(t[r++]=192|e>>>6,t[r++]=128|e&63):e<65536?(t[r++]=224|e>>>12,t[r++]=128|e>>>6&63,t[r++]=128|e&63):(t[r++]=240|e>>>18,t[r++]=128|e>>>12&63,t[r++]=128|e>>>6&63,t[r++]=128|e&63);return t},_E=(A,t)=>{if(t<65534&&A.subarray&&vo)return String.fromCharCode.apply(null,A.length===t?A:A.subarray(0,t));let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(A[n]);return e},HE=(A,t)=>{let e=t||A.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(A.subarray(0,t));let n,i,r=new Array(e*2);for(i=0,n=0;n<e;){let s=A[n++];if(s<128){r[i++]=s;continue}let o=At[s];if(o>4){r[i++]=65533,n+=o-1;continue}for(s&=o===2?31:o===3?15:7;o>1&&n<e;)s=s<<6|A[n++]&63,o--;if(o>1){r[i++]=65533;continue}s<65536?r[i++]=s:(s-=65536,r[i++]=55296|s>>10&1023,r[i++]=56320|s&1023)}return _E(r,i)},vE=(A,t)=>{t=t||A.length,t>A.length&&(t=A.length);let e=t-1;for(;e>=0&&(A[e]&192)===128;)e--;return e<0||e===0?t:e+At[A[e]]>t?e:t},et={string2buf:YE,buf2string:HE,utf8border:vE};Ko=KE,Po=Object.prototype.toString,{Z_NO_FLUSH:PE,Z_SYNC_FLUSH:OE,Z_FULL_FLUSH:JE,Z_FINISH:qE,Z_OK:Xt,Z_STREAM_END:VE,Z_DEFAULT_COMPRESSION:ZE,Z_DEFAULT_STRATEGY:jE,Z_DEFLATED:WE}=ce;rt.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i,r;if(this.ended)return!1;for(t===~~t?r=t:r=t===!0?qE:PE,typeof A=="string"?e.input=et.string2buf(A):Po.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){if(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),(r===OE||r===JE)&&e.avail_out<=6){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(i=Ve.deflate(e,r),i===VE)return e.next_out>0&&this.onData(e.output.subarray(0,e.next_out)),i=Ve.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===Xt;if(e.avail_out===0){this.onData(e.output);continue}if(r>0&&e.next_out>0){this.onData(e.output.subarray(0,e.next_out)),e.avail_out=0;continue}if(e.avail_in===0)break}return!0};rt.prototype.onData=function(A){this.chunks.push(A)};rt.prototype.onEnd=function(A){A===Xt&&(this.result=en.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};$E=rt,AQ=Fi,eQ=zE,tQ=XE,nQ=ce,iQ={Deflate:$E,deflate:AQ,deflateRaw:eQ,gzip:tQ,constants:nQ},qt=16209,rQ=16191,gQ=function(t,e){let n,i,r,s,o,a,g,I,E,B,C,Q,l,h,u,p,y,f,c,w,d,S,k,D,G=t.state;n=t.next_in,k=t.input,i=n+(t.avail_in-5),r=t.next_out,D=t.output,s=r-(e-t.avail_out),o=r+(t.avail_out-257),a=G.dmax,g=G.wsize,I=G.whave,E=G.wnext,B=G.window,C=G.hold,Q=G.bits,l=G.lencode,h=G.distcode,u=(1<<G.lenbits)-1,p=(1<<G.distbits)-1;A:do{Q<15&&(C+=k[n++]<<Q,Q+=8,C+=k[n++]<<Q,Q+=8),y=l[C&u];e:for(;;){if(f=y>>>24,C>>>=f,Q-=f,f=y>>>16&255,f===0)D[r++]=y&65535;else if(f&16){c=y&65535,f&=15,f&&(Q<f&&(C+=k[n++]<<Q,Q+=8),c+=C&(1<<f)-1,C>>>=f,Q-=f),Q<15&&(C+=k[n++]<<Q,Q+=8,C+=k[n++]<<Q,Q+=8),y=h[C&p];t:for(;;){if(f=y>>>24,C>>>=f,Q-=f,f=y>>>16&255,f&16){if(w=y&65535,f&=15,Q<f&&(C+=k[n++]<<Q,Q+=8,Q<f&&(C+=k[n++]<<Q,Q+=8)),w+=C&(1<<f)-1,w>a){t.msg="invalid distance too far back",G.mode=qt;break A}if(C>>>=f,Q-=f,f=r-s,w>f){if(f=w-f,f>I&&G.sane){t.msg="invalid distance too far back",G.mode=qt;break A}if(d=0,S=B,E===0){if(d+=g-f,f<c){c-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}}else if(E<f){if(d+=g+E-f,f-=E,f<c){c-=f;do D[r++]=B[d++];while(--f);if(d=0,E<c){f=E,c-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}}}else if(d+=E-f,f<c){c-=f;do D[r++]=B[d++];while(--f);d=r-w,S=D}for(;c>2;)D[r++]=S[d++],D[r++]=S[d++],D[r++]=S[d++],c-=3;c&&(D[r++]=S[d++],c>1&&(D[r++]=S[d++]))}else{d=r-w;do D[r++]=D[d++],D[r++]=D[d++],D[r++]=D[d++],c-=3;while(c>2);c&&(D[r++]=D[d++],c>1&&(D[r++]=D[d++]))}}else if((f&64)===0){y=h[(y&65535)+(C&(1<<f)-1)];continue t}else{t.msg="invalid distance code",G.mode=qt;break A}break}}else if((f&64)===0){y=l[(y&65535)+(C&(1<<f)-1)];continue e}else if(f&32){G.mode=rQ;break A}else{t.msg="invalid literal/length code",G.mode=qt;break A}break}}while(n<i&&r<o);c=Q>>3,n-=c,Q-=c<<3,C&=(1<<Q)-1,t.next_in=n,t.next_out=r,t.avail_in=n<i?5+(i-n):5-(n-i),t.avail_out=r<o?257+(o-r):257-(r-o),G.hold=C,G.bits=Q},Ce=15,Og=852,Jg=592,qg=0,ai=1,Vg=2,oQ=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),IQ=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),aQ=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),sQ=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),CQ=(A,t,e,n,i,r,s,o)=>{let a=o.bits,g=0,I=0,E=0,B=0,C=0,Q=0,l=0,h=0,u=0,p=0,y,f,c,w,d,S=null,k,D=new Uint16Array(Ce+1),G=new Uint16Array(Ce+1),x=null,v,F,N;for(g=0;g<=Ce;g++)D[g]=0;for(I=0;I<n;I++)D[t[e+I]]++;for(C=a,B=Ce;B>=1&&D[B]===0;B--);if(C>B&&(C=B),B===0)return i[r++]=1<<24|64<<16|0,i[r++]=1<<24|64<<16|0,o.bits=1,0;for(E=1;E<B&&D[E]===0;E++);for(C<E&&(C=E),h=1,g=1;g<=Ce;g++)if(h<<=1,h-=D[g],h<0)return-1;if(h>0&&(A===qg||B!==1))return-1;for(G[1]=0,g=1;g<Ce;g++)G[g+1]=G[g]+D[g];for(I=0;I<n;I++)t[e+I]!==0&&(s[G[t[e+I]]++]=I);if(A===qg?(S=x=s,k=20):A===ai?(S=oQ,x=IQ,k=257):(S=aQ,x=sQ,k=0),p=0,I=0,g=E,d=r,Q=C,l=0,c=-1,u=1<<C,w=u-1,A===ai&&u>Og||A===Vg&&u>Jg)return 1;for(;;){v=g-l,s[I]+1<k?(F=0,N=s[I]):s[I]>=k?(F=x[s[I]-k],N=S[s[I]-k]):(F=96,N=0),y=1<<g-l,f=1<<Q,E=f;do f-=y,i[d+(p>>l)+f]=v<<24|F<<16|N|0;while(f!==0);for(y=1<<g-1;p&y;)y>>=1;if(y!==0?(p&=y-1,p+=y):p=0,I++,--D[g]===0){if(g===B)break;g=t[e+s[I]]}if(g>C&&(p&w)!==c){for(l===0&&(l=C),d+=E,Q=g-l,h=1<<Q;Q+l<B&&(h-=D[Q+l],!(h<=0));)Q++,h<<=1;if(u+=1<<Q,A===ai&&u>Og||A===Vg&&u>Jg)return 1;c=p&w,i[c]=C<<24|Q<<16|d-r|0}}return p!==0&&(i[d+p]=g-l<<24|64<<16|0),o.bits=C,0},Ze=CQ,BQ=0,Oo=1,Jo=2,{Z_FINISH:Zg,Z_BLOCK:EQ,Z_TREES:Vt,Z_OK:$A,Z_STREAM_END:QQ,Z_NEED_DICT:lQ,Z_STREAM_ERROR:wA,Z_DATA_ERROR:qo,Z_MEM_ERROR:Vo,Z_BUF_ERROR:cQ,Z_DEFLATED:jg}=ce,tn=16180,Wg=16181,zg=16182,Xg=16183,$g=16184,Ao=16185,eo=16186,to=16187,no=16188,io=16189,$t=16190,bA=16191,si=16192,ro=16193,Ci=16194,go=16195,oo=16196,Io=16197,ao=16198,Zt=16199,jt=16200,so=16201,Co=16202,Bo=16203,Eo=16204,Qo=16205,Bi=16206,lo=16207,co=16208,$=16209,Zo=16210,jo=16211,hQ=852,fQ=592,dQ=15,uQ=dQ,ho=A=>(A>>>24&255)+(A>>>8&65280)+((A&65280)<<8)+((A&255)<<24);Ae=A=>{if(!A)return 1;let t=A.state;return!t||t.strm!==A||t.mode<tn||t.mode>jo?1:0},Wo=A=>{if(Ae(A))return wA;let t=A.state;return A.total_in=A.total_out=t.total=0,A.msg="",t.wrap&&(A.adler=t.wrap&1),t.mode=tn,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(hQ),t.distcode=t.distdyn=new Int32Array(fQ),t.sane=1,t.back=-1,$A},zo=A=>{if(Ae(A))return wA;let t=A.state;return t.wsize=0,t.whave=0,t.wnext=0,Wo(A)},Xo=(A,t)=>{let e;if(Ae(A))return wA;let n=A.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?wA:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=e,n.wbits=t,zo(A))},$o=(A,t)=>{if(!A)return wA;let e=new wQ;A.state=e,e.strm=A,e.window=null,e.mode=tn;let n=Xo(A,t);return n!==$A&&(A.state=null),n},pQ=A=>$o(A,uQ),fo=!0,yQ=A=>{if(fo){Ei=new Int32Array(512),Qi=new Int32Array(32);let t=0;for(;t<144;)A.lens[t++]=8;for(;t<256;)A.lens[t++]=9;for(;t<280;)A.lens[t++]=7;for(;t<288;)A.lens[t++]=8;for(Ze(Oo,A.lens,0,288,Ei,0,A.work,{bits:9}),t=0;t<32;)A.lens[t++]=5;Ze(Jo,A.lens,0,32,Qi,0,A.work,{bits:5}),fo=!1}A.lencode=Ei,A.lenbits=9,A.distcode=Qi,A.distbits=5},AI=(A,t,e,n)=>{let i,r=A.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(i=r.wsize-r.wnext,i>n&&(i=n),r.window.set(t.subarray(e-n,e-n+i),r.wnext),n-=i,n?(r.window.set(t.subarray(e-n,e),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=i,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=i))),0},mQ=(A,t)=>{let e,n,i,r,s,o,a,g,I,E,B,C,Q,l,h=0,u,p,y,f,c,w,d,S,k=new Uint8Array(4),D,G,x=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Ae(A)||!A.output||!A.input&&A.avail_in!==0)return wA;e=A.state,e.mode===bA&&(e.mode=si),s=A.next_out,i=A.output,a=A.avail_out,r=A.next_in,n=A.input,o=A.avail_in,g=e.hold,I=e.bits,E=o,B=a,S=$A;A:for(;;)switch(e.mode){case tn:if(e.wrap===0){e.mode=si;break}for(;I<16;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(e.wrap&2&&g===35615){e.wbits===0&&(e.wbits=15),e.check=0,k[0]=g&255,k[1]=g>>>8&255,e.check=iA(e.check,k,2,0),g=0,I=0,e.mode=Wg;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((g&255)<<8)+(g>>8))%31){A.msg="incorrect header check",e.mode=$;break}if((g&15)!==jg){A.msg="unknown compression method",e.mode=$;break}if(g>>>=4,I-=4,d=(g&15)+8,e.wbits===0&&(e.wbits=d),d>15||d>e.wbits){A.msg="invalid window size",e.mode=$;break}e.dmax=1<<e.wbits,e.flags=0,A.adler=e.check=1,e.mode=g&512?io:bA,g=0,I=0;break;case Wg:for(;I<16;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(e.flags=g,(e.flags&255)!==jg){A.msg="unknown compression method",e.mode=$;break}if(e.flags&57344){A.msg="unknown header flags set",e.mode=$;break}e.head&&(e.head.text=g>>8&1),e.flags&512&&e.wrap&4&&(k[0]=g&255,k[1]=g>>>8&255,e.check=iA(e.check,k,2,0)),g=0,I=0,e.mode=zg;case zg:for(;I<32;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.head&&(e.head.time=g),e.flags&512&&e.wrap&4&&(k[0]=g&255,k[1]=g>>>8&255,k[2]=g>>>16&255,k[3]=g>>>24&255,e.check=iA(e.check,k,4,0)),g=0,I=0,e.mode=Xg;case Xg:for(;I<16;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.head&&(e.head.xflags=g&255,e.head.os=g>>8),e.flags&512&&e.wrap&4&&(k[0]=g&255,k[1]=g>>>8&255,e.check=iA(e.check,k,2,0)),g=0,I=0,e.mode=$g;case $g:if(e.flags&1024){for(;I<16;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.length=g,e.head&&(e.head.extra_len=g),e.flags&512&&e.wrap&4&&(k[0]=g&255,k[1]=g>>>8&255,e.check=iA(e.check,k,2,0)),g=0,I=0}else e.head&&(e.head.extra=null);e.mode=Ao;case Ao:if(e.flags&1024&&(C=e.length,C>o&&(C=o),C&&(e.head&&(d=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(n.subarray(r,r+C),d)),e.flags&512&&e.wrap&4&&(e.check=iA(e.check,n,C,r)),o-=C,r+=C,e.length-=C),e.length))break A;e.length=0,e.mode=eo;case eo:if(e.flags&2048){if(o===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.name+=String.fromCharCode(d));while(d&&C<o);if(e.flags&512&&e.wrap&4&&(e.check=iA(e.check,n,C,r)),o-=C,r+=C,d)break A}else e.head&&(e.head.name=null);e.length=0,e.mode=to;case to:if(e.flags&4096){if(o===0)break A;C=0;do d=n[r+C++],e.head&&d&&e.length<65536&&(e.head.comment+=String.fromCharCode(d));while(d&&C<o);if(e.flags&512&&e.wrap&4&&(e.check=iA(e.check,n,C,r)),o-=C,r+=C,d)break A}else e.head&&(e.head.comment=null);e.mode=no;case no:if(e.flags&512){for(;I<16;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(e.wrap&4&&g!==(e.check&65535)){A.msg="header crc mismatch",e.mode=$;break}g=0,I=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),A.adler=e.check=0,e.mode=bA;break;case io:for(;I<32;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}A.adler=e.check=ho(g),g=0,I=0,e.mode=$t;case $t:if(e.havedict===0)return A.next_out=s,A.avail_out=a,A.next_in=r,A.avail_in=o,e.hold=g,e.bits=I,lQ;A.adler=e.check=1,e.mode=bA;case bA:if(t===EQ||t===Vt)break A;case si:if(e.last){g>>>=I&7,I-=I&7,e.mode=Bi;break}for(;I<3;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}switch(e.last=g&1,g>>>=1,I-=1,g&3){case 0:e.mode=ro;break;case 1:if(yQ(e),e.mode=Zt,t===Vt){g>>>=2,I-=2;break A}break;case 2:e.mode=oo;break;case 3:A.msg="invalid block type",e.mode=$}g>>>=2,I-=2;break;case ro:for(g>>>=I&7,I-=I&7;I<32;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if((g&65535)!==(g>>>16^65535)){A.msg="invalid stored block lengths",e.mode=$;break}if(e.length=g&65535,g=0,I=0,e.mode=Ci,t===Vt)break A;case Ci:e.mode=go;case go:if(C=e.length,C){if(C>o&&(C=o),C>a&&(C=a),C===0)break A;i.set(n.subarray(r,r+C),s),o-=C,r+=C,a-=C,s+=C,e.length-=C;break}e.mode=bA;break;case oo:for(;I<14;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(e.nlen=(g&31)+257,g>>>=5,I-=5,e.ndist=(g&31)+1,g>>>=5,I-=5,e.ncode=(g&15)+4,g>>>=4,I-=4,e.nlen>286||e.ndist>30){A.msg="too many length or distance symbols",e.mode=$;break}e.have=0,e.mode=Io;case Io:for(;e.have<e.ncode;){for(;I<3;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.lens[x[e.have++]]=g&7,g>>>=3,I-=3}for(;e.have<19;)e.lens[x[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,D={bits:e.lenbits},S=Ze(BQ,e.lens,0,19,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid code lengths set",e.mode=$;break}e.have=0,e.mode=ao;case ao:for(;e.have<e.nlen+e.ndist;){for(;h=e.lencode[g&(1<<e.lenbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=I);){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(y<16)g>>>=u,I-=u,e.lens[e.have++]=y;else{if(y===16){for(G=u+2;I<G;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(g>>>=u,I-=u,e.have===0){A.msg="invalid bit length repeat",e.mode=$;break}d=e.lens[e.have-1],C=3+(g&3),g>>>=2,I-=2}else if(y===17){for(G=u+3;I<G;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}g>>>=u,I-=u,d=0,C=3+(g&7),g>>>=3,I-=3}else{for(G=u+7;I<G;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}g>>>=u,I-=u,d=0,C=11+(g&127),g>>>=7,I-=7}if(e.have+C>e.nlen+e.ndist){A.msg="invalid bit length repeat",e.mode=$;break}for(;C--;)e.lens[e.have++]=d}}if(e.mode===$)break;if(e.lens[256]===0){A.msg="invalid code -- missing end-of-block",e.mode=$;break}if(e.lenbits=9,D={bits:e.lenbits},S=Ze(Oo,e.lens,0,e.nlen,e.lencode,0,e.work,D),e.lenbits=D.bits,S){A.msg="invalid literal/lengths set",e.mode=$;break}if(e.distbits=6,e.distcode=e.distdyn,D={bits:e.distbits},S=Ze(Jo,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,D),e.distbits=D.bits,S){A.msg="invalid distances set",e.mode=$;break}if(e.mode=Zt,t===Vt)break A;case Zt:e.mode=jt;case jt:if(o>=6&&a>=258){A.next_out=s,A.avail_out=a,A.next_in=r,A.avail_in=o,e.hold=g,e.bits=I,gQ(A,B),s=A.next_out,i=A.output,a=A.avail_out,r=A.next_in,n=A.input,o=A.avail_in,g=e.hold,I=e.bits,e.mode===bA&&(e.back=-1);break}for(e.back=0;h=e.lencode[g&(1<<e.lenbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=I);){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(p&&(p&240)===0){for(f=u,c=p,w=y;h=e.lencode[w+((g&(1<<f+c)-1)>>f)],u=h>>>24,p=h>>>16&255,y=h&65535,!(f+u<=I);){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}g>>>=f,I-=f,e.back+=f}if(g>>>=u,I-=u,e.back+=u,e.length=y,p===0){e.mode=Qo;break}if(p&32){e.back=-1,e.mode=bA;break}if(p&64){A.msg="invalid literal/length code",e.mode=$;break}e.extra=p&15,e.mode=so;case so:if(e.extra){for(G=e.extra;I<G;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.length+=g&(1<<e.extra)-1,g>>>=e.extra,I-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Co;case Co:for(;h=e.distcode[g&(1<<e.distbits)-1],u=h>>>24,p=h>>>16&255,y=h&65535,!(u<=I);){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if((p&240)===0){for(f=u,c=p,w=y;h=e.distcode[w+((g&(1<<f+c)-1)>>f)],u=h>>>24,p=h>>>16&255,y=h&65535,!(f+u<=I);){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}g>>>=f,I-=f,e.back+=f}if(g>>>=u,I-=u,e.back+=u,p&64){A.msg="invalid distance code",e.mode=$;break}e.offset=y,e.extra=p&15,e.mode=Bo;case Bo:if(e.extra){for(G=e.extra;I<G;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}e.offset+=g&(1<<e.extra)-1,g>>>=e.extra,I-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){A.msg="invalid distance too far back",e.mode=$;break}e.mode=Eo;case Eo:if(a===0)break A;if(C=B-a,e.offset>C){if(C=e.offset-C,C>e.whave&&e.sane){A.msg="invalid distance too far back",e.mode=$;break}C>e.wnext?(C-=e.wnext,Q=e.wsize-C):Q=e.wnext-C,C>e.length&&(C=e.length),l=e.window}else l=i,Q=s-e.offset,C=e.length;C>a&&(C=a),a-=C,e.length-=C;do i[s++]=l[Q++];while(--C);e.length===0&&(e.mode=jt);break;case Qo:if(a===0)break A;i[s++]=e.length,a--,e.mode=jt;break;case Bi:if(e.wrap){for(;I<32;){if(o===0)break A;o--,g|=n[r++]<<I,I+=8}if(B-=a,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?iA(e.check,i,B,s-B):$e(e.check,i,B,s-B)),B=a,e.wrap&4&&(e.flags?g:ho(g))!==e.check){A.msg="incorrect data check",e.mode=$;break}g=0,I=0}e.mode=lo;case lo:if(e.wrap&&e.flags){for(;I<32;){if(o===0)break A;o--,g+=n[r++]<<I,I+=8}if(e.wrap&4&&g!==(e.total&4294967295)){A.msg="incorrect length check",e.mode=$;break}g=0,I=0}e.mode=co;case co:S=QQ;break A;case $:S=qo;break A;case Zo:return Vo;case jo:default:return wA}return A.next_out=s,A.avail_out=a,A.next_in=r,A.avail_in=o,e.hold=g,e.bits=I,(e.wsize||B!==A.avail_out&&e.mode<$&&(e.mode<Bi||t!==Zg))&&AI(A,A.output,A.next_out,B-A.avail_out),E-=A.avail_in,B-=A.avail_out,A.total_in+=E,A.total_out+=B,e.total+=B,e.wrap&4&&B&&(A.adler=e.check=e.flags?iA(e.check,i,B,A.next_out-B):$e(e.check,i,B,A.next_out-B)),A.data_type=e.bits+(e.last?64:0)+(e.mode===bA?128:0)+(e.mode===Zt||e.mode===Ci?256:0),(E===0&&B===0||t===Zg)&&S===$A&&(S=cQ),S},DQ=A=>{if(Ae(A))return wA;let t=A.state;return t.window&&(t.window=null),A.state=null,$A},SQ=(A,t)=>{if(Ae(A))return wA;let e=A.state;return(e.wrap&2)===0?wA:(e.head=t,t.done=!1,$A)},NQ=(A,t)=>{let e=t.length,n,i,r;return Ae(A)||(n=A.state,n.wrap!==0&&n.mode!==$t)?wA:n.mode===$t&&(i=1,i=$e(i,t,e,0),i!==n.check)?qo:(r=AI(A,t,e,e),r?(n.mode=Zo,Vo):(n.havedict=1,$A))},kQ=zo,RQ=Xo,GQ=Wo,FQ=pQ,xQ=$o,LQ=mQ,bQ=DQ,UQ=SQ,MQ=NQ,TQ="pako inflate (from Nodeca project)",MA={inflateReset:kQ,inflateReset2:RQ,inflateResetKeep:GQ,inflateInit:FQ,inflateInit2:xQ,inflate:LQ,inflateEnd:bQ,inflateGetHeader:UQ,inflateSetDictionary:MQ,inflateInfo:TQ};_Q=YQ,eI=Object.prototype.toString,{Z_NO_FLUSH:HQ,Z_FINISH:vQ,Z_OK:tt,Z_STREAM_END:li,Z_NEED_DICT:ci,Z_STREAM_ERROR:KQ,Z_DATA_ERROR:uo,Z_MEM_ERROR:PQ}=ce;gt.prototype.push=function(A,t){let e=this.strm,n=this.options.chunkSize,i=this.options.dictionary,r,s,o;if(this.ended)return!1;for(t===~~t?s=t:s=t===!0?vQ:HQ,eI.call(A)==="[object ArrayBuffer]"?e.input=new Uint8Array(A):e.input=A,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(n),e.next_out=0,e.avail_out=n),r=MA.inflate(e,s),r===ci&&i&&(r=MA.inflateSetDictionary(e,i),r===tt?r=MA.inflate(e,s):r===uo&&(r=ci));e.avail_in>0&&r===li&&e.state.wrap>0&&A[e.next_in]!==0;)MA.inflateReset(e),r=MA.inflate(e,s);switch(r){case KQ:case uo:case ci:case PQ:return this.onEnd(r),this.ended=!0,!1}if(o=e.avail_out,e.next_out&&(e.avail_out===0||r===li))if(this.options.to==="string"){let a=et.utf8border(e.output,e.next_out),g=e.next_out-a,I=et.buf2string(e.output,a);e.next_out=g,e.avail_out=n-g,g&&e.output.set(e.output.subarray(a,a+g),0),this.onData(I)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(r===tt&&o===0)){if(r===li)return r=MA.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};gt.prototype.onData=function(A){this.chunks.push(A)};gt.prototype.onEnd=function(A){A===tt&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=en.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};JQ=gt,qQ=xi,VQ=OQ,ZQ=xi,jQ=ce,WQ={Inflate:JQ,inflate:qQ,inflateRaw:VQ,ungzip:ZQ,constants:jQ},{Deflate:id,deflate:rd,deflateRaw:gd,gzip:od}=iQ,{Inflate:Id,inflate:zQ,inflateRaw:ad,ungzip:sd}=WQ,nn=zQ});var tI={};yA(tI,{default:()=>rn});var rn,nI=CA(()=>{Li();LA();rn=class extends nA{decodeBlock(t){return nn(new Uint8Array(t)).buffer}}});var iI={};yA(iI,{default:()=>gn});var gn,rI=CA(()=>{LA();gn=class extends nA{decodeBlock(t){let e=new DataView(t),n=[];for(let i=0;i<t.byteLength;++i){let r=e.getInt8(i);if(r<0){let s=e.getUint8(i+1);r=-r;for(let o=0;o<=r;++o)n.push(s);i+=1}else{for(let s=0;s<=r;++s)n.push(e.getUint8(i+s+1));i+=r+1}}return new Uint8Array(n).buffer}}});var gI=Ja((ld,on)=>{(function(){var A=(function(){var i={};i.defaultNoDataValue=-34027999387901484e22,i.decode=function(I,E){E=E||{};var B=E.encodedMaskData||E.encodedMaskData===null,C=a(I,E.inputOffset||0,B),Q=E.noDataValue!==null?E.noDataValue:i.defaultNoDataValue,l=r(C,E.pixelType||Float32Array,E.encodedMaskData,Q,E.returnMask),h={width:C.width,height:C.height,pixelData:l.resultPixels,minValue:l.minValue,maxValue:C.pixels.maxValue,noDataValue:Q};return l.resultMask&&(h.maskData=l.resultMask),E.returnEncodedMask&&C.mask&&(h.encodedMaskData=C.mask.bitset?C.mask.bitset:null),E.returnFileInfo&&(h.fileInfo=s(C),E.computeUsedBitDepths&&(h.fileInfo.bitDepths=o(C))),h};var r=function(I,E,B,C,Q){var l=0,h=I.pixels.numBlocksX,u=I.pixels.numBlocksY,p=Math.floor(I.width/h),y=Math.floor(I.height/u),f=2*I.maxZError,c=Number.MAX_VALUE,w;B=B||(I.mask?I.mask.bitset:null);var d,S;d=new E(I.width*I.height),Q&&B&&(S=new Uint8Array(I.width*I.height));for(var k=new Float32Array(p*y),D,G,x=0;x<=u;x++){var v=x!==u?y:I.height%u;if(v!==0)for(var F=0;F<=h;F++){var N=F!==h?p:I.width%h;if(N!==0){var b=x*I.width*y+F*p,H=I.width-N,L=I.pixels.blocks[l],T,U,K;L.encoding<2?(L.encoding===0?T=L.rawData:(g(L.stuffedData,L.bitsPerPixel,L.numValidPixels,L.offset,f,k,I.pixels.maxValue),T=k),U=0):L.encoding===2?K=0:K=L.offset;var Z;if(B)for(G=0;G<v;G++){for(b&7&&(Z=B[b>>3],Z<<=b&7),D=0;D<N;D++)b&7||(Z=B[b>>3]),Z&128?(S&&(S[b]=1),w=L.encoding<2?T[U++]:K,c=c>w?w:c,d[b++]=w):(S&&(S[b]=0),d[b++]=C),Z<<=1;b+=H}else if(L.encoding<2)for(G=0;G<v;G++){for(D=0;D<N;D++)w=T[U++],c=c>w?w:c,d[b++]=w;b+=H}else for(c=c>K?K:c,G=0;G<v;G++){for(D=0;D<N;D++)d[b++]=K;b+=H}if(L.encoding===1&&U!==L.numValidPixels)throw"Block and Mask do not match";l++}}}return{resultPixels:d,resultMask:S,minValue:c}},s=function(I){return{fileIdentifierString:I.fileIdentifierString,fileVersion:I.fileVersion,imageType:I.imageType,height:I.height,width:I.width,maxZError:I.maxZError,eofOffset:I.eofOffset,mask:I.mask?{numBlocksX:I.mask.numBlocksX,numBlocksY:I.mask.numBlocksY,numBytes:I.mask.numBytes,maxValue:I.mask.maxValue}:null,pixels:{numBlocksX:I.pixels.numBlocksX,numBlocksY:I.pixels.numBlocksY,numBytes:I.pixels.numBytes,maxValue:I.pixels.maxValue,noDataValue:I.noDataValue}}},o=function(I){for(var E=I.pixels.numBlocksX*I.pixels.numBlocksY,B={},C=0;C<E;C++){var Q=I.pixels.blocks[C];Q.encoding===0?B.float32=!0:Q.encoding===1?B[Q.bitsPerPixel]=!0:B[0]=!0}return Object.keys(B)},a=function(I,E,B){var C={},Q=new Uint8Array(I,E,10);if(C.fileIdentifierString=String.fromCharCode.apply(null,Q),C.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+C.fileIdentifierString;E+=10;var l=new DataView(I,E,24);if(C.fileVersion=l.getInt32(0,!0),C.imageType=l.getInt32(4,!0),C.height=l.getUint32(8,!0),C.width=l.getUint32(12,!0),C.maxZError=l.getFloat64(16,!0),E+=24,!B)if(l=new DataView(I,E,16),C.mask={},C.mask.numBlocksY=l.getUint32(0,!0),C.mask.numBlocksX=l.getUint32(4,!0),C.mask.numBytes=l.getUint32(8,!0),C.mask.maxValue=l.getFloat32(12,!0),E+=16,C.mask.numBytes>0){var h=new Uint8Array(Math.ceil(C.width*C.height/8));l=new DataView(I,E,C.mask.numBytes);var u=l.getInt16(0,!0),p=2,y=0;do{if(u>0)for(;u--;)h[y++]=l.getUint8(p++);else{var f=l.getUint8(p++);for(u=-u;u--;)h[y++]=f}u=l.getInt16(p,!0),p+=2}while(p<C.mask.numBytes);if(u!==-32768||y<h.length)throw"Unexpected end of mask RLE encoding";C.mask.bitset=h,E+=C.mask.numBytes}else(C.mask.numBytes|C.mask.numBlocksY|C.mask.maxValue)===0&&(C.mask.bitset=new Uint8Array(Math.ceil(C.width*C.height/8)));l=new DataView(I,E,16),C.pixels={},C.pixels.numBlocksY=l.getUint32(0,!0),C.pixels.numBlocksX=l.getUint32(4,!0),C.pixels.numBytes=l.getUint32(8,!0),C.pixels.maxValue=l.getFloat32(12,!0),E+=16;var c=C.pixels.numBlocksX,w=C.pixels.numBlocksY,d=c+(C.width%c>0?1:0),S=w+(C.height%w>0?1:0);C.pixels.blocks=new Array(d*S);for(var k=0,D=0;D<S;D++)for(var G=0;G<d;G++){var x=0,v=I.byteLength-E;l=new DataView(I,E,Math.min(10,v));var F={};C.pixels.blocks[k++]=F;var N=l.getUint8(0);if(x++,F.encoding=N&63,F.encoding>3)throw"Invalid block encoding ("+F.encoding+")";if(F.encoding===2){E++;continue}if(N!==0&&N!==2){if(N>>=6,F.offsetType=N,N===2)F.offset=l.getInt8(1),x++;else if(N===1)F.offset=l.getInt16(1,!0),x+=2;else if(N===0)F.offset=l.getFloat32(1,!0),x+=4;else throw"Invalid block offset type";if(F.encoding===1)if(N=l.getUint8(x),x++,F.bitsPerPixel=N&63,N>>=6,F.numValidPixelsType=N,N===2)F.numValidPixels=l.getUint8(x),x++;else if(N===1)F.numValidPixels=l.getUint16(x,!0),x+=2;else if(N===0)F.numValidPixels=l.getUint32(x,!0),x+=4;else throw"Invalid valid pixel count type"}if(E+=x,F.encoding!==3){var b,H;if(F.encoding===0){var L=(C.pixels.numBytes-1)/4;if(L!==Math.floor(L))throw"uncompressed block has invalid length";b=new ArrayBuffer(L*4),H=new Uint8Array(b),H.set(new Uint8Array(I,E,L*4));var T=new Float32Array(b);F.rawData=T,E+=L*4}else if(F.encoding===1){var U=Math.ceil(F.numValidPixels*F.bitsPerPixel/8),K=Math.ceil(U/4);b=new ArrayBuffer(K*4),H=new Uint8Array(b),H.set(new Uint8Array(I,E,U)),F.stuffedData=new Uint32Array(b),E+=U}}}return C.eofOffset=E,C},g=function(I,E,B,C,Q,l,h){var u=(1<<E)-1,p=0,y,f=0,c,w,d=Math.ceil((h-C)/Q),S=I.length*4-Math.ceil(E*B/8);for(I[I.length-1]<<=8*S,y=0;y<B;y++){if(f===0&&(w=I[p++],f=32),f>=E)c=w>>>f-E&u,f-=E;else{var k=E-f;c=(w&u)<<k&u,w=I[p++],f=32-k,c+=w>>>f}l[y]=c<d?C+c*Q:h}return l};return i})(),t=(function(){"use strict";var i={unstuff:function(a,g,I,E,B,C,Q,l){var h=(1<<I)-1,u=0,p,y=0,f,c,w,d,S=a.length*4-Math.ceil(I*E/8);if(a[a.length-1]<<=8*S,B)for(p=0;p<E;p++)y===0&&(c=a[u++],y=32),y>=I?(f=c>>>y-I&h,y-=I):(w=I-y,f=(c&h)<<w&h,c=a[u++],y=32-w,f+=c>>>y),g[p]=B[f];else for(d=Math.ceil((l-C)/Q),p=0;p<E;p++)y===0&&(c=a[u++],y=32),y>=I?(f=c>>>y-I&h,y-=I):(w=I-y,f=(c&h)<<w&h,c=a[u++],y=32-w,f+=c>>>y),g[p]=f<d?C+f*Q:l},unstuffLUT:function(a,g,I,E,B,C){var Q=(1<<g)-1,l=0,h=0,u=0,p=0,y=0,f,c=[],w=a.length*4-Math.ceil(g*I/8);a[a.length-1]<<=8*w;var d=Math.ceil((C-E)/B);for(h=0;h<I;h++)p===0&&(f=a[l++],p=32),p>=g?(y=f>>>p-g&Q,p-=g):(u=g-p,y=(f&Q)<<u&Q,f=a[l++],p=32-u,y+=f>>>p),c[h]=y<d?E+y*B:C;return c.unshift(E),c},unstuff2:function(a,g,I,E,B,C,Q,l){var h=(1<<I)-1,u=0,p,y=0,f=0,c,w,d;if(B)for(p=0;p<E;p++)y===0&&(w=a[u++],y=32,f=0),y>=I?(c=w>>>f&h,y-=I,f+=I):(d=I-y,c=w>>>f&h,w=a[u++],y=32-d,c|=(w&(1<<d)-1)<<I-d,f=d),g[p]=B[c];else{var S=Math.ceil((l-C)/Q);for(p=0;p<E;p++)y===0&&(w=a[u++],y=32,f=0),y>=I?(c=w>>>f&h,y-=I,f+=I):(d=I-y,c=w>>>f&h,w=a[u++],y=32-d,c|=(w&(1<<d)-1)<<I-d,f=d),g[p]=c<S?C+c*Q:l}return g},unstuffLUT2:function(a,g,I,E,B,C){var Q=(1<<g)-1,l=0,h=0,u=0,p=0,y=0,f=0,c,w=[],d=Math.ceil((C-E)/B);for(h=0;h<I;h++)p===0&&(c=a[l++],p=32,f=0),p>=g?(y=c>>>f&Q,p-=g,f+=g):(u=g-p,y=c>>>f&Q,c=a[l++],p=32-u,y|=(c&(1<<u)-1)<<g-u,f=u),w[h]=y<d?E+y*B:C;return w.unshift(E),w},originalUnstuff:function(a,g,I,E){var B=(1<<I)-1,C=0,Q,l=0,h,u,p,y=a.length*4-Math.ceil(I*E/8);for(a[a.length-1]<<=8*y,Q=0;Q<E;Q++)l===0&&(u=a[C++],l=32),l>=I?(h=u>>>l-I&B,l-=I):(p=I-l,h=(u&B)<<p&B,u=a[C++],l=32-p,h+=u>>>l),g[Q]=h;return g},originalUnstuff2:function(a,g,I,E){var B=(1<<I)-1,C=0,Q,l=0,h=0,u,p,y;for(Q=0;Q<E;Q++)l===0&&(p=a[C++],l=32,h=0),l>=I?(u=p>>>h&B,l-=I,h+=I):(y=I-l,u=p>>>h&B,p=a[C++],l=32-y,u|=(p&(1<<y)-1)<<I-y,h=y),g[Q]=u;return g}},r={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(a){for(var g=65535,I=65535,E=a.length,B=Math.floor(E/2),C=0;B;){var Q=B>=359?359:B;B-=Q;do g+=a[C++]<<8,I+=g+=a[C++];while(--Q);g=(g&65535)+(g>>>16),I=(I&65535)+(I>>>16)}return E&1&&(I+=g+=a[C]<<8),g=(g&65535)+(g>>>16),I=(I&65535)+(I>>>16),(I<<16|g)>>>0},readHeaderInfo:function(a,g){var I=g.ptr,E=new Uint8Array(a,I,6),B={};if(B.fileIdentifierString=String.fromCharCode.apply(null,E),B.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+B.fileIdentifierString;I+=6;var C=new DataView(a,I,8),Q=C.getInt32(0,!0);B.fileVersion=Q,I+=4,Q>=3&&(B.checksum=C.getUint32(4,!0),I+=4),C=new DataView(a,I,12),B.height=C.getUint32(0,!0),B.width=C.getUint32(4,!0),I+=8,Q>=4?(B.numDims=C.getUint32(8,!0),I+=4):B.numDims=1,C=new DataView(a,I,40),B.numValidPixel=C.getUint32(0,!0),B.microBlockSize=C.getInt32(4,!0),B.blobSize=C.getInt32(8,!0),B.imageType=C.getInt32(12,!0),B.maxZError=C.getFloat64(16,!0),B.zMin=C.getFloat64(24,!0),B.zMax=C.getFloat64(32,!0),I+=40,g.headerInfo=B,g.ptr=I;var l,h;if(Q>=3&&(h=Q>=4?52:48,l=this.computeChecksumFletcher32(new Uint8Array(a,I-h,B.blobSize-14)),l!==B.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(a,g){var I=g.headerInfo,E=this.getDataTypeArray(I.imageType),B=I.numDims*this.getDataTypeSize(I.imageType),C=this.readSubArray(a,g.ptr,E,B),Q=this.readSubArray(a,g.ptr+B,E,B);g.ptr+=2*B;var l,h=!0;for(l=0;l<I.numDims;l++)if(C[l]!==Q[l]){h=!1;break}return I.minValues=C,I.maxValues=Q,h},readSubArray:function(a,g,I,E){var B;if(I===Uint8Array)B=new Uint8Array(a,g,E);else{var C=new ArrayBuffer(E),Q=new Uint8Array(C);Q.set(new Uint8Array(a,g,E)),B=new I(C)}return B},readMask:function(a,g){var I=g.ptr,E=g.headerInfo,B=E.width*E.height,C=E.numValidPixel,Q=new DataView(a,I,4),l={};if(l.numBytes=Q.getUint32(0,!0),I+=4,(C===0||B===C)&&l.numBytes!==0)throw"invalid mask";var h,u;if(C===0)h=new Uint8Array(Math.ceil(B/8)),l.bitset=h,u=new Uint8Array(B),g.pixels.resultMask=u,I+=l.numBytes;else if(l.numBytes>0){h=new Uint8Array(Math.ceil(B/8)),Q=new DataView(a,I,l.numBytes);var p=Q.getInt16(0,!0),y=2,f=0,c=0;do{if(p>0)for(;p--;)h[f++]=Q.getUint8(y++);else for(c=Q.getUint8(y++),p=-p;p--;)h[f++]=c;p=Q.getInt16(y,!0),y+=2}while(y<l.numBytes);if(p!==-32768||f<h.length)throw"Unexpected end of mask RLE encoding";u=new Uint8Array(B);var w=0,d=0;for(d=0;d<B;d++)d&7?(w=h[d>>3],w<<=d&7):w=h[d>>3],w&128&&(u[d]=1);g.pixels.resultMask=u,l.bitset=h,I+=l.numBytes}return g.ptr=I,g.mask=l,!0},readDataOneSweep:function(a,g,I,E){var B=g.ptr,C=g.headerInfo,Q=C.numDims,l=C.width*C.height,h=C.imageType,u=C.numValidPixel*r.getDataTypeSize(h)*Q,p,y=g.pixels.resultMask;if(I===Uint8Array)p=new Uint8Array(a,B,u);else{var f=new ArrayBuffer(u),c=new Uint8Array(f);c.set(new Uint8Array(a,B,u)),p=new I(f)}if(p.length===l*Q)E?g.pixels.resultPixels=r.swapDimensionOrder(p,l,Q,I,!0):g.pixels.resultPixels=p;else{g.pixels.resultPixels=new I(l*Q);var w=0,d=0,S=0,k=0;if(Q>1){if(E){for(d=0;d<l;d++)if(y[d])for(k=d,S=0;S<Q;S++,k+=l)g.pixels.resultPixels[k]=p[w++]}else for(d=0;d<l;d++)if(y[d])for(k=d*Q,S=0;S<Q;S++)g.pixels.resultPixels[k+S]=p[w++]}else for(d=0;d<l;d++)y[d]&&(g.pixels.resultPixels[d]=p[w++])}return B+=u,g.ptr=B,!0},readHuffmanTree:function(a,g){var I=this.HUFFMAN_LUT_BITS_MAX,E=new DataView(a,g.ptr,16);g.ptr+=16;var B=E.getInt32(0,!0);if(B<2)throw"unsupported Huffman version";var C=E.getInt32(4,!0),Q=E.getInt32(8,!0),l=E.getInt32(12,!0);if(Q>=l)return!1;var h=new Uint32Array(l-Q);r.decodeBits(a,g,h);var u=[],p,y,f,c;for(p=Q;p<l;p++)y=p-(p<C?0:C),u[y]={first:h[p-Q],second:null};var w=a.byteLength-g.ptr,d=Math.ceil(w/4),S=new ArrayBuffer(d*4),k=new Uint8Array(S);k.set(new Uint8Array(a,g.ptr,w));var D=new Uint32Array(S),G=0,x,v=0;for(x=D[0],p=Q;p<l;p++)y=p-(p<C?0:C),c=u[y].first,c>0&&(u[y].second=x<<G>>>32-c,32-G>=c?(G+=c,G===32&&(G=0,v++,x=D[v])):(G+=c-32,v++,x=D[v],u[y].second|=x>>>32-G));var F=0,N=0,b=new s;for(p=0;p<u.length;p++)u[p]!==void 0&&(F=Math.max(F,u[p].first));F>=I?N=I:N=F;var H=[],L,T,U,K,Z,z;for(p=Q;p<l;p++)if(y=p-(p<C?0:C),c=u[y].first,c>0)if(L=[c,y],c<=N)for(T=u[y].second<<N-c,U=1<<N-c,f=0;f<U;f++)H[T|f]=L;else for(T=u[y].second,z=b,K=c-1;K>=0;K--)Z=T>>>K&1,Z?(z.right||(z.right=new s),z=z.right):(z.left||(z.left=new s),z=z.left),K===0&&!z.val&&(z.val=L[1]);return{decodeLut:H,numBitsLUTQick:N,numBitsLUT:F,tree:b,stuffedData:D,srcPtr:v,bitPos:G}},readHuffman:function(a,g,I,E){var B=g.headerInfo,C=B.numDims,Q=g.headerInfo.height,l=g.headerInfo.width,h=l*Q,u=this.readHuffmanTree(a,g),p=u.decodeLut,y=u.tree,f=u.stuffedData,c=u.srcPtr,w=u.bitPos,d=u.numBitsLUTQick,S=u.numBitsLUT,k=g.headerInfo.imageType===0?128:0,D,G,x,v=g.pixels.resultMask,F,N,b,H,L,T,U,K=0;w>0&&(c++,w=0);var Z=f[c],z=g.encodeMode===1,M=new I(h*C),_=M,Y;if(C<2||z){for(Y=0;Y<C;Y++)if(C>1&&(_=new I(M.buffer,h*Y,h),K=0),g.headerInfo.numValidPixel===l*Q)for(T=0,H=0;H<Q;H++)for(L=0;L<l;L++,T++){if(G=0,F=Z<<w>>>32-d,N=F,32-w<d&&(F|=f[c+1]>>>64-w-d,N=F),p[N])G=p[N][1],w+=p[N][0];else for(F=Z<<w>>>32-S,N=F,32-w<S&&(F|=f[c+1]>>>64-w-S,N=F),D=y,U=0;U<S;U++)if(b=F>>>S-U-1&1,D=b?D.right:D.left,!(D.left||D.right)){G=D.val,w=w+U+1;break}w>=32&&(w-=32,c++,Z=f[c]),x=G-k,z?(L>0?x+=K:H>0?x+=_[T-l]:x+=K,x&=255,_[T]=x,K=x):_[T]=x}else for(T=0,H=0;H<Q;H++)for(L=0;L<l;L++,T++)if(v[T]){if(G=0,F=Z<<w>>>32-d,N=F,32-w<d&&(F|=f[c+1]>>>64-w-d,N=F),p[N])G=p[N][1],w+=p[N][0];else for(F=Z<<w>>>32-S,N=F,32-w<S&&(F|=f[c+1]>>>64-w-S,N=F),D=y,U=0;U<S;U++)if(b=F>>>S-U-1&1,D=b?D.right:D.left,!(D.left||D.right)){G=D.val,w=w+U+1;break}w>=32&&(w-=32,c++,Z=f[c]),x=G-k,z?(L>0&&v[T-1]?x+=K:H>0&&v[T-l]?x+=_[T-l]:x+=K,x&=255,_[T]=x,K=x):_[T]=x}}else for(T=0,H=0;H<Q;H++)for(L=0;L<l;L++)if(T=H*l+L,!v||v[T])for(Y=0;Y<C;Y++,T+=h){if(G=0,F=Z<<w>>>32-d,N=F,32-w<d&&(F|=f[c+1]>>>64-w-d,N=F),p[N])G=p[N][1],w+=p[N][0];else for(F=Z<<w>>>32-S,N=F,32-w<S&&(F|=f[c+1]>>>64-w-S,N=F),D=y,U=0;U<S;U++)if(b=F>>>S-U-1&1,D=b?D.right:D.left,!(D.left||D.right)){G=D.val,w=w+U+1;break}w>=32&&(w-=32,c++,Z=f[c]),x=G-k,_[T]=x}g.ptr=g.ptr+(c+1)*4+(w>0?4:0),g.pixels.resultPixels=M,C>1&&!E&&(g.pixels.resultPixels=r.swapDimensionOrder(M,h,C,I))},decodeBits:function(a,g,I,E,B){{var C=g.headerInfo,Q=C.fileVersion,l=0,h=a.byteLength-g.ptr>=5?5:a.byteLength-g.ptr,u=new DataView(a,g.ptr,h),p=u.getUint8(0);l++;var y=p>>6,f=y===0?4:3-y,c=(p&32)>0,w=p&31,d=0;if(f===1)d=u.getUint8(l),l++;else if(f===2)d=u.getUint16(l,!0),l+=2;else if(f===4)d=u.getUint32(l,!0),l+=4;else throw"Invalid valid pixel count type";var S=2*C.maxZError,k,D,G,x,v,F,N,b,H,L,T=C.numDims>1?C.maxValues[B]:C.zMax;if(c){for(g.counter.lut++,b=u.getUint8(l),H=w,l++,x=Math.ceil((b-1)*w/8),v=Math.ceil(x/4),D=new ArrayBuffer(v*4),G=new Uint8Array(D),g.ptr+=l,G.set(new Uint8Array(a,g.ptr,x)),N=new Uint32Array(D),g.ptr+=x,L=0;b-1>>>L;)L++;x=Math.ceil(d*L/8),v=Math.ceil(x/4),D=new ArrayBuffer(v*4),G=new Uint8Array(D),G.set(new Uint8Array(a,g.ptr,x)),k=new Uint32Array(D),g.ptr+=x,Q>=3?F=i.unstuffLUT2(N,w,b-1,E,S,T):F=i.unstuffLUT(N,w,b-1,E,S,T),Q>=3?i.unstuff2(k,I,L,d,F):i.unstuff(k,I,L,d,F)}else g.counter.bitstuffer++,L=w,g.ptr+=l,L>0&&(x=Math.ceil(d*L/8),v=Math.ceil(x/4),D=new ArrayBuffer(v*4),G=new Uint8Array(D),G.set(new Uint8Array(a,g.ptr,x)),k=new Uint32Array(D),g.ptr+=x,Q>=3?E==null?i.originalUnstuff2(k,I,L,d):i.unstuff2(k,I,L,d,!1,E,S,T):E==null?i.originalUnstuff(k,I,L,d):i.unstuff(k,I,L,d,!1,E,S,T))}},readTiles:function(a,g,I,E){var B=g.headerInfo,C=B.width,Q=B.height,l=C*Q,h=B.microBlockSize,u=B.imageType,p=r.getDataTypeSize(u),y=Math.ceil(C/h),f=Math.ceil(Q/h);g.pixels.numBlocksY=f,g.pixels.numBlocksX=y,g.pixels.ptr=0;var c=0,w=0,d=0,S=0,k=0,D=0,G=0,x=0,v=0,F=0,N=0,b=0,H=0,L=0,T=0,U=0,K,Z,z,M,_,Y,J=new I(h*h),q=Q%h||h,AA=C%h||h,tA,O,oA=B.numDims,gA,DA=g.pixels.resultMask,dA=g.pixels.resultPixels,_a=B.fileVersion,pr=_a>=5?14:15,_A,Nn=B.zMax,HA;for(d=0;d<f;d++)for(k=d!==f-1?h:q,S=0;S<y;S++)for(D=S!==y-1?h:AA,N=d*C*h+S*h,b=C-D,gA=0;gA<oA;gA++){if(oA>1?(HA=dA,N=d*C*h+S*h,dA=new I(g.pixels.resultPixels.buffer,l*gA*p,l),Nn=B.maxValues[gA]):HA=null,G=a.byteLength-g.ptr,K=new DataView(a,g.ptr,Math.min(10,G)),Z={},U=0,x=K.getUint8(0),U++,_A=B.fileVersion>=5?x&4:0,v=x>>6&255,F=x>>2&pr,F!==(S*h>>3&pr)||_A&&gA===0)throw"integrity issue";if(Y=x&3,Y>3)throw g.ptr+=U,"Invalid block encoding ("+Y+")";if(Y===2){if(_A)if(DA)for(c=0;c<k;c++)for(w=0;w<D;w++)DA[N]&&(dA[N]=HA[N]),N++;else for(c=0;c<k;c++)for(w=0;w<D;w++)dA[N]=HA[N],N++;g.counter.constant++,g.ptr+=U;continue}else if(Y===0){if(_A)throw"integrity issue";if(g.counter.uncompressed++,g.ptr+=U,H=k*D*p,L=a.byteLength-g.ptr,H=H<L?H:L,z=new ArrayBuffer(H%p===0?H:H+p-H%p),M=new Uint8Array(z),M.set(new Uint8Array(a,g.ptr,H)),_=new I(z),T=0,DA)for(c=0;c<k;c++){for(w=0;w<D;w++)DA[N]&&(dA[N]=_[T++]),N++;N+=b}else for(c=0;c<k;c++){for(w=0;w<D;w++)dA[N++]=_[T++];N+=b}g.ptr+=T*p}else if(tA=r.getDataTypeUsed(_A&&u<6?4:u,v),O=r.getOnePixel(Z,U,tA,K),U+=r.getDataTypeSize(tA),Y===3)if(g.ptr+=U,g.counter.constantoffset++,DA)for(c=0;c<k;c++){for(w=0;w<D;w++)DA[N]&&(dA[N]=_A?Math.min(Nn,HA[N]+O):O),N++;N+=b}else for(c=0;c<k;c++){for(w=0;w<D;w++)dA[N]=_A?Math.min(Nn,HA[N]+O):O,N++;N+=b}else if(g.ptr+=U,r.decodeBits(a,g,J,O,gA),U=0,_A)if(DA)for(c=0;c<k;c++){for(w=0;w<D;w++)DA[N]&&(dA[N]=J[U++]+HA[N]),N++;N+=b}else for(c=0;c<k;c++){for(w=0;w<D;w++)dA[N]=J[U++]+HA[N],N++;N+=b}else if(DA)for(c=0;c<k;c++){for(w=0;w<D;w++)DA[N]&&(dA[N]=J[U++]),N++;N+=b}else for(c=0;c<k;c++){for(w=0;w<D;w++)dA[N++]=J[U++];N+=b}}oA>1&&!E&&(g.pixels.resultPixels=r.swapDimensionOrder(g.pixels.resultPixels,l,oA,I))},formatFileInfo:function(a){return{fileIdentifierString:a.headerInfo.fileIdentifierString,fileVersion:a.headerInfo.fileVersion,imageType:a.headerInfo.imageType,height:a.headerInfo.height,width:a.headerInfo.width,numValidPixel:a.headerInfo.numValidPixel,microBlockSize:a.headerInfo.microBlockSize,blobSize:a.headerInfo.blobSize,maxZError:a.headerInfo.maxZError,pixelType:r.getPixelType(a.headerInfo.imageType),eofOffset:a.eofOffset,mask:a.mask?{numBytes:a.mask.numBytes}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,maxValue:a.headerInfo.zMax,minValue:a.headerInfo.zMin,noDataValue:a.noDataValue}}},constructConstantSurface:function(a,g){var I=a.headerInfo.zMax,E=a.headerInfo.zMin,B=a.headerInfo.maxValues,C=a.headerInfo.numDims,Q=a.headerInfo.height*a.headerInfo.width,l=0,h=0,u=0,p=a.pixels.resultMask,y=a.pixels.resultPixels;if(p)if(C>1){if(g)for(l=0;l<C;l++)for(u=l*Q,I=B[l],h=0;h<Q;h++)p[h]&&(y[u+h]=I);else for(h=0;h<Q;h++)if(p[h])for(u=h*C,l=0;l<C;l++)y[u+C]=B[l]}else for(h=0;h<Q;h++)p[h]&&(y[h]=I);else if(C>1&&E!==I)if(g)for(l=0;l<C;l++)for(u=l*Q,I=B[l],h=0;h<Q;h++)y[u+h]=I;else for(h=0;h<Q;h++)for(u=h*C,l=0;l<C;l++)y[u+l]=B[l];else for(h=0;h<Q*C;h++)y[h]=I},getDataTypeArray:function(a){var g;switch(a){case 0:g=Int8Array;break;case 1:g=Uint8Array;break;case 2:g=Int16Array;break;case 3:g=Uint16Array;break;case 4:g=Int32Array;break;case 5:g=Uint32Array;break;case 6:g=Float32Array;break;case 7:g=Float64Array;break;default:g=Float32Array}return g},getPixelType:function(a){var g;switch(a){case 0:g="S8";break;case 1:g="U8";break;case 2:g="S16";break;case 3:g="U16";break;case 4:g="S32";break;case 5:g="U32";break;case 6:g="F32";break;case 7:g="F64";break;default:g="F32"}return g},isValidPixelValue:function(a,g){if(g==null)return!1;var I;switch(a){case 0:I=g>=-128&&g<=127;break;case 1:I=g>=0&&g<=255;break;case 2:I=g>=-32768&&g<=32767;break;case 3:I=g>=0&&g<=65536;break;case 4:I=g>=-2147483648&&g<=2147483647;break;case 5:I=g>=0&&g<=4294967296;break;case 6:I=g>=-34027999387901484e22&&g<=34027999387901484e22;break;case 7:I=g>=-17976931348623157e292&&g<=17976931348623157e292;break;default:I=!1}return I},getDataTypeSize:function(a){var g=0;switch(a){case 0:case 1:g=1;break;case 2:case 3:g=2;break;case 4:case 5:case 6:g=4;break;case 7:g=8;break;default:g=a}return g},getDataTypeUsed:function(a,g){var I=a;switch(a){case 2:case 4:I=a-g;break;case 3:case 5:I=a-2*g;break;case 6:g===0?I=a:g===1?I=2:I=1;break;case 7:g===0?I=a:I=a-2*g+1;break;default:I=a;break}return I},getOnePixel:function(a,g,I,E){var B=0;switch(I){case 0:B=E.getInt8(g);break;case 1:B=E.getUint8(g);break;case 2:B=E.getInt16(g,!0);break;case 3:B=E.getUint16(g,!0);break;case 4:B=E.getInt32(g,!0);break;case 5:B=E.getUInt32(g,!0);break;case 6:B=E.getFloat32(g,!0);break;case 7:B=E.getFloat64(g,!0);break;default:throw"the decoder does not understand this pixel type"}return B},swapDimensionOrder:function(a,g,I,E,B){var C=0,Q=0,l=0,h=0,u=a;if(I>1)if(u=new E(g*I),B)for(C=0;C<g;C++)for(h=C,l=0;l<I;l++,h+=g)u[h]=a[Q++];else for(C=0;C<g;C++)for(h=C,l=0;l<I;l++,h+=g)u[Q++]=a[h];return u}},s=function(a,g,I){this.val=a,this.left=g,this.right=I},o={decode:function(a,g){g=g||{};var I=g.noDataValue,E=0,B={};if(B.ptr=g.inputOffset||0,B.pixels={},!!r.readHeaderInfo(a,B)){var C=B.headerInfo,Q=C.fileVersion,l=r.getDataTypeArray(C.imageType);if(Q>5)throw"unsupported lerc version 2."+Q;r.readMask(a,B),C.numValidPixel!==C.width*C.height&&!B.pixels.resultMask&&(B.pixels.resultMask=g.maskData);var h=C.width*C.height;B.pixels.resultPixels=new l(h*C.numDims),B.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u=!g.returnPixelInterleavedDims;if(C.numValidPixel!==0)if(C.zMax===C.zMin)r.constructConstantSurface(B,u);else if(Q>=4&&r.checkMinMaxRanges(a,B))r.constructConstantSurface(B,u);else{var p=new DataView(a,B.ptr,2),y=p.getUint8(0);if(B.ptr++,y)r.readDataOneSweep(a,B,l,u);else if(Q>1&&C.imageType<=1&&Math.abs(C.maxZError-.5)<1e-5){var f=p.getUint8(1);if(B.ptr++,B.encodeMode=f,f>2||Q<4&&f>1)throw"Invalid Huffman flag "+f;f?r.readHuffman(a,B,l,u):r.readTiles(a,B,l,u)}else r.readTiles(a,B,l,u)}B.eofOffset=B.ptr;var c;g.inputOffset?(c=B.headerInfo.blobSize+g.inputOffset-B.ptr,Math.abs(c)>=1&&(B.eofOffset=g.inputOffset+B.headerInfo.blobSize)):(c=B.headerInfo.blobSize-B.ptr,Math.abs(c)>=1&&(B.eofOffset=B.headerInfo.blobSize));var w={width:C.width,height:C.height,pixelData:B.pixels.resultPixels,minValue:C.zMin,maxValue:C.zMax,validPixelCount:C.numValidPixel,dimCount:C.numDims,dimStats:{minValues:C.minValues,maxValues:C.maxValues},maskData:B.pixels.resultMask};if(B.pixels.resultMask&&r.isValidPixelValue(C.imageType,I)){var d=B.pixels.resultMask;for(E=0;E<h;E++)d[E]||(w.pixelData[E]=I);w.noDataValue=I}return B.noDataValue=I,g.returnFileInfo&&(w.fileInfo=r.formatFileInfo(B)),w}},getBandCount:function(a){var g=0,I=0,E={};for(E.ptr=0,E.pixels={};I<a.byteLength-58;)r.readHeaderInfo(a,E),I+=E.headerInfo.blobSize,g++,E.ptr=I;return g}};return o})(),e=(function(){var i=new ArrayBuffer(4),r=new Uint8Array(i),s=new Uint32Array(i);return s[0]=1,r[0]===1})(),n={decode:function(i,r){if(!e)throw"Big endian system is not supported.";r=r||{};var s=r.inputOffset||0,o=new Uint8Array(i,s,10),a=String.fromCharCode.apply(null,o),g,I;if(a.trim()==="CntZImage")g=A,I=1;else if(a.substring(0,5)==="Lerc2")g=t,I=2;else throw"Unexpected file identifier string: "+a;for(var E=0,B=i.byteLength-10,C,Q=[],l,h,u={width:0,height:0,pixels:[],pixelType:r.pixelType,mask:null,statistics:[]},p=0;s<B;){var y=g.decode(i,{inputOffset:s,encodedMaskData:C,maskData:h,returnMask:E===0,returnEncodedMask:E===0,returnFileInfo:!0,returnPixelInterleavedDims:r.returnPixelInterleavedDims,pixelType:r.pixelType||null,noDataValue:r.noDataValue||null});s=y.fileInfo.eofOffset,h=y.maskData,E===0&&(C=y.encodedMaskData,u.width=y.width,u.height=y.height,u.dimCount=y.dimCount||1,u.pixelType=y.pixelType||y.fileInfo.pixelType,u.mask=h),I>1&&(h&&Q.push(h),y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&p++),E++,u.pixels.push(y.pixelData),u.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}var f,c,w;if(I>1&&p>1){for(w=u.width*u.height,u.bandMasks=Q,h=new Uint8Array(w),h.set(Q[0]),f=1;f<Q.length;f++)for(l=Q[f],c=0;c<w;c++)h[c]=h[c]&l[c];u.maskData=h}return u}};typeof define=="function"&&define.amd?define([],function(){return n}):typeof on<"u"&&on.exports?on.exports=n:this.Lerc=n})()});var ot,TA,Ui,bi,In,oI,II=CA(()=>{bi={env:{emscripten_notify_memory_growth:A=>{Ui=new Uint8Array(TA.exports.memory.buffer)}}},In=class{init(){return ot||(typeof fetch<"u"?ot=fetch(`data:application/wasm;base64,${oI}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,bi)).then(this._init):ot=WebAssembly.instantiate(Buffer.from(oI,"base64"),bi).then(this._init),ot)}_init(t){TA=t.instance,bi.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!TA)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=TA.exports.malloc(n);Ui.set(t,i),e=e||Number(TA.exports.ZSTD_findDecompressedSize(i,n));let r=TA.exports.malloc(e),s=TA.exports.ZSTD_decompress(r,e,i,n),o=Ui.slice(r,r+s);return TA.exports.free(i),TA.exports.free(r),o}},oI="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AikACDcACCAHIDo3AAAgEUEZSA0BIARBGGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgCkkNAAsMAQsCQAJAIAUoAswCIhEgBUHgAWogJUEHcUEMbGoiDygCACICaiIHIBxLDQAgCSAPKAIEIgogAmoiBmogG0sNACAGQSBqIBQgCWtNDQELIAUgDygCCDYCoAEgBSAPKQIANwOYASAJIBQgBUGYAWogBUHMAmogHCALIBcgIhAgIQYMAQsgAiAJaiEEIA8oAgghFSARKQAAITogCSARKQAINwAIIAkgOjcAAAJAIAJBEUkNACARKQAQITogCSARKQAYNwAYIAkgOjcAECACQRBrQRFIDQAgEUEQaiECIAlBIGohEgNAIAIpABAhOiASIAIpABg3AAggEiA6NwAAIAIpACAhOiASIAIpACg3ABggEiA6NwAQIAJBIGohAiASQSBqIhIgBEkNAAsLIAQgFWshAiAFIAc2AswCIAQgC2sgFUkEQCAVIAQgF2tLDQwgIiAiIAIgC2siD2oiByAKak8EQCAKRQ0CIAQgByAK/AoAAAwCC0EAIA9rIgIEQCAEIAcgAvwKAAALIAogD2ohCiAEIA9rIQQgCyECCyAVQRBPBEAgAikAACE6IAQgAikACDcACCAEIDo3AAAgCkERSA0BIAQgCmohByAEQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAELAkAgFUEHTQRAIAQgAi0AADoAACAEIAItAAE6AAEgBCACLQACOgACIAQgAi0AAzoAAyAEIAIgFUECdCIHQeAaaigCAGoiAigAADYABCACIAdBgBtqKAIAayECDAELIAQgAikAADcAAAsgCkEJSQ0AIAQgCmohDyAEQQhqIgcgAkEIaiICa0EPTARAA0AgByACKQAANwAAIAJBCGohAiAHQQhqIgcgD0kNAAwCCwALIAIpAAAhOiAHIAIpAAg3AAggByA6NwAAIApBGUgNACAEQRhqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIA9JDQALCyAGQYh/SwRAIAYhAwwLCyAFQeABaiAlQQdxQQxsaiICIA02AgggAiAMNgIEIAIgEDYCAAsgBiAJaiEJICVBAWohJSAQIC1qIAxqIS0MAQsLIAUoArABIAUoArQBRw0HIAUoAqwBQSBHDQcgDiAoayEQA0ACQCAOIBBMBEBBACECA0AgAkEDRg0CIDIgAkECdCIDaiADICZqKAIANgIAIAJBAWohAgwACwALIAVB4AFqIBBBB3FBDGxqIQoCfwJAIAgoAoTsAUECRgRAIAUoAswCIg8gCigCACIEaiIHIAgoAoDsASICSwRAIAIgD0cEQCACIA9rIgIgFCAJa0sNCyAJIA8gAhAfIAogBCACayIENgIAIAIgCWohCQsgBSAWNgLMAiAIQQA2AoTsAQJAAkACQCAEQYCABEoNACAJIAooAgQiDSAEaiIGaiAbSw0AIAZBIGogFCAJa00NAQsgBSAKKAIINgJQIAUgCikCADcDSCAJIBQgBUHIAGogBUHMAmogGSALIBcgIhAgIQYMAQsgBCAWaiEHIAQgCWohDCAKKAIIIQogFikAACE6IAkgFikACDcACCAJIDo3AAACQCAEQRFJDQAgHikAACE6IAkgHikACDcAGCAJIDo3ABAgBEEQa0ERSA0AIAlBIGohAiAeIQQDQCAEKQAQITogAiAEKQAYNwAIIAIgOjcAACAEKQAgITogAiAEKQAoNwAYIAIgOjcAECAEQSBqIQQgAkEgaiICIAxJDQALCyAMIAprIQIgBSAHNgLMAiAMIAtrIApJBEAgCiAMIBdrSw0PICIgIiACIAtrIgdqIgQgDWpPBEAgDUUNAiAMIAQgDfwKAAAMAgtBACAHayICBEAgDCAEIAL8CgAACyAHIA1qIQ0gDCAHayEMIAshAgsgCkEQTwRAIAIpAAAhOiAMIAIpAAg3AAggDCA6NwAAIA1BEUgNASAMIA1qIQcgDEEQaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwwBCwJAIApBB00EQCAMIAItAAA6AAAgDCACLQABOgABIAwgAi0AAjoAAiAMIAItAAM6AAMgDCACIApBAnQiBEHgGmooAgBqIgIoAAA2AAQgAiAEQYAbaigCAGshAgwBCyAMIAIpAAA3AAALIA1BCUkNACAMIA1qIQcgDEEIaiIEIAJBCGoiAmtBD0wEQANAIAQgAikAADcAACACQQhqIQIgBEEIaiIEIAdJDQAMAgsACyACKQAAITogBCACKQAINwAIIAQgOjcAACANQRlIDQAgDEEYaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwsgBkGJf08EQCAGIQMMDgsgGSEcIAYgCWoMAwsgB0EgayECAkACQCAHIBxLDQAgCSAKKAIEIhIgBGoiDGogAksNACAMQSBqIBQgCWtNDQELIAUgCigCCDYCYCAFIAopAgA3A1ggCSAUIAIgBUHYAGogBUHMAmogHCALIBcgIhAhIQwMAgsgBCAJaiEGIAooAgghCiAPKQAAITogCSAPKQAINwAIIAkgOjcAAAJAIARBEUkNACAPKQAQITogCSAPKQAYNwAYIAkgOjcAECAEQRBrQRFIDQAgD0EQaiECIAlBIGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgBkkNAAsLIAYgCmshAiAFIAc2AswCIAYgC2sgCkkEQCAKIAYgF2tLDQ0gIiAiIAIgC2siB2oiBCASak8EQCASRQ0DIAYgBCAS/AoAAAwDC0EAIAdrIgIEQCAGIAQgAvwKAAALIAcgEmohEiAGIAdrIQYgCyECCyAKQRBPBEAgAikAACE6IAYgAikACDcACCAGIDo3AAAgEkERSA0CIAYgEmohByAGQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAILAkAgCkEHTQRAIAYgAi0AADoAACAGIAItAAE6AAEgBiACLQACOgACIAYgAi0AAzoAAyAGIAIgCkECdCIEQeAaaigCAGoiAigAADYABCACIARBgBtqKAIAayECDAELIAYgAikAADcAAAsgEkEJSQ0BIAYgEmohByAGQQhqIgQgAkEIaiICa0EPTARAA0AgBCACKQAANwAAIAJBCGohAiAE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"});var CI={};yA(CI,{default:()=>an,zstd:()=>sI});var aI,sI,an,BI=CA(()=>{Li();aI=Va(gI(),1);II();LA();ve();sI=new In,an=class extends nA{decodeBlock(t){let n=this.parameters.LercParameters?.[dg.AddCompression],i=t;switch(n){case bt.None:break;case bt.Deflate:i=nn(new Uint8Array(i)).buffer;break;case bt.Zstandard:i=sI.decode(new Uint8Array(i)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${n}`)}return aI.default.decode(i,{returnPixelInterleavedDims:this.parameters.planarConfiguration===1}).pixels[0].buffer}}});var It,W,de,xA,Mi,sn,EI,QI=CA(()=>{Mi={env:{emscripten_notify_memory_growth:A=>{de=new Uint8Array(W.exports.memory.buffer),xA=new DataView(de.buffer)}}},sn=class{init(){return It||(typeof fetch<"u"?It=fetch(`data:application/wasm;base64,${EI}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Mi)).then(this._init):It=WebAssembly.instantiate(Buffer.from(EI,"base64"),Mi).then(this._init),It)}_init(t){W=t.instance,Mi.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!W)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,i=W.exports.malloc(n);if(de.set(t,i),e===0&&(e=Number(W.exports.ZSTD_findDecompressedSize(i,n))),e===-1){W.exports.free(i);let a=[];for(let B of this.decodeStreaming([t]))a.push(B);if(a.length===1)return a[0];let g=a.reduce((B,C)=>B+C.byteLength,0),I=new Uint8Array(g),E=0;for(let B of a)I.set(B,E),E+=B.byteLength;return I}let r=W.exports.malloc(e),s=W.exports.ZSTD_decompress(r,e,i,n),o=de.slice(r,r+s);return W.exports.free(i),W.exports.free(r),o}*decodeStreaming(t){if(!W)throw new Error("ZSTDDecoder: Await .init() before decoding.");let e=W.exports.ZSTD_DStreamInSize(),n=W.exports.malloc(e),i=W.exports.ZSTD_DStreamOutSize(),r=W.exports.malloc(i),s=W.exports.ZSTD_createDCtx(),o=4,a=4,g=W.exports.malloc(o+a*2),I=W.exports.malloc(o+a*2),E=0;for(let B of t){let C=W.exports.malloc(B.byteLength);for(de.set(B,C),xA.setInt32(g,C,!0),xA.setInt32(g+o,B.byteLength,!0),xA.setInt32(g+o+a,0,!0);xA.getUint32(g+o+a,!0)<xA.getUint32(g+o,!0);){xA.setInt32(I,r,!0),xA.setInt32(I+o,i,!0),xA.setInt32(I+o+a,0,!0),E=W.exports.ZSTD_decompressStream(s,I,g);let Q=xA.getUint32(I+o+a,!0);yield de.slice(r,r+Q)}W.exports.free(C)}if(W.exports.ZSTD_freeDCtx(s),W.exports.free(n),W.exports.free(r),W.exports.free(g),W.exports.free(I),E!==0)throw new Error("Incomplete stream, more data expected.")}},EI="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QQhyIQBBACEDA0AgACADTQ0DIANBQGshAwwACwALQWwhCiAOIA5B/ABqIA5B+ABqIAUgBhAGIgJBiH9LDQEgDigCeCIDIARLDQEgACAOIA4oAnwgByAIIAMgDRAlIAEgADYCACACIQoMAQtBbCEKCyAOQYABaiQAIAoLcAEEfyAAQgA3AgAgAgRAIAFBCmohBiABKAIEIQRBACECQQAhAQNAIAEgBHZFBEAgAiAGIAFBA3RqLQAAIgUgAiAFSxshAiABQQFqIQEgAyAFQRZLaiEDDAELCyAAIAI2AgQgACADQQggBGt0NgIACwuuAQEEfyABIAIoAgQiAyABKAIEaiIENgIEIAAgA0ECdEGwGWooAgAgASgCAEEAIARrdnE2AgACQCAEQSFPBEAgAUGwGjYCCAwBCyABKAIIIgMgASgCEE8EQCABEAwMAQsgAyABKAIMIgVGDQAgASADIAMgBWsgBEEDdiIGIAMgBmsgBUkbIgNrIgU2AgggASAEIANBA3RrNgIEIAEgBSgAADYCAAsgACACQQhqNgIEC40CAgN/AX4gACACaiEEAkACQCACQQhOBEAgACABayICQXlIDQELA0AgACAETw0CIAAgAS0AADoAACAAQQFqIQAgAUEBaiEBDAALAAsCQAJAIAJBb0sNACAAIARBIGsiAksNACABKQAAIQYgACABKQAINwAIIAAgBjcAACACIABrIgVBEU4EQCAAQRBqIQAgASEDA0AgAykAECEGIAAgAykAGDcACCAAIAY3AAAgAykAICEGIAAgAykAKDcAGCAAIAY3ABAgA0EgaiEDIABBIGoiACACSQ0ACwsgASAFaiEBDAELIAAhAgsDQCACIARPDQEgAiABLQAAOgAAIAJBAWohAiABQQFqIQEMAAsACwvfAQEGf0G6fyEKAkAgAigCBCIIIAIoAgAiCWoiDSABIABrSw0AQWwhCiAJIAQgAygCACILa0sNACAAIAlqIgQgAigCCCIMayECIAAgAUEgayIBIAsgCUEAEDMgAyAJIAtqNgIAAkACQCAEIAVrIAxPBEAgAiEFDAELIAwgBCAGa0sNAiAHIAcgAiAFayIDaiICIAhqTwRAIAhFDQIgBCACIAj8CgAADAILQQAgA2siAARAIAQgAiAA/AoAAAsgAyAIaiEIIAQgA2shBAsgBCABIAUgCEEBEDML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"});var cI={};yA(cI,{default:()=>Cn,zstd:()=>lI});var lI,Cn,hI=CA(()=>{QI();LA();lI=new sn,Cn=class extends nA{decodeBlock(t){return lI.decode(new Uint8Array(t)).buffer}}});var fI={};yA(fI,{default:()=>Bn});var Bn,dI=CA(()=>{LA();Bn=class extends nA{constructor(t){if(super(t),typeof createImageBitmap>"u")throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if(typeof document>"u"&&typeof OffscreenCanvas>"u")throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decodeBlock(t){let e=new Blob([t]),n=await createImageBitmap(e),i;typeof document<"u"?(i=document.createElement("canvas"),i.width=n.width,i.height=n.height):i=new OffscreenCanvas(n.width,n.height);let r=i.getContext("2d");r.drawImage(n,0,0);let s=r.getImageData(0,0,n.width,n.height).data,o=this.parameters.samplesPerPixel||4;if(o===4)return s.buffer;if(o===3){let a=new Uint8ClampedArray(n.width*n.height*3);for(let g=0,I=0;g<a.length;g+=3,I+=4)a[g]=s[I],a[g+1]=s[I+1],a[g+2]=s[I+2];return a.buffer}else throw new Error(`Unsupported SamplesPerPixel value: ${o}`)}}});function Za(A){let t=atob(A),e=t.length,n=new Uint8Array(e);for(let i=0;i<e;i++)n[i]=t.charCodeAt(i);return n}function mr(A){typeof A=="string"&&(A=new TextEncoder().encode(A));let t="",e=A.byteLength;for(let n=0;n<e;n++)t+=String.fromCharCode(A[n]);return btoa(t)}var eh=new Uint8Array(16),ja=class{constructor(A="",t=1e3){this.prefix=A,this.maxCaptureSize=t,this.prefix=A,this.originalConsole={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)},this.patchConsole()}originalConsole;logBuffer=[];patchConsole(){let A=t=>(...e)=>{let n=this.prefix?[this.prefix,...e]:e;this.originalConsole[t](...n),this.captureLog(t,e)};console.log=A("log"),console.info=A("info"),console.warn=A("warn"),console.error=A("error"),console.debug=A("debug")}captureLog(A,t){let e={level:A,timestamp:Date.now(),message:t.map(n=>{if(typeof n=="string")return n;try{return JSON.stringify(n)}catch{return String(n)}}).join(" ")};this.logBuffer.push(e),this.logBuffer.length>this.maxCaptureSize&&this.logBuffer.shift()}async postToServer(A,t){if(this.logBuffer.length>0){let n=[...this.logBuffer];this.logBuffer=[];try{if(!(await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.map(r=>({...r,source:t})))})).ok)throw new Error("Failed to post logs to server")}catch(i){console.warn("Could not post logs to server",i.message),this.logBuffer.unshift(...n)}}}},yr;function Wa(A=""){return yr=new ja(A),yr}var Ge=A=>{throw new Error("Not initialized yet")},Fn=typeof window>"u"&&typeof globalThis.WebSocketPair>"u",Gn=new Map,Rn=0;Fn&&(globalThis.syscall=async(A,...t)=>await new Promise((e,n)=>{Rn++,Gn.set(Rn,{resolve:e,reject:n}),Ge({type:"sys",id:Rn,name:A,args:t})}));function Dr(A,t,e){Fn&&(Ge=e,self.addEventListener("message",n=>{(async()=>{let i=n.data;switch(i.type){case"inv":{let r=A[i.name];if(!r)throw new Error(`Function not loaded: ${i.name}`);try{let s=await Promise.resolve(r(...i.args||[]));Ge({type:"invr",id:i.id,result:s})}catch(s){console.error("An exception was thrown as a result of invoking function",i.name,"error:",s.message),Ge({type:"invr",id:i.id,error:s.message})}}break;case"sysr":{let r=i.id,s=Gn.get(r);if(!s)throw Error("Invalid request id");Gn.delete(r),i.error?s.reject(new Error(i.error)):s.resolve(i.result)}break}})().catch(console.error)}),Ge({type:"manifest",manifest:t}),Wa(`[${t.name} plug]`))}async function za(A,t){if(typeof A!="string"){let e=new Uint8Array(await A.arrayBuffer()),n=e.length>0?mr(e):void 0;t={method:A.method,headers:Object.fromEntries(A.headers.entries()),base64Body:n},A=A.url}return syscall("sandboxFetch.fetch",A,t)}globalThis.nativeFetch=globalThis.fetch;function Xa(){globalThis.fetch=async(A,t)=>{let e=t?.body?mr(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await za(A,t&&{method:t.method,headers:t.headers,base64Body:e});return new Response(n.base64Body?Za(n.base64Body):null,{status:n.status,headers:n.headers})}}Fn&&Xa();var BA={};yA(BA,{alert:()=>Ms,configureVimMode:()=>$s,confirm:()=>Us,copyToClipboard:()=>Vs,deleteLine:()=>Zs,dispatch:()=>Ls,downloadFile:()=>ws,filterBox:()=>ms,flashNotification:()=>ys,fold:()=>_s,foldAll:()=>Ks,getCurrentEditor:()=>ns,getCurrentPage:()=>$a,getCurrentPageMeta:()=>As,getCurrentPath:()=>es,getCursor:()=>gs,getRecentlyOpenedPages:()=>ts,getSelection:()=>os,getText:()=>is,getUiOption:()=>Ts,goHistory:()=>us,hidePanel:()=>Ss,insertAtCursor:()=>xs,insertAtPos:()=>ks,invokeCommand:()=>as,isMobile:()=>eC,moveCursor:()=>Gs,moveCursorToLine:()=>Fs,moveLineDown:()=>zs,moveLineUp:()=>Ws,navigate:()=>Cs,newWindow:()=>ds,openCommandPalette:()=>Es,openPageNavigator:()=>Bs,openSearchPanel:()=>qs,openUrl:()=>fs,prompt:()=>bs,rebuildEditorState:()=>cs,redo:()=>Js,reloadConfigAndCommands:()=>hs,reloadPage:()=>Qs,reloadUI:()=>ls,replaceRange:()=>Rs,save:()=>ss,sendMessage:()=>AC,setSelection:()=>Is,setText:()=>rs,setUiOption:()=>Ys,showPanel:()=>Ds,showProgress:()=>Ns,toggleComment:()=>js,toggleFold:()=>vs,undo:()=>Os,unfold:()=>Hs,unfoldAll:()=>Ps,uploadFile:()=>ps,vimEx:()=>Xs});typeof globalThis.syscall>"u"&&(globalThis.syscall=()=>{throw new Error("Not implemented here")});function R(A,...t){return globalThis.syscall(A,...t)}function $a(){return R("editor.getCurrentPage")}function As(){return R("editor.getCurrentPageMeta")}function es(){return R("editor.getCurrentPath")}function ts(){return R("editor.getRecentlyOpenedPages")}function ns(){return R("editor.getCurrentEditor")}function is(){return R("editor.getText")}function rs(A,t=!1){return R("editor.setText",A,t)}function gs(){return R("editor.getCursor")}function os(){return R("editor.getSelection")}function Is(A,t){return R("editor.setSelection",A,t)}function as(A,t){return R("editor.invokeCommand",A,t)}function ss(){return R("editor.save")}function Cs(A,t=!1,e=!1){return R("editor.navigate",A,t,e)}function Bs(A="page"){return R("editor.openPageNavigator",A)}function Es(){return R("editor.openCommandPalette")}function Qs(){return R("editor.reloadPage")}function ls(){return R("editor.reloadUI")}function cs(){return R("editor.rebuildEditorState")}function hs(){return R("editor.reloadConfigAndCommands")}function fs(A,t=!1){return R("editor.openUrl",A,t)}function ds(){return R("editor.newWindow")}function us(A){return R("editor.goHistory",A)}function ws(A,t){return R("editor.downloadFile",A,t)}function ps(A,t){return R("editor.uploadFile",A,t)}function ys(A,t="info"){return R("editor.flashNotification",A,t)}function ms(A,t,e="",n=""){return R("editor.filterBox",A,t,e,n)}function Ds(A,t,e,n=""){return R("editor.showPanel",A,t,e,n)}function Ss(A){return R("editor.hidePanel",A)}function Ns(A,t){return R("editor.showProgress",A,t)}function ks(A,t){return R("editor.insertAtPos",A,t)}function Rs(A,t,e){return R("editor.replaceRange",A,t,e)}function Gs(A,t=!1){return R("editor.moveCursor",A,t)}function Fs(A,t=1,e=!1){return R("editor.moveCursorToLine",A,t,e)}function xs(A,t=!1,e=!1){return R("editor.insertAtCursor",A,t,e)}function Ls(A){return R("editor.dispatch",A)}function bs(A,t=""){return R("editor.prompt",A,t)}function Us(A){return R("editor.confirm",A)}function Ms(A){return R("editor.alert",A)}function Ts(A){return R("editor.getUiOption",A)}function Ys(A,t){return R("editor.setUiOption",A,t)}function _s(){return R("editor.fold")}function Hs(){return R("editor.unfold")}function vs(){return R("editor.toggleFold")}function Ks(){return R("editor.foldAll")}function Ps(){return R("editor.unfoldAll")}function Os(){return R("editor.undo")}function Js(){return R("editor.redo")}function qs(){return R("editor.openSearchPanel")}function Vs(A){return R("editor.copyToClipboard",A)}function Zs(){return R("editor.deleteLine")}function js(){return R("editor.toggleComment")}function Ws(){return R("editor.moveLineUp")}function zs(){return R("editor.moveLineDown")}function Xs(A){return R("editor.vimEx",A)}function $s(){return R("editor.configureVimMode")}function AC(A,t){return R("editor.sendMessage",A,t)}function eC(){return R("editor.isMobile")}var X={};yA(X,{deleteDocument:()=>lC,deleteFile:()=>pC,deletePage:()=>aC,fileExists:()=>yC,getDocumentMeta:()=>BC,getFileMeta:()=>uC,getPageMeta:()=>iC,listDocuments:()=>CC,listFiles:()=>cC,listPages:()=>nC,listPlugs:()=>sC,pageExists:()=>rC,readDocument:()=>EC,readFile:()=>hC,readFileWithMeta:()=>dC,readPage:()=>gC,readPageWithMeta:()=>oC,readRef:()=>fC,writeDocument:()=>QC,writeFile:()=>wC,writePage:()=>IC});function nC(){return R("space.listPages")}function iC(A){return R("space.getPageMeta",A)}function rC(A){return R("space.pageExists",A)}function gC(A){return R("space.readPage",A)}function oC(A){return R("space.readPageWithMeta",A)}function IC(A,t){return R("space.writePage",A,t)}function aC(A){return R("space.deletePage",A)}function sC(){return R("space.listPlugs")}function CC(){return R("space.listDocuments")}function BC(A){return R("space.getDocumentMeta",A)}function EC(A){return R("space.readDocument",A)}function QC(A,t){return R("space.writeDocument",A,t)}function lC(A){return R("space.deleteDocument",A)}function cC(){return R("space.listFiles")}function hC(A){return R("space.readFile",A)}function fC(A){return R("space.readRef",A)}function dC(A){return R("space.readFileWithMeta",A)}function uC(A){return R("space.getFileMeta",A)}function wC(A,t){return R("space.writeFile",A,t)}function pC(A){return R("space.deleteFile",A)}function yC(A){return R("space.fileExists",A)}var Fe={};yA(Fe,{refreshAll:()=>kC});function kC(){return R("codeWidget.refreshAll")}var Eh=new Uint8Array(16);var Sr="cimal";var Nr="https://copernicus-dem-30m.s3.amazonaws.com";var xe="Library/.cache/cimal",kr=`${xe}/v2/index.json`,Rr=250*1024*1024,Le=1,xn=`${xe}/hiking-map`,Gr=`${xn}/v${Le}/index.json`,Fr=150*1024*1024,be=4,Ln=`${xe}/packs`,xr=`${Ln}/v${be}/index.json`,Lr=100*1024*1024;var bn="classic",qA="standard",dt=["classic","hiking-map","vaporwave","lava","water-world","dracula","pastel","rainbow"],ut=["low","standard","high","ultra"],Ue={style:bn,hikingMapResolution:qA};function br(A){return A.join("|")}function Mr(A){return A.join(", ")}function Ur(){return`style: ${br(dt)} and optional hiking-map-resolution: ${br(ut)}`}function Tr(A){return/^https?:\/\//i.test(A)}function YC(A){let t=A.trim(),e=/^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/.exec(t);return e?e[1].trim():t}function Un(A){let t=A.trim();if(!t)throw new Error("A space path is required.");return YC(t.replace(/^space\s*:\s*/i,""))}function Mn(A){let t=A.trim();if(!t)throw new Error("A GPX URL or space path is required.");let e=Un(t.replace(/^url\s*:\s*/i,""));if(!Tr(e))return e;let n=new URL(e);if(n.hostname==="github.com"){let i=n.pathname.split("/").filter(Boolean),r=i.indexOf("blob");if(i.length>=5&&r===2){let s=i[0],o=i[1],a=i[3],g=i.slice(4).join("/");return`https://raw.githubusercontent.com/${s}/${o}/${a}/${g}`}}return n.toString()}function _C(A){let t=A.trim().toLowerCase();if(dt.includes(t))return t;throw new Error(`Unsupported cimal style "${A.trim()}". Supported styles: ${Mr(dt)}.`)}function Tn(A){let t=A.trim().toLowerCase();if(ut.includes(t))return t;throw new Error(`Unsupported hiking-map-resolution "${A.trim()}". Supported values: ${Mr(ut)}.`)}function Yr(A){let t=A.split(/\r?\n/).map(a=>a.trim()).filter(a=>a&&!a.startsWith("#"));if(t.length===0)throw new Error("Add a .cimal pack path or GPX source inside the widget body.");let[e,...n]=t;if(/^(?:style|hiking-map-resolution)\s*:/i.test(e))throw new Error(`Put the .cimal path or GPX source on the first line, then add ${Ur()} below it.`);let i=bn,r=qA,s=!1,o=!1;for(let a of n){let g=/^style\s*:\s*(.+)$/i.exec(a);if(g){if(s)throw new Error("Duplicate style option in cimal widget body.");i=_C(g[1]),s=!0;continue}let I=/^hiking-map-resolution\s*:\s*(.+)$/i.exec(a);if(I){if(o)throw new Error("Duplicate hiking-map-resolution option in cimal widget body.");r=Tn(I[1]),o=!0;continue}throw new Error(`Unsupported cimal widget option "${a}". Supported options: ${Ur()}.`)}if(o&&i!=="hiking-map")throw new Error('Hiking-map resolution can only be used with "style: hiking-map".');return{source:e,style:i,hikingMapResolution:r,hasExplicitHikingMapResolution:o}}function wt(A){let t=Un(A);if(Tr(t)||/\.gpx$/i.test(t))throw new Error("Cimal widgets now accept only .cimal pack paths. Build a pack from the GPX first.");return t.endsWith(".cimal")?t:`${t}.cimal`}function _r(A){let t=Un(A.source);if(/\.cimal$/i.test(t)){let e=wt(t);if(A.hasExplicitHikingMapResolution)throw new Error('Hiking-map resolution is baked into existing .cimal packs. Rebuild the pack from the GPX at the desired resolution instead of setting "hiking-map-resolution" on a .cimal widget.');return{kind:"pack",packPath:e}}return{kind:"gpx",gpxSource:Mn(t)}}function Hr(A){let t=A.split(",",2);if(t.length!==2)throw new Error("Invalid baked hiking-map texture data URL.");let[,e]=t;if(typeof atob!="function")throw new Error("Base64 decoding is unavailable in this runtime.");let n=atob(e),i=new Uint8Array(n.length);for(let r=0;r<n.length;r+=1)i[r]=n.charCodeAt(r);return i}function pt(A,t){if(typeof btoa!="function")throw new Error("Base64 encoding is unavailable in this runtime.");let e="";for(let n=0;n<A.length;n+=1)e+=String.fromCharCode(A[n]);return`data:${t};base64,${btoa(e)}`}function Yn(A){return/^data:([^;,]+)[;,]/i.exec(A)?.[1]??"application/octet-stream"}var Or=new TextEncoder,vr=new TextDecoder,Jr="CMLP",Me=12,_n=65535,Kr=3,HC=2;function yt(A){return A+3&-4}function vC(A,t){let e=A.bakedHikingMap?{width:A.bakedHikingMap.width,height:A.bakedHikingMap.height,mimeType:A.bakedHikingMap.mimeType,resolution:A.bakedHikingMap.resolution,byteLength:t}:void 0,n={version:3,title:A.title,sourceUrl:A.sourceUrl,bounds:A.bounds,center:A.center,metersPerDegree:A.metersPerDegree,grid:{width:A.grid.width,height:A.grid.height,minElevation:A.grid.minElevation,maxElevation:A.grid.maxElevation},stats:A.stats,trackPointCount:A.track.length,bakedHikingMap:e};return Or.encode(JSON.stringify(n))}function KC(A){let{elevations:t,minElevation:e,maxElevation:n}=A.grid,i=n-e,r=new Uint16Array(t.length);if(i<=0)return r;for(let s=0;s<t.length;s+=1){let o=(t[s]-e)/i;r[s]=Math.max(0,Math.min(_n,Math.round(o*_n)))}return r}function PC(A){let t=new Float32Array(A.length*3);for(let e=0;e<A.length;e+=1){let n=e*3;t[n]=A[e].x,t[n+1]=A[e].y,t[n+2]=A[e].z}return t}function Pr(A){return new Uint8Array(A.buffer.slice(A.byteOffset,A.byteOffset+A.byteLength))}function mt(A){let t=A.bakedHikingMap?Hr(A.bakedHikingMap.dataUrl):new Uint8Array(0),e=vC(A,t.byteLength),n=yt(e.length),i=Pr(KC(A)),r=yt(i.length),s=Pr(PC(A.track)),o=new Uint8Array(Me+n+r+s.length+t.length);o.set(Or.encode(Jr),0);let a=new DataView(o.buffer);a.setUint16(4,3,!0),a.setUint16(6,0,!0),a.setUint32(8,e.length,!0);let g=Me;return o.set(e,g),g+=n,o.set(i,g),g+=r,o.set(s,g),g+=s.length,t.length>0&&o.set(t,g),o}function vn(A){if(A.byteLength<Me)throw new Error("Invalid .cimal pack: file is too small.");if(vr.decode(A.slice(0,4))!==Jr)throw new Error("Invalid .cimal pack: wrong file signature.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==HC&&n!==Kr&&n!==3)throw new Error(`Unsupported .cimal pack version ${n}. Rebuild the pack.`);let i=e.getUint32(8,!0),r=Me,s=r+i;if(s>A.byteLength)throw new Error("Invalid .cimal pack: header length is out of bounds.");let o=JSON.parse(vr.decode(A.slice(r,s))),a=o.grid.width*o.grid.height,g=a*Uint16Array.BYTES_PER_ELEMENT,I=Me+yt(i);if(I+g>A.byteLength)throw new Error("Invalid .cimal pack: terrain section is truncated.");let B=o.trackPointCount*3*Float32Array.BYTES_PER_ELEMENT,C=I+yt(g),Q=C+B;if(Q>A.byteLength)throw new Error("Invalid .cimal pack: track section is truncated.");let l;if(n>=Kr&&o.bakedHikingMap){let c=Q,w=c+o.bakedHikingMap.byteLength;if(w>A.byteLength)throw new Error("Invalid .cimal pack: imagery section is truncated.");let d=A.slice(c,w);l={width:o.bakedHikingMap.width,height:o.bakedHikingMap.height,mimeType:o.bakedHikingMap.mimeType,resolution:o.bakedHikingMap.resolution,dataUrl:pt(d,o.bakedHikingMap.mimeType)}}let h=new Uint16Array(A.buffer,A.byteOffset+I,a),u=new Float32Array(A.buffer,A.byteOffset+C,o.trackPointCount*3),p=o.grid.maxElevation-o.grid.minElevation,y=Array.from(h,c=>p<=0?o.grid.minElevation:o.grid.minElevation+c/_n*p),f=[];for(let c=0;c<o.trackPointCount;c+=1){let w=c*3,d=u[w+1];f.push({x:u[w],y:d,z:u[w+2],elevation:d})}return{title:o.title,sourceUrl:o.sourceUrl,bounds:o.bounds,center:o.center,metersPerDegree:o.metersPerDegree,grid:{width:o.grid.width,height:o.grid.height,elevations:y,minElevation:o.grid.minElevation,maxElevation:o.grid.maxElevation},track:f,bakedHikingMap:l,stats:o.stats}}function qr(A){return A instanceof Error&&(A.message.startsWith("Unsupported .cimal pack version ")||A.message.startsWith("Invalid .cimal pack:"))}var Vr="Cannot convert undefined or null to object";function j(A){return(t,...e)=>OC(A,t,e)}function ie(A,t){return j(Dt(A,t).get)}var{apply:OC,construct:Yh,defineProperty:_h,get:Hh,getOwnPropertyDescriptor:Dt,getPrototypeOf:St,has:vh,ownKeys:jr,set:Kh,setPrototypeOf:Ph}=Reflect;var{EPSILON:Wr,MAX_SAFE_INTEGER:Oh,isFinite:JC,isNaN:qC}=Number,{iterator:re,species:Jh,toStringTag:VC,for:qh}=Symbol,Nt=Object,{create:kt,defineProperty:zr,freeze:Vh,is:Zh}=Nt,Kn=Nt.prototype,jh=Kn.__lookupGetter__?j(Kn.__lookupGetter__):(A,t)=>{if(A==null)throw zC(Vr);let e=Nt(A);do{let n=Dt(e,t);if(n!==void 0)return ZC(n,"get")?n.get:void 0}while((e=St(e))!==null)},ZC=Nt.hasOwn||j(Kn.hasOwnProperty),Xr=Array,Wh=Xr.isArray,Rt=Xr.prototype,zh=j(Rt.join),Xh=j(Rt.push),$h=j(Rt.toLocaleString),Pn=Rt[re],$r=j(Pn),{abs:jC,trunc:Af}=Math,Gt=ArrayBuffer,ef=Gt.isView,Ag=Gt.prototype,tf=j(Ag.slice),nf=ie(Ag,"byteLength"),Zr=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,rf=Zr&&ie(Zr.prototype,"byteLength"),eg=St(Uint8Array),gf=eg.from,IA=eg.prototype,of=IA[re],If=j(IA.keys),af=j(IA.values),sf=j(IA.entries),Cf=j(IA.set),Bf=j(IA.reverse),Ef=j(IA.fill),Qf=j(IA.copyWithin),lf=j(IA.sort),cf=j(IA.slice),hf=j(IA.subarray),ff=ie(IA,"buffer"),df=ie(IA,"byteOffset"),uf=ie(IA,"length"),wf=ie(IA,VC),tg=Uint8Array,On=Uint16Array;var Ft=Uint32Array,ng=Float32Array,ge=St([][re]()),Jn=j(ge.next),ig=j((function*(){})().next),rg=St(ge),gg=DataView.prototype,og=j(gg.getUint16),WC=j(gg.setUint16),zC=TypeError;var XC=WeakSet,Ig=XC.prototype,pf=j(Ig.add),yf=j(Ig.has),xt=WeakMap,qn=xt.prototype,Vn=j(qn.get),mf=j(qn.has),ag=j(qn.set);var sg=new xt,$C=kt(null,{next:{value:function(){let t=Vn(sg,this);return Jn(t)}},[re]:{value:function(){return this}}});function Cg(A){if(A[re]===Pn&&ge.next===Jn)return A;let t=kt($C);return ag(sg,t,$r(A)),t}var AB=new xt,eB=kt(rg,{next:{value:function(){let t=Vn(AB,this);return ig(t)},writable:!0,configurable:!0}});for(let A of jr(ge))A!=="next"&&zr(eB,A,Dt(ge,A));var tB=1/Wr;var nB=6103515625e-14;var Bg=.0009765625,Rf=Bg*nB,Gf=Bg*tB;var Eg=new Gt(4),iB=new ng(Eg),rB=new Ft(Eg),SA=new On(512),NA=new tg(512);for(let A=0;A<256;++A){let t=A-127;t<-24?(SA[A]=0,SA[A|256]=32768,NA[A]=24,NA[A|256]=24):t<-14?(SA[A]=1024>>-t-14,SA[A|256]=1024>>-t-14|32768,NA[A]=-t-1,NA[A|256]=-t-1):t<=15?(SA[A]=t+15<<10,SA[A|256]=t+15<<10|32768,NA[A]=13,NA[A|256]=13):t<128?(SA[A]=31744,SA[A|256]=64512,NA[A]=24,NA[A|256]=24):(SA[A]=31744,SA[A|256]=64512,NA[A]=13,NA[A|256]=13)}var Zn=new Ft(2048);for(let A=1;A<1024;++A){let t=A<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Zn[A]=t|e}for(let A=1024;A<2048;++A)Zn[A]=939524096+(A-1024<<13);var oe=new Ft(64);for(let A=1;A<31;++A)oe[A]=A<<23;oe[31]=1199570944;oe[32]=2147483648;for(let A=33;A<63;++A)oe[A]=2147483648+(A-32<<23);oe[63]=3347054592;var Qg=new On(64);for(let A=1;A<64;++A)A!==32&&(Qg[A]=1024);function lg(A){let t=A>>10;return rB[0]=Zn[Qg[t]+(A&1023)]+oe[t],iB[0]}function Te(A,t,...e){return lg(og(A,t,...Cg(e)))}function Ye(A,t,e){let n=e&&e.debug||!1;n&&console.log("[xml-utils] getting "+t+" in "+A);let i=typeof A=="object"?A.outer:A,r=i.slice(0,i.indexOf(">")+1),s=['"',"'"];for(let o=0;o<s.length;o++){let a=s[o],g=t+"\\="+a+"([^"+a+"]*)"+a;n&&console.log("[xml-utils] pattern:",g);let E=new RegExp(g).exec(r);if(n&&console.log("[xml-utils] match:",E),E)return E[1]}}function jn(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index:-1}function _e(A,t,e){let i=new RegExp(t).exec(A.slice(e));return i?e+i.index+i[0].length-1:-1}function Lt(A,t){let e=new RegExp(t,"g"),n=A.match(e);return n?n.length:0}function Wn(A,t,e){let n=e&&e.debug||!1,i=!(e&&typeof e.nested===!1),r=e&&e.startIndex||0;n&&console.log("[xml-utils] starting findTagByName with",t," and ",e);let s=jn(A,`<${t}[ 
>/]`,r);if(n&&console.log("[xml-utils] start:",s),s===-1)return;let o=A.slice(s+t.length),a=_e(o,"^[^<]*[ /]>",0),g=a!==-1&&o[a-1]==="/";if(n&&console.log("[xml-utils] selfClosing:",g),g===!1)if(i){let C=0,Q=1,l=0;for(;(a=_e(o,"[ /]"+t+">",C))!==-1;){let h=o.substring(C,a+1);if(Q+=Lt(h,"<"+t+`[ 
	>]`),l+=Lt(h,"</"+t+">"),l>=Q)break;C=a}}else a=_e(o,"[ /]"+t+">",0);let I=s+t.length+a+1;if(n&&console.log("[xml-utils] end:",I),I===-1)return;let E=A.slice(s,I),B;return g?B=null:B=E.slice(E.indexOf(">")+1,E.lastIndexOf("<")),{inner:B,outer:E,start:s,end:I}}function zn(A,t,e){let n=[],i=e&&e.debug||!1,r=e&&typeof e.nested=="boolean"?e.nested:!0,s=e&&e.startIndex||0,o;for(;o=Wn(A,t,{debug:i,startIndex:s});)r?s=o.start+1+t.length:s=o.end,n.push(o);return i&&console.log("findTagsByName found",n.length,"tags"),n}ve();function ug(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let s=0,o=0;s<A.length;++s,o+=3)r=256-A[s]/t*256,i[o]=r,i[o+1]=r,i[o+2]=r;return i}function wg(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r;for(let s=0,o=0;s<A.length;++s,o+=3)r=A[s]/t*256,i[o]=r,i[o+1]=r,i[o+2]=r;return i}function pg(A,t){let{width:e,height:n}=A,i=new Uint8Array(e*n*3),r=t.length/3,s=t.length/3*2;for(let o=0,a=0;o<A.length;++o,a+=3){let g=A[o];i[a]=t[g]/65536*256,i[a+1]=t[g+r]/65536*256,i[a+2]=t[g+s]/65536*256}return i}function yg(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=4,r+=3){let s=A[i],o=A[i+1],a=A[i+2],g=A[i+3];n[r]=255*((255-s)/256)*((255-g)/256),n[r+1]=255*((255-o)/256)*((255-g)/256),n[r+2]=255*((255-a)/256)*((255-g)/256)}return n}function mg(A){let{width:t,height:e}=A,n=new Uint8ClampedArray(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let s=A[i],o=A[i+1],a=A[i+2];n[r]=s+1.402*(a-128),n[r+1]=s-.34414*(o-128)-.71414*(a-128),n[r+2]=s+1.772*(o-128)}return n}var aB=.95047,sB=1,CB=1.08883;function Dg(A){let{width:t,height:e}=A,n=new Uint8Array(t*e*3);for(let i=0,r=0;i<A.length;i+=3,r+=3){let s=A[i+0],o=A[i+1]<<24>>24,a=A[i+2]<<24>>24,g=(s+16)/116,I=o/500+g,E=g-a/200,B,C,Q;I=aB*(I*I*I>.008856?I*I*I:(I-16/116)/7.787),g=sB*(g*g*g>.008856?g*g*g:(g-16/116)/7.787),E=CB*(E*E*E>.008856?E*E*E:(E-16/116)/7.787),B=I*3.2406+g*-1.5372+E*-.4986,C=I*-.9689+g*1.8758+E*.0415,Q=I*.0557+g*-.204+E*1.057,B=B>.0031308?1.055*B**(1/2.4)-.055:12.92*B,C=C>.0031308?1.055*C**(1/2.4)-.055:12.92*C,Q=Q>.0031308?1.055*Q**(1/2.4)-.055:12.92*Q,n[r]=Math.max(0,Math.min(1,B))*255,n[r+1]=Math.max(0,Math.min(1,C))*255,n[r+2]=Math.max(0,Math.min(1,Q))*255}return n}var at=new Map;async function En(A){let t=!A.hasTag("StripOffsets");return{tileWidth:t?await A.loadValue("TileWidth"):await A.loadValue("ImageWidth"),tileHeight:t?await A.loadValue("TileLength"):await A.loadValue("RowsPerStrip")||await A.loadValue("ImageLength"),planarConfiguration:await A.loadValue("PlanarConfiguration"),bitsPerSample:await A.loadValue("BitsPerSample"),predictor:await A.loadValue("Predictor")||1}}function XQ(A,t,e=En,n=!0){Array.isArray(A)||(A=[A]),A.forEach(i=>{at.set(i,{importFn:t,decoderParameterFn:e,preferWorker:n})})}async function uI(A,t){if(!at.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{decoderParameterFn:e}=at.get(A);return e(t)}async function wI(A,t){if(!at.has(A))throw new Error(`Unknown compression method identifier: ${A}`);let{importFn:e}=at.get(A),n=await e();return new n(t)}var $Q=[{cases:[void 0,1],importFn:()=>Promise.resolve().then(()=>(Rg(),kg)).then(A=>A.default),preferWorker:!1},{cases:5,importFn:()=>Promise.resolve().then(()=>(xg(),Fg)).then(A=>A.default)},{cases:6,importFn:()=>{throw new Error("old style JPEG compression is not supported.")}},{cases:7,importFn:()=>Promise.resolve().then(()=>(Ug(),bg)).then(A=>A.default),decoderParameterFn:async A=>({...await En(A),JPEGTables:await A.loadValue("JPEGTables")})},{cases:[8,32946],importFn:()=>Promise.resolve().then(()=>(nI(),tI)).then(A=>A.default)},{cases:32773,importFn:()=>Promise.resolve().then(()=>(rI(),iI)).then(A=>A.default)},{cases:34887,importFn:()=>Promise.resolve().then(()=>(BI(),CI)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default),decoderParameterFn:async A=>({...await En(A),LercParameters:await A.loadValue("LercParameters")})},{cases:5e4,importFn:()=>Promise.resolve().then(()=>(hI(),cI)).then(async A=>(await A.zstd.init(),A)).then(A=>A.default)},{cases:50001,importFn:()=>Promise.resolve().then(()=>(dI(),fI)).then(A=>A.default),decoderParameterFn:async A=>({...await En(A),samplesPerPixel:Number(await A.loadValue("SamplesPerPixel"))||4}),preferWorker:!1}];for(let A of $Q){let{cases:t,importFn:e,decoderParameterFn:n,preferWorker:i}=A;XQ(t,e,n,i)}function Qn(A,t,e,n=1){return new(Object.getPrototypeOf(A)).constructor(t*e*n)}function Al(A,t,e,n,i){let r=t/n,s=e/i;return A.map(o=>{let a=Qn(o,n,i);for(let g=0;g<i;++g){let I=Math.min(Math.round(s*g),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(r*E),t-1),C=o[I*t+B];a[g*n+E]=C}}return a})}function ue(A,t,e){return(1-e)*A+e*t}function el(A,t,e,n,i){let r=t/n,s=e/i;return A.map(o=>{let a=Qn(o,n,i);for(let g=0;g<i;++g){let I=s*g,E=Math.floor(I),B=Math.min(Math.ceil(I),e-1);for(let C=0;C<n;++C){let Q=r*C,l=Q%1,h=Math.floor(Q),u=Math.min(Math.ceil(Q),t-1),p=o[E*t+h],y=o[E*t+u],f=o[B*t+h],c=o[B*t+u],w=ue(ue(p,y,l),ue(f,c,l),I%1);a[g*n+C]=w}}return a})}function pI(A,t,e,n,i,r="nearest"){switch(r.toLowerCase()){case"nearest":return Al(A,t,e,n,i);case"bilinear":case"linear":return el(A,t,e,n,i);default:throw new Error(`Unsupported resampling method: '${r}'`)}}function tl(A,t,e,n,i,r){let s=t/n,o=e/i,a=Qn(A,n,i,r);for(let g=0;g<i;++g){let I=Math.min(Math.round(o*g),e-1);for(let E=0;E<n;++E){let B=Math.min(Math.round(s*E),t-1);for(let C=0;C<r;++C){let Q=A[I*t*r+B*r+C];a[g*n*r+E*r+C]=Q}}}return a}function nl(A,t,e,n,i,r){let s=t/n,o=e/i,a=Qn(A,n,i,r);for(let g=0;g<i;++g){let I=o*g,E=Math.floor(I),B=Math.min(Math.ceil(I),e-1);for(let C=0;C<n;++C){let Q=s*C,l=Q%1,h=Math.floor(Q),u=Math.min(Math.ceil(Q),t-1);for(let p=0;p<r;++p){let y=A[E*t*r+h*r+p],f=A[E*t*r+u*r+p],c=A[B*t*r+h*r+p],w=A[B*t*r+u*r+p],d=ue(ue(y,f,l),ue(c,w,l),I%1);a[g*n*r+C*r+p]=d}}}return a}function yI(A,t,e,n,i,r,s="nearest"){switch(s.toLowerCase()){case"nearest":return tl(A,t,e,n,i,r);case"bilinear":case"linear":return nl(A,t,e,n,i,r);default:throw new Error(`Unsupported resampling method: '${s}'`)}}function il(A,t,e){let n=0;for(let i=t;i<e;++i)n+=A[i];return n}function Ti(A,t,e){let n;switch(A){case 1:t<=8?n=Uint8Array:t<=16?n=Uint16Array:t<=32&&(n=Uint32Array);break;case 2:t===8?n=Int8Array:t===16?n=Int16Array:t===32&&(n=Int32Array);break;case 3:switch(t){case 16:case 32:n=Float32Array;break;case 64:n=Float64Array;break;default:break}break;default:break}if(n){if(typeof e=="number")return new n(e);if(e instanceof ArrayBuffer)return new n(e)}throw Error("Unsupported data format/bitsPerSample")}function rl(A,t){return(A===1||A===2)&&t<=32&&t%8===0?!1:!(A===3&&(t===16||t===32||t===64))}function gl(A,t,e,n,i,r,s){let o=new DataView(A),a=e===2?s*r:s*r*n,g=e===2?1:n,I=Ti(t,i,a),E=parseInt("1".repeat(i),2);if(t===1){let B;e===1?B=n*i:B=i;let C=r*B;(C&7)!==0&&(C=C+7&-8);for(let Q=0;Q<s;++Q){let l=Q*C;for(let h=0;h<r;++h){let u=l+h*g*i;for(let p=0;p<g;++p){let y=u+p*i,f=(Q*r+h)*g+p,c=Math.floor(y/8),w=y%8;if(w+i<=8)I[f]=o.getUint8(c)>>8-i-w&E;else if(w+i<=16)I[f]=o.getUint16(c)>>16-i-w&E;else if(w+i<=24){let d=o.getUint16(c)<<8|o.getUint8(c+2);I[f]=d>>24-i-w&E}else I[f]=o.getUint32(c)>>32-i-w&E}}}}return I.buffer}var Yi=class{constructor(t,e,n,i){this.fileDirectory=t,this.littleEndian=e,this.tiles=n?[]:null,this.isTiled=!t.hasTag("StripOffsets");let r=t.getValue("PlanarConfiguration")??1;if(r!==1&&r!==2)throw new Error("Invalid planar configuration.");this.planarConfiguration=r,this.source=i}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.fileDirectory.parseGeoKeyDirectory()}getWidth(){return this.fileDirectory.getValue("ImageWidth")||0}getHeight(){return this.fileDirectory.getValue("ImageLength")||0}getSamplesPerPixel(){return this.fileDirectory.getValue("SamplesPerPixel")??1}getTileWidth(){return this.isTiled?this.fileDirectory.getValue("TileWidth")||0:this.getWidth()}getTileHeight(){if(this.isTiled)return this.fileDirectory.getValue("TileLength")||0;let t=this.fileDirectory.hasTag("RowsPerStrip")&&this.fileDirectory.getValue("RowsPerStrip");return t?Math.min(t,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(t){return this.isTiled||(t+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-t*this.getTileHeight()}getBytesPerPixel(){let t=0,e=this.fileDirectory.getValue("BitsPerSample")||[];for(let n=0;n<e.length;++n)t+=this.getSampleByteSize(n);return t}getSampleByteSize(t){let e=this.fileDirectory.getValue("BitsPerSample")||[];if(t>=e.length)throw new RangeError(`Sample index ${t} is out of range.`);return Math.ceil(e[t]/8)}getReaderForSample(t){let e=this.fileDirectory.getValue("SampleFormat"),n=e?e[t]:1,i=(this.fileDirectory.getValue("BitsPerSample")||[])[t];switch(n){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(r,s){return Te(this,r,s)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(t=0){let e=this.fileDirectory.getValue("SampleFormat");return e?e[t]:1}getBitsPerSample(t=0){let e=this.fileDirectory.getValue("BitsPerSample");return e?e[t]:0}getArrayForSample(t,e){let n=this.getSampleFormat(t),i=this.getBitsPerSample(t);return Ti(n,i,e)}async getTileOrStrip(t,e,n,i,r){let s=Math.ceil(this.getWidth()/this.getTileWidth()),o=Math.ceil(this.getHeight()/this.getTileHeight()),a,{tiles:g}=this;if(this.planarConfiguration===1?a=e*s+t:this.planarConfiguration===2&&(a=n*s*o+e*s+t),a===void 0)throw new Error("Could not determine tile or strip index.");let I,E;if(this.isTiled?(I=Number(await this.fileDirectory.loadValueIndexed("TileOffsets",a)),E=Number(await this.fileDirectory.loadValueIndexed("TileByteCounts",a))):(I=Number(await this.fileDirectory.loadValueIndexed("StripOffsets",a)),E=Number(await this.fileDirectory.loadValueIndexed("StripByteCounts",a))),E===0){let Q=this.getBlockHeight(e)*this.getTileWidth(),l=this.planarConfiguration===2?this.getSampleByteSize(n):this.getBytesPerPixel(),h=new ArrayBuffer(Q*l);return this.getArrayForSample(n,h).fill(this.getGDALNoData()||0),{x:t,y:e,sample:n,data:h}}let B=(await this.source.fetch([{offset:I,length:E}],r))[0],C;return g===null||!g[a]?(C=(async()=>{let Q=await i.decode(B),l=this.getSampleFormat(),h=this.getBitsPerSample();return rl(l,h)&&(Q=gl(Q,l,this.planarConfiguration,this.getSamplesPerPixel(),h,this.getTileWidth(),this.getBlockHeight(e))),Q})(),g!==null&&(g[a]=C)):C=g[a],{x:t,y:e,sample:n,data:await C}}async _readRaster(t,e,n,i,r,s,o,a,g){let I=this.getTileWidth(),E=this.getTileHeight(),B=this.getWidth(),C=this.getHeight(),Q=Math.max(Math.floor(t[0]/I),0),l=Math.min(Math.ceil(t[2]/I),Math.ceil(B/I)),h=Math.max(Math.floor(t[1]/E),0),u=Math.min(Math.ceil(t[3]/E),Math.ceil(C/E)),p=t[2]-t[0],y=this.getBytesPerPixel(),f=[],c=[];for(let k=0;k<e.length;++k){if(this.planarConfiguration===1){let D=await this.fileDirectory.loadValue("BitsPerSample");if(typeof D!="object")throw new Error("Expected BitsPerSample to be an array or typed array.");f.push(il(D,0,e[k])/8)}else f.push(0);c.push(this.getReaderForSample(e[k]))}let w=[],{littleEndian:d}=this;for(let k=h;k<u;++k)for(let D=Q;D<l;++D){let G;this.planarConfiguration===1&&(G=this.getTileOrStrip(D,k,0,r,g));for(let x=0;x<e.length;++x){let v=x,F=e[x];if(this.planarConfiguration===2&&(y=this.getSampleByteSize(F),G=this.getTileOrStrip(D,k,F,r,g)),!G)throw new Error("Could not get tile or strip data.");let N=G.then(b=>{let H=b.data,L=new DataView(H),T=this.getBlockHeight(b.y),U=b.y*E,K=b.x*I,Z=U+T,z=(b.x+1)*I,M=c[v],_=Math.min(T,T-(Z-t[3]),C-U),Y=Math.min(I,I-(z-t[2]),B-K);for(let J=Math.max(0,t[1]-U);J<_;++J)for(let q=Math.max(0,t[0]-K);q<Y;++q){let AA=(J*I+q)*y,tA=M.call(L,AA+f[v],d),O;i?(O=(J+U-t[1])*p*e.length+(q+K-t[0])*e.length+v,n[O]=tA):(O=(J+U-t[1])*p+q+K-t[0],n[v][O]=tA)}});w.push(N)}}if(await Promise.all(w),s&&t[2]-t[0]!==s||o&&t[3]-t[1]!==o){let k;i?k=yI(n,t[2]-t[0],t[3]-t[1],s,o,e.length,a):k=pI(n,t[2]-t[0],t[3]-t[1],s,o,a);let D=k;return D.width=s??t[2]-t[0],D.height=o??t[3]-t[1],D}let S=n;return S.width=s||t[2]-t[0],S.height=o||t[3]-t[1],S}async readRasters(t={}){let{window:e,samples:n=[],pool:i=null,width:r,height:s,resampleMethod:o,fillValue:a,signal:g}=t,I="interleave"in t&&t.interleave,E=e||[0,0,this.getWidth(),this.getHeight()];if(E[0]>E[2]||E[1]>E[3])throw new Error("Invalid subsets");let B=E[2]-E[0],C=E[3]-E[1],Q=B*C,l=this.getSamplesPerPixel();if(!n||!n.length)for(let c=0;c<l;++c)n.push(c);else for(let c=0;c<n.length;++c)if(n[c]>=l)return Promise.reject(new RangeError(`Invalid sample index '${n[c]}'.`));let h;if(I){let{fileDirectory:c}=this,w=c.getValue("SampleFormat"),d=w?Math.max.apply(null,Array.from(w)):1;if(d!==1&&d!==2&&d!==3)throw new Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");let S=c.getValue("BitsPerSample"),k=S?Math.max.apply(null,Array.from(S)):8;if(h=Ti(d,k,Q*n.length),a){if(Array.isArray(a))throw new Error("When reading interleaved data, fillValue must be a single number.");h.fill(a)}}else{h=[];for(let c=0;c<n.length;++c){let w=this.getArrayForSample(n[c],Q);Array.isArray(a)&&c<a.length?w.fill(a[c]):a&&!Array.isArray(a)&&w.fill(a),h.push(w)}}let u=this.fileDirectory.getValue("Compression")||1,p=await uI(u,this.fileDirectory),y=i?i.bindParameters(u,p):await wI(u,p);return await this._readRaster(E,n,h,I,y,r,s,o,g)}async readRGB(t={}){let{window:e,pool:n=null,width:i,height:r,resampleMethod:s,enableAlpha:o=!1,signal:a}=t,g=("interleave"in t&&t.interleave)??!1,I=e||[0,0,this.getWidth(),this.getHeight()];if(I[0]>I[2]||I[1]>I[3])throw new Error("Invalid subsets");let E=this.fileDirectory.getValue("PhotometricInterpretation");if(E===EA.RGB){let y=[0,1,2],f=this.fileDirectory.getValue("ExtraSamples");if(f&&f[0]!==fg.Unspecified&&o){y=[];let c=this.fileDirectory.getValue("BitsPerSample")||[];for(let w=0;w<c.length;w+=1)y.push(w)}return this.readRasters({window:e,interleave:g,samples:y,pool:n,width:i,height:r,resampleMethod:s,signal:a})}let B;switch(E){case EA.WhiteIsZero:case EA.BlackIsZero:case EA.Palette:B=[0];break;case EA.CMYK:B=[0,1,2,3];break;case EA.YCbCr:case EA.CIELab:B=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}let C={window:I,interleave:!0,samples:B,pool:n,width:i,height:r,resampleMethod:s,signal:a},{fileDirectory:Q}=this,l=await this.readRasters(C),h=2**this.getBitsPerSample(0),u;switch(E){case EA.WhiteIsZero:u=ug(l,h);break;case EA.BlackIsZero:u=wg(l,h);break;case EA.Palette:u=pg(l,await Q.loadValue("ColorMap"));break;case EA.CMYK:u=yg(l);break;case EA.YCbCr:u=mg(l);break;case EA.CIELab:u=Dg(l);break;default:throw new Error("Unsupported photometric interpretation.")}if(!g){let y=new Uint8Array(u.length/3),f=new Uint8Array(u.length/3),c=new Uint8Array(u.length/3);for(let w=0,d=0;w<u.length;w+=3,++d)y[d]=u[w],f[d]=u[w+1],c[d]=u[w+2];u=[y,f,c]}let p=u;return p.width=l.width,p.height=l.height,p}async getTiePoints(){if(!this.fileDirectory.hasTag("ModelTiepoint"))return[];let t=await this.fileDirectory.loadValue("ModelTiepoint");if(typeof t!="object")throw new Error("Expected ModelTiepoint to be an array or typed array.");let e=[];for(let n=0;n<t.length;n+=6)e.push({i:t[n],j:t[n+1],k:t[n+2],x:t[n+3],y:t[n+4],z:t[n+5]});return e}async getGDALMetadata(t=null){let e={};if(!this.fileDirectory.hasTag("GDAL_METADATA"))return null;let n=await this.fileDirectory.loadValue("GDAL_METADATA"),i=zn(n,"Item");t===null?i=i.filter(r=>Ye(r,"sample")===void 0):i=i.filter(r=>Number(Ye(r,"sample"))===t);for(let r=0;r<i.length;++r){let s=i[r];e[Ye(s,"name")]=s.inner}return e}getGDALNoData(){let t=this.fileDirectory.hasTag("GDAL_NODATA")&&this.fileDirectory.getValue("GDAL_NODATA");return t?Number(t.substring(0,t.length-1)):null}getOrigin(){let t=this.fileDirectory.getValue("ModelTiepoint"),e=this.fileDirectory.getValue("ModelTransformation");if(t&&t.length===6)return[t[3],t[4],t[5]];if(e)return[e[3],e[7],e[11]];throw new Error("The image does not have an affine transformation.")}getResolution(t=null){let e=this.fileDirectory.getValue("ModelPixelScale"),n=this.fileDirectory.getValue("ModelTransformation");if(e)return[e[0],-e[1],e[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(t){let[i,r,s]=t.getResolution();return[i*t.getWidth()/this.getWidth(),r*t.getHeight()/this.getHeight(),s*t.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.getGeoKeys()?.GTRasterTypeGeoKey===1}getBoundingBox(t=!1){let e=this.getHeight(),n=this.getWidth(),i=this.fileDirectory.getValue("ModelTransformation");if(i&&!t){let[r,s,,o,a,g,,I]=i,B=[[0,0],[0,e],[n,0],[n,e]].map(([l,h])=>[o+r*l+s*h,I+a*l+g*h]),C=B.map(l=>l[0]),Q=B.map(l=>l[1]);return[Math.min(...C),Math.min(...Q),Math.max(...C),Math.max(...Q)]}else{let r=this.getOrigin(),s=this.getResolution(),o=r[0],a=r[1],g=o+s[0]*n,I=a+s[1]*e;return[Math.min(o,g),Math.min(a,I),Math.max(o,g),Math.max(a,I)]}}},mI=Yi;var st=class{constructor(t){this._dataView=new DataView(t)}get buffer(){return this._dataView.buffer}getUint64(t,e){let n=this.getUint32(t,e),i=this.getUint32(t+4,e),r;if(e){if(r=n+2**32*i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*n+i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}getInt64(t,e){let n=0,i=(this._dataView.getUint8(t+(e?7:0))&128)>0,r=!0;for(let s=0;s<8;s++){let o=this._dataView.getUint8(t+(e?s:7-s));i&&(r?o!==0&&(o=~(o-1)&255,r=!1):o=~o&255),n+=o*256**s}return i&&(n=-n),n}getUint8(t){return this._dataView.getUint8(t)}getInt8(t){return this._dataView.getInt8(t)}getUint16(t,e){return this._dataView.getUint16(t,e)}getInt16(t,e){return this._dataView.getInt16(t,e)}getUint32(t,e){return this._dataView.getUint32(t,e)}getInt32(t,e){return this._dataView.getInt32(t,e)}getFloat16(t,e){return Te(this._dataView,t,e)}getFloat32(t,e){return this._dataView.getFloat32(t,e)}getFloat64(t,e){return this._dataView.getFloat64(t,e)}};var YA=class{constructor(t,e,n,i){this._dataView=new DataView(t),this._sliceOffset=e,this._littleEndian=n,this._bigTiff=i}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(t,e){return this.sliceOffset<=t&&this.sliceTop>=t+e}readUint8(t){return this._dataView.getUint8(t-this._sliceOffset)}readInt8(t){return this._dataView.getInt8(t-this._sliceOffset)}readUint16(t){return this._dataView.getUint16(t-this._sliceOffset,this._littleEndian)}readInt16(t){return this._dataView.getInt16(t-this._sliceOffset,this._littleEndian)}readUint32(t){return this._dataView.getUint32(t-this._sliceOffset,this._littleEndian)}readInt32(t){return this._dataView.getInt32(t-this._sliceOffset,this._littleEndian)}readFloat32(t){return this._dataView.getFloat32(t-this._sliceOffset,this._littleEndian)}readFloat64(t){return this._dataView.getFloat64(t-this._sliceOffset,this._littleEndian)}readUint64(t){let e=this.readUint32(t),n=this.readUint32(t+4),i;if(this._littleEndian){if(i=e+2**32*n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}if(i=2**32*e+n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}readInt64(t){let e=0,n=(this._dataView.getUint8(t+(this._littleEndian?7:0))&128)>0,i=!0;for(let r=0;r<8;r++){let s=this._dataView.getUint8(t+(this._littleEndian?r:7-r));n&&(i?s!==0&&(s=~(s-1)&255,i=!1):s=~s&255),e+=s*256**r}return n&&(e=-e),e}readOffset(t){return this._bigTiff?this.readUint64(t):this.readUint32(t)}};var ln=class{async fetch(t,e){return Promise.all(t.map(async n=>(await this.fetchSlice(n,e)).data))}async fetchSlice(t,e){throw new Error(`fetching of slice ${t} not possible, not implemented`)}get fileSize(){return null}async close(){}};var cn=class A extends Error{constructor(...t){super(...t),Error.captureStackTrace&&Error.captureStackTrace(this,A),this.name="AbortError",this.signal=void 0}};var _i=class extends ln{constructor(t){super(),this.arrayBuffer=t}fetchSlice(t,e){if(e&&e.aborted)throw new cn("Request aborted");return Promise.resolve({data:this.arrayBuffer.slice(t.offset,t.offset+t.length),offset:t.offset,length:t.length})}};function DI(A){return new _i(A)}ve();function we(A,t){switch(A){case m.BYTE:case m.ASCII:case m.UNDEFINED:return new Uint8Array(t);case m.SBYTE:return new Int8Array(t);case m.SHORT:return new Uint16Array(t);case m.SSHORT:return new Int16Array(t);case m.LONG:case m.IFD:return new Uint32Array(t);case m.SLONG:return new Int32Array(t);case m.LONG8:case m.IFD8:return new Array(t);case m.SLONG8:return new Array(t);case m.RATIONAL:return new Uint32Array(t*2);case m.SRATIONAL:return new Int32Array(t*2);case m.FLOAT:return new Float32Array(t);case m.DOUBLE:return new Float64Array(t);default:throw new RangeError(`Invalid field type: ${A}`)}}function pe(A,t){switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:return A.readUint8;case m.SBYTE:return A.readInt8;case m.SHORT:return A.readUint16;case m.SSHORT:return A.readInt16;case m.LONG:case m.IFD:return A.readUint32;case m.SLONG:return A.readInt32;case m.LONG8:case m.IFD8:return A.readUint64;case m.SLONG8:return A.readInt64;case m.RATIONAL:return A.readUint32;case m.SRATIONAL:return A.readInt32;case m.FLOAT:return A.readFloat32;case m.DOUBLE:return A.readFloat64;default:throw new RangeError(`Invalid field type: ${t}`)}}function Ct(A=null,t,e,n,i,r,s=!1){let o=VA(n),a=A||we(n,i),g=n===m.RATIONAL||n===m.SRATIONAL;if(g)for(let I=0;I<i;I+=2)a[I]=t.call(e,r+I*o),a[I+1]=t.call(e,r+(I*o+4));else for(let I=0;I<i;++I)a[I]=t.call(e,r+I*o);return n===m.ASCII?new TextDecoder("utf-8").decode(a):i===1&&!s&&!g?a[0]:a}var Hi=class{constructor(t,e,n,i,r){this.source=t,this.arrayOffset=e,this.littleEndian=n,this.fieldType=i,this.length=r,this.data=we(i,r),this.itemSize=VA(i),this.maskBitmap=new Uint8Array(Math.ceil(r/8)),this.fetchIndexPromises=new Map,this.fullFetchPromise=null}async loadAll(){return this.fullFetchPromise||(this.fullFetchPromise=this.source.fetch([{offset:this.arrayOffset,length:this.itemSize*this.length}]).then(t=>{let e=new YA(t[0],this.arrayOffset,!0,!1),n=Ct(this.data,pe(e,this.fieldType),e,this.fieldType,this.length,this.arrayOffset,!0);return this.maskBitmap.fill(255),this.fetchIndexPromises.clear(),n})),this.fullFetchPromise}async get(t){if(t<0||t>=this.data.length)throw new RangeError(`Index ${t} out of bounds for length ${this.data.length}`);let e=Math.floor(t/8),n=1<<t%8,i=this.arrayOffset+t*this.itemSize;if((this.maskBitmap[e]&n)===0){if(!this.fetchIndexPromises.has(t)){let r=this.source.fetch([{offset:i,length:this.itemSize}]).then(s=>{let o=new YA(s[0],this.arrayOffset+t*this.itemSize,!0,!1),g=pe(o,this.fieldType).call(o,i);return this.data[t]=g,this.maskBitmap[e]|=n,this.fetchIndexPromises.delete(t),g});this.fetchIndexPromises.set(t,r)}return this.fetchIndexPromises.get(t)}return this.data[t]}},vi=class{constructor(t,e,n,i){this.actualizedFields=t,this.deferredFields=e,this.deferredFieldsBeingResolved=new Map,this.deferredArrays=n,this.nextIFDByteOffset=i}hasTag(t){let e=He(t);return this.actualizedFields.has(e)||this.deferredFields.has(e)||this.deferredArrays.has(e)}getValue(t){let e=He(t);if(this.deferredFields.has(e)||this.deferredArrays.has(e)){let i=Ie[e]?.name||`Tag${e}`;throw new Error(`Field '${i}' (${e}) is deferred. Use loadValue() to load it asynchronously.`)}if(this.actualizedFields.has(e))return this.actualizedFields.get(e)}async loadValue(t){let e=He(t);if(this.actualizedFields.has(e))return this.actualizedFields.get(e);if(this.deferredFieldsBeingResolved.has(e))return this.deferredFieldsBeingResolved.get(e);let n=this.deferredFields.get(e);if(n){this.deferredFields.delete(e);let r=(async()=>{try{let s=await n();return this.actualizedFields.set(e,s),s}finally{this.deferredFieldsBeingResolved.delete(e)}})();return this.deferredFieldsBeingResolved.set(e,r),r}let i=this.deferredArrays.get(e);if(i)return i.loadAll()}async loadValueIndexed(t,e){let n=He(t);if(this.actualizedFields.has(n))return this.actualizedFields.get(n)[e];if(this.deferredArrays.has(n))return this.deferredArrays.get(n).get(e);if(this.hasTag(n)){let i=await this.loadValue(n);if(i&&typeof i!="number")return i[e]}}parseGeoKeyDirectory(){let t=this.getValue("GeoKeyDirectory");if(!t)return null;let e={};for(let n=4;n<=t[3]*4;n+=4){let i=Xn[t[n]],r=t[n+1]||null,s=t[n+2],o=t[n+3],a=null;if(!r)a=o;else{if(a=this.getValue(r),typeof a>"u"||a===null)throw new Error(`Could not get value of geoKey '${i}'.`);typeof a=="string"?a=a.substring(o,o+s-1):a.subarray&&(a=a.subarray(o,o+s),s===1&&(a=a[0]))}e[i]=a}return e}toObject(){let t={};for(let[e,n]of this.actualizedFields.entries()){let i=typeof e=="number"?Ie[e]:void 0,r=i?i.name:`Tag${e}`;t[r]=n}return t}},hn=class{constructor(t,e,n,i=!1){this.source=t,this.littleEndian=e,this.bigTiff=n,this.eager=i}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new YA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(t){let e=this.bigTiff?20:12,n=this.bigTiff?8:2,i=await this.getSlice(t),r=this.bigTiff?i.readUint64(t):i.readUint16(t),s=r*(e+(this.bigTiff?16:6));i.covers(t,s)||(i=await this.getSlice(t,s));let o=new Map,a=new Map,g=new Map,I=t+(this.bigTiff?8:2);for(let B=0;B<r;I+=e,++B){let C=i.readUint16(I),Q=i.readUint16(I+2),l=this.bigTiff?i.readUint64(I+4):i.readUint32(I+4),h=null,u=null,p=null,y=VA(Q),f=I+(this.bigTiff?12:8),c=Ie[C]?.isArray,w=Ie[C]?.eager||this.eager;if(y*l<=(this.bigTiff?8:4))h=Ct(we(Q,l),pe(i,Q),i,Q,l,f,c);else{let d=i.readOffset(f),S=VA(Q)*l;if(i.covers(d,S))h=Ct(we(Q,l),pe(i,Q),i,Q,l,d,c);else if(w){let k=await this.getSlice(d,S);h=Ct(we(Q,l),pe(k,Q),k,Q,l,d,c)}else c?p=new Hi(this.source,d,this.littleEndian,Q,l):u=async()=>{let k=await this.getSlice(d,S);return Ct(we(Q,l),pe(k,Q),k,Q,l,d,c)}}h!==null?o.set(C,h):u!==null?a.set(C,u):p!==null&&g.set(C,p)}let E=i.readOffset(t+n+e*r);return new vi(o,a,g,E)}};ve();function Ki(A,t,e,n){let i=null,r=null,s=VA(t);switch(t){case m.BYTE:case m.ASCII:case m.UNDEFINED:i=new Uint8Array(e),r=A.readUint8;break;case m.SBYTE:i=new Int8Array(e),r=A.readInt8;break;case m.SHORT:i=new Uint16Array(e),r=A.readUint16;break;case m.SSHORT:i=new Int16Array(e),r=A.readInt16;break;case m.LONG:case m.IFD:i=new Uint32Array(e),r=A.readUint32;break;case m.SLONG:i=new Int32Array(e),r=A.readInt32;break;case m.LONG8:case m.IFD8:i=new Array(e),r=A.readUint64;break;case m.SLONG8:i=new Array(e),r=A.readInt64;break;case m.RATIONAL:i=new Uint32Array(e*2),r=A.readUint32;break;case m.SRATIONAL:i=new Int32Array(e*2),r=A.readInt32;break;case m.FLOAT:i=new Float32Array(e),r=A.readFloat32;break;case m.DOUBLE:i=new Float64Array(e),r=A.readFloat64;break;default:}if(i===null||r===null)throw new RangeError(`Invalid field type: ${t}`);if(t===m.RATIONAL||t===m.SRATIONAL)for(let o=0;o<e;o+=2)i[o]=r.call(A,n+o*s),i[o+1]=r.call(A,n+(o*s+4));else for(let o=0;o<e;++o)i[o]=r.call(A,n+o*s);return t===m.ASCII?new TextDecoder("utf-8").decode(i):i}var ye=class extends Error{constructor(t){super(`No image at index ${t}`),this.index=t}},Pi=class{async getImage(t=0){throw new Error("Not implemented")}async getImageCount(){throw new Error("Not implemented")}async readRasters(t={}){let{window:e,width:n,height:i}=t,{resX:r,resY:s,bbox:o}=t,a=await this.getImage(),g=a,I=await this.getImageCount(),E=a.getBoundingBox();if(e&&o)throw new Error('Both "bbox" and "window" passed.');if(n||i){if(e){let[Q,l]=a.getOrigin(),[h,u]=a.getResolution();o=[Q+e[0]*h,l+e[1]*u,Q+e[2]*h,l+e[3]*u]}let C=o||E;if(n){if(r)throw new Error("Both width and resX passed");r=(C[2]-C[0])/n}if(i){if(s)throw new Error("Both width and resY passed");s=(C[3]-C[1])/i}}if(r||s){let C=[];for(let Q=0;Q<I;++Q){let l=await this.getImage(Q),h=l.fileDirectory.getValue("SubfileType"),u=l.fileDirectory.getValue("NewSubfileType");(Q===0||h===2||(u||0)&1)&&C.push(l)}C.sort((Q,l)=>Q.getWidth()-l.getWidth());for(let Q=0;Q<C.length;++Q){let l=C[Q],h=(E[2]-E[0])/l.getWidth(),u=(E[3]-E[1])/l.getHeight();if(g=l,r&&r>h||s&&s>u)break}}let B=e;if(o){let[C,Q]=a.getOrigin(),[l,h]=g.getResolution(a);B=[Math.round((o[0]-C)/l),Math.round((o[1]-Q)/h),Math.round((o[2]-C)/l),Math.round((o[3]-Q)/h)],B=[Math.min(B[0],B[2]),Math.min(B[1],B[3]),Math.max(B[0],B[2]),Math.max(B[1],B[3])]}return g.readRasters({...t,window:B})}},Oi=class A extends Pi{constructor(t,e,n,i,r={}){super(),this.source=t,this.parser=new hn(t,e,n,!1),this.littleEndian=e,this.bigTiff=n,this.firstIFDOffset=i,this.cache=r.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(t,e){let n=this.bigTiff?4048:1024;return new YA((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async requestIFD(t){if(this.ifdRequests[t])return this.ifdRequests[t];if(t===0)return this.ifdRequests[t]=this.parser.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[t];if(!this.ifdRequests[t-1])try{this.ifdRequests[t-1]=this.requestIFD(t-1)}catch(e){throw e instanceof ye?new ye(t):e}return this.ifdRequests[t]=(async()=>{let e=this.ifdRequests[t-1];if(!e)throw new Error("Previous IFD request missing");let n=await e;if(n.nextIFDByteOffset===0)throw new ye(t);return this.parser.parseFileDirectoryAt(n.nextIFDByteOffset)})(),this.ifdRequests[t]}async getImage(t=0){return new mI(await this.requestIFD(t),this.littleEndian,this.cache,this.source)}async getImageCount(){let t=0,e=!0;for(;e;)try{await this.requestIFD(t),++t}catch(n){if(n instanceof ye)e=!1;else throw n}return t}async getGhostValues(){let t=this.bigTiff?16:8;if(this.ghostValues!==null)return this.ghostValues;let e="GDAL_STRUCTURAL_METADATA_SIZE=",n=e.length+100,i=await this.getSlice(t,n);if(e===Ki(i,m.ASCII,e.length,t)){let s=Ki(i,m.ASCII,n,t).split(`
`)[0],o=Number(s.split("=")[1].split(" ")[0])+s.length;o>n&&(i=await this.getSlice(t,o));let a=Ki(i,m.ASCII,o,t),g={};a.split(`
`).filter(I=>I.length>0).map(I=>I.split("=")).forEach(([I,E])=>{g[I]=E}),this.ghostValues=g}return this.ghostValues}static async fromSource(t,e,n){let i=(await t.fetch([{offset:0,length:1024}],n))[0],r=new st(i),s=r.getUint16(0,!1),o;if(s===18761)o=!0;else if(s===19789)o=!1;else throw new TypeError("Invalid byte order value.");let a=r.getUint16(2,o),g;if(a===42)g=!1;else if(a===43){if(g=!0,r.getUint16(4,o)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");let I=g?r.getUint64(8,o):r.getUint32(4,o);return new A(t,o,g,I,e)}close(){return typeof this.source.close=="function"?this.source.close():!1}};async function SI(A,t){return Oi.fromSource(DI(A),void 0,t)}var qi=new TextEncoder,Vi=new TextDecoder,GI="TGPC",ol=1e3,NI=new Map,kI=new Map,RI=new Map;function Il(A){return A instanceof Error&&A.message.startsWith("Unsupported cache version ")}function Ji(A){return{version:A,entries:{}}}function Zi(A){return A.replaceAll(/[^A-Za-z0-9._-]+/g,"-")}function fn(A){let t=5381;for(let e=0;e<A.length;e+=1)t=(t<<5)+t^A.charCodeAt(e);return(t>>>0).toString(16).padStart(8,"0")}function al(A){return[A.minLat,A.maxLat,A.minLon,A.maxLon].map(t=>t.toFixed(6)).join("_")}function sl(A){let t=qi.encode(JSON.stringify({version:2,bounds:A.bounds,width:A.width,height:A.height,noDataValue:A.noDataValue})),e=new Uint8Array(A.values.buffer.slice(0)),n=new Uint8Array(8+t.length+e.length);n.set(qi.encode(GI),0);let i=new DataView(n.buffer);return i.setUint16(4,2,!0),i.setUint16(6,t.length,!0),n.set(t,8),n.set(e,8+t.length),n}function Cl(A){if(A.length<8)throw new Error("Cache record too small.");if(Vi.decode(A.slice(0,4))!==GI)throw new Error("Invalid cache record magic.");let e=new DataView(A.buffer,A.byteOffset,A.byteLength),n=e.getUint16(4,!0);if(n!==2)throw new Error(`Unsupported cache version ${n}.`);let i=e.getUint16(6,!0),r=8,s=r+i;if(s>A.length)throw new Error("Invalid cache record metadata length.");let o=JSON.parse(Vi.decode(A.slice(r,s))),a=A.slice(s);if(a.byteLength%Float32Array.BYTES_PER_ELEMENT!==0)throw new Error("Invalid cached raster byte length.");let g=new Float32Array(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength));if(g.length!==o.width*o.height)throw new Error("Cached raster dimensions do not match metadata.");return{bounds:o.bounds,width:o.width,height:o.height,values:g,noDataValue:o.noDataValue}}function Bl(A){return Object.values(A.entries).reduce((t,e)=>t+e.size,0)}function ji(A){let t=null,e=!1,n=null;async function i(B){t=B,await X.writeFile(A.indexPath,qi.encode(JSON.stringify(B)))}function r(){n!=null&&(clearTimeout(n),n=null),e=!1}async function s(B){r(),await i(B)}function o(B){t=B,e=!0,n==null&&(n=setTimeout(()=>{n=null,!(!e||!t)&&(e=!1,i(t).catch(C=>{console.warn("Unable to persist terrain cache index usage data.",C)}))},ol))}async function a(){return r(),await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),t=Ji(A.version),t}async function g(){if(t)return t;if(!await X.fileExists(A.indexPath))return t=Ji(A.version),t;try{let B=await X.readFile(A.indexPath),C=JSON.parse(Vi.decode(B));return C.version!==A.version||!C.entries?a():(t=C,t)}catch{return a()}}async function I(B,C){A.deleteMemoryEntry(C.key),delete B.entries[C.key],await X.fileExists(C.path)&&await X.deleteFile(C.path)}async function E(B){let C=Bl(B);if(C<=A.maxBytes)return;let Q=Object.values(B.entries).sort((l,h)=>l.lastUsed-h.lastUsed);for(let l of Q)if(await I(B,l),C-=l.size,C<=A.maxBytes)break}return{getMemory(B){return A.memoryCache.get(B)},loadIndex:g,async get(B){if(A.memoryCache.has(B))return A.memoryCache.get(B)??null;let C=await g(),Q=C.entries[B];if(!Q)return null;if(!await X.fileExists(Q.path))return delete C.entries[B],await s(C),null;try{let l=await X.readFile(Q.path),h=A.decode(l);return A.memoryCache.set(B,h),Q.lastUsed=Date.now(),o(C),h}catch(l){return A.onDecodeError?.(B,l),await I(C,Q),await s(C),null}},async put(B,C,Q){let l=await g(),h=A.encode(Q);A.memoryCache.set(B,Q),await X.writeFile(C,h),l.entries[B]={key:B,path:C,size:h.byteLength,lastUsed:Date.now()},await E(l),await s(l)},async invalidate(B){A.deleteMemoryEntry(B);let C=await g(),Q=C.entries[B];Q&&(await I(C,Q),await s(C))},async clear(){r();let B=await g(),C=Object.values(B.entries);for(let Q of C)await X.fileExists(Q.path)&&await X.deleteFile(Q.path);return await X.fileExists(A.indexPath)&&await X.deleteFile(A.indexPath),A.memoryCache.clear(),t=Ji(A.version),C.length}}}function FI(A){return A}function xI(A){return A}var Wi=ji({version:2,indexPath:kr,maxBytes:Rr,memoryCache:NI,encode:sl,decode:Cl,deleteMemoryEntry:A=>NI.delete(A),onDecodeError:(A,t)=>{Il(t)&&console.warn(`Discarding outdated cached terrain tile for ${A}: ${t instanceof Error?t.message:"Unknown error"}`)}}),zi=ji({version:be,indexPath:xr,maxBytes:Lr,memoryCache:RI,encode:xI,decode:FI,deleteMemoryEntry:A=>RI.delete(A)}),LI=ji({version:Le,indexPath:Gr,maxBytes:Fr,memoryCache:kI,encode:xI,decode:FI,deleteMemoryEntry:A=>kI.delete(A)});function bI(A,t){let n=`${Zi(t)}-${fn(A)}.bin`;return{key:A,path:`${xe}/v${2}/${n}`}}function UI(A,t){let n=`${Zi(t.split(/[\\/]/).filter(Boolean).pop()||"track").replace(/(?:\.gpx)?$/i,"")||"track"}-${fn(A)}.cimal`;return{key:A,path:`${Ln}/v${be}/${n}`}}function MI(A,t){let n=`${Zi(t)}-${fn(A)}.bin`;return{key:A,path:`${xn}/v${Le}/${n}`}}function TI(A){return Wi.getMemory(A)}async function YI(A){return Wi.get(A)}async function _I(A,t,e){await Wi.put(A,t,e)}async function HI(A){return zi.get(A)}async function vI(A,t,e){await zi.put(A,t,e)}async function KI(A){await zi.invalidate(A)}async function PI(A){return LI.get(A)}async function OI(A,t,e){await LI.put(A,t,e)}function JI(A,t,e,n){return[`v${2}`,A,al(t),e,n,"bilinear"].join("|")}function qI(A,t,e){return[`v${be}`,A,e,fn(t)].join("|")}function VI(A,t,e){return[`v${Le}`,"openhikingmap",A,t,e].join("|")}function mA(A,t,e){return Math.min(e,Math.max(t,A))}function De(A,t,e){return A+(t-A)*e}function Bt(A){return A*Math.PI/180}function dn(A,t){let e=Bt(A.lat),n=Bt(t.lat),i=Bt(t.lat-A.lat),r=Bt(t.lon-A.lon),s=Math.sin(i/2),o=Math.sin(r/2),a=s*s+Math.cos(e)*Math.cos(n)*o*o;return 2*6371e3*Math.asin(Math.min(1,Math.sqrt(a)))}function ZI(A){if(A.length===0)throw new Error("Cannot compute bounds for an empty point set.");let t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let r of A)t=Math.min(t,r.lat),e=Math.max(e,r.lat),n=Math.min(n,r.lon),i=Math.max(i,r.lon);return{minLat:t,maxLat:e,minLon:n,maxLon:i}}function un(A){return Math.max(0,A.maxLon-A.minLon)}function wn(A){return Math.max(0,A.maxLat-A.minLat)}function jI(A,t,e){return{minLat:A.minLat-t,maxLat:A.maxLat+t,minLon:A.minLon-e,maxLon:A.maxLon+e}}function Xi(A){return{lat:(A.minLat+A.maxLat)/2,lon:(A.minLon+A.maxLon)/2}}function $i(A){let t=Bt(A),e=111132.92-559.82*Math.cos(2*t)+1.175*Math.cos(4*t),n=111412.84*Math.cos(t)-93.5*Math.cos(3*t);return{lat:e,lon:Math.max(1,n)}}function Ar(A,t){let e=Math.max(A.minLat,t.minLat),n=Math.min(A.maxLat,t.maxLat),i=Math.max(A.minLon,t.minLon),r=Math.min(A.maxLon,t.maxLon);return e>=n||i>=r?null:{minLat:e,maxLat:n,minLon:i,maxLon:r}}function WI(A,t,e){return{x:(A.lon-t.lon)*e.lon,z:(A.lat-t.lat)*-e.lat}}function XI(A,t){return Math.abs(A).toString().padStart(t,"0")}function ll(A){return`${A>=0?"N":"S"}${XI(A,2)}_00`}function cl(A){return`${A>=0?"E":"W"}${XI(A,3)}_00`}function $I(A){return`Copernicus_DSM_COG_${10}_${ll(A.southLat)}_${cl(A.westLon)}_DEM`}function hl(A){let t=$I(A);return`${Nr}/${t}/${t}.tif`}function Aa(A){let t=Math.floor(A.minLat),e=Math.ceil(A.maxLat)-1,n=Math.floor(A.minLon),i=Math.ceil(A.maxLon)-1,r=[];for(let s=t;s<=e;s+=1)for(let o=n;o<=i;o+=1)r.push({southLat:s,westLon:o});return r.length===0&&r.push({southLat:Math.floor(A.minLat),westLon:Math.floor(A.minLon)}),r}function fl(A,t,e,n){let i=mA(Math.floor((t.minLon-A.minLon)/(A.maxLon-A.minLon)*e),0,e-1),r=mA(Math.ceil((t.maxLon-A.minLon)/(A.maxLon-A.minLon)*e),i+1,e),s=mA(Math.floor((A.maxLat-t.maxLat)/(A.maxLat-A.minLat)*n),0,n-1),o=mA(Math.ceil((A.maxLat-t.minLat)/(A.maxLat-A.minLat)*n),s+1,n);return[i,s,r,o]}async function dl(A){let t=new AbortController,e=setTimeout(()=>t.abort(),45e3);try{let n=await fetch(A,{signal:t.signal});if(!n.ok)throw new Error(`Failed to fetch Copernicus tile ${A}: ${n.status} ${n.statusText}`);return await n.arrayBuffer()}finally{clearTimeout(e)}}async function ea(A,t,e){let n={minLat:A.southLat,maxLat:A.southLat+1,minLon:A.westLon,maxLon:A.westLon+1},i=Ar(n,t);if(!i)return null;let r=mA(Math.ceil((i.maxLon-i.minLon)*e.lon)+2,16,640),s=mA(Math.ceil((i.maxLat-i.minLat)*e.lat)+2,16,640),o=$I(A),a=JI(o,i,r,s),g=TI(a);if(g)return g;let I=await YI(a);if(I)return I;let E=await dl(hl(A)),C=await(await SI(E)).getImage(),[Q,l,h,u]=C.getBoundingBox(),p={minLat:l,maxLat:u,minLon:Q,maxLon:h},y=Ar(p,t);if(!y)return null;let f=fl(p,y,C.getWidth(),C.getHeight()),c=await C.readRasters({window:f,width:r,height:s,interleave:!0,fillValue:0,resampleMethod:"bilinear"}),w={bounds:y,width:r,height:s,values:c,noDataValue:C.getGDALNoData()},d=bI(a,o);return await _I(d.key,d.path,w),w}function pn(A,t){return!Number.isFinite(A)||t!=null&&A===t?null:A}function ul(A,t,e){let{bounds:n,width:i,height:r,values:s,noDataValue:o}=A;if(t<n.minLat||t>n.maxLat||e<n.minLon||e>n.maxLon)return null;let a=(e-n.minLon)/(n.maxLon-n.minLon)*(i-1),g=(n.maxLat-t)/(n.maxLat-n.minLat)*(r-1),I=Math.floor(a),E=Math.floor(g),B=Math.min(i-1,I+1),C=Math.min(r-1,E+1),Q=a-I,l=g-E,h=pn(s[E*i+I],o),u=pn(s[E*i+B],o),p=pn(s[C*i+I],o),y=pn(s[C*i+B],o),f=[h,u,p,y].filter(G=>G!=null);if(f.length===0)return null;if(f.length<4)return f.reduce((G,x)=>G+x,0)/f.length;let[c,w,d,S]=f,k=c*(1-Q)+w*Q,D=d*(1-Q)+S*Q;return k*(1-l)+D*l}function er(A,t,e){for(let n of A){let i=ul(n,t,e);if(i!=null)return i}return null}var ta=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",wl=ta+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",pl="["+ta+"]["+wl+"]*",yl=new RegExp("^"+pl+"$");function yn(A,t){let e=[],n=t.exec(A);for(;n;){let i=[];i.startIndex=t.lastIndex-n[0].length;let r=n.length;for(let s=0;s<r;s++)i.push(n[s]);e.push(i),n=t.exec(A)}return e}var Se=function(A){let t=yl.exec(A);return!(t===null||typeof t>"u")};function na(A){return typeof A<"u"}var Et=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],mn=["__proto__","constructor","prototype"];var ml={allowBooleanAttributes:!1,unpairedTags:[]};function Ia(A,t){t=Object.assign({},ml,t);let e=[],n=!1,i=!1;A[0]==="\uFEFF"&&(A=A.substr(1));for(let r=0;r<A.length;r++)if(A[r]==="<"&&A[r+1]==="?"){if(r+=2,r=ra(A,r),r.err)return r}else if(A[r]==="<"){let s=r;if(r++,A[r]==="!"){r=ga(A,r);continue}else{let o=!1;A[r]==="/"&&(o=!0,r++);let a="";for(;r<A.length&&A[r]!==">"&&A[r]!==" "&&A[r]!=="	"&&A[r]!==`
`&&A[r]!=="\r";r++)a+=A[r];if(a=a.trim(),a[a.length-1]==="/"&&(a=a.substring(0,a.length-1),r--),!xl(a)){let E;return a.trim().length===0?E="Invalid space after '<'.":E="Tag '"+a+"' is an invalid name.",eA("InvalidTag",E,sA(A,r))}let g=Nl(A,r);if(g===!1)return eA("InvalidAttr","Attributes for '"+a+"' have open quote.",sA(A,r));let I=g.value;if(r=g.index,I[I.length-1]==="/"){let E=r-I.length;I=I.substring(0,I.length-1);let B=oa(I,t);if(B===!0)n=!0;else return eA(B.err.code,B.err.msg,sA(A,E+B.err.line))}else if(o)if(g.tagClosed){if(I.trim().length>0)return eA("InvalidTag","Closing tag '"+a+"' can't have attributes or invalid starting.",sA(A,s));if(e.length===0)return eA("InvalidTag","Closing tag '"+a+"' has not been opened.",sA(A,s));{let E=e.pop();if(a!==E.tagName){let B=sA(A,E.tagStartPos);return eA("InvalidTag","Expected closing tag '"+E.tagName+"' (opened in line "+B.line+", col "+B.col+") instead of closing tag '"+a+"'.",sA(A,s))}e.length==0&&(i=!0)}}else return eA("InvalidTag","Closing tag '"+a+"' doesn't have proper closing.",sA(A,r));else{let E=oa(I,t);if(E!==!0)return eA(E.err.code,E.err.msg,sA(A,r-I.length+E.err.line));if(i===!0)return eA("InvalidXml","Multiple possible root nodes found.",sA(A,r));t.unpairedTags.indexOf(a)!==-1||e.push({tagName:a,tagStartPos:s}),n=!0}for(r++;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="!"){r++,r=ga(A,r);continue}else if(A[r+1]==="?"){if(r=ra(A,++r),r.err)return r}else break;else if(A[r]==="&"){let E=Gl(A,r);if(E==-1)return eA("InvalidChar","char '&' is not expected.",sA(A,r));r=E}else if(i===!0&&!ia(A[r]))return eA("InvalidXml","Extra text at the end",sA(A,r));A[r]==="<"&&r--}}else{if(ia(A[r]))continue;return eA("InvalidChar","char '"+A[r]+"' is not expected.",sA(A,r))}if(n){if(e.length==1)return eA("InvalidTag","Unclosed tag '"+e[0].tagName+"'.",sA(A,e[0].tagStartPos));if(e.length>0)return eA("InvalidXml","Invalid '"+JSON.stringify(e.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return eA("InvalidXml","Start tag expected.",1);return!0}function ia(A){return A===" "||A==="	"||A===`
`||A==="\r"}function ra(A,t){let e=t;for(;t<A.length;t++)if(A[t]=="?"||A[t]==" "){let n=A.substr(e,t-e);if(t>5&&n==="xml")return eA("InvalidXml","XML declaration allowed only at the start of the document.",sA(A,t));if(A[t]=="?"&&A[t+1]==">"){t++;break}else continue}return t}function ga(A,t){if(A.length>t+5&&A[t+1]==="-"&&A[t+2]==="-"){for(t+=3;t<A.length;t++)if(A[t]==="-"&&A[t+1]==="-"&&A[t+2]===">"){t+=2;break}}else if(A.length>t+8&&A[t+1]==="D"&&A[t+2]==="O"&&A[t+3]==="C"&&A[t+4]==="T"&&A[t+5]==="Y"&&A[t+6]==="P"&&A[t+7]==="E"){let e=1;for(t+=8;t<A.length;t++)if(A[t]==="<")e++;else if(A[t]===">"&&(e--,e===0))break}else if(A.length>t+9&&A[t+1]==="["&&A[t+2]==="C"&&A[t+3]==="D"&&A[t+4]==="A"&&A[t+5]==="T"&&A[t+6]==="A"&&A[t+7]==="["){for(t+=8;t<A.length;t++)if(A[t]==="]"&&A[t+1]==="]"&&A[t+2]===">"){t+=2;break}}return t}var Dl='"',Sl="'";function Nl(A,t){let e="",n="",i=!1;for(;t<A.length;t++){if(A[t]===Dl||A[t]===Sl)n===""?n=A[t]:n!==A[t]||(n="");else if(A[t]===">"&&n===""){i=!0;break}e+=A[t]}return n!==""?!1:{value:e,index:t,tagClosed:i}}var kl=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function oa(A,t){let e=yn(A,kl),n={};for(let i=0;i<e.length;i++){if(e[i][1].length===0)return eA("InvalidAttr","Attribute '"+e[i][2]+"' has no space in starting.",Qt(e[i]));if(e[i][3]!==void 0&&e[i][4]===void 0)return eA("InvalidAttr","Attribute '"+e[i][2]+"' is without value.",Qt(e[i]));if(e[i][3]===void 0&&!t.allowBooleanAttributes)return eA("InvalidAttr","boolean attribute '"+e[i][2]+"' is not allowed.",Qt(e[i]));let r=e[i][2];if(!Fl(r))return eA("InvalidAttr","Attribute '"+r+"' is an invalid name.",Qt(e[i]));if(!Object.prototype.hasOwnProperty.call(n,r))n[r]=1;else return eA("InvalidAttr","Attribute '"+r+"' is repeated.",Qt(e[i]))}return!0}function Rl(A,t){let e=/\d/;for(A[t]==="x"&&(t++,e=/[\da-fA-F]/);t<A.length;t++){if(A[t]===";")return t;if(!A[t].match(e))break}return-1}function Gl(A,t){if(t++,A[t]===";")return-1;if(A[t]==="#")return t++,Rl(A,t);let e=0;for(;t<A.length;t++,e++)if(!(A[t].match(/\w/)&&e<20)){if(A[t]===";")break;return-1}return t}function eA(A,t,e){return{err:{code:A,msg:t,line:e.line||e,col:e.col}}}function Fl(A){return Se(A)}function xl(A){return Se(A)}function sA(A,t){let e=A.substring(0,t).split(/\r?\n/);return{line:e.length,col:e[e.length-1].length+1}}function Qt(A){return A.startIndex+A[1].length}var aa=A=>Et.includes(A)?"__"+A:A,Ll={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(A,t){return t},attributeValueProcessor:function(A,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(A,t,e){return A},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:aa};function bl(A,t){if(typeof A!="string")return;let e=A.toLowerCase();if(Et.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);if(mn.some(n=>e===n.toLowerCase()))throw new Error(`[SECURITY] Invalid ${t}: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`)}function sa(A){return typeof A=="boolean"?{enabled:A,maxEntitySize:1e4,maxExpansionDepth:10,maxTotalExpansions:1e3,maxExpandedLength:1e5,maxEntityCount:100,allowedTags:null,tagFilter:null}:typeof A=="object"&&A!==null?{enabled:A.enabled!==!1,maxEntitySize:Math.max(1,A.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,A.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,A.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,A.maxExpandedLength??1e5),maxEntityCount:Math.max(1,A.maxEntityCount??1e3),allowedTags:A.allowedTags??null,tagFilter:A.tagFilter??null}:sa(!0)}var Ca=function(A){let t=Object.assign({},Ll,A),e=[{value:t.attributeNamePrefix,name:"attributeNamePrefix"},{value:t.attributesGroupName,name:"attributesGroupName"},{value:t.textNodeName,name:"textNodeName"},{value:t.cdataPropName,name:"cdataPropName"},{value:t.commentPropName,name:"commentPropName"}];for(let{value:n,name:i}of e)n&&bl(n,i);return t.onDangerousProperty===null&&(t.onDangerousProperty=aa),t.processEntities=sa(t.processEntities),t.stopNodes&&Array.isArray(t.stopNodes)&&(t.stopNodes=t.stopNodes.map(n=>typeof n=="string"&&n.startsWith("*.")?".."+n.substring(2):n)),t};var Dn;typeof Symbol!="function"?Dn="@@xmlMetadata":Dn=Symbol("XML Node Metadata");var lA=class{constructor(t){this.tagname=t,this.child=[],this[":@"]=Object.create(null)}add(t,e){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t,e){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child}),e!==void 0&&(this.child[this.child.length-1][Dn]={startIndex:e})}static getMetaDataSymbol(){return Dn}};var ct=class{constructor(t){this.suppressValidationErr=!t,this.options=t}readDocType(t,e){let n=Object.create(null),i=0;if(t[e+3]==="O"&&t[e+4]==="C"&&t[e+5]==="T"&&t[e+6]==="Y"&&t[e+7]==="P"&&t[e+8]==="E"){e=e+9;let r=1,s=!1,o=!1,a="";for(;e<t.length;e++)if(t[e]==="<"&&!o){if(s&&ee(t,"!ENTITY",e)){e+=7;let g,I;if([g,I,e]=this.readEntityExp(t,e+1,this.suppressValidationErr),I.indexOf("&")===-1){if(this.options.enabled!==!1&&this.options.maxEntityCount!=null&&i>=this.options.maxEntityCount)throw new Error(`Entity count (${i+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);let E=g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n[g]={regx:RegExp(`&${E};`,"g"),val:I},i++}}else if(s&&ee(t,"!ELEMENT",e)){e+=8;let{index:g}=this.readElementExp(t,e+1);e=g}else if(s&&ee(t,"!ATTLIST",e))e+=8;else if(s&&ee(t,"!NOTATION",e)){e+=9;let{index:g}=this.readNotationExp(t,e+1,this.suppressValidationErr);e=g}else if(ee(t,"!--",e))o=!0;else throw new Error("Invalid DOCTYPE");r++,a=""}else if(t[e]===">"){if(o?t[e-1]==="-"&&t[e-2]==="-"&&(o=!1,r--):r--,r===0)break}else t[e]==="["?s=!0:a+=t[e];if(r!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:n,i:e}}readEntityExp(t,e){e=cA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e])&&t[e]!=='"'&&t[e]!=="'";)e++;let i=t.substring(n,e);if(lt(i),e=cA(t,e),!this.suppressValidationErr){if(t.substring(e,e+6).toUpperCase()==="SYSTEM")throw new Error("External entities are not supported");if(t[e]==="%")throw new Error("Parameter entities are not supported")}let r="";if([e,r]=this.readIdentifierVal(t,e,"entity"),this.options.enabled!==!1&&this.options.maxEntitySize!=null&&r.length>this.options.maxEntitySize)throw new Error(`Entity "${i}" size (${r.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return e--,[i,r,e]}readNotationExp(t,e){e=cA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);!this.suppressValidationErr&&lt(i),e=cA(t,e);let r=t.substring(e,e+6).toUpperCase();if(!this.suppressValidationErr&&r!=="SYSTEM"&&r!=="PUBLIC")throw new Error(`Expected SYSTEM or PUBLIC, found "${r}"`);e+=r.length,e=cA(t,e);let s=null,o=null;if(r==="PUBLIC")[e,s]=this.readIdentifierVal(t,e,"publicIdentifier"),e=cA(t,e),(t[e]==='"'||t[e]==="'")&&([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"));else if(r==="SYSTEM"&&([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"),!this.suppressValidationErr&&!o))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:i,publicIdentifier:s,systemIdentifier:o,index:--e}}readIdentifierVal(t,e,n){let i="",r=t[e];if(r!=='"'&&r!=="'")throw new Error(`Expected quoted string, found "${r}"`);e++;let s=e;for(;e<t.length&&t[e]!==r;)e++;if(i=t.substring(s,e),t[e]!==r)throw new Error(`Unterminated ${n} value`);return e++,[e,i]}readElementExp(t,e){e=cA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);if(!this.suppressValidationErr&&!Se(i))throw new Error(`Invalid element name: "${i}"`);e=cA(t,e);let r="";if(t[e]==="E"&&ee(t,"MPTY",e))e+=4;else if(t[e]==="A"&&ee(t,"NY",e))e+=2;else if(t[e]==="("){e++;let s=e;for(;e<t.length&&t[e]!==")";)e++;if(r=t.substring(s,e),t[e]!==")")throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${t[e]}"`);return{elementName:i,contentModel:r.trim(),index:e}}readAttlistExp(t,e){e=cA(t,e);let n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);for(lt(i),e=cA(t,e),n=e;e<t.length&&!/\s/.test(t[e]);)e++;let r=t.substring(n,e);if(!lt(r))throw new Error(`Invalid attribute name: "${r}"`);e=cA(t,e);let s="";if(t.substring(e,e+8).toUpperCase()==="NOTATION"){if(s="NOTATION",e+=8,e=cA(t,e),t[e]!=="(")throw new Error(`Expected '(', found "${t[e]}"`);e++;let a=[];for(;e<t.length&&t[e]!==")";){let g=e;for(;e<t.length&&t[e]!=="|"&&t[e]!==")";)e++;let I=t.substring(g,e);if(I=I.trim(),!lt(I))throw new Error(`Invalid notation name: "${I}"`);a.push(I),t[e]==="|"&&(e++,e=cA(t,e))}if(t[e]!==")")throw new Error("Unterminated list of notations");e++,s+=" ("+a.join("|")+")"}else{let a=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;s+=t.substring(a,e);let g=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!g.includes(s.toUpperCase()))throw new Error(`Invalid attribute type: "${s}"`)}e=cA(t,e);let o="";return t.substring(e,e+8).toUpperCase()==="#REQUIRED"?(o="#REQUIRED",e+=8):t.substring(e,e+7).toUpperCase()==="#IMPLIED"?(o="#IMPLIED",e+=7):[e,o]=this.readIdentifierVal(t,e,"ATTLIST"),{elementName:i,attributeName:r,attributeType:s,defaultValue:o,index:e}}},cA=(A,t)=>{for(;t<A.length&&/\s/.test(A[t]);)t++;return t};function ee(A,t,e){for(let n=0;n<t.length;n++)if(t[n]!==A[e+n+1])return!1;return!0}function lt(A){if(Se(A))return A;throw new Error(`Invalid entity name ${A}`)}var Ul=/^[-+]?0x[a-fA-F0-9]+$/,Ml=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,Tl={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original"};function tr(A,t={}){if(t=Object.assign({},Tl,t),!A||typeof A!="string")return A;let e=A.trim();if(e.length===0)return A;if(t.skipLike!==void 0&&t.skipLike.test(e))return A;if(e==="0")return 0;if(t.hex&&Ul.test(e))return vl(e,16);if(isFinite(e)){if(e.includes("e")||e.includes("E"))return _l(A,e,t);{let n=Ml.exec(e);if(n){let i=n[1]||"",r=n[2],s=Hl(n[3]),o=i?A[r.length+1]===".":A[r.length]===".";if(!t.leadingZeros&&(r.length>1||r.length===1&&!o))return A;{let a=Number(e),g=String(a);if(a===0)return a;if(g.search(/[eE]/)!==-1)return t.eNotation?a:A;if(e.indexOf(".")!==-1)return g==="0"||g===s||g===`${i}${s}`?a:A;let I=r?s:e;return r?I===g||i+I===g?a:A:I===g||I===i+g?a:A}}else return A}}else return Kl(A,Number(e),t)}var Yl=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function _l(A,t,e){if(!e.eNotation)return A;let n=t.match(Yl);if(n){let i=n[1]||"",r=n[3].indexOf("e")===-1?"E":"e",s=n[2],o=i?A[s.length+1]===r:A[s.length]===r;return s.length>1&&o?A:s.length===1&&(n[3].startsWith(`.${r}`)||n[3][0]===r)?Number(t):s.length>0?e.leadingZeros&&!o?(t=(n[1]||"")+n[3],Number(t)):A:Number(t)}else return A}function Hl(A){return A&&A.indexOf(".")!==-1&&(A=A.replace(/0+$/,""),A==="."?A="0":A[0]==="."?A="0"+A:A[A.length-1]==="."&&(A=A.substring(0,A.length-1))),A}function vl(A,t){if(parseInt)return parseInt(A,t);if(Number.parseInt)return Number.parseInt(A,t);if(window&&window.parseInt)return window.parseInt(A,t);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}function Kl(A,t,e){let n=t===1/0;switch(e.infinity.toLowerCase()){case"null":return null;case"infinity":return t;case"string":return n?"Infinity":"-Infinity";default:return A}}function nr(A){return typeof A=="function"?A:Array.isArray(A)?t=>{for(let e of A)if(typeof e=="string"&&t===e||e instanceof RegExp&&e.test(t))return!0}:()=>!1}var te=class{constructor(t,e={}){this.pattern=t,this.separator=e.separator||".",this.segments=this._parse(t),this._hasDeepWildcard=this.segments.some(n=>n.type==="deep-wildcard"),this._hasAttributeCondition=this.segments.some(n=>n.attrName!==void 0),this._hasPositionSelector=this.segments.some(n=>n.position!==void 0)}_parse(t){let e=[],n=0,i="";for(;n<t.length;)t[n]===this.separator?n+1<t.length&&t[n+1]===this.separator?(i.trim()&&(e.push(this._parseSegment(i.trim())),i=""),e.push({type:"deep-wildcard"}),n+=2):(i.trim()&&e.push(this._parseSegment(i.trim())),i="",n++):(i+=t[n],n++);return i.trim()&&e.push(this._parseSegment(i.trim())),e}_parseSegment(t){let e={type:"tag"},n=null,i=t,r=t.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(r&&(i=r[1]+r[3],r[2])){let I=r[2].slice(1,-1);I&&(n=I)}let s,o=i;if(i.includes("::")){let I=i.indexOf("::");if(s=i.substring(0,I).trim(),o=i.substring(I+2).trim(),!s)throw new Error(`Invalid namespace in pattern: ${t}`)}let a,g=null;if(o.includes(":")){let I=o.lastIndexOf(":"),E=o.substring(0,I).trim(),B=o.substring(I+1).trim();["first","last","odd","even"].includes(B)||/^nth\(\d+\)$/.test(B)?(a=E,g=B):a=o}else a=o;if(!a)throw new Error(`Invalid segment pattern: ${t}`);if(e.tag=a,s&&(e.namespace=s),n)if(n.includes("=")){let I=n.indexOf("=");e.attrName=n.substring(0,I).trim(),e.attrValue=n.substring(I+1).trim()}else e.attrName=n.trim();if(g){let I=g.match(/^nth\((\d+)\)$/);I?(e.position="nth",e.positionValue=parseInt(I[1],10)):e.position=g}return e}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}};var Pl=new Set(["push","pop","reset","updateCurrent","restore"]),Ne=class{constructor(t={}){this.separator=t.separator||".",this.path=[],this.siblingStacks=[]}push(t,e=null,n=null){if(this._pathStringCache=null,this.path.length>0){let I=this.path[this.path.length-1];I.values=void 0}let i=this.path.length;this.siblingStacks[i]||(this.siblingStacks[i]=new Map);let r=this.siblingStacks[i],s=n?`${n}:${t}`:t,o=r.get(s)||0,a=0;for(let I of r.values())a+=I;r.set(s,o+1);let g={tag:t,position:a,counter:o};n!=null&&(g.namespace=n),e!=null&&(g.values=e),this.path.push(g)}pop(){if(this.path.length===0)return;this._pathStringCache=null;let t=this.path.pop();return this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1),t}updateCurrent(t){if(this.path.length>0){let e=this.path[this.path.length-1];t!=null&&(e.values=t)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(t){return this.path.length===0?void 0:this.path[this.path.length-1].values?.[t]}hasAttr(t){if(this.path.length===0)return!1;let e=this.path[this.path.length-1];return e.values!==void 0&&t in e.values}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(t,e=!0){let n=t||this.separator;if(n===this.separator&&e===!0){if(this._pathStringCache!==null&&this._pathStringCache!==void 0)return this._pathStringCache;let r=this.path.map(s=>e&&s.namespace?`${s.namespace}:${s.tag}`:s.tag).join(n);return this._pathStringCache=r,r}return this.path.map(r=>e&&r.namespace?`${r.namespace}:${r.tag}`:r.tag).join(n)}toArray(){return this.path.map(t=>t.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[]}matches(t){let e=t.segments;return e.length===0?!1:t.hasDeepWildcard()?this._matchWithDeepWildcard(e):this._matchSimple(e)}_matchSimple(t){if(this.path.length!==t.length)return!1;for(let e=0;e<t.length;e++){let n=t[e],i=this.path[e],r=e===this.path.length-1;if(!this._matchSegment(n,i,r))return!1}return!0}_matchWithDeepWildcard(t){let e=this.path.length-1,n=t.length-1;for(;n>=0&&e>=0;){let i=t[n];if(i.type==="deep-wildcard"){if(n--,n<0)return!0;let r=t[n],s=!1;for(let o=e;o>=0;o--){let a=o===this.path.length-1;if(this._matchSegment(r,this.path[o],a)){e=o-1,n--,s=!0;break}}if(!s)return!1}else{let r=e===this.path.length-1;if(!this._matchSegment(i,this.path[e],r))return!1;e--,n--}}return n<0}_matchSegment(t,e,n){if(t.tag!=="*"&&t.tag!==e.tag||t.namespace!==void 0&&t.namespace!=="*"&&t.namespace!==e.namespace)return!1;if(t.attrName!==void 0){if(!n||!e.values||!(t.attrName in e.values))return!1;if(t.attrValue!==void 0){let i=e.values[t.attrName];if(String(i)!==String(t.attrValue))return!1}}if(t.position!==void 0){if(!n)return!1;let i=e.counter??0;if(t.position==="first"&&i!==0)return!1;if(t.position==="odd"&&i%2!==1)return!1;if(t.position==="even"&&i%2!==0)return!1;if(t.position==="nth"&&i!==t.positionValue)return!1}return!0}snapshot(){return{path:this.path.map(t=>({...t})),siblingStacks:this.siblingStacks.map(t=>new Map(t))}}restore(t){this._pathStringCache=null,this.path=t.path.map(e=>({...e})),this.siblingStacks=t.siblingStacks.map(e=>new Map(e))}readOnly(){let t=this;return new Proxy(t,{get(e,n,i){if(Pl.has(n))return()=>{throw new TypeError(`Cannot call '${n}' on a read-only Matcher. Obtain a writable instance to mutate state.`)};let r=Reflect.get(e,n,i);return n==="path"||n==="siblingStacks"?Object.freeze(Array.isArray(r)?r.map(s=>s instanceof Map?Object.freeze(new Map(s)):Object.freeze({...s})):r):typeof r=="function"?r.bind(e):r},set(e,n){throw new TypeError(`Cannot set property '${String(n)}' on a read-only Matcher.`)},deleteProperty(e,n){throw new TypeError(`Cannot delete property '${String(n)}' from a read-only Matcher.`)}})}};function Ol(A,t){if(!A)return{};let e=t.attributesGroupName?A[t.attributesGroupName]:A;if(!e)return{};let n={};for(let i in e)if(i.startsWith(t.attributeNamePrefix)){let r=i.substring(t.attributeNamePrefix.length);n[r]=e[i]}else n[i]=e[i];return n}function Jl(A){if(!A||typeof A!="string")return;let t=A.indexOf(":");if(t!==-1&&t>0){let e=A.substring(0,t);if(e!=="xmlns")return e}}var ht=class{constructor(t){if(this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(e,n)=>Ba(n,10,"&#")},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(e,n)=>Ba(n,16,"&#x")}},this.addExternalEntities=ql,this.parseXml=zl,this.parseTextData=Vl,this.resolveNameSpace=Zl,this.buildAttributesMap=Wl,this.isItStopNode=ec,this.replaceEntitiesValue=$l,this.readStopNodeData=nc,this.saveTextToParentTag=Ac,this.addChild=Xl,this.ignoreAttributesFn=nr(this.options.ignoreAttributes),this.entityExpansionCount=0,this.currentExpandedLength=0,this.matcher=new Ne,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.options.stopNodes&&this.options.stopNodes.length>0){this.stopNodeExpressions=[];for(let e=0;e<this.options.stopNodes.length;e++){let n=this.options.stopNodes[e];typeof n=="string"?this.stopNodeExpressions.push(new te(n)):n instanceof te&&this.stopNodeExpressions.push(n)}}}};function ql(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e],i=n.replace(/[.\-+*:]/g,"\\.");this.lastEntities[n]={regex:new RegExp("&"+i+";","g"),val:A[n]}}}function Vl(A,t,e,n,i,r,s){if(A!==void 0&&(this.options.trimValues&&!n&&(A=A.trim()),A.length>0)){s||(A=this.replaceEntitiesValue(A,t,e));let o=this.options.jPath?e.toString():e,a=this.options.tagValueProcessor(t,A,o,i,r);return a==null?A:typeof a!=typeof A||a!==A?a:this.options.trimValues?gr(A,this.options.parseTagValue,this.options.numberParseOptions):A.trim()===A?gr(A,this.options.parseTagValue,this.options.numberParseOptions):A}}function Zl(A){if(this.options.removeNSPrefix){let t=A.split(":"),e=A.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(A=e+t[1])}return A}var jl=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Wl(A,t,e){if(this.options.ignoreAttributes!==!0&&typeof A=="string"){let n=yn(A,jl),i=n.length,r={},s=new Array(i),o=!1,a={};for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]),C=n[E][4];if(B.length&&C!==void 0){let Q=C;this.options.trimValues&&(Q=Q.trim()),Q=this.replaceEntitiesValue(Q,e,this.readonlyMatcher),s[E]=Q,a[B]=Q,o=!0}}o&&typeof t=="object"&&t.updateCurrent&&t.updateCurrent(a);let g=this.options.jPath?t.toString():this.readonlyMatcher,I=!1;for(let E=0;E<i;E++){let B=this.resolveNameSpace(n[E][1]);if(this.ignoreAttributesFn(B,g))continue;let C=this.options.attributeNamePrefix+B;if(B.length)if(this.options.transformAttributeName&&(C=this.options.transformAttributeName(C)),C=Ea(C,this.options),n[E][4]!==void 0){let Q=s[E],l=this.options.attributeValueProcessor(B,Q,g);l==null?r[C]=Q:typeof l!=typeof Q||l!==Q?r[C]=l:r[C]=gr(Q,this.options.parseAttributeValue,this.options.numberParseOptions),I=!0}else this.options.allowBooleanAttributes&&(r[C]=!0,I=!0)}if(!I)return;if(this.options.attributesGroupName){let E={};return E[this.options.attributesGroupName]=r,E}return r}}var zl=function(A){A=A.replace(/\r\n?/g,`
`);let t=new lA("!xml"),e=t,n="";this.matcher.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0;let i=new ct(this.options.processEntities);for(let r=0;r<A.length;r++)if(A[r]==="<")if(A[r+1]==="/"){let o=ne(A,">",r,"Closing Tag is not closed."),a=A.substring(r+2,o).trim();if(this.options.removeNSPrefix){let I=a.indexOf(":");I!==-1&&(a=a.substr(I+1))}a=ir(this.options.transformTagName,a,"",this.options).tagName,e&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher));let g=this.matcher.getCurrentTag();if(a&&this.options.unpairedTags.indexOf(a)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${a}>`);g&&this.options.unpairedTags.indexOf(g)!==-1&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,e=this.tagsNodeStack.pop(),n="",r=o}else if(A[r+1]==="?"){let o=rr(A,r,!1,"?>");if(!o)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,e,this.readonlyMatcher),!(this.options.ignoreDeclaration&&o.tagName==="?xml"||this.options.ignorePiTags)){let a=new lA(o.tagName);a.add(this.options.textNodeName,""),o.tagName!==o.tagExp&&o.attrExpPresent&&(a[":@"]=this.buildAttributesMap(o.tagExp,this.matcher,o.tagName)),this.addChild(e,a,this.readonlyMatcher,r)}r=o.closeIndex+1}else if(A.substr(r+1,3)==="!--"){let o=ne(A,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){let a=A.substring(r+4,o-2);n=this.saveTextToParentTag(n,e,this.readonlyMatcher),e.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}r=o}else if(A.substr(r+1,2)==="!D"){let o=i.readDocType(A,r);this.docTypeEntities=o.entities,r=o.i}else if(A.substr(r+1,2)==="!["){let o=ne(A,"]]>",r,"CDATA is not closed.")-2,a=A.substring(r+9,o);n=this.saveTextToParentTag(n,e,this.readonlyMatcher);let g=this.parseTextData(a,e.tagname,this.readonlyMatcher,!0,!1,!0,!0);g==null&&(g=""),this.options.cdataPropName?e.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]):e.add(this.options.textNodeName,g),r=o+2}else{let o=rr(A,r,this.options.removeNSPrefix);if(!o){let y=A.substring(Math.max(0,r-50),Math.min(A.length,r+50));throw new Error(`readTagExp returned undefined at position ${r}. Context: "${y}"`)}let a=o.tagName,g=o.rawTagName,I=o.tagExp,E=o.attrExpPresent,B=o.closeIndex;if({tagName:a,tagExp:I}=ir(this.options.transformTagName,a,I,this.options),this.options.strictReservedNames&&(a===this.options.commentPropName||a===this.options.cdataPropName||a===this.options.textNodeName||a===this.options.attributesGroupName))throw new Error(`Invalid tag name: ${a}`);e&&n&&e.tagname!=="!xml"&&(n=this.saveTextToParentTag(n,e,this.readonlyMatcher,!1));let C=e;C&&this.options.unpairedTags.indexOf(C.tagname)!==-1&&(e=this.tagsNodeStack.pop(),this.matcher.pop());let Q=!1;I.length>0&&I.lastIndexOf("/")===I.length-1&&(Q=!0,a[a.length-1]==="/"?(a=a.substr(0,a.length-1),I=a):I=I.substr(0,I.length-1),E=a!==I);let l=null,h={},u;u=Jl(g),a!==t.tagname&&this.matcher.push(a,{},u),a!==I&&E&&(l=this.buildAttributesMap(I,this.matcher,a),l&&(h=Ol(l,this.options))),a!==t.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode(this.stopNodeExpressions,this.matcher));let p=r;if(this.isCurrentNodeStopNode){let y="";if(Q)r=o.closeIndex;else if(this.options.unpairedTags.indexOf(a)!==-1)r=o.closeIndex;else{let c=this.readStopNodeData(A,g,B+1);if(!c)throw new Error(`Unexpected end of ${g}`);r=c.i,y=c.tagContent}let f=new lA(a);l&&(f[":@"]=l),f.add(this.options.textNodeName,y),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(e,f,this.readonlyMatcher,p)}else{if(Q){({tagName:a,tagExp:I}=ir(this.options.transformTagName,a,I,this.options));let y=new lA(a);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else if(this.options.unpairedTags.indexOf(a)!==-1){let y=new lA(a);l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),this.matcher.pop(),this.isCurrentNodeStopNode=!1,r=o.closeIndex;continue}else{let y=new lA(a);if(this.tagsNodeStack.length>this.options.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(e),l&&(y[":@"]=l),this.addChild(e,y,this.readonlyMatcher,p),e=y}n="",r=B}}else n+=A[r];return t.child};function Xl(A,t,e,n){this.options.captureMetaData||(n=void 0);let i=this.options.jPath?e.toString():e,r=this.options.updateTag(t.tagname,i,t[":@"]);r===!1||(typeof r=="string"&&(t.tagname=r),A.addChild(t,n))}function $l(A,t,e){let n=this.options.processEntities;if(!n||!n.enabled)return A;if(n.allowedTags){let i=this.options.jPath?e.toString():e;if(!(Array.isArray(n.allowedTags)?n.allowedTags.includes(t):n.allowedTags(t,i)))return A}if(n.tagFilter){let i=this.options.jPath?e.toString():e;if(!n.tagFilter(t,i))return A}for(let i of Object.keys(this.docTypeEntities)){let r=this.docTypeEntities[i],s=A.match(r.regx);if(s){if(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions)throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);let o=A.length;if(A=A.replace(r.regx,r.val),n.maxExpandedLength&&(this.currentExpandedLength+=A.length-o,this.currentExpandedLength>n.maxExpandedLength))throw new Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${n.maxExpandedLength}`)}}if(A.indexOf("&")===-1)return A;for(let i of Object.keys(this.lastEntities)){let r=this.lastEntities[i],s=A.match(r.regex);if(s&&(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}if(A.indexOf("&")===-1)return A;if(this.options.htmlEntities)for(let i of Object.keys(this.htmlEntities)){let r=this.htmlEntities[i],s=A.match(r.regex);if(s&&(this.entityExpansionCount+=s.length,n.maxTotalExpansions&&this.entityExpansionCount>n.maxTotalExpansions))throw new Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${n.maxTotalExpansions}`);A=A.replace(r.regex,r.val)}return A=A.replace(this.ampEntity.regex,this.ampEntity.val),A}function Ac(A,t,e,n){return A&&(n===void 0&&(n=t.child.length===0),A=this.parseTextData(A,t.tagname,e,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,n),A!==void 0&&A!==""&&t.add(this.options.textNodeName,A),A=""),A}function ec(A,t){if(!A||A.length===0)return!1;for(let e=0;e<A.length;e++)if(t.matches(A[e]))return!0;return!1}function tc(A,t,e=">"){let n,i="";for(let r=t;r<A.length;r++){let s=A[r];if(n)s===n&&(n="");else if(s==='"'||s==="'")n=s;else if(s===e[0])if(e[1]){if(A[r+1]===e[1])return{data:i,index:r}}else return{data:i,index:r};else s==="	"&&(s=" ");i+=s}}function ne(A,t,e,n){let i=A.indexOf(t,e);if(i===-1)throw new Error(n);return i+t.length-1}function rr(A,t,e,n=">"){let i=tc(A,t+1,n);if(!i)return;let r=i.data,s=i.index,o=r.search(/\s/),a=r,g=!0;o!==-1&&(a=r.substring(0,o),r=r.substring(o+1).trimStart());let I=a;if(e){let E=a.indexOf(":");E!==-1&&(a=a.substr(E+1),g=a!==i.data.substr(E+1))}return{tagName:a,tagExp:r,closeIndex:s,attrExpPresent:g,rawTagName:I}}function nc(A,t,e){let n=e,i=1;for(;e<A.length;e++)if(A[e]==="<")if(A[e+1]==="/"){let r=ne(A,">",e,`${t} is not closed`);if(A.substring(e+2,r).trim()===t&&(i--,i===0))return{tagContent:A.substring(n,e),i:r};e=r}else if(A[e+1]==="?")e=ne(A,"?>",e+1,"StopNode is not closed.");else if(A.substr(e+1,3)==="!--")e=ne(A,"-->",e+3,"StopNode is not closed.");else if(A.substr(e+1,2)==="![")e=ne(A,"]]>",e,"StopNode is not closed.")-2;else{let r=rr(A,e,">");r&&((r&&r.tagName)===t&&r.tagExp[r.tagExp.length-1]!=="/"&&i++,e=r.closeIndex)}}function gr(A,t,e){if(t&&typeof A=="string"){let n=A.trim();return n==="true"?!0:n==="false"?!1:tr(A,e)}else return na(A)?A:""}function Ba(A,t,e){let n=Number.parseInt(A,t);return n>=0&&n<=1114111?String.fromCodePoint(n):e+A+";"}function ir(A,t,e,n){if(A){let i=A(t);e===t&&(e=i),t=i}return t=Ea(t,n),{tagName:t,tagExp:e}}function Ea(A,t){if(mn.includes(A))throw new Error(`[SECURITY] Invalid name: "${A}" is a reserved JavaScript keyword that could cause prototype pollution`);return Et.includes(A)?t.onDangerousProperty(A):A}var or=lA.getMetaDataSymbol();function ic(A,t){if(!A||typeof A!="object")return{};if(!t)return A;let e={};for(let n in A)if(n.startsWith(t)){let i=n.substring(t.length);e[i]=A[n]}else e[n]=A[n];return e}function Ir(A,t,e,n){return Qa(A,t,e,n)}function Qa(A,t,e,n){let i,r={};for(let s=0;s<A.length;s++){let o=A[s],a=rc(o);if(a!==void 0&&a!==t.textNodeName){let g=ic(o[":@"]||{},t.attributeNamePrefix);e.push(a,g)}if(a===t.textNodeName)i===void 0?i=o[a]:i+=""+o[a];else{if(a===void 0)continue;if(o[a]){let g=Qa(o[a],t,e,n),I=oc(g,t);if(o[":@"]?gc(g,o[":@"],n,t):Object.keys(g).length===1&&g[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?g=g[t.textNodeName]:Object.keys(g).length===0&&(t.alwaysCreateTextNode?g[t.textNodeName]="":g=""),o[or]!==void 0&&typeof g=="object"&&g!==null&&(g[or]=o[or]),r[a]!==void 0&&Object.prototype.hasOwnProperty.call(r,a))Array.isArray(r[a])||(r[a]=[r[a]]),r[a].push(g);else{let E=t.jPath?n.toString():n;t.isArray(a,E,I)?r[a]=[g]:r[a]=g}a!==void 0&&a!==t.textNodeName&&e.pop()}}}return typeof i=="string"?i.length>0&&(r[t.textNodeName]=i):i!==void 0&&(r[t.textNodeName]=i),r}function rc(A){let t=Object.keys(A);for(let e=0;e<t.length;e++){let n=t[e];if(n!==":@")return n}}function gc(A,t,e,n){if(t){let i=Object.keys(t),r=i.length;for(let s=0;s<r;s++){let o=i[s],a=o.startsWith(n.attributeNamePrefix)?o.substring(n.attributeNamePrefix.length):o,g=n.jPath?e.toString()+"."+a:e;n.isArray(o,g,!0,!0)?A[o]=[t[o]]:A[o]=t[o]}}}function oc(A,t){let{textNodeName:e}=t,n=Object.keys(A).length;return!!(n===0||n===1&&(A[e]||typeof A[e]=="boolean"||A[e]===0))}var ke=class{constructor(t){this.externalEntities={},this.options=Ca(t)}parse(t,e){if(typeof t!="string"&&t.toString)t=t.toString();else if(typeof t!="string")throw new Error("XML data is accepted in String or Bytes[] form.");if(e){e===!0&&(e={});let r=Ia(t,e);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}let n=new ht(this.options);n.addExternalEntities(this.externalEntities);let i=n.parseXml(t);return this.options.preserveOrder||i===void 0?i:Ir(i,this.options,n.matcher,n.readonlyMatcher)}addEntity(t,e){if(e.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(e==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}static getMetaDataSymbol(){return lA.getMetaDataSymbol()}};function Sn(A,t){let e=0,n=0,i=0;for(let r=1;r<A.length;r+=1){let s=A[r-1],o=A[r];i+=dn(s,o);let a=t(s),g=t(o);if(a==null||g==null)continue;let I=g-a;I>0?e+=I:n+=Math.abs(I)}return{distanceMeters:i,totalAscent:e,totalDescent:n}}var Ic=new ke({attributeNamePrefix:"",ignoreAttributes:!1,parseTagValue:!1,removeNSPrefix:!0,trimValues:!0});function ft(A){return A===void 0?[]:Array.isArray(A)?A:[A]}function la(A){let t=Number(A.lat),e=Number(A.lon);if(!Number.isFinite(t)||!Number.isFinite(e))return null;let n=A.ele!==void 0?Number(A.ele):null;return{lat:t,lon:e,ele:Number.isFinite(n)?n:null}}function ac(A){let t=ft(A.trk),e=ft(A.rte).flatMap(i=>ft(i.rtept).map(la).filter(Boolean)),n=t.flatMap(i=>ft(i.trkseg).flatMap(r=>ft(r.trkpt).map(la).filter(Boolean)));return n.length>0?n:e}function sc(A){return/^https?:\/\//i.test(A)}async function ar(A){if(sc(A)){let e=await fetch(A);if(!e.ok)throw new Error(`Failed to fetch GPX file: ${e.status} ${e.statusText}`);return await e.text()}let t=A.endsWith(".gpx")?[A]:[A,`${A}.gpx`];for(let e of t)if(await X.fileExists(e)){let n=await X.readFile(e);return new TextDecoder().decode(n)}throw new Error(`GPX file not found in space: ${A}`)}function sr(A,t){let e=Ic.parse(t),n=e.gpx??e,i=ac(n);if(i.length<2)throw new Error("The GPX file did not contain a usable track or route.");let r=ZI(i),s=Sn(i,o=>o.ele);return{sourceUrl:A,points:i,bounds:r,distanceMeters:s.distanceMeters,totalAscent:s.totalAscent,totalDescent:s.totalDescent}}async function ca(A){let t=await ar(A);return sr(A,t)}var Cc="https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png";var ha={low:{label:"low",initialZoom:11,maxTileRequests:9,maxTextureDimension:1024},standard:{label:"standard",initialZoom:12,maxTileRequests:16,maxTextureDimension:2048},high:{label:"high",initialZoom:13,maxTileRequests:36,maxTextureDimension:4096},ultra:{label:"ultra",initialZoom:14,maxTileRequests:64,maxTextureDimension:8192}},pA=256,fa=6,da=16384,Bc=12e5,Cr=512,Ec=6,Qc=.82;function lc(A){return ha[A]??ha.standard}function ma(){return typeof document<"u"&&typeof document.createElement=="function"}function cc(){return typeof Image<"u"}function hc(){return typeof OffscreenCanvas<"u"&&typeof createImageBitmap=="function"||ma()}function fc(A){return Math.max(-85.05112878,Math.min(85.05112878,A))}function ua(A,t){return(A+180)/360*2**t}function wa(A,t){let e=fc(A)*Math.PI/180;return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t}function pa(A,t){let e=ua(A.minLon,t),n=ua(A.maxLon,t),i=wa(A.maxLat,t),r=wa(A.minLat,t),s=Math.floor(e),o=Math.max(s,Math.ceil(n)-1),a=Math.floor(i),g=Math.max(a,Math.ceil(r)-1),I=o-s+1,E=g-a+1;return{zoom:t,west:e,east:n,north:i,south:r,tileXStart:s,tileXEnd:o,tileYStart:a,tileYEnd:g,tileColumns:I,tileRows:E,tileCount:I*E}}function dc(A,t){return A.tileCount<=t.maxTileRequests&&A.tileColumns*pA<=da&&A.tileRows*pA<=da}function uc(A,t){let e=pa(A,fa);for(let n=t.initialZoom;n>=fa;n-=1){let i=pa(A,n);if(dc(i,t))return i;e=i}return e}function Br(A,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(A,t);if(ma()){let e=document.createElement("canvas");return e.width=A,e.height=t,e}throw new Error("Canvas raster support is unavailable in this runtime.")}function Er(A){return A.getContext("2d")}function wc(A){return new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load raster tile ${A}`)),n.src=A})}async function pc(A){let t=await fetch(A);if(!t.ok)throw new Error(`Failed to load raster tile ${A}: HTTP ${t.status}`);return new Uint8Array(await t.arrayBuffer())}async function ya(A){let t=new Blob([A],{type:"image/png"});if(typeof createImageBitmap=="function")return createImageBitmap(t);if(cc()&&typeof URL<"u"&&typeof URL.createObjectURL=="function"){let e=URL.createObjectURL(t);try{return await wc(e)}finally{URL.revokeObjectURL(e)}}throw new Error("Tile image decoding is unavailable in this runtime.")}async function yc(A,t,e,n){let i=VI(A,t,e),r=await PI(i);if(r)return ya(r);let s=await pc(n),o=MI(i,`z${A}-x${t}-y${e}`);return await OI(o.key,o.path,s),ya(s)}async function mc(A,t,e){if("toDataURL"in A&&typeof A.toDataURL=="function")return A.toDataURL(t,e);if("convertToBlob"in A&&typeof A.convertToBlob=="function"){let n=await A.convertToBlob({type:t,quality:e}),i=new Uint8Array(await n.arrayBuffer());return pt(i,n.type||t)}throw new Error("Canvas export is unavailable in this runtime.")}function Dc(A,t,e){let n=Br(t,e),i=Er(n);if(!i)throw new Error("Canvas resize context is unavailable in this runtime.");return i.drawImage(A,0,0,t,e),n}async function Sc(A){let t=A;for(;;){let e=await mc(t,"image/webp",Qc);if(e.length<=Bc||Math.max(t.width,t.height)<=Cr)return{dataUrl:e,mimeType:Yn(e),width:t.width,height:t.height};let n=Math.max(Cr,Math.round(t.width*.75)),i=Math.max(Cr,Math.round(t.height*.75));if(n===t.width&&i===t.height)return{dataUrl:e,mimeType:Yn(e),width:t.width,height:t.height};t=Dc(t,n,i)}}function Nc(A){let t=2**A.zoom,e=[];for(let n=A.tileYStart;n<=A.tileYEnd;n+=1)for(let i=A.tileXStart;i<=A.tileXEnd;i+=1){let r=(i%t+t)%t,s=Math.max(0,Math.min(t-1,n));e.push({tileX:i,tileY:n,wrappedX:r,clampedY:s,url:Cc.replace("{z}",String(A.zoom)).replace("{x}",String(r)).replace("{y}",String(s))})}return e}async function kc(A,t){let e=new Array(A.length),n=0;async function i(){for(;n<A.length;){let s=n;n+=1,e[s]=await A[s]()}}let r=Math.max(1,Math.min(t,A.length));return await Promise.all(Array.from({length:r},()=>i())),e}async function Rc(A){let t=Nc(A).map(e=>async()=>({image:await yc(A.zoom,e.wrappedX,e.clampedY,e.url),tileX:e.tileX,tileY:e.tileY}));return kc(t,Ec)}function Gc(A,t){let e=Br(A.tileColumns*pA,A.tileRows*pA),n=Er(e);if(!n)return null;for(let i of t)n.drawImage(i.image,(i.tileX-A.tileXStart)*pA,(i.tileY-A.tileYStart)*pA,pA,pA);return e}function Fc(A,t,e){let n=(t.west-t.tileXStart)*pA,i=(t.north-t.tileYStart)*pA,r=Math.max(1,(t.east-t.west)*pA),s=Math.max(1,(t.south-t.north)*pA),o=Math.min(1,e.maxTextureDimension/Math.max(r,s)),a=Br(Math.max(1,Math.round(r*o)),Math.max(1,Math.round(s*o))),g=Er(a);return g?(g.drawImage(A,n,i,r,s,0,0,a.width,a.height),a):null}async function Da(A,t){if(!hc())return null;let e=lc(t),n=uc(A,e),i=await Rc(n),r=Gc(n,i);if(!r)return null;let s=Fc(r,n,e);if(!s)return null;let o=await Sc(s);return{width:o.width,height:o.height,mimeType:o.mimeType,resolution:e.label,dataUrl:o.dataUrl}}var bc=50,ka=180;function Uc(A,t){let e=Xi(A),n=$i(e.lat),i=mA(t*.08,900,5e3),r=i/n.lat,s=i/n.lon,o=Math.max(wn(A)*.18,r),a=Math.max(un(A)*.18,s),g=ka/n.lat,I=ka/n.lon;return jI(A,o+g,a+I)}function Mc(A,t){let e=Math.max(1,un(A)*t.lon),n=Math.max(1,wn(A)*t.lat),i=e/n;return i>=1?{width:160,height:mA(Math.round(160/i),72,160)}:{width:mA(Math.round(160*i),72,160),height:160}}function Tc(A,t,e){return{lat:De(A.lat,t.lat,e),lon:De(A.lon,t.lon,e),ele:A.ele!=null&&t.ele!=null?De(A.ele,t.ele,e):A.ele??t.ele??null}}function Yc(A,t){if(A.length<=2)return A;let e=[A[0]],n=t,i=0;for(let o=1;o<A.length;o+=1){let a=A[o-1],g=A[o],I=dn(a,g);if(!(I<=0)){for(;i+I>=n;){let E=(n-i)/I;e.push(Tc(a,g,E)),n+=t}i+=I}}let r=A[A.length-1],s=e[e.length-1];return(s.lat!==r.lat||s.lon!==r.lon)&&e.push(r),e}function _c(A,t,e,n,i){let r=null;return A.map(s=>{let a=er(t,s.lat,s.lon)??r??e;r=a;let g=WI(s,n,i);return{x:g.x,z:g.z,y:a,lat:s.lat,lon:s.lon,elevation:a}})}async function Ra(A,t={}){let e=A.sourceUrl,n=Uc(A.bounds,A.distanceMeters),i=Xi(n),r=$i(i.lat),s=Mc(n,r),o=Aa(n);if(o.length>16)throw new Error(`The track spans ${o.length} Copernicus tiles. This preview caps builds at ${16} tiles.`);let a={lon:s.width/Math.max(un(n),.01),lat:s.height/Math.max(wn(n),.01)},I=(await Promise.allSettled(o.map(c=>ea(c,n,a)))).filter(c=>c.status==="fulfilled").map(c=>c.value).filter(Boolean);if(I.length===0)throw new Error("No Copernicus DEM tiles were available for the GPX area.");let E=o.length-I.length,B=E>0?`Terrain preview may be incomplete because ${E} of ${o.length} Copernicus DEM tiles failed to load.`:void 0,C=[],Q=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let c=0;c<s.height;c+=1){let w=s.height===1?0:c/(s.height-1),d=De(n.maxLat,n.minLat,w);for(let S=0;S<s.width;S+=1){let k=s.width===1?0:S/(s.width-1),D=De(n.minLon,n.maxLon,k),G=er(I,d,D)??0;C.push(G),Q=Math.min(Q,G),l=Math.max(l,G)}}let h=Yc(A.points,bc),u=_c(h,I,Q,i,r),p=Sn(u,c=>c.elevation),y=e.split("/").filter(Boolean).pop()??"GPX track",f;try{f=await Da(n,t.hikingMapResolution??qA)??void 0}catch(c){console.warn("Unable to bake OpenHikingMap imagery into .cimal pack.",c),f=void 0}return{title:y,sourceUrl:e,warning:B,bounds:n,center:i,metersPerDegree:r,grid:{width:s.width,height:s.height,elevations:C,minElevation:Q,maxElevation:l},track:u,bakedHikingMap:f,stats:{distanceKm:p.distanceMeters/1e3||A.distanceMeters/1e3,totalAscent:p.totalAscent||A.totalAscent,totalDescent:p.totalDescent||A.totalDescent,pointCount:A.points.length,tileCount:I.length}}}async function Ga(A,t={}){let e=await ca(A);return Ra(e,t)}async function Fa(A,t,e={}){return Ra(sr(A,t),e)}function Hc(A){return`
\`\`\`${Sr}
${A}
\`\`\`
`}function vc(A){let t=A;if(/^https?:\/\//i.test(A))try{t=new URL(A).pathname}catch{t=A}return`Library/Cimal/${(t.split(/[\\/]/).filter(Boolean).pop()?.replace(/\.gpx$/i,"")?.replace(/\.[^.]+$/u,"")||"track").replaceAll(/[^A-Za-z0-9._-]+/g,"-")}.cimal`}async function Qr(){let A=await BA.prompt("GPX URL or space path");if(!A)return;let t=Mn(A),e=await BA.prompt("Output .cimal path",vc(t));if(!e)return;let n=wt(e),i=await BA.prompt("Baked hiking-map resolution",qA);if(!i)return;let r=Tn(i),s=await Ga(t,{hikingMapResolution:r}),o=mt(s);await X.writeFile(n,o),await BA.flashNotification(`Built ${n}.`)}async function lr(){let A=await BA.prompt("Cimal pack path");if(!A)return;let t=wt(A);await BA.insertAtCursor(Hc(t),!0),await Fe.refreshAll(),await BA.flashNotification("Inserted cimal widget.")}async function cr(){await Fe.refreshAll(),await BA.flashNotification("Refreshed cimal widgets.")}var xa=!1;async function hr(){if(!xa){xa=!0;try{await BA.reloadConfigAndCommands()}catch{}}}var La=`<!DOCTYPE html>
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
  if (activeTheme2.useHikingMap) {
    if (payload2.bakedHikingMap) {
      loadPackedTexture(THREE, renderer, payload2.bakedHikingMap.dataUrl).then((texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        loadedTexture?.dispose();
        loadedTexture = texture;
        terrainLayer.applyBakedTexture(texture);
        styleAttribution.innerHTML = \`\${OPEN_HIKING_ATTRIBUTION} <span>Baked \${escapeText(payload2.bakedHikingMap?.resolution ?? "standard")} texture.</span>\`;
      }).catch((error) => {
        console.warn(error);
        styleAttribution.textContent = OPEN_HIKING_FALLBACK;
      });
    } else {
      styleAttribution.textContent = OPEN_HIKING_FALLBACK;
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
function loadPackedTexture(THREE, renderer, dataUrl) {
  const loader = new THREE.TextureLoader();
  return loader.loadAsync(dataUrl).then((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    return texture;
  });
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
    useHikingMap: false,
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
    useHikingMap: true,
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
    useHikingMap: false,
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
    useHikingMap: false,
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
    useHikingMap: false,
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
    useHikingMap: false,
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
    useHikingMap: false,
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
    useHikingMap: false,
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
`;var Kc="__CIMAL_VIEWER_TITLE__",Pc="__CIMAL_VIEWER_PAYLOAD__",Oc="__CIMAL_VIEWER_CONFIG__",Jc=12e5;function qc(A){return A.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ba(A){return JSON.stringify(A).replaceAll("<","\\u003c")}function fr(A,t,e){return A.split(t).join(e)}function Vc(A){if(!("bakedHikingMap"in A)||!A.bakedHikingMap||A.bakedHikingMap.dataUrl.length<=Jc)return A;let t="The baked hiking-map texture in this pack is too large to embed in the widget iframe. Rebuild the pack at a lower hiking-map resolution to display it here.";return{...A,bakedHikingMap:void 0,warning:A.warning?`${A.warning} ${t}`:t}}function dr(A,t=Ue){let e=typeof t=="string"?{...Ue,style:t}:{style:t.style??Ue.style,hikingMapResolution:t.hikingMapResolution??Ue.hikingMapResolution},n=fr(fr(fr(La,Kc,qc(A.title)),Oc,ba(e)),Pc,ba(Vc(A)));return`data:text/html;charset=utf-8,${encodeURIComponent(n)}`}function Zc(A,t,e){return{title:A,message:t,details:e}}var Ua=960,jc=600,Wc=340;function ur(A,t,e){return{url:dr(Zc(A,t),e),width:Ua,height:Wc}}function Ma(A,t){return{url:dr(A,t),width:Ua,height:jc}}async function zc(A,t){let e=await X.readFile(A),n=vn(e);return Ma(n,t)}async function Xc(A,t){let e=await ar(A),n=qI(A,e,t),i=await HI(n);if(i)try{return vn(i)}catch(o){if(!qr(o))throw o;await KI(n),i=null}let r=await Fa(A,e,{hikingMapResolution:t}),s=UI(n,A);return await vI(s.key,s.path,mt(r)),r}async function $c(A,t){let e=await Xc(A,t.hikingMapResolution);return Ma(e,t)}async function wr(A){let t;try{t=Yr(A)}catch(s){let o=s instanceof Error?s.message:"Unknown error";return ur("Cimal widget configuration error",o)}let{source:e,hasExplicitHikingMapResolution:n,...i}=t,r;try{r=_r(t)}catch(s){let o=s instanceof Error?s.message:"Unknown error";return ur("Cimal widget configuration error",o,i)}try{return r.kind==="pack"?await zc(r.packPath,i):await $c(r.gpxSource,i)}catch(s){let o=s instanceof Error?s.message:"Unknown error",a=r.kind==="pack"?"Cimal pack preview failed":"GPX terrain preview failed";return ur(a,o,i)}}var Ta={buildCimalPackFromGpx:Qr,insertGpxTerrainBlock:lr,refreshGpxTerrainWidgets:cr,renderGpxTerrainWidget:wr,syncGpxTerrainRuntime:hr},Ya={name:"cimal",requiredPermissions:["fetch"],functions:{buildCimalPackFromGpx:{path:"src/index.ts:buildCimalPackFromGpx",command:{name:"Cimal: Build pack from GPX"},slashCommand:{name:"cimal-build",description:"Build a .cimal pack from a GPX source"}},insertGpxTerrainBlock:{path:"src/index.ts:insertGpxTerrainBlock",command:{name:"Cimal: Insert widget"},slashCommand:{name:"cimal",description:"Insert a cimal widget for an existing .cimal pack"}},refreshGpxTerrainWidgets:{path:"src/index.ts:refreshGpxTerrainWidgets",command:{name:"Cimal: Refresh widgets"},slashCommand:{name:"cimal-refresh",description:"Refresh rendered cimal widgets"}},renderGpxTerrainWidget:{path:"src/index.ts:renderGpxTerrainWidget",codeWidget:"cimal",renderMode:"iframe"},syncGpxTerrainRuntime:{path:"src/index.ts:syncGpxTerrainRuntime",events:["plugs:loaded","editor:pageLoaded"]}},assets:{}},U0={manifest:Ya,functionMapping:Ta};Dr(Ta,Ya,self.postMessage);export{U0 as plug};
/*! Bundled license information:

pako/dist/pako.esm.mjs:
  (*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) *)

lerc/LercDecode.js:
  (* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve *)
*/
//# sourceMappingURL=cimal.plug.js.map
