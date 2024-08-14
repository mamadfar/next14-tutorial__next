
# Group routing
- To have a group route, simply we can use `()`, like `(auth)`, it will not consider as a part of the URL.
- We can use nested group routing as well.

# Layouts
- We can have a layout for a group of routes and even separate layout for a nested group of routes.
- All the states in the layouts will be preserved when we navigate between the routes in the same layout.

# Templates
- Templates are similar to Layouts, but they are not preserved when we navigate between the routes, by navigating to a different route, DOM will be re-rendered and recreated.
- Also, we can use both Layouts and Templates in the same application. Layouts will be rendered first and then the templates.
- Basically, templates will be rendered (as a children) inside the layouts.