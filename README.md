# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [CSS grid](#css-grid)
      - [Significant advantages for this project:](#significant-advantages-for-this-project)
      - [Learn Background blend mode](#learn-background-blend-mode)
      - [emmet](#emmet)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot
![Desktop screenshot](./src/images/desktop-screenshoot.PNG)
![Mobile screenshot](./src/images/mobile-screenshoot.PNG)
### Links

- Live Site URL: [royeradames-stas-preview-card.vercel.app](royeradames-stas-preview-card.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Sass
  

### What I learned

This section to recap over some of my major learnings while working through this project.

#### CSS grid
This project was the catalyst for me to spend a significant amount of time relearning the CSS grid at a more independent level. With the new knowledge, I was able to simplify my previous code and make the website look more like the design file.

Grid garden was the way I got introduce to learning CSS grid by playing a game with a storyline. Grid critters were one of the best resources I found that had the tutorial on how to use it, and challenges and practice that made me feel confident using CSS grid.  

#### Significant advantages for this project: 

- using grid-template instead of grid-template-rows, grid-template-columns, and grid-template-areas.

- Having a deeper understanding on how the grid works, what is capable of, and its limitation.
  Inspire me to change the layout from:
  - define white space vs justify, and align content 
  -  having a complex layout vs having a multi simple layout
  -  fr units only vs using multi-units when it makes sense for the layout
     -  min()
     -  minmax()
     -  min-content
     -  auto
     -  fr

Mobile Complex
```css
.stats {
   // layout
    display: grid;
    grid-template: min-content 4rem min-content 2rem min-content 4rem min-content 3rem / 2rem 1fr 2rem;
    grid-template-areas: 
        "header header header"
        ". . ."
        ". tittle ."
        ". . ."
        ". message ."
        ". . ."
        ". list ."
        ". . ."
    ;
}
```

Mobile simplify
```css
.stats {
   display: grid;
    grid-template:
        "header" auto
        // "header" auto
        "content" minmax(29.3rem, auto)
        / min(88%, 53.7rem)
    ;
    justify-content: center;
    align-content: center;
}
```
Desktop Complex
```css
.stats {
   grid-template:  8rem min-content 2rem min-content 4rem min-content clamp(1rem, 2vw, 5rem) / 7rem 1fr 10rem 2fr;
        grid-template-areas: 
            ". . . header"
            ". tittle . header"
            ". . . header"
            ". message . header"
            ". . . header"
            ". list . header"
            ". . . header"
        ;
        text-align: left;
        height: min-content;
        // height: (max-content);
        // max-height: 43.8rem;
        max-width: min(80%, 110rem);;
}
```

Desktop simplify
```css
.stats {
   grid-template:
        "content header " min-content
        /
        min(45vw, 61rem) 
        min(45vw, 61rem) 
    ;
}
```

#### Learn Background blend mode
I learned about the background-blend-mode property. It was useful for the image.
```scss
&__header-img{
  background-color: var(--color-violet);
  height: 44.5rem;        
  width: 54rem;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  background-image: url("../images/image-header-mobile.jpg");
  @media(min-width: $desktop){
      background-image: url("../images/image-header-desktop.jpg");
  }
}
```
#### emmet
I had such a great time with CSS gritters and I when ahead and play a emmet game. I already knew the basic starting this project, and that is how I wrote the html code but after finishing Sourcery (emmet game) I feel more confident with how to use and when to use emmet. Now I am more encline to use emmet to write a tag.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Grid Critters](https://mastery.games/gridcritters/) - A indebt way to learn CSS grid by playing a game. Very fun, the story is engaging, and I learn a lot.
- [Grid Garden](https://cssgridgarden.com/) - A great introduction of what CSS grid is capable of doing.
-  [Sourcery](https://codepip.com/games/sourcery/) - A quick and fun way to learn emmet by playing a short game. The tutorial works great and the challenges made me confident with emmet.
-  [A Complete Guide to Grid ](https://css-tricks.com/snippets/css/complete-guide-grid/) - A quick reference for when I need to look at a CSS grid property.


## Author

- Frontend Mentor - [@royeradames](https://www.frontendmentor.io/profile/royeradames)
- LinkedIn- [royer-adames](https://www.linkedin.com/in/royer-adames/)


