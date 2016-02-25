# Gimme!
### What is this?
Gimme is a responsive wishlist application using React and Node.js. In the future it will include a mobile application as well as a bookmarklet for easier adding of wishlist items from all over the web.

### What can it do?
Right now, not much. Over time I will be building and adding features including:
- Adding, removing, updating and deleting wishlist items
- Adding custom notes, images, and categories to wishlist items
- Ajax-based loading of data from a wishlist item's URL
- Price scraping from multiple online sites
- Shareable sublists
- Barcode or ISBN lookup of items
- Mobile applications to add items through a barcode scan
- Bookmarklet to scrape pages for items to add from all over the web
- Responsive design
- Customizeable themes for your wishlist

### Technologies used
Gimme uses a wide variety of technologies. The frontend is built with [React](https://github.com/facebook/react) and the backend uses [Express](https://github.com/expressjs/express). Wishlist items are saved in [MongoDB](https://github.com/mongodb/mongo) using [Mongoose](https://github.com/Automattic/mongoose).  The server and client are built and served with [Gulp](https://github.com/gulpjs/gulp).  More libraries and frmaeworks will be pulled in as needed for new features. See the package.json file for more information on which libraries will be installed.