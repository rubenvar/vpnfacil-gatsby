import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --maxWidth: 1440px;
  --widerWidth: 1280px;
  --headerHeight: 56px;
  --maxWidthBlog: 720px;

  --defSidePadding: 30px;

  --grey100: hsl(160, 15%, 99%);
  --grey200: hsl(160, 10%, 90%);
  --grey300: hsl(160, 5%, 70%);
  --grey500: hsl(160, 5%, 50%);
  --grey700: hsl(160, 5%, 30%);
  --grey900: hsl(160, 15%, 9%);

  --primary100: hsl(270, 90%, 90%);
  --primary300: hsl(270, 85%, 80%);
  --primary400: hsl(270, 80%, 75%);
  --primary500: hsl(270, 75%, 70%);
  --primary600: hsl(270, 70%, 60%);
  --primary700: hsl(270, 80%, 50%);
  --primary800: hsl(270, 89%, 30%);

  --secondary100: hsl(160, 59%, 95%);
  --secondary200: hsl(160, 59%, 79%);
  --secondary300: hsl(160, 59%, 53%);
  --secondary500: hsl(160, 65%, 44%);
  --secondary600: hsl(160, 70%, 34%);
  --secondary700: hsl(160, 65%, 25%);

  --winner500: #ffcf00;

  --cardRadius: 15px;
  --buttonRadius: 5px;

  --boxShadow: 0 2px 3px rgba(0, 0, 0, 0.15);

  --mainFont: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  --specialFont: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::-moz-selection {
  /* Code for Firefox */
  background: var(--secondary300);
}

::selection {
  background: var(--secondary300);
}

body {
  margin: 0;
  font-family: var(--mainFont);
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  color: var(--grey900);
}

@media only screen and (min-width: 480px) {
  body {
    font-size: 16px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5em 0;
  font-weight: 400;
  line-height: 1.2;
}

h1 {
  font-size: 40px;
}

a {
  color: inherit;
  transition: all 0.3s;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  margin: 0;
}

blockquote {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  border-left: 3px solid var(--secondary300);
  margin-left: 30px;
  padding-left: 10px;
}

hr {
  width: 50%;
  margin: 30px auto;
  border: none;
  border-bottom: 1px solid var(--secondary600);
}

img {
  max-width: 100%;
}

.blog-post h2,
.blog-post h3,
.blog-post h4 {
  font-family: var(--specialFont);
  font-weight: 700;
  color: var(--secondary700);
}

.blog-post h2 {
  margin: 45px 0 20px;
  font-size: 28px;
}

.blog-post h3 {
  margin: 35px 0 20px;
  font-size: 25px;
}

.blog-post h4 {
  margin: 25px 0 15px;
  font-size: 22px;
}

@media only screen and (min-width: 640px) {
  .blog-post h2 {
    font-size: 34px;
  }
  .blog-post h3 {
    font-size: 28px;
  }
  .blog-post h4 {
    font-size: 25px;
  }
  .blog-post p {
    margin-bottom: 26px;
  }
}

.blog-post p {
  margin: 0 0 22px;
}

.blog-post a {
  color: var(--primary700);
  transition: all 0.3s;
}

.blog-post a:hover {
  color: var(--grey900);
}

.blog-post img {
  display: block;
  margin: 0 auto 26px;
  max-width: 100%;
}

.blog-post ul {
  padding: 0 30px;
  margin: 0 0 26px;
  list-style: unset;
}

.blog-post li {
  margin: 0 0 7px;
}

.blog-post .emphasis {
  font-size: 21px;
  text-shadow: 0 0 7px hsla(160, 59%, 53%, 0.4);
}

.blog-post .box {
  border-left: 3px solid var(--primary500);
  padding: 10px 14px 12px 18px;
  margin: 30px 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.blog-post .box p {
  margin-bottom: 30px;
  color: var(--primary800);
}

.blog-post table {
  border-collapse: collapse;
  font-size: 16px;
  margin-bottom: 26px;
}

`;
