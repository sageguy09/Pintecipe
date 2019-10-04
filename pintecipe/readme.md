### Pintecipe 
Pintecipe is a site that allows users to input recipes into a recipe collection. When a recipe is added to a collection, the recipe data is converted into a formatted to match recipe schmea and added to the database. 


users will be able to view and edit the details of their recipe 

With the recipe now in the users collecion, this will allow for easily adding the recipe to a recipe book 'page'. THe page's will be a set of templates that have been created that structure the recipe and related images into an easy to read recipe similar to a physical recipe book. 

Basic flow of working with recipes, pages, books

user adds recipe ingredients and recipe directions
    **ingredients:** 
        1 pound ground pork
        1 cup shredded green cabbage
        3 ounces shiitake mushrooms, diced
        2 cloves garlic, pressed
        2 green onions, thinly sliced
        1 tablespoon hoisin
        1 tablespoon freshly grated ginger
        2 teaspoons sesame oil
        1 teaspoon Sriracha*, or more, to taste
        1/4 teaspoon white pepper
        36 won ton wrappers
        2 tablespoons vegetable oil Soy sauce, for serving
    **directions**
        In a large bowl, combine pork, cabbage, mushrooms, garlic, green onions, hoisin, ginger, sesame oil, Sriracha and white pepper.
        To assemble the dumplings, place wrappers on a work surface. Spoon 1 tablespoon of the pork mixture into the center of each wrapper. Using your finger, rub the edges of the wrappers with water. Fold the dough over the filling to create a half-moon shape, pinching the edges to seal.
        Heat vegetable oil in a large skillet over medium heat. Add potstickers in a single layer and cook until golden and crisp, about 2-3 minutes per side.
        Serve immediately with soy sauce, if desired.

*recipe ingredients are returned in an array of objects:*
    [
        {
            "unit": "pound",
            "input": "1 pound ground pork",
            "name": "pork",
            "qty": "1",
            "comment": "ground"
        },
        ...
    ]







The eventual end goal will be to allow a user to link their profile to their pinterest account and pull in recipe boards/pins and add to their recipe collection within this web app. users will also be able to add a recipe back to a pinterest board if needed. 