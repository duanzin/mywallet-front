import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	background-color: #8C11BE;
	line-height: 1;
}
h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
h2 {
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;
}
input {
      width: 326px;
      height: 58px;
      border: none;
      border-radius: 5px;
      padding-left: 15px;
      ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
      }
      :disabled {
        background: #f2f2f2;
        color: #afafaf;
      }
    }
button {
      width: 326px;
      height: 46px;
      background: #a328d6;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #ffffff;
    }
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
strong {
	font-weight: bold;
}
`;

export default GlobalStyle;
