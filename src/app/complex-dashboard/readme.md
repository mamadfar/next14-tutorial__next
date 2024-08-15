
# Parallel route
- To specify a parallel route or slot, we use `@folder` as a naming convention.
- Each slot is then passed as a prop to its corresponding `layout.tsx` file.
- With this approach, we can have error boundaries and loading for each slot.
- Also, we can have sub-navigation for each slot without affecting the other slots. This approach can help in this way that users can interact with the slot without having layout refreshes and calling the other slots unnecessarily.
- In the slot folders, we can create a regular route.
- In case of changing the route in one slot, the other slots will not be affected and they will remain unchanged.
- Also, in case of going to the page inside the slot and refresh the page, we will get a 404 error, because the slot is not aware of the main route and in this example, we have 3 unmatched slots. To fix this issue, we can add a `default.tsx` every slot except the one which has a page in the slot folder + for the main route (children).
- Basically, the `default.tsx` is a fallback component for those slots that don't have a parallel route (like the notifications and archive in this example).