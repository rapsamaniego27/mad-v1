<!-- Heading -->
# HTML Webpack

<!-- Description -->
This is my own **boilerplate** in making Front End Projects. I'm currently using **Laravel Mix** and **Webpack**. 

## Installation
```
npm install
```

## Running the Command
```
npm run watch
```
### Default structure
This boilerplate default setup uses the id `#wrapper` to wrap the `header` for the navigation, the `#main` which contains the content and `footer` for site additional info.

<!-- Markup -->
```HTML
<body>
  <!-- Row Wrapper -->
  <div id="wrapper">
    <header>
      <!--Navigation menu goes here  -->
    </header>

    <div id="main">
      <!--Dynamic Content goes here  -->
    </div>

    <footer>
    <!--Footer info goes here  -->
   </footer>
  </div>
  <!-- End Wrapper -->
</body>
```

I'm using flex to have a sticky footer at the bottom. 
Making `#wrapper` as the flex container, `#main` to have a flex 1 and `footer` to shrink.

If you're going to put a `navigation menu` make sure put it inside the wrapper followed by the `dynamic content`.

If you want to make some edits, you may find this in `4-layout/default-structure.scss`.



